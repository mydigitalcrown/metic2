import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
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
  Activity
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In California | #1 AI Company In California - Metic.ai",
  description: "Leading Artificial Intelligence Company In California with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In California",
    "AI Company In California", 
    "AI Service In California",
    "AI Firm In California",
    "AI Development Company In California",
    "Artificial Intelligence Services California",
    "AI Solutions Company California",
    "Machine Learning Company California",
    "AI Consulting Firm California",
    "AI Technology Company California",
    "Best AI Company In California",
    "Top AI Company California",
    "AI automation California",
    "AI software company California",
    "artificial intelligence consulting California",
    "AI integration services California",
    "custom AI development California",
    "enterprise AI solutions California",
    "AI ML company California"
  ],
  authors: [{ name: "Metic.ai California AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In California | #1 AI Company In California - Metic.ai",
    description: "Leading Artificial Intelligence Company In California with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-california/",
    siteName: "Metic.ai - AI Company In California",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-california.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In California - Metic.ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    creator: "@MeticAI",
    title: "Artificial Intelligence Company In California | AI Company In California - Metic.ai",
    description: "Leading Artificial Intelligence Company In California with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: {
      url: "https://metic.ai/og-ai-services-california.jpg",
      alt: "Artificial Intelligence Company In California - Metic.ai",
    },
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-california/",
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
  applicationName: "Metic.ai - Artificial Intelligence Company In California",
};

export default function AIServicesCaliforniaPage() {
  const services = [
    {
      title: "AI That Automates Your Work",
      description: "Stop doing repetitive tasks manually. We build AI that handles your routine work so your team can focus on what actually matters.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Smart Predictions",
      description: "Know what's coming next. Our machine learning models predict customer behavior, market trends, and business outcomes with scary accuracy.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Solutions",
      description: "Your business is unique, so why use generic AI? We build exactly what you need, nothing more, nothing less.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data That Actually Helps",
      description: "Turn your messy data into clear insights. We make your numbers tell stories that help you make better decisions.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "AI Content & Communication",
      description: "Let AI handle your content creation, customer support, and communication while keeping your brand voice authentic.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Infrastructure",
      description: "Build a solid foundation for your AI. We set up systems that grow with your business and actually work when you need them.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Technology",
    "Entertainment",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Agriculture",
    "Aerospace",
    "Biotech",
    "Real Estate",
    "Renewable Energy"
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
            "name": "Metic.ai - Artificial Intelligence Company In California",
            "alternateName": "AI Company In California",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-california/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-california.jpg",
            "description": "Leading Artificial Intelligence Company In California with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "foundingDate": "2018",
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "California",
              "addressCountry": "US",
              "addressLocality": "California"
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
              "name": "California",
              "containedInPlace": {
                "@type": "Country",
                "name": "United States"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services California",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Artificial Intelligence Services California",
                    "description": "Custom AI development and machine learning solutions"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions California",
                    "description": "Advanced ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "AI Integration Services California",
                    "description": "Enterprise AI integration and deployment services"
                  }
                }
              ]
            },
            "areaServed": [
              "San Francisco", "Los Angeles", "San Diego", "San Jose", "Sacramento", 
              "Oakland", "Santa Ana", "Anaheim", "Riverside", "Stockton",
              "Fresno", "Long Beach", "Bakersfield", "Irvine", "Chula Vista",
              "Fremont", "Santa Clarita", "Oxnard", "Fontana", "Moreno Valley"
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
              "AI Automation California"
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
            "headline": "Artificial Intelligence Company In California | Leading AI Company In California - Metic.ai",
            "description": "Leading Artificial Intelligence Company In California with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "image": "https://metic.ai/og-ai-services-california.jpg",
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-california/"
            },
            "articleSection": "Artificial Intelligence Services",
            "keywords": [
              "Artificial Intelligence Company In California",
              "AI Company In California",
              "AI Service In California",
              "AI Firm In California",
              "AI Development Company In California"
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
                "name": "California",
                "sameAs": "https://en.wikipedia.org/wiki/California"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "San Francisco",
                "sameAs": "https://en.wikipedia.org/wiki/San_Francisco"
              },
              {
                "@type": "Place",
                "name": "Los Angeles", 
                "sameAs": "https://en.wikipedia.org/wiki/Los_Angeles"
              },
              {
                "@type": "Place",
                "name": "San Diego",
                "sameAs": "https://en.wikipedia.org/wiki/San_Diego"
              },
              {
                "@type": "Place",
                "name": "Silicon Valley",
                "sameAs": "https://en.wikipedia.org/wiki/Silicon_Valley"
              }
            ]
          })
        }}
      />

      {/* Ultra-Creative Hero Section - Premium California Innovation Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50 overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* California Innovation Gradient Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-orange/20 rounded-full blur-3xl animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/15 rounded-full blur-2xl animate-pulse opacity-40" style={{animationDelay: '4s'}}></div>
          
          {/* Silicon Valley Floating Elements */}
          <div className="absolute top-40 right-40 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-orange-300/20 rounded-3xl rotate-45 animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-40 w-24 h-24 bg-gradient-to-br from-primary-orange/15 to-blue-400/15 rounded-full animate-pulse opacity-50" style={{animationDelay: '3s'}}></div>
          
          {/* Innovation Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#2563EB 1.5px, transparent 1.5px), linear-gradient(90deg, #2563EB 1.5px, transparent 1.5px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center min-h-screen py-20">
              <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                
                {/* Left Content */}
                <div className="space-y-8">
                  {/* California Innovation Badge */}
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-blue-300/30 hover:border-orange-400/40 transition-all group">
                    <MapPin className="w-5 h-5 text-blue-500 animate-pulse" />
                    <span className="text-lg font-bold text-gray-800">California Innovation Ecosystem</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Main Headline */}
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                      <span className="block text-gray-900 mb-2">
                        <strong>Artificial Intelligence</strong>
                      </span>
                      <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-primary-orange bg-clip-text text-transparent mb-2">
                        Company In California
                      </span>
                      <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-700 font-semibold">
                        Leading <span className="text-blue-600">AI Company In California</span>
                      </span>
                    </h1>
                    
                    {/* California Innovation Decorative Line */}
                    <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-primary-orange rounded-full"></div>
                  </div>
                  
                  {/* Hero Description */}
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                      Looking for the best <strong className="text-blue-600 font-semibold">AI Company In California</strong>? 
                      Metic.ai is the premier <strong className="text-indigo-600 font-semibold">Artificial Intelligence Company In California</strong> 
                      with <span className="bg-gradient-to-r from-blue-100 to-orange-100 px-2 py-1 rounded-lg font-bold">2100+ successful AI implementations</span>.
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      From Silicon Valley's tech giants to LA's entertainment studios and San Diego's biotech corridors, we transform California businesses 
                      with cutting-edge AI solutions, delivering <strong className="text-blue-600">60% cost savings</strong> and 
                      <strong className="text-indigo-600">3x faster delivery</strong>.
                    </p>
                  </div>
                  
                  {/* Enhanced CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Link href="/contact">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all group">
                        Get Free AI Consultation
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all group">
                        <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                        Call: +1-789-251-8414
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="flex flex-wrap items-center gap-6 pt-8">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700">2100+ California AI Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                      <span className="text-sm font-semibold text-gray-700">Silicon Valley Partner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Visual Elements */}
                <div className="relative">
                  {/* Main Stats Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-blue-300/30 hover:border-indigo-400/40 transition-all">
                    {/* California Innovation Badge */}
                    <div className="absolute -top-6 left-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg">
                      <span className="font-bold text-lg">#1 AI Company California</span>
                    </div>
                    
                    {/* California-Specific Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 mt-8">
                      <div className="text-center group">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-2xl group-hover:from-blue-200/50 group-hover:to-indigo-200/50 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                              $3.2T
                            </div>
                            <div className="text-xs font-semibold text-gray-600">
                              CA GDP (5th largest globally)
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center group">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-orange-100/50 rounded-2xl group-hover:from-indigo-200/50 group-hover:to-orange-200/50 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-2xl md:text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">
                              40%
                            </div>
                            <div className="text-xs font-semibold text-gray-600">
                              US Tech Industry
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center group">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-2xl group-hover:from-blue-200/50 group-hover:to-indigo-200/50 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                              500+
                            </div>
                            <div className="text-xs font-semibold text-gray-600">
                              AI Projects Delivered
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center group">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-orange-100/50 rounded-2xl group-hover:from-indigo-200/50 group-hover:to-orange-200/50 transition-all"></div>
                          <div className="relative p-6 rounded-2xl">
                            <div className="text-2xl md:text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">
                              24/7
                            </div>
                            <div className="text-xs font-semibold text-gray-600">
                              Expert Support
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Keywords Section */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <p className="text-center text-lg font-semibold text-gray-700 mb-4">
                        Trusted as the top <span className="text-blue-600">AI Service In California</span>
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-300">
                          AI Firm In California
                        </span>
                        <span className="bg-gradient-to-r from-indigo-100 to-orange-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-300">
                          AI Development Company
                        </span>
                        <span className="bg-gradient-to-r from-blue-100 to-orange-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-300">
                          Best AI Company California
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Achievement Cards */}
                  <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl border-2 border-indigo-300 transform rotate-6 hover:rotate-3 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Silicon Valley</div>
                        <div className="text-sm text-gray-600">AI Leader</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border-2 border-blue-300 transform -rotate-6 hover:-rotate-3 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Innovation</div>
                        <div className="text-sm text-gray-600">Capital</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* California Innovation Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Core AI Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                What We Actually Do
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                AI Solutions That{' '}
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Make Business Sense
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Here's the thing - AI isn't magic. It's a tool that can automate your boring tasks, predict what your customers want, 
                and help you make smarter decisions. We build the kind of AI that pays for itself.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const gradientClasses = {
                  blue: "from-primary-orange to-secondary-orange",
                  purple: "from-secondary-orange to-light-orange", 
                  green: "from-dark-orange to-primary-orange",
                  orange: "from-primary-orange to-light-orange",
                  indigo: "from-dark-orange to-secondary-orange",
                  red: "from-primary-orange to-dark-orange"
                };
                
                return (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradientClasses[service.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-gray-900 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <Link href={service.href} className="inline-flex items-center text-primary-orange hover:text-dark-orange font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* California Industries */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                Who We Work With
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                California Industries We{' '}
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Actually Understand
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not trying to be everything to everyone. We focus on industries where we know how to make AI work 
                because we've done it before and understand the real challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Tech Companies</h3>
                <p className="text-gray-600 mb-4">We get it - you need AI that scales with your product and doesn't break when you hit traffic spikes. Built for Silicon Valley pace.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-orange" />
                    Code review automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-orange" />
                    User behavior prediction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-orange" />
                    Smart A/B testing
                  </li>
                </ul>
              </div>

              <div className="group p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-orange to-light-orange rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Entertainment & Media</h3>
                <p className="text-gray-600 mb-4">Hollywood moves fast. We build AI that helps you understand your audience and create content that connects.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-orange" />
                    Audience sentiment tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-orange" />
                    Content recommendation engines
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-orange" />
                    Smart content personalization
                  </li>
                </ul>
              </div>

              <div className="group p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-dark-orange to-primary-orange rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Finance & FinTech</h3>
                <p className="text-gray-600 mb-4">Money matters. We build AI that spots fraud, assesses risk, and helps you make smarter financial decisions with confidence.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-dark-orange" />
                    Real-time fraud detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-dark-orange" />
                    Smart risk assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-dark-orange" />
                    Automated compliance monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Why Work With Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                What Makes{' '}
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Metic Different
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not the biggest AI company, but we might be the most practical. We focus on building AI that works, 
                not AI that sounds impressive in meetings.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">We Actually Get Business</h3>
                <p className="text-gray-600">We don't just build cool tech - we solve real business problems. Every AI solution we create has to make financial sense.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-orange to-light-orange rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Results You Can Measure</h3>
                <p className="text-gray-600">No vague promises about transformation. We set clear metrics upfront and deliver AI that moves your bottom line.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-dark-orange to-primary-orange rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">No BS Communication</h3>
                <p className="text-gray-600">We explain things in plain English. No technical jargon, no buzzword bingo. Just clear communication about what we're building and why.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-dark-orange rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Your Data Stays Yours</h3>
                <p className="text-gray-600">We're not interested in your data for our own purposes. We build secure systems and keep your information exactly where it belongs - with you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Services California Content - SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* California AI Market Leadership */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Leading </span>
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Artificial Intelligence Company In California
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powering California's innovation economy with cutting-edge AI solutions across Silicon Valley, Los Angeles, San Diego, and beyond
              </p>
            </div>

            <div className="space-y-16">
              {/* California AI Innovation Ecosystem */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    California's <span className="text-primary-orange">AI Innovation Hub</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As the premier <strong className="text-gray-900">Artificial Intelligence Company In California</strong>, Metic.ai is 
                    uniquely positioned at the heart of the world's largest technology ecosystem. California leads global AI innovation 
                    with over 40% of US AI companies, $3.2 trillion in economic output, and unparalleled access to cutting-edge research 
                    from Stanford, UC Berkeley, and Caltech.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Company In California</strong> leverages this unique environment to deliver 
                    world-class artificial intelligence solutions to businesses across the Golden State. From Silicon Valley startups to 
                    Los Angeles entertainment giants, San Diego biotech leaders to San Francisco financial institutions, we understand 
                    California's diverse industry landscape and innovation requirements.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Silicon Valley Expertise</h4>
                        <p className="text-sm text-gray-600">
                          Deep technology roots in the world's leading innovation hub with access to top AI talent and research
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Multi-Industry Experience</h4>
                        <p className="text-sm text-gray-600">
                          Proven success across California's diverse economy: tech, entertainment, biotech, aerospace, and finance
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Regulatory Compliance</h4>
                        <p className="text-sm text-gray-600">
                          Expert understanding of California's AI regulations, privacy laws, and industry compliance requirements
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-primary-orange/20">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    California AI Market Stats
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">$3.2T</div>
                      <div className="text-sm text-gray-600 font-medium">California GDP (5th largest globally)</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-secondary-orange mb-2">40%</div>
                      <div className="text-sm text-gray-600 font-medium">US AI Companies in California</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">2.8M</div>
                      <div className="text-sm text-gray-600 font-medium">Tech Workers Statewide</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-4 border-l-4 border-primary-orange">
                      <p className="text-sm font-medium text-gray-900">
                        <strong>California Leadership:</strong> Home to 35% of global venture capital and the world's most 
                        advanced AI research institutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* California-Specific AI Solutions */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  AI Solutions for <span className="text-primary-orange">California's Leading Industries</span>
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Silicon Valley Tech</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Custom AI solutions for California's technology giants and innovative startups. From San Francisco to San Jose, 
                      we deliver scalable AI that powers the next generation of digital products.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Product intelligence and user analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Automated testing and deployment
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        AI-powered SaaS features
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Hollywood Entertainment</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI solutions transforming Los Angeles entertainment industry with content creation, audience analytics, 
                      and production optimization for studios, streaming platforms, and content creators.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Content recommendation engines
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Automated video editing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Audience sentiment analysis
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">San Diego Biotech</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Advanced AI for California's biotechnology and pharmaceutical companies, accelerating drug discovery, 
                      clinical trials, and precision medicine initiatives across San Diego's biotech corridor.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Drug discovery acceleration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Clinical trial optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Genomic data analysis
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Central Valley Agriculture</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Precision agriculture AI solutions for California's Central Valley farms, optimizing crop yields, 
                      water usage, and sustainable farming practices across the nation's largest agricultural region.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Crop monitoring and prediction
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Smart irrigation systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Sustainable farming optimization
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI-powered financial solutions for California's banking, fintech, and investment institutions, 
                      enhancing fraud detection, risk assessment, and customer experience across the state.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Real-time fraud detection
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Algorithmic trading systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Credit risk assessment
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Aerospace & Defense</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Advanced AI systems for California's aerospace and defense contractors, supporting autonomous systems, 
                      predictive maintenance, and mission-critical operations for industry leaders.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Autonomous vehicle systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Predictive maintenance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Mission optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* California AI Implementation Success Stories */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-12 border-2 border-primary-orange/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  California AI Implementation <span className="text-primary-orange">Success Stories</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary-orange">SF</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">San Francisco Fintech</h4>
                        <p className="text-sm text-gray-600">Series B Startup</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Metic.ai's fraud detection AI reduced false positives by 85% and saved our San Francisco fintech 
                      $2.3M annually. Best AI Company In California we've worked with."
                    </p>
                    <div className="text-3xl font-bold text-primary-orange">85%</div>
                    <div className="text-sm text-gray-600">Fraud Detection Accuracy</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-secondary-orange">LA</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Los Angeles Studio</h4>
                        <p className="text-sm text-gray-600">Entertainment Giant</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "This Artificial Intelligence Company In California revolutionized our content recommendation 
                      system. 60% increase in viewer engagement across our streaming platform."
                    </p>
                    <div className="text-3xl font-bold text-secondary-orange">60%</div>
                    <div className="text-sm text-gray-600">Engagement Increase</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary-orange">SD</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">San Diego Biotech</h4>
                        <p className="text-sm text-gray-600">Pharmaceutical Leader</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Metic.ai accelerated our drug discovery process by 40% using AI. Outstanding AI Firm In California 
                      with deep biotech expertise."
                    </p>
                    <div className="text-3xl font-bold text-primary-orange">40%</div>
                    <div className="text-sm text-gray-600">Faster Drug Discovery</div>
                  </div>
                </div>
              </div>

              {/* California AI Partnership Approach */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">California AI Expertise</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">AI Projects in California</span>
                        <span className="font-bold text-primary-orange">500+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">California Client Satisfaction</span>
                        <span className="font-bold text-secondary-orange">98.5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average ROI for CA Businesses</span>
                        <span className="font-bold text-primary-orange">4.8x</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Implementation Success Rate</span>
                        <span className="font-bold text-secondary-orange">100%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-6 border-l-4 border-primary-orange">
                    <h4 className="font-bold text-gray-900 mb-2">California Advantage</h4>
                    <p className="text-sm text-gray-700">
                      As the leading AI Development Company In California, we understand the unique challenges and opportunities 
                      of operating in the world's most competitive technology market. Our California-based expertise delivers 
                      world-class AI solutions that scale globally.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Your California <span className="text-primary-orange">AI Partner</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-gray-900">Choosing the right AI company in California is crucial</strong> for your 
                    business success. Metic.ai combines Silicon Valley innovation with practical business expertise to deliver 
                    AI solutions that drive real results for California companies.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Service In California</strong> includes comprehensive 
                    consultation, custom development, seamless integration, and ongoing support to ensure your AI investment 
                    delivers maximum value in California's competitive market.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Statewide Coverage</h4>
                        <p className="text-sm text-gray-600">
                          Serving all major California markets: San Francisco Bay Area, Los Angeles, San Diego, Sacramento, and beyond
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Award className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Proven Track Record</h4>
                        <p className="text-sm text-gray-600">
                          500+ successful AI implementations across California's diverse industry landscape
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Rapid Deployment</h4>
                        <p className="text-sm text-gray-600">
                          Fast-track AI implementation to maintain California's pace of innovation and competitive advantage
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

      {/* FAQ Section with Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Artificial Intelligence Company In California?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In California with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise automation with 60% cost savings and 3x faster delivery across San Francisco, Los Angeles, San Diego, and all major California cities."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In California offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In California, Metic.ai offers comprehensive AI services including AI automation, machine learning development, predictive analytics, custom AI solutions, data engineering, generative AI services, and enterprise AI integration. We serve technology, entertainment, healthcare, finance, and manufacturing industries."
                }
              },
              {
                "@type": "Question",
                "name": "How much do AI services cost from an Artificial Intelligence Company In California?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI service costs vary based on project complexity and requirements. As a leading Artificial Intelligence Company In California, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. Contact us for a free consultation and customized quote for your California business."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Firm In California?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the trusted AI Firm In California with proven expertise in Silicon Valley and throughout California. We deliver 3x faster development, 60% cost reduction, 2100+ successful projects, and 4.9/5 client satisfaction. Our team understands California's innovation ecosystem and regulatory requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Which California cities does the leading AI Development Company In California serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Development Company In California, Metic.ai serves all major California cities including San Francisco, Los Angeles, San Diego, San Jose, Sacramento, Oakland, Santa Ana, Anaheim, Riverside, Stockton, Fresno, Long Beach, Bakersfield, Irvine, and Chula Vista with comprehensive AI solutions."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can an AI Service In California be implemented?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai provides the fastest AI Service In California with 3x faster development than industry standards. Simple AI automation can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 8-16 weeks. We offer rapid prototyping and agile development for California businesses."
                }
              }
            ]
          })
        }}
      />

      {/* FAQ Section for Voice Search Optimization - Enhanced Design */}
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
                  About AI Company In California
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about choosing the right <strong>Artificial Intelligence Company In California</strong>
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
                            Which is the best Artificial Intelligence Company In California?
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
                        <strong className="text-gray-900 font-semibold">Metic.ai is the leading Artificial Intelligence Company In California</strong> with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise automation with 60% cost savings and 3x faster delivery across San Francisco, Los Angeles, San Diego, and all major California cities.
                      </p>
                      
                      {/* Stats Highlight */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">2100+ Projects</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <TrendingUp className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">60% Cost Savings</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Zap className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">3x Faster</span>
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
                            <Brain className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What AI services does the top AI Company In California offer?
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
                        As the premier <strong>AI Company In California</strong>, Metic.ai offers comprehensive AI services including AI automation, machine learning development, predictive analytics, custom AI solutions, data engineering, generative AI services, and enterprise AI integration. We serve technology, entertainment, healthcare, finance, and manufacturing industries.
                      </p>
                      
                      {/* Services Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
                        {['AI Automation', 'ML Development', 'Predictive Analytics', 'Custom AI', 'Data Engineering', 'Generative AI'].map((service, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-primary-orange/5 rounded-lg">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            <span className="text-sm font-medium text-gray-900">{service}</span>
                          </div>
                        ))}
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
                            <TrendingUp className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How much do AI services cost from an Artificial Intelligence Company In California?
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
                      <Target className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        AI service costs vary based on project complexity and requirements. As a leading <strong>Artificial Intelligence Company In California</strong>, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. Contact us for a free consultation and customized quote for your California business.
                      </p>
                      
                      {/* Pricing Cards */}
                      <div className="grid md:grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl border border-primary-orange/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-primary-orange/20 flex items-center justify-center">
                              <span className="text-sm font-bold text-primary-orange">$</span>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-sm">Starting Projects</div>
                              <div className="text-xs text-gray-600">$15K - $75K</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">Basic AI solutions and consulting</p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl border border-primary-orange/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-primary-orange/20 flex items-center justify-center">
                              <span className="text-sm font-bold text-primary-orange">$$</span>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-sm">Enterprise Solutions</div>
                              <div className="text-xs text-gray-600">$75K+</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">Complex AI systems and integration</p>
                        </div>
                      </div>
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
                            <CheckCircle className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Why choose Metic.ai as your AI Firm In California?
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
                      <Shield className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Metic.ai is the trusted <strong>AI Firm In California</strong> with proven expertise in Silicon Valley and throughout California. We deliver 3x faster development, 60% cost reduction, 2100+ successful projects, and 4.9/5 client satisfaction. Our team understands California's innovation ecosystem and regulatory requirements.
                      </p>
                      
                      {/* Benefits Grid */}
                      <div className="grid gap-3 pt-4">
                        {[
                          { icon: Award, title: 'Silicon Valley Expertise', desc: 'Deep understanding of California innovation ecosystem' },
                          { icon: Zap, title: 'Proven Track Record', desc: '2100+ successful AI implementations globally' },
                          { icon: Users, title: '4.9/5 Client Satisfaction', desc: 'Consistently delivering beyond expectations' }
                        ].map((benefit, idx) => {
                          const Icon = benefit.icon;
                          return (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                              <Icon className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="font-bold text-gray-900 text-sm mb-1">{benefit.title}</div>
                                <div className="text-xs text-gray-600">{benefit.desc}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
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
                            <MapPin className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which California cities does the leading AI Development Company In California serve?
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
                      <Database className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        As the premier <strong>AI Development Company In California</strong>, Metic.ai serves all major California cities including San Francisco, Los Angeles, San Diego, San Jose, Sacramento, Oakland, Santa Ana, Anaheim, Riverside, Stockton, Fresno, Long Beach, Bakersfield, Irvine, and Chula Vista with comprehensive AI solutions.
                      </p>
                      
                      {/* Cities Grid */}
                      <div className="grid md:grid-cols-3 gap-3 pt-4">
                        {[
                          'San Francisco', 'Los Angeles', 'San Diego', 
                          'San Jose', 'Sacramento', 'Oakland',
                          'Santa Ana', 'Anaheim', 'Riverside',
                          'Stockton', 'Fresno', 'Long Beach'
                        ].map((city, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-primary-orange/5 rounded-lg">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            <span className="text-sm font-medium text-gray-900">{city}</span>
                          </div>
                        ))}
                      </div>
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
                            How quickly can an AI Service In California be implemented?
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
                      <Rocket className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Metic.ai provides the fastest <strong>AI Service In California</strong> with 3x faster development than industry standards. Simple AI automation can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 8-16 weeks. We offer rapid prototyping and agile development for California businesses.
                      </p>
                      
                      {/* Timeline Grid */}
                      <div className="space-y-3 pt-4">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Quick Deployment: 2-4 weeks</p>
                            <p className="text-sm text-gray-600">AI automation, POCs, consulting</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Enterprise Solutions: 8-16 weeks</p>
                            <p className="text-sm text-gray-600">Complex AI systems, integration</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
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
                  About Metic.ai - Premier <strong>Artificial Intelligence Company In California</strong>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 2018, Metic.ai has been the leading <strong>AI Company In California</strong>, transforming businesses across the Golden State with cutting-edge artificial intelligence solutions. From Silicon Valley startups to Los Angeles entertainment companies, we've delivered 2100+ successful AI implementations.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of AI experts understands California's unique business landscape, regulatory environment, and innovation culture. Whether you're in San Francisco's tech hub, Los Angeles' creative industries, or San Diego's biotech sector, we deliver AI solutions that drive real results.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">AI Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">4.9/5</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">California AI Expertise</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Silicon Valley Innovation</div>
                        <div className="text-gray-600 text-sm">Deep understanding of tech industry needs and startup ecosystems</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Entertainment AI</div>
                        <div className="text-gray-600 text-sm">Specialized solutions for Los Angeles' creative and media industries</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Biotech & Healthcare</div>
                        <div className="text-gray-600 text-sm">Advanced AI for San Diego's life sciences and healthcare sectors</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Enterprise Scale</div>
                        <div className="text-gray-600 text-sm">Scalable AI solutions for California's diverse business landscape</div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                What California Businesses Say About Our <strong>AI Services</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Testimonials from clients across California who chose Metic.ai as their <strong>AI Company In California</strong>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Metic.ai transformed our San Francisco startup with AI automation that reduced our operational costs by 60%. Best AI Company In California we've worked with!"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-600">CTO, TechStart SF</div>
                  <div className="text-sm text-primary-orange">San Francisco, CA</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Outstanding AI development services! Their machine learning models increased our Los Angeles entertainment company's content recommendation accuracy by 300%."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                  <div className="text-sm text-gray-600">VP Technology, MediaCorp LA</div>
                  <div className="text-sm text-primary-orange">Los Angeles, CA</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Metic.ai's AI solutions revolutionized our San Diego biotech operations. Their expertise in healthcare AI is unmatched in California."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Dr. Jennifer Wang</div>
                  <div className="text-sm text-gray-600">Director of Innovation, BioCorp SD</div>
                  <div className="text-sm text-primary-orange">San Diego, CA</div>
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
              Ready to Partner with California's Leading <strong>Artificial Intelligence Company</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ California businesses that chose Metic.ai as their <strong>AI Company In California</strong>. Get your free AI consultation and discover how our artificial intelligence solutions can transform your business with 60% cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - California
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call California AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted <strong>AI Firm In California</strong> - Serving Major Cities</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>San Francisco</span>
                <span>•</span>
                <span>Los Angeles</span>
                <span>•</span>
                <span>San Diego</span>
                <span>•</span>
                <span>San Jose</span>
                <span>•</span>
                <span>Sacramento</span>
                <span>•</span>
                <span>Oakland</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

