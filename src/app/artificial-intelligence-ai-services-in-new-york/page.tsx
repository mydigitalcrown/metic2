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
  title: "Artificial Intelligence Company In New York | #1 AI Company In NY - Metic.ai",
  description: "Leading Artificial Intelligence Company In New York with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In New York",
    "AI Company In New York", 
    "AI Service In New York",
    "AI Firm In New York",
    "AI Development Company In New York",
    "Best AI Company In New York",
    "Top AI Company NY",
    "Artificial Intelligence Services New York",
    "AI Solutions Company New York",
    "Machine Learning Company New York",
    "AI Consulting Firm New York",
    "AI Technology Company New York",
    "AI automation New York",
    "AI software company New York",
    "artificial intelligence consulting New York",
    "AI integration services New York",
    "custom AI development New York",
    "enterprise AI solutions New York",
    "AI ML company New York"
  ],
  authors: [{ name: "Metic.ai New York AI Team" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Artificial Intelligence Company In New York | #1 AI Company In NY - Metic.ai",
    description: "Leading Artificial Intelligence Company In New York with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development for New York businesses.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-New York/",
    type: "website",
    locale: "en_US",
    siteName: "Metic.ai - AI Company In New York",
    images: [
      {
        url: "https://metic.ai/og-ai-company-New York.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In New York - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In New York | AI Company In NY",
    description: "Leading AI Company In New York delivering enterprise artificial intelligence solutions. Expert AI development, machine learning & automation services with proven results.",
    images: ["https://metic.ai/og-ai-company-New York.jpg"],
    site: "@metic_ai",
    creator: "@metic_ai"
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-New York/",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code"
  },
  category: "Technology",
  classification: "Business Services"
};

export default function AIServicesNewYorkPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your New York business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for New York's financial, technology, and pharma industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your New York business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your New York business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in New York.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for New York enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "financial & Apparel",
    "technology & Petrotechnology",
    "Pharmaceuticals",
    "Engineering",
    "Information Technology",
    "entertainment & media",
    "fashion",
    "Food Processing",
    "Paper & Pulp",
    "Plastic & Rubber"
  ];

  const stats = [
    { number: "2,100+", label: "New York Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.5x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In New York",
            "alternateName": ["AI Company In New York", "Metic AI", "AI Firm New York"],
            "description": "Leading Artificial Intelligence Company In New York providing enterprise AI solutions, machine learning development, and custom AI services for businesses across NY.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-New York/",
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai",
              "https://www.facebook.com/meticai"
            ],
            "logo": "https://metic.ai/logo.png",
            "image": ["https://metic.ai/ai-company-New York.jpg"],
            "telephone": "+1 7892518414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "vatID": "IN123456789",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Behind Manyata Tech Park",
              "addressLocality": "Hebbal, Bangalore",
              "addressRegion": "Karnataka", 
              "postalCode": "560077",
              "addressCountry": "United States"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.6526",
              "longitude": "-73.7562"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "New York",
                "containedInPlace": {
                  "@type": "State",
                  "name": "NY",
                  "containedInPlace": {
                    "@type": "Country", 
                    "name": "United States"
                  }
                }
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "42.6526",
                "longitude": "-73.7562"
              },
              "geoRadius": "50000"
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
                    "description": "Custom artificial intelligence development for businesses"
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
              "telephone": "+1 7892518414",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi", "NYi"]
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
                "name": "Which is the best Artificial Intelligence Company In New York?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In New York with 2100+ successful AI implementations. We provide comprehensive AI services including machine learning, custom AI development, and enterprise AI solutions with proven 60% cost savings and 3x faster delivery."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In New York provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In New York, Metic.ai provides AI integration & deployment, machine learning solutions, custom AI development, data analytics & BI, generative AI services, and data engineering for businesses across NY."
                }
              },
              {
                "@type": "Question",
                "name": "How to choose the right AI Development Company In New York?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choose an AI Development Company In New York with proven experience, successful implementations, industry expertise, and local presence. Metic.ai offers all these with 2100+ completed projects and deep understanding of New York's business landscape."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Metic.ai the best AI Firm In New York?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the best AI Firm In New York due to our proven expertise, 98% client satisfaction, 4.5x average ROI increase, 24/7 support, and deep understanding of New York's financial, technology, pharmaceutical and engineering industries."
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
            "headline": "Artificial Intelligence Company In New York - AI Services & Solutions",
            "description": "Comprehensive guide to AI services in New York by the leading Artificial Intelligence Company. Expert AI development, machine learning solutions, and enterprise AI implementation.",
            "image": "https://metic.ai/ai-company-New York-article.jpg",
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
            "mainEntityOfPage": "https://metic.ai/artificial-intelligence-ai-services-in-New York/",
            "keywords": "Artificial Intelligence Company In New York, AI Company In New York, AI Service In New York"
          })
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
              <span className="text-sm font-medium text-orange-300">Serving New York, NY, India</span>
              <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Title with Animation */}
            <div className="relative mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white relative z-10">
                <strong>
                  Artificial Intelligence Company In New York
                </strong>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Leading AI Company In NY
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="relative mb-10">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white">AI Company In New York</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange"> Artificial Intelligence Company In New York</strong> 
                with 2100+ successful AI implementations. We help businesses across NY transform with cutting-edge AI solutions, 
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
                  Call: +1 7892518414
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
                Trusted as the top AI Service In New York
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "AI Firm In New York",
                  "AI Development Company In New York", 
                  "Best AI Company NY"
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
                <strong>AI Services</strong> by Leading <span className="text-primary-orange">Artificial Intelligence Company In New York</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services from New York's most trusted <strong>AI Company In New York</strong>. 
                Transforming businesses with cutting-edge AI solutions tailored for NY's industrial landscape.
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
                Industries We Serve in New York
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across New York's key industries and business sectors.
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
                  AI Firm In New York
                </span>
                <br />
                <span className="text-gray-300 text-3xl md:text-4xl lg:text-5xl">Transforming NY's Future</span>
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange mx-auto mb-10 rounded-full shadow-lg"></div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                As the leading <strong className="text-primary-orange">AI Development Company In New York</strong>, we're trusted by NY's 
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
                      Years of experience delivering cutting-edge AI solutions for New York businesses across financial, 
                      technology, pharmaceuticals, and emerging tech sectors.
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
                  
                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>

              {/* Card 2 - Measurable Results */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
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
                      <span className="text-xs font-bold text-green-400">ROI</span>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                      Measurable AI Results
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      Data-driven AI solutions delivering concrete ROI and transformative business growth for 
                      New York companies with proven performance metrics.
                    </p>
                    
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Avg ROI Increase</span>
                        <span className="text-green-400 font-bold">5.8x</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-1.5 rounded-full w-[95%] group-hover:animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>

              {/* Card 3 - Local Partnership */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
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
                      <span className="text-xs font-bold text-purple-400">GJ</span>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      NY Partnership
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      Dedicated local support and strategic partnership with deep understanding of 
                      New York's business landscape and NY's industrial heritage.
                    </p>
                    
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Client Retention</span>
                        <span className="text-purple-400 font-bold">98%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-purple-500 to-violet-600 h-1.5 rounded-full w-[98%] group-hover:animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>

              {/* Card 4 - Enterprise Security */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
                <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-500 group-hover:transform group-hover:scale-105 h-full">
                  <div className="relative mb-8">
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl animate-pulse opacity-20"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl group-hover:animate-spin transition-all duration-1000"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <Shield className="w-10 h-10 text-white group-hover:animate-pulse" />
                      </div>
                    </div>
                    
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-orange/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary-orange/30">
                      <span className="text-xs font-bold text-primary-orange">ISO</span>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-orange transition-colors">
                      Enterprise Security
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      Bank-level security standards and enterprise compliance protecting your 
                      New York business data with military-grade encryption and protocols.
                    </p>
                    
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Security Score</span>
                        <span className="text-primary-orange font-bold">100%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-primary-orange to-orange-600 h-1.5 rounded-full w-full group-hover:animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange to-orange-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Bottom CTA with Creative Design */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50 hover:border-primary-orange/30 transition-all duration-500 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-orange-400/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-2xl animate-pulse"></div>
                      <div className="relative w-24 h-24 bg-gradient-to-br from-primary-orange to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                        <Rocket className="w-12 h-12 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Transform with NY's Leading 
                    <span className="text-primary-orange"> AI Firm In New York</span>?
                  </h3>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Join the ranks of successful NY businesses who trust Metic.ai for their AI transformation journey
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact">
                      <Button 
                        variant="primary" 
                        size="lg" 
                        className="bg-gradient-to-r from-primary-orange to-orange-500 hover:from-primary-orange/90 hover:to-orange-500/90 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl group px-8 py-4"
                      >
                        <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                        Start Your AI Journey
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-primary-orange text-primary-orange hover:bg-primary-orange/10 transform hover:scale-105 transition-all duration-300 group px-8 py-4"
                      >
                        <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Connect with AI Experts
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
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
                  About Metic.ai - Premier <span className="text-primary-orange">Artificial Intelligence Company In New York</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Established as NY's leading <strong>AI Company In New York</strong>, Metic.ai has been at the forefront of artificial intelligence 
                  innovation since 2020. We specialize in delivering enterprise-grade AI solutions that transform businesses across New York's 
                  key industries including financial, technology, pharmaceuticals, and engineering.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our expertise as an <strong>AI Development Company In New York</strong> encompasses machine learning, deep learning, natural language processing, 
                  computer vision, and robotic process automation. We've successfully completed over 2100 AI projects, making us the most 
                  trusted <strong>AI Service In New York</strong>.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">2020</div>
                    <div className="text-gray-600 text-sm">Founded in New York</div>
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
                    Expert AI consulting services to help New York businesses identify AI opportunities and develop comprehensive implementation strategies.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Custom AI Development
                  </h3>
                  <p className="text-gray-600">
                    Bespoke artificial intelligence solutions tailored to your specific business requirements and industry challenges in New York.
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

      {/* Enhanced Creative Client Testimonials for Entity Recognition & Trust */}
      <section className="py-24 bg-gradient-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #FF6B35 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border-2 border-primary-orange/20 mb-8 hover:border-primary-orange/40 transition-all group">
                <Quote className="w-5 h-5 text-primary-orange animate-pulse" />
                <span className="text-sm font-bold text-gray-800">CLIENT SUCCESS STORIES</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">What New York Businesses Say</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  About Our AI Services
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real businesses across New York who chose Metic.ai as their 
                <strong> AI Development Company In New York</strong>.
              </p>
            </div>
            
            {/* Enhanced Creative Testimonial Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Testimonial 1 - Enhanced */}
              <div className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/30 transition-all duration-500 relative overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                  
                  {/* Quote Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      "Metic.ai transformed our financial manufacturing with AI-powered quality control. As the best 
                      <strong className="text-primary-orange"> AI Company In New York</strong>, 
                      they delivered beyond our expectations with <span className="text-primary-orange font-semibold">40% reduction in defects</span>."
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange/20 to-orange-400/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Jonathan Chen</div>
                        <div className="text-sm text-gray-600">CEO, Patel financial, New York</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>

              {/* Testimonial 2 - Enhanced */}
              <div className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/30 transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                  
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-primary-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      "Outstanding <strong className="text-primary-orange">AI Service In New York</strong>! Their machine learning solutions optimized our technology production processes. 
                      <span className="text-primary-orange font-semibold">ROI was achieved within 6 months</span> of implementation."
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange/20 to-orange-400/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Dr. Meera Shah</div>
                        <div className="text-sm text-gray-600">CTO, NY technology Ltd</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 to-primary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>

              {/* Testimonial 3 - Enhanced */}
              <div className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/30 transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                  
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange via-orange-400 to-primary-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      "Exceptional <strong className="text-primary-orange">AI Firm In New York</strong>. Their custom AI development for our pharmaceutical operations 
                      <span className="text-primary-orange font-semibold">increased efficiency by 50%</span>. Highly recommend for any AI project."
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange/20 to-orange-400/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Michael Thompson</div>
                        <div className="text-sm text-gray-600">Director, Desai Pharma, Buffalo</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Overall Stats Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-primary-orange/20 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Trusted by <span className="text-primary-orange">2100+ Businesses</span> Across NY
                </h3>
                <p className="text-gray-600">Join the growing community of successful AI transformations</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: "98%", label: "Client Satisfaction", icon: Star },
                  { number: "2100+", label: "Projects Completed", icon: Award },
                  { number: "60%", label: "Average Cost Savings", icon: TrendingUp },
                  { number: "3x", label: "Faster Delivery", icon: Rocket }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange/10 to-orange-400/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-primary-orange group-hover:animate-pulse" />
                    </div>
                    <div className="text-3xl font-bold text-primary-orange mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Services New York Content - 100% SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* New York AI Market Leadership - Enhanced Header */}
            <div className="text-center mb-20">
              {/* Premium Badge with Animation */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-orange/10 via-white to-secondary-orange/10 rounded-full shadow-2xl border-2 border-primary-orange/30 mb-10 hover:border-primary-orange/50 transition-all group">
                <div className="w-3 h-3 bg-primary-orange rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-gray-800 tracking-wide">NY'S #1 AI COMPANY</span>
                <div className="w-3 h-3 bg-secondary-orange rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Premier </span>
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient">
                  Artificial Intelligence Company In New York
                </span>
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-10 rounded-full shadow-lg"></div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Transforming NY's commercial capital with cutting-edge AI solutions from financial to pharmaceuticals
              </p>
            </div>

            <div className="space-y-20">
              {/* New York AI Innovation Hub - Enhanced Design */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="space-y-8">
                    {/* Enhanced Heading with Icon */}
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                          New York's <span className="text-primary-orange">Leading AI Technology Pioneer</span>
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full"></div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      As the premier <strong className="text-gray-900 bg-primary-orange/10 px-2 py-1 rounded">Artificial Intelligence Company In New York</strong>, 
                      Metic.ai serves NY's commercial capital with enterprise-grade AI solutions tailored to the region's 
                      industrial excellence. From Manhattan's IT corridor to Brooklyn's business district, Queens's 
                      commercial hub to Albany's financial innovation, we understand New York's unique economic landscape.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our <strong className="text-primary-orange font-semibold">AI Company In New York</strong> combines deep understanding 
                      of NY's industrial heritage with cutting-edge technology to deliver AI solutions that drive measurable 
                      results. We've successfully implemented AI across New York's key sectors including financial, technology, 
                      pharmaceuticals, media, engineering, and emerging technology sectors.
                    </p>

                    {/* Enhanced Feature Cards */}
                    <div className="grid gap-6 mt-10">
                      <div className="group bg-gradient-to-r from-primary-orange/5 via-white to-secondary-orange/5 p-6 rounded-2xl border-2 border-primary-orange/20 hover:border-primary-orange/40 transition-all shadow-lg hover:shadow-xl">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Sparkles className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">financial Industry AI Excellence</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Deep expertise with New York's financial giants including quality control automation, 
                              pattern recognition, and supply chain optimization for NY's financial heritage.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-secondary-orange/5 via-white to-primary-orange/5 p-6 rounded-2xl border-2 border-secondary-orange/20 hover:border-secondary-orange/40 transition-all shadow-lg hover:shadow-xl">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">technology & Pharma Innovation</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Advanced AI solutions for New York's technology and pharmaceutical sectors including 
                              process optimization, drug discovery, and regulatory compliance automation.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-primary-orange/5 via-white to-secondary-orange/5 p-6 rounded-2xl border-2 border-primary-orange/20 hover:border-primary-orange/40 transition-all shadow-lg hover:shadow-xl">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">media & entertainment AI Solutions</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Specialized AI for New York's media industry including gemstone grading, 
                              quality assessment, and precision cutting optimization for world-class results.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Stats Dashboard */}
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-10 border-2 border-primary-orange/20 shadow-2xl">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                      New York AI Market Impact
                    </h4>
                    
                    <div className="space-y-8">
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group">
                        <div className="text-5xl font-bold text-primary-orange mb-3 group-hover:scale-110 transition-transform">₹2.8L Cr</div>
                        <div className="text-sm text-gray-600 font-medium">New York Industrial Output</div>
                        <div className="text-xs text-gray-500 mt-2">NY's Commercial Capital</div>
                      </div>
                      
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-secondary-orange/10 hover:border-secondary-orange/30 transition-all group">
                        <div className="text-5xl font-bold text-secondary-orange mb-3 group-hover:scale-110 transition-transform">19.8M</div>
                        <div className="text-sm text-gray-600 font-medium">New York Metropolitan Population</div>
                        <div className="text-xs text-gray-500 mt-2">India's 5th Largest City</div>
                      </div>
                      
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group">
                        <div className="text-5xl font-bold text-primary-orange mb-3 group-hover:scale-110 transition-transform">2100+</div>
                        <div className="text-sm text-gray-600 font-medium">New York AI Projects Completed</div>
                        <div className="text-xs text-gray-500 mt-2">Industry-Leading Success Rate</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary-orange/20 via-secondary-orange/10 to-primary-orange/20 rounded-2xl p-6 border-2 border-primary-orange/30">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-bold text-gray-900">NY Advantage</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong>Strategic Location:</strong> Gateway to India's industrial corridor with 
                          world-class infrastructure and business-friendly policies making it ideal for AI innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* New York Industry Solutions - Premium Design */}
              <div>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-full border-2 border-primary-orange/20 mb-8">
                    <Rocket className="w-5 h-5 text-primary-orange" />
                    <span className="text-sm font-bold text-gray-800">INDUSTRY EXPERTISE</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    AI Solutions for <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">New York's Key Industries</span>
                  </h3>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-6 rounded-full"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Specialized AI solutions designed for NY's industrial capital and its diverse economic sectors
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {/* financial Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">financial & Apparel AI</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Advanced AI solutions for New York's financial industry including automated quality control, 
                      pattern recognition, fabric defect detection, and supply chain optimization for global 
                      financial manufacturers and exporters.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Automated fabric inspection systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Color matching and consistency AI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Production planning optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Global market trend analysis</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* technology Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-secondary-orange/50 hover:shadow-2xl transition-all duration-500">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">technology Process AI</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Specialized AI solutions for New York's technology industry including process optimization, 
                      safety monitoring, yield prediction, and environmental compliance automation for sustainable 
                      technology manufacturing.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Reaction optimization algorithms</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Safety monitoring systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Environmental compliance AI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Waste reduction optimization</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pharmaceutical Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Pharmaceutical AI</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Advanced AI solutions for New York's pharmaceutical sector including drug discovery acceleration, 
                      clinical trial optimization, regulatory compliance, and quality assurance for leading pharma companies.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Drug discovery acceleration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Clinical trial optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Regulatory compliance automation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Quality control systems</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* media Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-secondary-orange/50 hover:shadow-2xl transition-all duration-500">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">media & entertainment AI</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Precision AI solutions for New York's Media and Entertainment industry including gemstone 
                      grading, quality assessment, cutting optimization, and market valuation for world-class results.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Automated media grading</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Precision cutting optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Quality assessment systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Market valuation algorithms</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Engineering Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Engineering & Manufacturing</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Industrial AI solutions for New York's engineering sector including predictive maintenance, 
                      quality control, production optimization, and safety monitoring for precision manufacturing excellence.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Predictive maintenance systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Quality control automation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Production line optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Safety monitoring AI</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Albany Fintech */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-secondary-orange/50 hover:shadow-2xl transition-all duration-500">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Albany Fintech AI</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Financial AI solutions for Albany's emerging fintech sector including algorithmic trading, 
                      risk assessment, fraud detection, and regulatory compliance for India's international financial center.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Algorithmic trading systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Risk assessment automation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Fraud detection systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Compliance monitoring AI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* New York AI Success Stories - Premium Design */}
              <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-12 md:p-16 border-2 border-primary-orange/20 shadow-2xl">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 mb-8">
                    <Star className="w-5 h-5 text-primary-orange" />
                    <span className="text-sm font-bold text-gray-800">CLIENT SUCCESS STORIES</span>
                    <Star className="w-5 h-5 text-primary-orange" />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    New York AI Implementation <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">Success Stories</span>
                  </h3>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-6 rounded-full"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Real results from New York businesses that transformed their operations with our AI solutions
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-10">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                        <span className="font-bold text-white text-lg">TP</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">financial Pioneer</h4>
                        <p className="text-sm text-gray-600">Major New York financial Manufacturer</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "Best <strong className="text-primary-orange">AI Company In New York</strong> for financial industry! 
                      Their quality control AI reduced fabric defects by 55% while increasing production efficiency. 
                      Perfect understanding of NY's financial heritage."
                    </p>
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-xl p-4">
                      <div className="text-4xl font-bold text-primary-orange mb-2">55%</div>
                      <div className="text-sm text-gray-600 font-medium">Defect Reduction Achievement</div>
                      <div className="text-xs text-gray-500 mt-1">ROI: 380% within 8 months</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-secondary-orange/10 hover:border-secondary-orange/30 transition-all group">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                        <span className="font-bold text-white text-lg">CP</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">technology Pioneer</h4>
                        <p className="text-sm text-gray-600">Leading New York technology Company</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "Outstanding <strong className="text-secondary-orange">AI Development Company In New York</strong>! 
                      Their process optimization AI increased yield by 42% while reducing environmental impact. 
                      Exceptional technology industry expertise."
                    </p>
                    <div className="bg-gradient-to-r from-secondary-orange/10 to-primary-orange/10 rounded-xl p-4">
                      <div className="text-4xl font-bold text-secondary-orange mb-2">42%</div>
                      <div className="text-sm text-gray-600 font-medium">Yield Increase Achievement</div>
                      <div className="text-xs text-gray-500 mt-1">Environmental impact: -30%</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                        <span className="font-bold text-white text-lg">PL</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Pharma Leader</h4>
                        <p className="text-sm text-gray-600">Major New York Pharmaceutical Company</p>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "Leading <strong className="text-primary-orange">Artificial Intelligence Company In New York</strong> 
                      for pharma! Their drug discovery AI accelerated research by 60% while ensuring regulatory compliance. 
                      Remarkable pharmaceutical expertise."
                    </p>
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-xl p-4">
                      <div className="text-4xl font-bold text-primary-orange mb-2">60%</div>
                      <div className="text-sm text-gray-600 font-medium">Research Acceleration</div>
                      <div className="text-xs text-gray-500 mt-1">Time to market: -18 months</div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Success Metrics */}
                <div className="mt-12 grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-primary-orange/20">
                    <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">New York Projects</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-secondary-orange/20">
                    <div className="text-3xl font-bold text-secondary-orange mb-2">99.2%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-primary-orange/20">
                    <div className="text-3xl font-bold text-primary-orange mb-2">5.8x</div>
                    <div className="text-sm text-gray-600">Average ROI</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-secondary-orange/20">
                    <div className="text-3xl font-bold text-secondary-orange mb-2">98%</div>
                    <div className="text-sm text-gray-600">Client Retention</div>
                  </div>
                </div>
              </div>

              {/* New York AI Partnership Excellence - Premium Design */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-orange rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      New York AI Leadership Metrics
                    </h4>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg">
                        <span className="text-gray-600 font-medium">New York Projects Completed</span>
                        <span className="font-bold text-primary-orange text-xl">2100+</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-secondary-orange/5 to-transparent rounded-lg">
                        <span className="text-gray-600 font-medium">Industry Success Rate</span>
                        <span className="font-bold text-secondary-orange text-xl">100%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg">
                        <span className="text-gray-600 font-medium">Average ROI for NY Clients</span>
                        <span className="font-bold text-primary-orange text-xl">5.8x</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-secondary-orange/5 to-transparent rounded-lg">
                        <span className="text-gray-600 font-medium">Client Retention Rate</span>
                        <span className="font-bold text-secondary-orange text-xl">98%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg">
                        <span className="text-gray-600 font-medium">Time to Deployment</span>
                        <span className="font-bold text-primary-orange text-xl">30 Days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-orange/10 via-white to-secondary-orange/10 rounded-2xl p-8 border-2 border-primary-orange/20 shadow-xl">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">New York Business Advantage</h4>
                        <p className="text-gray-700 leading-relaxed">
                          As the premier <strong className="text-primary-orange">AI Firm In New York</strong>, we understand 
                          NY's unique business culture combining traditional industrial excellence with modern innovation. 
                          Our AI solutions are built for New York's entrepreneurial spirit and global ambitions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Your Trusted <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">AI Partner In New York</span>
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full mb-6"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-gray-900 bg-primary-orange/10 px-2 py-1 rounded">Choosing Metic.ai as your AI partner in New York</strong> means 
                    working with a team that deeply understands NY's business ecosystem, from traditional industries 
                    to emerging sectors, from family businesses to multinational corporations.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Our <strong className="text-primary-orange font-semibold">AI Service In New York</strong> includes white-glove consultation, 
                    rapid prototyping, enterprise deployment, and 24/7 support to ensure your AI investment delivers 
                    maximum value in NY's competitive and dynamic marketplace.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-primary-orange/10">
                      <MapPin className="w-8 h-8 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Comprehensive New York Coverage</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Manhattan, Brooklyn, Queens, Bronx, Staten Island, Buffalo, Rochester, 
                          Albany, and all major business districts across Greater New York
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-secondary-orange/10">
                      <Sparkles className="w-8 h-8 text-secondary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Industry Domain Expertise</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Deep understanding of financial, technology, pharmaceuticals, media, engineering, 
                          and Albany fintech requirements with proven track record
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-primary-orange/10">
                      <Clock className="w-8 h-8 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Rapid NY Deployment</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Fast implementation and deployment built for NY's business pace with 
                          local support teams and cultural understanding
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

      {/* Enhanced FAQ Section - Homepage Style */}
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
                <span className="text-sm font-bold text-gray-800">Got Questions? We Have Answers!</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Frequently Asked Questions</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  About AI Company In New York
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about choosing the right AI company in NY's commercial capital
              </p>
            </div>

            {/* Advanced Creative FAQ Cards */}
            <div className="space-y-5">
              {/* FAQ Item 1 - Enhanced Design */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        {/* Icon Circle */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Sparkles className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        {/* Question */}
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which is the best Artificial Intelligence Company In New York?
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
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                {/* Answer with Animation */}
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-gray-900 font-semibold">Metic.ai is the leading Artificial Intelligence Company In New York</strong> with over 2100 successful AI implementations. 
                        We're recognized as the top AI Company In New York for our proven expertise in machine learning, custom AI development, and enterprise AI solutions.
                      </p>
                      <p className="text-lg">
                        Our clients achieve an average of 60% cost savings and 3x faster delivery compared to traditional development approaches, 
                        making us NY's most trusted AI development partner.
                      </p>
                      
                      {/* Stats Highlight */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">2100+ Projects</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <MapPin className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">NY Expert</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <TrendingUp className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">60% Cost Savings</span>
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
                            <Code className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What services does the top AI Company In New York provide?
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
                      <BarChart3 className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        As the premier <strong className="text-gray-900 font-semibold">AI Company In New York</strong>, Metic.ai provides comprehensive artificial intelligence services including:
                        AI integration & deployment, machine learning solutions, custom AI development, and data analytics & business intelligence.
                      </p>
                      <p className="text-lg">
                        We specialize in serving New York's financial, technology, pharmaceutical, and engineering industries with 
                        generative AI services, computer vision, natural language processing, and enterprise AI automation.
                      </p>

                      {/* Service Grid */}
                      <div className="grid md:grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <Brain className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">financial AI</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <Database className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">technology Analytics</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <Zap className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">Pharma AI</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <Shield className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">Engineering AI</span>
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
                            <Target className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How to choose the right AI Development Company In New York?
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
                        When selecting an <strong className="text-gray-900 font-semibold">AI Development Company In New York</strong>, look for proven experience, successful project portfolio, 
                        industry expertise, local market understanding, and ongoing support.
                      </p>
                      <p className="text-lg">
                        Metic.ai offers all these qualities with 2100+ completed projects, 98% client satisfaction rate, and deep knowledge of NY's business landscape. 
                        We provide 24/7 support and maintain long-term partnerships with our clients.
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
                            <TrendingUp className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How much does AI implementation cost with an AI Service In New York?
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
                      <Clock className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        AI implementation costs vary based on project complexity and requirements. As a leading <strong className="text-gray-900 font-semibold">AI Service In New York</strong>, 
                        Metic.ai offers competitive pricing with transparent cost structures.
                      </p>
                      <p className="text-lg">
                        Our clients typically save 60% compared to international AI development costs while receiving enterprise-grade solutions. 
                        We provide free consultations to assess your needs and provide accurate project estimates.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

            </div>

            {/* Enhanced CTA at Bottom of FAQ */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary-orange to-secondary-orange rounded-3xl p-12 text-white relative overflow-hidden">
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
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your New York Business with AI?</h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Join NY's leading businesses who trust Metic.ai for their AI transformation in the commercial capital!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100 shadow-xl">
                        Partner with AI Firm New York
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                        Call AI Company New York Now
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
              Ready to Partner with New York's Leading <strong>Artificial Intelligence Company</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ satisfied clients who trust Metic.ai as their preferred <strong>AI Company In New York</strong>. 
              Transform your business with proven AI solutions that deliver results. Get started with a free consultation 
              and discover why we're NY's most trusted <strong>AI Development Company In New York</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +1 7892518414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-6">Trusted <strong>AI Service In New York</strong> serving businesses across NY</p>
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
                <span>Buffalo</span>
                <span>•</span>
                <span>Staten Island</span>
                <span>•</span>
                <span>Bronx</span>
                <span>•</span>
                <span>Queens</span>
                <span>•</span>
                <span>Albany</span>
                <span>•</span>
                <span>Rochester</span>
                <span>•</span>
                <span>Brooklyn</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

