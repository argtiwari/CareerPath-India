import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isLaunching, setIsLaunching] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
            setIsLaunching(false);
        }
    };

    const handleScrollToTop = () => {
        setIsLaunching(true);
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 400);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button 
            onClick={handleScrollToTop} 
            className={`scroll-to-top-btn ${isLaunching ? 'launch' : (isVisible ? 'show' : 'hide')}`} 
            title="Scroll to Top"
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
}

export default ScrollToTopButton;