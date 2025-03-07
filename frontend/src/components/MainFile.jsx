import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaGithub, FaSearch } from "react-icons/fa";

const repositories = [
  { name: "React", description: "A declarative JavaScript library for building UIs." },
  { name: "Vue.js", description: "The Progressive JavaScript Framework." },
  { name: "Angular", description: "One framework. Mobile & desktop." },
  { name: "Django", description: "A high-level Python Web framework for rapid development." },
  { name: "Flask", description: "A lightweight WSGI web application framework." },
  { name: "Express", description: "Fast, unopinionated, minimalist web framework for Node.js." },
  { name: "Laravel", description: "PHP framework for web artisans." },
];

const MainFile = () => {
  return (
    <div className="min-h-screen bg-blue-800 text-gray-800 font-bold p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 border-4">
      {/* Sidebar Section */}
      
      <aside className="bg-blue-400 p-4 rounded-lg col-span-1">
      
      <button className="flex items-center bg-blue-300 px-4 py-2 rounded-lg w-fit mb-4 shadow-md ">
        <CgProfile className="mr-2 " /> Test User
      </button>

      {/* Recent Heading - Left Aligned */}
      <h2 className="text-xl font-bold mb-2 text-left">Recent</h2>

      {/* Search Input Field with Shadow */}
      <div className="relative mb-4">
        <FaSearch className="absolute left-3 top-3 text-white-400" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-full rounded-lg   text-white focus:outline-none focus:ring-2  shadow-md ring-1"
        />
      </div>

      {/* Repositories List */}
      <ul className="text-white-600 ">
        {repositories.map((repo, index) => (
          <li key={index} className="mb-2">{repo.name}</li>
        ))}
      </ul>
    </aside>
      
      {/* Main Content Section */}
      <main className="col-span-2 " >
        <h1 className="text-5xl font-bold mb-6 text-amber-100">Home</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {repositories.map((repo, index) => (
            <div key={index} className="bg-blue-300 p-4 rounded-lg shadow-md ring-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
              <h2 className="text-xl font-bold">{repo.name}</h2>
              <p className="text-white-900">{repo.description}</p>
              <a href="#" className="text-white underline mt-2 inline-block">
                VIEW REPOSITORY
              </a>
            </div>
          ))}
        </div>
      </main>
      
      {/* Trending Section */}
      <aside className="bg-blue-300 p-4 rounded-lg col-span-1">
        <h2 className="text-lg font-bold mb-4">LogicStore Trending</h2>
        <div className="bg-blue-200 p-4 rounded-lg mb-4 ring-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">VIEW TRENDING</div>
        <div className="bg-blue-200 p-4 rounded-lg ring-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">VIEW TRENDING</div>
      </aside>
    </div>
  );
};

export default MainFile;
