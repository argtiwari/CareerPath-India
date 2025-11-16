
import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

import heroIllustration from '../assets/hero-illustration.png';

const textsToType = [
  "Trusted-by Students & Parents",
  "Transparent Guidance. No Confusion.",
  "10+ Years Of Counselling Experience",
  "Your Pathway to Top Institutions."
];

function HeroSection() {
    const [displayedChars, setDisplayedChars] = useState([]); // Store individual characters
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const heroImageRef = useRef(null);

  useEffect(() => {
        let typingInterval;
        
        const handleTyping = () => {
            const currentText = textsToType[textIndex];

            if (!isDeleting && charIndex < currentText.length) {
                setDisplayedChars(prev => [...prev, { char: currentText.charAt(charIndex), id: Date.now() + charIndex }]);
                setCharIndex(prev => prev + 1);
            } else if (isDeleting && displayedChars.length > 0) {
                setDisplayedChars(prev => prev.slice(0, prev.length - 1));
            } else if (!isDeleting && charIndex === currentText.length) {
                clearInterval(typingInterval);
                setTimeout(() => setIsDeleting(true), 2000); 
                return;
            } else if (isDeleting && displayedChars.length === 0) {
                setIsDeleting(false);
                setTextIndex(prev => (prev + 1) % textsToType.length);
                setCharIndex(0); 
                clearInterval(typingInterval);
                return;
            }
        };

        typingInterval = setInterval(handleTyping, isDeleting ? 70 : 120); // Typing speed
        
        return () => clearInterval(typingInterval);
    }, [charIndex, textIndex, isDeleting, displayedChars.length]); // Add displayedChars.length to dependencies


  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrollY = window.scrollY;
        heroImageRef.current.style.setProperty('--scroll-y', `${scrollY * 0.15}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (


    <section className="hero-section">
      <div className="gradient-bg"></div>
      <div className="container hero-content">
        <div className="main-headline-area">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Choose The <span className="highlight-text">Right College</span>
          </h1>
          <p className="subtitle-text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            Get expert counselling &amp; end-to-end support for admissions in India's top MBA, BBA &amp; Business Schools. Make the right career choice with confidence.
          </p>



          <div className="hero-ctas" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <a href="#contact-info" className="primary-button">Book Free Call</a>
            <a href="#streams" className="secondary-button">Explore Courses</a>

          </div>

          <div className="typed-text-container" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                        <p className="typed-text-display">
                            {displayedChars.map((item, index) => (
                                <span 
                                    key={item.id} 
                                    className="typed-char"
                                    style={{ animationDelay: `${index * 0.02}s` }} 
                                >
                                    {item.char === ' ' ? '\u00A0' : item.char}
                                </span>
                            ))}
                            <span className="typing-cursor">|</span>
                        </p>
                    </div>
        </div>

        <div className="hero-image-container" ref={heroImageRef} data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000">
          <img
            src={heroIllustration}
            alt="Career Path Success Illustration"
            className="hero-illustration"
          />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;