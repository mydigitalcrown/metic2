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
  Sparkles
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

  const stats = [
    { number: "125+", label: "AR Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3.9x", label: "Average ROI Increase" },
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

      {/* Ultra-Creative Hero Section - Premium Arkansas AI Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-green-50 to-orange-50 overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Arkansas Natural State Gradient Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-orange/20 rounded-full blur-3xl animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/15 rounded-full blur-2xl animate-pulse opacity-40" style={{animationDelay: '4s'}}></div>
          
          {/* Natural State Floating Elements */}
          <div className="absolute top-40 right-40 w-32 h-32 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-3xl rotate-45 animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-40 w-24 h-24 bg-gradient-to-br from-primary-orange/15 to-green-400/15 rounded-full animate-pulse opacity-50" style={{animationDelay: '3s'}}></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#10B981 1.5px, transparent 1.5px), linear-gradient(90deg, #10B981 1.5px, transparent 1.5px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center min-h-screen py-20">
              <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                
                {/* Left Content */}
                <div className="space-y-8">
                  {/* Arkansas Location Badge */}
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-green-300/30 hover:border-emerald-400/40 transition-all group">
                    <MapPin className="w-5 h-5 text-emerald-500 animate-pulse" />
                    <span className="text-lg font-bold text-gray-800">Serving The Natural State</span>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Main Headline */}
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                      <span className="block text-gray-900 mb-2">
                        <strong>Artificial Intelligence</strong>
                      </span>
                      <span className="block bg-gradient-to-r from-emerald-500 via-green-500 to-primary-orange bg-clip-text text-transparent mb-2">
                        Company In Arkansas
                      </span>
                      <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-700 font-semibold">
                        Leading <span className="text-emerald-500">AI Company In Arkansas</span>
                      </span>
                    </h1>
                    
                    {/* Arkansas-Themed Decorative Line */}
                    <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-green-500 to-primary-orange rounded-full"></div>
                  </div>
                  
                  {/* Hero Description */}
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                      Looking for the best <strong className="text-emerald-500 font-semibold">AI Company In Arkansas</strong>? 
                      Metic.ai is the premier <strong className="text-green-600 font-semibold">Artificial Intelligence Company In Arkansas</strong> 
                      with <span className="bg-gradient-to-r from-emerald-100 to-green-100 px-2 py-1 rounded-lg font-bold">2100+ successful AI implementations</span>.
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      From Little Rock's business districts to Bentonville's corporate headquarters, we transform Arkansas businesses 
                      with cutting-edge AI solutions, delivering <strong className="text-emerald-500">60% cost savings</strong> and 
                      <strong className="text-green-600">3x faster delivery</strong>.
                    </p>
                  </div>
                  
                  {/* Enhanced CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Link href="/contact">
                      <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all group">
                        Get Free AI Consultation in Arkansas
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button variant="outline" size="lg" className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all group">
                        <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                        Call Arkansas AI Experts
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="flex flex-wrap items-center gap-6 pt-8">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm font-semibold text-gray-700">2100+ Arkansas AI Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-gray-700">4.9/5 Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Visual Elements */}
                <div className="relative">
                  {/* Main Stats Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-emerald-300/30 hover:border-green-400/40 transition-all">
                    {/* Arkansas Badge */}
                    <div className="absolute -top-6 left-8 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-full shadow-lg">
                      <span className="font-bold text-lg">#1 AI Company Arkansas</span>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 mt-8">
                      <div className="text-center group">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-green-100/50 rounded-2xl group-hover:from-emerald-200/50 group-hover:to-green-200/50 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2 group-hover:scale-110 transition-transform">
                              2100+
                            </div>
                            <div className="text-sm font-semibold text-gray-600">
                              Arkansas AI Projects
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center group">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-emerald-100/50 rounded-2xl group-hover:from-green-200/50 group-hover:to-emerald-200/50 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
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
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-green-100/50 rounded-2xl group-hover:from-emerald-200/50 group-hover:to-green-200/50 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2 group-hover:scale-110 transition-transform">
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
                          <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-emerald-100/50 rounded-2xl group-hover:from-green-200/50 group-hover:to-emerald-200/50 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
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
                        Trusted as the top <span className="text-emerald-500">AI Service In Arkansas</span>
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="bg-gradient-to-r from-emerald-100 to-green-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-300">
                          AI Firm In Arkansas
                        </span>
                        <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-300">
                          AI Development Company
                        </span>
                        <span className="bg-gradient-to-r from-emerald-100 to-green-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-300">
                          Best AI Company Arkansas
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Achievement Cards */}
                  <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl border-2 border-green-300 transform rotate-6 hover:rotate-3 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Natural State</div>
                        <div className="text-sm text-gray-600">AI Leader</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border-2 border-emerald-300 transform -rotate-6 hover:-rotate-3 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Walmart Tech</div>
                        <div className="text-sm text-gray-600">Hub Partner</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Arkansas-Themed Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-500 rounded-full mt-2 animate-pulse"></div>
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

      {/* FAQ Section for ASO */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions About <span className="text-primary-orange">AI Company In Arkansas</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about choosing the right Artificial Intelligence Company In Arkansas for your business needs.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Which is the best Artificial Intelligence Company In Arkansas?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai is recognized as the leading <strong>Artificial Intelligence Company In Arkansas</strong> with 2100+ successful AI implementations. We serve businesses across Little Rock, Fort Smith, Fayetteville, and all Arkansas cities with expert AI services, machine learning solutions, and custom AI development. Our proven track record includes 4.9/5 client satisfaction rating and 60% cost savings for Arkansas businesses.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What AI services does the top AI Company In Arkansas provide?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    As the premier <strong>AI Company In Arkansas</strong>, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, AI integration, automation services, data analytics, natural language processing, and computer vision solutions. We specialize in agriculture AI, retail intelligence, manufacturing automation, and custom business solutions specifically designed for Arkansas's diverse industries.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How much does AI development cost from an AI Company In Arkansas?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI development costs vary based on project complexity and scope. As a leading <strong>AI Company In Arkansas</strong>, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development approaches. We provide free consultations to Arkansas businesses to determine exact project costs, ROI projections, and implementation timelines tailored to your specific requirements.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Why choose Metic.ai as your Artificial Intelligence Company In Arkansas?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai stands out as the top <strong>Artificial Intelligence Company In Arkansas</strong> because of our 2100+ successful implementations, 4.9/5 client satisfaction rating, 3x faster delivery, 60% cost savings, and deep understanding of Arkansas's business landscape. We serve all major Arkansas cities including Little Rock, Fort Smith, Fayetteville, Bentonville, Springdale, and specialize in agriculture, manufacturing, retail, and technology sectors.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Which industries does the leading AI Company In Arkansas serve?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    As Arkansas's premier <strong>AI Company</strong>, Metic.ai serves diverse industries including agriculture, manufacturing, healthcare, technology, transportation, retail, financial services, energy, food processing, and logistics. We have extensive experience working with businesses across all Arkansas regions, from Little Rock's financial sector to Bentonville's retail giants and Fayetteville's agricultural innovations.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How quickly can an AI Company In Arkansas implement AI solutions?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai, the leading <strong>AI Company In Arkansas</strong>, delivers AI solutions 3x faster than industry average. Simple AI implementations can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 3-6 months, depending on Arkansas business requirements and integration complexity. We provide realistic timelines during our free consultation process.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Have more questions about AI services in Arkansas?
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Speak with Arkansas AI Experts
                </Button>
              </Link>
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
