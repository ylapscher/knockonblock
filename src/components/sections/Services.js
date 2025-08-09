import React, { useRef, useEffect, useState } from 'react';
import ServiceCard from '../ui/ServiceCard';
import { primaryServices, secondaryServices, additionalServices } from '../../assets/data/services';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to pause animations when not visible
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

  return (
    <section id="services" className={`services ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className='services-wrapper'>
        {/* Main Header */}
        <div className="services-main-header">
          <h2>Our Services</h2>
          <p>Professional handyman services you can rely on</p>
        </div>
        
        {/* All Services Grid */}
        <div className="services-grid">
          {primaryServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          {secondaryServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          {additionalServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>Need Something Else?</h3>
            <p>We handle all types of home repairs and improvements. Contact us for any project!</p>
            <button className="cta-button">
              Request a Quote
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;