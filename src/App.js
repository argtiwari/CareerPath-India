// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Breadcrumbs from './components/Breadcrumbs'; // Feature 2
import Preloader from './components/Preloader';     // Feature 3
import MobileStickyCTA from './components/MobileStickyCTA';

// Components Imports
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTopButton from './components/ScrollToTopButton';

// Page Components
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import StreamsSection from './components/StreamsSection';
import TopColleges from './components/TopColleges';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import WhyChooseUs from './components/WhyChooseUs';
import AdmissionGuides from './components/AdmissionGuides';
import FAQSection from './components/FAQSection';
import ServicesSection from './components/ServicesSection';
import PricingPlans from './components/PricingPlans';
import ContactSection from './components/ContactSection';
import AdmissionPredictor from './components/AdmissionPredictor';
import NotFoundPage from './pages/NotFoundPage';

// Pages (Already created)
import AllCoursesPage from './pages/AllCoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';



function App() {
  const [loading, setLoading] = useState(true); // 👈 State for Preloader

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // 2 second ka loading time simulate karte hain
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Preloader ko tab tak dikhao jab tak loading true hai
  if (loading) {
    return <Preloader />; // 👈 Feature 3: Preloader Rendered
  }


  return (
    <Router basename="/CareerPath-India">
      <ScrollToTop />
      <div className="App">
        <Header />
        <Breadcrumbs />
        
        <Routes>
          {/* 🏠 HOME PAGE */}
          <Route path="/" element={
            <>
              <HeroSection />
              <WhyChooseUs />
              <TrustSection />
              <StreamsSection />
              <TopColleges />
              <Testimonials />
              <ContactForm />
            </>
          } />

         

          {/* 🛠️ SERVICES PAGE */}
          <Route path="/services" element={
            <>
              <div className="page-spacer"></div>
              <ServicesSection />
              <AdmissionGuides />
              <PricingPlans />
              <ContactSection />
            </>
          } />

          {/* 📞 CONTACT PAGE */}
          <Route path="/contact" element={
            <>
              <div className="page-spacer"></div>
              <ContactSection />
              <ContactForm />
              <FAQSection />
            </>
          } />

          {/* 🎓 COURSES PAGES */}
          <Route path="/courses" element={<AllCoursesPage />} />
          <Route path="/courses/:courseName" element={<CourseDetailPage />} />

          {/* 📊 TOOLS */}
          <Route path="/admission-predictor" element={
             <>
               <div className="page-spacer"></div>
               <AdmissionPredictor />
             </>
          } />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>

        <FloatingButtons />
        <ScrollToTopButton />
        <MobileStickyCTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;