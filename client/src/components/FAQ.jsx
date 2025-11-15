import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes VyomGarud UAVs different from competitors?",
      answer: "VyomGarud UAVs are built with cutting-edge autonomous technology, military-grade components, and advanced AI systems. Our end-to-end manufacturing process ensures the highest standards of precision and reliability."
    },
    {
      question: "What is the maximum flight time and range?",
      answer: "Our UAVs offer industry-leading flight times of up to 8 hours with ranges extending beyond 100km, depending on the model and payload configuration. We optimize every component for maximum efficiency."
    },
    {
      question: "Are your systems suitable for military applications?",
      answer: "Absolutely. VyomGarud systems are designed with military-grade specifications, including encrypted communications, advanced surveillance capabilities, and robust construction for harsh operational environments."
    },
    {
      question: "What kind of support and training do you provide?",
      answer: "We offer comprehensive training programs, 24/7 technical support, and ongoing maintenance services. Our team ensures your operators are fully equipped to maximize system capabilities."
    },
    {
      question: "Can the UAVs be customized for specific missions?",
      answer: "Yes, we provide extensive customization options including payload integration, sensor configurations, and mission-specific software modifications to meet your exact operational requirements."
    },
    {
      question: "What is the delivery and deployment timeline?",
      answer: "Standard delivery takes 12-16 weeks from order confirmation. We also offer rapid deployment options for urgent requirements, with full setup and operator training included in all packages."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 futuristic-grid"></div>
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={`faq-particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-poppins text-white mb-6 uppercase tracking-tight">
            Frequently Asked <span className="gradient-text-glow">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about VyomGarud UAV systems
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black overflow-hidden hover:border-cyan-500 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left group"
              >
                <h3 className="text-white text-lg font-semibold pr-8 group-hover:text-cyan-400 transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 border-cyan-500 text-cyan-400">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="w-16 h-0.5 bg-cyan-500 mb-4"></div>
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-cyan-500 text-white font-bold text-lg uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
