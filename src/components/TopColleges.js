// src/components/TopColleges.js
import React, { useState } from 'react';
import './TopColleges.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const collegesData = {
    after12th: [
        { name: "IIT Bombay", location: "Mumbai", rating: "4.9", img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" },
        { name: "SRCC Delhi", location: "New Delhi", rating: "4.8", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop" },
        { name: "AIIMS Delhi", location: "New Delhi", rating: "4.9", img: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1000&auto=format&fit=crop" },
        { name: "BITS Pilani", location: "Pilani", rating: "4.7", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" },
    ],
    private: [
        { name: "VIT Vellore", location: "Tamil Nadu", rating: "4.5", img: "https://images.unsplash.com/photo-1592280771884-1d67ad3829be?q=80&w=1000&auto=format&fit=crop" },
        { name: "Manipal (MAHE)", location: "Karnataka", rating: "4.6", img: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1000&auto=format&fit=crop" },
        { name: "Amity University", location: "Noida", rating: "4.2", img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1000&auto=format&fit=crop" },
        { name: "LPU", location: "Punjab", rating: "4.1", img: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=1000&auto=format&fit=crop" },
    ]
};

function TopColleges() {
    const [activeTab, setActiveTab] = useState('after12th');

    return (
        <section className="top-colleges-section" id="colleges">
            <div className="container">
                <h2 className="section-title" data-aos="fade-down">Top Colleges In India</h2>
                <p className="section-subtitle" data-aos="fade-up">Discover the best campuses for your future.</p>

                <div className="college-tabs">
                    <button className={`tab-btn ${activeTab === 'after12th' ? 'active' : ''}`} onClick={() => setActiveTab('after12th')}>After 12th</button>
                    <button className={`tab-btn ${activeTab === 'private' ? 'active' : ''}`} onClick={() => setActiveTab('private')}>Private Colleges</button>
                </div>

                <div className="college-grid">
                    {collegesData[activeTab].map((college, index) => (
                        <div className="college-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                            <div className="college-img-wrapper">
                                <img src={college.img} alt={college.name} />
                                <span className="rating-badge"><FontAwesomeIcon icon={faStar} /> {college.rating}</span>
                            </div>
                            <div className="college-info">
                                <h3>{college.name}</h3>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {college.location}</p>
                                <button className="view-btn">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopColleges;