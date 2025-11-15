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
        {
          category: 'UAV Systems',
          items: [
            { name: 'Surveillance Drones', desc: 'Advanced aerial monitoring', href: '#capabilities' },
            { name: 'Combat UAVs', desc: 'Military-grade systems', href: '#capabilities' },
            { name: 'Cargo Drones', desc: 'Heavy payload delivery', href: '#capabilities' }
          ]
        },
        {
          category: 'Technology',
          items: [
            { name: 'AI Navigation', desc: 'Autonomous flight systems', href: '#capabilities' },
            { name: 'Sensor Suite', desc: 'Multi-spectrum detection', href: '#capabilities' },
            { name: 'Communication', desc: 'Encrypted data links', href: '#capabilities' }
          ]
        }
      ]
    },
    { name: 'About', href: '#about' },
    {
      name: 'Resources',
      dropdown: [
        {
          category: 'Learn',
          items: [
            { name: 'Documentation', desc: 'Technical guides', href: '#contact' },
            { name: 'Case Studies', desc: 'Success stories', href: '#highlights' },
            { name: 'Testimonials', desc: 'Client reviews', href: '#testimonials' }
          ]
        },
        {
          category: 'Support',
          items: [
            { name: 'FAQ', desc: 'Common questions', href: '#faq' },
            { name: 'Contact', desc: 'Get in touch', href: '#contact' }
          ]
        }
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
          ? 'bg-black bg-opacity-95 backdrop-blur-md border-b border-cyan-500 border-opacity-20 shadow-lg' 
          : 'bg-black bg-opacity-80 backdrop-blur-sm'
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
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors font-medium uppercase text-sm tracking-wider">
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
                                            className="absolute top-full right-0 mt-2 w-[600px] bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl border-2 border-cyan-500 border-opacity-30 shadow-2xl p-8 z-50"
                        >
                          {/* Decorative elements */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                          
                          <div className="grid grid-cols-2 gap-8 p-8">
                            {link.dropdown.map((column, colIndex) => (
                              <div key={colIndex} className="space-y-4">
                                <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-cyan-500 border-opacity-30">
                                  {column.category}
                                </h3>
                                <div className="space-y-2">
                                  {column.items.map((item, itemIndex) => (
                                    <a
                                      key={itemIndex}
                                      href={item.href}
                                      className="group block p-3 rounded-md hover:bg-cyan-500 hover:bg-opacity-10 transition-all duration-200"
                                    >
                                      <div className="text-white text-sm font-semibold mb-0.5 group-hover:text-cyan-400 transition-colors">
                                        {item.name}
                                      </div>
                                      <div className="text-gray-400 text-xs">
                                        {item.desc}
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Bottom gradient */}
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors font-medium uppercase text-sm tracking-wider"
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                  </motion.a>
                )}
              </div>
            ))}
            <motion.a
              href="#contact"
              className="px-6 py-2 bg-cyan-500 text-white font-semibold text-sm uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300"
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
                className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors font-medium uppercase text-sm tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-6 py-3 bg-cyan-500 text-white font-semibold text-sm uppercase tracking-wider text-center hover:bg-cyan-400 transition-all duration-300"
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
