import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import MainFile from "./components/MainFile";
import Footer from "./components/Footer";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false); // Sidebar starts as visible

  return (
    <>
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      
      <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
    </div>
    <MainFile/>
    <Footer/>
    </>
    
  );
}

export default App;
