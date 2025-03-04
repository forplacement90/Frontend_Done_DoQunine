import React from "react";
import { IoMdTrendingUp } from "react-icons/io";

const repositories = [
  { name: "Ecommerce_Website", owner: "forplacement90" },
  { name: "GitHub_Frontend", owner: "forplacement90" },
  { name: "Blog_website", owner: "forplacement90" },
  { name: "Github", owner: "forplacement90" },
];

function Repository() {
  return (
    <div className="bg-black text-white p-4 rounded-lg w-fit ">
      <h2 className="text-3xl font-bold text-white "> <IoMdTrendingUp/> Trending repositories</h2>
        <hr className="mb-3 mt-3"/>
      {repositories.map((repo, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <img 
            src="https://tse4.mm.bing.net/th?id=OIP.6zDy4uIaBILsnIE5J4sReAHaEK&pid=Api&P=0&h=220" // GitHub icon
            alt="Repo Icon"
            className="w-6 h-6 rounded-full"
          />
          <p className="text-lg">
            {repo.owner}/<span className="font-bold">{repo.name}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Repository;
