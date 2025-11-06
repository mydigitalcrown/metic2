import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Activity,
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  ChevronRight,
  ChevronDown,
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
  Play,
  Quote,
  Building,
  Trophy
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Illinois | #1 AI Company In Illinois - Metic.ai",
  description: "Leading Artificial Intelligence Company In Illinois with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Illinois",
    "AI Company In Illinois", 
    "AI Service In Illinois",
    "AI Firm In Illinois",
    "AI Development Company In Illinois",
    "Best AI Company In Illinois",
    "Top AI Company Illinois",
    "Machine Learning Company Illinois",
    "AI Consulting Illinois",
    "Custom AI Development Illinois", 
    "AI Solutions Illinois",
    "AI Automation Illinois",
    "Enterprise AI Illinois",
    "Chicago AI Company",
    "Illinois AI Services",
    "AI Technology Illinois",
    "Data Analytics Illinois",
    "Predictive Analytics Illinois",
    "Computer Vision Illinois"
  ],
  authors: [{ name: "Metic.ai Illinois AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Illinois | #1 AI Company In Illinois - Metic.ai",
    description: "Leading Artificial Intelligence Company In Illinois with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-illinois/",
    siteName: "Metic.ai - AI Company In Illinois",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-illinois.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Illinois - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Illinois | #1 AI Company In Illinois - Metic.ai",
    description: "Leading Artificial Intelligence Company In Illinois with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-services-illinois.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-illinois/",
  },
};

export default function AIServicesIllinoisPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Illinois business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Illinois businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Illinois business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Illinois business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Illinois.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Illinois enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Manufacturing",
    "Financial Services",
    "Agriculture",
    "Technology",
    "Healthcare",
    "Transportation",
    "Energy",
    "Aerospace",
    "Retail",
    "Education"
  ];

  const stats = [
    { number: "1,250+", label: "IL Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.5x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Illinois",
            "description": "Leading Artificial Intelligence Company In Illinois with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-illinois/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-illinois.jpg",
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "slogan": "Artificial Intelligence Company In Illinois - Transform Your Business with AI",
            "foundingDate": "2020",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Illinois",
              "addressCountry": "US",
              "addressLocality": "Chicago"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.8781",
              "longitude": "-87.6298"
            },
            "areaServed": [
              "Chicago", "Aurora", "Rockford", "Joliet", "Naperville", 
              "Springfield", "Peoria", "Elgin", "Waukegan", "Cicero",
              "Champaign", "Bloomington", "Arlington Heights", "Evanston", "Decatur", "Illinois"
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Company In Illinois Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions designed specifically for Illinois businesses"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Advanced ML algorithms and predictive analytics for Illinois enterprises"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "AI Integration & Deployment",
                    "description": "Seamless AI integration for Illinois business operations"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1250",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Michael Chen"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Best AI Company In Illinois! Their expertise in artificial intelligence transformed our Chicago-based fintech operations completely."
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
                "name": "Which is the best AI Company In Illinois?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Illinois with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and AI consulting for Illinois businesses with 60% cost savings and 3x faster delivery."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does this AI Service In Illinois provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Illinois, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Illinois businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Development Company In Illinois?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Illinois offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Illinois provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the Top AI Company Illinois, we offer 2100+ successful projects, 60% cost savings, 3x faster delivery, dedicated Illinois team, 24/7 support, and cutting-edge AI solutions tailored for Illinois's diverse economy including finance, manufacturing, and agriculture."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with your AI Firm In Illinois?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Firm In Illinois delivers projects 3x faster than industry average. Simple AI integrations take 2-4 weeks, while complex custom AI development projects typically take 8-16 weeks depending on scope and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide AI consulting services for Illinois businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our Best AI Company In Illinois provides comprehensive AI consulting including strategy development, technology assessment, implementation roadmaps, and ongoing optimization for businesses across Chicago, Springfield, and all of Illinois."
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
            "headline": "Artificial Intelligence Company In Illinois | Leading AI Services & Development",
            "description": "Leading Artificial Intelligence Company In Illinois with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "image": "https://metic.ai/og-ai-services-illinois.jpg",
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-illinois/"
            },
            "articleSection": "Artificial Intelligence Services",
            "keywords": "Artificial Intelligence Company In Illinois, AI Company In Illinois, AI Service In Illinois, AI Firm In Illinois, AI Development Company In Illinois",
            "about": {
              "@type": "Thing",
              "name": "Artificial Intelligence Services in Illinois",
              "description": "Professional AI development and consulting services for Illinois businesses"
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
              <span className="text-sm font-medium text-orange-300">Serving Illinois, Chicago, USA</span>
              <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Title with Animation */}
            <div className="relative mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white relative z-10">
                <strong>
                  Artificial Intelligence Company In Illinois
                </strong>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Leading AI Company In Illinois
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="relative mb-10">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white">AI Company In Illinois</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange"> Artificial Intelligence Company In Illinois</strong> 
                with 2100+ successful AI implementations. We help businesses across Illinois transform with cutting-edge AI solutions, 
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
              <div className="inline-flex flex-wrap gap-3 justify-center">
                {["AI Service In Illinois", "Best AI Company Illinois", "Illinois AI Development", "Chicago AI Solutions"].map((keyword, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-800/40 backdrop-blur-sm text-orange-300 text-sm rounded-full border border-primary-orange/20 hover:border-primary-orange/40 transition-colors">
                    {keyword}
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
                <strong>AI Services</strong> by Leading <span className="text-primary-orange">Artificial Intelligence Company In Illinois</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services from Illinois's most trusted <strong>AI Company In Illinois</strong>. 
                Transforming businesses with cutting-edge AI solutions tailored for the Prairie State's diverse industrial landscape.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses = {
                  blue: "bg-blue-100 text-blue-600 group-hover:bg-primary-orange/10 group-hover:text-primary-orange",
                  purple: "bg-purple-100 text-purple-600 group-hover:bg-primary-orange/10 group-hover:text-primary-orange", 
                  green: "bg-green-100 text-green-600 group-hover:bg-primary-orange/10 group-hover:text-primary-orange",
                  orange: "bg-orange-100 text-orange-600 group-hover:bg-primary-orange/10 group-hover:text-primary-orange",
                  indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-primary-orange/10 group-hover:text-primary-orange",
                  red: "bg-red-100 text-red-600 group-hover:bg-primary-orange/10 group-hover:text-primary-orange"
                };
                
                return (
                  <div key={index} className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary-orange/30 transform hover:-translate-y-2 hover:scale-105">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${colorClasses[service.color]}`}>
                      <IconComponent className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                    
                    <Link href={service.href} className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
                Industries We Serve in Illinois
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Illinois's key industries and business sectors.
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
                  AI Firm In Illinois
                </span>
                <br />
                <span className="text-gray-300 text-3xl md:text-4xl lg:text-5xl">Transforming Prairie State's Future</span>
              </h2>
              
              <div className="w-40 h-2 bg-gradient-to-r from-transparent via-primary-orange to-transparent mx-auto mb-12 rounded-full"></div>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                As the most <span className="text-primary-orange font-semibold">trusted AI Company In Illinois</span>, 
                we combine world-class artificial intelligence expertise with deep understanding of Illinois's diverse business landscape. 
                From Chicago's financial corridors to agricultural innovations across the Prairie State, 
                our <span className="text-orange-400 font-semibold">AI Service In Illinois</span> transforms enterprises 
                with measurable results and sustainable growth.
              </p>
            </div>

            {/* Ultra-Creative Features Grid */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              {/* Left Side - Stats & Achievements */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-orange-600/5 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-600 rounded-xl flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Illinois AI Leadership</h3>
                        <p className="text-orange-300 text-sm">Pioneering Innovation Since 2020</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 bg-gray-700/30 rounded-2xl">
                        <div className="text-3xl font-bold text-primary-orange mb-2">1,250+</div>
                        <div className="text-sm text-gray-400">Illinois Projects</div>
                      </div>
                      <div className="text-center p-4 bg-gray-700/30 rounded-2xl">
                        <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                        <div className="text-sm text-gray-400">Success Rate</div>
                      </div>
                      <div className="text-center p-4 bg-gray-700/30 rounded-2xl">
                        <div className="text-3xl font-bold text-primary-orange mb-2">$50M+</div>
                        <div className="text-sm text-gray-400">Client Savings</div>
                      </div>
                      <div className="text-center p-4 bg-gray-700/30 rounded-2xl">
                        <div className="text-3xl font-bold text-primary-orange mb-2">24/7</div>
                        <div className="text-sm text-gray-400">Support</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-primary-orange/5 rounded-3xl blur-xl"></div>
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <div className="flex items-start gap-4">
                      <Quote className="w-8 h-8 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-300 text-lg italic mb-4 leading-relaxed">
                          "Best AI Company In Illinois! Their expertise transformed our Chicago-based fintech operations completely. 
                          The team understands both cutting-edge AI and the Illinois business landscape perfectly."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">MC</span>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Michael Chen</div>
                            <div className="text-orange-300 text-sm">CTO, Chicago FinTech Innovations</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Key Advantages */}
              <div className="space-y-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-orange-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-primary-orange/30 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Proven Illinois Expertise</h3>
                        <p className="text-gray-400 leading-relaxed">
                          Deep experience serving Illinois's diverse economy - from Chicago's financial district to agricultural innovation 
                          across the Prairie State. Our <strong className="text-primary-orange">AI Development Company In Illinois</strong> 
                          delivers solutions tailored to local market needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-orange-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-primary-orange/30 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Measurable ROI Results</h3>
                        <p className="text-gray-400 leading-relaxed">
                          Data-driven AI implementations delivering 60% cost savings and 3x faster delivery. Our track record 
                          across Illinois enterprises proves consistent value creation and business transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-orange-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-primary-orange/30 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Enterprise-Grade Security</h3>
                        <p className="text-gray-400 leading-relaxed">
                          Bank-level security standards protecting Illinois business data. ISO-certified processes and 
                          compliance expertise ensure your AI implementation meets the highest security requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-orange-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-primary-orange/30 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Local Partnership Approach</h3>
                        <p className="text-gray-400 leading-relaxed">
                          Dedicated Illinois-based support combining global AI expertise with Midwestern values. 
                          We're your long-term technology partner, invested in your success and the growth of Illinois business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 to-orange-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-primary-orange/30">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Transform Your Illinois Business with AI?
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Join 1,250+ Illinois companies already benefiting from our AI solutions. 
                    Let's discuss how artificial intelligence can accelerate your business growth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button 
                        variant="primary" 
                        size="lg"
                        className="bg-gradient-to-r from-primary-orange to-orange-500 hover:from-primary-orange/90 hover:to-orange-500/90 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                      >
                        <Rocket className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        Start Your AI Journey
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-primary-orange text-primary-orange hover:bg-primary-orange/10 transform hover:scale-105 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Schedule Consultation
                      </Button>
                    </Link>
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Premier <span className="text-primary-orange">Artificial Intelligence Company In Illinois</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As the leading <strong>AI Company In Illinois</strong>, Metic.ai has been transforming businesses across the Prairie State since 2020. From the financial corridors of Chicago's Loop to the manufacturing hubs across central Illinois, we've established ourselves as the go-to <strong>AI Service In Illinois</strong> provider for enterprises seeking cutting-edge artificial intelligence solutions.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong>AI Firm In Illinois</strong> specializes in serving the unique needs of Illinois's diverse economy. Whether you're a fintech company in Chicago's downtown core, a manufacturing enterprise in Rockford, a healthcare organization in Springfield, or an agricultural technology company in the state's farming regions, our <strong>AI Development Company In Illinois</strong> delivers tailored solutions that drive measurable results.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    With deep roots in Illinois's business ecosystem, we understand the challenges and opportunities that define the Prairie State. Our team combines global AI expertise with local market knowledge, making us the <strong>Best AI Company In Illinois</strong> for businesses ready to embrace the future of technology while maintaining the Midwestern values of reliability, innovation, and practical results that Illinois businesses are known for.
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
                    <div className="text-2xl font-bold text-primary-orange mb-2">300+</div>
                    <div className="text-gray-600">Illinois Clients Served</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Chicago Financial District Expertise</h4>
                      <p className="text-gray-600 text-sm">Deep understanding of Chicago's finance sector and fintech innovation ecosystem</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Manufacturing & Industrial AI</h4>
                      <p className="text-gray-600 text-sm">Specialized AI solutions for Illinois's robust manufacturing and industrial sectors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Agriculture Technology Innovation</h4>
                      <p className="text-gray-600 text-sm">AI implementations for Illinois's leading agricultural and agtech companies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Healthcare & Research AI</h4>
                      <p className="text-gray-600 text-sm">Advanced AI solutions for Illinois's healthcare providers and research institutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Transportation & Logistics</h4>
                      <p className="text-gray-600 text-sm">AI-powered solutions for Illinois's central role in US transportation and logistics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Services Illinois Content - SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Illinois AI Market Leadership */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Premier </span>
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Artificial Intelligence Company In Illinois
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powering the Prairie State's economic hub from Chicago's financial district to the innovation corridors of the Midwest
              </p>
            </div>

            <div className="space-y-16">
              {/* Illinois AI Innovation Hub */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Illinois's <span className="text-primary-orange">Leading AI Technology Provider</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As the premier <strong className="text-gray-900">Artificial Intelligence Company In Illinois</strong>, Metic.ai 
                    serves the heartland of America with enterprise-grade AI solutions tailored to Illinois's diverse economic 
                    landscape. From Chicago's Loop financial district to the state's agricultural regions, Rockford's manufacturing 
                    centers to Peoria's industrial corridors, we understand Illinois's unique business environment.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Company In Illinois</strong> combines deep Midwest business 
                    expertise with cutting-edge technology to deliver AI solutions that drive measurable results. We've successfully 
                    implemented AI across Illinois's key sectors including finance, manufacturing, agriculture, transportation, 
                    healthcare, and technology.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Chicago Financial Expertise</h4>
                        <p className="text-sm text-gray-600">
                          Deep experience with CME Group, futures trading, derivatives, and Midwest financial institutions
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Manufacturing Excellence</h4>
                        <p className="text-sm text-gray-600">
                          Industrial AI solutions for Illinois's machinery, automotive, and heavy equipment manufacturers
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Agricultural Innovation</h4>
                        <p className="text-sm text-gray-600">
                          Smart farming AI for Illinois's corn belt and agricultural technology advancement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-primary-orange/20">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    Illinois AI Market Impact
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">$900B</div>
                      <div className="text-sm text-gray-600 font-medium">Illinois GDP (5th largest in US)</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-secondary-orange mb-2">12.6M</div>
                      <div className="text-sm text-gray-600 font-medium">Illinois Population</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">420+</div>
                      <div className="text-sm text-gray-600 font-medium">Illinois AI Projects Completed</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-4 border-l-4 border-primary-orange">
                      <p className="text-sm font-medium text-gray-900">
                        <strong>Illinois Advantage:</strong> Strategic Midwest location with world-class financial 
                        markets and agricultural leadership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Illinois Industry Solutions */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  AI Solutions for <span className="text-primary-orange">Illinois's Key Industries</span>
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Advanced AI solutions for Chicago's financial district including CME Group, futures trading, 
                      derivatives markets, banking institutions, and fintech companies driving global commodity 
                      and financial markets.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Algorithmic trading systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Risk management automation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Market prediction models
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Industrial AI solutions for Illinois's manufacturing sector including automotive parts, 
                      machinery production, food processing, and heavy equipment manufacturing across 
                      the state's industrial corridors.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Predictive maintenance systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Quality control automation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Production optimization
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Agriculture & Food</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Smart agriculture AI solutions for Illinois's corn belt including crop optimization, 
                      livestock management, food processing automation, and agricultural technology advancement 
                      for America's agricultural heartland.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Crop yield prediction
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Precision farming systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Food processing automation
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Transportation & Logistics</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI solutions for Illinois's strategic transportation hub including Chicago's rail networks, 
                      O'Hare International Airport, inland ports, and logistics companies serving America's 
                      distribution center.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Route optimization systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Warehouse automation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Supply chain intelligence
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Medical AI solutions for Illinois's healthcare systems including Chicago's medical centers, 
                      research hospitals, pharmaceutical companies, and rural health networks serving 
                      patients across the Midwest.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Medical diagnostics AI
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Patient care optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Drug research acceleration
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Technology</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI solutions for Illinois's growing tech sector including Chicago's tech corridor, 
                      software companies, telecommunications providers, and digital innovation hubs 
                      driving Midwest technology advancement.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Software development automation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Network optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Digital transformation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Illinois AI Success Stories */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-12 border-2 border-primary-orange/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Illinois AI Implementation <span className="text-primary-orange">Success Stories</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary-orange">FT</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Financial Trading Firm</h4>
                        <p className="text-sm text-gray-600">Chicago Derivatives Trader</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Best AI Company In Illinois for financial markets! Their trading algorithms increased our 
                      profit margins by 42%. Perfect understanding of Chicago's commodity markets."
                    </p>
                    <div className="text-3xl font-bold text-primary-orange">42%</div>
                    <div className="text-sm text-gray-600">Profit Margin Increase</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-secondary-orange">MF</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Manufacturing Firm</h4>
                        <p className="text-sm text-gray-600">Illinois Industrial Company</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Outstanding AI Development Company In Illinois! Their predictive maintenance AI reduced 
                      downtime by 55%. Exceptional manufacturing expertise."
                    </p>
                    <div className="text-3xl font-bold text-secondary-orange">55%</div>
                    <div className="text-sm text-gray-600">Downtime Reduction</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary-orange">AG</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Agricultural Cooperative</h4>
                        <p className="text-sm text-gray-600">Illinois Farming Network</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Leading Artificial Intelligence Company In Illinois for agriculture! Their crop AI 
                      increased yields by 28% while reducing resource consumption significantly."
                    </p>
                    <div className="text-3xl font-bold text-primary-orange">28%</div>
                    <div className="text-sm text-gray-600">Crop Yield Increase</div>
                  </div>
                </div>
              </div>

              {/* Illinois AI Partnership Excellence */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Illinois AI Leadership Metrics</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Illinois Projects Completed</span>
                        <span className="font-bold text-primary-orange">420+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Manufacturing Success Rate</span>
                        <span className="font-bold text-secondary-orange">100%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average ROI for IL Clients</span>
                        <span className="font-bold text-primary-orange">4.4x</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Client Retention Rate</span>
                        <span className="font-bold text-secondary-orange">95%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-6 border-l-4 border-primary-orange">
                    <h4 className="font-bold text-gray-900 mb-2">Illinois Business Advantage</h4>
                    <p className="text-sm text-gray-700">
                      As the premier AI Firm In Illinois, we understand the Prairie State's unique position 
                      as America's transportation hub and agricultural center. Our AI solutions are built 
                      for Illinois reliability and efficiency.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Your Trusted <span className="text-primary-orange">AI Partner In Illinois</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-gray-900">Choosing Metic.ai as your AI partner in Illinois</strong> means working with 
                    a team that understands the Midwest business culture, from Chicago's financial sophistication to 
                    the state's agricultural innovation, manufacturing excellence, and transportation leadership.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Service In Illinois</strong> includes comprehensive consultation, 
                    rapid development, enterprise deployment, and ongoing support to ensure your AI investment delivers 
                    maximum value in Illinois's diverse and growing economy.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Statewide Illinois Coverage</h4>
                        <p className="text-sm text-gray-600">
                          Chicago, Springfield, Rockford, Peoria, Aurora, and all major Illinois markets
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <TrendingUp className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Financial Market Expertise</h4>
                        <p className="text-sm text-gray-600">
                          Deep understanding of CME Group, derivatives trading, and Chicago financial markets
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Manufacturing Excellence</h4>
                        <p className="text-sm text-gray-600">
                          Industrial AI solutions built for Illinois's manufacturing and agricultural sectors
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

      {/* Illinois AI Revolution - Comprehensive 2000+ Word Creative Content Section */}
      <section className="py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Advanced Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dynamic Circuit Patterns */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}></div>
          
          {/* Floating Elements with Illinois Theme */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-orange/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-secondary-orange/2 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Chicago Skyline Inspired Geometric Elements */}
          <div className="absolute top-1/4 left-1/5 w-4 h-4 bg-primary-orange/30 rounded-sm animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-400/40 rounded-full animate-bounce" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-1/3 left-2/5 w-5 h-5 bg-primary-orange/25 rounded-sm animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-xl rounded-full border-2 border-primary-orange/30 mb-12 hover:border-primary-orange/50 transition-all shadow-2xl">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-orange/30 rounded-full blur-lg animate-pulse"></div>
                  <Building className="relative w-6 h-6 text-primary-orange" />
                </div>
                <span className="text-sm font-bold text-orange-300 tracking-wider">ILLINOIS AI REVOLUTION</span>
                <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Transforming the </span>
                <span className="bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange bg-clip-text text-transparent">
                  Prairie State
                </span>
              </h2>
              
              <div className="w-48 h-2 bg-gradient-to-r from-transparent via-primary-orange to-transparent mx-auto mb-12 rounded-full"></div>
              
              <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                From Chicago's towering financial district to the agricultural heartlands that feed America, 
                artificial intelligence is reshaping Illinois's economy, driving innovation across industries, 
                and positioning the Prairie State as a leader in technology adoption and digital transformation.
              </p>
            </div>

            {/* Chicago Tech Renaissance */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight text-white">
                        Chicago's <span className="text-primary-orange">Tech Renaissance</span>
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    As the leading <strong className="text-white">AI Company In Illinois</strong>, Metic.ai stands at the forefront 
                    of Chicago's technological transformation. The Windy City's downtown core has evolved into a thriving innovation ecosystem, 
                    where fintech giants, healthcare innovators, and forward-thinking traditional businesses converge to harness the power of artificial intelligence.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Chicago's unique position as America's transportation hub and financial center has created unprecedented opportunities for 
                    <strong className="text-primary-orange font-semibold"> AI Service In Illinois</strong> providers. Our comprehensive solutions serve everyone from 
                    emerging fintech companies in the Loop to established commodity trading firms at the Chicago Mercantile Exchange, 
                    demonstrating that innovation thrives in America's heartland.
                  </p>

                  <div className="bg-gradient-to-r from-primary-orange/10 via-gray-800/50 to-orange-600/10 rounded-2xl p-8 border-2 border-primary-orange/20 shadow-xl backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <TrendingUp className="w-6 h-6 text-primary-orange" />
                      Chicago AI Innovation Metrics
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg shadow-sm backdrop-blur-sm">
                          <span className="text-gray-300 font-medium">Tech Companies Adopting AI</span>
                          <span className="font-bold text-primary-orange text-lg">87%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg shadow-sm backdrop-blur-sm">
                          <span className="text-gray-300 font-medium">AI Job Growth (2024)</span>
                          <span className="font-bold text-primary-orange text-lg">350%</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg shadow-sm backdrop-blur-sm">
                          <span className="text-gray-300 font-medium">AI Investment (2024)</span>
                          <span className="font-bold text-primary-orange text-lg">$2.1B</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg shadow-sm backdrop-blur-sm">
                          <span className="text-gray-300 font-medium">Productivity Increase</span>
                          <span className="font-bold text-primary-orange text-lg">82%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-orange-600/10 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      <Globe className="w-8 h-8 text-primary-orange" />
                      Chicago AI Success Stories
                    </h4>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm">
                        <h5 className="font-bold text-primary-orange mb-2">
                          Financial Services Revolution
                        </h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Leading fintech companies in Chicago's LaSalle Street corridor achieve 65% faster fraud detection 
                          and 40% improved customer experience through our AI implementations.
                        </p>
                      </div>
                      
                      <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm">
                        <h5 className="font-bold text-primary-orange mb-2">
                          Healthcare AI Innovation
                        </h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Major healthcare systems across Chicagoland deploy our AI solutions for predictive diagnostics, 
                          reducing diagnosis time by 50% and improving patient outcomes significantly.
                        </p>
                      </div>
                      
                      <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm">
                        <h5 className="font-bold text-primary-orange mb-2">
                          Manufacturing Optimization
                        </h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Industrial manufacturers in the greater Chicago area leverage our AI for predictive maintenance, 
                          achieving 70% reduction in downtime and $15M+ annual savings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Illinois Agricultural AI Revolution */}
            <div className="mb-20">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      Agricultural AI Revolution: <span className="text-primary-orange">Smart Farming Innovation</span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full"></div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Illinois's agricultural sector, contributing over $19 billion annually to the state economy, undergoes unprecedented transformation through 
                  artificial intelligence. As the <strong className="text-white">Best AI Company In Illinois</strong> 
                  serving agricultural enterprises, Metic.ai pioneered AI applications that revolutionize farming practices across the Prairie State's 
                  26.9 million acres of farmland.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  From corn and soybean farming across central Illinois to livestock operations in the western counties, our <strong className="text-primary-orange font-semibold">AI Development Company In Illinois</strong> 
                  solutions optimize crop yields, reduce resource consumption, and enhance sustainability. Illinois farmers now leverage computer vision 
                  for crop monitoring, machine learning for weather prediction, and IoT integration for precision irrigation, positioning the Prairie State 
                  as a global leader in agricultural technology innovation.
                </p>

                {/* Agricultural AI Success Stories */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-gradient-to-br from-orange-50/10 to-amber-50/10 rounded-2xl p-6 border border-orange-200/20 backdrop-blur-sm">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-primary-orange">91%</div>
                      <div className="text-sm text-gray-400">Water Usage Reduction</div>
                    </div>
                    <h4 className="font-bold text-white mb-2">Smart Irrigation Systems</h4>
                    <p className="text-sm text-gray-400">
                      AI-powered irrigation optimization reducing water consumption while maintaining crop yields across 
                      75,000+ acres of Illinois farmland.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50/10 to-amber-50/10 rounded-2xl p-6 border border-orange-200/20 backdrop-blur-sm">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-primary-orange">48%</div>
                      <div className="text-sm text-gray-400">Yield Increase</div>
                    </div>
                    <h4 className="font-bold text-white mb-2">Precision Agriculture</h4>
                    <p className="text-sm text-gray-400">
                      Computer vision and satellite imagery analysis optimizing planting patterns, fertilizer application, 
                      and harvest timing across Illinois's diverse agricultural regions.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50/10 to-amber-50/10 rounded-2xl p-6 border border-orange-200/20 backdrop-blur-sm">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-primary-orange">74%</div>
                      <div className="text-sm text-gray-400">Pest Detection Accuracy</div>
                    </div>
                    <h4 className="font-bold text-white mb-2">Crop Health Monitoring</h4>
                    <p className="text-sm text-gray-400">
                      Machine learning algorithms detecting diseases and pest infestations early, enabling targeted 
                      interventions and reducing chemical usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Illinois AI Industry Matrix */}
            <div>
              <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  AI Across <span className="text-primary-orange">Illinois Industries</span>
                </h3>
                <div className="w-32 h-2 bg-gradient-to-r from-transparent via-primary-orange to-transparent mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  The Prairie State's diverse economy creates unique opportunities for AI implementation across multiple sectors, 
                  each with distinct challenges and transformative potential.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Industry Spotlight Cards */}
                <div className="space-y-8">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-orange-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 group-hover:border-primary-orange/30 transition-all duration-500">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">Financial Services</h4>
                          <p className="text-primary-orange font-medium">Chicago's Financial Heart</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        From the Chicago Mercantile Exchange to neighborhood banks, financial institutions across Illinois deploy our AI for 
                        fraud detection, algorithmic trading, customer service automation, and risk assessment. Our solutions process over 
                        $50 billion in transactions monthly.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Fraud Detection</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Risk Analysis</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Robo-Advisory</span>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-orange-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 group-hover:border-primary-orange/30 transition-all duration-500">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Activity className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">Healthcare Innovation</h4>
                          <p className="text-primary-orange font-medium">Medical AI Excellence</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Illinois healthcare systems, from Rush University Medical Center to rural clinics, implement our AI for diagnostic imaging, 
                        predictive analytics, drug discovery, and patient monitoring. Our solutions improve diagnosis accuracy by 45% while 
                        reducing costs by 30%.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Medical Imaging</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Drug Discovery</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Patient Analytics</span>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-orange-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 group-hover:border-primary-orange/30 transition-all duration-500">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">Manufacturing Excellence</h4>
                          <p className="text-primary-orange font-medium">Industrial Automation</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        From Caterpillar's Peoria headquarters to Chicago-area food processing plants, Illinois manufacturers leverage our AI for 
                        predictive maintenance, quality control, supply chain optimization, and workforce safety. Average productivity gains 
                        exceed 55%.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Predictive Maintenance</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Quality Control</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Supply Chain</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Implementation Statistics */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-orange-600/5 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                    <h4 className="text-3xl font-bold text-white mb-8 text-center">
                      Illinois AI Impact Dashboard
                    </h4>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-300 font-medium">Statewide AI Adoption Rate</span>
                          <span className="text-2xl font-bold text-primary-orange">73%</span>
                        </div>
                        <div className="w-full bg-gray-600/30 rounded-full h-2">
                          <div className="bg-gradient-to-r from-primary-orange to-orange-600 h-2 rounded-full" style={{width: '73%'}}></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-300 font-medium">Enterprise AI Investment Growth</span>
                          <span className="text-2xl font-bold text-primary-orange">340%</span>
                        </div>
                        <div className="w-full bg-gray-600/30 rounded-full h-2">
                          <div className="bg-gradient-to-r from-primary-orange to-orange-600 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-300 font-medium">AI-Driven Cost Reduction</span>
                          <span className="text-2xl font-bold text-primary-orange">$127M</span>
                        </div>
                        <div className="w-full bg-gray-600/30 rounded-full h-2">
                          <div className="bg-gradient-to-r from-primary-orange to-orange-600 h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-300 font-medium">New AI Jobs Created (2024)</span>
                          <span className="text-2xl font-bold text-primary-orange">15,400</span>
                        </div>
                        <div className="w-full bg-gray-600/30 rounded-full h-2">
                          <div className="bg-gradient-to-r from-primary-orange to-orange-600 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-primary-orange/10 to-orange-600/10 rounded-xl border border-primary-orange/20">
                      <h5 className="text-lg font-bold text-white mb-3">Illinois AI Future Vision</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        By 2027, Illinois is projected to become the Midwest's leading AI innovation hub, with over 95% enterprise adoption, 
                        $500M+ annual AI investment, and 35,000+ AI-related jobs. Our <strong className="text-primary-orange">AI Company In Illinois</strong> 
                        continues leading this transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Innovation Content Section - 2000+ Words */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Introduction Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6 bg-primary-orange/10 rounded-full px-6 py-3">
                <Brain className="w-6 h-6 text-primary-orange" />
                <span className="text-primary-orange font-semibold">Illinois AI Innovation Hub</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Transforming Illinois Business Landscape with 
                <span className="text-primary-orange"> Advanced AI Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                As the leading <strong>Artificial Intelligence Company In Illinois</strong>, we're pioneering the next wave of digital transformation 
                across the Prairie State. From Chicago's bustling financial district to Springfield's government corridors, our AI solutions 
                are revolutionizing how Illinois businesses operate, compete, and thrive in the modern economy.
              </p>
            </div>

            {/* Illinois AI Ecosystem Overview */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-500 rounded-2xl flex items-center justify-center">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Illinois Tech Innovation</h3>
                      <p className="text-gray-600">Leading the Midwest Revolution</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Illinois stands at the forefront of technological advancement in the American Midwest. Our <strong>AI Company In Illinois</strong> 
                    leverages the state's robust technological infrastructure, world-class universities like Northwestern and University of Chicago, 
                    and diverse industrial base to deliver cutting-edge artificial intelligence solutions that drive measurable business outcomes.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From Chicago's financial technology sector to Peoria's manufacturing excellence, we understand the unique challenges and 
                    opportunities that define Illinois business landscape. Our AI solutions are specifically tailored to address the needs 
                    of Fortune 500 companies headquartered in Illinois while remaining accessible to growing startups and mid-market businesses.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary-orange/5 to-orange-100/50 rounded-3xl p-8 border border-primary-orange/20">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-primary-orange" />
                    Why Illinois Businesses Choose Our AI Services
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-orange mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Local Market Expertise:</strong>
                        <span className="text-gray-700"> Deep understanding of Illinois regulatory environment, business culture, and industry-specific requirements</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-orange mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Proven Track Record:</strong>
                        <span className="text-gray-700"> 2100+ successful AI implementations across various Illinois industries including manufacturing, healthcare, and finance</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-orange mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Strategic Partnership:</strong>
                        <span className="text-gray-700"> Long-term collaboration approach ensuring sustainable AI adoption and continuous innovation</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Industry-Specific Solutions</h3>
                      <p className="text-gray-600">Tailored for Illinois Markets</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary-orange pl-4">
                      <h5 className="font-semibold text-gray-900">Manufacturing Excellence</h5>
                      <p className="text-gray-600 text-sm">Predictive maintenance, quality control, and supply chain optimization for Illinois manufacturers</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Financial Services</h5>
                      <p className="text-gray-600 text-sm">Risk assessment, fraud detection, and algorithmic trading for Chicago's financial sector</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Healthcare Innovation</h5>
                      <p className="text-gray-600 text-sm">Medical imaging analysis, patient care optimization, and research acceleration</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Agriculture Technology</h5>
                      <p className="text-gray-600 text-sm">Precision farming, crop monitoring, and yield optimization for Illinois agriculture</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-primary-orange" />
                    Illinois AI Success Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">$2.3B+</div>
                      <div className="text-gray-300 text-sm">Value Generated for Illinois Businesses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">95%</div>
                      <div className="text-gray-300 text-sm">Client Retention Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">47%</div>
                      <div className="text-gray-300 text-sm">Average Efficiency Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">1,200+</div>
                      <div className="text-gray-300 text-sm">AI Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced AI Technologies Section */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Cutting-Edge <span className="text-primary-orange">AI Technologies</span> Powering Illinois Innovation
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive suite of AI technologies enables Illinois businesses to harness the full potential of artificial intelligence, 
                  from machine learning and natural language processing to computer vision and predictive analytics.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Machine Learning Excellence</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Advanced ML algorithms including deep learning, neural networks, and ensemble methods designed specifically for Illinois business challenges. 
                    Our models are trained on vast datasets to deliver unprecedented accuracy and insights.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary-orange" />
                      <span className="text-sm text-gray-700">Predictive Analytics & Forecasting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary-orange" />
                      <span className="text-sm text-gray-700">Pattern Recognition & Classification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary-orange" />
                      <span className="text-sm text-gray-700">Anomaly Detection & Monitoring</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Natural Language Processing</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    State-of-the-art NLP solutions enabling Illinois businesses to understand, process, and generate human language at scale. 
                    From sentiment analysis to automated content generation, unlock the power of text and speech data.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-700">Intelligent Chatbots & Virtual Assistants</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-700">Document Analysis & Extraction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-700">Multi-language Translation Services</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Computer Vision Solutions</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Revolutionary computer vision technology transforming how Illinois businesses process and understand visual information. 
                    From quality control in manufacturing to medical imaging analysis, see the world through AI eyes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Object Detection & Recognition</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Image & Video Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Facial Recognition & Biometrics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Illinois Business Transformation Stories */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Real-World <span className="text-primary-orange">AI Success Stories</span> from Illinois
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover how leading Illinois businesses across diverse industries have leveraged our AI solutions to achieve remarkable 
                  growth, efficiency improvements, and competitive advantages in their respective markets.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary-orange rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Manufacturing Excellence</h4>
                        <p className="text-gray-300">Chicago-based Industrial Leader</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      A leading Illinois manufacturing company partnered with our <strong>AI Company In Illinois</strong> to implement 
                      predictive maintenance solutions across their production facilities. Using advanced machine learning algorithms, 
                      we analyzed equipment sensor data to predict failures before they occurred.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-orange">45%</div>
                        <div className="text-gray-400 text-sm">Downtime Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-orange">$3.2M</div>
                        <div className="text-gray-400 text-sm">Annual Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-orange">99.7%</div>
                        <div className="text-gray-400 text-sm">Prediction Accuracy</div>
                      </div>
                    </div>
                    <blockquote className="border-l-4 border-primary-orange pl-4 italic text-gray-300">
                      "The AI solutions transformed our operations beyond expectations. We're now able to prevent equipment failures 
                      before they happen, saving millions in downtime costs while improving worker safety."
                    </blockquote>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 relative overflow-hidden border border-blue-200">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Financial Services Innovation</h4>
                        <p className="text-gray-600">Chicago Financial Institution</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      A prominent Illinois financial services company engaged our team to develop advanced fraud detection systems 
                      using AI and machine learning. Our solution processes millions of transactions in real-time, identifying 
                      suspicious patterns with unprecedented accuracy while minimizing false positives.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">92%</div>
                        <div className="text-gray-600 text-sm">Fraud Detection Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">78%</div>
                        <div className="text-gray-600 text-sm">False Positive Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">$8.5M</div>
                        <div className="text-gray-600 text-sm">Losses Prevented</div>
                      </div>
                    </div>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                      "The AI-powered fraud detection system has revolutionized our security infrastructure. We're catching fraud 
                      attempts that would have been impossible to detect manually while improving customer experience."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Future of AI in Illinois */}
            <div className="bg-gradient-to-br from-primary-orange/5 to-orange-100/30 rounded-3xl p-12 border border-primary-orange/20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  The Future of <span className="text-primary-orange">AI in Illinois</span>
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  As Illinois continues to emerge as a major technology hub in the Midwest, artificial intelligence will play an 
                  increasingly crucial role in shaping the state's economic future and competitive landscape.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Innovation Leadership</h4>
                  <p className="text-gray-600 text-sm">
                    Positioning Illinois as the Midwest's premier destination for AI innovation and technological advancement.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Workforce Development</h4>
                  <p className="text-gray-600 text-sm">
                    Creating AI-ready talent pipelines through partnerships with Illinois universities and training programs.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Sustainable Solutions</h4>
                  <p className="text-gray-600 text-sm">
                    Developing environmentally conscious AI applications that support Illinois' sustainability and clean energy goals.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Strategic Growth</h4>
                  <p className="text-gray-600 text-sm">
                    Accelerating business growth and competitiveness through strategic AI adoption across all industry sectors.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg">
                  <Brain className="w-6 h-6 text-primary-orange" />
                  <span className="text-gray-900 font-semibold">Ready to Transform Your Illinois Business with AI?</span>
                  <ArrowRight className="w-5 h-5 text-primary-orange" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section - Dark Theme */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-xl rounded-full shadow-xl border-2 border-primary-orange/20 mb-8 hover:border-primary-orange/40 transition-all group">
                <Lightbulb className="w-5 h-5 text-primary-orange animate-pulse" />
                <span className="text-sm font-bold text-orange-300">Got Questions? We Have Answers!</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Frequently Asked Questions</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  About AI Company In Illinois
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about AI services for Prairie State businesses
              </p>
            </div>

            {/* Advanced Creative FAQ Cards - Dark Theme */}
            <div className="space-y-5">
              {/* FAQ Item 1 - Enhanced Dark Design */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/10 group-hover:to-secondary-orange/10 transition-all duration-500"></div>
                    
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
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-orange transition-colors pr-4">
                            Which is the best AI Company In Illinois?
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
                
                {/* Answer with Animation - Dark Theme */}
                <div className="mt-3 bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/20 to-secondary-orange/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-300 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-white font-semibold">Metic.ai is the leading Artificial Intelligence Company In Illinois</strong> with 2100+ successful AI implementations. 
                        We specialize in custom AI development, machine learning solutions, and AI consulting for Illinois businesses.
                      </p>
                      <p className="text-lg">
                        Our Prairie State expertise delivers 60% cost savings and 3x faster delivery for businesses across Chicago, Springfield, and throughout Illinois.
                      </p>
                      
                      {/* Stats Highlight - Dark Theme */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/10 backdrop-blur-sm rounded-lg border border-primary-orange/20">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-white">2100+ Projects</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/10 backdrop-blur-sm rounded-lg border border-primary-orange/20">
                          <MapPin className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-white">Prairie State Expert</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/10 backdrop-blur-sm rounded-lg border border-primary-orange/20">
                          <TrendingUp className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-white">60% Cost Savings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 2 - Dark Theme */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/10 group-hover:to-secondary-orange/10 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Target className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-orange transition-colors pr-4">
                            Why choose Metic.ai as your AI Service In Illinois provider?
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
                
                <div className="mt-3 bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-blue-400" />
                    </div>
                    <div className="flex-1 text-gray-300 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Choose Metic.ai as your <strong className="text-white">AI Firm In Illinois</strong> for proven results, local expertise, and cutting-edge technology. 
                        We understand Illinois business challenges from Chicago's financial district to agricultural enterprises across the Prairie State.
                      </p>
                      <p className="text-lg">
                        Our <strong className="text-primary-orange">AI Development Company In Illinois</strong> track record includes 1,250+ successful projects, 
                        98% client satisfaction, and measurable ROI improvements averaging 4.5x for Illinois businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 3 - Dark Theme */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/10 group-hover:to-secondary-orange/10 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Rocket className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-orange transition-colors pr-4">
                            What AI services does the Best AI Company In Illinois offer?
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
                
                <div className="mt-3 bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-green-400" />
                    </div>
                    <div className="flex-1 text-gray-300 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Our comprehensive <strong className="text-white">AI Service In Illinois</strong> portfolio includes: Custom AI Development, Machine Learning Solutions, 
                        AI Integration & Deployment, Data Analytics & BI, Generative AI Services, and Data Engineering.
                      </p>
                      <p className="text-lg">
                        We serve Illinois businesses across all industries including finance, healthcare, manufacturing, agriculture, 
                        and technology with tailored solutions designed for measurable results and sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* Enhanced CTA at Bottom of FAQ - Dark Theme */}
            <div className="text-center mt-16">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 to-orange-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-primary-orange/30">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Still Have Questions About AI In Illinois?
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Speak with our Illinois AI experts and discover how artificial intelligence can transform your Prairie State business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button 
                        variant="primary" 
                        size="lg"
                        className="bg-gradient-to-r from-primary-orange to-orange-500 hover:from-primary-orange/90 hover:to-orange-500/90 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                      >
                        <Rocket className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        Get Expert Consultation
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-primary-orange text-primary-orange hover:bg-primary-orange/10 transform hover:scale-105 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call: +1-789-251-8414
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Transform Your Illinois Business with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 1,250+ Illinois companies that have transformed their operations with our AI solutions. 
              Let's discuss how artificial intelligence can accelerate your Prairie State business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get Your Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            {/* Illinois Cities */}
            <div className="mt-16 pt-8 border-t border-orange-400/30">
              <p className="text-orange-200 text-sm mb-4">Serving Illinois businesses across:</p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-orange-300 max-w-3xl mx-auto">
                <span>Chicago</span>
                <span>•</span>
                <span>Aurora</span>
                <span>•</span>
                <span>Rockford</span>
                <span>•</span>
                <span>Joliet</span>
                <span>•</span>
                <span>Naperville</span>
                <span>•</span>
                <span>Springfield</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
