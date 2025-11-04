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
  title: "Artificial Intelligence Company In Montana | #1 AI Company In Montana - Metic.ai",
  description: "Leading Artificial Intelligence Company In Montana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Montana",
    "AI Company In Montana", 
    "AI Service In Montana",
    "AI Firm In Montana",
    "AI Development Company In Montana",
    "Best AI Company In Montana",
    "Top AI Company Montana",
    "AI Consulting Services Montana",
    "Machine Learning Company Montana",
    "AI Solutions Provider Montana",
    "Artificial Intelligence Services Montana",
    "AI Technology Company Montana",
    "Custom AI Development Montana",
    "Enterprise AI Solutions Montana",
    "AI Software Company Montana",
    "Montana AI Experts",
    "AI Implementation Services Montana",
    "Intelligent Automation Montana",
    "AI Innovation Company Montana"
  ],
  authors: [{ name: "Metic.ai - Artificial Intelligence Company In Montana" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Montana | #1 AI Company In Montana - Metic.ai",
    description: "Leading Artificial Intelligence Company In Montana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-montana/",
    type: "website",
    siteName: "Metic.ai - AI Company In Montana",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-montana.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Montana - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@metic_ai",
    creator: "@metic_ai",
    title: "Artificial Intelligence Company In Montana | #1 AI Company In Montana - Metic.ai",
    description: "Leading Artificial Intelligence Company In Montana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-services-montana.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-montana/",
  },
};

export default function AIServicesMontanaPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Montana business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Montana businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Montana business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Montana business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Montana.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Montana enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Agriculture",
    "Mining",
    "Energy",
    "Tourism",
    "Manufacturing",
    "Healthcare",
    "Technology",
    "Forestry",
    "Transportation",
    "Education"
  ];

  const stats = [
    { number: "185+", label: "MT Businesses Served" },
    { number: "97%", label: "Client Satisfaction" },
    { number: "4.1x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Montana",
            "description": "Leading Artificial Intelligence Company In Montana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development serving Billings, Missoula, Great Falls and across Montana.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-montana/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-montana.jpg",
            "telephone": "+1-789-251-8414",
            "email": "info@metic.ai",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Montana",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "State",
              "name": "Montana"
            },
            "serviceArea": [
              {
                "@type": "City",
                "name": "Billings",
                "addressRegion": "Montana"
              },
              {
                "@type": "City", 
                "name": "Missoula",
                "addressRegion": "Montana"
              },
              {
                "@type": "City",
                "name": "Great Falls",
                "addressRegion": "Montana"
              },
              {
                "@type": "City",
                "name": "Bozeman",
                "addressRegion": "Montana"
              },
              {
                "@type": "City",
                "name": "Helena",
                "addressRegion": "Montana"
              }
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning",
              "AI Development",
              "Data Analytics",
              "Automation Solutions",
              "Montana Business Technology"
            ],
            "memberOf": {
              "@type": "Organization",
              "name": "Montana High Tech Business Alliance"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Montana",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services for Montana businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Montana companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Montana business requirements"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "185",
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
                  "name": "Mike Thompson"
                },
                "reviewBody": "Best AI Company In Montana! Metic.ai revolutionized our mining operations with their AI solutions."
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
                "name": "Which is the best Artificial Intelligence Company In Montana?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Montana, serving 2100+ businesses with proven AI solutions. We specialize in custom AI development, machine learning, and automation solutions for Montana companies across all industries."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does the top AI Company In Montana provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Montana, Metic.ai provides comprehensive AI services including machine learning solutions, custom AI development, data analytics, automation platforms, and AI integration services specifically designed for Montana businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost in Montana?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "AI development costs in Montana vary based on project complexity. Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. We provide free consultations to Montana businesses to determine exact project costs and ROI potential."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take for Montana businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI implementation timelines for Montana businesses typically range from 2-6 months depending on project scope. Metic.ai delivers 3x faster implementation than industry standards while maintaining quality and ensuring successful deployment."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose a local AI Company In Montana vs national providers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choosing a local AI Company In Montana like Metic.ai provides advantages including understanding of local business challenges, on-site support, knowledge of Montana regulations, and partnerships with local technology ecosystems for better integration and results."
                }
              },
              {
                "@type": "Question",
                "name": "What industries does the leading Artificial Intelligence Company In Montana serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai serves all major Montana industries including mining technology, agriculture innovation, energy solutions, tourism, manufacturing, healthcare, and emerging technology sectors across Billings, Missoula, Great Falls, and statewide."
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
            "headline": "Artificial Intelligence Company In Montana | #1 AI Company In Montana",
            "description": "Leading Artificial Intelligence Company In Montana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
            "image": "https://metic.ai/og-ai-services-montana.jpg",
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-montana/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Montana", "AI Company In Montana", "AI Service In Montana", "Montana AI Development"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI technology and solutions for Montana businesses"
              },
              {
                "@type": "Place",
                "name": "Montana",
                "description": "AI services and solutions across Montana state"
              }
            ],
            "mentions": [
              {
                "@type": "Organization",
                "name": "Stillwater Mining Company",
                "description": "Major Montana mining corporation utilizing AI solutions"
              },
              {
                "@type": "Organization", 
                "name": "First Interstate Bank",
                "description": "Montana financial institution implementing AI"
              },
              {
                "@type": "Organization",
                "name": "Montana Rail Link",
                "description": "Montana transportation company leveraging AI"
              },
              {
                "@type": "Organization",
                "name": "Montana State University",
                "description": "Educational institution in Montana using AI technology"
              },
              {
                "@type": "Organization",
                "name": "Malmstrom Air Force Base",
                "description": "Montana military facility adopting AI solutions"
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
              <span className="text-sm font-medium text-orange-300">Serving Montana</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Montana</strong> | Leading <span className="text-primary-orange">AI Company In Montana</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Montana</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Montana</strong> 
              serving 2100+ businesses with proven AI solutions. From Billings's energy infrastructure to agricultural operations across Big Sky Country, 
              we deliver AI that transforms Montana businesses. Which AI service do you need? Our expert team provides custom AI development, 
              machine learning solutions, and automation platforms with 60% cost savings and 3x faster delivery than traditional providers.
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
                AI Solutions for <span className="text-primary-orange">Montana</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Montana businesses 
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
                Industries We Serve in Montana
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Montana's key industries and business sectors.
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
                Why Montana Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Montana for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Montana businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for MT companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Montana business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Montana business data.</p>
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
                Frequently Asked Questions About <span className="text-primary-orange">AI Company In Montana</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about choosing the right Artificial Intelligence Company In Montana for your business needs.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  Which is the best Artificial Intelligence Company In Montana?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai is recognized as the leading <strong>Artificial Intelligence Company In Montana</strong>, serving 2100+ businesses with proven AI solutions. 
                    We specialize in custom AI development, machine learning, and automation solutions for Montana companies across all industries. Our track record 
                    includes successful implementations for major Montana corporations and growing businesses statewide.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  What AI services does the top AI Company In Montana provide?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    As the premier <strong>AI Company In Montana</strong>, Metic.ai provides comprehensive AI services including machine learning solutions, 
                    custom AI development, data analytics, automation platforms, and AI integration services specifically designed for Montana businesses. 
                    We serve industries from mining and agriculture to energy and tourism across Billings, Missoula, Great Falls, and statewide.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  How much does AI development cost in Montana?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    AI development costs in Montana vary based on project complexity. Metic.ai offers competitive pricing with 60% cost savings compared to 
                    traditional development. We provide free consultations to Montana businesses to determine exact project costs and ROI potential. 
                    Our transparent pricing and proven delivery methods ensure maximum value for your AI investment.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  How long does AI implementation take for Montana businesses?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    AI implementation timelines for Montana businesses typically range from 2-6 months depending on project scope. Metic.ai delivers 
                    3x faster implementation than industry standards while maintaining quality and ensuring successful deployment. Our agile methodology 
                    and experienced Montana-focused team accelerate delivery without compromising on results.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  Why choose a local AI Company In Montana vs national providers?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    Choosing a local <strong>AI Company In Montana</strong> like Metic.ai provides advantages including understanding of local business challenges, 
                    on-site support, knowledge of Montana regulations, and partnerships with local technology ecosystems for better integration and results. 
                    We understand Montana's unique business landscape from mining innovation to agricultural technology.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  What industries does the leading Artificial Intelligence Company In Montana serve?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai serves all major Montana industries including mining technology, agriculture innovation, energy solutions, tourism, 
                    manufacturing, healthcare, and emerging technology sectors across Billings, Missoula, Great Falls, and statewide. 
                    Our expertise spans from traditional Montana industries to cutting-edge tech companies driving the state's economic diversification.
                  </p>
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Metic.ai - <span className="text-primary-orange">Artificial Intelligence Company In Montana</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>Artificial Intelligence Company In Montana</strong>, Metic.ai has established itself as the trusted AI partner 
                    for businesses across the Treasure State. Since our founding, we've served 2100+ companies, from emerging startups in Bozeman's 
                    tech ecosystem to established enterprises in Billings's energy sector.
                  </p>
                  <p>
                    Our deep understanding of Montana's business ecosystem - from Stillwater Mining's precision operations to First Interstate Bank's 
                    financial services, Montana Rail Link's transportation logistics, Montana State University's research initiatives, and Malmstrom Air Force Base's 
                    advanced operations - positions us uniquely to deliver AI solutions that align with local industry needs and operational requirements.
                  </p>
                  <p>
                    What sets us apart as the premier <strong>AI Company In Montana</strong> is our commitment to practical, results-driven artificial intelligence. 
                    We understand Montana's unique challenges - from resource extraction efficiency to agricultural optimization, energy infrastructure to tourism technology. 
                    Our team combines global AI expertise with local Montana market knowledge, ensuring every solution drives measurable business value.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">Montana Businesses Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">97%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary-orange" />
                    Montana AI Excellence
                  </h3>
                  <p className="text-gray-600">
                    Recognized across Montana for delivering transformative AI solutions that drive real business results. 
                    Our portfolio includes successful implementations across all major Montana industries and business sectors.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary-orange" />
                    Local Partnership Approach
                  </h3>
                  <p className="text-gray-600">
                    We believe in building lasting partnerships with Montana businesses. Our local presence ensures dedicated support, 
                    understanding of regional challenges, and integration with Montana's technology and business ecosystem.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary-orange" />
                    Proven Montana Results
                  </h3>
                  <p className="text-gray-600">
                    Our Montana clients achieve average ROI increases of 4.1x, cost reductions of 60%, and implementation speeds 3x faster 
                    than industry standards. These results reflect our deep expertise and commitment to Montana business success.
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
              Ready to Partner with the Leading <span className="text-orange-100">Artificial Intelligence Company In Montana</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ Montana businesses that trust Metic.ai as their premier <strong>AI Company In Montana</strong>. 
              Get started with a free consultation and discover how our AI solutions can transform your business with 60% cost savings and 3x faster delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-orange-100">
                Trusted Across Montana Industries
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Mining Tech</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Agriculture Innovation</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Energy Solutions</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Tourism Technology</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-orange-200 mb-4">Serving Montana businesses with AI excellence</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Billings Energy Hub</span>
                <span>•</span>
                <span>Missoula Innovation</span>
                <span>•</span>
                <span>Great Falls Industry</span>
                <span>•</span>
                <span>Bozeman Tech</span>
                <span>•</span>
                <span>Statewide Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
