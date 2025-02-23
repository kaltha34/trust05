import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { HiShieldCheck, HiOutlineKey, HiUserGroup, HiOutlineDatabase } from "react-icons/hi"; // FIXED IMPORT
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-[#1E1E1E] py-12">
      {/* Section Title */}
      <h1 data-aos="fade-down" className="text-4xl font-semibold text-center">
        Our Core Services
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-blue-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center text-lg max-w-2xl mx-auto">
        At **Trustify**, we provide **secure, blockchain-powered identity verification** solutions to protect individuals and businesses from fraud.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6 md:px-20">
        <ServiceCard 
          icon={<HiShieldCheck />} 
          title="Identity Verification" 
          desc="Blockchain-based authentication ensuring tamper-proof identity security." 
        />
        <ServiceCard 
          icon={<HiOutlineKey />} 
          title="Decentralized KYC" 
          desc="Streamlined Know Your Customer (KYC) verification with blockchain trust." 
        />
        <ServiceCard 
          icon={<HiUserGroup />} 
          title="Access Management" 
          desc="Control digital identity access with role-based permissions and security." 
        />
        <ServiceCard 
          icon={<HiOutlineDatabase />} 
          title="Secure Data Storage" 
          desc="Encrypted decentralized storage solutions for businesses and individuals." 
        />
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, desc }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center cursor-pointer hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-blue-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </motion.div>
  );
};

export default Services;
