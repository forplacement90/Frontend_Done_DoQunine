import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../authContext";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaUserPlus, FaGoogle, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import logo from "../../assets/github-mark-white.webp";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setCurrentUser } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3002/signup", {
        email,
        password,
        username,
      });

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-6  ">
      <div className="bg-blue-400 text-white p-8 rounded-2xl shadow-2xl flex max-w-4xl w-full ring-black-200">
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 p-6 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl">
          <img className="w-48 h-48" src={logo} alt="Logo" />
          <p className="text-center mt-4 text-sm font-light">You Are Few Minutes Away To Boost Your Skills With <span className="font-semibold">Sourav Kumar </span></p>
        </div>
        <div className="w-full md:w-1/2 p-6">
          
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSignup}>
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-white " />
              <input
                className="w-full pl-10 p-3 bg-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none  text-gray-700"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 " />
              <input
                className="w-full pl-10 p-3 bg-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-white" />
              <input
                className="w-full pl-10 p-3 bg-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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

          <div className="flex justify-center mt-6 space-x-4">
            <FaGoogle className="text-gray-800 hover:text-white text-2xl cursor-pointer" />
            <FaFacebook className="text-gray-800 hover:text-white text-2xl cursor-pointer" />
            <FaTwitter className="text-gray-800 hover:text-white text-2xl cursor-pointer" />
            <FaPinterest className="text-gray-800 hover:text-white text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;