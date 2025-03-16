const fs = require("fs").promises;
const path = require("path");
const { s3, S3_BUCKET } = require("../config/aws-config");

async function pushRepo() {
  const repoPath = path.resolve(process.cwd(), ".s3Git");
  const commitsPath = path.join(repoPath, "commits");

  try {
    const commitDirs = await fs.promises.readdir(commitsPath);
    const contentIds = []

    for (const commitDir of commitDirs) {
        const commitPath = path.join(commitsPath, commitDir);
        const files = await fs.promises.readdir(commitPath);
        for (const file of files) {
            const filePath = path.join(commitPath, file);
            const fileContent = await fs.promises.readFile(filePath);
            const fileStats = await fs.promises.stat(filePath);

            const s3Key = `commits/${commitDir}/${file}`
            const params = {
                Bucket: S3_BUCKET,
                Key: s3Key,
                Body: fileContent
            }
            await s3.upload(params).promise();

            const content = await Content.create({
                filename: file,
                repoId: repoId,
                filepath: s3Key,
                fileType: path.extname(file),
                fileSize: fileStats.size,
                createdAt: new Date(),
            });

            contentIds.push(content._id);

            console.log("Result : ", content);
        }
    }

    await Repository.findByIdAndUpdate(repoId, {
        $push: { content: { $each: contentIds } }
    }).populate("content");

    console.log("All commits pushed to S3 and linked to repository in MongoDB");

} catch (err) {
    console.error("Error pushing to S3 : ", err);
}
}

module.exports = { pushRepo };