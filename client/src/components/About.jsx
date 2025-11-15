import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 futuristic-grid"></div>
      </div>
      
      {/* Floating Particles */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={`about-particle-${i}-${Math.random()}`}
          className="absolute w-1 h-1 bg-orange rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-black font-poppins text-white mb-8 leading-tight uppercase tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Innovation at <span className="gradient-text-glow">its core</span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At VyomGarud, the pursuit of excellence begins with a relentless commitment to high-tech research and development. With cutting-edge technologies, VyomGarud stays at the forefront of the aerospace industry.
          </motion.p>
        </motion.div>

        {/* Three Column Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center group"
          >
            <div className="mb-6 relative">
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 border-2 border-orange flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-orange text-3xl font-black">01</span>
                <motion.div
                  className="absolute inset-0 bg-orange"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.1 }}
                />
              </motion.div>
              <div className="w-16 h-1 bg-orange mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">
                Breaking the Mould
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We challenge the status quo and bring process innovation in every step of our research and development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center group"
          >
            <div className="mb-6 relative">
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 border-2 border-orange flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-orange text-3xl font-black">02</span>
                <motion.div
                  className="absolute inset-0 bg-orange"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.1 }}
                />
              </motion.div>
              <div className="w-16 h-1 bg-orange mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">
                No Shortcuts
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We build all our systems from scratch to have total control on performance and efficiency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center group"
          >
            <div className="mb-6 relative">
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 border-2 border-orange flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-orange text-3xl font-black">03</span>
                <motion.div
                  className="absolute inset-0 bg-orange"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ opacity: 0.1 }}
                />
              </motion.div>
              <div className="w-16 h-1 bg-orange mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">
                End to End Mastery
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We use end to end manufacturing to deliver products with highest standards of precision
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
