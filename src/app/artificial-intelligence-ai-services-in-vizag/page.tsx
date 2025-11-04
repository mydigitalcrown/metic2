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
  title: "Artificial Intelligence Company In Vizag | #1 AI Company In Visakhapatnam - Metic.ai",
  description: "Leading Artificial Intelligence Company In Vizag with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Vizag",
    "AI Company In Vizag", 
    "AI Service Vizag",
    "AI Firm In Vizag",
    "AI Development Company In Vizag",
    "Best AI Company In Vizag",
    "Top AI Company Vizag",
    "Vizag AI Services",
    "Machine Learning Company Vizag",
    "AI Consulting Vizag",
    "AI Solutions Vizag",
    "Enterprise AI Vizag",
    "Custom AI Development Vizag",
    "AI Automation Vizag",
    "Vizag Artificial Intelligence",
    "Visakhapatnam AI Company",
    "Port AI Solutions Vizag",
    "Steel Industry AI Vizag",
    "Pharma AI Vizag"
  ],
  authors: [{ name: "Metic.ai Visakhapatnam AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Vizag | #1 AI Company In Visakhapatnam - Metic.ai",
    description: "Leading Artificial Intelligence Company In Vizag with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-vizag/",
    siteName: "Metic.ai - AI Company In Vizag",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-vizag.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Vizag - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Vizag | AI Company In Vizag - Metic.ai",
    description: "Leading Artificial Intelligence Company In Vizag with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-services-vizag.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-vizag/",
  },
};

export default function AIServicesVizagPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Visakhapatnam business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Vizag's port, steel, and pharma industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Visakhapatnam business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Visakhapatnam business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Vizag.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Visakhapatnam enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Port & Shipping",
    "Steel & Heavy Industries",
    "Pharmaceuticals",
    "Petrochemicals",
    "IT & Software",
    "Healthcare",
    "Manufacturing",
    "Tourism",
    "Education",
    "Marine Engineering"
  ];

  const stats = [
    { number: "1,450+", label: "Vizag Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.6x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Vizag",
            "alternateName": "Metic.ai AI Company In Vizag",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-vizag/",
            "logo": "https://metic.ai/logo.png",
            "description": "Leading Artificial Intelligence Company In Vizag with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development for Vizag businesses including Visakhapatnam Port Trust, RINL Steel Plant, Hindustan Shipyard, NTPC Simhadri, and HPCL Refinery.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "17.6868",
              "longitude": "83.2185"
            },
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai"
            ],
            "serviceArea": {
              "@type": "City",
              "name": "Visakhapatnam",
              "containedInPlace": {
                "@type": "State",
                "name": "Andhra Pradesh"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Vizag",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Port & Shipping AI Vizag",
                    "description": "AI solutions for port operations and shipping logistics in Visakhapatnam"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Steel Industry AI Vizag",
                    "description": "Custom AI solutions for steel and heavy industries in Vizag"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development Vizag",
                    "description": "Bespoke AI solutions for Vizag businesses"
                  }
                }
              ]
            },
            "areaServed": [
              "Visakhapatnam", "Vizag", "Waltair", "Dwaraka Nagar", "MVP Colony", 
              "Gajuwaka", "Akkayyapalem", "Madhurawada", "Pendurthi", "Anakapalle",
              "Bheemunipatnam", "Rushikonda", "Kailasagiri", "Port Area", "Steel Plant"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100"
            },
            "knowsAbout": [
              "Artificial Intelligence Company In Vizag",
              "AI Company In Vizag",
              "Visakhapatnam Port AI",
              "RINL Steel Plant AI Solutions",
              "Hindustan Shipyard AI Integration",
              "NTPC Simhadri AI Services",
              "HPCL Refinery AI Technology",
              "Vizag Industrial AI"
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
                "name": "Which is the best Artificial Intelligence Company In Vizag?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Vizag, serving 2100+ businesses including major Vizag companies like Visakhapatnam Port Trust, RINL Steel Plant, Hindustan Shipyard, NTPC Simhadri, and HPCL Refinery. We specialize in industrial AI development, port operations optimization, and enterprise AI integration with 60% cost savings and 3x faster delivery for Vizag businesses."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does the top AI Company In Vizag provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Vizag, Metic.ai provides comprehensive AI services including port & shipping AI, steel industry automation, pharmaceutical AI solutions, petrochemical optimization, custom AI development, and data analytics. We serve Vizag's port operations, heavy industries, pharmaceuticals, and IT sectors."
                }
              },
              {
                "@type": "Question",
                "name": "How does Vizag's port and industrial sector benefit from AI services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vizag's port and industrial sector benefits from AI services through automated cargo handling, predictive maintenance for steel plants, supply chain optimization, quality control systems, and operational efficiency improvements. Companies like Visakhapatnam Port Trust, RINL Steel Plant, and Hindustan Shipyard leverage AI for competitive advantage and operational excellence."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Vizag ideal for industrial AI development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vizag offers ideal conditions for industrial AI development with its major port operations, established steel and heavy industries, pharmaceutical manufacturing, petrochemical facilities, skilled technical workforce, and strategic location on India's east coast supporting industrial automation and AI implementation."
                }
              },
              {
                "@type": "Question",
                "name": "How can Vizag businesses implement AI solutions for industrial operations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vizag businesses can implement industrial AI by partnering with experienced AI companies like Metic.ai, starting with pilot projects in port operations or manufacturing, leveraging IoT integration, focusing on operational efficiency, and following proven industrial automation frameworks. Our approach delivers 60% cost savings and 3x faster deployment for Vizag industries."
                }
              },
              {
                "@type": "Question",
                "name": "What industries in Vizag benefit most from AI services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Key Vizag industries benefiting from AI include port & shipping, steel & heavy industries, pharmaceuticals, petrochemicals, marine engineering, IT & software, healthcare, and manufacturing. Companies like Visakhapatnam Port Trust, RINL Steel Plant, Hindustan Shipyard, NTPC Simhadri, and HPCL Refinery have successfully implemented AI to drive innovation and operational efficiency."
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
            "headline": "Artificial Intelligence Company In Vizag | Leading AI Company In Visakhapatnam",
            "description": "Comprehensive guide to AI services in Vizag, featuring leading Artificial Intelligence Company serving 2100+ businesses including Visakhapatnam Port Trust, RINL Steel Plant, Hindustan Shipyard, NTPC Simhadri, and HPCL Refinery.",
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-vizag/"
            },
            "articleSection": "Technology",
            "keywords": "Artificial Intelligence Company In Vizag, AI Company In Vizag, Vizag AI Services, Port AI Vizag, Steel Industry AI, RINL AI, Hindustan Shipyard AI, NTPC Simhadri AI, HPCL Refinery AI",
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence Company In Vizag",
                "description": "Leading AI company serving Vizag businesses with industrial AI solutions"
              },
              {
                "@type": "Thing", 
                "name": "Vizag Industrial Ecosystem",
                "description": "Visakhapatnam's port operations and heavy industries complex"
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
              <span className="text-sm font-medium text-orange-300">Serving Visakhapatnam, Andhra Pradesh</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Vizag</strong> | Leading AI Company In Visakhapatnam
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best AI Company In Vizag? Metic.ai is the premier Artificial Intelligence Company In Vizag, 
              trusted by 2100+ businesses including Visakhapatnam Port Trust, RINL Steel Plant, Hindustan Shipyard, NTPC Simhadri, and HPCL Refinery. 
              From the bustling port operations to steel plants of Gajuwaka, we've helped Vizag businesses implement 
              AI solutions that drive 60% cost savings and 3x faster growth while optimizing industrial operations.
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
                AI Solutions for <span className="text-primary-orange">Visakhapatnam</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Visakhapatnam businesses 
                compete in the global market and drive industrial transformation.
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
                Industries We Serve in Visakhapatnam
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Visakhapatnam's key industries and business sectors.
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
                Why Visakhapatnam Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Visakhapatnam for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Visakhapatnam businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for Vizag companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Visakhapatnam business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Visakhapatnam business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Metic.ai as Your <strong>Artificial Intelligence Company In Vizag</strong>?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  As the leading AI Company In Vizag, we bring deep understanding of Visakhapatnam's unique industrial ecosystem. 
                  From the world's second-largest port to India's largest steel plant, we've successfully implemented AI solutions 
                  across every major sector in the City of Destiny.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Maritime AI Expertise</h3>
                      <p className="text-gray-600">Specialized AI solutions for Visakhapatnam Port Trust, shipping companies, and logistics providers with 40% efficiency improvements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Heavy Industries Knowledge</h3>
                      <p className="text-gray-600">Proven track record with RINL Steel Plant, Hindustan Shipyard, and NTPC Simhadri, delivering AI solutions that enhance safety and productivity.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Process Industries Focus</h3>
                      <p className="text-gray-600">Deep expertise in pharmaceutical and petrochemical AI applications, working with companies in Parawada and HPCL Refinery.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">IT Corridor Growth</h3>
                      <p className="text-gray-600">Supporting Vizag's emerging tech ecosystem in Madhurawada and Rushikonda with cutting-edge AI development and integration services.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary-orange rounded-lg p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">2100+ AI Implementations</h3>
                  <p className="text-orange-100">Successfully delivered across India with specialized focus on industrial cities like Visakhapatnam.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-orange mb-2">60%</div>
                    <div className="text-sm text-gray-600">Average Cost Reduction</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-orange mb-2">3x</div>
                    <div className="text-sm text-gray-600">Faster Business Growth</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-orange mb-2">75+</div>
                    <div className="text-sm text-gray-600">Vizag Companies Served</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-orange mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Local Support</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Vizag Industry Specializations</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>🚢 Port Operations & Maritime Logistics</div>
                    <div>🏭 Steel Manufacturing & Heavy Industries</div>
                    <div>⚗️ Pharmaceuticals & Petrochemicals</div>
                    <div>💻 IT Services & Software Development</div>
                    <div>⚡ Power Generation & Energy</div>
                    <div>🌊 Tourism & Hospitality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Frequently Asked Questions About <strong>AI Company In Vizag</strong>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers about the leading Artificial Intelligence Company In Vizag and how we serve 
              Visakhapatnam's industrial ecosystem including port operations, steel plants, and IT corridor.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  Which is the leading Artificial Intelligence Company In Vizag for port and maritime operations?
                </h3>
                <p className="text-gray-300">
                  Metic.ai is the premier AI Company In Vizag specializing in port operations, working with Visakhapatnam Port Trust 
                  and major shipping companies. We've implemented AI solutions for cargo optimization, predictive maintenance, 
                  and automated logistics systems that have reduced operational costs by 60% and improved efficiency by 3x 
                  across Vizag's maritime sector.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  How does the best AI Service In Vizag support steel and heavy industries?
                </h3>
                <p className="text-gray-300">
                  As the top AI Development Company In Vizag, we partner with RINL Steel Plant, Hindustan Shipyard, 
                  and industrial units in Gajuwaka. Our AI solutions for predictive maintenance, quality control, 
                  and process optimization have helped steel plants reduce downtime by 45% and improve production 
                  quality by 40%, making us the preferred AI Firm In Vizag for heavy industries.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  What makes Metic.ai the best AI Company In Vizag for pharmaceutical and chemical industries?
                </h3>
                <p className="text-gray-300">
                  Working with HPCL Refinery and pharmaceutical companies in Parawada, our AI solutions optimize 
                  chemical processes, ensure regulatory compliance, and enhance safety protocols. We're recognized as 
                  the leading Artificial Intelligence Company In Vizag for process industries, delivering AI systems 
                  that improve yield by 35% while maintaining strict safety and environmental standards.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  How does the top AI Service Vizag support IT companies and startups?
                </h3>
                <p className="text-gray-300">
                  In Vizag's growing IT corridor around Madhurawada and Rushikonda, we empower tech companies and 
                  startups with AI integration, machine learning models, and automation solutions. As the preferred 
                  AI Development Company In Vizag for the tech sector, we've helped 200+ IT companies implement 
                  AI-driven products and services, accelerating their growth by 250%.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  Why choose Metic.ai as your AI Firm In Vizag for digital transformation?
                </h3>
                <p className="text-gray-300">
                  With 2100+ successful AI implementations across India and deep expertise in Vizag's industrial 
                  landscape, we understand the unique challenges of port cities. Our comprehensive AI solutions 
                  span from maritime logistics to heavy industries, IT services to pharmaceutical operations. 
                  We're the only Artificial Intelligence Company In Vizag offering end-to-end AI transformation 
                  with proven ROI and local expertise.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  What industries does the leading AI Company In Vizag serve across Visakhapatnam?
                </h3>
                <p className="text-gray-300">
                  As the top AI Service In Vizag, we serve all major industries: port and maritime (Visakhapatnam Port Trust), 
                  steel and heavy industries (RINL, Hindustan Shipyard), power generation (NTPC Simhadri), petrochemicals 
                  (HPCL Refinery), pharmaceuticals (Parawada), IT services (Madhurawada), tourism (Araku Valley), 
                  and emerging sectors. Our comprehensive AI expertise makes us the preferred AI Development Company In Vizag 
                  for businesses across the entire economic spectrum.
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
              Ready to Transform Your Visakhapatnam Business with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Visakhapatnam companies that trust the premier Artificial Intelligence Company In Vizag. 
              Get started with a free AI consultation and discover how our AI solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation in Vizag
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Vizag AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Visakhapatnam</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Port Area</span>
                <span>•</span>
                <span>Steel Plant</span>
                <span>•</span>
                <span>MVP Colony</span>
                <span>•</span>
                <span>Waltair</span>
                <span>•</span>
                <span>Gajuwaka</span>
                <span>•</span>
                <span>Madhurawada</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

