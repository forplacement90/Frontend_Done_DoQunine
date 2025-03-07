
import React, { useState } from "react";
import Footer from "./Footer";
import { Navbar, Sidebar } from "./Navbar";


const SubComponent = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  
  return (
    <>
    
   <div className="flex">
      {/* Navbar */}
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />

      {/* Sidebar */}
      <Sidebar sidebarToggle={sidebarToggle} />

     
    </div>
      
      
    

  </>

 
  




  );
};

export default SubComponent;
