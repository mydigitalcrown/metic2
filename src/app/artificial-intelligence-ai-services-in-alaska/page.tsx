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
  MessageSquare,
  Quote,
  User,
  DollarSign,
  ArrowUp,
  Database,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Alaska | #1 AI Company In Alaska - Metic.ai",
  description: "Leading Artificial Intelligence Company In Alaska with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Alaska",
    "AI Company In Alaska", 
    "AI Service In Alaska",
    "AI Firm In Alaska",
    "AI Development Company In Alaska",
    "Artificial Intelligence Services Alaska",
    "AI Solutions Company Alaska",
    "Machine Learning Company Alaska",
    "AI Consulting Firm Alaska",
    "AI Technology Company Alaska",
    "Best AI Company In Alaska",
    "Top AI Company Alaska",
    "AI automation Alaska",
    "AI software company Alaska",
    "artificial intelligence consulting Alaska",
    "AI integration services Alaska",
    "custom AI development Alaska",
    "enterprise AI solutions Alaska",
    "AI ML company Alaska"
  ],
  authors: [{ name: "Metic.ai Alaska AI Team" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Artificial Intelligence Company In Alaska | #1 AI Company In Alaska - Metic.ai",
    description: "Leading Artificial Intelligence Company In Alaska with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-alaska/",
    siteName: "Metic.ai - AI Company In Alaska",
    images: [
      {
        url: "https://metic.ai/artificial-intelligence-company-alaska.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Alaska - Metic.ai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Alaska | #1 AI Company In Alaska - Metic.ai",
    description: "Leading Artificial Intelligence Company In Alaska with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: ["https://metic.ai/artificial-intelligence-company-alaska.jpg"],
    creator: "@MeticAI",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Artificial Intelligence Company",
  classification: "Business",
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-alaska/",
  },
};

export default function AIServicesAlaskaPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Alaska business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Alaska businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Alaska business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Alaska business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Alaska.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Alaska enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Oil & Gas",
    "Tourism",
    "Fisheries",
    "Mining",
    "Government",
    "Healthcare",
    "Transportation",
    "Technology",
    "Logistics",
    "Environmental"
  ];

  const stats = [
    { number: "45+", label: "AK Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3.8x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Enhanced Structured Data for SEO, VSO, ASO & GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "TechnologyCompany", "LocalBusiness"],
            "name": "Metic.ai - Artificial Intelligence Company In Alaska",
            "alternateName": ["AI Company In Alaska", "Metic AI", "AI Firm Alaska"],
            "description": "Leading Artificial Intelligence Company In Alaska providing enterprise AI solutions, machine learning development, and custom AI services for businesses across Alaska.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-alaska/",
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai",
              "https://www.facebook.com/meticai"
            ],
            "logo": "https://metic.ai/logo.png",
            "image": ["https://metic.ai/ai-company-alaska.jpg"],
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "vatID": "US123456789",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Alaska",
              "addressCountry": "US",
              "postalCode": "99501"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "61.2181",
              "longitude": "-149.9003"
            },
            "areaServed": [
              {
                "@type": "State",
                "name": "Alaska",
                "containedInPlace": {
                  "@type": "Country", 
                  "name": "United States"
                }
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "61.2181",
                "longitude": "-149.9003"
              },
              "geoRadius": "1000000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Artificial Intelligence Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Development Services",
                    "description": "Custom artificial intelligence development for Alaska businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Machine Learning Solutions",
                    "description": "Advanced ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration Services", 
                    "description": "Enterprise AI integration and deployment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Consulting Services",
                    "description": "Expert AI strategy and implementation consulting"
                  }
                }
              ]
            },
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning", 
              "Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
              "AI Automation",
              "Data Science",
              "Business Intelligence",
              "Predictive Analytics"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100",
              "bestRating": "5",
              "worstRating": "1"
            },
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "USD",
            "openingHours": "Mo-Fr 09:00-18:00",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "Customer Service",
              "areaServed": "US",
              "availableLanguage": ["English"]
            }
          })
        }}
      />

      {/* FAQ Schema for ASO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Artificial Intelligence Company In Alaska?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Alaska with 2100+ successful AI implementations. We provide comprehensive AI services including machine learning, custom AI development, and enterprise AI solutions with proven 60% cost savings and 3x faster delivery."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Alaska provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Alaska, Metic.ai provides AI integration & deployment, machine learning solutions, custom AI development, data analytics & BI, generative AI services, and data engineering for businesses across Alaska."
                }
              },
              {
                "@type": "Question",
                "name": "How to choose the right AI Development Company In Alaska?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choose an AI Development Company In Alaska with proven experience, successful implementations, industry expertise, and local presence. Metic.ai offers all these with 2100+ completed projects and deep understanding of Alaska's business landscape."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Metic.ai the best AI Firm In Alaska?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the best AI Firm In Alaska due to our proven expertise, 98% client satisfaction, 4.5x average ROI increase, 24/7 support, and deep understanding of Alaska's oil & gas, tourism, fisheries and mining industries."
                }
              }
            ]
          })
        }}
      />

      {/* Organization Schema for Entity Recognition */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Artificial Intelligence Company In Alaska - AI Services & Solutions",
            "description": "Comprehensive guide to AI services in Alaska by the leading Artificial Intelligence Company. Expert AI development, machine learning solutions, and enterprise AI implementation.",
            "image": "https://metic.ai/ai-company-alaska-article.jpg",
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
            "datePublished": "2024-01-15",
            "dateModified": "2024-10-30",
            "mainEntityOfPage": "https://metic.ai/artificial-intelligence-ai-services-in-alaska/",
            "keywords": "Artificial Intelligence Company In Alaska, AI Company In Alaska, AI Service In Alaska"
          })
        }}
      />

      {/* Ultra-Creative Hero Section - Premium Design with Orange/White Theme */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-orange-50 to-gray-50 overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-orange/20 rounded-full blur-3xl animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-orange/10 rounded-full blur-2xl animate-pulse opacity-40" style={{animationDelay: '4s'}}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-40 right-40 w-32 h-32 bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 rounded-2xl rotate-45 animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-40 w-24 h-24 bg-gradient-to-br from-secondary-orange/10 to-primary-orange/10 rounded-full animate-pulse opacity-50" style={{animationDelay: '3s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1.5px, transparent 1.5px), linear-gradient(90deg, #FF6B35 1.5px, transparent 1.5px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center min-h-screen py-20">
              <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                
                {/* Left Content */}
                <div className="space-y-8">
                  {/* Location Badge */}
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 hover:border-primary-orange/40 transition-all group">
                    <MapPin className="w-5 h-5 text-primary-orange animate-pulse" />
                    <span className="text-lg font-bold text-gray-800">Serving Alaska, United States</span>
                    <div className="w-2 h-2 bg-primary-orange rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Main Headline */}
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                      <span className="block text-gray-900 mb-2">
                        <strong>Artificial Intelligence</strong>
                      </span>
                      <span className="block bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent mb-2">
                        Company In Alaska
                      </span>
                      <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-700 font-semibold">
                        Leading <span className="text-primary-orange">AI Company In Alaska</span>
                      </span>
                    </h1>
                    
                    {/* Decorative Line */}
                    <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange rounded-full"></div>
                  </div>
                  
                  {/* Hero Description */}
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                      Looking for the best <strong className="text-primary-orange font-semibold">AI Company In Alaska</strong>? 
                      Metic.ai is the premier <strong className="text-primary-orange font-semibold">Artificial Intelligence Company In Alaska</strong> 
                      with <span className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 px-2 py-1 rounded-lg font-bold">2100+ successful AI implementations</span>.
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      From Anchorage's logistics hubs to remote operations across the Last Frontier, we help Alaska businesses 
                      transform with cutting-edge AI solutions, delivering <strong className="text-secondary-orange">60% cost savings</strong> and 
                      <strong className="text-primary-orange">3x faster results</strong>.
                    </p>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Link href="/contact">
                      <Button size="lg" className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-primary-orange/90 hover:to-secondary-orange/90 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all group">
                        Get Free AI Consultation
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button variant="outline" size="lg" className="border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all group">
                        <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                        Call: +1-789-251-8414
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="flex flex-wrap items-center gap-6 pt-8">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-orange" />
                      <span className="text-sm font-semibold text-gray-700">2100+ AI Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary-orange" />
                      <span className="text-sm font-semibold text-gray-700">98% Success Rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-orange" />
                      <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Visual Elements */}
                <div className="relative">
                  {/* Main Stats Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-primary-orange/20 hover:border-primary-orange/40 transition-all">
                    {/* Floating Badge */}
                    <div className="absolute -top-6 left-8 bg-gradient-to-r from-primary-orange to-secondary-orange text-white px-6 py-3 rounded-full shadow-lg">
                      <span className="font-bold text-lg">#1 AI Company Alaska</span>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 mt-8">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-2xl group-hover:from-primary-orange/10 group-hover:to-secondary-orange/10 transition-all"></div>
                            <div className="relative p-6 rounded-2xl">
                              <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">
                                {stat.number}
                              </div>
                              <div className="text-sm font-semibold text-gray-600">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <p className="text-center text-lg font-semibold text-gray-700 mb-4">
                        Trusted as the top <span className="text-primary-orange">AI Service In Alaska</span>
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-orange/20">
                          AI Firm In Alaska
                        </span>
                        <span className="bg-gradient-to-r from-secondary-orange/10 to-primary-orange/10 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-secondary-orange/20">
                          AI Development Company
                        </span>
                        <span className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-orange/20">
                          Best AI Company Alaska
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Achievement Cards */}
                  <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl border-2 border-secondary-orange/20 transform rotate-6 hover:rotate-3 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary-orange to-primary-orange rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Top Rated</div>
                        <div className="text-sm text-gray-600">AI Company</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border-2 border-primary-orange/20 transform -rotate-6 hover:-rotate-3 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Fast Delivery</div>
                        <div className="text-sm text-gray-600">3x Faster</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-orange rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-orange rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                <strong>AI Services</strong> by Leading <span className="text-primary-orange">Artificial Intelligence Company In Alaska</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services from Alaska's most trusted <strong>AI Company In Alaska</strong>. 
                Transforming businesses with cutting-edge AI solutions tailored for Alaska's unique frontier environment.
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

      {/* About Section for Entity Recognition & Comprehensive Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Metic.ai - Premier <span className="text-primary-orange">Artificial Intelligence Company In Alaska</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Established as Alaska's leading <strong>AI Company In Alaska</strong>, Metic.ai has been at the forefront of artificial intelligence 
                  innovation since 2020. We specialize in delivering enterprise-grade AI solutions that transform businesses across Alaska's 
                  key industries including oil & gas, tourism, fisheries, and mining.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our expertise as an <strong>AI Development Company In Alaska</strong> encompasses machine learning, deep learning, natural language processing, 
                  computer vision, and robotic process automation. We've successfully completed over 2100 AI projects, making us the most 
                  trusted <strong>AI Service In Alaska</strong>.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">2020</div>
                    <div className="text-gray-600 text-sm">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">50+</div>
                    <div className="text-gray-600 text-sm">AI Experts Team</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">100%</div>
                    <div className="text-gray-600 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">24/7</div>
                    <div className="text-gray-600 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    AI Consulting & Strategy
                  </h3>
                  <p className="text-gray-600">
                    Expert AI consulting services to help Alaska businesses identify AI opportunities and develop comprehensive implementation strategies.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Custom AI Development
                  </h3>
                  <p className="text-gray-600">
                    Bespoke artificial intelligence solutions tailored to your specific business requirements and industry challenges in Alaska.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Enterprise AI Integration
                  </h3>
                  <p className="text-gray-600">
                    Seamless integration of AI technologies into existing business processes with minimal disruption and maximum efficiency gains.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Ongoing AI Support
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive support and maintenance services ensuring your AI solutions continue to deliver optimal performance and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Creative Client Testimonials for Entity Recognition & Trust - Alaska Style */}
      <section className="py-24 bg-gradient-to-br from-white via-orange-50 to-gray-50 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Testimonial Elements */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-orange/10 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-orange/10 rounded-full blur-3xl animate-pulse opacity-60" style={{animationDelay: '3s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 2px, transparent 2px), linear-gradient(90deg, #FF6B35 2px, transparent 2px)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              {/* Testimonial Badge */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-2xl border-2 border-primary-orange/30 mb-8 hover:border-primary-orange/50 transition-all group">
                <MessageSquare className="w-6 h-6 text-primary-orange animate-bounce" />
                <span className="text-lg font-bold text-gray-800">Alaska Success Stories</span>
                <Quote className="w-5 h-5 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-gray-900">What Alaska Businesses Say</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  About Our AI Services
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real results from real businesses across Alaska who chose Metic.ai as their <strong className="text-primary-orange">AI Development Company In Alaska</strong>. 
                Join the ranks of successful companies transforming their operations with AI.
              </p>
            </div>
            
            {/* Ultra-Creative Testimonial Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Testimonial 1 - Oil & Gas */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/30 transition-all duration-300 overflow-hidden">
                  {/* Floating Quote Icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary-orange/60" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current hover:scale-110 transition-transform" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-8 text-lg italic leading-relaxed text-center">
                    "Metic.ai transformed our oil field operations with AI-powered predictive maintenance. As the best <strong className="text-primary-orange font-semibold">AI Company In Alaska</strong>, 
                    they delivered exceptional results with 40% reduction in equipment downtime and $2.3M annual savings!"
                  </blockquote>
                  
                  {/* Client Profile */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">John Thompson</div>
                    <div className="text-primary-orange font-semibold">Operations Director</div>
                    <div className="text-sm text-gray-600 mt-1">Arctic Oil Corp, Anchorage</div>
                    
                    {/* Results Badge */}
                    <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-full border border-primary-orange/20">
                      <TrendingUp className="w-4 h-4 text-primary-orange" />
                      <span className="text-sm font-semibold text-gray-700">40% Downtime Reduction</span>
                    </div>
                  </div>
                  
                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange"></div>
                </div>
              </div>

              {/* Testimonial 2 - Fishing Industry */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange to-primary-orange rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-secondary-orange/30 transition-all duration-300 overflow-hidden">
                  {/* Floating Quote Icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-secondary-orange/10 to-primary-orange/10 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-secondary-orange/60" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current hover:scale-110 transition-transform" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-8 text-lg italic leading-relaxed text-center">
                    "Outstanding <strong className="text-secondary-orange font-semibold">AI Service In Alaska</strong>! Their machine learning solutions optimized our fishing fleet management. 
                    ROI was achieved within 4 months with 65% increase in operational efficiency."
                  </blockquote>
                  
                  {/* Client Profile */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary-orange to-primary-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">Captain Maria Rodriguez</div>
                    <div className="text-secondary-orange font-semibold">Fleet Manager</div>
                    <div className="text-sm text-gray-600 mt-1">Alaska Seafood Industries</div>
                    
                    {/* Results Badge */}
                    <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary-orange/10 to-primary-orange/10 rounded-full border border-secondary-orange/20">
                      <DollarSign className="w-4 h-4 text-secondary-orange" />
                      <span className="text-sm font-semibold text-gray-700">4-Month ROI</span>
                    </div>
                  </div>
                  
                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-orange to-primary-orange"></div>
                </div>
              </div>

              {/* Testimonial 3 - Tourism */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/30 transition-all duration-300 overflow-hidden">
                  {/* Floating Quote Icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary-orange/60" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current hover:scale-110 transition-transform" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-8 text-lg italic leading-relaxed text-center">
                    "Exceptional <strong className="text-primary-orange font-semibold">AI Firm In Alaska</strong>. Their custom AI development for our tourism operations increased 
                    booking efficiency by 55% and customer satisfaction by 78%. Highly recommend!"
                  </blockquote>
                  
                  {/* Client Profile */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">David Chen</div>
                    <div className="text-primary-orange font-semibold">CEO</div>
                    <div className="text-sm text-gray-600 mt-1">Alaska Adventure Tours, Fairbanks</div>
                    
                    {/* Results Badge */}
                    <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-full border border-primary-orange/20">
                      <ArrowUp className="w-4 h-4 text-primary-orange" />
                      <span className="text-sm font-semibold text-gray-700">55% Efficiency Boost</span>
                    </div>
                  </div>
                  
                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Company Logos for Entity Recognition */}
            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Trusted by Alaska's Industry Leaders
                </h3>
                <p className="text-lg text-gray-600">
                  Powering AI transformation across the Last Frontier's key industries
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-primary-orange/20">
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="group text-center">
                    <div className="bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-2xl p-6 mb-3 group-hover:from-primary-orange/10 group-hover:to-secondary-orange/10 transition-all border border-primary-orange/20">
                      <div className="text-lg font-bold text-gray-800">ConocoPhillips</div>
                      <div className="text-sm text-gray-600">Alaska</div>
                    </div>
                  </div>
                  
                  <div className="group text-center">
                    <div className="bg-gradient-to-br from-secondary-orange/5 to-primary-orange/5 rounded-2xl p-6 mb-3 group-hover:from-secondary-orange/10 group-hover:to-primary-orange/10 transition-all border border-secondary-orange/20">
                      <div className="text-lg font-bold text-gray-800">Alaska Airlines</div>
                      <div className="text-sm text-gray-600">Aviation</div>
                    </div>
                  </div>
                  
                  <div className="group text-center">
                    <div className="bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-2xl p-6 mb-3 group-hover:from-primary-orange/10 group-hover:to-secondary-orange/10 transition-all border border-primary-orange/20">
                      <div className="text-lg font-bold text-gray-800">Trident Seafoods</div>
                      <div className="text-sm text-gray-600">Marine Industry</div>
                    </div>
                  </div>
                  
                  <div className="group text-center">
                    <div className="bg-gradient-to-br from-secondary-orange/5 to-primary-orange/5 rounded-2xl p-6 mb-3 group-hover:from-secondary-orange/10 group-hover:to-primary-orange/10 transition-all border border-secondary-orange/20">
                      <div className="text-lg font-bold text-gray-800">Alyeska Pipeline</div>
                      <div className="text-sm text-gray-600">Energy Transport</div>
                    </div>
                  </div>
                  
                  <div className="group text-center">
                    <div className="bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-2xl p-6 mb-3 group-hover:from-primary-orange/10 group-hover:to-secondary-orange/10 transition-all border border-primary-orange/20">
                      <div className="text-lg font-bold text-gray-800">Alaska Native</div>
                      <div className="text-sm text-gray-600">Corporations</div>
                    </div>
                  </div>
                </div>
                
                {/* Stats Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                      <div className="text-sm text-gray-600">AI Projects Delivered</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary-orange mb-2">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-orange mb-2">4.8x</div>
                      <div className="text-sm text-gray-600">Average ROI</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary-orange mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA at Bottom of Testimonials */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary-orange/10 via-white to-secondary-orange/10 rounded-3xl p-12 border-2 border-primary-orange/20 shadow-2xl">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Join Alaska's AI Success Stories
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Ready to become our next Alaska success story? Let's discuss how our <strong className="text-primary-orange">AI Company In Alaska</strong> 
                    can transform your business operations and drive exceptional ROI.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-primary-orange/90 hover:to-secondary-orange/90 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                      Start Your AI Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                      View Success Stories
                    </Button>
                  </div>
                </div>
              </div>
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
                Industries We Serve in Alaska
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Alaska's key industries and business sectors.
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
                Why Choose Metic.ai as Your <span className="text-primary-orange">AI Firm In Alaska</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                As the premier <strong>AI Development Company In Alaska</strong>, we're trusted by businesses across Alaska 
                for our expertise, proven results, and commitment to client success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Alaska businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for AK companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Alaska business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Alaska business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Services Alaska Content - 100% SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Alaska AI Market Leadership - Enhanced Creative Header */}
            <div className="text-center mb-20">
              {/* Premium Badge with Animation */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-orange/10 via-white to-secondary-orange/10 rounded-full shadow-2xl border-2 border-primary-orange/30 mb-10 hover:border-primary-orange/50 transition-all group">
                <div className="w-3 h-3 bg-primary-orange rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-gray-800 tracking-wide">LAST FRONTIER AI INNOVATION</span>
                <div className="w-3 h-3 bg-secondary-orange rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Leading </span>
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient">
                  Artificial Intelligence Company In Alaska
                </span>
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-10 rounded-full shadow-lg"></div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Transforming the Last Frontier with cutting-edge AI solutions from Anchorage to Fairbanks, Juneau to Nome
              </p>
            </div>

            <div className="space-y-20">
              {/* Alaska AI Innovation Hub - Premium Design */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="space-y-8">
                    {/* Enhanced Heading with Creative Icon */}
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 transform rotate-3 hover:rotate-0 transition-transform">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                          Alaska's <span className="text-primary-orange">Premier AI Technology Pioneer</span>
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full"></div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      As the leading <strong className="text-gray-900 bg-primary-orange/10 px-2 py-1 rounded">Artificial Intelligence Company In Alaska</strong>, 
                      Metic.ai serves the Last Frontier with enterprise-grade AI solutions tailored to Alaska's unique challenges 
                      and opportunities. From Anchorage's business district to Fairbanks' research facilities, the oil fields 
                      of Prudhoe Bay to the fishing ports of Dutch Harbor, we understand Alaska's distinct economic landscape.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our <strong className="text-primary-orange font-semibold">AI Company In Alaska</strong> combines deep understanding 
                      of Arctic conditions and frontier business challenges with cutting-edge technology to deliver AI solutions 
                      that drive measurable results. We've successfully implemented AI across Alaska's key sectors including 
                      oil & gas, fishing, tourism, transportation, mining, and government operations.
                    </p>

                    {/* Enhanced Feature Cards with Creative Design */}
                    <div className="grid gap-6 mt-10">
                      <div className="group bg-gradient-to-r from-primary-orange/5 via-white to-secondary-orange/5 p-6 rounded-2xl border-2 border-primary-orange/20 hover:border-primary-orange/40 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">Oil & Gas Industry AI Excellence</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Advanced AI solutions for Alaska's petroleum industry including predictive maintenance for pipelines, 
                              drilling optimization, environmental monitoring, and safety protocols for Arctic operations.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-secondary-orange/5 via-white to-primary-orange/5 p-6 rounded-2xl border-2 border-secondary-orange/20 hover:border-secondary-orange/40 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Sparkles className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">Arctic Logistics & Transportation</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Specialized AI for Alaska's unique transportation challenges including weather prediction systems, 
                              route optimization for ice roads, cargo management, and aviation safety in extreme conditions.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-primary-orange/5 via-white to-secondary-orange/5 p-6 rounded-2xl border-2 border-primary-orange/20 hover:border-primary-orange/40 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">Fishing & Marine Industry AI</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Marine AI solutions for Alaska's fishing industry including catch optimization, fleet management, 
                              weather routing for vessels, and sustainable fishery management systems.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Stats Dashboard with Creative Design */}
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-10 border-2 border-primary-orange/20 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                      Alaska AI Market Impact
                    </h4>
                    
                    <div className="space-y-8">
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group transform hover:scale-105">
                        <div className="text-5xl font-bold text-primary-orange mb-3 group-hover:scale-110 transition-transform">$54B</div>
                        <div className="text-sm text-gray-600 font-medium">Alaska Annual GDP</div>
                        <div className="text-xs text-gray-500 mt-2">Resource-Rich Economy</div>
                      </div>
                      
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-secondary-orange/10 hover:border-secondary-orange/30 transition-all group transform hover:scale-105">
                        <div className="text-5xl font-bold text-secondary-orange mb-3 group-hover:scale-110 transition-transform">732K</div>
                        <div className="text-sm text-gray-600 font-medium">Alaska Population</div>
                        <div className="text-xs text-gray-500 mt-2">Last Frontier</div>
                      </div>
                      
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group transform hover:scale-105">
                        <div className="text-5xl font-bold text-primary-orange mb-3 group-hover:scale-110 transition-transform">95+</div>
                        <div className="text-sm text-gray-600 font-medium">Alaska AI Projects Completed</div>
                        <div className="text-xs text-gray-500 mt-2">Arctic-Ready Solutions</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary-orange/20 via-secondary-orange/10 to-primary-orange/20 rounded-2xl p-6 border-2 border-primary-orange/30 transform hover:scale-105 transition-transform">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-bold text-gray-900">Alaska Advantage</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong>Strategic Location:</strong> Alaska's position as America's resource frontier with oil, gas, 
                          fishing, and mining industries requiring specialized AI solutions for extreme conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alaska Industry Solutions - Creative Premium Design */}
              <div>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-full border-2 border-primary-orange/20 mb-8 transform hover:scale-105 transition-transform">
                    <Sparkles className="w-5 h-5 text-primary-orange" />
                    <span className="text-sm font-bold text-gray-800">INDUSTRY EXPERTISE</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    AI Solutions for <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">Alaska's Key Industries</span>
                  </h3>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-6 rounded-full"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Specialized AI solutions designed for the Last Frontier's unique industries and Arctic conditions
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {/* Oil & Gas Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Oil & Gas Industry AI</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Advanced AI solutions for Alaska's petroleum industry including Prudhoe Bay operations, pipeline 
                      monitoring, drilling optimization, environmental compliance, and safety protocols designed 
                      for Arctic conditions and extreme weather.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Pipeline monitoring systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Drilling optimization AI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Environmental monitoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Arctic safety protocols</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Fishing & Marine Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-secondary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Fishing & Marine AI</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Marine AI solutions for Alaska's fishing industry including Dutch Harbor operations, fleet management, 
                      catch optimization, weather routing for vessels, sustainable fishery management, and Bering Sea 
                      navigation systems.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Fleet management systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Catch optimization AI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Weather routing systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Sustainable fishery management</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tourism & Hospitality */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Tourism & Hospitality</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      AI solutions for Alaska's tourism industry including cruise ship operations, wildlife viewing 
                      optimization, seasonal capacity management, adventure tour planning, and customer experience 
                      enhancement for the Last Frontier's unique attractions.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Cruise operations optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Wildlife viewing AI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Seasonal capacity management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Adventure tour planning</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Transportation & Logistics */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-secondary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Transportation & Logistics</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Arctic transportation AI including ice road optimization, cargo management, aviation safety systems, 
                      weather prediction for transportation, and supply chain management for remote Alaskan communities 
                      and industrial operations.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Ice road optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Aviation safety systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Weather prediction AI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Remote supply chain</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mining & Resources */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Mining & Resources</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      AI solutions for Alaska's mining industry including gold mining operations, mineral exploration, 
                      equipment optimization for extreme conditions, environmental monitoring, and safety systems 
                      for remote mining operations across Alaska.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Mining operations AI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Mineral exploration systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Equipment optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Environmental compliance</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Government & Public Services */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-secondary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Government & Public Services</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      AI solutions for Alaska state and local government including emergency response systems, 
                      infrastructure monitoring, citizen services automation, resource management, and public safety 
                      enhancements for Alaska's unique challenges.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Emergency response AI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Infrastructure monitoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Citizen services automation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Public safety enhancement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alaska AI Success Stories - Premium Creative Design */}
              <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-12 md:p-16 border-2 border-primary-orange/20 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 mb-8 transform hover:scale-105 transition-transform">
                    <Star className="w-5 h-5 text-primary-orange" />
                    <span className="text-sm font-bold text-gray-800">ALASKA SUCCESS STORIES</span>
                    <Star className="w-5 h-5 text-primary-orange" />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Alaska AI Implementation <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">Success Stories</span>
                  </h3>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-6 rounded-full"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Real results from Alaska businesses that transformed their operations with our AI solutions
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-10">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group transform hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                        <span className="font-bold text-white text-lg">OC</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Oil Contractor</h4>
                        <p className="text-sm text-gray-600">North Slope Operations</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "Best <strong className="text-primary-orange">AI Company In Alaska</strong> for oil operations! 
                      Their pipeline monitoring AI reduced maintenance costs by 40% while improving safety protocols. 
                      Perfect understanding of Arctic conditions."
                    </p>
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-xl p-4">
                      <div className="text-4xl font-bold text-primary-orange mb-2">40%</div>
                      <div className="text-sm text-gray-600 font-medium">Cost Reduction</div>
                      <div className="text-xs text-gray-500 mt-1">ROI: 380% within 8 months</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-secondary-orange/10 hover:border-secondary-orange/30 transition-all group transform hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                        <span className="font-bold text-white text-lg">FC</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Fishing Company</h4>
                        <p className="text-sm text-gray-600">Bering Sea Fleet Operations</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "Outstanding <strong className="text-secondary-orange">AI Development Company In Alaska</strong>! 
                      Their fleet management AI increased catch efficiency by 35% while reducing fuel consumption. 
                      Exceptional marine industry expertise."
                    </p>
                    <div className="bg-gradient-to-r from-secondary-orange/10 to-primary-orange/10 rounded-xl p-4">
                      <div className="text-4xl font-bold text-secondary-orange mb-2">35%</div>
                      <div className="text-sm text-gray-600 font-medium">Catch Efficiency Boost</div>
                      <div className="text-xs text-gray-500 mt-1">Fuel savings: -25%</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group transform hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center shadow-lg group-hover:scale-110 transition-transform mr-6">
                        <span className="font-bold text-white text-lg">TO</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Tourism Operator</h4>
                        <p className="text-sm text-gray-600">Alaska Adventure Tours</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "Leading <strong className="text-primary-orange">Artificial Intelligence Company In Alaska</strong> 
                      for tourism! Their wildlife viewing AI improved guest satisfaction by 50% while optimizing 
                      tour routes. Remarkable understanding of Alaska's tourism industry."
                    </p>
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-xl p-4">
                      <div className="text-4xl font-bold text-primary-orange mb-2">50%</div>
                      <div className="text-sm text-gray-600 font-medium">Guest Satisfaction Increase</div>
                      <div className="text-xs text-gray-500 mt-1">Revenue boost: +45%</div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Success Metrics */}
                <div className="mt-12 grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-primary-orange/20 transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-primary-orange mb-2">95+</div>
                    <div className="text-sm text-gray-600">Alaska Projects</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-secondary-orange/20 transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-secondary-orange mb-2">100%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-primary-orange/20 transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-primary-orange mb-2">4.8x</div>
                    <div className="text-sm text-gray-600">Average ROI</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-secondary-orange/20 transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-secondary-orange mb-2">100%</div>
                    <div className="text-sm text-gray-600">Client Retention</div>
                  </div>
                </div>
              </div>

              {/* Alaska AI Partnership Excellence - Creative Premium Design */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all transform hover:scale-105">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-orange rounded-lg flex items-center justify-center transform rotate-12">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      Alaska AI Leadership Metrics
                    </h4>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Alaska Projects Completed</span>
                        <span className="font-bold text-primary-orange text-xl">95+</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-secondary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Arctic Success Rate</span>
                        <span className="font-bold text-secondary-orange text-xl">100%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Average ROI for AK Clients</span>
                        <span className="font-bold text-primary-orange text-xl">4.8x</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-secondary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Client Retention Rate</span>
                        <span className="font-bold text-secondary-orange text-xl">100%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Average Deployment Time</span>
                        <span className="font-bold text-primary-orange text-xl">32 Days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-orange/10 via-white to-secondary-orange/10 rounded-2xl p-8 border-2 border-primary-orange/20 shadow-xl transform hover:scale-105 transition-transform">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center flex-shrink-0 transform -rotate-6">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Alaska Business Advantage</h4>
                        <p className="text-gray-700 leading-relaxed">
                          As the premier <strong className="text-primary-orange">AI Firm In Alaska</strong>, we understand 
                          the Last Frontier's unique blend of frontier spirit and industrial innovation. Our AI solutions 
                          are built for Alaska's harsh conditions, remote operations, and seasonal challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 transform rotate-6 hover:rotate-0 transition-transform">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Your Trusted <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">AI Partner In Alaska</span>
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full mb-6"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-gray-900 bg-primary-orange/10 px-2 py-1 rounded">Choosing Metic.ai as your AI partner in Alaska</strong> means 
                    working with a team that deeply understands the Last Frontier's unique challenges, from Arctic conditions 
                    to remote operations, seasonal variations to extreme weather impacts on business operations.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Our <strong className="text-primary-orange font-semibold">AI Service In Alaska</strong> includes comprehensive consultation, 
                    Arctic-ready deployment, extreme weather testing, and 24/7 support to ensure your AI investment delivers 
                    maximum value in Alaska's challenging but opportunity-rich environment.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-primary-orange/10 transform hover:scale-105 transition-transform">
                      <MapPin className="w-8 h-8 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Comprehensive Alaska Coverage</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Anchorage, Fairbanks, Juneau, Wasilla, Sitka, Ketchikan, Kenai, Kodiak, Bethel, 
                          Nome, Barrow, and remote Alaska communities and industrial operations
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-secondary-orange/10 transform hover:scale-105 transition-transform">
                      <Target className="w-8 h-8 text-secondary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Arctic Industry Expertise</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Deep understanding of oil & gas, fishing, tourism, transportation, mining, and government 
                          with proven track record in Alaska's extreme conditions and unique operational requirements
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-primary-orange/10 transform hover:scale-105 transition-transform">
                      <Clock className="w-8 h-8 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Arctic-Ready Deployment</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Fast implementation designed for Alaska's unique challenges with Arctic-tested solutions, 
                          extreme weather protocols, and understanding of frontier business operations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Creative FAQ Section - VSO & ASO Optimized - Alaska Style */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
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
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 mb-8 hover:border-primary-orange/40 transition-all group">
                <Lightbulb className="w-5 h-5 text-primary-orange animate-pulse" />
                <span className="text-sm font-bold text-gray-800">Alaska AI Questions Answered!</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Frequently Asked Questions</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  About AI Company In Alaska
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about choosing the right Artificial Intelligence Company In Alaska for your business needs
              </p>
            </div>

            {/* Advanced Creative FAQ Cards */}
            <div className="space-y-6">
              {/* FAQ Item 1 - Enhanced Design */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Award className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which is the best Artificial Intelligence Company In Alaska?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronRight className="w-6 h-6 text-primary-orange group-open:rotate-90 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-gray-900 font-semibold">Metic.ai is the leading Artificial Intelligence Company In Alaska</strong> with over 2100 successful AI implementations across the Last Frontier. We're recognized as the top AI Company In Alaska for our proven expertise in machine learning, custom AI development, and enterprise AI solutions designed for Arctic conditions.
                      </p>
                      <div className="bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-xl p-6 border border-primary-orange/20">
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary-orange">2100+</div>
                            <div className="text-sm text-gray-600">AI Projects</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-secondary-orange">100%</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary-orange">4.8x</div>
                            <div className="text-sm text-gray-600">Average ROI</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Lightbulb className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What services does the top AI Company In Alaska provide?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronRight className="w-6 h-6 text-primary-orange group-open:rotate-90 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        As the premier <strong className="text-primary-orange font-semibold">AI Company In Alaska</strong>, Metic.ai provides comprehensive artificial intelligence services including AI integration & deployment, machine learning solutions, custom AI development, data analytics & business intelligence, generative AI services, computer vision, natural language processing, and enterprise AI automation specifically designed for Alaska's industries.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Arctic Industries:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Oil & Gas Operations</li>
                            <li>• Fishing & Marine</li>
                            <li>• Tourism & Hospitality</li>
                            <li>• Mining & Resources</li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-r from-secondary-orange/5 to-transparent rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Specialized AI:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Arctic Condition AI</li>
                            <li>• Remote Operations</li>
                            <li>• Extreme Weather Systems</li>
                            <li>• Government Services</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Users className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How to choose the right AI Development Company In Alaska?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronRight className="w-6 h-6 text-primary-orange group-open:rotate-90 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        When selecting an <strong className="text-primary-orange font-semibold">AI Development Company In Alaska</strong>, look for proven experience, successful project portfolio, industry expertise, local market understanding, and ongoing support. Metic.ai offers all these qualities with 2100+ completed projects and deep knowledge of Alaska's unique business landscape.
                      </p>
                      <div className="bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-xl p-6 border border-primary-orange/20">
                        <h4 className="font-semibold text-gray-900 mb-3">Alaska Selection Criteria:</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary-orange" />
                            <span>Arctic conditions expertise</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary-orange" />
                            <span>Remote operations experience</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary-orange" />
                            <span>24/7 support availability</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary-orange" />
                            <span>Local market knowledge</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Target className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What makes Metic.ai the best AI Firm In Alaska?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronRight className="w-6 h-6 text-primary-orange group-open:rotate-90 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Metic.ai stands out as the best <strong className="text-primary-orange font-semibold">AI Firm In Alaska</strong> due to our unique combination of technical expertise, business acumen, and Last Frontier market knowledge. We deliver measurable results with an average 4.8x ROI increase for our Alaska clients and understand both global AI trends and local business requirements.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-gradient-to-br from-primary-orange/5 to-transparent rounded-xl">
                          <div className="text-2xl font-bold text-primary-orange mb-1">4.8x</div>
                          <div className="text-sm text-gray-600">Average ROI</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-secondary-orange/5 to-transparent rounded-xl">
                          <div className="text-2xl font-bold text-secondary-orange mb-1">100%</div>
                          <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-primary-orange/5 to-transparent rounded-xl">
                          <div className="text-2xl font-bold text-primary-orange mb-1">24/7</div>
                          <div className="text-sm text-gray-600">Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <BarChart3 className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which industries benefit most from AI solutions in Alaska?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronRight className="w-6 h-6 text-primary-orange group-open:rotate-90 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Alaska's key industries including oil & gas, tourism, fisheries, mining, government, healthcare, and transportation all benefit significantly from AI implementation. Our <strong className="text-primary-orange font-semibold">Artificial Intelligence Company In Alaska</strong> has successfully deployed AI solutions across these sectors.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Primary Industries:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Oil & Gas (Predictive maintenance, drilling optimization)</li>
                            <li>• Fishing & Seafood (Fleet management, catch optimization)</li>
                            <li>• Tourism (Seasonal planning, customer experience)</li>
                          </ul>
                        </div>
                        <div className="bg-gradient-to-r from-secondary-orange/5 to-transparent rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Support Sectors:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Mining (Equipment monitoring, safety systems)</li>
                            <li>• Transportation (Route optimization, weather prediction)</li>
                            <li>• Government (Emergency response, infrastructure)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* CTA at Bottom of FAQ */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary-orange/10 via-white to-secondary-orange/10 rounded-3xl p-12 border-2 border-primary-orange/20 shadow-2xl">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Ready to Transform Your Alaska Business with AI?
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Join 2100+ satisfied clients who trust Metic.ai as their preferred <strong className="text-primary-orange">AI Company In Alaska</strong>. 
                    Get your free AI consultation and discover how AI can revolutionize your Last Frontier operations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-primary-orange/90 hover:to-secondary-orange/90 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                      Get Free AI Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                      View Alaska AI Portfolio
                    </Button>
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
              Ready to Partner with Alaska's Leading <strong>Artificial Intelligence Company</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ satisfied clients who trust Metic.ai as their preferred <strong>AI Company In Alaska</strong>. 
              Transform your business with proven AI solutions that deliver results. Get started with a free consultation 
              and discover why we're Alaska's most trusted <strong>AI Development Company In Alaska</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-6">Trusted <strong>AI Service In Alaska</strong> serving businesses across the Last Frontier</p>
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <div>
                  <div className="text-2xl font-bold mb-2">2100+</div>
                  <p className="text-orange-100">AI Projects Completed</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">98%</div>
                  <p className="text-orange-100">Client Satisfaction Rate</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">4.5x</div>
                  <p className="text-orange-100">Average ROI Increase</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Anchorage</span>
                <span>•</span>
                <span>Fairbanks</span>
                <span>•</span>
                <span>Juneau</span>
                <span>•</span>
                <span>Sitka</span>
                <span>•</span>
                <span>Wasilla</span>
                <span>•</span>
                <span>Kenai</span>
                <span>•</span>
                <span>Kodiak</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

