


import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


const Notify = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
    .send(
        "service_mnjbpap",
        "template_63aah4j",
        formData,
        "sydF-qb9i2TMAaHrG"
      )
      .then(
        () => {
          setStatus("Message Sent Successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
   
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-6 mt-5">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Notify Me...
        </h2>

        <form onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {status && <p className="text-center mt-4 text-gray-700">{status}</p>}

        <div className="mt-6 space-y-3 text-gray-600">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            <span>forplacement@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-green-500" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span>123 Hero nagar, Debipur,India</span>
          </div>
        </div>
      </div>

     
    </div>
    
    </>
  );
};

export default Notify;


