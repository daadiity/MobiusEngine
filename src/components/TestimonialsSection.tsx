import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import Button from './Button';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Holly',
      role: 'senior executive',
      achievement: 'got over 10 job interviews and an offer she accepted',
      videoUrl: '#'
    },
    {
      id: 2,
      name: 'Holly',
      role: 'senior executive',
      achievement: 'got over 10 job interviews and an offer she accepted',
      videoUrl: '#'
    },
    {
      id: 3,
      name: 'Holly',
      role: 'senior executive',
      achievement: 'got over 10 job interviews and an offer she accepted',
      videoUrl: '#'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-sora text-primary mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What our clients have to say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-primary-dark rounded-lg mb-6 flex items-center justify-center cursor-pointer group">
                <Play className="w-12 h-12 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="text-lg mb-4">
                {testimonial.name} is a <span className="font-semibold">{testimonial.role}</span> who {testimonial.achievement}
              </p>
              <a 
                href={testimonial.videoUrl} 
                className="inline-flex items-center text-white hover:text-primary-light transition-colors duration-300"
              >
                Watch full video
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
            More customer testimonials
          </Button>
          <Button variant="primary">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;