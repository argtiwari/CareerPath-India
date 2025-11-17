// src/components/ContactSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMapMarkerAlt, 
    faClock, 
    faPhoneAlt, 
    faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import './ContactSection.css'; // Nayi CSS file

// 🚨 New SVG Illustration Imports (Saved in src/assets)
import contactLeftIllustration from '../assets/contact-illustration-left.png'; 
import contactRightIllustration from '../assets/contact-illustration-right.png';

function ContactSection() {
    return (
        <section className="contact-section-redesign" id="contact">
            <div className="container contact-content-wrapper">
                
                {/* Left Illustration */}
                <div className="contact-illustration left-illustration" data-aos="fade-right" data-aos-duration="1000">
                    <img src={contactLeftIllustration} alt="Contact Support" />
                </div>

                {/* Main Contact Info Grid */}
                <div className="main-contact-info-grid">
                    
                    {/* Header */}
                    <div className="contact-header" data-aos="fade-down" data-aos-duration="1000">
                        <h2 className="section-title">Get In Touch With Our Experts</h2>
                        <p className="section-subtitle">
                            We're here to guide you every step of the way. Reach out to us directly or visit our offices for expert admission counselling. Your success starts with a conversation.
                        </p>
                    </div>

                    {/* Info Cards */}
                    <div className="contact-info-cards">
                        
                        <div className="info-card" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                            <div className="info-icon-wrapper">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                            </div>
                            <h3 className="info-card-title">Branch Office (Pune)</h3>
                            <p className="info-card-text">
                                Bramhacorp Vantage Tower C, Opp. Bavdhan Police Station, Ran Nagar,<br />Pune - 411001
                            </p>
                            <a href="tel:+917988770575" className="info-card-link">
                                <FontAwesomeIcon icon={faPhoneAlt} /> +91 7988770575
                            </a>
                        </div>

                        <div className="info-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                            <div className="info-icon-wrapper">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                            </div>
                            <h3 className="info-card-title">Head Office (Jamshedpur)</h3>
                            <p className="info-card-text">
                                Bhabya Sahil Apartment, 2nd Floor, 12 Masjid Road, Golmuri, Near HDFC Bank,<br />Jamshedpur - 831003
                            </p>
                            <a href="tel:+917988770575" className="info-card-link">
                                <FontAwesomeIcon icon={faPhoneAlt} /> +91 7988770575
                            </a>
                        </div>

                        <div className="info-card" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                            <div className="info-icon-wrapper">
                                <FontAwesomeIcon icon={faClock} className="info-icon" />
                            </div>
                            <h3 className="info-card-title">Working Hours</h3>
                            <p className="info-card-text">
                                Monday - Saturday: 9:00 AM - 7:00 PM<br />
                                Sunday: Closed
                            </p>
                            <a href="#schedule-call" className="info-card-link">
                                <FontAwesomeIcon icon={faEnvelope} /> Schedule a Call
                            </a>
                        </div>

                    </div> {/* End Info Cards */}

                    {/* Map Section */}
                    <div className="contact-map" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                        {/* You can embed Google Maps iframe here */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.52458957884!2d86.1953255149673!3d22.75618458510807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e317c82c2a9d%3A0x6a0f4435b67a5b3a!2sBhabya%20Sahil%20Apartment!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: '15px' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Office Location Map"
                        ></iframe>
                    </div>

                </div> {/* End Main Contact Info Grid */}

                {/* Right Illustration */}
                <div className="contact-illustration right-illustration" data-aos="fade-left" data-aos-duration="1000">
                    <img src={contactRightIllustration} alt="Connect with us" />
                </div>

            </div>
        </section>
    );
}

export default ContactSection;