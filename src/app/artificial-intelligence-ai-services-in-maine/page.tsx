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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial Intelligence Company In Maine | #1 AI Company In New England - Metic.ai",
  description: "Leading Artificial Intelligence Company In Maine with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development in Pine Tree State. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Maine",
    "AI Company In Maine",
    "AI Service In Maine",
    "AI Firm In Maine",
    "AI Development Company In Maine",
    "Best AI Company In Maine",
    "Top AI Company Maine",
    "AI Solutions Maine",
    "Machine Learning Maine",
    "AI Technology Maine",
    "AI Innovation Maine",
    "AI Automation Maine",
    "Maine AI Services",
    "AI Company Portland Maine",
    "AI Development New England",
    "AI Consulting Maine",
    "AI Implementation Maine",
    "AI Strategy Maine",
    "AI Transformation Maine",
    "Maine Technology Solutions",
    "Pine Tree State AI",
    "Maine AI Company",
    "AI Services Portland",
    "Maine Machine Learning",
    "AI Development Portland Maine",
    "Artificial Intelligence New England",
    "AI Company Bangor Maine",
    "Maine AI Solutions",
    "AI Technology Portland",
    "Maine AI Development"
  ],
  authors: [{ name: "Metic.ai" }],
  creator: "Metic.ai",
  publisher: "Metic.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://metic.ai"),
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-maine/",
  },
  openGraph: {
    title: "Artificial Intelligence Company In Maine | #1 AI Company In New England - Metic.ai",
    description: "Leading Artificial Intelligence Company In Maine with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development in Pine Tree State. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-maine/",
    siteName: "Metic.ai - AI Company In Maine",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-image-maine.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Maine - Metic.ai"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Maine | #1 AI Company In New England - Metic.ai",
    description: "Leading Artificial Intelligence Company In Maine with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development in Pine Tree State. Transform your business with 60% cost savings & 3x faster delivery.",
    creator: "@metic_ai",
    images: ["https://metic.ai/og-image-maine.jpg"]
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
  verification: {
    google: "your-google-verification-code",
  }
};

export default function AIServicesMainePage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Maine business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Maine businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Maine business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Maine business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Maine.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Maine enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Tourism",
    "Seafood",
    "Manufacturing",
    "Healthcare",
    "Technology",
    "Agriculture",
    "Forestry",
    "Education",
    "Financial Services",
    "Renewable Energy"
  ];

  const stats = [
    { number: "135+", label: "ME Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.0x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Enhanced Triple Schema - Organization, FAQ, Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Artificial Intelligence Company In Maine",
              "alternateName": ["AI Company In Maine", "Best AI Company In Maine", "AI Development Company In Maine"],
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-maine/",
              "logo": "https://metic.ai/logo.png",
              "description": "Leading Artificial Intelligence Company In Maine with 2100+ successful AI implementations. Expert AI services for Portland, Augusta, Bangor businesses across tourism, lobster industry, and forestry sectors.",
              "foundingDate": "2020",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Maine",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.2538",
                "longitude": "-69.4455"
              },
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/metic_ai"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services In Maine",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI for Maine Tourism Industry",
                      "description": "AI solutions for Acadia National Park visitor management and tourism optimization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI for Lobster Industry",
                      "description": "Predictive analytics for Maine's lobster fishing and aquaculture operations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI for Maine Forestry",
                      "description": "Forest management AI for Maine's lumber and paper industries"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Solutions Maine",
                      "description": "Custom ML algorithms for Maine businesses"
                    }
                  }
                ]
              },
              "areaServed": {
                "@type": "State",
                "name": "Maine",
                "containsPlace": [
                  {
                    "@type": "City",
                    "name": "Portland"
                  },
                  {
                    "@type": "City", 
                    "name": "Augusta"
                  },
                  {
                    "@type": "City",
                    "name": "Bangor"
                  },
                  {
                    "@type": "City",
                    "name": "Lewiston"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "185",
                "bestRating": "5"
              },
              "award": "Best AI Company In Maine 2024"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best Artificial Intelligence Company In Maine?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the leading Artificial Intelligence Company In Maine, serving Portland, Augusta, and Bangor with 2100+ successful AI implementations. We specialize in AI solutions for Maine's tourism, lobster industry, and forestry sectors with 60% cost savings and 3x faster delivery."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI services does the top AI Company In Maine offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the premier AI Company In Maine, we offer machine learning, natural language processing, computer vision, predictive analytics for lobster fishing, AI for Acadia National Park tourism, forestry management AI, and custom AI development for Maine businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can AI development help Maine businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Development Company In Maine helps businesses achieve 60% cost reduction, 3x faster operations, and improved efficiency. We've successfully implemented AI solutions across Maine's tourism industry, lobster fishing operations, and forestry sector."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which AI Firm In Maine serves Portland and Augusta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the leading AI Firm In Maine serving Portland, Augusta, Bangor, and all major Maine cities. We provide comprehensive AI services tailored to Maine's unique business landscape including tourism, maritime, and forestry industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Metic.ai the best AI Service In Maine?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Service In Maine stands out with 2100+ successful implementations, specialized solutions for Maine's key industries (tourism, lobster, forestry), 24/7 support, and proven results including 60% cost savings for Maine businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to choose the right AI Company In Maine for my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choose Metic.ai as your AI Company In Maine for our proven track record, industry-specific expertise in Maine's economy, comprehensive support, and successful AI implementations across Portland, Augusta, and statewide Maine businesses."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In Maine | #1 AI Company In Pine Tree State",
              "description": "Leading Artificial Intelligence Company In Maine with 2100+ successful AI implementations. Expert AI services for Maine tourism, lobster industry & forestry.",
              "author": {
                "@type": "Organization",
                "name": "Metic.ai"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Metic.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://metic.ai/logo.png"
                }
              },
              "datePublished": "2024-01-01",
              "dateModified": "2024-12-07",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://metic.ai/artificial-intelligence-ai-services-in-maine/"
              },
              "articleSection": "Artificial Intelligence Services",
              "keywords": ["Artificial Intelligence Company In Maine", "AI Company In Maine", "AI Service In Maine", "AI Firm In Maine", "AI Development Company In Maine"],
              "about": [
                {
                  "@type": "Thing",
                  "name": "Artificial Intelligence in Maine"
                },
                {
                  "@type": "Thing", 
                  "name": "AI for Tourism Industry"
                },
                {
                  "@type": "Thing",
                  "name": "AI for Lobster Industry"
                },
                {
                  "@type": "Thing",
                  "name": "Maine Business Technology"
                }
              ]
            }
          ])
        }}
      />

      {/* Enhanced Creative Hero Section - VSO & Target Keyword Optimized */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Floating AI Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-orange/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-orange-400/30 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-primary-orange/20 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Location Badge */}
            <div className="inline-flex items-center gap-3 mb-8 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-orange/20">
              <div className="relative">
                <MapPin className="w-5 h-5 text-primary-orange" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-orange rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-medium text-orange-300">Serving Maine, New England, USA</span>
              <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Title with Animation */}
            <div className="relative mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white relative z-10">
                <strong>
                  Artificial Intelligence Company In Maine
                </strong>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Leading AI Company In Pine Tree State
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="relative mb-10">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white">AI Company In Maine</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange"> Artificial Intelligence Company In Maine</strong> 
                with 2100+ successful AI implementations. We help businesses across Maine transform with cutting-edge AI solutions, 
                delivering <span className="text-primary-orange font-semibold">60% cost savings</span> and 
                <span className="text-primary-orange font-semibold">3x faster results</span> than traditional development.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-orange/20 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary-orange" />
                  </div>
                  <span className="text-sm text-gray-400">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-orange/20 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary-orange" />
                  </div>
                  <span className="text-sm text-gray-400">Award Winning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-orange/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary-orange" />
                  </div>
                  <span className="text-sm text-gray-400">2100+ Clients</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-primary-orange to-orange-500 hover:from-primary-orange/90 hover:to-orange-500/90 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                >
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-primary-orange text-primary-orange hover:bg-primary-orange/10 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats with Creative Design */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                    <div className="text-3xl font-bold text-primary-orange mb-2 group-hover:animate-pulse">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced VSO Keywords Section */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-6 flex items-center justify-center gap-2">
                <Globe className="w-4 h-4 text-primary-orange" />
                Trusted as the top AI Service In Maine
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "AI Firm In Maine",
                  "AI Development Company In Maine", 
                  "Best AI Company Pine Tree State"
                ].map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-gray-400 text-xs border border-gray-700/50 hover:border-primary-orange/50 hover:text-primary-orange transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
                <strong>AI Services</strong> by Leading <span className="text-primary-orange">Artificial Intelligence Company In Maine</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services from Maine's most trusted <strong>AI Company In Maine</strong>. 
                Transforming businesses with cutting-edge AI solutions tailored for Pine Tree State's industrial landscape.
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
                Industries We Serve in Maine
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Maine's key industries and business sectors.
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

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Industries We Serve in Maine
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Maine's key industries and business sectors.
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
        {/* Advanced Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Circuit Patterns */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Floating AI Elements with Different Sizes */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 bg-secondary-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary-orange/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
          
          {/* Dynamic Geometric Shapes */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary-orange/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-400/40 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary-orange/30 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-2.5 h-2.5 bg-secondary-orange/40 rounded-full animate-bounce" style={{animationDelay: '1.8s'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Creative Header */}
            <div className="text-center mb-20">
              {/* Premium Badge with Glow Effect */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-xl rounded-full border-2 border-primary-orange/30 mb-10 hover:border-primary-orange/50 transition-all group shadow-2xl">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-md animate-pulse"></div>
                  <div className="relative w-4 h-4 bg-primary-orange rounded-full animate-pulse"></div>
                </div>
                <span className="text-sm font-bold text-orange-300 tracking-wider">WHY CHOOSE METIC.AI</span>
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary-orange/20 rounded-full blur-md animate-pulse"></div>
                  <div className="relative w-4 h-4 bg-secondary-orange rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-white">Premier </span>
                <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange bg-clip-text text-transparent animate-gradient">
                  AI Firm In Maine
                </span>
                <br />
                <span className="text-gray-300 text-3xl md:text-4xl lg:text-5xl">Transforming Pine Tree State's Future</span>
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange mx-auto mb-10 rounded-full shadow-lg"></div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                As the leading <strong className="text-primary-orange">AI Development Company In Maine</strong>, we're trusted by Maine's 
                most innovative businesses for our expertise, proven results, and unwavering commitment to client success.
              </p>
            </div>
            
            {/* Ultra-Creative Feature Cards with Advanced Animations */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 - Proven Expertise */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-500 group-hover:transform group-hover:scale-105 h-full">
                  <div className="relative mb-8">
                    {/* Icon with Advanced Animation */}
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl animate-pulse opacity-20"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl group-hover:animate-spin transition-all duration-1000"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <Award className="w-10 h-10 text-white group-hover:animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Floating Numbers */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-orange/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary-orange/30">
                      <span className="text-xs font-bold text-primary-orange">2K+</span>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-orange transition-colors">
                      Proven AI Expertise
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      Years of experience delivering cutting-edge AI solutions for Maine businesses across tourism, 
                      lobster fishing, forestry, and emerging tech sectors.
                    </p>
                    
                    {/* Enhanced Stats */}
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Success Rate</span>
                        <span className="text-primary-orange font-bold">99.2%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-1.5 rounded-full w-[99%] group-hover:animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Measurable Results */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 h-full">
                  <div className="relative mb-8">
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl animate-pulse opacity-20"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl group-hover:animate-spin transition-all duration-1000"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <TrendingUp className="w-10 h-10 text-white group-hover:animate-pulse" />
                      </div>
                    </div>
                    
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30">
                      <span className="text-xs font-bold text-green-400">60%</span>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                      Measurable Results
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      Data-driven AI solutions that deliver concrete ROI and business growth for Maine companies 
                      across all industries and business sizes.
                    </p>
                    
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Cost Savings</span>
                        <span className="text-green-400 font-bold">60%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-1.5 rounded-full w-[60%] group-hover:animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Local Support */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 h-full">
                  <div className="relative mb-8">
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl animate-pulse opacity-20"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl group-hover:animate-spin transition-all duration-1000"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <Users className="w-10 h-10 text-white group-hover:animate-pulse" />
                      </div>
                    </div>
                    
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                      <span className="text-xs font-bold text-purple-400">24/7</span>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      Maine Local Support
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      Dedicated Maine-based support team with deep understanding of local business challenges 
                      and seasonal industry requirements.
                    </p>
                    
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Response Time</span>
                        <span className="text-purple-400 font-bold">&lt;2hrs</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-purple-500 to-violet-600 h-1.5 rounded-full w-[95%] group-hover:animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Innovation */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-500 group-hover:transform group-hover:scale-105 h-full">
                  <div className="relative mb-8">
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-orange-500 rounded-2xl animate-pulse opacity-20"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-orange-500 rounded-2xl group-hover:animate-spin transition-all duration-1000"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-primary-orange to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <Lightbulb className="w-10 h-10 text-white group-hover:animate-pulse" />
                      </div>
                    </div>
                    
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-orange/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary-orange/30">
                      <span className="text-xs font-bold text-primary-orange">3x</span>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-orange transition-colors">
                      Cutting-Edge Innovation
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      Latest AI technologies and methodologies ensuring Maine businesses stay ahead of the competition 
                      with future-ready solutions.
                    </p>
                    
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Delivery Speed</span>
                        <span className="text-primary-orange font-bold">3x Faster</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-primary-orange to-orange-500 h-1.5 rounded-full w-[85%] group-hover:animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Bottom CTA */}
            <div className="text-center mt-20">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-primary-orange"></div>
                <span className="text-primary-orange font-semibold">READY TO TRANSFORM YOUR BUSINESS?</span>
                <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-primary-orange"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="group bg-gradient-to-r from-primary-orange to-orange-500 hover:from-orange-500 hover:to-primary-orange shadow-2xl hover:shadow-primary-orange/30 transform hover:scale-105 transition-all duration-300"
                  >
                    <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Start Your AI Journey Today
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link href="tel:+917892518414">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-primary-orange text-primary-orange hover:bg-primary-orange/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Call Maine AI Experts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Maine's Leading <strong>Artificial Intelligence Company</strong>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Metic.ai stands as the premier <strong>AI Company In Maine</strong>, deeply rooted in understanding the Pine Tree State's unique business landscape. From Portland's thriving tech ecosystem to Augusta's government sector, from Bangor's healthcare institutions to the coastal lobster industry, we've successfully implemented AI solutions across Maine's diverse economy.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our <strong>AI Development Company In Maine</strong> specializes in serving the state's key industries including tourism (Acadia National Park optimization), maritime and lobster fishing (predictive analytics for catch optimization), forestry and lumber (sustainable forest management AI), and manufacturing (efficiency optimization for Maine's paper mills).
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  As the trusted <strong>AI Firm In Maine</strong>, we understand that Maine businesses value reliability, practical solutions, and long-term partnerships. Our 2100+ successful implementations across the state demonstrate our commitment to delivering AI solutions that work in Maine's unique seasonal business environment, from busy summer tourism to year-round operations.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Maine Tourism AI</h4>
                    <p className="text-sm text-gray-600">Acadia National Park visitor optimization, seasonal demand forecasting</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Lobster Industry AI</h4>
                    <p className="text-sm text-gray-600">Predictive analytics for catch optimization, aquaculture management</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Forestry & Lumber AI</h4>
                    <p className="text-sm text-gray-600">Sustainable forest management, lumber yield optimization</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Maine Healthcare AI</h4>
                    <p className="text-sm text-gray-600">Rural healthcare optimization, telehealth AI solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Maine Business Authority</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-orange mr-2">✓</span>
                      <span>Serving <strong>Portland</strong>, <strong>Augusta</strong>, <strong>Bangor</strong>, and 15+ Maine cities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-orange mr-2">✓</span>
                      <span>Deep expertise in Maine's tourism, lobster, and forestry industries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-orange mr-2">✓</span>
                      <span>Partnerships with University of Maine research initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-orange mr-2">✓</span>
                      <span>Specialized solutions for seasonal Maine business cycles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-orange mr-2">✓</span>
                      <span>Supporting Maine's transition to sustainable technology</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary-orange text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Maine AI Success Story</h3>
                  <p className="text-orange-100 mb-4">
                    "Metic.ai helped our Portland-based tourism company optimize Acadia National Park visitor flow with AI, resulting in 40% improved visitor satisfaction and 25% revenue increase during peak season."
                  </p>
                  <div className="text-sm text-orange-200">
                    — Maine Tourism Business Owner
                  </div>
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
                  About Maine's Leading <strong>Artificial Intelligence Company</strong>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Metic.ai stands as the premier <strong>AI Company In Maine</strong>, deeply rooted in understanding the Pine Tree State's unique business landscape. From Portland's thriving tech ecosystem to Augusta's government sector, from Bangor's healthcare institutions to the coastal lobster industry, we've successfully implemented AI solutions across Maine's diverse economy.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our <strong>AI Development Company In Maine</strong> specializes in serving the state's key industries including tourism (Acadia National Park optimization), maritime and lobster fishing (predictive analytics for catch optimization), forestry and lumber (sustainable forest management AI), and manufacturing (efficiency optimization for Maine's paper mills).
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  As the trusted <strong>AI Firm In Maine</strong>, we understand that Maine businesses value reliability, practical solutions, and long-term partnerships. Our 2100+ successful implementations across the state demonstrate our commitment to delivering AI solutions that work in Maine's unique seasonal business environment, from busy summer tourism to year-round operations.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Maine Tourism AI</h4>
                    <p className="text-sm text-gray-600">Acadia National Park visitor optimization, seasonal demand forecasting</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Lobster Industry AI</h4>
                    <p className="text-sm text-gray-600">Predictive analytics for catch optimization, aquaculture management</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Forestry & Lumber AI</h4>
                    <p className="text-sm text-gray-600">Sustainable forest management, lumber yield optimization</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Maine Healthcare AI</h4>
                    <p className="text-sm text-gray-600">Rural healthcare optimization, telehealth AI solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Maine Business Authority</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-orange mr-2">✓</span>
                      <span>Serving <strong>Portland</strong>, <strong>Augusta</strong>, <strong>Bangor</strong>, and 15+ Maine cities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-orange mr-2">✓</span>
                      <span>Deep expertise in Maine's tourism, lobster, and forestry industries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-orange mr-2">✓</span>
                      <span>Partnerships with University of Maine research initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-orange mr-2">✓</span>
                      <span>Specialized solutions for seasonal Maine business cycles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-orange mr-2">✓</span>
                      <span>Supporting Maine's transition to sustainable technology</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary-orange text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Maine AI Success Story</h3>
                  <p className="text-orange-100 mb-4">
                    "Metic.ai helped our Portland-based tourism company optimize Acadia National Park visitor flow with AI, resulting in 40% improved visitor satisfaction and 25% revenue increase during peak season."
                  </p>
                  <div className="text-sm text-orange-200">
                    — Maine Tourism Business Owner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maine Industries AI Solutions - Comprehensive Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Target className="w-5 h-5 text-primary-orange" />
                <span className="text-sm font-semibold text-white">Maine Industries</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                <span className="block">AI Solutions for</span>
                <span className="bg-gradient-to-r from-primary-orange to-yellow-400 bg-clip-text text-transparent">
                  Maine's Key Industries
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Specialized AI implementations across Maine's diverse economy - from Acadia National Park tourism 
                to Down East lobster fishing and northern Maine forestry operations.
              </p>
            </div>

            {/* Industries Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              {/* Tourism & Hospitality */}
              <div className="group">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Tourism & Hospitality</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    AI-powered visitor management for Acadia National Park, predictive booking systems for Maine's coast, 
                    and intelligent tour optimization that increased visitor satisfaction by 45%.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Acadia Park AI Management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Maine Coast Booking AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Tourism Revenue Optimization</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marine & Fishing */}
              <div className="group">
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-800/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-green-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Maine Lobster & Fishing</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Revolutionizing Maine's lobster industry with predictive catch analytics, weather-based 
                    route optimization, and sustainable fishing AI that increased daily hauls by 35%.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Lobster Catch Prediction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Fishing Route Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Sustainable Fishing AI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Forestry & Paper */}
              <div className="group">
                <div className="bg-gradient-to-br from-orange-600/20 to-red-800/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-orange-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Forestry & Lumber</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Advanced AI for Maine's forest management across 10,000+ acres, sustainable timber 
                    harvesting, and predictive forest health monitoring that reduced costs by 40%.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Forest Health AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Sustainable Harvesting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Timber Optimization</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturing */}
              <div className="group">
                <div className="bg-gradient-to-br from-purple-600/20 to-indigo-800/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-purple-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Manufacturing</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    AI-driven predictive maintenance for Maine manufacturing plants, quality control 
                    automation, and production optimization that improved efficiency by 50%.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Predictive Maintenance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Quality Control AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Production Optimization</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Healthcare */}
              <div className="group">
                <div className="bg-gradient-to-br from-pink-600/20 to-rose-800/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-pink-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Rural Healthcare</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    AI solutions for Maine's rural healthcare challenges, predictive health analytics, 
                    and telemedicine AI that improved patient care across remote Maine communities.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Rural Health AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Predictive Health Analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Telemedicine Integration</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agriculture */}
              <div className="group">
                <div className="bg-gradient-to-br from-yellow-600/20 to-amber-800/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-yellow-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Agriculture & Farming</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Precision agriculture AI for Maine's blueberry farms, potato cultivation optimization, 
                    and crop yield prediction that increased harvests by 30% across Maine farms.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Blueberry Farm AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Crop Yield Prediction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">Precision Agriculture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Impact Stats */}
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Maine Industry Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-orange mb-2">15+</div>
                  <div className="text-white text-sm">Maine Industries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-orange mb-2">85%</div>
                  <div className="text-white text-sm">Business Growth Average</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-orange mb-2">$50M+</div>
                  <div className="text-white text-sm">Maine Economic Impact</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-orange mb-2">24/7</div>
                  <div className="text-white text-sm">Maine Business Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced AI Technology Showcase for Maine */}
      <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-primary-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg border border-gray-200 mb-6">
                <Code className="w-5 h-5 text-primary-orange" />
                <span className="text-sm font-semibold text-gray-800">Advanced Technology</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Cutting-Edge AI Technology
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange to-yellow-500 bg-clip-text text-transparent">
                  Powering Maine Businesses
                </span>
              </h2>
              
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                We leverage the most advanced AI technologies and frameworks to deliver world-class solutions 
                tailored specifically for Maine's unique business landscape and challenges.
              </p>
            </div>

            {/* Technology Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              {/* Machine Learning */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Machine Learning</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Advanced ML algorithms powering predictive analytics for Maine's lobster industry, 
                  tourism forecasting, and forestry management optimization.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">TensorFlow & PyTorch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Scikit-learn & XGBoost</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700">Custom Neural Networks</span>
                  </div>
                </div>
              </div>

              {/* Natural Language Processing */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural Language Processing</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Advanced NLP solutions for Maine tourism chatbots, customer service automation, 
                  and multilingual support for diverse Maine business needs.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">GPT-4 & ChatGPT Integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700">BERT & RoBERTa Models</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">Custom Language Models</span>
                  </div>
                </div>
              </div>

              {/* Computer Vision */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer Vision</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Sophisticated image recognition for Maine's quality control, forest monitoring, 
                  and automated inspection systems across various industries.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">OpenCV & YOLO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">ResNet & EfficientNet</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">Custom Vision Models</span>
                  </div>
                </div>
              </div>

              {/* Data Analytics */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Comprehensive data analytics platforms for Maine businesses, providing deep insights 
                  and predictive capabilities for informed decision making.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Apache Spark & Hadoop</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700">Real-time Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="text-gray-700">Custom Dashboards</span>
                  </div>
                </div>
              </div>

              {/* Cloud & Infrastructure */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Scalable cloud solutions ensuring Maine businesses have reliable, secure, 
                  and high-performance AI infrastructure that grows with their needs.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">AWS & Azure Cloud</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700">Kubernetes & Docker</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-700">MLOps & DevOps</span>
                  </div>
                </div>
              </div>

              {/* Security & Compliance */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Enterprise-grade security ensuring Maine businesses maintain compliance 
                  while leveraging powerful AI technologies safely and responsibly.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">End-to-End Encryption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700">GDPR & SOC 2 Compliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-gray-700">Secure AI Model Deployment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Integration Process */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Our AI Implementation Process for Maine Businesses</h3>
                <p className="text-gray-300 text-lg">
                  Proven methodology ensuring successful AI deployment across Maine's diverse business landscape
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Discovery</h4>
                  <p className="text-gray-300">Understanding your Maine business needs and challenges</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Strategy</h4>
                  <p className="text-gray-300">Custom AI strategy aligned with Maine market dynamics</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Development</h4>
                  <p className="text-gray-300">Building and training AI models for your specific needs</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Launch</h4>
                  <p className="text-gray-300">Seamless deployment with ongoing Maine-based support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section with Maine Focus */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary-orange/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Quote className="w-5 h-5 text-primary-orange" />
                <span className="text-sm font-semibold text-white">Client Success Stories</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Maine Businesses Say About
                <br />
                <span className="bg-gradient-to-r from-primary-orange to-yellow-400 bg-clip-text text-transparent">
                  Our AI Solutions
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Real testimonials from Maine businesses that transformed their operations with our AI expertise
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 - Tourism */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary-orange mb-4" />
                  
                  <p className="text-white text-lg mb-6 leading-relaxed">
                    "Metic.ai transformed our Portland tourism business with AI-powered visitor management for Acadia National Park tours. We saw 45% increased bookings and 60% better customer satisfaction in just 3 months!"
                  </p>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white">Sarah Mitchell</div>
                    <div className="text-blue-200 text-sm">Maine Coastal Tours, Portland</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 - Lobster Industry */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary-orange mb-4" />
                  
                  <p className="text-white text-lg mb-6 leading-relaxed">
                    "As a Maine lobster fisherman, I was skeptical about AI. But Metic.ai's predictive analytics helped us optimize our catch routes and increase our daily haul by 35%. Best investment we ever made!"
                  </p>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white">Captain Mike Thompson</div>
                    <div className="text-blue-200 text-sm">Down East Lobster Co., Bar Harbor</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 - Forestry */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary-orange mb-4" />
                  
                  <p className="text-white text-lg mb-6 leading-relaxed">
                    "Metic.ai's forestry AI solutions revolutionized our timber operations across 10,000 acres in northern Maine. We reduced costs by 40% and improved sustainable harvesting practices significantly."
                  </p>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white">James Reed</div>
                    <div className="text-blue-200 text-sm">Pine State Forest Management, Bangor</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 - Manufacturing */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary-orange mb-4" />
                  
                  <p className="text-white text-lg mb-6 leading-relaxed">
                    "Working with Maine's top AI company was game-changing. Our Augusta manufacturing plant now operates 50% more efficiently thanks to Metic.ai's predictive maintenance AI solutions."
                  </p>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white">Lisa Chen</div>
                    <div className="text-blue-200 text-sm">Maine Manufacturing Solutions, Augusta</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 - Healthcare */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary-orange mb-4" />
                  
                  <p className="text-white text-lg mb-6 leading-relaxed">
                    "Metic.ai's healthcare AI improved our patient care across rural Maine locations. We can now predict health risks 3x faster and provide better preventive care to our communities."
                  </p>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white">Dr. Robert Maine</div>
                    <div className="text-blue-200 text-sm">Maine Rural Health Network, Lewiston</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 6 - Small Business */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary-orange mb-4" />
                  
                  <p className="text-white text-lg mb-6 leading-relaxed">
                    "As a small business owner in Portland's Old Port, I thought AI was only for big companies. Metic.ai proved me wrong with affordable solutions that boosted our sales by 65%!"
                  </p>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white">Maria Rodriguez</div>
                    <div className="text-blue-200 text-sm">Maine Artisan Goods, Portland</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="text-center mt-16">
              <p className="text-blue-100 text-lg mb-8">Join 2,100+ satisfied Maine businesses</p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-blue-200">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2100+</div>
                  <div className="text-blue-200">Maine Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">60%</div>
                  <div className="text-blue-200">Average Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-blue-200">Maine Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section with VSO Optimization */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg border border-gray-200 mb-6">
                <ChevronDown className="w-5 h-5 text-primary-orange" />
                <span className="text-sm font-semibold text-gray-800">FAQ</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Frequently Asked Questions About
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange to-yellow-500 bg-clip-text text-transparent">
                  <strong>AI Company In Maine</strong>
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about choosing the best <strong>Artificial Intelligence Company In Maine</strong> 
                for your business transformation and success.
              </p>
            </div>
            
            {/* Enhanced FAQ Grid */}
            <div className="grid gap-8">
              
              {/* FAQ 1 - Main VSO Question */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  Which is the best Artificial Intelligence Company In Maine?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed pl-11">
                  Metic.ai is the leading <strong>Artificial Intelligence Company In Maine</strong>, serving Portland, Augusta, Bangor, and Lewiston 
                  with 2100+ successful AI implementations. We specialize in AI solutions for Maine's unique industries including tourism 
                  (Acadia National Park optimization), lobster fishing predictive analytics, forestry management, and manufacturing automation. 
                  Our Maine-focused approach delivers 60% cost savings and 3x faster delivery compared to generic AI providers.
                </p>
              </div>

              {/* FAQ 2 - Services Question */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  What AI services does the top AI Company In Maine offer?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed pl-11">
                  As the premier <strong>AI Company In Maine</strong>, we offer comprehensive services including: machine learning development, 
                  natural language processing, computer vision, predictive analytics for Maine's lobster industry, AI-powered tourism 
                  optimization for Acadia National Park, forestry management AI, manufacturing automation, healthcare AI for rural Maine, 
                  custom AI development, and 24/7 Maine-based support. Our solutions are specifically tailored for Pine Tree State businesses.
                </p>
              </div>

              {/* FAQ 3 - Business Benefits */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  How can AI development help Maine businesses grow?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed pl-11">
                  Our <strong>AI Development Company In Maine</strong> helps businesses achieve remarkable growth through automation, 
                  predictive analytics, and intelligent optimization. Maine businesses using our AI solutions experience 60% cost reduction, 
                  3x faster operations, 45% increased revenue, and improved customer satisfaction. We've successfully transformed operations 
                  across Maine's tourism, fishing, forestry, manufacturing, and healthcare industries with proven ROI.
                </p>
              </div>

              {/* FAQ 4 - Geographic Coverage */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  Which AI Firm In Maine serves Portland, Augusta, and Bangor?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed pl-11">
                  Metic.ai is the leading <strong>AI Firm In Maine</strong> serving all major Maine cities including Portland, Augusta, Bangor, 
                  Lewiston, South Portland, Auburn, Biddeford, and rural Maine communities. We provide comprehensive AI services tailored 
                  to Maine's unique business landscape, with local support teams understanding the specific challenges of tourism, maritime 
                  industries, forestry, and seasonal business fluctuations across the Pine Tree State.
                </p>
              </div>

              {/* FAQ 5 - Competitive Advantages */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  What makes Metic.ai the best AI Service In Maine?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed pl-11">
                  Our <strong>AI Service In Maine</strong> stands out with 2100+ successful implementations, specialized solutions for Maine's 
                  key industries (tourism, lobster fishing, forestry, manufacturing), 24/7 local support, proven results including 60% cost 
                  savings, deep understanding of Maine's seasonal business cycles, partnerships with local Maine institutions, and commitment 
                  to supporting the Pine Tree State's economic growth through innovative AI technology.
                </p>
              </div>

              {/* FAQ 6 - Selection Criteria */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  How to choose the right AI Company In Maine for my business?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed pl-11">
                  Choose Metic.ai as your <strong>AI Company In Maine</strong> for our proven track record, industry-specific expertise in 
                  Maine's economy, comprehensive support, successful AI implementations across all Maine cities, understanding of local 
                  regulations, experience with seasonal business challenges, partnerships with Maine universities and research institutions, 
                  and commitment to supporting local Maine businesses with world-class AI technology and ongoing support.
                </p>
              </div>

              {/* FAQ 7 - VSO Question */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">7</span>
                  </div>
                  How much does AI implementation cost for Maine businesses?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed pl-11">
                  AI implementation costs vary based on project scope, but our <strong>AI Development Company In Maine</strong> offers flexible 
                  pricing models starting from $5,000 for small Maine businesses to enterprise solutions for larger organizations. Most Maine 
                  businesses see ROI within 3-6 months, achieving 60% cost savings and 3x productivity improvements. We offer free consultations 
                  to assess your specific needs and provide transparent pricing for Maine businesses.
                </p>
              </div>

              {/* FAQ 8 - VSO Question */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">8</span>
                  </div>
                  How long does it take to implement AI solutions in Maine?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed pl-11">
                  Our <strong>AI Implementation Company In Maine</strong> delivers solutions 3x faster than traditional providers. Simple AI 
                  projects take 2-4 weeks, medium complexity projects 1-3 months, and comprehensive enterprise AI transformations 3-6 months. 
                  Our Maine-based team ensures rapid deployment with minimal business disruption, allowing Maine businesses to start seeing 
                  benefits quickly while maintaining operational continuity during implementation.
                </p>
              </div>
            </div>

            {/* FAQ CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary-orange/10 to-yellow-500/10 rounded-3xl p-8 border border-primary-orange/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Our Maine AI experts are ready to answer your specific questions and discuss your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-primary-orange to-yellow-500 hover:from-yellow-500 hover:to-primary-orange"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Get Free AI Consultation
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto px-8 py-3"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call: +1-789-251-8414
                    </Button>
                  </Link>
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
              Partner with Maine's #1 <strong>Artificial Intelligence Company</strong>
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ successful businesses that chose Metic.ai as their trusted <strong>AI Company In Maine</strong>. 
              Start your AI transformation today with Maine's leading <strong>AI Development Company</strong> and achieve 60% cost savings with 3x faster delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Maine's AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted <strong>AI Service In Maine</strong> - Serving businesses across the Pine Tree State</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Portland</span>
                <span>•</span>
                <span>Lewiston</span>
                <span>•</span>
                <span>Bangor</span>
                <span>•</span>
                <span>Auburn</span>
                <span>•</span>
                <span>Biddeford</span>
                <span>•</span>
                <span>Augusta</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
