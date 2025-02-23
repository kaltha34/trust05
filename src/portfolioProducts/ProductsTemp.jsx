import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CtaButton from "../components/CtaButton";

const techStack = [
  { name: "React.js", icon: "⚛️" },
  { name: "Node.js", icon: "🟩" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Blockchain", icon: "🔗" },
];

const Appproducts = ({ img, title, description, tech }) => {
  let date = new Date().toLocaleDateString();

  return (
    <div className="bg-white text-gray-800 transition-all duration-300">
      <NavBar />

      {/* Product Section */}
      <section className="w-full py-16 px-6 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Image Box with Hover Effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:w-2/3 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-auto object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              src={img}
              alt="App Screenshot"
            />
          </motion.div>

          {/* Description & Details */}
          <div className="md:w-1/3 flex flex-col gap-6">
            <div className="p-6 bg-gray-50 shadow-lg rounded-xl border border-gray-300">
              <h1 className="text-3xl font-bold text-[#7A6960]">
                {title || "Project Information"}
              </h1>
              <div className="h-[2px] mt-3 bg-gray-300"></div>
              <ul className="mt-3 space-y-2 text-lg">
                <li>
                  <span className="font-semibold">Category:</span> Software
                </li>
                <li>
                  <span className="font-semibold">Client:</span> Global
                </li>
                <li>
                  <span className="font-semibold">Project Date:</span> {date}
                </li>
                <li>
                  <span className="font-semibold">Project URL:</span>{" "}
                  <a
                    href="https://www.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.example.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Project Description */}
            <div>
              <h1 className="text-2xl font-bold text-[#7A6960]">
                About This Project
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                {description ||
                  "This project is an innovative application built using cutting-edge technologies to provide seamless user experience and efficiency."}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h1 className="text-2xl font-bold text-[#7A6960]">
                Tech Stack
              </h1>
              <div className="mt-3 flex gap-4 flex-wrap">
                {(tech || techStack).map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg shadow-md"
                  >
                    {tech.icon} {tech.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex items-center justify-center mt-4">
              <Link to="/hireus">
                <CtaButton name={"Hire Us"} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Newsletter & Footer */}
      <section className="w-full py-16 px-6 lg:px-32 bg-gray-50">
        <Newsletter />
      </section>
      <Footer />
    </div>
  );
};

export default Appproducts;
