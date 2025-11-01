import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero-bg.jpg';
function HeroSection() {
  return (
    
    <section className="hero-section"
    style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>
      <div className="container hero-content" data-aos="fade-up">
        <h1>GET ADMISSION IN TOP BUSINESS SCHOOLS</h1>
        <p>Your pathway to a successful career starts here...</p>
        <div className="hero-buttons" data-aos="zoom-in" data-aos-delay="500">
          <a href="#contact" className="btn">Enquire Now</a>
          <a href="https://wa.me/9730858444" className="btn btn-whatsapp">Whatsapp Us</a>
        </div>
      </div>
    </section>
  );

}

export default HeroSection;