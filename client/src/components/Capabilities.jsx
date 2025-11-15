import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaShieldAlt, FaBolt, FaCogs } from 'react-icons/fa';

const Capabilities = () => {
  const capabilities = [
    {
      icon: <FaEye />,
      title: 'Tactical Surveillance',
      description: 'High-resolution imaging and real-time reconnaissance systems for critical intelligence gathering missions.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Defense & Security',
      description: 'Military-grade security drones with advanced threat detection and rapid response capabilities.',
    },
    {
      icon: <FaBolt />,
      title: 'Rapid Deployment',
      description: 'Fast-launch systems designed for quick response in time-sensitive operations and emergency scenarios.',
    },
    {
      icon: <FaCogs />,
      title: 'Autonomous Systems',
      description: 'AI-powered navigation and mission planning with advanced obstacle avoidance and autonomous decision-making.',
    }
  ];

  return (
    <section id="capabilities" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 futuristic-grid"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins text-white mb-6 leading-tight uppercase"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Our <span className="gradient-text-glow">Technology</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Advanced UAV systems engineered for superior performance and reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-orange border-opacity-20 hover:border-opacity-100 p-8 lg:p-10 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-orange opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-orange opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-orange opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="w-16 h-16 border-2 border-orange flex items-center justify-center text-orange text-3xl relative overflow-hidden group">
                      {capability.icon}
                      <motion.div
                        className="absolute inset-0 bg-orange"
                        initial={{ y: '100%' }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ opacity: 0.2 }}
                      />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-poppins text-white mb-3 uppercase tracking-wide group-hover:text-orange transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Scan Line Effect on Hover */}
              <motion.div
                className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-orange to-transparent opacity-0 group-hover:opacity-100"
                initial={{ y: '-100%' }}
                whileHover={{ y: '200%' }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
