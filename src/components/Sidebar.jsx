import React from "react";
import { FaGift, FaHome } from "react-icons/fa";
import { FaBoxTissue } from "react-icons/fa6";
import { GoCommentDiscussion, GoProjectSymlink } from "react-icons/go";
import { IoGitPullRequestOutline } from "react-icons/io5";
import { MdExplore } from "react-icons/md";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div
      className={`bg-gray-800 fixed h-full px-4 py-2 w-64 transition-all duration-300 ${
        sidebarToggle ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2xl text-white font-bold"><img src="https://tse4.mm.bing.net/th?id=OIP.yLN5-yPM05N94nqvoORORQHaDt&pid=Api&P=0&h=220" alt="" height={100} width={100}/></h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex items-center">
          <FaHome className="w-6 h-6 mr-2" />
          Home
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex items-center">
          <FaBoxTissue className="w-6 h-6 mr-2" />
          Issues
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex items-center">
          <IoGitPullRequestOutline className="w-6 h-6 mr-2" />
          Pull Requests
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex items-center">
          <GoProjectSymlink className="w-6 h-6 mr-2" />
          Projects
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex items-center">
          <GoCommentDiscussion className="w-6 h-6 mr-2" />
          Discussion
        </li>

        <hr />

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex items-center">
          <MdExplore className="w-6 h-6 mr-2" />
          Explore
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 flex items-center">
          <FaGift className="w-6 h-6 mr-2" />
          Marketplace
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
