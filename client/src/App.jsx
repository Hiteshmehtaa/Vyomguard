import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal-dark">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <TrustedBy />
      <About />
      <Capabilities />
      <Highlights />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
