import React, { useState, useRef, useEffect } from 'react';
import './FAQItem.css';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  // Measure the content height when component mounts or content changes
  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
    }
  }, [faq.answer]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button 
        className="faq-question"
        id={`faq-question-${faq.id}`}
        onClick={toggleAccordion}
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
        style={{
          height: isOpen ? `${contentHeight}px` : '0px',
          overflow: 'hidden'
        }}
      >
        <div ref={contentRef} className="faq-answer-content">
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;