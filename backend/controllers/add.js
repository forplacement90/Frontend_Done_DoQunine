const fs = require("fs").promises;
const path = require("path");

async function addRepo(filePath) {
  const repoPath = path.resolve(process.cwd(), ".s3Git"); //find the repository like apna git
  const stagingPath = path.join(repoPath, "staging");

  try {
    await fs.mkdir(stagingPath, { recursive: true });
    const fileName = path.basename(filePath); //user give the path name (filename) and read the path name (path.baseline)
    await fs.copyFile(filePath, path.join(stagingPath, fileName)); //user path and copy path kaha banana hn wo wala path
    console.log(`File ${fileName} added to the staging area!`);
  } catch (err) {
    console.error("Error adding file : ", err);
  }
}

module.exports = { addRepo };