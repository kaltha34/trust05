import React from "react";
import { motion } from "framer-motion";

// Example tech stack data
const techStack = [
  {
    name: "React.js",
    icon: "⚛️",
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Node.js",
    icon: "🟩",
    description: "A JavaScript runtime for building server-side applications",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    description: "A NoSQL database for scalable and flexible data storage",
  },
  {
    name: "Blockchain",
    icon: "🔗",
    description: "A decentralized ledger technology for secure transactions",
  },
  {
    name: "TailwindCSS",
    icon: "💅",
    description: "A utility-first CSS framework for rapid UI design",
  },
  {
    name: "Express.js",
    icon: "🟦",
    description: "A minimal and flexible Node.js web application framework",
  },
  // Add more technologies if needed
];

const TechStack = () => {
  return (
    <div className="text-[#7A6960] bg-gray-50 py-16">
      <h1 className="text-3xl font-semibold text-center">Technologies We Use</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        We use the best-in-class technologies to build powerful and scalable solutions.
      </p>

      {/* Tech Stack Icons */}
      <motion.div
        className="flex justify-center items-center flex-wrap gap-12 p-8"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 2,
        }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-36 h-36 flex items-center justify-center bg-white rounded-xl shadow-xl transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {/* Tech Icon */}
            <div className="text-4xl">{tech.icon}</div>

            {/* Description on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl flex justify-center items-center p-4">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold">{tech.name}</h3>
                <p className="mt-2 text-sm">{tech.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Robust Features Section */}
      <section className="mt-20">
        <h2 className="text-3xl text-center text-[#7A6960] mb-6">Our Robust Features</h2>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <motion.div
            className="bg-black text-white p-8 rounded-xl shadow-lg w-80"
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold">High Performance</h3>
            <p className="mt-4">
              Our app is optimized for high performance, providing fast response times and smooth user experience even under heavy traffic.
            </p>
          </motion.div>
          <motion.div
            className="bg-black text-white p-8 rounded-xl shadow-lg w-80"
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold">Scalability</h3>
            <p className="mt-4">
              Built with scalable architectures such as microservices and cloud-native patterns, our solution grows with your business needs.
            </p>
          </motion.div>
          <motion.div
            className="bg-black text-white p-8 rounded-xl shadow-lg w-80"
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold">Security</h3>
            <p className="mt-4">
              We ensure data security and privacy with strong encryption and secure authentication processes.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
