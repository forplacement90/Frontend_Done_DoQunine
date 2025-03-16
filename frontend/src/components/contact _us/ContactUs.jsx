


import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import SubComponent from "../SubComponent";
import Footer from "../Footer";

const ContactUs = () => {
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
    <SubComponent/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-6 mt-5">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Contact Us
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

      {/* Google Map Embed */}
      {/* <div className="w-full max-w-md mt-6">
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.81720997975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f17c4b%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1645194047411!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;


