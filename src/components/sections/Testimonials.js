import React, { useState, useEffect } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../assets/data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Real feedback from satisfied customers</p>
        </div>
        <div className="testimonials-container">
          <button className="testimonial-arrow testimonial-arrow-left" onClick={goToPrevious}>
            &#8249;
          </button>
          <div className="testimonials-wrapper">
            <div 
              className="testimonials-slider" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          <button className="testimonial-arrow testimonial-arrow-right" onClick={goToNext}>
            &#8250;
          </button>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;