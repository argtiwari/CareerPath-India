// src/components/ProcessSection.js
import React from 'react';
import './ProcessSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserGraduate, faFileAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const processSteps = [
    {
        id: 1,
        title: "Step 1: Discovery",
        subtitle: "Explore & Shortlist",
        desc: "We analyze your profile, interests, and academic score to shortlist the best colleges that match your career goals.",
        icon: faSearch,
        color: "#213045" // Uniform dark card color
    },
    {
        id: 2,
        title: "Step 2: Consultation",
        subtitle: "Expert Guidance",
        desc: "Talk to our senior counsellors. We clear your doubts, discuss fees, placements, and finalize the target institutions.",
        icon: faUserGraduate,
        color: "#213045"
    },
    {
        id: 3,
        title: "Step 3: Documentation",
        subtitle: "Hassle-free Paperwork",
        desc: "We handle the application forms, document verification, and submission process so you don't have to worry.",
        icon: faFileAlt,
        color: "#213045"
    },
    {
        id: 4,
        title: "Step 4: Admission Secured",
        subtitle: "Start Your Journey",
        desc: "Get your admission letter and step into your dream college. We support you until you settle in.",
        icon: faCheckCircle,
        color: "#213045"
    }
];

function ProcessSection() {
    return (
        <section className="process-section vertical-list" id="process">
            <div className="container"> 
                {/* Container added back for max-width centering */}
                
                <div className="process-header">
                    <h2>Your Journey to Success</h2>
                    <p>Simple 4-step process to get into your dream college.</p>
                </div>

                {/* 🚨 process-grid class hata diya, ab direct vertical flow hoga */}
                <div className="vertical-stack-wrapper"> 
                    {processSteps.map((step) => (
                        <div 
                            className="process-card big-box" 
                            key={step.id} 
                            // Distinct color wapas set kiya
                            style={{ backgroundColor: step.color }} 
                        >
                            <div className="card-number">0{step.id}</div>
                            <div className="card-content">
                                <div className="card-left">
                                    <h3>{step.title}</h3>
                                    <h4>{step.subtitle}</h4>
                                    <p>{step.desc}</p>
                                </div>
                                <div className="card-right">
                                    <FontAwesomeIcon icon={step.icon} className="static-process-icon  process-icon" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProcessSection;