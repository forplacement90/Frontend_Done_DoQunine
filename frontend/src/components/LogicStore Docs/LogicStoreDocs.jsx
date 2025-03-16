import { FaRocket, FaCode, FaRobot, FaCogs } from "react-icons/fa";
import SubComponent from "../SubComponent";
import Footer from "../Footer";

const LogicStoreDocs = () => {
  return (
    <>
    <SubComponent/>
    <div className="bg-gray-800 text-white min-h-screen mt-15">
      {/* Full-screen Header Image */}
      <div 
        className="w-full h-[50vh] bg-cover bg-center" 
        style={{ backgroundImage: "url(https://wallpapercave.com/wp/wp266304.png)" }}
      ></div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-white">Logic Store Docs</h1>
          <p className="text-lg text-white mt-2">
            Help for wherever you are on your Logic Store journey.
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-600 p-6 rounded-xl shadow-lg ring-4">
            <FaRocket className="text-3xl mb-4" />
            <h2 className="text-xl font-semibold">Get started</h2>
            <ul className="mt-2 text-gray-800">
              <li>Get started</li>
              <li>Migrations</li>
              <li>Account and profile</li>
              <li>Authentication</li>
              <li>Billing and payments</li>
              <li>Site policy</li>
            </ul>
          </div>

          <div className="bg-blue-600 p-6 rounded-xl shadow-lg ring-4">
            <FaCode className="text-3xl mb-4" />
            <h2 className="text-xl font-semibold">Collaborative coding</h2>
            <ul className="mt-2 text-gray-800">
              <li>Codespaces</li>
              <li>Repositories</li>
              <li>Pull requests</li>
              <li>Logic Store Discussions</li>
            </ul>
          </div>

          <div className="bg-blue-600 p-6 rounded-xl shadow-lg ring-4">
            <FaRobot className="text-3xl mb-4" />
            <h2 className="text-xl font-semibold">Logic Store Copilot</h2>
            <ul className="mt-2 text-gray-800">
              <li>Logic Store Copilot</li>
              <li>Get code suggestions</li>
              <li>Prompt engineering</li>
              <li>Chat in Logic Store</li>
              <li>Copilot Chat Cookbook</li>
              <li>Extensions quickstart</li>
            </ul>
          </div>

          <div className="bg-blue-600 p-6 rounded-xl shadow-lg ring-4">
            <FaCogs className="text-3xl mb-4" />
            <h2 className="text-xl font-semibold">CI/CD and DevOps</h2>
            <ul className="mt-2 text-gray-800">
              <li>Logic Store Actions</li>
              <li>Logic Store Packages</li>
              <li>Logic Store Pages</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LogicStoreDocs;
