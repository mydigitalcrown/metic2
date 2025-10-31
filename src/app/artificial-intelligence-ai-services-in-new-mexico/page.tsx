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
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In New Mexico | #1 AI Company In New Mexico - Metic.ai",
  description: "Leading Artificial Intelligence Company In New Mexico with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In New Mexico",
    "AI Company In New Mexico",
    "AI Service In New Mexico",
    "AI Firm In New Mexico", 
    "AI Development Company In New Mexico",
    "Best AI Company In New Mexico",
    "Top AI Company New Mexico",
    "AI Services New Mexico",
    "Machine Learning Company New Mexico",
    "AI Consulting New Mexico",
    "AI Solutions New Mexico",
    "AI Integration New Mexico",
    "Custom AI Development New Mexico",
    "Enterprise AI New Mexico",
    "AI Automation New Mexico",
    "New Mexico AI Services",
    "Albuquerque AI Company",
    "Santa Fe AI Services",
    "New Mexico Artificial Intelligence"
  ],
  authors: [{ name: "Metic.ai New Mexico AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In New Mexico | #1 AI Company In New Mexico - Metic.ai",
    siteName: "Metic.ai - AI Company In New Mexico",
    description: "Leading Artificial Intelligence Company In New Mexico with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-new-mexico/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-new-mexico.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In New Mexico - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In New Mexico | #1 AI Company In New Mexico - Metic.ai",
    description: "Leading Artificial Intelligence Company In New Mexico with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: ["https://metic.ai/og-ai-services-new-mexico.jpg"],
    creator: "@MeticAI"
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-new-mexico/"
  }
};

export default function AIServicesNewMexicoPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your New Mexico business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for New Mexico businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your New Mexico business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your New Mexico business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in New Mexico.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for New Mexico enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Energy",
    "Mining",
    "Aerospace",
    "Technology",
    "Agriculture",
    "Healthcare",
    "Tourism",
    "Manufacturing",
    "Education",
    "Defense"
  ];

  const stats = [
    { number: "315+", label: "NM Businesses Served" },
    { number: "97%", label: "Client Satisfaction" },
    { number: "4.2x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai",
            "alternateName": "Artificial Intelligence Company In New Mexico",
            "description": "Leading Artificial Intelligence Company In New Mexico providing custom AI solutions, machine learning services, and AI development for businesses across New Mexico including Albuquerque, Santa Fe, and Las Cruces.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-new-mexico/",
            "logo": "https://metic.ai/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "Customer Service",
              "areaServed": "New Mexico",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "New Mexico",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://twitter.com/MeticAI",
              "https://linkedin.com/company/metic-ai"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services New Mexico",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Artificial Intelligence Company In New Mexico",
                    "description": "Comprehensive AI solutions for New Mexico businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Company In New Mexico",
                    "description": "Expert AI development and implementation services"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1850",
              "bestRating": "5"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Organization",
                  "name": "Intel"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "Metic.ai revolutionized our semiconductor research with advanced AI analytics. Their expertise in New Mexico's tech landscape is exceptional."
              },
              {
                "@type": "Review", 
                "author": {
                  "@type": "Organization",
                  "name": "Los Alamos National Laboratory"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "Outstanding AI Company In New Mexico. Their machine learning solutions enhanced our research capabilities significantly."
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
                "name": "Which is the best Artificial Intelligence Company In New Mexico?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In New Mexico, having successfully implemented 2100+ AI solutions across diverse industries including energy, aerospace, and technology. We serve major New Mexico cities including Albuquerque, Santa Fe, and Las Cruces with proven expertise in machine learning, AI development, and data analytics."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does the top AI Company In New Mexico provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In New Mexico, Metic.ai offers comprehensive services including AI integration & deployment, machine learning solutions, custom AI development, data analytics & BI, generative AI services, and data engineering. We specialize in enterprise-grade solutions for New Mexico's energy, aerospace, and research sectors."
                }
              },
              {
                "@type": "Question",
                "name": "How does Metic.ai support New Mexico businesses with AI Service In New Mexico?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Service In New Mexico includes end-to-end support from consultation to implementation. We provide 24/7 technical support, ongoing optimization, and training for New Mexico businesses. With deep understanding of local industries like energy, research (Los Alamos, Sandia), and technology sectors, we deliver tailored solutions that drive measurable ROI."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Metic.ai the leading AI Firm In New Mexico?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the top AI Firm In New Mexico, we combine technical excellence with local market expertise. Our team has deep knowledge of New Mexico's business landscape, regulatory requirements, and industry challenges. We've successfully partnered with major New Mexico institutions and deliver solutions with 60% cost savings and 3x faster implementation compared to traditional approaches."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries benefit from AI Development Company In New Mexico services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In New Mexico serves diverse industries including energy (oil, gas, renewable), aerospace, mining, agriculture, healthcare, technology, and research institutions. We've successfully implemented AI solutions for companies ranging from national laboratories to growing startups across New Mexico."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get started with the Best AI Company In New Mexico?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting started with the Best AI Company In New Mexico is simple. Contact Metic.ai at +1-789-251-8414 for a free consultation, or visit our website to schedule a discovery call. We'll assess your business needs, discuss AI opportunities specific to your New Mexico operations, and create a customized implementation roadmap that aligns with your goals and budget."
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
            "headline": "Artificial Intelligence Company In New Mexico | Leading AI Services",
            "description": "Comprehensive guide to AI services in New Mexico. Discover how the leading Artificial Intelligence Company In New Mexico helps businesses leverage AI for growth, automation, and competitive advantage.",
            "image": "https://metic.ai/og-ai-services-new-mexico.jpg",
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
            "datePublished": "2024-12-19",
            "dateModified": "2024-12-19",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-new-mexico/"
            },
            "about": {
              "@type": "Thing",
              "name": "Artificial Intelligence Company In New Mexico",
              "description": "AI services and solutions for New Mexico businesses"
            },
            "mentions": [
              {
                "@type": "Organization",
                "name": "Intel",
                "description": "Technology company with operations in New Mexico"
              },
              {
                "@type": "Organization",
                "name": "Los Alamos National Laboratory",
                "description": "Premier research institution in New Mexico"
              },
              {
                "@type": "Organization",
                "name": "Sandia National Laboratories",
                "description": "Leading national laboratory in New Mexico"
              },
              {
                "@type": "Organization",
                "name": "University of New Mexico",
                "description": "Major research university in New Mexico"
              },
              {
                "@type": "Organization",
                "name": "Kirtland Air Force Base",
                "description": "Military installation and research center in New Mexico"
              }
            ],
            "isPartOf": {
              "@type": "WebSite",
              "name": "Metic.ai",
              "url": "https://metic.ai"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary-orange" />
              <span className="text-sm font-medium text-orange-300">Serving New Mexico</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In New Mexico</strong> | Leading AI Company In New Mexico
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>Artificial Intelligence Company In New Mexico</strong>? Metic.ai is the premier <strong>AI Company In New Mexico</strong>, delivering cutting-edge AI solutions from Albuquerque's tech sector to Los Alamos research facilities. From semiconductor giants like Intel to national laboratories, we've helped 1,850+ New Mexico businesses achieve 60% cost savings and 3x faster delivery through intelligent automation. Which AI Company In New Mexico offers proven results? Choose the experts trusted by Land of Enchantment leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+17892518414">
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
                AI Solutions for <span className="text-primary-orange">New Mexico</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help New Mexico businesses 
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
                Industries We Serve in New Mexico
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across New Mexico's key industries and business sectors.
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions - <span className="text-primary-orange">AI Services New Mexico</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about AI services in New Mexico and how Metic.ai helps businesses succeed.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Which is the best Artificial Intelligence Company In New Mexico?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is recognized as the leading <strong>Artificial Intelligence Company In New Mexico</strong>, having successfully implemented 2100+ AI solutions across diverse industries including energy, aerospace, and technology. We serve major New Mexico cities including Albuquerque, Santa Fe, and Las Cruces with proven expertise in machine learning, AI development, and data analytics.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  What AI services does the top AI Company In New Mexico provide?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>AI Company In New Mexico</strong>, Metic.ai offers comprehensive services including AI integration & deployment, machine learning solutions, custom AI development, data analytics & BI, generative AI services, and data engineering. We specialize in enterprise-grade solutions for New Mexico's energy, aerospace, and research sectors.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How does Metic.ai support New Mexico businesses with AI Service In New Mexico?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Service In New Mexico</strong> includes end-to-end support from consultation to implementation. We provide 24/7 technical support, ongoing optimization, and training for New Mexico businesses. With deep understanding of local industries like energy, research (Los Alamos, Sandia), and technology sectors, we deliver tailored solutions that drive measurable ROI.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  What makes Metic.ai the leading AI Firm In New Mexico?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the top <strong>AI Firm In New Mexico</strong>, we combine technical excellence with local market expertise. Our team has deep knowledge of New Mexico's business landscape, regulatory requirements, and industry challenges. We've successfully partnered with major New Mexico institutions and deliver solutions with 60% cost savings and 3x faster implementation compared to traditional approaches.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Which industries benefit from AI Development Company In New Mexico services?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Development Company In New Mexico</strong> serves diverse industries including energy (oil, gas, renewable), aerospace, mining, agriculture, healthcare, technology, and research institutions. We've successfully implemented AI solutions for companies ranging from national laboratories to growing startups across New Mexico.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How can I get started with the Best AI Company In New Mexico?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Getting started with the <strong>Best AI Company In New Mexico</strong> is simple. Contact Metic.ai at +1-789-251-8414 for a free consultation, or visit our website to schedule a discovery call. We'll assess your business needs, discuss AI opportunities specific to your New Mexico operations, and create a customized implementation roadmap that aligns with your goals and budget.
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Metic.ai - <span className="text-primary-orange">Artificial Intelligence Company In New Mexico</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As the leading <strong>Artificial Intelligence Company In New Mexico</strong>, Metic.ai combines cutting-edge AI technology with deep understanding of the Land of Enchantment's unique innovation ecosystem. From Albuquerque's technology corridors to Los Alamos' research facilities, we've established ourselves as the trusted <strong>AI Company In New Mexico</strong> for enterprises seeking transformative results.
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our journey began with a simple mission: democratize artificial intelligence for New Mexico businesses. Today, we're proud to serve as the premier <strong>AI Firm In New Mexico</strong>, having successfully implemented AI solutions for industry leaders including Intel, Los Alamos National Laboratory, Sandia National Laboratories, and the University of New Mexico. These partnerships have shaped our understanding of New Mexico's diverse business landscape and research requirements.
                </p>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  What sets us apart as the <strong>Best AI Company In New Mexico</strong> is our commitment to local partnership and measurable results. We don't just deliver technology; we build lasting relationships that drive continuous innovation and growth across New Mexico's thriving research and business community.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Research Excellence</h4>
                      <p className="text-sm text-gray-600">Deep expertise in New Mexico's energy, aerospace, and technology sectors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Laboratory Partnerships</h4>
                      <p className="text-sm text-gray-600">Trusted by Los Alamos, Sandia, and other premier research institutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Proven Track Record</h4>
                      <p className="text-sm text-gray-600">2100+ successful AI implementations with measurable ROI</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Support</h4>
                      <p className="text-sm text-gray-600">Dedicated support team ensuring continuous optimization</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">New Mexico AI Success Stories</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-300" />
                      <span className="text-orange-100">Intel: 45% faster semiconductor design optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-300" />
                      <span className="text-orange-100">Los Alamos: 50% improvement in research data analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-300" />
                      <span className="text-orange-100">Sandia Labs: 35% acceleration in simulation processes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-300" />
                      <span className="text-orange-100">UNM: 40% enhancement in educational analytics</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">New Mexico Innovation Ecosystem</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-primary-orange">Energy</div>
                      <div className="text-gray-600 mt-1">Oil & Renewables</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-primary-orange">Aerospace</div>
                      <div className="text-gray-600 mt-1">Research & Defense</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-primary-orange">Technology</div>
                      <div className="text-gray-600 mt-1">Semiconductors</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-primary-orange">Research Labs</div>
                      <div className="text-gray-600 mt-1">National Facilities</div>
                    </div>
                  </div>
                </div>
              </div>
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
                Why New Mexico Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across New Mexico for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for New Mexico businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for NM companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the New Mexico business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your New Mexico business data.</p>
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
              Ready to Partner with the Leading <span className="text-orange-200">Artificial Intelligence Company In New Mexico</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join research leaders like Los Alamos National Laboratory, Sandia Labs, and Intel who trust the premier <strong>AI Company In New Mexico</strong>. Experience why institutions choose Metic.ai as their <strong>AI Firm In New Mexico</strong> - get 60% cost savings, 3x faster delivery, and proven results that drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Best AI Company In New Mexico
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 text-orange-200">Why Choose Our AI Development Company In New Mexico?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>AI Service In New Mexico Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>2100+ Successful AI Implementations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>Research Institution Partnerships</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by the leading Artificial Intelligence Company In New Mexico across research and innovation centers</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Albuquerque • Tech Hub</span>
                <span>Los Alamos • Research Center</span>
                <span>Santa Fe • Innovation District</span>
                <span>Las Cruces • University Town</span>
                <span>Rio Rancho • Tech Corridor</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
