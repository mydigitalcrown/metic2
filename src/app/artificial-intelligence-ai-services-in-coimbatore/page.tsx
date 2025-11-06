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
  Quote,
  ChevronDown,
  Cpu,
  Bot,
  Globe,
  Factory,
  Cog,
  DollarSign
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Coimbatore | #1 AI Company In Coimbatore - Metic.ai",
  description: "Leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Coimbatore",
    "AI Company In Coimbatore", 
    "AI Service In Coimbatore",
    "AI Firm In Coimbatore",
    "AI Development Company In Coimbatore",
    "Artificial Intelligence Services Coimbatore",
    "AI Solutions Company Coimbatore",
    "Machine Learning Company Coimbatore",
    "AI Consulting Firm Coimbatore",
    "AI Technology Company Coimbatore",
    "Best AI Company In Coimbatore",
    "Top AI Company Coimbatore",
    "AI automation Coimbatore",
    "AI software company Coimbatore",
    "artificial intelligence consulting Coimbatore",
    "AI integration services Coimbatore",
    "custom AI development Coimbatore",
    "enterprise AI solutions Coimbatore",
    "AI ML company Coimbatore"
  ],
  authors: [{ name: "Metic.ai Coimbatore AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Coimbatore | #1 AI Company In Coimbatore - Metic.ai",
    description: "Leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-coimbatore/",
    siteName: "Metic.ai - AI Company In Coimbatore",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-coimbatore.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Coimbatore - Metic.ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    creator: "@MeticAI",
    title: "Artificial Intelligence Company In Coimbatore | AI Company In Coimbatore - Metic.ai",
    description: "Leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: {
      url: "https://metic.ai/og-ai-services-coimbatore.jpg",
      alt: "Artificial Intelligence Company In Coimbatore - Metic.ai",
    },
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-coimbatore/",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  category: "Artificial Intelligence Services",
  classification: "Business Technology Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://metic.ai"),
  generator: "Metic.ai AI Company",
  applicationName: "Metic.ai - Artificial Intelligence Company In Coimbatore",
};

export default function AIServicesCoimbatorePage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Coimbatore business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Coimbatore's textile and manufacturing industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Coimbatore business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Coimbatore business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Coimbatore.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Coimbatore enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Textiles & Apparel",
    "Manufacturing",
    "Engineering",
    "Information Technology",
    "Automotive",
    "Agriculture",
    "Healthcare",
    "Education",
    "Jewelry",
    "Foundry & Casting"
  ];

  const stats = [
    { number: "1,950+", label: "Coimbatore Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.7x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
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
            "name": "Metic.ai - Artificial Intelligence Company In Coimbatore",
            "alternateName": "AI Company In Coimbatore",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-coimbatore/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-coimbatore.jpg",
            "description": "Leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "foundingDate": "2018",
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "customer service",
              "email": "hello@matic.ai",
              "availableLanguage": ["English", "Tamil"]
            },
            "sameAs": [
              "https://linkedin.com/company/metic-ai",
              "https://twitter.com/metcai",
              "https://facebook.com/metic.ai"
            ],
            "serviceArea": {
              "@type": "City",
              "name": "Coimbatore",
              "containedInPlace": {
                "@type": "State",
                "name": "Tamil Nadu",
                "containedInPlace": {
                  "@type": "Country",
                  "name": "India"
                }
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Coimbatore",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Artificial Intelligence Services Coimbatore",
                    "description": "Custom AI development and machine learning solutions"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions Coimbatore",
                    "description": "Advanced ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "AI Integration Services Coimbatore",
                    "description": "Enterprise AI integration and deployment services"
                  }
                }
              ]
            },
            "areaServed": [
              "Coimbatore", "RS Puram", "Peelamedu", "Saravanampatti", "Ganapathy", 
              "Singanallur", "Vadavalli", "Kuniyamuthur", "Sulur", "Thudiyalur",
              "Podanur", "Saravanampatty", "Race Course", "Town Hall", "Gandhipuram",
              "Ukkadam", "Kovaipudur", "Hopes College", "Sitra", "Kalapatti"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100",
              "bestRating": "5",
              "worstRating": "1"
            },
            "priceRange": "$$",
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning",
              "AI Development",
              "Enterprise AI Solutions",
              "AI Automation Coimbatore"
            ]
          })
        }}
      />

      {/* Article Schema for Content Authority */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Artificial Intelligence Company In Coimbatore | Leading AI Company In Coimbatore - Metic.ai",
            "description": "Leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "image": "https://metic.ai/og-ai-services-coimbatore.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai",
              "url": "https://metic.ai"
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
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-coimbatore/"
            },
            "articleSection": "Artificial Intelligence Services",
            "keywords": [
              "Artificial Intelligence Company In Coimbatore",
              "AI Company In Coimbatore",
              "AI Service In Coimbatore",
              "AI Firm In Coimbatore",
              "AI Development Company In Coimbatore"
            ],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "sameAs": "https://en.wikipedia.org/wiki/Artificial_intelligence"
              },
              {
                "@type": "Thing", 
                "name": "Machine Learning",
                "sameAs": "https://en.wikipedia.org/wiki/Machine_learning"
              },
              {
                "@type": "Place",
                "name": "Coimbatore",
                "sameAs": "https://en.wikipedia.org/wiki/Coimbatore"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "RS Puram",
                "sameAs": "https://en.wikipedia.org/wiki/RS_Puram"
              },
              {
                "@type": "Place",
                "name": "Peelamedu",
                "sameAs": "https://en.wikipedia.org/wiki/Peelamedu"
              },
              {
                "@type": "Place",
                "name": "Saravanampatti",
                "sameAs": "https://en.wikipedia.org/wiki/Saravanampatti"
              },
              {
                "@type": "Place",
                "name": "Gandhipuram",
                "sameAs": "https://en.wikipedia.org/wiki/Gandhipuram"
              }
            ]
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
              <span className="text-sm font-medium text-orange-300">Serving Coimbatore, Tamil Nadu</span>
              <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Title with Animation */}
            <div className="relative mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white relative z-10">
                <strong>
                  Artificial Intelligence Company In Coimbatore
                </strong>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-orange-400 to-primary-orange">
                  Leading AI Company In Coimbatore
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="relative mb-10">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking for the best <strong className="text-white">AI Company In Coimbatore</strong>? Metic.ai is the premier 
                <strong className="text-primary-orange"> Artificial Intelligence Company In Coimbatore</strong> 
                with 2100+ successful AI implementations. We transform Coimbatore businesses with cutting-edge AI services across RS Puram, Peelamedu, Saravanampatti, and all major Coimbatore areas, 
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
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-pulse" />
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
                  Call: +1-789-251-8414
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
                <Globe className="w-4 h-4 text-primary-orange" />
                Trusted as the top AI Service In Coimbatore
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "AI Firm In Coimbatore",
                  "AI Development Company In Coimbatore", 
                  "Best AI Company Tamil Nadu"
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
                <strong>AI Services</strong> by Leading <span className="text-primary-orange">Artificial Intelligence Company In Coimbatore</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services from Coimbatore's most trusted <strong>AI Company In Coimbatore</strong>. 
                Transforming businesses with cutting-edge AI solutions tailored for Tamil Nadu's industrial landscape.
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
                Industries We Serve in Coimbatore
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Coimbatore's key industries and business sectors.
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
                Why Choose Metic.ai as Your <span className="text-primary-orange">AI Firm In Coimbatore</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                As the premier <strong>AI Development Company In Coimbatore</strong>, we're trusted by businesses across Tamil Nadu 
                for our expertise, proven results, and commitment to client success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Coimbatore businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for Coimbatore companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Coimbatore business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Coimbatore business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Content Section - 2000+ Words */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-orange/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-orange/2 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-orange/20">
                <div className="w-8 h-8 bg-primary-orange/20 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-primary-orange" />
                </div>
                <span className="text-sm font-medium text-gray-600">Comprehensive AI Insights</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Deep Dive: <span className="text-primary-orange">AI Transformation</span> in Coimbatore
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Exploring how artificial intelligence is revolutionizing Tamil Nadu's industrial capital
              </p>
            </div>

            <div className="space-y-16">
              {/* Main Content Block 1: Company Overview */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">
                        <strong>Artificial Intelligence Company In Coimbatore</strong> - Transforming Tamil Nadu's Industrial Capital
                      </h3>
                      <div className="w-24 h-1 bg-primary-orange rounded-full mb-6"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p className="border-l-4 border-primary-orange pl-6 bg-primary-orange/5 p-4 rounded-r-lg">
                      As the leading <strong className="text-primary-orange">AI Company In Coimbatore</strong>, Metic.ai stands at the forefront of technological innovation in Tamil Nadu's industrial capital. Coimbatore, known as the "Manchester of South India," has always been a hub for textiles, engineering, and manufacturing excellence.
                    </p>
                    <p>
                      Our <strong>Artificial Intelligence Company In Coimbatore</strong> serves as a bridge between cutting-edge AI technology and local business needs. With over 2100+ successful AI implementations across Tamil Nadu and beyond, we understand the unique challenges and opportunities that Coimbatore businesses face in today's competitive marketplace.
                    </p>
                    <p className="bg-white border-2 border-primary-orange/20 p-6 rounded-xl">
                      The journey of becoming Coimbatore's most trusted <strong className="text-primary-orange">AI Service In Coimbatore</strong> began with our commitment to understanding local business dynamics. Our AI solutions are designed to enhance Coimbatore's entrepreneurial strengths while addressing modern challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Content Block 2: Local Market Understanding */}
              <div className="relative">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-orange to-orange-400 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Local Market Understanding</h3>
                    </div>
                    <div className="w-20 h-1 bg-primary-orange rounded-full mb-6"></div>
                    
                    <div className="space-y-4 text-gray-700">
                      <p className="leading-relaxed">
                        Coimbatore's business ecosystem is unique in its diversity and depth. As an <strong className="text-primary-orange">AI Firm In Coimbatore</strong>, we've spent years studying the intricate relationships between various industries that make this city a powerhouse of economic activity.
                      </p>
                      <div className="bg-primary-orange/10 p-4 rounded-xl border-l-4 border-primary-orange">
                        <p className="font-semibold text-gray-800">Key Industries We Serve:</p>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• Textile & Apparel Manufacturing</li>
                          <li>• Engineering & Automotive</li>
                          <li>• Agriculture & Food Processing</li>
                          <li>• Information Technology</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary-orange/20 rounded-lg flex items-center justify-center">
                          <Factory className="w-5 h-5 text-primary-orange" />
                        </div>
                        <h4 className="font-bold text-gray-900">RS Puram & Peelamedu</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Textile manufacturing hubs requiring specialized AI solutions for quality control and inventory management.</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary-orange/20 rounded-lg flex items-center justify-center">
                          <Cog className="w-5 h-5 text-primary-orange" />
                        </div>
                        <h4 className="font-bold text-gray-900">SIDCO Industrial Estate</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Engineering and automotive sectors needing AI integration with existing manufacturing systems.</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary-orange/20 rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-primary-orange" />
                        </div>
                        <h4 className="font-bold text-gray-900">Tirupur Connection</h4>
                      </div>
                      <p className="text-gray-600 text-sm">Supply chain optimization and export compliance solutions for the garment industry.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Block 3: Technology and Innovation */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-primary-orange/5 rounded-3xl p-8 md:p-12 shadow-xl border border-primary-orange/20">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-orange-400 rounded-3xl flex items-center justify-center shadow-xl">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-center mb-6 text-gray-900">
                    Cutting-Edge AI Technologies Driving Coimbatore's Digital Transformation
                  </h3>
                  <div className="w-32 h-1 bg-primary-orange rounded-full mx-auto mb-8"></div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Database className="w-6 h-6 text-blue-600" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Machine Learning Algorithms</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Advanced algorithms including deep neural networks, ensemble methods, and reinforcement learning systems that solve complex manufacturing problems with 99.7% accuracy.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-green-600" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Computer Vision Systems</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Specialized systems for textile quality inspection, automotive parts verification, and precision engineering applications processing thousands of images per minute.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                            <Globe className="w-6 h-6 text-purple-600" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Natural Language Processing</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Multilingual interfaces supporting Tamil and English, enabling intelligent customer service systems and automated documentation tools.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-orange-600" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">Predictive Analytics</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Advanced forecasting systems that predict equipment failures up to 30 days in advance, reducing downtime by 40% and maintenance costs significantly.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-orange/30">
                    <p className="text-center text-gray-700 leading-relaxed">
                      The technological capabilities that make us the premier <strong className="text-primary-orange">Artificial Intelligence Company In Coimbatore</strong> span the entire spectrum of AI and machine learning technologies, delivering unprecedented precision and business value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Content Block 4: Industry Applications */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                      Industry-Specific AI Solutions: Tailored for Coimbatore's Key Sectors
                    </h3>
                    <div className="w-32 h-1 bg-primary-orange rounded-full mx-auto"></div>
                  </div>
                  
                  <div className="space-y-10">
                    {/* Textile Industry */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-orange to-orange-400 rounded-full"></div>
                      <div className="pl-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                            <Factory className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900">Textile and Apparel Industry AI Solutions</h4>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-primary-orange/5 rounded-2xl p-6 border border-primary-orange/20">
                            <p className="text-gray-700 leading-relaxed mb-4">
                              The textile industry is where our expertise as an <strong className="text-primary-orange">AI Service In Coimbatore</strong> truly shines. We've developed comprehensive AI solutions that address every aspect of textile manufacturing.
                            </p>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-primary-orange/20 rounded-full flex items-center justify-center">
                                  <CheckCircle className="w-3 h-3 text-primary-orange" />
                                </div>
                                <span className="text-sm text-gray-600">Predictive maintenance systems</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-primary-orange/20 rounded-full flex items-center justify-center">
                                  <CheckCircle className="w-3 h-3 text-primary-orange" />
                                </div>
                                <span className="text-sm text-gray-600">Quality control automation</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-primary-orange/20 rounded-full flex items-center justify-center">
                                  <CheckCircle className="w-3 h-3 text-primary-orange" />
                                </div>
                                <span className="text-sm text-gray-600">Inventory optimization</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-2xl p-6 border-2 border-primary-orange/10">
                            <div className="text-center mb-4">
                              <div className="text-3xl font-bold text-primary-orange">40%</div>
                              <div className="text-sm text-gray-600">Reduction in Downtime</div>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              Our predictive maintenance systems can forecast spindle failures up to 30 days in advance, reducing maintenance costs and improving production efficiency.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Engineering Industry */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                      <div className="pl-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <Cog className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900">Engineering and Manufacturing AI Applications</h4>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                            <h5 className="font-bold text-gray-900 mb-2">Precision Machining</h5>
                            <p className="text-sm text-gray-600">AI-optimized cutting parameters in real-time, reducing material waste by 25%</p>
                          </div>
                          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                            <h5 className="font-bold text-gray-900 mb-2">Quality Assurance</h5>
                            <p className="text-sm text-gray-600">Micron-level precision inspection for automotive components</p>
                          </div>
                          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                            <h5 className="font-bold text-gray-900 mb-2">Demand Forecasting</h5>
                            <p className="text-sm text-gray-600">Predictive analytics for inventory optimization and delivery scheduling</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Agriculture */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
                      <div className="pl-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <Sparkles className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900">Agricultural Technology and Food Processing</h4>
                        </div>
                        
                        <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                          <p className="text-gray-700 leading-relaxed">
                            Coimbatore's agricultural sector benefits from our AI solutions in crop monitoring, yield prediction, and supply chain optimization. Our drone-based systems detect issues early, enabling preventive action before significant crop loss.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Block 5: Economic Impact and Future Outlook */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white via-primary-orange/5 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary-orange/20">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 mb-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-orange/30">
                      <TrendingUp className="w-6 h-6 text-primary-orange" />
                      <span className="font-medium text-gray-700">Future Vision</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                      Economic Impact and Future of AI in Coimbatore
                    </h3>
                    <div className="w-32 h-1 bg-primary-orange rounded-full mx-auto"></div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Economic Transformation</h4>
                        <p className="text-gray-700 leading-relaxed">
                          The economic impact of AI adoption in Coimbatore extends far beyond individual company benefits. As the leading <strong className="text-primary-orange">AI Development Company In Coimbatore</strong>, we've contributed to positioning the city as a technology hub for South India.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Employment Evolution</h4>
                        <p className="text-gray-700 leading-relaxed">
                          AI technologies are creating new job categories while transitioning workers to skilled roles. Our training programs help workers build AI-ready skills for the future economy.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Smart City Initiatives</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Government initiatives supporting digital transformation create ideal conditions for AI adoption in urban management, traffic optimization, and public services.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Future Growth Sectors</h4>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {["Renewable Energy", "Biotechnology", "Advanced Materials", "IoT Integration"].map((sector, index) => (
                            <span key={index} className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm font-medium">
                              {sector}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-orange/30">
                      <p className="text-gray-700 leading-relaxed">
                        The future outlook for AI in Coimbatore is exceptionally promising, with our expertise in IoT integration and edge computing positioning us to contribute to sustainable development goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Block 6: Success Stories and Case Studies */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 mb-6 bg-primary-orange/10 rounded-full px-6 py-3 border border-primary-orange/20">
                      <Award className="w-6 h-6 text-primary-orange" />
                      <span className="font-medium text-primary-orange">Success Stories</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                      How Coimbatore Businesses Are Thriving with AI
                    </h3>
                    <div className="w-32 h-1 bg-primary-orange rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Real results from our AI implementations across Coimbatore's diverse industrial landscape
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Case Study 1 */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-orange-200/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-400 rounded-xl flex items-center justify-center">
                            <Factory className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900">Textile Manufacturing</h4>
                            <p className="text-sm text-gray-500">Quality Control Revolution</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                            <span className="text-sm text-gray-700">Defect Rate Reduction</span>
                            <span className="text-xl font-bold text-green-600">35%</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <span className="text-sm text-gray-700">Production Speed Increase</span>
                            <span className="text-xl font-bold text-blue-600">22%</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-primary-orange/10 rounded-lg border border-primary-orange/20">
                            <span className="text-sm text-gray-700">ROI Achievement</span>
                            <span className="text-xl font-bold text-primary-orange">8 Months</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                          Leading textile manufacturer implemented our AI-powered quality control system, achieving remarkable improvements in both quality and efficiency.
                        </p>
                      </div>
                    </div>
                    
                    {/* Case Study 2 */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 to-blue-200/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                            <Cog className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900">Automotive Components</h4>
                            <p className="text-sm text-gray-500">Predictive Maintenance</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                            <span className="text-sm text-gray-700">Downtime Reduction</span>
                            <span className="text-xl font-bold text-green-600">60%</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <span className="text-sm text-gray-700">Cost Savings</span>
                            <span className="text-xl font-bold text-blue-600">Millions</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                            <span className="text-sm text-gray-700">Prediction Accuracy</span>
                            <span className="text-xl font-bold text-purple-600">95%</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                          Automotive component manufacturer adopted our predictive maintenance solution, monitoring operational parameters to prevent equipment failures.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="bg-gradient-to-r from-primary-orange/10 to-orange-200/10 rounded-2xl p-6 border border-primary-orange/20">
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          Engineering Firm Success Story
                        </h4>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary-orange">28%</div>
                            <div className="text-sm text-gray-600">Working Capital Reduction</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary-orange">High</div>
                            <div className="text-sm text-gray-600">Demand Accuracy</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary-orange">Better</div>
                            <div className="text-sm text-gray-600">Purchasing Decisions</div>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Mid-sized engineering firm used our demand forecasting AI to optimize inventory management, analyzing historical data and market trends for accurate future predictions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary-orange/30">
                      <p className="text-gray-700 leading-relaxed">
                        Our track record as the <strong className="text-primary-orange">Best AI Company In Coimbatore</strong> is built on measurable success stories across diverse industries, demonstrating tangible benefits from improved operational efficiency to enhanced customer satisfaction.
                      </p>
                    </div>
                  </div>
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
                "name": "Which is the best Artificial Intelligence Company In Coimbatore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Coimbatore with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise automation with 60% cost savings and 3x faster delivery across Coimbatore's textile mills, IT parks, and industrial areas including RS Puram, Peelamedu, and Saravanampatti."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Coimbatore offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Coimbatore, Metic.ai offers comprehensive AI services including AI automation, machine learning development, predictive analytics, custom AI solutions, data engineering, generative AI services, and enterprise AI integration. We serve textile, engineering, automotive, agriculture, healthcare, and IT industries."
                }
              },
              {
                "@type": "Question",
                "name": "How much do AI services cost from an Artificial Intelligence Company In Coimbatore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI service costs vary based on project complexity and requirements. As a leading Artificial Intelligence Company In Coimbatore, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. Contact us for a free consultation and customized quote for your Coimbatore business."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Firm In Coimbatore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the trusted AI Firm In Coimbatore with proven expertise in Tamil Nadu's industrial landscape. We deliver 3x faster development, 60% cost reduction, 2100+ successful projects, and 4.9/5 client satisfaction. Our team understands Coimbatore's textile, engineering, and manufacturing industries with deep local market knowledge."
                }
              },
              {
                "@type": "Question",
                "name": "Which Coimbatore areas does the leading AI Development Company In Coimbatore serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Development Company In Coimbatore, Metic.ai serves all major Coimbatore areas including RS Puram, Peelamedu, Saravanampatti, Ganapathy, Singanallur, Vadavalli, Kuniyamuthur, Gandhipuram, Race Course, Ukkadam, Kovaipudur, and all textile mills, IT parks, and industrial zones with comprehensive AI solutions."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can an AI Service In Coimbatore be implemented?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai provides the fastest AI Service In Coimbatore with 3x faster development than industry standards. Simple AI automation can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 8-16 weeks. We offer rapid prototyping and agile development for Coimbatore's textile and manufacturing businesses."
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
                Frequently Asked Questions - <strong>AI Company In Coimbatore</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about choosing the right <strong>Artificial Intelligence Company In Coimbatore</strong>
              </p>
            </div>
            
            <div className="space-y-6">
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
                            <Award className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which is the best Artificial Intelligence Company In Coimbatore?
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
                        Metic.ai is the leading <strong className="text-gray-900 font-semibold">Artificial Intelligence Company In Coimbatore</strong> with 2100+ successful AI implementations. 
                        We specialize in custom AI development, machine learning solutions, and enterprise automation with 60% cost savings and 3x faster delivery.
                      </p>
                      <p className="text-lg">
                        Our expertise spans across Coimbatore's textile mills, IT parks, and industrial areas including RS Puram, Peelamedu, and Saravanampatti, 
                        making us the most trusted AI partner for Tamil Nadu businesses.
                      </p>
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
                            <Cog className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What AI services does the top AI Company In Coimbatore offer?
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
                        As the premier <strong className="text-gray-900 font-semibold">AI Company In Coimbatore</strong>, Metic.ai offers comprehensive AI services including AI automation, 
                        machine learning development, predictive analytics, custom AI solutions, data engineering, and generative AI services.
                      </p>
                      <p className="text-lg">
                        We serve textile, engineering, automotive, agriculture, healthcare, and IT industries with enterprise AI integration 
                        tailored for Coimbatore's industrial landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Target className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How to choose the right AI Development Company In Coimbatore?
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
                        When selecting an <strong className="text-gray-900 font-semibold">AI Development Company In Coimbatore</strong>, look for proven experience, successful project portfolio, 
                        industry expertise, local market understanding, and ongoing support.
                      </p>
                      <p className="text-lg">
                        Metic.ai offers all these qualities with 2100+ completed projects, 98% client satisfaction rate, and deep knowledge of Tamil Nadu's business landscape. 
                        Our team understands Coimbatore's textile, engineering, and manufacturing sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <DollarSign className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How much do AI services cost from an Artificial Intelligence Company In Coimbatore?
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
                        AI service costs vary based on project complexity and requirements. As a leading <strong className="text-gray-900 font-semibold">Artificial Intelligence Company In Coimbatore</strong>, 
                        Metic.ai offers competitive pricing with 60% cost savings compared to traditional development.
                      </p>
                      <p className="text-lg">
                        Contact us for a free consultation and customized quote for your Coimbatore business. 
                        We provide transparent pricing and flexible engagement models.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Star className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Why choose Metic.ai as your AI Firm In Coimbatore?
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
                        Metic.ai is the trusted <strong className="text-gray-900 font-semibold">AI Firm In Coimbatore</strong> with proven expertise in Tamil Nadu's industrial landscape. 
                        We deliver 3x faster development, 60% cost reduction, 2100+ successful projects, and 4.9/5 client satisfaction.
                      </p>
                      <p className="text-lg">
                        Our team understands Coimbatore's textile, engineering, and manufacturing industries with deep local market knowledge, 
                        ensuring AI solutions that truly fit your business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 6 */}
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
                            How quickly can an AI Service In Coimbatore be implemented?
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
                        Metic.ai provides the fastest <strong className="text-gray-900 font-semibold">AI Service In Coimbatore</strong> with 3x faster development than industry standards. 
                        Simple AI automation can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 8-16 weeks.
                      </p>
                      <p className="text-lg">
                        We offer rapid prototyping and agile development for Coimbatore's textile and manufacturing businesses, 
                        ensuring quick time-to-market and immediate business value.
                      </p>
                    </div>
                  </div>
                </div>
              </details>
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
                  About Metic.ai - Premier <strong>Artificial Intelligence Company In Coimbatore</strong>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 2018, Metic.ai has been the leading <strong>AI Company In Coimbatore</strong>, transforming businesses across the Manchester of South India with cutting-edge artificial intelligence solutions. From traditional textile mills in Peelamedu to modern IT parks in Saravanampatti, we've delivered 2100+ successful AI implementations.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of AI experts understands Coimbatore's unique industrial heritage and innovation culture. Whether you're in RS Puram's commercial districts, Ganapathy's manufacturing zones, or Saravanampatti's IT corridors, we deliver AI solutions that honor Coimbatore's industrial legacy while driving future growth.
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
                  <h3 className="text-xl font-bold mb-6">Coimbatore Industry Expertise</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Textile AI Innovation</div>
                        <div className="text-gray-600 text-sm">Advanced AI solutions for Coimbatore's world-renowned textile and garment manufacturing industry</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Engineering Excellence</div>
                        <div className="text-gray-600 text-sm">Smart automation and quality control for Coimbatore's precision engineering and manufacturing sectors</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">IT & Software Development</div>
                        <div className="text-gray-600 text-sm">Cutting-edge AI development for Coimbatore's growing IT and software services industry</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Agriculture Technology</div>
                        <div className="text-gray-600 text-sm">Smart farming and agricultural AI solutions for Coimbatore's rich agricultural ecosystem</div>
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
                What Coimbatore Businesses Say About Our <strong>AI Services</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Testimonials from clients across Coimbatore who chose Metic.ai as their <strong>AI Company In Coimbatore</strong>
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
                  "Metic.ai transformed our Coimbatore textile mill with AI-powered quality control that reduced fabric defects by 80%. Best AI Company In Coimbatore for textile automation!"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Ramesh Textile Industries</div>
                  <div className="text-sm text-gray-600">Managing Director, TextileCorp</div>
                  <div className="text-sm text-primary-orange">Peelamedu, Coimbatore</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Outstanding AI engineering solutions! Their machine learning algorithms optimized our Coimbatore manufacturing processes, improving efficiency by 250%. Excellent service!"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Lakshmi Precision</div>
                  <div className="text-sm text-gray-600">CTO, EngineerCorp Coimbatore</div>
                  <div className="text-sm text-primary-orange">RS Puram, Coimbatore</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Metic.ai's AI solutions revolutionized our Coimbatore IT operations. Their expertise in software automation and data analytics is unmatched in Tamil Nadu."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Vijay Kumar</div>
                  <div className="text-sm text-gray-600">Founder, TechSoft Coimbatore</div>
                  <div className="text-sm text-primary-orange">Saravanampatti, Coimbatore</div>
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
              Ready to Partner with Coimbatore's Leading <strong>Artificial Intelligence Company</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ Coimbatore businesses that chose Metic.ai as their <strong>AI Company In Coimbatore</strong>. Get your free AI consultation and discover how our artificial intelligence solutions can transform your business with 60% cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Coimbatore
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Coimbatore AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted <strong>AI Firm In Coimbatore</strong> - Serving Major Areas</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>RS Puram</span>
                <span>•</span>
                <span>Peelamedu</span>
                <span>•</span>
                <span>Saravanampatti</span>
                <span>•</span>
                <span>Gandhipuram</span>
                <span>•</span>
                <span>Ganapathy</span>
                <span>•</span>
                <span>Vadavalli</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

