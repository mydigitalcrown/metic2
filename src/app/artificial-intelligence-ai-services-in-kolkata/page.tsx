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
  title: "Artificial Intelligence Company In Kolkata | #1 AI Company In Kolkata - Metic.ai",
  description: "Leading Artificial Intelligence Company In Kolkata with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Kolkata",
    "AI Company In Kolkata", 
    "AI Service In Kolkata",
    "AI Firm In Kolkata",
    "AI Development Company In Kolkata",
    "Best AI Company In Kolkata",
    "Top AI Company Kolkata",
    "Leading AI Company Kolkata",
    "AI Consulting Company Kolkata",
    "Machine Learning Company Kolkata",
    "AI Solutions Provider Kolkata",
    "AI Technology Company Kolkata",
    "Enterprise AI Company Kolkata",
    "Custom AI Development Kolkata",
    "AI Implementation Services Kolkata",
    "AI Automation Company Kolkata",
    "AI Software Company Kolkata",
    "Professional AI Services Kolkata",
    "AI Innovation Company Kolkata"
  ],
  authors: [{ name: "Metic.ai Kolkata AI Team" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-kolkata/"
  },
  openGraph: {
    title: "Artificial Intelligence Company In Kolkata | #1 AI Company In Kolkata - Metic.ai",
    description: "Leading Artificial Intelligence Company In Kolkata with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development in Salt Lake, New Town & across Kolkata.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-kolkata/",
    siteName: "Metic.ai - AI Company In Kolkata",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-kolkata.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Kolkata - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Kolkata | AI Company In Kolkata - Metic.ai",
    description: "Leading AI Company In Kolkata delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-services-kolkata.jpg"],
    creator: "@MeticAI"
  }
};

export default function AIServicesKolkataPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Kolkata business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Kolkata's jute, steel, and IT industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Kolkata business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Kolkata business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Kolkata.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Kolkata enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Information Technology",
    "Manufacturing",
    "Jute & Textiles",
    "Steel & Engineering",
    "Financial Services",
    "Healthcare",
    "Education",
    "Media & Entertainment",
    "Port & Logistics",
    "Tea Industry"
  ];

  const stats = [
    { number: "2,650+", label: "Kolkata Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.9x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Enhanced Triple Schema Structure for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Artificial Intelligence Company In Kolkata",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-kolkata/",
              "logo": "https://metic.ai/logo.png",
              "description": "Leading Artificial Intelligence Company In Kolkata with 2100+ successful AI implementations. Expert AI services serving Salt Lake, New Town, Park Street, and across West Bengal.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Behind Manyata Tech Park",
                "addressLocality": "Hebbal, Bangalore",
                "addressRegion": "Karnataka", 
                "postalCode": "560077",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "22.5726",
                "longitude": "88.3639"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-789-251-8414",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Bengali"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/MeticAI"
              ],
              "serviceArea": {
                "@type": "Place",
                "name": "Kolkata Metropolitan Area",
                "containsPlace": [
                  {"@type": "Place", "name": "Salt Lake City"},
                  {"@type": "Place", "name": "New Town"},
                  {"@type": "Place", "name": "Park Street"},
                  {"@type": "Place", "name": "Sector V"},
                  {"@type": "Place", "name": "Rajarhat"},
                  {"@type": "Place", "name": "Ballygunge"},
                  {"@type": "Place", "name": "Howrah"}
                ]
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Company In Kolkata Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Development Company In Kolkata",
                      "description": "Custom AI development and implementation services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "AI Service In Kolkata",
                      "description": "Comprehensive AI consulting and automation services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Firm In Kolkata Solutions",
                      "description": "Enterprise AI solutions and machine learning implementation"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating", 
                "ratingValue": "4.9",
                "reviewCount": "2100"
              },
              "founder": {
                "@type": "Person",
                "name": "Metic.ai Kolkata Team"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In Kolkata - Leading AI Services",
              "description": "Comprehensive guide to AI services in Kolkata featuring the leading Artificial Intelligence Company In Kolkata with 2100+ successful implementations.",
              "image": "https://metic.ai/og-ai-services-kolkata.jpg",
              "author": {
                "@type": "Organization",
                "name": "Metic.ai Kolkata AI Team"
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
              "keywords": "Artificial Intelligence Company In Kolkata, AI Company In Kolkata, AI Service In Kolkata",
              "locationCreated": {
                "@type": "Place",
                "name": "Kolkata, West Bengal"
              }
            }
          ])
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
                "name": "Which is the best AI Company In Kolkata for business transformation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai stands out as the leading Artificial Intelligence Company In Kolkata with 2100+ successful implementations. We serve businesses from heritage areas like Dalhousie Square to modern tech hubs in Salt Lake City, providing AI solutions that respect Bengal's intellectual heritage while driving innovation across West Bengal."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Metic.ai the top AI Service In Kolkata?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Service In Kolkata offers 60% cost savings, 3x faster delivery, and 95% client satisfaction. We understand Kolkata's unique business ecosystem from traditional jute and tea industries to modern IT and pharmaceutical sectors, providing AI solutions that seamlessly integrate with the City of Joy's diverse economy."
                }
              },
              {
                "@type": "Question",
                "name": "How does the best AI Firm In Kolkata approach local businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As a premier AI Firm In Kolkata, we recognize that Bengali businesses value intellectual depth and cultural sensitivity. Our team works closely with companies in Salt Lake, New Town, Park Street, and throughout Kolkata to understand their heritage and deliver AI solutions that enhance rather than disrupt their established business relationships and traditions."
                }
              },
              {
                "@type": "Question",
                "name": "What AI Development Company In Kolkata services do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our comprehensive AI Development Company In Kolkata services include machine learning implementation, predictive analytics, natural language processing, computer vision, and custom AI solutions. We specialize in applications for Kolkata's key industries including jute processing, tea production, pharmaceutical manufacturing, IT services, and financial institutions."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose our Artificial Intelligence Company In Kolkata over competitors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our Artificial Intelligence Company In Kolkata combines global AI expertise with deep local understanding of Bengali business culture. We've successfully implemented AI for diverse sectors from traditional industries near Howrah to tech companies in Sector V. Our Kolkata-based team ensures culturally sensitive service and ongoing support that respects your business timeline and Bengali traditions."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can the leading AI Company In Kolkata deliver results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the fastest AI Company In Kolkata, we typically deliver initial AI implementations within 4-6 weeks. Our proven methodology, developed through 2100+ successful projects, ensures rapid deployment while maintaining the intellectual rigor and quality standards that Kolkata businesses expect. Most clients see measurable ROI within 3 months of implementation."
                }
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
              <span className="text-sm font-medium text-orange-300">Serving Kolkata, West Bengal</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Kolkata</strong> | Leading AI Company In Kolkata
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Kolkata</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Kolkata</strong> serving Salt Lake City, New Town, Park Street, and across West Bengal. Our <strong>AI Service In Kolkata</strong> helps businesses from heritage Dalhousie Square to modern Sector V implement cutting-edge AI solutions while honoring Bengal's intellectual tradition. Which AI development partner can deliver 60% cost savings and 3x faster delivery? The answer is right here in the City of Joy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free Kolkata AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Kolkata AI Team: +1-789-251-8414
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
                AI Solutions for <span className="text-primary-orange">Kolkata</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Kolkata businesses 
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
                Industries We Serve in Kolkata
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Kolkata's key industries and business sectors.
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

      {/* About Metic.ai Kolkata Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                About Our <strong>Artificial Intelligence Company In Kolkata</strong>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                As the leading <strong>AI Company In Kolkata</strong>, Metic.ai brings cutting-edge artificial intelligence to the City of Joy. We understand Kolkata's unique blend of intellectual heritage and modern innovation - from the literary traditions of College Street to the tech innovation hubs of Salt Lake City and New Town.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Kolkata Presence</h3>
                <p className="text-gray-600 mb-6">
                  Our <strong>AI Service In Kolkata</strong> extends across all major areas from heritage Dalhousie Square to modern Sector V. We've partnered with traditional jute mills near Howrah Bridge, pharmaceutical companies in the industrial belt, tea trading houses around BBD Bagh, and cutting-edge IT firms in Salt Lake's technology corridor.
                </p>
                <p className="text-gray-600 mb-6">
                  From the prestigious Indian Statistical Institute to the bustling Gariahat market, we understand the diverse ecosystem that makes Kolkata the intellectual and commercial capital of Eastern India. Our <strong>AI Firm In Kolkata</strong> approach honors Bengali traditions while embracing technological advancement.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Salt Lake City</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">New Town</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Park Street</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Sector V</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Dalhousie Square</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-orange mb-2">85+</div>
                  <div className="text-sm text-gray-600">Kolkata Companies Served</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-orange mb-2">95%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-orange mb-2">60%</div>
                  <div className="text-sm text-gray-600">Average Cost Savings</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-orange mb-2">3x</div>
                  <div className="text-sm text-gray-600">Faster Implementation</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Kolkata Industry Expertise</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-8 h-8 text-amber-600" />
                  </div>
                  <h4 className="font-bold mb-2">Jute & Textiles</h4>
                  <p className="text-sm text-gray-600">AI solutions for production optimization, quality control, and supply chain management in Kolkata's traditional jute and textile industries.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold mb-2">Tea & Pharmaceuticals</h4>
                  <p className="text-sm text-gray-600">Advanced analytics for tea trading, pharmaceutical R&D, and healthcare innovation in Bengal's key industrial sectors.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">IT & Financial Services</h4>
                  <p className="text-sm text-gray-600">Modern AI implementation for IT companies in Salt Lake, financial institutions in BBD Bagh, and emerging fintech startups.</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Frequently Asked Questions About <strong>AI Company In Kolkata</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers about our <strong>Artificial Intelligence Company In Kolkata</strong> services
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Which is the best AI Company In Kolkata for business transformation?
                </h3>
                <p className="text-gray-700">
                  Metic.ai stands out as the leading <strong>Artificial Intelligence Company In Kolkata</strong> with 2100+ successful implementations. We serve businesses from heritage areas like Dalhousie Square to modern tech hubs in Salt Lake City, providing AI solutions that respect Bengal's intellectual heritage while driving innovation across West Bengal.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What makes Metic.ai the top AI Service In Kolkata?
                </h3>
                <p className="text-gray-700">
                  Our <strong>AI Service In Kolkata</strong> offers 60% cost savings, 3x faster delivery, and 95% client satisfaction. We understand Kolkata's unique business ecosystem from traditional jute and tea industries to modern IT and pharmaceutical sectors, providing AI solutions that seamlessly integrate with the City of Joy's diverse economy.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How does the best AI Firm In Kolkata approach local businesses?
                </h3>
                <p className="text-gray-700">
                  As a premier <strong>AI Firm In Kolkata</strong>, we recognize that Bengali businesses value intellectual depth and cultural sensitivity. Our team works closely with companies in Salt Lake, New Town, Park Street, and throughout Kolkata to understand their heritage and deliver AI solutions that enhance rather than disrupt their established business relationships and traditions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What AI Development Company In Kolkata services do you offer?
                </h3>
                <p className="text-gray-700">
                  Our comprehensive <strong>AI Development Company In Kolkata</strong> services include machine learning implementation, predictive analytics, natural language processing, computer vision, and custom AI solutions. We specialize in applications for Kolkata's key industries including jute processing, tea production, pharmaceutical manufacturing, IT services, and financial institutions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Why choose our Artificial Intelligence Company In Kolkata over competitors?
                </h3>
                <p className="text-gray-700">
                  Our <strong>Artificial Intelligence Company In Kolkata</strong> combines global AI expertise with deep local understanding of Bengali business culture. We've successfully implemented AI for diverse sectors from traditional industries near Howrah to tech companies in Sector V. Our Kolkata-based team ensures culturally sensitive service and ongoing support that respects your business timeline and Bengali traditions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How quickly can the leading AI Company In Kolkata deliver results?
                </h3>
                <p className="text-gray-700">
                  As the fastest <strong>AI Company In Kolkata</strong>, we typically deliver initial AI implementations within 4-6 weeks. Our proven methodology, developed through 2100+ successful projects, ensures rapid deployment while maintaining the intellectual rigor and quality standards that Kolkata businesses expect. Most clients see measurable ROI within 3 months of implementation.
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
              Ready to Partner with the Leading <strong>AI Company In Kolkata</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Kolkata companies that trust our <strong>Artificial Intelligence Company In Kolkata</strong> for their AI transformation. 
              Get started with a free consultation and discover how the best <strong>AI Service In Kolkata</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Kolkata
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Kolkata AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Kolkata</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Salt Lake</span>
                <span>•</span>
                <span>Park Street</span>
                <span>•</span>
                <span>Sector V</span>
                <span>•</span>
                <span>Ballygunge</span>
                <span>•</span>
                <span>New Town</span>
                <span>•</span>
                <span>Jadavpur</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
