// src/components/Testimonials.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

// Updated Testimonials Data
const reviews = [
    {
        id: 1,
        quote: "CareerPath India has been a game-changer! Their expert guidance helped me secure admission into my top-choice MBA college. Highly recommended!",
        name: "Aman Sharma",
        course: "MBA Aspirant",
        rating: 5
    },
    {
        id: 2,
        quote: "The admission process seemed overwhelming, but the team provided step-by-step support. I got direct admission in a great B.Tech institute. Thank you!",
        name: "Priya Singh",
        course: "MBBS Student",
        rating: 5
    },
    {
        id: 3,
        quote: "Professional, ethical, and extremely helpful. My experience with them for medical admission was seamless and stress-free. Best consultancy in India.",
        name: "Anurag Tiwari",
        course: "B.Tech Student",
        rating: 5
    },
    
     
];

const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon 
            key={index} 
            icon={faStar} 
            className={index < rating ? 'star-filled' : 'star-empty'}
        />
    ));
};

function Testimonials() {
    return (
        <section className="testimonials-section-redesign" id="success-stories">
            <div className="container">
                
                {/* Section Header */}
                <h2 className="section-title" data-aos="fade-down" data-aos-duration="1000">
                    Our Success Stories <span className="highlight-text-quote">&#9733;</span>
                </h2>
                <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                    Hear what our happy students and families have to say about their journey with us.
                </p>

                {/* Testimonials Grid (Carousel Style) */}
                <div className="reviews-grid-redesign">
                    {reviews.map((review, index) => (
                        <div 
                            className="testimonial-card-redesign" 
                            key={review.id}
                            data-aos="flip-up" 
                            data-aos-duration="1000"
                            data-aos-delay={index * 150}
                        >
                            <div className="quote-icon-top">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>

                            <div className="card-rating">
                                {renderStars(review.rating)}
                            </div>

                            <p className="review-quote">{review.quote}</p>

                            <div className="reviewer-footer">
                                <div className="reviewer-details">
                                    <h4 className="reviewer-name">{review.name}</h4>
                                    <p className="reviewer-course">{review.course}</p>
                                </div>
                                <div className="quote-icon-bottom">
                                    <FontAwesomeIcon icon={faQuoteRight} />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Final Call to Action */}
                <div className="testimonials-cta" data-aos="zoom-in" data-aos-delay="500">
                    <a href="#schedule-call" className="primary-button cta-review-btn">
                        Start Your Success Story Today!
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Testimonials;