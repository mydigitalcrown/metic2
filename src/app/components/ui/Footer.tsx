"use client";

import Link from "next/link";
import { Logo } from "../layout/Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-gray-400 max-w-xs">
              Advanced AI solutions for businesses looking to transform their operations
              and gain competitive advantage.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-orange transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-primary-orange transition-colors">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-orange transition-colors">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-orange transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-orange transition-colors">
                  Automation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-orange flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-primary-orange mb-1">USA Office:</div>
                  <div>300 Quail Ridge Dr NE</div>
                  <div>ADA, MI 49301</div>
                  <div className="font-medium text-primary-orange mb-1 mt-2">India Office:</div>
                  <div>Behind Manyata Tech Park</div>
                  <div>Hebbal, Bangalore 560077</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-orange flex-shrink-0" />
                <a 
                  href="mailto:hello@matic.ai?subject=Contact from Metic.ai Website" 
                  className="hover:text-primary-orange transition-colors text-sm"
                >
                  hello@matic.ai
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-orange flex-shrink-0" />
                <a 
                  href="tel:+917892518414" 
                  className="hover:text-primary-orange transition-colors text-sm"
                >
                  +91 7892518414
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-gray-400 text-sm">
            <p>© {currentYear} Metic AI. All rights reserved.</p>
            <span className="hidden md:inline">•</span>
            <p>
              Powered by{" "}
              <a 
                href="https://mydigitalcrown.in/" 
                target="_blank"
                rel="dofollow"
                className="text-primary-orange hover:text-secondary-orange transition-colors font-medium"
              >
                Digital Marketing Company In Mumbai
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-400 text-sm hover:text-primary-orange transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 text-sm hover:text-primary-orange transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
