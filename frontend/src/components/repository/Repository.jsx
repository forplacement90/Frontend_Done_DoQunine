import { useState } from "react";
import { FaGlobe, FaLock } from "react-icons/fa";
import SubComponent from "../SubComponent";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Repository = () => {
  const [visibility, setVisibility] = useState("public");
  const [addReadme, setAddReadme] = useState(false);
  const [user, setUser] = useState({
    owner: "",
    name: "",
    description: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!user.owner.trim() || !user.name.trim()) {
      setError("Owner and Repository Name are required!");
      return;
    }

    console.log("Sending request with:", {
      owner: user.owner,
      name: user.name,
      description: user.description,
      visibility,
      addReadme,
      issues: [],
      content: "",
    });

    try {
      const response = await axios.post("http://localhost:3002/repo/create", {
        owner: user.owner,
        name: user.name,
        description: user.description,
        visibility,
        addReadme,
        issues: [],
        content: "",
      });

      if (response.status === 201) {
        setUser({ owner: "", name: "", description: "" });
        setVisibility("true");
        setAddReadme(false);
        navigate("/");
      }
    } catch (err) {
      console.error("Request failed:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Repository Creation Failed!");
    }
  };

  return (
    <div className="bg-blue-400 text-white min-h-screen mt-12 mb-3">
      <SubComponent />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-3 text-center sm:text-left mt-10">
          Create a new Repository
        </h1>
        <p className="text-sm mb-4 text-center sm:text-left">
          A repository contains all project files, including the revision history.
        </p>
        <hr className="border-gray-600 mb-4 ring-2" />
        <p className="text-sm mb-2">Required fields are marked with an asterisk (*).</p>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Owner *</label>
                <input
                  type="text"
                  name="owner"
                  placeholder="Owner"
                  required
                  className="w-full p-2 mt-2 bg-blue-200 border rounded-md text-gray-900 ring-2"
                  value={user.owner}
                  onChange={handleInput}
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Repository Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Repository name"
                  required
                  className="w-full p-2 mt-2 bg-blue-200 border rounded-md text-gray-900 ring-2"
                  value={user.name}
                  onChange={handleInput}
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
                className="w-full p-2 mt-2 bg-blue-200 border rounded-md text-gray-900 ring-2"
                value={user.description}
                onChange={handleInput}
                autoComplete="off"
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

              <label className={`flex items-center space-x-2 cursor-pointer p-2 rounded-md border-2 ${visibility === "private" ? "border-red-500 bg-red-100" : "border-transparent"} hover:border-red-500 transition mt-2`}>
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

            <button type="submit" className="w-50 mt-5 bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded-md transition mb-10">
              Create repository
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Repository;
