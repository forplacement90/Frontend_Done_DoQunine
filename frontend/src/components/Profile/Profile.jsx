import React, { useEffect, useState } from "react";
import { FaGithub, FaRocket } from "react-icons/fa";
import HeatMap from "@uiw/react-heat-map";
import UserDetail from "../UsernameDetails/UserDetail";
import SubComponent from "../SubComponent";
import Footer from "../Footer";

// Function to generate random activity
const generateActivityData = (startDate, endDate) => {
  const data = [];
  let currentDate = new Date(startDate);
  const end = new Date(endDate);

  while (currentDate <= end) {
    const count = Math.floor(Math.random() * 50);
    data.push({
      date: currentDate.toISOString().split("T")[0], //YYY-MM-DD
      count: count,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};

const getPanelColors = (maxCount) => {
  const colors = {};
  for (let i = 0; i <= maxCount; i++) {
    const greenValue = Math.floor((i / maxCount) * 255);
    colors[i] = `rgb(0, ${greenValue}, 0)`;
  }
  return colors;
};

const Profile = () => {
  const [following, setFollowing] = useState(0);
  const [activityData, setActivityData] = useState([]);
  const [panelColors, setPanelColors] = useState({});
  const [repositories, setRepositories] = useState([]); // Fetch from API

  useEffect(() => {
    const startDate = "2001-01-01";
    const endDate = "2001-01-31";
    const data = generateActivityData(startDate, endDate);
    setActivityData(data);
    const maxCount = Math.max(...data.map((d) => d.count));
    setPanelColors(getPanelColors(maxCount));
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/repo/user/${userId}`
        );
        const data = await response.json();
        setRepositories(data.repositories || []);
      } catch (err) {
        console.error("Error while fetching repositories: ", err);
      }
    };
    fetchRepositories();
  }, []);

  return (
    <>
      <SubComponent />
      <div className="bg-blue-400 text-gray-900 min-h-screen p-6 flex flex-col items-center mt-17">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Profile */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-4xl font-bold mb-4 mt-3">
              <img
                src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
                alt=""
                className="rounded-full ring-3"
              />
            </div>
            <h1 className="text-2xl font-bold ml-5">
              <UserDetail />
            </h1>
            <div className="mt-2 flex gap-4 flex-wrap justify-center lg:justify-start">
              <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-blue-500">
                Edit Profile
              </button>
              <button
                className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-800"
                onClick={() => setFollowing(following + 1)}
              >
                Following: {following}
              </button>
            </div>
            <p className="mt-2 flex items-center gap-2 text-gray-900">
              <FaRocket /> Joined last month
            </p>
          </div>

          {/* Right Section - Repositories */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {repositories.map((repo, index) => (
              <div
                key={index}
                className="bg-blue-300 p-4 rounded-lg shadow-md ring-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
              >
                <h2 className="text-xl font-bold">{repo.name}</h2>
                <p className="text-white-900">{repo.description}</p>
                <a
                  href={repo.html_url || "#"}
                  className="text-white underline mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW REPOSITORY
                </a>
                <span className="text-sm bg-blue-700 px-2 py-1 rounded-full mt-2 inline-block ml-2">
                  {repo.private ? "Private" : "Public"}
                </span>
              </div>
            ))}
          </div>
        </div>

      {/* Contribution Heatmap */}
<div className="mt-8 p-6 bg-blue-600 rounded-lg w-full max-w-7xl border-2">
  <h3 className="text-lg font-semibold mb-4 text-center lg:text-left text-gray-900">
    Recent Contributions
  </h3>
  <div className="flex justify-center">
    <HeatMap
      className="HeatMapProfile"
      style={{ maxWidth: "100%", height: "300px", width: "100%" }}
      value={activityData}
      weekLabels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
      startDate={new Date("2001-01-01")}
      rectSize={20} // Bigger squares
      space={4}
      rectProps={{
        rx: 3,
      }}
      panelColors={panelColors}
    />
  </div>
</div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
