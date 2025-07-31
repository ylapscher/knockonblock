import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="placeholder-image">
              👨‍🔧 Zach at Work
            </div>
          </div>
          <div className="about-text">
            <h2>About Zach Block</h2>
            <p>
              Zach Block has over 10 years of experience in home repairs. He grew up learning 
              handyman skills and has enhanced them through hands-on home remodels. In addition 
              to running Knock on Block, Zach works as a professional engineer in the prosthetics 
              industry.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">10+</span>
                <span className="highlight-text">Years Experience</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">100%</span>
                <span className="highlight-text">Customer Satisfaction</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">6</span>
                <span className="highlight-text">Counties Served</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;