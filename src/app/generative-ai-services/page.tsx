import Link from "next/link";
import { Button } from "../components/ui/Button";
import Testimonials from "../components/Testimonials";
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
  Rocket
} from "lucide-react";

export const metadata = {
  title: "Generative AI Services | #1 ChatGPT & GPT-4 Integration Company - Metic.ai",
  description: "Leading Generative AI Services with 500+ successful implementations. Expert ChatGPT integration, GPT-4 services, LLM development & custom AI solutions. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Generative AI Services",
    "ChatGPT Integration Services",
    "Custom GPT Development",
    "Large Language Model Company",
    "AI Content Creation Services",
    "GPT-4 Integration Company",
    "LLM Development Services",
    "AI Text Generation Solutions",
    "Generative AI Solutions",
    "AI Chatbot Development",
    "Custom AI Model Training",
    "OpenAI Integration Services",
    "AI Image Generation Services",
    "Midjourney AI Integration",
    "DALL-E Integration Services",
    "Stable Diffusion Solutions",
    "AI Code Generation Services",
    "GitHub Copilot Integration",
    "AI Marketing Automation",
    "AI Customer Service Solutions",
    "Enterprise Generative AI",
    "Generative AI Company"
  ],
  authors: [{ name: "Metic.ai Generative AI Team" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Generative AI Services | #1 ChatGPT & GPT-4 Integration - Metic.ai",
    description: "Leading Generative AI Services with 500+ successful implementations worldwide. Expert ChatGPT integration, GPT-4 services, LLM development & custom AI solutions for enterprises.",
    url: "https://metic.ai/generative-ai-services/",
    type: "website",
    locale: "en_US",
    siteName: "Metic.ai - Generative AI Services",
    images: [
      {
        url: "https://metic.ai/og-generative-ai-services.jpg",
        width: 1200,
        height: 630,
        alt: "Generative AI Services - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generative AI Services | ChatGPT & GPT-4 Integration Company",
    description: "Leading Generative AI Services delivering enterprise artificial intelligence solutions. Expert ChatGPT integration, GPT-4 development & automation services with proven results.",
    images: ["https://metic.ai/og-generative-ai-services.jpg"],
    site: "@metic_ai",
    creator: "@metic_ai"
  },
  alternates: {
    canonical: "https://metic.ai/generative-ai-services/",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code"
  },
  category: "Technology",
  classification: "Artificial Intelligence Services"
};

export default function GenerativeAIServicesPage() {
  const services = [
    {
      title: "ChatGPT Integration",
      description: "Seamlessly integrate ChatGPT and GPT-4 into your business operations with enterprise-grade deployment strategies and custom configurations.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Custom GPT Development",
      description: "Build custom GPT models and LLM solutions tailored for your specific business needs and industry requirements.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "AI Image Generation",
      description: "DALL-E, Midjourney, and Stable Diffusion integration designed specifically for your business creative and visual content needs.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "AI Content Creation",
      description: "Transform your content strategy with AI-powered writing, copywriting, blog generation, and marketing content automation.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "LLM Development",
      description: "Harness the power of Large Language Models for intelligent chatbots, customer service automation, and business solutions.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "AI Automation",
      description: "Robust AI automation and intelligent workflows for enterprises with seamless integration into existing business processes.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Technology & SaaS",
    "Healthcare & Pharma",
    "Finance & Banking",
    "E-commerce & Retail",
    "Marketing & Advertising",
    "Education & E-learning",
    "Manufacturing",
    "Real Estate",
    "Legal Services",
    "Media & Entertainment",
    "Hospitality",
    "Automotive"
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "99.5%", label: "Client Satisfaction" },
    { number: "5.2x", label: "Average ROI Increase" },
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
            "@type": ["Organization", "TechnologyCompany"],
            "name": "Metic.ai - Generative AI Services",
            "alternateName": ["Generative AI Company", "Metic AI", "ChatGPT Integration Services"],
            "description": "Leading Generative AI Services provider offering enterprise ChatGPT integration, GPT-4 services, LLM development, and custom AI solutions for businesses worldwide.",
            "url": "https://metic.ai/generative-ai-services/",
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai",
              "https://www.facebook.com/meticai"
            ],
            "logo": "https://metic.ai/logo.png",
            "image": ["https://metic.ai/generative-ai-services.jpg"],
            "telephone": "+1-789-251-8414",
            "email": "hello@metic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-200",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Generative AI Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ChatGPT Integration Services",
                    "description": "Enterprise ChatGPT and GPT-4 integration for business automation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom GPT Development",
                    "description": "Custom GPT models and Large Language Model solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Image Generation Services", 
                    "description": "DALL-E, Midjourney, and Stable Diffusion integration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Content Creation Services",
                    "description": "Expert AI strategy and implementation consulting"
                  }
                }
              ]
            },
            "knowsAbout": [
              "Artificial Intelligence",
              "Generative AI", 
              "Large Language Models",
              "ChatGPT Integration",
              "AI Image Generation",
              "AI Automation",
              "Data Science",
              "business Intelligence",
              "Predictive Analytics"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "100",
              "bestRating": "5",
              "worstRating": "1"
            },
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "IND",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-789-251-8414",
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
                "name": "What are Generative AI Services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Generative AI Services include ChatGPT integration, GPT-4 development, custom LLM solutions, AI image generation (DALL-E, Midjourney, Stable Diffusion), AI content creation, intelligent chatbots, and enterprise automation. Metic.ai provides comprehensive generative AI services with 500+ successful implementations worldwide."
                }
              },
              {
                "@type": "Question", 
                "name": "How can ChatGPT integration benefit my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ChatGPT integration provides automated customer service, intelligent content creation, data analysis, code generation, and business process automation. Our enterprise ChatGPT solutions deliver 60% cost savings and 3x faster delivery with 24/7 support."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between GPT-3.5 and GPT-4?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GPT-4 offers significantly improved reasoning, creativity, and accuracy compared to GPT-3.5. It handles more complex instructions, provides better context understanding, and supports multimodal inputs (text and images). Metic.ai specializes in both GPT-3.5 and GPT-4 integration based on your business needs."
                }
              },
              {
                "@type": "Question",
                "name": "How much do Generative AI Services cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Generative AI Services costs vary based on complexity, usage volume, and customization requirements. Metic.ai offers flexible pricing models including subscription-based, usage-based, and custom enterprise packages. Contact us for a detailed quote tailored to your specific needs."
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
            "headline": "Generative AI Services - ChatGPT, GPT-4 & LLM Solutions",
            "description": "Comprehensive guide to generative AI services. Expert ChatGPT integration, GPT-4 development, custom LLM solutions, AI image generation, and enterprise automation implementation.",
            "image": "https://metic.ai/generative-ai-services-article.jpg",
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
            "dateModified": "2024-11-19",
            "mainEntityOfPage": "https://metic.ai/generative-ai-services/",
            "keywords": "Generative AI Services, ChatGPT Integration, GPT-4 Development, LLM Solutions"
          })
        }}
      />

      {/* BreadcrumbList Schema for Enhanced Navigation SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://metic.ai/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://metic.ai/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Generative AI Services",
                "item": "https://metic.ai/generative-ai-services/"
              }
            ]
          })
        }}
      />

      {/* Hero Section - VSO & Target Keyword Optimized - Enhanced Mobile/Desktop */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Trust Badge - Mobile Optimized */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-primary-orange/30 shadow-xl">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-primary-orange" />
                <span className="text-xs md:text-sm font-bold text-white">⭐ 500+ Successful Generative AI Projects | 99.5% Client Satisfaction</span>
              </div>
            </div>

            <div className="text-center">  
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  Generative AI Services
                </span>
                <br />
                <span className="text-white">ChatGPT & GPT-4 Integration</span>
              </h1>
              
              {/* VSO Optimized Description - Mobile Friendly */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                Looking for expert Generative AI Services? 
                Metic.ai delivers enterprise-grade solutions. 
                We offer ChatGPT integration, GPT-4 development, custom LLM solutions, and AI automation with proven results worldwide.
              </p>

              {/* Mobile-Optimized CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-16 px-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl hover:shadow-primary-orange/50 transform hover:scale-105 transition-all">
                    <Rocket className="w-5 h-5 mr-2" />
                    Get Free AI Consultation
                  </Button>
                </Link>
                <Link href="tel:+917892518414" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91-789-251-8414
                  </Button>
                </Link>
              </div>

              {/* Voice Search Optimized Stats - Responsive Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto mb-10 md:mb-12 px-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:border-primary-orange/50 transition-all transform hover:scale-105">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* VSO Keywords Section - Mobile Optimized */}
              <div className="text-center px-4">
                <p className="text-gray-400 text-sm md:text-base mb-4">
                  <strong className="text-white">Trusted as the top Generative AI Services</strong> by leading businesses
                </p>
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm">
                  <span className="bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-primary-orange/30 text-white hover:border-primary-orange transition-all">
                    ChatGPT Integration
                  </span>
                  <span className="bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-primary-orange/30 text-white hover:border-primary-orange transition-all">
                    GPT-4 Development
                  </span>
                  <span className="bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-primary-orange/30 text-white hover:border-primary-orange transition-all">
                    LLM Solutions
                  </span>
                  <span className="bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-primary-orange/30 text-white hover:border-primary-orange transition-all">
                    AI Image Generation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section - Enhanced Mobile & Desktop */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary-orange/10 rounded-full mb-6 md:mb-8">
                <Brain className="w-4 h-4 md:w-5 md:h-5 text-primary-orange" />
                <span className="text-xs md:text-sm font-bold text-primary-orange">COMPREHENSIVE AI SERVICES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight px-4">
                <strong className="text-gray-900">Generative AI Services</strong> by Leading{" "}
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Generative AI Services
                </span>
              </h2>
              <div className="w-20 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-6 md:mb-8 rounded-full"></div>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Comprehensive generative AI services from most trusted <strong className="text-gray-900">Generative AI Services</strong>. 
                Transforming businesses with ChatGPT, GPT-4, LLM development, and cutting-edge AI solutions tailored for modern business landscape.
              </p>
            </div>
            
            {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  <div 
                    key={index} 
                    className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-orange/50 transform hover:-translate-y-2"
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 md:mb-6 ${colorClasses[service.color]} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-primary-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Link 
                      href={service.href} 
                      className="inline-flex items-center text-primary-orange hover:text-secondary-orange font-semibold text-sm md:text-base group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* CTA Below Services */}
            <div className="text-center mt-12 md:mt-16">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="px-8 md:px-10 py-4 text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore All AI Services
                </Button>
              </Link>
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
                  About Metic.ai - Premier <span className="text-primary-orange">Generative AI Services</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Established as a leading <strong>Generative AI Services</strong>, Metic.ai has been at the forefront of generative artificial intelligence 
                  innovation since 2020. We specialize in delivering enterprise-grade ChatGPT integration, GPT-4 development, LLM solutions, AI image generation, and custom AI services that transform businesses worldwide's 
                  unique Industries including Textiles & Garments, Pharmaceuticals, Tourism & Hospitality, Chemicals, and Information Technology.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our expertise as the premier <strong>Generative AI Services</strong> encompasses Large Language Models (LLMs), ChatGPT Integration, 
                  GPT-4 API development, AI Image Generation (DALL-E, Midjourney, Stable Diffusion), Custom GPT development, AI content creation, and intelligent automation. We've successfully completed over 50 generative AI projects, making us the most 
                  Trusted <strong>Generative AI Services</strong> from enterprises worldwide.
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
                    Expert AI consulting services to help businesses worldwide identify AI opportunities and develop comprehensive implementation strategies.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Custom AI Development
                  </h3>
                  <p className="text-gray-600">
                    Bespoke artificial intelligence solutions tailored to your specific business requirements and Industry challenges .
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

      {/* Industries Section with Real Images */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Industries We Serve 
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across key industries worldwide and business sectors.
              </p>
            </div>
            
            {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols - 12 Industries Total */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Manufacturing */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop" 
                    alt="Manufacturing Industry AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Manufacturing</h3>
                  </div>
                </div>
              </div>

              {/* Aerospace */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&h=400&fit=crop" 
                    alt="Aerospace Industry AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Aerospace</h3>
                  </div>
                </div>
              </div>

              {/* Healthcare */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=400&fit=crop" 
                    alt="Healthcare Industry AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Healthcare</h3>
                  </div>
                </div>
              </div>

              {/* Agriculture */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=400&fit=crop" 
                    alt="Agriculture Industry AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Agriculture</h3>
                  </div>
                </div>
              </div>

              {/* Technology */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop" 
                    alt="Technology Industry AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Technology</h3>
                  </div>
                </div>
              </div>

              {/* Automotive */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=400&fit=crop" 
                    alt="Automotive Industry AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Automotive</h3>
                  </div>
                </div>
              </div>

              {/* Financial Services */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=400&fit=crop" 
                    alt="Financial Services Industry AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Financial Services</h3>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop" 
                    alt="Transportation Industry AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Transportation</h3>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=400&fit=crop" 
                    alt="Education Industry AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Education</h3>
                  </div>
                </div>
              </div>

              {/* Energy */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=400&fit=crop" 
                    alt="Energy Industry AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Energy</h3>
                  </div>
                </div>
              </div>

              {/* Call Center - NEW */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=400&fit=crop" 
                    alt="Call Center AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Call Center</h3>
                  </div>
                </div>
              </div>

              {/* IT Services - NEW */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=400&fit=crop" 
                    alt="IT Services AI Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">IT Services</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose US Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Choose Metic.ai as Your <span className="text-primary-orange">Generative AI Services</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                As the premier <strong>AI Development Company </strong>, we're Trusted by businesses worldwide 
                for our expertise, proven results, and commitment to client success US enterprises.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for businesses worldwide across all Industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for enterprises worldwide.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of unique business challenges and opportunities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Services global Content - 100% SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Generative AI Leadership - Enhanced Creative Header */}
            <div className="text-center mb-20">
              {/* Premium Badge with Animation */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-orange/10 via-white to-secondary-orange/10 rounded-full shadow-2xl border-2 border-primary-orange/30 mb-10 hover:border-primary-orange/50 transition-all group">
                <div className="w-3 h-3 bg-primary-orange rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-gray-800 tracking-wide">enterprises AI INNOVATION</span>
                <div className="w-3 h-3 bg-secondary-orange rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Leading </span>
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient">
                  Generative AI Services
                </span>
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-10 rounded-full shadow-lg"></div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Transforming businesses worldwide with cutting-edge generative AI solutions
              </p>
            </div>

            <div className="space-y-20">
              {/* global AI Innovation Hub - Premium Design */}
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
                          global's <span className="text-primary-orange">Premier AI Technology Pioneer</span>
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full"></div>
                      </div>
                    </div>
                    
            <p className="text-lg text-gray-700 leading-relaxed">
              As the leading <strong className="text-gray-900 bg-primary-orange/10 px-2 py-1 rounded">Generative AI Services</strong>, 
              Metic.ai serves enterprises with enterprise-grade AI solutions tailored to the modern economic 
              landscape. From Maninagar's business hub to Vastrapur' research facilities, SG Highway's government sector to 
              enterprises across industries, we understand business excellence and diverse industry needs.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong className="text-primary-orange font-semibold">Generative AI Services</strong> combines deep understanding 
              of enterprise challenges with cutting-edge technology to deliver AI solutions that drive measurable 
              results. We've successfully implemented AI across key industry sectors including Textiles & Garments, fishing, 
              tourism, Chemicals, Information Technology, and maritime Industries US 's largest state.
            </p>                    {/* Enhanced Feature Cards with Creative Design */}
                    <div className="grid gap-6 mt-10">
                      <div className="group bg-gradient-to-r from-primary-orange/5 via-white to-secondary-orange/5 p-6 rounded-2xl border-2 border-primary-orange/20 hover:border-primary-orange/40 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Rocket className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">Textiles Generative AI Excellence</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Deep expertise in enterprise AI implementation including 
                              metro systems, and energy infrastructure across major manufacturing regions.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-secondary-orange/5 via-white to-primary-orange/5 p-6 rounded-2xl border-2 border-secondary-orange/20 hover:border-secondary-orange/40 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">Automotive Manufacturing Innovation</h4>
                            <p className="text-gray-600 leading-relaxed">
                              GPT-4 powered content and automation solutions for the automotive industry for leading enterprises, 
                              and Toyota manufacturing facilities with predictive maintenance and quality control systems.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-primary-orange/5 via-white to-secondary-orange/5 p-6 rounded-2xl border-2 border-primary-orange/20 hover:border-primary-orange/40 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">Chemicals & Natural Resources AI</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Specialized AI for chemical operations and resource extraction including process optimization, 
                              safety monitoring, and environmental compliance for resource extraction operations.
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
                      Generative AI Impact
                    </h4>
                    
                    <div className="space-y-8">
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group transform hover:scale-105">
                        <div className="text-5xl font-bold text-primary-orange mb-3 group-hover:scale-110 transition-transform">₹130B</div>
                        <div className="text-sm text-gray-600 font-medium">Enterprise ROI</div>
                        <div className="text-xs text-gray-500 mt-2">Textile-driven Economy</div>
                      </div>
                      
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-secondary-orange/10 hover:border-secondary-orange/30 transition-all group transform hover:scale-105">
                        <div className="text-5xl font-bold text-secondary-orange mb-3 group-hover:scale-110 transition-transform">8.4M</div>
                        <div className="text-sm text-gray-600 font-medium">Global Clients</div>
                        <div className="text-xs text-gray-500 mt-2">Manchester of India</div>
                      </div>
                      
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group transform hover:scale-105">
                        <div className="text-5xl font-bold text-primary-orange mb-3 group-hover:scale-110 transition-transform">50+</div>
                        <div className="text-sm text-gray-600 font-medium">Generative AI Projects</div>
                        <div className="text-xs text-gray-500 mt-2">ChatGPT & LLM Success Rate</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary-orange/20 via-secondary-orange/10 to-primary-orange/20 rounded-2xl p-6 border-2 border-primary-orange/30 transform hover:scale-105 transition-transform">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-bold text-gray-900">global Advantage</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong>Strategic Resources:</strong> Rich US oil, gas, fishing, and minerals with vast untapped 
                          potential, making global ideal for AI-driven resource optimization and predictive analytics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* global Industry Solutions - Creative Premium Design */}
              <div>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-full border-2 border-primary-orange/20 mb-8 transform hover:scale-105 transition-transform">
                    <Sparkles className="w-5 h-5 text-primary-orange" />
                    <span className="text-sm font-bold text-gray-800">Industry EXPERTISE</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Generative AI Solutions for <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">key industries worldwide</span>
                  </h3>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-6 rounded-full"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Specialized Generative AI solutions powered by ChatGPT, GPT-4, and custom LLMs designed for enterprises's unique economic sectors and Textile-driven Industries
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {/* Textiles & Garments Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Textiles Generative AI Solutions</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      ChatGPT and LLM-powered solutions for the manufacturing and textile industry, 
                      metro systems monitoring, offshore drilling optimization, and predictive maintenance 
                      for energy infrastructure across enterprises's vast energy resources.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Pipeline monitoring & optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Drilling efficiency analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Resource extraction prediction</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Safety & environmental compliance</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pharmaceuticals Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-secondary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Pharmaceuticals Generative AI</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      GPT-4 powered content and automation solutions for global's fishing and seafood processing Industry with predictive catch 
                      analytics, sINtainable fishing optimization, processing automation, cold chain monitoring, 
                      and quality control for the world's richest seafood harvest.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Catch prediction & optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Processing automation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Cold chain monitoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">SINtainable fishing intelligence</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tourism & Hospitality Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Tourism Generative AI</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      AI chatbot and content generation solutions for global's booming tourism Industry with cruise line optimization, 
                      wildlife tour planning, hotel revenue management, visitor experience personalization, 
                      and seasonal demand forecasting for global's 2.5 million annual visitors.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Revenue management systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Visitor experience personalization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Seasonal demand forecasting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Tour optimization & planning</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chemicals & Resource Extraction */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-secondary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Chemicals & Resource AI</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      GPT-4 powered content and automation solutions for chemical operations including gold, zinc, and mineral extraction 
                      with predictive maintenance, safety monitoring, resource discovery optimization, 
                      and environmental impact assessment resource-intensive operations.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Resource discovery prediction</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Chemicals equipment automation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Safety & compliance monitoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Environmental impact analysis</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Information Technology & Logistics */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Information Technology & Logistics AI</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      AI chatbot and content generation solutions for global's Information Technology and cargo logistics including bINh plane operations, 
                      Ted Stevens Maninagar International Airport cargo hub, weather prediction for flight safety, 
                      and supply chain optimization for remote global communities.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Flight route optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Weather prediction systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Cargo logistics optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Remote delivery planning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ReINable Testimonials Component */}
              <Testimonials />

              {/* global AI Partnership Excellence - Creative Premium Design */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all transform hover:scale-105">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-orange rounded-lg flex items-center justify-center transform rotate-12">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      global AI Leadership Metrics
                    </h4>
                    <div className="space-y-6">
                      <div className="flex jINtify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">global Projects Completed</span>
                        <span className="font-bold text-primary-orange text-xl">50+</span>
                      </div>
                      <div className="flex jINtify-between items-center p-4 bg-gradient-to-r from-secondary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Industry Success Rate</span>
                        <span className="font-bold text-secondary-orange text-xl">99.5%</span>
                      </div>
                      <div className="flex jINtify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Average ROI for global Clients</span>
                        <span className="font-bold text-primary-orange text-xl">5.2x</span>
                      </div>
                      <div className="flex jINtify-between items-center p-4 bg-gradient-to-r from-secondary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Client Retention Rate</span>
                        <span className="font-bold text-secondary-orange text-xl">97%</span>
                      </div>
                      <div className="flex jINtify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Average Deployment Time</span>
                        <span className="font-bold text-primary-orange text-xl">28 Days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-orange/10 via-white to-secondary-orange/10 rounded-2xl p-8 border-2 border-primary-orange/20 shadow-xl transform hover:scale-105 transition-transform">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center flex-shrink-0 transform -rotate-6">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">business Advantage</h4>
                        <p className="text-gray-700 leading-relaxed">
                          As the premier <strong className="text-primary-orange">AI Firm </strong>, we understand 
                          enterprises's unique blend of entrepreneurial excellence and resource-driven innovation. Our AI solutions 
                          are built for global's Textiles & Garments dominance, fishing Industry leadership, and tourism growth.
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
                        Your Trusted <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">AI Partner </span>
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full mb-6"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-gray-900 bg-primary-orange/10 px-2 py-1 rounded">Choosing Metic.ai as your AI partner </strong> means 
                    working with a team that deeply understands unique business challenges, from Maninagar's 
                    commercial hub to Vastrapur' research facilities and SG Highway's government operations.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Our <strong className="text-primary-orange font-semibold">AI Service </strong> includes comprehensive consultation, 
                    rapid prototyping, enterprise deployment, and 24/7 support to ensure your AI investment delivers 
                    maximum value 's Textile-driven and growing economy.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-primary-orange/10 transform hover:scale-105 transition-transform">
                      <MapPin className="w-8 h-8 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Comprehensive global Coverage</h4>
                        <p className="text-gray-600 leading-relaxed">
                          enterprises worldwide 
                          GIFT City, and all major business centers across enterprises
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-secondary-orange/10 transform hover:scale-105 transition-transform">
                      <Rocket className="w-8 h-8 text-secondary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Industry Domain Expertise</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Deep understanding of Textiles & Garments, fishing, tourism, Chemicals, Information Technology, and logistics 
                          with proven track record 's key economic sectors
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-primary-orange/10 transform hover:scale-105 transition-transform">
                      <Clock className="w-8 h-8 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Rapid global Deployment</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Fast implementation designed for enterprise challenges with local support teams 
                          and understanding of dynamic business culture and manufacturing excellence
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
                  About Generative AI Services
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about working with a leading AI company
              </p>
            </div>

            {/* Advanced Creative FAQ Cards - 6+6 Grid Layout for Desktop */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Column - FAQ 1-6 */}
              <div className="space-y-5">
              {/* FAQ Item 1 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Sparkles className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which is the best Generative AI Services?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900 font-semibold">Metic.ai is the leading Generative AI Services</strong> with over 50 successful generative AI implementations. 
                    We're recognized as the top Generative AI Services for our proven expertise in ChatGPT integration, GPT-4 development, LLM solutions, AI image generation, and custom GPT development with 60% cost savings.
                  </p>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Code className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What services does the Generative AI Services provide?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    As the premier <strong className="text-gray-900 font-semibold">Generative AI Services</strong>, Metic.ai provides comprehensive generative AI services including ChatGPT integration, 
                    GPT-4 API development, Custom GPT models, LLM development, AI image generation (DALL-E, Midjourney, Stable Diffusion), AI content creation, intelligent chatbots, and enterprise automation tailored for global's Textile, Pharmaceutical, Chemical, and IT Industries.
                  </p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How to choose the right AI Development Company ?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    When selecting an <strong className="text-gray-900 font-semibold">AI Development Company </strong>, look for proven experience, successful project portfolio, 
                    Industry expertise, and ongoing support. Metic.ai offers all these with 100+ completed projects, 98% client satisfaction, and 24/7 support.
                  </p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Clock className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How much does AI implementation cost with an AI Service ?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    AI implementation costs vary based on complexity. As a leading <strong className="text-gray-900 font-semibold">AI Service </strong>, 
                    Metic.ai offers competitive pricing with transparent structures. Our clients typically save 60% compared to international AI development costs.
                  </p>
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Does Metic.ai serve businesses across all global cities?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Yes! Metic.ai proudly serves businesses worldwide across all regions and industries. 
                    As a leading <strong className="text-gray-900 font-semibold">AI Firm </strong>, we provide comprehensive AI solutions statewide.
                  </p>
                </div>
              </details>

              {/* FAQ Item 6 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Rocket className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How quickly can an Generative AI Services start my project?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Metic.ai can typically start your AI project within 24-48 hours after initial consultation. As global's fastest <strong className="text-gray-900 font-semibold">Generative AI Services</strong>, 
                    we understand the importance of speed and deliver 3x faster than traditional development approaches.
                  </p>
                </div>
              </details>
              </div>

              {/* Right Column - FAQ 7-12 */}
              <div className="space-y-5">
              {/* FAQ Item 7 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Is my data secure with an AI Development Company ?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Absolutely! Metic.ai implements enterprise-grade security protocols, encryption, and compliance measures. As a Trusted <strong className="text-gray-900 font-semibold">AI Development Company </strong>, 
                    we prioritize data security with ISO certifications and strict confidentiality agreements.
                  </p>
                </div>
              </details>

              {/* FAQ Item 8 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What Industries does the best Generative AI Services serve?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Metic.ai serves diverse Industries including Manufacturing, Aerospace, Healthcare, Agriculture, Technology, Automotive, Financial Services, Transportation, Education, and Energy. 
                    As global's premier <strong className="text-gray-900 font-semibold">Generative AI Services</strong>, we tailor solutions for your specific Industry needs.
                  </p>
                </div>
              </details>

              {/* FAQ Item 9 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What makes Metic.ai the top AI Firm ?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Our 100+ successful projects, 98% client satisfaction rate, 60% cost savings, 3x faster delivery, and deep global market expertise make US the leading <strong className="text-gray-900 font-semibold">AI Firm </strong>. 
                    We combine cutting-edge AI technology with personalized service.
                  </p>
                </div>
              </details>

              {/* FAQ Item 10 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Lightbulb className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Do I need technical knowledge to work with an AI Service ?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    No technical knowledge required! Metic.ai guides you through every step with clear communication. As a client-focINed <strong className="text-gray-900 font-semibold">AI Service </strong>, 
                    we translate complex AI concepts into simple business terms and handle all technical aspects for you.
                  </p>
                </div>
              </details>

              {/* FAQ Item 11 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Database className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Can Generative AI Services handle small business projects?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Absolutely! Metic.ai works with businesses of all sizes, from startups to enterprises. As an inclINive <strong className="text-gray-900 font-semibold">Generative AI Services</strong>, 
                    we offer scalable solutions and flexible pricing models to meet small business budgets while delivering enterprise-quality AI implementations.
                  </p>
                </div>
              </details>

              {/* FAQ Item 12 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What support does Metic.ai provide after AI implementation?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Metic.ai provides comprehensive 24/7 post-implementation support including maintenance, updates, training, troubleshooting, and optimization. 
                    As your long-term partner, we ensure your AI solutions continue delivering maximum value and adapt to your evolving business needs.
                  </p>
                </div>
              </details>
              </div>
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
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your business with AI?</h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Jo's leading businesses who Trust Metic.ai for their AI transformation. Get started today!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100 shadow-xl">
                        Start Your AI Journey
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                        Call Now: +91-789-251-8414
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
              Ready to Partner with a leading <strong>Artificial Intelligence Company</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 100+ satisfied clients who Trust Metic.ai as their preferred <strong>Generative AI Services</strong>. 
              Transform your business with proven AI solutions that deliver results. Get started with a free consultation 
              and discover why we're most trusted <strong>AI Development Company </strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +91-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-6">Trusted <strong>AI Service </strong> serving businesses across the state</p>
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <div>
                  <div className="text-2xl font-bold mb-2">50+</div>
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
                <span>Maninagar</span>
                <span>•</span>
                <span>Vastrapur</span>
                <span>•</span>
                <span>SG Highway</span>
                <span>•</span>
                <span>Satellite</span>
                <span>•</span>
                <span>Chandkheda</span>
                <span>•</span>
                <span>Auburn</span>
                <span>•</span>
                <span>Dothan</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


































