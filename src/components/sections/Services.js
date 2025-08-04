import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { primaryServices, secondaryServices, additionalServices } from '../../assets/data/services';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-main-header">
          <h2>Our Services</h2>
        </div>
        
        {/* Primary Services Grid */}
        <div className="services-grid">
          {primaryServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Services Section Header */}
        <div className="services-section-header">
          <h3>Services</h3>
          <p>Professional handyman services you can rely on</p>
        </div>

        {/* Secondary Services Grid */}
        <div className="services-grid">
          {secondaryServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="services-grid additional-services">
          {additionalServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="services-footer">
          <p>...and much more! Contact us for any home repair or improvement needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;