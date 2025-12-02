import React from 'react';
import './AdmissionGuides.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUserMd } from '@fortawesome/free-solid-svg-icons';

function AdmissionGuides() {
    return (
        <section className="guides-section" id="guides">
            <div className="container">
                <h2 className="section-title" data-aos="fade-right">Admission Guides 2025</h2>

                <div className="guides-grid">
                    {/* MBA Guide */}
                    <div className="guide-card mba-card" data-aos="fade-up">
                        {/* 🚨 Icon Graphic */}
                        <div className="card-icon-bg">
                            <FontAwesomeIcon icon={faBookOpen} />
                        </div>
                        <div className="guide-content">
                            <h3>MBA Admission 2025 – Full Guide</h3>
                            <ul>
                                <li>✅ Top Entrance Exams: CAT, XAT, MAT, CMAT</li>
                                <li>✅ Direct Admission Process (Without Entrance)</li>
                                <li>✅ Top Colleges with Low Fees & High ROI</li>
                                <li>✅ GD/PI Preparation Tips</li>
                            </ul>
                            <button className="guide-btn">Read Full MBA Guide</button>
                        </div>
                    </div>

                    {/* MBBS Guide */}
                    <div className="guide-card mbbs-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="guide-content">
                            <h3>MBBS Admission Guide (Private Only)</h3>
                            <ul>
                                <li>✅ NEET Qualification Criteria</li>
                                <li>✅ Management Quota & NRI Quota Fees</li>
                                <li>✅ Top Private Medical Colleges in Karnataka/Maharashtra</li>
                                <li>✅ Direct Admission Process Simplified</li>
                            </ul>
                            <button className="guide-btn">Read Full MBBS Guide</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdmissionGuides;