import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Trustify Info */}
        <motion.div data-aos="fade-right">
          <h1 className="text-2xl font-semibold text-white mb-3">Trustify</h1>
          <p className="mb-1 text-gray-400">Bambalapitiya</p>
          <p className="mb-5 text-gray-400">Colombo, Sri Lanka</p>
          <div>
            <p className="font-medium">
              📞 Phone: <span className="font-normal ml-1">+94 72 5950 375</span>
            </p>
            <p className="font-medium">
              ✉️ Email: <span className="font-normal ml-1">trustify05@gmail.com</span>
            </p>
          </div>
        </motion.div>

        {/* Useful Links */}
        <motion.div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-lg text-white font-medium mb-3">Useful Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400 transition duration-300">🏠 Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition duration-300">📖 About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition duration-300">⚙️ Services</Link></li>
            <li><Link to="/terms" className="hover:text-blue-400 transition duration-300">📜 Terms Of Service</Link></li>
          </ul>
        </motion.div>

        {/* Our Services */}
        <motion.div data-aos="fade-up" data-aos-delay="500">
          <h2 className="text-lg text-white font-medium mb-3">Our Services</h2>
          <ul className="space-y-2">
            <li><Link to="/identity-verification" className="hover:text-blue-400 transition duration-300">🔐 Identity Verification</Link></li>
            <li><Link to="/decentralized-kyc" className="hover:text-blue-400 transition duration-300">🔑 Decentralized KYC</Link></li>
            <li><Link to="/access-management" className="hover:text-blue-400 transition duration-300">🛡️ Access Management</Link></li>
            <li><Link to="/secure-data-storage" className="hover:text-blue-400 transition duration-300">💾 Secure Data Storage</Link></li>
          </ul>
        </motion.div>

        {/* Follow Us & CTA */}
        <motion.div data-aos="fade-up" data-aos-delay="700">
          <h2 className="text-lg text-white font-medium mb-3">Follow Us</h2>
          <p className="text-sm text-gray-400 mb-4">
            Stay updated with our latest news & security updates. Follow us on social media!
          </p>
          <div className="flex space-x-4">
            
            <motion.a
              href="https://www.instagram.com/trustify_it?igsh=MWh5MHhzbnZob3ZxZg%3D%3D&utm_source=qr"
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-pink-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <IoLogoInstagram size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/trustifyit/"
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <IoLogoLinkedin size={24} />
            </motion.a>
          </div>

          {/* Subscribe CTA */}
          <motion.div
            className="mt-6"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/newsletter">
              <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-500 transition duration-300">
                📩 Subscribe to Newsletter
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-5">
        <p>© 2025 Trustify. All Rights Reserved.</p>
        <p className="text-sm">
          🔒 Your data is secure with us. <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
