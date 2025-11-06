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
  Rocket,
  Quote,
  ChevronDown,
  Cpu,
  Bot,
  Globe,
  Factory
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Coimbatore | #1 AI Company In Coimbatore - Metic.ai",
  description: "Leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Coimbatore",
    "AI Company In Coimbatore", 
    "AI Service In Coimbatore",
    "AI Firm In Coimbatore",
    "AI Development Company In Coimbatore",
    "Artificial Intelligence Services Coimbatore",
    "AI Solutions Company Coimbatore",
    "Machine Learning Company Coimbatore",
    "AI Consulting Firm Coimbatore",
    "AI Technology Company Coimbatore",
    "Best AI Company In Coimbatore",
    "Top AI Company Coimbatore",
    "AI automation Coimbatore",
    "AI software company Coimbatore",
    "artificial intelligence consulting Coimbatore",
    "AI integration services Coimbatore",
    "custom AI development Coimbatore",
    "enterprise AI solutions Coimbatore",
    "AI ML company Coimbatore"
  ],
  authors: [{ name: "Metic.ai Coimbatore AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Coimbatore | #1 AI Company In Coimbatore - Metic.ai",
    description: "Leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-coimbatore/",
    siteName: "Metic.ai - AI Company In Coimbatore",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-coimbatore.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Coimbatore - Metic.ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    creator: "@MeticAI",
    title: "Artificial Intelligence Company In Coimbatore | AI Company In Coimbatore - Metic.ai",
    description: "Leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: {
      url: "https://metic.ai/og-ai-services-coimbatore.jpg",
      alt: "Artificial Intelligence Company In Coimbatore - Metic.ai",
    },
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-coimbatore/",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  category: "Artificial Intelligence Services",
  classification: "Business Technology Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://metic.ai"),
  generator: "Metic.ai AI Company",
  applicationName: "Metic.ai - Artificial Intelligence Company In Coimbatore",
};

export default function AIServicesCoimbatorePage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Coimbatore business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Coimbatore's textile and manufacturing industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Coimbatore business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Coimbatore business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Coimbatore.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Coimbatore enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Textiles & Apparel",
    "Manufacturing",
    "Engineering",
    "Information Technology",
    "Automotive",
    "Agriculture",
    "Healthcare",
    "Education",
    "Jewelry",
    "Foundry & Casting"
  ];

  const stats = [
    { number: "1,950+", label: "Coimbatore Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.7x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Coimbatore",
            "alternateName": "AI Company In Coimbatore",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-coimbatore/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-coimbatore.jpg",
            "description": "Leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "foundingDate": "2018",
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "customer service",
              "email": "hello@matic.ai",
              "availableLanguage": ["English", "Tamil"]
            },
            "sameAs": [
              "https://linkedin.com/company/metic-ai",
              "https://twitter.com/metcai",
              "https://facebook.com/metic.ai"
            ],
            "serviceArea": {
              "@type": "City",
              "name": "Coimbatore",
              "containedInPlace": {
                "@type": "State",
                "name": "Tamil Nadu",
                "containedInPlace": {
                  "@type": "Country",
                  "name": "India"
                }
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Coimbatore",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Artificial Intelligence Services Coimbatore",
                    "description": "Custom AI development and machine learning solutions"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions Coimbatore",
                    "description": "Advanced ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "AI Integration Services Coimbatore",
                    "description": "Enterprise AI integration and deployment services"
                  }
                }
              ]
            },
            "areaServed": [
              "Coimbatore", "RS Puram", "Peelamedu", "Saravanampatti", "Ganapathy", 
              "Singanallur", "Vadavalli", "Kuniyamuthur", "Sulur", "Thudiyalur",
              "Podanur", "Saravanampatty", "Race Course", "Town Hall", "Gandhipuram",
              "Ukkadam", "Kovaipudur", "Hopes College", "Sitra", "Kalapatti"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100",
              "bestRating": "5",
              "worstRating": "1"
            },
            "priceRange": "$$",
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning",
              "AI Development",
              "Enterprise AI Solutions",
              "AI Automation Coimbatore"
            ]
          })
        }}
      />

      {/* Article Schema for Content Authority */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Artificial Intelligence Company In Coimbatore | Leading AI Company In Coimbatore - Metic.ai",
            "description": "Leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "image": "https://metic.ai/og-ai-services-coimbatore.jpg",
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
            "dateModified": "2024-12-19",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-coimbatore/"
            },
            "articleSection": "Artificial Intelligence Services",
            "keywords": [
              "Artificial Intelligence Company In Coimbatore",
              "AI Company In Coimbatore",
              "AI Service In Coimbatore",
              "AI Firm In Coimbatore",
              "AI Development Company In Coimbatore"
            ],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "sameAs": "https://en.wikipedia.org/wiki/Artificial_intelligence"
              },
              {
                "@type": "Thing", 
                "name": "Machine Learning",
                "sameAs": "https://en.wikipedia.org/wiki/Machine_learning"
              },
              {
                "@type": "Place",
                "name": "Coimbatore",
                "sameAs": "https://en.wikipedia.org/wiki/Coimbatore"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "RS Puram",
                "sameAs": "https://en.wikipedia.org/wiki/RS_Puram"
              },
              {
                "@type": "Place",
                "name": "Peelamedu",
                "sameAs": "https://en.wikipedia.org/wiki/Peelamedu"
              },
              {
                "@type": "Place",
                "name": "Saravanampatti",
                "sameAs": "https://en.wikipedia.org/wiki/Saravanampatti"
              },
              {
                "@type": "Place",
                "name": "Gandhipuram",
                "sameAs": "https://en.wikipedia.org/wiki/Gandhipuram"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating AI Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-8 h-8 bg-primary-orange/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary-orange/30">
              <Brain className="w-4 h-4 text-primary-orange" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-float delay-1000">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
              <Cpu className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float delay-2000">
            <div className="w-6 h-6 bg-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
              <Zap className="w-3 h-3 text-purple-400" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-float delay-3000">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-green-500/30">
              <Bot className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>

        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 0V5M10 15V20M0 10H5M15 10H20M10 5H15V15H5V5H10Z" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" className="text-white/20"/>
          </svg>
        </div>

        <div className="relative z-10 container px-4 md:px-6 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <div className="w-8 h-8 bg-primary-orange/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary-orange/30">
                    <MapPin className="w-4 h-4 text-primary-orange" />
                  </div>
                  <span className="text-sm font-medium text-orange-300 px-3 py-1 bg-primary-orange/10 rounded-full border border-primary-orange/20 backdrop-blur-sm">
                    Serving Coimbatore, Tamil Nadu
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight">
                  <strong className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Artificial Intelligence Company In Coimbatore</strong>
                  <br />
                  <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                    Leading AI Company In Coimbatore
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                  Looking for the best <strong className="text-white">AI Company In Coimbatore</strong>? Metic.ai is the premier <strong className="text-white">Artificial Intelligence Company In Coimbatore</strong> with 2100+ successful AI implementations. We transform Coimbatore businesses with cutting-edge AI services across RS Puram, Peelamedu, Saravanampatti, and all major Coimbatore areas.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <Link href="/contact">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="w-full sm:w-auto bg-gradient-to-r from-primary-orange to-orange-500 hover:from-primary-orange/90 hover:to-orange-500/90 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-0"
                    >
                      <Rocket className="w-5 h-5 mr-2" />
                      Get Free AI Consultation
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-primary-orange/30 text-white hover:bg-primary-orange/10 hover:border-primary-orange/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call: +1-789-251-8414
                    </Button>
                  </Link>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto lg:mx-0">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center lg:text-left group">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative p-4 rounded-lg border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
                          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-orange to-orange-300 bg-clip-text text-transparent mb-1">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative lg:flex hidden">
                <div className="relative mx-auto">
                  {/* Central AI Hub */}
                  <div className="relative w-80 h-80 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative w-full h-full border border-primary-orange/30 rounded-full backdrop-blur-sm bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary-orange to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                        <Brain className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                        <Database className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>
                    
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg backdrop-blur-sm border border-green-500/30 flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-green-400" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-purple-400" />
                      </div>
                    </div>
                    
                    <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg backdrop-blur-sm border border-orange-500/30 flex items-center justify-center">
                        <Target className="w-8 h-8 text-orange-400" />
                      </div>
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(251, 146, 60)" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    <g className="animate-pulse">
                      <path d="M 190,40 L 190,190" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                      <path d="M 340,190 L 190,190" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                      <path d="M 190,340 L 190,190" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                      <path d="M 40,190 L 190,190" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Explore Our AI Solutions</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                AI Solutions for <span className="text-primary-orange">Coimbatore</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Coimbatore businesses 
                compete in the global market and drive industrial transformation.
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
                Industries We Serve in Coimbatore
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Coimbatore's key industries and business sectors.
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
                Why Coimbatore Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Coimbatore for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Coimbatore businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for Coimbatore companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Coimbatore business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Coimbatore business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Artificial Intelligence Company In Coimbatore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise automation with 60% cost savings and 3x faster delivery across Coimbatore's textile mills, IT parks, and industrial areas including RS Puram, Peelamedu, and Saravanampatti."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Coimbatore offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Coimbatore, Metic.ai offers comprehensive AI services including AI automation, machine learning development, predictive analytics, custom AI solutions, data engineering, generative AI services, and enterprise AI integration. We serve textile, engineering, automotive, agriculture, healthcare, and IT industries."
                }
              },
              {
                "@type": "Question",
                "name": "How much do AI services cost from an Artificial Intelligence Company In Coimbatore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI service costs vary based on project complexity and requirements. As a leading Artificial Intelligence Company In Coimbatore, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. Contact us for a free consultation and customized quote for your Coimbatore business."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Firm In Coimbatore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the trusted AI Firm In Coimbatore with proven expertise in Tamil Nadu's industrial landscape. We deliver 3x faster development, 60% cost reduction, 2100+ successful projects, and 4.9/5 client satisfaction. Our team understands Coimbatore's textile, engineering, and manufacturing industries with deep local market knowledge."
                }
              },
              {
                "@type": "Question",
                "name": "Which Coimbatore areas does the leading AI Development Company In Coimbatore serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Development Company In Coimbatore, Metic.ai serves all major Coimbatore areas including RS Puram, Peelamedu, Saravanampatti, Ganapathy, Singanallur, Vadavalli, Kuniyamuthur, Gandhipuram, Race Course, Ukkadam, Kovaipudur, and all textile mills, IT parks, and industrial zones with comprehensive AI solutions."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can an AI Service In Coimbatore be implemented?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai provides the fastest AI Service In Coimbatore with 3x faster development than industry standards. Simple AI automation can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 8-16 weeks. We offer rapid prototyping and agile development for Coimbatore's textile and manufacturing businesses."
                }
              }
            ]
          })
        }}
      />

      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Frequently Asked Questions - <strong>AI Company In Coimbatore</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about choosing the right <strong>Artificial Intelligence Company In Coimbatore</strong>
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Which is the best Artificial Intelligence Company In Coimbatore?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading <strong>Artificial Intelligence Company In Coimbatore</strong> with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise automation with 60% cost savings and 3x faster delivery across Coimbatore's textile mills, IT parks, and industrial areas including RS Puram, Peelamedu, and Saravanampatti.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What AI services does the top AI Company In Coimbatore offer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>AI Company In Coimbatore</strong>, Metic.ai offers comprehensive AI services including AI automation, machine learning development, predictive analytics, custom AI solutions, data engineering, generative AI services, and enterprise AI integration. We serve textile, engineering, automotive, agriculture, healthcare, and IT industries.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How much do AI services cost from an Artificial Intelligence Company In Coimbatore?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  AI service costs vary based on project complexity and requirements. As a leading <strong>Artificial Intelligence Company In Coimbatore</strong>, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. Contact us for a free consultation and customized quote for your Coimbatore business.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why choose Metic.ai as your AI Firm In Coimbatore?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the trusted <strong>AI Firm In Coimbatore</strong> with proven expertise in Tamil Nadu's industrial landscape. We deliver 3x faster development, 60% cost reduction, 2100+ successful projects, and 4.9/5 client satisfaction. Our team understands Coimbatore's textile, engineering, and manufacturing industries with deep local market knowledge.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Which Coimbatore areas does the leading AI Development Company In Coimbatore serve?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>AI Development Company In Coimbatore</strong>, Metic.ai serves all major Coimbatore areas including RS Puram, Peelamedu, Saravanampatti, Ganapathy, Singanallur, Vadavalli, Kuniyamuthur, Gandhipuram, Race Course, Ukkadam, Kovaipudur, and all textile mills, IT parks, and industrial zones with comprehensive AI solutions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How quickly can an AI Service In Coimbatore be implemented?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai provides the fastest <strong>AI Service In Coimbatore</strong> with 3x faster development than industry standards. Simple AI automation can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 8-16 weeks. We offer rapid prototyping and agile development for Coimbatore's textile and manufacturing businesses.
                </p>
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
                  About Metic.ai - Premier <strong>Artificial Intelligence Company In Coimbatore</strong>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 2018, Metic.ai has been the leading <strong>AI Company In Coimbatore</strong>, transforming businesses across the Manchester of South India with cutting-edge artificial intelligence solutions. From traditional textile mills in Peelamedu to modern IT parks in Saravanampatti, we've delivered 2100+ successful AI implementations.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of AI experts understands Coimbatore's unique industrial heritage and innovation culture. Whether you're in RS Puram's commercial districts, Ganapathy's manufacturing zones, or Saravanampatti's IT corridors, we deliver AI solutions that honor Coimbatore's industrial legacy while driving future growth.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">AI Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">4.9/5</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">Coimbatore Industry Expertise</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Textile AI Innovation</div>
                        <div className="text-gray-600 text-sm">Advanced AI solutions for Coimbatore's world-renowned textile and garment manufacturing industry</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Engineering Excellence</div>
                        <div className="text-gray-600 text-sm">Smart automation and quality control for Coimbatore's precision engineering and manufacturing sectors</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">IT & Software Development</div>
                        <div className="text-gray-600 text-sm">Cutting-edge AI development for Coimbatore's growing IT and software services industry</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Agriculture Technology</div>
                        <div className="text-gray-600 text-sm">Smart farming and agricultural AI solutions for Coimbatore's rich agricultural ecosystem</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                What Coimbatore Businesses Say About Our <strong>AI Services</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Testimonials from clients across Coimbatore who chose Metic.ai as their <strong>AI Company In Coimbatore</strong>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Metic.ai transformed our Coimbatore textile mill with AI-powered quality control that reduced fabric defects by 80%. Best AI Company In Coimbatore for textile automation!"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Ramesh Textile Industries</div>
                  <div className="text-sm text-gray-600">Managing Director, TextileCorp</div>
                  <div className="text-sm text-primary-orange">Peelamedu, Coimbatore</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Outstanding AI engineering solutions! Their machine learning algorithms optimized our Coimbatore manufacturing processes, improving efficiency by 250%. Excellent service!"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Lakshmi Precision</div>
                  <div className="text-sm text-gray-600">CTO, EngineerCorp Coimbatore</div>
                  <div className="text-sm text-primary-orange">RS Puram, Coimbatore</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Metic.ai's AI solutions revolutionized our Coimbatore IT operations. Their expertise in software automation and data analytics is unmatched in Tamil Nadu."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Vijay Kumar</div>
                  <div className="text-sm text-gray-600">Founder, TechSoft Coimbatore</div>
                  <div className="text-sm text-primary-orange">Saravanampatti, Coimbatore</div>
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
              Ready to Partner with Coimbatore's Leading <strong>Artificial Intelligence Company</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ Coimbatore businesses that chose Metic.ai as their <strong>AI Company In Coimbatore</strong>. Get your free AI consultation and discover how our artificial intelligence solutions can transform your business with 60% cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Coimbatore
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Coimbatore AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted <strong>AI Firm In Coimbatore</strong> - Serving Major Areas</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>RS Puram</span>
                <span>•</span>
                <span>Peelamedu</span>
                <span>•</span>
                <span>Saravanampatti</span>
                <span>•</span>
                <span>Gandhipuram</span>
                <span>•</span>
                <span>Ganapathy</span>
                <span>•</span>
                <span>Vadavalli</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

