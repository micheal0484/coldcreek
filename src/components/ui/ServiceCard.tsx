'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
  index?: number;
}

export function ServiceCard({ service, className, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn(
        'group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300',
        className
      )}
    >
      {/* Background Image (if provided) */}
      {service.image && (
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        </div>
      )}
      
      {/* Content */}
      <div className={cn(
        'p-6',
        service.image ? 'absolute bottom-0 left-0 right-0 text-white' : 'text-forest-green'
      )}>
        {/* Icon (if no image) */}
        {!service.image && service.icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-forest-green text-white">
            {/* Icon would go here - placeholder for now */}
            <div className="h-6 w-6 rounded bg-white/20" />
          </div>
        )}
        
        <h3 className={cn(
          'text-xl font-bold mb-2',
          service.image ? 'text-white' : 'text-forest-green'
        )}>
          {service.name}
        </h3>
        
        <p className={cn(
          'text-sm leading-relaxed',
          service.image ? 'text-white/90' : 'text-stone-gray'
        )}>
          {service.description}
        </p>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-forest-green/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}