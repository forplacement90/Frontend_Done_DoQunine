import { useState } from "react";
import { FaGlobe, FaLock } from "react-icons/fa";
import SubComponent from "../SubComponent";
import Footer from "../Footer";

const Repository = () => {
  const [visibility, setVisibility] = useState("public");
  const [addReadme, setAddReadme] = useState(false);
  
  const [owner, setOwner] = useState("");
  const [repoName, setRepoName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!owner.trim()) newErrors.owner = "Owner is required";
    if (!repoName.trim()) newErrors.repoName = "Repository name is required";
    else if (!/^[a-zA-Z0-9-_]+$/.test(repoName)) newErrors.repoName = "Invalid repository name";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Repository Created Successfully!");
    }
  };

  return (
    <>
    <div className="bg-blue-400 text-white min-h-screen mt-12 ">
      <SubComponent />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-3 text-center sm:text-left mt-10">Create a new Repository</h1>
        <p className="text-sm mb-4 text-center sm:text-left">
          A repository contains all project files, including the revision history.
        </p>
        <hr className="border-gray-600 mb-4 ring-2" />
        <p className="text-sm mb-2">Required fields are marked with an asterisk (*).</p>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Owner *</label>
              <input
                type="text"
                placeholder="Owner"
                className="w-full p-2 mt-2 bg-blue-200 border rounded-md text-gray-900 ring-2"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
              />
              {errors.owner && <p className="text-red-700 text-md font-bold">{errors.owner}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Repository Name *</label>
              <input
                type="text"
                placeholder="Repository name"
                className="w-full p-2 mt-2 bg-blue-200 border rounded-md text-gray-900 ring-2"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
              />
              {errors.repoName && <p className="text-red-700 text-md font-bold">{errors.repoName}</p>}
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Description (optional)</label>
            <input
              type="text"
              placeholder="Description"
              className="w-full p-2 mt-2 bg-blue-200 border rounded-md text-gray-900 ring-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="p-4 bg-blue-200 rounded-lg shadow-md border-3 border-black">
  <h2 className="text-lg font-bold mb-3 text-gray-900">Select Repository Visibility</h2>
  
  <label className={`flex items-center space-x-2 cursor-pointer p-2 rounded-md border-2 ${visibility === "public" ? "border-green-500 bg-green-100" : "border-transparent"} hover:border-green-500 transition`}>
    <input
      type="radio"
      name="visibility"
      checked={visibility === "public"}
      onChange={() => setVisibility("public")}
      className="hidden"
    />
    <FaGlobe className="text-gray-900 text-xl" />
    <span className="text-lg text-gray-950">Public - Anyone can see this repository.</span>
  </label>

  <label className={`flex items-center space-x-2 cursor-pointer p-2 rounded-md border-2 ${visibility === "private" ? "border-green-500 bg-green-100" : "border-transparent"} hover:border-green-500 transition mt-2`}>
    <input
      type="radio"
      name="visibility"
      checked={visibility === "private"}
      onChange={() => setVisibility("private")}
      className="hidden"
    />
    <FaLock className="text-gray-900 text-xl" />
    <span className="text-lg text-gray-950">Private - You control access.</span>
  </label>
</div>


          <div className="p-4 bg-blue-200 rounded-lg shadow-md border-2 border-black">
            <h2 className="text-lg font-semibold mb-3 text-gray-950">Initialize this repository with:</h2>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-200"
                checked={addReadme}
                onChange={() => setAddReadme(!addReadme)}
              />
              <span className="text-sm text-gray-950">Add a README file</span>
            </label>
          </div>

          <button onClick={handleSubmit} className="w-50 mt-5 bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded-md transition mb-10">
            Create repository
          </button>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default Repository;
