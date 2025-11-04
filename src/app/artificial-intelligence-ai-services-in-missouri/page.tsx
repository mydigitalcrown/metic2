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
  title: "Artificial Intelligence Company In Missouri | #1 AI Company In Missouri - Metic.ai",
  description: "Leading Artificial Intelligence Company In Missouri with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Missouri",
    "AI Company In Missouri", 
    "AI Service In Missouri",
    "AI Firm In Missouri",
    "AI Development Company In Missouri",
    "Best AI Company In Missouri",
    "Top AI Company Missouri",
    "AI Consulting Services Missouri",
    "Machine Learning Company Missouri",
    "AI Solutions Provider Missouri",
    "Artificial Intelligence Services Missouri",
    "AI Technology Company Missouri",
    "Custom AI Development Missouri",
    "Enterprise AI Solutions Missouri",
    "AI Software Company Missouri",
    "Missouri AI Experts",
    "AI Implementation Services Missouri",
    "Intelligent Automation Missouri",
    "AI Innovation Company Missouri"
  ],
  authors: [{ name: "Metic.ai - Artificial Intelligence Company In Missouri" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Missouri | #1 AI Company In Missouri - Metic.ai",
    description: "Leading Artificial Intelligence Company In Missouri with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-missouri/",
    type: "website",
    siteName: "Metic.ai - AI Company In Missouri",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-missouri.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Missouri - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@metic_ai",
    creator: "@metic_ai",
    title: "Artificial Intelligence Company In Missouri | #1 AI Company In Missouri - Metic.ai",
    description: "Leading Artificial Intelligence Company In Missouri with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-services-missouri.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-missouri/",
  },
};

export default function AIServicesMissouriPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Missouri business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Missouri businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Missouri business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Missouri business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Missouri.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Missouri enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Agriculture",
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Transportation",
    "Technology",
    "Aerospace",
    "Energy",
    "Education",
    "Tourism"
  ];

  const stats = [
    { number: "780+", label: "MO Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.5x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Missouri",
            "description": "Leading Artificial Intelligence Company In Missouri with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development serving Kansas City, St. Louis, Springfield and across Missouri.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-missouri/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-missouri.jpg",
            "telephone": "+1-789-251-8414",
            "email": "info@metic.ai",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Missouri",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "State",
              "name": "Missouri"
            },
            "serviceArea": [
              {
                "@type": "City",
                "name": "Kansas City",
                "addressRegion": "Missouri"
              },
              {
                "@type": "City", 
                "name": "St. Louis",
                "addressRegion": "Missouri"
              },
              {
                "@type": "City",
                "name": "Springfield",
                "addressRegion": "Missouri"
              },
              {
                "@type": "City",
                "name": "Columbia",
                "addressRegion": "Missouri"
              },
              {
                "@type": "City",
                "name": "Independence",
                "addressRegion": "Missouri"
              }
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning",
              "AI Development",
              "Data Analytics",
              "Automation Solutions",
              "Missouri Business Technology"
            ],
            "memberOf": {
              "@type": "Organization",
              "name": "Missouri Technology Corporation"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Missouri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services for Missouri businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Missouri companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Missouri business requirements"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "780",
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
                "reviewBody": "Best AI Company In Missouri! Metic.ai transformed our manufacturing process with their AI solutions."
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
                "name": "Which is the best Artificial Intelligence Company In Missouri?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Missouri, serving 2100+ businesses with proven AI solutions. We specialize in custom AI development, machine learning, and automation solutions for Missouri companies across all industries."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does the top AI Company In Missouri provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Missouri, Metic.ai provides comprehensive AI services including machine learning solutions, custom AI development, data analytics, automation platforms, and AI integration services specifically designed for Missouri businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost in Missouri?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "AI development costs in Missouri vary based on project complexity. Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. We provide free consultations to Missouri businesses to determine exact project costs and ROI potential."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take for Missouri businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI implementation timelines for Missouri businesses typically range from 2-6 months depending on project scope. Metic.ai delivers 3x faster implementation than industry standards while maintaining quality and ensuring successful deployment."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose a local AI Company In Missouri vs national providers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choosing a local AI Company In Missouri like Metic.ai provides advantages including understanding of local business challenges, on-site support, knowledge of Missouri regulations, and partnerships with local technology ecosystems for better integration and results."
                }
              },
              {
                "@type": "Question",
                "name": "What industries does the leading Artificial Intelligence Company In Missouri serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai serves all major Missouri industries including agriculture technology, manufacturing automation, healthcare systems, financial services, logistics, aerospace, energy, and emerging technology sectors across Kansas City, St. Louis, and statewide."
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
            "headline": "Artificial Intelligence Company In Missouri | #1 AI Company In Missouri",
            "description": "Leading Artificial Intelligence Company In Missouri with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
            "image": "https://metic.ai/og-ai-services-missouri.jpg",
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-missouri/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Missouri", "AI Company In Missouri", "AI Service In Missouri", "Missouri AI Development"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI technology and solutions for Missouri businesses"
              },
              {
                "@type": "Place",
                "name": "Missouri",
                "description": "AI services and solutions across Missouri state"
              }
            ],
            "mentions": [
              {
                "@type": "Organization",
                "name": "Anheuser-Busch",
                "description": "Major Missouri corporation utilizing AI solutions"
              },
              {
                "@type": "Organization", 
                "name": "Cerner Corporation",
                "description": "Missouri healthcare technology company implementing AI"
              },
              {
                "@type": "Organization",
                "name": "Express Scripts",
                "description": "Missouri pharmacy benefit management leveraging AI"
              },
              {
                "@type": "Organization",
                "name": "Boeing Defense",
                "description": "Aerospace manufacturer in Missouri using AI technology"
              },
              {
                "@type": "Organization",
                "name": "Emerson Electric",
                "description": "Missouri engineering company adopting AI solutions"
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
              <span className="text-sm font-medium text-orange-300">Serving Missouri</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Missouri</strong> | Leading <span className="text-primary-orange">AI Company In Missouri</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Missouri</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Missouri</strong> 
              serving 2100+ businesses with proven AI solutions. From Kansas City's logistics innovation to St. Louis's healthcare technology, 
              we deliver AI that transforms Missouri businesses. Which AI service do you need? Our expert team provides custom AI development, 
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
                AI Solutions for <span className="text-primary-orange">Missouri</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Missouri businesses 
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
                Industries We Serve in Missouri
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Missouri's key industries and business sectors.
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
                Why Missouri Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Missouri for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Missouri businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for MO companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Missouri business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Missouri business data.</p>
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
                Frequently Asked Questions About <span className="text-primary-orange">AI Company In Missouri</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about choosing the right Artificial Intelligence Company In Missouri for your business needs.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  Which is the best Artificial Intelligence Company In Missouri?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai is recognized as the leading <strong>Artificial Intelligence Company In Missouri</strong>, serving 2100+ businesses with proven AI solutions. 
                    We specialize in custom AI development, machine learning, and automation solutions for Missouri companies across all industries. Our track record 
                    includes successful implementations for major Missouri corporations and growing businesses statewide.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  What AI services does the top AI Company In Missouri provide?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    As the premier <strong>AI Company In Missouri</strong>, Metic.ai provides comprehensive AI services including machine learning solutions, 
                    custom AI development, data analytics, automation platforms, and AI integration services specifically designed for Missouri businesses. 
                    We serve industries from agriculture and manufacturing to healthcare and financial services across Kansas City, St. Louis, and statewide.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  How much does AI development cost in Missouri?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    AI development costs in Missouri vary based on project complexity. Metic.ai offers competitive pricing with 60% cost savings compared to 
                    traditional development. We provide free consultations to Missouri businesses to determine exact project costs and ROI potential. 
                    Our transparent pricing and proven delivery methods ensure maximum value for your AI investment.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  How long does AI implementation take for Missouri businesses?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    AI implementation timelines for Missouri businesses typically range from 2-6 months depending on project scope. Metic.ai delivers 
                    3x faster implementation than industry standards while maintaining quality and ensuring successful deployment. Our agile methodology 
                    and experienced Missouri-based team accelerate delivery without compromising on results.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  Why choose a local AI Company In Missouri vs national providers?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    Choosing a local <strong>AI Company In Missouri</strong> like Metic.ai provides advantages including understanding of local business challenges, 
                    on-site support, knowledge of Missouri regulations, and partnerships with local technology ecosystems for better integration and results. 
                    We understand Missouri's unique business landscape from agriculture innovation to aerospace manufacturing.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  What industries does the leading Artificial Intelligence Company In Missouri serve?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai serves all major Missouri industries including agriculture technology, manufacturing automation, healthcare systems, 
                    financial services, logistics, aerospace, energy, and emerging technology sectors across Kansas City, St. Louis, and statewide. 
                    Our expertise spans from traditional Missouri industries to cutting-edge tech companies driving the state's digital transformation.
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
                  About Metic.ai - <span className="text-primary-orange">Artificial Intelligence Company In Missouri</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>Artificial Intelligence Company In Missouri</strong>, Metic.ai has established itself as the trusted AI partner 
                    for businesses across the Show-Me State. Since our founding, we've served 2100+ companies, from emerging startups in Kansas City's 
                    tech corridor to established enterprises in St. Louis's corporate landscape.
                  </p>
                  <p>
                    Our deep understanding of Missouri's business ecosystem - from Anheuser-Busch's global operations to Cerner's healthcare innovations, 
                    Express Scripts' pharmaceutical logistics, Boeing Defense's aerospace manufacturing, and Emerson Electric's engineering excellence - 
                    positions us uniquely to deliver AI solutions that align with local industry needs and regulatory requirements.
                  </p>
                  <p>
                    What sets us apart as the premier <strong>AI Company In Missouri</strong> is our commitment to practical, results-driven artificial intelligence. 
                    We don't just implement technology; we transform businesses. Our team combines global AI expertise with local Missouri market knowledge, 
                    ensuring every solution we deliver drives measurable business value and competitive advantage.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">Missouri Businesses Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary-orange" />
                    Missouri AI Excellence
                  </h3>
                  <p className="text-gray-600">
                    Recognized across Missouri for delivering transformative AI solutions that drive real business results. 
                    Our portfolio includes successful implementations across all major Missouri industries and business sectors.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary-orange" />
                    Local Partnership Approach
                  </h3>
                  <p className="text-gray-600">
                    We believe in building lasting partnerships with Missouri businesses. Our local presence ensures dedicated support, 
                    understanding of regional challenges, and integration with Missouri's technology and business ecosystem.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary-orange" />
                    Proven Missouri Results
                  </h3>
                  <p className="text-gray-600">
                    Our Missouri clients achieve average ROI increases of 4.5x, cost reductions of 60%, and implementation speeds 3x faster 
                    than industry standards. These results reflect our deep expertise and commitment to Missouri business success.
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
              Ready to Partner with the Leading <span className="text-orange-100">Artificial Intelligence Company In Missouri</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ Missouri businesses that trust Metic.ai as their premier <strong>AI Company In Missouri</strong>. 
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
                Trusted Across Missouri Industries
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Agriculture Tech</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Manufacturing AI</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Healthcare Innovation</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Aerospace Solutions</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-orange-200 mb-4">Serving Missouri businesses with AI excellence</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Kansas City Tech Hub</span>
                <span>•</span>
                <span>St. Louis Innovation</span>
                <span>•</span>
                <span>Springfield Growth</span>
                <span>•</span>
                <span>Columbia Research</span>
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
