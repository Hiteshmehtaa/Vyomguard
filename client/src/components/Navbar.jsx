import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolling down or up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    {
      name: 'Product',
      dropdown: [
        { name: 'UAV Systems', href: '#capabilities' },
        { name: 'Surveillance Tech', href: '#capabilities' },
        { name: 'Defense Solutions', href: '#capabilities' },
        { name: 'Autonomous Systems', href: '#capabilities' }
      ]
    },
    { name: 'About', href: '#about' },
    {
      name: 'Resources',
      dropdown: [
        { name: 'Documentation', href: '#contact' },
        { name: 'Case Studies', href: '#highlights' },
        { name: 'Support', href: '#contact' }
      ]
    },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black bg-opacity-80 backdrop-blur-md border-b border-orange border-opacity-20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-2xl font-bold font-poppins"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white">Vyom</span>
            <span className="gradient-text-glow">Garud</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-orange transition-colors font-medium uppercase text-sm tracking-wider">
                      <span>{link.name}</span>
                      <FaChevronDown className="text-xs" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-black border border-orange border-opacity-30 shadow-2xl"
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-orange hover:bg-opacity-20 transition-all duration-200 text-sm"
                            >
                              {item.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-orange transition-colors font-medium uppercase text-sm tracking-wider"
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                  </motion.a>
                )}
              </div>
            ))}
            <motion.a
              href="#contact"
              className="px-6 py-2 bg-orange text-white font-semibold text-sm uppercase tracking-wider hover:bg-orange-light transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-300 hover:text-orange transition-colors font-medium uppercase text-sm tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-6 py-3 bg-orange text-white font-semibold text-sm uppercase tracking-wider text-center hover:bg-orange-light transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
