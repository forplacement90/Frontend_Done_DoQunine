import React from "react";
import Homedashboard from "./Homedashboard";
import Trending from "./Trending";
import Repository from "./Repository";

function MainFile() {
  return (
    <div className="flex justify-center p-4">
      {/* Main container with flexbox */}
      <div className="flex w-full max-w-7xl gap-4">
        {/* Repository Section */}
        <div className="w-1/4 bg-black  rounded-lg shadow-md w-100 mt-3 ">
          <Repository />
        </div>

        {/* Homedashboard Section (Main Content) */}
        <div className="w-2/4 bg-dark p-4 rounded-lg shadow-md ">
          <Homedashboard />
        </div>

        {/* Trending Section */}
        <div className="w-1/4 bg-black p-4 rounded-lg shadow-md mt-3 w-130 ml-6">
          <Trending />
        </div>
      </div>
    </div>
  );
}

export default MainFile;
