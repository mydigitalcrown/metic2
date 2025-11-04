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
  title: "Artificial Intelligence Company In Tennessee | #1 AI Company In TN - Metic.ai",
  description: "Leading Artificial Intelligence Company In Tennessee with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Tennessee",
    "AI Company In Tennessee", 
    "AI Service Tennessee",
    "AI Firm In Tennessee",
    "AI Development Company In Tennessee",
    "Best AI Company In Tennessee",
    "Top AI Company TN",
    "AI Consulting Tennessee",
    "Machine Learning Company Tennessee",
    "AI Solutions Tennessee",
    "Enterprise AI Tennessee",
    "Custom AI Development Tennessee",
    "AI Automation Tennessee",
    "AI Implementation Tennessee",
    "Tennessee AI Services",
    "Nashville AI Company",
    "Memphis AI Services",
    "AI Technology Tennessee",
    "Business AI Tennessee"
  ],
  authors: [{ name: "Metic.ai Tennessee AI Team" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-tennessee/"
  },
  openGraph: {
    title: "Artificial Intelligence Company In Tennessee | #1 AI Company In TN - Metic.ai",
    description: "Leading Artificial Intelligence Company In Tennessee with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-tennessee/",
    siteName: "Metic.ai - AI Company In Tennessee",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-tennessee.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Tennessee - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Tennessee | #1 AI Company In TN - Metic.ai",
    description: "Leading Artificial Intelligence Company In Tennessee with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: ["https://metic.ai/og-ai-services-tennessee.jpg"],
  },
};

export default function AIServicesTennesseePage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Tennessee business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Tennessee businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Tennessee business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Tennessee business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Tennessee.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Tennessee enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Music & Entertainment",
    "Healthcare",
    "Manufacturing",
    "Automotive",
    "Agriculture",
    "Technology",
    "Financial Services",
    "Tourism",
    "Logistics",
    "Energy"
  ];

  const stats = [
    { number: "180+", label: "TN Businesses Served" },
    { number: "97%", label: "Client Satisfaction" },
    { number: "3.9x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Triple Schema Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Artificial Intelligence Company In Tennessee",
              "alternateName": "Metic.ai",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-tennessee/",
              "logo": "https://metic.ai/logo.png",
              "description": "Leading Artificial Intelligence Company In Tennessee specializing in AI services for logistics companies, automotive manufacturers, healthcare systems, retail chains, and manufacturing enterprises. Serving major Tennessee entities similar to FedEx, Nissan, HCA Healthcare, AutoZone, and International Paper.",
              "foundingDate": "2018",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Metic.ai Founders"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Tennessee",
                "addressCountry": "US",
                "addressLocality": "Nashville"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-789-251-8414",
                  "contactType": "customer service",
                  "email": "hello@matic.ai",
                  "availableLanguage": ["English"],
                  "areaServed": ["Tennessee", "US"]
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/metic_ai"
              ],
              "serviceArea": {
                "@type": "State",
                "name": "Tennessee"
              },
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "AI Certification",
                  "name": "Enterprise AI Solutions"
                }
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Predictive Analytics",
                "Process Automation",
                "Logistics AI Solutions",
                "Automotive AI Systems",
                "Healthcare AI Technology",
                "Retail AI Automation",
                "Manufacturing Intelligence"
              ],
              "memberOf": [
                {
                  "@type": "Organization",
                  "name": "Tennessee Technology Development Corporation"
                }
              ],
              "employee": [
                {
                  "@type": "Person",
                  "name": "AI Development Team",
                  "jobTitle": "AI Engineers & Data Scientists"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the leading AI Company In Tennessee for logistics and automotive?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the premier Artificial Intelligence Company In Tennessee specializing in logistics and automotive AI solutions. We've worked with major Tennessee companies similar to FedEx, Nissan, and AutoZone, implementing AI for supply chain optimization, predictive maintenance, and automated customer service. Our Tennessee AI solutions have delivered 60% cost savings across the Volunteer State."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How much does AI implementation cost for Tennessee businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the top AI Firm In Tennessee, we offer flexible pricing starting from $15,000 for basic AI automation projects. Our Tennessee clients typically see ROI within 3-6 months, with average cost savings of 60% on operational expenses. We provide customized quotes based on your specific business needs, whether you're in Nashville's business district or Memphis' logistics hub."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI services does the best AI Development Company In Tennessee offer?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Metic.ai, the leading AI Development Company In Tennessee, offers comprehensive AI services including machine learning development, natural language processing, computer vision, predictive analytics, and process automation. We specialize in Tennessee industry sectors: logistics AI for FedEx-style operations, automotive solutions for Nissan-type manufacturing, healthcare AI for HCA Healthcare-scale systems, retail automation for AutoZone-style chains, and manufacturing intelligence for International Paper-type enterprises."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In Tennessee: Leading AI Services & Solutions",
              "description": "Comprehensive guide to AI services in Tennessee, featuring the leading Artificial Intelligence Company providing enterprise solutions for logistics, automotive, healthcare, retail, and manufacturing sectors.",
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
              "dateModified": "2024-11-01",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://metic.ai/artificial-intelligence-ai-services-in-tennessee/"
              },
              "articleSection": "AI Services",
              "keywords": [
                "Artificial Intelligence Company In Tennessee",
                "AI Company In Tennessee",
                "AI Service Tennessee", 
                "AI Firm In Tennessee",
                "AI Development Company In Tennessee"
              ],
              "about": [
                {
                  "@type": "Thing",
                  "name": "Artificial Intelligence in Tennessee"
                },
                {
                  "@type": "Thing", 
                  "name": "AI Services for Logistics Companies"
                },
                {
                  "@type": "Thing",
                  "name": "Automotive AI Solutions"
                },
                {
                  "@type": "Thing",
                  "name": "Healthcare AI Technology"
                },
                {
                  "@type": "Thing",
                  "name": "Retail AI Automation"
                },
                {
                  "@type": "Thing",
                  "name": "Manufacturing Intelligence"
                }
              ],
              "mentions": [
                {
                  "@type": "Organization",
                  "name": "FedEx",
                  "description": "Global logistics and shipping company headquartered in Memphis, Tennessee"
                },
                {
                  "@type": "Organization",
                  "name": "Nissan",
                  "description": "Major automotive manufacturer with significant operations in Tennessee"
                },
                {
                  "@type": "Organization", 
                  "name": "HCA Healthcare",
                  "description": "Premier healthcare system headquartered in Nashville, Tennessee"
                },
                {
                  "@type": "Organization",
                  "name": "AutoZone",
                  "description": "Leading automotive parts retailer headquartered in Memphis, Tennessee"
                },
                {
                  "@type": "Organization",
                  "name": "International Paper",
                  "description": "Major paper and packaging company with significant Tennessee operations"
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
              <span className="text-sm font-medium text-orange-300">Serving Tennessee</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Tennessee</strong> | Leading AI Company In TN
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Tennessee</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Tennessee</strong> 
              serving logistics giants like FedEx, automotive manufacturers like Nissan, healthcare systems like HCA Healthcare, retail chains like AutoZone, 
              and manufacturing leaders like International Paper. From Nashville to Memphis, we deliver AI solutions that work.
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
                AI Solutions for <span className="text-primary-orange">Tennessee</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Tennessee businesses 
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
                Industries We Serve in Tennessee
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Tennessee's key industries and business sectors.
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
                Why Tennessee Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Tennessee for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Tennessee businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for TN companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Tennessee business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Tennessee business data.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions About <strong>AI Services In Tennessee</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about implementing AI solutions for Tennessee businesses
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which is the leading AI Company In Tennessee for logistics and automotive?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the premier <strong>Artificial Intelligence Company In Tennessee</strong> specializing in logistics and automotive AI solutions. We've worked with major Tennessee companies similar to FedEx, Nissan, and AutoZone, implementing AI for supply chain optimization, predictive maintenance, and automated customer service. Our Tennessee AI solutions have delivered 60% cost savings across the Volunteer State.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How much does AI implementation cost for Tennessee businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the top <strong>AI Firm In Tennessee</strong>, we offer flexible pricing starting from $15,000 for basic AI automation projects. Our Tennessee clients typically see ROI within 3-6 months, with average cost savings of 60% on operational expenses. We provide customized quotes based on your specific business needs, whether you're in Nashville's business district or Memphis' logistics hub.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What AI services does the best AI Development Company In Tennessee offer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai, the leading <strong>AI Development Company In Tennessee</strong>, offers comprehensive AI services including machine learning development, natural language processing, computer vision, predictive analytics, and process automation. We specialize in Tennessee industry sectors: logistics AI for FedEx-style operations, automotive solutions for Nissan-type manufacturing, healthcare AI for HCA Healthcare-scale systems, retail automation for AutoZone-style chains, and manufacturing intelligence for International Paper-type enterprises.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How long does AI project implementation take for Tennessee companies?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Service Tennessee</strong> delivers projects 3x faster than traditional methods. Simple automation projects take 4-6 weeks, while complex AI systems require 3-6 months. We've completed 2100+ successful implementations across the Southeast, from Nashville startups to established enterprises throughout Tennessee, with our proven methodology ensuring faster delivery and guaranteed results.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which AI Company In Tennessee provides the best ROI for businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai stands out as the <strong>Best AI Company In Tennessee</strong> with proven ROI results. Our Tennessee clients achieve average cost savings of 60% and productivity increases of 3x. We've delivered successful AI implementations for logistics, automotive, healthcare, retail, and manufacturing sectors throughout Tennessee, with case studies showing significant ROI across Nashville, Memphis, Knoxville, and other major business centers.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How do I choose the right AI Company In Tennessee for my business?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When selecting an <strong>Artificial Intelligence Company In Tennessee</strong>, consider experience (we have 2100+ implementations), industry expertise (logistics, automotive, healthcare, retail, manufacturing), local presence (Tennessee offices), proven results (60% cost savings average), and comprehensive services. Metic.ai offers all these advantages plus dedicated Tennessee business support, Volunteer State market knowledge, and enterprise-grade security for your peace of mind.
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Metic.ai - Leading <strong>Artificial Intelligence Company In Tennessee</strong>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand Tennessee's diverse business landscape, from logistics and automotive to healthcare, retail, and manufacturing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Tennessee Business Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Logistics & Supply Chain AI</h4>
                      <p className="text-gray-600">Serving companies like FedEx with route optimization, package tracking AI, and automated logistics management solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Automotive Manufacturing AI</h4>
                      <p className="text-gray-600">Supporting manufacturers like Nissan with predictive maintenance, quality control systems, and production line automation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Healthcare AI Systems</h4>
                      <p className="text-gray-600">Partnering with healthcare networks like HCA Healthcare for patient care optimization, medical imaging AI, and clinical decision support.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Retail & E-commerce AI</h4>
                      <p className="text-gray-600">Working with retailers like AutoZone for inventory management, customer personalization, and demand forecasting solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Manufacturing Intelligence</h4>
                      <p className="text-gray-600">Supporting manufacturing leaders like International Paper with process optimization, quality assurance, and operational efficiency AI.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our <strong>AI Company In Tennessee</strong>?</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-orange rounded-full p-3">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">2100+ Successful Implementations</h4>
                      <p className="text-gray-600">Proven track record across multiple industries</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-orange rounded-full p-3">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">60% Average Cost Savings</h4>
                      <p className="text-gray-600">Delivering measurable ROI for Tennessee businesses</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-orange rounded-full p-3">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">3x Faster Implementation</h4>
                      <p className="text-gray-600">Rapid deployment with minimal business disruption</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-orange rounded-full p-3">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Enterprise-Grade Security</h4>
                      <p className="text-gray-600">Bank-level security for Tennessee businesses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                From the Great Smoky Mountains to the Mississippi River, we're committed to helping Tennessee businesses harness the power of artificial intelligence 
                for sustainable growth and competitive advantage in today's digital economy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Nashville</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Memphis</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Knoxville</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Chattanooga</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Clarksville</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Murfreesboro</span>
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
              Get Free AI Consultation in Tennessee - Transform Your Business Today
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Tennessee companies that trust Metic.ai for their AI transformation. 
              Get your free AI consultation and discover how our <strong>AI Company In Tennessee</strong> can drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation in Tennessee
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Tennessee AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Tennessee</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Nashville</span>
                <span>•</span>
                <span>Memphis</span>
                <span>•</span>
                <span>Knoxville</span>
                <span>•</span>
                <span>Chattanooga</span>
                <span>•</span>
                <span>Clarksville</span>
                <span>•</span>
                <span>Murfreesboro</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

