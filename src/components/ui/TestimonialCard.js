import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {renderStars(testimonial.rating)}
      </div>
      <blockquote className="testimonial-text">
        "{testimonial.text}"
      </blockquote>
      <div className="testimonial-author">
        <strong>{testimonial.name}</strong>
        {testimonial.location && <span>, {testimonial.location}</span>}
      </div>
    </div>
  );
};

export default TestimonialCard;