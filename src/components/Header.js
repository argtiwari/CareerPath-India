// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

// Courses/Streams ka data
const courseData = [
  { title: "Engineering (B.Tech)", courses: ["CSE", "ECE", "Mechanical", "Civil"] },
  { title: "Medical (MBBS/BDS)", courses: ["MBBS Abroad", "BAMS", "BDS", "Nursing"] },
  { title: "Management (MBA)", courses: ["HR", "Finance", "Marketing", "IT"] },
  { title: "Law (LLB/BBA)", courses: ["BBA LLB", "Corporate Law", "Criminal Law"] },
];

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [activeDropdown, setActiveDropdown] = useState(null); // Dropdown state ('courses', 'admissions')

  // Handle scroll for sticky/changing navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Function to close dropdowns when mouse leaves
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Function to handle link click (for mobile view closing)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    // Navbar fixed hai, so sticky/scrolled class use hoga
    <nav className={`navbar  ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">

        {/* Logo Section */}
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>CareerPath India</Link>
        </div>

        {/* 🚨 Hamburger Menu Button (Mobile) */}
        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>

        {/* Navigation Links - Mobile par hidden, desktop par flex */}
        <div className={`nav-links ${isMenuOpen ? 'mobile-show' : ''}`}>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={handleLinkClick}>About Us</Link></li>
            

            {/* 🚨 1. COURSES Dropdown (Mega Menu) */}
          <li 
                            className="has-dropdown dropdown-desktop-only"
                            // 🚨 OnMouse events ab list item par nahi, inner div par lagenge ya pure CSS se handle honge.
                            // Pichli baar humne pure CSS :hover par shift kar diya tha.
                            // Agar aap JavaScript se control kar rahe the, toh yahan logic change hoga.
                        >
                            {/* 👇️ Ab Courses text ek Link hai */}
                            <Link 
                                to="/courses" // 🚨 Courses par click karne par is page par jayega
                                className={location.pathname.startsWith('/courses') ? 'active' : ''} // Active state agar course detail page par bhi ho
                                onClick={handleLinkClick}
                            >
                                Courses
                            </Link>

                            {/* Dropdown menu - yeh hover par hi dikhega (CSS se control) */}
                            <div className="dropdown-menu courses-mega-menu">
                                <div className="dropdown-grid">
                                    {courseData.map((stream, index) => (
                                        <div className="stream-column" key={index}>
                                            <h4>{stream.title}</h4>
                                            <ul>
                                                {stream.courses.map((course, idx) => (
                                                    <li key={idx}>
                                                        <Link to={`/courses/${course.toLowerCase().replace(/\s/g, '-')}`} onClick={handleLinkClick}>
                                                            {course}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>

            {/* 🚨 2. ADMISSIONS Dropdown (Simple List) */}
            <li>
                            <Link 
                                to="/services" 
                                className={location.pathname === '/services' ? 'active' : ''} 
                                onClick={handleLinkClick}
                            >
                                Our Services
                            </Link>
                        </li>


            <li className="nav-item  nav-links ">
              <Link 
                to="/admission-predictor" 
                className={location.pathname === '/admission-predictor' ? 'active-link' : ''} 
                onClick={handleLinkClick}
              >
                Admission Predictor
              </Link>
            </li>
          </ul>
        </div>

        {/* WhatsApp Button (Desktop) */}
        <div className="nav-cta">
          <a href="https://wa.me/YOURPHONENUMBER" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            Whatsapp Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;