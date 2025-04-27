import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-light via-primary to-primary-dark min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <motion.div 
          className="flex-1 text-white mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-sora font-semibold text-4xl md:text-5xl lg:text-h1 leading-heading mb-4 md:mb-6">
            Land job interviews<br/>
            <span className="text-primary-light">10x</span> faster
          </h1>
          <p className="font-dm-sans text-p1 leading-body mb-8 max-w-lg">
            Custom-built resumes that match your goals, keywords, and recruiter expectations.
          </p>
          <Button variant="secondary" size="lg">
            Get Started
          </Button>
        </motion.div>

        <motion.div 
          className="md:w-1/2 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-card p-6 max-w-md mx-auto">
              <div className="bg-primary-light bg-opacity-20 rounded-lg p-3 mb-4">
                <h3 className="text-primary font-dm-sans font-bold text-lg text-center">2024 / 2025</h3>
                <h2 className="text-primary-dark font-dm-sans font-bold text-xl text-center">HIRING TRENDS</h2>
                <p className="text-sm text-neutral-black font-dm-sans mt-2 text-center">
                  A job seeker's guide to what to expect, how to stand out, and how to take advantage of growing tech trends
                </p>
                <div className="flex justify-center mt-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" size="sm" className="text-sm">
                  Download Free E-Book
                </Button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -right-4 -bottom-4 h-14 w-14 rounded-full bg-primary-light flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background gradient blob */}
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-primary-light opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;