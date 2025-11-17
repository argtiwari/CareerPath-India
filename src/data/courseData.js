// src/data/courseData.js

const allCoursesData = {
    "cse": {
        name: "Computer Science Engineering (CSE)",
        description: "Focuses on the design, analysis, and application of computing systems. Covers programming, algorithms, data structures, and software development.",
        duration: "4 Years",
        eligibility: "10+2 with Physics, Chemistry, Maths (PCM) with min 50% marks. Entrance exam required.",
        avgFees: "₹1.5 - ₹3.0 Lakhs/year",
        careerProspects: "Software Developer, Data Scientist, Web Developer, AI/ML Engineer, Network Engineer.",
        img: "/src/assets/course-images/cse.png" // Placeholder, replace with actual image path
    },
    "ece": {
        name: "Electronics & Communication Engineering (ECE)",
        description: "Deals with electronic devices, circuits, communication systems, and signal processing. Essential for telecommunications, embedded systems, and consumer electronics.",
        duration: "4 Years",
        eligibility: "10+2 with Physics, Chemistry, Maths (PCM) with min 50% marks. Entrance exam required.",
        avgFees: "₹1.2 - ₹2.5 Lakhs/year",
        careerProspects: "Electronics Engineer, Telecom Engineer, Embedded Systems Engineer, VLSI Design Engineer.",
        img: "/src/assets/course-images/ece.png"
    },
    "mechanical": {
        name: "Mechanical Engineering",
        description: "Involves the design, analysis, manufacturing, and maintenance of mechanical systems. Core areas include thermodynamics, mechanics, fluid mechanics, and materials science.",
        duration: "4 Years",
        eligibility: "10+2 with Physics, Chemistry, Maths (PCM) with min 50% marks. Entrance exam required.",
        avgFees: "₹1.0 - ₹2.2 Lakhs/year",
        careerProspects: "Design Engineer, Production Engineer, R&D Engineer, Manufacturing Engineer.",
        img: "/src/assets/course-images/mechanical.png"
    },
    "civil": {
        name: "Civil Engineering",
        description: "Focuses on the design, construction, and maintenance of the physical and naturally built environment, including roads, bridges, canals, dams, and buildings.",
        duration: "4 Years",
        eligibility: "10+2 with Physics, Chemistry, Maths (PCM) with min 50% marks. Entrance exam required.",
        avgFees: "₹0.8 - ₹2.0 Lakhs/year",
        careerProspects: "Construction Engineer, Structural Engineer, Urban Planner, Geotechnical Engineer.",
        img: "/src/assets/course-images/civil.png"
    },
    "mbbs-abroad": {
        name: "MBBS Abroad",
        description: "Study Bachelor of Medicine, Bachelor of Surgery (MBBS) programs in various countries, offering global exposure and diverse medical practices.",
        duration: "5-6 Years",
        eligibility: "10+2 with Physics, Chemistry, Biology (PCB) with min 50% marks. NEET qualification often required.",
        avgFees: "₹4.0 - ₹7.0 Lakhs/year (excluding living costs)",
        careerProspects: "Doctor, Surgeon, Medical Researcher (after licensing exams in India).",
        img: "/src/assets/course-images/mbbs-abroad.png"
    },
    "bams": {
        name: "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
        description: "Integrates traditional Indian Ayurvedic medicine with modern medical science. Focuses on natural healing, herbs, and holistic well-being.",
        duration: "5.5 Years",
        eligibility: "10+2 with Physics, Chemistry, Biology (PCB) with min 50% marks. NEET required.",
        avgFees: "₹1.0 - ₹3.0 Lakhs/year",
        careerProspects: "Ayurvedic Practitioner, Researcher, Wellness Consultant.",
        img: "/src/assets/course-images/bams.png"
    },
    // ... Add more courses as needed
    // Example for MBA courses
    "hr": {
        name: "MBA in Human Resources (HR)",
        description: "Specializes in managing an organization's human capital, including recruitment, training, employee relations, and compensation.",
        duration: "2 Years",
        eligibility: "Bachelor's degree with min 50% marks. Entrance exams (CAT, XAT, MAT) required.",
        avgFees: "₹3.0 - ₹10.0 Lakhs/year",
        careerProspects: "HR Manager, Talent Acquisition Specialist, Employee Relations Manager.",
        img: "/src/assets/course-images/mba-hr.png"
    },
    "finance": {
        name: "MBA in Finance",
        description: "Covers financial management, investment analysis, corporate finance, and risk management. Prepares students for roles in banking, investment, and financial planning.",
        duration: "2 Years",
        eligibility: "Bachelor's degree with min 50% marks. Entrance exams (CAT, XAT, MAT) required.",
        avgFees: "₹3.0 - ₹10.0 Lakhs/year",
        careerProspects: "Financial Analyst, Portfolio Manager, Investment Banker, Corporate Finance Manager.",
        img: "/src/assets/course-images/mba-finance.png"
    },
    "marketing": {
        name: "MBA in Marketing",
        description: "Focuses on market research, consumer behavior, brand management, advertising, and sales. Essential for roles in brand management, digital marketing, and sales.",
        duration: "2 Years",
        eligibility: "Bachelor's degree with min 50% marks. Entrance exams (CAT, XAT, MAT) required.",
        avgFees: "₹3.0 - ₹10.0 Lakhs/year",
        careerProspects: "Marketing Manager, Brand Manager, Digital Marketing Specialist, Sales Manager.",
        img: "/src/assets/course-images/mba-marketing.png"
    },
    // ... and so on for all your courses
};

export default allCoursesData;