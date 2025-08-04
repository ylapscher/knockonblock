import React from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <section className="terms-conditions">
      <div className="container">
        <div className="terms-header">
          <h1>Terms & Conditions</h1>
          <p>Last updated: January 2025</p>
        </div>
        
        <div className="terms-content">
          <div className="terms-section">
            <h2>General Terms</h2>
            <p>
              This website (the "Site") is owned and operated by Knock on Block Handyman Services LLC 
              ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms of Service 
              and to use the Site in accordance with these Terms of Service, our Privacy Policy and any 
              additional terms and conditions that may apply to specific sections of the Site or to products 
              and services available through the Site or from COMPANY.
            </p>
            <p>
              We reserve the right to change these Terms of Service or to impose new conditions on use of 
              the Site, from time to time, in which case we will post the revised Terms of Service on this 
              website. By continuing to use the Site after we post any such changes, you accept the Terms 
              of Service, as modified.
            </p>
          </div>

          <div className="terms-section">
            <h3>Service Terms</h3>
            <p>
              All handyman services provided by Knock on Block are subject to the following terms:
            </p>
            <ul>
              <li>Services are provided during normal business hours unless otherwise agreed upon</li>
              <li>Payment is due upon completion of services unless other arrangements have been made</li>
              <li>We reserve the right to refuse service for any reason</li>
              <li>Customer must provide safe and reasonable access to work areas</li>
              <li>Additional charges may apply for materials not included in the original quote</li>
            </ul>
          </div>

          <div className="terms-section">
            <h3>Warranty and Liability</h3>
            <p>
              We warrant our workmanship for a period of 30 days from completion of services. This warranty 
              covers defects in our workmanship but does not cover normal wear and tear, damage caused by 
              misuse, or damage caused by factors beyond our control.
            </p>
            <p>
              Our liability is limited to the cost of the original service. We are not responsible for 
              indirect, incidental, or consequential damages. We maintain general liability insurance for 
              your protection.
            </p>
          </div>

          <div className="terms-section">
            <h3>Intellectual Property Rights</h3>
            <p>
              This Site and all the materials available on the Site are the property of us and/or our 
              affiliates or licensors, and are protected by copyright, trademark, and other intellectual 
              property laws. The Site is provided solely for your personal noncommercial use.
            </p>
          </div>

          <div className="terms-section">
            <h3>Payment Terms</h3>
            <ul>
              <li>Payment is due upon completion of work unless other arrangements have been made</li>
              <li>We accept cash, check, and major credit cards</li>
              <li>A service charge may apply to returned checks</li>
              <li>For larger projects, we may require a deposit before beginning work</li>
            </ul>
          </div>

          <div className="terms-section">
            <h3>Cancellation Policy</h3>
            <p>
              If you need to cancel or reschedule your appointment, please provide at least 24 hours notice. 
              Cancellations with less than 24 hours notice may be subject to a cancellation fee.
            </p>
          </div>

          <div className="terms-section">
            <h3>Disclaimers</h3>
            <p>
              THE INFORMATION, PRODUCTS AND SERVICES OFFERED ON OR THROUGH THE SITE AND BY COMPANY ARE 
              PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. TO THE FULLEST 
              EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, 
              INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR 
              PURPOSE.
            </p>
          </div>

          <div className="terms-section">
            <h3>Limitation of Liability</h3>
            <p>
              UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY 
              DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR 
              THE INABILITY TO USE, THE SITE OR OUR SERVICES.
            </p>
          </div>

          <div className="terms-section">
            <h3>Governing Law</h3>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the 
              State of New Jersey, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="terms-section">
            <h3>Contact Information</h3>
            <p>If there are any questions regarding these terms and conditions, you may contact us using the information below:</p>
            <p>
              <strong>Knock on Block Handyman Services LLC</strong><br />
              Email: info@knockonblock.com<br />
              Serving Northern NJ & Southern NY
            </p>
            <p>Last Edited: January 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;