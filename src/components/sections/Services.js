import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../assets/data/services';
import './Services.css';

const Services = () => {
  // Group services into categories for better organization
  const serviceCategories = [
    {
      title: "Electrical Services",
      icon: "⚡",
      services: services.filter(s => s.id === 5 || s.id === 9)
    },
    {
      title: "Plumbing Services", 
      icon: "🔧",
      services: services.filter(s => s.id === 1 || s.id === 6)
    },
    {
      title: "Smart Home & Tech",
      icon: "📱", 
      services: services.filter(s => s.id === 2 || s.id === 4)
    },
    {
      title: "Home Repairs",
      icon: "🔨",
      services: services.filter(s => s.id === 3 || s.id === 7 || s.id === 8)
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Professional handyman services you can rely on</p>
        </div>
        
        {/* Featured Services Grid */}
        <div className="featured-services">
          {serviceCategories.map((category, index) => (
            <div key={index} className="service-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Services Grid */}
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