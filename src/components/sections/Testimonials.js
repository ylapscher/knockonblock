import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../assets/data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  // Show only first 6 testimonials for better layout
  const displayedTestimonials = testimonials.slice(0, 6);

  return (
    <section id="testimonials" className="testimonials">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Real feedback from satisfied customers</p>
        </div>
      <div className="container">
        <div className="testimonials-grid">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      
      </div>
        <div className="testimonials-footer">
          <p>Join hundreds of satisfied customers in Northern NJ & Southern NY</p>
        </div>
    </section>
  );
};

export default Testimonials;