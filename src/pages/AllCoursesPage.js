// src/pages/AllCoursesPage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import allCoursesData from '../data/courseData';
import './AllCoursesPage.css'; // Apni CSS file

function AllCoursesPage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Page load par top par scroll karein
    }, []);

    // allCoursesData ko streams ke hisaab se group kar sakte hain
    const groupedCourses = {};
    Object.values(allCoursesData).forEach(course => {
        const streamTitle = course.name.includes("Engineering") ? "Engineering" :
                            course.name.includes("Medical") ? "Medical" :
                            course.name.includes("MBA") ? "Management" :
                            course.name.includes("Law") ? "Law" : "Other"; // Ya koi default
        
        if (!groupedCourses[streamTitle]) {
            groupedCourses[streamTitle] = [];
        }
        groupedCourses[streamTitle].push(course);
    });

    return (
        <div className="all-courses-page-wrapper">
            <div className="courses-hero-banner">
                <div className="container">
                    <h1 className="courses-page-title">Explore All Our Programs</h1>
                    <p className="courses-page-subtitle">Find the perfect academic path for your future.</p>
                </div>
            </div>

            <div className="container courses-list-content">
                {Object.keys(groupedCourses).map(streamTitle => (
                    <div className="course-stream-section" key={streamTitle} data-aos="fade-up" data-aos-duration="1000">
                        <h2>{streamTitle}</h2>
                        <div className="course-cards-grid">
                            {groupedCourses[streamTitle].map((course, index) => (
                                <Link 
                                    to={`/courses/${course.name.toLowerCase().replace(/\s/g, '-').replace(/(\(|\))/g, '')}`} 
                                    className="course-card" 
                                    key={index}
                                >
                                    <img src={course.img || 'https://via.placeholder.com/150?text=Course'} alt={course.name} className="course-card-img" />
                                    <h3>{course.name}</h3>
                                    <p className="card-fees">{course.avgFees}</p>
                                    <span className="card-view-details">View Details &#8594;</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="call-to-action-card contact-cta" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                    <h3>Need personalized guidance?</h3>
                    <p>Our expert counsellors are here to help you choose the right course.</p>
                    <Link to="/contact" className="primary-button cta-button">Talk to an Expert</Link>
                </div>
            </div>
        </div>
    );
}

export default AllCoursesPage;