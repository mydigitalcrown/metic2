import Link from "next/link";
import { Button } from "../components/ui/Button";
import { type Metadata } from 'next';
import { 
  Brain, 
  Code, 
  Database, 
  Zap, 
  Shield,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Layers,
  Cpu,
  GitBranch,
  Server,
  Lock,
  BarChart3,
  Workflow,
  Settings,
  Cloud,
  Smartphone,
  MapPin,
  Star,
  Globe,
  Trophy,
  Rocket,
  Eye,
  Building,
  MessageSquare,
  ArrowRight,
  Clock,
  Award,
  Sparkles,
  ChevronRight,
  Home,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom AI Development Services Near Me | #1 Local AI Company - Metic.ai",
  description: "Looking for custom AI development services near me? Metic.ai delivers enterprise-grade AI solutions with 98% accuracy, 100+ models deployed. Local AI experts for machine learning, neural networks & AI system architecture.",
  keywords: [
    "custom AI development services near me",
    "custom AI development services",
    "AI development near me", 
    "machine learning development services",
    "custom AI solutions",
    "AI development company",
    "local AI development",
    "neural network development",
    "AI system architecture",
    "machine learning consulting",
    "enterprise AI development",
    "AI model development",
    "deep learning services",
    "AI integration services",
    "custom machine learning models",
    "AI software development",
    "artificial intelligence development",
    "AI automation services",
    "predictive AI models",
    "computer vision development",
    "natural language processing",
    "AI infrastructure setup",
    "MLOps services",
    "AI consulting services",
    "business AI solutions"
  ],
  authors: [{ name: "Metic.ai AI Development Team" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Custom AI Development Services Near Me | #1 Local AI Company - Metic.ai",
    description: "Looking for custom AI development services near me? Enterprise-grade AI solutions with 98% accuracy, 100+ models deployed. Expert machine learning & neural network development.",
    url: "https://metic.ai/custom-ai-development/",
    siteName: "Metic.ai - Custom AI Development Services",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-custom-ai-development.jpg",
        width: 1200,
        height: 630,
        alt: "Custom AI Development Services Near Me - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@meticai",
    creator: "@meticai",
    title: "Custom AI Development Services Near Me | Metic.ai",
    description: "Enterprise-grade custom AI development services with 98% accuracy. Local AI experts for machine learning, neural networks & AI system architecture.",
    images: ["https://metic.ai/og-custom-ai-development.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/custom-ai-development/",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function CustomAIDevelopmentPage() {
  return (
    <>
      {/* Enhanced Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://metic.ai/#organization",
                name: "Metic.ai",
                alternateName: "Metic AI",
                url: "https://metic.ai/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://metic.ai/logo.png"
                },
                description: "Leading custom AI development services provider specializing in machine learning, neural networks, and enterprise AI solutions.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "AI Innovation Center",
                  addressLocality: "Global",
                  addressRegion: "Worldwide",
                  addressCountry: "International"
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+917892518414",
                  contactType: "Customer Service",
                  areaServed: "Worldwide",
                  availableLanguage: "English"
                }
              },
              {
                "@type": "Service",
                "@id": "https://metic.ai/custom-ai-development/#service",
                name: "Custom AI Development Services",
                provider: {
                  "@id": "https://metic.ai/#organization"
                },
                description: "Enterprise-grade custom AI development services including machine learning model creation, neural network design, AI system architecture, and deep learning solutions.",
                serviceType: "Custom AI Development",
                areaServed: [
                  "United States", "India", "United Kingdom", "Canada", "Australia", 
                  "Germany", "France", "Singapore", "UAE", "Global"
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "AI Development Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Custom Machine Learning Models"
                      }
                    },
                    {
                      "@type": "Offer", 
                      itemOffered: {
                        "@type": "Service",
                        name: "Neural Network Development"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://metic.ai/custom-ai-development/#webpage",
                url: "https://metic.ai/custom-ai-development/",
                name: "Custom AI Development Services Near Me | Metic.ai",
                description: "Looking for custom AI development services near me? Expert AI solutions with 98% accuracy and 100+ models deployed.",
                isPartOf: {
                  "@id": "https://metic.ai/#website"
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://metic.ai/og-custom-ai-development.jpg"
                },
                datePublished: "2024-01-01",
                dateModified: "2025-11-07"
              }
            ]
          })
        }}
      />

      {/* Advanced Breadcrumb Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container px-4 md:px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
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
                      "item": "https://metic.ai/services/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Custom AI Development Services",
                      "item": "https://metic.ai/custom-ai-development/"
                    }
                  ]
                })
              }}
            />
            <Link href="/" className="flex items-center text-gray-500 hover:text-primary-orange transition-colors">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/services" className="flex items-center text-gray-500 hover:text-primary-orange transition-colors">
              <Briefcase className="w-4 h-4 mr-1" />
              Services
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-primary-orange font-medium">Custom AI Development Services</span>
          </nav>
        </div>
      </section>
      {/* Enhanced Creative Hero Section - VSO & Target Keyword Optimized (Ahmedabad Style) */}
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
              <span className="text-sm font-medium text-orange-300">Enterprise AI Development Services Worldwide</span>
              <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Title with Animation */}
            <div className="relative mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white relative z-10">
                <strong>
                  Custom AI Development Services Near Me
                </strong>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Leading Custom AI Solutions
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="relative mb-10">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white">Custom AI Development Services Near Me</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange"> Custom AI Development Company</strong> 
                with 100+ successful custom AI implementations. We help businesses worldwide transform with cutting-edge AI solutions, 
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
                  <span className="text-sm text-gray-400">100+ AI Models</span>
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
                  <MapPin className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Call: +91 7892518414
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats with Creative Design */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              {[
                { number: "100+", label: "Custom AI Models Deployed" },
                { number: "98%", label: "Model Accuracy Rate" },
                { number: "60%", label: "Average Cost Savings" },
                { number: "24/7", label: "Expert Support" }
              ].map((stat, index) => (
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
                Trusted as the top Custom AI Development Services provider
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Custom AI Development Near Me",
                  "AI Development Company", 
                  "Machine Learning Development"
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

      {/* Revolutionary Core Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-8">
                <span className="px-8 py-4 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-primary-orange text-sm font-bold rounded-full border border-primary-orange/20 shadow-xl">
                  🎯 Our Expertise
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Our </span>
                <span className="text-primary-orange">Custom AI</span>
                <span className="text-gray-900"> Development Services</span>
              </h2>
              
              <div className="w-32 h-2 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-10 rounded-full shadow-lg"></div>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                <strong className="text-primary-orange">End-to-end custom AI development</strong> from concept to deployment with 
                <strong className="text-gray-900"> enterprise-grade solutions</strong> and <strong className="text-secondary-orange">local expertise near you</strong>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Custom ML Models - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-primary-orange/30 hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Brain className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-orange/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-primary-orange transition-colors duration-300">
                    Custom ML Models
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Design and develop custom machine learning models</strong> tailored to your specific data, 
                    business logic, and performance requirements using state-of-the-art algorithms and frameworks.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Supervised & Unsupervised Learning</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">Deep Learning Architectures</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Model Optimization & Tuning</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white group-hover:shadow-lg">
                        Get ML Models <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Neural Network Design - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-secondary-orange/30 hover:shadow-2xl hover:shadow-secondary-orange/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Cpu className="w-10 h-10 text-purple-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-orange/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-secondary-orange transition-colors duration-300">
                    Neural Network Design
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Create sophisticated neural network architectures</strong> including CNNs, RNNs, Transformers, 
                    and custom architectures designed for your specific AI application requirements.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Convolutional Neural Networks</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">Recurrent Neural Networks</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Transformer Architectures</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-secondary-orange text-secondary-orange hover:bg-secondary-orange hover:text-white group-hover:shadow-lg">
                        Design Networks <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* AI System Architecture - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-primary-orange/30 hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Layers className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-orange/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-primary-orange transition-colors duration-300">
                    AI System Architecture
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Design comprehensive AI system architectures</strong> that integrate seamlessly with your existing 
                    infrastructure while ensuring scalability, reliability, and optimal performance.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Microservices Architecture</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">API Gateway Design</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Cloud-Native Deployment</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white group-hover:shadow-lg">
                        Build Architecture <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Data Pipeline Development - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-secondary-orange/30 hover:shadow-2xl hover:shadow-secondary-orange/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Database className="w-10 h-10 text-orange-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-orange/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-secondary-orange transition-colors duration-300">
                    Data Pipeline Development
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Build robust data pipelines</strong> for AI model training and inference, including data collection, 
                    preprocessing, feature engineering, and automated model retraining workflows.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">ETL/ELT Pipeline Design</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">Real-time Data Processing</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Automated Workflows</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-secondary-orange text-secondary-orange hover:bg-secondary-orange hover:text-white group-hover:shadow-lg">
                        Build Pipelines <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Model Training & Optimization - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-primary-orange/30 hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <TrendingUp className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-orange/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-primary-orange transition-colors duration-300">
                    Model Training & Optimization
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Advanced model training techniques</strong> including hyperparameter optimization, transfer learning, 
                    distributed training, and performance optimization for production environments.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Hyperparameter Tuning</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">Transfer Learning</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Model Compression</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white group-hover:shadow-lg">
                        Optimize Models <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* AI Infrastructure - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-secondary-orange/30 hover:shadow-2xl hover:shadow-secondary-orange/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Server className="w-10 h-10 text-indigo-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-orange/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-secondary-orange transition-colors duration-300">
                    AI Infrastructure
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Design and implement scalable AI infrastructure</strong> including GPU clusters, containerization, 
                    orchestration, monitoring, and automated deployment for production AI systems.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Kubernetes Deployment</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">GPU Optimization</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Auto-scaling Solutions</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-secondary-orange text-secondary-orange hover:bg-secondary-orange hover:text-white group-hover:shadow-lg">
                        Setup Infrastructure <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our AI Development Process
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Systematic approach to custom AI development ensuring quality, scalability, and business alignment
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Discovery & Analysis</h3>
                <p className="text-gray-600">
                  Deep dive into your business requirements, data landscape, and technical constraints 
                  to define the optimal AI solution architecture.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Proof of Concept</h3>
                <p className="text-gray-600">
                  Develop a working prototype to validate the AI approach, test feasibility, 
                  and demonstrate initial results before full-scale development.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Development & Training</h3>
                <p className="text-gray-600">
                  Build and train custom AI models using your data, implement the complete system, 
                  and optimize for performance and accuracy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4">Deployment & Support</h3>
                <p className="text-gray-600">
                  Deploy to production environment with monitoring, provide team training, 
                  and offer ongoing support and model improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Advanced AI Technology Stack
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cutting-edge frameworks and tools for building robust, scalable AI solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Frameworks</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>TensorFlow & Keras</p>
                  <p>PyTorch & Lightning</p>
                  <p>Scikit-learn</p>
                  <p>Hugging Face</p>
                  <p>JAX & Flax</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Cloud className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Cloud Platforms</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>AWS SageMaker</p>
                  <p>Google Cloud AI</p>
                  <p>Azure ML Studio</p>
                  <p>Kubernetes</p>
                  <p>Docker</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Data & Storage</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Apache Spark</p>
                  <p>Apache Kafka</p>
                  <p>MongoDB</p>
                  <p>PostgreSQL</p>
                  <p>Redis</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">MLOps Tools</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>MLflow</p>
                  <p>Kubeflow</p>
                  <p>Apache Airflow</p>
                  <p>DVC</p>
                  <p>Weights & Biases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Industries & Applications
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Custom AI solutions across diverse industries and use cases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Healthcare & Life Sciences</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Medical image analysis, drug discovery, patient risk prediction, clinical decision support, 
                      genomics analysis, and personalized treatment recommendation systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Finance & Banking</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fraud detection, algorithmic trading, credit risk assessment, robo-advisors, 
                      regulatory compliance automation, and customer behavior prediction models.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Workflow className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Manufacturing & Industry 4.0</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Predictive maintenance, quality control automation, supply chain optimization, 
                      robotic process automation, and smart factory AI systems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Retail & E-commerce</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Recommendation engines, dynamic pricing, inventory optimization, customer segmentation, 
                      visual search, and personalized shopping experiences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Lock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Security & Defense</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Threat detection, cybersecurity automation, surveillance systems, biometric recognition, 
                      anomaly detection, and intelligent security monitoring.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Zap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Energy & Utilities</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Smart grid optimization, energy consumption forecasting, renewable energy management, 
                      asset monitoring, and demand response systems.
                    </p>
                  </div>
                </div>
              </div>
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
                Why Choose Our Custom AI Development?
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expertise, innovation, and proven results in custom AI solution development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Brain className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Expertise</h3>
                <p className="text-gray-600">
                  Deep expertise in machine learning, deep learning, and AI research with PhD-level 
                  data scientists and AI engineers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Target className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Focus</h3>
                <p className="text-gray-600">
                  AI solutions designed with clear business objectives, measurable outcomes, 
                  and tangible ROI for your organization.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Grade</h3>
                <p className="text-gray-600">
                  Production-ready AI systems with enterprise security, scalability, 
                  compliance, and 24/7 monitoring capabilities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Full Support</h3>
                <p className="text-gray-600">
                  End-to-end support from conception to deployment, including training, 
                  maintenance, and continuous improvement.
                </p>
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
                  About Custom AI Development Services
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about custom AI development services and choosing the right AI development partner
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
                            <Clock className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        {/* Question */}
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How long does custom AI development typically take?
                          </h3>
                        </div>
                      </div>
                      
                      {/* Toggle Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronRight className="w-6 h-6 text-primary-orange group-open:rotate-90 transition-transform duration-300" />
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
                        <strong className="text-gray-900 font-semibold">Custom AI development timelines vary based on complexity.</strong> Simple models may take 4-8 weeks, while 
                        complex enterprise AI systems can take 3-6 months. We provide detailed project timelines during the discovery phase.
                      </p>
                      <p className="text-lg">
                        Our streamlined process includes proof of concept, development, testing, and deployment phases with regular milestone reviews.
                      </p>
                      
                      {/* Stats Highlight */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Clock className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">4-8 Weeks for Simple Models</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Target className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">3-6 Months for Complex AI</span>
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
                            <Database className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What data do you need to build custom AI models?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronRight className="w-6 h-6 text-primary-orange group-open:rotate-90 transition-transform duration-300" />
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
                        <strong className="text-gray-900 font-semibold">Data requirements depend on the AI application.</strong> Generally, we need relevant, clean, and 
                        representative datasets. We can work with structured data, unstructured data, images, text, or time series.
                      </p>
                      <p className="text-lg">
                        We also provide comprehensive data audit services to assess your data readiness for AI development and suggest improvements.
                      </p>

                      {/* Data Type Grid */}
                      <div className="grid md:grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <Brain className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">Structured Data</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <Database className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">Text & Documents</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <Eye className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">Images & Video</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">Time Series</span>
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
                            <Shield className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How do you ensure AI model accuracy in production?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronRight className="w-6 h-6 text-primary-orange group-open:rotate-90 transition-transform duration-300" />
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
                        <strong className="text-gray-900 font-semibold">We implement comprehensive testing, validation, and monitoring systems.</strong> This includes 
                        cross-validation during training, A/B testing for deployment, and real-time performance monitoring.
                      </p>
                      <p className="text-lg">
                        Our monitoring includes automated alerts for model drift or degradation, ensuring your AI systems maintain optimal performance.
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
                            <Settings className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Can you integrate AI models with existing systems?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronRight className="w-6 h-6 text-primary-orange group-open:rotate-90 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <Building className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-gray-900 font-semibold">Yes, we specialize in seamless integration</strong> with existing enterprise systems through APIs, 
                        microservices, and various deployment options including cloud, on-premises, or hybrid environments.
                      </p>
                      <p className="text-lg">
                        We ensure minimal disruption to your current workflows and provide comprehensive integration testing.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

            </div>

            {/* Enhanced CTA at Bottom of FAQ */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary-orange to-secondary-orange rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/90 to-secondary-orange/90"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Have More Questions About Custom AI Development?
                  </h3>
                  <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                    Our AI experts are here to answer all your questions and help you get started with custom AI development.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button 
                        variant="secondary" 
                        size="lg" 
                        className="bg-white text-primary-orange hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 group"
                      >
                        <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        Get Free Consultation
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 group"
                      >
                        <MapPin className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Call: +91 7892518414
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Local Optimization */}
      <section id="consultation" className="py-24 relative overflow-hidden bg-gradient-to-br from-primary-orange via-secondary-orange to-primary-orange">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/90 via-secondary-orange/90 to-primary-orange/90"></div>
          <div className="absolute top-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`, backgroundSize: '60px 60px'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center text-white">
            <div className="mb-16">
              <div className="inline-block mb-8">
                <span className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/30 shadow-2xl">
                  🚀 Ready for Custom AI Development?
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="block mb-4">Ready to Build Your</span>
                <span className="block text-white/90">Custom AI Solution?</span>
              </h2>
              
              <div className="w-40 h-2 bg-white/40 mx-auto mb-10 rounded-full"></div>
              
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-4xl mx-auto mb-16">
                <strong className="text-white">Looking for custom AI development services near me?</strong> Our local AI experts are ready to help you design and develop 
                <strong className="text-white"> enterprise-grade custom artificial intelligence solutions</strong> that transform your business and deliver 
                <strong className="text-white/90"> measurable results with 98% accuracy.</strong>
              </p>
            </div>

            {/* Enhanced CTAs with Local Focus */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Link href="/contact">
                <div className="group relative">
                  <div className="absolute -inset-2 bg-white/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="relative w-full bg-white text-primary-orange border-2 border-white hover:bg-white/90 hover:text-primary-orange font-bold px-10 py-6 shadow-2xl group-hover:shadow-white/30 group-hover:scale-105 transition-all duration-300"
                  >
                    <MessageSquare className="w-6 h-6 mr-3 group-hover:-translate-y-1 transition-transform" />
                    Get Free AI Consultation Today
                  </Button>
                </div>
              </Link>
              
              <Link href="tel:+917892518414">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-white/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="relative w-full bg-transparent border-2 border-white/60 text-white hover:bg-white/10 hover:border-white font-bold px-10 py-6 shadow-xl group-hover:shadow-white/20 group-hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                  >
                    <MapPin className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                    Call Local AI Experts: +91 7892518414
                  </Button>
                </div>
              </Link>
            </div>

            {/* Local Service Areas */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-white/90">Custom AI Development Services Available In:</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { name: "California", href: "/artificial-intelligence-ai-services-in-california" },
                  { name: "Texas", href: "/artificial-intelligence-ai-services-in-texas" },
                  { name: "New York", href: "/artificial-intelligence-ai-services-in-new-york" },
                  { name: "Alabama", href: "/artificial-intelligence-ai-services-in-alabama" },
                  { name: "Alaska", href: "/artificial-intelligence-ai-services-in-alaska" },
                  { name: "Hawaii", href: "/artificial-intelligence-ai-services-in-hawaii" },
                  { name: "Arkansas", href: "/artificial-intelligence-ai-services-in-arkansas" },
                  { name: "Colorado", href: "/artificial-intelligence-ai-services-in-colorado" },
                  { name: "Kansas", href: "/artificial-intelligence-ai-services-in-kansas" },
                  { name: "Virginia", href: "/artificial-intelligence-ai-services-in-virginia" }
                ].map((location) => (
                  <Link
                    key={location.name}
                    href={location.href}
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30 shadow-lg hover:shadow-xl hover:bg-white/30 transition-all duration-300"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-white/80 font-medium">Custom AI Models Deployed</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-white/80 font-medium">Model Accuracy Rate</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-white/80 font-medium">Enterprise Clients</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-white/80 font-medium">Expert Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
