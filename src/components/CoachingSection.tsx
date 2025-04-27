import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';

const CoachingSection: React.FC = () => {
  const services = [
    {
      name: 'Resume Rebuild',
      price: 1000,
      type: 'one time',
      description: 'Crafted for senior to VP-level professionals ready for their next big step.',
      features: [
        '3x 30-min coaching',
        'Focused on storytelling, not just formatting',
        'Analyst + full application team on Pacific hours',
        'Tailored to your target industry, company, or role',
        'Direct work with our co-founder (ex-Google, JP Morgan)',
        'Executive coaching from UC Berkeley alum with 10+ yrs experience',
        'Resume Rebuild portfolio available upon request'
      ]
    },
    {
      name: 'Interview Prep',
      price: 500,
      type: 'one time',
      description: 'Two sessions to sharpen your story, confidence, and clarity — fast.',
      features: [
        '2x 45-min live coaching with our co-founder',
        'Real-time, practical feedback',
        'Build clarity, empathy & executive presence',
        'For senior and leadership roles — technical & non-technical'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sora text-primary mb-4">
            Resume Building & Coaching
          </h2>
          <p className="text-lg text-gray-600">
            Let's talk about where you're headed — and how your resume can get you there.
          </p>
          <p className="text-primary hover:text-primary-dark transition-colors duration-300">
            Schedule a call to get started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="border-2 border-primary rounded-2xl p-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-sora mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">${service.price}</span>
                <span className="text-gray-600"> {service.type}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full">
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-primary text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-sora mb-2">STILL HAVE DOUBTS?</h3>
            <h2 className="text-4xl font-sora">Contact us</h2>
          </div>
          <Button variant="secondary" size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingSection;