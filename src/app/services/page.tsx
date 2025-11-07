import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/Button";
import { 
  Brain, 
  BarChart3, 
  Code, 
  Zap, 
  Users, 
  Database, 
  Bot, 
  TrendingUp,
  MessageSquare,
  Layers,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Target,
  Rocket,
  Globe,
  Shield,
  Award,
  Building,
  Cpu,
  Settings,
  Eye,
  Lightbulb,
  GitBranch,
  Activity,
  Heart,
  Calendar,
  Trophy,
  MapPin
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Machine Learning Services | Leading AI Company Worldwide - Metic.ai",
  description: "Discover comprehensive AI and machine learning services from Metic AI. Custom AI development, automation, data analytics, and intelligent solutions for businesses. 2100+ successful projects globally with 60% cost savings.",
  keywords: [
    "AI Services",
    "Machine Learning Services", 
    "Artificial Intelligence Solutions",
    "Custom AI Development",
    "AI Consulting Services", 
    "Machine Learning Consulting",
    "AI Automation Services",
    "Data Analytics Services",
    "Intelligent Automation",
    "AI Strategy Consulting",
    "Enterprise AI Solutions",
    "Business AI Services",
    "AI Implementation Services",
    "Machine Learning Development",
    "AI Integration Services",
    "Predictive Analytics Services",
    "Computer Vision Services",
    "Natural Language Processing",
    "AI Transformation Services",
    "Smart Automation Solutions",
    "AI-Powered Solutions",
    "Generative AI Services",
    "Deep Learning Services",
    "AI Research Services",
    "Business Intelligence AI"
  ],
  alternates: {
    canonical: "https://metic.ai/services/"
  },
  openGraph: {
    title: "AI & Machine Learning Services | Leading AI Company Worldwide - Metic.ai",
    description: "Discover comprehensive AI and machine learning services from Metic AI. Custom AI development, automation, data analytics, and intelligent solutions for businesses.",
    url: "https://metic.ai/services/",
    siteName: "Metic.ai - AI Services",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Structured Data Schema for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://metic.ai/#organization",
      "name": "Metic AI",
      "url": "https://metic.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://metic.ai/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "Leading AI and Machine Learning services company providing custom AI development, automation, and intelligent solutions worldwide.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressRegion": "Global"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-800-METIC-AI",
        "contactType": "customer service",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://linkedin.com/company/metic-ai",
        "https://twitter.com/metic_ai"
      ]
    },
    {
      "@type": "Service",
      "name": "AI & Machine Learning Services",
      "provider": {
        "@id": "https://metic.ai/#organization"
      },
      "description": "Comprehensive artificial intelligence and machine learning services including custom AI development, automation, data analytics, and intelligent solutions.",
      "serviceType": "AI Consulting and Development",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Services Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom AI Development",
              "description": "Tailored artificial intelligence solutions for business needs"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Machine Learning Services",
              "description": "Advanced ML models and predictive analytics solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "AI Automation",
              "description": "Intelligent process automation and workflow optimization"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://metic.ai"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://metic.ai/services"
        }
      ]
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Advanced Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200 py-3" aria-label="Breadcrumb">
        <div className="container px-4 md:px-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary-orange transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-primary-orange font-semibold" aria-current="page">Services</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Revolutionary Hero Section - Advanced Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-amber-50 py-20 md:py-32">
        {/* Ultra Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Multiple Floating Orbs with Staggered Animations */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-light-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Enhanced Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-orange/40 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary-orange/30 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-light-orange/40 rounded-full animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Enhanced Service Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="group inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 hover:border-primary-orange/40 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Sparkles className="w-5 h-5 text-primary-orange animate-pulse" />
              <span className="text-sm font-bold text-gray-800">Comprehensive AI Solutions</span>
              <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary-orange to-secondary-orange text-white rounded-full font-semibold shadow-lg">
                2100+ Projects
              </span>
            </div>
          </div>

          <div className="text-center max-w-5xl mx-auto">
            {/* Enhanced H1 with Gradient Animation */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-8">
              <strong>AI & Machine Learning</strong>
              <br />
              <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                <strong>Services</strong>
              </span>
            </h1>
            
            {/* Enhanced Description with Better Typography */}
            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-12">
              Transform your business with <strong className="text-primary-orange">cutting-edge AI solutions</strong> and 
              <strong className="text-primary-orange"> intelligent automation</strong>. From custom development to strategic consulting, 
              we deliver <strong className="text-primary-orange">world-class artificial intelligence services</strong> that drive growth, 
              efficiency, and innovation across industries.
            </p>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                  <Trophy className="w-5 h-5 text-primary-orange" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-900">2100+ Projects</div>
                  <div className="text-xs text-gray-600">Successfully Delivered</div>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                  <Star className="w-5 h-5 text-primary-orange" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-900">5.0/5 Rating</div>
                  <div className="text-xs text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                  <Globe className="w-5 h-5 text-primary-orange" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-900">50+ Countries</div>
                  <div className="text-xs text-gray-600">Global Reach</div>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                  <Zap className="w-5 h-5 text-primary-orange" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-900">60% Cost Savings</div>
                  <div className="text-xs text-gray-600">Average Client ROI</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row justify-center items-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group relative overflow-hidden shadow-xl hover:shadow-2xl">
                  <span className="relative z-10 flex items-center">
                    Get AI Strategy Consultation
                    <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-orange to-primary-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>
              </Link>
              <Link href="/locations">
                <Button variant="outline" size="lg" className="group border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white shadow-lg hover:shadow-xl">
                  <MapPin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Find Services Near You
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Core Services Section - Advanced 3D Cards */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle, #FF6B35 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-primary-orange text-sm font-bold rounded-full border border-primary-orange/20 shadow-lg">
                🚀 Core AI Services
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="text-gray-900">Transformative </span>
              <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive suite of AI services covers every aspect of intelligent business transformation
            </p>
          </div>

          {/* Advanced Service Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service 1 - Custom AI Development */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-orange/30 to-secondary-orange/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-primary-orange/20 group-hover:border-primary-orange/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                
                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary-orange/20 rounded-2xl blur-lg"></div>
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-4 py-2 bg-primary-orange/10 text-primary-orange text-sm font-bold rounded-full">Strategic AI</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-orange transition-colors">
                  Custom AI Development
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong className="text-primary-orange">Tailored artificial intelligence solutions</strong> designed specifically for your business needs. 
                  Our expert team develops custom AI models, algorithms, and systems that solve complex challenges and drive measurable results.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">AI strategy development & roadmap planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Custom machine learning model development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">AI system integration & deployment</span>
                  </li>
                </ul>

                <Link href="/custom-ai-development">
                  <Button className="w-full group bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-secondary-orange hover:to-primary-orange">
                    Explore Custom AI Solutions
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 2 - Machine Learning */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary-orange/30 to-primary-orange/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-secondary-orange/20 group-hover:border-secondary-orange/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-secondary-orange/20 rounded-2xl blur-lg"></div>
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-4 py-2 bg-secondary-orange/10 text-secondary-orange text-sm font-bold rounded-full">Intelligent Analytics</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary-orange transition-colors">
                  Machine Learning Solutions
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong className="text-secondary-orange">Advanced machine learning models</strong> that learn from your data and improve business outcomes. 
                  From predictive analytics to recommendation systems, we build intelligent solutions that evolve with your business.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Predictive analytics & forecasting models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Natural language processing solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Computer vision & image recognition</span>
                  </li>
                </ul>

                <Link href="/machine-learning">
                  <Button className="w-full group bg-gradient-to-r from-secondary-orange to-primary-orange hover:from-primary-orange hover:to-secondary-orange">
                    Discover ML Services
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 3 - AI Automation */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-orange/30 to-secondary-orange/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-primary-orange/20 group-hover:border-primary-orange/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary-orange/20 rounded-2xl blur-lg"></div>
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-4 py-2 bg-primary-orange/10 text-primary-orange text-sm font-bold rounded-full">Process Optimization</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-orange transition-colors">
                  Intelligent Automation
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong className="text-primary-orange">Streamline operations and eliminate manual tasks</strong> with our intelligent automation solutions. 
                  We implement AI-powered workflows that increase efficiency, reduce errors, and free your team for strategic work.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Robotic Process Automation (RPA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Workflow optimization & automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Document processing & data extraction</span>
                  </li>
                </ul>

                <Link href="/ai-integration-and-deployment">
                  <Button className="w-full group bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-secondary-orange hover:to-primary-orange">
                    Explore Automation Solutions
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service 4 - Data Analytics */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary-orange/30 to-primary-orange/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-secondary-orange/20 group-hover:border-secondary-orange/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-secondary-orange/20 rounded-2xl blur-lg"></div>
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Database className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-4 py-2 bg-secondary-orange/10 text-secondary-orange text-sm font-bold rounded-full">Data Intelligence</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary-orange transition-colors">
                  Advanced Data Analytics
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong className="text-secondary-orange">Transform raw data into actionable insights</strong> with our advanced analytics platform. 
                  We help you unlock hidden patterns, predict trends, and make data-driven decisions that accelerate business growth.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Business intelligence dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Real-time data processing & analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Custom reporting & visualization</span>
                  </li>
                </ul>

                <Link href="/data-insights">
                  <Button className="w-full group bg-gradient-to-r from-secondary-orange to-primary-orange hover:from-primary-orange hover:to-secondary-orange">
                    Discover Data Solutions
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-primary-orange text-sm font-bold rounded-full border border-primary-orange/20 shadow-lg">
                🎯 Specialized Solutions
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Advanced </span>
              <span className="text-primary-orange">AI Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technologies tailored for specific industry needs and complex business challenges
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Specialized Service 1 */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-primary-orange/20 hover:border-primary-orange/40 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-orange/20 to-secondary-orange/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-primary-orange h-7 w-7" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-primary-orange transition-colors">
                Generative AI Solutions
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Build intelligent chatbots, content generators, and AI assistants powered by advanced language models and generative AI technology.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Conversational AI & Chatbots</li>
                <li>• Content Generation Systems</li>
                <li>• AI-Powered Writing Tools</li>
              </ul>
              <Link href="/generative-ai-services">
                <Button variant="outline" className="w-full border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            {/* Specialized Service 2 */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-secondary-orange/20 hover:border-secondary-orange/40 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-orange/20 to-primary-orange/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="text-secondary-orange h-7 w-7" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-secondary-orange transition-colors">
                Computer Vision Solutions
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Advanced image and video analysis capabilities for quality control, security, medical imaging, and automated inspection systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Image Recognition & Classification</li>
                <li>• Video Analytics & Monitoring</li>
                <li>• Quality Control Automation</li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-secondary-orange text-secondary-orange hover:bg-secondary-orange hover:text-white">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            {/* Specialized Service 3 */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-primary-orange/20 hover:border-primary-orange/40 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-orange/20 to-secondary-orange/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building className="text-primary-orange h-7 w-7" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-primary-orange transition-colors">
                Enterprise AI Integration
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Seamlessly integrate AI capabilities into existing enterprise systems with minimal disruption and maximum business impact.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Legacy System Integration</li>
                <li>• API Development & Management</li>
                <li>• Scalable AI Infrastructure</li>
              </ul>
              <Link href="/ai-integration-and-deployment">
                <Button variant="outline" className="w-full border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                  Explore Integration <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            {/* Specialized Service 4 */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-secondary-orange/20 hover:border-secondary-orange/40 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-orange/20 to-primary-orange/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="text-secondary-orange h-7 w-7" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-secondary-orange transition-colors">
                AI Training & Workshops
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Empower your team with comprehensive AI education, hands-on workshops, and strategic training programs for successful AI adoption.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Executive AI Strategy Sessions</li>
                <li>• Technical Team Training</li>
                <li>• AI Literacy Programs</li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-secondary-orange text-secondary-orange hover:bg-secondary-orange hover:text-white">
                  Get Training <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            {/* Specialized Service 5 */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-primary-orange/20 hover:border-primary-orange/40 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-orange/20 to-secondary-orange/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cpu className="text-primary-orange h-7 w-7" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-primary-orange transition-colors">
                Edge AI & IoT Integration
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Deploy AI models on edge devices and IoT systems for real-time processing, reduced latency, and enhanced privacy protection.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Edge AI Model Optimization</li>
                <li>• IoT Device Integration</li>
                <li>• Real-time Analytics</li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                  Discover Edge AI <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            {/* Specialized Service 6 */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg border border-secondary-orange/20 hover:border-secondary-orange/40 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-orange/20 to-primary-orange/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="text-secondary-orange h-7 w-7" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-secondary-orange transition-colors">
                AI Ethics & Governance
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ensure responsible AI implementation with comprehensive ethics frameworks, bias detection, and governance strategies.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• AI Ethics Framework Development</li>
                <li>• Bias Detection & Mitigation</li>
                <li>• Compliance & Governance</li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-secondary-orange text-secondary-orange hover:bg-secondary-orange hover:text-white">
                  Learn About Ethics <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary-orange via-secondary-orange to-primary-orange">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/90 via-secondary-orange/90 to-primary-orange/90"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`, backgroundSize: '50px 50px'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="mb-8">
              <div className="inline-block mb-6">
                <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/30 shadow-xl">
                  🚀 Ready to Transform?
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Elevate Your Business with</span>
                <span className="block text-white/90">World-Class AI Solutions</span>
              </h2>
              
              <div className="w-32 h-1.5 bg-white/40 mx-auto mb-8 rounded-full"></div>
              
              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-12">
                Ready to <strong className="text-white">transform your business with AI?</strong> Our expert team is here to help you 
                <strong className="text-white"> unlock the full potential of artificial intelligence</strong> and drive unprecedented growth. 
                Let's build the future together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/contact">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-white/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="relative bg-white text-primary-orange border-2 border-white hover:bg-white/90 hover:text-primary-orange font-bold px-8 py-4 shadow-2xl group-hover:shadow-white/30 group-hover:scale-110 transition-all duration-300"
                  >
                    <Rocket className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                    Start Your AI Journey Today
                  </Button>
                </div>
              </Link>
              
              <Link href="/locations">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="relative bg-transparent border-2 border-white/60 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 shadow-xl group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                  >
                    <MapPin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Find Local AI Experts
                  </Button>
                </div>
              </Link>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center group">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">2100+</div>
                <div className="text-sm text-white/80">AI Projects Delivered</div>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">5.0/5</div>
                <div className="text-sm text-white/80">Client Satisfaction</div>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-white/80">Countries Served</div>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">60%</div>
                <div className="text-sm text-white/80">Average Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
