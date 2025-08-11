import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { primaryServices, secondaryServices, additionalServices } from '../../assets/data/services';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
       <div className="services-main-header">
        <h2>Our Services</h2>
         <p>Professional handyman services you can rely on</p>

        </div>
      <div className="container">
       
        
        {/* Primary Services Grid */}
        <div className="services-grid">
          {primaryServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      <div className="container">
        
 <div className="services-grid">
          {secondaryServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
      </div>
       </div>
      
      <div className="container">
            <div className="services-grid additional-services">
          {additionalServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
       </div>
    <div className="services-footer">
          <p>...and much more! Contact us for any home repair or improvement needs.</p>
        </div>
    </section>
  );
};

export default Services;