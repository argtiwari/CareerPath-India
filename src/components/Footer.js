import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>CareerPath India</h3>
          <p>Your trusted partner for direct admission in top colleges across India.</p>
          <div className="social-links">
            <a href="#facebook">Facebook</a> | <a href="#instagram">Instagram</a>
          </div>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Office No. 12, Palam Vihar, <br/> Dwarka, New Delhi - 110075
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 9730858444
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@counsellingindia.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CareerPath India. All rights reserved. Developed by <a href="#" target="_blank" rel="noopener noreferrer">Arg_coding</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;