import React from "react";
import { FaFolder, FaFileAlt, FaBookOpen, FaSearch } from "react-icons/fa";
import SubComponent from "../SubComponent";
import Footer from "../Footer";

const files = [
  { name: "public/CSS", type: "folder" },
  { name: "views", type: "folder" },
  { name: "app.js", type: "file" },
  { name: "package-lock.json", type: "file" },
  { name: "package.json", type: "file" },
];

export default function ViewRepo() {
  return (
    <>
    <SubComponent/>
    <div className="min-h-screen bg-white text-white p-6 mt-15">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-blue-700 pb-4 mb-4">
        <h1 className="text-lg font-bold"></h1>
        <div className="flex items-center gap-4">
          <span className="text-sm">1 Branch | 0 Tags</span>
          <div className="relative">
            <FaSearch className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Go to file"
              className="pl-8 pr-2 py-1 bg-gray-600 text-sm rounded-md focus:outline-none"
            />
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">Add file</button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md">Code ▼</button>
        </div>
      </div>

      {/* File List */}
      <div className="bg-blue-300 text-black p-4 rounded-md mb-4">
        {files.map((file, index) => (
          <div key={index} className="flex items-center gap-2 p-2 border-b border-gray-700">
            {file.type === "folder" ? <FaFolder className="text-yellow-400" /> : <FaFileAlt className="text-blue-400" />}
            <span>{file.name}</span>
            <span className="ml-auto text-sm text-gray-900">last month</span>
          </div>
        ))}
      </div>

      {/* README Section */}
      <div className="bg-blue-600 p-6 rounded-md text-center mt-15">
        <FaBookOpen className="mx-auto w-12 h-12 text-gray-400" />
        <h2 className="text-lg font-semibold mt-2">Add a README</h2>
        <p className="text-sm text-gray-400 mt-1">Help people interested in this repository understand your project.</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md mt-4">Add a README</button>
      </div>
    </div>
    <Footer/>
    </>
  );
}