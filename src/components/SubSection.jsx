import React from "react";
import { FaIndustry, FaQuestionCircle, FaChartLine, FaRobot } from "react-icons/fa";

const stats = [
  { value: "50+", label: "Industries Covered", icon: <FaIndustry size={40} /> },
  { value: "1000+", label: "Interview Questions", icon: <FaQuestionCircle size={40} /> },
  { value: "95%", label: "Success Rate", icon: <FaChartLine size={40} /> },
  { value: "24/7", label: "AI Support", icon: <FaRobot size={40} /> },
];

const SubSection = () => {
  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="text-primary">{stat.icon}</div>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubSection;
