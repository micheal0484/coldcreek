'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const services = [
  'Land Clearing',
  'Debris Removal',
  'Dirt Work & Site Prep',
  'Food Plot Creation',
  'Gravel Driveways',
  'Pond Cleanup',
  'Brush Hogging',
  'Septic Systems',
  'Snow Removal'
];

const serviceAreas = [
  'County Name 1',
  'County Name 2', 
  'County Name 3',
  'City Name 1',
  'City Name 2',
  'City Name 3'
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-green-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Cold Creek Land Services
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional land management and clearing services. Licensed & insured, 
              locally owned and operated with years of experience transforming properties.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-safety-orange transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-safety-orange transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-safety-orange transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-gray-300 hover:text-safety-orange transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-gray-300 text-sm">{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              * Service areas may vary. Contact us to confirm availability in your location.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-safety-orange flex-shrink-0" />
                <div>
                  <a
                    href="tel:+1XXXXXXXXXX"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    (XXX) XXX-XXXX
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-safety-orange flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@coldcreeklandservices.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200 break-words"
                  >
                    info@coldcreeklandservices.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-safety-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Serving Local Counties<br />
                    State, ZIP Code
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-forest-green rounded-lg">
              <h5 className="font-semibold text-white mb-2">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Cold Creek Land Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* License & Insurance */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              Licensed & Insured | License #XXXXXX | Fully Bonded
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}