const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid"); //v4 means complex number of id like f5fe99et58phfg

async function commitRepo(message) {
  const repoPath = path.resolve(process.cwd(), ".s3Git");//current working directory
  const stagedPath = path.join(repoPath, "staging");
  const commitPath = path.join(repoPath, "commits");

  try {
    const commitID = uuidv4();
    const commitDir = path.join(commitPath, commitID);
    await fs.mkdir(commitDir, { recursive: true }); //nested folder struture

    const files = await fs.readdir(stagedPath);
    for (const file of files) {
      await fs.copyFile(
        path.join(stagedPath, file),
        path.join(commitDir, file)
      );
    }
//track the json file
    await fs.writeFile(
      path.join(commitDir, "commit.json"),
      JSON.stringify({ message, date: new Date().toISOString() })  //stringify is used to convery json file into java sctrip file
    );
//print ke liye
    console.log(`Commit ${commitID} created with message: ${message}`);
  } catch (err) {
    console.error("Error committing files : ", err);
  }
}

module.exports = { commitRepo };