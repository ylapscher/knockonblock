import React, { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button 
        className="faq-question"
        id={`faq-question-${faq.id}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span>{faq.question}</span>
        <div className="faq-toggle">
          {isOpen ? '−' : '+'}
        </div>
      </button>
      <div 
        className="faq-answer"
        id={`faq-answer-${faq.id}`}
        role="region"
        aria-labelledby={`faq-question-${faq.id}`}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;