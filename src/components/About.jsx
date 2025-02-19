import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BsShieldLock, BsPeople, BsFingerprint } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../img/about-blockchain.svg"; // Replace with actual image

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative lg:mx-32">
      {/* Section Title */}
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center text-gray-800">
        About Trustify
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-blue-600 h-1 w-16 rounded"></div>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row items-center lg:gap-10">
        {/* Image */}
        <div data-aos="fade-up" className="lg:w-1/2 w-full py-16 px-10">
          <img className="w-full" src={aboutImg} alt="Trustify Blockchain" />
        </div>

        {/* Description */}
        <div className="lg:w-1/2 w-full px-10">
          <div data-aos="fade-left">
            <h1 className="text-gray-800 md:text-3xl font-semibold">
              Secure & Decentralized Digital Identity Verification
            </h1>
            <p className="text-lg mt-5 text-gray-600">
              Trustify is a blockchain-powered digital identity verification platform designed to
              provide **secure, decentralized, and user-controlled** identity management.
              It eliminates the inefficiencies of traditional identity systems by ensuring **privacy,
              security, and accessibility for all users**.
            </p>
          </div>

          {/* Features */}
          <div data-aos="zoom-in" className="mt-6 space-y-5">
            <FeatureItem
              icon={<BsShieldLock size={30} />}
              title="Blockchain Security"
              description="Trustify ensures immutable and tamper-proof identity verification using blockchain technology."
            />
            <FeatureItem
              icon={<BsFingerprint size={30} />}
              title="User-Controlled Privacy"
              description="Users have full control over their identity data and can share only the required information."
            />
            <FeatureItem
              icon={<BsPeople size={30} />}
              title="Global Accessibility"
              description="Designed for easy access in remote areas, Trustify eliminates the need for physical documents."
            />
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
            <a href="/#contact">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Item Component
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-blue-600 text-white rounded-lg">{icon}</div>
    <div>
      <h2 className="text-gray-800 text-xl font-medium">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default About;
