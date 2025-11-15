import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/1851190-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated Particle Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatedBackground />
        
        {/* Light overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400 blur-3xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 scanlines pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Animated Main Headline - Word by Word */}
          <div className="mb-8 overflow-hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-3">
                {['REVOLUTIONIZING'].map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins text-white tracking-tight uppercase"
                    style={{
                      textShadow: '0 0 15px rgba(0, 255, 255, 0.25), 0 0 30px rgba(0, 200, 255, 0.15)'
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {['UNMANNED', 'AVIATION'].map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i + 1}
                    variants={wordVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins gradient-text-glow tracking-tight uppercase"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Subtitle with Reveal Animation */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block relative">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-3xl px-4">
                Pushing the boundaries of what's possible in the skies through relentless pursuit of cutting-edge research
              </p>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.2, duration: 1 }}
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#capabilities"
              className="group relative px-12 py-5 bg-cyan-600 text-white font-bold text-lg overflow-hidden rounded-sm uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Our Vision</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="group relative px-12 py-5 border-2 border-white text-white font-bold text-lg rounded-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>

          {/* Tech Specs Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-24"
          >
            {[
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' },
              { value: 'AI', label: 'Powered' },
              { value: '15min', label: 'Deploy' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.1 }}
              >
                <div className="text-center p-4 border border-cyan-500 border-opacity-30 bg-black/60 backdrop-blur-sm hover:border-opacity-100 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
                <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
