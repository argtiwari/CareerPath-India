// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// 🚨 New Image Import (PNG Illustration)
import counsellingIllustration from '../assets/counselling-illustration.png'; 
// Make sure you replace 'counselling-illustration.png' with the name you saved the generated image as.

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        course: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setSubmitted(true);
        // Normally, you would send this data to an API here
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', email: '', course: '' });
        }, 3000); 
    };

    return (
        <section className="contact-form-section" id="schedule-call">
            <div className="container form-container-wrapper">
                
                {/* Left Side: Image with Glow Effect */}
                <div className="form-illustration-side" data-aos="fade-right" data-aos-duration="1000">
                    <img 
                        src={counsellingIllustration} 
                        alt="Expert Counselling Guidance" 
                        className="counselling-illustration" 
                    />
                </div>

                {/* Right Side: Modern Form */}
                <div className="form-content-side" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                    <form onSubmit={handleSubmit} className="counselling-form">
                        <h2 className="form-main-title">
                            <FontAwesomeIcon icon={faCalendarAlt} className="title-icon" /> 
                            Book Your Free Counselling Slot
                        </h2>
                        <p className="form-subtitle">
                            Get a personalized 15-minute call with our admission experts.
                        </p>

                        <div className="form-row">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Full Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        
                        <div className="form-row">
                            <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Your Phone Number" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-row">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email Address" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-row">
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Interested Course/Stream</option>
                                <option value="mba_bba">MBA / BBA</option>
                                <option value="eng">Engineering (B.Tech)</option>
                                <option value="med">Medical (MBBS/BAMS)</option>
                                <option value="law">Law / Humanities</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="submit-btn" disabled={submitted}>
                            {submitted ? 'Slot Confirmed!' : (
                                <>
                                    <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
                                    Request Callback
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;