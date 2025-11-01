import React, { useState } from 'react';
import './ContactForm.css';
import ladyImage from '../assets/lady-image.png';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Your request has been submitted! We will call you soon.");
        setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id='contact' className="contact-form-section">
            <div className="container form-container">
                
                <div className="form-image-side">
                    <img src={ladyImage} alt="Counselling Executive" className="executive-image" />
                </div>
                
                <div className="form-content-side">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <p className="form-subtitle">SUBMIT YOUR DETAILS HERE</p>
                        <h2>YOU ARE JUST A CALL AWAY</h2>

                        <div className="form-row">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your email address" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        
                        <div className="form-row">
                            <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Your phone number" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="text" 
                                name="address" 
                                placeholder="Your address" 
                                value={formData.address} 
                                onChange={handleChange} 
                            />
                        </div>

                        <input 
                            type="text" 
                            name="subject" 
                            placeholder="Your subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            className="full-width-input"
                        />
                        
                        <textarea 
                            name="message" 
                            placeholder="Your message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            className="full-width-input"
                            rows="4" 
                        ></textarea>
                        
                        <button type="submit" className="btn submit-btn">
                            REQUEST A CALL SCHEDULE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;