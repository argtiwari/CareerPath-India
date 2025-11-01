import React, { useState, useEffect } from 'react'; // 👈️ useState aur useEffect import karein
import './FloatingButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function FloatingButtons() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);  
    return (
        <div className="floating-buttons-container">
            {/* 1. Call Button (Shaking) */}
            <a href="tel:+919730858444" className="floating-btn call-btn shake-animate" title="Call Us">
                <FontAwesomeIcon icon={faPhone} />
            </a>

            {/* 2. WhatsApp Button (Shaking) */}
            <a href="https://wa.me/9730858444" target="_blank" rel="noopener noreferrer" className="floating-btn whatsapp-btn shake-animate" title="WhatsApp Chat">
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            {/* 3. Facebook Button */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="floating-btn facebook-btn shake-animate" title="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>

            {/* 4. Instagram Button */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="floating-btn instagram-btn shake-animate" title="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
            </a>

            {/* 5. LinkedIn Button */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="floating-btn linkedin-btn shake-animate" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            {/* 6. Scroll to Top Button (Visible on scroll) */}
            
        </div>
    );
}

export default FloatingButtons;