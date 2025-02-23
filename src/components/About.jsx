import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsShieldLock, BsPeople, BsFingerprint } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../img/about-blockchain.svg"; // Replace with actual image

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className={`relative lg:mx-32 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      {/* Section Title */}
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        About Trustify
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        {/* Updated border with more width, spacing and rounded corners */}
        <div className={`h-2 w-32 rounded-xl ${darkMode ? "bg-yellow-500" : "bg-blue-600"}`}></div>
      </div>

      {/* Theme Toggle Button */}
      <div className="absolute top-5 right-5">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${darkMode ? "bg-yellow-400" : "bg-gray-300"}`}
        >
          {darkMode ? "🌙" : "🌞"}
        </button>
      </div>

      {/* Content Wrapper with padding for spacing */}
      <div className="flex flex-col lg:flex-row items-center lg:gap-10 px-6 py-16">
        {/* Image */}
        <div data-aos="fade-up" className="lg:w-1/2 w-full py-16 px-10">
  <img className="w-full lg:w-full h-auto object-cover" src={aboutImg} alt="Trustify Blockchain" />
</div>

        {/* Description */}
        <div className="lg:w-1/2 w-full px-10">
          <div data-aos="fade-left">
            <h1 className="md:text-3xl font-semibold">
              Secure & Decentralized Digital Identity Verification
            </h1>
            <p className={`text-lg mt-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Trustify is a blockchain-powered digital identity verification platform designed to
              provide **secure, decentralized, and user-controlled** identity management. It eliminates the inefficiencies of traditional identity systems by ensuring **privacy, security, and accessibility for all users**.
            </p>
          </div>

          {/* Features with animations */}
          <div data-aos="zoom-in" className="mt-6 space-y-5">
            <FeatureItem
              icon={<BsShieldLock size={30} />}
              title="Blockchain Security"
              description="Trustify ensures immutable and tamper-proof identity verification using blockchain technology."
              darkMode={darkMode}
            />
            <FeatureItem
              icon={<BsFingerprint size={30} />}
              title="User-Controlled Privacy"
              description="Users have full control over their identity data and can share only the required information."
              darkMode={darkMode}
            />
            <FeatureItem
              icon={<BsPeople size={30} />}
              title="Global Accessibility"
              description="Designed for easy access in remote areas, Trustify eliminates the need for physical documents."
              darkMode={darkMode}
            />
          </div>

          {/* Key Stats with Animations */}
          <div className="mt-10 space-y-6">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-4xl font-semibold"></h3>
              
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-4xl font-semibold"></h3>
              
            </motion.div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
            <a href="/#contact">
              <button className={`px-6 py-3 font-semibold rounded-full shadow-md transition duration-300 ease-in-out ${darkMode ? "bg-yellow-500 text-gray-900 hover:bg-yellow-600" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Item Component with Hover Animation and Dark Mode Support
const FeatureItem = ({ icon, title, description, darkMode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-4 transition duration-300 ease-in-out"
  >
    <div className={`p-3 ${darkMode ? "bg-yellow-500" : "bg-blue-600"} text-white rounded-lg`}>
      {icon}
    </div>
    <div>
      <h2 className={`text-xl font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>{title}</h2>
      <p className={`text-gray-600 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{description}</p>
    </div>
  </motion.div>
);

export default About;
