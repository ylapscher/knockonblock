import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  // Get initials for avatar
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-quote-icon">
        "
      </div>
      <div className="testimonial-content">
        <div className="testimonial-rating">
          {renderStars(testimonial.rating)}
        </div>
        <blockquote className="testimonial-text">
          {testimonial.text}
        </blockquote>
      </div>
      <div className="testimonial-footer">
        <div className="testimonial-author">
          <div className="author-avatar">
            {getInitials(testimonial.name)}
          </div>
          <div className="author-info">
            <div className="author-name">{testimonial.name}</div>
            {testimonial.location && (
              <div className="author-location">{testimonial.location}</div>
            )}
            {testimonial.date && (
              <div className="testimonial-date">{testimonial.date}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;