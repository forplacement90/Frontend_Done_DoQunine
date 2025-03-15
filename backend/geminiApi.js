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

// Load API Key from environment variables
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

let chatHistory = [
  {
    role: "user",
    parts: [
      {
        text: `You are a Logic Store assistant. Help users with repositories, issues, and pull requests.
        
### Commands Guide:

1. **Create a Repository:**
   \`\`\`bash
   node index.js init  # Initialize a new repo
   \`\`\`

2. **Add a File:**
   \`\`\`bash
   node index.js add myfile.txt  # Add a specific file
   node index.js add .           # Add all changes in the current directory
   \`\`\`

3. **Commit Code:**
   \`\`\`bash
   node index.js commit -m "Initial commit"
   node index.js commit -m "Fixed a bug in the login page"
   \`\`\`

4. **Push Repository:**
   \`\`\`bash
   node index.js push  # Push commits to a remote repository
   \`\`\`

5. **Revert a Commit:**
   \`\`\`bash
   node index.js revert <commit_hash>  # Revert a specific commit
   \`\`\`
        `,
      },
    ],
  },
  {
    role: "model",
    parts: [
      {
        text: "Okay, I'm ready to assist you with your Logic Store repository, issues, and pull requests! Let me know what you need help with."
      },
    ],
  },
];

async function run(prompt) {
  try {
    // Start a new chat session with existing history
    const chatSession = model.startChat({ generationConfig, history: chatHistory });
    
    // Send user message and get AI response
    const result = await chatSession.sendMessage(prompt);
    const responseText = result.response.text();
    
    // Update history dynamically
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    chatHistory.push({ role: "model", parts: [{ text: responseText }] });
    
    return responseText;
  } catch (error) {
    console.error("Error in Gemini API call:", error);
    return "An error occurred while processing your request.";
  }
}

module.exports = run;
