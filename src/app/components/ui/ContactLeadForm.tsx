'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface ContactFormProps {
  className?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactLeadForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // W3Forms endpoint - replace YOUR_ACCESS_KEY with your actual W3Forms access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // Replace with your W3Forms access key
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          from_name: `${formData.firstName} ${formData.lastName}`,
          to_email: 'hello@metic.ai', // Your email where leads will be sent
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact us directly at hello@metic.ai');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Started Today</h2>
        <p className="text-gray-600">
          Ready to transform your business with AI? Fill out the form below and our experts will contact you within 24 hours.
        </p>
      </div>

      {/* Contact Information */}
      <div className="mb-8 p-6 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg border border-primary-orange/20">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-orange/10 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary-orange" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Email</p>
              <a href="mailto:hello@metic.ai" className="text-primary-orange hover:underline text-sm">
                hello@metic.ai
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-orange/10 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary-orange" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Phone</p>
              <a href="tel:+917892518414" className="text-primary-orange hover:underline text-sm">
                +91 7892518414
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-orange/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-orange" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Office</p>
              <p className="text-gray-600 text-sm">Bengaluru, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
              placeholder="John"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
            placeholder="john.doe@company.com"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
              placeholder="Your Company Name"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            What can we help you with? *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
          >
            <option value="">Select a service</option>
            <option value="AI Consulting">AI Strategy & Consulting</option>
            <option value="Machine Learning">Machine Learning Solutions</option>
            <option value="Custom AI Development">Custom AI Development</option>
            <option value="Data Engineering">Data Engineering</option>
            <option value="Generative AI">Generative AI Services</option>
            <option value="AI Integration">AI Integration & Deployment</option>
            <option value="Partnership">Partnership Opportunities</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Tell us about your project *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors resize-vertical"
            placeholder="Describe your project requirements, goals, and how we can help you achieve them..."
          ></textarea>
        </div>

        {/* Status Message */}
        {submitStatus !== 'idle' && (
          <div className={`p-4 rounded-lg flex items-start space-x-3 ${
            submitStatus === 'success' 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            {submitStatus === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            )}
            <p className={`text-sm ${
              submitStatus === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {statusMessage}
            </p>
          </div>
        )}

        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-primary-orange/90 hover:to-secondary-orange/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </div>
            )}
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            By submitting this form, you agree to our{' '}
            <a href="/privacy-policy" className="text-primary-orange hover:underline">
              Privacy Policy
            </a>
            . We'll respond within 24 hours.
          </p>
        </div>
      </form>

      {/* Additional Info */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
            <p>We typically respond to all inquiries within 24 hours during business days.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM (IST)<br />Saturday: 10:00 AM - 4:00 PM (IST)</p>
          </div>
        </div>
      </div>
    </div>
  );
}