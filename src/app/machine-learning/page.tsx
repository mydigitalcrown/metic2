import Link from "next/link";
import { Button } from "../components/ui/Button";
import { type Metadata } from 'next';
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Target,
  Zap,
  Shield,
  Users,
  CheckCircle,
  Lightbulb,
  Database,
  Cpu,
  GitBranch,
  Server,
  Settings,
  Cloud,
  Activity,
  PieChart,
  LineChart,
  Layers,
  Code,
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
  Briefcase,
  Play,
  Network
} from "lucide-react";

export const metadata: Metadata = {
  title: "Machine Learning Services Near Me | #1 ML Company - Metic.ai",
  description: "Looking for machine learning services near me? Expert ML solutions with 95% accuracy and 300+ models deployed. Predictive analytics, deep learning, classification models & enterprise AI.",
  keywords: [
    "machine learning services near me",
    "ML services near me", 
    "machine learning company near me",
    "AI ML services",
    "predictive analytics near me",
    "deep learning services",
    "ML consulting near me",
    "machine learning development",
    "data science services near me",
    "ML model development",
    "artificial intelligence services",
    "machine learning solutions",
    "ML implementation services",
    "enterprise machine learning",
    "custom ML development",
    "machine learning experts",
    "ML algorithm development",
    "data analytics services",
    "machine learning automation",
    "ML platform development",
    "business intelligence ML",
    "machine learning ROI",
    "ML deployment services",
    "machine learning optimization",
    "advanced analytics services"
  ],
  openGraph: {
    title: "Machine Learning Services Near Me | #1 ML Company - Metic.ai",
    description: "Looking for machine learning services near me? Expert ML solutions with 95% accuracy and 300+ models deployed.",
    type: "website",
    url: "https://metic.ai/machine-learning/",
    siteName: "Metic.ai - Machine Learning Services Near Me",
    images: [{
      url: "https://metic.ai/og-machine-learning.jpg",
      width: 1200,
      height: 630,
      alt: "Machine Learning Services Near Me - Metic.ai"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Services Near Me | #1 ML Company - Metic.ai", 
    description: "Looking for machine learning services near me? Expert ML solutions with 95% accuracy and 300+ models deployed.",
    images: ["https://metic.ai/og-machine-learning.jpg"]
  },
  alternates: {
    canonical: "https://metic.ai/machine-learning/"
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function MachineLearningPage() {
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
                description: "Leading machine learning services provider specializing in predictive analytics, deep learning, and enterprise ML solutions.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "ML Innovation Center",
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
                "@id": "https://metic.ai/machine-learning/#service",
                name: "Machine Learning Services",
                provider: {
                  "@id": "https://metic.ai/#organization"
                },
                description: "Enterprise-grade machine learning services including predictive analytics, deep learning, classification models, and data science solutions.",
                serviceType: "Machine Learning Development",
                areaServed: [
                  "United States", "India", "United Kingdom", "Canada", "Australia", 
                  "Germany", "France", "Singapore", "UAE", "Global"
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "ML Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Predictive Analytics"
                      }
                    },
                    {
                      "@type": "Offer", 
                      itemOffered: {
                        "@type": "Service",
                        name: "Deep Learning Models"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://metic.ai/machine-learning/#webpage",
                url: "https://metic.ai/machine-learning/",
                name: "Machine Learning Services Near Me | Metic.ai",
                description: "Looking for machine learning services near me? Expert ML solutions with 95% accuracy and 300+ models deployed.",
                isPartOf: {
                  "@id": "https://metic.ai/#website"
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://metic.ai/og-machine-learning.jpg"
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
                      "name": "Machine Learning Services",
                      "item": "https://metic.ai/machine-learning/"
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
            <span className="text-primary-orange font-medium">Machine Learning Services</span>
          </nav>
        </div>
      </section>

      {/* Sophisticated Hero Section with Circuit Patterns */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-primary-orange/20 text-white py-24 lg:py-32">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-primary-orange/10"></div>
          <div className="absolute inset-0 opacity-10">
            {/* Circuit Pattern SVG */}
            <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
              <defs>
                <pattern id="circuit-ml" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="url(#circuit-glow)" opacity="0.6"/>
                  <circle cx="80" cy="80" r="2" fill="url(#circuit-glow)" opacity="0.6"/>
                  <path d="M20 20L80 20L80 80" stroke="url(#circuit-glow)" strokeWidth="1" opacity="0.4"/>
                  <circle cx="50" cy="50" r="1.5" fill="url(#circuit-glow)" opacity="0.5"/>
                </pattern>
                <linearGradient id="circuit-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: "#FF6B35", stopOpacity: 1}}/>
                  <stop offset="100%" style={{stopColor: "#FF8C42", stopOpacity: 0.8}}/>
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-ml)"/>
            </svg>
          </div>
          {/* Floating Animated Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-orange rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary-orange rounded-full opacity-40 animate-bounce" style={{animationDelay: "0.5s"}}></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-light-orange rounded-full opacity-70 animate-ping" style={{animationDelay: "1s"}}></div>
        </div>

        <div className="container relative px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Trust Indicators Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 opacity-90">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Award className="w-4 h-4 mr-2 text-primary-orange" />
                <span className="text-sm font-medium">300+ ML Models Deployed</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <TrendingUp className="w-4 h-4 mr-2 text-primary-orange" />
                <span className="text-sm font-medium">95% Accuracy Rate</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <MapPin className="w-4 h-4 mr-2 text-primary-orange" />
                <span className="text-sm font-medium">ML Services Near You</span>
              </div>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <strong className="bg-gradient-to-r from-white via-white to-primary-orange bg-clip-text text-transparent">
                  Machine Learning Services Near Me
                </strong>
                <br />
                <span className="text-3xl md:text-5xl text-gray-300 font-normal">
                  Expert AI Solutions That Deliver Results
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Looking for the best <strong>machine learning services near me</strong>? Metic.ai delivers enterprise-grade ML solutions with 
                <span className="text-primary-orange font-semibold"> 95% accuracy rates</span> and 
                <span className="text-primary-orange font-semibold"> 300+ successful deployments</span>. 
                Transform your data into intelligent insights with our cutting-edge predictive analytics and deep learning models.
              </p>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-primary-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-center mb-2">
                    <Trophy className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-300">ML Projects</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-primary-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm text-gray-300">Accuracy Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-primary-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-center mb-2">
                    <Globe className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-300">Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-primary-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-center mb-2">
                    <Rocket className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-300">ML Support</div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-primary-orange/90 hover:to-secondary-orange/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  Get Free ML Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105">
                  <Play className="mr-2 h-5 w-5" />
                  View ML Demo
                </Button>
              </div>

              {/* Client Testimonial Snippet */}
              <div className="mt-12 max-w-2xl mx-auto">
                <blockquote className="text-lg text-gray-300 italic border-l-4 border-primary-orange pl-6 bg-white/5 backdrop-blur-sm rounded-r-lg py-4 pr-6">
                  "Metic.ai's machine learning solutions increased our prediction accuracy by 40% and reduced operational costs by $2M annually."
                </blockquote>
                <div className="flex items-center justify-center mt-4 text-sm text-gray-400">
                  <Building className="w-4 h-4 mr-2" />
                  Fortune 500 Technology Company
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Advanced 3D Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-primary-orange/10 rounded-full px-6 py-2 mb-6">
                <Brain className="w-5 h-5 text-primary-orange mr-2" />
                <span className="text-primary-orange font-semibold">Enterprise ML Solutions</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Our <span className="text-primary-orange">Machine Learning</span>
                <br />
                <span className="text-gray-700">Expertise Portfolio</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your business with cutting-edge machine learning solutions designed for maximum impact and scalability
              </p>
            </div>
            
            {/* 3D Service Cards Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {/* Predictive Analytics - Enhanced 3D Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative bg-white rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                  {/* Gradient Icon Container */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary-orange transition-colors">
                    Predictive Analytics
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
                    Forecast future trends, customer behavior, and business outcomes using advanced predictive 
                    models including time series analysis, regression models, and ensemble methods.
                  </p>
                  
                  {/* Enhanced Feature List */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center bg-green-50 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm font-medium text-gray-700">Sales Forecasting</span>
                    </div>
                    <div className="flex items-center bg-green-50 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm font-medium text-gray-700">Demand Prediction</span>
                    </div>
                    <div className="flex items-center bg-green-50 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm font-medium text-gray-700">Risk Assessment</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Deep Learning - Enhanced 3D Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative bg-white rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Network className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors">
                    Deep Learning
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
                    Leverage neural networks for complex pattern recognition, computer vision, natural language 
                    processing, and advanced AI applications that require deep understanding of data.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center bg-green-50 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm font-medium text-gray-700">Computer Vision</span>
                    </div>
                    <div className="flex items-center bg-green-50 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm font-medium text-gray-700">Natural Language Processing</span>
                    </div>
                    <div className="flex items-center bg-green-50 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm font-medium text-gray-700">Pattern Recognition</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* MLOps & Automation - Enhanced 3D Card */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative bg-white rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange/20 to-secondary-orange/20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                      <Settings className="w-8 h-8 text-primary-orange" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center">
                      <Cpu className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary-orange transition-colors">
                    MLOps & Automation
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
                    Streamline your machine learning operations with automated pipelines, model monitoring, 
                    deployment, and continuous integration for scalable ML solutions.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-primary-orange mr-3" />
                      <span className="text-sm font-medium text-gray-700">Automated Pipelines</span>
                    </div>
                    <div className="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-primary-orange mr-3" />
                      <span className="text-sm font-medium text-gray-700">Model Monitoring</span>
                    </div>
                    <div className="flex items-center bg-orange-50 rounded-lg px-3 py-2">
                      <CheckCircle className="w-4 h-4 text-primary-orange mr-3" />
                      <span className="text-sm font-medium text-gray-700">CI/CD Integration</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-primary-orange/90 hover:to-secondary-orange/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Machine Learning Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-orange/5">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-full px-6 py-2 mb-6">
                <Lightbulb className="w-5 h-5 text-primary-orange mr-2" />
                <span className="text-primary-orange font-semibold">Why Choose ML</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Why <span className="text-primary-orange">Machine Learning</span>
                <br />
                <span className="text-gray-700">is the Future</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Machine learning is revolutionizing industries worldwide by enabling businesses to make data-driven decisions, 
                automate complex processes, and discover insights that were previously impossible to detect. From predicting 
                customer behavior to optimizing supply chains, ML transforms raw data into competitive advantages.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Left Column - Benefits List */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Predictive Insights</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Anticipate market trends, customer needs, and business outcomes with 85% greater accuracy than traditional 
                      methods. Our ML models analyze historical patterns to forecast future scenarios, enabling proactive 
                      decision-making that keeps you ahead of the competition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Process Automation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Automate repetitive tasks and complex workflows with intelligent systems that learn and improve over time. 
                      Reduce manual effort by up to 70% while increasing accuracy and consistency across your operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Experiences</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Deliver highly personalized customer experiences through recommendation engines and behavior analysis. 
                      Increase customer satisfaction by 40% and conversion rates by 25% with AI-driven personalization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Risk Management</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Identify and mitigate risks before they impact your business. Our ML systems detect anomalies, 
                      predict failures, and alert you to potential issues with 92% accuracy, protecting your operations and reputation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-orange/5 to-secondary-orange/10 rounded-3xl p-8 border border-primary-orange/20">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">ML Impact Statistics</h3>
                    <p className="text-gray-600">Real results from our machine learning implementations</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-primary-orange mb-2">85%</div>
                      <div className="text-sm text-gray-600">Prediction Accuracy</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                      <div className="text-sm text-gray-600">Customer Satisfaction</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
                      <div className="text-sm text-gray-600">Revenue Increase</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-primary-orange">
                    <blockquote className="text-gray-600 italic mb-4">
                      "Machine learning isn't just about technology—it's about transforming how businesses understand 
                      and interact with their data to create unprecedented value."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center mr-3">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Dr. Sarah Chen</div>
                        <div className="text-sm text-gray-500">Chief Data Scientist, Metic.ai</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ML Technologies & Frameworks */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-6 py-2 mb-6">
                <Code className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-600 font-semibold">Technologies & Frameworks</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-700">Cutting-Edge</span>
                <br />
                <span className="text-primary-orange">ML Technology Stack</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage the most advanced machine learning frameworks and tools to build robust, scalable, 
                and production-ready AI solutions. Our technology stack is constantly evolving to incorporate 
                the latest breakthroughs in artificial intelligence and machine learning.
              </p>
            </div>

            {/* Technology Categories */}
            <div className="space-y-16">
              {/* Deep Learning Frameworks */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <Brain className="w-8 h-8 text-primary-orange mr-3" />
                  Deep Learning Frameworks
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">TF</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">TensorFlow</h4>
                    <p className="text-sm text-gray-600 mb-3">Google's open-source platform for building and deploying ML models at scale.</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Neural Networks</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Production</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">PT</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">PyTorch</h4>
                    <p className="text-sm text-gray-600 mb-3">Facebook's dynamic neural network framework for research and production.</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Research</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Dynamic</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">K</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Keras</h4>
                    <p className="text-sm text-gray-600 mb-3">High-level neural network API for rapid prototyping and development.</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">High-level</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Prototyping</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">HF</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Hugging Face</h4>
                    <p className="text-sm text-gray-600 mb-3">Transformers library for natural language processing and computer vision.</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">NLP</span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">Transformers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ML Libraries */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <Database className="w-8 h-8 text-blue-600 mr-3" />
                  Machine Learning Libraries
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-800 mb-2">Scikit-learn</h4>
                    <p className="text-gray-600 mb-3 text-sm">Comprehensive library for classical machine learning algorithms and data preprocessing.</p>
                    <div className="flex items-center text-yellow-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">Classification, Regression, Clustering</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-800 mb-2">XGBoost</h4>
                    <p className="text-gray-600 mb-3 text-sm">Optimized gradient boosting framework designed for speed and performance.</p>
                    <div className="flex items-center text-purple-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">Gradient Boosting, Feature Selection</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-800 mb-2">OpenCV</h4>
                    <p className="text-gray-600 mb-3 text-sm">Computer vision library for image and video processing applications.</p>
                    <div className="flex items-center text-cyan-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">Image Processing, Object Detection</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud & Infrastructure */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <Cloud className="w-8 h-8 text-green-600 mr-3" />
                  Cloud & Infrastructure
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">AWS SageMaker</h4>
                    <p className="text-xs text-gray-600">ML Platform</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">Google Cloud AI</h4>
                    <p className="text-xs text-gray-600">AI Platform</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">Azure ML</h4>
                    <p className="text-xs text-gray-600">Microsoft Platform</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">Kubernetes</h4>
                    <p className="text-xs text-gray-600">Orchestration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 bg-gradient-to-br from-primary-orange/5 via-white to-secondary-orange/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-full px-6 py-2 mb-6">
                <Building className="w-5 h-5 text-primary-orange mr-2" />
                <span className="text-primary-orange font-semibold">Industry Applications</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary-orange">Machine Learning</span>
                <br />
                <span className="text-gray-700">Across Industries</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our machine learning solutions are transforming businesses across diverse industries. From healthcare 
                to finance, retail to manufacturing, we deliver tailored AI solutions that address specific industry 
                challenges and unlock new opportunities for growth and innovation.
              </p>
            </div>

            {/* Industry Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Healthcare */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Healthcare & Life Sciences</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Revolutionizing patient care through AI-powered diagnostics, drug discovery, and personalized treatment 
                      recommendations. Our ML models analyze medical imaging, predict disease progression, and optimize 
                      treatment protocols to improve patient outcomes.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Medical Image Analysis & Diagnosis</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Drug Discovery & Development</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Personalized Treatment Plans</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Electronic Health Records Analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Finance */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Financial Services</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Enhancing financial decision-making through predictive analytics, fraud detection, and automated 
                      trading systems. Our ML solutions help financial institutions manage risk, optimize portfolios, 
                      and provide personalized banking experiences.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Fraud Detection & Prevention</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Algorithmic Trading Systems</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Credit Risk Assessment</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Customer Behavior Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Retail & E-commerce */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Retail & E-commerce</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Transforming customer experiences through personalized recommendations, dynamic pricing, and 
                      demand forecasting. Our ML solutions help retailers optimize inventory, understand customer 
                      behavior, and increase conversion rates across all channels.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Personalized Product Recommendations</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Dynamic Pricing Optimization</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Demand Forecasting & Inventory</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Customer Segmentation Analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturing */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Manufacturing & IoT</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Optimizing production processes through predictive maintenance, quality control, and supply chain 
                      management. Our ML solutions reduce downtime, improve product quality, and streamline operations 
                      across manufacturing facilities.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Predictive Maintenance Systems</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Quality Control & Defect Detection</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Supply Chain Optimization</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Process Automation & Control</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Stats */}
            <div className="mt-16 grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">50+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">300+</div>
                <div className="text-gray-600">ML Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section - Ahmedabad Style */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-orange/20 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-primary-orange/10"></div>
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
              <defs>
                <pattern id="faq-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="url(#faq-glow)" opacity="0.6"/>
                  <circle cx="80" cy="80" r="2" fill="url(#faq-glow)" opacity="0.6"/>
                  <path d="M20 20L80 20L80 80" stroke="url(#faq-glow)" strokeWidth="1" opacity="0.4"/>
                </pattern>
                <linearGradient id="faq-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: "#FF6B35", stopOpacity: 1}}/>
                  <stop offset="100%" style={{stopColor: "#FF8C42", stopOpacity: 0.8}}/>
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#faq-circuit)"/>
            </svg>
          </div>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* FAQ Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                <MessageSquare className="w-5 h-5 text-primary-orange mr-2" />
                <span className="text-primary-orange font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-white to-primary-orange bg-clip-text text-transparent">
                  Machine Learning
                </span>
                <br />
                <span className="text-gray-300">Questions Answered</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get answers to the most common questions about machine learning services, implementation, 
                and how AI can transform your business operations.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              <details className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-orange transition-colors">
                    What types of machine learning models do you develop?
                  </h3>
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center ml-4 group-open:rotate-45 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                </summary>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We develop a comprehensive range of machine learning models including supervised learning algorithms 
                    (classification and regression), unsupervised learning models (clustering and dimensionality reduction), 
                    deep learning neural networks, reinforcement learning systems, and natural language processing models.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-semibold text-primary-orange mb-2">Supervised Learning</h4>
                      <p className="text-sm text-gray-400">Classification, regression, decision trees, SVM, random forests</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-semibold text-primary-orange mb-2">Deep Learning</h4>
                      <p className="text-sm text-gray-400">Neural networks, CNNs, RNNs, transformers, GANs</p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-orange transition-colors">
                    How do you ensure the accuracy and reliability of ML models?
                  </h3>
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center ml-4 group-open:rotate-45 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                </summary>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our rigorous model validation process includes cross-validation, holdout testing, A/B testing, and 
                    continuous monitoring in production. We use techniques like ensemble methods, regularization, and 
                    feature engineering to improve model robustness and prevent overfitting.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      95% Average Accuracy
                    </span>
                    <span className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Continuous Monitoring
                    </span>
                  </div>
                </div>
              </details>

              <details className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-orange transition-colors">
                    What data do you need to start a machine learning project?
                  </h3>
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center ml-4 group-open:rotate-45 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                </summary>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The data requirements depend on your specific use case, but generally we need historical data relevant 
                    to your problem, properly labeled examples for supervised learning, and sufficient volume for training. 
                    We can work with structured data (databases, spreadsheets) and unstructured data (text, images, audio).
                  </p>
                  <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-4 border border-primary-orange/30">
                    <h4 className="font-semibold text-primary-orange mb-2">Minimum Data Requirements:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 1,000+ samples for simple models</li>
                      <li>• 10,000+ samples for complex models</li>
                      <li>• Clean, relevant, and representative data</li>
                    </ul>
                  </div>
                </div>
              </details>

              <details className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-orange transition-colors">
                    How long does it take to develop and deploy a machine learning solution?
                  </h3>
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center ml-4 group-open:rotate-45 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                </summary>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Development timelines vary based on complexity, data availability, and requirements. Simple models 
                    can be prototyped in 2-4 weeks, while enterprise-scale solutions typically take 3-6 months including 
                    data preparation, model development, testing, and deployment.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-400 mb-1">2-4 weeks</div>
                      <div className="text-xs text-gray-400">Prototype & POC</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-2xl font-bold text-yellow-400 mb-1">6-12 weeks</div>
                      <div className="text-xs text-gray-400">Production Model</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-2xl font-bold text-orange-400 mb-1">3-6 months</div>
                      <div className="text-xs text-gray-400">Enterprise Solution</div>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-orange transition-colors">
                    What support and maintenance do you provide after deployment?
                  </h3>
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center ml-4 group-open:rotate-45 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                </summary>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We provide comprehensive post-deployment support including model monitoring, performance tracking, 
                    regular updates, and retraining as needed. Our support packages include 24/7 monitoring, monthly 
                    performance reports, and continuous optimization to ensure your ML models remain effective over time.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-primary-orange/20 text-primary-orange rounded-full text-sm">24/7 Monitoring</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Performance Reports</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Model Retraining</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Technical Support</span>
                  </div>
                </div>
              </details>

              <details className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-orange transition-colors">
                    How do you handle data privacy and security in ML projects?
                  </h3>
                  <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center ml-4 group-open:rotate-45 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                </summary>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Data security and privacy are our highest priorities. We implement end-to-end encryption, secure 
                    data pipelines, compliance with GDPR/HIPAA regulations, and follow industry best practices for 
                    data handling. All team members sign strict confidentiality agreements.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-gray-300">End-to-end Encryption</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-gray-300">GDPR/HIPAA Compliance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-gray-300">Secure Data Pipelines</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-gray-300">Confidentiality Agreements</span>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-orange via-secondary-orange to-primary-orange text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce" style={{animationDelay: "0.5s"}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping" style={{animationDelay: "1s"}}></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white rounded-full animate-pulse" style={{animationDelay: "1.5s"}}></div>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-90">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Award className="w-5 h-5 mr-3" />
                <span className="font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Globe className="w-5 h-5 mr-3" />
                <span className="font-medium">Global ML Experts</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Clock className="w-5 h-5 mr-3" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your Business with 
              <span className="block bg-gradient-to-r from-white via-white to-yellow-200 bg-clip-text text-transparent">
                Machine Learning?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Join 500+ businesses that have successfully implemented machine learning solutions with Metic.ai. 
              Get started with a free consultation and discover how AI can drive your business forward.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-white text-primary-orange hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <MessageSquare className="mr-2 h-5 w-5" />
                Schedule Free ML Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-orange font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Watch ML Success Stories
              </Button>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-white/80">ml@metic.ai</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-white/80">+91 789 251 8414</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-white/80">Within 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}