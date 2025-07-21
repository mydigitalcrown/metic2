"use client";

import Link from "next/link";
import { Logo } from "../layout/Logo";

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
                <Link href="/blog" className="hover:text-primary-orange transition-colors">
                  Blog
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
                <Link href="/ai-integration-and-deployment" className="hover:text-primary-orange transition-colors">
                  AI Integration & Deployment
                </Link>
              </li>
              <li>
                <Link href="/generative-ai-services" className="hover:text-primary-orange transition-colors">
                  Generative AI Services
                </Link>
              </li>
              <li>
                <Link href="/custom-ai-development" className="hover:text-primary-orange transition-colors">
                  Custom AI Development
                </Link>
              </li>
              <li>
                <Link href="/machine-learning" className="hover:text-primary-orange transition-colors">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/data-insights" className="hover:text-primary-orange transition-colors">
                  Data Insights
                </Link>
              </li>
              <li>
                <Link href="/data-engineering" className="hover:text-primary-orange transition-colors">
                  Data Engineering
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:Hello@metic.ai" className="hover:text-primary-orange transition-colors">
                  Hello@metic.ai
                </a>
              </li>
              <li>
                <a href="tel:+917892518414" className="hover:text-primary-orange transition-colors">
                  +91-78925-18414
                </a>
              </li>
              <li>USA: 300 Quail Ridge Dr NE, ADA, MI 49301</li>
              <li>India: Behind Manyata Tech Park, Hebbal, Bangalore 560077</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Metic AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-primary-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 text-sm hover:text-primary-orange transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Credit Section */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              Digital Marketing by{" "}
              <Link 
                href="https://mydigitalcrown.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-orange hover:text-secondary-orange transition-colors font-medium"
              >
                Digital Marketing Company In Mumbai
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
