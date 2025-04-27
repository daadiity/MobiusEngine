import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import PlansSection from './components/PlansSection';
import CoachingSection from './components/CoachingSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'MobiusEngine - Land Job Interviews 10x Faster';
  }, []);

  return (
    <div className="font-dm-sans">
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <PlansSection />
      <CoachingSection />
      <Footer />
    </div>
  );
}

export default App;