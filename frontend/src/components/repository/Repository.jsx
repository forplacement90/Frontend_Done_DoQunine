import { useState } from "react";
import { FaGlobe, FaLock } from "react-icons/fa";
import SubComponent from "../SubComponent";
import Footer from "../Footer";

const Repository = () => {
  const [visibility, setVisibility] = useState("public");
  const [addReadme, setAddReadme] = useState(false);
  const [gitignore, setGitignore] = useState("None");
  const [license, setLicense] = useState("None");

  return (
    <div className="bg-blue-700 text-white min-h-screen  mt-17">
      <SubComponent />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-3 text-center sm:text-left">Create a new Repository</h1>
        <p className="text-sm mb-4 text-center sm:text-left">
          A repository contains all project files, including the revision history.
        </p>
        <hr className="border-gray-600 mb-4 ring-2" />
        <p className="text-sm mb-2">Required fields are marked with an asterisk (*).</p>

        <div className="space-y-4">
          {/* Owner and Repository Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="owner" className="text-sm font-medium">Owner</label>
              <input
                type="text"
                id="owner"
                placeholder="Owner"
                className="w-full p-2 mt-2 bg-blue-200 border  rounded-md text-gray-900 ring-2"
              />
            </div>
            <div>
              <label htmlFor="repo" className="text-sm font-medium">Repository Name</label>
              <input
                type="text"
                id="repo"
                placeholder="Repository name"
                className="w-full p-2 mt-2 bg-blue-200 border  rounded-md text-gray-900 ring-2"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="text-sm font-medium">Description (optional)</label>
            <input
              type="text"
              id="description"
              placeholder="Description"
              className="w-full p-2 mt-2 bg-blue-200 border  rounded-md text-gray-900 ring-2"
            />
          </div>

          <hr className="border-gray-600 mb-4" />

          {/* Repository Visibility */}
          <div className="p-4 bg-blue-800 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">Select Repository Visibility</h2>

            <div
              className={`flex items-center p-3 rounded-lg cursor-pointer transition hover:border-3 ring-emerald-600 ${visibility === "public" ? "bg-blue-200 border border-black-500" : "bg-blue-200"} `}
              onClick={() => setVisibility("public")}
            >
              <FaGlobe className="text-gray-900 text-xl mr-3 "  /> 
              <div>
                <p className="font-bold text-gray-950">Public</p>
                <p className="text-sm text-gray-900">
                  Anyone on the internet can see this repository.
                </p>
              </div>
            </div>

            <div
              className={`flex items-center p-3 rounded-lg mt-2 cursor-pointer transition  hover:border-4 ${visibility === "private" ? "bg-blue-200 border border-black-500" : "bg-blue-200"}`}
              onClick={() => setVisibility("private")}
            >
              <FaLock className="text-gray-950 text-xl mr-3" />
              <div>
                <p className="font-bold text-gray-950">Private</p>
                <p className="text-sm text-gray-900">
                  You choose who can see and commit to this repository.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-gray-600 mb-4" />

          {/* Initialize Repository */}
          <div className="p-4 bg-blue-800 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-3 ">Initialize this repository with:</h2>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-500"
                checked={addReadme}
                onChange={() => setAddReadme(!addReadme)}
              />
              <span className="text-sm ">Add a README file</span>
            </label>

            <div className="mt-4">
              <label className="text-sm ">Add .gitignore</label>
              <select
                className="block w-full p-2 mt-1 bg-blue-200 border border-black-600 rounded-md text-gray-900"
                value={gitignore}
                onChange={(e) => setGitignore(e.target.value)}
              >
                <option value="None">None</option>
                <option value="Node">Node</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="text-sm">Choose a license</label>
              <select
                className="block w-full p-2 mt-1 bg-blue-200 border border-black-600 rounded-md text-gray-900"
                value={license}
                onChange={(e) => setLicense(e.target.value)}
              >
                <option value="None">None</option>
                <option value="MIT">MIT</option>
                <option value="Apache 2.0">Apache 2.0</option>
                <option value="GPLv3">GPLv3</option>
              </select>
            </div>
          </div>

          <hr className="border-gray-600 mb-4" />

          <p className="text-sm">You are creating a public repository in your personal account.</p>
          <button className="w-50 mt-5 bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded-md transition mb-10">
            Create repository
          </button>
         
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Repository;