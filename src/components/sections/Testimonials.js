import React from 'react';
import { testimonials } from '../../assets/data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Real feedback from satisfied customers</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <div className="testimonial-content">
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong> - {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-footer">
          <p>Want to know what your neighbors are saying about us? Check out more testimonials!</p>
          <p><strong>If we have recently serviced your home, we would appreciate a few words from you, too.</strong></p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;