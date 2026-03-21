'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Wrench, ThumbsUp } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Request Quote',
    description: 'Contact us with your project details. We\'ll provide a free, no-obligation estimate within 24 hours.',
    icon: MessageCircle,
    color: 'bg-safety-orange',
  },
  {
    id: 2,
    title: 'We Clear the Land',
    description: 'Our experienced team uses professional equipment to safely and efficiently complete your project.',
    icon: Wrench,
    color: 'bg-forest-green',
  },
  {
    id: 3,
    title: 'Enjoy Your Property',
    description: 'Walk away with a transformed property that meets your vision and exceeds your expectations.',
    icon: ThumbsUp,
    color: 'bg-safety-yellow',
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-forest-green-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Simple 3-Step Process
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Getting started is easy. We handle everything from initial consultation 
            to project completion, ensuring a smooth experience every step of the way.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-safety-orange via-forest-green to-safety-yellow rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg`}>
                      {step.id}
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto -mt-16 pt-2">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed max-w-sm mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-safety-orange px-8 py-4 text-lg font-semibold text-white hover:bg-[#e55c00] transition-colors duration-200 shadow-lg"
            >
              Start Your Project Today
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-forest-green transition-colors duration-200"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}