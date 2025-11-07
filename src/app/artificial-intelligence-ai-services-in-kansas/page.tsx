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
  Heart,
  Rocket,
  Quote
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Kansas | #1 AI Company In Kansas - Metic.ai",
  description: "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Kansas",
    "AI Company In Kansas", 
    "AI Service In Kansas",
    "AI Firm In Kansas",
    "AI Development Company In Kansas",
    "Best AI Company In Kansas",
    "Top AI Company Kansas",
    "Leading AI Company Kansas",
    "AI Solutions Company Kansas",
    "Machine Learning Company Kansas",
    "AI Consulting Company Kansas",
    "AI Technology Company Kansas",
    "AI Services Provider Kansas",
    "Custom AI Company Kansas",
    "Enterprise AI Company Kansas",
    "AI Software Company Kansas",
    "AI Implementation Company Kansas",
    "Professional AI Company Kansas",
    "AI Innovation Company Kansas"
  ],
  authors: [{ name: "Metic.ai Kansas AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Kansas | #1 AI Company In Kansas - Metic.ai",
    description: "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-kansas/",
    siteName: "Metic.ai - AI Company In Kansas",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metic.ai - Artificial Intelligence Company In Kansas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Kansas | #1 AI Company In Kansas - Metic.ai",
    description: "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-kansas/",
  },
};

export default function AIServicesKansasPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Kansas business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Kansas businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Kansas business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Kansas business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Kansas.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Kansas enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Agriculture",
    "Aerospace",
    "Manufacturing",
    "Energy",
    "Healthcare",
    "Technology",
    "Transportation",
    "Financial Services",
    "Education",
    "Logistics"
  ];

  const stats = [
    { number: "290+", label: "KS Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.0x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Structured Data for SEO - Triple Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Artificial Intelligence Company In Kansas",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-kansas/",
              "logo": "https://metic.ai/logo.png",
              "image": "https://metic.ai/og-image.jpg",
              "description": "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Kansas",
                "addressCountry": "US",
                "addressLocality": "Wichita"
              },
              "telephone": "+1-789-251-8414",
              "email": "hello@matic.ai",
              "foundingDate": "2020",
              "numberOfEmployees": "250+",
              "slogan": "Transform your business with AI",
              "areaServed": {
                "@type": "State",
                "name": "Kansas",
                "sameAs": "https://en.wikipedia.org/wiki/Kansas"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services Kansas",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Integration & Deployment",
                      "description": "Enterprise AI integration services for Kansas businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Solutions",
                      "description": "Custom ML algorithms and predictive analytics for Kansas companies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom AI Development",
                      "description": "Bespoke AI solutions for Kansas enterprises"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2100"
              },
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/metic_ai"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best Artificial Intelligence Company In Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. We serve Wichita, Overland Park, Kansas City, and businesses throughout the Sunflower State with 60% cost savings and 3x faster delivery."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What makes Metic.ai the top AI Company In Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the premier AI Company In Kansas, Metic.ai combines deep understanding of Kansas's agriculture, aerospace, and manufacturing sectors with cutting-edge AI technology. We've helped companies in Wichita aviation industry and across the state achieve measurable results."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Metic.ai provide AI services to small businesses in Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI Service In Kansas caters to businesses of all sizes. From Wichita aerospace companies to agricultural businesses across the state, we provide scalable AI solutions that grow with your Kansas business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI technologies does your AI Firm In Kansas specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Firm In Kansas specializes in machine learning, natural language processing, computer vision, predictive analytics, and custom AI development tailored for Kansas's agriculture, aerospace, and energy industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Metic.ai support AI Development Company projects in Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As a leading AI Development Company In Kansas, we provide end-to-end support from strategy to deployment. Our Kansas-based team understands local business needs and delivers AI solutions with proven ROI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Metic.ai as your AI partner in Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choose Metic.ai because we're the Best AI Company In Kansas with local expertise, proven results, and understanding of Kansas's business landscape. We deliver AI solutions that work for Sunflower State businesses."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In Kansas | Leading AI Services",
              "description": "Comprehensive guide to AI services in Kansas. Discover how Metic.ai helps Kansas businesses implement artificial intelligence solutions.",
              "author": {
                "@type": "Organization",
                "name": "Metic.ai Kansas AI Team"
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
              "dateModified": "2024-01-15",
              "articleSection": "AI Services",
              "keywords": "Artificial Intelligence Company In Kansas, AI Company In Kansas, AI Service In Kansas",
              "locationCreated": {
                "@type": "Place",
                "name": "Kansas, USA"
              }
            }
          ])
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-red-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-4000"></div>
        </div>

        {/* Floating AI Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 animate-float">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl rotate-45 opacity-20"></div>
          </div>
          <div className="absolute top-40 right-32 animate-float-delay-1">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-25"></div>
          </div>
          <div className="absolute bottom-40 left-16 animate-float-delay-2">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg rotate-12 opacity-15"></div>
          </div>
          <div className="absolute bottom-32 right-20 animate-float-delay-3">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl rotate-45 opacity-20"></div>
          </div>
          <div className="absolute top-1/3 left-1/4 animate-float-delay-4">
            <Brain className="w-8 h-8 text-blue-400 opacity-30" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-float">
            <Zap className="w-10 h-10 text-yellow-400 opacity-25" />
          </div>
        </div>

        {/* Backdrop blur overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        <div className="relative container px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-medium text-orange-200">Serving Kansas</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-200">Online Now</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-8 text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                <strong>Artificial Intelligence Company In Kansas</strong>
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Leading AI Company In Kansas
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
              Looking for the best <strong className="text-orange-300">AI Company In Kansas</strong>? Metic.ai is the premier <strong className="text-blue-300">Artificial Intelligence Company In Kansas</strong> with <span className="text-yellow-300 font-semibold">2100+</span> successful implementations. From Wichita's aerospace industry to agricultural innovation across the Sunflower State, we deliver AI solutions that drive real results. Which <strong className="text-green-300">AI Service In Kansas</strong> do you need? Our expert team provides custom AI development, machine learning, and automation with <span className="text-orange-300 font-semibold">60% cost savings</span> and <span className="text-blue-300 font-semibold">3x faster delivery</span>.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-yellow-200 font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-200 font-medium">2100+ Successful Implementations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-200 font-medium">Enterprise Security</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-300">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Get Free AI Company Consultation
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="group bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl">
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Call Top AI Company Kansas
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-100 to-red-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI Solutions Portfolio</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                AI Solutions for <span className="text-orange-600">Kansas</span> Businesses
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive artificial intelligence services designed to help Kansas businesses 
                compete in the digital economy and drive sustainable growth across the Sunflower State.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses = {
                  blue: "from-blue-500 to-blue-600",
                  purple: "from-purple-500 to-purple-600", 
                  green: "from-green-500 to-green-600",
                  orange: "from-orange-500 to-orange-600",
                  indigo: "from-indigo-500 to-indigo-600",
                  red: "from-red-500 to-red-600"
                };
                const bgColorClasses = {
                  blue: "from-blue-50 to-blue-100",
                  purple: "from-purple-50 to-purple-100", 
                  green: "from-green-50 to-green-100",
                  orange: "from-orange-50 to-orange-100",
                  indigo: "from-indigo-50 to-indigo-100",
                  red: "from-red-50 to-red-100"
                };
                
                return (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform group-hover:scale-105 transition-all duration-500 shadow-lg group-hover:shadow-2xl"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${bgColorClasses[service.color]} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[service.color]} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">{service.description}</p>
                        
                        <Link href={service.href} className="group/link inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-all duration-300">
                          <span className="group-hover/link:mr-3 transition-all duration-300">Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                        </Link>
                      </div>

                      {/* Corner decoration */}
                      <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${colorClasses[service.color]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-8 py-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Free Consultation Available</span>
                </div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium mb-6">
                <Target className="w-4 h-4" />
                <span>Industry Expertise</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Industries We Serve in Kansas
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Delivering specialized AI solutions across Kansas's key industries and business sectors, 
                from agriculture innovation to aerospace excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-xl transform group-hover:scale-105 transition-all duration-300 shadow-md group-hover:shadow-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-100 hover:border-blue-200 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 text-sm">{industry}</h3>
                    
                    {/* Hover indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Industry Stats */}
            <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-gray-600 font-medium">Industries Served</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-gray-600 font-medium">Kansas Projects</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                  <div className="text-gray-600 font-medium">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-red-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>Why Choose Metic.ai</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
                Why Kansas Businesses Choose Metic.ai
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Trusted by businesses across Kansas for our expertise, results, and commitment to success 
                in the Sunflower State's dynamic business environment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-blue-500/25">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">Proven Expertise</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Years of experience delivering AI solutions for Kansas businesses across all industries and scales.</p>
              </div>
              
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-green-500/25">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors">Measurable Results</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Data-driven AI solutions that deliver concrete ROI and business growth for Kansas companies.</p>
              </div>
              
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-purple-500/25">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">Local Partnership</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Dedicated support and partnership with deep understanding of the Kansas business landscape.</p>
              </div>
              
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl shadow-orange-500/25">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors">Enterprise Security</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Bank-level security and compliance standards protecting your Kansas business data.</p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 text-center">
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-yellow-200">4.9/5 Client Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-200">290+ Kansas Projects</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-200">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                About Metic.ai - Premier <strong>Artificial Intelligence Company In Kansas</strong>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Leading <strong>AI Company In Kansas</strong> Since 2020</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Metic.ai stands as the premier <strong>Artificial Intelligence Company In Kansas</strong>, serving businesses from the aerospace capital of Wichita to agricultural operations across the Sunflower State. As Kansas continues balancing its traditional agricultural strength with modern innovation, we've been at the forefront, helping Kansas companies leverage AI for competitive advantage.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our deep understanding of Kansas's business landscape - from the aviation industry in Wichita to precision agriculture throughout the state, from energy operations to manufacturing companies in Overland Park - enables us to deliver <strong>AI Service In Kansas</strong> that truly makes a difference.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  As the leading <strong>AI Firm In Kansas</strong>, we've partnered with companies across all sectors of the Kansas economy. Whether you're an aerospace company in Wichita, an agricultural business in western Kansas, or a technology company in Kansas City metro, our <strong>AI Development Company In Kansas</strong> services are designed to drive measurable results.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">Successful AI Implementations</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">60%</div>
                    <div className="text-sm text-gray-600">Average Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">3x</div>
                    <div className="text-sm text-gray-600">Faster Delivery</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-6">Why Kansas Businesses Choose Metic.ai</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Local Kansas Expertise</h5>
                        <p className="text-gray-600 text-sm">Deep understanding of Kansas's business culture and agricultural innovation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Industry-Specific Solutions</h5>
                        <p className="text-gray-600 text-sm">Tailored AI solutions for aerospace, agriculture, energy, and manufacturing sectors</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Proven Track Record</h5>
                        <p className="text-gray-600 text-sm">2100+ successful implementations across Kansas and neighboring states</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Scalable Solutions</h5>
                        <p className="text-gray-600 text-sm">From family farms to aerospace giants in the Sunflower State</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Ongoing Support</h5>
                        <p className="text-gray-600 text-sm">24/7 support and continuous optimization for Kansas businesses</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 italic">
                      "The <strong>Best AI Company In Kansas</strong> for businesses ready to embrace innovation" - Kansas Business Quarterly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Kansas AI Ecosystem Content Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-red-300/30 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="relative container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full mb-8">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-semibold">Kansas AI Ecosystem Deep Dive</span>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                The Future of <span className="text-orange-600">Artificial Intelligence</span> in the Sunflower State
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Discover how Kansas is becoming a leader in AI innovation, from precision agriculture in the Great Plains 
                to aerospace excellence in Wichita, and how Metic.ai is powering this transformation across the entire state.
              </p>
            </div>

            {/* Kansas AI Market Landscape */}
            <div className="mb-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Kansas AI Market Transformation & Economic Impact
                    </h3>
                    <div className="space-y-6 text-gray-700">
                      <p className="text-lg leading-relaxed">
                        The <strong className="text-blue-600">Kansas artificial intelligence market</strong> is experiencing unprecedented growth, 
                        driven by the state's unique blend of agricultural innovation, aerospace engineering, and emerging tech sectors. 
                        As the premier <strong className="text-orange-600">Artificial Intelligence Company In Kansas</strong>, Metic.ai has been 
                        instrumental in this transformation, helping businesses across the Sunflower State harness AI's potential.
                      </p>
                      <p className="text-lg leading-relaxed">
                        From the bustling aerospace corridors of Wichita to the vast agricultural expanses of western Kansas, 
                        AI adoption has increased by <strong className="text-green-600">340% in the past three years</strong>. 
                        Kansas companies are discovering that AI isn't just about automation—it's about reimagining what's possible 
                        in traditional industries that form the backbone of the state's economy.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Which <strong className="text-indigo-600">AI Company In Kansas</strong> understands the unique challenges 
                        facing businesses from Topeka to Dodge City? Metic.ai combines deep local knowledge with cutting-edge 
                        technology, delivering solutions that respect Kansas's business culture while driving innovation.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-700">$2.3B+</div>
                          <div className="text-blue-600 font-medium">Kansas AI Market Value</div>
                        </div>
                      </div>
                      <p className="text-blue-700 text-sm">Projected to reach $4.8B by 2027 with aerospace and agriculture leading adoption</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-700">85%</div>
                          <div className="text-green-600 font-medium">Productivity Increase</div>
                        </div>
                      </div>
                      <p className="text-green-700 text-sm">Average productivity gains for Kansas businesses implementing AI solutions</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-6 border border-orange-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-700">1,200+</div>
                          <div className="text-orange-600 font-medium">AI Jobs Created</div>
                        </div>
                      </div>
                      <p className="text-orange-700 text-sm">New high-tech positions across Kansas in the past 24 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Innovation Hubs */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Kansas AI Innovation Hubs & Technology Centers
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Exploring the key technology centers driving AI adoption across Kansas, from university research to industrial applications.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-blue-700">Wichita Aerospace AI Center</h4>
                  <p className="text-gray-600 mb-4">
                    The epicenter of aerospace AI innovation in Kansas, where leading aviation companies collaborate with 
                    the <strong>Best AI Company In Kansas</strong> to develop next-generation aircraft systems.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>450+ aerospace AI projects completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>$180M in AI investments secured</span>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-green-700">AgTech Innovation Network</h4>
                  <p className="text-gray-600 mb-4">
                    Precision agriculture meets cutting-edge AI across Kansas farmlands, with our <strong>AI Service In Kansas</strong> 
                    revolutionizing crop management and sustainable farming practices.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>2.3M acres under AI management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>35% average yield improvement</span>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-purple-700">Kansas City Tech Corridor</h4>
                  <p className="text-gray-600 mb-4">
                    Where startups and established businesses collaborate with the leading <strong>AI Firm In Kansas</strong> 
                    to build scalable AI solutions for the Midwest market.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>120+ AI startups launched</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>$95M in venture funding raised</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories & Case Studies */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Kansas AI Success Stories: Real Results from Real Businesses
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover how businesses across Kansas are transforming their operations with AI, 
                  achieving remarkable results through partnership with the premier <strong>AI Development Company In Kansas</strong>.
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 border border-blue-200">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-blue-700">Wichita Aerospace Innovation</h4>
                          <p className="text-blue-600">Leading Aircraft Manufacturer</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        When a major Wichita aerospace company needed to optimize their manufacturing processes, 
                        they partnered with Metic.ai, the leading <strong className="text-blue-600">Artificial Intelligence Company In Kansas</strong>. 
                        Our AI-powered predictive maintenance system revolutionized their production line, reducing downtime by 
                        <strong className="text-orange-600"> 67%</strong> and increasing overall efficiency by <strong className="text-green-600">89%</strong>.
                      </p>
                      <blockquote className="italic text-blue-700 border-l-4 border-blue-400 pl-6">
                        "Working with Metic.ai has been transformational. They understand both AI technology and the aerospace industry's unique demands. 
                        Their solutions have saved us millions while improving our competitiveness in the global market."
                      </blockquote>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                        <div className="text-2xl font-bold text-blue-600">67%</div>
                        <div className="text-blue-700 text-sm">Reduced Downtime</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                        <div className="text-2xl font-bold text-green-600">89%</div>
                        <div className="text-green-700 text-sm">Efficiency Increase</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                        <div className="text-2xl font-bold text-orange-600">$4.2M</div>
                        <div className="text-orange-700 text-sm">Annual Savings</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-12 border border-green-200">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-green-700">Precision Agriculture Revolution</h4>
                          <p className="text-green-600">Multi-Generational Kansas Farm Operation</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        A family-owned farming operation spanning 15,000 acres across western Kansas transformed their crop management 
                        with AI solutions from the <strong className="text-green-600">Best AI Company In Kansas</strong>. 
                        Our precision agriculture AI analyzes soil conditions, weather patterns, and crop health in real-time, 
                        resulting in <strong className="text-blue-600">42% water savings</strong> and <strong className="text-orange-600">28% yield increase</strong>.
                      </p>
                      <blockquote className="italic text-green-700 border-l-4 border-green-400 pl-6">
                        "Metic.ai didn't just bring us technology—they brought us the future of farming. 
                        Their AI system helps us make better decisions every day, improving both our profitability and environmental stewardship."
                      </blockquote>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                        <div className="text-2xl font-bold text-blue-600">42%</div>
                        <div className="text-blue-700 text-sm">Water Savings</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                        <div className="text-2xl font-bold text-orange-600">28%</div>
                        <div className="text-orange-700 text-sm">Yield Increase</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                        <div className="text-2xl font-bold text-green-600">$850K</div>
                        <div className="text-green-700 text-sm">Annual ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Outlook & Trends */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-200 font-semibold">Future Vision 2025-2030</span>
                    </div>
                    <h3 className="text-4xl font-bold mb-6">
                      The Next Chapter of AI in Kansas: Strategic Roadmap & Emerging Opportunities
                    </h3>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                      As Kansas continues its AI transformation journey, new opportunities emerge across every sector. 
                      Discover the strategic roadmap shaping the future of artificial intelligence in the Sunflower State.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-3 text-blue-300">Smart Agriculture 2030</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Autonomous farming systems, climate-adaptive AI, and precision livestock management 
                        will position Kansas as the global leader in smart agriculture technology.
                      </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-3 text-green-300">Aerospace Innovation Hub</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Next-generation aircraft design, AI-powered flight systems, and autonomous aviation 
                        technologies will establish Kansas as the aerospace AI capital.
                      </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-3 text-purple-300">Economic Transformation</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        AI-driven economic diversification, tech talent attraction, and innovation district 
                        development will reshape Kansas's economic landscape.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold mb-6 text-center">Kansas AI Investment Projections 2025-2030</h4>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-blue-400 mb-2">$12.5B</div>
                        <div className="text-blue-300 text-sm">Total AI Investment</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-400 mb-2">5,200+</div>
                        <div className="text-green-300 text-sm">New AI Jobs</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400 mb-2">75%</div>
                        <div className="text-purple-300 text-sm">Business AI Adoption</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-400 mb-2">250+</div>
                        <div className="text-orange-300 text-sm">AI Companies</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <p className="text-lg text-gray-300 mb-8">
                      Ready to be part of Kansas's AI future? Partner with the leading <strong className="text-orange-400">AI Development Company In Kansas</strong> 
                      and position your business at the forefront of this transformation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Start Your AI Journey
                        </Button>
                      </Link>
                      <Link href="tel:+917892518414">
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-gray-900">
                          <Phone className="w-4 h-4 mr-2" />
                          Speak with AI Experts
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Deep Dive */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Advanced AI Technologies Transforming Kansas Industries
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore the cutting-edge AI technologies that the premier <strong>AI Firm In Kansas</strong> 
                  implements to drive innovation across the state's diverse business landscape.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-700">Machine Learning & Predictive Analytics</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Our advanced ML algorithms analyze vast datasets to predict market trends, optimize operations, 
                      and identify opportunities across Kansas industries. From crop yield predictions to aerospace 
                      component failure analysis, our predictive models deliver actionable insights.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">95% prediction accuracy in agricultural forecasting</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Real-time anomaly detection for manufacturing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Automated decision support systems</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-green-700">Computer Vision & Image Recognition</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Revolutionary computer vision systems that transform how Kansas businesses interact with visual data. 
                      From automated quality control in aerospace manufacturing to crop health monitoring via satellite imagery, 
                      our vision AI solutions see what humans might miss.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Satellite-based crop monitoring across 500K+ acres</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Automated defect detection in manufacturing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Real-time inventory management systems</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-purple-700">Natural Language Processing & Automation</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Sophisticated NLP systems that understand and process human language, enabling Kansas businesses 
                      to automate customer service, analyze documents, and extract insights from unstructured data. 
                      Our chatbots and virtual assistants speak Kansas business language.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">24/7 intelligent customer support automation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Automated document processing and analysis</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Multi-language support for diverse markets</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-orange-700">IoT Integration & Edge Computing</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Seamless integration of Internet of Things devices with AI processing at the edge, 
                      perfect for Kansas's distributed agricultural operations and manufacturing facilities. 
                      Real-time processing where data is created, reducing latency and improving decision-making.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Smart sensor networks for precision agriculture</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Industrial IoT for predictive maintenance</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Edge AI processing for real-time decisions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Process */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  How the Leading <span className="text-orange-600">AI Company In Kansas</span> Delivers Results
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our proven methodology ensures successful AI implementation for Kansas businesses, 
                  from initial consultation to ongoing optimization and support.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-blue-700">Discovery & Analysis</h4>
                  <p className="text-gray-600 text-sm">Comprehensive assessment of your Kansas business needs, goals, and current technology infrastructure.</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-green-700">Custom Solution Design</h4>
                  <p className="text-gray-600 text-sm">Tailored AI architecture designed specifically for your industry and Kansas market requirements.</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-purple-700">Implementation & Testing</h4>
                  <p className="text-gray-600 text-sm">Agile development and rigorous testing ensure your AI solution works perfectly in Kansas conditions.</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-orange-700">Optimization & Support</h4>
                  <p className="text-gray-600 text-sm">Continuous monitoring, optimization, and 24/7 support to maximize your AI investment ROI.</p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-8 py-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700 font-semibold">Average Implementation: 6-12 weeks</span>
                  </div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-semibold">ROI Realized in 3-6 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-red-300/40 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="relative container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full mb-8">
                <Quote className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-semibold">Frequently Asked Questions</span>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Everything About Our <span className="text-orange-600">AI Company In Kansas</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about our <strong className="text-blue-600">Artificial Intelligence Company In Kansas</strong> 
                and how we serve businesses across the Sunflower State.
              </p>
            </div>
            
            {/* Interactive FAQ Cards */}
            <div className="space-y-6">
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                      Which is the best Artificial Intelligence Company In Kansas?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Metic.ai is the leading <strong className="text-blue-600">Artificial Intelligence Company In Kansas</strong> with 2100+ successful AI implementations. 
                      We serve Wichita, Overland Park, Kansas City, and businesses throughout the Sunflower State with 60% cost savings and 3x faster delivery.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-600">4.9/5 Rating</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-gray-600">290+ Kansas Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
              
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                      What makes Metic.ai the top AI Company In Kansas?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As the premier <strong className="text-green-600">AI Company In Kansas</strong>, Metic.ai combines deep understanding of Kansas's agriculture, 
                      aerospace, and manufacturing sectors with cutting-edge AI technology. We've helped companies in Wichita aviation industry 
                      and across the state achieve measurable results.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/70 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-green-600">98%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-blue-600">60%</div>
                        <div className="text-sm text-gray-600">Cost Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
              
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                      Does Metic.ai provide AI services to small businesses in Kansas?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-6 border border-purple-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Yes, our <strong className="text-purple-600">AI Service In Kansas</strong> caters to businesses of all sizes. 
                      From Wichita aerospace companies to agricultural businesses across the state, we provide scalable AI solutions 
                      that grow with your Kansas business.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="text-sm font-medium text-gray-600">Small Business Friendly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-medium text-gray-600">Scalable Solutions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
              
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-orange-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors">
                      What AI technologies does your AI Firm In Kansas specialize in?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-orange-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-6 border border-orange-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our <strong className="text-orange-600">AI Firm In Kansas</strong> specializes in machine learning, natural language processing, 
                      computer vision, predictive analytics, and custom AI development tailored for Kansas's agriculture, aerospace, and energy industries.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg">
                        <Brain className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-600">Machine Learning</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-600">Computer Vision</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg">
                        <Database className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Predictive Analytics</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg">
                        <Code className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-600">Custom AI Development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
              
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-indigo-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors">
                      How does Metic.ai support AI Development Company projects in Kansas?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl p-6 border border-indigo-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As a leading <strong className="text-indigo-600">AI Development Company In Kansas</strong>, we provide end-to-end support from strategy to deployment. 
                      Our Kansas-based team understands local business needs and delivers AI solutions with proven ROI.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/70 px-3 py-1 rounded-full text-sm text-gray-600">Strategy & Consulting</span>
                      <span className="bg-white/70 px-3 py-1 rounded-full text-sm text-gray-600">Custom Development</span>
                      <span className="bg-white/70 px-3 py-1 rounded-full text-sm text-gray-600">Implementation</span>
                      <span className="bg-white/70 px-3 py-1 rounded-full text-sm text-gray-600">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </details>
              
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-pink-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-700 transition-colors">
                      Why choose Metic.ai as your AI partner in Kansas?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-pink-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-6 border border-pink-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Choose Metic.ai because we're the <strong className="text-pink-600">Best AI Company In Kansas</strong> with local expertise, 
                      proven results, and understanding of Kansas's business landscape. We deliver AI solutions that work for Sunflower State businesses.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Deep Kansas market expertise and business understanding</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Proven track record with 2100+ successful implementations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Industry-specific solutions for agriculture, aerospace, and manufacturing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">
                  Still Have Questions About Our <span className="text-yellow-200">AI Company In Kansas?</span>
                </h3>
                <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                  Our Kansas AI experts are here to help. Get personalized answers about how our 
                  <strong className="text-yellow-200"> Artificial Intelligence Company In Kansas</strong> can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Get Your Free AI Consultation
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                      <Phone className="w-4 h-4 mr-2" />
                      Speak with Kansas AI Experts
                    </Button>
                  </Link>
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
              Ready to Partner with the Leading <strong>AI Company In Kansas</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Kansas companies that trust the premier <strong>Artificial Intelligence Company In Kansas</strong> for their AI transformation. 
              Get started with a free consultation and discover how our <strong>AI Service In Kansas</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Best AI Company Kansas
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Kansas</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Wichita</span>
                <span>•</span>
                <span>Overland Park</span>
                <span>•</span>
                <span>Kansas City</span>
                <span>•</span>
                <span>Topeka</span>
                <span>•</span>
                <span>Olathe</span>
                <span>•</span>
                <span>Lawrence</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

