import React from 'react';
import './ServicesSection.css';

const services = [
  { id: 1, title: 'MBA Admission', description: 'Get direct admission in top MBA colleges across India.', icon: '🎓' },
  { id: 2, title: 'BBA Admission', description: 'Secure your seat in leading BBA institutions.', icon: '📚' },
  { id: 3, title: 'B.Tech Admission', description: 'Expert guidance for engineering college admissions.', icon: '⚙️' },
  { id: 4, title: 'LLB Admission', description: 'Direct admission to prestigious law colleges.', icon: '⚖️' },
  { id: 5, title: 'Diploma Admission', description: 'Explore various diploma courses and secure admission.', icon: '📝' },
  { id: 6, title: 'Medical Admission', description: 'Assistance for MBBS, BAMS, BHMS admissions.', icon: '⚕️' },
];

function ServicesSection() {
  return (
    <section id='ServicesSection' className="services-section">
      <div className="container">
        <h2 data-aos="fade-right">Our Top Admission Services</h2>
        <p className="section-description" data-aos="fade-left">We provide expert counselling...</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={service.id} 
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="btn btn-small">Enquire Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;