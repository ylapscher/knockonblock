import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { ReactComponent as Logo } from '../../logo.svg';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
    
    // Only update active section if not currently scrolling to a specific section
    if (!isScrolling) {
      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 150; // Increased offset for better accuracy
      
      let newActiveSection = 'home';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          newActiveSection = sections[i];
          break;
        }
      }
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    }
  }, [isScrolling, activeSection]);

  useEffect(() => {
    let timeoutId;
    
    const throttledScrollHandler = () => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100); // Throttle to 100ms
    };

    window.addEventListener('scroll', throttledScrollHandler);
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Handle scrolling after navigation using location state
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the state to prevent re-scrolling on subsequent renders
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('home');
    }
  };

  const handleNavItemClick = (sectionId) => {
    // Immediately set active section and disable scroll-based updates
    setActiveSection(sectionId);
    setIsScrolling(true);
    
    // Scroll to section
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
    
    // Re-enable scroll-based updates after scrolling completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // Wait for scroll animation to complete
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Zach' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div 
          className="logo" 
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        >
          <Logo className="logo-svg" />
          <span>Knock on Block</span>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;