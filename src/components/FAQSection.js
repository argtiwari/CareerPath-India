import React, { useState } from 'react';
import './FAQSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const faqs = [
    {
        q: "Direct Admission Process kya hai aur kya yeh Legal hai?",
        a: "Hamara Direct Admission ka matlab hai **Management Quota** ya **Counselling Quota** ke through aapki seat secure karna. Yeh process 100% legal aur university guidelines ke anusaar hota hai. Hum sirif authorized channels ka upyog karte hain.",
    },
    {
        q: "Aapki counseling fees kitni hoti hai?",
        a: "Hamari initial career guidance **bilkul free** hoti hai. Detailed admission process, documentation, aur seat blocking ke liye fees service aur college par depend karti hai, jiska **poora breakdown** pehle hi de diya jaata hai (Zero Hidden Cost policy).",
    },
    {
        q: "Agar mera score kam ho, toh kya mujhe Top College milega?",
        a: "Haan. Kam score hone par hum aapko **alternative colleges, management quota options,** aur **state/private universities** ke bare mein salah dete hain jahan aapki eligibility match ho. Hamara goal best possible option dilana hai.",
    },
    {
        q: "Aap kaun-kaun se courses aur streams cover karte hain?",
        a: "Hum Engineering (B.Tech), Medical (MBBS, BAMS, BDS), MBA, BBA, Law (LLB), aur Post Graduate courses ki wide range cover karte hain. Aap 'Streams' section mein puri list dekh sakte hain.",
    },
];

function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faqs">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">Aapke Sawal, Hamare Jawab</h2>
                <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                    Common doubts clear karein aur vishwas ke saath aage badhein.
                </p>

                <div className="faq-container" data-aos="fade-in" data-aos-delay="200">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                <h3>{faq.q}</h3>
                                <FontAwesomeIcon 
                                    icon={activeIndex === index ? faMinus : faPlus} 
                                    className="faq-icon"
                                />
                            </div>
                            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;