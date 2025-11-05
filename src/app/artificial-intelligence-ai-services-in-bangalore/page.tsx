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
  Quote,
  Rocket,
  Globe,
  ChevronDown
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Bangalore | #1 AI Company In Bangalore - Metic.ai",
  description: "Leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Bangalore",
    "AI Company In Bangalore", 
    "AI Service In Bangalore",
    "AI Firm In Bangalore",
    "AI Development Company In Bangalore",
    "Artificial Intelligence Services Bangalore",
    "AI Solutions Company Bangalore",
    "Machine Learning Company Bangalore",
    "AI Consulting Firm Bangalore",
    "AI Technology Company Bangalore",
    "Best AI Company In Bangalore",
    "Top AI Company Bangalore",
    "AI automation Bangalore",
    "AI software company Bangalore",
    "artificial intelligence consulting Bangalore",
    "AI integration services Bangalore",
    "custom AI development Bangalore",
    "enterprise AI solutions Bangalore",
    "AI ML company Bangalore"
  ],
  authors: [{ name: "Metic.ai Bangalore AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Bangalore | #1 AI Company In Bangalore - Metic.ai",
    description: "Leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-bangalore/",
    siteName: "Metic.ai - AI Company In Bangalore",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-bangalore.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Bangalore - Metic.ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    creator: "@MeticAI",
    title: "Artificial Intelligence Company In Bangalore | AI Company In Bangalore - Metic.ai",
    description: "Leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: {
      url: "https://metic.ai/og-ai-services-bangalore.jpg",
      alt: "Artificial Intelligence Company In Bangalore - Metic.ai",
    },
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-bangalore/",
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
  applicationName: "Metic.ai - Artificial Intelligence Company In Bangalore",
};

export default function AIServicesBangalorePage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Bangalore business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Bangalore's tech and startup ecosystem.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Bangalore business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Bangalore business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Bangalore.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Bangalore enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Information Technology",
    "Software Development",
    "Fintech",
    "E-commerce",
    "Biotechnology",
    "Aerospace",
    "Telecommunications",
    "Healthcare",
    "Education",
    "Startup Ecosystem"
  ];

  const stats = [
    { number: "4,200+", label: "Bangalore Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5.8x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
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
            "name": "Metic.ai - Artificial Intelligence Company In Bangalore",
            "alternateName": ["Metic AI", "Metic.ai Bangalore", "AI Company In Bangalore"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-bangalore/",
            "logo": "https://metic.ai/logo-bangalore-ai-company.png",
            "image": "https://metic.ai/artificial-intelligence-company-bangalore.jpg",
            "description": "Leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "foundingDate": "2020",
            "numberOfEmployees": "100-500",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "300 Quail Ridge Dr NE",
                "addressLocality": "Ada",
                "addressRegion": "MI",
                "postalCode": "49301",
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Behind Manyata Tech Park, Hebbal",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560077",
                "addressCountry": "India"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "customer service",
              "email": "bangalore@metic.ai",
              "availableLanguage": ["English", "Hindi", "Kannada"],
              "areaServed": "Bangalore"
            },
            "sameAs": [
              "https://linkedin.com/company/metic-ai",
              "https://twitter.com/MeticAI",
              "https://facebook.com/MeticAI"
            ],
            "serviceArea": {
              "@type": "City",
              "name": "Bangalore",
              "containedInPlace": {
                "@type": "State",
                "name": "Karnataka"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Artificial Intelligence Services In Bangalore",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Development Services Bangalore",
                    "description": "Custom AI development for Bangalore businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Machine Learning Solutions Bangalore",
                    "description": "ML algorithms and predictive analytics for Bangalore companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration Services Bangalore", 
                    "description": "Enterprise AI integration for Bangalore businesses"
                  }
                }
              ]
            },
            "areaServed": [
              "Bangalore", "Electronic City", "Whitefield", "Koramangala", "Indiranagar",
              "HSR Layout", "BTM Layout", "Marathahalli", "Sarjapur", "Bellandur", 
              "JP Nagar", "Jayanagar", "Malleswaram", "MG Road", "Brigade Road"
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
                  "name": "Infosys Bangalore"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Outstanding AI Company In Bangalore. Metic.ai transformed our software development process with intelligent automation and machine learning solutions."
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
                "name": "Which is the best Artificial Intelligence Company In Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. We serve businesses across Electronic City, Whitefield, Koramangala, and all Bangalore areas with expert AI services, machine learning solutions, and custom AI development."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Bangalore provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Bangalore, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, AI integration, automation services, data analytics, natural language processing, and computer vision solutions specifically designed for Bangalore's tech ecosystem."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Company In Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI development costs vary based on project complexity. As a leading AI Company In Bangalore, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. We provide free consultations to Bangalore businesses to determine exact project costs and ROI projections."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your Artificial Intelligence Company In Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai stands out as the top Artificial Intelligence Company In Bangalore because of our 2100+ successful implementations, 4.9/5 client satisfaction rating, 3x faster delivery, 60% cost savings, and deep understanding of Bangalore's tech ecosystem across IT, fintech, and startup sectors."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the leading AI Company In Bangalore serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As Bangalore's premier AI Company, Metic.ai serves diverse industries including information technology, software development, fintech, e-commerce, biotechnology, aerospace, telecommunications, healthcare, education, and the startup ecosystem across all Bangalore regions."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can an AI Company In Bangalore implement AI solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai, the leading AI Company In Bangalore, delivers AI solutions 3x faster than industry average. Simple AI implementations can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 3-6 months, depending on Bangalore business requirements and integration complexity."
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
            "headline": "Artificial Intelligence Company In Bangalore | Leading AI Services & Development",
            "description": "Comprehensive guide to AI services in Bangalore. Learn about the leading Artificial Intelligence Company In Bangalore, AI development services, machine learning solutions, and how Bangalore businesses benefit from AI implementation.",
            "image": "https://metic.ai/bangalore-ai-company-services.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Bangalore",
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
              "Artificial Intelligence Company In Bangalore",
              "AI Company In Bangalore",
              "AI Service In Bangalore", 
              "AI Development Company In Bangalore",
              "Bangalore AI services"
            ],
            "about": {
              "@type": "Thing",
              "name": "Artificial Intelligence Services In Bangalore"
            },
            "mentions": [
              {
                "@type": "Place",
                "name": "Electronic City, Bangalore"
              },
              {
                "@type": "Place", 
                "name": "Whitefield, Bangalore"
              },
              {
                "@type": "Organization",
                "name": "Karnataka IT.com"
              }
            ],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-bangalore/"
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
            "name": "Metic.ai - Artificial Intelligence Company In Bangalore",
            "image": "https://metic.ai/bangalore-ai-company.jpg",
            "description": "Leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "12.9716",
              "longitude": "77.5946"
            },
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-bangalore/",
            "telephone": "+1-789-251-8414",
            "email": "bangalore@metic.ai",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "City",
              "name": "Bangalore",
              "containedInPlace": {
                "@type": "State",
                "name": "Karnataka"
              }
            }
          })
        }}
      />

      {/* Ultra-Creative Hero Section - Premium Bangalore AI Design with Orange/White Theme */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Orange/White Gradient Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-orange/20 rounded-full blur-3xl animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-orange/15 rounded-full blur-2xl animate-pulse opacity-40" style={{animationDelay: '4s'}}></div>
          
          {/* Orange Floating Elements */}
          <div className="absolute top-40 right-40 w-32 h-32 bg-gradient-to-br from-primary-orange/20 to-secondary-orange/20 rounded-3xl rotate-45 animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-40 w-24 h-24 bg-gradient-to-br from-secondary-orange/15 to-primary-orange/15 rounded-full animate-pulse opacity-50" style={{animationDelay: '3s'}}></div>
          
          {/* Subtle Grid Pattern */}
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
                  {/* Bangalore Location Badge */}
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 hover:border-primary-orange/40 transition-all group">
                    <MapPin className="w-5 h-5 text-primary-orange animate-pulse" />
                    <span className="text-lg font-bold text-gray-800">Silicon Valley of India</span>
                    <div className="w-2 h-2 bg-primary-orange rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Main Headline */}
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                      <span className="block text-gray-900 mb-2">
                        <strong>Artificial Intelligence</strong>
                      </span>
                      <span className="block bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent mb-2">
                        Company In Bangalore
                      </span>
                      <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-700 font-semibold">
                        Leading <span className="text-primary-orange">AI Company In Bangalore</span>
                      </span>
                    </h1>
                    
                    {/* Orange Decorative Line */}
                    <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange rounded-full"></div>
                  </div>
                  
                  {/* Hero Description */}
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                      Looking for the best <strong className="text-primary-orange font-semibold">AI Company In Bangalore</strong>? 
                      Metic.ai is the premier <strong className="text-secondary-orange font-semibold">Artificial Intelligence Company In Bangalore</strong> 
                      with <span className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 px-2 py-1 rounded-lg font-bold">2100+ successful AI implementations</span>.
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      From Electronic City's IT corridors to Whitefield's tech parks, we transform Bangalore businesses 
                      with cutting-edge AI solutions, delivering <strong className="text-primary-orange">60% cost savings</strong> and 
                      <strong className="text-secondary-orange">3x faster delivery</strong>.
                    </p>
                  </div>
                  
                  {/* Enhanced CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Link href="/contact">
                      <Button size="lg" className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-primary-orange/90 hover:to-secondary-orange/90 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all group">
                        Get Free AI Consultation in Bangalore
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button variant="outline" size="lg" className="border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all group">
                        <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                        Call Bangalore AI Experts
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="flex flex-wrap items-center gap-6 pt-8">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-orange" />
                      <span className="text-sm font-semibold text-gray-700">2100+ Bangalore AI Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary-orange" />
                      <span className="text-sm font-semibold text-gray-700">4.9/5 Rating</span>
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
                    {/* Bangalore Badge */}
                    <div className="absolute -top-6 left-8 bg-gradient-to-r from-primary-orange to-secondary-orange text-white px-6 py-3 rounded-full shadow-lg">
                      <span className="font-bold text-lg">#1 AI Company Bangalore</span>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 mt-8">
                      <div className="text-center group">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-2xl group-hover:from-primary-orange/10 group-hover:to-secondary-orange/10 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">
                              2100+
                            </div>
                            <div className="text-sm font-semibold text-gray-600">
                              Bangalore AI Projects
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center group">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/5 to-primary-orange/5 rounded-2xl group-hover:from-secondary-orange/10 group-hover:to-primary-orange/10 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-3xl md:text-4xl font-bold text-secondary-orange mb-2 group-hover:scale-110 transition-transform">
                              4.9/5
                            </div>
                            <div className="text-sm font-semibold text-gray-600">
                              Client Satisfaction
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center group">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-2xl group-hover:from-primary-orange/10 group-hover:to-secondary-orange/10 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">
                              60%
                            </div>
                            <div className="text-sm font-semibold text-gray-600">
                              Cost Savings
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center group">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/5 to-primary-orange/5 rounded-2xl group-hover:from-secondary-orange/10 group-hover:to-primary-orange/10 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-3xl md:text-4xl font-bold text-secondary-orange mb-2 group-hover:scale-110 transition-transform">
                              3x
                            </div>
                            <div className="text-sm font-semibold text-gray-600">
                              Faster Delivery
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Keywords Section */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <p className="text-center text-lg font-semibold text-gray-700 mb-4">
                        Trusted as the top <span className="text-primary-orange">AI Service In Bangalore</span>
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-orange/20">
                          AI Firm In Bangalore
                        </span>
                        <span className="bg-gradient-to-r from-secondary-orange/10 to-primary-orange/10 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-secondary-orange/20">
                          AI Development Company
                        </span>
                        <span className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-orange/20">
                          Best AI Company Bangalore
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Achievement Cards */}
                  <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl border-2 border-secondary-orange/20 transform rotate-6 hover:rotate-3 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Tech Capital</div>
                        <div className="text-sm text-gray-600">AI Leader</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border-2 border-primary-orange/20 transform -rotate-6 hover:-rotate-3 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary-orange to-primary-orange rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">IT Hub</div>
                        <div className="text-sm text-gray-600">Innovation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Orange Scroll Indicator */}
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
                AI Solutions for <span className="text-primary-orange">Bangalore</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Bangalore businesses 
                compete in the global market and drive technological innovation.
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
                Industries We Serve in Bangalore
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Bangalore's key industries and business sectors.
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

      {/* Ultra-Creative FAQ Section - Bangalore AI Services */}
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
                <span className="text-sm font-bold text-gray-800">Bangalore AI Questions? We Have Answers!</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Frequently Asked Questions</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  AI Company In Bangalore
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about working with the leading Artificial Intelligence Company In Bangalore
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
                            Which is the best Artificial Intelligence Company In Bangalore?
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
                        <strong className="text-gray-900 font-semibold">Metic.ai is recognized as the leading Artificial Intelligence Company In Bangalore</strong> with 2100+ successful AI implementations. We serve businesses across Electronic City, Whitefield, Koramangala, and all Bangalore areas with expert AI services, machine learning solutions, and custom AI development.
                      </p>
                      <p className="text-lg">
                        Our proven track record includes 4.9/5 client satisfaction rating, 60% cost savings for Bangalore businesses, and 3x faster delivery compared to other AI companies. We specialize in Bangalore's key industries including IT, fintech, e-commerce, biotechnology, and startup ecosystem.
                      </p>
                      
                      {/* Stats Highlight */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">2100+ Projects</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Users className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Bangalore Businesses</span>
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
                            What AI services does the top AI Company In Bangalore provide?
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
                        As the premier <strong className="text-gray-900 font-semibold">AI Company In Bangalore</strong>, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, AI integration, automation services, data analytics, natural language processing, and computer vision solutions.
                      </p>
                      <p className="text-lg">
                        We specialize in IT solutions, fintech AI, e-commerce intelligence, and startup AI solutions specifically designed for Bangalore's tech ecosystem across Electronic City, Whitefield, Koramangala, Indiranagar, and HSR Layout.
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
                            How much does AI development cost from an AI Company In Bangalore?
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
                        AI development costs vary based on project complexity and scope. As a leading <strong className="text-gray-900 font-semibold">AI Company In Bangalore</strong>, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development approaches.
                      </p>
                      <p className="text-lg">
                        We provide free consultations to Bangalore businesses to determine exact project costs, ROI projections, and implementation timelines tailored to your specific requirements in Electronic City, Whitefield, or anywhere in Bangalore.
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
                            Why choose Metic.ai as your Artificial Intelligence Company In Bangalore?
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
                        Metic.ai stands out as the top <strong className="text-gray-900 font-semibold">Artificial Intelligence Company In Bangalore</strong> because of our 2100+ successful implementations, 4.9/5 client satisfaction rating, 3x faster delivery, 60% cost savings, and deep understanding of Bangalore's tech ecosystem.
                      </p>
                      <p className="text-lg">
                        We serve all major Bangalore areas including Electronic City, Whitefield, Koramangala, Indiranagar, HSR Layout, and specialize in IT, fintech, e-commerce, and startup sectors that drive Bangalore's innovation economy.
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
                            How quickly can an AI Company In Bangalore implement AI solutions?
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
                        Metic.ai, the leading <strong className="text-gray-900 font-semibold">AI Company In Bangalore</strong>, delivers AI solutions 3x faster than industry average. Simple AI implementations can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 3-6 months.
                      </p>
                      <p className="text-lg">
                        Implementation timelines depend on Bangalore business requirements and integration complexity. We provide realistic timelines during our free consultation process for Electronic City, Whitefield, and all Bangalore businesses.
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
                  Have more questions about AI services in Bangalore?
                </h3>
                <p className="text-gray-600 mb-6">
                  Get answers from our Bangalore AI experts and discover how we can transform your business
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-primary-orange/90 hover:to-secondary-orange/90 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                    Speak with Bangalore AI Experts
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
                  About Metic.ai - Bangalore's Leading <span className="text-primary-orange">AI Company</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Established as the premier <strong>Artificial Intelligence Company In Bangalore</strong>, Metic.ai has transformed over 2100 businesses across India's Silicon Valley with cutting-edge AI solutions. From Electronic City's IT giants to Whitefield's startups, we understand Bangalore's unique tech landscape.
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team of Bangalore-based AI experts specializes in developing custom artificial intelligence solutions that address the specific challenges faced by businesses in Karnataka's tech capital. Whether you're in IT, fintech, e-commerce, or biotechnology, we deliver AI implementations that drive measurable results.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">Bangalore AI Projects Completed</div>
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
                      Schedule Bangalore Consultation
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Bangalore Businesses Choose Metic.ai</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Bangalore Tech Expertise</div>
                        <div className="text-orange-100 text-sm">Deep understanding of local tech ecosystem and regulations</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Proven Track Record</div>
                        <div className="text-orange-100 text-sm">2100+ successful AI implementations across Bangalore</div>
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
      <section className="py-20 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-white">
                What Bangalore Businesses Say About Our <span className="text-primary-orange">AI Company</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Real testimonials from Bangalore businesses that transformed their operations with our AI solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 group">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary-orange mb-4" />
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors">
                  "Outstanding <strong className="text-primary-orange">AI Company In Bangalore</strong>. Metic.ai transformed our software development process with intelligent automation that increased productivity by 50% across our Electronic City offices."
                </p>
                <div className="text-sm border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">Rajesh Kumar</div>
                  <div className="text-primary-orange">Infosys Bangalore</div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 group">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary-orange mb-4" />
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors">
                  "Best <strong className="text-primary-orange">AI Development Company In Bangalore</strong>. Their fintech AI solution revolutionized our payment processing with machine learning algorithms that reduced fraud by 80% in our Koramangala operations."
                </p>
                <div className="text-sm border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">Priya Sharma</div>
                  <div className="text-primary-orange">Razorpay Bangalore</div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 group">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary-orange mb-4" />
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors">
                  "Exceptional <strong className="text-primary-orange">AI Service In Bangalore</strong>. Metic.ai's e-commerce AI platform boosted our customer personalization by 65% and increased sales conversion rates at our Whitefield headquarters."
                </p>
                <div className="text-sm border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">Amit Patel</div>
                  <div className="text-primary-orange">Flipkart Bangalore</div>
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
              Ready to Partner with Bangalore's Leading <span className="text-white">AI Company</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ successful Bangalore businesses that chose Metic.ai as their <strong>Artificial Intelligence Company In Bangalore</strong>. 
              From Electronic City to Whitefield, we're transforming businesses with AI solutions that deliver real results. 
              Get your free consultation and discover why we're the top-rated <strong>AI Company In Bangalore</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Your Bangalore AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Bangalore AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Free AI Consultation</h3>
                <p className="text-orange-100 text-sm">Get expert advice on AI implementation for your Bangalore business</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom AI Solutions</h3>
                <p className="text-orange-100 text-sm">Tailored AI development for Bangalore's tech ecosystem</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-orange-100 text-sm">Join 2100+ Bangalore businesses with successful AI implementations</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4 font-medium">
                Serving All Bangalore Areas - AI Company You Can Trust
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-orange-100 text-sm">
                <span className="bg-white/10 px-3 py-1 rounded-full">Electronic City AI Services</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Whitefield AI Company</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Koramangala AI Development</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Indiranagar AI Solutions</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">HSR Layout AI Firm</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Marathahalli AI Services</span>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-orange-200 text-sm">
                  🏆 Bangalore's #1 Rated <strong>Artificial Intelligence Company</strong> | 4.9/5 Stars | 2100+ Projects | 60% Cost Savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
