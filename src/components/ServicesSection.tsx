'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { services } from '@/lib/types';

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-earth-tan-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-forest-green mb-6">
            Our Land Management Services
          </h2>
          <p className="text-lg md:text-xl text-stone-gray max-w-3xl mx-auto leading-relaxed">
            From clearing overgrown properties to creating beautiful outdoor spaces, 
            we provide comprehensive land management solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-forest-green mb-4">
              Don&apos;t See What You Need?
            </h3>
            <p className="text-stone-gray mb-6 text-lg">
              We offer custom land management solutions. Contact us to discuss your specific project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-safety-orange px-8 py-4 text-lg font-semibold text-white hover:bg-[#e55c00] transition-colors duration-200"
              >
                Get Custom Quote
              </a>
              <a
                href="tel:+14796756403"
                className="inline-flex items-center justify-center rounded-md border-2 border-forest-green px-8 py-4 text-lg font-semibold text-forest-green hover:bg-forest-green hover:text-white transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}