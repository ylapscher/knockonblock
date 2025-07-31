import React, { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button 
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;