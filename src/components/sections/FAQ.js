import React from 'react';
import FAQItem from '../ui/FAQItem';
import { faqs } from '../../assets/data/faqs';
import './FAQ.css';

const FAQ = () => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Get answers to common questions about our services</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;