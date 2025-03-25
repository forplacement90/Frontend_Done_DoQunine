import React from "react";

function Footer() {
  return (
    <footer className="margin-top-auto w-full bg-[#e9e9e9] text-[#12200c] ... py-4 border-t-2  h-20 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Side - Copyright Text */}
        <p className="mb-2 md:mb-0 text-[#075a4d]">© {new Date().getFullYear()} Logic Store. All Rights Reserved.</p>

        {/* Right Side - Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-dark hover:underline">Terms</a>
          <a href="#" className="text-dark hover:underline">Privacy</a>
          <a href="#" className="text-dark hover:underline">Security</a>
          <a href="/contact-us" className="text-dark hover:underline">Contact Us</a>
          <a href="/community" className="text-dark hover:underline">Help</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
