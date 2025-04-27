import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Plans', href: '#plans' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Privacy Policy', href: '#privacy' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-container mx-auto px-4 flex justify-between items-center">
        <Logo variant={isScrolled ? 'blue' : 'white'} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-dm-sans text-p2 font-medium transition-colors duration-300 ${
                isScrolled ? 'text-neutral-black hover:text-primary' : 'text-white hover:text-primary-light'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="relative group">
            <a 
              href="#" 
              className={`font-dm-sans text-p2 font-medium transition-colors duration-300 flex items-center ${
                isScrolled ? 'text-neutral-black hover:text-primary' : 'text-white hover:text-primary-light'
              }`}
            >
              More
              <svg width="16" height="16" viewBox="0 0 16 16" className="ml-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <Button 
            variant={isScrolled ? 'primary' : 'secondary'} 
            size="md"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white py-4 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-dm-sans text-p1 font-medium text-neutral-black hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#" 
              className="font-dm-sans text-p1 font-medium text-neutral-black hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              More
            </a>
            <Button variant="primary" size="md" className="w-full mt-4">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;