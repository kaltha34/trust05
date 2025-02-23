import React from "react";
import Accordian from "./Accordian";
import { motion } from "framer-motion";

const Faquestions = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Section Title */}
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-blue-600 h-1 w-16 rounded-xl transform hover:scale-110 transition-all duration-300"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-4xl font-semibold text-center text-gray-800 mb-10"
      >
        Frequently Asked Questions
      </motion.h2>

      {/* FAQ List with smooth transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="md:flex w-full md:gap-5 mb-5"
      >
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"What is Trustify and how does it work?"}
            answer={
              "Trustify is a blockchain-based digital identity verification platform that ensures secure, tamper-proof, and decentralized authentication of users. It uses smart contracts and encryption to protect user data while allowing seamless access control."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"How does blockchain enhance security in identity verification?"}
            answer={
              "Blockchain technology ensures security by storing identity data in an immutable, decentralized ledger. This prevents unauthorized access, identity theft, and fraud, while giving users full control over their personal information."
            }
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="md:flex w-full md:gap-5 mb-5"
      >
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"What industries can benefit from Trustify?"}
            answer={
              "Trustify is ideal for banking, healthcare, government agencies, online businesses, and any sector that requires strong digital identity verification and fraud prevention."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"Is Trustify compliant with global regulations?"}
            answer={
              "Yes, Trustify adheres to global identity verification standards such as GDPR, KYC, AML, and other data protection regulations to ensure compliance and security."
            }
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="md:flex w-full md:gap-5 mb-5"
      >
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"How can I integrate Trustify into my business?"}
            answer={
              "Businesses can integrate Trustify through APIs and SDKs to enable seamless blockchain-powered identity verification in their applications or platforms."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"What makes Trustify better than traditional identity verification systems?"}
            answer={
              "Unlike traditional identity verification methods, Trustify provides **decentralized security**, **no third-party risks**, **instant verification**, and **user-controlled privacy**, making it a superior solution for businesses and individuals."
            }
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Faquestions;
