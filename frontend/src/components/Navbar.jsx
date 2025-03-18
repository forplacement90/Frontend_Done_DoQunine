import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBell, FaPlus, FaSearch, FaSignOutAlt, FaUserCircle, FaHome } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiGitPullRequestLine, RiCommunityFill } from "react-icons/ri";
import { MdOutlineSupportAgent, MdExplore } from "react-icons/md";
import { GoProjectSymlink, GoCommentDiscussion } from "react-icons/go";
import { SiGithubcopilot, SiGoogledocs } from "react-icons/si";
import logo from "../assets/github-mark-white.webp";
import { useAuth } from "../authContext";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const { setCurrentUser } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setCurrentUser(null);
    window.location.href = "/auth";
  };

  return (
    <nav className="bg-blue-500 shadow-lg border-b-2 border-black px-3 py-2 flex justify-between items-center fixed top-0 w-full z-50 ">
      {/* Sidebar Toggle and Logo */}
      <div className="flex items-center text-xl mr-3">
        <FaBars className="text-white cursor-pointer me-4" onClick={() => setSidebarToggle(!sidebarToggle)} />
          <Link to="/">
        <img src={logo} alt="Logo" height={30} width={50} className="rounded-bl-lg" />
        </Link>
      </div>
     

      {/* Search Bar */}
      <div className="relative w-64">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-white">
          <FaSearch />
        </span>
        <input type="text" className="w-full px-4 py-1 pl-10 rounded shadow outline-none text-black bg-gray-300 ring-2" placeholder="Search..." />
        
      </div>

      {/* Navbar Items */}
      <div className="flex items-center gap-x-5">
      <DropdownButton activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
        <Link to="/message">
    <FaBell className="w-6 h-6 text-white cursor-pointer" />
  </Link>
  <UserProfileMenu activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} logout={logout} />
      </div>
    </nav>
  );
};

const DropdownButton = ({ activeDropdown, setActiveDropdown }) => {
  const isOpen = activeDropdown === "dropdown";

  const menuItems = [
    { icon: <GoProjectSymlink />, text: "New repository", link:"/repo/create" },
    { icon: <RiGitPullRequestLine />, text: "Import repository", link: "/import-repo" },
    { icon: <GoProjectSymlink />, text: "New codespace", link: "/codespace" },
    { icon: <GoProjectSymlink />, text: "New gist", link: "/new grid" },
    { icon: <GoProjectSymlink />, text: "New organization", link: "/organization" },
    { icon: <GoProjectSymlink />, text: "New project", link: "/new-project" },
  ];

  return (
    <div className="relative">
    <div
      className="text-white flex items-center cursor-pointer ml-2"
      onClick={() => setActiveDropdown(isOpen ? null : "dropdown")}
    >
      <FaPlus className="w-6 h-6" />
      <IoMdArrowDropdown className="w-6 h-6" />
    </div>

      {isOpen && (
        <div className="absolute bg-blue-200 rounded-lg shadow w-60 top-full right-0 mt-2 border-2 border-red-500">
          <ul className="text-gray-800 font-bold">
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2 hover:bg-blue-500 py-2 flex items-center rounded">
                {item.icon} <a href={item.link} className="ml-2">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


const UserProfileMenu = ({ activeDropdown, setActiveDropdown, logout }) => {
  const isOpen = activeDropdown === "profile";

  const menuItems = [
    { icon: <FaUserCircle />, text: "Your Profile", link: "/profile" },
    { icon: <RiGitPullRequestLine />, text: "Your Repositories", link: "/" },
    { icon: <SiGithubcopilot />, text: "Your ChatBot", link: "/chatbot" },
    { icon: <GoProjectSymlink />, text: "Your Projects", link: "/viewRepository/:repoId" },
    { icon: <GoProjectSymlink />, text: "Your Stars", link: "/stars" },
    { icon: <SiGoogledocs />, text: "LogicStore Docs", link: "/Logic-Store-Docs" },
    { icon: <MdOutlineSupportAgent />, text: "Contact Us", link: "/contact-us" },
    { icon: <RiCommunityFill />, text: " Community", link: "/community" },
  ];

  return (
    <div className="relative">
      <div className="text-white flex items-center cursor-pointer" onClick={() => setActiveDropdown(isOpen ? null : "profile")}>
        <FaUserCircle className="w-6 h-6" />
      </div>

      {isOpen && (
        <div className="absolute bg-blue-200 rounded-lg shadow w-60 top-full right-0 mt-2 border-2 border-red-500">
          <ul className="text-gray-700 font-bold">
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2 hover:bg-blue-500 py-1 flex items-center rounded">
                {item.icon} <a href={item.link} className="ml-2">{item.text}</a>
              </li>
            ))}
            <li className="mb-2 hover:bg-blue-500 py-1 flex items-center rounded cursor-pointer text-gray-900" onClick={logout}>
              <FaSignOutAlt /> <span className="ml-2">Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};



const Sidebar = ({ sidebarToggle }) => {
  const menuItems = [
    { icon: <FaHome />, text: "Home", link: "/" },
    { icon: <GoProjectSymlink />, text: "Issues", link: "/issues" },
    { icon: <RiGitPullRequestLine />, text: "Pull Requests", link: "/pulls" },
    { icon: <GoProjectSymlink />, text: "Projects", link: "/projects" },
    { icon: <GoCommentDiscussion />, text: "Discussion", link: "/community" },
    { icon: <MdExplore />, text: "Explore", link: "/" },
  ];
 

  return (
    <div className={  ` bg-blue-200 fixed h-full px-4 py-1 w-60 transition-all duration-300 mt-8 border-2 border-red-500 ${sidebarToggle ? "translate-x-0" : "-translate-x-64"}`}>
      <div className="my-2 mb-5 mt-10">
        <img src={logo} alt="Logo" height={100} width={100} className="rounded-full" />
      </div>
      <hr />
      <ul className="mt-3 text-gray-700 font-bold">
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2 hover:bg-blue-500 py-1 flex items-center rounded">
            {item.icon} <a href={item.link} className="ml-2">{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};


export { Navbar, Sidebar };
