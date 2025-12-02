import React from 'react';
import './PricingPlans.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function PricingPlans() {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <h2 className="section-title" data-aos="zoom-in">Counselling Support Plans</h2>
                <p className="pricing-subtitle">Choose the right guidance for your career.</p>

                <div className="pricing-grid">
                    {/* FREE PLAN */}
                    <div className="pricing-card free" data-aos="flip-left">
                        <h3>Basic Support</h3>
                        <div className="price">₹0 <span>/ Free</span></div>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="green"/> Basic College List</li>
                            <li><FontAwesomeIcon icon={faCheck} className="green"/> General Admission Process Info</li>
                            <li><FontAwesomeIcon icon={faCheck} className="green"/> WhatsApp Group Access</li>
                            <li><FontAwesomeIcon icon={faTimes} className="red"/> Personalized Roadmap</li>
                            <li><FontAwesomeIcon icon={faTimes} className="red"/> Direct Call with Senior Expert</li>
                        </ul>
                        <a href="#schedule-call" className="pricing-btn basic">Get Started</a>
                    </div>

                    {/* PAID PLAN */}
                    <div className="pricing-card premium" data-aos="flip-right">
                        <div className="recommended-badge">Recommended</div>
                        <h3>Premium Mentorship</h3>
                        <div className="price">₹999 <span>/ One Time</span></div>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="green"/> <b>Personalized College Shortlisting</b></li>
                            <li><FontAwesomeIcon icon={faCheck} className="green"/> <b>1-on-1 Call with Senior Counsellor</b></li>
                            <li><FontAwesomeIcon icon={faCheck} className="green"/> Guaranteed Admission Assistance</li>
                            <li><FontAwesomeIcon icon={faCheck} className="green"/> Fee Negotiation Support</li>
                            <li><FontAwesomeIcon icon={faCheck} className="green"/> Complete Documentation Help</li>
                        </ul>
                        <a href="#schedule-call" className="pricing-btn premium-btn">Book Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingPlans;