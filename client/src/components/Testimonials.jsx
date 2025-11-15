import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Col. Rajesh Kumar",
      position: "Defense Operations Lead",
      company: "Indian Armed Forces",
      image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=06b6d4&color=fff&size=128",
      rating: 5,
      text: "VyomGarud's UAV systems have revolutionized our reconnaissance operations. The reliability and precision are unmatched in the industry. Their autonomous capabilities have significantly enhanced our mission success rates."
    },
    {
      name: "Dr. Priya Sharma",
      position: "Chief Technology Officer",
      company: "Aerospace Innovations Ltd",
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=06b6d4&color=fff&size=128",
      rating: 5,
      text: "Working with VyomGarud has been exceptional. Their cutting-edge technology and commitment to innovation align perfectly with our research goals. The technical support team is outstanding."
    },
    {
      name: "Cmdr. Vikram Singh",
      position: "Naval Aviation Director",
      company: "Indian Navy",
      image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=06b6d4&color=fff&size=128",
      rating: 5,
      text: "The maritime surveillance capabilities of VyomGarud UAVs are exceptional. They've proven invaluable for our coastal security operations with their extended range and advanced sensor suite."
    }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
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
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-poppins text-white mb-6 uppercase tracking-tight">
            Client <span className="gradient-text-glow">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by defense and aerospace leaders worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-8 h-full relative overflow-hidden hover:border-cyan-500 transition-all duration-300">
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quote Icon */}
                <div className="mb-6">
                  <FaQuoteLeft className="text-cyan-400 text-3xl opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-cyan-400 text-sm" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-cyan-500"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-cyan-400 text-xs font-semibold">
                      {testimonial.position}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Join our growing list of satisfied clients
          </p>
          <a
            href="#contact"
            className="inline-block px-12 py-5 bg-cyan-500 text-white font-bold text-lg uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
