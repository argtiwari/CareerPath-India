// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 🚨 Router, Routes, Route import
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Global CSS

// All your components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import FloatingButtons from './components/FloatingButtons';
import StreamsSection from './components/StreamsSection';
import ScrollToTopButton from './components/ScrollToTopButton';
import ContactSection from './components/ContactSection';
import AdmissionPredictor from './components/AdmissionPredictor';


import AdmissionsPage from './pages/AdmissionsPage';
import CourseDetailPage from './pages/CourseDetailPage';
import AllCoursesPage from './pages/AllCoursesPage';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            // Mirror: true, // Agar aap chahte hain ki animation scroll up karne par reverse ho
        });
    }, []);

    return (
        <Router basename="/CareerPath-India"> 
            <div className="App">
                <Header /> {/* 👈️ Header ko <Router> ke andar, <Routes> ke bahar rakhein */}

                {/* Main Content Area - Yahan specific pages ke components render honge */}
                <Routes>
                    {/* Home Page Route - Saare sections ek hi page par hain */}
                    <Route 
                        path="/" 
                        element={
                            <> {/* 👈️ Fragment use karein multiple components ke liye */}
                                <HeroSection />
                                <ServicesSection />
                                <WhyChooseUs />
                                <Testimonials />
                                <ContactSection />
                                {/* <ContactForm /> */}
                            </>
                        } 
                    />



                    <Route path="/admission-predictor" element={<AdmissionPredictor />} />
                    <Route path="/courses" element={<AllCoursesPage /> } />
                    <Route path="/contact" element={<ContactSection /> } />
                    <Route path="/services" element={<><ServicesSection /> <WhyChooseUs /> <Testimonials />  </>} />


                    
                   {/* 🚨 Dynamic Course Detail Page Route */}
                    {/* :courseName URL ka parameter hoga, jaise /courses/cse ya /courses/mbbs-abroad */}
                    <Route path="/courses/:courseName" element={<CourseDetailPage />} />
                    

                </Routes>
                <ContactForm />
                <FloatingButtons />
                <ScrollToTopButton />
                <Footer /> 
            </div>
        </Router>
    );
}

export default App;