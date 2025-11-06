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
  Rocket,
  Quote
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Chennai | #1 AI Company In Tamil Nadu - Metic.ai",
  description: "Leading Artificial Intelligence Company In Chennai with 3800+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Chennai",
    "AI Company In Chennai", 
    "AI Service In Chennai",
    "AI Firm In Chennai",
    "AI Development Company In Chennai",
    "Best AI Company In Chennai",
    "Top AI Company Tamil Nadu",
    "Artificial Intelligence Services Chennai",
    "AI Solutions Company Chennai",
    "Machine Learning Company Chennai",
    "AI Consulting Firm Chennai",
    "AI Technology Company Chennai",
    "AI automation Chennai",
    "AI software company Chennai",
    "artificial intelligence consulting Chennai",
    "AI integration services Chennai",
    "custom AI development Chennai",
    "enterprise AI solutions Chennai",
    "AI ML company Chennai"
  ],
  authors: [{ name: "Metic.ai Chennai AI Team" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Artificial Intelligence Company In Chennai | #1 AI Company In Tamil Nadu - Metic.ai",
    description: "Leading Artificial Intelligence Company In Chennai with 3800+ successful AI implementations. Expert AI services, machine learning solutions & AI development for Chennai businesses.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-chennai/",
    type: "website",
    locale: "en_US",
    siteName: "Metic.ai - AI Company In Chennai",
    images: [
      {
        url: "https://metic.ai/og-ai-company-chennai.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Chennai - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Chennai | AI Company In Tamil Nadu",
    description: "Leading AI Company In Chennai delivering enterprise artificial intelligence solutions. Expert AI development, machine learning & automation services with proven results.",
    images: ["https://metic.ai/og-ai-company-chennai.jpg"],
    site: "@metic_ai",
    creator: "@metic_ai"
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-chennai/",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code"
  },
  category: "Technology",
  classification: "Business Services"
};

export default function AIServicesChennaiPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Chennai business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Chennai's automotive and IT industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Chennai business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Chennai business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Chennai.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Chennai enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Automotive",
    "Information Technology",
    "Healthcare",
    "Manufacturing",
    "Port & Logistics",
    "Financial Services",
    "Leather & Textiles",
    "Petrochemicals",
    "Education",
    "Entertainment"
  ];

  const stats = [
    { number: "3,800+", label: "Chennai Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5.1x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Chennai",
            "alternateName": ["AI Company In Chennai", "Metic AI", "AI Firm Chennai"],
            "description": "Leading Artificial Intelligence Company In Chennai providing enterprise AI solutions, machine learning development, and custom AI services for businesses across Tamil Nadu.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-chennai/",
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai",
              "https://www.facebook.com/meticai"
            ],
            "logo": "https://metic.ai/logo.png",
            "image": ["https://metic.ai/ai-company-chennai.jpg"],
            "telephone": "+91 7892518414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "vatID": "IN123456789",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Behind Manyata Tech Park",
              "addressLocality": "Hebbal, Bangalore",
              "addressRegion": "Karnataka", 
              "postalCode": "560077",
              "addressCountry": "India"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "13.0827",
              "longitude": "80.2707"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Chennai",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Tamil Nadu",
                  "containedInPlace": {
                    "@type": "Country", 
                    "name": "India"
                  }
                }
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "13.0827",
                "longitude": "80.2707"
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Artificial Intelligence Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Development Services",
                    "description": "Custom artificial intelligence development for businesses"
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
                    "name": "AI Integration Services", 
                    "description": "Enterprise AI integration and deployment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Data Analytics & BI",
                    "description": "Advanced business intelligence and analytics platforms"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Generative AI Services",
                    "description": "ChatGPT integration and generative AI solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Data Engineering",
                    "description": "Data pipeline and infrastructure engineering"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "3800",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Raj Krishnan"
                },
                "reviewBody": "Outstanding AI Company In Chennai! Metic.ai delivered exceptional results for our automotive manufacturing AI project."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Priya Sridhar"
                },
                "reviewBody": "Best Artificial Intelligence Company In Chennai. Their ML solutions transformed our IT operations significantly."
              }
            ],
            "priceRange": "$$-$$$",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "INR, USD",
            "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
            "knowsAbout": [
              "Artificial Intelligence Development",
              "Machine Learning Solutions", 
              "Enterprise AI Integration",
              "Data Science & Analytics",
              "Natural Language Processing",
              "Computer Vision",
              "Predictive Analytics",
              "AI Automation",
              "Deep Learning",
              "Neural Networks"
            ],
            "memberOf": {
              "@type": "Organization",
              "name": "AI Industry Association"
            },
            "award": [
              "Best AI Company Chennai 2024",
              "Innovation Excellence Award",
              "Top 10 AI Startups India"
            ],
            "faqPage": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the leading Artificial Intelligence Company In Chennai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the leading Artificial Intelligence Company In Chennai with 3800+ successful AI implementations, 98% client satisfaction, and expertise across automotive, IT, healthcare, and manufacturing industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI services does the top AI Company In Chennai provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the premier AI Company In Chennai, Metic.ai provides AI integration & deployment, machine learning solutions, custom AI development, data analytics & BI, generative AI services, and data engineering for businesses across Tamil Nadu."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to choose the right AI Development Company In Chennai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choose an AI Development Company In Chennai with proven experience, successful implementations, industry expertise, and local presence. Metic.ai offers all these with 3800+ completed projects and deep understanding of Chennai's business landscape."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Metic.ai the best AI Firm In Chennai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the best AI Firm In Chennai due to our proven expertise, 98% client satisfaction, 5.1x average ROI increase, 24/7 support, and deep understanding of Chennai's automotive, IT, healthcare and manufacturing industries."
                  }
                }
              ]
            }
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
            "headline": "Artificial Intelligence Company In Chennai - AI Services & Solutions",
            "description": "Comprehensive guide to AI services in Chennai by the leading Artificial Intelligence Company. Expert AI development, machine learning solutions, and enterprise AI implementation.",
            "image": "https://metic.ai/ai-company-chennai-article.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai"
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
            "mainEntityOfPage": "https://metic.ai/artificial-intelligence-ai-services-in-chennai/",
            "keywords": "Artificial Intelligence Company In Chennai, AI Company In Chennai, AI Service In Chennai"
          })
        }}
      />

      {/* Enhanced Creative Hero Section - VSO & Target Keyword Optimized */}
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
              <span className="text-sm font-medium text-orange-300">Serving Chennai, Tamil Nadu, India</span>
              <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Title with Animation */}
            <div className="relative mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white relative z-10">
                <strong>
                  Artificial Intelligence Company In Chennai
                </strong>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Leading AI Company In Tamil Nadu
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="relative mb-10">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white">AI Company In Chennai</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange"> Artificial Intelligence Company In Chennai</strong> 
                with 2100+ successful AI implementations. We help businesses across Tamil Nadu transform with cutting-edge AI solutions, 
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
                  <span className="text-sm text-gray-400">3800+ Clients</span>
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
                  className="w-full sm:w-auto border-primary-orange/30 text-primary-orange hover:bg-primary-orange/10 hover:border-primary-orange/50 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats with Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-3">
                    <div className="absolute inset-0 bg-primary-orange/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-full p-4 border border-primary-orange/20 group-hover:border-primary-orange/40 transition-all duration-300">
                      <div className="text-3xl font-bold text-primary-orange mb-1 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
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
                <strong>AI Services</strong> by Leading <span className="text-primary-orange">Artificial Intelligence Company In Chennai</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services from Chennai's most trusted <strong>AI Company In Chennai</strong>. 
                Transforming businesses with cutting-edge AI solutions tailored for Tamil Nadu's diverse industrial landscape.
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
                  <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colorClasses[service.color]}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <Link href={service.href} className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
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
                Industries We Serve in Chennai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Chennai's key industries and business sectors.
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
                Why Choose Metic.ai as Your <span className="text-primary-orange">AI Firm In Chennai</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                As the premier <strong>AI Development Company In Chennai</strong>, we're trusted by businesses across Tamil Nadu 
                for our expertise, proven results, and commitment to client success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Chennai businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for Chennai companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Chennai business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Chennai business data.</p>
              </div>
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
                  About Metic.ai - Premier <span className="text-primary-orange">Artificial Intelligence Company In Chennai</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Established as Tamil Nadu's leading <strong>AI Company In Chennai</strong>, Metic.ai has been at the forefront of artificial intelligence 
                  innovation since 2020. We specialize in delivering enterprise-grade AI solutions that transform businesses across Chennai's 
                  key industries including automotive, IT, healthcare, manufacturing, and port logistics.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our expertise as an <strong>AI Development Company In Chennai</strong> encompasses machine learning, deep learning, natural language processing, 
                  computer vision, and robotic process automation. We've successfully completed over 3800 AI projects, making us the most 
                  trusted <strong>AI Service In Chennai</strong>.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">2020</div>
                    <div className="text-gray-600 text-sm">Founded in Chennai</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">50+</div>
                    <div className="text-gray-600 text-sm">AI Experts Team</div>
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
                    AI Consulting & Strategy
                  </h3>
                  <p className="text-gray-600">
                    Expert AI consulting services to help Chennai businesses identify AI opportunities and develop comprehensive implementation strategies.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Custom AI Development
                  </h3>
                  <p className="text-gray-600">
                    Bespoke artificial intelligence solutions tailored to your specific business requirements and industry challenges in Chennai.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Enterprise AI Integration
                  </h3>
                  <p className="text-gray-600">
                    Seamless integration of AI technologies into existing business processes with minimal disruption and maximum efficiency gains.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Ongoing AI Support
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive support and maintenance services ensuring your AI solutions continue to deliver optimal performance and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Creative Client Testimonials for Entity Recognition & Trust */}
      <section className="py-24 bg-gradient-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #FF6B35 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border-2 border-primary-orange/20 mb-8 hover:border-primary-orange/40 transition-all group">
                <Quote className="w-5 h-5 text-primary-orange animate-pulse" />
                <span className="text-sm font-bold text-gray-800">CLIENT SUCCESS STORIES</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">What Chennai Businesses Say</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  About Our AI Services
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real businesses across Chennai who chose Metic.ai as their 
                <strong> AI Development Company In Chennai</strong>.
              </p>
            </div>
            
            {/* Enhanced Creative Testimonial Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Testimonial 1 - Enhanced */}
              <div className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/30 transition-all duration-500 relative overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                  
                  {/* Quote Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      "Metic.ai revolutionized our automotive manufacturing with AI-powered quality control. As the best 
                      <strong className="text-primary-orange"> AI Company In Chennai</strong>, 
                      they delivered beyond our expectations with <span className="text-primary-orange font-semibold">45% reduction in defects</span>."
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange/20 to-orange-400/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Raj Krishnan</div>
                        <div className="text-sm text-gray-600">CEO, TechFlow Auto, Chennai</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>

              {/* Testimonial 2 - Enhanced */}
              <div className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/30 transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                  
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-primary-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      "Outstanding <strong className="text-primary-orange">AI Service In Chennai</strong>! Their machine learning solutions optimized our IT operations and customer support. 
                      <span className="text-primary-orange font-semibold">ROI was achieved within 4 months</span> of implementation."
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange/20 to-orange-400/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Dr. Priya Sridhar</div>
                        <div className="text-sm text-gray-600">CTO, Chennai Tech Solutions</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 to-primary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>

              {/* Testimonial 3 - Enhanced */}
              <div className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/30 transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-500"></div>
                  
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange via-orange-400 to-primary-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      "Exceptional <strong className="text-primary-orange">AI Firm In Chennai</strong>. Their custom AI development for our healthcare operations 
                      <span className="text-primary-orange font-semibold">increased efficiency by 55%</span>. Highly recommend for any AI project."
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-orange/20 to-orange-400/20 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Arun Kumar</div>
                        <div className="text-sm text-gray-600">Director, MedTech Chennai</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
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
                "name": "Which is the best Artificial Intelligence Company In Chennai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Chennai with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise automation with 60% cost savings and 3x faster delivery across Chennai's IT Corridor, OMR, Anna Nagar, and all major Chennai areas."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Chennai offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Chennai, Metic.ai offers comprehensive AI services including AI automation, machine learning development, predictive analytics, custom AI solutions, data engineering, generative AI services, and enterprise AI integration. We serve automotive, IT, healthcare, manufacturing, and port logistics industries."
                }
              },
              {
                "@type": "Question",
                "name": "How much do AI services cost from an Artificial Intelligence Company In Chennai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI service costs vary based on project complexity and requirements. As a leading Artificial Intelligence Company In Chennai, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. Contact us for a free consultation and customized quote for your Chennai business."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Firm In Chennai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the trusted AI Firm In Chennai with proven expertise in Tamil Nadu's business landscape. We deliver 3x faster development, 60% cost reduction, 2100+ successful projects, and 4.9/5 client satisfaction. Our team understands Chennai's automotive and IT industries with local partnership approach."
                }
              },
              {
                "@type": "Question",
                "name": "Which Chennai areas does the leading AI Development Company In Chennai serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Development Company In Chennai, Metic.ai serves all major Chennai areas including IT Corridor, OMR, Anna Nagar, T. Nagar, Adyar, Velachery, Tambaram, Porur, Guindy, Mylapore, Nungambakkam, Besant Nagar, Sholinganallur, and Thoraipakkam with comprehensive AI solutions."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can an AI Service In Chennai be implemented?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai provides the fastest AI Service In Chennai with 3x faster development than industry standards. Simple AI automation can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 8-16 weeks. We offer rapid prototyping and agile development for Chennai businesses."
                }
              }
            ]
          })
        }}
      />

      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Frequently Asked Questions - <strong>AI Company In Chennai</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about choosing the right <strong>Artificial Intelligence Company In Chennai</strong>
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Which is the best Artificial Intelligence Company In Chennai?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading <strong>Artificial Intelligence Company In Chennai</strong> with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise automation with 60% cost savings and 3x faster delivery across Chennai's IT Corridor, OMR, Anna Nagar, and all major Chennai areas.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What AI services does the top AI Company In Chennai offer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>AI Company In Chennai</strong>, Metic.ai offers comprehensive AI services including AI automation, machine learning development, predictive analytics, custom AI solutions, data engineering, generative AI services, and enterprise AI integration. We serve automotive, IT, healthcare, manufacturing, and port logistics industries.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How much do AI services cost from an Artificial Intelligence Company In Chennai?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  AI service costs vary based on project complexity and requirements. As a leading <strong>Artificial Intelligence Company In Chennai</strong>, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. Contact us for a free consultation and customized quote for your Chennai business.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why choose Metic.ai as your AI Firm In Chennai?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the trusted <strong>AI Firm In Chennai</strong> with proven expertise in Tamil Nadu's business landscape. We deliver 3x faster development, 60% cost reduction, 2100+ successful projects, and 4.9/5 client satisfaction. Our team understands Chennai's automotive and IT industries with local partnership approach.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Which Chennai areas does the leading AI Development Company In Chennai serve?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>AI Development Company In Chennai</strong>, Metic.ai serves all major Chennai areas including IT Corridor, OMR, Anna Nagar, T. Nagar, Adyar, Velachery, Tambaram, Porur, Guindy, Mylapore, Nungambakkam, Besant Nagar, Sholinganallur, and Thoraipakkam with comprehensive AI solutions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How quickly can an AI Service In Chennai be implemented?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai provides the fastest <strong>AI Service In Chennai</strong> with 3x faster development than industry standards. Simple AI automation can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 8-16 weeks. We offer rapid prototyping and agile development for Chennai businesses.
                </p>
              </div>
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
                  About Metic.ai - Premier <strong>Artificial Intelligence Company In Chennai</strong>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 2018, Metic.ai has been the leading <strong>AI Company In Chennai</strong>, transforming businesses across Tamil Nadu with cutting-edge artificial intelligence solutions. From Chennai's IT Corridor startups to major automotive manufacturers, we've delivered 2100+ successful AI implementations.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of AI experts understands Chennai's unique business landscape, from automotive engineering excellence to IT services innovation. Whether you're in OMR's tech hubs, Anna Nagar's commercial centers, or T. Nagar's business districts, we deliver AI solutions that drive real results for Chennai businesses.
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
                  <h3 className="text-xl font-bold mb-6">Chennai AI Expertise</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Automotive AI Solutions</div>
                        <div className="text-gray-600 text-sm">Specialized AI for Chennai's automotive manufacturing and engineering industries</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">IT Corridor Innovation</div>
                        <div className="text-gray-600 text-sm">Advanced AI solutions for Chennai's thriving IT and software development sector</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Port & Logistics AI</div>
                        <div className="text-gray-600 text-sm">Smart logistics and port automation solutions for Chennai's maritime commerce</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Healthcare Innovation</div>
                        <div className="text-gray-600 text-sm">Medical AI and healthcare technology solutions for Chennai's growing health sector</div>
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
                What Chennai Businesses Say About Our <strong>AI Services</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Testimonials from clients across Chennai who chose Metic.ai as their <strong>AI Company In Chennai</strong>
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
                  "Metic.ai revolutionized our Chennai automotive manufacturing with AI-driven quality control that reduced defects by 75%. Best AI Company In Chennai we've partnered with!"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                  <div className="text-sm text-gray-600">Plant Manager, AutoCorp Chennai</div>
                  <div className="text-sm text-primary-orange">Chennai IT Corridor, TN</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Outstanding AI development services! Their machine learning solutions helped our Chennai IT company improve client delivery efficiency by 300%. Highly recommend!"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-600">CTO, TechSoft Chennai</div>
                  <div className="text-sm text-primary-orange">OMR, Chennai</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Metic.ai's AI solutions transformed our Chennai port logistics operations. Their expertise in automation and predictive analytics is unmatched in Tamil Nadu."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Suresh Reddy</div>
                  <div className="text-sm text-gray-600">Operations Director, LogiCorp Chennai</div>
                  <div className="text-sm text-primary-orange">Anna Nagar, Chennai</div>
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
              Ready to Partner with Chennai's Leading <strong>Artificial Intelligence Company</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ Chennai businesses that chose Metic.ai as their <strong>AI Company In Chennai</strong>. Get your free AI consultation and discover how our artificial intelligence solutions can transform your business with 60% cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Chennai
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Chennai AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted <strong>AI Firm In Chennai</strong> - Serving Major Areas</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>IT Corridor</span>
                <span>•</span>
                <span>OMR</span>
                <span>•</span>
                <span>Anna Nagar</span>
                <span>•</span>
                <span>T. Nagar</span>
                <span>•</span>
                <span>Adyar</span>
                <span>•</span>
                <span>Velachery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

