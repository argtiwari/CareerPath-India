// src/components/WhyChooseUs.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserTie,       // Experienced Counsellors
    faHandshake,     // Personalized Guidance
    faTrophy,        // Proven Track Record
    faUniversity,    // Vast Network
    faClipboardCheck,// Transparent Process
    faRocket         // Future-Proof Careers
} from '@fortawesome/free-solid-svg-icons';
import './WhyChooseUs.css'; // Nayi CSS file

// Data for reasons to choose us
const reasonsData = [
    {
        icon: faUserTie,
        title: "Expert & Experienced Counsellors",
        description: "Our team comprises seasoned professionals with years of experience in admission consulting.",
        aosDelay: 100,
    },
    {
        icon: faHandshake,
        title: "Personalized Guidance & Support",
        description: "We tailor our strategies to your unique profile, ensuring a perfect match for your aspirations.",
        aosDelay: 200,
    },
    {
        icon: faTrophy,
        title: "Proven Track Record of Success",
        description: "A long history of successful admissions to India's top colleges speaks for itself.",
        aosDelay: 300,
    },
    {
        icon: faUniversity,
        title: "Fast Network & Direct Admissions",
        description: "Access our exclusive network for direct admission opportunities in premier institutions.",
        aosDelay: 400,
    },
    {
        icon: faClipboardCheck,
        title: "Transparent & Ethical Process",
        description: "We believe in complete clarity. No hidden costs, no complicated procedures.",
        aosDelay: 500,
    },
    {
        icon: faRocket,
        title: "Future-Proof Career Planning",
        description: "Beyond admissions, we help you choose programs that align with future industry demands.",
        aosDelay: 600,
    },
];

function WhyChooseUs() {
    return (
        <section className="why-choose-us-redesign" id="why-choose-us">
            <div className="container">
                
                {/* Section Header */}
                <div className="wcu-header" data-aos="fade-down" data-aos-duration="1000">
                    <h2 className="section-title">Why Choose CareerPath India?</h2>
                    <p className="section-subtitle">
                        Your future is too important to leave to chance. At CareerPath India, we combine **unwavering commitment, unparalleled expertise, and a student-first approach** to ensure your academic journey is a resounding success. Discover what sets us apart.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="wcu-reasons-grid">
                    {reasonsData.map((reason, index) => (
                        <div 
                            className="wcu-card" 
                            key={index}
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            data-aos-delay={reason.aosDelay} // Staggered animation
                        >
                            <div className="wcu-icon-wrapper">
                                <FontAwesomeIcon icon={reason.icon} className="wcu-icon" />
                            </div>
                            <h3 className="wcu-card-title">{reason.title}</h3>
                            <p className="wcu-card-description">{reason.description}</p>
                        </div>
                    ))}
                </div>

                {/* Get In Touch CTA - Upgraded */}
                <div className="wcu-cta-section" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700">
                    <h3 className="cta-heading">Ready to Secure Your Future?</h3>
                    <p className="cta-subheading">Don't wait! Limited slots available for personalized counselling.</p>
                    <a href="#schedule-call" className="primary-button wcu-cta-btn">
                        Get Your Free Consultation Now!
                    </a>
                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;