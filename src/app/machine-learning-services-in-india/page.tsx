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
  Rocket,
  Globe,
  Cpu,
  Bot,
  LineChart,
  Network,
  Layers,
  Activity,
  Gauge,
  BookOpen
} from "lucide-react";

export const metadata = {
  title: "Machine Learning Services In India | #1 ML Company In India - Metic.ai",
  description: "Leading Machine Learning Services In India with 2100+ successful ML implementations. Expert machine learning solutions, predictive analytics & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Machine Learning Services In India",
    "ML Services In India",
    "Machine Learning Company In India",
    "ML Company In India",
    "Machine Learning Solutions India",
    "Best ML Services India",
    "Top Machine Learning Company India",
    "Machine Learning Development India",
    "ML Consulting India",
    "Predictive Analytics India",
    "Deep Learning Services India",
    "Neural Network Development India",
    "ML Model Development India",
    "Machine Learning Engineers India",
    "AI ML Services India",
    "Machine Learning Mumbai",
    "Machine Learning Bangalore",
    "Machine Learning Delhi",
    "Machine Learning Hyderabad",
    "Machine Learning Chennai"
  ],
  authors: [{ name: "Metic.ai - ML Services In India" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Machine Learning Services In India | #1 ML Company In India - Metic.ai",
    description: "Leading Machine Learning Services In India with 2100+ successful ML implementations. Expert machine learning solutions, predictive analytics & AI development for Indian businesses.",
    url: "https://metic.ai/machine-learning-services-in-india/",
    type: "website",
    locale: "en_US",
    siteName: "Metic.ai - Machine Learning Services In India",
    images: [
      {
        url: "https://metic.ai/og-ml-services-india.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning Services In India - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Services In India | ML Company In India",
    description: "Leading ML Services In India delivering enterprise machine learning solutions. Expert ML development, predictive analytics & automation with proven results.",
    images: ["https://metic.ai/og-ml-services-india.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/machine-learning-services-in-india/",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Machine Learning Services",
  classification: "Technology Services"
};

export default function MLServicesIndiaPage() {
  const services = [
    {
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes with advanced machine learning models. Help Indian businesses make data-driven decisions with 95%+ accuracy.",
      icon: LineChart,
      href: "/machine-learning",
      color: "blue" as const
    },
    {
      title: "Deep Learning Solutions",
      description: "Neural networks and deep learning architectures for complex pattern recognition, image processing, and NLP tasks.",
      icon: Network,
      href: "/custom-ai-development",
      color: "purple" as const
    },
    {
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual AI for manufacturing, retail, healthcare, and security applications.",
      icon: Cpu,
      href: "/ai-integration-and-deployment",
      color: "green" as const
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, chatbots, and language understanding for multilingual Indian market.",
      icon: Bot,
      href: "/generative-ai-services",
      color: "orange" as const
    },
    {
      title: "Recommendation Systems",
      description: "Personalized recommendation engines for e-commerce, content platforms, and customer engagement.",
      icon: Sparkles,
      href: "/custom-ai-development",
      color: "indigo" as const
    },
    {
      title: "Time Series Forecasting",
      description: "Predict future values based on historical data for inventory, demand, financial forecasting, and more.",
      icon: TrendingUp,
      href: "/data-insights",
      color: "red" as const
    }
  ];

  const industries = [
    "E-commerce",
    "Banking & Finance",
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Telecommunications",
    "Agriculture",
    "Transportation",
    "Education",
    "Real Estate"
  ];

  return (
    <>
      {/* Structured Data for SEO - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai - Machine Learning Services In India",
            "alternateName": ["ML Services In India", "Machine Learning Company In India", "Best ML Services India"],
            "url": "https://metic.ai/machine-learning-services-in-india/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ml-services-india.jpg",
            "description": "Leading Machine Learning Services In India with 2100+ successful ML implementations. Expert machine learning solutions, predictive analytics & AI development.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "telephone": "+1-789-251-8414",
            "email": "hello@metic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Machine Learning Services In India - Transform Your Business with ML",
            "areaServed": [
              {
                "@type": "Country",
                "name": "India"
              },
              {
                "@type": "City",
                "name": "Mumbai"
              },
              {
                "@type": "City",
                "name": "Delhi"
              },
              {
                "@type": "City",
                "name": "Bangalore"
              },
              {
                "@type": "City",
                "name": "Hyderabad"
              },
              {
                "@type": "City",
                "name": "Chennai"
              },
              {
                "@type": "City",
                "name": "Pune"
              }
            ],
            "serviceType": ["Machine Learning Services", "ML Development", "Predictive Analytics", "Deep Learning"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "ML Services India",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Predictive Analytics",
                    "description": "Advanced predictive analytics and forecasting services for Indian businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Deep Learning Solutions",
                    "description": "Neural networks and deep learning architectures for complex AI applications"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Computer Vision",
                    "description": "Image recognition and visual AI solutions for Indian enterprises"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100",
              "bestRating": "5"
            },
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/MeticAI"
            ]
          })
        }}
      />

      {/* FAQ Schema for VSO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are Machine Learning Services In India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Machine Learning Services In India include predictive analytics, deep learning, computer vision, natural language processing, recommendation systems, and time series forecasting. These services help Indian businesses automate processes, make data-driven decisions, and gain competitive advantages through AI-powered solutions."
                }
              },
              {
                "@type": "Question",
                "name": "Which is the best ML Company In India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Machine Learning Company In India with 2100+ successful ML implementations across Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and Pune. We offer comprehensive ML services with 60% cost savings and 3x faster delivery for Indian businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much do Machine Learning Services In India cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Machine Learning Services In India typically start from $15,000 depending on project complexity, data volume, and requirements. Metic.ai offers competitive pricing with 60% cost savings compared to traditional development, with flexible engagement models and proven ROI."
                }
              },
              {
                "@type": "Question",
                "name": "What industries use Machine Learning Services In India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Machine Learning Services In India are used across e-commerce, banking & finance, healthcare, manufacturing, retail, telecommunications, agriculture, transportation, education, and real estate industries. ML solutions help optimize operations, predict trends, and enhance customer experiences."
                }
              },
              {
                "@type": "Question",
                "name": "How long does ML implementation take in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Machine Learning Services In India implementation typically takes 2-6 months depending on project scope, data preparation, and model complexity. Metic.ai delivers projects 3x faster than industry average with proven methodologies and experienced ML engineers."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai for ML Services In India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choose Metic.ai for Machine Learning Services In India because we offer 2100+ successful implementations, 60% cost savings, 3x faster delivery, expert ML engineers, 24/7 support, and deep understanding of Indian market requirements across all major industries."
                }
              }
            ]
          })
        }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Machine Learning Services In India | Leading ML Company In India",
            "description": "Comprehensive guide to machine learning services in India. Learn why Metic.ai is the premier Machine Learning Company In India with 2100+ successful implementations.",
            "image": "https://metic.ai/ml-services-india.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - ML Services In India"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Metic.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metic.ai/logo.png"
              }
            },
            "datePublished": "2024-01-15T08:00:00+05:30",
            "dateModified": "2025-01-01T10:00:00+05:30",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/machine-learning-services-in-india/"
            },
            "articleSection": "Machine Learning Services",
            "keywords": ["Machine Learning Services In India", "ML Services In India", "Machine Learning Company In India", "ML Company In India"],
            "about": [
              {
                "@type": "Thing",
                "name": "Machine Learning",
                "description": "Machine learning services and solutions in India"
              },
              {
                "@type": "Place",
                "name": "India",
                "description": "World's largest democracy and fastest-growing major economy"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Location Badge */}
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full border border-primary-orange/30 shadow-lg">
                <div className="relative">
                  <MapPin className="w-5 h-5 text-primary-orange" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-orange rounded-full animate-ping"></div>
                </div>
                <span className="text-sm font-semibold text-gray-200">India's #1 Machine Learning Services Provider</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary-orange text-primary-orange" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Headline - VSO Optimized */}
            <div className="relative mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white relative z-10">
                <strong>
                  Machine Learning Services In India
                </strong>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Leading ML Company In India
                </span>
              </h1>
            </div>
            
            {/* VSO-Optimized Description */}
            <div className="relative mb-10">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white">Machine Learning Services In India</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange"> ML Company In India</strong> 
                with 2100+ successful ML implementations across Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, and nationwide. 
                Our <strong className="text-primary-orange"> Machine Learning Solutions</strong> transform businesses with 
                <span className="text-primary-orange font-semibold">60% cost savings</span> and 
                <span className="text-primary-orange font-semibold">3x faster delivery</span>.
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
                  <span className="text-sm text-gray-400">1500+ India Projects</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-dark-orange hover:to-primary-orange text-white border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    Get ML Services Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-2 border-primary-orange text-primary-orange hover:bg-primary-orange/10 backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call ML Experts India
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="group text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300">
                <div className="text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">$3.7T</div>
                <div className="text-sm text-gray-400">India GDP</div>
              </div>
              <div className="group text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300">
                <div className="text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">1500+</div>
                <div className="text-sm text-gray-400">ML Projects</div>
              </div>
              <div className="group text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300">
                <div className="text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
              <div className="group text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300">
                <div className="text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-sm text-gray-400">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our <span className="text-primary-orange">Machine Learning Services In India</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive machine learning solutions designed to help Indian businesses 
                leverage data, automate processes, and gain competitive advantages through AI-powered intelligence.
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
                  <div key={index} className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/30">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colorClasses[service.color]} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <Link href={service.href} className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium group-hover:translate-x-1 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
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
                Industries We Serve with ML Services In India
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized machine learning solutions across India's key industries and business sectors.
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

      {/* Comprehensive ML Content Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Premier </span>
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Machine Learning Services In India
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powering India's digital transformation with cutting-edge machine learning solutions
              </p>
            </div>

            <div className="space-y-16">
              {/* What is Machine Learning Services */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  What Are <span className="text-primary-orange">Machine Learning Services In India</span>?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong className="text-gray-900">Machine Learning Services In India</strong> encompass a comprehensive range of AI-powered 
                  solutions that enable businesses to extract insights from data, automate decision-making processes, and create intelligent 
                  systems that learn and improve over time. As the leading <strong className="text-primary-orange">ML Company In India</strong>, 
                  Metic.ai delivers cutting-edge machine learning solutions tailored to the unique needs of Indian businesses across all sectors.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our <strong>Machine Learning Services In India</strong> include predictive analytics, deep learning, computer vision, natural 
                  language processing, recommendation systems, time series forecasting, anomaly detection, and custom ML model development. We serve 
                  businesses across Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Kolkata, and all major Indian cities with end-to-end ML solutions.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <Brain className="w-12 h-12 text-blue-600 mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Predictive ML</h4>
                    <p className="text-sm text-gray-700">Forecast future outcomes with 95%+ accuracy using advanced algorithms</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                    <Network className="w-12 h-12 text-purple-600 mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Deep Learning</h4>
                    <p className="text-sm text-gray-700">Neural networks for complex pattern recognition and AI tasks</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                    <Bot className="w-12 h-12 text-green-600 mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">NLP Solutions</h4>
                    <p className="text-sm text-gray-700">Process and understand human language for Indian markets</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Our ML Services */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-12 border-2 border-primary-orange/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Why Choose Our <span className="text-primary-orange">ML Services In India</span>?
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Expert ML Engineers</h4>
                        <p className="text-gray-700">Team of 50+ certified machine learning engineers and data scientists with expertise in TensorFlow, PyTorch, scikit-learn, and advanced ML frameworks</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Gauge className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Proven Accuracy</h4>
                        <p className="text-gray-700">Average model accuracy of 95%+ across classification, regression, and forecasting tasks with continuous improvement and monitoring</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Fast Implementation</h4>
                        <p className="text-gray-700">3x faster delivery than industry average with agile methodologies, rapid prototyping, and proven ML development pipelines</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Database className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Data Excellence</h4>
                        <p className="text-gray-700">Comprehensive data engineering, cleaning, preprocessing, and feature engineering to ensure high-quality ML model performance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Secure & Compliant</h4>
                        <p className="text-gray-700">Enterprise-grade security, data privacy compliance, and adherence to Indian data protection regulations and industry standards</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Activity className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Continuous Monitoring</h4>
                        <p className="text-gray-700">24/7 model monitoring, performance tracking, retraining pipelines, and maintenance to ensure optimal ML system performance</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange">60%</div>
                      <div className="text-sm text-gray-600">Cost Savings</div>
                    </div>
                    <div className="w-px h-12 bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange">95%+</div>
                      <div className="text-sm text-gray-600">Model Accuracy</div>
                    </div>
                    <div className="w-px h-12 bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange">3x</div>
                      <div className="text-sm text-gray-600">Faster Delivery</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ML Use Cases for Indian Industries */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  <span className="text-primary-orange">Machine Learning</span> Use Cases for Indian Industries
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <Layers className="w-12 h-12 text-blue-600 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-4">E-commerce & Retail</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Personalized product recommendations increasing sales by 35%</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Demand forecasting for inventory optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Customer churn prediction and retention strategies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Dynamic pricing optimization for maximum revenue</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <Activity className="w-12 h-12 text-green-600 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Banking & Finance</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Fraud detection with 99%+ accuracy in real-time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Credit risk assessment and loan approval automation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Algorithmic trading and investment optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Customer lifetime value prediction</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <Cpu className="w-12 h-12 text-purple-600 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Predictive maintenance reducing downtime by 40%</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Quality control and defect detection using computer vision</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Supply chain optimization and logistics planning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Production forecasting and resource allocation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <Globe className="w-12 h-12 text-orange-600 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Medical image analysis for disease detection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Patient outcome prediction and treatment optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Drug discovery and clinical trial optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0 mt-1" />
                        <span className="text-gray-700">Hospital resource management and scheduling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - VSO Optimized */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 mb-8">
                <Lightbulb className="w-5 h-5 text-primary-orange animate-pulse" />
                <span className="text-sm font-bold text-gray-800">Frequently Asked Questions</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Questions About</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  Machine Learning Services In India
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about our ML services and how we help Indian businesses succeed
              </p>
            </div>
            
            <div className="space-y-5">
              {[
                {
                  question: "What are Machine Learning Services In India?",
                  answer: "Machine Learning Services In India include predictive analytics, deep learning, computer vision, natural language processing, recommendation systems, and time series forecasting. These services help Indian businesses automate processes, make data-driven decisions, and gain competitive advantages through AI-powered solutions. Our ML services cover the entire lifecycle from data preparation to model deployment and monitoring."
                },
                {
                  question: "Which is the best ML Company In India?",
                  answer: "Metic.ai is the leading Machine Learning Company In India with 2100+ successful ML implementations across Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and Pune. We offer comprehensive ML services with 60% cost savings, 95%+ model accuracy, 3x faster delivery, and 24/7 expert support for Indian businesses across all industries."
                },
                {
                  question: "How much do Machine Learning Services In India cost?",
                  answer: "Machine Learning Services In India typically start from $15,000 depending on project complexity, data volume, and requirements. Metic.ai offers competitive pricing with 60% cost savings compared to traditional development, flexible engagement models (fixed price, time & materials, dedicated team), and proven ROI with most clients seeing returns within 6-12 months."
                },
                {
                  question: "What industries use Machine Learning Services In India?",
                  answer: "Machine Learning Services In India are used across e-commerce, banking & finance, healthcare, manufacturing, retail, telecommunications, agriculture, transportation, education, and real estate. ML solutions help optimize operations, predict trends, enhance customer experiences, automate decision-making, and drive innovation across all sectors of the Indian economy."
                },
                {
                  question: "How long does ML implementation take in India?",
                  answer: "Machine Learning Services In India implementation typically takes 2-6 months depending on project scope, data preparation requirements, model complexity, and integration needs. Metic.ai delivers projects 3x faster than industry average with proven methodologies: 2-4 weeks for POC, 1-2 months for MVP, and 3-6 months for full production deployment with monitoring."
                },
                {
                  question: "Why choose Metic.ai for ML Services In India?",
                  answer: "Choose Metic.ai for Machine Learning Services In India because we offer 2100+ successful implementations, 60% cost savings, 95%+ model accuracy, 3x faster delivery, 50+ expert ML engineers, comprehensive data engineering, enterprise-grade security, 24/7 support, and deep understanding of Indian market requirements across all major industries and use cases."
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                  <summary className="px-8 py-6 cursor-pointer list-none">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-6 h-6 text-primary-orange flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                    </div>
                  </summary>
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-primary-orange/20 to-orange-400/20 mb-6"></div>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Need more information about our Machine Learning Services In India?
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-dark-orange hover:to-primary-orange text-white px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Get Free ML Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-secondary-orange"> Machine Learning?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Partner with India's leading ML company and unlock the power of data-driven intelligence. 
              Get started today with a free consultation from our expert ML engineers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-dark-orange hover:to-primary-orange text-white px-10 py-5 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Start Your ML Project
                  <Rocket className="w-6 h-6 ml-2" />
                </Button>
              </Link>
              
              <Link href="tel:+917892518414">
                <Button className="border-2 border-primary-orange text-primary-orange hover:bg-primary-orange/10 px-10 py-5 rounded-xl text-lg font-semibold backdrop-blur-sm transition-all duration-300">
                  <Phone className="w-6 h-6 mr-2" />
                  Call ML Experts
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-orange" />
                <span className="text-gray-300">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-orange" />
                <span className="text-gray-300">No Obligation Quote</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-orange" />
                <span className="text-gray-300">Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
