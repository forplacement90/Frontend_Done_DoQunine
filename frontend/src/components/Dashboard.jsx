
import React, { useState } from "react";

import MainFile from "./MainFile";
import Footer from "./Footer";
import { Navbar, Sidebar } from "./Navbar";





const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  
  return (
    <>
   <div className="flex">
      {/* Navbar */}
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />

      {/* Sidebar */}
      <Sidebar sidebarToggle={sidebarToggle} />

     
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center mt-12 " >
    <div className="text-center bg-white bg-opacity-90 p-10 rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold md:text-4xl lg:text-4xl xl:text-5xl gradient-title animate-gradient mt-5">
            Build Your Next Big Idea 🚀💡
        </h1>
        <h2 className="text-3xl font-semibold md:text-2xl lg:text-2xl xl:text-3xl mt-4">
            Empowering Developers, One Repo at a Time
        </h2>
        <p className="text-lg text-gray-700 md:text-base lg:text-lg xl:text-xl mt-2 mb-15">
            Store, manage, and collaborate on your code seamlessly. Start your journey today! 🌍
        </p>
        
   

      
    <MainFile/>
  

  </div>
  
</div>
<Footer/>
</>


  );
};

export default Dashboard;
