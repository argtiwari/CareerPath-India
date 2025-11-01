import React from 'react';
import './ContactSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

function ContactSection() {
    return (
        <section id='contact-info' className="contact-info-section" data-aos="fade-up">
            <div className="container">
                <h2 className="section-title" data-aos="fade-down">Get In Touch With Our Experts</h2>
                <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                    We are here to guide you. Reach out to our offices in Pune and Jamshedpur for expert admission counselling.
                </p>

                <div className="contact-grid">
                    {/* 1. Address Card 1 (Pune) */}
                    <div className="info-card" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-wrapper">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="card-icon" />
                        </div>
                        <h3>Branch Office (Pune)</h3>
                        <p>Bramhacorp Vantage Tower C, Opp. Bavdhan Police Station, Ran Nagar, Pune - 4110021</p>
                        <a href="tel:+919730858444" className="contact-link">
                           <FontAwesomeIcon icon={faPhone} /> +91 9730858444
                        </a>
                    </div>

                    {/* 2. Address Card 2 (Jamshedpur) */}
                    <div className="info-card" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-wrapper">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="card-icon" />
                        </div>
                        <h3>Head Office (Jamshedpur)</h3>
                        <p>Bhabya Sahil Apartment, 2nd Floor, 12 Masjid Road, Golmuri, Near HDFC Bank, Jamshedpur - 831003</p>
                        <a href="mailto:info@counsellingindia.com" className="contact-link">
                            <FontAwesomeIcon icon={faEnvelope} /> info@counsellingindia.com
                        </a>
                    </div>
                    
                    {/* 3. Working Hours Card */}
                    <div className="info-card" data-aos="zoom-in" data-aos-delay="400">
                        <div className="icon-wrapper">
                            <FontAwesomeIcon icon={faClock} className="card-icon" />
                        </div>
                        <h3>Working Hours</h3>
                        <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="note">Feel free to call us anytime during working hours.</p>
                    </div>

                    {/* 4. Map Placeholder - अब इसे एक अलग स्टाइल देंगे */}
                    <div className="map-embed-wrapper" data-aos="fade-up" data-aos-delay="500">
                        {/* Google Maps Embed Code यहाँ डालें */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.789139617326!2d73.74313550882772!3d18.63385012502691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b95b86927909%3A0xc3f8f103d154743c!2sBavdhan%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1678912345678!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Pune Office Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;