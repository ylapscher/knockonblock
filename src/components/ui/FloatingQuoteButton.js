import React from 'react';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import './FloatingQuoteButton.css';

const FloatingQuoteButton = () => {
  const scrollToSection = useScrollToSection();

  const handleClick = () => {
    scrollToSection('contact');
  };

  return (
    <button 
      className="floating-quote-button"
      onClick={handleClick}
      aria-label="Request a Quote"
    >
      Request a Quote
    </button>
  );
};

export default FloatingQuoteButton;