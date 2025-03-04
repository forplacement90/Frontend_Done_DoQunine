import React from "react";
import { CgProfile, CgWebsite } from "react-icons/cg";
import { FaBars, FaBell, FaPlus, FaRegNewspaper, FaRegStar, FaSearch, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { FaRightLeft } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiCommunityFill, RiGitPullRequestLine } from "react-icons/ri";
import { SiGithubcopilot, SiGoogledocs } from "react-icons/si";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between">
      <div className="flex items-center text-xl">
        {/* Toggle Sidebar */}
        <FaBars
          className="text-white me-4 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <span className="text-white font-semibold">DoUnique</span>
      </div>

      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none text-black bg-white"
            placeholder="Search..."
          />
        </div>

        <div className="relative mx-auto">
          <button className="text-white group">
            <div className="flex"><FaPlus className="w-6 h-6 mt-1" /><IoMdArrowDropdown className="w-6 h-6 mt-1"/>
            </div>
            
            <div className="z-10 hidden absolute bg-gray-800 rounded-lg shadow w-60 group-focus:block top-full right-0 mt-4">
              <ul className="mt-3 text-white font-bold text-center ">
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                  <FaRegNewspaper className="w-6 h-6 mr-2"/>
                  New repository
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <RiGitPullRequestLine className="w-6 h-6 mr-2"/>
                  Import repository
                </li>
                <hr />
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <FaRightLeft className="w-6 h-6 mr-2"/>
                  New codespace
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <GoProjectSymlink className="w-6 h-6 mr-2"/>
                  New gist
                </li>
                <hr />
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <FaRegStar className="w-6 h-6 mr-2"/>
                  New organization
                </li>
                
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <CgWebsite className="w-6 h-6 mr-2"/>
                  New project
                </li>
                
              </ul>
            </div>
          </button>
        </div>

        <div className="text-white">
          <FaBell className="w-6 h-6" />
        </div>

        <div className="relative">
          <button className="text-white group">
            <FaUserCircle className="w-6 h-6 mt-1" />
            <div className="z-10 hidden absolute bg-gray-800 rounded-lg shadow w-60 group-focus:block top-full right-0 mt-4">
              <ul className="mt-3 text-white font-bold text-center ">
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                  <CgProfile className="w-6 h-6 mr-2"/>
                  Your Profile
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <RiGitPullRequestLine className="w-6 h-6 mr-2"/>
                  Your Repositories
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <SiGithubcopilot className="w-6 h-6 mr-2"/>
                  Your Copilot
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <GoProjectSymlink className="w-6 h-6 mr-2"/>
                  Your Projects
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <FaRegStar className="w-6 h-6 mr-2"/>
                  Your Stars
                </li>
                <hr />
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <CgWebsite className="w-6 h-6 mr-2"/>
                  DoUnique Website
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <SiGoogledocs className="w-6 h-6 mr-2"/>
                  DoUnique Docs
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <MdOutlineSupportAgent className="w-6 h-6 mr-2"/>
                  DoUnique Support
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <RiCommunityFill className="w-6 h-6 mr-2"/>
                  DoUnique Community
                </li>
                <hr />
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex justify-center">
                <FaSignOutAlt className="w-6 h-6 mr-2"/>
                  Sign out
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
