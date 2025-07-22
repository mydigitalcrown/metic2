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
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "AI Services Georgia | Premier Artificial Intelligence Solutions & Development - Metic.ai",
  description: "Georgia's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for GA businesses.",
  keywords: "AI services Georgia, artificial intelligence Georgia, machine learning Georgia, AI consulting GA, AI development Georgia, custom AI solutions GA, AI automation Georgia, enterprise AI Georgia, Atlanta AI, Savannah AI",
  authors: [{ name: "Metic.ai Georgia AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "AI Services Georgia | Premier Artificial Intelligence Solutions - Metic.ai",
    description: "Georgia's leading AI company with 500+ successful projects. Custom AI development, machine learning, and enterprise solutions with proven ROI.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-georgia/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-georgia.jpg",
        width: 1200,
        height: 630,
        alt: "AI Services Georgia - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services Georgia | Custom AI Development - Metic.ai",
    description: "Transform your Georgia business with enterprise AI solutions. 3x faster development, 60% cost savings, 500+ successful projects.",
    images: ["https://metic.ai/og-ai-services-georgia.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-georgia/",
  },
};

export default function AIServicesGeorgiaPage() {
  const services = [
    {
      title: "AI for Logistics",
      description: "Georgia handles massive freight operations. We build AI that optimizes routes, predicts delays, and keeps your supply chain moving smoothly.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "orange" as const
    },
    {
      title: "Smart Business Analytics",
      description: "Your Georgia business generates data every day. We help you see patterns, predict trends, and make decisions that actually move the needle.",
      icon: Brain,
      href: "/machine-learning",
      color: "orange" as const
    },
    {
      title: "Custom AI Solutions",
      description: "Every Georgia company is different. We build AI tools that fit your specific needs - not generic software that sort of works.",
      icon: Code,
      href: "/custom-ai-development",
      color: "orange" as const
    },
    {
      title: "Data That Makes Sense",
      description: "Stop drowning in spreadsheets. We turn your Georgia business data into clear insights you can actually use to grow.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "AI Content Creation",
      description: "Need marketing content, reports, or communications for your Georgia business? Our AI handles the writing while you focus on strategy.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "orange" as const
    },
    {
      title: "Data Infrastructure",
      description: "Messy data leads to bad decisions. We organize your Georgia company's information so AI can actually work with it properly.",
      icon: Database,
      href: "/data-engineering",
      color: "orange" as const
    }
  ];

  const industries = [
    "Technology",
    "Logistics",
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Agriculture",
    "Aerospace",
    "Film & Media",
    "Transportation",
    "Real Estate"
  ];

  const stats = [
    { number: "650+", label: "GA Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.3x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Metic.ai - AI Services Georgia",
            "image": "https://metic.ai/logo.png",
            "description": "Georgia's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for GA businesses.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Georgia",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.0406",
              "longitude": "-83.6431"
            },
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-georgia/",
            "telephone": "+1-789-251-8414",
            "email": "info@metic.ai",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "State",
              "name": "Georgia"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for businesses"
                  }
                }
              ]
            },
            "areaServed": [
              "Atlanta", "Augusta", "Columbus", "Macon", "Savannah", 
              "Athens", "Sandy Springs", "Roswell", "Johns Creek", "Albany",
              "Warner Robins", "Alpharetta", "Marietta", "Valdosta", "Smyrna"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "650"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary-orange" />
              <span className="text-sm font-medium text-orange-300">Serving Georgia</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              AI That Powers <span className="text-primary-orange">Georgia</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Georgia's economy is growing fast, and AI is driving that growth. From Atlanta's business 
              district to logistics hubs across the state - we've helped 150+ Georgia companies use AI to 
              get ahead. No buzzwords, just results that make sense for your bottom line.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary-orange mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                AI Solutions for <span className="text-primary-orange">Georgia</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Georgia businesses 
                compete in the digital economy and drive sustainable growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses = {
                  blue: "bg-blue-100 text-blue-600",
                  purple: "bg-purple-100 text-purple-600", 
                  green: "bg-green-100 text-green-600",
                  orange: "bg-orange-100 text-orange-600",
                  indigo: "bg-indigo-100 text-indigo-600",
                  red: "bg-red-100 text-red-600"
                };
                
                return (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colorClasses[service.color]}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <Link href={service.href} className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Industries We Serve in Georgia
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Georgia's key industries and business sectors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-4 h-4 text-primary-orange" />
                  </div>
                  <h3 className="font-medium text-gray-800">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Georgia Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Georgia for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Georgia businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for GA companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Georgia business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Georgia business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Transform Your Georgia Business with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Georgia companies that trust Metic.ai for their AI transformation. 
              Get started with a free consultation and discover how AI can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Journey
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Georgia</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Atlanta</span>
                <span>•</span>
                <span>Augusta</span>
                <span>•</span>
                <span>Columbus</span>
                <span>•</span>
                <span>Savannah</span>
                <span>•</span>
                <span>Athens</span>
                <span>•</span>
                <span>Macon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
