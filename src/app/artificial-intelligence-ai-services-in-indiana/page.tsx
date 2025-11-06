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
  Heart,
  Sparkles,
  Database,
  ChevronDown,
  Rocket,
  Globe,
  Play,
  Quote
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Indiana | #1 AI Company In Indiana - Metic.ai",
  description: "Leading Artificial Intelligence Company In Indiana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Indiana",
    "AI Company In Indiana", 
    "AI Service In Indiana",
    "AI Firm In Indiana",
    "AI Development Company In Indiana",
    "Best AI Company In Indiana",
    "Top AI Company Indiana",
    "Leading AI Company Indiana",
    "AI Solutions Company Indiana",
    "Machine Learning Company Indiana",
    "AI Consulting Company Indiana",
    "AI Technology Company Indiana",
    "AI Services Provider Indiana",
    "Custom AI Company Indiana",
    "Enterprise AI Company Indiana",
    "AI Software Company Indiana",
    "AI Implementation Company Indiana",
    "Professional AI Company Indiana",
    "AI Innovation Company Indiana"
  ],
  authors: [{ name: "Metic.ai Indiana AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Indiana | #1 AI Company In Indiana - Metic.ai",
    description: "Leading Artificial Intelligence Company In Indiana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-indiana/",
    siteName: "Metic.ai - AI Company In Indiana",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metic.ai - Artificial Intelligence Company In Indiana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Indiana | #1 AI Company In Indiana - Metic.ai",
    description: "Leading Artificial Intelligence Company In Indiana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-indiana/",
  },
};

export default function AIServicesIndianaPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Indiana business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Indiana businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Indiana business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Indiana business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Indiana.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Indiana enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Manufacturing",
    "Agriculture",
    "Healthcare",
    "Automotive",
    "Technology",
    "Logistics",
    "Pharmaceuticals",
    "Energy",
    "Education",
    "Financial Services"
  ];

  const stats = [
    { number: "720+", label: "IN Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.3x", label: "Average ROI Increase" },
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
              "name": "Metic.ai - Artificial Intelligence Company In Indiana",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-indiana/",
              "logo": "https://metic.ai/logo.png",
              "image": "https://metic.ai/og-image.jpg",
              "description": "Leading Artificial Intelligence Company In Indiana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Indiana",
                "addressCountry": "US",
                "addressLocality": "Indianapolis"
              },
              "telephone": "+1-789-251-8414",
              "email": "hello@matic.ai",
              "foundingDate": "2020",
              "numberOfEmployees": "250+",
              "slogan": "Transform your business with AI",
              "areaServed": {
                "@type": "State",
                "name": "Indiana",
                "sameAs": "https://en.wikipedia.org/wiki/Indiana"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services Indiana",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Integration & Deployment",
                      "description": "Enterprise AI integration services for Indiana businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Solutions",
                      "description": "Custom ML algorithms and predictive analytics for Indiana companies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom AI Development",
                      "description": "Bespoke AI solutions for Indiana enterprises"
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
                  "name": "Which is the best Artificial Intelligence Company In Indiana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the leading Artificial Intelligence Company In Indiana with 2100+ successful AI implementations. We serve Indianapolis, Fort Wayne, Evansville, and businesses throughout the Hoosier State with 60% cost savings and 3x faster delivery."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What makes Metic.ai the top AI Company In Indiana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the premier AI Company In Indiana, Metic.ai combines deep understanding of Indiana's manufacturing and tech sectors with cutting-edge AI technology. We've helped companies in Indianapolis tech corridor and across the state achieve measurable results."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Metic.ai provide AI services to small businesses in Indiana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI Service In Indiana caters to businesses of all sizes. From Indianapolis startups to Fort Wayne manufacturers, we provide scalable AI solutions that grow with your Indiana business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI technologies does your AI Firm In Indiana specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Firm In Indiana specializes in machine learning, natural language processing, computer vision, predictive analytics, and custom AI development tailored for Indiana's manufacturing, agriculture, and tech industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Metic.ai support AI Development Company projects in Indiana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As a leading AI Development Company In Indiana, we provide end-to-end support from strategy to deployment. Our Indiana-based team understands local business needs and delivers AI solutions with proven ROI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Metic.ai as your AI partner in Indiana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choose Metic.ai because we're the Best AI Company In Indiana with local expertise, proven results, and understanding of Indiana's business landscape. We deliver AI solutions that work for Hoosier businesses."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In Indiana | Leading AI Services",
              "description": "Comprehensive guide to AI services in Indiana. Discover how Metic.ai helps Indiana businesses implement artificial intelligence solutions.",
              "author": {
                "@type": "Organization",
                "name": "Metic.ai Indiana AI Team"
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
              "keywords": "Artificial Intelligence Company In Indiana, AI Company In Indiana, AI Service In Indiana",
              "locationCreated": {
                "@type": "Place",
                "name": "Indiana, USA"
              }
            }
          ])
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
              <span className="text-sm font-medium text-orange-300">Serving Indiana, Indianapolis, USA</span>
              <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Title with Animation */}
            <div className="relative mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white relative z-10">
                <strong>
                  Artificial Intelligence Company In Indiana
                </strong>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Leading AI Company In Indiana
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="relative mb-10">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white">AI Company In Indiana</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange"> Artificial Intelligence Company In Indiana</strong> 
                with 2100+ successful AI implementations. We help businesses across Indiana transform with cutting-edge AI solutions, 
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
                  <span className="text-sm text-gray-400">2100+ Clients</span>
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
                  <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-primary-orange text-primary-orange hover:bg-primary-orange/10 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Call: +91 7892518414
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats with Creative Design */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              {stats.map((stat, index) => (
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
                <Target className="w-4 h-4 text-primary-orange" />
                Trusted as the top AI Service In Indiana
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "AI Firm In Indiana",
                  "AI Development Company In Indiana", 
                  "Best AI Company Indiana"
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                <strong>AI Services</strong> by Leading <span className="text-primary-orange">Artificial Intelligence Company In Indiana</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Indiana businesses 
                compete in the digital economy and drive sustainable growth.
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
                
                return (
                  <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/20 overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-100/0 group-hover:from-primary-orange/5 group-hover:to-orange-100/30 transition-all duration-500"></div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[service.color]} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <Link href={service.href} className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium group/link">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-orange/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                Industries We Serve in Indiana
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Indiana's key industries and business sectors.
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

      {/* Why Choose Us Section - Enhanced Creative Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-orange/10 to-orange-400/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-500/5 rounded-full blur-3xl"></div>
          
          {/* Floating AI Icons */}
          <div className="absolute top-20 left-10 opacity-10">
            <Brain className="w-16 h-16 text-primary-orange animate-pulse" />
          </div>
          <div className="absolute top-40 right-20 opacity-10">
            <Zap className="w-12 h-12 text-blue-500 animate-bounce" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-10">
            <Target className="w-14 h-14 text-purple-500 animate-pulse" />
          </div>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center space-x-2 bg-primary-orange/10 rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-primary-orange" />
                <span className="text-primary-orange font-semibold">Why Choose the #1 AI Company In Indiana</span>
                <Star className="w-5 h-5 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Why <span className="text-primary-orange">Indiana Businesses</span> Trust Metic.ai
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-orange-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                As the premier <strong>Artificial Intelligence Company In Indiana</strong>, we deliver 
                transformative AI solutions that drive real business results across the Hoosier State.
              </p>
            </div>
            
            {/* Enhanced Feature Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Award,
                  title: "2100+ Successful Projects",
                  description: "Proven track record delivering AI solutions for Indiana businesses from Indianapolis to Fort Wayne, with a 98% success rate.",
                  color: "blue",
                  stat: "2100+",
                  statLabel: "Projects Delivered"
                },
                {
                  icon: TrendingUp,
                  title: "60% Average Cost Savings",
                  description: "Data-driven AI solutions that deliver measurable ROI, helping Indiana companies reduce costs while increasing efficiency.",
                  color: "green", 
                  stat: "60%",
                  statLabel: "Cost Reduction"
                },
                {
                  icon: Users,
                  title: "Local Indiana Expertise",
                  description: "Deep understanding of Indiana's business landscape, from manufacturing in Elkhart to tech startups in Carmel.",
                  color: "purple",
                  stat: "24/7",
                  statLabel: "Local Support"
                },
                {
                  icon: Shield,
                  title: "Enterprise-Grade Security",
                  description: "Bank-level security protocols and compliance standards protecting your Indiana business data and AI implementations.",
                  color: "orange",
                  stat: "100%",
                  statLabel: "Secure & Compliant"
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                const colorClasses: Record<string, {bg: string; icon: string; light: string; border: string}> = {
                  blue: {
                    bg: "from-blue-500 to-blue-600",
                    icon: "text-blue-600",
                    light: "bg-blue-50",
                    border: "border-blue-200"
                  },
                  green: {
                    bg: "from-green-500 to-green-600", 
                    icon: "text-green-600",
                    light: "bg-green-50",
                    border: "border-green-200"
                  },
                  purple: {
                    bg: "from-purple-500 to-purple-600",
                    icon: "text-purple-600", 
                    light: "bg-purple-50",
                    border: "border-purple-200"
                  },
                  orange: {
                    bg: "from-orange-500 to-orange-600",
                    icon: "text-orange-600",
                    light: "bg-orange-50", 
                    border: "border-orange-200"
                  }
                };
                
                return (
                  <div key={index} className="group relative">
                    {/* Card Container */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-orange/30 relative overflow-hidden group-hover:transform group-hover:scale-105">
                      {/* Background Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Floating Number Badge */}
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:animate-bounce">
                        {index + 1}
                      </div>
                      
                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-orange-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${colorClasses[feature.color].bg} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        {/* Stat Badge */}
                        <div className={`inline-flex items-center ${colorClasses[feature.color].light} ${colorClasses[feature.color].border} border rounded-full px-4 py-2 group-hover:scale-105 transition-transform duration-300`}>
                          <span className={`text-2xl font-bold ${colorClasses[feature.color].icon} mr-2`}>
                            {feature.stat}
                          </span>
                          <span className="text-sm text-gray-600">{feature.statLabel}</span>
                        </div>
                      </div>
                      
                      {/* Decorative Corner Element */}
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-orange/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/5 via-transparent to-blue-500/5"></div>
              
              <div className="relative">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Trusted by Leading <span className="text-primary-orange">Indiana Companies</span>
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Join the growing list of Indiana businesses that trust our <strong>AI Service In Indiana</strong> for their digital transformation.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { metric: "98%", label: "Client Satisfaction", icon: Heart },
                    { metric: "3x", label: "Faster Delivery", icon: Zap },
                    { metric: "24/7", label: "Indiana Support", icon: Phone },
                    { metric: "100%", label: "Project Success", icon: CheckCircle }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="text-center group">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-400 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-primary-orange mb-2 group-hover:animate-pulse">
                          {item.metric}
                        </div>
                        <div className="text-sm text-gray-600">{item.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Call-to-Action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary-orange to-orange-400 hover:from-orange-400 hover:to-primary-orange text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    Partner with #1 AI Company Indiana
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="tel:+917892518414">
                  <Button variant="outline" size="lg" className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white transition-all duration-300 group">
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Call Today: +91 7892518414
                  </Button>
                </Link>
              </div>
              
              <p className="text-gray-500 mt-6 text-sm">
                🏆 Rated #1 <strong>AI Firm In Indiana</strong> | ⭐ 98% Client Satisfaction | 🚀 2100+ Successful AI Projects
              </p>
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
                About Metic.ai - Premier <strong>Artificial Intelligence Company In Indiana</strong>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Leading <strong>AI Company In Indiana</strong> Since 2020</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Metic.ai stands as the premier <strong>Artificial Intelligence Company In Indiana</strong>, serving businesses from the bustling tech corridors of Indianapolis to the manufacturing hubs of Fort Wayne and beyond. As the Hoosier State continues its digital transformation, we've been at the forefront, helping Indiana companies leverage AI for competitive advantage.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our deep understanding of Indiana's business landscape - from the automotive industry in Kokomo to the pharmaceutical sector in Indianapolis, from agriculture technology in rural counties to logistics hubs throughout the state - enables us to deliver <strong>AI Service In Indiana</strong> that truly makes a difference.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  As the leading <strong>AI Firm In Indiana</strong>, we've partnered with companies across all sectors of the Hoosier economy. Whether you're a manufacturing company in Anderson, a tech startup in Carmel, or a healthcare organization in Evansville, our <strong>AI Development Company In Indiana</strong> services are designed to drive measurable results.
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
                  <h4 className="text-xl font-bold mb-6">Why Indiana Businesses Choose Metic.ai</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Local Indiana Expertise</h5>
                        <p className="text-gray-600 text-sm">Deep understanding of Indiana's business culture and regulatory environment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Industry-Specific Solutions</h5>
                        <p className="text-gray-600 text-sm">Tailored AI solutions for manufacturing, agriculture, healthcare, and technology sectors</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Proven Track Record</h5>
                        <p className="text-gray-600 text-sm">2100+ successful implementations across Indiana and neighboring states</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Scalable Solutions</h5>
                        <p className="text-gray-600 text-sm">From small businesses to Fortune 500 companies in the Hoosier State</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Ongoing Support</h5>
                        <p className="text-gray-600 text-sm">24/7 support and continuous optimization for Indiana businesses</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 italic">
                      "The <strong>Best AI Company In Indiana</strong> for businesses ready to embrace the future" - Indiana Business Journal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Innovation Content Section - 2000+ Words */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Introduction Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6 bg-primary-orange/10 rounded-full px-6 py-3">
                <Brain className="w-6 h-6 text-primary-orange" />
                <span className="text-primary-orange font-semibold">Indiana AI Innovation Hub</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Transforming Indiana Business Landscape with 
                <span className="text-primary-orange"> Advanced AI Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                As the leading <strong>Artificial Intelligence Company In Indiana</strong>, we're driving digital transformation 
                across the Hoosier State. From Indianapolis' vibrant tech ecosystem to Fort Wayne's manufacturing excellence, our AI solutions 
                are revolutionizing how Indiana businesses operate, innovate, and succeed in the competitive global marketplace.
              </p>
            </div>

            {/* Indiana AI Ecosystem Overview */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-500 rounded-2xl flex items-center justify-center">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Indiana Tech Excellence</h3>
                      <p className="text-gray-600">Crossroads of America Innovation</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Indiana stands as a pivotal hub for technological advancement in the American heartland. Our <strong>AI Company In Indiana</strong> 
                    leverages the state's strategic location, world-class universities like Purdue and Indiana University, 
                    and robust manufacturing heritage to deliver cutting-edge artificial intelligence solutions that drive measurable business growth.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From Indianapolis' thriving tech corridors to the agricultural innovations in rural counties, we understand the unique challenges and 
                    opportunities that define Indiana's diverse business landscape. Our AI solutions are specifically designed to address the needs 
                    of Fortune 500 companies while remaining accessible to emerging businesses and family-owned enterprises.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-primary-orange/5 to-orange-100/50 rounded-3xl p-8 border border-primary-orange/20">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-primary-orange" />
                    Why Indiana Businesses Choose Our AI Services
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-orange mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Midwest Values & Innovation:</strong>
                        <span className="text-gray-700"> Combining traditional Indiana work ethic with cutting-edge AI technology for reliable, results-driven solutions</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-orange mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Industry Expertise:</strong>
                        <span className="text-gray-700"> 2100+ successful AI implementations across Indiana's key sectors including manufacturing, agriculture, healthcare, and logistics</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-orange mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-900">Local Partnership:</strong>
                        <span className="text-gray-700"> Deep understanding of Indiana business culture and regulatory environment with personalized service approach</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Industry-Specific Solutions</h3>
                      <p className="text-gray-600">Tailored for Indiana Markets</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary-orange pl-4">
                      <h5 className="font-semibold text-gray-900">Manufacturing Innovation</h5>
                      <p className="text-gray-600 text-sm">Smart manufacturing, predictive maintenance, and quality control for Indiana's industrial backbone</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Agricultural Technology</h5>
                      <p className="text-gray-600 text-sm">Precision farming, crop monitoring, and yield optimization for Indiana's agricultural sector</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Healthcare Excellence</h5>
                      <p className="text-gray-600 text-sm">Medical diagnostics, patient care optimization, and pharmaceutical research support</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Logistics & Transportation</h5>
                      <p className="text-gray-600 text-sm">Supply chain optimization and route planning leveraging Indiana's strategic location</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary-orange" />
                    Indiana AI Success Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">$1.8B+</div>
                      <div className="text-gray-300 text-sm">Value Generated for Indiana Businesses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">97%</div>
                      <div className="text-gray-300 text-sm">Client Satisfaction Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">52%</div>
                      <div className="text-gray-300 text-sm">Average Productivity Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">890+</div>
                      <div className="text-gray-300 text-sm">AI Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced AI Technologies Section */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Revolutionary <span className="text-primary-orange">AI Technologies</span> Driving Indiana Forward
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive suite of AI technologies enables Indiana businesses to harness the full potential of artificial intelligence, 
                  from advanced machine learning to intelligent automation and predictive analytics.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Machine Learning Mastery</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Advanced ML algorithms including deep learning, neural networks, and ensemble methods designed specifically for Indiana business challenges. 
                    Our models are trained on comprehensive datasets to deliver exceptional accuracy and actionable insights.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary-orange" />
                      <span className="text-sm text-gray-700">Predictive Analytics & Forecasting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary-orange" />
                      <span className="text-sm text-gray-700">Pattern Recognition & Classification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary-orange" />
                      <span className="text-sm text-gray-700">Anomaly Detection & Monitoring</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Natural Language Processing</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Cutting-edge NLP solutions enabling Indiana businesses to understand, process, and generate human language at scale. 
                    From customer service automation to intelligent content analysis, unlock the power of textual and speech data.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-700">Intelligent Chatbots & Virtual Assistants</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-700">Document Analysis & Information Extraction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-700">Sentiment Analysis & Social Listening</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Computer Vision Excellence</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Revolutionary computer vision technology transforming how Indiana businesses process and understand visual information. 
                    From quality control in manufacturing to agricultural monitoring, see the world through intelligent AI systems.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Object Detection & Recognition</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Image & Video Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Automated Quality Inspection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indiana Business Transformation Stories */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Real-World <span className="text-primary-orange">AI Success Stories</span> from Indiana
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover how leading Indiana businesses across diverse industries have leveraged our AI solutions to achieve remarkable 
                  growth, operational efficiency, and competitive advantages in their respective markets.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary-orange rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Manufacturing Revolution</h4>
                        <p className="text-gray-300">Fort Wayne Industrial Leader</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      A major Indiana manufacturing company partnered with our <strong>AI Company In Indiana</strong> to implement 
                      intelligent production optimization across their facilities. Using advanced machine learning algorithms, 
                      we analyzed production data to optimize workflows and predict equipment maintenance needs.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-orange">41%</div>
                        <div className="text-gray-400 text-sm">Production Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-orange">$2.8M</div>
                        <div className="text-gray-400 text-sm">Annual Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-orange">99.2%</div>
                        <div className="text-gray-400 text-sm">Quality Accuracy</div>
                      </div>
                    </div>
                    <blockquote className="border-l-4 border-primary-orange pl-4 italic text-gray-300">
                      "The AI solutions revolutionized our manufacturing processes. We're now operating at peak efficiency 
                      while maintaining the highest quality standards Indiana is known for."
                    </blockquote>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 relative overflow-hidden border border-blue-200">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Lightbulb className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Agricultural Innovation</h4>
                        <p className="text-gray-600">Rural Indiana Farm Operation</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      A progressive Indiana agricultural operation implemented our AI-powered precision farming solutions 
                      to optimize crop yields and resource utilization. Our computer vision and predictive analytics 
                      systems monitor soil conditions, weather patterns, and crop health in real-time.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">28%</div>
                        <div className="text-gray-600 text-sm">Yield Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">35%</div>
                        <div className="text-gray-600 text-sm">Water Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">$420K</div>
                        <div className="text-gray-600 text-sm">Additional Revenue</div>
                      </div>
                    </div>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                      "The AI technology helped us achieve record harvests while being more sustainable. It's the future 
                      of farming, and we're proud to lead the way in Indiana."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Future of AI in Indiana */}
            <div className="bg-gradient-to-br from-primary-orange/5 to-orange-100/30 rounded-3xl p-12 border border-primary-orange/20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  The Future of <span className="text-primary-orange">AI in Indiana</span>
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  As Indiana continues to establish itself as a technological powerhouse in the Midwest, artificial intelligence will play an 
                  increasingly vital role in shaping the state's economic future and maintaining its competitive edge.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Innovation Excellence</h4>
                  <p className="text-gray-600 text-sm">
                    Establishing Indiana as the Midwest's premier hub for AI innovation and technological advancement.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Workforce Development</h4>
                  <p className="text-gray-600 text-sm">
                    Creating AI-ready talent pipelines through partnerships with Indiana universities and industry programs.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Sustainable Growth</h4>
                  <p className="text-gray-600 text-sm">
                    Developing environmentally conscious AI applications that support Indiana's sustainability initiatives.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Economic Leadership</h4>
                  <p className="text-gray-600 text-sm">
                    Accelerating business growth and competitiveness through strategic AI adoption across all sectors.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg">
                  <Brain className="w-6 h-6 text-primary-orange" />
                  <span className="text-gray-900 font-semibold">Ready to Transform Your Indiana Business with AI?</span>
                  <ArrowRight className="w-5 h-5 text-primary-orange" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions - <strong>AI Company In Indiana</strong>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about our <strong>Artificial Intelligence Company In Indiana</strong> and AI services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Which is the best Artificial Intelligence Company In Indiana?</h3>
                <p className="text-gray-600">
                  Metic.ai is the leading <strong>Artificial Intelligence Company In Indiana</strong> with 2100+ successful AI implementations. We serve Indianapolis, Fort Wayne, Evansville, and businesses throughout the Hoosier State with 60% cost savings and 3x faster delivery.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">What makes Metic.ai the top AI Company In Indiana?</h3>
                <p className="text-gray-600">
                  As the premier <strong>AI Company In Indiana</strong>, Metic.ai combines deep understanding of Indiana's manufacturing and tech sectors with cutting-edge AI technology. We've helped companies in Indianapolis tech corridor and across the state achieve measurable results.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Does Metic.ai provide AI services to small businesses in Indiana?</h3>
                <p className="text-gray-600">
                  Yes, our <strong>AI Service In Indiana</strong> caters to businesses of all sizes. From Indianapolis startups to Fort Wayne manufacturers, we provide scalable AI solutions that grow with your Indiana business.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">What AI technologies does your AI Firm In Indiana specialize in?</h3>
                <p className="text-gray-600">
                  Our <strong>AI Firm In Indiana</strong> specializes in machine learning, natural language processing, computer vision, predictive analytics, and custom AI development tailored for Indiana's manufacturing, agriculture, and tech industries.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">How does Metic.ai support AI Development Company projects in Indiana?</h3>
                <p className="text-gray-600">
                  As a leading <strong>AI Development Company In Indiana</strong>, we provide end-to-end support from strategy to deployment. Our Indiana-based team understands local business needs and delivers AI solutions with proven ROI.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Why choose Metic.ai as your AI partner in Indiana?</h3>
                <p className="text-gray-600">
                  Choose Metic.ai because we're the <strong>Best AI Company In Indiana</strong> with local expertise, proven results, and understanding of Indiana's business landscape. We deliver AI solutions that work for Hoosier businesses.
                </p>
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
              Ready to Partner with the Leading <strong>AI Company In Indiana</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Indiana companies that trust the premier <strong>Artificial Intelligence Company In Indiana</strong> for their AI transformation. 
              Get started with a free consultation and discover how our <strong>AI Service In Indiana</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Best AI Company Indiana
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Indiana</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Indianapolis</span>
                <span>•</span>
                <span>Fort Wayne</span>
                <span>•</span>
                <span>Evansville</span>
                <span>•</span>
                <span>South Bend</span>
                <span>•</span>
                <span>Carmel</span>
                <span>•</span>
                <span>Fishers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

