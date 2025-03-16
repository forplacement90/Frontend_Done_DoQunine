import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import axios from "axios";

function MyCustomDialog({ open, onClose }) {
  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const navigate = useNavigate();

  const handleIssueCreation = async () => {
    await axios.post("https://vereon.onrender.com/issue/create", {
      title: issueTitle,
      description: issueDescription,
    });

    navigate("/");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Create a New Issue</h2>
        <input
          type="text"
          placeholder="Issue Title"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
          value={issueTitle}
          onChange={(e) => setIssueTitle(e.target.value)}
        />
        <textarea
          placeholder="Describe the Issue"
          className="w-full p-2 border border-gray-300 rounded-md mb-3"
          rows="4"
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
        ></textarea>
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => onClose(null)}>Cancel</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleIssueCreation}>Submit</button>
        </div>
      </div>
    </div>
  );
}

function DemoContent() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center items-center mt-5">
      <button
        className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        onClick={() => setOpen(true)}
      >
        <FiPlusCircle className="text-xl mr-2" /> Open Issue Dialog
      </button>
      <MyCustomDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default function CustomDialogWithResult() {
  return <DemoContent />;
}
