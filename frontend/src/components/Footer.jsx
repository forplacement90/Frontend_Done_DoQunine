import React from "react";

function Footer() {
  return (
    <footer className="sticky top-[100vh] w-full bg-blue-200 text-gray-800 py-4 border-2 border-black h-25">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Side - Copyright Text */}
        <p className="mb-2 md:mb-0">© {new Date().getFullYear()} Logic Store. All Rights Reserved.</p>

        {/* Right Side - Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-dark hover:underline">Terms</a>
          <a href="#" className="text-dark hover:underline">Privacy</a>
          <a href="#" className="text-dark hover:underline">Security</a>
          <a href="#" className="text-dark hover:underline">Status</a>
          <a href="#" className="text-dark hover:underline">Help</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
