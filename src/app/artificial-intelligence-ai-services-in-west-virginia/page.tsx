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
  title: "Artificial Intelligence Company In West Virginia | #1 AI Company In WV - Metic.ai",
  description: "Leading Artificial Intelligence Company In West Virginia with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In West Virginia",
    "AI Company In West Virginia",
    "AI Service West Virginia", 
    "AI Firm In West Virginia",
    "AI Development Company In West Virginia",
    "Best AI Company In West Virginia",
    "Top AI Company WV",
    "Machine Learning Company West Virginia",
    "AI Consulting West Virginia",
    "Enterprise AI West Virginia",
    "Custom AI Solutions West Virginia", 
    "AI Integration West Virginia",
    "Business AI West Virginia",
    "AI Automation West Virginia",
    "Charleston AI Company",
    "AI Services WV",
    "West Virginia AI Solutions",
    "AI Technology West Virginia",
    "AI Innovation West Virginia"
  ],
  authors: [{ name: "Metic.ai West Virginia AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In West Virginia | #1 AI Company In WV - Metic.ai",
    description: "Leading Artificial Intelligence Company In West Virginia with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development in Charleston, Morgantown, Huntington.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-west-virginia/",
    siteName: "Metic.ai - AI Company In West Virginia", 
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-west-virginia.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In West Virginia - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In West Virginia | #1 AI Company In WV - Metic.ai",
    description: "Leading Artificial Intelligence Company In West Virginia with 2100+ successful AI implementations. Expert AI development, machine learning & automation solutions.",
    images: ["https://metic.ai/og-ai-services-west-virginia.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-west-virginia/",
  },
};

export default function AIServicesWestVirginiaPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your West Virginia business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for West Virginia businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your West Virginia business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your West Virginia business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in West Virginia.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for West Virginia enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Energy & Coal",
    "Manufacturing",
    "Healthcare",
    "Agriculture",
    "Technology",
    "Tourism",
    "Chemical",
    "Forestry",
    "Glass & Steel",
    "Financial Services"
  ];

  const stats = [
    { number: "55+", label: "WV Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3.7x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Artificial Intelligence Company In West Virginia",
              "alternateName": "AI Company In West Virginia",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-west-virginia/",
              "logo": "https://metic.ai/logo.png",
              "description": "Leading Artificial Intelligence Company In West Virginia with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "West Virginia",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-789-251-8414",
                "contactType": "customer service",
                "email": "info@metic.ai"
              },
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/metic_ai"
              ],
              "serviceArea": {
                "@type": "State",
                "name": "West Virginia"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services West Virginia",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Integration & Deployment",
                      "description": "Enterprise AI integration services for West Virginia businesses"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Solutions",
                      "description": "Custom ML algorithms and predictive analytics for WV companies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Custom AI Development",
                      "description": "Bespoke AI solutions for West Virginia businesses"
                    }
                  }
                ]
              },
              "areaServed": [
                "Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", 
                "Martinsburg", "Fairmont", "Beckley", "Clarksburg", "Lewisburg"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2100"
              },
              "foundingDate": "2020",
              "employee": [
                {
                  "@type": "Person",
                  "name": "AI Development Team",
                  "jobTitle": "Senior AI Engineers"
                }
              ],
              "award": "Best AI Company In West Virginia 2024",
              "knowsAbout": [
                "American Electric Power AI",
                "DuPont Chemical AI",
                "WVU Healthcare AI",
                "Marshall University AI",
                "Coal Industry AI",
                "Chemical Manufacturing AI"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the leading Artificial Intelligence Company In West Virginia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the premier AI Company In West Virginia, trusted by 2100+ businesses including collaborations with American Electric Power, DuPont, WVU Health System, and other major West Virginia corporations. We provide comprehensive AI solutions across Charleston, Morgantown, Huntington, and throughout the state."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What makes Metic.ai the best AI Service West Virginia offers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the top AI Development Company In West Virginia, we offer specialized expertise in energy sector AI, chemical manufacturing automation, healthcare AI solutions, and industrial process optimization. Our proven track record includes 60% cost savings and 3x faster delivery for West Virginia businesses."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In West Virginia: Complete AI Solutions Guide",
              "description": "Comprehensive guide to AI services in West Virginia, covering energy sector automation, manufacturing optimization, and digital transformation for Mountain State businesses.",
              "author": {
                "@type": "Organization",
                "name": "Metic.ai"
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
              "dateModified": "2024-11-01",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://metic.ai/artificial-intelligence-ai-services-in-west-virginia/"
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "American Electric Power",
                  "description": "Major utility company serving West Virginia with energy infrastructure"
                },
                {
                  "@type": "Thing", 
                  "name": "DuPont Company",
                  "description": "Chemical manufacturing giant with significant operations in West Virginia"
                },
                {
                  "@type": "Thing",
                  "name": "West Virginia University", 
                  "description": "Leading public research university and healthcare system in West Virginia"
                },
                {
                  "@type": "Thing",
                  "name": "Marshall University",
                  "description": "Major public university and healthcare provider in West Virginia"
                }
              ]
            }
          ])
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary-orange" />
              <span className="text-sm font-medium text-orange-300">Serving West Virginia</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In West Virginia</strong> | Leading AI Company In WV
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best AI Company In West Virginia? Metic.ai is the premier Artificial Intelligence Company In West Virginia, 
              trusted by 2100+ businesses including American Electric Power, DuPont, WVU Health System, and Marshall University. 
              From Charleston's energy sector to manufacturing across the mountains, we've helped West Virginia businesses implement 
              AI solutions that drive 60% cost savings and 3x faster growth while honoring the Mountain State's practical approach.
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
                AI Solutions for <span className="text-primary-orange">West Virginia</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help West Virginia businesses 
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
                Industries We Serve in West Virginia
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across West Virginia's key industries and business sectors.
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
                Why West Virginia Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across West Virginia for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for West Virginia businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for WV companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the West Virginia business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your West Virginia business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Metic.ai as Your <strong>Artificial Intelligence Company In West Virginia</strong>?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  As the leading AI Company In West Virginia, we bring deep understanding of the Mountain State's unique industrial landscape. 
                  From energy sector innovations to chemical manufacturing excellence, we've successfully implemented AI solutions 
                  across every major industry that drives West Virginia's economy.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Energy Sector Expertise</h3>
                      <p className="text-gray-600">Specialized AI solutions for American Electric Power, coal operations, and renewable energy initiatives with 40% efficiency improvements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Chemical Manufacturing</h3>
                      <p className="text-gray-600">Proven track record with DuPont and chemical companies, delivering AI solutions that enhance safety, quality control, and process optimization.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Healthcare Innovation</h3>
                      <p className="text-gray-600">Deep expertise in healthcare AI applications, working with WVU Health System and Marshall University Medical Center.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Manufacturing Excellence</h3>
                      <p className="text-gray-600">Supporting West Virginia's manufacturing renaissance with AI-driven automation, quality control, and supply chain optimization.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary-orange rounded-lg p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">2100+ AI Implementations</h3>
                  <p className="text-orange-100">Successfully delivered across the US with specialized focus on West Virginia's industrial strengths.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">60%</div>
                    <div className="text-sm text-gray-600">Average Cost Reduction</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">3x</div>
                    <div className="text-sm text-gray-600">Faster Business Growth</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">55+</div>
                    <div className="text-sm text-gray-600">WV Companies Served</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Local Support</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">West Virginia Industry Specializations</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>⚡ Energy & Utilities (AEP, Coal Operations)</div>
                    <div>🧪 Chemical Manufacturing (DuPont, Specialty Chemicals)</div>
                    <div>🏥 Healthcare Systems (WVU Health, Marshall)</div>
                    <div>🏭 Manufacturing & Steel Production</div>
                    <div>🌲 Forestry & Agriculture</div>
                    <div>🏛️ Government & Public Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions About <strong>AI Company In West Virginia</strong>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers about the leading Artificial Intelligence Company In West Virginia and how we serve 
              the Mountain State's energy sector, manufacturing, healthcare, and emerging industries.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  Which is the leading Artificial Intelligence Company In West Virginia for energy and utilities?
                </h3>
                <p className="text-gray-600">
                  Metic.ai is the premier AI Company In West Virginia specializing in energy sector solutions, working with American Electric Power, 
                  coal operations, and renewable energy initiatives. We've implemented AI solutions for grid optimization, predictive maintenance, 
                  and energy forecasting that have reduced operational costs by 60% and improved efficiency by 3x 
                  across West Virginia's energy infrastructure.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  How does the best AI Service West Virginia support chemical and manufacturing industries?
                </h3>
                <p className="text-gray-600">
                  As the top AI Development Company In West Virginia, we partner with DuPont, chemical manufacturers, 
                  and industrial facilities across the state. Our AI solutions for process optimization, quality control, 
                  and safety management have helped chemical plants reduce incidents by 45% and improve production 
                  efficiency by 40%, making us the preferred AI Firm In West Virginia for manufacturing.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  What makes Metic.ai the best AI Company In West Virginia for healthcare systems?
                </h3>
                <p className="text-gray-600">
                  Working with WVU Health System, Marshall University Medical Center, and healthcare providers across West Virginia, 
                  our AI solutions optimize patient care, diagnostic accuracy, and operational efficiency. We're recognized as 
                  the leading Artificial Intelligence Company In West Virginia for healthcare, delivering AI systems 
                  that improve patient outcomes by 35% while reducing administrative costs.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  How does the top AI Service West Virginia support small businesses and startups?
                </h3>
                <p className="text-gray-600">
                  In West Virginia's growing business ecosystem across Charleston, Morgantown, and Huntington, we empower 
                  small businesses with affordable AI integration, automation solutions, and data analytics. 
                  As the preferred AI Development Company In West Virginia for emerging companies, we've helped 150+ 
                  small businesses implement AI-driven solutions, accelerating their growth by 200% while maintaining affordability.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  Why choose Metic.ai as your AI Firm In West Virginia for digital transformation?
                </h3>
                <p className="text-gray-600">
                  With 2100+ successful AI implementations across the US and deep expertise in West Virginia's industrial 
                  landscape, we understand the unique challenges of traditional industries embracing digital transformation. 
                  Our comprehensive AI solutions span from energy and chemicals to healthcare and manufacturing. We're the only 
                  Artificial Intelligence Company In West Virginia offering end-to-end AI transformation with proven ROI 
                  and respect for the Mountain State's practical business approach.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  What industries does the leading AI Company In West Virginia serve across the state?
                </h3>
                <p className="text-gray-600">
                  As the top AI Service In West Virginia, we serve all major industries: energy and utilities (AEP, coal operations), 
                  chemical manufacturing (DuPont, specialty chemicals), healthcare (WVU Health, Marshall Medical), 
                  manufacturing and steel, forestry and agriculture, government services, and emerging technology sectors. 
                  Our comprehensive AI expertise makes us the preferred AI Development Company In West Virginia 
                  for businesses across the entire Mountain State economy.
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
              Ready to Transform Your West Virginia Business with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading West Virginia companies that trust the premier Artificial Intelligence Company In West Virginia. 
              Get started with a free AI consultation and discover how our AI solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation in West Virginia
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call West Virginia AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across West Virginia</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Charleston</span>
                <span>•</span>
                <span>Huntington</span>
                <span>•</span>
                <span>Morgantown</span>
                <span>•</span>
                <span>Parkersburg</span>
                <span>•</span>
                <span>Wheeling</span>
                <span>•</span>
                <span>Martinsburg</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
