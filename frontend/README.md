# 🚀 LogicStore — Your Personal Code Vault Like GitHub

![LogicStore Banner](https://your-image-url.com/banner.png)

> “Store your logic. Share your vision.” — *LogicStore*

**LogicStore** is a full-stack GitHub-inspired code management platform built for developers, by developers.  
Whether you're an open source contributor, solo dev, or just exploring code hosting – LogicStore lets you create, manage, and showcase your repositories in style.

---

## 🎬 Demo
### click the image to watch a viedo
[![Watch the Demo](./src/assets/Screenshot%202025-04-08%20121846.png)](./src/assets/WhatsApp%20Video%202025-04-08%20at%2012.37.36_a47a3676.mp4)

---

## 📸 Screenshots

| Home Page | Repository Page | Profile Page |
|-----------|------------------|---------------|
| ![Home](./src/assets/Screenshot%202025-04-08%20121846.png) | ![Repo](./src/assets/Screenshot%202025-04-08%20121904.png) | ![Profile](./src/assets/Screenshot%202025-04-08%20121943.png) |

---

## ✨ Features

### 👥 User System
- 🔐 Sign up / Login / Logout with JWT auth (access + refresh tokens)
- 🧑 Profile pages with bio, pinned repositories & activity timeline

### 📁 Repository Management
- 📦 Create/update/delete repositories
- 📝 Add README files with Markdown preview
- 📁 Upload files & folders
- 🧾 View commits, branches & metadata

### 🔍 Explore & Interact
- 🔎 Search users and repositories
- 🤝 Follow other developers
- 💬 Comment & discuss on repos

### 💻 Coding & Editor
- 🧠 In-browser code editor with syntax highlighting
- 📄 Real-time markdown preview
- 📊 GitHub-style contribution graph
- ⭐ Star and 📌 pin repos

### 🤖 Smart Tools (Coming Soon)
- AI-powered README.md writer (OpenAI/GPT-based)
- Code summarizer for large files
- Auto test-case generator for functions (JS/Python)

### 🎨 UI/UX
- ⚡ Smooth and responsive design
- 🌗 Dark & Light modes
- 🎞️ Animations using Framer Motion
- 🔄 Realtime status feedback and toasts

---

## 🧰 Tech Stack

### 🌐 Frontend
- React.js
- Tailwind CSS
- React Router
- Axios
- ShadCN UI
- Framer Motion

### 🔙 Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT (Access + Refresh Tokens)
- Gemini API
- AWS (for media/image storage)

### ⚙️ Dev Tools
- Git + GitHub
- Postman (API testing)
- VS Code
- dotenv (for environment configs)

---

## 📁 Folder Structure
logicstore/ │ ├── client/ # Frontend (React) │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── utils/ │ │ └── App.jsx │ └── tailwind.config.js │ ├── server/ # Backend (Node + Express) │ ├── controllers/ │ ├── models/ │ ├── routes/ │ ├── middleware/ │ └── index.js │ ├── .env ├── README.md └── package.json



---

## .env Structure
```bash
MONGODB_URI=your_url
PORT=3002

JWT_SECRET_KEY=mysecretkey
GEMINI_API_KEY=your_API



## ⚙️ Installation & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/logicstore.git
cd logicstore








