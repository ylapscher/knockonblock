import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Logo className="footer-logo-svg" />
              <h3>Knock on Block</h3>
            </div>
            <p>Reliable handyman services in Northern NJ & Southern NY</p>
          </div>
          
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📧 info@knockonblock.com</p>
            <p>📍 Serving Northern NJ & Southern NY</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Knock on Block Handyman Services LLC. All rights reserved.</p>
          <p>Fully insured. NJ HIC Reg. #______</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;