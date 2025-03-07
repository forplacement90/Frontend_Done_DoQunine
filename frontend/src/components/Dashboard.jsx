
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
      <div className="flex items-center justify-center mt-10 mb-10 bg-blue-200 ">
            <div className="text-center ">
           <h1 className="text-5xl font-bold md:text-3xl lg:text-3xl xl:text-5xl gradient-title animate-gradient mt-11">
             Create issues to track bugs and tasks. 🌍💡
                 </h1>
        <br />
           <h2 className="text-3xl font-bold md:text-3xl lg:text-3xl xl:text-3xl mb-8 mt-5">Growing with Every Line of Code</h2>
      
    <MainFile/>
  <Footer/>

  </div>
  
</div>
</>


  );
};

export default Dashboard;
