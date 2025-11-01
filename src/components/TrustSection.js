import React from 'react';
import './TrustSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClipboardCheck, faShieldAlt, faUsers, faBookReader } from '@fortawesome/free-solid-svg-icons';

const trustFeatures = [
    {
        icon: faHeart,
        title: "Har Student Khaas",
        text: "Hum 'One-size-fits-all' approach mein vishwas nahi rakhte. Aapke interest, skills, aur future goals ke mutaabik hi advice dete hain."
    },
    {
        icon: faClipboardCheck,
        title: "Zero Hidden Fees",
        text: "Admission process aur fees mein poori safai (transparency). Jo bataya, wahi milega. Koi chhipa hua kharcha nahi!"
    },
    {
        icon: faShieldAlt,
        title: "Seat Suraksha Guarantee",
        text: "Hamara 15+ saal ka experience aapki pasand ke college mein seat confirm karne mein madad karta hai. Vishwas ke saath aage badhein."
    },
];

function TrustSection() {
    return (
        <section className="trust-section" id="our-commitment">
            <div className="container">
                <h2 className="section-title" data-aos="fade-down">Hamari Zimeedari: Aapki Safalta</h2>
                <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                    Why CareerPath India is the Right Step for Your Career Path.
                </p>

                <div className="trust-grid">
                    {trustFeatures.map((feature, index) => (
                        <div 
                            className="trust-card" 
                            key={index}
                            data-aos="flip-left" // Cool 3D animation
                            data-aos-delay={index * 200}
                        >
                            <div className="trust-icon-wrapper">
                                <FontAwesomeIcon icon={feature.icon} className="trust-icon" />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrustSection;