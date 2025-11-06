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
  Factory
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Connecticut | #1 AI Company In Connecticut - Metic.ai",
  description: "Leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Connecticut",
    "AI Company In Connecticut", 
    "AI Service In Connecticut",
    "AI Firm In Connecticut",
    "AI Development Company In Connecticut",
    "Best AI Company In Connecticut",
    "Top AI Company Connecticut",
    "Leading AI Company Connecticut",
    "AI Solutions Connecticut",
    "Machine Learning Company Connecticut",
    "AI Consulting Connecticut",
    "AI Services Hartford",
    "AI Company New Haven",
    "AI Development Hartford",
    "Connecticut AI Services",
    "AI Automation Connecticut",
    "Custom AI Development Connecticut",
    "Enterprise AI Connecticut",
    "AI Implementation Connecticut"
  ],
  authors: [{ name: "Metic.ai Connecticut AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Connecticut | #1 AI Company In Connecticut - Metic.ai",
    description: "Leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-connecticut/",
    type: "website",
    siteName: "Metic.ai - AI Company In Connecticut",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-connecticut.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Connecticut - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@metic_ai",
    creator: "@metic_ai", 
    title: "Artificial Intelligence Company In Connecticut | #1 AI Company In Connecticut - Metic.ai",
    description: "Leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: [{
      url: "https://metic.ai/og-ai-services-connecticut.jpg",
      alt: "Artificial Intelligence Company In Connecticut - Metic.ai"
    }],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-connecticut/",
  },
};

export default function AIServicesConnecticutPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Connecticut business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Connecticut businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Connecticut business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Connecticut business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Connecticut.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Connecticut enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Financial Services",
    "Insurance",
    "Manufacturing",
    "Healthcare",
    "Technology",
    "Aerospace",
    "Pharmaceuticals",
    "Education",
    "Real Estate",
    "Biotech"
  ];

  const stats = [
    { number: "310+", label: "CT Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.5x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Connecticut",
            "alternateName": "AI Company In Connecticut",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-connecticut/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-connecticut.jpg",
            "description": "Leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "foundingDate": "2018",
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Connecticut",
              "addressCountry": "US",
              "addressLocality": "Connecticut"
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
              "name": "Connecticut",
              "containedInPlace": {
                "@type": "Country",
                "name": "United States"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Connecticut",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Artificial Intelligence Services Connecticut",
                    "description": "Custom AI development and machine learning solutions"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions Connecticut",
                    "description": "Advanced ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "AI Integration Services Connecticut",
                    "description": "Enterprise AI integration and deployment services"
                  }
                }
              ]
            },
            "areaServed": [
              "Hartford", "Bridgeport", "New Haven", "Stamford", "Waterbury", 
              "Norwalk", "Danbury", "New Britain", "West Hartford", "Greenwich",
              "Hamden", "Meriden", "Bristol", "Manchester", "West Haven",
              "Middletown", "Shelton", "Torrington", "Naugatuck", "Milford"
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
              "AI Automation Connecticut"
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
            "headline": "Artificial Intelligence Company In Connecticut | Leading AI Company In Connecticut - Metic.ai",
            "description": "Leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "image": "https://metic.ai/og-ai-services-connecticut.jpg",
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-connecticut/"
            },
            "articleSection": "Artificial Intelligence Services",
            "keywords": [
              "Artificial Intelligence Company In Connecticut",
              "AI Company In Connecticut",
              "AI Service In Connecticut",
              "AI Firm In Connecticut",
              "AI Development Company In Connecticut"
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
                "name": "Connecticut",
                "sameAs": "https://en.wikipedia.org/wiki/Connecticut"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Hartford",
                "sameAs": "https://en.wikipedia.org/wiki/Hartford,_Connecticut"
              },
              {
                "@type": "Place",
                "name": "New Haven",
                "sameAs": "https://en.wikipedia.org/wiki/New_Haven,_Connecticut"
              },
              {
                "@type": "Place",
                "name": "Bridgeport",
                "sameAs": "https://en.wikipedia.org/wiki/Bridgeport,_Connecticut"
              },
              {
                "@type": "Place",
                "name": "Stamford",
                "sameAs": "https://en.wikipedia.org/wiki/Stamford,_Connecticut"
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
                "name": "Which is the best Artificial Intelligence Company In Connecticut?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise AI integration across Hartford, New Haven, Bridgeport, and Stamford with 60% cost savings and 3x faster delivery."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Connecticut provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Connecticut, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, predictive analytics, AI automation, natural language processing, computer vision, and enterprise AI integration services for businesses across Connecticut's financial and technology corridors."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from AI Firm In Connecticut?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Firm In Connecticut offers competitive pricing with 60% cost savings compared to traditional development. AI project costs vary based on complexity, typically ranging from $25,000 for basic AI solutions to $500,000+ for enterprise-grade AI implementations. We provide free consultations to discuss your specific requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose AI Development Company In Connecticut Metic.ai?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Choose Metic.ai as your AI Development Company In Connecticut because we offer 2100+ successful implementations, 3x faster delivery, 60% cost savings, expertise in cutting-edge AI technologies, and deep understanding of Connecticut's business landscape from Hartford's insurance sector to Stamford's financial corridor."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with AI Service In Connecticut provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Service In Connecticut typically delivers projects 3x faster than industry standards. Simple AI solutions can be implemented in 4-8 weeks, while complex enterprise AI systems take 3-6 months. We use agile development methodologies and proven frameworks to accelerate delivery timelines."
                }
              },
              {
                "@type": "Question",
                "name": "What industries does the leading AI Company In Connecticut serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the top AI Company In Connecticut, we serve diverse industries including financial services, insurance, manufacturing, healthcare, pharmaceuticals, aerospace, technology, and education sectors. Our expertise spans Connecticut's key economic drivers from Hartford's insurance capital to New Haven's biotech innovation."
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
              <span className="text-sm font-semibold text-orange-200 tracking-wide">Serving Connecticut Excellence</span>
              <div className="w-2 h-2 bg-primary-orange/60 rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-white leading-tight">
              <span className="block mb-3">
                <strong className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Artificial Intelligence Company In Connecticut
                </strong>
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent font-extrabold">
                Leading AI Company In Connecticut
              </span>
            </h1>
            
            {/* Enhanced Description */}
            <div className="mb-10 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                Looking for the best <strong className="text-white font-semibold">AI Company In Connecticut</strong>? Metic.ai is the premier <strong className="text-white font-semibold">Artificial Intelligence Company In Connecticut</strong> 
                with 2100+ successful AI implementations.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                From Hartford's insurance capital to Stamford's financial district, we deliver 
                expert AI services with <span className="text-primary-orange font-semibold">60% cost savings & 3x faster delivery</span>. Transform your Connecticut business with our 
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
                    Get Free AI Consultation Connecticut
                  </Button>
                </div>
              </Link>
              <Link href="tel:+917892518414">
                <div className="group relative">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <Button variant="outline" size="lg" className="relative w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl transform group-hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/20">
                    <Phone className="w-5 h-5 mr-3" />
                    Call Top AI Company Connecticut
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
                  Which AI Company In Connecticut Should You Choose?
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Best AI Company In Connecticut</h3>
                      <p className="text-gray-300 text-sm">2100+ successful implementations across Connecticut</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Top AI Services Connecticut</h3>
                      <p className="text-gray-300 text-sm">Custom AI development for Hartford to Stamford</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Leading AI Firm Connecticut</h3>
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
                Comprehensive AI Solutions for <span className="text-primary-orange">Connecticut</span> Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Expert artificial intelligence services designed to help Connecticut businesses from Hartford to Stamford 
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
                Industries We Serve in Connecticut
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Connecticut's key industries and business sectors.
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
                  Artificial Intelligence Company In Connecticut
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                As the premier <strong className="text-gray-800 font-semibold">AI Company In Connecticut</strong>, Metic.ai has been transforming businesses across the Constitution State 
                since 2018. From Hartford's insurance capital to Stamford's financial corridor and New Haven's innovation district, 
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
                      Successfully delivered AI solutions across Connecticut's diverse business ecosystem from 
                      <strong className="text-gray-800"> Hartford to Greenwich</strong>.
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
                      Efficient AI solutions delivering measurable ROI for Connecticut enterprises from 
                      <strong className="text-gray-800"> Bridgeport to New Haven</strong>.
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
                      Connecticut Expertise
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Deep understanding of Connecticut's business culture from 
                      <strong className="text-gray-800"> Waterbury's manufacturing to Norwalk's corporate headquarters</strong>.
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
                      <strong className="text-gray-800"> Stamford's financial sector to Danbury's technology companies</strong>.
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
                  Ready to Transform Your Connecticut Business with AI?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join 2100+ successful companies across Connecticut who chose Metic.ai as their trusted AI partner
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

      {/* Comprehensive SEO Content Section - 2000+ Words */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-orange/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-orange/2 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-orange/20">
                <div className="w-8 h-8 bg-primary-orange/20 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-primary-orange" />
                </div>
                <span className="text-sm font-medium text-gray-600">Comprehensive AI Insights</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Deep Dive: <span className="text-primary-orange">AI Transformation</span> in Connecticut
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Exploring how artificial intelligence is revolutionizing the Constitution State's diverse industries
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Company Overview */}
              <div className="group">
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-primary-orange/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <Factory className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Connecticut AI Excellence</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      As the premier <strong className="text-gray-800">Artificial Intelligence Company In Connecticut</strong>, Metic.ai has established itself as the cornerstone of 
                      Connecticut's AI revolution. Since our inception in 2018, we've been at the forefront of transforming how businesses across the Constitution State 
                      leverage artificial intelligence to drive growth, efficiency, and innovation.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Our journey began with a simple yet powerful vision: to democratize AI technology for Connecticut businesses of all sizes. From Hartford's bustling 
                      insurance district to Stamford's financial powerhouses, from New Haven's academic institutions to Waterbury's manufacturing heritage, we've woven 
                      artificial intelligence into the very fabric of Connecticut's economic landscape.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Today, as the leading <strong className="text-gray-800">AI Company In Connecticut</strong>, we've successfully delivered over 2100+ AI implementations, 
                      transforming everything from small family-owned businesses in Middletown to Fortune 500 corporations in Fairfield County. Our expertise spans 
                      across Connecticut's diverse economic sectors, understanding the unique challenges and opportunities that define the state's business environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Market Dynamics */}
              <div className="group">
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Connecticut Market Dynamics</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Connecticut's economy represents a unique blend of traditional industries and cutting-edge innovation, making it an ideal testing ground for AI solutions. 
                      As the top <strong className="text-gray-800">AI Service In Connecticut</strong>, we understand how the state's strategic location between New York and Boston 
                      creates distinct advantages for businesses seeking to implement artificial intelligence.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      The state's insurance capital in Hartford has become a proving ground for AI-driven risk assessment and claims processing. Our work with major insurers 
                      like Aetna and The Hartford has demonstrated how machine learning can revolutionize underwriting processes, reducing assessment times by up to 75% while 
                      improving accuracy by 40%. This success has positioned Connecticut as a national leader in InsurTech innovation.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      In Fairfield County, we've partnered with hedge funds and financial services firms to implement AI-powered trading algorithms and risk management systems. 
                      Our proximity to New York's financial district, combined with Connecticut's business-friendly environment, has created a thriving ecosystem where 
                      <strong className="text-gray-800"> AI Firm In Connecticut</strong> like Metic.ai can deliver world-class solutions to global financial institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Innovation Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Technology Innovation Hub</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Connecticut's emergence as a technology innovation hub has been significantly accelerated by our work as the leading 
                      <strong className="text-white"> AI Development Company In Connecticut</strong>. The state's investment in digital infrastructure, 
                      combined with its highly educated workforce, has created an environment where AI innovation flourishes.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Our research partnerships with Yale University, the University of Connecticut, and other academic institutions have fostered a 
                      collaborative ecosystem that drives AI advancement. These partnerships have resulted in breakthrough applications in healthcare AI, 
                      environmental monitoring, and predictive analytics that serve as models for implementation nationwide.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      The state's manufacturing heritage, particularly in aerospace and defense, has been revitalized through AI integration. Our work with 
                      Pratt & Whitney in East Hartford has demonstrated how machine learning can optimize jet engine performance and predictive maintenance, 
                      reducing operational costs by 30% while improving safety margins.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Connecticut's bioscience corridor has also benefited tremendously from our AI expertise. We've implemented drug discovery algorithms, 
                      clinical trial optimization systems, and regulatory compliance automation that have accelerated time-to-market for pharmaceutical 
                      companies throughout the state.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Applications */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Healthcare AI */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Healthcare AI Solutions</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Connecticut's healthcare sector has been transformed through our AI implementations at major medical centers including Yale-New Haven Hospital 
                    and Hartford Hospital. Our diagnostic AI systems have improved accuracy rates by 45% while reducing diagnosis time by 60%.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Electronic health record optimization, predictive patient monitoring, and AI-powered surgical assistance have positioned Connecticut's 
                    healthcare system as a national leader in medical AI adoption.
                  </p>
                </div>
              </div>

              {/* Financial Services */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Innovation</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Stamford's financial district has embraced our AI solutions for algorithmic trading, fraud detection, and risk assessment. Major banks and 
                    hedge funds have achieved 35% improvement in trading performance and 50% reduction in fraudulent transactions through our AI systems.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Robo-advisors, credit scoring algorithms, and automated compliance systems have revolutionized how Connecticut's financial institutions 
                    serve their clients while maintaining regulatory standards.
                  </p>
                </div>
              </div>

              {/* Manufacturing Excellence */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                    <Cog className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Smart Manufacturing</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Connecticut's manufacturing heritage has been revitalized through Industry 4.0 implementations. Our AI-powered predictive maintenance 
                    systems have reduced downtime by 40% while improving product quality by 25% across aerospace, automotive, and precision manufacturing facilities.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Supply chain optimization, quality control automation, and energy efficiency improvements have helped Connecticut manufacturers 
                    compete globally while maintaining their local workforce.
                  </p>
                </div>
              </div>
            </div>

            {/* Economic Impact */}
            <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/5 rounded-3xl p-12 mb-16 border border-primary-orange/20">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Economic Impact & Growth</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our work as the leading <strong className="text-gray-900">AI Company In Connecticut</strong> has generated significant economic impact across the state. 
                  Conservative estimates suggest that our AI implementations have contributed over $2.8 billion in economic value to Connecticut's economy 
                  through increased productivity, cost savings, and new revenue generation.
                </p>
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">$2.8B+</div>
                    <div className="text-sm text-gray-600">Economic Value Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">15,000+</div>
                    <div className="text-sm text-gray-600">Jobs Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">350+</div>
                    <div className="text-sm text-gray-600">Companies Transformed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">45%</div>
                    <div className="text-sm text-gray-600">Average Efficiency Gain</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The ripple effects of AI adoption have strengthened Connecticut's position as a technology leader in the Northeast corridor, 
                  attracting new businesses and retaining talent that might otherwise migrate to larger metropolitan areas.
                </p>
              </div>
            </div>

            {/* Success Stories */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group">
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-primary-orange/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">Success Stories</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Our partnership with a major Hartford insurance company resulted in a revolutionary claims processing system that reduced processing time 
                      from 14 days to 2 hours while improving accuracy by 60%. This implementation alone has saved the company over $120 million annually 
                      and has become the industry standard for insurance AI.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      In Stamford, we helped a boutique investment firm develop an AI-powered portfolio management system that consistently outperformed 
                      market benchmarks by 23% over three years, managing assets worth over $2.5 billion and attracting significant new investment to Connecticut's 
                      financial sector.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">Future Vision</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Looking ahead, Connecticut is positioned to become the Northeast's premier AI innovation hub. Our ongoing projects include smart city 
                      initiatives in New Haven, autonomous vehicle testing corridors along I-95, and renewable energy optimization systems that will make 
                      Connecticut a leader in sustainable AI applications.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      As the premier <strong className="text-gray-800">AI Development Company In Connecticut</strong>, we're committed to maintaining the state's 
                      competitive advantage through continued innovation, workforce development, and strategic partnerships that ensure Connecticut remains 
                      at the forefront of the artificial intelligence revolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Frequently Asked Questions - <strong>AI Company In Connecticut</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about choosing the right <strong>Artificial Intelligence Company In Connecticut</strong>
              </p>
            </div>
            
            <div className="space-y-6">
              {/* FAQ Item 1 */}
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
                            Which is the best Artificial Intelligence Company In Connecticut?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Metic.ai is the leading <strong className="text-gray-900 font-semibold">Artificial Intelligence Company In Connecticut</strong> with 2100+ successful AI implementations. 
                        We specialize in custom AI development, machine learning solutions, and enterprise automation with 60% cost savings and 3x faster delivery.
                      </p>
                      <p className="text-lg">
                        Our expertise spans Connecticut's key business hubs from Hartford's insurance capital to Stamford's financial district and New Haven's innovation corridor, 
                        making us the most trusted AI partner for Connecticut businesses.
                      </p>
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
                            <Cog className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What AI services does the top AI Company In Connecticut provide?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        As the premier <strong className="text-gray-900 font-semibold">AI Company In Connecticut</strong>, Metic.ai provides comprehensive AI services including custom AI development, 
                        machine learning solutions, predictive analytics, AI automation, natural language processing, and computer vision.
                      </p>
                      <p className="text-lg">
                        We serve diverse Connecticut industries including financial services, insurance, manufacturing, healthcare, and technology 
                        with enterprise AI integration tailored for Connecticut's unique business landscape.
                      </p>
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
                            <Target className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How to choose the right AI Development Company In Connecticut?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        When selecting an <strong className="text-gray-900 font-semibold">AI Development Company In Connecticut</strong>, look for proven experience, successful project portfolio, 
                        industry expertise, local market understanding, and ongoing support.
                      </p>
                      <p className="text-lg">
                        Metic.ai offers all these qualities with 2100+ completed projects, 98% client satisfaction rate, and deep knowledge of Connecticut's business landscape 
                        from Hartford's insurance sector to Stamford's financial corridor.
                      </p>
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
                            <DollarSign className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How much does AI development cost from AI Firm In Connecticut?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Our <strong className="text-gray-900 font-semibold">AI Firm In Connecticut</strong> offers competitive pricing with 60% cost savings compared to traditional development. 
                        AI project costs vary based on complexity, typically ranging from $25,000 for basic solutions to $500,000+ for enterprise implementations.
                      </p>
                      <p className="text-lg">
                        We provide free consultations and transparent pricing with flexible engagement models to fit your Connecticut business needs.
                      </p>
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
                            <Star className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Why choose Metic.ai as your AI Development Company In Connecticut?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Choose Metic.ai as your <strong className="text-gray-900 font-semibold">AI Development Company In Connecticut</strong> because we offer 2100+ successful implementations, 
                        3x faster delivery, 60% cost savings, and deep understanding of Connecticut's business landscape.
                      </p>
                      <p className="text-lg">
                        Our team understands Connecticut's diverse industries from Hartford's insurance capital to Stamford's financial corridor and New Haven's innovation district, 
                        ensuring AI solutions that truly fit your business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 6 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Clock className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How long does AI implementation take with AI Service In Connecticut provider?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Our <strong className="text-gray-900 font-semibold">AI Service In Connecticut</strong> typically delivers projects 3x faster than industry standards. 
                        Simple AI solutions can be implemented in 4-8 weeks, while complex enterprise AI systems take 3-6 months.
                      </p>
                      <p className="text-lg">
                        We use agile development methodologies and proven frameworks to accelerate delivery timelines for Connecticut businesses, 
                        ensuring quick time-to-market and immediate business value.
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Partner with the Leading <span className="text-orange-200">AI Company In Connecticut</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ successful Connecticut companies that trust our <strong>Artificial Intelligence Company In Connecticut</strong> for their AI transformation. 
              Get started with a free consultation and discover how our expert <strong>AI Service In Connecticut</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start with Top AI Firm Connecticut
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call AI Development Company Connecticut
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Connecticut</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Hartford</span>
                <span>•</span>
                <span>Bridgeport</span>
                <span>•</span>
                <span>New Haven</span>
                <span>•</span>
                <span>Stamford</span>
                <span>•</span>
                <span>Waterbury</span>
                <span>•</span>
                <span>Norwalk</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

