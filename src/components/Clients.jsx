import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const UpcomingFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div data-aos="fade-down" className="py-20">
      <h1 className="text-4xl font-semibold text-center text-gray-800">Upcoming Features</h1>
      <div className="flex justify-center items-center mt-2 mb-8">
        <div className="bg-yellow-500 h-2 w-32 rounded-full"></div>
      </div>
      <p className="text-gray-800 text-center mt-4 mb-10 text-lg">
        The Future of Identity Verification is Here — Stay Tuned for Revolutionary Updates!
      </p>

      {/* Features slider with consistent spacing */}
      <Marquee pauseOnHover="true" className="flex items-center space-x-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-80 h-56 p-8 bg-black text-center text-white rounded-lg shadow-xl transition duration-300 ease-in-out mr-8"
        >
          <h3 className="font-semibold text-2xl mb-3">Quantum Encryption</h3>
          <p className="text-gray-300">Harness the power of quantum computing for ultra-secure identity verification.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-80 h-56 p-8 bg-black text-center text-white rounded-lg shadow-xl transition duration-300 ease-in-out mr-8"
        >
          <h3 className="font-semibold text-2xl mb-3">AI-Powered Identity Insights</h3>
          <p className="text-gray-300">Utilize artificial intelligence to generate deeper insights and trends for identity data management.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-80 h-56 p-8 bg-black text-center text-white rounded-lg shadow-xl transition duration-300 ease-in-out mr-8"
        >
          <h3 className="font-semibold text-2xl mb-3">Holographic Verification</h3>
          <p className="text-gray-300">Experience futuristic holographic identity checks for seamless and instant verification.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-80 h-56 p-8 bg-black text-center text-white rounded-lg shadow-xl transition duration-300 ease-in-out mr-8"
        >
          <h3 className="font-semibold text-2xl mb-3">Brainwave Recognition</h3>
          <p className="text-gray-300">Authenticate identities using advanced neural networks and brainwave analysis for personalized security.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-80 h-56 p-8 bg-black text-center text-white rounded-lg shadow-xl transition duration-300 ease-in-out"
        >
          <h3 className="font-semibold text-2xl mb-3">Blockchain 3.0</h3>
          <p className="text-gray-300">Decentralized identity management with the next-gen blockchain, offering even faster, more secure validation.</p>
        </motion.div>
      </Marquee>
    </div>
  );
};

export default UpcomingFeatures;
