import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Target,
  Award,
  Lightbulb,
  BarChart3,
  Code,
  Database,
  Sparkles,
  ChevronDown,
  Rocket,
  Globe,
  Play,
  Quote
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In California | #1 AI Company In California - Metic.ai",
  description: "Leading Artificial Intelligence Company In California with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In California",
    "AI Company In California", 
    "AI Service In California",
    "AI Firm In California",
    "AI Development Company In California",
    "Best AI Company In California",
    "Top AI Company California",
    "Artificial Intelligence Services California",
    "AI Solutions Company California",
    "Machine Learning Company California",
    "AI Consulting Firm California",
    "AI Technology Company California",
    "AI automation California",
    "AI software company California",
    "artificial intelligence consulting California",
    "AI integration services California",
    "custom AI development California",
    "Silicon Valley AI Company",
    "Los Angeles AI Services",
    "San Francisco AI Development"
  ],
  openGraph: {
    title: "Artificial Intelligence Company In California | #1 AI Company In California - Metic.ai",
    description: "Leading Artificial Intelligence Company In California with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-california/",
    siteName: "Metic.ai - AI Company In California",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-image-ai-california.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In California - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In California | #1 AI Company In California - Metic.ai",
    description: "Leading Artificial Intelligence Company In California with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: ["https://metic.ai/og-image-ai-california.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-california/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Enhanced structured data for California
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Metic.ai",
  "description": "Leading Artificial Intelligence Company In California",
  "url": "https://metic.ai",
  "logo": "https://metic.ai/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-METIC-AI",
    "contactType": "customer service",
    "availableLanguage": "English",
    "areaServed": "California"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "California"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.7783,
    "longitude": -119.4179
  },
  "sameAs": [
    "https://www.linkedin.com/company/metic-ai",
    "https://twitter.com/metic_ai"
  ],
  "areaServed": "California",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Services California",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Artificial Intelligence Development",
          "description": "Custom AI development for California businesses"
        }
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question", 
      "name": "Which is the best Artificial Intelligence Company In California?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Metic.ai is the leading Artificial Intelligence Company In California with over 2100 successful AI implementations. We combine deep tech expertise with understanding of California's innovation ecosystem, serving businesses from Silicon Valley to Los Angeles with cutting-edge AI solutions."
      }
    },
    {
      "@type": "Question",
      "name": "What services does the top AI Company In California provide?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "As the premier AI Company In California, Metic.ai provides comprehensive artificial intelligence services including machine learning development, AI automation, computer vision, natural language processing, predictive analytics, and AI integration. We specialize in serving California's technology, entertainment, aerospace, and agriculture industries with tailored AI solutions."
      }
    },
    {
      "@type": "Question",
      "name": "How to choose the right AI Development Company In California?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When selecting an AI Development Company In California, look for proven experience, successful project portfolio, industry expertise, post-deployment support, and transparent pricing. Metic.ai offers all these qualities with 2100+ completed projects, 98% client satisfaction rate, and deep knowledge of California's business landscape."
      }
    },
    {
      "@type": "Question", 
      "name": "How much does AI implementation cost with an AI Service In California?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI implementation costs vary based on project complexity and requirements. As a leading AI Service In California, Metic.ai offers competitive pricing with custom quotes starting from $10,000 for basic automation to $100,000+ for enterprise solutions. We provide detailed cost breakdowns and ROI projections for all California projects."
      }
    },
    {
      "@type": "Question",
      "name": "Does the AI Firm In California provide ongoing support?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, as a comprehensive AI Firm In California, Metic.ai provides 24/7 ongoing support, regular updates, performance monitoring, and continuous optimization. Our California support team ensures your AI systems perform optimally with dedicated account management and technical assistance."
      }
    },
    {
      "@type": "Question",
      "name": "Can AI Company In California work with startups and enterprises?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Absolutely! As a versatile AI Company In California, Metic.ai serves both startups and Fortune 500 enterprises. We offer scalable solutions from MVP development for California startups to enterprise-grade AI implementations for large corporations across Silicon Valley, Los Angeles, and statewide."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Metic.ai - AI Company In California", 
  "description": "Leading Artificial Intelligence Company In California providing AI development, machine learning, and automation services",
  "url": "https://metic.ai/artificial-intelligence-ai-services-in-california/",
  "telephone": "+1-800-METIC-AI",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "California"
  },
  "geo": {
    "@type": "GeoCoordinates", 
    "latitude": 36.7783,
    "longitude": -119.4179
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "areaServed": "California",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 36.7783, 
      "longitude": -119.4179
    }
  }
};

const structuredData = [organizationSchema, faqSchema, localBusinessSchema];

// California-specific industries and companies
const californiaIndustries = [
  "Technology & Software",
  "Entertainment & Media", 
  "Aerospace & Defense",
  "Agriculture & AgriTech",
  "Renewable Energy",
  "Biotechnology"
];

const californiaCompanies = [
  "Apple", "Google", "Meta", "Netflix", "Tesla", "SpaceX", "Disney", "Warner Bros", 
  "Intel", "Cisco", "Oracle", "Salesforce", "Adobe", "Uber", "Airbnb"
];

export default function AIServicesInCalifornia() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section - Dark Theme with California Focus */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-orange/5 to-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4 py-24">
            {/* California Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <MapPin className="w-5 h-5 text-primary-orange" />
              <span className="text-sm font-bold text-gray-200 tracking-wide">CALIFORNIA'S #1 AI COMPANY</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <strong>Artificial Intelligence Company</strong>{" "}In California{" "}
              | Leading <strong>AI Company</strong> In California
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transforming California's tech ecosystem with cutting-edge AI solutions from entertainment to agriculture
            </p>

            {/* California AI Innovation Hub - Enhanced Design */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-orange/20 rounded-full mb-6">
                  <Brain className="w-4 h-4 text-primary-orange" />
                  <span className="text-sm font-semibold text-orange-200">AI INNOVATION HUB</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  California's <span className="text-primary-orange">Leading AI Technology Pioneer</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                  Looking for the best <strong className="text-white">AI Company In California</strong>? From Silicon Valley's 
                  innovation hub to Los Angeles' entertainment center, we understand California's unique economic landscape.
                  
                  Our <strong className="text-primary-orange font-semibold">AI Company In California</strong> combines deep understanding 
                  of California's innovation ecosystem with cutting-edge technology to deliver AI solutions that drive measurable 
                  results. We've successfully implemented AI across California's key sectors including technology, entertainment,
                  aerospace, agriculture, and emerging innovation sectors.
                </p>
              </div>

              {/* California Industry Expertise Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Technology Industry AI Excellence</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Deep expertise with California's tech giants including ML model optimization,
                        algorithm development, and cloud infrastructure optimization for California's tech industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <Play className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Entertainment & Media Innovation</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Advanced AI solutions for California's entertainment and media sectors including
                        content optimization, audience analytics, and production automation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Aerospace & Defense AI Solutions</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Specialized AI for California's aerospace industry including flight optimization,
                        predictive maintenance, and autonomous systems for defense and commercial aerospace.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Agriculture & AgriTech Innovation</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Cutting-edge AI for California's agriculture sector including crop monitoring,
                        precision farming, and agricultural automation for sustainable farming practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* California Market Impact Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">$3.2T</div>
                <div className="text-sm text-gray-600 font-medium">California Economic Output</div>
                <div className="text-xs text-gray-500 mt-2">California's Tech Hub</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">39M+</div>
                <div className="text-sm text-gray-600 font-medium">California State Population</div>
                <div className="text-xs text-gray-500 mt-2">Innovation Ecosystem</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">850+</div>
                <div className="text-sm text-gray-600 font-medium">California AI Projects Completed</div>
                <div className="text-xs text-gray-500 mt-2">Success Stories</div>
              </div>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-gray-200">
                  <span className="font-bold text-gray-900">California Advantage</span>
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium text-gray-200">2100+ Projects</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-gray-200">98% Satisfaction</span>
              </div>
            </div>

            {/* CTA Section with California Focus */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Specialized AI solutions designed for California's innovation center and its diverse economic sectors
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Partner with California's leading AI company for transformative artificial intelligence solutions 
                tailored to your industry needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary-orange hover:bg-primary-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all">
                  Get Free AI Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm">
                  View California Portfolio
                  <Play className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the comprehensive content continues with California focus... */}
        {/* This is just the hero section - I'll continue with the full page structure */}
        
      </div>
    </>
  );
}