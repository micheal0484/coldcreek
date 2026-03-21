'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-forest-green mb-6">
          Contact Information
        </h2>
        <p className="text-lg text-stone-gray mb-8">
          Ready to get started? Reach out to us using any of the methods below. 
          We're here to help with all your land management needs.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-forest-green">Phone</h3>
            <a
              href="tel:+1XXXXXXXXXX"
              className="text-stone-gray hover:text-forest-green transition-colors"
            >
              (XXX) XXX-XXXX
            </a>
            <p className="text-sm text-stone-gray">Call or text for fastest response</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-forest-green">Email</h3>
            <a
              href="mailto:info@coldcreeklandservices.com"
              className="text-stone-gray hover:text-forest-green transition-colors break-words"
            >
              info@coldcreeklandservices.com
            </a>
            <p className="text-sm text-stone-gray">We respond within 4 hours</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-forest-green rounded-lg flex items-center justify-center">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-forest-green">Service Area</h3>
            <p className="text-stone-gray">
              Local Counties & Surrounding Areas<br />
              State, ZIP Code
            </p>
            <p className="text-sm text-stone-gray">Mobile service - we come to you</p>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-forest-green-light rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Clock className="h-6 w-6" />
          <h3 className="text-xl font-semibold">Business Hours</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
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
        <p className="text-xs text-white/80 mt-4">
          Emergency services available 24/7 for storm damage and urgent situations.
        </p>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-earth-tan">
          <Shield className="h-8 w-8 text-safety-orange" />
          <div>
            <h4 className="font-semibold text-forest-green">Licensed & Insured</h4>
            <p className="text-sm text-stone-gray">License #XXXXXX</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-earth-tan">
          <Award className="h-8 w-8 text-safety-orange" />
          <div>
            <h4 className="font-semibold text-forest-green">Locally Owned</h4>
            <p className="text-sm text-stone-gray">Serving since 20XX</p>
          </div>
        </div>
      </div>
    </div>
  );
}