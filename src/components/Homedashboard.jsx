import React from "react";
import { FaCodeBranch, FaCode, FaUsers, FaShieldAlt } from "react-icons/fa";
import SubSection from "./SubSection";
import Testimonials from "./Testimonial";
import FAQSection from "./FaSection";

const features = [
  {
    title: "Seamless Version Control",
    description: "Effortlessly manage code versions, branches, and commits with an intuitive Git workflow.",
    icon: <FaCodeBranch size={40} />,
  },
  {
    title: "AI-Powered Code Reviews",
    description: "Leverage AI to analyze pull requests, suggest improvements, and maintain code quality.",
    icon: <FaCode size={40} />,
  },
  {
    title: "Team Collaboration",
    description: "Work with your team using shared repositories, pull requests, and real-time discussions.",
    icon: <FaUsers size={40} />,
  },
  {
    title: "Secure & Scalable Infrastructure",
    description: "Ensure the safety of your code with robust security measures and scalable cloud storage.",
    icon: <FaShieldAlt size={40} />,
  },
  {
    title: "Secure & Easy Deployment",
    description: "Ensure the safety of your code with robust security measures and scalable cloud storage.",
    icon: <FaShieldAlt size={40} />,
  },
];

const Homedashboard = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Powerful Features of DoUnique Website</h2>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#111] p-6 rounded-lg shadow-md text-center border border-gray-700 hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4 text-primary">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
      <hr className="mt-18 mb-2" />
      <SubSection/>
      <hr className="mt-18 mb-2" />
      <Testimonials/>
      <hr className="mt-18 mb-2" />
      <FAQSection/>
    </section>
    
    

  );
};

export default Homedashboard;
