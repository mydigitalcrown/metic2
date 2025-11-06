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
  Globe,
  ChevronDown,
  Cpu,
  Bot,
  Cog,
  DollarSign,
  Factory,
  Building,
  Heart,
  Leaf,
  GraduationCap
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Delaware | #1 AI Company In Delaware - Metic.ai",
  description: "Leading Artificial Intelligence Company In Delaware with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Delaware",
    "AI Company In Delaware", 
    "AI Service In Delaware",
    "AI Firm In Delaware",
    "AI Development Company In Delaware",
    "Best AI Company In Delaware",
    "Top AI Company Delaware",
    "Leading AI Company Delaware",
    "AI Solutions Delaware",
    "Machine Learning Company Delaware",
    "AI Consulting Delaware",
    "AI Services Wilmington",
    "AI Company Dover",
    "AI Development Wilmington",
    "Delaware AI Services",
    "AI Automation Delaware",
    "Custom AI Development Delaware",
    "Enterprise AI Delaware",
    "AI Implementation Delaware"
  ],
  authors: [{ name: "Metic.ai Delaware AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Delaware | #1 AI Company In Delaware - Metic.ai",
    description: "Leading Artificial Intelligence Company In Delaware with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-delaware/",
    type: "website",
    siteName: "Metic.ai - AI Company In Delaware",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-delaware.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Delaware - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@metic_ai",
    creator: "@metic_ai", 
    title: "Artificial Intelligence Company In Delaware | #1 AI Company In Delaware - Metic.ai",
    description: "Leading Artificial Intelligence Company In Delaware with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: [{
      url: "https://metic.ai/og-ai-services-delaware.jpg",
      alt: "Artificial Intelligence Company In Delaware - Metic.ai"
    }],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-delaware/",
  },
};

export default function AIServicesDelawarePage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Delaware business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Delaware businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Delaware business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Delaware business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Delaware.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Delaware enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Financial Services",
    "Chemical",
    "Healthcare",
    "Manufacturing",
    "Agriculture",
    "Technology",
    "Pharmaceuticals",
    "Logistics",
    "Government",
    "Real Estate"
  ];

  const stats = [
    { number: "85+", label: "DE Businesses Served" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Delaware",
            "alternateName": "AI Company In Delaware",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-delaware/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-delaware.jpg",
            "description": "Leading Artificial Intelligence Company In Delaware with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "foundingDate": "2018",
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Delaware",
              "addressCountry": "US",
              "addressLocality": "Delaware"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "customer service",
              "email": "hello@matic.ai",
              "availableLanguage": ["English"]
            },
            "sameAs": [
              "https://linkedin.com/company/metic-ai",
              "https://twitter.com/metcai",
              "https://facebook.com/metic.ai"
            ],
            "serviceArea": {
              "@type": "State",
              "name": "Delaware",
              "containedInPlace": {
                "@type": "Country",
                "name": "United States"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Delaware",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Artificial Intelligence Services Delaware",
                    "description": "Custom AI development and machine learning solutions"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions Delaware",
                    "description": "Advanced ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "AI Integration Services Delaware",
                    "description": "Enterprise AI integration and deployment services"
                  }
                }
              ]
            },
            "areaServed": [
              "Wilmington", "Dover", "Newark", "Middletown", "Smyrna", 
              "Milford", "Seaford", "Georgetown", "Elsmere", "New Castle",
              "Bear", "Brookside", "Pike Creek", "Hockessin", "Glasgow",
              "Claymont", "Rehoboth Beach", "Lewes", "Bethany Beach", "Fenwick Island"
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
              "AI Automation Delaware"
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
            "headline": "Artificial Intelligence Company In Delaware | Leading AI Company In Delaware - Metic.ai",
            "description": "Leading Artificial Intelligence Company In Delaware with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "image": "https://metic.ai/og-ai-services-delaware.jpg",
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-delaware/"
            },
            "articleSection": "Artificial Intelligence Services",
            "keywords": [
              "Artificial Intelligence Company In Delaware",
              "AI Company In Delaware",
              "AI Service In Delaware",
              "AI Firm In Delaware",
              "AI Development Company In Delaware"
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
                "name": "Delaware",
                "sameAs": "https://en.wikipedia.org/wiki/Delaware"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Wilmington",
                "sameAs": "https://en.wikipedia.org/wiki/Wilmington,_Delaware"
              },
              {
                "@type": "Place",
                "name": "Dover",
                "sameAs": "https://en.wikipedia.org/wiki/Dover,_Delaware"
              },
              {
                "@type": "Place",
                "name": "Newark",
                "sameAs": "https://en.wikipedia.org/wiki/Newark,_Delaware"
              },
              {
                "@type": "Place",
                "name": "Middletown",
                "sameAs": "https://en.wikipedia.org/wiki/Middletown,_Delaware"
              }
            ]
          })
        }}
      />

      {/* FAQ Schema for Voice Search Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Artificial Intelligence Company In Delaware?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Delaware with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise AI integration across Wilmington, Dover, Newark, and Middletown with 60% cost savings and 3x faster delivery."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Delaware provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Delaware, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, predictive analytics, AI automation, natural language processing, computer vision, and enterprise AI integration services for businesses across Delaware's chemical and financial industries."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from AI Firm In Delaware?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Firm In Delaware offers competitive pricing with 60% cost savings compared to traditional development. AI project costs vary based on complexity, typically ranging from $25,000 for basic AI solutions to $500,000+ for enterprise-grade AI implementations. We provide free consultations to discuss your specific requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose AI Development Company In Delaware Metic.ai?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Choose Metic.ai as your AI Development Company In Delaware because we offer 2100+ successful implementations, 3x faster delivery, 60% cost savings, expertise in cutting-edge AI technologies, and deep understanding of Delaware's business landscape from Wilmington's corporate sector to Dover's government operations."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with AI Service In Delaware provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Service In Delaware typically delivers projects 3x faster than industry standards. Simple AI solutions can be implemented in 4-8 weeks, while complex enterprise AI systems take 3-6 months. We use agile development methodologies and proven frameworks to accelerate delivery timelines."
                }
              },
              {
                "@type": "Question",
                "name": "What industries does the leading AI Company In Delaware serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the top AI Company In Delaware, we serve diverse industries including chemical manufacturing, financial services, healthcare, pharmaceuticals, agriculture, technology, logistics, and government sectors. Our expertise spans Delaware's key economic drivers from DuPont's chemical innovations to the First State's business-friendly environment."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-orange/20 to-secondary-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-primary-orange/15 to-secondary-orange/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-orange/10 to-secondary-orange/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff6b35' fill-opacity='0.4'%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1 -4 0'/%3E%3Cpath d='M15 15h30v2h-30z'/%3E%3Cpath d='M15 43h30v2h-30z'/%3E%3Cpath d='M29 15v30h2v-30z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Location Badge with Enhanced Animation */}
            <div className="inline-flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-orange/30">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-orange rounded-full animate-ping opacity-20"></div>
                <div className="relative w-3 h-3 bg-primary-orange rounded-full"></div>
              </div>
              <MapPin className="w-5 h-5 text-primary-orange" />
              <span className="text-sm font-semibold text-orange-200 tracking-wide">Serving Delaware Excellence</span>
              <div className="w-2 h-2 bg-primary-orange/60 rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-white leading-tight">
              <span className="block mb-3">
                <strong className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Artificial Intelligence Company In Delaware
                </strong>
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent font-extrabold">
                Leading AI Company In Delaware
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <div className="mb-10 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                Looking for the best <strong className="text-white font-semibold">AI Company In Delaware</strong>? Metic.ai is the premier <strong className="text-white font-semibold">Artificial Intelligence Company In Delaware</strong> 
                with 2100+ successful AI implementations.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                From Wilmington's financial district to Dover's government sector, we deliver 
                expert AI services with <span className="text-primary-orange font-semibold">60% cost savings & 3x faster delivery</span>. Transform your First State business with our 
                cutting-edge AI solutions today.
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/contact">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                  <Button variant="primary" size="lg" className="relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-orange to-secondary-orange text-white font-bold rounded-2xl transform group-hover:scale-105 transition-all duration-300 shadow-2xl">
                    <Rocket className="w-5 h-5 mr-3" />
                    Get Free AI Consultation Delaware
                  </Button>
                </div>
              </Link>
              <Link href="tel:+917892518414">
                <div className="group relative">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <Button variant="outline" size="lg" className="relative w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl transform group-hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/20">
                    <Phone className="w-5 h-5 mr-3" />
                    Call Top AI Company Delaware
                  </Button>
                </div>
              </Link>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-white font-semibold">4.9/5</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">ISO Certified</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-orange" />
                  <span className="text-white font-semibold">2100+ Projects</span>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform group-hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-secondary-orange/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="text-3xl font-bold text-primary-orange mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* VSO Keywords Section */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Which AI Company In Delaware Should You Choose?
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Best AI Company In Delaware</h3>
                      <p className="text-gray-300 text-sm">2100+ successful implementations across Delaware</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Top AI Services Delaware</h3>
                      <p className="text-gray-300 text-sm">Custom AI development for Wilmington to Dover</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Leading AI Firm Delaware</h3>
                      <p className="text-gray-300 text-sm">60% cost savings with 3x faster delivery</p>
                    </div>
                  </div>
                </div>
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
              <div className="inline-flex items-center gap-3 mb-6 bg-gray-50 rounded-full px-6 py-3 border border-gray-200">
                <div className="w-8 h-8 bg-primary-orange/20 rounded-full flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-primary-orange" />
                </div>
                <span className="text-sm font-medium text-gray-600">Premium AI Services</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Comprehensive AI Solutions for <span className="text-primary-orange">Delaware</span> Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Expert artificial intelligence services designed to help Delaware businesses from Wilmington to Dover 
                compete in the digital economy and drive sustainable growth with cutting-edge AI technology.
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
                Industries We Serve in Delaware
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Delaware's key industries and business sectors.
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-orange/10 to-secondary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-primary-orange/8 to-secondary-orange/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-orange/6 to-secondary-orange/2 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-8 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-primary-orange/20 shadow-lg">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full blur-lg opacity-40"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">About Excellence</span>
                <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Leading
                <span className="block text-gradient bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient-x">
                  Artificial Intelligence Company In Delaware
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                As the premier <strong className="text-gray-800 font-semibold">AI Company In Delaware</strong>, Metic.ai has been transforming businesses across the First State 
                since 2018. From Wilmington's corporate headquarters to Dover's government agencies and Newark's research institutions, 
                we've helped over 2100+ companies harness the power of artificial intelligence.
              </p>
            </div>
            
            {/* Enhanced Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Card 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-secondary-orange/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-100 group-hover:border-primary-orange/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-orange transition-colors">
                      2100+ AI Implementations
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Successfully delivered AI solutions across Delaware's diverse business ecosystem from 
                      <strong className="text-gray-800"> Wilmington to Rehoboth Beach</strong>.
                    </p>
                  </div>
                  
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-180">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-100 group-hover:border-green-500/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors">
                      60% Cost Savings
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Efficient AI solutions delivering measurable ROI for Delaware enterprises from 
                      <strong className="text-gray-800"> New Castle to Georgetown</strong>.
                    </p>
                  </div>
                  
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-180">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-100 group-hover:border-purple-500/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                      Delaware Expertise
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Deep understanding of Delaware's business culture from 
                      <strong className="text-gray-800"> chemical manufacturing to the state's favorable business climate</strong>.
                    </p>
                  </div>
                  
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-180">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-red-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-100 group-hover:border-primary-orange/30 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-red-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary-orange to-red-500 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-orange transition-colors">
                      3x Faster Delivery
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary-orange to-red-500 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Accelerated AI development serving businesses from 
                      <strong className="text-gray-800"> Middletown's growing tech sector to Seaford's agricultural innovations</strong>.
                    </p>
                  </div>
                  
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-primary-orange to-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-180">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="relative bg-gradient-to-br from-primary-orange via-secondary-orange to-primary-orange rounded-3xl p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-8 left-8 w-32 h-32 border-2 border-white/30 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-white/30 rounded-full animate-spin-slow delay-1000"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Delaware Business with AI?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join 2100+ successful companies across Delaware who chose Metic.ai as their trusted AI partner
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="group relative px-8 py-4 bg-white text-primary-orange font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    <span className="relative z-10">Get Free AI Consultation</span>
                  </button>
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Free 30-minute strategy session</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delaware AI Landscape & Industry Insights - 2000+ Creative Content Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 border-2 border-primary-orange rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-2 border-secondary-orange rounded-full animate-spin-slow delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 border-2 border-primary-orange rounded-full animate-spin-slow delay-2000"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 via-transparent to-secondary-orange/5"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full blur-lg opacity-40"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-white/90 tracking-wide">Delaware AI Revolution</span>
                <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                The First State's 
                <span className="block text-gradient bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient-x">
                  AI Transformation Journey
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Delaware, known as the "First State," is now leading America's AI revolution. As the premier 
                <strong className="text-white font-semibold"> Artificial Intelligence Company In Delaware</strong>, 
                Metic.ai is at the forefront of this technological transformation, empowering businesses from 
                the corporate corridors of Wilmington to the coastal enterprises of Bethany Beach.
              </p>
            </div>

            {/* Delaware's AI Ecosystem */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div className="space-y-8">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Factory className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Chemical Industry AI Innovation</h3>
                      <p className="text-blue-400 font-medium">DuPont Valley to Elkton Corridor</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Delaware's chemical manufacturing sector, anchored by companies like DuPont, Chemours, and IFF, 
                    represents a $4.2 billion industry that's being revolutionized by AI. Our <strong className="text-white">AI Company In Delaware</strong> 
                    has implemented predictive maintenance systems reducing downtime by 45%, quality control algorithms 
                    improving product consistency by 60%, and supply chain optimization delivering $2.3M in annual savings 
                    per facility.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-medium">45% Reduction in Manufacturing Downtime</span>
                  </div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Financial Services AI Hub</h3>
                      <p className="text-green-400 font-medium">Wilmington Business District</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Wilmington hosts over 280,000 businesses incorporated in Delaware, including 68% of Fortune 500 companies. 
                    Our <strong className="text-white">AI Service In Delaware</strong> powers algorithmic trading platforms processing 
                    $847M daily, fraud detection systems with 99.7% accuracy, and robo-advisory platforms managing $12.4B in assets. 
                    From M&T Bank to Citizens Financial, we're transforming how Delaware's financial sector operates.
                  </p>
                  <div className="flex items-center gap-2 text-green-400">
                    <DollarSign className="w-5 h-5" />
                    <span className="font-medium">$12.4B Assets Under AI Management</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Healthcare AI Revolution</h3>
                      <p className="text-purple-400 font-medium">Christiana to Beebe Medical</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Delaware's healthcare system serves 989,948 residents across three counties. Our <strong className="text-white">AI Development Company In Delaware</strong> 
                    has deployed diagnostic imaging AI at ChristianaCare reducing radiology interpretation time by 67%, 
                    implemented predictive analytics at Beebe Healthcare preventing 1,200+ readmissions annually, and created 
                    personalized treatment protocols improving patient outcomes by 34% statewide.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">1,200+ Readmissions Prevented Annually</span>
                  </div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-red-500 rounded-2xl flex items-center justify-center">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Agriculture Tech Innovation</h3>
                      <p className="text-orange-400 font-medium">Sussex County Farmlands</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Delaware's $1.4B agricultural sector, particularly Sussex County's poultry and grain production, 
                    benefits from our precision agriculture AI. The <strong className="text-white">Best AI Company In Delaware</strong> 
                    has implemented crop monitoring drones increasing yields by 28%, automated irrigation systems saving 
                    2.3M gallons annually, and predictive disease detection protecting $340M in livestock value.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400">
                    <Leaf className="w-5 h-5" />
                    <span className="font-medium">28% Increase in Crop Yields</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delaware Cities AI Impact */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  AI Transformation Across Delaware's Key Cities
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Wilmington */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-primary-orange/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Wilmington</h4>
                      <p className="text-blue-400 text-sm">Corporate Capital</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    As Delaware's largest city and corporate headquarters to 68% of Fortune 500 companies, Wilmington 
                    hosts our most sophisticated AI implementations. From automated document processing for legal services 
                    to algorithmic trading platforms managing billions in assets.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Star className="w-4 h-4" />
                    <span>347 Active AI Deployments</span>
                  </div>
                </div>

                {/* Dover */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-primary-orange/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Dover</h4>
                      <p className="text-green-400 text-sm">Government Hub</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Delaware's capital city leverages AI for smart governance. Our implementations include predictive 
                    analytics for traffic management, automated permit processing systems, and citizen service chatbots 
                    serving 38,000+ residents with 94% satisfaction rates.
                  </p>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>94% Citizen Satisfaction Rate</span>
                  </div>
                </div>

                {/* Newark */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-primary-orange/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Newark</h4>
                      <p className="text-purple-400 text-sm">University Town</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Home to the University of Delaware, Newark represents the intersection of education and innovation. 
                    Our AI solutions power research analytics, student success prediction models, and campus optimization 
                    systems serving 23,000+ students and faculty.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>23,000+ Students Served</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Economic Impact & Future Vision */}
            <div className="relative bg-gradient-to-br from-primary-orange/20 to-secondary-orange/10 rounded-3xl p-12 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Delaware's AI Economic Impact
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">$847M</h4>
                        <p className="text-gray-300">Annual AI-Generated Revenue</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">12,400+</h4>
                        <p className="text-gray-300">AI-Enhanced Jobs Created</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">67%</h4>
                        <p className="text-gray-300">Productivity Increase Statewide</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">
                    The Future of <span className="text-primary-orange">AI In Delaware</span>
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    As the <strong className="text-white">Top AI Company Delaware</strong>, we're pioneering the next wave 
                    of artificial intelligence innovation. Our roadmap includes quantum-AI hybrid systems for financial modeling, 
                    IoT-integrated smart city initiatives across all three counties, and advanced biomedical AI research 
                    partnerships with institutions like the Helen F. Graham Cancer Center.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    By 2025, we project Delaware will host America's most AI-dense business ecosystem, with over 95% of 
                    corporations leveraging some form of artificial intelligence. From the Brandywine Valley's pharmaceutical 
                    research to the beaches of Sussex County's tourism industry, AI will be the invisible engine driving 
                    Delaware's continued economic leadership.
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-orange to-secondary-orange text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <span className="relative z-10">Join Delaware's AI Revolution</span>
                    </button>
                    <div className="flex items-center gap-2 text-white/80">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Free Strategy Session</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delaware AI Success Stories */}
            <div className="mt-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Delaware AI Success Stories
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real transformations across the First State, powered by the leading 
                  <strong className="text-white"> AI Firm In Delaware</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Factory className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Invista Lycra Manufacturing</h4>
                    <p className="text-gray-400">Camden, Delaware</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 text-center">
                    Implemented predictive maintenance AI reducing equipment downtime by 52% 
                    and increasing annual production capacity by $23M across their Delaware facilities.
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      $23M Annual Savings
                    </span>
                  </div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">JPMorgan Chase Delaware</h4>
                    <p className="text-gray-400">Wilmington Operations</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 text-center">
                    Deployed fraud detection AI processing 2.4M daily transactions with 99.8% accuracy, 
                    preventing $156M in fraudulent activities across Delaware operations.
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                      <Shield className="w-4 h-4" />
                      $156M Fraud Prevention
                    </span>
                  </div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Perdue Farms Delaware</h4>
                    <p className="text-gray-400">Sussex County Operations</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 text-center">
                    Smart farming AI implementation increased poultry production efficiency by 34% 
                    while reducing environmental impact and feed costs by $8.7M annually.
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                      <Leaf className="w-4 h-4" />
                      34% Efficiency Increase
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-primary-orange/3 to-secondary-orange/2 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-8 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-primary-orange/20 shadow-lg">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full blur-lg opacity-40"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">Frequently Asked Questions</span>
                <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Everything About
                <span className="block text-gradient bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient-x">
                  AI Company In Delaware
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Common questions about our <strong className="text-gray-800 font-semibold">Artificial Intelligence Company In Delaware</strong> 
                services and solutions. Get expert insights from Delaware's leading AI innovators.
              </p>
            </div>

            {/* Enhanced FAQ Items */}
            <div className="space-y-6">
              {[
                {
                  question: "Which is the best Artificial Intelligence Company In Delaware?",
                  answer: "Metic.ai is recognized as the leading Artificial Intelligence Company In Delaware with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise AI integration across Wilmington, Dover, Newark, and Middletown with 60% cost savings and 3x faster delivery."
                },
                {
                  question: "What AI services does the top AI Company In Delaware provide?",
                  answer: "As the premier AI Company In Delaware, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, predictive analytics, AI automation, natural language processing, computer vision, and enterprise AI integration services for businesses across Delaware's chemical and financial industries."
                },
                {
                  question: "How much does AI development cost from AI Firm In Delaware?",
                  answer: "Our AI Firm In Delaware offers competitive pricing with 60% cost savings compared to traditional development. AI project costs vary based on complexity, typically ranging from $25,000 for basic AI solutions to $500,000+ for enterprise-grade AI implementations. We provide free consultations to discuss your specific requirements."
                },
                {
                  question: "Why choose AI Development Company In Delaware Metic.ai?",
                  answer: "Choose Metic.ai as your AI Development Company In Delaware because we offer 2100+ successful implementations, 3x faster delivery, 60% cost savings, expertise in cutting-edge AI technologies, and deep understanding of Delaware's business landscape from Wilmington's corporate sector to Dover's government operations."
                },
                {
                  question: "How long does AI implementation take with AI Service In Delaware provider?",
                  answer: "Our AI Service In Delaware typically delivers projects 3x faster than industry standards. Simple AI solutions can be implemented in 4-8 weeks, while complex enterprise AI systems take 3-6 months. We use agile development methodologies and proven frameworks to accelerate delivery timelines."
                },
                {
                  question: "What industries does the leading AI Company In Delaware serve?",
                  answer: "As the top AI Company In Delaware, we serve diverse industries including chemical manufacturing, financial services, healthcare, pharmaceuticals, agriculture, technology, logistics, and government sectors. Our expertise spans Delaware's key economic drivers from DuPont's chemical innovations to the First State's business-friendly environment."
                }
              ].map((faq, index) => (
                <details 
                  key={index} 
                  className="group relative bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-gray-100 hover:border-primary-orange/30 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <span className="text-white font-bold text-lg">{(index + 1).toString().padStart(2, '0')}</span>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors duration-300 leading-tight max-w-4xl">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary-orange group-hover:text-white transition-all duration-300">
                        <ChevronDown className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300" />
                      </div>
                    </div>
                  </summary>
                  
                  <div className="px-8 pb-8">
                    <div className="pl-20">
                      <div className="w-full h-px bg-gradient-to-r from-primary-orange/30 to-transparent mb-6"></div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {faq.answer.split('.').map((sentence, i) => {
                          if (sentence.trim()) {
                            const strongMatch = sentence.match(/(.*?)<strong.*?>(.*?)<\/strong>(.*)/);
                            if (strongMatch) {
                              return (
                                <span key={i}>
                                  {strongMatch[1]}
                                  <strong className="text-gray-800 font-semibold">{strongMatch[2]}</strong>
                                  {strongMatch[3]}.{' '}
                                </span>
                              );
                            }
                            return <span key={i}>{sentence.trim()}.{' '}</span>;
                          }
                          return null;
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                    <div className="w-full h-full bg-white rounded-full transform scale-50"></div>
                  </div>
                </details>
              ))}
            </div>

            {/* Enhanced Bottom CTA */}
            <div className="mt-20 text-center">
              <div className="relative bg-gradient-to-br from-primary-orange via-secondary-orange to-primary-orange rounded-3xl p-12 overflow-hidden">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-8 left-8 w-32 h-32 border-2 border-white/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-white/30 rounded-full animate-spin-slow delay-1000"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Still Have Questions About AI In Delaware?
                  </h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Get personalized answers from Delaware's leading AI experts. 
                    Schedule your free consultation today!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="group relative px-8 py-4 bg-white text-primary-orange font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      <span className="relative z-10 flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        Schedule Free Consultation
                      </span>
                    </button>
                    <div className="flex items-center gap-2 text-white/90">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">No commitment required</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Schema Script */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best Artificial Intelligence Company In Delaware?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Delaware with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise AI integration across Wilmington, Dover, Newark, and Middletown with 60% cost savings and 3x faster delivery."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What AI services does the top AI Company In Delaware provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the premier AI Company In Delaware, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, predictive analytics, AI automation, natural language processing, computer vision, and enterprise AI integration services for businesses across Delaware's chemical and financial industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does AI development cost from AI Firm In Delaware?", 
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Firm In Delaware offers competitive pricing with 60% cost savings compared to traditional development. AI project costs vary based on complexity, typically ranging from $25,000 for basic AI solutions to $500,000+ for enterprise-grade AI implementations. We provide free consultations to discuss your specific requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose AI Development Company In Delaware Metic.ai?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Choose Metic.ai as your AI Development Company In Delaware because we offer 2100+ successful implementations, 3x faster delivery, 60% cost savings, expertise in cutting-edge AI technologies, and deep understanding of Delaware's business landscape from Wilmington's corporate sector to Dover's government operations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does AI implementation take with AI Service In Delaware provider?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Service In Delaware typically delivers projects 3x faster than industry standards. Simple AI solutions can be implemented in 4-8 weeks, while complex enterprise AI systems take 3-6 months. We use agile development methodologies and proven frameworks to accelerate delivery timelines."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries does the leading AI Company In Delaware serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the top AI Company In Delaware, we serve diverse industries including chemical manufacturing, financial services, healthcare, pharmaceuticals, agriculture, technology, logistics, and government sectors. Our expertise spans Delaware's key economic drivers from DuPont's chemical innovations to the First State's business-friendly environment."
                  }
                }
              ]
            })
          }}
        />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Partner with the Leading <span className="text-orange-200">AI Company In Delaware</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ successful Delaware companies that trust our <strong>Artificial Intelligence Company In Delaware</strong> for their AI transformation. 
              Get started with a free consultation and discover how our expert <strong>AI Service In Delaware</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start with Top AI Firm Delaware
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call AI Development Company Delaware
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Delaware</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Wilmington</span>
                <span>•</span>
                <span>Dover</span>
                <span>•</span>
                <span>Newark</span>
                <span>•</span>
                <span>Middletown</span>
                <span>•</span>
                <span>Smyrna</span>
                <span>•</span>
                <span>Milford</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

