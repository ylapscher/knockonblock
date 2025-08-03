import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    workDescription: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success message
    // In production, this would integrate with a service like Formspree or Netlify Forms
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Thanks for reaching out! We'll get back to you within 1 business day.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="back-button"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Request a Quote</h2>
            <p>Ready to get your project started? Fill out the form and we'll get back to you with a free estimate.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>info@knockonblock.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Service Areas</strong>
                  <p>Bergen, Rockland, Orange, Passaic, Hudson, and Essex counties</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⏰</span>
                <div>
                  <strong>Response Time</strong>
                  <p>Within 1 business day</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location (City/Zip)</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Montvale, NJ 07645"
              />
            </div>

            <div className="form-group">
              <label htmlFor="workDescription">Type of Work Needed *</label>
              <textarea
                id="workDescription"
                name="workDescription"
                value={formData.workDescription}
                onChange={handleChange}
                rows="5"
                placeholder="Please describe the work you need done..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;