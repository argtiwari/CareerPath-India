// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="main-footer" data-aos="fade-up" data-aos-duration="1200">
      {/* 🚨 Section Joining Effect (Wave) */}
      <div className="footer-wave-top"></div> 
      
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

        {/* 2. Quick Links Column */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#streams">Streams & Courses</a></li>
            <li><a href="#why-us">Why Choose Us</a></li>
            <li><a href="#success-stories">Success Stories</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>

        {/* 3. Contact Us Column */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" /> Office: Pune, India</p>
          <p><FontAwesomeIcon icon={faPhone} className="contact-icon" /> +91 9730858444</p>
          <p><FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> info@careerpath.com</p>
        </div>

        {/* 4. Social Media Column */}
        <div className="footer-col footer-social">
          <h3>Follow Us</h3>
          <div className="social-links-container">
            <a href="#" className="social-icon whatsapp-bg" title="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="#" className="social-icon facebook-bg" title="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="social-icon instagram-bg" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="social-icon linkedin-bg" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <div className="developer-tag">
            Developed by argtiwary
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;