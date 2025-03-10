const express = require("express");
const dotenv = require("dotenv"); //env hide use ke  liye
const cors = require("cors"); //security reason to connect the react
const mongoose = require("mongoose");
const bodyParser = require("body-parser");  //data read write convert js to json serve purphase
const http = require("http");
const { Server } = require("socket.io"); //to continue connect with mongoDb data
const mainRouter = require("./routes/main.router");




const yargs = require("yargs"); // to run command code used
const { hideBin } = require("yargs/helpers");  // destroy the blank space used in command line code

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");


dotenv.config(); //jo env main file hn usko process access karege isliye esko use kiye hn

yargs(hideBin(process.argv))
.command("start", "Starts a new server", {}, startServer) //To start a server
  .command("init", "Initialise a new repository", {}, initRepo)
  .command(
    "add <file>",
    "Add a file to the repository",
    (yargs) => {
      yargs.positional("file", {
        describe: "File to add to the staging area",
        type: "string",
      });
    },
    (argv) => {
      addRepo(argv.file); //all the arugument comming from our command
    }
  )
  .command(
    "commit <message>",
    "Commit the staged files",
    (yargs) => {
      yargs.positional("message", {
        describe: "Commit message",
        type: "string",
      });
    },
    (argv) => {
      commitRepo(argv.message);
    }
  )
  .command("push", "Push commits to S3", {}, pushRepo)
  .command("pull", "Pull commits from S3", {}, pullRepo)
  .command(
    "revert <commitID>",
    "Revert to a specific commit",
    (yargs) => {
      yargs.positional("commitID", {
        describe: "Comit ID to revert to",
        type: "string",
      });
    },
    (argv) => {
      revertRepo(argv.commitID);
    }
  )
  .demandCommand(1, "You need at least one command")
  .help().argv;

  function startServer() {
    const app = express();
    const port = process.env.PORT || 3000;
  
    app.use(bodyParser.json()); //json data format
    app.use(express.json()); //json used
  
    const mongoURI = process.env.MONGODB_URI;
  
    mongoose
      .connect(mongoURI)
      .then(() => console.log("MongoDB connected!"))
      .catch((err) => console.error("Unable to connect : ", err));
  
    app.use(cors({ origin: "*" })); //* is used any request allowd any origin
  
    app.use("/", mainRouter);

    let user = "test";
  const httpServer = http.createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("joinRoom", (userID) => { //trigger socket then login user came
      user = userID;
      console.log("=====");
      console.log(user);
      console.log("=====");
      socket.join(userID);
    });
  });

  const db = mongoose.connection;

  db.once("open", async () => { //if we connect one times monhgodb then automatically called all crud operations
    console.log("CRUD operations called");
    // CRUD operations
  });

  httpServer.listen(port, () => { //create the server and trigger it
    console.log(`Server is running on PORT ${port}`);
  });
}
  

  
