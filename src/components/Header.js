import React, { useState } from 'react';
import './Header.css';

function Header() {
  // Menu के खुले या बंद होने की स्थिति (state)
  const [isOpen, setIsOpen] = useState(false);

  // Hamburger बटन पर क्लिक हैंडलर
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <a href="/ ">
            {/* ध्यान दें: \logo192.png की बजाय /logo192.png या सही import path का उपयोग करें */}
            <img src="/brand-logo.png" alt="CareerPath India" className="logo-image" style={{ width: '150px', height: '60px' }} />
          </a>
        </div>
        
        {/* Hamburger Menu Button (केवल मोबाइल में दिखेगा) */}
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {/* ये तीन div ही animated lines हैं */}
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>

        {/* Navigation Links - isOpen state के आधार पर दिखेगा/छिपेगा */}
        <nav className={`nav-links ${isOpen ? 'show-menu' : ''}`}>
          <ul>
            <li><a href="#" onClick={toggleMenu}>Home</a></li>
            <li><a href="#streams" onClick={toggleMenu}>Streams</a></li>
            <li><a href="#ServicesSection" onClick={toggleMenu}>Courses</a></li>
            <li><a href="#why-us" onClick={toggleMenu}>Why Choose Us</a></li>
            <li><a href="#success-stories" onClick={toggleMenu}>Success Stories</a></li>
            <li><a href="#contact-info" onClick={toggleMenu}>Contact Info</a></li>
            <li className="dropdown">
              <a href="#contact" onClick={toggleMenu}>Schedule a Call</a></li>
            {/* Mobile View में CTA Button भी Menu के अंदर */}
            <li className="mobile-cta-li">
              <a 
                href="https://wa.me/9730858444" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
                onClick={toggleMenu}
              >
                Whatsapp Us
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Desktop CTA Button (मोबाइल में छिप जाएगा) */}
        <div className="cta-button desktop-cta">
          <a 
            href="https://wa.me/9730858444" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp"
          >
            Whatsapp Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;