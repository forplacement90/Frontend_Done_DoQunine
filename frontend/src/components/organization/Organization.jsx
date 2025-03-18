import React, { useState } from "react";
import { FaBuilding, FaUsers, FaBook, FaPlus } from "react-icons/fa";
import Footer from "../Footer";
import SubComponent from "../SubComponent";

const Organization = () => {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    members: "",
    repositories: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const membersArray = form.members.split(",").map((member, index) => ({
      id: index + 1,
      name: member.trim(),
      role: "Member",
    }));
    const reposArray = form.repositories.split(",").map((repo, index) => ({
      id: index + 1,
      name: repo.trim(),
      stars: Math.floor(Math.random() * 100),
    }));
    const newOrg = {
      id: organizations.length + 1,
      name: form.name,
      description: form.description,
      members: membersArray,
      repositories: reposArray,
    };
    setOrganizations([...organizations, newOrg]);
    setSelectedOrg(newOrg);
    setForm({ name: "", description: "", members: "", repositories: "" });
  };

  return (
    <>
    <SubComponent/>
    <div className="min-h-screen bg-blue-300 p-6 flex justify-center items-start mt-13">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold">Create Organization</h2>
            <input
              type="text"
              name="name"
              placeholder="Organization Name"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              value={form.name}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              value={form.description}
            />
            <input
              type="text"
              name="members"
              placeholder="Members (comma separated)"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              value={form.members}
            />
            <input
              type="text"
              name="repositories"
              placeholder="Repositories (comma separated)"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              value={form.repositories}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Create Organization
            </button>
          </form>
        </div>
        <div className="space-y-6">
          {organizations.map((organization) => (
            <div
              key={organization.id}
              className="p-4 bg-white rounded-lg shadow cursor-pointer"
              onClick={() => setSelectedOrg(organization)}
            >
              <div className="flex items-center space-x-4">
                <FaBuilding className="text-4xl text-gray-700" />
                <div>
                  <h1 className="text-2xl font-bold">{organization.name}</h1>
                  <p className="text-gray-600">{organization.description}</p>
                </div>
              </div>
            </div>
          ))}
          {selectedOrg && (
            <div className="p-4 bg-white rounded-lg shadow mt-6">
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <FaBuilding /> {selectedOrg.name}
              </h1>
              <p className="text-gray-600">{selectedOrg.description}</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <FaUsers /> Members
                  </h2>
                  <ul className="mt-2 space-y-2">
                    {selectedOrg.members.map((member) => (
                      <li key={member.id} className="bg-gray-50 p-2 rounded-md shadow-sm">
                        <span className="font-medium">{member.name}</span> - {member.role}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <FaBook /> Repositories
                  </h2>
                  <ul className="mt-2 space-y-2">
                    {selectedOrg.repositories.map((repo) => (
                      <li key={repo.id} className="bg-gray-50 p-2 rounded-md shadow-sm flex justify-between">
                        <span className="font-medium">{repo.name}</span>
                        <span className="text-gray-600">⭐ {repo.stars}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Organization;