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
    </>
  );
}