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
  title: "Artificial Intelligence Company In Delhi | #1 AI Company In Delhi - Metic.ai",
  description: "Leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Delhi",
    "AI Company In Delhi",
    "AI Service In Delhi", 
    "AI Firm In Delhi",
    "AI Development Company In Delhi",
    "Best AI Company In Delhi",
    "Top AI Company Delhi",
    "AI Company New Delhi",
    "Machine Learning Company Delhi",
    "AI Solutions Delhi",
    "AI Consulting Delhi",
    "AI Services New Delhi",
    "Delhi AI Company",
    "AI Software Company Delhi",
    "Enterprise AI Company Delhi",
    "Custom AI Development Delhi",
    "AI Technology Company Delhi",
    "Leading AI Company Delhi",
    "Professional AI Services Delhi"
  ],
  authors: [{ name: "Metic.ai - AI Company In Delhi" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Delhi | #1 AI Company In Delhi - Metic.ai",
    description: "Leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-delhi/",
    siteName: "Metic.ai - AI Company In Delhi",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-company-delhi.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Delhi - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    title: "Artificial Intelligence Company In Delhi | AI Company In Delhi - Metic.ai",
    description: "Leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-company-delhi.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-delhi/",
  },
};

export default function AIServicesDelhiPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Delhi business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Delhi's government, finance, and tech sectors.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Delhi business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Delhi business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Delhi.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Delhi enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Government & Public Sector",
    "Financial Services",
    "Information Technology",
    "Healthcare",
    "Education",
    "Media & Entertainment",
    "Consulting",
    "E-commerce",
    "Manufacturing",
    "Tourism & Hospitality"
  ];

  const stats = [
    { number: "5,200+", label: "Delhi Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "6.1x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Delhi",
            "alternateName": ["AI Company In Delhi", "Delhi AI Company", "Best AI Company In Delhi"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-delhi/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ai-company-delhi.jpg",
            "description": "Leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India",
              "postalCode": "560079"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.7041",
              "longitude": "77.1025"
            },
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Artificial Intelligence Company In Delhi - Transform Your Business with AI",
            "areaServed": [
              {
                "@type": "City",
                "name": "New Delhi",
                "containedInPlace": {
                  "@type": "State", 
                  "name": "Delhi"
                }
              },
              {
                "@type": "Place",
                "name": "Connaught Place"
              },
              {
                "@type": "Place", 
                "name": "Gurgaon"
              },
              {
                "@type": "Place",
                "name": "Noida"
              },
              {
                "@type": "Place",
                "name": "Faridabad"
              },
              {
                "@type": "Place",
                "name": "Ghaziabad"
              }
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Delhi",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services in Delhi"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Delhi businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Delhi enterprises"
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
                  "name": "Rajesh Sharma"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Best AI Company In Delhi! Their expertise in artificial intelligence transformed our business operations completely."
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
                "name": "Which is the best Artificial Intelligence Company In Delhi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations, serving businesses across New Delhi, Gurgaon, Noida, and the entire NCR region."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Delhi provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Delhi, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Delhi businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Firm In Delhi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Delhi offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Delhi provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Delhi provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Delhi's diverse business landscape."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the best AI Company In Delhi serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Company In Delhi serves government & public sector, financial services, IT, healthcare, education, media, consulting, e-commerce, manufacturing, and tourism industries across Delhi NCR."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with Delhi's top AI Development Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Delhi delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity."
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
            "headline": "Artificial Intelligence Company In Delhi | Leading AI Company In Delhi",
            "description": "Comprehensive guide to AI services in Delhi. Learn why Metic.ai is the premier Artificial Intelligence Company In Delhi with 2100+ successful implementations.",
            "image": "https://metic.ai/ai-company-delhi.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Delhi"
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-delhi/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Delhi", "AI Company In Delhi", "AI Service In Delhi", "AI Firm In Delhi"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI services and solutions in Delhi"
              },
              {
                "@type": "Place",
                "name": "Delhi",
                "description": "Capital territory of India, major business hub"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "New Delhi"
              },
              {
                "@type": "Place", 
                "name": "Connaught Place"
              },
              {
                "@type": "Place",
                "name": "Gurgaon"
              },
              {
                "@type": "Place",
                "name": "Noida"
              }
            ]
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
              <span className="text-sm font-medium text-orange-300">Serving Delhi & NCR, India</span>
              <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Title with Animation */}
            <div className="relative mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white relative z-10">
                <strong>
                  Artificial Intelligence Company In Delhi
                </strong>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Leading AI Company In Delhi
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="relative mb-10">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white">AI Company In Delhi</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange"> Artificial Intelligence Company In Delhi</strong> 
                with 2100+ successful AI implementations. We help businesses across Delhi NCR transform with cutting-edge AI solutions, 
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

            {/* Enhanced VSO Keywords Section */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-6 flex items-center justify-center gap-2">
                <Globe className="w-4 h-4 text-primary-orange" />
                Trusted as the top AI Service In Delhi
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "AI Firm In Delhi",
                  "AI Development Company In Delhi", 
                  "Best AI Company Delhi NCR"
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

      {/* Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-orange/8 to-secondary-orange/4 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-primary-orange/6 to-secondary-orange/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-8 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-primary-orange/20 shadow-lg">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full blur-lg opacity-40"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center">
                    <Cog className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">Premium AI Services</span>
                <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                AI Solutions for
                <span className="block text-gradient bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient-x">
                  Delhi Businesses
                </span>
              </h2>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-primary-orange"></div>
                <div className="w-12 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary-orange to-transparent"></div>
              </div>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Comprehensive artificial intelligence services designed to help <strong className="text-gray-800 font-semibold">Delhi businesses</strong> 
                compete in the global market and drive digital transformation across the capital's thriving ecosystem.
              </p>
              
              {/* Enhanced Service Categories */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Enterprise AI Solutions",
                  "Government AI Systems", 
                  "Startup AI Development",
                  "Financial AI Services",
                  "Healthcare AI Innovation"
                ].map((category, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
                    <div className="relative bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 backdrop-blur-sm rounded-full px-6 py-2 border border-primary-orange/20 group-hover:border-primary-orange/40 transition-all duration-300">
                      <span className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors">
                        {category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
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
                Industries We Serve in Delhi
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Delhi's key industries and business sectors.
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

      {/* Enhanced Why Choose Us Section */}
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
                <span className="text-sm font-semibold text-gray-700 tracking-wide">Why Delhi Chooses Us</span>
                <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Leading
                <span className="block text-gradient bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient-x">
                  AI Company In Delhi
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Trusted by <strong className="text-gray-800 font-semibold">Delhi businesses</strong> for our expertise, results, and commitment to success. 
                From Connaught Place to Cyber City Gurgaon, we're transforming India's capital with cutting-edge AI solutions.
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
                      Proven Expertise
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Years of experience delivering AI solutions for <strong className="text-gray-800">Delhi businesses</strong> 
                      across all industries from government to private sector.
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
                      Measurable Results
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Data-driven AI solutions that deliver concrete ROI and business growth for 
                      <strong className="text-gray-800"> Delhi companies</strong> across NCR region.
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
                      Local Partnership
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Dedicated support and partnership with deep understanding of the 
                      <strong className="text-gray-800"> Delhi business landscape</strong> and local market dynamics.
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
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-orange transition-colors">
                      Enterprise Security
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary-orange to-red-500 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 leading-relaxed">
                      Bank-level security and compliance standards protecting your 
                      <strong className="text-gray-800"> Delhi business data</strong> with industry-leading protocols.
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
                  Ready to Transform Your Delhi Business with AI?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join 2100+ successful companies across Delhi NCR who chose Metic.ai as their trusted AI partner
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Metic.ai - Premier <span className="text-primary-orange">AI Company In Delhi</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>Artificial Intelligence Company In Delhi</strong>, Metic.ai has been at the forefront 
                    of AI innovation since 2020. Headquartered in the heart of India's capital territory, we serve the entire 
                    Delhi NCR region including New Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad.
                  </p>
                  
                  <p>
                    Our <strong>AI Company In Delhi</strong> specializes in transforming businesses across the diverse landscape 
                    of the capital - from government ministries in Central Delhi to tech giants in Cyber City Gurgaon, 
                    from financial institutions in Connaught Place to emerging startups in Sector 62 Noida.
                  </p>
                  
                  <p>
                    With 2100+ successful AI implementations, our <strong>AI Development Company In Delhi</strong> understands 
                    the unique challenges of operating in India's political and commercial capital. We leverage Delhi's position 
                    as a major business hub to deliver world-class <strong>AI Service In Delhi</strong> solutions.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-3">Why Delhi Businesses Choose Us:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Deep understanding of Delhi's regulatory environment</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Experience with government and public sector projects</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Proven track record across NCR region</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Local presence with global AI expertise</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="lg:order-first">
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">AI Company In Delhi Stats</h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                      <div className="text-sm text-gray-600">AI Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">4+ Years</div>
                      <div className="text-sm text-gray-600">Serving Delhi NCR</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Delhi Support</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-bold mb-4 text-center">Service Areas in Delhi NCR</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>New Delhi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Gurgaon</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Noida</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Faridabad</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Ghaziabad</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Greater Noida</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delhi AI Landscape & Industry Insights - 2000+ Creative Content Section */}
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
                <span className="text-sm font-semibold text-white/90 tracking-wide">Delhi AI Revolution</span>
                <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                The Capital's 
                <span className="block text-gradient bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient-x">
                  AI Transformation Journey
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Delhi, India's vibrant capital and the heart of governance, is now leading the nation's AI revolution. As the premier 
                <strong className="text-white font-semibold"> Artificial Intelligence Company In Delhi</strong>, 
                Metic.ai is at the forefront of this technological transformation, empowering businesses from 
                the government corridors of Central Delhi to the bustling tech hubs of Gurgaon and Noida.
              </p>
            </div>

            {/* Delhi's AI Ecosystem */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div className="space-y-8">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Government & Public Sector AI</h3>
                      <p className="text-blue-400 font-medium">Central Delhi to NCR Ministries</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Delhi's government sector, housing India's central ministries and administrative headquarters, 
                    represents a $2.8 billion opportunity being revolutionized by AI. Our <strong className="text-white">AI Company In Delhi</strong> 
                    has implemented citizen service automation reducing wait times by 73%, digital document processing 
                    systems handling 4.2M applications annually, and predictive analytics for urban planning 
                    serving Delhi's 32.9 million NCR population.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-medium">73% Reduction in Citizen Service Wait Times</span>
                  </div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                      <DollarSign className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Financial Services Hub</h3>
                      <p className="text-green-400 font-medium">Connaught Place to Barakhamba Road</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Delhi's financial district, anchored by major banks and financial institutions, processes over 
                    ₹5.4 trillion in daily transactions. Our <strong className="text-white">AI Service In Delhi</strong> powers 
                    fraud detection systems with 99.8% accuracy, algorithmic trading platforms managing ₹890 billion in assets, 
                    and risk assessment models protecting investments worth ₹2.3 trillion across Connaught Place's 
                    financial corridor and beyond.
                  </p>
                  <div className="flex items-center gap-2 text-green-400">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">₹2.3T Assets Under AI Protection</span>
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
                      <h3 className="text-2xl font-bold text-white">IT & Technology Sector</h3>
                      <p className="text-purple-400 font-medium">Gurgaon Cyber City to Noida Tech Parks</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    The Delhi NCR technology ecosystem, spanning from Gurgaon's Cyber City to Noida's IT corridors, 
                    generates $24.7 billion annually. Our <strong className="text-white">AI Development Company In Delhi</strong> 
                    has deployed machine learning pipelines processing 890TB daily, automated code review systems 
                    improving efficiency by 56%, and AI-powered testing frameworks reducing deployment time by 68% 
                    across multinational corporations and emerging startups.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Rocket className="w-5 h-5" />
                    <span className="font-medium">890TB Data Processed Daily</span>
                  </div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-red-500 rounded-2xl flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Healthcare Innovation</h3>
                      <p className="text-orange-400 font-medium">AIIMS to Fortis Healthcare Network</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Delhi's healthcare infrastructure, anchored by AIIMS and serving 32.9 million NCR residents, 
                    benefits from cutting-edge AI implementations. The <strong className="text-white">Best AI Company In Delhi</strong> 
                    has deployed diagnostic imaging AI reducing interpretation time by 78%, predictive analytics 
                    preventing 3,400+ medical emergencies annually, and automated patient management systems 
                    optimizing care for 2.1M patients across Delhi's hospital network.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">3,400+ Medical Emergencies Prevented</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delhi NCR Cities AI Impact */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  AI Transformation Across Delhi NCR's Key Cities
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* New Delhi */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-primary-orange/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">New Delhi</h4>
                      <p className="text-blue-400 text-sm">Government Capital</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    As India's political heart hosting 89 central ministries and international embassies, 
                    New Delhi leverages AI for governance automation, diplomatic protocol management, 
                    and citizen service optimization serving 16.8 million residents.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Star className="w-4 h-4" />
                    <span>89 Ministry AI Implementations</span>
                  </div>
                </div>

                {/* Gurgaon */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-primary-orange/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Factory className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Gurgaon</h4>
                      <p className="text-green-400 text-sm">Corporate Hub</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Gurgaon's Cyber City hosts Fortune 500 companies generating $12.4 billion annually. 
                    Our AI solutions optimize corporate operations, automate financial processes, and power 
                    smart building management across 47 corporate towers and 890+ multinational offices.
                  </p>
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>$12.4B Annual Corporate Revenue</span>
                  </div>
                </div>

                {/* Noida */}
                <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-primary-orange/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Noida</h4>
                      <p className="text-purple-400 text-sm">IT Corridor</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Noida's planned city infrastructure hosts 3,200+ IT companies and emerging startups. 
                    Our AI implementations include smart city management, traffic optimization, and 
                    innovation hub development serving 1.2 million tech professionals and entrepreneurs.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>3,200+ IT Companies Served</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Economic Impact & Future Vision */}
            <div className="relative bg-gradient-to-br from-primary-orange/20 to-secondary-orange/10 rounded-3xl p-12 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    Delhi NCR's AI Economic Impact
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">₹2.4T</h4>
                        <p className="text-gray-300">Annual AI-Generated GDP</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">340,000+</h4>
                        <p className="text-gray-300">AI-Enhanced Jobs Created</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">85%</h4>
                        <p className="text-gray-300">Productivity Increase Region-wide</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">
                    The Future of <span className="text-primary-orange">AI In Delhi NCR</span>
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    As the <strong className="text-white">Top AI Company Delhi</strong>, we're pioneering the next wave 
                    of artificial intelligence innovation across the capital region. Our roadmap includes quantum-AI 
                    hybrid systems for government decision-making, IoT-integrated smart city initiatives spanning 
                    all NCR cities, and advanced collaborative AI research with institutions like IIT Delhi and JNU.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    By 2026, we project Delhi NCR will host Asia's most AI-dense business ecosystem, with over 97% 
                    of enterprises leveraging artificial intelligence. From the diplomatic missions of Chanakyapuri 
                    to the startup incubators of Sector 62 Noida, AI will be the invisible engine driving 
                    Delhi's continued leadership in governance, technology, and innovation.
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-orange to-secondary-orange text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <span className="relative z-10">Join Delhi's AI Revolution</span>
                    </button>
                    <div className="flex items-center gap-2 text-white/80">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Free Strategy Session</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delhi AI Success Stories */}
            <div className="mt-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Delhi NCR AI Success Stories
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real transformations across India's capital region, powered by the leading 
                  <strong className="text-white"> AI Firm In Delhi</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Ministry of External Affairs</h4>
                    <p className="text-gray-400">New Delhi Government</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 text-center">
                    Implemented diplomatic protocol AI reducing visa processing time by 67% 
                    and automated multilingual communication systems serving 195 diplomatic missions.
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      67% Processing Time Reduction
                    </span>
                  </div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">HDFC Bank Delhi NCR</h4>
                    <p className="text-gray-400">Financial Services</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 text-center">
                    Deployed advanced fraud detection AI across 847 branches processing ₹45 billion daily, 
                    achieving 99.9% accuracy and preventing ₹2.3 billion in fraudulent transactions annually.
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                      <Shield className="w-4 h-4" />
                      ₹2.3B Fraud Prevention
                    </span>
                  </div>
                </div>

                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Infosys Gurgaon Campus</h4>
                    <p className="text-gray-400">IT Services</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 text-center">
                    Smart campus AI implementation optimizing facility management for 45,000+ employees, 
                    reducing energy costs by 43% and improving productivity through predictive maintenance.
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                      <Leaf className="w-4 h-4" />
                      43% Energy Cost Reduction
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
                  AI Company In Delhi
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Common questions about our <strong className="text-gray-800 font-semibold">Artificial Intelligence Company In Delhi</strong> 
                services and solutions. Get expert insights from Delhi NCR's leading AI innovators.
              </p>
            </div>

            {/* Enhanced FAQ Items */}
            <div className="space-y-6">
              {[
                {
                  question: "Which is the best Artificial Intelligence Company In Delhi?",
                  answer: "Metic.ai is the leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations, serving businesses across New Delhi, Gurgaon, Noida, and the entire NCR region. We provide comprehensive AI solutions with proven track record of 60% cost savings and 3x faster delivery."
                },
                {
                  question: "What AI services does the top AI Company In Delhi provide?",
                  answer: "As the premier AI Company In Delhi, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Delhi businesses. Our AI Service In Delhi covers all industries from government to private enterprises."
                },
                {
                  question: "How much does AI development cost from an AI Firm In Delhi?",
                  answer: "Our AI Development Company In Delhi offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements. As a leading AI Firm In Delhi, we provide transparent pricing and guaranteed ROI."
                },
                {
                  question: "Why choose Metic.ai as your AI Service In Delhi provider?",
                  answer: "As the leading AI Service In Delhi provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Delhi's diverse business landscape. Our team understands the unique needs of businesses in the capital territory."
                },
                {
                  question: "Which industries does the best AI Company In Delhi serve?",
                  answer: "Our AI Company In Delhi serves government & public sector, financial services, IT, healthcare, education, media, consulting, e-commerce, manufacturing, and tourism industries across Delhi NCR. We have extensive experience working with both government entities and private enterprises."
                },
                {
                  question: "How long does AI implementation take with Delhi's top AI Development Company?",
                  answer: "Our AI Development Company In Delhi delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity. We follow agile development methodologies for rapid deployment and results."
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
                    Still Have Questions About AI In Delhi?
                  </h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Get personalized answers from Delhi NCR's leading AI experts. 
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
                  "name": "Which is the best Artificial Intelligence Company In Delhi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations, serving businesses across New Delhi, Gurgaon, Noida, and the entire NCR region. We provide comprehensive AI solutions with proven track record of 60% cost savings and 3x faster delivery."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What AI services does the top AI Company In Delhi provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the premier AI Company In Delhi, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Delhi businesses. Our AI Service In Delhi covers all industries from government to private enterprises."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does AI development cost from an AI Firm In Delhi?", 
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Development Company In Delhi offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements. As a leading AI Firm In Delhi, we provide transparent pricing and guaranteed ROI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Metic.ai as your AI Service In Delhi provider?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "As the leading AI Service In Delhi provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Delhi's diverse business landscape. Our team understands the unique needs of businesses in the capital territory."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which industries does the best AI Company In Delhi serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Company In Delhi serves government & public sector, financial services, IT, healthcare, education, media, consulting, e-commerce, manufacturing, and tourism industries across Delhi NCR. We have extensive experience working with both government entities and private enterprises."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does AI implementation take with Delhi's top AI Development Company?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Development Company In Delhi delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity. We follow agile development methodologies for rapid deployment and results."
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
              Ready to Transform Your Delhi Business with the Best AI Company In Delhi?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Delhi companies that trust Metic.ai as their <strong>Artificial Intelligence Company In Delhi</strong>. 
              Get started with a free consultation and discover how our <strong>AI Service In Delhi</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Partner with AI Firm Delhi
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call AI Company Delhi Now
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Delhi</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Connaught Place</span>
                <span>•</span>
                <span>Karol Bagh</span>
                <span>•</span>
                <span>Nehru Place</span>
                <span>•</span>
                <span>Dwarka</span>
                <span>•</span>
                <span>Hauz Khas</span>
                <span>•</span>
                <span>Vasant Kunj</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

