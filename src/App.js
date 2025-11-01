import React, { useEffect } from 'react'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

// import React from 'react';
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

import './App.css'; 


function App() {
   
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []); 
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StreamsSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <ContactForm />
      <FloatingButtons />
      <ScrollToTopButton /> 
      <Footer />
    </div>
  );
}

export default App;