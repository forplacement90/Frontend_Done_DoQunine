import { FaDiscord } from "react-icons/fa";
import SubComponent from "../SubComponent";
import Footer from "../Footer";

export default function Community() {
  return (
    <>
    <SubComponent/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Discord Community</h1>
        <p className="text-lg md:text-xl text-gray-800 mb-6">
          Connect with like-minded individuals, engage in discussions, and stay updated with the latest news!
        </p>
        
        {/* Join Button */}
        <a
          href="https://discord.gg/fgpsSrT4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-6 py-3 text-lg rounded-lg shadow-md ring-1"
        >
          <FaDiscord className="text-2xl text-white" /> Join Now
        </a>
      </div>
    </div>
    <Footer/>
    </>
  );
}