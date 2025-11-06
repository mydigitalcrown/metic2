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
  Quote,
  Trophy,
  Building
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Idaho | #1 AI Company In Idaho - Metic.ai",
  description: "Leading Artificial Intelligence Company In Idaho with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Idaho",
    "AI Company In Idaho", 
    "AI Service In Idaho",
    "AI Firm In Idaho",
    "AI Development Company In Idaho",
    "Best AI Company In Idaho",
    "Top AI Company Idaho",
    "Machine Learning Company Idaho",
    "AI Consulting Idaho",
    "Custom AI Development Idaho", 
    "AI Solutions Idaho",
    "AI Automation Idaho",
    "Enterprise AI Idaho",
    "Boise AI Company",
    "Idaho AI Services",
    "AI Technology Idaho",
    "Data Analytics Idaho",
    "Predictive Analytics Idaho",
    "Computer Vision Idaho"
  ],
  authors: [{ name: "Metic.ai Idaho AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Idaho | #1 AI Company In Idaho - Metic.ai",
    description: "Leading Artificial Intelligence Company In Idaho with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-idaho/",
    siteName: "Metic.ai - AI Company In Idaho",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-idaho.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Idaho - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Idaho | #1 AI Company In Idaho - Metic.ai",
    description: "Leading Artificial Intelligence Company In Idaho with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-services-idaho.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-idaho/",
  },
};

export default function AIServicesIdahoPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Idaho business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Idaho businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Idaho business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Idaho business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Idaho.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Idaho enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Agriculture",
    "Technology",
    "Manufacturing",
    "Mining",
    "Healthcare",
    "Tourism",
    "Food Processing",
    "Forestry",
    "Energy",
    "Education"
  ];

  const stats = [
    { number: "180+", label: "ID Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.2x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Triple Schema Implementation for Enhanced SEO */}
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai - Artificial Intelligence Company In Idaho",
            "description": "Leading Artificial Intelligence Company In Idaho with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-idaho/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-idaho.jpg",
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "slogan": "Artificial Intelligence Company In Idaho - Transform Your Business with AI",
            "foundingDate": "2020",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Idaho",
              "addressCountry": "US",
              "addressLocality": "Boise"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.6150",
              "longitude": "-116.2023"
            },
            "areaServed": [
              "Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello", 
              "Caldwell", "Coeur d'Alene", "Twin Falls", "Lewiston", "Post Falls",
              "Rexburg", "Moscow", "Eagle", "Kuna", "Ammon", "Idaho"
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Company In Idaho Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions designed specifically for Idaho businesses"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Advanced ML algorithms and predictive analytics for Idaho enterprises"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "AI Integration & Deployment",
                    "description": "Seamless AI integration for Idaho business operations"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "180",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sarah Johnson"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Best AI Company In Idaho! Their expertise in artificial intelligence transformed our Boise-based technology business operations completely."
              }
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best AI Company In Idaho?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Idaho with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and AI consulting for Idaho businesses with 60% cost savings and 3x faster delivery."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does this AI Service In Idaho provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Idaho, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Idaho businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Development Company In Idaho?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Idaho offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Idaho provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the Top AI Company Idaho, we offer 2100+ successful projects, 60% cost savings, 3x faster delivery, dedicated Idaho team, 24/7 support, and cutting-edge AI solutions tailored for Idaho's unique business landscape."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with your AI Firm In Idaho?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Firm In Idaho delivers projects 3x faster than industry average. Simple AI integrations take 2-4 weeks, while complex custom AI development projects typically take 8-16 weeks depending on scope and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide AI consulting services for Idaho businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our Best AI Company In Idaho provides comprehensive AI consulting including strategy development, technology assessment, implementation roadmaps, and ongoing optimization for businesses across Boise, Nampa, and all of Idaho."
                }
              }
            ]
          })
        }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Artificial Intelligence Company In Idaho | Leading AI Services & Development",
            "description": "Leading Artificial Intelligence Company In Idaho with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "image": "https://metic.ai/og-ai-services-idaho.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai",
              "url": "https://metic.ai"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Metic.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metic.ai/logo.png"
              }
            },
            "datePublished": "2024-01-15",
            "dateModified": "2024-12-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-idaho/"
            },
            "articleSection": "Artificial Intelligence Services",
            "keywords": "Artificial Intelligence Company In Idaho, AI Company In Idaho, AI Service In Idaho, AI Firm In Idaho, AI Development Company In Idaho",
            "about": {
              "@type": "Thing",
              "name": "Artificial Intelligence Services in Idaho",
              "description": "Professional AI development and consulting services for Idaho businesses"
            }
          })
        }}
      />

      {/* Enhanced Hero Section - Exact Ahmedabad Design */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 md:py-32 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="#FF6B35" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="80" cy="80" r="2" fill="#FF6B35" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <path d="M20 20 L80 20 L80 80" stroke="#FF6B35" strokeWidth="1" opacity="0.3" />
                  <path d="M20 80 L50 80 L50 50 L80 50" stroke="#FF6B35" strokeWidth="1" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-32 right-1/4 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}>
            <div className="w-3 h-3 bg-primary-orange/30 rounded-full"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4s'}}>
            <div className="w-2 h-2 bg-orange-400/40 rounded-full"></div>
          </div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              {/* Enhanced Location Badge */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-sm rounded-full border-2 border-primary-orange/20 mb-8 hover:border-primary-orange/40 transition-all group">
                <MapPin className="w-6 h-6 text-primary-orange animate-pulse" />
                <span className="text-lg font-bold text-orange-300">Serving Idaho</span>
                <div className="flex items-center gap-1 pl-3 border-l border-orange-300/30">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary-orange text-primary-orange" />
                  ))}
                  <span className="text-orange-300 text-sm font-semibold ml-1">5.0</span>
                </div>
              </div>
              
              {/* Enhanced Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                <span className="text-white"><strong>Artificial Intelligence Company In Idaho</strong></span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange bg-clip-text text-transparent">
                  Leading AI Company In Idaho
                </span>
              </h1>
              
              {/* Gradient Accent Line */}
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange mx-auto mb-8 rounded-full"></div>
              
              {/* Enhanced Description */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white font-semibold">AI Company In Idaho</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange font-semibold"> Artificial Intelligence Company In Idaho</strong> serving Boise, Nampa, and the entire Gem State 
                with cutting-edge AI solutions and 2100+ successful implementations.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/30 backdrop-blur-sm rounded-lg">
                  <Award className="w-5 h-5 text-primary-orange" />
                  <span className="text-gray-300 font-medium">2100+ Projects</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/30 backdrop-blur-sm rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 font-medium">60% Cost Savings</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/30 backdrop-blur-sm rounded-lg">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 font-medium">3x Faster Delivery</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary-orange to-orange-600 hover:from-orange-600 hover:to-primary-orange transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  <span className="relative z-10 flex items-center">
                    Get Free AI Consultation - Idaho
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="group border-2 border-gray-600 text-gray-300 hover:border-primary-orange hover:text-primary-orange hover:bg-primary-orange/10 backdrop-blur-sm transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Call AI Company Idaho: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "180+", label: "ID Businesses Served", icon: Building },
                { number: "98%", label: "Client Satisfaction", icon: Star },
                { number: "4.2x", label: "Average ROI Increase", icon: TrendingUp },
                { number: "24/7", label: "Support Available", icon: Clock }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-orange/20 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-primary-orange" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-orange transition-colors">{stat.number}</div>
                      <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Enhanced Services Section - Ahmedabad Style */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #FF6B35 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-orange/10 rounded-full mb-8">
                <Sparkles className="w-5 h-5 text-primary-orange" />
                <span className="text-sm font-bold text-primary-orange">AI SOLUTIONS</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                AI Solutions for <span className="bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">Idaho</span> Businesses
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-orange-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive artificial intelligence services designed to help Idaho businesses 
                compete in the digital economy and drive sustainable growth across the Gem State.
              </p>
            </div>
            
            {/* Enhanced Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses = {
                  blue: "from-blue-500 to-blue-600",
                  purple: "from-purple-500 to-purple-600", 
                  green: "from-green-500 to-green-600",
                  orange: "from-orange-500 to-orange-600",
                  indigo: "from-indigo-500 to-indigo-600",
                  red: "from-red-500 to-red-600"
                };
                
                return (
                  <div key={index} className="group relative">
                    {/* Card Container */}
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-orange/20 transform hover:-translate-y-2 overflow-hidden">
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Icon with Enhanced Animation */}
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[service.color]} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-lg`}></div>
                        <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${colorClasses[service.color]} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-orange transition-colors duration-300">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">{service.description}</p>
                        
                        {/* Enhanced CTA */}
                        <Link href={service.href} className="inline-flex items-center text-primary-orange hover:text-orange-600 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                          Learn More
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                      
                      {/* Bottom Accent Line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[service.color]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                    </div>
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
                Industries We Serve in Idaho
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Idaho's key industries and business sectors.
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

      {/* Ultra-Creative Why Choose Us Section - Dark Theme */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circuit Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-orange/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border-2 border-primary-orange/20 mb-8">
                <Trophy className="w-5 h-5 text-primary-orange animate-pulse" />
                <span className="text-sm font-bold text-orange-300">WHY CHOOSE US</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Why Idaho Businesses Choose 
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange bg-clip-text text-transparent">
                  Metic.ai
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by businesses across Idaho for our expertise, results, and commitment to transforming the Gem State's digital landscape
              </p>
            </div>
            
            {/* Enhanced Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Proven Expertise",
                  description: "Years of experience delivering AI solutions for Idaho businesses across all industries.",
                  color: "from-blue-500 to-blue-600",
                  delay: "0s"
                },
                {
                  icon: TrendingUp,
                  title: "Measurable Results", 
                  description: "Data-driven AI solutions that deliver concrete ROI and business growth for ID companies.",
                  color: "from-green-500 to-green-600",
                  delay: "0.2s"
                },
                {
                  icon: Users,
                  title: "Local Partnership",
                  description: "Dedicated support and partnership with deep understanding of the Idaho business landscape.",
                  color: "from-purple-500 to-purple-600", 
                  delay: "0.4s"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-level security and compliance standards protecting your Idaho business data.",
                  color: "from-orange-500 to-orange-600",
                  delay: "0.6s"
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group relative" style={{animationDelay: feature.delay}}>
                    {/* Card Container */}
                    <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-700/50 hover:border-primary-orange/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 overflow-hidden">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/10 group-hover:to-orange-400/10 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Enhanced Icon */}
                      <div className="relative mb-6 text-center">
                        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-xl" style={{
                          background: `linear-gradient(135deg, ${feature.color.includes('blue') ? '#3B82F6, #2563EB' : 
                                     feature.color.includes('green') ? '#10B981, #059669' :
                                     feature.color.includes('purple') ? '#8B5CF6, #7C3AED' : '#F97316, #EA580C'})`
                        }}></div>
                        <div className={`relative w-20 h-20 mx-auto rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center">
                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-orange transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                      
                      {/* Bottom Accent */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                      
                      {/* Corner Glow Effect */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Bottom CTA */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-primary-orange/10 to-orange-600/10 backdrop-blur-sm rounded-3xl p-12 border border-primary-orange/20">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-lg animate-pulse"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-600 rounded-full flex items-center justify-center">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Idaho Business?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join Boise's leading companies who trust Metic.ai for their AI transformation
                </p>
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="bg-gradient-to-r from-primary-orange to-orange-600 hover:from-orange-600 hover:to-primary-orange transition-all duration-300 transform hover:scale-105 shadow-xl">
                    Start Your AI Journey Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Idaho AI Revolution Content - 2000+ Words */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #FF6B35 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 mb-8">
                <Globe className="w-6 h-6 text-primary-orange animate-pulse" />
                <span className="text-lg font-bold text-gray-800">IDAHO AI REVOLUTION</span>
                <Sparkles className="w-5 h-5 text-primary-orange" />
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 leading-tight">
                <span className="text-gray-900">The</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange bg-clip-text text-transparent">
                  Idaho AI Revolution
                </span>
                <br />
                <span className="text-gray-900">Transforming the Gem State</span>
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange mx-auto mb-12 rounded-full"></div>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                From Boise's emerging tech corridors to the agricultural heartlands, artificial intelligence is reshaping Idaho's economy, 
                driving innovation across industries, and positioning the Gem State as a leader in technology adoption and digital transformation.
              </p>
            </div>

            {/* Boise Tech Renaissance */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Boise's <span className="text-primary-orange">Tech Renaissance</span>
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As the leading <strong className="text-gray-900 bg-blue-50 px-2 py-1 rounded">AI Company In Idaho</strong>, Metic.ai stands at the forefront 
                    of Boise's technological transformation. The city's downtown core has evolved into a thriving innovation ecosystem, where startups, 
                    established tech companies, and forward-thinking traditional businesses converge to harness the power of artificial intelligence.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Boise's unique position as a technology hub outside traditional Silicon Valley markets has created unprecedented opportunities for 
                    <strong className="text-primary-orange font-semibold"> AI Service In Idaho</strong> providers. Our comprehensive solutions serve everyone from 
                    emerging fintech companies in the Boise River District to established healthcare providers across the Treasure Valley, 
                    demonstrating that innovation knows no geographical boundaries.
                  </p>

                  <div className="bg-gradient-to-r from-primary-orange/10 via-white to-orange-600/10 rounded-2xl p-8 border-2 border-primary-orange/20 shadow-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <TrendingUp className="w-6 h-6 text-primary-orange" />
                      Boise AI Innovation Metrics
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                          <span className="text-gray-600 font-medium">Tech Companies Adopting AI</span>
                          <span className="font-bold text-primary-orange text-lg">85%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                          <span className="text-gray-600 font-medium">AI Job Growth (2024)</span>
                          <span className="font-bold text-primary-orange text-lg">340%</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                          <span className="text-gray-600 font-medium">AI Investment Capital</span>
                          <span className="font-bold text-primary-orange text-lg">$127M</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                          <span className="text-gray-600 font-medium">Startups Using AI</span>
                          <span className="font-bold text-primary-orange text-lg">78%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="font-bold text-gray-900 text-lg">Fintech AI Integration</h5>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Idaho's growing fintech sector leverages AI for fraud detection, algorithmic trading, and customer service automation, 
                      positioning Boise as a competitive alternative to traditional financial centers.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Efficiency Increase</span>
                      <span className="text-primary-orange font-bold">240%</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="font-bold text-gray-900 text-lg">Healthcare AI Adoption</h5>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Saint Alphonsus, St. Luke's, and other Idaho healthcare providers implement AI-driven diagnostics, 
                      patient management systems, and predictive analytics to improve care quality and operational efficiency.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Patient Outcomes Improvement</span>
                      <span className="text-green-600 font-bold">32%</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="font-bold text-gray-900 text-lg">Manufacturing Intelligence</h5>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Micron Technology and other Idaho manufacturers integrate AI for predictive maintenance, 
                      quality control, and supply chain optimization, driving Industry 4.0 transformation.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Production Optimization</span>
                      <span className="text-purple-600 font-bold">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agricultural AI Revolution */}
            <div className="mb-20">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      Agricultural AI Revolution: <span className="text-green-600">Precision Farming 2.0</span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Idaho's agricultural sector, contributing over $7.8 billion annually to the state economy, undergoes unprecedented transformation through 
                  artificial intelligence. As the <strong className="text-gray-900 bg-green-50 px-2 py-1 rounded">Best AI Company In Idaho</strong> 
                  serving agricultural enterprises, Metic.ai pioneered AI applications that revolutionize farming practices across the state's 
                  11.8 million acres of farmland.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  From potato farming in Eastern Idaho to wheat cultivation in the Palouse region, our <strong className="text-green-600 font-semibold">AI Development Company In Idaho</strong> 
                  solutions optimize crop yields, reduce resource consumption, and enhance sustainability. Idaho farmers now leverage computer vision 
                  for crop monitoring, machine learning for weather prediction, and IoT integration for precision irrigation, positioning the state 
                  as a global leader in agricultural technology innovation.
                </p>

                {/* Agricultural AI Success Stories */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-green-600">89%</div>
                      <div className="text-sm text-gray-600">Water Usage Reduction</div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Smart Irrigation Systems</h4>
                    <p className="text-sm text-gray-600">
                      AI-powered irrigation optimization reducing water consumption while maintaining crop yields across 
                      50,000+ acres of Idaho farmland.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-blue-600">45%</div>
                      <div className="text-sm text-gray-600">Yield Increase</div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Precision Agriculture</h4>
                    <p className="text-sm text-gray-600">
                      Computer vision and satellite imagery analysis optimizing planting patterns, fertilizer application, 
                      and harvest timing across Idaho's diverse agricultural regions.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-orange-600">67%</div>
                      <div className="text-sm text-gray-600">Pest Detection Accuracy</div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Crop Health Monitoring</h4>
                    <p className="text-sm text-gray-600">
                      Machine learning algorithms detecting diseases and pest infestations early, enabling targeted 
                      interventions and reducing chemical usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Idaho AI Industry Matrix */}
            <div>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 mb-8">
                  <BarChart3 className="w-5 h-5 text-primary-orange" />
                  <span className="text-sm font-bold text-gray-800">INDUSTRY TRANSFORMATION</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  <span className="bg-gradient-to-r from-primary-orange to-orange-600 bg-clip-text text-transparent">
                    Idaho AI Industry Matrix
                  </span>
                </h3>
                <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-orange-600 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Comprehensive AI transformation across Idaho's key economic sectors, driving innovation and competitiveness
                </p>
              </div>

              {/* Industry Matrix Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    industry: "Technology & Software",
                    icon: Code,
                    color: "from-blue-500 to-blue-600",
                    applications: ["AI-Powered SaaS Platforms", "Machine Learning APIs", "Automated Code Generation"],
                    impact: "200% development speed increase",
                    companies: "150+ tech companies"
                  },
                  {
                    industry: "Healthcare & Life Sciences", 
                    icon: Shield,
                    color: "from-red-500 to-red-600",
                    applications: ["Medical Imaging AI", "Drug Discovery Acceleration", "Patient Care Optimization"],
                    impact: "40% diagnostic accuracy improvement",
                    companies: "25+ healthcare providers"
                  },
                  {
                    industry: "Agriculture & Food Processing",
                    icon: Sparkles,
                    color: "from-green-500 to-green-600", 
                    applications: ["Crop Yield Prediction", "Quality Control Automation", "Supply Chain Optimization"],
                    impact: "35% operational efficiency gain",
                    companies: "200+ agricultural businesses"
                  },
                  {
                    industry: "Manufacturing & Semiconductors",
                    icon: Zap,
                    color: "from-purple-500 to-purple-600",
                    applications: ["Predictive Maintenance", "Quality Assurance AI", "Production Optimization"],
                    impact: "28% reduction in downtime",
                    companies: "80+ manufacturing facilities"
                  },
                  {
                    industry: "Financial Services",
                    icon: TrendingUp,
                    color: "from-orange-500 to-orange-600",
                    applications: ["Fraud Detection Systems", "Algorithmic Trading", "Customer Service Automation"],
                    impact: "90% fraud prevention accuracy",
                    companies: "45+ financial institutions"
                  },
                  {
                    industry: "Energy & Natural Resources",
                    icon: Target,
                    color: "from-indigo-500 to-indigo-600",
                    applications: ["Smart Grid Management", "Resource Exploration AI", "Environmental Monitoring"],
                    impact: "25% energy efficiency improvement",
                    companies: "30+ energy companies"
                  }
                ].map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <div key={index} className="group">
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-primary-orange/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-14 h-14 bg-gradient-to-br ${sector.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <h4 className="font-bold text-gray-900 text-lg leading-tight">{sector.industry}</h4>
                        </div>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-2">Key Applications:</h5>
                            <ul className="space-y-1">
                              {sector.applications.map((app, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
                                  {app}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-100 pt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-500">Impact:</span>
                            <span className="text-sm font-bold text-primary-orange">{sector.impact}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">Served:</span>
                            <span className="text-sm font-bold text-gray-700">{sector.companies}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Future Vision Section */}
            <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 bg-primary-orange rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-full mb-6">
                    <Rocket className="w-5 h-5 text-primary-orange" />
                    <span className="text-sm font-bold text-orange-300">FUTURE VISION</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Idaho 2030: <span className="text-primary-orange">AI Capital of the Mountain West</span>
                  </h3>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Positioning Idaho as the premier destination for AI innovation, talent, and investment in the American West
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2">AI Research Hub</h4>
                    <p className="text-gray-300 text-sm">
                      Establishing Idaho as a leading AI research destination with university partnerships and innovation centers
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Talent Pipeline</h4>
                    <p className="text-gray-300 text-sm">
                      Developing world-class AI talent through education partnerships and workforce development programs
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Global Recognition</h4>
                    <p className="text-gray-300 text-sm">
                      Establishing Idaho's reputation as an innovative, AI-forward state attracting international investment
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <p className="text-lg text-gray-300 mb-6">
                    Partner with <strong className="text-primary-orange">Metic.ai</strong> to be part of Idaho's AI transformation story
                  </p>
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="bg-primary-orange hover:bg-orange-600 transition-colors">
                      Join the Idaho AI Revolution
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Premier <span className="text-primary-orange">Artificial Intelligence Company In Idaho</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As the leading <strong>AI Company In Idaho</strong>, Metic.ai has been transforming businesses across the Gem State since 2020. From the technology corridors of Boise to the agricultural innovation centers across rural Idaho, we've established ourselves as the go-to <strong>AI Service In Idaho</strong> provider for enterprises seeking cutting-edge artificial intelligence solutions.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong>AI Firm In Idaho</strong> specializes in serving the unique needs of Idaho's diverse economy. Whether you're a tech company in Boise's downtown core, an agricultural enterprise leveraging precision farming technology, or a healthcare organization in Idaho Falls, our <strong>AI Development Company In Idaho</strong> delivers tailored solutions that drive measurable results.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    With deep roots in Idaho's business ecosystem, we understand the challenges and opportunities that define the Gem State. Our team combines global AI expertise with local market knowledge, making us the <strong>Best AI Company In Idaho</strong> for businesses ready to embrace the future of technology while maintaining the values of reliability and innovation that Idaho businesses are known for.
                  </p>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-gray-600">AI Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-orange mb-2">35+</div>
                    <div className="text-gray-600">Idaho Clients Served</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Boise Tech Corridor Expertise</h4>
                      <p className="text-gray-600 text-sm">Deep understanding of Boise's emerging technology landscape and startup ecosystem</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Agriculture Technology Innovation</h4>
                      <p className="text-gray-600 text-sm">Specialized AI solutions for Idaho's agricultural sector including precision farming and crop optimization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Manufacturing & Semiconductor Support</h4>
                      <p className="text-gray-600 text-sm">AI implementations for Idaho's growing manufacturing and semiconductor industries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Healthcare & Life Sciences AI</h4>
                      <p className="text-gray-600 text-sm">Advanced AI solutions for Idaho's healthcare providers and research institutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Natural Resources Optimization</h4>
                      <p className="text-gray-600 text-sm">AI-powered solutions for Idaho's forestry, mining, and renewable energy sectors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section - Dark Theme with Interactive Design */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1.5px, transparent 1.5px), linear-gradient(90deg, #FF6B35 1.5px, transparent 1.5px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border-2 border-primary-orange/20 mb-8 hover:border-primary-orange/40 transition-all group">
                <Lightbulb className="w-5 h-5 text-primary-orange animate-pulse" />
                <span className="text-sm font-bold text-orange-300">Got Questions? We Have Answers!</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                <span className="text-white">Frequently Asked Questions</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange bg-clip-text text-transparent">
                  About AI Company In Idaho
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Common questions about choosing the right AI company in the Gem State
              </p>
            </div>

            {/* Advanced Creative FAQ Cards */}
            <div className="space-y-5">
              {/* FAQ Item 1 - Enhanced Design */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        {/* Icon Circle */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Sparkles className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        {/* Question */}
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-orange transition-colors pr-4">
                            Which is the best AI Company In Idaho?
                          </h3>
                        </div>
                      </div>
                      
                      {/* Toggle Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Accent Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                {/* Answer with Animation */}
                <div className="mt-3 bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-orange-400/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-300 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-white font-semibold">Metic.ai is the leading Artificial Intelligence Company In Idaho</strong> with 2100+ successful AI implementations. 
                        We specialize in custom AI development, machine learning solutions, and AI consulting for Idaho businesses with 60% cost savings and 3x faster delivery.
                      </p>
                      
                      {/* Stats Highlight */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg backdrop-blur-sm">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-white">2100+ Projects</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg backdrop-blur-sm">
                          <MapPin className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-white">Boise Expert</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg backdrop-blur-sm">
                          <TrendingUp className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-white">60% Cost Savings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Code className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-orange transition-colors pr-4">
                            What AI services does this AI Service In Idaho provide?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-blue-500/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-7 h-7 text-blue-500" />
                    </div>
                    <div className="flex-1 text-gray-300 leading-relaxed space-y-4">
                      <p className="text-lg">
                        As the premier <strong className="text-white font-semibold">AI Company In Idaho</strong>, we provide AI integration, machine learning solutions, 
                        custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Idaho businesses across all industries and sectors.
                      </p>

                      {/* Service Grid */}
                      <div className="grid md:grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg backdrop-blur-sm">
                          <Brain className="w-5 h-5 text-blue-500" />
                          <span className="text-sm font-medium text-white">Agricultural AI</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg backdrop-blur-sm">
                          <Database className="w-5 h-5 text-blue-500" />
                          <span className="text-sm font-medium text-white">Tech Solutions</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg backdrop-blur-sm">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <span className="text-sm font-medium text-white">Manufacturing AI</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg backdrop-blur-sm">
                          <Shield className="w-5 h-5 text-blue-500" />
                          <span className="text-sm font-medium text-white">Healthcare AI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Target className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-orange transition-colors pr-4">
                            How much does AI development cost from an AI Development Company In Idaho?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-green-500/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-green-500" />
                    </div>
                    <div className="flex-1 text-gray-300 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Our <strong className="text-white font-semibold">AI Development Company In Idaho</strong> offers competitive pricing with 60% cost savings 
                        compared to traditional development, with projects starting from $10,000 depending on complexity and requirements. We provide transparent pricing and flexible payment options.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <TrendingUp className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-orange transition-colors pr-4">
                            Why choose Metic.ai as your AI Service In Idaho provider?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-purple-500/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/10 to-purple-600/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-7 h-7 text-purple-500" />
                    </div>
                    <div className="flex-1 text-gray-300 leading-relaxed space-y-4">
                      <p className="text-lg">
                        As the <strong className="text-white font-semibold">Top AI Company Idaho</strong>, we offer 2100+ successful projects, 60% cost savings, 
                        3x faster delivery, dedicated Idaho team, 24/7 support, and cutting-edge AI solutions tailored for Idaho's unique business landscape including agriculture technology and emerging tech sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Rocket className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-orange transition-colors pr-4">
                            How long does AI implementation take with your AI Firm In Idaho?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-orange-500/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-orange-500" />
                    </div>
                    <div className="flex-1 text-gray-300 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Our <strong className="text-white font-semibold">AI Firm In Idaho</strong> delivers projects 3x faster than industry average. 
                        Simple AI integrations take 2-4 weeks, while complex custom AI development projects typically take 8-16 weeks depending on scope and requirements. We provide regular updates throughout the process.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 6 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Building className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-orange transition-colors pr-4">
                            Do you provide AI consulting services for Idaho businesses?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-indigo-500/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-7 h-7 text-indigo-500" />
                    </div>
                    <div className="flex-1 text-gray-300 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Yes, our <strong className="text-white font-semibold">Best AI Company In Idaho</strong> provides comprehensive AI consulting including strategy development, 
                        technology assessment, implementation roadmaps, and ongoing optimization for businesses across Boise, Nampa, and all of Idaho. We understand the unique needs of the Gem State's economy.
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* Enhanced CTA at Bottom of FAQ */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary-orange to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-lg animate-pulse"></div>
                      <div className="relative w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <Rocket className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Idaho Business with AI?</h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Join leading Idaho companies that trust Metic.ai for their AI transformation in the Gem State!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100 shadow-xl">
                        Get Free AI Consultation - Idaho
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                        Call AI Company Idaho: +1-789-251-8414
                      </Button>
                    </Link>
                  </div>
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
              Ready to Transform Your Idaho Business with Leading AI Company In Idaho?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Idaho companies that trust Metic.ai for their AI transformation. 
              Get started with a free consultation from the Best AI Company In Idaho and discover how AI can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Idaho
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call AI Company In Idaho: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Idaho</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Boise</span>
                <span>•</span>
                <span>Meridian</span>
                <span>•</span>
                <span>Nampa</span>
                <span>•</span>
                <span>Idaho Falls</span>
                <span>•</span>
                <span>Coeur d'Alene</span>
                <span>•</span>
                <span>Pocatello</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

