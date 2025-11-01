import React from 'react';
import './StreamsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faChartBar, faPalette, faLaptopCode, faGavel, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const streams = [
    {
        id: 1,
        title: "Science Stream",
        icon: faAtom,
        description: "Physics, Chemistry, Biology, Mathematics for engineering and medical careers."
    },
    {
        id: 2,
        title: "Commerce Stream",
        icon: faChartBar,
        description: "Accountancy, Business Studies, Economics for finance and management roles."
    },
    {
        id: 3,
        title: "Arts & Humanities",
        icon: faPalette,
        description: "History, Political Science, Psychology, Sociology for creative and social careers."
    },
    {
        id: 4,
        title: "Vocational Courses",
        icon: faLaptopCode,
        description: "Skill-based training in IT, design, hospitality, and more for direct employment."
    },
    {
        id: 5,
        title: "Law & Legal Studies",
        icon: faGavel,
        description: "Explore legal principles, judicial systems, and prepare for a career in law."
    },
    {
        id: 6,
        title: "Higher Education & Ph.D.",
        icon: faGraduationCap,
        description: "Guidance for advanced degrees and research opportunities across various fields."
    }
];

function StreamsSection() {
    return (
        <section className="streams-section" id="streams">
            <div className="container">
                <h2 className="section-title" data-aos="fade-down">Explore Our Top Streams</h2>
                <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                    Find the perfect academic path that aligns with your passion and career goals.
                </p>

                <div className="streams-grid">
                    {streams.map((stream, index) => (
                        <div
                            className="stream-card"
                            key={stream.id}
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 150}
                        >
                            <div className="stream-icon-wrapper">
                                <FontAwesomeIcon icon={stream.icon} className="stream-icon" />
                            </div>
                            <h3>{stream.title}</h3>
                            <p>{stream.description}</p>
                            <a href="#schedule-call" className="btn btn-stream-enquire">Enquire Now</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StreamsSection;