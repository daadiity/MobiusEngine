import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Submit Intake Form',
      description: 'Tell us about your career goals and ideal positions.'
    },
    {
      number: 2,
      title: 'We do the search and curation for list of jobs',
      description: 'Our AI matches your profile with relevant openings.'
    },
    {
      number: 3,
      title: 'You approve, we do the tedious part (applying)',
      description: 'We handle applications while you focus on interview prep.'
    },
    {
      number: 4,
      title: 'You get the interviews',
      description: 'Prepare for success with companies that match your goals.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <motion.h2 
          className="text-primary text-3xl md:text-4xl lg:text-h2 font-dm-sans font-medium text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How we work?
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.number}
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                <span className="text-primary font-dm-sans font-bold text-2xl">{step.number}</span>
              </div>
              <div className="w-full h-1 bg-primary-light mb-6"></div>
              <h3 className="font-dm-sans font-medium text-neutral-black text-xl mb-3">
                {step.title}
              </h3>
              <p className="font-dm-sans text-gray-600 text-p2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;