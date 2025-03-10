const fs = require("fs").promises; //create a hidden file in packet.json and other thing
const path = require("path");  // currently work path


async function initRepo(){
    const repoPath = path.resolve(process.cwd(), ".s3Git"); //repostrory used
  const commitsPath = path.join(repoPath, "commits"); 

  try {
    await fs.mkdir(repoPath, { recursive: true }); // one floder is done and also make another floder with them
    await fs.mkdir(commitsPath, { recursive: true }); // one floder is done and also make another floder with them
    await fs.writeFile(
      path.join(repoPath, "config.json"), // craete config.json file
      JSON.stringify({ bucket: process.env.S3_BUCKET })
    ); // last things happen
    console.log("Repository initialised!");
  } catch (err) {
    console.error("Error initialising repository", err);
  }
}


module.exports={initRepo};