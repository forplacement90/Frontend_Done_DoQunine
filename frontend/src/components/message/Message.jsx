import { useState } from "react";
import { FaInbox, FaCheckCircle, FaBell, FaUsers, FaRegCommentDots } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlineFilterList } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import SubComponent from "../SubComponent";
import Footer from "../Footer";

export default function Message() {
  const [tab, setTab] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
    <SubComponent/>
    <div className="min-h-screen bg-gray-200 text-gray-900 flex flex-col items-center p-6 mt-12">
      <div className="bg-gray-100 w-full max-w-4xl rounded-lg shadow-lg p-4 mt-20">
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaInbox /> Inbox
          </h2>
          <div className="relative">
            <button 
              className="px-3 py-1 bg-gray-200 rounded-md flex items-center gap-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Filter <IoIosArrowDown />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-200 rounded-md shadow-lg p-2">
                <button className="block w-full text-left px-3 py-1 hover:bg-gray-600" onClick={() => setTab("all")}>
                  All
                </button>
                <button className="block w-full text-left px-3 py-1 hover:bg-gray-600" onClick={() => setTab("unread")}>
                  Unread
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between bg-gray-300 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <FaBell className="text-yellow-400" />
              <span>Assigned</span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-gray-300 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <FaRegCommentDots className="text-blue-400" />
              <span>Participating</span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-gray-300 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <FaUsers className="text-green-400" />
              <span>Team mentioned</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center text-gray-900 text-sm">
          <p>All caught up!</p>
          <IoMdDoneAll className="text-green-500 text-xl" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
