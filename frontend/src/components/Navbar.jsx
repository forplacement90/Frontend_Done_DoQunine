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

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setCurrentUser(null);
    window.location.href = "/auth";
  };

  return (
    <nav className="bg-blue-500 shadow-lg border-b-2 border-black px-3 py-2 flex justify-between items-center fixed top-0 w-full z-50">
      {/* Sidebar Toggle और Logo */}
      <div className="flex items-center text-xl">
        <FaBars className="text-white cursor-pointer me-4" onClick={() => setSidebarToggle(!sidebarToggle)} />
        <img src={logo} alt="Logo" height={30} width={50} className="rounded-bl-lg" />
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
        <DropdownButton />
        <Link to="/message">
    <FaBell className="w-6 h-6 text-white cursor-pointer" />
  </Link>
        <UserProfileMenu logout={logout} />
      </div>
    </nav>
  );
};

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <GoProjectSymlink />, text: "New repository", link: "/newRepository" },
    { icon: <RiGitPullRequestLine />, text: "Import repository", link: "/import-repo" },
    { icon: <GoProjectSymlink />, text: "New codespace", link: "/new-codespace" },
    { icon: <GoProjectSymlink />, text: "New gist", link: "/new-gist" },
    { icon: <GoProjectSymlink />, text: "New organization", link: "/new-org" },
    { icon: <GoProjectSymlink />, text: "New project", link: "/new-project" },
  ];

  return (
    <div className="relative">
      <div className="text-white flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <FaPlus className="w-6 h-6" />
        <IoMdArrowDropdown className="w-6 h-6" />
      </div>

      {isOpen && (
        <div className="absolute bg-blue-300 rounded-lg shadow w-60 top-full right-0 mt-2 border-2 border-red-500">
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


const UserProfileMenu = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <FaUserCircle />, text: "Your Profile", link: "/profile" },
    { icon: <RiGitPullRequestLine />, text: "Your Repositories", link: "/repos" },
    { icon: <SiGithubcopilot />, text: "Your Copilot", link: "/copilot" },
    { icon: <GoProjectSymlink />, text: "Your Projects", link: "/projects" },
    { icon: <GoProjectSymlink />, text: "Your Stars", link: "/stars" },
    { icon: <SiGoogledocs />, text: "LogicStore Docs", link: "https://docs.logicstore.com" },
    { icon: <MdOutlineSupportAgent />, text: "LogicStore Support", link: "/support" },
    { icon: <RiCommunityFill />, text: "LogicStore Community", link: "/community" },
  ];

  return (
    <div className="relative">
      <div className="text-white flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <FaUserCircle className="w-6 h-6" />
      </div>

      {isOpen && (
        <div className="absolute bg-blue-300 rounded-lg shadow w-60 top-full right-0 mt-2 border-2 border-red-500">
          <ul className="text-gray-700 font-bold">
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2 hover:bg-blue-500 py-1 flex items-center rounded">
                {item.icon} <a href={item.link} className="ml-2">{item.text}</a>
              </li>
            ))}
            <li className="mb-2 hover:bg-red-500 py-1 flex items-center rounded cursor-pointer text-red-700" onClick={logout}>
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
    { icon: <GoCommentDiscussion />, text: "Discussion", link: "/discussions" },
    { icon: <MdExplore />, text: "Explore", link: "/explore" },
  ];

  return (
    <div className={`bg-blue-200 fixed h-full px-4 py-1 w-60 transition-all duration-300 mt-8 border-2 border-red-500 ${sidebarToggle ? "translate-x-0" : "-translate-x-64"}`}>
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
