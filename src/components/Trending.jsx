import { FaStar } from "react-icons/fa";

const repositories = [
  {
    name: "hedge-dev/XenonRecomp",
    description: "A tool for recompiling Xbox 360 games to native executables.",
    language: "C++",
    stars: "3k",
    color: "text-pink-500"
  },
  {
    name: "coleam00/Archon",
    description: "Archon is an AI agent that can create other AI agents using an advanced agentic coding workflow.",
    language: "Python",
    stars: "1.1k",
    color: "text-blue-400"
  },
  {
    name: "arshdeepsingh2267/Gofood",
    description: "Mern App",
    language: "JavaScript",
    stars: "71",
    color: "text-yellow-400"
  },
  {
    name: "octocat/Hello-World",
    description: "A simple repository to learn Git and GitHub.",
    language: "JavaScript",
    stars: "5k",
    color: "text-yellow-400"
  },
  {
    name: "torvalds/linux",
    description: "Linux kernel source tree.",
    language: "C",
    stars: "150k",
    color: "text-red-500"
  },
  {
    name: "facebook/react",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    language: "JavaScript",
    stars: "200k",
    color: "text-yellow-400"
  },
  {
    name: "tensorflow/tensorflow",
    description: "An Open Source Machine Learning Framework for Everyone.",
    language: "Python",
    stars: "180k",
    color: "text-blue-400"
  },
  {
    name: "microsoft/vscode",
    description: "Visual Studio Code - Open Source Code Editor.",
    language: "TypeScript",
    stars: "140k",
    color: "text-blue-500"
  },
  {
    name: "apple/swift",
    description: "The Swift Programming Language.",
    language: "Swift",
    stars: "65k",
    color: "text-orange-500"
  },
  {
    name: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    stars: "80k",
    color: "text-blue-400"
  }
];

export default function Trending() {
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold text-white mb-4">Trending repositories</h2>
      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4">
        {repositories.map((repo, index) => (
          <div key={index} className="border border-gray-700 p-4 rounded-lg bg-gray-900">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <span>{repo.name}</span>
              <button className="ml-auto flex items-center gap-1 px-2 py-1 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700">
                <FaStar /> Star
              </button>
            </h3>
            <p className="text-gray-400 mt-1">{repo.description}</p>
            <div className="mt-2 flex items-center gap-2 text-gray-300">
              <span className={repo.color}>● {repo.language}</span>
              <span>⭐ {repo.stars}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}