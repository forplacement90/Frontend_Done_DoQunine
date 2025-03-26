
import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import UserDetail from "./UsernameDetails/UserDetail";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const MainFile = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedRepoId, setSelectedRepoId] = useState(null);

  // Edit Modal States
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editRepoId, setEditRepoId] = useState(null);
  const [repoName, setRepoName] = useState("");
  const [repoDescription, setRepoDescription] = useState("");

useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/repo/user/${userId}`
        );
        const data = await response.json();
        setRepositories(data.repositories || []);
      } catch (err) {
        console.error("Error while fetching repositories: ", err);
      }
    };
   
  

  

    const fetchSuggestedRepositories = async () => {
      try {
        const response = await fetch(`http://localhost:3002/repo/all`);
        const data = await response.json();
        setSuggestedRepositories(data);
      } catch (err) {
        console.error("Error fetching suggested repositories:", err);
      }
    };

    fetchRepositories();
    fetchSuggestedRepositories();
  }, []);

  const handleOpenEditModal = (repo) => {
    setEditRepoId(repo._id);
    setRepoName(repo.name);
    setRepoDescription(repo.description);
    setOpenEditModal(true);
  };

  const confirmUpdateRepository = async () => {
    try {
        const response = await fetch(`http://localhost:3002/repo/update/${editRepoId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ description: repoDescription }),
        });

        const data = await response.json(); // ✅ Parse JSON response correctly

        if (!response.ok) {
            throw new Error(data.error || "Failed to update repository");
        }

        console.log("Update Response:", data);

        // ✅ Check the correct object structure
        if (!data.repository || !data.repository._id) {
            throw new Error("Invalid API Response: Repository data missing");
        }

        // ✅ Update state properly
        setRepositories((prevRepos) =>
            prevRepos.map((repo) =>
                repo._id === editRepoId ? { ...repo, description: repoDescription } : repo
            )
        );

        setOpenEditModal(false);
    } catch (err) {
        console.error("Error updating repository:", err.message);
        alert("Error updating repository: " + err.message);
    }
};

  const handleOpenDeleteModal = (repoId) => {
    setSelectedRepoId(repoId);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const confirmDeleteRepository = async () => {
    try {
      const response = await fetch(`http://localhost:3002/repo/delete/${selectedRepoId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setRepositories((prevRepos) => prevRepos.filter((repo) => repo._id !== selectedRepoId));
        setSuggestedRepositories((prevRepos) => prevRepos.filter((repo) => repo._id !== selectedRepoId));
        handleCloseDeleteModal();
      } else {
        alert("Error deleting repository.");
      }
    } catch (err) {
      console.error("Error deleting repository:", err);
    }
  };

  const filteredRepos = searchQuery
    ? repositories.filter((repo) => repo.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : repositories;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 grid grid-cols-4 gap-6 ">
   <aside className="bg-white p-6 rounded-lg shadow-md col-span-1">    
    <button className="flex items-center bg-gray-200 px-4 py-2 rounded-lg mb-4">
          <CgProfile className="mr-2" />
          <UserDetail />
        </button>
        <h2 className="text-lg font-semi-bold mb-2 ">Suggested Repository</h2>
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300"
          />
        </div>
        <ul className="text-white-600">
        {suggestedRepositories.map((repo) => (
            <li key={repo._id} className="py-2 px-3 bg-gray-200 rounded-md mb-2">
              {repo.name}
            </li>
          ))}
        </ul>
      </aside>

      <main className="col-span-2 p-6 bg-gray-100 rounded-lg shadow">
  <h1 className="text-2xl font-bold mb-6 text-gray-800 underline">Your Repositories</h1>
  <div className="grid gap-4">
    {filteredRepos.map((repo) => (
      <div
        key={repo._id}
        className="bg-white p-4 rounded-lg shadow-xl flex justify-between items-center border border-gray-200"
      >
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900">{repo.name}</h2>
          <p className="text-gray-600 text-sm">{repo.description}</p>
          <a
            href={`/viewRepository/${repo._id}`}
            className="text-blue-600 hover:text-blue-800 hover:underline font-medium mt-2 inline-block"
          >
            View Repository
          </a>
        </div>

        <div className="flex gap-3">
  <Button
    className="!text-[#217ad3] !px-3 !py-1.5 rounded-lg flex items-center gap-1 !border-none "
    onClick={() => handleOpenEditModal(repo)}
    variant="outlined"
    startIcon={<EditIcon className="text-[#217ad3]" />}
  >
    Edit
  </Button>

  <Button
    className="!text-[#217ad3] !px-3 !py-1.5 rounded-lg flex items-center gap-1 !border-none"
    onClick={() => handleOpenDeleteModal(repo._id)}
    variant="outlined"
    startIcon={<DeleteIcon className="text-[#217ad3]" />}
  >
    Delete
  </Button>
</div>

      </div>
    ))}
  </div>
</main>


      <aside className="bg-white p-6 rounded-lg shadow-md col-span-1">
        <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
        <div className="p-3 bg-gray-200 rounded-md mb-2">Tech Conference - Dec 15</div>
       <div className="p-3 bg-gray-200 rounded-md mb-2">Developer Meetup - Dec 25</div>
       <div className="p-3 bg-gray-200 rounded-md mb-2">Hackathon - Jan 5</div>
    </aside>

      <Dialog open={openDeleteModal} onClose={handleCloseDeleteModal}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this repository?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={confirmDeleteRepository} color="error">
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEditModal} onClose={handleCloseEditModal}>
        <DialogTitle>Edit Repository</DialogTitle>
        <DialogContent>
          <TextField label="Repository Name" fullWidth value={repoName} onChange={(e) => setRepoName(e.target.value)} margin="dense" disabled />
          <TextField label="Description" fullWidth multiline rows={3} value={repoDescription} onChange={(e) => setRepoDescription(e.target.value)} margin="dense" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={confirmUpdateRepository} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MainFile;
