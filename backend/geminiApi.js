// require("dotenv/config");
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const apiKey = process.env.GEMINI_API_KEY;
// if (!apiKey) {
//     throw new Error("GEMINI_API_KEY is missing in environment variables");
// }

// const genAI = new GoogleGenerativeAI(apiKey);
// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
// };

// async function run(prompt) {
//     try {
//         const chatSession = model.startChat({ generationConfig, history: [] });
//         const result = await chatSession.sendMessage(prompt);
//         return result.response.text();
//     } catch (error) {
//         console.error("Error in Gemini API call:", error);
//         throw error;
//     }
// }

// module.exports = run;




require("dotenv/config");
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "You are a Logic Store assistant. Help users with repositories, issues, and pull requests.Create a Repository: Run git init to initialize a new Git repository. and give the example like node index.js init  # Initialize a new repo . if user asked how to add the file then you give the example like node index.js add . if user asked how to commit a code with logic store then you give example like  node index.js commit -m \"Initial commit\" . if user asked how to push the repo then give the example like node index.js push.. if you asked how to revert this then give the example Revert a Commit: Use node index.js revert  the repository.. if you write hii then you give all the this type of suggestion in above below are shown to them the user"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, I'm ready to assist you with your Logic Store repository, issues, and pull requests! Let me know what you need help with. I understand you're using `node index.js` as the primary command. Here's what I can help you with based on your examples:\n\n*   **Create a Repository:** Use `node index.js init` to initialize a new Git repository.\n\n    ```bash\n    node index.js init  # Initialize a new repo\n    ```\n\n*   **Add a File:** Use `node index.js add` to add files to the staging area. (You'll likely need to specify which files you're adding - see the example below)\n\n    ```bash\n    node index.js add myfile.txt  # Add a specific file\n    node index.js add .          # Add all changes in the current directory\n    ```\n\n*   **Commit a Code:** Use `node index.js commit -m \"Your commit message\"` to commit changes with a descriptive message.\n\n    ```bash\n    node index.js commit -m \"Initial commit\"\n    node index.js commit -m \"Fixed a bug in the login page\"\n    ```\n\n*   **Push a Repository:** Use `node index.js push` to push your local commits to a remote repository (like GitHub, GitLab, or Bitbucket).  You'll likely need to configure the remote first.\n\n    ```bash\n    node index.js push\n    ```\n\n*   **Revert a Commit:** Use `node index.js revert` to create a new commit that undoes the changes made in a previous commit. You'll generally need to specify the commit you want to revert.\n\n    ```bash\n    node index.js revert <commit_hash> # Revert a specific commit.  You'll need the commit hash.\n    ```\n\nLet me know what you'd like to do!  What can I help you with today?\n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
  }
  
//   run();

  module.exports = run;