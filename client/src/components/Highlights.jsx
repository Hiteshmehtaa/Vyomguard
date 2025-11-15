import React from 'react';
import { motion } from 'framer-motion';

const Highlights = () => {
  const highlights = [
    {
      title: 'Faster issue resolution',
      description: 'Use our IoT connectivity platform to see real-time data between your device and the network. Quickly troubleshoot and debug to improve performance and service.'
    },
    {
      title: 'Reliable uptime and efficiency',
      description: 'Use non-steered SIMs for stable, redundant connections. Achieve better uptime and fleet efficiency with reliable network coverage.'
    },
    {
      title: 'Lower operational costs',
      description: 'Use no-code cloud connectors to remove device logic, minimizing data consumption and giving you significant savings on operational costs.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
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
            Move past the <span className="gradient-text-glow">roadblocks</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-orange transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              <h3 className="text-2xl font-bold font-poppins text-white mb-4 uppercase tracking-wide group-hover:text-orange transition-colors">
                {highlight.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-black border-2 border-orange border-opacity-30 p-12 lg:p-16 overflow-hidden"
        >
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-orange"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-orange"></div>
          
          <h3 className="text-3xl md:text-5xl font-black font-poppins text-white mb-12 text-center uppercase tracking-tight relative z-10">
            Low power, low data, <span className="gradient-text-glow">maximum performance</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {[
              { value: '86%', label: 'Faster issue resolution' },
              { value: '99.9%', label: 'Mission success rate' },
              { value: '80%', label: 'Reduction in downtime' },
              { value: '15min', label: 'Average deployment' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center group cursor-default"
              >
                <div className="relative">
                  <div className="text-4xl md:text-6xl font-black text-orange mb-3 font-mono group-hover:text-shadow-glow transition-all">
                    {stat.value}
                  </div>
                  <motion.div
                    className="h-1 bg-orange mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  />
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-widest mt-3">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
