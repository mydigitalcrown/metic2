import Link from "next/link";
import { Button } from "../components/ui/Button";
import { type Metadata } from 'next';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Eye,
  Lightbulb,
  Target,
  Users,
  Database,
  CheckCircle,
  Zap,
  Shield,
  Brain,
  LineChart,
  Activity,
  Settings,
  Search,
  Filter,
  Globe,
  Smartphone,
  Monitor,
  MapPin,
  Star,
  Trophy,
  Rocket,
  Network,
  Award,
  Sparkles,
  ChevronRight,
  Home,
  Briefcase,
  Play,
  Cloud,
  Cpu,
  Server,
  Building,
  Code,
  Lock,
  FileCheck,
  Clock,
  ChevronDown,
  Headphones,
  RefreshCw,
  Layers,
  Workflow,
  ArrowRight,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Insight & Analytics Near Me | #1 Local Analytics Experts - Metic.ai",
  description: "Looking for data insight and analytics near me? Metic.ai delivers enterprise-grade business intelligence with 99% accuracy & 3000+ data insights delivered. Local analytics experts for visualization, predictive analytics & real-time insights.",
  keywords: [
    "Data Insight And Analytics Near Me",
    "Analytics Near Me", 
    "Data Insight Services Near Me",
    "Analytics Company Near Me",
    "Local Analytics Services",
    "Data Insight Firm Near Me",
    "Business Intelligence Near Me",
    "Data Visualization Near Me", 
    "Predictive Analytics Near Me",
    "Data Science Near Me",
    "Advanced Analytics Near Me",
    "Analytics Consulting Near Me",
    "Data Insights Company Near Me",
    "Business Analytics Near Me",
    "Enterprise Analytics Near Me",
    "Real-time Analytics Services",
    "Data Strategy Near Me",
    "Big Data Analytics Near Me",
    "Data Mining Near Me",
    "Statistical Analysis Near Me",
    "Data Reporting Near Me",
    "Dashboard Development Near Me",
    "BI Implementation Near Me",
    "Data Warehouse Near Me",
    "ETL Services Near Me",
    "Local Data Experts",
    "Analytics Solutions Near Me",
    "Data Intelligence Near Me",
    "Business Intelligence Solutions",
    "Data Analytics Specialists"
  ],
  openGraph: {
    title: "Data Insight & Analytics Near Me | #1 Local Analytics Experts - Metic.ai",
    description: "Looking for the best data insight and analytics near me? Metic.ai is the premier local analytics company with 3000+ data insights delivered. Expert data analysis, business intelligence & predictive analytics.",
    url: "https://metic.ai/data-insights",
    siteName: "Metic.ai - Data Insight & Analytics Near Me",
    images: [
      {
        url: "https://metic.ai/images/data-insight-analytics-near-me.jpg",
        width: 1200,
        height: 630,
        alt: "Data Insight & Analytics Near Me - Metic.ai"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Insight & Analytics Near Me | Metic.ai",
    description: "Premier local analytics company with 3000+ insights delivered. Expert data analysis, BI & predictive analytics.",
    images: ["https://metic.ai/images/data-insight-analytics-near-me.jpg"]
  },
  alternates: {
    canonical: "https://metic.ai/data-insights/"
  }
};

export default function DataInsightsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://metic.ai/#organization",
        "name": "Metic.ai",
        "url": "https://metic.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://metic.ai/logo.png",
          "width": 400,
          "height": 100
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7892518414",
          "contactType": "customer service",
          "areaServed": "Global",
          "availableLanguage": "en"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://linkedin.com/company/metic-ai",
          "https://twitter.com/metic_ai"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://metic.ai/data-insights/#service",
        "name": "Data Insight & Analytics Near Me",
        "provider": {
          "@id": "https://metic.ai/#organization"
        },
        "serviceType": "Data Analytics",
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Data Analytics Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Intelligence Near Me"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Data Visualization Near Me"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Predictive Analytics Near Me"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Real-time Analytics Near Me"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Data Strategy Consulting Near Me"
              }
            }
          ]
        },
        "description": "Comprehensive data insight and analytics near me including business intelligence, predictive analytics, and data visualization with local expertise",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://metic.ai/data-insights/#webpage",
        "url": "https://metic.ai/data-insights",
        "name": "Data Insight & Analytics Near Me",
        "isPartOf": {
          "@id": "https://metic.ai/#website"
        },
        "about": {
          "@id": "https://metic.ai/data-insights/#service"
        },
        "description": "Expert data insight and analytics near me with 99% accuracy and 3000+ data insights delivered"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes your data insight and analytics near me services different?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our analytics near me approach combines global best practices with local market expertise. We provide on-site consultation, 24/7 local support, and deep understanding of regional business environments. With 3000+ data insights delivered and 99% accuracy, our local team ensures faster response times and personalized service that remote providers cannot match."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can I get data insights from your analytics services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our data insight delivery timeline depends on project complexity. For standard analytics projects, we deliver initial insights within 48-72 hours and comprehensive reports within 1-2 weeks. Our real-time analytics solutions provide instant insights through live dashboards, while custom predictive models typically take 2-4 weeks for full implementation."
            }
          },
          {
            "@type": "Question",
            "name": "What types of data sources can you analyze with your analytics near me services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We integrate and analyze virtually any data source including databases (SQL, NoSQL), cloud platforms (AWS, Azure, GCP), APIs, CSV files, IoT sensors, social media feeds, web analytics, CRM systems, ERP platforms, and real-time streams. Our ETL capabilities handle structured, semi-structured, and unstructured data from multiple formats and sources simultaneously."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure data security and compliance in your analytics near me services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Data security is our top priority. We implement enterprise-grade encryption, GDPR compliance, SOC 2 standards, and industry-specific regulations (HIPAA for healthcare, PCI DSS for finance). Our local data processing ensures data sovereignty, with secure on-premise options available. All team members undergo security training and background checks."
            }
          },
          {
            "@type": "Question",
            "name": "What's the ROI I can expect from your data insight and analytics services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our clients typically see ROI within 3-6 months with benefits including 25-40% improvement in decision-making speed, 15-30% cost reduction through optimization, and 20-50% increase in operational efficiency. Revenue growth of 10-25% through better customer insights and market intelligence is common. We provide detailed ROI projections during initial consultations."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide training and ongoing support for analytics near me solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We provide comprehensive training programs for your team including dashboard usage, report interpretation, and self-service analytics capabilities. Our ongoing support includes 24/7 technical assistance, regular system updates, quarterly business reviews, and continuous optimization. Local training sessions and workshops are available for hands-on learning."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Enhanced Breadcrumb Navigation */}
      <nav className="bg-gradient-to-r from-gray-50 to-gray-100 py-6 border-b border-gray-200">
        <div className="container px-4 md:px-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="flex items-center text-gray-600 hover:text-primary-orange transition-colors duration-200">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              <Link href="/services" className="flex items-center text-gray-600 hover:text-primary-orange transition-colors duration-200">
                <Briefcase className="w-4 h-4 mr-1" />
                Services
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              <span className="text-primary-orange font-semibold">Data Insights & Analytics</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Revolutionary Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
        
        {/* Dynamic Circuit Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 10 10 M 10 0 L 10 20 M 10 10 L 20 10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <circle cx="10" cy="10" r="1" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" className="text-primary-orange"/>
          </svg>
        </div>
        
        {/* Floating Animated Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-secondary-orange rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary-orange rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-white text-sm font-semibold">3000+ Insights</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                    <Trophy className="w-4 h-4 text-primary-orange mr-2" />
                    <span className="text-white text-sm font-semibold">99% Accuracy</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                    <MapPin className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-white text-sm font-semibold">Local Experts</span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="text-white">Expert </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-secondary-orange">Data Insight</span><br />
                  <span className="text-white">& </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-orange to-primary-orange">Analytics</span><br />
                  <span className="text-white text-4xl md:text-5xl lg:text-6xl">Near Me</span>
                </h1>
                
                <div className="w-32 h-2 bg-gradient-to-r from-primary-orange to-secondary-orange mb-8 rounded-full shadow-lg"></div>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-2xl">
                  Looking for the <strong className="text-white">best data insight and analytics near me</strong>? 
                  Metic.ai is the <strong className="text-primary-orange">premier local analytics company</strong> with 
                  <strong className="text-secondary-orange"> 3000+ data insights delivered</strong>. Expert data analysis, 
                  business intelligence & predictive analytics.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-16">
                  <Link href="/contact">
                    <Button size="lg" className="bg-primary-orange hover:bg-secondary-orange text-white text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-primary-orange/25 transform hover:scale-105 transition-all duration-300">
                      <Rocket className="mr-2 w-6 h-6" />
                      Get Data Analytics Solutions
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 rounded-full">
                      <Phone className="mr-2 w-5 h-5" />
                      Call: +91 7892518414
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl font-bold text-primary-orange mb-2">3000+</div>
                    <p className="text-gray-300 text-lg">Data Insights Delivered</p>
                    <div className="mt-4 flex items-center text-sm text-green-400">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>99% Accuracy Rate</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 mt-8">
                    <div className="text-4xl font-bold text-secondary-orange mb-2">1TB+</div>
                    <p className="text-gray-300 text-lg">Data Processed Daily</p>
                    <div className="mt-4 flex items-center text-sm text-blue-400">
                      <Database className="w-4 h-4 mr-1" />
                      <span>Real-time Insights</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
                    <p className="text-gray-300 text-lg">Decision Speed</p>
                    <div className="mt-4 flex items-center text-sm text-yellow-400">
                      <Zap className="w-4 h-4 mr-1" />
                      <span>Faster Decisions</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 mt-8">
                    <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                    <p className="text-gray-300 text-lg">Local Support</p>
                    <div className="mt-4 flex items-center text-sm text-primary-orange">
                      <Globe className="w-4 h-4 mr-1" />
                      <span>Near You</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Technology Tags */}
                <div className="mt-12 flex flex-wrap gap-3">
                  {[
                    "Data Insight Near Me", 
                    "Analytics Near Me", 
                    "Business Intelligence", 
                    "Predictive Analytics", 
                    "Local Data Experts", 
                    "Real-time Insights"
                  ].map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 text-white text-sm rounded-full border border-primary-orange/30 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Data Insight & Analytics Near Me */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-8">
                <span className="px-8 py-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 text-sm font-bold rounded-full border border-indigo-500/20 shadow-xl">
                  🏆 Why Choose Us
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Why Choose Our </span>
                <span className="text-indigo-600">Data Insight</span>
                <span className="text-gray-900"> & </span>
                <span className="text-purple-600">Analytics Near Me</span>
              </h2>
              
              <div className="w-32 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-10 rounded-full shadow-lg"></div>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                <strong className="text-indigo-600">Local expertise meets global standards</strong> in our comprehensive 
                <strong className="text-gray-900"> data insight and analytics near me</strong> services. We combine 
                <strong className="text-purple-600"> cutting-edge technology</strong> with personalized local support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">Local Expertise</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-gray-900">On-site analytics experts near you</strong> who understand your local market, 
                    regulations, and business environment for more relevant data insights.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors">24/7 Support</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-gray-900">Round-the-clock analytics support</strong> with immediate response times 
                    for critical data insights and real-time analytics monitoring.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Data Security</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-gray-900">Enterprise-grade security protocols</strong> ensuring your data insights 
                    remain confidential with GDPR compliance and advanced encryption.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors">Proven Results</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-gray-900">3000+ successful data insights</strong> delivered with 99% accuracy rate 
                    and measurable business impact across diverse industries.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Value Proposition */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10"></div>
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    <span className="text-primary-orange">Data Insight</span> Excellence 
                    <span className="text-secondary-orange"> Near You</span>
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Our <strong className="text-white">analytics near me</strong> approach combines advanced statistical modeling 
                    with local market knowledge to deliver <strong className="text-primary-orange">actionable data insights</strong> 
                    that drive real business growth and competitive advantage.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">99.5%</div>
                      <p className="text-gray-300 text-sm">Data Accuracy</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary-orange mb-2">48hrs</div>
                      <p className="text-gray-300 text-sm">Insight Delivery</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <Database className="w-8 h-8 text-primary-orange mb-4" />
                      <h4 className="text-white font-semibold mb-2">Big Data Processing</h4>
                      <p className="text-gray-300 text-sm">Process terabytes of data for comprehensive insights</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mt-8">
                      <Brain className="w-8 h-8 text-secondary-orange mb-4" />
                      <h4 className="text-white font-semibold mb-2">AI-Powered Analytics</h4>
                      <p className="text-gray-300 text-sm">Machine learning algorithms for predictive insights</p>
                    </div>
                  </div>
                </div>
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
                <span className="text-primary-orange">Data Insight</span>
                <span className="text-gray-900"> & Analytics Solutions</span>
              </h2>
              
              <div className="w-32 h-2 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-10 rounded-full shadow-lg"></div>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                <strong className="text-primary-orange">Comprehensive data insight and analytics solutions</strong> from discovery to actionable intelligence with 
                <strong className="text-gray-900"> enterprise-grade accuracy</strong> and <strong className="text-secondary-orange">local expertise near you</strong>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Business Intelligence - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-primary-orange/30 hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <BarChart3 className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-orange/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-primary-orange transition-colors duration-300">
                    Business Intelligence
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Comprehensive BI solutions</strong> including data warehousing, ETL processes, and enterprise 
                    reporting systems that provide 360-degree view of your business operations.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Data Warehouse Design</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">ETL Pipeline Development</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Executive Dashboards</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white group-hover:shadow-lg">
                        Get BI Solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Data Visualization - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-secondary-orange/30 hover:shadow-2xl hover:shadow-secondary-orange/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <PieChart className="w-10 h-10 text-purple-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-orange/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-secondary-orange transition-colors duration-300">
                    Data Visualization
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Create compelling visual stories</strong> from your data using advanced visualization techniques, 
                    interactive dashboards, and custom charts that communicate insights effectively.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Interactive Dashboards</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">Custom Visualizations</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Real-time Monitoring</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-secondary-orange text-secondary-orange hover:bg-secondary-orange hover:text-white group-hover:shadow-lg">
                        Create Visualizations <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Predictive Analytics - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <TrendingUp className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-green-600 transition-colors duration-300">
                    Predictive Analytics
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Leverage statistical modeling and machine learning</strong> to forecast trends, predict customer 
                    behavior, and anticipate business outcomes for proactive decision making.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Trend Forecasting</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">Demand Prediction</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Risk Assessment</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white group-hover:shadow-lg">
                        Get Predictions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Advanced Analytics - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Brain className="w-10 h-10 text-indigo-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-500/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-indigo-600 transition-colors duration-300">
                    Advanced Analytics
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Sophisticated analytical techniques</strong> including machine learning, statistical modeling, 
                    and data mining to uncover hidden patterns and drive strategic insights.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Machine Learning Models</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">Statistical Modeling</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Data Mining</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white group-hover:shadow-lg">
                        Advanced Analytics <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Real-time Analytics - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Activity className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-red-600 transition-colors duration-300">
                    Real-time Analytics
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Instant data processing and monitoring</strong> systems that provide live insights, 
                    real-time alerts, and immediate business intelligence for rapid decision-making.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Live Data Processing</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">Real-time Alerts</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Stream Analytics</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white group-hover:shadow-lg">
                        Real-time Insights <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Data Strategy - Enhanced 3D Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Target className="w-10 h-10 text-yellow-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500/20 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-yellow-600 transition-colors duration-300">
                    Data Strategy & Consulting
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    <strong className="text-gray-900">Strategic data roadmap development</strong> including governance frameworks, 
                    analytics strategy, and organizational data maturity assessment to maximize ROI.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Data Governance</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '100ms'}} />
                      <span className="font-medium">Analytics Strategy</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform" style={{transitionDelay: '200ms'}} />
                      <span className="font-medium">Maturity Assessment</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white group-hover:shadow-lg">
                        Strategy Consulting <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Data Analytics Process */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-8">
                <span className="px-8 py-4 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-primary-orange text-sm font-bold rounded-full border border-primary-orange/20 shadow-xl">
                  🔄 Our Process
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Our Proven </span>
                <span className="text-primary-orange">Data Analytics</span>
                <span className="text-gray-900"> Process</span>
              </h2>
              
              <div className="w-32 h-2 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-10 rounded-full shadow-lg"></div>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From <strong className="text-primary-orange">data discovery to actionable insights</strong>, our systematic approach 
                ensures <strong className="text-gray-900">maximum ROI from your analytics investment</strong> with measurable business outcomes.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute top-6 right-6 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Data Discovery</h3>
                <p className="text-blue-700 leading-relaxed text-sm mb-6">
                  <strong className="text-blue-900">Comprehensive data audit</strong> to identify all available data sources, 
                  assess data quality, and understand business objectives for targeted analytics strategy.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-blue-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>Data source mapping</span>
                  </div>
                  <div className="flex items-center text-xs text-blue-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>Quality assessment</span>
                  </div>
                  <div className="flex items-center text-xs text-blue-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>Business alignment</span>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute top-6 right-6 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-4">Data Integration</h3>
                <p className="text-green-700 leading-relaxed text-sm mb-6">
                  <strong className="text-green-900">Seamless data consolidation</strong> from multiple sources with ETL processes, 
                  data cleansing, and standardization for unified analytics foundation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-green-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>ETL pipeline setup</span>
                  </div>
                  <div className="flex items-center text-xs text-green-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>Data cleansing</span>
                  </div>
                  <div className="flex items-center text-xs text-green-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>Format standardization</span>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute top-6 right-6 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-4">Advanced Analysis</h3>
                <p className="text-purple-700 leading-relaxed text-sm mb-6">
                  <strong className="text-purple-900">AI-powered analytical modeling</strong> using machine learning algorithms, 
                  statistical analysis, and predictive modeling to extract meaningful insights.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-purple-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>ML algorithms</span>
                  </div>
                  <div className="flex items-center text-xs text-purple-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>Statistical modeling</span>
                  </div>
                  <div className="flex items-center text-xs text-purple-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>Pattern recognition</span>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border-2 border-orange-100 hover:border-orange-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute top-6 right-6 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-900 mb-4">Insight Delivery</h3>
                <p className="text-orange-700 leading-relaxed text-sm mb-6">
                  <strong className="text-orange-900">Interactive dashboards and reports</strong> that translate complex data 
                  into actionable insights with clear recommendations and strategic guidance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-orange-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>Interactive dashboards</span>
                  </div>
                  <div className="flex items-center text-xs text-orange-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>Executive reports</span>
                  </div>
                  <div className="flex items-center text-xs text-orange-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    <span>Strategic recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Analytics Near Me */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-8">
                <span className="px-8 py-4 bg-gradient-to-r from-green-500/10 to-teal-500/10 text-green-600 text-sm font-bold rounded-full border border-green-500/20 shadow-xl">
                  🏢 Industries Served
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Industries We Serve With </span>
                <span className="text-green-600">Analytics Near Me</span>
              </h2>
              
              <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-10 rounded-full shadow-lg"></div>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our <strong className="text-green-600">data insight and analytics near me</strong> services span across diverse industries, 
                delivering <strong className="text-gray-900">tailored solutions</strong> that address specific sector challenges and opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong className="text-gray-900">Patient analytics, clinical insights,</strong> and operational optimization 
                  with HIPAA-compliant data processing and predictive health outcomes modeling.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Patient Analytics</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Clinical Insights</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Outcome Prediction</span>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Finance</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong className="text-gray-900">Risk analytics, fraud detection,</strong> and investment insights 
                  with real-time market analysis and regulatory compliance reporting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Risk Analysis</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Fraud Detection</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Market Analytics</span>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Retail & E-commerce</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong className="text-gray-900">Customer behavior analytics, inventory optimization,</strong> 
                  and sales forecasting with personalized recommendation engines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Customer Analytics</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Inventory Optimization</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Sales Forecasting</span>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Settings className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Manufacturing</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong className="text-gray-900">Operational efficiency, predictive maintenance,</strong> 
                  and quality control analytics with IoT sensor data integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs">Operational Analytics</span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs">Predictive Maintenance</span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs">Quality Control</span>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <Network className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Technology</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong className="text-gray-900">Performance analytics, user behavior insights,</strong> 
                  and product optimization with advanced A/B testing and feature analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">Performance Analytics</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">User Behavior</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">A/B Testing</span>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Energy & Utilities</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong className="text-gray-900">Consumption analytics, grid optimization,</strong> 
                  and sustainability insights with smart meter data analysis and demand forecasting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs">Consumption Analytics</span>
                  <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs">Grid Optimization</span>
                  <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs">Demand Forecasting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for Data Insight & Analytics Near Me */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-8">
                <span className="px-8 py-4 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-primary-orange text-sm font-bold rounded-full border border-primary-orange/20 shadow-xl">
                  ❓ Frequently Asked Questions
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Frequently Asked Questions About </span>
                <span className="text-primary-orange">Data Insight & Analytics Near Me</span>
              </h2>
              
              <div className="w-32 h-2 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-10 rounded-full shadow-lg"></div>
            </div>

            <div className="space-y-6">
              <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-primary-orange/30">
                <div className="flex items-start justify-between cursor-pointer">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-orange transition-colors">
                      What makes your data insight and analytics near me services different?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our <strong className="text-gray-900">analytics near me</strong> approach combines global best practices with local market expertise. 
                      We provide <strong className="text-primary-orange">on-site consultation, 24/7 local support,</strong> and deep understanding of 
                      regional business environments. With <strong className="text-gray-900">3000+ data insights delivered</strong> and 99% accuracy, 
                      our local team ensures faster response times and personalized service that remote providers cannot match.
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-primary-orange ml-4 group-hover:rotate-180 transition-transform duration-300" />
                </div>
              </div>

              <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-secondary-orange/30">
                <div className="flex items-start justify-between cursor-pointer">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary-orange transition-colors">
                      How quickly can I get data insights from your analytics services?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our <strong className="text-gray-900">data insight delivery timeline</strong> depends on project complexity. For standard analytics projects, 
                      we deliver <strong className="text-secondary-orange">initial insights within 48-72 hours</strong> and comprehensive reports within 1-2 weeks. 
                      Our <strong className="text-gray-900">real-time analytics solutions</strong> provide instant insights through live dashboards, 
                      while custom predictive models typically take 2-4 weeks for full implementation.
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-secondary-orange ml-4 group-hover:rotate-180 transition-transform duration-300" />
                </div>
              </div>

              <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-blue-400/30">
                <div className="flex items-start justify-between cursor-pointer">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      What types of data sources can you analyze with your analytics near me services?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We integrate and analyze <strong className="text-gray-900">virtually any data source</strong> including databases (SQL, NoSQL), 
                      cloud platforms (AWS, Azure, GCP), <strong className="text-blue-600">APIs, CSV files, IoT sensors,</strong> social media feeds, 
                      web analytics, CRM systems, ERP platforms, and real-time streams. Our <strong className="text-gray-900">ETL capabilities</strong> 
                      handle structured, semi-structured, and unstructured data from multiple formats and sources simultaneously.
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-blue-600 ml-4 group-hover:rotate-180 transition-transform duration-300" />
                </div>
              </div>

              <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-green-400/30">
                <div className="flex items-start justify-between cursor-pointer">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      How do you ensure data security and compliance in your analytics near me services?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Data security is our top priority.</strong> We implement enterprise-grade encryption, 
                      <strong className="text-green-600">GDPR compliance, SOC 2 standards,</strong> and industry-specific regulations (HIPAA for healthcare, 
                      PCI DSS for finance). Our <strong className="text-gray-900">local data processing</strong> ensures data sovereignty, 
                      with secure on-premise options available. All team members undergo security training and background checks.
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-green-600 ml-4 group-hover:rotate-180 transition-transform duration-300" />
                </div>
              </div>

              <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-purple-400/30">
                <div className="flex items-start justify-between cursor-pointer">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      What's the ROI I can expect from your data insight and analytics services?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our clients typically see <strong className="text-purple-600">ROI within 3-6 months</strong> with benefits including 
                      <strong className="text-gray-900">25-40% improvement in decision-making speed, 15-30% cost reduction</strong> through optimization, 
                      and 20-50% increase in operational efficiency. <strong className="text-purple-600">Revenue growth of 10-25%</strong> through better 
                      customer insights and market intelligence is common. We provide detailed ROI projections during initial consultations.
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-purple-600 ml-4 group-hover:rotate-180 transition-transform duration-300" />
                </div>
              </div>

              <div className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-orange-400/30">
                <div className="flex items-start justify-between cursor-pointer">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      Do you provide training and ongoing support for analytics near me solutions?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Yes! We provide <strong className="text-orange-600">comprehensive training programs</strong> for your team including dashboard usage, 
                      report interpretation, and <strong className="text-gray-900">self-service analytics capabilities.</strong> Our ongoing support includes 
                      24/7 technical assistance, regular system updates, quarterly business reviews, and continuous optimization. 
                      <strong className="text-orange-600">Local training sessions</strong> and workshops are available for hands-on learning.
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-orange-600 ml-4 group-hover:rotate-180 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="consultation" className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Transform Your Data Into <span className="text-yellow-300">Actionable Insights</span>?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Get a free consultation and discover how our data analytics services can revolutionize your business decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Data Assessment
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
                <div className="text-2xl font-bold mb-2">1TB+</div>
                <p className="text-orange-100">Data Analyzed Daily</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">500+</div>
                <p className="text-orange-100">Dashboards Created</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">90%</div>
                <p className="text-orange-100">Decision Speed Improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}