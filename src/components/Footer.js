// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Helper function for smooth scrolling to an ID (for links within the same page)
const scrollToSection = (id) => {
  // Scroll sirf tabhi karega jab hum Home page par hon
  if (window.location.pathname === '/') {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

function Footer() {
  return (
    <footer className="main-footer" data-aos-duration="1200">

      {/* ... (Footer content wrapper and structure) ... */}

      <div className="container footer-content">

        {/* 1. About & Logo Column */}
        <div className="footer-col footer-about">
          <h3>CareerPath India</h3>
          <p>
            Your trusted partner for direct admission and expert career counselling in India's top institutions.
          </p>
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} CareerPath India. All Rights Reserved.
          </p>
        </div>

        {/* 2. Quick Links Column (FIXED LINKS) */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            {/* Home link: Scrolls to top of the page (which usually is the HeroSection) */}
            <li>
              <Link to="/" onClick={() => scrollToSection('home')}>Home</Link>
            </li>

            {/* About Us link: Scrolls to About Us section */}
            <li>
              <Link to="/contact" onClick={() => scrollToSection('contact')}>About Us</Link>
            </li>

            {/* Courses link: Goes to the separate Courses page */}
            <li>
              <Link to="/courses">Courses</Link>
            </li>

            {/* Our Services link: Scrolls to the Services section (assuming ID is 'our-services') */}
            <li>
              <Link to="/our-services" onClick={() => scrollToSection('our-services')}>Our Services</Link>
            </li>

            {/* Admission Predictor link: Goes to the separate Predictor page */}
            <li>
              <Link to="/admission-predictor" onClick={() => scrollToSection('admission-predictor')}>Admission Predictor</Link>
            </li>
          </ul>
        </div>

        {/* 3. Contact Us Column */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" /> Office: Pune, India</p>
          <p><FontAwesomeIcon icon={faPhone} className="contact-icon" /> +91 7988770575</p>
          <p><FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> info@careerpath.com</p>
        </div>

        {/* 4. Social Media Column */}
        <div className="footer-col footer-social">
          <h3>Follow Us</h3>
          <div className="social-links-container">
            {/* External links remain <a> */}
            <a href="https://wa.me/917988770575" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp-bg" title="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon facebook-bg" title="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon instagram-bg" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-bg" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
         
        </div>

      </div>
    </footer>
  );
}

export default Footer;