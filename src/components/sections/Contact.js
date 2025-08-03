import React from 'react';
import './Contact.css';

const Contact = () => {

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

          <form 
            className="contact-form" 
            name="contact" 
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you.html"
          >
            {/* Hidden field for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Honeypot field for spam protection */}
            <div style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
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
                placeholder="e.g. Montvale, NJ 07645"
              />
            </div>

            <div className="form-group">
              <label htmlFor="workDescription">Type of Work Needed *</label>
              <textarea
                id="workDescription"
                name="workDescription"
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