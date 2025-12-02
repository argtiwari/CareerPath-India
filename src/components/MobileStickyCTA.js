// src/components/MobileStickyCTA.js
import React from 'react';
import './MobileStickyCTA.css';

function MobileStickyCTA() {
    return (
        <div className="mobile-sticky-cta">
            <a href="tel:+919730858444" className="cta-call">📞 Call Now</a>
            <a href="#schedule-call" className="cta-enquire">📝 Enquire</a>
        </div>
    );
}

export default MobileStickyCTA;