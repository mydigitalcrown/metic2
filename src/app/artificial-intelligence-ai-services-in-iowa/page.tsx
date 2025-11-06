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
  Heart,
  Rocket,
  Quote
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Iowa | #1 AI Company In Iowa - Metic.ai",
  description: "Leading Artificial Intelligence Company In Iowa with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Iowa",
    "AI Company In Iowa", 
    "AI Service In Iowa",
    "AI Firm In Iowa",
    "AI Development Company In Iowa",
    "Best AI Company In Iowa",
    "Top AI Company Iowa",
    "Leading AI Company Iowa",
    "AI Solutions Company Iowa",
    "Machine Learning Company Iowa",
    "AI Consulting Company Iowa",
    "AI Technology Company Iowa",
    "AI Services Provider Iowa",
    "Custom AI Company Iowa",
    "Enterprise AI Company Iowa",
    "AI Software Company Iowa",
    "AI Implementation Company Iowa",
    "Professional AI Company Iowa",
    "AI Innovation Company Iowa"
  ],
  authors: [{ name: "Metic.ai Iowa AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Iowa | #1 AI Company In Iowa - Metic.ai",
    description: "Leading Artificial Intelligence Company In Iowa with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-iowa/",
    siteName: "Metic.ai - AI Company In Iowa",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metic.ai - Artificial Intelligence Company In Iowa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Iowa | #1 AI Company In Iowa - Metic.ai",
    description: "Leading Artificial Intelligence Company In Iowa with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-iowa/",
  },
};

export default function AIServicesIowaPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Iowa business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Iowa businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Iowa business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Iowa business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Iowa.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Iowa enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Agriculture",
    "Manufacturing",
    "Insurance",
    "Healthcare",
    "Financial Services",
    "Technology",
    "Energy",
    "Food Processing",
    "Education",
    "Transportation"
  ];

  const stats = [
    { number: "320+", label: "IA Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.1x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Structured Data for SEO - Triple Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Artificial Intelligence Company In Iowa",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-iowa/",
              "logo": "https://metic.ai/logo.png",
              "image": "https://metic.ai/og-image.jpg",
              "description": "Leading Artificial Intelligence Company In Iowa with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Iowa",
                "addressCountry": "US",
                "addressLocality": "Des Moines"
              },
              "telephone": "+1-789-251-8414",
              "email": "hello@matic.ai",
              "foundingDate": "2020",
              "numberOfEmployees": "250+",
              "slogan": "Transform your business with AI",
              "areaServed": {
                "@type": "State",
                "name": "Iowa",
                "sameAs": "https://en.wikipedia.org/wiki/Iowa"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services Iowa",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Integration & Deployment",
                      "description": "Enterprise AI integration services for Iowa businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Solutions",
                      "description": "Custom ML algorithms and predictive analytics for Iowa companies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom AI Development",
                      "description": "Bespoke AI solutions for Iowa enterprises"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2100"
              },
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/metic_ai"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best Artificial Intelligence Company In Iowa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the leading Artificial Intelligence Company In Iowa with 2100+ successful AI implementations. We serve Des Moines, Cedar Rapids, Iowa City, and businesses throughout the Hawkeye State with 60% cost savings and 3x faster delivery."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What makes Metic.ai the top AI Company In Iowa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the premier AI Company In Iowa, Metic.ai combines deep understanding of Iowa's agriculture, insurance, and manufacturing sectors with cutting-edge AI technology. We've helped companies in Des Moines financial district and across the state achieve measurable results."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Metic.ai provide AI services to small businesses in Iowa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI Service In Iowa caters to businesses of all sizes. From Des Moines startups to Cedar Rapids manufacturers, we provide scalable AI solutions that grow with your Iowa business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI technologies does your AI Firm In Iowa specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Firm In Iowa specializes in machine learning, natural language processing, computer vision, predictive analytics, and custom AI development tailored for Iowa's agriculture, insurance, and manufacturing industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Metic.ai support AI Development Company projects in Iowa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As a leading AI Development Company In Iowa, we provide end-to-end support from strategy to deployment. Our Iowa-based team understands local business needs and delivers AI solutions with proven ROI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Metic.ai as your AI partner in Iowa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choose Metic.ai because we're the Best AI Company In Iowa with local expertise, proven results, and understanding of Iowa's business landscape. We deliver AI solutions that work for Hawkeye State businesses."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In Iowa | Leading AI Services",
              "description": "Comprehensive guide to AI services in Iowa. Discover how Metic.ai helps Iowa businesses implement artificial intelligence solutions.",
              "author": {
                "@type": "Organization",
                "name": "Metic.ai Iowa AI Team"
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
              "dateModified": "2024-01-15",
              "articleSection": "AI Services",
              "keywords": "Artificial Intelligence Company In Iowa, AI Company In Iowa, AI Service In Iowa",
              "locationCreated": {
                "@type": "Place",
                "name": "Iowa, USA"
              }
            }
          ])
        }}
      />

      {/* Enhanced Hero Section - Ahmedabad Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden flex items-center">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-orange/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 bg-secondary-orange/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          
          {/* Floating AI Elements */}
          <div className="absolute top-32 right-32 opacity-20">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-orange/30 rounded-full blur-md animate-pulse"></div>
              <div className="relative w-4 h-4 bg-primary-orange rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
          <div className="absolute top-3/4 right-1/4 w-2.5 h-2.5 bg-secondary-orange/40 rounded-full animate-bounce" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary-orange/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-left space-y-8">
                {/* Location Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-primary-orange/50 transition-all group">
                  <MapPin className="w-5 h-5 text-primary-orange animate-pulse" />
                  <span className="text-sm font-semibold text-white">Premier AI Company Serving Iowa</span>
                  <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-white">
                      <strong>Artificial Intelligence Company In Iowa</strong>
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient">
                      Leading AI Company In Iowa
                    </span>
                  </h1>
                  
                  <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full shadow-lg"></div>
                </div>

                {/* Description */}
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Looking for the best <strong className="text-white">AI Company In Iowa</strong>? Metic.ai is the premier <strong className="text-primary-orange">Artificial Intelligence Company In Iowa</strong> with 2100+ successful implementations. From Des Moines insurance giants to agricultural innovation across the Hawkeye State, we deliver AI solutions that drive real results.
                </p>

                {/* VSO Keywords Badges */}
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary-orange" />
                    Which AI Service In Iowa do you need?
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "AI Firm In Iowa",
                      "AI Development Company In Iowa",
                      "Best AI Company In Iowa"
                    ].map((keyword, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20 hover:border-primary-orange/50 hover:text-primary-orange transition-all duration-300 cursor-default"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-secondary-orange hover:to-primary-orange text-white shadow-xl hover:shadow-2xl transition-all duration-300 group">
                      <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                      Get Free AI Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300 group">
                      <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Call: +91 7892518414
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Enhanced Stats & Features */}
              <div className="space-y-8">
                {/* Trust Indicators */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-primary-orange/30 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Trusted Iowa AI Partner</h3>
                    <p className="text-gray-300 text-sm">Leading <strong className="text-primary-orange">AI Service In Iowa</strong></p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 group-hover:border-primary-orange/50 transition-all duration-300">
                          <div className="text-3xl font-bold text-primary-orange mb-2 group-hover:animate-pulse">{stat.number}</div>
                          <div className="text-sm text-gray-300">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Iowa Business Focus */}
                <div className="bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 backdrop-blur-lg rounded-3xl p-8 border border-primary-orange/20">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-primary-orange" />
                    Iowa Industry Expertise
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Des Moines Financial District",
                      "Cedar Rapids Manufacturing",
                      "Agricultural Technology",
                      "Insurance & Healthcare"
                    ].map((industry, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-primary-orange flex-shrink-0" />
                        <span className="text-sm">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Benefits */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center group hover:border-primary-orange/50 transition-all">
                    <TrendingUp className="w-8 h-8 text-primary-orange mx-auto mb-3 group-hover:animate-bounce" />
                    <div className="text-lg font-bold text-white">60% Cost Savings</div>
                    <div className="text-xs text-gray-400">Average Client Result</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center group hover:border-primary-orange/50 transition-all">
                    <Zap className="w-8 h-8 text-primary-orange mx-auto mb-3 group-hover:animate-bounce" />
                    <div className="text-lg font-bold text-white">3x Faster</div>
                    <div className="text-xs text-gray-400">Delivery Speed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Trust Bar */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4 flex items-center justify-center gap-2">
                  <Target className="w-4 h-4 text-primary-orange" />
                  Trusted as the leading AI Service In Iowa
                </p>
                <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
                  <span>Des Moines</span>
                  <span>•</span>
                  <span>Cedar Rapids</span>
                  <span>•</span>
                  <span>Davenport</span>
                  <span>•</span>
                  <span>Sioux City</span>
                  <span>•</span>
                  <span>Iowa City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section - Ahmedabad Style */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-orange/10 to-orange-400/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center space-x-2 bg-primary-orange/10 rounded-full px-6 py-3 mb-6">
                <Brain className="w-5 h-5 text-primary-orange" />
                <span className="text-primary-orange font-semibold">Expert AI Services In Iowa</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <strong>AI Services</strong> by Leading <span className="text-primary-orange">Artificial Intelligence Company In Iowa</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-orange-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive artificial intelligence services designed to help Iowa businesses 
                compete in the digital economy and drive sustainable growth across the Hawkeye State.
              </p>
            </div>
            
            {/* Enhanced Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses = {
                  blue: "from-blue-500 to-blue-600",
                  purple: "from-purple-500 to-purple-600", 
                  green: "from-green-500 to-green-600",
                  orange: "from-orange-500 to-orange-600",
                  indigo: "from-indigo-500 to-indigo-600",
                  red: "from-red-500 to-red-600"
                };
                
                return (
                  <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-orange/30 overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-100/0 group-hover:from-primary-orange/5 group-hover:to-orange-100/30 transition-all duration-500"></div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${colorClasses[service.color]} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <Link href={service.href} className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium group/link">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-orange/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced CTA Section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-br from-primary-orange/5 to-orange-400/5 rounded-3xl p-8 border border-primary-orange/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your Iowa Business with AI?
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join leading Iowa companies that trust our <strong>AI Service In Iowa</strong> for their digital transformation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary-orange to-orange-400 hover:from-orange-400 hover:to-primary-orange text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                      Get Started Today
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button variant="outline" size="lg" className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white transition-all duration-300 group">
                      <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Call AI Experts
                    </Button>
                  </Link>
                </div>
              </div>
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
                Industries We Serve in Iowa
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Iowa's key industries and business sectors.
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
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Iowa Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Iowa for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Iowa businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for IA companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Iowa business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Iowa business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                About Metic.ai - Premier <strong>Artificial Intelligence Company In Iowa</strong>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Leading <strong>AI Company In Iowa</strong> Since 2020</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Metic.ai stands as the premier <strong>Artificial Intelligence Company In Iowa</strong>, serving businesses from the insurance capitals of Des Moines to agricultural innovation centers across the Hawkeye State. As Iowa continues embracing technological advancement while maintaining its agricultural leadership, we've been at the forefront, helping Iowa companies leverage AI for competitive advantage.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our deep understanding of Iowa's business landscape - from the financial services sector in Des Moines to precision agriculture throughout the state, from manufacturing operations in Cedar Rapids to food processing in Council Bluffs - enables us to deliver <strong>AI Service In Iowa</strong> that truly makes a difference.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  As the leading <strong>AI Firm In Iowa</strong>, we've partnered with companies across all sectors of the Iowa economy. Whether you're an insurance company in Des Moines, an agricultural business in Ames, or a manufacturing company in Davenport, our <strong>AI Development Company In Iowa</strong> services are designed to drive measurable results.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">Successful AI Implementations</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">60%</div>
                    <div className="text-sm text-gray-600">Average Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">3x</div>
                    <div className="text-sm text-gray-600">Faster Delivery</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-6">Why Iowa Businesses Choose Metic.ai</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Local Iowa Expertise</h5>
                        <p className="text-gray-600 text-sm">Deep understanding of Iowa's business culture and agricultural innovation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Industry-Specific Solutions</h5>
                        <p className="text-gray-600 text-sm">Tailored AI solutions for agriculture, insurance, manufacturing, and food processing sectors</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Proven Track Record</h5>
                        <p className="text-gray-600 text-sm">2100+ successful implementations across Iowa and neighboring states</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Scalable Solutions</h5>
                        <p className="text-gray-600 text-sm">From family farms to Fortune 500 companies in the Hawkeye State</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Ongoing Support</h5>
                        <p className="text-gray-600 text-sm">24/7 support and continuous optimization for Iowa businesses</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 italic">
                      "The <strong>Best AI Company In Iowa</strong> for businesses ready to embrace agricultural and technological innovation" - Iowa Business Review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Iowa AI Ecosystem Content - 2000+ Words */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 mb-8 hover:border-primary-orange/40 transition-all group">
                <Brain className="w-5 h-5 text-primary-orange animate-pulse" />
                <span className="text-sm font-bold text-gray-800">Iowa's AI Transformation Hub</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-gray-900">The Future of AI in Iowa</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  Powered by Metic.ai
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how Iowa businesses are leveraging artificial intelligence to revolutionize agriculture, insurance, manufacturing, and technology sectors across the Hawkeye State.
              </p>
            </div>

            {/* Iowa AI Ecosystem Overview */}
            <div className="mb-20">
              <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-orange/5 to-transparent rounded-full"></div>
                
                <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-orange/10 rounded-full mb-6">
                      <MapPin className="w-4 h-4 text-primary-orange" />
                      <span className="text-sm font-semibold text-primary-orange">Iowa AI Market Overview</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Iowa's <span className="text-primary-orange">AI Revolution</span> Across Key Industries
                    </h3>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Iowa stands at the forefront of America's AI transformation, with our state's unique blend of agricultural innovation, financial services excellence, and manufacturing prowess creating unprecedented opportunities for <strong>AI Company In Iowa</strong> partnerships. The Hawkeye State's $200+ billion economy is rapidly embracing artificial intelligence solutions that drive efficiency, reduce costs, and unlock new revenue streams.
                    </p>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      As the leading <strong>Artificial Intelligence Company In Iowa</strong>, Metic.ai has witnessed firsthand how Iowa businesses are leveraging AI to maintain their competitive edge. From Des Moines' thriving insurance sector to Cedar Rapids' advanced manufacturing facilities, our <strong>AI Service In Iowa</strong> implementations have consistently delivered transformative results across diverse industry verticals.
                    </p>

                    <div className="space-y-4">
                      {[
                        "Agriculture Technology: 40% efficiency gains through precision farming AI",
                        "Insurance Innovation: 60% faster claim processing with automated AI systems",
                        "Manufacturing Excellence: 50% reduction in quality defects using computer vision",
                        "Financial Services: 75% improvement in fraud detection accuracy"
                      ].map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { metric: "$2.3B", label: "AI Market Value in Iowa", icon: TrendingUp },
                      { metric: "85%", label: "Businesses Planning AI Adoption", icon: Target },
                      { metric: "320+", label: "Iowa Companies We've Served", icon: Users },
                      { metric: "98%", label: "Client Satisfaction Rate", icon: Award }
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-br from-primary-orange/5 to-orange-100/20 rounded-2xl border border-primary-orange/10 group hover:border-primary-orange/30 transition-all">
                        <stat.icon className="w-8 h-8 text-primary-orange mx-auto mb-3 group-hover:animate-bounce" />
                        <div className="text-2xl font-bold text-primary-orange mb-2">{stat.metric}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced AI Technologies Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Advanced AI Technologies Transforming <span className="text-primary-orange">Iowa Business</span>
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our <strong>AI Firm In Iowa</strong> leverages cutting-edge technologies to deliver innovative solutions tailored for Iowa's unique business landscape.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Agricultural AI & Precision Farming",
                    description: "Iowa leads the nation in agricultural innovation, and our AI solutions are revolutionizing crop management, yield prediction, and sustainable farming practices. From John Deere's headquarters in Moline to family farms across the state, we're implementing computer vision systems that analyze crop health, predict optimal harvest times, and reduce resource waste by up to 30%. Our machine learning algorithms process satellite imagery, soil sensors, and weather data to provide Iowa farmers with actionable insights that increase profitability while promoting environmental sustainability.",
                    icon: Target,
                    technologies: ["Computer Vision", "Satellite Data Analysis", "IoT Integration", "Predictive Modeling"],
                    bgColor: "from-green-500/10 to-green-600/5"
                  },
                  {
                    title: "Insurance & Risk Assessment AI",
                    description: "Des Moines stands as a global insurance capital, home to companies like Principal Financial Group, Wellmark, and EMC Insurance. Our AI Development Company In Iowa specializes in transforming how these industry leaders assess risk, process claims, and serve customers. We've developed sophisticated neural networks that analyze terabytes of historical data to predict claim likelihood with 95% accuracy, automated underwriting systems that reduce processing time from weeks to hours, and fraud detection algorithms that save millions annually for Iowa's insurance giants.",
                    icon: Shield,
                    technologies: ["Neural Networks", "Fraud Detection", "Automated Underwriting", "Risk Analytics"],
                    bgColor: "from-blue-500/10 to-blue-600/5"
                  },
                  {
                    title: "Manufacturing Intelligence & Quality Control",
                    description: "Iowa's manufacturing sector, from ALCOA's operations in Davenport to Pella Windows' headquarters, relies on our AI solutions for quality control, predictive maintenance, and supply chain optimization. Our computer vision systems inspect products at speeds impossible for human workers, achieving 99.8% accuracy in defect detection. Machine learning algorithms predict equipment failures up to 90 days in advance, allowing for proactive maintenance that reduces downtime by 40% and extends machinery life by 25%.",
                    icon: Brain,
                    technologies: ["Computer Vision", "Predictive Maintenance", "Quality Assurance", "Supply Chain AI"],
                    bgColor: "from-purple-500/10 to-purple-600/5"
                  }
                ].map((technology, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/30 transition-all duration-500 relative overflow-hidden h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${technology.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <technology.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-orange transition-colors">
                          {technology.title}
                        </h4>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                          {technology.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-900 text-sm">Key Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {technology.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-3 py-1 bg-primary-orange/10 text-primary-orange text-xs rounded-full border border-primary-orange/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Iowa Success Stories */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Iowa Business <span className="text-primary-orange">Transformation Stories</span>
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Real results from Iowa companies that partnered with the <strong>Best AI Company In Iowa</strong> for their digital transformation journey.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Success Story 1 */}
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-orange/10 to-transparent rounded-full"></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-400 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Des Moines Insurance Leader</h4>
                        <p className="text-sm text-gray-500">Fortune 500 Insurance Company</p>
                      </div>
                    </div>
                    
                    <h5 className="text-lg font-semibold text-primary-orange mb-3">75% Reduction in Claims Processing Time</h5>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      A major Iowa insurance company approached our <strong>AI Development Company In Iowa</strong> to modernize their claims processing system. Our team developed a comprehensive AI solution that automated document analysis, fraud detection, and risk assessment. The implementation included natural language processing for extracting information from claim documents, computer vision for damage assessment photos, and machine learning algorithms for fraud pattern recognition.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-primary-orange/5 rounded-lg">
                        <div className="text-lg font-bold text-primary-orange">75%</div>
                        <div className="text-xs text-gray-600">Time Reduction</div>
                      </div>
                      <div className="text-center p-3 bg-primary-orange/5 rounded-lg">
                        <div className="text-lg font-bold text-primary-orange">$2.3M</div>
                        <div className="text-xs text-gray-600">Annual Savings</div>
                      </div>
                      <div className="text-center p-3 bg-primary-orange/5 rounded-lg">
                        <div className="text-lg font-bold text-primary-orange">95%</div>
                        <div className="text-xs text-gray-600">Accuracy Rate</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      "Metic.ai's AI solution transformed our operations. We now process claims 75% faster while maintaining the highest accuracy standards. The ROI was evident within the first quarter." - IT Director
                    </p>
                  </div>
                </div>

                {/* Success Story 2 */}
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-full"></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Central Iowa Agriculture Cooperative</h4>
                        <p className="text-sm text-gray-500">Leading Agricultural Technology Adopter</p>
                      </div>
                    </div>
                    
                    <h5 className="text-lg font-semibold text-green-600 mb-3">40% Increase in Crop Yield Efficiency</h5>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      A progressive Iowa agricultural cooperative partnered with our team to implement precision farming AI across 50,000+ acres. Our solution combines satellite imagery analysis, soil sensor data, weather patterns, and historical yield information to optimize planting schedules, irrigation timing, and harvest planning. The AI system provides real-time recommendations that help farmers maximize yields while minimizing resource usage and environmental impact.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-green-500/5 rounded-lg">
                        <div className="text-lg font-bold text-green-600">40%</div>
                        <div className="text-xs text-gray-600">Yield Increase</div>
                      </div>
                      <div className="text-center p-3 bg-green-500/5 rounded-lg">
                        <div className="text-lg font-bold text-green-600">30%</div>
                        <div className="text-xs text-gray-600">Resource Savings</div>
                      </div>
                      <div className="text-center p-3 bg-green-500/5 rounded-lg">
                        <div className="text-lg font-bold text-green-600">50K+</div>
                        <div className="text-xs text-gray-600">Acres Optimized</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      "The AI insights have revolutionized our farming operations. We're achieving record yields while using fewer resources. It's sustainable agriculture at its finest." - Cooperative Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future of AI in Iowa */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-primary-orange/5 to-orange-100/20 rounded-3xl p-12 border border-primary-orange/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-transparent"></div>
                
                <div className="relative">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      The Future of AI in <span className="text-primary-orange">Iowa</span>
                    </h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Exploring the next frontier of artificial intelligence applications across Iowa's key economic sectors.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        title: "Smart Agriculture 2030",
                        description: "Autonomous farming equipment, AI-driven crop genetics, and precision agriculture will make Iowa the world's most efficient agricultural producer.",
                        icon: Target,
                        timeline: "2025-2030"
                      },
                      {
                        title: "Insurance Innovation Hub",
                        description: "Des Moines will become the global center for AI-powered insurance technologies, from real-time risk assessment to personalized policy creation.",
                        icon: Shield,
                        timeline: "2024-2027"
                      },
                      {
                        title: "Manufacturing 4.0",
                        description: "Iowa's manufacturing facilities will achieve full automation with AI-powered predictive maintenance, quality control, and supply chain optimization.",
                        icon: Brain,
                        timeline: "2025-2028"
                      },
                      {
                        title: "Smart Cities Initiative",
                        description: "Des Moines, Cedar Rapids, and Iowa City will deploy AI-powered infrastructure for traffic optimization, energy management, and public services.",
                        icon: Lightbulb,
                        timeline: "2026-2030"
                      }
                    ].map((future, index) => (
                      <div key={index} className="text-center group">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <future.icon className="w-8 h-8 text-primary-orange" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{future.title}</h4>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{future.description}</p>
                        <div className="px-3 py-1 bg-primary-orange/10 text-primary-orange text-xs rounded-full inline-block">
                          {future.timeline}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Partner with Iowa's Leading <span className="text-primary-orange">AI Company</span>
                    </h4>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                      As Iowa's premier <strong>Artificial Intelligence Company</strong>, Metic.ai is committed to driving the state's AI transformation. Join us in shaping the future of Iowa business.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <Button size="lg" className="bg-gradient-to-r from-primary-orange to-orange-400 hover:from-orange-400 hover:to-primary-orange text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                          Start Your AI Journey
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Link href="tel:+917892518414">
                        <Button variant="outline" size="lg" className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white transition-all duration-300">
                          <Phone className="w-5 h-5 mr-2" />
                          Speak with Iowa AI Experts
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section - Ahmedabad Style */}
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
                  About AI Company In Iowa
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about choosing the right AI company in the Hawkeye State
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
                            Which is the best Artificial Intelligence Company In Iowa?
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
                        <strong className="text-gray-900 font-semibold">Metic.ai is the leading Artificial Intelligence Company In Iowa</strong> with over 2100 successful AI implementations. 
                        We're recognized as the top AI Company In Iowa for our proven expertise in machine learning, custom AI development, and enterprise AI solutions.
                      </p>
                      <p className="text-lg">
                        Our Iowa clients achieve an average of 60% cost savings and 3x faster delivery compared to traditional development approaches, 
                        making us the Hawkeye State's most trusted AI development partner.
                      </p>
                      
                      {/* Stats Highlight */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">2100+ Projects</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <MapPin className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Iowa Expert</span>
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
                            What makes Metic.ai the top AI Company In Iowa?
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
                      <TrendingUp className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        As the premier <strong className="text-gray-900 font-semibold">AI Company In Iowa</strong>, Metic.ai combines deep understanding of Iowa's agriculture, insurance, and manufacturing sectors with cutting-edge AI technology. 
                        We've helped companies in Des Moines financial district and across the state achieve measurable results.
                      </p>
                      <p className="text-lg">
                        Our expertise spans from agricultural innovation to insurance technology, making us uniquely positioned to serve Iowa's diverse economy.
                      </p>
                      
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Brain className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">AI Expertise</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <MapPin className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Local Knowledge</span>
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
                            <Users className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Does Metic.ai provide AI services to small businesses in Iowa?
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
                      <Heart className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Yes, our <strong className="text-gray-900 font-semibold">AI Service In Iowa</strong> caters to businesses of all sizes. 
                        From Des Moines startups to Cedar Rapids manufacturers, we provide scalable AI solutions that grow with your Iowa business.
                      </p>
                      <p className="text-lg">
                        We offer flexible engagement models and cost-effective AI solutions tailored for small and medium businesses across the Hawkeye State.
                      </p>
                      
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Shield className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Scalable Solutions</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Clock className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Flexible Pricing</span>
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
                            <BarChart3 className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What AI technologies does your AI Firm In Iowa specialize in?
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
                      <Zap className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Our <strong className="text-gray-900 font-semibold">AI Firm In Iowa</strong> specializes in machine learning, natural language processing, computer vision, predictive analytics, and custom AI development tailored for Iowa's agriculture, insurance, and manufacturing industries.
                      </p>
                      <p className="text-lg">
                        We leverage cutting-edge technologies including deep learning, neural networks, and AI automation specifically designed for Iowa's business landscape.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Brain className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Machine Learning</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Zap className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Deep Learning</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Target className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Computer Vision</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <BarChart3 className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Predictive Analytics</span>
                        </div>
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
                            <Rocket className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How does Metic.ai support AI Development Company projects in Iowa?
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
                        As a leading <strong className="text-gray-900 font-semibold">AI Development Company In Iowa</strong>, we provide end-to-end support from strategy to deployment. 
                        Our Iowa-based team understands local business needs and delivers AI solutions with proven ROI.
                      </p>
                      <p className="text-lg">
                        We offer comprehensive project management, technical expertise, and ongoing support throughout the AI implementation lifecycle.
                      </p>
                      
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Rocket className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">End-to-End Support</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Proven ROI</span>
                        </div>
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
                            <Star className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Why choose Metic.ai as your AI partner in Iowa?
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
                      <Award className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Choose Metic.ai because we're the <strong className="text-gray-900 font-semibold">Best AI Company In Iowa</strong> with local expertise, proven results, and understanding of Iowa's business landscape. 
                        We deliver AI solutions that work for Hawkeye State businesses.
                      </p>
                      <p className="text-lg">
                        With 98% client satisfaction and partnerships across Des Moines, Cedar Rapids, Iowa City, and beyond, we're Iowa's most trusted AI development partner.
                      </p>
                      
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Star className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">98% Satisfaction</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <MapPin className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Iowa Focused</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Proven Results</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* Enhanced CTA at Bottom of FAQ */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-3xl p-8 border border-primary-orange/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Still Have Questions About Our <span className="text-primary-orange">AI Services In Iowa</span>?
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Get personalized answers from our Iowa AI experts. Schedule a free consultation today!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-secondary-orange hover:to-primary-orange text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Schedule Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button variant="outline" size="lg" className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white transition-all duration-300">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: +91 7892518414
                    </Button>
                  </Link>
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
              Ready to Partner with the Leading <strong>AI Company In Iowa</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Iowa companies that trust the premier <strong>Artificial Intelligence Company In Iowa</strong> for their AI transformation. 
              Get started with a free consultation and discover how our <strong>AI Service In Iowa</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Best AI Company Iowa
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Iowa</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Des Moines</span>
                <span>•</span>
                <span>Cedar Rapids</span>
                <span>•</span>
                <span>Davenport</span>
                <span>•</span>
                <span>Sioux City</span>
                <span>•</span>
                <span>Iowa City</span>
                <span>•</span>
                <span>Ames</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

