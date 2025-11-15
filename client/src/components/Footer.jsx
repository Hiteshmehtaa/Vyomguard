import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-cyan-500 border-opacity-20 py-16 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 futuristic-grid"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-poppins mb-4">
              <span className="text-white">Vyom</span>
              <span className="gradient-text">Garud</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Next-generation UAV systems for military-grade operations. 
              Precision. Autonomy. Reliability.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Capabilities', href: '#capabilities' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: <FaGithub />, href: '#', label: 'GitHub' },
                { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
                { icon: <FaTwitter />, href: '#', label: 'Twitter' },
                { icon: <FaYoutube />, href: '#', label: 'YouTube' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-10 h-10 bg-charcoal border border-gray-700 hover:border-cyan-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} VyomGarud. All rights reserved. | Built with cutting-edge technology
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Designed for excellence. Engineered for the future.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


