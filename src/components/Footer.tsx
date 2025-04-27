import React from 'react';
import { Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-container mx-auto px-4">
        <div className="mb-12">
          <Logo variant="blue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="font-medium mb-2">Address</h4>
            <p>1875 Mission St Ste 103 #450<br />San Francisco, CA 94103</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Email</h4>
            <a href="mailto:finance@mobiusengine.ai" className="text-primary hover:text-primary-dark transition-colors duration-300">
              finance@mobiusengine.ai
            </a>
          </div>
          <div>
            <h4 className="font-medium mb-2">Telephone</h4>
            <a href="tel:650-889-6026" className="text-primary hover:text-primary-dark transition-colors duration-300">
              650-889-6026
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
          <p className="text-gray-600 mb-4 md:mb-0">© 2023 Mobiusservices LLC</p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;