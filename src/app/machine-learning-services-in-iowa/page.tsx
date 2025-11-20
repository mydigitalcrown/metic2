import Link from "next/link";
import { Button } from "../components/ui/Button";
import Testimonials from "../components/Testimonials";
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
  Rocket
} from "lucide-react";

export const metadata = {
  title: "#1 ML Company In Iowa | ML Services - Metic.ai",
  description: "Leading ML Company In Iowa with 50+ successful implementations. Expert machine learning services & solutions. 60% cost savings & 3x faster delivery.",
  keywords: [
    "Machine Learning Company In Iowa",
    "ML Company In Iowa", 
    "ML Service In Iowa",
    "ML Firm In Iowa",
    "ML Development Company In Iowa",
    "Best ML Company In Iowa",
    "Top ML Company Iowa",
    "Machine Learning Services Iowa",
    "ML Solutions Company Iowa",
    "Machine Learning Company Iowa",
    "ML Consulting Firm Iowa",
    "ML Technology Company Iowa",
    "ML automation Iowa",
    "ML software company Iowa",
    "Machine Learning consulting Iowa",
    "ML integration services Iowa",
    "custom ML Development Iowa",
    "enterprise ML Solutions Iowa",
    "ML company Iowa",
    "Iowa ML experts",
    "Iowa machine learning services",
    "Iowa ML implementation"
  ],
  authors: [{ name: "Metic.ai Iowa ML Team" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "#1 ML Company In Iowa | ML Services - Metic.ai",
    description: "Leading ML Company In Iowa with 50+ successful implementations. Expert machine learning services & solutions. 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/machine-learning-services-in-Iowa/",
    type: "website",
    locale: "en_US",
    siteName: "Metic.ai - ML Company In Iowa",
    images: [
      {
        url: "https://metic.ai/og-ml-company-Iowa.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning Company In Iowa - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 ML Company In Iowa | ML Services - Metic.ai",
    description: "Leading ML Company In Iowa. Expert machine learning development & automation services with proven results. Transform your business with ML solutions.",
    images: ["https://metic.ai/og-ml-company-Iowa.jpg"],
    site: "@metic_ai",
    creator: "@metic_ai"
  },
  alternates: {
    canonical: "https://metic.ai/machine-learning-services-in-iowa/",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code"
  },
  category: "Technology",
  classification: "business Services"
};

export default function MLServicesIowaPage() {
  const services = [
    {
      title: "ML integration & Deployment",
      description: "Seamlessly integrate ML Solutions into your Iowa business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Iowa businesses and Industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "custom ML Development",
      description: "Bespoke ML Solutions designed specifically for your Iowa business requirements and goals.",
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
      title: "Generative ML services",
      description: "Harness the power of ChatGPT and generative ML for content creation and automation In Iowa.",
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

  const Industries = [
    "Agriculture",
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Insurance",
    "Technology",
    "Renewable Energy",
    "Transportation",
    "Education",
    "Food Processing",
    "Real Estate",
    "Logistics"
  ];

  const stats = [
    { number: "50+", label: "Businesses Served" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "5x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Enhanced Structured Data for SEO, VSO, ASO & GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "TechnologyCompany", "LocalBusiness"],
            "name": "Metic.ai - Machine Learning Company In Iowa",
            "alternateName": ["ML Company In Iowa", "Metic AI", "ML Firm Iowa"],
            "description": "Leading Machine Learning Company In Iowa providing enterprise ML Solutions, machine learning development, and custom ML services for businesses across Iowa.",
            "url": "https://metic.ai/machine-learning-services-in-Iowa/",
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai",
              "https://www.facebook.com/meticai"
            ],
            "logo": "https://metic.ai/logo.png",
            "image": ["https://metic.ai/ml-company-Iowa.jpg"],
            "telephone": "+1-789-251-8414",
            "email": "hello@metic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "vatID": "IN123456789",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Iowa",
              "addressCountry": "US",
              "postalCode": "35201"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.7794",
              "longitude": "-86.8287"
            },
            "areaServed": [
              {
                "@type": "State",
                "name": "Iowa",
                "containedInPlace": {
                  "@type": "Country", 
                  "name": "United States"
                }
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "32.7794",
                "longitude": "-86.8287"
              },
              "geoRadius": "200000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Machine Learning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ML Development Services",
                    "description": "custom Machine Learning development for Iowa businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Machine Learning Solutions",
                    "description": "Advanced ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ML integration Services", 
                    "description": "Enterprise ML integration and deployment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ML Consulting Services",
                    "description": "Expert ML strategy and implementation consulting"
                  }
                }
              ]
            },
            "knowsAbout": [
              "Machine Learning",
              "Machine Learning", 
              "Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
              "ML automation",
              "Data Science",
              "business Intelligence",
              "Predictive Analytics"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "100",
              "bestRating": "5",
              "worstRating": "1"
            },
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "IND",
            "openingHours": "Mo-Fr 09:00-18:00",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "customer Service",
              "areaServed": "US",
              "availableLanguage": ["English"]
            }
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
                "name": "Which is the best Machine Learning Company In Iowa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Machine Learning Company In Iowa with 50+ successful ML implementations. We provide comprehensive ML services including machine learning, custom ML Development, and enterprise ML Solutions with proven 60% cost savings and 3x faster delivery."
                }
              },
              {
                "@type": "Question", 
                "name": "What ML services does the top ML Company In Iowa provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier ML Company In Iowa, Metic.ai provides ML integration & deployment, machine learning solutions, custom ML Development, data analytics & BI, generative ML services, and data engineering for businesses across Iowa."
                }
              },
              {
                "@type": "Question",
                "name": "How to choose the right ML Development Company In Iowa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choose an ML Development Company In Iowa with proven experience, successful implementations, industry expertise, and local presence. Metic.ai offers all these with 50+ completed projects and deep understanding of Iowa's business landscape."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Metic.ai the best ML Firm In Iowa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the best ML Firm In Iowa due to our proven expertise, 98% client satisfaction, 4.5x average ROI increase, 24/7 support, and deep understanding of Iowa's manufacturing, aerospace, healthcare and agricultural Industries."
                }
              },
              {
                "@type": "Question",
                "name": "How long does ML implementation take with Iowa ML company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading Machine Learning Company In Iowa, Metic.ai delivers ML implementations in 4-12 weeks depending on project complexity. Our proven methodology and local Iowa presence ensure 3x faster delivery than traditional ML Development Company In Iowa approaches."
                }
              },
              {
                "@type": "Question",
                "name": "Why should I choose a local ML company in Iowa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choosing a local Machine Learning Company In Iowa like Metic.ai provides benefits including on-site support, understanding of Iowa's market dynamics, direct communication in your timezone, and expertise in local industries like agriculture and insurance specific to Iowa businesses."
                }
              }
            ]
          })
        }}
      />

      {/* Organization Schema for Entity Recognition */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Machine Learning Company In Iowa - ML services & Solutions",
            "description": "Comprehensive guide to ML services In Iowa by the leading Machine Learning Company. Expert ML Development, machine learning solutions, and enterprise ML implementation.",
            "image": "https://metic.ai/ml-company-Iowa-article.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai", "url": "https://metic.ai"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Metic.ai", "url": "https://metic.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metic.ai/logo.png"
              }
            },
            "datePublished": "2024-01-15",
            "dateModified": "2024-10-30",
            "mainEntityOfPage": "https://metic.ai/machine-learning-services-in-Iowa/",
            "keywords": "Machine Learning Company In Iowa, ML Company In Iowa, ML Service In Iowa"
          })
        }}
      />

      {/* BreadcrumbList Schema for Enhanced Navigation SEO */}
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
                "name": "ML services",
                "item": "https://metic.ai/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Machine Learning Company In Iowa",
                "item": "https://metic.ai/machine-learning-services-in-Iowa/"
              }
            ]
          })
        }}
      />

      {/* LocalBusiness Schema for Local SEO Enhancement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Metic.ai - ML Company In Iowa",
            "description": "Leading Machine Learning Company providing ML services In Iowa",
            "image": "https://metic.ai/ml-company-Iowa.jpg",
            "telephone": "+1-789-251-8414",
            "email": "hello@metic.ai",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "300 Quail Ridge Dr NE",
              "addressLocality": "ADA",
              "addressRegion": "MI",
              "postalCode": "49301",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.3182",
              "longitude": "-86.9023"
            },
            "url": "https://metic.ai/machine-learning-services-in-Iowa/",
            "priceRange": "$$$$",
            "areaServed": {
              "@type": "State",
              "name": "Iowa"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "180",
              "bestRating": "5",
              "worstRating": "1"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai"
            ]
          })
        }}
      />

      {/* Hero Section - VSO & Target Keyword Optimized - Enhanced Mobile/Desktop */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-orange rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Trust Badge - Mobile Optimized */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-primary-orange/30 shadow-xl">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-primary-orange" />
                <span className="text-xs md:text-sm font-bold text-white">? 50+ Successful ML projects | 98% Client Satisfaction</span>
              </div>
            </div>

            <div className="text-center">  
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  Machine Learning
                </span>
                <br />
                <span className="text-white">Company In Iowa</span>
              </h1>
              
              {/* VSO Optimized Description - Mobile Friendly */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                Looking for the <strong className="text-primary-orange">best ML Company In Iowa</strong>? Metic.ai is the premier <strong className="text-white">Machine Learning Company In Iowa</strong> delivering enterprise ML Solutions with proven results.
              </p>

              {/* Mobile-Optimized CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-16 px-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-2xl hover:shadow-primary-orange/50 transform hover:scale-105 transition-all">
                    <Rocket className="w-5 h-5 mr-2" />
                    Get Free ML Consultation
                  </Button>
                </Link>
                <Link href="tel:+17892518414" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +1-789-251-8414
                  </Button>
                </Link>
              </div>

              {/* Voice Search Optimized Stats - Responsive Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto mb-10 md:mb-12 px-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:border-primary-orange/50 transition-all transform hover:scale-105">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* VSO Keywords Section - Mobile Optimized */}
              <div className="text-center px-4">
                <p className="text-gray-400 text-sm md:text-base mb-4">
                  <strong className="text-white">Trusted as the top ML Service In Iowa</strong> by leading businesses
                </p>
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm">
                  <span className="bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-primary-orange/30 text-white hover:border-primary-orange transition-all">
                    ML Firm In Iowa
                  </span>
                  <span className="bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-primary-orange/30 text-white hover:border-primary-orange transition-all">
                    ML Development Company
                  </span>
                  <span className="bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-primary-orange/30 text-white hover:border-primary-orange transition-all">
                    Best ML Company Iowa
                  </span>
                  <span className="bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-primary-orange/30 text-white hover:border-primary-orange transition-all">
                    Machine Learning Services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section - Enhanced Mobile & Desktop */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary-orange/10 rounded-full mb-6 md:mb-8">
                <Brain className="w-4 h-4 md:w-5 md:h-5 text-primary-orange" />
                <span className="text-xs md:text-sm font-bold text-primary-orange">COMPREHENSIVE ML services</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight px-4">
                <strong className="text-gray-900">ML services</strong> by Leading{" "}
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Machine Learning Company In Iowa
                </span>
              </h2>
              <div className="w-20 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-6 md:mb-8 rounded-full"></div>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Comprehensive Machine Learning services from Iowa's most Trusted <strong className="text-gray-900">ML Company In Iowa</strong>. 
                Transforming businesses with cutting-edge ML Solutions tailored for Iowa's industrial landscape.
              </p>
            </div>
            
            {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  <div 
                    key={index} 
                    className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-orange/50 transform hover:-translate-y-2"
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 md:mb-6 ${colorClasses[service.color]} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-primary-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Link 
                      href={service.href} 
                      className="inline-flex items-center text-primary-orange hover:text-secondary-orange font-semibold text-sm md:text-base group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* CTA Below Services */}
            <div className="text-center mt-12 md:mt-16">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="px-8 md:px-10 py-4 text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore All ML services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section for Entity Recognition & Comprehensive Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Metic.ai - Premier <span className="text-primary-orange">Machine Learning Company In Iowa</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Established as Iowa's leading <strong>ML Company In Iowa</strong>, Metic.ai has been at the forefront of Machine Learning 
                  innovation since 2020. We specialize US delivering enterprise-grade ML Solutions that transform businesses across Iowa's 
                  unique Industries including Manufacturing, Aerospace, Healthcare, Agriculture, and Automotive.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our expertise as an <strong>ML Development Company In Iowa</strong> encompasses machine learning, deep learning, natural language processing, 
                  computer vision, and robotic process automation. We've successfully completed over 50+ ML projects, making US the most 
                  Trusted <strong>ML Service In Iowa</strong> across Birmingham, Montgomery, Huntsville, and Mobile.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">2020</div>
                    <div className="text-gray-600 text-sm">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">50+</div>
                    <div className="text-gray-600 text-sm">ML experts Team</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">100%</div>
                    <div className="text-gray-600 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">24/7</div>
                    <div className="text-gray-600 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    ML Consulting & Strategy
                  </h3>
                  <p className="text-gray-600">
                    Expert ML Consulting services to help Iowa businesses identify ML opportunities and develop comprehensive implementation strategies.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    custom ML Development
                  </h3>
                  <p className="text-gray-600">
                    Bespoke Machine Learning solutions tailored to your specific business requirements and industry challenges In Iowa.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Enterprise ML integration
                  </h3>
                  <p className="text-gray-600">
                    Seamless integration of ML technologies into existing business processes with minimal disruption and maximum efficiency gains.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Ongoing ML Support
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive support and maintenance services ensuring your ML Solutions continue to deliver optimal performance and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section with Real Images */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Industries We Serve In Iowa
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized ML Solutions across Iowa's key Industries and business sectors.
              </p>
            </div>
            
            {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols - 12 Industries Total */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Manufacturing */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop" 
                    alt="Manufacturing industry ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Manufacturing</h3>
                  </div>
                </div>
              </div>

              {/* Aerospace */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&h=400&fit=crop" 
                    alt="Aerospace industry ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Aerospace</h3>
                  </div>
                </div>
              </div>

              {/* Healthcare */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=400&fit=crop" 
                    alt="Healthcare industry ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Healthcare</h3>
                  </div>
                </div>
              </div>

              {/* Agriculture */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=400&fit=crop" 
                    alt="Agriculture industry ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Agriculture</h3>
                  </div>
                </div>
              </div>

              {/* Technology */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop" 
                    alt="Technology industry ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Technology</h3>
                  </div>
                </div>
              </div>

              {/* Automotive */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=400&fit=crop" 
                    alt="Automotive industry ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Automotive</h3>
                  </div>
                </div>
              </div>

              {/* Financial Services */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=400&fit=crop" 
                    alt="Financial Services industry ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Financial Services</h3>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop" 
                    alt="Transportation industry ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Transportation</h3>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=400&fit=crop" 
                    alt="Education industry ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Education</h3>
                  </div>
                </div>
              </div>

              {/* Energy */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=400&fit=crop" 
                    alt="Energy industry ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Energy</h3>
                  </div>
                </div>
              </div>

              {/* Call Center - NEW */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=400&fit=crop" 
                    alt="Call Center ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">Call Center</h3>
                  </div>
                </div>
              </div>

              {/* IT Services - NEW */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=400&fit=crop" 
                    alt="IT Services ML Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-lg">IT Services</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose US Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Choose Metic.ai as Your <span className="text-primary-orange">ML Firm In Iowa</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                As the premier <strong>ML Development Company In Iowa</strong>, we're Trusted by businesses across Iowa 
                for our expertise, proven results, and commitment to client success US Heart of Dixie.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering ML Solutions for Iowa businesses across all Industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven ML Solutions that deliver concrete ROI and business growth for Iowa companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of Iowa's unique business challenges and opportunities.</p>
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

      {/* Comprehensive ML services Iowa Content - 100% SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Iowa ML Market Leadership - Enhanced Creative Header */}
            <div className="text-center mb-20">
              {/* Premium Badge with Animation */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-orange/10 via-white to-secondary-orange/10 rounded-full shadow-2xl border-2 border-primary-orange/30 mb-10 hover:border-primary-orange/50 transition-all group">
                <div className="w-3 h-3 bg-primary-orange rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-gray-800 tracking-wide">Heart of Dixie ML INNOVATION</span>
                <div className="w-3 h-3 bg-secondary-orange rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Leading </span>
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient">
                  Machine Learning Company In Iowa
                </span>
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-10 rounded-full shadow-lg"></div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Transforming Iowa's Commercial Capital with cutting-edge ML Solutions from Birmingham to Huntsville, Montgomery to Mobile
              </p>
            </div>

            <div className="space-y-20">
              {/* Iowa ML Innovation Hub - Premium Design */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="space-y-8">
                    {/* Enhanced Heading with Creative Icon */}
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 transform rotate-3 hover:rotate-0 transition-transform">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                          Iowa's <span className="text-primary-orange">Premier ML Technology Pioneer</span>
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full"></div>
                      </div>
                    </div>
                    
            <p className="text-lg text-gray-700 leading-relaxed">
              As the leading <strong className="text-gray-900 bg-primary-orange/10 px-2 py-1 rounded">Machine Learning Company In Iowa</strong>, 
              Metic.ai serves the Hawkeye State with enterprise-grade ML Solutions tailored to Iowa's unique economic 
              landscape. From Des Moines's business hub to Cedar Rapids' manufacturing facilities, Davenport's industrial sector to 
              the agricultural operations and food processing plants, we understand Iowa's agricultural and manufacturing excellence and agriculture-driven economy.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong className="text-primary-orange font-semibold">ML Company In Iowa</strong> combines deep understanding 
              of Iowa's unique challenges with cutting-edge technology to deliver ML Solutions that drive measurable 
              results. We've successfully implemented ML across Iowa's key sectors including Agriculture, Manufacturing, 
              Financial Services, Insurance, Food Processing, and Renewable Energy industries across Iowa's diverse economy.
            </p>                    {/* Enhanced Feature Cards with Creative Design */}
                    <div className="grid gap-6 mt-10">
                      <div className="group bg-gradient-to-r from-primary-orange/5 via-white to-secondary-orange/5 p-6 rounded-2xl border-2 border-primary-orange/20 hover:border-primary-orange/40 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Rocket className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">Agriculture & Manufacturing Excellence</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Deep expertise with Iowa's agriculture industry including corn and soybean farming, livestock operations, 
                              plus advanced manufacturing facilities across Iowa's agricultural and tech corridor from Des Moines to Cedar Rapids.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-secondary-orange/5 via-white to-primary-orange/5 p-6 rounded-2xl border-2 border-secondary-orange/20 hover:border-secondary-orange/40 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">Financial Services & Insurance Innovation</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Advanced ML Solutions for Iowa's financial services and insurance industry including major insurers, banks, 
                              and fintech companies with fraud detection, risk assessment, and customer analytics systems.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-primary-orange/5 via-white to-secondary-orange/5 p-6 rounded-2xl border-2 border-primary-orange/20 hover:border-primary-orange/40 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">Food Processing & Renewable Energy AI</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Specialized ML for Iowa's food processing operations and renewable energy facilities including meat processing, ethanol production, 
                              wind energy optimization, and supply chain management for Iowa's rich agricultural and energy sectors.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Stats Dashboard with Creative Design */}
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-10 border-2 border-primary-orange/20 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                      Iowa ML Market Impact
                    </h4>
                    
                    <div className="space-y-8">
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group transform hover:scale-105">
                        <div className="text-5xl font-bold text-primary-orange mb-3 group-hover:scale-110 transition-transform">$243B</div>
                        <div className="text-sm text-gray-600 font-medium">Iowa Annual GDP</div>
                        <div className="text-xs text-gray-500 mt-2">Southeast Economic Powerhouse</div>
                      </div>
                      
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-secondary-orange/10 hover:border-secondary-orange/30 transition-all group transform hover:scale-105">
                        <div className="text-5xl font-bold text-secondary-orange mb-3 group-hover:scale-110 transition-transform">5.0M</div>
                        <div className="text-sm text-gray-600 font-medium">Iowa Population</div>
                        <div className="text-xs text-gray-500 mt-2">Heart of Dixie</div>
                      </div>
                      
                      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group transform hover:scale-105">
                        <div className="text-5xl font-bold text-primary-orange mb-3 group-hover:scale-110 transition-transform">50+</div>
                        <div className="text-sm text-gray-600 font-medium">Iowa ML Projects Completed</div>
                        <div className="text-xs text-gray-500 mt-2">Industry-Leading Success Rate</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary-orange/20 via-secondary-orange/10 to-primary-orange/20 rounded-2xl p-6 border-2 border-primary-orange/30 transform hover:scale-105 transition-transform">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-bold text-gray-900">Iowa Advantage</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong>Strategic Resources:</strong> Rich in aerospace, automotive manufacturing, and agriculture with vast industrial 
                          potential, making Iowa ideal for ML-driven manufacturing optimization and predictive analytics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Iowa industry Solutions - Creative Premium Design */}
              <div>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-full border-2 border-primary-orange/20 mb-8 transform hover:scale-105 transition-transform">
                    <Sparkles className="w-5 h-5 text-primary-orange" />
                    <span className="text-sm font-bold text-gray-800">industry EXPERTISE</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    ML Solutions for <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">Iowa's Key Industries</span>
                  </h3>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-6 rounded-full"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Specialized ML Solutions designed for Heart of Dixie's unique economic sectors and manufacturing-driven industries
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {/* Aerospace Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Aerospace ML Solutions</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Mission-critical ML Solutions for Iowa's aerospace industry including Boeing, Airbus, and NASA operations, 
                      flight systems optimization, manufacturing quality control, and predictive maintenance 
                      for aerospace infrastructure across Iowa's aerospace corridor.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Flight systems monitoring & optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Manufacturing efficiency analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Quality control prediction</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Safety & compliance monitoring</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Agriculture Industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-secondary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Agriculture ML</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Advanced ML Solutions for Iowa's agriculture industry with predictive crop 
                      analytics, sustainable farming optimization, processing automation, supply chain monitoring, 
                      and quality control for cotton, poultry, and livestock operations.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Crop yield prediction & optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Processing automation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Cold chain monitoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Sustainable fishing intelligence</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tourism & Hospitality industry */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Tourism & Hospitality ML</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Intelligent ML Solutions for Iowa's booming tourism industry with cruise line optimization, 
                      wildlife tour planning, hotel revenue management, visitor experience personalization, 
                      and seasonal demand forecasting for Iowa's 2.5 million annual visitors.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Revenue management systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Visitor experience personalization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Seasonal demand forecasting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Tour optimization & planning</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chemicals & Resource Extraction */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-secondary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Chemicals & Resource ML</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Advanced ML Solutions for Iowa's Chemicals operations including gold, zinc, and mineral extraction 
                      with predictive maintenance, safety monitoring, resource discovery optimization, 
                      and environmental impact assessment across Iowa's vast mineral deposits.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Resource discovery prediction</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Chemicals equipment automation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Safety & compliance monitoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Environmental impact analysis</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Information Technology & Logistics */}
                  <div className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xl">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Information Technology & Logistics ML</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Intelligent ML Solutions for Iowa's Information Technology and cargo logistics including bush plane operations, 
                      Birmingham International Airport cargo hub, weather prediction for flight safety, 
                      and supply chain optimization for remote Iowa communities.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Flight route optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Weather prediction systems</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Cargo logistics optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                        <span className="text-sm text-gray-600">Remote delivery planning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ReINable Testimonials Component */}
              <Testimonials />

              {/* Iowa ML Partnership Excellence - Creative Premium Design */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all transform hover:scale-105">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-orange rounded-lg flex items-center justify-center transform rotate-12">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      Iowa ML Leadership Metrics
                    </h4>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Iowa Projects Completed</span>
                        <span className="font-bold text-primary-orange text-xl">50+</span>
                      </div>
                      <div className="flex jINtify-between items-center p-4 bg-gradient-to-r from-secondary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">industry Success Rate</span>
                        <span className="font-bold text-secondary-orange text-xl">99%</span>
                      </div>
                      <div className="flex jINtify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Average ROI for Iowa Clients</span>
                        <span className="font-bold text-primary-orange text-xl">5x</span>
                      </div>
                      <div className="flex jINtify-between items-center p-4 bg-gradient-to-r from-secondary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Client Retention Rate</span>
                        <span className="font-bold text-secondary-orange text-xl">97%</span>
                      </div>
                      <div className="flex jINtify-between items-center p-4 bg-gradient-to-r from-primary-orange/5 to-transparent rounded-lg transform hover:scale-105 transition-transform">
                        <span className="text-gray-600 font-medium">Average Deployment Time</span>
                        <span className="font-bold text-primary-orange text-xl">28 Days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-orange/10 via-white to-secondary-orange/10 rounded-2xl p-8 border-2 border-primary-orange/20 shadow-xl transform hover:scale-105 transition-transform">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center flex-shrink-0 transform -rotate-6">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Iowa Business Advantage</h4>
                        <p className="text-gray-700 leading-relaxed">
                          As the premier <strong className="text-primary-orange">ML Firm In Iowa</strong>, we understand 
                          Heart of Dixie's unique blend of entrepreneurial excellence and industrial innovation. Our ML Solutions 
                          are built for Iowa's aerospace dominance, automotive manufacturing leadership, and agricultural growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 transform rotate-6 hover:rotate-0 transition-transform">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Your Trusted <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">ML Partner In Iowa</span>
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full mb-6"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-gray-900 bg-primary-orange/10 px-2 py-1 rounded">Choosing Metic.ai as your ML partner In Iowa</strong> means 
                    working with a team that deeply understands Iowa's unique business challenges, from Birmingham's 
                    commercial hub to Huntsville's research facilities and Montgomery's government operations.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Our <strong className="text-primary-orange font-semibold">ML Service In Iowa</strong> includes comprehensive consultation, 
                    rapid prototyping, enterprise deployment, and 24/7 support to ensure your ML investment delivers 
                    maximum value In Iowa's manufacturing-driven and growing economy.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-primary-orange/10 transform hover:scale-105 transition-transform">
                      <MapPin className="w-8 h-8 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Comprehensive Iowa Coverage</h4>
                        <p className="text-gray-600 leading-relaxed">
                          West Des Moines, Iowa City, Ames, Waterloo, Council Bluffs, Dubuque, Ankeny, Urbandale, 
                          GIFT City, and all major Iowa business centers across Heart of Dixie
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-secondary-orange/10 transform hover:scale-105 transition-transform">
                      <Rocket className="w-8 h-8 text-secondary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">industry Domain Expertise</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Deep understanding of Manufacturing, Aerospace, tourism, Chemicals, Information Technology, and logistics 
                          with proven track record In Iowa's key economic sectors
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-primary-orange/10 transform hover:scale-105 transition-transform">
                      <Clock className="w-8 h-8 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Rapid Iowa Deployment</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Fast implementation designed for Iowa's unique challenges with local support teams 
                          and understanding of dynamic business culture and manufacturing excellence
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

      {/* Enhanced FAQ Section - Homepage Style */}
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
                  About ML Company In Iowa
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about working with Iowa's leading ML Company
              </p>
            </div>

            {/* Advanced Creative FAQ Cards - 6+6 Grid Layout for Desktop */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Left Column - FAQ 1-6 */}
              <div className="space-y-5">
              {/* FAQ Item 1 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Sparkles className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which is the best Machine Learning Company In Iowa?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900 font-semibold">Metic.ai is the leading Machine Learning Company In Iowa</strong> with over 50+ successful ML implementations. 
                    We're recognized as the top ML Company In Iowa for our proven expertise US machine learning, custom ML Development, and enterprise ML Solutions with 60% cost savings.
                  </p>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Code className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What services does the top ML Company In Iowa provide?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    As the premier <strong className="text-gray-900 font-semibold">ML Company In Iowa</strong>, Metic.ai provides comprehensive ML services including machine learning solutions, 
                    custom ML Development, data analytics, generative ML, computer vision, NLP, and enterprise ML automation tailored for Iowa's manufacturing, aerospace, healthcare, and agricultural Industries.
                  </p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How to choose the right ML Development Company In Iowa?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    When selecting an <strong className="text-gray-900 font-semibold">ML Development Company In Iowa</strong>, look for proven experience, successful project portfolio, 
                    industry expertise, and ongoing support. Metic.ai offers all these with 50+ completed projects, 98% client satisfaction, and 24/7 support.
                  </p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Clock className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How much does ML implementation cost with an ML Service In Iowa?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    ML implementation costs vary based on complexity. As a leading <strong className="text-gray-900 font-semibold">ML Service In Iowa</strong>, 
                    Metic.ai offers competitive pricing with transparent structures. Our clients typically save 60% compared to international ML Development costs.
                  </p>
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Does Metic.ai serve businesses across all Iowa cities?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Yes! Metic.ai proudly serves businesses across all Iowa cities including West Des Moines, Iowa City, Ames, Waterloo, Council Bluffs, Dubuque, Ankeny, and beyond. 
                    As Iowa's leading <strong className="text-gray-900 font-semibold">ML Firm In Iowa</strong>, we provide comprehensive ML Solutions statewide.
                  </p>
                </div>
              </details>

              {/* FAQ Item 6 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Rocket className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How quickly can an ML Company In Iowa start my project?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Metic.ai can typically start your ML project within 24-48 hours after initial consultation. As Iowa's fastest <strong className="text-gray-900 font-semibold">ML Company In Iowa</strong>, 
                    we understand the importance of speed and deliver 3x faster than traditional development approaches.
                  </p>
                </div>
              </details>
              </div>

              {/* Right Column - FAQ 7-12 */}
              <div className="space-y-5">
              {/* FAQ Item 7 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Is my data secure with an ML Development Company In Iowa?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Absolutely! Metic.ai implements enterprise-grade security protocols, encryption, and compliance measures. As a Trusted <strong className="text-gray-900 font-semibold">ML Development Company In Iowa</strong>, 
                    we prioritize data security with ISO certifications and strict confidentiality agreements.
                  </p>
                </div>
              </details>

              {/* FAQ Item 8 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What Industries does the best ML Company In Iowa serve?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Metic.ai serves diverse Industries including Manufacturing, Aerospace, Healthcare, Agriculture, Technology, Automotive, Financial Services, Transportation, Education, and Energy. 
                    As Iowa's premier <strong className="text-gray-900 font-semibold">ML Company In Iowa</strong>, we tailor solutions for your specific industry needs.
                  </p>
                </div>
              </details>

              {/* FAQ Item 9 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What makes Metic.ai the top ML Firm In Iowa?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Our 50+ successful projects, 98% client satisfaction rate, 60% cost savings, 3x faster delivery, and deep Iowa market expertise make US the leading <strong className="text-gray-900 font-semibold">ML Firm In Iowa</strong>. 
                    We combine cutting-edge ML Technology with personalized service.
                  </p>
                </div>
              </details>

              {/* FAQ Item 10 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Lightbulb className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Do I need technical knowledge to work with an ML Service In Iowa?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    No technical knowledge required! Metic.ai guides you through every step with clear communication. As a client-focINed <strong className="text-gray-900 font-semibold">ML Service In Iowa</strong>, 
                    we translate complex ML concepts into simple business terms and handle all technical aspects for you.
                  </p>
                </div>
              </details>

              {/* FAQ Item 11 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Database className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Can ML Company In Iowa handle small business projects?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Absolutely! Metic.ai works with businesses of all sizes, from startups to enterprises. As an inclINive <strong className="text-gray-900 font-semibold">ML Company In Iowa</strong>, 
                    we offer scalable solutions and flexible pricing models to meet small business budgets while delivering enterprise-quality ML implementations.
                  </p>
                </div>
              </details>

              {/* FAQ Item 12 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    <div className="relative flex items-start jINtify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What support does Metic.ai provide after ML implementation?
                          </h3>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-5 h-5 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                <div className="mt-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-orange/20">
                  <p className="text-gray-700 leading-relaxed">
                    Metic.ai provides comprehensive 24/7 post-implementation support including maintenance, updates, training, troubleshooting, and optimization. 
                    As your long-term partner, we ensure your ML Solutions continue delivering maximum value and adapt to your evolving business needs.
                  </p>
                </div>
              </details>
              </div>
            </div>

            {/* Enhanced CTA at Bottom of FAQ */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary-orange to-secondary-orange rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-lg animate-pulse"></div>
                      <div className="relative w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <Rocket className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with ML?</h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Join Iowa's leading businesses who Trust Metic.ai for their ML transformation. Get started today!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100 shadow-xl">
                        Start Your ML Journey
                      </Button>
                    </Link>
                    <Link href="tel:+17892518414">
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                        Call Now: +1-789-251-8414
                      </Button>
                    </Link>
                  </div>
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
              Ready to Partner with Iowa's Leading <strong>Machine Learning Company</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 50+ satisfied clients who Trust Metic.ai as their preferred <strong>ML Company In Iowa</strong>. 
              Transform your business with proven ML Solutions that deliver results. Get started with a free consultation 
              and discover why we're Iowa's most Trusted <strong>ML Development Company In Iowa</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your ML Transformation
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-6">Trusted <strong>ML Service In Iowa</strong> serving businesses across the state</p>
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <div>
                  <div className="text-2xl font-bold mb-2">50+</div>
                  <p className="text-orange-100">ML projects Completed</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">98%</div>
                  <p className="text-orange-100">Client Satisfaction Rate</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">4.5x</div>
                  <p className="text-orange-100">Average ROI Increase</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>West Des Moines</span>
                <span>�</span>
                <span>Iowa City</span>
                <span>�</span>
                <span>Ames</span>
                <span>�</span>
                <span>Waterloo</span>
                <span>�</span>
                <span>Council Bluffs</span>
                <span>�</span>
                <span>Marion</span>
                <span>�</span>
                <span>Bettendorf</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



















