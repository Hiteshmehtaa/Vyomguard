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

  // Generate random delays for each letter
  const [randomDelays] = React.useState(() => {
    const text = 'NEXT GENERATION AERIAL DOMINANCE';
    const letters = text.replace(/ /g, '').length;
    const delays = Array.from({ length: letters }, (_, i) => i);
    
    // Shuffle the delays array for random order
    for (let i = delays.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [delays[i], delays[j]] = [delays[j], delays[i]];
    }
    return delays;
  });

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.5
    },
    visible: (delay) => ({
      opacity: [0, 0, 1, 0.3, 1, 0.5, 1],
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: delay * 0.04,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        opacity: {
          duration: 0.8,
          times: [0, 0.1, 0.3, 0.5, 0.7, 0.85, 1]
        }
      }
    })
  };

  // Split text into individual letters with random delays
  const animateText = (text, delayOffset = 0) => {
    let letterIndex = 0;
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return (
          <span key={index} className="inline-block" style={{ minWidth: '0.5em' }}>
            {'\u00A0'}
          </span>
        );
      }
      
      const delay = randomDelays[delayOffset + letterIndex];
      letterIndex++;
      
      return (
        <motion.span
          key={index}
          custom={delay}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char}
        </motion.span>
      );
    });
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
          {/* Animated Main Headline - Letter by Letter */}
          <div className="mb-8 overflow-hidden">
            <div className="text-center">
              <div className="mb-3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins text-white tracking-tight uppercase"
                    style={{
                      textShadow: '0 0 15px rgba(0, 255, 255, 0.25), 0 0 30px rgba(0, 200, 255, 0.15)',
                      perspective: '1000px'
                    }}>
                  {animateText('NEXT GENERATION', 0)}
                </h1>
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins gradient-text-glow tracking-tight uppercase"
                    style={{ perspective: '1000px' }}>
                  {animateText('AERIAL', 16)}
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins gradient-text-glow tracking-tight uppercase"
                    style={{ perspective: '1000px' }}>
                  {animateText('DOMINANCE', 22)}
                </h1>
              </div>
            </div>
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
