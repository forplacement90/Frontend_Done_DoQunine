import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Footer";
import SubComponent from "../SubComponent";
import Notify from "./notify";

export default function Pulls() {
  const [showContact, setShowContact] = useState(false); // State to toggle ContactUs

  return (
    <>
      <SubComponent />
      <div className="flex items-center justify-center min-h-screen bg-white text-black px-4">
        {!showContact ? (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Coming Soon..</h1>
            <p className="text-lg text-gray-900 mb-6">We're working on something amazing. Stay tuned!</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-lg font-medium text-white"
              onClick={() => setShowContact(true)} // ContactUs form ko show karne ke liye
            >
              Notify Me
            </motion.button>
          </motion.div>
        ) : (
          <Notify/> // ContactUs form show karein
        )}
      </div>
      <Footer />
    </>
  );
}
