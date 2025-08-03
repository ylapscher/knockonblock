import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Knock on Block</h3>
            <p>Reliable handyman services in Northern NJ</p>
          </div>
          
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📧 info@knockonblock.com</p>
            <p>📍 Serving Northern NJ</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Knock on Block Handyman Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;