import React, { useState } from "react";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import Particles from "react-tsparticles"; // Particles for molecular-style motion
import { useSpring, animated } from "react-spring"; // Import react-spring for typing effect

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const letterVariants = {
    hover: {
      y: -10,
      transition: {
        y: { yoyo: 3, duration: 0.4 },
      },
    },
  };

  // Typing effect animation for the description text
  const typingEffect = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 4000 },
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white text-black overflow-hidden px-6 lg:px-20">

      {/* Molecular Motion Graphics / Blockchain Particles */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              outMode: "out",
            },
            links: {
              enable: true,
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            opacity: {
              value: 0.4,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              },
            },
            shape: {
              type: "circle",  // You can also try "polygon", "edge", etc. for a more complex look
            },
          },
        }}
      />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        {/* Trustify Title with Hover Effects */}
        <h1 className="text-9xl font-extrabold tracking-wide cursor-pointer relative z-10">
          {['T', 'R', 'U', 'S', 'T', 'I', 'F', 'Y'].map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              whileHover="hover"
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Typing Effect on Description */}
        <animated.p
          style={typingEffect}
          className="text-2xl mt-5 text-gray-800 leading-relaxed font-light text-center mx-auto max-w-3xl relative z-10"
        >
          Trustify uses <span className="font-semibold text-[#EE7540]">blockchain technology</span> to provide{" "}
          <span className="font-semibold text-[#EE7540]">tamper-proof identity verification</span>, ensuring your
          digital identity is safe from fraud.
          <span className="blinking-cursor">|</span>
        </animated.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 relative z-10">
          <a href="#contact">
            <CtaButton name={"Get Started"} />
          </a>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-cyan-400 text-white rounded-lg shadow-lg transition-all ease-in-out"
            onClick={() => setShowPopup(true)}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Pop-up Modal */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md z-50"
        >
          <motion.div
            className="bg-[#1A1A1A] p-8 rounded-lg max-w-lg text-center"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
          >
            <h2 className="text-2xl font-bold text-white">What is Trustify?</h2>
            <p className="text-gray-400 mt-4">
              Trustify uses <span className="font-semibold text-[#EE7540]">blockchain technology</span> for{" "}
              <span className="font-semibold text-[#EE7540]">secure, decentralized identity verification</span>, ensuring{" "}
              <span className="font-semibold text-[#EE7540]">privacy</span> and <span className="font-semibold text-[#EE7540]">data integrity</span>.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
