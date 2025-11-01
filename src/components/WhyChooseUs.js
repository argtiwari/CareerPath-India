import React from 'react';
import './WhyChooseUs.css';

const stats = [
  { label: 'Students Admitted', value: '26,000+' },
  { label: 'Colleges Network', value: '500+' },
  { label: 'Years of Experience', value: '15+' },
  { label: 'Success Rate', value: '98%' },
];

const features = [
  'Expert Career Guidance',
  'Direct Admission Assistance',
  'Extensive College Network',
  'Transparent Process',
  '24/7 Support',
  'Scholarship Opportunities',
];


function WhyChooseUs() {
  return (
    <section id="why-us" className="why-choose-us-section">
      <div className="container">
        <h2 data-aos="fade-down">Why Choose CareerPath India?</h2>
        <div className="why-content">
          <div className="features-list" data-aos="fade-right">
            <img src={process.env.PUBLIC_URL + "/why us.png"} alt="Why Choose Us" className="why-image" style={{ width: '450px', height: '450px' }} />
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                className="stat-card" 
                key={index}
                data-aos="flip-up"  
                data-aos-delay={index * 100}
              >
                <span className="stat-value">{stat.value}</span>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;