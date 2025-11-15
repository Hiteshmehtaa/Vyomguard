import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 futuristic-grid"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
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
            Get in <span className="gradient-text-glow">Touch</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Get in touch with one of our UAV experts to learn more about the VyomGarud platform and solutions we provide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-500 border-opacity-20 p-8 relative overflow-hidden"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-500 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan-500 opacity-30"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-semibold uppercase text-sm tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:outline-none focus:border-cyan-500 text-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-semibold uppercase text-sm tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:outline-none focus:border-cyan-500 text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-semibold uppercase text-sm tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:outline-none focus:border-cyan-500 text-white transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-900 bg-opacity-30 border border-green-500 text-green-300'
                      : 'bg-red-900 bg-opacity-30 border border-red-500 text-red-300'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold uppercase tracking-wider text-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-poppins text-white mb-6 uppercase">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Reach out to our team for inquiries, partnerships, or support. We're here to help you achieve mission success.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 border-2 border-cyan-500 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 uppercase text-sm">Email</h4>
                  <a href="mailto:info@vyomgarud.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    info@vyomgarud.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 border-2 border-cyan-500 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 uppercase text-sm">Phone</h4>
                  <a href="tel:+918881444693" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    +91 8881444693
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 border-2 border-cyan-500 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 uppercase text-sm">Location</h4>
                  <p className="text-gray-400">
                    Defence Tech Hub<br />
                    New Delhi, India
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-cyan-500 border-opacity-30">
              <h4 className="text-white font-semibold mb-4 uppercase text-sm">Key Benefits</h4>
              <div className="space-y-2 text-gray-400">
                <p>✓ 680+ networks in 180+ countries</p>
                <p>✓ 99.9% mission success rate</p>
                <p>✓ Scalable pricing options</p>
                <p>✓ Faster deployment and troubleshooting</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
