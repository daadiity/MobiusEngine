import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const AboutSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ashwin',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      description: 'is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience in B2B/SaaS and GTM roles, Ashwin is an MBA holder from Yale University.',
      vision: 'Ashwin\'s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.',
    },
    {
      name: 'Nicole',
      role: 'Executive Coach',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
      description: 'is an Executive coach at Mobius specializing in resume builds and career advisory.',
      experience: 'With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.',
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="max-w-container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-sora mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.name}
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-64 h-64 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                <a 
                  href="#" 
                  className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                </a>
              </div>
              <div className="md:flex-1">
                <p className="text-lg md:text-xl mb-4">
                  <span className="font-bold">{member.name}</span> {member.description}
                </p>
                {member.vision && (
                  <p className="text-lg md:text-xl">{member.vision}</p>
                )}
                {member.experience && (
                  <p className="text-lg md:text-xl">{member.experience}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <a href="#" className="text-lg hover:text-primary-light transition-colors duration-300 inline-flex items-center">
            Learn more about our Board of Advisors
            <motion.span 
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </a>
          <br />
          <a href="#" className="text-lg hover:text-primary-light transition-colors duration-300 inline-flex items-center">
            Follow us on our LinkedIn page
            <motion.span 
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;