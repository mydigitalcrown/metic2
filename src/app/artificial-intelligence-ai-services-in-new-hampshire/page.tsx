import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
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
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In New Hampshire | #1 AI Company In New Hampshire - Metic.ai",
  description: "Leading Artificial Intelligence Company In New Hampshire with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In New Hampshire",
    "AI Company In New Hampshire",
    "AI Service In New Hampshire",
    "AI Firm In New Hampshire", 
    "AI Development Company In New Hampshire",
    "Best AI Company In New Hampshire",
    "Top AI Company New Hampshire",
    "AI Services New Hampshire",
    "Machine Learning Company New Hampshire",
    "AI Consulting New Hampshire",
    "AI Solutions New Hampshire",
    "AI Integration New Hampshire",
    "Custom AI Development New Hampshire",
    "Enterprise AI New Hampshire",
    "AI Automation New Hampshire",
    "New Hampshire AI Services",
    "Manchester AI Company",
    "Nashua AI Services",
    "New Hampshire Artificial Intelligence"
  ],
  authors: [{ name: "Metic.ai New Hampshire AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In New Hampshire | #1 AI Company In New Hampshire - Metic.ai",
    siteName: "Metic.ai - AI Company In New Hampshire",
    description: "Leading Artificial Intelligence Company In New Hampshire with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-new-hampshire/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-new-hampshire.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In New Hampshire - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In New Hampshire | #1 AI Company In New Hampshire - Metic.ai",
    description: "Leading Artificial Intelligence Company In New Hampshire with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: ["https://metic.ai/og-ai-services-new-hampshire.jpg"],
    creator: "@MeticAI"
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-new-hampshire/"
  }
};

export default function AIServicesNewHampshirePage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your New Hampshire business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for New Hampshire businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your New Hampshire business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your New Hampshire business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in New Hampshire.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for New Hampshire enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Technology",
    "Manufacturing",
    "Healthcare",
    "Tourism",
    "Agriculture",
    "Financial Services",
    "Education",
    "Aerospace",
    "Defense",
    "Biotechnology"
  ];

  const stats = [
    { number: "285+", label: "NH Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.4x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Structured Data for SEO - Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai - Artificial Intelligence Company In New Hampshire",
            "description": "Leading Artificial Intelligence Company In New Hampshire with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development serving Manchester, Nashua, Concord and across New Hampshire.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-new-hampshire/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-new-hampshire.jpg",
            "telephone": "+1-789-251-8414",
            "email": "info@metic.ai",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "New Hampshire",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "State",
              "name": "New Hampshire"
            },
            "serviceArea": [
              {
                "@type": "City",
                "name": "Manchester",
                "addressRegion": "New Hampshire"
              },
              {
                "@type": "City", 
                "name": "Nashua",
                "addressRegion": "New Hampshire"
              },
              {
                "@type": "City",
                "name": "Concord",
                "addressRegion": "New Hampshire"
              },
              {
                "@type": "City",
                "name": "Derry",
                "addressRegion": "New Hampshire"
              },
              {
                "@type": "City",
                "name": "Rochester",
                "addressRegion": "New Hampshire"
              }
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning",
              "AI Development",
              "Data Analytics",
              "Automation Solutions",
              "New Hampshire Business Technology",
              "Defense Technology",
              "Healthcare Innovation"
            ],
            "memberOf": {
              "@type": "Organization",
              "name": "New Hampshire Technology Alliance"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services New Hampshire",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services for New Hampshire businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for New Hampshire companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for New Hampshire business requirements"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "285",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Sarah Johnson"
                },
                "reviewBody": "Best AI Company In New Hampshire! Metic.ai revolutionized our Manchester operations with their innovative AI solutions."
              }
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage", 
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Artificial Intelligence Company In New Hampshire?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In New Hampshire, serving 2100+ businesses with proven AI solutions. We specialize in custom AI development, machine learning, and automation solutions for New Hampshire companies across all industries."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does the top AI Company In New Hampshire provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In New Hampshire, Metic.ai provides comprehensive AI services including machine learning solutions, custom AI development, data analytics, automation platforms, and AI integration services specifically designed for New Hampshire businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost in New Hampshire?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "AI development costs in New Hampshire vary based on project complexity. Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. We provide free consultations to New Hampshire businesses to determine exact project costs and ROI potential."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take for New Hampshire businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI implementation timelines for New Hampshire businesses typically range from 2-6 months depending on project scope. Metic.ai delivers 3x faster implementation than industry standards while maintaining quality and ensuring successful deployment."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose a local AI Company In New Hampshire vs national providers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choosing a local AI Company In New Hampshire like Metic.ai provides advantages including understanding of Granite State business challenges, on-site support in Manchester and Nashua, knowledge of New Hampshire regulations, and partnerships with local technology ecosystems for better integration and results."
                }
              },
              {
                "@type": "Question",
                "name": "What industries does the leading Artificial Intelligence Company In New Hampshire serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai serves all major New Hampshire industries including defense technology, healthcare innovation, manufacturing, education, financial services, and emerging technology sectors across Manchester, Nashua, Concord, and statewide."
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
            "headline": "Artificial Intelligence Company In New Hampshire | #1 AI Company In New Hampshire",
            "description": "Leading Artificial Intelligence Company In New Hampshire with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
            "image": "https://metic.ai/og-ai-services-new-hampshire.jpg",
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
            "datePublished": "2024-01-01",
            "dateModified": "2024-10-31",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-new-hampshire/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In New Hampshire", "AI Company In New Hampshire", "AI Service In New Hampshire", "New Hampshire AI Development"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI technology and solutions for New Hampshire businesses"
              },
              {
                "@type": "Place",
                "name": "New Hampshire",
                "description": "AI services and solutions across New Hampshire state"
              }
            ],
            "mentions": [
              {
                "@type": "Organization",
                "name": "BAE Systems",
                "description": "Major New Hampshire defense contractor utilizing AI solutions"
              },
              {
                "@type": "Organization", 
                "name": "DEKA Research & Development",
                "description": "New Hampshire innovation company implementing AI"
              },
              {
                "@type": "Organization",
                "name": "Liberty Mutual",
                "description": "New Hampshire insurance company leveraging AI"
              },
              {
                "@type": "Organization",
                "name": "C&S Wholesale Grocers",
                "description": "New Hampshire supply chain company using AI technology"
              },
              {
                "@type": "Organization",
                "name": "Southern New Hampshire University",
                "description": "New Hampshire education institution adopting AI solutions"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary-orange" />
              <span className="text-sm font-medium text-orange-300">Serving New Hampshire</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In New Hampshire</strong> | Leading 
              <span className="text-primary-orange">AI Company In New Hampshire</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In New Hampshire</strong>? Metic.ai is the premier 
              <strong>Artificial Intelligence Company In New Hampshire</strong> with 2100+ successful AI 
              implementations. From Manchester's business district to Nashua's tech corridor, we transform 
              New Hampshire businesses with 60% cost savings and 3x faster delivery. 
              <strong>AI Service In New Hampshire</strong> that delivers real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary-orange mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
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
                AI Solutions for <span className="text-primary-orange">New Hampshire</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help New Hampshire businesses 
                compete in the digital economy and drive sustainable growth.
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
                Industries We Serve in New Hampshire
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across New Hampshire's key industries and business sectors.
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

      {/* About New Hampshire AI Excellence Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why New Hampshire Businesses Choose Metic.ai as Their <strong>AI Company In New Hampshire</strong>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                As the leading <strong>Artificial Intelligence Company In New Hampshire</strong>, we understand 
                the unique advantages of the Granite State's business environment. From BAE Systems' defense 
                innovations to DEKA Research's breakthrough technologies, from Liberty Mutual's insurance solutions 
                to C&S Wholesale Grocers' supply chain operations, we deliver <strong>AI Service In New Hampshire</strong> 
                that drives Live Free or Die innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">New Hampshire Expertise</h3>
                <p className="text-gray-600">Deep understanding of New Hampshire's business landscape from defense technology to healthcare innovation, tailored <strong>AI Development Company In New Hampshire</strong> solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven ROI for New Hampshire</h3>
                <p className="text-gray-600">60% cost savings and 3x faster delivery for New Hampshire businesses. From DEKA Research's innovations to Southern New Hampshire University's programs, our <strong>AI Firm In New Hampshire</strong> delivers measurable results.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local New Hampshire Partnership</h3>
                <p className="text-gray-600">On-site support across Manchester, Nashua, Concord and statewide. Our <strong>Best AI Company In New Hampshire</strong> team understands Granite State values and business independence.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Defense-Grade Security</h3>
                <p className="text-gray-600">Military-level security meeting New Hampshire defense industry standards. Trusted by major New Hampshire corporations for sensitive data and critical AI implementations.</p>
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
                Frequently Asked Questions About AI Services In New Hampshire
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about choosing the right <strong>Artificial Intelligence Company In New Hampshire</strong>
              </p>
            </div>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <span>Which is the best Artificial Intelligence Company In New Hampshire?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </div>
                </button>
                <div className="px-6 pb-4 text-gray-600">
                  <p>
                    Metic.ai is recognized as the leading <strong>Artificial Intelligence Company In New Hampshire</strong>, 
                    serving 2100+ businesses with proven AI solutions. We specialize in custom AI development, 
                    machine learning, and automation solutions for New Hampshire companies across all industries.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <span>What AI services does the top AI Company In New Hampshire provide?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </div>
                </button>
                <div className="px-6 pb-4 text-gray-600">
                  <p>
                    As the premier <strong>AI Company In New Hampshire</strong>, Metic.ai provides comprehensive 
                    AI services including machine learning solutions, custom AI development, data analytics, 
                    automation platforms, and AI integration services specifically designed for New Hampshire businesses.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <span>How much does AI development cost in New Hampshire?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </div>
                </button>
                <div className="px-6 pb-4 text-gray-600">
                  <p>
                    AI development costs in New Hampshire vary based on project complexity. Metic.ai offers 
                    competitive pricing with 60% cost savings compared to traditional development. We provide 
                    free consultations to New Hampshire businesses to determine exact project costs and ROI potential.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <span>How long does AI implementation take for New Hampshire businesses?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </div>
                </button>
                <div className="px-6 pb-4 text-gray-600">
                  <p>
                    AI implementation timelines for New Hampshire businesses typically range from 2-6 months depending 
                    on project scope. Metic.ai delivers 3x faster implementation than industry standards while 
                    maintaining quality and ensuring successful deployment.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <span>Why choose a local AI Company In New Hampshire vs national providers?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </div>
                </button>
                <div className="px-6 pb-4 text-gray-600">
                  <p>
                    Choosing a local <strong>AI Company In New Hampshire</strong> like Metic.ai provides advantages 
                    including understanding of Granite State business challenges, on-site support in Manchester and Nashua, 
                    knowledge of New Hampshire regulations, and partnerships with local technology ecosystems for better integration and results.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <span>What industries does the leading Artificial Intelligence Company In New Hampshire serve?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </div>
                </button>
                <div className="px-6 pb-4 text-gray-600">
                  <p>
                    Metic.ai serves all major New Hampshire industries including defense technology, healthcare 
                    innovation, manufacturing, education, financial services, and emerging technology sectors 
                    across Manchester, Nashua, Concord, and statewide.
                  </p>
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
              Partner with New Hampshire's Leading <strong>Artificial Intelligence Company In New Hampshire</strong>
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join 2100+ businesses that chose Metic.ai as their trusted <strong>AI Company In New Hampshire</strong>. 
              From BAE Systems to DEKA Research, New Hampshire companies rely on our proven 
              <strong>AI Service In New Hampshire</strong> for transformation. Get your free consultation 
              and discover why we're the <strong>Best AI Company In New Hampshire</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Your Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call New Hampshire's Top AI Firm: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across New Hampshire</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Manchester</span>
                <span>•</span>
                <span>Nashua</span>
                <span>•</span>
                <span>Concord</span>
                <span>•</span>
                <span>Derry</span>
                <span>•</span>
                <span>Rochester</span>
                <span>•</span>
                <span>Salem</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
