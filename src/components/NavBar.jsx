import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import CtaButton from "./CtaButton";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations

const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <div className="w-full xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 shadow-lg relative secondary-font">
      {/* logo with animation */}
      <motion.a
        href="/Marketing-Website/"
        className="lg:text-3xl text-2xl tracking-wide font-light text-[#7A6960]"
        whileHover={{ scale: 1.1, rotate: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        TRUSTIFY
      </motion.a>

      {/* menu */}
      <div className="lg:flex items-center justify-between lg:gap-14 hidden">
        <motion.a
          href="/Marketing-Website/"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Home
        </motion.a>
        <motion.a
          href="/Marketing-Website/#about"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          About
        </motion.a>
        <motion.a
          href="/Marketing-Website/#services"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Services
        </motion.a>
        <motion.a
          href="/Marketing-Website/#portfolio"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Technologies
        </motion.a>

        <motion.a
          href="/Marketing-Website/#contact"
          className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Contact
        </motion.a>

        {/* CTA */}
        <a href="/Marketing-Website/#contact" className="">
          <CtaButton name={"Get Started"} />
        </a>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden ">
        <RxHamburgerMenu size={"28px"} onClick={clickHandler} />
      </div>

      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-white transition-all duration-300"
        >
          <motion.a
            href="/Marketing-Website/"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Home
          </motion.a>
          <motion.a
            href="/Marketing-Website/#about"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            About
          </motion.a>
          <motion.a
            href="/Marketing-Website/#services"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Services
          </motion.a>
          <motion.a
            href="/Marketing-Website/#contact"
            className="text-gray-800 hover:text-[#EE7540] text-lg tracking-wide font-light"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Contact
          </motion.a>

          {/* CTA */}
          <a
            href="/Marketing-Website/#contact"
            className="mt-2 ml-2 flex justify-center items-center"
          >
            <CtaButton name={"Get Started"} />
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
