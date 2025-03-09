import React from "react";
import SubComponent from "../SubComponent";
import Footer from "../Footer";

const CreationPage = () => {
  return (
    <>
    <SubComponent/>
    <div className="max-w-5xl mx-auto mt-15 p-5 bg-blue-800 text-white  shadow-lg grid gap-6  border-2 border-black">
      {/* Quick Setup Section */}
      <div className="grid gap-4">
        <h2 className="text-lg sm:text-xl font-semibold text-center sm:text-left mt-8 mb-5">
          Quick setup — if you’ve done this kind of thing before
        </h2>
        <div className="grid sm:flex flex-wrap items-center gap-2 justify-center sm:justify-start">
          <button className="bg-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-600">
            Set up in Desktop
          </button>
          <span className="text-center sm:text-left">or</span>
          <button className="bg-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-600">
            HTTPS
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-600">
            SSH
          </button>
        </div>
        <div className="bg-blue-200 p-3 rounded-lg flex items-center justify-between text-sm overflow-x-auto">
          <span className="truncate text-gray-900">https://github.com/forplacement90/hhh.git</span>
          <button className="bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600">Copy</button>
        </div>
      </div>

      {/* Instructions Section */}
      <div className="grid gap-2">
        <p className="text-sm text-gray-900 text-center sm:text-left">
          Get started by <a href="#" className="text-red-200">creating a new file</a> or <a href="#" className="text-red-200">uploading an existing file</a>.
        </p>
        <p className="text-sm text-gray-900 text-center sm:text-left">
          We recommend every repository include a <a href="#" className="text-red-200">README</a>, <a href="#" className="text-red-200">LICENSE</a>, and <a href="#" className="text-red-200">.gitignore</a>.
        </p>
      </div>

      {/* Command Line Instructions */}
      <div className="grid gap-4">
        <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left">...or create a new repository on the command line</h2>
        <div className="bg-blue-200 p-4 rounded-md font-mono text-xs sm:text-sm overflow-x-autov text-gray-900">
          <pre>
{`echo "# hhh" >> README.md
node index.js init
node index.js add README.md
node index.js commit -m "first commit"
node index.js branch -M main
node index.js remote add origin https://github.com/forplacement90/hhh.git
node index.js push -u origin main`}
          </pre>
        </div>
      </div>

      <div className="grid gap-4">
        <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left text-white">...or push an existing repository from the command line</h2>
        <div className="bg-blue-200 p-4 rounded-md font-mono text-xs sm:text-sm overflow-x-auto text-gray-900">
          <pre>
{`node index.js remote add origin https://github.com/forplacement90/hhh.git
node index.js branch -M main
node index.js push -u origin main`}
          </pre>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CreationPage;
