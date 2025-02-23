import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sun, Moon } from "lucide-react";

// Importing team images
import team1 from "../img/team/team-1.jpeg";
import team2 from "../img/team/team-2.jpeg";
import team3 from "../img/team/team-3.jpeg";
import team4 from "../img/team/team-4.jpeg";
import team5 from "../img/team/team-5.jpeg";
import team6 from "../img/team/team-6.jpeg";

const teamMembers = [
  { image: team1, name: "Hansaja Bandara", role: "Backend Developer" },
  { image: team2, name: "Sandaru Hansaja", role: "Backend Developer" },
  { image: team3, name: "Chamindu", role: "Frontend Developer" },
  { image: team4, name: "Kalhara Thabrew", role: "Blockchain Developer" },
  { image: team5, name: "Senuli Wanniarachchi", role: "Frontend Developer" },
  { image: team6, name: "Bagya Dewmi", role: "Frontend Developer" },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} transition-all duration-300 py-16 px-8`}>
      {/* Theme Toggle Button */}
      <div className="flex justify-end px-5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full shadow-lg"
        >
          {darkMode ? <Sun size={24} color="yellow" /> : <Moon size={24} color="black" />}
        </button>
      </div>

      {/* Section Title */}
      <h1 data-aos="fade-right" className="text-4xl font-bold text-center">
        Meet Our Team
      </h1>
      <div className="flex justify-center items-center mt-3">
        <div className={`h-1 w-20 rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-500"}`}></div>
      </div>
      <p className="text-lg text-center mt-4 mb-10">
        Our mission is clear. We are building the future of digital identity.
      </p>

      {/* Team Members */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`relative w-64 h-80 backdrop-blur-lg shadow-lg rounded-xl overflow-hidden transition-all duration-300 ${
                darkMode ? "bg-gray-800/60 border border-gray-700" : "bg-white/10 border border-gray-200"
              }`}
            >
              {/* Team Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-3/4 object-cover"
              />
              
              {/* Name & Role */}
              <div className={`absolute bottom-0 left-0 w-full ${darkMode ? "bg-gray-900/80" : "bg-black/70"} text-white p-4 text-center`}>
                <h2 className="text-lg font-semibold">{member.name}</h2>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
