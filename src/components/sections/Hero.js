import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Reliable Handyman Services in Northern NJ</h1>
          <p>Professional help from someone you can trust.</p>
          <button onClick={scrollToContact} className="cta-button">
            Request a Quote
          </button>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            🔧 Handyman at Work
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;