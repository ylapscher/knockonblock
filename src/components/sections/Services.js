import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../assets/data/services';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Professional handyman services you can rely on</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
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