import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../assets/data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const slidesPerView = 0;
  const maxIndex = testimonials.length - slidesPerView;

  // Intersection Observer to pause auto-scroll when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality - only when visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 8000); // 8 seconds

    return () => clearInterval(interval);
  }, [isVisible, maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="container">
        <div className='testimonials-wrapper'>
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Real feedback from satisfied customers</p>
          </div>
          
          <div className="testimonials-slider-container">
            <button className="testimonials-arrow testimonials-arrow-left" onClick={goToPrevious}>
              &#8249;
            </button>
            
            <div className="testimonials-slider-wrapper">
              <div 
                className="testimonials-slider" 
                style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-slide">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
            
            <button className="testimonials-arrow testimonials-arrow-right" onClick={goToNext}>
              &#8250;
            </button>
          </div>
          
          <div className="testimonials-dots">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          
          <div className="testimonials-footer">
            <p>Join hundreds of satisfied customers in Northern NJ & Southern NY</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;