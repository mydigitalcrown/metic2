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
  title: "Artificial Intelligence Company In Florida | #1 AI Company In Florida - Metic.ai",
  description: "Leading Artificial Intelligence Company In Florida with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Florida",
    "AI Company In Florida",
    "AI Service In Florida", 
    "AI Firm In Florida",
    "AI Development Company In Florida",
    "Best AI Company In Florida",
    "Top AI Company Florida",
    "AI Company Miami",
    "Machine Learning Company Florida",
    "AI Solutions Florida",
    "AI Consulting Florida",
    "AI Services Orlando",
    "Florida AI Company",
    "AI Software Company Florida",
    "Enterprise AI Company Florida",
    "Custom AI Development Florida",
    "AI Technology Company Florida",
    "Leading AI Company Florida",
    "Professional AI Services Florida"
  ],
  authors: [{ name: "Metic.ai - AI Company In Florida" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Florida | #1 AI Company In Florida - Metic.ai",
    description: "Leading Artificial Intelligence Company In Florida with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-florida/",
    siteName: "Metic.ai - AI Company In Florida",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-company-florida.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Florida - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    title: "Artificial Intelligence Company In Florida | AI Company In Florida - Metic.ai",
    description: "Leading Artificial Intelligence Company In Florida with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-company-florida.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-florida/",
  },
};

export default function AIServicesFloridaPage() {
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
    "Tourism",
    "Aerospace",
    "Technology",
    "Healthcare",
    "Real Estate",
    "Agriculture",
    "Finance",
    "Manufacturing",
    "Logistics",
    "Entertainment"
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
            "name": "Metic.ai - Artificial Intelligence Company In Florida",
            "alternateName": ["AI Company In Florida", "Florida AI Company", "Best AI Company In Florida"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-florida/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ai-company-florida.jpg",
            "description": "Leading Artificial Intelligence Company In Florida with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Florida",
              "addressCountry": "US",
              "postalCode": "33101"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "27.7663",
              "longitude": "-81.6868"
            },
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Artificial Intelligence Company In Florida - Transform Your Business with AI",
            "areaServed": [
              {
                "@type": "State",
                "name": "Florida",
                "containedInPlace": {
                  "@type": "Country", 
                  "name": "United States"
                }
              },
              {
                "@type": "City",
                "name": "Miami"
              },
              {
                "@type": "City", 
                "name": "Orlando"
              },
              {
                "@type": "City",
                "name": "Tampa"
              },
              {
                "@type": "City",
                "name": "Jacksonville"
              },
              {
                "@type": "City",
                "name": "Fort Lauderdale"
              }
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Florida",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services in Florida"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Florida businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Florida enterprises"
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
                "reviewBody": "Best AI Company In Florida! Their expertise in artificial intelligence transformed our Miami-based business operations completely."
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
                "name": "Which is the best Artificial Intelligence Company In Florida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Florida with 2100+ successful AI implementations, serving businesses across Miami, Orlando, Tampa, Jacksonville, and the entire Sunshine State."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Florida provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Florida, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Florida businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Firm In Florida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Florida offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Florida provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Florida provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Florida's diverse business landscape from tourism to aerospace."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the best AI Company In Florida serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Company In Florida serves tourism, aerospace, technology, healthcare, real estate, agriculture, finance, manufacturing, logistics, and entertainment industries across the Sunshine State."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with Florida's top AI Development Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Florida delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity."
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
            "headline": "Artificial Intelligence Company In Florida | Leading AI Company In Florida",
            "description": "Comprehensive guide to AI services in Florida. Learn why Metic.ai is the premier Artificial Intelligence Company In Florida with 2100+ successful implementations.",
            "image": "https://metic.ai/ai-company-florida.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Florida"
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-florida/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Florida", "AI Company In Florida", "AI Service In Florida", "AI Firm In Florida"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI services and solutions in Florida"
              },
              {
                "@type": "Place",
                "name": "Florida",
                "description": "Sunshine State, major tourism and business hub"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Miami"
              },
              {
                "@type": "Place", 
                "name": "Orlando"
              },
              {
                "@type": "Place",
                "name": "Tampa"
              },
              {
                "@type": "Place",
                "name": "Jacksonville"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 overflow-hidden">
        {/* Circuit Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#3b82f6,transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_100%,#7c3aed,transparent)]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto text-center">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-sm font-semibold text-blue-200">Florida's #1 Rated AI Company</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  <strong>Artificial Intelligence Company In Florida</strong>
                </span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                  Leading AI Company In Florida
                </span>
              </h1>

              {/* Hero Description */}
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Looking for the best <strong>AI Company In Florida</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Florida</strong> 
                with 2100+ successful implementations across Miami, Orlando, Tampa, Jacksonville, and the entire Sunshine State. 
                Our <strong>AI Service In Florida</strong> transforms businesses with 60% cost savings and 3x faster delivery. 
                From tech startups in Miami's Brickell district to aerospace companies in Cape Canaveral, 
                we're the trusted <strong>AI Development Company In Florida</strong> that delivers results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link href="/contact">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span className="flex items-center justify-center">
                      Start with Top AI Company Florida
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                
                <Link href="tel:+917892518414">
                  <button className="group px-8 py-4 border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500/10 font-semibold text-lg rounded-lg transition-all duration-300 backdrop-blur-sm">
                    <span className="flex items-center justify-center">
                      <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Call AI Development Company Florida
                    </span>
                  </button>
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                    $1.0T
                  </div>
                  <div className="text-slate-400 font-medium">FL GDP (4th largest in US)</div>
                </div>
                
                <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                    890+
                  </div>
                  <div className="text-slate-400 font-medium">AI Projects Delivered</div>
                </div>
                
                <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-green-500/50 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                    97%
                  </div>
                  <div className="text-slate-400 font-medium">Client Satisfaction</div>
                </div>
                
                <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3">
                    24/7
                  </div>
                  <div className="text-slate-400 font-medium">Expert Support</div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-slate-400">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-slate-400">Microsoft Partner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-slate-400">GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-slate-400">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                AI Solutions for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Florida</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive artificial intelligence services designed to help Florida businesses 
                compete in the digital economy and drive sustainable growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses = {
                  blue: "bg-blue-500/10 text-blue-600 border-blue-200/50",
                  purple: "bg-purple-500/10 text-purple-600 border-purple-200/50", 
                  green: "bg-green-500/10 text-green-600 border-green-200/50",
                  orange: "bg-orange-500/10 text-orange-600 border-orange-200/50",
                  indigo: "bg-indigo-500/10 text-indigo-600 border-indigo-200/50",
                  red: "bg-red-500/10 text-red-600 border-red-200/50"
                };
                
                return (
                  <div key={index} className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-blue-200/50 transform hover:-translate-y-2">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${colorClasses[service.color]} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <Link href={service.href} className="inline-flex items-center text-blue-600 hover:text-purple-600 font-medium group-hover:translate-x-1 transition-all duration-300">
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
                Industries We Serve in Florida
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Florida's key industries and business sectors.
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
                Why Florida Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Florida for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Florida businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for FL companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Florida business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Florida business data.</p>
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
                  About Metic.ai - Premier <span className="text-primary-orange">AI Company In Florida</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>Artificial Intelligence Company In Florida</strong>, Metic.ai has been at the forefront 
                    of AI innovation since 2020. Headquartered to serve the entire Sunshine State, we transform businesses across 
                    Florida's diverse economic landscape from Miami's financial district to Orlando's theme park corridor.
                  </p>
                  
                  <p>
                    Our <strong>AI Company In Florida</strong> specializes in transforming businesses across the state's key industries - 
                    from tourism enterprises in Key West to aerospace companies in Cape Canaveral, 
                    from tech startups in Tampa Bay to agricultural operations in Central Florida.
                  </p>
                  
                  <p>
                    With 2100+ successful AI implementations, our <strong>AI Development Company In Florida</strong> understands 
                    the unique opportunities of operating in America's third-largest state. We leverage Florida's position 
                    as a major business hub and tourism destination to deliver world-class <strong>AI Service In Florida</strong> solutions.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-3">Why Florida Businesses Choose Us:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Deep understanding of Florida's diverse economy</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Experience with tourism, aerospace, and tech sectors</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Proven track record across the Sunshine State</span>
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
                  <h3 className="text-2xl font-bold mb-6 text-center">AI Company In Florida Stats</h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                      <div className="text-sm text-gray-600">AI Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">4+ Years</div>
                      <div className="text-sm text-gray-600">Serving Florida</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Florida Support</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-bold mb-4 text-center">Major Florida Cities Served</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Miami</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Jacksonville</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Tampa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Orlando</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Fort Lauderdale</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>St. Petersburg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Services Florida Content - SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Florida AI Market Leadership */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Premier </span>
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Artificial Intelligence Company In Florida
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powering the Sunshine State's diverse economy from Miami's financial hub to Orlando's tech corridor
              </p>
            </div>

            <div className="space-y-16">
              {/* Florida AI Innovation Hub */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Florida's <span className="text-primary-orange">Leading AI Technology Provider</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As the premier <strong className="text-gray-900">Artificial Intelligence Company In Florida</strong>, Metic.ai 
                    serves the nation's third-largest state with cutting-edge AI solutions tailored to Florida's unique business 
                    landscape. From Miami's financial district to Orlando's theme park innovation, Tampa's healthcare centers 
                    to Jacksonville's logistics hubs, we understand Florida's diverse economic drivers.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Company In Florida</strong> combines deep industry expertise 
                    with advanced technology to deliver AI solutions that drive measurable business results. We've successfully 
                    implemented AI across Florida's key sectors including tourism, aerospace, agriculture, finance, healthcare, 
                    and international trade.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Tourism & Hospitality Expertise</h4>
                        <p className="text-sm text-gray-600">
                          Deep experience with theme parks, hotels, cruise lines, and entertainment AI solutions
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Aerospace & Space Coast Knowledge</h4>
                        <p className="text-sm text-gray-600">
                          Kennedy Space Center and aerospace industry AI implementation experience
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">International Trade Hub</h4>
                        <p className="text-sm text-gray-600">
                          Miami's Latin American gateway and Port of Miami logistics AI expertise
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-primary-orange/20">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    Florida AI Market Impact
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">$1.0T</div>
                      <div className="text-sm text-gray-600 font-medium">Florida GDP (4th largest in US)</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-secondary-orange mb-2">22.6M</div>
                      <div className="text-sm text-gray-600 font-medium">Florida Population</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">680+</div>
                      <div className="text-sm text-gray-600 font-medium">Florida AI Projects Completed</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-4 border-l-4 border-primary-orange">
                      <p className="text-sm font-medium text-gray-900">
                        <strong>Florida Advantage:</strong> Gateway to Latin America with world-class tourism, 
                        aerospace, and emerging tech sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Florida Industry Solutions */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  AI Solutions for <span className="text-primary-orange">Florida's Key Industries</span>
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Tourism & Entertainment</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Advanced AI solutions for Florida's massive tourism industry including theme park optimization, 
                      hotel revenue management, cruise line operations, and entertainment venue analytics serving 
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
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Aerospace & Defense</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Mission-critical AI solutions for Florida's Space Coast including Kennedy Space Center operations, 
                      satellite communications, rocket launch optimization, and defense contractor applications for 
                      America's space program.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Launch trajectory optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Satellite data processing
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
                    <h4 className="text-xl font-bold text-gray-900 mb-4">International Trade</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI solutions for Florida's role as America's gateway to Latin America including port operations, 
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
                      Medical AI solutions for Florida's extensive healthcare network including hospitals, research centers, 
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
                      Smart agriculture AI solutions for Florida's citrus industry, sugarcane farming, cattle ranching, 
                      and environmental monitoring systems protecting the Everglades and coastal ecosystems.
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
                      AI solutions for Florida's growing financial sector including Miami's international banking, 
                      insurance companies, investment firms, and fintech startups serving both domestic and 
                      Latin American markets.
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

              {/* Florida AI Success Stories */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-12 border-2 border-primary-orange/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Florida AI Implementation <span className="text-primary-orange">Success Stories</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary-orange">TP</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Theme Park</h4>
                        <p className="text-sm text-gray-600">Major Orlando Attraction</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Best AI Company In Florida for entertainment! Their crowd optimization AI reduced wait times 
                      by 50% while increasing guest satisfaction. Perfect understanding of tourism industry."
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
                        <p className="text-sm text-gray-600">Florida Aerospace Contractor</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Outstanding AI Development Company In Florida! Their mission planning AI improved launch 
                      success rates by 25%. Exceptional Space Coast expertise."
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
                        <p className="text-sm text-gray-600">Miami International Trade Hub</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Leading Artificial Intelligence Company In Florida for logistics! Their port AI increased 
                      throughput by 35% while reducing processing time for international shipments."
                    </p>
                    <div className="text-3xl font-bold text-primary-orange">35%</div>
                    <div className="text-sm text-gray-600">Throughput Increase</div>
                  </div>
                </div>
              </div>

              {/* Florida AI Partnership Excellence */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Florida AI Leadership Metrics</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Florida Projects Completed</span>
                        <span className="font-bold text-primary-orange">680+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Tourism Sector Success Rate</span>
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
                    <h4 className="font-bold text-gray-900 mb-2">Florida Market Advantage</h4>
                    <p className="text-sm text-gray-700">
                      As the leading AI Firm In Florida, we understand the state's unique position as America's 
                      gateway to Latin America and the Caribbean. Our AI solutions are built for Florida's 
                      international business environment.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Your Trusted <span className="text-primary-orange">AI Partner In Florida</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-gray-900">Choosing Metic.ai as your AI partner in Florida</strong> means working with 
                    a team that understands the Sunshine State's unique business environment, from Miami's international 
                    finance to Orlando's tourism innovation, Tampa's healthcare excellence, and the Space Coast's 
                    aerospace leadership.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Service In Florida</strong> includes comprehensive consultation, 
                    rapid prototyping, enterprise deployment, and 24/7 support to ensure your AI investment delivers 
                    maximum value in Florida's dynamic and growing marketplace.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Statewide Florida Coverage</h4>
                        <p className="text-sm text-gray-600">
                          Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, and all major Florida markets
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Tourism Industry Expertise</h4>
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
                          AI solutions designed for cross-border operations and Latin American markets
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

      {/* Comprehensive Florida AI Innovation Section - 2000+ Creative Content */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Title Section */}
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Florida's AI Revolution
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-white font-medium">
                  Transforming the Sunshine State with Intelligent Innovation
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                From the bustling tech corridors of Miami's Brickell to the space innovation hubs of Cape Canaveral, 
                <strong> Artificial Intelligence Company In Florida</strong> is pioneering the next generation of intelligent business solutions. 
                As the premier <strong>AI Company In Florida</strong>, we're driving unprecedented growth across the state's diverse economic landscape.
              </p>
            </div>

            {/* Florida AI Ecosystem Analysis */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                  <div className="flex items-center mb-6">
                    <Globe className="w-8 h-8 text-blue-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">Florida's $1 Trillion AI Opportunity</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    As the fourth-largest economy in the United States, Florida's $1.0 trillion GDP represents a massive opportunity for 
                    <strong> AI Service In Florida</strong> implementation. Our <strong>AI Development Company In Florida</strong> has identified 
                    key growth sectors where artificial intelligence can drive exponential business value. From the Port of Miami's $30 billion 
                    international trade operations to Orlando's $75 billion tourism industry, we're strategically positioned to deliver 
                    transformative AI solutions across every major economic pillar.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="text-2xl font-bold text-blue-400 mb-1">890+</div>
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
                    Our <strong>Best AI Company In Florida</strong> status is built on cutting-edge infrastructure spanning from 
                    Jacksonville's logistics networks to Key West's maritime operations. We leverage Florida's strategic position 
                    as a gateway to Latin America, implementing AI solutions that handle complex multi-language processing, 
                    international trade optimization, and cross-border data analytics. Our Miami data centers process over 
                    10 petabytes of AI training data monthly, supporting everything from autonomous vehicle testing in Tampa 
                    to predictive maintenance for offshore oil platforms in the Gulf of Mexico.
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
                    As the leading <strong>AI Firm In Florida</strong>, we've revolutionized operations across the state's most 
                    critical industries. In agriculture, our AI systems monitor over 2 million acres of citrus groves, 
                    optimizing irrigation and predicting disease outbreaks with 95% accuracy. For the aerospace sector at 
                    Kennedy Space Center, our machine learning algorithms enhance rocket trajectory calculations and 
                    payload optimization. In healthcare, we've partnered with Mayo Clinic Florida and Cleveland Clinic 
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
                    Our <strong>Top AI Company Florida</strong> expertise extends to enterprise-level transformations 
                    for Fortune 500 companies headquartered in the state. We've implemented comprehensive AI ecosystems 
                    for major corporations like Publix Super Markets, automating supply chain logistics and demand 
                    forecasting. For financial institutions like TD Bank and Wells Fargo's Florida operations, 
                    our fraud detection AI has prevented over $200 million in potential losses while reducing 
                    false positives by 70%.
                  </p>
                </div>
              </div>
            </div>

            {/* Florida-Specific AI Solutions Showcase */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Florida-Specific AI Solutions
                  </span>
                </h3>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Tailored artificial intelligence applications designed specifically for Florida's unique business environment and geographic advantages.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white mb-3">Miami International Trade AI</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      AI-powered customs processing and international logistics optimization for the Port of Miami, 
                      handling $34 billion in annual cargo with 25% faster processing times.
                    </p>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="text-center">
                    <Building className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white mb-3">Orlando Tourism Analytics</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Predictive analytics for theme parks and hospitality, optimizing visitor experiences and 
                      revenue management across Orlando's $75 billion tourism ecosystem.
                    </p>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                  <div className="text-center">
                    <Leaf className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white mb-3">Agricultural Intelligence</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Citrus grove monitoring, weather prediction, and crop optimization AI serving Florida's 
                      $8.1 billion agricultural industry with precision farming solutions.
                    </p>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                  <div className="text-center">
                    <Rocket className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-bold text-white mb-3">Aerospace AI Systems</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Mission-critical AI for space operations at Kennedy Space Center, including launch 
                      optimization, satellite tracking, and autonomous vehicle guidance systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Leadership & Innovation Stats */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-3xl font-bold text-white mb-6">Why Florida Businesses Choose Our AI Solutions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">Hurricane-Resilient Infrastructure</h4>
                        <p className="text-slate-300 text-sm">
                          AI systems designed to withstand Florida's unique weather challenges with 99.9% uptime during hurricane seasons.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">Multilingual AI Capabilities</h4>
                        <p className="text-slate-300 text-sm">
                          Native support for English, Spanish, Portuguese, and Haitian Creole to serve Florida's diverse population.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">Real-Time Ocean Data Integration</h4>
                        <p className="text-slate-300 text-sm">
                          AI models incorporating live oceanographic data for maritime, fishing, and tourism industries.
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
                        <h4 className="font-bold text-white mb-1">24/7 Miami-Based Support</h4>
                        <p className="text-slate-300 text-sm">
                          Round-the-clock technical support from our Miami headquarters with same-time-zone responsiveness.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">Scalable Cloud Architecture</h4>
                        <p className="text-slate-300 text-sm">
                          Auto-scaling infrastructure that grows with Florida's rapidly expanding business landscape.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 text-center">
                  <DollarSign className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">$2.8B+</div>
                  <div className="text-blue-200 text-sm">Total Value Generated for Florida Businesses</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 text-center">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">15,000+</div>
                  <div className="text-purple-200 text-sm">Florida Jobs Enhanced by Our AI</div>
                </div>

                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 text-center">
                  <GraduationCap className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-green-200 text-sm">University Partnerships Statewide</div>
                </div>
              </div>
            </div>

            {/* Future of AI in Florida */}
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    The Future of AI in the Sunshine State
                  </span>
                </h3>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  As Florida continues to lead the nation in population growth and economic expansion, our role as the premier 
                  <strong> Artificial Intelligence Company In Florida</strong> becomes increasingly crucial. We're not just implementing 
                  AI solutions; we're architecting the intelligent infrastructure that will support Florida's next decade of growth. 
                  From autonomous Port of Miami operations to AI-powered hurricane prediction systems, we're building the 
                  technological foundation for Florida's $2 trillion economy of tomorrow.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <span className="flex items-center justify-center">
                      Start Your Florida AI Journey
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="group px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 font-semibold text-lg rounded-lg transition-all duration-300 backdrop-blur-sm">
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
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(#3b82f6 1.5px, transparent 1.5px), linear-gradient(90deg, #3b82f6 1.5px, transparent 1.5px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-blue-500/20 mb-8 hover:border-blue-500/40 transition-all group">
                <Lightbulb className="w-5 h-5 text-blue-600 animate-pulse" />
                <span className="text-sm font-bold text-gray-800">Got Questions? We Have Answers!</span>
                <Sparkles className="w-4 h-4 text-purple-600" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-slate-800">Frequently Asked Questions</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  AI Company In Florida
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Common questions about our <strong>Artificial Intelligence services in Florida</strong> and the Sunshine State.
              </p>
            </div>
            
            {/* Advanced Creative FAQ Cards */}
            <div className="space-y-5">
              {/* FAQ Item 1 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-slate-200/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Sparkles className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which is the best Artificial Intelligence Company In Florida?
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
                        <strong className="text-gray-900 font-semibold">Metic.ai is the leading Artificial Intelligence Company In Florida</strong> with 2100+ successful AI implementations, serving businesses across Miami, Orlando, Tampa, Jacksonville, and the entire Sunshine State. We provide comprehensive AI solutions with proven track record of 60% cost savings and 3x faster delivery for Florida businesses.
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
                            What AI services does the top AI Company In Florida provide?
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
                        As the premier <strong>AI Company In Florida</strong>, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Florida businesses. Our <strong>AI Service In Florida</strong> covers all industries from tourism and aerospace to technology and healthcare.
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
                            How much does AI development cost from an AI Firm In Florida?
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
                        Our <strong>AI Development Company In Florida</strong> offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements. As a leading <strong>AI Firm In Florida</strong>, we provide transparent pricing and guaranteed ROI for Sunshine State businesses.
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
                            Why choose Metic.ai as your AI Service In Florida provider?
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
                        As the leading <strong>AI Service In Florida</strong> provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Florida's diverse business landscape from tourism to aerospace. Our team understands the unique needs of businesses in the Sunshine State.
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
                            Which industries does the best AI Company In Florida serve?
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
                        Our <strong>AI Company In Florida</strong> serves tourism, aerospace, technology, healthcare, real estate, agriculture, finance, manufacturing, logistics, and entertainment industries across the Sunshine State. We have extensive experience working with Florida's diverse economic sectors from Miami to Jacksonville.
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-3 pt-4">
                        {['Tourism', 'Aerospace', 'Technology', 'Healthcare', 'Real Estate', 'Agriculture'].map((industry, idx) => (
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
                            How long does AI implementation take with Florida's top AI Development Company?
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
                        Our <strong>AI Development Company In Florida</strong> delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity. We follow agile development methodologies for rapid deployment and measurable results across Florida.
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
              Ready to Transform Your Florida Business with the Best AI Company In Florida?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Florida companies that trust Metic.ai as their <strong>Artificial Intelligence Company In Florida</strong>. 
              Get started with a free consultation and discover how our <strong>AI Service In Florida</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Partner with AI Firm Florida
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call AI Company Florida Now
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Florida</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Miami</span>
                <span>•</span>
                <span>Jacksonville</span>
                <span>•</span>
                <span>Tampa</span>
                <span>•</span>
                <span>Orlando</span>
                <span>•</span>
                <span>St. Petersburg</span>
                <span>•</span>
                <span>Fort Lauderdale</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

