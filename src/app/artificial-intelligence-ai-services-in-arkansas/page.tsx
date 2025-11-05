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
  Globe
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Arkansas | #1 AI Company In Arkansas - Metic.ai",
  description: "Leading Artificial Intelligence Company In Arkansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Arkansas",
    "AI Company In Arkansas", 
    "AI Service In Arkansas",
    "AI Firm In Arkansas",
    "AI Development Company In Arkansas",
    "Artificial Intelligence Services Arkansas",
    "AI Solutions Company Arkansas",
    "Machine Learning Company Arkansas",
    "AI Consulting Firm Arkansas",
    "AI Technology Company Arkansas",
    "Best AI Company In Arkansas",
    "Top AI Company Arkansas",
    "AI automation Arkansas",
    "AI software company Arkansas",
    "artificial intelligence consulting Arkansas",
    "AI integration services Arkansas",
    "custom AI development Arkansas",
    "enterprise AI solutions Arkansas",
    "AI ML company Arkansas"
  ],
  authors: [{ name: "Metic.ai Arkansas AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Arkansas | #1 AI Company In Arkansas - Metic.ai",
    description: "Leading Artificial Intelligence Company In Arkansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-arkansas/",
    siteName: "Metic.ai - AI Company In Arkansas",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-arkansas.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Arkansas - Metic.ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    creator: "@MeticAI",
    title: "Artificial Intelligence Company In Arkansas | AI Company In Arkansas - Metic.ai",
    description: "Leading Artificial Intelligence Company In Arkansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: {
      url: "https://metic.ai/og-ai-services-arkansas.jpg",
      alt: "Artificial Intelligence Company In Arkansas - Metic.ai",
    },
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-arkansas/",
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
  applicationName: "Metic.ai - Artificial Intelligence Company In Arkansas",
};

export default function AIServicesArkansasPage() {
  const stats = [
    { number: "2,100+", label: "Arkansas Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.5x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Arkansas business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Arkansas businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Arkansas business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Arkansas business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Arkansas.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Arkansas enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Agriculture",
    "Manufacturing",
    "Healthcare",
    "Technology",
    "Transportation",
    "Retail",
    "Financial Services",
    "Energy",
    "Food Processing",
    "Logistics"
  ];

  return (
    <>
      {/* Organization Schema for Enhanced SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai - Artificial Intelligence Company In Arkansas",
            "alternateName": ["Metic AI", "Metic.ai Arkansas", "AI Company In Arkansas"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-arkansas/",
            "logo": "https://metic.ai/logo-arkansas-ai-company.png",
            "image": "https://metic.ai/artificial-intelligence-company-arkansas.jpg",
            "description": "Leading Artificial Intelligence Company In Arkansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "foundingDate": "2020",
            "numberOfEmployees": "100-500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "300 Quail Ridge Dr NE",
              "addressLocality": "ADA",
              "addressRegion": "MI", 
              "postalCode": "49301",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "customer service",
              "email": "arkansas@metic.ai",
              "availableLanguage": ["English"],
              "areaServed": "Arkansas"
            },
            "sameAs": [
              "https://linkedin.com/company/metic-ai",
              "https://twitter.com/MeticAI",
              "https://facebook.com/MeticAI"
            ],
            "serviceArea": {
              "@type": "State",
              "name": "Arkansas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Artificial Intelligence Services In Arkansas",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Development Services Arkansas",
                    "description": "Custom AI development for Arkansas businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Machine Learning Solutions Arkansas",
                    "description": "ML algorithms and predictive analytics for AR companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration Services Arkansas", 
                    "description": "Enterprise AI integration for Arkansas businesses"
                  }
                }
              ]
            },
            "areaServed": [
              "Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro",
              "North Little Rock", "Conway", "Rogers", "Pine Bluff", "Bentonville", 
              "Hot Springs", "Benton", "Texarkana", "Sherwood", "Paragould"
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning", 
              "AI Development",
              "AI Consulting",
              "AI Integration",
              "Enterprise AI Solutions",
              "AI Automation",
              "Data Science",
              "Natural Language Processing",
              "Computer Vision"
            ],
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
                  "@type": "Organization",
                  "name": "Walmart Arkansas"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Outstanding AI Company In Arkansas. Metic.ai transformed our retail operations with intelligent inventory management."
              }
            ]
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
                "name": "Which is the best Artificial Intelligence Company In Arkansas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Arkansas with 2100+ successful AI implementations. We serve businesses across Little Rock, Fort Smith, Fayetteville, and all Arkansas cities with expert AI services, machine learning solutions, and custom AI development."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Arkansas provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Arkansas, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, AI integration, automation services, data analytics, natural language processing, and computer vision solutions specifically designed for Arkansas businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Company In Arkansas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI development costs vary based on project complexity. As a leading AI Company In Arkansas, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. We provide free consultations to Arkansas businesses to determine exact project costs and ROI projections."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your Artificial Intelligence Company In Arkansas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai stands out as the top Artificial Intelligence Company In Arkansas because of our 2100+ successful implementations, 4.9/5 client satisfaction rating, 3x faster delivery, 60% cost savings, and deep understanding of Arkansas's business landscape across agriculture, manufacturing, and retail sectors."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the leading AI Company In Arkansas serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As Arkansas's premier AI Company, Metic.ai serves diverse industries including agriculture, manufacturing, healthcare, technology, transportation, retail, financial services, energy, food processing, and logistics across all Arkansas cities and regions."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can an AI Company In Arkansas implement AI solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai, the leading AI Company In Arkansas, delivers AI solutions 3x faster than industry average. Simple AI implementations can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 3-6 months, depending on Arkansas business requirements and integration complexity."
                }
              }
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
            "headline": "Artificial Intelligence Company In Arkansas | Leading AI Services & Development",
            "description": "Comprehensive guide to AI services in Arkansas. Learn about the leading Artificial Intelligence Company In Arkansas, AI development services, machine learning solutions, and how Arkansas businesses benefit from AI implementation.",
            "image": "https://metic.ai/arkansas-ai-company-services.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Arkansas",
              "url": "https://metic.ai"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Metic.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metic.ai/logo.png",
                "width": 200,
                "height": 60
              }
            },
            "datePublished": "2024-01-15",
            "dateModified": "2024-10-30",
            "articleSection": "Artificial Intelligence Services",
            "keywords": [
              "Artificial Intelligence Company In Arkansas",
              "AI Company In Arkansas",
              "AI Service In Arkansas", 
              "AI Development Company In Arkansas",
              "Arkansas AI services"
            ],
            "about": {
              "@type": "Thing",
              "name": "Artificial Intelligence Services In Arkansas"
            },
            "mentions": [
              {
                "@type": "Place",
                "name": "Little Rock, Arkansas"
              },
              {
                "@type": "Place", 
                "name": "Bentonville, Arkansas"
              },
              {
                "@type": "Organization",
                "name": "Arkansas Economic Development Commission"
              }
            ],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-arkansas/"
            }
          })
        }}
      />

      {/* Legacy Schema for Compatibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Metic.ai - Artificial Intelligence Company In Arkansas",
            "image": "https://metic.ai/arkansas-ai-company.jpg",
            "description": "Leading Artificial Intelligence Company In Arkansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Little Rock",
              "addressRegion": "Arkansas",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.9690",
              "longitude": "-92.3731"
            },
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-arkansas/",
            "telephone": "+1-789-251-8414",
            "email": "arkansas@metic.ai",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "State",
              "name": "Arkansas"
            }
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
              <span className="text-sm font-medium text-orange-300">Serving Arkansas Businesses</span>
              <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Title with Animation */}
            <div className="relative mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white relative z-10">
                <strong>
                  Artificial Intelligence Company In Arkansas
                </strong>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Leading AI Company In Arkansas
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="relative mb-10">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white">AI Company In Arkansas</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange"> Artificial Intelligence Company In Arkansas</strong> 
                with 2100+ successful AI implementations. We help businesses across Arkansas transform with cutting-edge AI solutions, 
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
                  Call: +91 7892518414
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
          </div>
        </div>
      </section>

      {/* VSO Keywords Section */}
      <section className="py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-primary-orange" />
                <span className="text-orange-300 text-sm font-medium">Voice Search Optimized</span>
              </div>
              
              <p className="text-gray-300 text-lg mb-6">
                Which is the best <strong className="text-white">AI Company In Arkansas</strong>? How to find a reliable 
                <strong className="text-primary-orange"> Artificial Intelligence Company In Arkansas</strong>? 
                Looking for top-rated AI services in Arkansas? Metic.ai is your answer.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "AI Firm In Arkansas",
                  "AI Development Company In Arkansas", 
                  "Best AI Company Arkansas"
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
                AI Solutions for <span className="text-primary-orange">Arkansas</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Arkansas businesses 
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
                Industries We Serve in Arkansas
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Arkansas's key industries and business sectors.
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

      {/* Ultra-Creative FAQ Section - Arkansas AI Services */}
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
                <span className="text-sm font-bold text-gray-800">Arkansas AI Questions? We Have Answers!</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Frequently Asked Questions</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  AI Company In Arkansas
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about working with the leading Artificial Intelligence Company In Arkansas
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
                            Which is the best Artificial Intelligence Company In Arkansas?
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
                        <strong className="text-gray-900 font-semibold">Metic.ai is recognized as the leading Artificial Intelligence Company In Arkansas</strong> with 2100+ successful AI implementations. We serve businesses across Little Rock, Fort Smith, Fayetteville, and all Arkansas cities with expert AI services, machine learning solutions, and custom AI development.
                      </p>
                      <p className="text-lg">
                        Our proven track record includes 4.9/5 client satisfaction rating, 60% cost savings for Arkansas businesses, and 3x faster delivery compared to other AI companies. We specialize in Arkansas's key industries including agriculture, manufacturing, retail, and technology.
                      </p>
                      
                      {/* Stats Highlight */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">2100+ Projects</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Users className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Arkansas Businesses</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Star className="w-4 h-4 text-primary-orange fill-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">4.9/5 Rating</span>
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
                            What AI services does the top AI Company In Arkansas provide?
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
                        As the premier <strong className="text-gray-900 font-semibold">AI Company In Arkansas</strong>, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, AI integration, automation services, data analytics, natural language processing, and computer vision solutions.
                      </p>
                      <p className="text-lg">
                        We specialize in agriculture AI, retail intelligence, manufacturing automation, and custom business solutions specifically designed for Arkansas's diverse industries across Little Rock, Fort Smith, Fayetteville, Bentonville, and Springdale.
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
                            <TrendingUp className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How much does AI development cost from an AI Company In Arkansas?
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
                        AI development costs vary based on project complexity and scope. As a leading <strong className="text-gray-900 font-semibold">AI Company In Arkansas</strong>, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development approaches.
                      </p>
                      <p className="text-lg">
                        We provide free consultations to Arkansas businesses to determine exact project costs, ROI projections, and implementation timelines tailored to your specific requirements in Little Rock, Fort Smith, or anywhere in Arkansas.
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
                            <Award className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Why choose Metic.ai as your Artificial Intelligence Company In Arkansas?
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
                        Metic.ai stands out as the top <strong className="text-gray-900 font-semibold">Artificial Intelligence Company In Arkansas</strong> because of our 2100+ successful implementations, 4.9/5 client satisfaction rating, 3x faster delivery, 60% cost savings, and deep understanding of Arkansas's business landscape.
                      </p>
                      <p className="text-lg">
                        We serve all major Arkansas cities including Little Rock, Fort Smith, Fayetteville, Bentonville, Springdale, and specialize in agriculture, manufacturing, retail, and technology sectors that drive Arkansas's economy.
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
                            <Clock className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How quickly can an AI Company In Arkansas implement AI solutions?
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
                        Metic.ai, the leading <strong className="text-gray-900 font-semibold">AI Company In Arkansas</strong>, delivers AI solutions 3x faster than industry average. Simple AI implementations can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 3-6 months.
                      </p>
                      <p className="text-lg">
                        Implementation timelines depend on Arkansas business requirements and integration complexity. We provide realistic timelines during our free consultation process for Little Rock, Fort Smith, and all Arkansas businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* Enhanced CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-primary-orange/20 max-w-2xl mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Have more questions about AI services in Arkansas?
                </h3>
                <p className="text-gray-600 mb-6">
                  Get answers from our Arkansas AI experts and discover how we can transform your business
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-primary-orange/90 hover:to-secondary-orange/90 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                    Speak with Arkansas AI Experts
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Company Authority */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Metic.ai - Arkansas's Leading <span className="text-primary-orange">AI Company</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Established as the premier <strong>Artificial Intelligence Company In Arkansas</strong>, Metic.ai has transformed over 2100 businesses across the state with cutting-edge AI solutions. From Little Rock's financial hub to Bentonville's retail innovation center, we understand Arkansas's unique business landscape.
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team of Arkansas-based AI experts specializes in developing custom artificial intelligence solutions that address the specific challenges faced by businesses in the Natural State. Whether you're in agriculture, manufacturing, retail, or technology, we deliver AI implementations that drive measurable results.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">Arkansas AI Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">98%</div>
                    <div className="text-sm text-gray-600">Client Success Rate</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about">
                    <Button variant="primary">
                      Learn More About Our AI Company
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">
                      Schedule Arkansas Consultation
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Arkansas Businesses Choose Metic.ai</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Arkansas-Focused Expertise</div>
                        <div className="text-orange-100 text-sm">Deep understanding of local business needs and regulations</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Proven Track Record</div>
                        <div className="text-orange-100 text-sm">2100+ successful AI implementations across Arkansas</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Faster Delivery</div>
                        <div className="text-orange-100 text-sm">3x faster implementation than traditional AI companies</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Cost-Effective Solutions</div>
                        <div className="text-orange-100 text-sm">60% cost savings with superior ROI</div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                What Arkansas Businesses Say About Our <span className="text-primary-orange">AI Company</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real testimonials from Arkansas businesses that transformed their operations with our AI solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Outstanding <strong>AI Company In Arkansas</strong>. Metic.ai transformed our retail operations with intelligent inventory management that reduced waste by 30% across our Bentonville locations."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Jennifer Walsh</div>
                  <div className="text-gray-500">Walmart Arkansas</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Best <strong>AI Development Company In Arkansas</strong>. Their agriculture AI solution increased our crop yield predictions by 75% and optimized our Fayetteville farming operations."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Robert Johnson</div>
                  <div className="text-gray-500">Arkansas Agricultural Cooperative</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Exceptional <strong>AI Service In Arkansas</strong>. Metic.ai's manufacturing AI platform boosted our production efficiency by 45% and reduced downtime at our Little Rock facility."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                  <div className="text-gray-500">Arkansas Steel Manufacturing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Partner with Arkansas's Leading <span className="text-white">AI Company</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ successful Arkansas businesses that chose Metic.ai as their <strong>Artificial Intelligence Company In Arkansas</strong>. 
              From Little Rock to Bentonville, we're transforming businesses with AI solutions that deliver real results. 
              Get your free consultation and discover why we're the top-rated <strong>AI Company In Arkansas</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Your Arkansas AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Arkansas AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Free AI Consultation</h3>
                <p className="text-orange-100 text-sm">Get expert advice on AI implementation for your Arkansas business</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom AI Solutions</h3>
                <p className="text-orange-100 text-sm">Tailored AI development for Arkansas's unique business landscape</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-orange-100 text-sm">Join 2100+ Arkansas businesses with successful AI implementations</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4 font-medium">
                Serving All Arkansas Cities - AI Company You Can Trust
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-orange-100 text-sm">
                <span className="bg-white/10 px-3 py-1 rounded-full">Little Rock AI Services</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Bentonville AI Company</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Fort Smith AI Development</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Fayetteville AI Solutions</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Springdale AI Firm</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Conway AI Services</span>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-orange-200 text-sm">
                  🏆 Arkansas's #1 Rated <strong>Artificial Intelligence Company</strong> | 4.9/5 Stars | 2100+ Projects | 60% Cost Savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
