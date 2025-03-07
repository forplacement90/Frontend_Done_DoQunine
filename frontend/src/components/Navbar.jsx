import React from "react";
import { CgProfile, CgWebsite } from "react-icons/cg";
import { FaBars, FaBell, FaPlus, FaRegNewspaper, FaRegStar, FaSearch, FaSignOutAlt, FaUserCircle, FaGift, FaHome } from "react-icons/fa";
import { FaRightLeft, FaBoxTissue } from "react-icons/fa6";
import { GoProjectSymlink, GoCommentDiscussion } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineSupportAgent, MdExplore } from "react-icons/md";
import { RiCommunityFill, RiGitPullRequestLine } from "react-icons/ri";
import { SiGithubcopilot, SiGoogledocs } from "react-icons/si";
import { IoGitPullRequestOutline } from "react-icons/io5";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <nav className="bg-blue-500 shadow-lg border-b-2 border-black px-3 py-2 flex justify-between items-center fixed top-0 w-full z-50 ">
      <div className="flex items-center text-xl">
        <FaBars
          className="text-white cursor-pointer me-4"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <span className="text-white font-semibold"><img src="../src/assets/github-mark-white.webp" alt="Logo" height={30} width={50} className="rounded-bl-lg"/></span>
      </div>

      <div className="flex items-center gap-x-5">
        <div className="relative w-64">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-white">
            <FaSearch />
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 pl-10 rounded shadow outline-none text-black bg-gray-300 ring-2 "
            placeholder="Search... "
          />
      
        </div>

        <div className="relative">
          <button className="text-white flex items-center group">
            <FaPlus className="w-6 h-6" />
            <IoMdArrowDropdown className="w-6 h-6" />
            <div className="absolute hidden bg-blue-300 rounded-lg shadow w-60 group-focus:block top-full right-0 mt-4 border-2 border-red-500">
              <ul className="text-gray-800 font-bold text-center">
                {[
                  { icon: <FaRegNewspaper />, text: "New repository" },
                  { icon: <RiGitPullRequestLine />, text: "Import repository" },
                  { icon: <FaRightLeft />, text: "New codespace" },
                  { icon: <GoProjectSymlink />, text: "New gist" },
                  { icon: <FaRegStar />, text: "New organization" },
                  { icon: <CgWebsite />, text: "New project" }
                ].map((item, index) => (
                  <li key={index} className="mb-2 hover:bg-blue-500 py-2 flex justify-center rounded">
                    {item.icon} <span className="ml-2">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </button>
        </div>

        <FaBell className="w-6 h-6 text-white" />

        <div className="relative">
          <button className="text-white group">
            <FaUserCircle className="w-6 h-6" />
            <div className="absolute hidden bg-blue-300  rounded-lg shadow w-60 group-focus:block top-full right-0 mt-4 border-2 border-red-500">
              <ul className="text-gray-700 font-bold text-center">
                {[
                  { icon: <CgProfile />, text: "Your Profile" },
                  { icon: <RiGitPullRequestLine />, text: "Your Repositories" },
                  { icon: <SiGithubcopilot />, text: "Your Copilot" },
                  { icon: <GoProjectSymlink />, text: "Your Projects" },
                  { icon: <FaRegStar />, text: "Your Stars" },
                  { icon: <CgWebsite />, text: "LogicStore Website" },
                  { icon: <SiGoogledocs />, text: "LogicStore Docs" },
                  { icon: <MdOutlineSupportAgent />, text: "LogicStore Support" },
                  { icon: <RiCommunityFill />, text: "LogicStore Community" },
                  { icon: <FaSignOutAlt />, text: "Sign out" }
                ].map((item, index) => (
                  <li key={index} className="mb-2 hover:bg-blue-500 py-1 flex justify-center rounded">
                    {item.icon} <span className="ml-2">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div className={`bg-blue-200 fixed h-full px-4 py-1 w-60 transition-all duration-300 mt-8 border-2 border-red-500  ${sidebarToggle ? "translate-x-0" : "-translate-x-64"}`}>
      <div className="my-2 mb-5 mt-10">
        <h1 className="text-2xl text-white font-bold ">
          <img src="../src/assets/github-mark-white.webp" alt="Logo" height={100} width={100} className="rounded-full"/>
        </h1>
      </div>
      <hr />
      <ul className="mt-3 text-gray-700 font-bold ">
        {[{ icon: <FaHome />, text: "Home" },
          { icon: <FaBoxTissue />, text: "Issues" },
          { icon: <IoGitPullRequestOutline />, text: "Pull Requests" },
          { icon: <GoProjectSymlink />, text: "Projects" },
          { icon: <GoCommentDiscussion />, text: "Discussion" },
          { icon: <MdExplore />, text: "Explore" },
          { icon: <FaGift />, text: "Marketplace" }].map((item, index) => (
          <li key={index} className="mb-2 hover:bg-blue-500 py-1 flex items-center rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ...">
            {item.icon} <span className="ml-2">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Navbar, Sidebar };
