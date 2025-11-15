import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const logos = [
    { name: 'DRDO', text: 'DRDO' },
    { name: 'HAL', text: 'HAL' },
    { name: 'ISRO', text: 'ISRO' },
    { name: 'BEL', text: 'BEL' },
    { name: 'AWS', text: 'AWS' },
    { name: 'Defense Partners', text: 'DEFENSE' }
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-black to-gray-900 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 futuristic-grid"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-white text-sm uppercase tracking-widest font-semibold">
            Trusted by Defense Leaders
          </h3>
        </motion.div>
        
        {/* Infinite Scroll Container */}
        <div className="relative">
          <motion.div
            className="flex gap-16 lg:gap-24"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 group cursor-default"
              >
                <div className="flex items-center justify-center h-16 min-w-[120px]">
                  <span className="text-2xl font-bold text-white group-hover:text-orange transition-colors duration-300 font-poppins tracking-wider whitespace-nowrap">
                    {logo.text}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
