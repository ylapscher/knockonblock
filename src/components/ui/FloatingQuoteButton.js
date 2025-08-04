import React from 'react';
import './FloatingQuoteButton.css';

const FloatingQuoteButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      className="floating-quote-button"
      onClick={scrollToContact}
      aria-label="Request a Quote"
    >
      Request a Quote
    </button>
  );
};

export default FloatingQuoteButton;