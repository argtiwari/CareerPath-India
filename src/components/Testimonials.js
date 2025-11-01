import React from 'react';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    quote: "CareerPath India has been a game-changer! Their expert guidance helped me secure admission into my top-choice MBA college. Highly recommended!",
    name: "Aman Sharma",
    course: "MBA Aspirant"
  },
  {
    id: 2,
    quote: "The admission process seemed overwhelming, but the team provided step-by-step support. I got direct admission in a great B.Tech institute. Thank you!",
    name: "Priya Singh",
    course: "B.Tech Student"
  },
  {
    id: 3,
    quote: "Professional, ethical, and extremely helpful. My experience with them for medical admission was seamless and stress-free. Best consultancy in India.",
    name: "Rajesh Kumar",
    course: "MBBS Student"
  }
];

// src/components/Testimonials.js

function Testimonials() {
  return (
    <section id="success-stories" className="testimonials-section">
      <div className="container">
        <h2 data-aos="fade-up">Success Stories 🌟</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">Hear what our happy students...</p>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div
              className="testimonial-card"
              key={review.id}
              data-aos="fade-in"  
              data-aos-delay={index * 250}
            >
              <p className="quote">"{review.quote}"</p>
              <p className="student-name">{review.name}</p>
              <p className="student-course">{review.course}</p> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;