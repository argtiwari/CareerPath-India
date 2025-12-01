// src/data/courseData.js

const allCoursesData = {
    "bba": {
        id: "bba",
        name: "Bachelor of Business Administration (BBA)",
        description: "A 3-year undergraduate course designed to provide a strong foundation in business principles, management, and leadership.",
        duration: "3 Years",
        eligibility: "10+2 from any stream with min 50% marks.",
        avgFees: "₹1.0 - ₹3.0 Lakhs/year",
        careerProspects: "Business Development Executive, Marketing Associate, HR Generalist.",
        img: "/assets/course-images/bba.png" // Ensure you have this image
    },
    "btech": {
        id: "btech",
        name: "Bachelor of Technology (B.Tech - All Branches)",
        description: "A 4-year professional engineering degree. Choose from specializations like CSE, ECE, Mechanical, Civil, etc.",
        duration: "4 Years",
        eligibility: "10+2 with PCM, min 50% marks. Entrance exam (JEE) required.",
        avgFees: "₹1.5 - ₹4.0 Lakhs/year",
        careerProspects: "Software Engineer, Core Engineering Roles, PSU Jobs.",
        img: "/assets/course-images/btech.png" // Ensure you have this image
    },
    "law": {
        id: "law",
        name: "Law Admissions (LLB / BA LLB / BBA LLB)",
        description: "Comprehensive legal education offering 3-year LLB (after graduation) or 5-year integrated programs like BA LLB or BBA LLB.",
        duration: "3 Years or 5 Years",
        eligibility: "10+2 with min 45-50% marks. Entrance exams like CLAT often required.",
        avgFees: "₹1.0 - ₹2.5 Lakhs/year",
        careerProspects: "Lawyer, Legal Advisor, Corporate Counsel, Judiciary.",
        img: "/assets/course-images/law.png" // Ensure you have this image
    },
     "distance-edu": {
        id: "distance",
        name: "Distance & Online Education",
        description: "Flexible learning options for working professionals and students. UGC-DEB approved courses like MBA, BCA, MCA, BA, etc.",
        duration: "Varies by course (2-3 Years)",
        eligibility: "Varies by course (10+2 or Graduation).",
        avgFees: "₹20,000 - ₹1.0 Lakhs/year",
        careerProspects: "Career advancement, skill upgradation while working.",
        img: "/assets/course-images/distance.png" // Ensure you have this image
    },   
    
    "cse": {
        id: "cse", // 🚨 Added ID for linking
        name: "Computer Science Engineering (CSE)",
        description: "Focuses on the design, analysis, and application of computing systems. Covers programming, algorithms, data structures, and software development.",
        duration: "4 Years",
        eligibility: "10+2 with Physics, Chemistry, Maths (PCM) with min 50% marks. Entrance exam required.",
        avgFees: "₹1.5 - ₹3.0 Lakhs/year",
        careerProspects: "Software Developer, Data Scientist, Web Developer, AI/ML Engineer, Network Engineer.",
        img: "/assets/course-images/cse.png" // 🚨 Path now points to public folder
    },
    "ece": {
        id: "ece",
        name: "Electronics & Communication Engineering (ECE)",
        description: "Deals with electronic devices, circuits, communication systems, and signal processing. Essential for telecommunications, embedded systems, and consumer electronics.",
        duration: "4 Years",
        eligibility: "10+2 with Physics, Chemistry, Maths (PCM) with min 50% marks. Entrance exam required.",
        avgFees: "₹1.2 - ₹2.5 Lakhs/year",
        careerProspects: "Electronics Engineer, Telecom Engineer, Embedded Systems Engineer, VLSI Design Engineer.",
        img: "/assets/course-images/ece.png"
    },
    "mechanical": {
        id: "mechanical",
        name: "Mechanical Engineering",
        description: "Involves the design, analysis, manufacturing, and maintenance of mechanical systems. Core areas include thermodynamics, mechanics, fluid mechanics, and materials science.",
        duration: "4 Years",
        eligibility: "10+2 with Physics, Chemistry, Maths (PCM) with min 50% marks. Entrance exam required.",
        avgFees: "₹1.0 - ₹2.2 Lakhs/year",
        careerProspects: "Design Engineer, Production Engineer, R&D Engineer, Manufacturing Engineer.",
        img: "/assets/course-images/mechanical.png"
    },
    "civil": {
        id: "civil",
        name: "Civil Engineering",
        description: "Focuses on the design, construction, and maintenance of the physical and naturally built environment, including roads, bridges, canals, dams, and buildings.",
        duration: "4 Years",
        eligibility: "10+2 with Physics, Chemistry, Maths (PCM) with min 50% marks. Entrance exam required.",
        avgFees: "₹0.8 - ₹2.0 Lakhs/year",
        careerProspects: "Construction Engineer, Structural Engineer, Urban Planner, Geotechnical Engineer.",
        img: "/assets/course-images/civil.png"
    },
    "mbbs-abroad": {
        id: "mbbs-abroad",
        name: "MBBS Abroad",
        description: "Study Bachelor of Medicine, Bachelor of Surgery (MBBS) programs in various countries, offering global exposure and diverse medical practices.",
        duration: "5-6 Years",
        eligibility: "10+2 with Physics, Chemistry, Biology (PCB) with min 50% marks. NEET qualification often required.",
        avgFees: "₹4.0 - ₹7.0 Lakhs/year (excluding living costs)",
        careerProspects: "Doctor, Surgeon, Medical Researcher (after licensing exams in India).",
        img: "/assets/course-images/mbbs-abroad.png"
    },
    "bams": {
        id: "bams",
        name: "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
        description: "Integrates traditional Indian Ayurvedic medicine with modern medical science. Focuses on natural healing, herbs, and holistic well-being.",
        duration: "5.5 Years",
        eligibility: "10+2 with Physics, Chemistry, Biology (PCB) with min 50% marks. NEET required.",
        avgFees: "₹1.0 - ₹3.0 Lakhs/year",
        careerProspects: "Ayurvedic Practitioner, Researcher, Wellness Consultant.",
        img: "/assets/course-images/bams.png"
    },
    "hr": {
        id: "hr",
        name: "MBA in Human Resources (HR)",
        description: "Specializes in managing an organization's human capital, including recruitment, training, employee relations, and compensation.",
        duration: "2 Years",
        eligibility: "Bachelor's degree with min 50% marks. Entrance exams (CAT, XAT, MAT) required.",
        avgFees: "₹3.0 - ₹10.0 Lakhs/year",
        careerProspects: "HR Manager, Talent Acquisition Specialist, Employee Relations Manager.",
        img: "/assets/course-images/mba-hr.png"
    },
    "finance": {
        id: "finance",
        name: "MBA in Finance",
        description: "Covers financial management, investment analysis, corporate finance, and risk management. Prepares students for roles in banking, investment, and financial planning.",
        duration: "2 Years",
        eligibility: "Bachelor's degree with min 50% marks. Entrance exams (CAT, XAT, MAT) required.",
        avgFees: "₹3.0 - ₹10.0 Lakhs/year",
        careerProspects: "Financial Analyst, Portfolio Manager, Investment Banker, Corporate Finance Manager.",
        img: "/assets/course-images/mba-finance.png"
    },
    "marketing": {
        id: "marketing",
        name: "MBA in Marketing",
        description: "Focuses on market research, consumer behavior, brand management, advertising, and sales. Essential for roles in brand management, digital marketing, and sales.",
        duration: "2 Years",
        eligibility: "Bachelor's degree with min 50% marks. Entrance exams (CAT, XAT, MAT) required.",
        avgFees: "₹3.0 - ₹10.0 Lakhs/year",
        careerProspects: "Marketing Manager, Brand Manager, Digital Marketing Specialist, Sales Manager.",
        img: "/assets/course-images/mba-marketing.png"
    }



};

export default allCoursesData;