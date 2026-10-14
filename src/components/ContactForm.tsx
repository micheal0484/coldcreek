'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { ContactFormData } from '@/lib/types';
import { services } from '@/lib/types';
import { validateEmail, validatePhone } from '@/lib/utils';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    ...services.map((service) => ({
      value: service.name,
      label: service.name,
    })),
    { value: 'other', label: 'Other / Multiple Services' },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      // Note: You'll need to set up EmailJS account and replace these values
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          phone: data.phone,
          service: data.service,
          project_description: data.projectDescription,
          acreage: data.acreage || 'Not specified',
          to_email: 'coltonlee@coldcreeklandservices.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-forest-green mb-2">
          Request Your Free Quote
        </h2>
        <p className="text-stone-gray">
          Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed estimate.
        </p>
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-medium text-green-800">Quote request submitted!</h3>
            <p className="text-sm text-green-700">
              We&apos;ll review your project details and get back to you within 24 hours.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-medium text-red-800">Submission failed</h3>
            <p className="text-sm text-red-700">
              Please try again or contact us directly at (479) 675-6403.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="First Name"
            {...register('firstName', { required: 'First name is required' })}
            error={errors.firstName?.message}
            required
          />
          <Input
            label="Last Name"
            {...register('lastName', { required: 'Last name is required' })}
            error={errors.lastName?.message}
            required
          />
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            {...register('email', {
              required: 'Email is required',
              validate: (value) => validateEmail(value) || 'Please enter a valid email address',
            })}
            error={errors.email?.message}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            {...register('phone', {
              required: 'Phone number is required',
              validate: (value) => validatePhone(value) || 'Please enter a valid phone number',
            })}
            error={errors.phone?.message}
            placeholder="(XXX) XXX-XXXX"
            required
          />
        </div>

        {/* Service Selection */}
        <Select
          label="Primary Service Needed"
          {...register('service', { required: 'Please select a service' })}
          options={serviceOptions}
          error={errors.service?.message}
          required
        />

        {/* Project Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Textarea
            label="Project Description"
            {...register('projectDescription', { 
              required: 'Please describe your project',
              minLength: { value: 10, message: 'Please provide more details about your project' }
            })}
            error={errors.projectDescription?.message}
            placeholder="Describe your property, current conditions, and what you'd like to accomplish..."
            className="sm:col-span-2"
            rows={4}
            required
          />
          <Input
            label="Property Size (Acres)"
            type="text"
            {...register('acreage')}
            error={errors.acreage?.message}
            placeholder="e.g., 2.5 acres or 'Not sure'"
            helperText="Approximate size helps us provide accurate estimates"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          variant="primary"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Get My Free Quote
            </>
          )}
        </Button>

        {/* Privacy Notice */}
        <p className="text-xs text-stone-gray text-center">
          By submitting this form, you agree to be contacted by Cold Creek Land Services 
          regarding your project. We respect your privacy and will never share your information.
        </p>
      </form>

      {/* Alternative Contact */}
      <div className="mt-8 pt-6 border-t border-earth-tan text-center">
        <p className="text-stone-gray mb-4">Prefer to speak directly?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+14796756403"
            className="inline-flex items-center justify-center px-6 py-3 border border-forest-green text-forest-green rounded-lg hover:bg-forest-green hover:text-white transition-colors"
          >
            Call (479) 675-6403
          </a>
          <a
            href="mailto:coltonlee@coldcreeklandservices.com"
            className="inline-flex items-center justify-center px-6 py-3 border border-forest-green text-forest-green rounded-lg hover:bg-forest-green hover:text-white transition-colors"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}