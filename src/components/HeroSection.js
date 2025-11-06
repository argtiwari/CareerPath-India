// HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // CSS file import kiya

const HeroSection = () => {
  return (
    <div className="codewave-hero-container">
      {/* Animated Gradient Background - Purely for style */}
      <div className="gradient-bg"></div> 

      <div className="codewave-content-wrapper">
        {/* Left Side: Text Content */}
        <div className="codewave-text-content">
          <h1 className="codewave-title">
            Choose The Right <span className="code-highlight">College</span> 
          </h1>
          <p className="codewave-subtitle">
           Get expert counselling & end-to-end support for admissions in India’s top MBA, BBA & Business Schools. Make the right career choice with confidence.
          </p>
          <button className="codewave-cta-button">
            📞 Book Free Call
          </button>
        </div>

        {/* Right Side: Animated Visual / Image Placeholder */}
        <div className="codewave-visual-side">
          {/* Ek chhota, clean visual jo programming ko represent karega */}
          <div className="codewave-terminal-mockup">
            <p className="line-1">&gt; Trusted By Students & Parents</p>
            <p className="line-2">&gt; Transparent Guidance. No Confusion.</p>
            <p className="line-3">&gt; 10+ Years Of Counselling Experience</p>
            <p className="cursor">|</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;