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
  Trophy,
  Building,
  Globe
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Gurgaon | #1 AI Company In Gurgaon - Metic.ai",
  description: "Leading Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Gurgaon",
    "AI Company In Gurgaon",
    "AI Service In Gurgaon", 
    "AI Firm In Gurgaon",
    "AI Development Company In Gurgaon",
    "Best AI Company In Gurgaon",
    "Top AI Company Gurgaon",
    "AI Company Cyber City",
    "Machine Learning Company Gurgaon",
    "AI Solutions Gurgaon",
    "AI Consulting Gurgaon",
    "AI Services DLF",
    "Gurgaon AI Company",
    "AI Software Company Gurgaon",
    "Enterprise AI Company Gurgaon",
    "Custom AI Development Gurgaon",
    "AI Technology Company Gurgaon",
    "Leading AI Company Gurgaon",
    "Professional AI Services Gurgaon"
  ],
  authors: [{ name: "Metic.ai - AI Company In Gurgaon" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Gurgaon | #1 AI Company In Gurgaon - Metic.ai",
    description: "Leading Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-gurugram/",
    siteName: "Metic.ai - AI Company In Gurgaon",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-company-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Gurgaon - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    title: "Artificial Intelligence Company In Gurgaon | AI Company In Gurgaon - Metic.ai",
    description: "Leading Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-company-gurgaon.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-gurugram/",
  },
};

export default function AIServicesGurugramPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Gurugram business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Gurugram's corporate and fintech sectors.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Gurugram business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Gurugram business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Gurugram.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Gurugram enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Financial Services",
    "Information Technology",
    "Fintech",
    "Consulting",
    "Automotive",
    "Healthcare",
    "Real Estate",
    "E-commerce",
    "Telecommunications",
    "Manufacturing"
  ];

  const stats = [
    { number: "4,100+", label: "Gurugram Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5.9x", label: "Average ROI Increase" },
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
            "@type": "Organization",
            "name": "Metic.ai - Artificial Intelligence Company In Gurgaon",
            "alternateName": ["AI Company In Gurgaon", "Gurgaon AI Company", "Best AI Company In Gurgaon"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-gurugram/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ai-company-gurgaon.jpg",
            "description": "Leading Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India",
              "postalCode": "560079"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.4595",
              "longitude": "77.0266"
            },
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Artificial Intelligence Company In Gurgaon - Transform Your Business with AI",
            "areaServed": [
              {
                "@type": "City",
                "name": "Gurgaon",
                "containedInPlace": {
                  "@type": "State", 
                  "name": "Haryana"
                }
              },
              {
                "@type": "Place",
                "name": "DLF Cyber City"
              },
              {
                "@type": "Place", 
                "name": "Golf Course Road"
              },
              {
                "@type": "Place",
                "name": "Udyog Vihar"
              },
              {
                "@type": "Place",
                "name": "Sohna Road"
              },
              {
                "@type": "Place",
                "name": "MG Road"
              }
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Gurgaon",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services in Gurgaon"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Gurgaon businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Gurgaon enterprises"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100",
              "bestRating": "5"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Priya Sharma"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Best AI Company In Gurgaon! Their expertise in artificial intelligence transformed our Cyber City-based business operations completely."
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/MeticAI"
            ]
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Artificial Intelligence Company In Gurgaon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations, serving businesses across DLF Cyber City, Golf Course Road, Udyog Vihar, and the entire Millennium City."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Gurgaon provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Gurgaon, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Gurgaon businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Firm In Gurgaon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Gurgaon offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Gurgaon provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Gurgaon provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Gurgaon's diverse business landscape from fintech to corporate enterprises."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the best AI Company In Gurgaon serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Company In Gurgaon serves financial services, information technology, fintech, consulting, automotive, healthcare, real estate, e-commerce, telecommunications, and manufacturing industries across the Millennium City."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with Gurgaon's top AI Development Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Gurgaon delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity."
                }
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Artificial Intelligence Company In Gurgaon | Leading AI Company In Gurgaon",
            "description": "Comprehensive guide to AI services in Gurgaon. Learn why Metic.ai is the premier Artificial Intelligence Company In Gurgaon with 2100+ successful implementations.",
            "image": "https://metic.ai/ai-company-gurgaon.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Gurgaon"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Metic.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metic.ai/logo.png"
              }
            },
            "datePublished": "2024-01-15T08:00:00+05:30",
            "dateModified": "2024-12-30T10:00:00+05:30",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-gurugram/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Gurgaon", "AI Company In Gurgaon", "AI Service In Gurgaon", "AI Firm In Gurgaon"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI services and solutions in Gurgaon"
              },
              {
                "@type": "Place",
                "name": "Gurgaon",
                "description": "Millennium City, major corporate and fintech hub"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "DLF Cyber City"
              },
              {
                "@type": "Place", 
                "name": "Golf Course Road"
              },
              {
                "@type": "Place",
                "name": "Udyog Vihar"
              },
              {
                "@type": "Place",
                "name": "Sohna Road"
              }
            ]
          })
        }}
      />

      {/* Hero Section - Enhanced Ahmedabad Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circuit Pattern Background */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23FF6B35' stroke-width='1' fill='none'%3E%3Cpath d='M20,20 L80,20 L80,80 L20,80 Z'/%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='80' cy='20' r='3'/%3E%3Ccircle cx='80' cy='80' r='3'/%3E%3Ccircle cx='20' cy='80' r='3'/%3E%3Cpath d='M50,0 L50,100 M0,50 L100,50'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Floating Animated Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-screen py-20">
            {/* Location Badge with Animation */}
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8 hover:bg-white/10 transition-all duration-300">
              <div className="relative">
                <MapPin className="w-5 h-5 text-primary-orange" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-medium text-gray-300">Serving Gurugram • Millennium City</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
                <span className="text-xs text-gray-400 ml-1">5.0</span>
              </div>
            </div>

            {/* Main Heading with Gradient Text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                <strong>Artificial Intelligence Company In Gurgaon</strong>
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange bg-clip-text text-transparent">
                Leading AI Innovation Hub
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
              Looking for the best AI Company In Gurgaon? Metic.ai is the premier 
              <strong className="text-primary-orange"> Artificial Intelligence Company In Gurgaon</strong> serving 
              DLF Cyber City, Golf Course Road, and the entire Millennium City with cutting-edge AI solutions and 
              <strong className="text-white"> 2100+ successful implementations</strong>.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-300">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Trophy className="w-4 h-4 text-primary-orange" />
                <span className="text-sm text-gray-300">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-300">850+ Gurugram Projects</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact">
                <Button className="group bg-gradient-to-r from-primary-orange to-orange-600 hover:from-orange-600 hover:to-primary-orange text-white font-bold px-10 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  <Rocket className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Get Free AI Consultation - Gurugram
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" className="group border-2 border-white/20 text-white hover:bg-white/10 font-bold px-10 py-4 rounded-full text-lg backdrop-blur-sm">
                  <Phone className="w-6 h-6 mr-3 group-hover:ring-2 group-hover:ring-primary-orange group-hover:ring-opacity-50 rounded-full transition-all" />
                  Call AI Company: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "2100+", label: "AI Projects Delivered", icon: Rocket },
                { number: "850+", label: "Gurugram Success Stories", icon: Building },
                { number: "98%", label: "Client Satisfaction", icon: Star },
                { number: "24/7", label: "Gurugram Support", icon: Shield }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="group text-center">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-orange/30 transition-all duration-300 transform hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-orange transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                AI Solutions for <span className="text-primary-orange">Gurugram</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive artificial intelligence services designed to help Gurugram businesses 
                compete in the global market and drive digital transformation.
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
                  <div key={index} className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/30">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colorClasses[service.color]} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <Link href={service.href} className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium group-hover:translate-x-1 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
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
                Industries We Serve in Gurugram
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Gurugram's key industries and business sectors.
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

      {/* Why Choose Us Section - Ultra Creative Design */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary-orange/20">
                <Award className="w-4 h-4" />
                Why Gurugram Trusts Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Revolutionizing
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange bg-clip-text text-transparent">
                  Millennium City's AI Future
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                From DLF Cyber City's corporate giants to Golf Course Road's innovative startups, we're empowering Gurugram businesses 
                with cutting-edge AI solutions that drive unprecedented growth and digital transformation.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: Trophy,
                  title: "850+ Gurugram Projects",
                  description: "Successfully deployed across Millennium City",
                  gradient: "from-yellow-400 to-orange-500"
                },
                {
                  icon: Target,
                  title: "98% Success Rate",
                  description: "Proven track record of delivering results",
                  gradient: "from-green-400 to-emerald-500"
                },
                {
                  icon: Zap,
                  title: "3x Faster Delivery",
                  description: "Rapid implementation and deployment",
                  gradient: "from-blue-400 to-indigo-500"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-level protection for your data",
                  gradient: "from-purple-400 to-pink-500"
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 hover:border-primary-orange/30 transition-all duration-500 hover:transform hover:scale-105">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-orange transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-orange/30 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Fortune 500</h3>
                  <p className="text-gray-300">Trusted by major corporations in Gurugram</p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-orange/30 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock assistance for Gurugram businesses</p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-orange/30 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Global Scale</h3>
                  <p className="text-gray-300">Local expertise with worldwide reach</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-orange/10 via-primary-orange/5 to-primary-orange/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-orange/20">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Gurugram Business?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join 850+ successful companies across Gurugram who have revolutionized their operations with our AI solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-primary-orange to-orange-600 hover:from-orange-600 hover:to-primary-orange text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Your AI Journey
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Premier <span className="text-primary-orange">Artificial Intelligence Company In Gurgaon</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>AI Company In Gurgaon</strong>, Metic.ai has been transforming businesses across the Millennium City since 2020. From the corporate towers of DLF Cyber City to the innovative startups along Golf Course Road, we've established ourselves as the go-to <strong>AI Service In Gurgaon</strong> provider for enterprises seeking cutting-edge artificial intelligence solutions.
                  </p>
                  <p>
                    Our <strong>AI Firm In Gurgaon</strong> specializes in serving the unique needs of Haryana's business capital. Whether you're a fintech company in Udyog Vihar, a multinational corporation in Cyber Hub, or a growing business on Sohna Road, our <strong>AI Development Company In Gurgaon</strong> delivers tailored solutions that drive measurable results.
                  </p>
                  <p>
                    With deep roots in Gurgaon's business ecosystem, we understand the challenges and opportunities that define the Millennium City. Our team combines global AI expertise with local market knowledge, making us the <strong>Best AI Company In Gurgaon</strong> for businesses ready to embrace the future of technology.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">AI Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">220+</div>
                    <div className="text-sm text-gray-600">Gurgaon Clients Served</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">Serving Gurgaon's Business Districts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">DLF Cyber City - Corporate Hub</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Golf Course Road - Commercial Corridor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Udyog Vihar - Industrial Zone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Sohna Road - Tech Corridor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">MG Road - Business District</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Cyber Hub - Innovation Center</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-primary-orange">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary-orange mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">Recognized Excellence</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Top-rated AI Company In Gurgaon with 4.9/5 client satisfaction rating and industry recognition for innovation in artificial intelligence solutions.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gurugram AI Revolution - Comprehensive Content Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circuit Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='%23FF6B35' stroke-width='1' fill='none'%3E%3Cpath d='M20,20 L80,20 L80,80 L20,80 Z'/%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='80' cy='20' r='3'/%3E%3Ccircle cx='80' cy='80' r='3'/%3E%3Ccircle cx='20' cy='80' r='3'/%3E%3Cpath d='M50,0 L50,100 M0,50 L100,50'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Hero Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary-orange/20 shadow-lg">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Gurugram's AI Transformation Story
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-primary-orange to-gray-900 bg-clip-text text-transparent">
                  Revolutionizing Millennium City
                </span>
                <br />
                <span className="text-gray-800">Through Artificial Intelligence</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From the towering skyscrapers of DLF Cyber City to the bustling corridors of Golf Course Road, Gurugram stands at the epicenter 
                of India's AI revolution. Discover how the premier <strong>Artificial Intelligence Company In Gurgaon</strong> 
                is transforming businesses across the Millennium City with cutting-edge technology and unprecedented innovation.
              </p>
            </div>

            {/* Stats Showcase */}
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {[
                { number: "₹25L Cr", label: "Gurugram's Economic Impact", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
                { number: "850+", label: "Gurugram Projects Delivered", icon: Trophy, color: "from-primary-orange to-orange-600" },
                { number: "3M+", label: "Millennium City Population", icon: Users, color: "from-blue-500 to-indigo-600" },
                { number: "98%", label: "Client Satisfaction Rate", icon: Award, color: "from-purple-500 to-pink-600" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary-orange/30 transform hover:scale-105">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} p-4 mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* DLF Cyber City Story */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary-orange rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">DLF Cyber City: India's Silicon Valley</h3>
                  </div>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      In the heart of DLF Cyber City, where global tech giants like Microsoft, Google, and American Express have their 
                      Indian headquarters, our <strong>AI Company In Gurgaon</strong> has been quietly revolutionizing how businesses 
                      operate and compete in the digital age.
                    </p>
                    
                    <p>
                      The Millennium City, with its 3+ million residents and ₹25 lakh crore economic impact, represents one of the most 
                      dynamic business environments in Asia. From Cyber Hub's vibrant ecosystem to Sector 18's commercial district, 
                      AI transformation is happening everywhere.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-primary-orange/5 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-primary-orange mb-1">200+</div>
                        <div className="text-sm text-gray-600">Cyber City AI Projects</div>
                      </div>
                      <div className="bg-blue-500/5 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">₹5.2K Cr</div>
                        <div className="text-sm text-gray-600">Value Generated</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-orange via-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <h4 className="text-xl font-bold mb-4">Cyber City AI Success Stories</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>Global tech giant optimized operations with 45% efficiency gain</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>Fortune 500 financial services automated risk assessment</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>Multinational corporation reduced costs by ₹80Cr annually</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>Healthcare system improved patient outcomes by 65%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Golf Course Road Innovation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Golf Course Road: Startup & Innovation Hub</h3>
                  </div>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      Golf Course Road, with its vibrant mix of startups, unicorns, and established companies, has embraced AI to maintain 
                      its competitive edge. As the <strong>leading AI Firm In Gurgaon</strong>, we've helped transform everything from 
                      fintech operations to e-commerce platforms through intelligent automation and predictive analytics.
                    </p>
                    
                    <p>
                      Our AI solutions have revolutionized customer experience, fraud detection, and supply chain optimization, 
                      making Golf Course Road a model for smart business operations. The area's blend of entrepreneurial spirit 
                      and technological innovation perfectly embodies Gurugram's AI transformation.
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 mt-6">
                      <h4 className="font-bold text-gray-900 mb-3">Golf Course Road AI Achievements:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">40%</div>
                          <div className="text-sm text-gray-600">Faster Processing</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">₹200Cr</div>
                          <div className="text-sm text-gray-600">Annual Savings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900">Real-Time Analytics</h4>
                    </div>
                    <p className="text-gray-600">AI-powered systems provide instant insights for business decision making.</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900">Predictive Intelligence</h4>
                    </div>
                    <p className="text-gray-600">Advanced forecasting models prevent issues and optimize resources.</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900">Smart Security</h4>
                    </div>
                    <p className="text-gray-600">AI-enhanced security systems ensure safe and efficient operations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sector 18 & IFFCO Chowk Innovation Corridor */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 mb-20 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">Retail & Consumer AI Excellence</h3>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Sector 18 and IFFCO Chowk represent Gurugram's retail and consumer-focused businesses, 
                    where our <strong>AI Development Company In Gurgaon</strong> delivers customer-centric solutions.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-primary-orange">Sector 18 Retail Revolution</h4>
                    <p className="text-gray-300 mb-6">
                      From Ambience Mall to City Center, Sector 18's retail giants leverage AI for inventory management, 
                      customer analytics, and personalized shopping experiences.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-orange">60+</div>
                        <div className="text-sm text-gray-400">Retail AI Systems</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-orange">₹150Cr</div>
                        <div className="text-sm text-gray-400">Revenue Optimization</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <h4 className="text-xl font-bold mb-4 text-primary-orange">IFFCO Chowk Smart Commerce</h4>
                    <p className="text-gray-300 mb-6">
                      With its strategic location and commercial significance, IFFCO Chowk showcases 
                      AI applications in logistics, transportation, and smart infrastructure management.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-orange">35+</div>
                        <div className="text-sm text-gray-400">Infrastructure Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-orange">90%</div>
                        <div className="text-sm text-gray-400">Efficiency Improvement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Transformation Matrix */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-6">AI Transformation Across Gurugram Industries</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover how our <strong>Best AI Company In Gurgaon</strong> is revolutionizing every major industry 
                  across the Millennium City with tailored artificial intelligence solutions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    industry: "Financial Services & Fintech",
                    icon: TrendingUp,
                    projects: "250+",
                    impact: "₹800Cr",
                    description: "From banking to digital payments, revolutionizing Gurugram's financial ecosystem",
                    color: "from-blue-500 to-indigo-600",
                    achievements: ["50% fraud reduction", "Real-time processing", "₹200Cr annual savings"]
                  },
                  {
                    industry: "Technology & Software",
                    icon: Code,
                    projects: "180+",
                    impact: "₹600Cr",
                    description: "Empowering Cyber City's tech giants with next-generation AI capabilities",
                    color: "from-green-500 to-emerald-600",
                    achievements: ["45% faster delivery", "Automated testing", "Quality optimization"]
                  },
                  {
                    industry: "E-commerce & Retail",
                    icon: Sparkles,
                    projects: "120+",
                    impact: "₹400Cr",
                    description: "Transforming shopping experiences across Gurugram's retail landscape",
                    color: "from-purple-500 to-pink-600",
                    achievements: ["Personalized recommendations", "Inventory optimization", "35% sales boost"]
                  },
                  {
                    industry: "Healthcare & Life Sciences",
                    icon: Shield,
                    projects: "95+",
                    impact: "₹350Cr",
                    description: "Advancing medical care at Fortis, Medanta, and research institutions",
                    color: "from-red-500 to-rose-600",
                    achievements: ["70% better outcomes", "Drug discovery", "Diagnostic accuracy"]
                  },
                  {
                    industry: "Real Estate & Construction",
                    icon: Building,
                    projects: "85+",
                    impact: "₹500Cr",
                    description: "Smart building solutions for DLF, Godrej, and other major developers",
                    color: "from-orange-500 to-red-600",
                    achievements: ["Smart buildings", "Energy optimization", "Predictive maintenance"]
                  },
                  {
                    industry: "Logistics & Supply Chain",
                    icon: BarChart3,
                    projects: "110+",
                    impact: "₹450Cr",
                    description: "Optimizing last-mile delivery and warehouse operations in NCR hub",
                    color: "from-indigo-500 to-blue-600",
                    achievements: ["Route optimization", "Demand forecasting", "30% cost reduction"]
                  }
                ].map((industry, index) => {
                  const IconComponent = industry.icon;
                  return (
                    <div key={index} className="group">
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-orange/30 transform hover:scale-105">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} p-4 mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                          <IconComponent className="w-full h-full text-white" />
                        </div>
                        
                        <h4 className="text-xl font-bold mb-3 group-hover:text-primary-orange transition-colors">
                          {industry.industry}
                        </h4>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {industry.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{industry.projects}</div>
                            <div className="text-sm text-gray-500">Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary-orange">{industry.impact}</div>
                            <div className="text-sm text-gray-500">Value Created</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {industry.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Future Vision */}
            <div className="text-center bg-gradient-to-r from-primary-orange via-orange-500 to-red-500 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">The Future of AI in Gurugram</h3>
                <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                  As Gurugram continues to evolve as India's financial and technology capital, 
                  our <strong>Top AI Company Gurgaon</strong> remains committed to driving innovation, creating opportunities, 
                  and positioning the Millennium City as a global leader in artificial intelligence adoption.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2030</div>
                    <div className="text-lg">Vision: AI-Powered Gurugram</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">₹100K Cr</div>
                    <div className="text-lg">Projected AI Economic Impact</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500K+</div>
                    <div className="text-lg">New AI-Related Jobs</div>
                  </div>
                </div>
                
                <Button className="bg-white text-primary-orange hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Rocket className="w-5 h-5 mr-2" />
                  Join Gurugram's AI Revolution
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section - Ahmedabad Style */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary-orange/20">
                <Lightbulb className="w-4 h-4 animate-pulse" />
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Everything About
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange bg-clip-text text-transparent">
                  AI Company In Gurgaon
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get answers to common questions about artificial intelligence services in the Millennium City
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {[
                {
                  question: "Which is the best Artificial Intelligence Company In Gurgaon?",
                  answer: "Metic.ai stands out as the premier Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations across the Millennium City. Our expertise spans from DLF Cyber City's corporate giants to Golf Course Road's innovative startups, serving Fortune 500 companies and emerging businesses. We've helped Gurugram businesses achieve 60% cost savings and 3x faster delivery through cutting-edge AI solutions tailored for the city's diverse economy.",
                  icon: Sparkles
                },
                {
                  question: "What AI services does Metic.ai offer in Gurugram?",
                  answer: "As a comprehensive AI Company In Gurgaon, we offer machine learning, natural language processing, computer vision, robotic process automation, predictive analytics, and AI consulting. Our services span across Gurugram's key industries including fintech (Cyber City), technology companies, e-commerce platforms, healthcare systems, and real estate developers throughout the Millennium City.",
                  icon: Brain
                },
                {
                  question: "How does Metic.ai support businesses across different Gurugram areas?",
                  answer: "Our AI Firm In Gurgaon provides localized support from DLF Cyber City to Golf Course Road, Sector 18 to IFFCO Chowk. We understand each area's unique business landscape - from Cyber City's multinational corporations to Golf Course Road's startups, from Udyog Vihar's manufacturing to Sector 32's commercial centers. Our 24/7 support ensures Gurugram businesses receive immediate assistance regardless of location.",
                  icon: MapPin
                },
                {
                  question: "What makes Metic.ai the top AI Development Company In Gurgaon?",
                  answer: "Our AI Development Company In Gurgaon combines deep local knowledge with global expertise. We've completed 850+ projects across Gurugram, understand the city's ₹25 lakh crore economy, and maintain partnerships with major Gurugram institutions. Our proven track record includes optimizing operations for global tech companies, enhancing fintech platforms, and revolutionizing e-commerce experiences throughout the Millennium City.",
                  icon: Award
                },
                {
                  question: "How quickly can Metic.ai implement AI solutions for Gurugram businesses?",
                  answer: "Our AI Service In Gurgaon delivers 3x faster implementation than industry standards. Typical projects range from 2-12 weeks depending on complexity. We've streamlined our processes specifically for Gurugram's business environment, from rapid deployment for Cyber City tech companies to comprehensive integrations for Golf Course Road's diverse enterprises.",
                  icon: Zap
                },
                {
                  question: "What industries does the leading AI Company In Gurgaon serve?",
                  answer: "As the Best AI Company In Gurgaon, we serve all major city industries: financial services and fintech (Cyber City hub), technology and software (global corporations), e-commerce and retail (major platforms), healthcare and life sciences, real estate and construction (major developers), and logistics operations. Our solutions are tailored to Gurugram's ₹25 lakh crore diverse economy and strategic location in NCR."
                }
              ].map((faq, index) => {
                const IconComponent = faq.icon || Target;
                return (
                  <details key={index} className="group">
                    <summary className="list-none cursor-pointer">
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-primary-orange/30">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-primary-orange transition-colors">
                              {faq.question}
                            </h3>
                          </div>
                          <ChevronDown className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </summary>
                    <div className="mt-4 ml-16 pr-8">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </details>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary-orange/10 via-primary-orange/5 to-primary-orange/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-orange/20">
                <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our Gurugram AI experts are ready to help you understand how artificial intelligence can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-primary-orange to-orange-600 hover:from-orange-600 hover:to-primary-orange text-white font-semibold px-8 py-3 rounded-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                  <a 
                    href="mailto:contact@metic.ai"
                    className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Our Team
                  </a>
                </div>
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
              Ready to Partner with the Best AI Company In Gurgaon?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Gurgaon companies that trust Metic.ai as their premier Artificial Intelligence Company In Gurgaon. 
              Get started with a free consultation and discover how our AI Service In Gurgaon can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Gurgaon
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Gurgaon AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted AI Development Company In Gurgaon serving businesses across</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Cyber City</span>
                <span>•</span>
                <span>DLF City</span>
                <span>•</span>
                <span>Golf Course Road</span>
                <span>•</span>
                <span>Udyog Vihar</span>
                <span>•</span>
                <span>Sohna Road</span>
                <span>•</span>
                <span>MG Road</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

