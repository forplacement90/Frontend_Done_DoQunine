import React from "react";
import Navbar from "./Navbar";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div
      className={`w-full transition-all duration-300 ${
        sidebarToggle ? "ml-64" : "ml-0"
      }`}
    >
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <div className="flex items-center justify-center mt-4 mb-4 ">
  <div className="text-center ">
    <h1 className="text-5xl font-bold md:text-5xl lg:text-5xl xl:text-5xl gradient-title animate-gradient">
      Create issues to track bugs and tasks. 🌍💡
    </h1>
    <br />
    <h2 className="text-3xl font-bold md:text-3xl lg:text-3xl xl:text-3xl gradient-title animate-gradient">Growing with Every Line of Code</h2>
  </div>
</div>

    </div>
  );
};

export default Dashboard;
