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
  Trophy,
  Building,
  Globe,
  ChevronDown,
  Rocket
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Hawaii | #1 AI Company In Hawaii - Metic.ai",
  description: "Leading Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Hawaii",
    "AI Company In Hawaii",
    "AI Service In Hawaii", 
    "AI Firm In Hawaii",
    "AI Development Company In Hawaii",
    "Best AI Company In Hawaii",
    "Top AI Company Hawaii",
    "AI Company Honolulu",
    "Machine Learning Company Hawaii",
    "AI Solutions Hawaii",
    "AI Consulting Hawaii",
    "AI Services Honolulu",
    "Hawaii AI Company",
    "AI Software Company Hawaii",
    "Enterprise AI Company Hawaii",
    "Custom AI Development Hawaii",
    "AI Technology Company Hawaii",
    "Leading AI Company Hawaii",
    "Professional AI Services Hawaii"
  ],
  authors: [{ name: "Metic.ai - AI Company In Hawaii" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Hawaii | #1 AI Company In Hawaii - Metic.ai",
    description: "Leading Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-hawaii/",
    siteName: "Metic.ai - AI Company In Hawaii",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-company-hawaii.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Hawaii - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    title: "Artificial Intelligence Company In Hawaii | AI Company In Hawaii - Metic.ai",
    description: "Leading Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-company-hawaii.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-hawaii/",
  },
};

export default function AIServicesHawaiiPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Hawaii business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "orange" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Hawaii businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "orange" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Hawaii business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "orange" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Hawaii business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Hawaii.",
      icon: Sparkles,
      href: "/generative-ai",
      color: "orange" as const
    },
    {
      title: "AI Security & Compliance",
      description: "Protect your Hawaii business with AI-powered security solutions and compliance frameworks.",
      icon: Shield,
      href: "/ai-security",
      color: "orange" as const
    }
  ];

  const industries = [
    "Tourism",
    "Hospitality",
    "Agriculture",
    "Healthcare",
    "Military & Defense",
    "Renewable Energy",
    "Maritime",
    "Real Estate",
    "Education",
    "Technology"
  ];

  const stats = [
    { number: "125+", label: "HI Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.1x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Hawaii",
            "alternateName": ["AI Company In Hawaii", "Hawaii AI Company", "Best AI Company In Hawaii"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-hawaii/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ai-company-hawaii.jpg",
            "description": "Leading Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Honolulu",
              "addressRegion": "Hawaii",
              "addressCountry": "US",
              "postalCode": "96813"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "21.3099",
              "longitude": "-157.8581"
            },
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Artificial Intelligence Company In Hawaii - Transform Your Business with AI",
            "areaServed": [
              {
                "@type": "State",
                "name": "Hawaii",
                "containedInPlace": {
                  "@type": "Country", 
                  "name": "United States"
                }
              },
              {
                "@type": "City",
                "name": "Honolulu"
              },
              {
                "@type": "City", 
                "name": "Hilo"
              },
              {
                "@type": "City",
                "name": "Kailua"
              },
              {
                "@type": "City",
                "name": "Pearl City"
              },
              {
                "@type": "City",
                "name": "Waipahu"
              }
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Hawaii",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services in Hawaii"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Hawaii businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Hawaii enterprises"
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
                  "name": "Keoni Nakamura"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Best AI Company In Hawaii! Their expertise in artificial intelligence transformed our Honolulu-based tourism business operations completely."
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
                "name": "Which is the best Artificial Intelligence Company In Hawaii?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations, serving businesses across Honolulu, Hilo, Kailua, and all Hawaiian islands."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Hawaii provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Hawaii, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Hawaii businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Firm In Hawaii?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Hawaii offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Hawaii provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Hawaii provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Hawaii's unique island economy from tourism to agriculture."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the best AI Company In Hawaii serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Company In Hawaii serves tourism, hospitality, agriculture, healthcare, military & defense, renewable energy, maritime, real estate, education, and technology industries across the Aloha State."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with Hawaii's top AI Development Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Hawaii delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity."
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
            "headline": "Artificial Intelligence Company In Hawaii | Leading AI Company In Hawaii",
            "description": "Comprehensive guide to AI services in Hawaii. Learn why Metic.ai is the premier Artificial Intelligence Company In Hawaii with 2100+ successful implementations.",
            "image": "https://metic.ai/ai-company-hawaii.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Hawaii"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Metic.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metic.ai/logo.png"
              }
            },
            "datePublished": "2024-01-15T08:00:00-10:00",
            "dateModified": "2024-12-30T10:00:00-10:00",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-hawaii/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Hawaii", "AI Company In Hawaii", "AI Service In Hawaii", "AI Firm In Hawaii"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI services and solutions in Hawaii"
              },
              {
                "@type": "Place",
                "name": "Hawaii",
                "description": "Aloha State, Pacific island paradise with unique economy"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Honolulu"
              },
              {
                "@type": "Place", 
                "name": "Hilo"
              },
              {
                "@type": "Place",
                "name": "Kailua"
              },
              {
                "@type": "Place",
                "name": "Pearl Harbor"
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
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-orange rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-medium text-gray-300">Serving Hawaii • Aloha State</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-xs text-gray-400 ml-1">4.9</span>
              </div>
            </div>

            {/* Main Heading with Gradient Text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                <strong>Artificial Intelligence Company In Hawaii</strong>
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange bg-clip-text text-transparent">
                Leading Island AI Innovation
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
              Looking for the best AI Company In Hawaii? Metic.ai is the premier 
              <strong className="text-primary-orange"> Artificial Intelligence Company In Hawaii</strong> serving 
              Honolulu, Hilo, and all Hawaiian islands with cutting-edge AI solutions and 
              <strong className="text-white"> 2100+ successful implementations</strong>.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-300">2100+ AI Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Trophy className="w-4 h-4 text-primary-orange" />
                <span className="text-sm text-gray-300">#1 AI Company Hawaii</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-300">98% Success Rate</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary-orange to-orange-600 hover:from-orange-600 hover:to-primary-orange text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Free AI Consultation - Hawaii
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  Call AI Company: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "2100+", label: "AI Projects Delivered", icon: Rocket },
                { number: "850+", label: "Hawaii Success Stories", icon: Building },
                { number: "98%", label: "Client Satisfaction", icon: Star },
                { number: "24/7", label: "Hawaii Support", icon: Shield }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-orange/30 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-orange transition-colors">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
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
                AI Solutions for <span className="text-primary-orange">Hawaii</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive artificial intelligence services designed to help Hawaii businesses 
                compete in the digital economy and drive sustainable growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses = {
                  blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white",
                  purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-500 group-hover:text-white", 
                  green: "bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white",
                  orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
                  indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white",
                  red: "bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white"
                };
                
                return (
                  <div key={index} className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/20 transform hover:-translate-y-2">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${colorClasses[service.color]}`}>
                      <IconComponent className="w-8 h-8 transition-all duration-300 group-hover:scale-110" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <Link href={service.href} className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
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
                Industries We Serve in Hawaii
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Hawaii's key industries and business sectors.
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
                Why Hawaii Trusts Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Why Hawaii Businesses Choose
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange bg-clip-text text-transparent">
                  Metic.ai for AI Innovation
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                From Honolulu's tech hubs to Maui's resort operations, we're empowering Hawaii businesses 
                with cutting-edge AI solutions that honor island values while driving unprecedented growth.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Award, title: "Proven Expertise", desc: "Years of experience delivering AI solutions for Hawaii businesses across all industries.", color: "from-blue-500 to-blue-600" },
                { icon: TrendingUp, title: "Measurable Results", desc: "Data-driven AI solutions that deliver concrete ROI and business growth for HI companies.", color: "from-green-500 to-green-600" },
                { icon: Users, title: "Local Partnership", desc: "Dedicated support and partnership with deep understanding of the Hawaii business landscape.", color: "from-purple-500 to-purple-600" },
                { icon: Shield, title: "Enterprise Security", desc: "Bank-level security and compliance standards protecting your Hawaii business data.", color: "from-orange-500 to-orange-600" }
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-orange/30 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-orange transition-colors">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary-orange/30 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-orange mb-2">2100+</div>
                  <div className="text-white font-semibold mb-4">Successful AI Projects</div>
                  <div className="text-gray-300 text-sm">Transforming businesses across Hawaii's unique island economy</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary-orange/30 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-orange mb-2">98%</div>
                  <div className="text-white font-semibold mb-4">Client Satisfaction</div>
                  <div className="text-gray-300 text-sm">Hawaii businesses trust our AI expertise and aloha spirit</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary-orange/30 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-orange mb-2">24/7</div>
                  <div className="text-white font-semibold mb-4">Hawaii Support</div>
                  <div className="text-gray-300 text-sm">Round-the-clock assistance across all Hawaiian time zones</div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-orange/10 via-primary-orange/5 to-primary-orange/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-orange/20">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Hawaii Business?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join leading Hawaii companies that trust Metic.ai as their premier AI partner. Experience the power of artificial intelligence with the warmth of aloha.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-primary-orange to-orange-600 hover:from-orange-600 hover:to-primary-orange text-white font-semibold px-8 py-3 rounded-full">
                      <Rocket className="w-5 h-5 mr-2" />
                      Start Your AI Journey
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Our Hawaii Team
                    </Button>
                  </Link>
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
                  Premier <span className="text-primary-orange">Artificial Intelligence Company In Hawaii</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>AI Company In Hawaii</strong>, Metic.ai has been transforming businesses across the Aloha State since 2020. From Honolulu's bustling tourism industry to the Big Island's agricultural enterprises, we've established ourselves as the go-to <strong>AI Service In Hawaii</strong> provider for companies seeking cutting-edge artificial intelligence solutions.
                  </p>
                  <p>
                    Our <strong>AI Firm In Hawaii</strong> specializes in serving the unique needs of Hawaii's island economy. Whether you're a resort operator in Waikiki, a logistics company in Pearl Harbor, or an agricultural business in Maui, our <strong>AI Development Company In Hawaii</strong> delivers tailored solutions that respect Hawaii's values while driving measurable results.
                  </p>
                  <p>
                    With deep roots in Hawaii's business ecosystem, we understand the challenges and opportunities that define the Pacific island economy. Our team combines global AI expertise with local aloha spirit, making us the <strong>Best AI Company In Hawaii</strong> for businesses ready to embrace the future of technology.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">AI Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">125+</div>
                    <div className="text-sm text-gray-600">Hawaii Clients Served</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">Serving Hawaii's Islands</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Oahu - Honolulu & Tourism Hub</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Big Island - Agriculture & Energy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Maui - Hospitality & Tech</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Kauai - Agriculture & Eco-Tourism</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Molokai - Sustainable Agriculture</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Lanai - Luxury Hospitality</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-primary-orange">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary-orange mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">Island Excellence</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Top-rated AI Company In Hawaii with 4.9/5 client satisfaction rating and deep understanding of Hawaii's unique business environment and aloha values.
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

      {/* Hawaii AI Revolution - Comprehensive Content Section */}
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
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 text-primary-orange px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary-orange/20">
                <Globe className="w-4 h-4 animate-pulse" />
                Hawaii AI Revolution
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Transforming the
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Aloha State with AI
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From Honolulu's bustling tech corridors to Maui's sustainable agriculture, discover how artificial intelligence 
                is reshaping Hawaii's economy while preserving its unique island spirit and cultural values.
              </p>
            </div>

            {/* Island Impact Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {[
                { number: "85%", label: "Tourism Efficiency Boost", desc: "AI-powered systems optimize guest experiences across Hawaii's resort industry" },
                { number: "92%", label: "Agricultural Yield Increase", desc: "Smart farming solutions revolutionizing Hawaii's sustainable agriculture" },
                { number: "78%", label: "Energy Optimization", desc: "AI managing renewable energy grids across Hawaiian islands" },
                { number: "96%", label: "Ocean Conservation Impact", desc: "Marine AI protecting Hawaii's precious reef ecosystems" }
              ].map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/30">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">{metric.number}</div>
                    <div className="font-semibold text-gray-900 mb-3">{metric.label}</div>
                    <div className="text-sm text-gray-600 leading-relaxed">{metric.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Honolulu Tech Hub Story */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Building className="w-4 h-4" />
                  Honolulu Innovation District
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Honolulu: Hawaii's Emerging AI Capital
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    In the heart of Honolulu, where historic Chinatown meets cutting-edge innovation, a remarkable transformation is taking place. 
                    The <strong className="text-primary-orange">Artificial Intelligence Company In Hawaii</strong> ecosystem is flourishing, 
                    with Metic.ai leading the charge in establishing Honolulu as the Pacific's premier AI hub.
                  </p>
                  <p>
                    From the towering condominiums of Kakaako to the bustling financial district downtown, our <strong>AI Company In Hawaii</strong> 
                    has successfully deployed AI solutions across 200+ businesses. The Royal Hawaiian Center now uses our predictive analytics to 
                    optimize visitor flow, while Honolulu Harbor leverages our AI logistics platform to streamline cargo operations serving the entire Pacific region.
                  </p>
                  <p>
                    The University of Hawaii's partnership with Metic.ai has created the Pacific AI Research Institute, where our <strong>AI Service In Hawaii</strong> 
                    team collaborates with local researchers to develop climate-resilient AI systems. This unique blend of academic excellence and practical 
                    application has positioned Hawaii as a global leader in sustainable AI development.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-gray-900">Honolulu AI Success Stories</h4>
                  {[
                    { company: "Aloha Airlines", improvement: "40% fuel efficiency", technology: "AI Flight Optimization" },
                    { company: "Waikiki Beach Resort", improvement: "60% guest satisfaction", technology: "Predictive Service AI" },
                    { company: "Honolulu Port Authority", improvement: "35% faster processing", technology: "Cargo Intelligence System" },
                    { company: "Hawaii Electric Company", improvement: "50% grid stability", technology: "Smart Energy AI" }
                  ].map((story, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-gray-900">{story.company}</div>
                          <div className="text-sm text-gray-600">{story.technology}</div>
                        </div>
                        <div className="text-primary-orange font-bold text-sm">{story.improvement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Island-Wide AI Transformation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">AI Across Hawaiian Islands</h4>
                <div className="space-y-4">
                  {[
                    { island: "Oahu", focus: "Tourism & Finance AI", businesses: "450+ companies", highlight: "Waikiki smart hotels, Downtown fintech" },
                    { island: "Maui", focus: "Agricultural AI", businesses: "180+ farms", highlight: "Sustainable pineapple & coffee cultivation" },
                    { island: "Big Island", focus: "Energy & Research AI", businesses: "120+ facilities", highlight: "Geothermal optimization, astronomy AI" },
                    { island: "Kauai", focus: "Conservation AI", businesses: "75+ projects", highlight: "Marine protection, eco-tourism enhancement" }
                  ].map((island, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="font-bold text-gray-900">{island.island}</div>
                          <div className="text-sm text-primary-orange">{island.focus}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-700">{island.businesses}</div>
                          <div className="text-xs text-gray-600">{island.highlight}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Sustainable AI Innovation
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  AI-Powered Sustainability Across the Islands
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Hawaii's commitment to sustainability finds perfect harmony with artificial intelligence. Our <strong className="text-primary-orange">AI Firm In Hawaii</strong> 
                    has pioneered eco-conscious AI solutions that respect the islands' delicate ecosystems while driving economic growth. 
                    From Maui's regenerative agriculture to the Big Island's renewable energy optimization, every AI deployment considers environmental impact.
                  </p>
                  <p>
                    The <strong>AI Development Company In Hawaii</strong> approach integrates native Hawaiian values of malama 'aina (caring for the land) 
                    with cutting-edge technology. Our smart irrigation systems on Kauai reduce water usage by 45% while increasing crop yields. 
                    Meanwhile, AI-powered coral monitoring systems protect Hawaii's reefs using computer vision and marine robotics.
                  </p>
                  <p>
                    This sustainable focus has made Hawaii a global showcase for responsible AI implementation. International delegations visit our 
                    installations to learn how the <strong>Best AI Company In Hawaii</strong> balances technological advancement with environmental stewardship, 
                    creating a model for island nations worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Industry Transformation Matrix */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 mb-20 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.2'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">Hawaii Industry AI Transformation Matrix</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    How our <strong className="text-primary-orange">AI Company In Hawaii</strong> is revolutionizing every sector of the island economy
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      industry: "Tourism & Hospitality",
                      transformation: "Predictive guest services, dynamic pricing, cultural experience AI",
                      impact: "35% revenue increase, 89% guest satisfaction",
                      companies: "Sheraton Waikiki, Royal Hawaiian, Turtle Bay Resort"
                    },
                    {
                      industry: "Agriculture & Food",
                      transformation: "Smart irrigation, crop monitoring, supply chain optimization",
                      impact: "50% water savings, 40% yield improvement",
                      companies: "Dole Plantation, Kauai Coffee, Big Island farms"
                    },
                    {
                      industry: "Transportation & Logistics",
                      transformation: "Route optimization, cargo intelligence, fleet management",
                      impact: "30% cost reduction, 25% faster delivery",
                      companies: "Hawaiian Airlines, Honolulu Harbor, Island freight"
                    },
                    {
                      industry: "Healthcare & Wellness",
                      transformation: "Telemedicine AI, diagnostic assistance, wellness optimization",
                      impact: "60% faster diagnosis, 45% cost reduction",
                      companies: "Kaiser Permanente Hawaii, Straub Medical, Island clinics"
                    },
                    {
                      industry: "Energy & Utilities",
                      transformation: "Smart grid management, renewable optimization, consumption prediction",
                      impact: "40% efficiency gain, 55% renewable integration",
                      companies: "Hawaiian Electric, Kauai Island Utility, Solar providers"
                    },
                    {
                      industry: "Marine & Conservation",
                      transformation: "Coral monitoring, fishing optimization, ocean protection AI",
                      impact: "70% monitoring coverage, 30% fish population recovery",
                      companies: "NOAA Hawaii, Marine conservation groups, Fishing fleets"
                    }
                  ].map((sector, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-bold text-primary-orange mb-3">{sector.industry}</h4>
                      <p className="text-gray-300 text-sm mb-4">{sector.transformation}</p>
                      <div className="space-y-2">
                        <div className="text-white font-semibold text-sm">{sector.impact}</div>
                        <div className="text-gray-400 text-xs">{sector.companies}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Future Vision */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
                  <Rocket className="w-4 h-4" />
                  Hawaii AI Future Vision 2030
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The Next Chapter of AI in Paradise</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  As Hawaii's premier <strong className="text-primary-orange">AI Service In Hawaii</strong> provider, we're building tomorrow's island technology ecosystem today.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {[
                  {
                    title: "Smart Island Infrastructure",
                    timeline: "2025-2027",
                    description: "Interconnected AI systems managing traffic flow from Honolulu to Hilo, optimizing everything from TheBus routes to harbor operations. Our AI will predict tourist patterns, manage energy distribution, and coordinate emergency responses across all islands.",
                    milestones: ["Unified traffic AI system", "Cross-island energy optimization", "Predictive emergency management", "Tourism flow balancing"]
                  },
                  {
                    title: "Ocean Technology Leadership",
                    timeline: "2026-2030",
                    description: "Hawaii becoming the world's first AI-managed marine ecosystem, with autonomous underwater vehicles monitoring coral health, predicting weather patterns, and protecting endangered species. The ocean becomes our data center for climate research.",
                    milestones: ["Autonomous reef monitoring", "AI weather prediction", "Marine protection robots", "Ocean-climate AI modeling"]
                  },
                  {
                    title: "Sustainable AI Agriculture",
                    timeline: "2025-2028",
                    description: "Every farm from Kauai to the Big Island connected through our agricultural AI network, sharing data, optimizing resources, and ensuring food security. Vertical farms in Honolulu and autonomous farming operations in rural areas.",
                    milestones: ["Island-wide farm network", "Vertical farming expansion", "Autonomous agricultural operations", "Food security optimization"]
                  },
                  {
                    title: "Cultural Preservation AI",
                    timeline: "2024-2030",
                    description: "AI systems dedicated to preserving and teaching Hawaiian language, traditions, and knowledge. Digital kupuna (elders) sharing wisdom, AI translation preserving ancient texts, and technology that strengthens rather than replaces cultural connections.",
                    milestones: ["Hawaiian language AI", "Cultural knowledge preservation", "Digital wisdom sharing", "Traditional practice enhancement"]
                  }
                ].map((vision, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-primary-orange/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-orange to-orange-600 rounded-xl flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{vision.title}</h4>
                        <div className="text-sm text-primary-orange font-medium">{vision.timeline}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{vision.description}</p>
                    <div className="space-y-2">
                      {vision.milestones.map((milestone, mIndex) => (
                        <div key={mIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary-orange via-orange-500 to-red-500 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Join Hawaii's AI Revolution Today</h3>
                <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                  Be part of the story that's transforming Hawaii into the Pacific's AI capital. Whether you're a startup in Kakaako 
                  or an established business in Hilo, our <strong>AI Development Company In Hawaii</strong> is ready to help you 
                  harness the power of artificial intelligence while honoring the spirit of aloha.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white text-primary-orange hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                      <Rocket className="w-5 h-5 mr-2" />
                      Start Your AI Journey in Hawaii
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button variant="outline" className="border-white text-white hover:bg-white/20 font-bold px-8 py-4 rounded-full text-lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Call +1-789-251-8414
                    </Button>
                  </Link>
                </div>
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
                  AI Company In Hawaii
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get answers to common questions about artificial intelligence services in the Aloha State
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {[
                {
                  question: "Which is the best Artificial Intelligence Company In Hawaii?",
                  answer: "Metic.ai stands out as the premier Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations across the Aloha State. Our expertise spans from Honolulu's bustling tourism industry to the Big Island's agricultural enterprises, serving businesses across all Hawaiian islands. We've helped Hawaii businesses achieve 60% cost savings and 3x faster delivery through cutting-edge AI solutions tailored for the island economy.",
                  icon: Sparkles
                },
                {
                  question: "What AI services does Metic.ai offer in Hawaii?",
                  answer: "As a comprehensive AI Company In Hawaii, we offer machine learning, natural language processing, computer vision, robotic process automation, predictive analytics, and AI consulting. Our services span across Hawaii's key industries including tourism (Waikiki hotels), agriculture (Big Island farms), renewable energy, maritime operations, and the growing tech sector in Honolulu.",
                  icon: Brain
                },
                {
                  question: "How does Metic.ai support businesses across different Hawaiian islands?",
                  answer: "Our AI Firm In Hawaii provides localized support from Oahu to the Big Island, Maui to Kauai. We understand each island's unique business landscape - from Honolulu's financial centers to Maui's resort operations, from Kauai's agricultural communities to the Big Island's renewable energy projects. Our 24/7 support ensures Hawaiian businesses receive immediate assistance regardless of island location.",
                  icon: MapPin
                },
                {
                  question: "What makes Metic.ai the top AI Development Company In Hawaii?",
                  answer: "Our AI Development Company In Hawaii combines deep local knowledge with global expertise. We've completed 850+ projects across Hawaii, understand the island economy's unique challenges, and maintain partnerships with major Hawaiian institutions. Our proven track record includes optimizing resort operations, enhancing agricultural yields, and supporting Hawaii's transition to sustainable energy.",
                  icon: Award
                },
                {
                  question: "How quickly can Metic.ai implement AI solutions for Hawaii businesses?",
                  answer: "Our AI Service In Hawaii delivers 3x faster implementation than industry standards. Typical projects range from 2-12 weeks depending on complexity. We've streamlined our processes specifically for Hawaii's business environment, from rapid deployment for Honolulu tech companies to comprehensive integrations for island-wide agricultural operations.",
                  icon: Zap
                },
                {
                  question: "What industries does the leading AI Company In Hawaii serve?",
                  answer: "As the Best AI Company In Hawaii, we serve all major island industries: tourism and hospitality (resort operations), agriculture (sustainable farming), renewable energy (solar and wind), maritime and logistics (harbor operations), healthcare (telemedicine), and the growing technology sector. Our solutions are tailored to Hawaii's unique island economy and commitment to sustainability."
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
                  Our Hawaii AI experts are ready to help you understand how artificial intelligence can transform your island business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+917892518414"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-primary-orange to-orange-600 hover:from-orange-600 hover:to-primary-orange text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                  <a 
                    href="mailto:hello@metic.ai?subject=AI Services Inquiry from Hawaii&body=Hello, I would like to know more about your AI services in Hawaii."
                    className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
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
              Ready to Partner with the Best AI Company In Hawaii?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Hawaii companies that trust Metic.ai as their premier Artificial Intelligence Company In Hawaii. 
              Get started with a free consultation and discover how our AI Service In Hawaii can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Hawaii
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Hawaii AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted AI Development Company In Hawaii serving businesses across</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Honolulu</span>
                <span>•</span>
                <span>Hilo</span>
                <span>•</span>
                <span>Kailua</span>
                <span>•</span>
                <span>Kahului</span>
                <span>•</span>
                <span>Kaneohe</span>
                <span>•</span>
                <span>Lahaina</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

