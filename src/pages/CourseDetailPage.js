// src/pages/CourseDetailPage.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import allCoursesData from '../data/courseData'; // Course data import karein
import './CourseDetailPage.css'; // Apni CSS file

function CourseDetailPage() {
    const { courseName } = useParams(); // URL se courseName nikalenge (e.g., "cse", "mbbs-abroad")
    const course = allCoursesData[courseName.toLowerCase()]; // Case-insensitive lookup

    useEffect(() => {
        // Page load par top par scroll karein
        window.scrollTo(0, 0);
    }, [courseName]); // Jab courseName change ho toh scroll karein

    if (!course) {
        return (
            <div className="course-detail-page-wrapper container">
                <h1 className="course-not-found-title">Course Not Found</h1>
                <p className="course-not-found-text">The course you are looking for does not exist.</p>
                {/* Yahan aap home page par jane ka button ya all courses link de sakte hain */}
                <Link to="/courses" className="primary-button back-to-courses-btn">View All Courses</Link>
            </div>
        );
    }

    return (
        <div className="course-detail-page-wrapper">
            <div className="course-header-banner" style={{backgroundImage: `url(${course.img || 'https://via.placeholder.com/1920x300?text=Course+Image'})`}}>
                <div className="container">
                    <h1 className="course-title">{course.name}</h1>
                </div>
            </div>
            
            <div className="container course-details-content">
                <div className="course-main-info" data-aos="fade-up" data-aos-duration="800">
                    <p className="course-description">{course.description}</p>

                    <div className="course-specs-grid">
                        <div className="spec-item">
                            <h3>Duration</h3>
                            <p>{course.duration}</p>
                        </div>
                        <div className="spec-item">
                            <h3>Eligibility</h3>
                            <p>{course.eligibility}</p>
                        </div>
                        <div className="spec-item">
                            <h3>Average Fees</h3>
                            <p>{course.avgFees}</p>
                        </div>
                    </div>
                </div>

                <div className="course-career-prospects" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <h2>Career Prospects</h2>
                    <p>{course.careerProspects}</p>
                </div>

                <div className="call-to-action-card" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
                    <h3>Ready to start your journey?</h3>
                    <p>Connect with our expert counsellors for personalized guidance and admission assistance.</p>
                    <Link to="/contact" className="primary-button course-cta-btn">Get Free Counselling</Link>
                </div>
            </div>
        </div>
    );
}

export default CourseDetailPage;