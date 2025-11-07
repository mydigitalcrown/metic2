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
  Briefcase,
  Play,
  Network,
  Activity,
  PieChart
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Integration and Development Services Near Me | #1 Local AI Company - Metic.ai",
  description: "Looking for AI Integration and development services near me? Metic.ai delivers enterprise-grade AI integration with 99% uptime, 200+ successful deployments. Local AI experts for seamless integration, deployment & scaling.",
  keywords: [
    "AI Integration and development services near me",
    "AI integration services near me",
    "AI development services near me", 
    "AI deployment services",
    "machine learning integration services",
    "AI system integration",
    "custom AI integration",
    "enterprise AI deployment",
    "AI infrastructure development",
    "cloud AI integration",
    "on-premise AI deployment",
    "hybrid AI solutions",
    "AI model deployment",
    "artificial intelligence integration",
    "AI platform development",
    "machine learning deployment",
    "AI consulting services",
    "AI architecture design",
    "AI pipeline development",
    "scalable AI solutions",
    "AI automation services",
    "intelligent system integration",
    "AI technology implementation",
    "enterprise AI transformation",
    "AI solution architecture"
  ],
  openGraph: {
    title: "AI Integration and Development Services Near Me | #1 Local AI Company - Metic.ai",
    description: "Looking for AI Integration and development services near me? Enterprise-grade AI integration with 99% uptime and 200+ successful deployments.",
    type: "website",
    url: "https://metic.ai/ai-integration-and-deployment/",
    siteName: "Metic.ai - AI Integration and Development Services Near Me",
    images: [{
      url: "https://metic.ai/og-ai-integration.jpg",
      width: 1200,
      height: 630,
      alt: "AI Integration and Development Services Near Me - Metic.ai"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Integration and Development Services Near Me | #1 Local AI Company - Metic.ai", 
    description: "Looking for AI Integration and development services near me? Enterprise-grade AI integration with 99% uptime and 200+ successful deployments.",
    images: ["https://metic.ai/og-ai-integration.jpg"]
  },
  alternates: {
    canonical: "https://metic.ai/ai-integration-and-deployment/"
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

export default function AIIntegrationPage() {
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
                description: "Leading AI integration and development services provider specializing in enterprise AI deployment, system integration, and intelligent automation solutions.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "AI Integration Center",
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
                "@id": "https://metic.ai/ai-integration-and-deployment/#service",
                name: "AI Integration and Development Services",
                provider: {
                  "@id": "https://metic.ai/#organization"
                },
                description: "Enterprise-grade AI integration and development services including system integration, deployment automation, cloud AI solutions, and intelligent platform development.",
                serviceType: "AI Integration Development",
                areaServed: [
                  "United States", "India", "United Kingdom", "Canada", "Australia", 
                  "Germany", "France", "Singapore", "UAE", "Global"
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "AI Integration Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "AI System Integration"
                      }
                    },
                    {
                      "@type": "Offer", 
                      itemOffered: {
                        "@type": "Service",
                        name: "AI Deployment Solutions"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://metic.ai/ai-integration-and-deployment/#webpage",
                url: "https://metic.ai/ai-integration-and-deployment/",
                name: "AI Integration and Development Services Near Me | Metic.ai",
                description: "Looking for AI Integration and development services near me? Enterprise-grade AI integration with 99% uptime and 200+ successful deployments.",
                isPartOf: {
                  "@id": "https://metic.ai/#website"
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://metic.ai/og-ai-integration.jpg"
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
                      "name": "AI Integration and Development",
                      "item": "https://metic.ai/ai-integration-and-deployment/"
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
            <span className="text-primary-orange font-medium">AI Integration and Development</span>
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
                <pattern id="circuit-ai" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
              <rect width="100%" height="100%" fill="url(#circuit-ai)"/>
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
                <span className="text-sm font-medium">200+ AI Integrations</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <TrendingUp className="w-4 h-4 mr-2 text-primary-orange" />
                <span className="text-sm font-medium">99% Uptime</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <MapPin className="w-4 h-4 mr-2 text-primary-orange" />
                <span className="text-sm font-medium">AI Integration Near You</span>
              </div>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <strong className="bg-gradient-to-r from-white via-white to-primary-orange bg-clip-text text-transparent">
                  AI Integration and Development Services Near Me
                </strong>
                <br />
                <span className="text-3xl md:text-5xl text-gray-300 font-normal">
                  Enterprise AI Solutions That Scale
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Looking for the best <strong>AI Integration and development services near me</strong>? Metic.ai delivers enterprise-grade AI solutions with 
                <span className="text-primary-orange font-semibold"> 99% uptime</span> and 
                <span className="text-primary-orange font-semibold"> 200+ successful integrations</span>. 
                Transform your business with seamless AI deployment and intelligent automation.
              </p>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-primary-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-center mb-2">
                    <Trophy className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-gray-300">AI Integrations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-primary-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-primary-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-center mb-2">
                    <Globe className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="text-2xl font-bold text-white">40+</div>
                  <div className="text-sm text-gray-300">Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-primary-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-center mb-2">
                    <Rocket className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-300">AI Support</div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-primary-orange/90 hover:to-secondary-orange/90 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  Get Free AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105">
                  <Play className="mr-2 h-5 w-5" />
                  View AI Solutions
                </Button>
              </div>

              {/* Client Testimonial Snippet */}
              <div className="mt-12 max-w-2xl mx-auto">
                <blockquote className="text-lg text-gray-300 italic border-l-4 border-primary-orange pl-6 bg-white/5 backdrop-blur-sm rounded-r-lg py-4 pr-6">
                  "Metic.ai's AI integration transformed our operations with 60% efficiency gains and seamless deployment across all our systems."
                </blockquote>
                <div className="flex items-center justify-center mt-4 text-sm text-gray-400">
                  <Building className="w-4 h-4 mr-2" />
                  Global Manufacturing Leader
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Key Considerations Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Key Considerations for <span className="text-primary-orange">AI Integration</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Essential factors to ensure successful AI implementation in your organization
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Data Infrastructure */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Infrastructure and Accessibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  Data serves as the foundation for AI applications. Businesses need to ensure a robust 
                  data infrastructure that supports efficient data storage, retrieval, and processing. 
                  Additionally, data accessibility plays a vital role in AI integration, as AI models 
                  require access to relevant and representative data for training and inference.
                </p>
              </div>
              
              {/* System Compatibility */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">System Compatibility and Scalability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrating AI into existing systems requires compatibility with the existing technology 
                  stack. Organizations must assess the compatibility of AI solutions with their infrastructure, 
                  applications, and software frameworks. Scalability is another crucial consideration to 
                  accommodate the increasing demands of AI applications as data volumes and user interactions grow.
                </p>
              </div>
              
              {/* Ethical Frameworks */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Ethical and Legal Frameworks</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI integration should align with ethical guidelines and legal frameworks. Organizations 
                  must ensure that AI solutions comply with regulations pertaining to data privacy, security, 
                  and fairness. Ethical considerations, such as transparency and accountability of AI algorithms, 
                  should also be addressed during the integration process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Deployment Models Section */}
      <section id="deployment-models" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                AI Deployment Models
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the deployment model that best fits your business requirements and infrastructure
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cloud-based Deployment */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Cloud className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cloud-based Deployment</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cloud-based deployment involves hosting AI solutions on cloud platforms. It offers 
                  scalability, flexibility, and accessibility, allowing businesses to leverage AI 
                  capabilities without investing in extensive infrastructure. Cloud providers offer 
                  AI services, platforms, and infrastructure, reducing the complexity of deployment.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Scalable and flexible</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Reduced infrastructure costs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Global accessibility</span>
                  </div>
                </div>
              </div>
              
              {/* On-Premises Deployment */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Server className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">On-Premises Deployment</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  On-premises deployment involves hosting AI solutions within the organization's 
                  infrastructure. It provides more control over data, security, and customization. 
                  On-premises deployment is suitable for businesses with specific compliance 
                  requirements or those handling sensitive data.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Complete data control</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Enhanced security</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Compliance ready</span>
                  </div>
                </div>
              </div>
              
              {/* Hybrid Deployment */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Layers className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Hybrid Deployment</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Hybrid deployment combines cloud-based and on-premises deployment models. It offers 
                  flexibility in leveraging the benefits of both approaches. Hybrid deployment allows 
                  organizations to process sensitive data on-premises while utilizing the scalability 
                  and resources of the cloud for other AI applications.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Best of both worlds</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Optimized costs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm">Flexible architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Strategies for Successful <span className="text-primary-orange">AI Integration</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proven methodologies to ensure seamless AI implementation and maximum ROI
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Collaborative Approach and Stakeholder Engagement</h3>
                    <p className="text-gray-600 leading-relaxed">
                      AI integration requires collaboration between business stakeholders, IT teams, and AI experts. 
                      Involving stakeholders from different departments ensures alignment with business objectives 
                      and identification of specific use cases. Regular communication, feedback loops, and involvement 
                      of end-users in the process contribute to successful integration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Database className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Data Preparation and Preprocessing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Data preparation is a critical step in AI integration. It involves data cleaning, normalization, 
                      and transformation to ensure data quality and compatibility with AI models. Preprocessing techniques, 
                      such as feature engineering and dimensionality reduction, enhance the performance and efficiency 
                      of AI solutions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Brain className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Model Selection and Training</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Selecting the appropriate AI model based on the business problem is crucial for successful integration. 
                      Organizations should assess different models, such as supervised learning, unsupervised learning, 
                      or reinforcement learning, based on the specific requirements. Training the selected model with 
                      relevant and representative data optimizes its performance and accuracy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <BarChart3 className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Performance Evaluation and Optimization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Continuous evaluation of AI models is necessary to monitor their performance and identify areas 
                      for improvement. Metrics such as accuracy, precision, recall, and F1 score help measure the 
                      effectiveness of AI solutions. Regular optimization, retraining, and fine-tuning of models 
                      contribute to enhanced performance and better alignment with business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Challenges in AI Integration and Deployment
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Understanding and addressing common challenges for successful AI implementation
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <Database className="w-8 h-8 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Data Quality and Availability</h3>
                    <p className="text-gray-600 leading-relaxed">
                      AI models heavily rely on high-quality, relevant, and representative data. Ensuring data quality 
                      and availability can be challenging, especially when dealing with disparate data sources, incomplete 
                      data, or biased datasets. Robust data governance practices, data validation techniques, and data 
                      augmentation strategies help mitigate these challenges.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <Lock className="w-8 h-8 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Security and Privacy Concerns</h3>
                    <p className="text-gray-600 leading-relaxed">
                      AI integration and deployment involve handling sensitive data, which raises security and privacy 
                      concerns. Protecting data from unauthorized access, implementing encryption techniques, and ensuring 
                      compliance with data protection regulations are critical aspects of AI deployment. Organizations 
                      must establish robust security measures and ethical practices to build trust and maintain data integrity.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <Users className="w-8 h-8 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Skilled AI Talent</h3>
                    <p className="text-gray-600 leading-relaxed">
                      The demand for skilled AI professionals surpasses the available talent pool. Organizations may 
                      face challenges in recruiting, retaining, and training AI experts. Collaborations with educational 
                      institutions, upskilling existing employees, and leveraging AI consulting services can help bridge 
                      the skills gap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Experts Are Essential Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why AI Integration and Deployment <span className="text-primary-orange">Experts Are Essential</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The Pinnacle of Technological Advancement requires expert guidance for successful implementation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Target className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Tailoring Solutions for Unique Needs</h3>
                <p className="text-gray-600">
                  Every business is unique, and AI solutions should reflect that. Experts in AI integration and 
                  deployment possess the knowledge and expertise to tailor AI solutions to meet specific business 
                  requirements, ensuring perfect alignment with organizational goals.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Ensuring Ethical and Responsible AI</h3>
                <p className="text-gray-600">
                  AI Integration and Deployment Experts play a pivotal role in implementing and enforcing ethical 
                  AI practices within organizations. They navigate complex ethical considerations, ensuring that 
                  AI systems are developed and deployed responsibly.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Settings className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Overcoming Implementation Challenges</h3>
                <p className="text-gray-600">
                  Integrating AI into existing infrastructures can pose significant challenges. Experts in AI deployment 
                  are equipped to handle these challenges, from data privacy concerns to system compatibility issues, 
                  ensuring a smooth integration process.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Maximizing ROI and Efficiency</h3>
                <p className="text-gray-600">
                  The successful integration and deployment of AI directly impact an organization's Return on Investment 
                  and operational efficiency. AI experts optimize the performance of AI systems, ensuring tangible results 
                  and maximum benefits from AI investments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Lightbulb className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Staying Ahead of the Curve</h3>
                <p className="text-gray-600">
                  The field of AI is dynamic, with continuous advancements and evolving best practices. AI Integration 
                  and Deployment Experts stay abreast of the latest trends, ensuring that organizations remain at the 
                  forefront of innovation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">The Pinnacle of Technological Advancement</h3>
                <p className="text-gray-600">
                  AI, with its ability to analyze vast datasets, learn from patterns, and make intelligent decisions, 
                  stands as the pinnacle of technological advancement. AI experts bridge the gap between cutting-edge 
                  AI technologies and their seamless assimilation into diverse business ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Benefits of AI Model Deployment and Integration
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transform your business with our comprehensive Machine Learning Company expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Enhanced Decision-Making</h3>
                <p className="text-gray-600 text-sm">
                  AI models bring a data-driven approach to decision-making processes, analyzing vast datasets 
                  and providing actionable insights for informed strategic decisions.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Operational Efficiency and Automation</h3>
                <p className="text-gray-600 text-sm">
                  AI integration automates repetitive tasks, reduces manual efforts, and increases operational 
                  efficiency across various business processes and workflows.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Cost Savings</h3>
                <p className="text-gray-600 text-sm">
                  Automation and improved efficiency directly translate into cost savings by cutting down on 
                  labor costs and optimizing resource allocation.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Customization and Personalization</h3>
                <p className="text-gray-600 text-sm">
                  AI models enable businesses to customize products, services, and user experiences based on 
                  individual preferences and behaviors, enhancing customer satisfaction.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Improved Customer Experiences</h3>
                <p className="text-gray-600 text-sm">
                  AI-powered applications enhance customer experiences across various touchpoints, from chatbots 
                  providing instant support to personalized recommendations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Predictive Analytics for Better Planning</h3>
                <p className="text-gray-600 text-sm">
                  AI models excel in predictive analytics, forecasting future trends and outcomes based on 
                  historical data, enabling proactive planning and strategy development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AI Integration Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-orange/5">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-full px-6 py-2 mb-6">
                <Brain className="w-5 h-5 text-primary-orange mr-2" />
                <span className="text-primary-orange font-semibold">Why AI Integration</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Why <span className="text-primary-orange">AI Integration</span>
                <br />
                <span className="text-gray-700">is Business Critical</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                AI integration is no longer a competitive advantage—it's a business necessity. Organizations that successfully 
                integrate artificial intelligence into their operations see dramatic improvements in efficiency, accuracy, 
                and innovation. From automating complex workflows to providing real-time insights, AI integration transforms 
                how businesses operate and compete in the modern marketplace.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Left Column - Benefits List */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Workflow className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Seamless Workflow Automation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Integrate AI seamlessly into existing workflows to automate complex processes, reduce manual intervention 
                      by up to 80%, and ensure consistent execution across all business operations. Our integration approach 
                      preserves your current systems while enhancing them with intelligent capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Real-Time Intelligence</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Deploy AI systems that provide instant insights and decision support across your organization. Our 
                      real-time integration enables immediate response to changing conditions, predictive alerts, and 
                      automated decision-making that keeps your business ahead of the curve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise-Grade Security</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Implement AI solutions with bank-level security and compliance standards. Our integration methodology 
                      includes end-to-end encryption, access controls, audit trails, and compliance with GDPR, HIPAA, 
                      and industry-specific regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Scalable Infrastructure</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Build AI integrations that grow with your business. Our cloud-native approach ensures your AI systems 
                      can handle increasing data volumes, user loads, and complexity while maintaining optimal performance 
                      and cost-effectiveness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-orange/5 to-secondary-orange/10 rounded-3xl p-8 border border-primary-orange/20">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Integration Impact</h3>
                    <p className="text-gray-600">Real results from our enterprise AI deployments</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-primary-orange mb-2">80%</div>
                      <div className="text-sm text-gray-600">Process Automation</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                      <div className="text-sm text-gray-600">Efficiency Gain</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                      <div className="text-sm text-gray-600">System Uptime</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-purple-600 mb-2">35%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-primary-orange">
                    <blockquote className="text-gray-600 italic mb-4">
                      "The key to successful AI integration isn't just the technology—it's understanding how AI can amplify 
                      human capabilities while seamlessly fitting into existing business processes."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center mr-3">
                        <Cpu className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Michael Rodriguez</div>
                        <div className="text-sm text-gray-500">Chief Integration Officer, Metic.ai</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration Strategies & Approaches */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-6 py-2 mb-6">
                <Layers className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-600 font-semibold">Integration Strategies</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-700">Comprehensive</span>
                <br />
                <span className="text-primary-orange">AI Integration Approaches</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our AI integration strategies are designed to meet diverse business needs, from rapid prototyping to 
                enterprise-scale deployments. We offer flexible approaches that minimize disruption while maximizing 
                the transformative potential of artificial intelligence across your organization.
              </p>
            </div>

            {/* Integration Approach Cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
              {/* Cloud-First Integration */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Cloud-First Integration</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Leverage cloud-native AI services for rapid deployment and infinite scalability. Our cloud-first approach 
                  enables quick time-to-market, automatic scaling, and seamless integration with existing cloud infrastructure.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3" />
                    <span>AWS, Azure, GCP Integration</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3" />
                    <span>Auto-scaling Capabilities</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3" />
                    <span>Global Edge Deployment</span>
                  </div>
                </div>
              </div>

              {/* Hybrid Deployment */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Hybrid Deployment</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Combine on-premises control with cloud flexibility. Perfect for organizations with regulatory requirements 
                  or legacy systems that need gradual AI integration while maintaining data sovereignty and security.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3" />
                    <span>Data Sovereignty Control</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3" />
                    <span>Legacy System Integration</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3" />
                    <span>Gradual Migration Path</span>
                  </div>
                </div>
              </div>

              {/* Edge Computing */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Edge Computing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Deploy AI at the edge for real-time processing and minimal latency. Ideal for IoT devices, manufacturing 
                  equipment, and scenarios requiring immediate AI responses without cloud dependency.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span>Ultra-low Latency</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span>Offline Capability</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span>IoT Device Integration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Process */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our 5-Phase Integration Process</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A proven methodology that ensures successful AI integration with minimal business disruption
                </p>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    1
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Assessment</h4>
                  <p className="text-sm text-gray-600">Analyze current systems and identify integration opportunities</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    2
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Design</h4>
                  <p className="text-sm text-gray-600">Create integration architecture and deployment strategy</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Development</h4>
                  <p className="text-sm text-gray-600">Build and configure AI models for your environment</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    4
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Deployment</h4>
                  <p className="text-sm text-gray-600">Seamlessly integrate AI into production systems</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    5
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Optimization</h4>
                  <p className="text-sm text-gray-600">Monitor, tune, and continuously improve performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack & Platforms */}
      <section className="py-24 bg-gradient-to-br from-primary-orange/5 via-white to-secondary-orange/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-full px-6 py-2 mb-6">
                <Server className="w-5 h-5 text-primary-orange mr-2" />
                <span className="text-primary-orange font-semibold">Technology Platform</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary-orange">Enterprise-Grade</span>
                <br />
                <span className="text-gray-700">AI Integration Platform</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive technology stack supports every aspect of AI integration, from data preparation and model 
                development to deployment automation and performance monitoring. We leverage industry-leading platforms 
                and tools to ensure robust, scalable, and secure AI implementations.
              </p>
            </div>

            {/* Technology Categories */}
            <div className="space-y-16">
              {/* Cloud Platforms */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <Cloud className="w-8 h-8 text-primary-orange mr-3" />
                  Cloud Integration Platforms
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">AWS</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Amazon Web Services</h4>
                    <p className="text-sm text-gray-600 mb-3">Complete AI/ML suite with SageMaker, Bedrock, and comprehensive integration tools.</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">SageMaker</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Lambda</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Bedrock</span>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">Azure</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Microsoft Azure</h4>
                    <p className="text-sm text-gray-600 mb-3">Enterprise-focused AI platform with seamless Office 365 and Teams integration.</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Cognitive Services</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">ML Studio</span>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">GCP</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Google Cloud Platform</h4>
                    <p className="text-sm text-gray-600 mb-3">Advanced AI capabilities with Vertex AI and industry-leading machine learning tools.</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Vertex AI</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">AutoML</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integration Tools */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <Settings className="w-8 h-8 text-blue-600 mr-3" />
                  Integration & Orchestration Tools
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Workflow className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">Apache Airflow</h4>
                    <p className="text-xs text-gray-600">Workflow Orchestration</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <GitBranch className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">MLflow</h4>
                    <p className="text-xs text-gray-600">ML Lifecycle</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">Kubernetes</h4>
                    <p className="text-xs text-gray-600">Container Orchestration</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">Apache Kafka</h4>
                    <p className="text-xs text-gray-600">Real-time Streaming</p>
                  </div>
                </div>
              </div>

              {/* Monitoring & Security */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  Monitoring & Security Framework
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-8 border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Performance Monitoring</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Real-time model performance tracking</span>
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Automated drift detection and alerts</span>
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Resource utilization optimization</span>
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Custom dashboard and reporting</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-8 border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Security & Compliance</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>End-to-end encryption in transit and at rest</span>
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Role-based access control (RBAC)</span>
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>GDPR, HIPAA, SOX compliance</span>
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Audit trails and compliance reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full px-6 py-2 mb-6">
                <Building className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-purple-600 font-semibold">Industry Applications</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-purple-600">AI Integration</span>
                <br />
                <span className="text-gray-700">Across Industries</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our AI integration expertise spans across industries, delivering tailored solutions that address specific 
                sector challenges while leveraging universal AI capabilities. From healthcare to manufacturing, we understand 
                the unique requirements and regulatory landscapes that shape successful AI implementation.
              </p>
            </div>

            {/* Industry Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Financial Services */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Financial Services</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Transform financial operations with AI-powered risk assessment, fraud detection, and automated trading systems. 
                      Our integration ensures compliance with financial regulations while delivering real-time insights for 
                      investment decisions and customer service automation.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span>Real-time Fraud Detection</span>
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
                        <span>Compliance Automation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Healthcare & Life Sciences */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Healthcare & Life Sciences</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Revolutionize patient care through AI-integrated diagnostic systems, treatment optimization, and drug 
                      discovery platforms. Our HIPAA-compliant integrations enhance clinical workflows while maintaining 
                      the highest standards of patient data security.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-3" />
                        <span>Medical Imaging Analysis</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-3" />
                        <span>Drug Discovery Acceleration</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-3" />
                        <span>Clinical Decision Support</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-3" />
                        <span>Patient Monitoring Systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manufacturing & Supply Chain */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Manufacturing & Supply Chain</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Optimize production processes with AI-driven predictive maintenance, quality control, and supply chain 
                      optimization. Our integration connects IoT sensors, manufacturing systems, and business intelligence 
                      platforms for comprehensive operational visibility.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-3" />
                        <span>Predictive Maintenance</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-3" />
                        <span>Quality Control Automation</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-3" />
                        <span>Supply Chain Optimization</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-3" />
                        <span>Production Planning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Retail & E-commerce */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Retail & E-commerce</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Enhance customer experiences with AI-powered recommendation engines, dynamic pricing, and inventory 
                      optimization. Our integrations connect POS systems, e-commerce platforms, and customer data to deliver 
                      personalized shopping experiences at scale.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-3" />
                        <span>Personalized Recommendations</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-3" />
                        <span>Dynamic Pricing Optimization</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-3" />
                        <span>Inventory Management</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-3" />
                        <span>Customer Behavior Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Integration Success Metrics</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Real results from our enterprise AI integration projects across industries
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-orange mb-2">200+</div>
                  <div className="text-gray-600">Successful Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">99.5%</div>
                  <div className="text-gray-600">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                  <div className="text-gray-600">Avg. Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">30 days</div>
                  <div className="text-gray-600">Avg. Integration Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Common questions about AI integration and deployment services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">What is the typical timeline for AI integration projects?</h3>
                <p className="text-gray-600">
                  AI integration timelines vary based on project complexity, data availability, and infrastructure readiness. 
                  Simple integrations can take 2-4 weeks, while comprehensive enterprise solutions may require 3-6 months. 
                  We provide detailed project timelines during our initial consultation phase.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">How do you ensure data security during AI deployment?</h3>
                <p className="text-gray-600">
                  We implement industry-leading security measures including end-to-end encryption, secure data pipelines, 
                  access controls, and compliance with regulations like GDPR and CCPA. All data handling follows strict 
                  security protocols and audit trails.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">What deployment model is best for my business?</h3>
                <p className="text-gray-600">
                  The choice between cloud-based, on-premises, or hybrid deployment depends on your specific requirements 
                  including data sensitivity, compliance needs, budget, and scalability requirements. We conduct thorough 
                  assessments to recommend the optimal deployment strategy.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Do you provide ongoing support after deployment?</h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive post-deployment support including model monitoring, performance optimization, 
                  regular updates, troubleshooting, and scaling assistance. Our support packages are tailored to your 
                  specific needs and service level requirements.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">How do you measure the success of AI integration?</h3>
                <p className="text-gray-600">
                  We establish clear KPIs and success metrics before deployment, including accuracy rates, performance 
                  improvements, cost savings, user adoption rates, and ROI measurements. Regular reporting and analytics 
                  dashboards provide ongoing visibility into AI system performance.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Can AI solutions integrate with existing business systems?</h3>
                <p className="text-gray-600">
                  Absolutely. Our AI solutions are designed to seamlessly integrate with existing enterprise systems, 
                  databases, APIs, and workflows. We conduct compatibility assessments and develop custom integration 
                  solutions to ensure smooth operation with your current technology stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section id="consultation" className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Get Free Consultation
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with AI? Our experts are here to help you navigate 
              the complexities of AI integration and deployment. Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +91 7892518414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">Free</div>
                <p className="text-orange-100">Initial Consultation</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">24/7</div>
                <p className="text-orange-100">Expert Support</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">100%</div>
                <p className="text-orange-100">Custom Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
