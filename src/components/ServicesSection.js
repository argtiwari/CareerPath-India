// src/components/ServicesSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGraduationCap, 
    faBookOpen, 
    faLaptopCode, 
    faStethoscope, 
    faGavel, 
    faChartLine 
} from '@fortawesome/free-solid-svg-icons'; // Zaroori icons import karein
import './ServicesSection.css';

// Stream data (Agar aapne courseData.js se link nahi kiya hai)
const servicesData = [
    {
        icon: faGraduationCap,
        title: "MBA Admission",
        description: "Achieve direct admission to top-tier MBA colleges with our expert guidance and network.",
        link: "#", // Ya fir dynamic link (eg. /courses/mba-admission)
    },
    {
        icon: faBookOpen,
        title: "BBA Admission",
        description: "Secure your spot in leading BBA institutions, building a strong foundation for your business career.",
        link: "#",
    },
    {
        icon: faLaptopCode,
        title: "B.Tech Admission",
        description: "Expert counselling for engineering college admissions, covering all branches and top institutes.",
        link: "#",
    },
    {
        icon: faStethoscope,
        title: "Medical Admissions",
        description: "Guidance for MBBS, BDS, and BAMS admissions in India and abroad, securing your medical career.",
        link: "#",
    },
    {
        icon: faGavel,
        title: "Law Admissions",
        description: "Navigate the complex process of law school admissions with our specialized support.",
        link: "#",
    },
    {
        icon: faChartLine,
        title: "Career Counselling",
        description: "Personalized career path assessment and guidance to match your passion with the right program.",
        link: "#",
    },
];

function ServicesSection() {
  return (
    <section className="services-section-redesign" id="our-services">
      <div className="container">
        
        {/* Section Header with Value Proposition */}
        <div className="services-header" data-aos="fade-down" data-aos-duration="1000">
          <h2 className="section-title">Our Premier Admission Services</h2>
          <p className="section-subtitle">
            At CareerPath India, we transform aspirations into reality. We offer **comprehensive, end-to-end guidance** for your admissions journey, simplifying complexities and maximizing your chances of securing a seat in your dream institution. Our services are crafted to empower you at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid-redesign">
          {servicesData.map((service, index) => (
            <div 
              className="service-card-redesign" 
              key={index} 
              data-aos="zoom-in" 
              data-aos-duration="1000" 
              data-aos-delay={index * 150} // Staggered animation
            >
              <div className="service-icon-wrapper">
                <FontAwesomeIcon icon={service.icon} className="service-icon-redesign" />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <a href={service.link} className="service-card-btn">
                Learn More <span className="arrow-icon">&#8594;</span>
              </a>
            </div>
          ))}
        </div>
        
        {/* Call to action at the bottom */}
        <div className="services-cta-redesign" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <p className="cta-text">Ready to get started? We're here to guide you.</p>
            <a href="#schedule-call" className="primary-button cta-main-btn">
                Book a Free Counselling Session
            </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;