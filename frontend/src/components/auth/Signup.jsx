import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../authContext";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";
import logo from "../../assets/github-mark-white.webp";

const Signup = () => {
  const { setCurrentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.username || formData.username.length < 3)
      tempErrors.username = "Username must be at least 3 characters";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.password || formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const getInputClass = (field) => {
    if (!touched[field]) return "w-full pl-10 p-3 rounded-lg focus:ring focus:outline-none text-gray-700 border-1";
    return `w-full pl-10 p-3 rounded-lg focus:ring focus:outline-none text-gray-700 border-1 ${
      errors[field] ? "border-red-500 focus:ring-red-500" : "border-green-500 focus:ring-green-500"
    }`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3002/signup", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      setCurrentUser(res.data.userId);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Signup Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-gray-100 text-black p-8 rounded-2xl shadow-2xl flex max-w-4xl w-full  ">
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 p-6 bg-gray-300 rounded-2xl ">
          <img className="w-48 h-48" src={logo} alt="Logo" />
          <p className="text-center mt-4 text-sm font-light">
            You Are Few Minutes Away To Boost Your Skills With <span className="font-semibold">Sourav Kumar & Sujit Som</span>
          </p>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-black" />
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={getInputClass("username")}
                type="text"
                placeholder="Username"
              />
              <p className="text-red-500 text-sm">{errors.username}</p>
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3" />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={getInputClass("email")}
                type="email"
                placeholder="Email"
              />
              <p className="text-red-500 k text-sm">{errors.email}</p>
            </div>

            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-black" />
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={getInputClass("password")}
                type="password"
                placeholder="Password"
              />
              <p className="text-red-500  text-sm">{errors.password}</p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-4 flex justify-center items-center gap-2 transition duration-200"
              disabled={loading}
            >
              {loading ? "Signing up..." : <><FaUserPlus /> Sign Up</>}
            </button>
          </form>

          <p className="text-sm text-gray-800 text-center mt-4">
            Already have an account? <Link to="/auth" className="text-gray-900 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
