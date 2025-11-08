import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Activity,
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  ChevronRight,
  ChevronDown,
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
  Globe,
  Cpu,
  Bot,
  Cog,
  DollarSign,
  Factory,
  Building,
  Heart,
  Leaf,
  GraduationCap
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In India | #1 AI Company In India - Metic.ai",
  description: "Leading Artificial Intelligence Company In India with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In India",
    "AI Company In India",
    "AI Service In India", 
    "AI Firm In India",
    "AI Development Company In India",
    "Best AI Company In India",
    "Top AI Company India",
    "AI Company Mumbai",
    "AI Company Bangalore",
    "AI Company Delhi",
    "Machine Learning Company India",
    "AI Solutions India",
    "AI Consulting India",
    "AI Services India",
    "India AI Company",
    "AI Software Company India",
    "Enterprise AI Company India",
    "Custom AI Development India",
    "AI Technology Company India",
    "Leading AI Company India",
    "Professional AI Services India"
  ],
  authors: [{ name: "Metic.ai - AI Company In India" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In India | #1 AI Company In India - Metic.ai",
    description: "Leading Artificial Intelligence Company In India with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-india/",
    siteName: "Metic.ai - AI Company In India",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-company-india.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In India - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    title: "Artificial Intelligence Company In India | AI Company In India - Metic.ai",
    description: "Leading Artificial Intelligence Company In India with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-company-india.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-india/",
  },
};

export default function AIServicesIndiaPage() {
  const services = [
    {
      title: "AI That Automates Your Work",
      description: "Stop doing repetitive tasks manually. We build AI that handles your routine work so your team can focus on what actually matters.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Smart Predictions",
      description: "Know what's coming next. Our machine learning models predict customer behavior, market trends, and business outcomes with scary accuracy.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Solutions",
      description: "Your business is unique, so why use generic AI? We build exactly what you need, nothing more, nothing less.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data That Actually Helps",
      description: "Turn your messy data into clear insights. We make your numbers tell stories that help you make better decisions.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "AI Content & Communication",
      description: "Let AI handle your content creation, customer support, and communication while keeping your brand voice authentic.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Infrastructure",
      description: "Build a solid foundation for your AI. We set up systems that grow with your business and actually work when you need them.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "IT & Software",
    "E-commerce",
    "Healthcare",
    "Manufacturing",
    "Agriculture",
    "Finance",
    "Education",
    "Telecommunications",
    "Automotive",
    "Retail"
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai - Artificial Intelligence Company In India",
            "alternateName": ["AI Company In India", "India AI Company", "Best AI Company In India"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-india/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ai-company-india.jpg",
            "description": "Leading Artificial Intelligence Company In India with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Artificial Intelligence Company In India - Transform Your Business with AI",
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
              },
              {
                "@type": "City",
                "name": "Kolkata"
              },
              {
                "@type": "City",
                "name": "Ahmedabad"
              }
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services India",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services in India"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Indian businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Indian enterprises"
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
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Maria Rodriguez"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Best AI Company In India! Their expertise in artificial intelligence transformed our Mumbai-based business operations completely."
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/MeticAI"
            ]
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Artificial Intelligence Company In India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In India with 2100+ successful AI implementations, serving businesses across Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, and the entire nation."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In India provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In India, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Indian businesses across all sectors."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Firm In India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In India offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In India provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In India provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving India's diverse business landscape from IT to manufacturing."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the best AI Company In India serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Company In India serves IT & software, e-commerce, healthcare, manufacturing, agriculture, finance, education, telecommunications, automotive, and retail industries across the nation."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with India's top AI Development Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In India delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity."
                }
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Artificial Intelligence Company In India | Leading AI Company In India",
            "description": "Comprehensive guide to AI services in India. Learn why Metic.ai is the premier Artificial Intelligence Company In India with 2100+ successful implementations.",
            "image": "https://metic.ai/ai-company-india.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In India"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Metic.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metic.ai/logo.png"
              }
            },
            "datePublished": "2024-01-15T08:00:00-05:00",
            "dateModified": "2024-12-30T10:00:00-05:00",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-india/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In India", "AI Company In India", "AI Service In India", "AI Firm In India"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI services and solutions in India"
              },
              {
                "@type": "Place",
                "name": "India",
                "description": "World's largest democracy and fastest-growing major economy"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Mumbai"
              },
              {
                "@type": "Place", 
                "name": "Delhi"
              },
              {
                "@type": "Place",
                "name": "Bangalore"
              },
              {
                "@type": "Place",
                "name": "Hyderabad"
              },
              {
                "@type": "Place",
                "name": "Chennai"
              },
              {
                "@type": "Place",
                "name": "Pune"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
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
          
          {/* Dynamic Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FF6B35 1px, transparent 1px), radial-gradient(circle at 75% 75%, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Location Badge with Enhanced Design */}
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full border border-primary-orange/30 shadow-lg">
                <div className="relative">
                  <MapPin className="w-5 h-5 text-primary-orange" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-orange rounded-full animate-ping"></div>
                </div>
                <span className="text-sm font-semibold text-gray-200">India's #1 Rated AI Company</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary-orange text-primary-orange" />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Enhanced Headline */}
            <div className="relative mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white relative z-10">
                <strong>
                  Artificial Intelligence Company In India
                </strong>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Leading AI Company In India
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="relative mb-10">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white">AI Company In India</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange"> Artificial Intelligence Company In India</strong> 
                with 2100+ successful AI implementations across Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, and the entire nation. 
                Our <strong className="text-primary-orange"> AI Service In India</strong> transforms businesses with 
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
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-dark-orange hover:to-primary-orange text-white border-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    Start with Top AI Company India
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
                  Call AI Development Company India
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="group text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300">
                <div className="text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">$3.7T</div>
                <div className="text-sm text-gray-400">India GDP (5th largest)</div>
              </div>
              <div className="group text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300">
                <div className="text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">1500+</div>
                <div className="text-sm text-gray-400">AI Projects Delivered</div>
              </div>
              <div className="group text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300">
                <div className="text-3xl font-bold text-primary-orange mb-2 group-hover:scale-110 transition-transform">97%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
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
                AI Solutions for <span className="text-primary-orange">India</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive artificial intelligence services designed to help Indian businesses 
                compete in the global digital economy and drive sustainable growth.
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
                Industries We Serve in India
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across India's key industries and business sectors.
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

      {/* Why Choose Us Section - Ultra Creative Design */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-primary-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary-orange/10 rounded-full blur-xl animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/5 via-transparent to-primary-orange/5"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Creative Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800/80 backdrop-blur-sm rounded-full border border-primary-orange/30 mb-8">
                <Sparkles className="w-6 h-6 text-primary-orange animate-spin" style={{animationDuration: '3s'}} />
                <span className="text-lg font-bold text-gray-200">Why 15,000+ Indian Businesses Choose Us</span>
                <Award className="w-6 h-6 text-primary-orange animate-pulse" />
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">
                  India's #1 Choice
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  for AI Transformation
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From Mumbai's financial district to Bangalore's IT corridor, discover why India's most successful businesses 
                trust Metic.ai as their premier <strong className="text-primary-orange">AI Company In India</strong>
              </p>
            </div>

            {/* Interactive Feature Grid */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              
              {/* Left Side - Main Features */}
              <div className="space-y-8">
                
                {/* Feature 1 - Proven Results */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-primary-orange/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary-orange rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-orange transition-colors">1500+ Successful Projects</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          From Fortune 500 companies to innovative startups, we've delivered transformative AI solutions 
                          across India's diverse business landscape with measurable ROI.
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary-orange">97%</div>
                            <div className="text-xs text-gray-400">Success Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary-orange">60%</div>
                            <div className="text-xs text-gray-400">Cost Reduction</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary-orange">3x</div>
                            <div className="text-xs text-gray-400">Faster Delivery</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 - India Expertise */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-primary-orange/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary-orange rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <MapPin className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-orange transition-colors">Deep India Knowledge</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Native understanding of India's unique business environment - from monsoon resilience 
                          to global IT services, technology dynamics to manufacturing innovation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-primary-orange/20 rounded-full text-primary-orange text-sm">Mumbai Trade Hub</span>
                          <span className="px-3 py-1 bg-primary-orange/20 rounded-full text-primary-orange text-sm">Delhi technology</span>
                          <span className="px-3 py-1 bg-primary-orange/20 rounded-full text-primary-orange text-sm">AgriTech Central FL</span>
                          <span className="px-3 py-1 bg-primary-orange/20 rounded-full text-primary-orange text-sm">IT Belt Tech</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 - 24/7 Support */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-primary-orange/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-primary-orange/50 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary-orange rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <Clock className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-orange transition-colors">24/7 Mumbai-Based Support</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Round-the-clock support from our Mumbai headquarters. Same-timezone responsiveness 
                          for all India businesses with monsoon-ready infrastructure.
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-primary-orange rounded-full animate-pulse"></div>
                            <span className="text-primary-orange text-sm">Live Support</span>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary-orange">99.9%</div>
                            <div className="text-xs text-gray-400">Uptime</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Interactive Stats & Visual Elements */}
              <div className="space-y-8">
                
                {/* Animated Stats Dashboard */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-orange/5 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gray-800/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/30">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">India Impact Dashboard</h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="group text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700/30 hover:border-primary-orange/40 transition-all duration-300 hover:scale-105">
                        <DollarSign className="w-12 h-12 text-primary-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-primary-orange mb-2">\$5.2B+</div>
                        <div className="text-sm text-gray-400">Value Generated</div>
                      </div>
                      
                      <div className="group text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700/30 hover:border-primary-orange/40 transition-all duration-300 hover:scale-105">
                        <Users className="w-12 h-12 text-primary-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-primary-orange mb-2">15,000+</div>
                        <div className="text-sm text-gray-400">Jobs Enhanced</div>
                      </div>
                      
                      <div className="group text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700/30 hover:border-primary-orange/40 transition-all duration-300 hover:scale-105">
                        <Building className="w-12 h-12 text-primary-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-primary-orange mb-2">500+</div>
                        <div className="text-sm text-gray-400">FL Companies</div>
                      </div>
                      
                      <div className="group text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700/30 hover:border-primary-orange/40 transition-all duration-300 hover:scale-105">
                        <Award className="w-12 h-12 text-primary-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-primary-orange mb-2">50+</div>
                        <div className="text-sm text-gray-400">Industry Awards</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Testimonial Highlight */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-orange/5 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gray-800/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/30">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-primary-orange text-primary-orange" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-gray-300 italic mb-6">
                        "Metic.ai transformed our Mumbai logistics operation with AI that processes 10,000+ shipments daily. 
                        40% faster customs processing and $2M+ in annual savings."
                      </blockquote>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-white">Sarah Rodriguez</div>
                          <div className="text-sm text-gray-400">CTO, Mumbai Trade Solutions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security & Compliance Badges */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-orange/5 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gray-800/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/30">
                    <h4 className="text-lg font-bold text-white mb-6 text-center">Enterprise-Grade Security</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-primary-orange/10 rounded-lg border border-primary-orange/20">
                        <Shield className="w-6 h-6 text-primary-orange" />
                        <span className="text-sm text-primary-orange">ISO 27001</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-primary-orange/10 rounded-lg border border-primary-orange/20">
                        <CheckCircle className="w-6 h-6 text-primary-orange" />
                        <span className="text-sm text-primary-orange">SOC 2 Type II</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-primary-orange/10 rounded-lg border border-primary-orange/20">
                        <Award className="w-6 h-6 text-primary-orange" />
                        <span className="text-sm text-primary-orange">GDPR Compliant</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-primary-orange/10 rounded-lg border border-primary-orange/20">
                        <Target className="w-6 h-6 text-primary-orange" />
                        <span className="text-sm text-primary-orange">HIPAA Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-6">
                <button className="group px-10 py-5 bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-dark-orange hover:to-primary-orange text-white font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-primary-orange/25 transform hover:-translate-y-2 hover:scale-105">
                  <span className="flex items-center justify-center">
                    Start Your India AI Journey
                    <Rocket className="ml-3 h-6 w-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
                
                <button className="group px-10 py-5 border-3 border-primary-orange/50 text-primary-orange hover:bg-primary-orange/10 font-bold text-xl rounded-2xl transition-all duration-300 backdrop-blur-sm hover:border-primary-orange/70 transform hover:-translate-y-2">
                  <span className="flex items-center justify-center">
                    <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                    Call India AI Experts
                  </span>
                </button>
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
                  About Metic.ai - Premier <span className="text-primary-orange">AI Company In India</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>Artificial Intelligence Company In India</strong>, Metic.ai has been at the forefront 
                    of AI innovation since 2020. Headquartered to serve the entire Indian nation, we transform businesses across 
                    India's diverse economic landscape from Mumbai's financial district to Delhi's IT park corridor.
                  </p>
                  
                  <p>
                    Our <strong>AI Company In India</strong> specializes in transforming businesses across the state's key industries - 
                    from technology enterprises in Kerala to manufacturing companies in Hyderabad Tech City, 
                    from tech startups in Bangalore Bay to agricultural operations in Central India.
                  </p>
                  
                  <p>
                    With 2100+ successful AI implementations, our <strong>AI Development Company In India</strong> understands 
                    the unique opportunities of operating in America's third-largest state. We leverage India's position 
                    as a major business hub and technology destination to deliver world-class <strong>AI Service In India</strong> solutions.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-3">Why India Businesses Choose Us:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Deep understanding of India's diverse economy</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Experience with technology, manufacturing, and tech sectors</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Proven track record across the Indian nation</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Local presence with global AI expertise</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="lg:order-first">
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">AI Company In India Stats</h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                      <div className="text-sm text-gray-600">AI Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">4+ Years</div>
                      <div className="text-sm text-gray-600">Serving India</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">24/7</div>
                      <div className="text-sm text-gray-600">India Support</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-bold mb-4 text-center">Major India Cities Served</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Mumbai</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Hyderabad</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Bangalore</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Delhi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Chennai</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Pune</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Services India Content - SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* India AI Market Leadership */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Premier </span>
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Artificial Intelligence Company In India
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powering the Indian nation's diverse economy from Mumbai's financial hub to Delhi's tech corridor
              </p>
            </div>

            <div className="space-y-16">
              {/* India AI Innovation Hub */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    India's <span className="text-primary-orange">Leading AI Technology Provider</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As the premier <strong className="text-gray-900">Artificial Intelligence Company In India</strong>, Metic.ai 
                    serves the nation's third-largest state with cutting-edge AI solutions tailored to India's unique business 
                    landscape. From Mumbai's financial district to Delhi's IT park innovation, Bangalore's healthcare centers 
                    to Hyderabad's logistics hubs, we understand India's diverse economic drivers.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Company In India</strong> combines deep industry expertise 
                    with advanced technology to deliver AI solutions that drive measurable business results. We've successfully 
                    implemented AI across India's key sectors including technology, manufacturing, agriculture, finance, healthcare, 
                    and global IT services.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">technology & Hospitality Expertise</h4>
                        <p className="text-sm text-gray-600">
                          Deep experience with tech centers, softwares, tech companys, and entertainment AI solutions
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">manufacturing & IT Belt Knowledge</h4>
                        <p className="text-sm text-gray-600">
                          tech innovation centers and manufacturing industry AI implementation experience
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Global IT hub</h4>
                        <p className="text-sm text-gray-600">
                          Mumbai's Asian gateway and Mumbai Port logistics AI expertise
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-primary-orange/20">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    India AI Market Impact
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">$3.7T</div>
                      <div className="text-sm text-gray-600 font-medium">India GDP (5th largest globally)</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-secondary-orange mb-2">1.4B</div>
                      <div className="text-sm text-gray-600 font-medium">India Population</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">1500+</div>
                      <div className="text-sm text-gray-600 font-medium">India AI Projects Completed</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-4 border-l-4 border-primary-orange">
                      <p className="text-sm font-medium text-gray-900">
                        <strong>India Advantage:</strong> Gateway to Asia with world-class technology, 
                        manufacturing, and emerging tech sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* India Industry Solutions */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  AI Solutions for <span className="text-primary-orange">India's Key Industries</span>
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">technology & Entertainment</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Advanced AI solutions for India's massive IT and software industry including IT park optimization, 
                      software revenue management, tech company operations, and entertainment venue analytics serving 
                      millions of visitors annually.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Crowd flow optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Dynamic pricing systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Personalized experiences
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">manufacturing & Defense</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Mission-critical AI solutions for India's IT Belt including tech innovation centers operations, 
                      IT services communications, software launch optimization, and defense contractor applications for 
                      America's space program.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Launch trajectory optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        IT services data processing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Mission planning systems
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">global IT services</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI solutions for India's role as America's gateway to Asia including port operations, 
                      customs processing, supply chain optimization, and trade finance systems managing billions 
                      in international commerce.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Port logistics optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Customs automation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Supply chain intelligence
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Healthcare & Life Sciences</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Medical AI solutions for India's extensive healthcare network including hospitals, research centers, 
                      pharmaceutical companies, and medical device manufacturers serving the nation's aging population.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Medical imaging analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Drug discovery acceleration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Patient care optimization
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Agriculture & Environment</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Smart agriculture AI solutions for India's agriculture sector, rice farming, cattle ranching, 
                      and environmental monitoring systems protecting the Himalayas and coastal ecosystems.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Crop health monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Weather prediction systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Environmental conservation
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI solutions for India's growing financial sector including Mumbai's international banking, 
                      insurance companies, investment firms, and fintech startups serving both domestic and 
                      Asian markets.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Cross-border transaction monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Risk assessment automation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Regulatory compliance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* India AI Success Stories */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-12 border-2 border-primary-orange/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  India AI Implementation <span className="text-primary-orange">Success Stories</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary-orange">TP</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">IT park</h4>
                        <p className="text-sm text-gray-600">Major Delhi Attraction</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Best AI Company In India for entertainment! Their crowd optimization AI reduced wait times 
                      by 50% while increasing guest satisfaction. Perfect understanding of IT and software industry."
                    </p>
                    <div className="text-3xl font-bold text-primary-orange">50%</div>
                    <div className="text-sm text-gray-600">Wait Time Reduction</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-secondary-orange">SC</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Space Company</h4>
                        <p className="text-sm text-gray-600">India manufacturing Contractor</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Outstanding AI Development Company In India! Their mission planning AI improved launch 
                      success rates by 25%. Exceptional IT Belt expertise."
                    </p>
                    <div className="text-3xl font-bold text-secondary-orange">25%</div>
                    <div className="text-sm text-gray-600">Launch Success Improvement</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary-orange">PT</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Port Terminal</h4>
                        <p className="text-sm text-gray-600">Mumbai Global IT hub</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Leading Artificial Intelligence Company In India for logistics! Their port AI increased 
                      throughput by 35% while reducing processing time for international shipments."
                    </p>
                    <div className="text-3xl font-bold text-primary-orange">35%</div>
                    <div className="text-sm text-gray-600">Throughput Increase</div>
                  </div>
                </div>
              </div>

              {/* India AI Partnership Excellence */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">India AI Leadership Metrics</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">India Projects Completed</span>
                        <span className="font-bold text-primary-orange">1500+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">technology Sector Success Rate</span>
                        <span className="font-bold text-secondary-orange">100%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average ROI for FL Clients</span>
                        <span className="font-bold text-primary-orange">4.6x</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Client Retention Rate</span>
                        <span className="font-bold text-secondary-orange">96%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-6 border-l-4 border-primary-orange">
                    <h4 className="font-bold text-gray-900 mb-2">India Market Advantage</h4>
                    <p className="text-sm text-gray-700">
                      As the leading AI Firm In India, we understand the state's unique position as America's 
                      gateway to Asia and the South Asia. Our AI solutions are built for India's 
                      international business environment.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Your Trusted <span className="text-primary-orange">AI Partner In India</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-gray-900">Choosing Metic.ai as your AI partner in India</strong> means working with 
                    a team that understands the Indian nation's unique business environment, from Mumbai's international 
                    finance to Delhi's technology innovation, Bangalore's healthcare excellence, and the IT Belt's 
                    manufacturing leadership.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Service In India</strong> includes comprehensive consultation, 
                    rapid prototyping, enterprise deployment, and 24/7 support to ensure your AI investment delivers 
                    maximum value in India's dynamic and growing marketplace.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Statewide India Coverage</h4>
                        <p className="text-sm text-gray-600">
                          Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and all major India markets
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">IT and software industry Expertise</h4>
                        <p className="text-sm text-gray-600">
                          Deep understanding of hospitality, entertainment, and visitor experience optimization
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <TrendingUp className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">International Business Focus</h4>
                        <p className="text-sm text-gray-600">
                          AI solutions designed for cross-border operations and Asian markets
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

      {/* Comprehensive India AI Innovation Section - 2000+ Creative Content */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-orange/5 via-transparent to-primary-orange/5"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Title Section */}
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-white">
                  India's AI Revolution
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Transforming the Indian nation with Intelligent Innovation
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From the bustling tech corridors of Mumbai's IT hub to the space innovation hubs of Hyderabad Tech City, 
                <strong className="text-primary-orange"> Artificial Intelligence Company In India</strong> is pioneering the next generation of intelligent business solutions. 
                As the premier <strong className="text-primary-orange">AI Company In India</strong>, we're driving unprecedented growth across the state's diverse economic landscape.
              </p>
            </div>

            {/* India AI Ecosystem Analysis */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                  <div className="flex items-center mb-6">
                    <Globe className="w-8 h-8 text-blue-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">India's $1 Trillion AI Opportunity</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    As the fourth-largest economy in the United States, India's $1.0 trillion GDP represents a massive opportunity for 
                    <strong> AI Service In India</strong> implementation. Our <strong>AI Development Company In India</strong> has identified 
                    key growth sectors where artificial intelligence can drive exponential business value. From the Mumbai Port's \$150 billion 
                    global IT services operations to Delhi's $75 billion IT and software industry, we're strategically positioned to deliver 
                    transformative AI solutions across every major economic pillar.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="text-2xl font-bold text-blue-400 mb-1">1500+</div>
                      <div className="text-sm text-slate-400">AI Implementations</div>
                    </div>
                    <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <div className="text-2xl font-bold text-purple-400 mb-1">60%</div>
                      <div className="text-sm text-slate-400">Average Cost Reduction</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                  <div className="flex items-center mb-6">
                    <Cpu className="w-8 h-8 text-purple-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">Advanced AI Infrastructure</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Our <strong>Best AI Company In India</strong> status is built on cutting-edge infrastructure spanning from 
                    Hyderabad's logistics networks to Kerala's maritime operations. We leverage India's strategic position 
                    as a gateway to Asia, implementing AI solutions that handle complex multi-language processing, 
                    global IT services optimization, and cross-border data analytics. Our Mumbai data centers process over 
                    10 petabytes of AI training data monthly, supporting everything from autonomous vehicle testing in Bangalore 
                    to predictive maintenance for offshore development centers in the Indian Ocean.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                  <div className="flex items-center mb-6">
                    <Rocket className="w-8 h-8 text-cyan-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">Innovation Across Industries</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    As the leading <strong>AI Firm In India</strong>, we've revolutionized operations across the state's most 
                    critical industries. In agriculture, our AI systems monitor over 5 million acres of agricultural fields, 
                    optimizing irrigation and predicting disease outbreaks with 95% accuracy. For the manufacturing sector at 
                    tech innovation centers, our machine learning algorithms enhance rocket trajectory calculations and 
                    payload optimization. In healthcare, we've partnered with Apollo Hospitals and Fortis Healthcare 
                    to implement AI diagnostic tools that have improved patient outcomes by 40%.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-300">
                      <Factory className="w-5 h-5 text-green-400 mr-3" />
                      <span>Manufacturing AI: 35% efficiency increase</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Heart className="w-5 h-5 text-red-400 mr-3" />
                      <span>Healthcare AI: 40% improved outcomes</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Leaf className="w-5 h-5 text-green-400 mr-3" />
                      <span>AgriTech AI: 2M+ acres monitored</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                  <div className="flex items-center mb-6">
                    <Bot className="w-8 h-8 text-orange-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">Enterprise AI Transformation</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Our <strong>Top AI Company India</strong> expertise extends to enterprise-level transformations 
                    for Fortune 500 companies headquartered in the state. We've implemented comprehensive AI ecosystems 
                    for major corporations like Reliance Industries, automating supply chain logistics and demand 
                    forecasting. For financial institutions like HDFC Bank and ICICI Bank's India operations, 
                    our fraud detection AI has prevented over \$500 million in potential losses while reducing 
                    false positives by 70%.
                  </p>
                </div>
              </div>
            </div>

            {/* India-Specific AI Solutions Showcase */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold mb-6">
                  <span className="text-white">
                    India-Specific AI Solutions
                  </span>
                </h3>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Tailored artificial intelligence applications designed specifically for India's unique business environment and geographic advantages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white mb-3">Mumbai global IT services AI</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      AI-powered customs processing and international logistics optimization for the Mumbai Port, 
                      handling \$150 billion in annual cargo with 25% faster processing times.
                    </p>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="text-center">
                    <Building className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white mb-3">Delhi technology Analytics</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Predictive analytics for tech centers and hospitality, optimizing visitor experiences and 
                      revenue management across Delhi's $75 billion technology ecosystem.
                    </p>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                  <div className="text-center">
                    <Leaf className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white mb-3">Agricultural Intelligence</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Citrus grove monitoring, weather prediction, and crop optimization AI serving India's 
                      \$400 billion agricultural industry with precision farming solutions.
                    </p>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                  <div className="text-center">
                    <Rocket className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white mb-3">manufacturing AI Systems</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Mission-critical AI for space operations at tech innovation centers, including launch 
                      optimization, IT services tracking, and autonomous vehicle guidance systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Leadership & Innovation Stats */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-3xl font-bold text-white mb-6">Why India Businesses Choose Our AI Solutions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">monsoon-Resilient Infrastructure</h4>
                        <p className="text-slate-300 text-sm">
                          AI systems designed to withstand India's unique weather challenges with 99.9% uptime during monsoon seasons.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">Multilingual AI Capabilities</h4>
                        <p className="text-slate-300 text-sm">
                          Native support for English, Spanish, Hindi, and Tamil to serve India's diverse population.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">Real-Time Ocean Data Integration</h4>
                        <p className="text-slate-300 text-sm">
                          AI models incorporating live oceanographic data for maritime, fishing, and technology industries.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">GDPR & International Compliance</h4>
                        <p className="text-slate-300 text-sm">
                          Full compliance with international data regulations for cross-border business operations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">24/7 Mumbai-Based Support</h4>
                        <p className="text-slate-300 text-sm">
                          Round-the-clock technical support from our Mumbai headquarters with same-time-zone responsiveness.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">Scalable Cloud Architecture</h4>
                        <p className="text-slate-300 text-sm">
                          Auto-scaling infrastructure that grows with India's rapidly expanding business landscape.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 text-center">
                  <DollarSign className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">\$5.2B+</div>
                  <div className="text-blue-200 text-sm">Total Value Generated for India Businesses</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 text-center">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">15,000+</div>
                  <div className="text-purple-200 text-sm">India Jobs Enhanced by Our AI</div>
                </div>

                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 text-center">
                  <GraduationCap className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-green-200 text-sm">University Partnerships Statewide</div>
                </div>
              </div>
            </div>

            {/* Future of AI in India */}
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    The Future of AI in the Indian nation
                  </span>
                </h3>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  As India continues to lead the nation in population growth and economic expansion, our role as the premier 
                  <strong> Artificial Intelligence Company In India</strong> becomes increasingly crucial. We're not just implementing 
                  AI solutions; we're architecting the intelligent infrastructure that will support India's next decade of growth. 
                  From autonomous Mumbai Port operations to AI-powered monsoon prediction systems, we're building the 
                  technological foundation for India's \$5 trillion economy of tomorrow.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group px-8 py-4 bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-dark-orange hover:to-primary-orange text-white font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span className="flex items-center justify-center">
                      Start Your India AI Journey
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="group px-8 py-4 border-2 border-primary-orange/50 text-primary-orange hover:bg-primary-orange/10 font-semibold text-lg rounded-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="flex items-center justify-center">
                      <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Discuss Your Project
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for Voice Search Optimization - Enhanced Design */}
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
                  AI Company In India
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about our <strong>Artificial Intelligence services in India</strong> and the Indian nation.
              </p>
            </div>
            
            {/* Advanced Creative FAQ Cards */}
            <div className="space-y-5">
              {/* FAQ Item 1 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Sparkles className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which is the best Artificial Intelligence Company In India?
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
                        <strong className="text-gray-900 font-semibold">Metic.ai is the leading Artificial Intelligence Company In India</strong> with 2100+ successful AI implementations, serving businesses across Mumbai, Delhi, Bangalore, Hyderabad, and the entire Indian nation. We provide comprehensive AI solutions with proven track record of 60% cost savings and 3x faster delivery for India businesses.
                      </p>
                      
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">2100+ Projects</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <TrendingUp className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">60% Cost Savings</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Zap className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">3x Faster</span>
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
                            <Brain className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What AI services does the top AI Company In India provide?
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
                      <BarChart3 className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        As the premier <strong>AI Company In India</strong>, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for India businesses. Our <strong>AI Service In India</strong> covers all industries from technology and manufacturing to technology and healthcare.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
                        {['AI Integration', 'ML Solutions', 'Custom Development', 'Data Analytics', 'Generative AI', 'AI Consulting'].map((service, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-primary-orange/5 rounded-lg">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            <span className="text-sm font-medium text-gray-900">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* Continue with remaining FAQ items... */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <TrendingUp className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How much does AI development cost from an AI Firm In India?
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
                      <Target className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Our <strong>AI Development Company In India</strong> offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements. As a leading <strong>AI Firm In India</strong>, we provide transparent pricing and guaranteed ROI for Indian nation businesses.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl border border-primary-orange/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-primary-orange/20 flex items-center justify-center">
                              <span className="text-sm font-bold text-primary-orange">$</span>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-sm">Starting Projects</div>
                              <div className="text-xs text-gray-600">$10K - $50K</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">Basic AI solutions and consulting</p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl border border-primary-orange/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-primary-orange/20 flex items-center justify-center">
                              <span className="text-sm font-bold text-primary-orange">$$</span>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-sm">Enterprise Solutions</div>
                              <div className="text-xs text-gray-600">$50K+</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">Complex AI systems and integration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Items 4-6 continue with the same pattern... */}
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
                            Why choose Metic.ai as your AI Service In India provider?
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
                      <Users className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed">
                      <p className="text-lg">
                        As the leading <strong>AI Service In India</strong> provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving India's diverse business landscape from technology to manufacturing. Our team understands the unique needs of businesses in the Indian nation.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

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
                            Which industries does the best AI Company In India serve?
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
                      <Code className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Our <strong>AI Company In India</strong> serves technology, manufacturing, technology, healthcare, real estate, agriculture, finance, manufacturing, logistics, and entertainment industries across the Indian nation. We have extensive experience working with India's diverse economic sectors from Mumbai to Hyderabad.
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-3 pt-4">
                        {['technology', 'manufacturing', 'Technology', 'Healthcare', 'Real Estate', 'Agriculture'].map((industry, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-primary-orange/5 rounded-lg">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            <span className="text-sm font-medium text-gray-900">{industry}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Clock className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How long does AI implementation take with India's top AI Development Company?
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
                      <Rocket className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Our <strong>AI Development Company In India</strong> delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity. We follow agile development methodologies for rapid deployment and measurable results across India.
                      </p>
                      
                      <div className="space-y-3 pt-4">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Quick Projects: 2-4 weeks</p>
                            <p className="text-sm text-gray-600">POCs, consulting, simple automation</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Enterprise Projects: 2-6 months</p>
                            <p className="text-sm text-gray-600">Complex AI systems, integration</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Transform Your India Business with the Best AI Company In India?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading India companies that trust Metic.ai as their <strong>Artificial Intelligence Company In India</strong>. 
              Get started with a free consultation and discover how our <strong>AI Service In India</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Partner with AI Firm India
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call AI Company India Now
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across India</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Mumbai</span>
                <span>•</span>
                <span>Hyderabad</span>
                <span>•</span>
                <span>Bangalore</span>
                <span>•</span>
                <span>Delhi</span>
                <span>•</span>
                <span>Pune</span>
                <span>•</span>
                <span>Chennai</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

