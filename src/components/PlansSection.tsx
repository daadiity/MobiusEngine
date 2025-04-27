import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';

const PlansSection: React.FC = () => {
  const plans = [
    {
      name: 'April Promo',
      price: 35,
      period: 'week',
      features: [
        'Curated jobs from 14+ listings, refreshed every 48 hours',
        'Up to 20 human-applied roles per week (no bots, no fluff — just real applications)',
        'Need more? Add extra apps for just $15 each',
        'Your own dedicated application analyst',
        'Personalized with up to 10 filters & 5 job titles'
      ]
    },
    {
      name: 'Starter',
      price: 50,
      period: 'week',
      popular: true,
      features: [
        'All the perks of the Promo Plan, plus:',
        'Resume review & story-focused feedback',
        'Dedicated search specialist',
        'Up to 50 job apps/week',
        'Extra apps at $15 each',
        'Analyst support within 6 hours (SLA/PST hours)'
      ]
    },
    {
      name: 'Plus',
      price: 100,
      period: 'week',
      features: [
        'Everything in Starter, with more muscle:',
        'Up to 75 apps/week',
        'Apply to 15 job titles',
        'Analyst + full application team on Pacific hours'
      ]
    }
  ];

  const advancePlan = {
    name: 'Advance',
    price: 150,
    period: 'week',
    description: 'Top-tier support for serious job hunters:',
    features: [
      'Everything in Plus',
      'Custom Resumes & Cover Letters',
      '20 fully customized applications/week',
      'Help with complex job searches',
      'Access to senior resume experts, Founder & Exec Coaches'
    ]
  };

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-sora text-primary mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Job Application Service Plans
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="border-2 border-primary rounded-2xl p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-sora mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
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
          className="bg-primary rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-2xl font-sora mb-2">{advancePlan.name}</h3>
              <p className="text-primary-light mb-4">{advancePlan.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advancePlan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-light flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:text-right">
              <div className="mb-4">
                <span className="text-4xl font-bold">${advancePlan.price}</span>
                <span>/{advancePlan.period}</span>
              </div>
              <Button variant="secondary">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;