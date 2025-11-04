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
  title: "Artificial Intelligence Company In South Dakota | #1 AI Company In SD - Metic.ai",
  description: "Leading Artificial Intelligence Company In South Dakota with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In South Dakota",
    "AI Company In South Dakota", 
    "AI Service South Dakota",
    "AI Firm In South Dakota",
    "AI Development Company In South Dakota",
    "Best AI Company In South Dakota",
    "Top AI Company SD",
    "AI Consulting South Dakota",
    "Machine Learning Company South Dakota",
    "AI Solutions South Dakota",
    "Enterprise AI South Dakota",
    "Custom AI Development South Dakota",
    "AI Automation South Dakota",
    "AI Implementation South Dakota",
    "South Dakota AI Services",
    "Sioux Falls AI Company",
    "Rapid City AI Services",
    "AI Technology South Dakota",
    "Business AI South Dakota"
  ],
  authors: [{ name: "Metic.ai South Dakota AI Team" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-south-dakota/"
  },
  openGraph: {
    title: "Artificial Intelligence Company In South Dakota | #1 AI Company In SD - Metic.ai",
    description: "Leading Artificial Intelligence Company In South Dakota with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-south-dakota/",
    siteName: "Metic.ai - AI Company In South Dakota",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-south-dakota.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In South Dakota - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In South Dakota | #1 AI Company In SD - Metic.ai",
    description: "Leading Artificial Intelligence Company In South Dakota with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: ["https://metic.ai/og-ai-services-south-dakota.jpg"],
  },
};

export default function AIServicesSouthDakotaPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your South Dakota business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for South Dakota businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your South Dakota business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your South Dakota business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in South Dakota.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for South Dakota enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Agriculture",
    "Tourism",
    "Manufacturing",
    "Healthcare",
    "Energy",
    "Financial Services",
    "Technology",
    "Education",
    "Mining",
    "Transportation"
  ];

  const stats = [
    { number: "65+", label: "SD Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.1x", label: "Average ROI Increase" },
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
              "name": "Metic.ai - Artificial Intelligence Company In South Dakota",
              "alternateName": "Metic.ai",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-south-dakota/",
              "logo": "https://metic.ai/logo.png",
              "description": "Leading Artificial Intelligence Company In South Dakota specializing in AI services for financial institutions, healthcare systems, energy companies, and agricultural businesses. Serving major South Dakota entities similar to Citibank, Wells Fargo, Sanford Health, Black Hills Corporation, and Poet Biorefining.",
              "foundingDate": "2018",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Metic.ai Founders"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "South Dakota",
                "addressCountry": "US",
                "addressLocality": "Sioux Falls"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-789-251-8414",
                  "contactType": "customer service",
                  "email": "hello@matic.ai",
                  "availableLanguage": ["English"],
                  "areaServed": ["South Dakota", "US"]
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/metic_ai"
              ],
              "serviceArea": {
                "@type": "State",
                "name": "South Dakota"
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
                "Financial AI Solutions",
                "Healthcare AI Systems",
                "Energy Sector AI",
                "Agricultural Technology"
              ],
              "memberOf": [
                {
                  "@type": "Organization",
                  "name": "South Dakota Technology Business Center"
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
                  "name": "Which is the leading AI Company In South Dakota for financial services and healthcare?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the premier Artificial Intelligence Company In South Dakota specializing in financial services and healthcare AI solutions. We've worked with major South Dakota companies similar to Citibank, Wells Fargo, and Sanford Health, implementing AI for fraud detection, patient care optimization, and financial automation. Our South Dakota AI solutions have delivered 60% cost savings across the Mount Rushmore State."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How much does AI implementation cost for South Dakota businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the top AI Firm In South Dakota, we offer flexible pricing starting from $15,000 for basic AI automation projects. Our South Dakota clients typically see ROI within 3-6 months, with average cost savings of 60% on operational expenses. We provide customized quotes based on your specific business needs, whether you're in Sioux Falls' financial district or Rapid City's business sector."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI services does the best AI Development Company In South Dakota offer?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Metic.ai, the leading AI Development Company In South Dakota, offers comprehensive AI services including machine learning development, natural language processing, computer vision, predictive analytics, and process automation. We specialize in South Dakota industry sectors: financial AI for Citibank-style operations, healthcare solutions for Sanford Health-type systems, energy AI for Black Hills Corporation-scale companies, and agricultural technology for Poet Biorefining-style enterprises."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In South Dakota: Leading AI Services & Solutions",
              "description": "Comprehensive guide to AI services in South Dakota, featuring the leading Artificial Intelligence Company providing enterprise solutions for financial services, healthcare, energy, and agriculture sectors.",
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
                "@id": "https://metic.ai/artificial-intelligence-ai-services-in-south-dakota/"
              },
              "articleSection": "AI Services",
              "keywords": [
                "Artificial Intelligence Company In South Dakota",
                "AI Company In South Dakota",
                "AI Service South Dakota", 
                "AI Firm In South Dakota",
                "AI Development Company In South Dakota"
              ],
              "about": [
                {
                  "@type": "Thing",
                  "name": "Artificial Intelligence in South Dakota"
                },
                {
                  "@type": "Thing", 
                  "name": "AI Services for Financial Institutions"
                },
                {
                  "@type": "Thing",
                  "name": "Healthcare AI Solutions"
                },
                {
                  "@type": "Thing",
                  "name": "Energy Sector AI"
                },
                {
                  "@type": "Thing",
                  "name": "Agricultural Technology"
                }
              ],
              "mentions": [
                {
                  "@type": "Organization",
                  "name": "Citibank",
                  "description": "Major financial institution with South Dakota operations"
                },
                {
                  "@type": "Organization",
                  "name": "Wells Fargo",
                  "description": "Leading financial services company in South Dakota"
                },
                {
                  "@type": "Organization", 
                  "name": "Sanford Health",
                  "description": "Premier healthcare system in South Dakota"
                },
                {
                  "@type": "Organization",
                  "name": "Black Hills Corporation",
                  "description": "Major energy company serving South Dakota"
                },
                {
                  "@type": "Organization",
                  "name": "Poet Biorefining",
                  "description": "Leading agricultural and biofuel company in South Dakota"
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
              <span className="text-sm font-medium text-orange-300">Serving South Dakota</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In South Dakota</strong> | Leading AI Company In SD
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In South Dakota</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In South Dakota</strong> 
              serving financial institutions like Citibank and Wells Fargo, healthcare systems like Sanford Health, energy companies like Black Hills Corporation, 
              and agricultural businesses like Poet Biorefining. From Sioux Falls to Rapid City, we deliver practical AI solutions that work.
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
                AI Solutions for <span className="text-primary-orange">South Dakota</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help South Dakota businesses 
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
                Industries We Serve in South Dakota
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across South Dakota's key industries and business sectors.
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
                Why South Dakota Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across South Dakota for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for South Dakota businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for SD companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the South Dakota business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your South Dakota business data.</p>
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
                Frequently Asked Questions About <strong>AI Services In South Dakota</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about implementing AI solutions for South Dakota businesses
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which is the leading AI Company In South Dakota for financial services and healthcare?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the premier <strong>Artificial Intelligence Company In South Dakota</strong> specializing in financial services and healthcare AI solutions. We've worked with major South Dakota companies similar to Citibank, Wells Fargo, and Sanford Health, implementing AI for fraud detection, patient care optimization, and financial automation. Our South Dakota AI solutions have delivered 60% cost savings across the Mount Rushmore State.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How much does AI implementation cost for South Dakota businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the top <strong>AI Firm In South Dakota</strong>, we offer flexible pricing starting from $15,000 for basic AI automation projects. Our South Dakota clients typically see ROI within 3-6 months, with average cost savings of 60% on operational expenses. We provide customized quotes based on your specific business needs, whether you're in Sioux Falls' financial district or Rapid City's business sector.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What AI services does the best AI Development Company In South Dakota offer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai, the leading <strong>AI Development Company In South Dakota</strong>, offers comprehensive AI services including machine learning development, natural language processing, computer vision, predictive analytics, and process automation. We specialize in South Dakota industry sectors: financial AI for Citibank-style operations, healthcare solutions for Sanford Health-type systems, energy AI for Black Hills Corporation-scale companies, and agricultural technology for Poet Biorefining-style enterprises.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How long does AI project implementation take for South Dakota companies?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Service South Dakota</strong> delivers projects 3x faster than traditional methods. Simple automation projects take 4-6 weeks, while complex AI systems require 3-6 months. We've completed 2100+ successful implementations across the Midwest, from Sioux Falls startups to established enterprises throughout South Dakota, with our proven methodology ensuring faster delivery and guaranteed results.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which AI Company In South Dakota provides the best ROI for businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai stands out as the <strong>Best AI Company In South Dakota</strong> with proven ROI results. Our South Dakota clients achieve average cost savings of 60% and productivity increases of 3x. We've delivered successful AI implementations for financial services, healthcare, energy, and agriculture sectors throughout South Dakota, with case studies showing significant ROI across Sioux Falls, Rapid City, Aberdeen, and other major business centers.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How do I choose the right AI Company In South Dakota for my business?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When selecting an <strong>Artificial Intelligence Company In South Dakota</strong>, consider experience (we have 2100+ implementations), industry expertise (financial services, healthcare, energy, agriculture), local presence (South Dakota offices), proven results (60% cost savings average), and comprehensive services. Metic.ai offers all these advantages plus dedicated South Dakota business support, Mount Rushmore State market knowledge, and enterprise-grade security for your peace of mind.
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
                About Metic.ai - Leading <strong>Artificial Intelligence Company In South Dakota</strong>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand South Dakota's unique business landscape, from financial services to agriculture, healthcare to energy production.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">South Dakota Business Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Financial Services AI</h4>
                      <p className="text-gray-600">Serving institutions like Citibank and Wells Fargo with fraud detection, risk management, and automated customer service solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Healthcare AI Systems</h4>
                      <p className="text-gray-600">Supporting healthcare networks like Sanford Health with patient care optimization, medical imaging AI, and administrative automation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Energy Sector Solutions</h4>
                      <p className="text-gray-600">Partnering with companies like Black Hills Corporation for smart grid management, predictive maintenance, and energy optimization.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Agricultural Technology</h4>
                      <p className="text-gray-600">Working with agribusiness leaders like Poet Biorefining for crop yield optimization, supply chain automation, and precision farming AI.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our <strong>AI Company In South Dakota</strong>?</h3>
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
                      <p className="text-gray-600">Delivering measurable ROI for South Dakota businesses</p>
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
                      <p className="text-gray-600">Bank-level security for South Dakota businesses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                From the Black Hills to the Missouri River, we're committed to helping South Dakota businesses harness the power of artificial intelligence 
                for sustainable growth and competitive advantage in today's digital economy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Sioux Falls</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Rapid City</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Aberdeen</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Brookings</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Watertown</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Pierre</span>
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
              Get Free AI Consultation in South Dakota - Transform Your Business Today
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading South Dakota companies that trust Metic.ai for their AI transformation. 
              Get your free AI consultation and discover how our <strong>AI Company In South Dakota</strong> can drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation in South Dakota
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call South Dakota AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across South Dakota</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Sioux Falls</span>
                <span>•</span>
                <span>Rapid City</span>
                <span>•</span>
                <span>Aberdeen</span>
                <span>•</span>
                <span>Brookings</span>
                <span>•</span>
                <span>Watertown</span>
                <span>•</span>
                <span>Mitchell</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

