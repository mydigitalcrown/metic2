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
  title: "Artificial Intelligence Company In Utah | #1 AI Company In UT - Metic.ai",
  description: "Leading Artificial Intelligence Company In Utah with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Utah",
    "AI Company In Utah", 
    "AI Service Utah",
    "AI Firm In Utah",
    "AI Development Company In Utah",
    "Best AI Company In Utah",
    "Top AI Company Utah",
    "Utah AI Services",
    "Machine Learning Company Utah",
    "AI Consulting Utah",
    "AI Solutions Utah",
    "Enterprise AI Utah",
    "Custom AI Development Utah",
    "AI Automation Utah",
    "Utah Artificial Intelligence",
    "Salt Lake City AI Company",
    "Provo AI Services",
    "Silicon Slopes AI",
    "Utah Tech AI Solutions"
  ],
  authors: [{ name: "Metic.ai Utah AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Utah | #1 AI Company In UT - Metic.ai",
    description: "Leading Artificial Intelligence Company In Utah with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-utah/",
    siteName: "Metic.ai - AI Company In Utah",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-utah.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Utah - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Utah | AI Company In Utah - Metic.ai",
    description: "Leading Artificial Intelligence Company In Utah with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-services-utah.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-utah/",
  },
};

export default function AIServicesUtahPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Utah business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Utah businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Utah business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Utah business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Utah.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Utah enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "Mining",
    "Tourism",
    "Aerospace",
    "Agriculture",
    "Energy",
    "Education"
  ];

  const stats = [
    { number: "95+", label: "UT Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.3x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Utah",
            "alternateName": "Metic.ai AI Company In Utah",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-utah/",
            "logo": "https://metic.ai/logo.png",
            "description": "Leading Artificial Intelligence Company In Utah with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development for Utah businesses including Overstock.com, Qualtrics, Adobe Utah, Domo, and Vivint.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Utah",
              "addressLocality": "Salt Lake City",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.1540",
              "longitude": "-111.8920"
            },
            "telephone": "+1-789-251-8414",
            "email": "info@metic.ai",
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai"
            ],
            "serviceArea": {
              "@type": "State",
              "name": "Utah"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Utah",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment Utah",
                    "description": "Enterprise AI integration services for Utah businesses"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions Utah",
                    "description": "Custom ML algorithms and predictive analytics for Utah companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development Utah",
                    "description": "Bespoke AI solutions for Utah businesses"
                  }
                }
              ]
            },
            "areaServed": [
              "Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem", 
              "Sandy", "Ogden", "St. George", "Layton", "Taylorsville",
              "Millcreek", "Lehi", "Murray", "South Jordan", "Bountiful"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100"
            },
            "knowsAbout": [
              "Artificial Intelligence Company In Utah",
              "AI Company In Utah",
              "Utah Silicon Slopes AI",
              "Overstock.com AI Solutions",
              "Qualtrics AI Integration",
              "Adobe Utah AI Services",
              "Domo AI Analytics",
              "Vivint AI Technology"
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
                "name": "Which is the best Artificial Intelligence Company In Utah?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Utah, serving 2100+ businesses including major Utah companies like Overstock.com, Qualtrics, Adobe Utah, Domo, and Vivint. We specialize in AI development, machine learning solutions, and enterprise AI integration with 60% cost savings and 3x faster delivery for Utah businesses."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does the top AI Company In Utah provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Utah, Metic.ai provides comprehensive AI services including AI integration & deployment, machine learning solutions, custom AI development, data analytics & BI, generative AI services, and data engineering. We serve Utah's technology, healthcare, financial services, manufacturing, and other key industries."
                }
              },
              {
                "@type": "Question",
                "name": "How does Utah's Silicon Slopes benefit from AI services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Utah's Silicon Slopes tech ecosystem benefits significantly from AI services through innovation acceleration, startup growth support, enterprise digital transformation, and competitive advantage. Companies like Qualtrics, Domo, and other Utah tech leaders leverage AI for product enhancement, customer experience optimization, and operational efficiency."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Utah ideal for AI development companies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Utah offers ideal conditions for AI development with its thriving Silicon Slopes tech ecosystem, top universities like University of Utah and BYU, strong STEM talent pipeline, business-friendly environment, and established tech companies like Adobe Utah, Overstock.com, and Vivint providing market opportunities and expertise."
                }
              },
              {
                "@type": "Question",
                "name": "How can Utah businesses implement AI solutions cost-effectively?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Utah businesses can implement AI cost-effectively by partnering with experienced AI companies like Metic.ai, starting with pilot projects, leveraging cloud-based AI platforms, focusing on high-impact use cases, and following proven implementation frameworks. Our approach delivers 60% cost savings and 3x faster deployment for Utah companies."
                }
              },
              {
                "@type": "Question",
                "name": "What industries in Utah benefit most from AI services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Key Utah industries benefiting from AI include technology (Silicon Slopes companies), healthcare, financial services, manufacturing, mining, tourism, aerospace, agriculture, energy, and education. Companies like Overstock.com, Qualtrics, Adobe Utah, Domo, and Vivint have successfully implemented AI to drive innovation and growth."
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
            "headline": "Artificial Intelligence Company In Utah | Leading AI Company In UT",
            "description": "Comprehensive guide to AI services in Utah, featuring leading Artificial Intelligence Company serving 2100+ businesses including Overstock.com, Qualtrics, Adobe Utah, Domo, and Vivint.",
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
            "dateModified": "2024-12-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-utah/"
            },
            "articleSection": "Technology",
            "keywords": "Artificial Intelligence Company In Utah, AI Company In Utah, Utah AI Services, Silicon Slopes AI, Overstock.com AI, Qualtrics AI, Adobe Utah AI, Domo AI, Vivint AI",
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence Company In Utah",
                "description": "Leading AI company serving Utah businesses with comprehensive AI solutions"
              },
              {
                "@type": "Thing", 
                "name": "Utah Silicon Slopes",
                "description": "Utah's technology corridor and startup ecosystem"
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
              <span className="text-sm font-medium text-orange-300">Serving Utah</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Utah</strong> | Leading AI Company In UT
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best AI Company In Utah? Metic.ai is the premier Artificial Intelligence Company In Utah, 
              trusted by 2100+ businesses including Overstock.com, Qualtrics, Adobe Utah, Domo, and Vivint. 
              From Salt Lake City's Silicon Slopes to Provo's tech corridor, we've helped Utah businesses implement 
              AI solutions that drive 60% cost savings and 3x faster growth. Transform your Utah business with 
              breakthrough AI technology today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation in Utah
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Utah AI Experts: +1-789-251-8414
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
                AI Solutions for <span className="text-primary-orange">Utah</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Utah businesses 
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
                Industries We Serve in Utah
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Utah's key industries and business sectors.
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
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions About AI Services in Utah
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Common questions about choosing the best Artificial Intelligence Company In Utah
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Which is the best Artificial Intelligence Company In Utah?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading Artificial Intelligence Company In Utah, serving 2100+ businesses including major Utah companies like Overstock.com, Qualtrics, Adobe Utah, Domo, and Vivint. We specialize in AI development, machine learning solutions, and enterprise AI integration with 60% cost savings and 3x faster delivery for Utah businesses.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  What AI services does the top AI Company In Utah provide?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier AI Company In Utah, Metic.ai provides comprehensive AI services including AI integration & deployment, machine learning solutions, custom AI development, data analytics & BI, generative AI services, and data engineering. We serve Utah's technology, healthcare, financial services, manufacturing, and other key industries.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  How does Utah's Silicon Slopes benefit from AI services?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Utah's Silicon Slopes tech ecosystem benefits significantly from AI services through innovation acceleration, startup growth support, enterprise digital transformation, and competitive advantage. Companies like Qualtrics, Domo, and other Utah tech leaders leverage AI for product enhancement, customer experience optimization, and operational efficiency.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  What makes Utah ideal for AI development companies?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Utah offers ideal conditions for AI development with its thriving Silicon Slopes tech ecosystem, top universities like University of Utah and BYU, strong STEM talent pipeline, business-friendly environment, and established tech companies like Adobe Utah, Overstock.com, and Vivint providing market opportunities and expertise.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  How can Utah businesses implement AI solutions cost-effectively?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Utah businesses can implement AI cost-effectively by partnering with experienced AI companies like Metic.ai, starting with pilot projects, leveraging cloud-based AI platforms, focusing on high-impact use cases, and following proven implementation frameworks. Our approach delivers 60% cost savings and 3x faster deployment for Utah companies.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  What industries in Utah benefit most from AI services?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Key Utah industries benefiting from AI include technology (Silicon Slopes companies), healthcare, financial services, manufacturing, mining, tourism, aerospace, agriculture, energy, and education. Companies like Overstock.com, Qualtrics, Adobe Utah, Domo, and Vivint have successfully implemented AI to drive innovation and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Metic.ai - Leading AI Company In Utah
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As the premier <strong>Artificial Intelligence Company In Utah</strong>, Metic.ai has deep expertise in Utah's thriving Silicon Slopes ecosystem. We understand the unique challenges and opportunities facing Utah businesses, from tech startups in Lehi to established enterprises in Salt Lake City.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team has successfully partnered with leading Utah companies including Overstock.com, Qualtrics, Adobe Utah, Domo, and Vivint, delivering AI solutions that drive measurable business outcomes. We combine Silicon Valley innovation with Utah's collaborative business culture to create AI implementations that work.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With 2100+ successful AI implementations, we're not just another AI service provider – we're Utah's trusted AI partner, committed to helping businesses leverage artificial intelligence for sustainable growth and competitive advantage.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">AI Implementations</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">60%</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-6">Why Utah Businesses Choose Metic.ai</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Silicon Slopes Expertise</h4>
                        <p className="text-gray-600 text-sm">Deep understanding of Utah's tech ecosystem and business culture</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                        <p className="text-gray-600 text-sm">Successful partnerships with Overstock.com, Qualtrics, Adobe Utah, Domo, Vivint</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Local Partnership</h4>
                        <p className="text-gray-600 text-sm">Dedicated Utah team providing personalized service and support</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Measurable Results</h4>
                        <p className="text-gray-600 text-sm">Average 3x faster delivery and 60% cost savings for Utah clients</p>
                      </div>
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
                Why Utah Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Utah for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Utah businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for UT companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Utah business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Utah business data.</p>
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
              Ready to Transform Your Utah Business with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Utah companies like Overstock.com, Qualtrics, Adobe Utah, Domo, and Vivint that trust Metic.ai for their AI transformation. 
              Get started with a free consultation and discover how the top AI Company In Utah can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation in Utah
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Utah AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Utah</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Salt Lake City</span>
                <span>•</span>
                <span>Provo</span>
                <span>•</span>
                <span>West Valley City</span>
                <span>•</span>
                <span>West Jordan</span>
                <span>•</span>
                <span>Orem</span>
                <span>•</span>
                <span>Sandy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
