import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-rating">
          {renderStars(testimonial.rating)}
        </div>
        {testimonial.date && <div className="testimonial-date">{testimonial.date}</div>}
      </div>
      <blockquote className="testimonial-text">
        "{testimonial.text}"
      </blockquote>
      <div className="testimonial-author">
        <strong>{testimonial.name}</strong>
        {testimonial.location && <span className="testimonial-location">{testimonial.location}</span>}
      </div>
    </div>
  );
};

export default TestimonialCard;