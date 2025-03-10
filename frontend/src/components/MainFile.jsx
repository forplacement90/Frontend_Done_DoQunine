import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaGithub, FaSearch } from "react-icons/fa";
import UserDetail from "./UsernameDetails/UserDetail";

const MainFile = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchRepositories = async () => {
      try {
        const response = await fetch(`http://localhost:3002/repo/user/${userId}`);
        const data = await response.json();
        setRepositories(data.repositories);
      } catch (err) {
        console.error("Error fetching repositories:", err);
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

    // Load newly created repositories from local storage
    const storedRepos = JSON.parse(localStorage.getItem("userRepos")) || [];
    setRepositories((prev) => [...prev, ...storedRepos]);
    console.log(setRepositories);

    fetchRepositories();
    fetchSuggestedRepositories();
  }, []);

  const filteredRepos = searchQuery
    ? repositories.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : repositories;

  return (
    <div className="min-h-screen bg-blue-800 text-gray-800 font-bold p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 border-4">
      {/* Sidebar */}
      <aside className="bg-blue-400 p-4 rounded-lg col-span-1">
        <button className="flex items-center bg-blue-300 px-4 py-2 rounded-lg w-fit mb-4 shadow-md">
          <CgProfile className="mr-2" />
          <UserDetail />
        </button>

        <h2 className="text-xl font-bold mb-2 text-left">Suggested Repository</h2>

        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-3 text-white-400" />
          <input
            type="text"
            value={searchQuery}
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg text-white focus:outline-none focus:ring-2 shadow-md ring-1"
          />
        </div>

        <ul className="text-white-600">
          {suggestedRepositories.map((repo) => (
            <div key={repo._id}>
              <h4 className="w-full flex items-center text-center">{repo.name}</h4>
            </div>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="col-span-2">
        <h1 className="text-5xl font-bold mb-6 text-amber-100">Your Repositories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRepos.map((repo, index) => (
            <div key={index} className="bg-blue-300 p-4 rounded-lg shadow-md ring-2 transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              <h2 className="text-xl font-bold">{repo.name}</h2>
              <p className="text-white-900">{repo.description}</p>
              <a href="#" className="text-white underline mt-2 inline-block">
                VIEW REPOSITORY
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Upcoming Events */}
      <aside className="bg-blue-300 p-4 rounded-lg col-span-1">
        <h2 className="text-lg font-bold mb-4">Upcoming Events</h2>
        <div className="bg-blue-200 p-4 rounded-lg mb-4 hover:bg-indigo-500">Tech Conference - Dec 15</div>
        <div className="bg-blue-200 p-4 rounded-lg hover:bg-indigo-500 mb-4">Developer Meetup - Dec 25</div>
        <div className="bg-blue-200 p-4 rounded-lg hover:bg-indigo-500">Hackathon - Jan 5</div>
      </aside>
    </div>
  );
};

export default MainFile;
