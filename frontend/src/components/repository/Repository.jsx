import { useState, useEffect } from "react";
import { FaGlobe, FaLock } from "react-icons/fa";
import SubComponent from "../SubComponent";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Repository = () => {
  const [visibility, setVisibility] = useState(true);
  const [addReadme, setAddReadme] = useState(false);
  
  const [owner, setOwner] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  // Fetch userId from localStorage when component mounts
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setOwner(userId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, description, visibility, owner, addReadme);

    try {
      const response = await axios.post("http://localhost:3002/repo/create", {
        name,
        description,
        visibility,
        owner
      });

      console.log(response);
      if (response.status === 201) {
        setName("");
        setDescription("");
        setVisibility(true);
        setAddReadme(false);

        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert("Repository Creation Failed!");
    }
  };

  return (
    <>
    <div className="bg-white text-black min-h-screen mt-12 ">
      <SubComponent />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-3 text-center sm:text-left mt-10">
          Create a new Repository
        </h1>
        <p className="text-sm mb-4 text-center sm:text-left">
          A repository contains all project files, including the revision history.
        </p>
        <hr className="border-gray-600 mb-4 ring-1" />
        <p className="text-sm mb-2">Required fields are marked with an asterisk (*).</p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Owner *</label>
                <input
                  type="text"
                  name="owner"
                  id="owner"
                  value={owner}
                  disabled // Makes the field non-editable
                  className="w-full p-2 mt-2 bg-gray-200  rounded-md text-gray-900 ring cursor-not-allowed"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Repository Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Repository name"
                  id="name"
                  required
                  className="w-full p-2 mt-2 bg-gray-200  rounded-md text-gray-900 ring"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Description (optional)</label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                id="description"
                className="w-full p-2 mt-2 bg-gray-200  rounded-md text-gray-950 ring"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="p-4 bg-gray-100 rounded-lg shadow-md ring  border-black">
              <h2 className="text-lg font-bold mb-3 text-gray-900">Select Repository Visibility</h2>

              <label className={`flex items-center space-x-2 cursor-pointer p-2 rounded-md border-2 ${visibility === true ? "border-green-500 bg-green-100" : "border-transparent"} hover:border-green-500 transition`}>
                <input
                  type="radio"
                  name="visibility"
                  checked={visibility === true}
                  onChange={() => setVisibility(true)}
                  className="hidden"
                />
                <FaGlobe className="text-gray-900 text-xl" />
                <span className="text-lg text-gray-950">Public - Anyone can see this repository.</span>
              </label>

              <label className={`flex items-center space-x-2 cursor-pointer p-2 rounded-md border-2 ${visibility === false ? "border-red-500 bg-red-100" : "border-transparent"} hover:border-red-500 transition mt-2`}>
                <input
                  type="radio"
                  name="visibility"
                  checked={visibility === false}
                  onChange={() => setVisibility(false)}
                  className="hidden"
                />
                <FaLock className="text-gray-900 text-xl" />
                <span className="text-lg text-gray-950">Private - You control access.</span>
              </label>
            </div>

            <div className="p-4 bg-gray-200 rounded-lg shadow-md ring border-black">
              <h2 className="text-lg font-semibold mb-3 text-gray-950">Initialize this repository with:</h2>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="w-4 h-4 accent-blue-200"
                  checked={addReadme}
                  onChange={() => setAddReadme(!addReadme)}
                />
                <span className="text-sm text-gray-950">Add a README file</span>
              </label>
            </div>

            <button type="submit" className="w-50 mt-5 bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded-md transition mb-10">
              Create repository
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Repository;
