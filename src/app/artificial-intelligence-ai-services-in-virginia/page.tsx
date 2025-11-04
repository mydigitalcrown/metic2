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
  title: "Artificial Intelligence Company In Virginia | #1 AI Company In VA - Metic.ai",
  description: "Leading Artificial Intelligence Company In Virginia with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Virginia",
    "AI Company In Virginia", 
    "AI Service Virginia",
    "AI Firm In Virginia",
    "AI Development Company In Virginia",
    "Best AI Company In Virginia",
    "Top AI Company Virginia",
    "Virginia AI Services",
    "Machine Learning Company Virginia",
    "AI Consulting Virginia",
    "AI Solutions Virginia",
    "Enterprise AI Virginia",
    "Custom AI Development Virginia",
    "AI Automation Virginia",
    "Virginia Artificial Intelligence",
    "Richmond AI Company",
    "Norfolk AI Services",
    "D.C. Metro AI Company",
    "Government AI Virginia"
  ],
  authors: [{ name: "Metic.ai Virginia AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Virginia | #1 AI Company In VA - Metic.ai",
    description: "Leading Artificial Intelligence Company In Virginia with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-virginia/",
    siteName: "Metic.ai - AI Company In Virginia",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-virginia.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Virginia - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Virginia | AI Company In Virginia - Metic.ai",
    description: "Leading Artificial Intelligence Company In Virginia with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-services-virginia.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-virginia/",
  },
};

export default function AIServicesVirginiaPage() {
  const services = [
    {
      title: "Government & Defense AI",
      description: "Virginia's government contractors need secure, compliant AI solutions. We build systems that meet strict requirements while delivering real value.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "orange" as const
    },
    {
      title: "Maritime & Logistics",
      description: "Norfolk's ports handle massive cargo flows. We create AI that optimizes shipping routes, predicts delays, and streamlines operations.",
      icon: Brain,
      href: "/machine-learning",
      color: "orange" as const
    },
    {
      title: "Custom Business AI",
      description: "Every Virginia business has unique challenges. We build AI solutions that address your specific problems, not generic software.",
      icon: Code,
      href: "/custom-ai-development",
      color: "orange" as const
    },
    {
      title: "Financial Analysis",
      description: "Virginia's financial sector needs accurate insights. We turn your data into clear reports that help you make smarter business decisions.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Healthcare AI",
      description: "Virginia's healthcare systems are complex. We build AI that handles patient data, scheduling, and administrative work while staying compliant.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "orange" as const
    },
    {
      title: "Data Infrastructure",
      description: "Disorganized data kills AI projects. We help Virginia businesses structure their information so AI can actually deliver results.",
      icon: Database,
      href: "/data-engineering",
      color: "orange" as const
    }
  ];

  const industries = [
    "Government",
    "Technology",
    "Defense",
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "Agriculture",
    "Tourism",
    "Education",
    "Aerospace"
  ];

  const stats = [
    { number: "220+", label: "VA Businesses Served" },
    { number: "97%", label: "Client Satisfaction" },
    { number: "4.1x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Virginia",
            "alternateName": "Metic.ai AI Company In Virginia",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-virginia/",
            "logo": "https://metic.ai/logo.png",
            "description": "Leading Artificial Intelligence Company In Virginia with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development for Virginia businesses including Capital One, Northrop Grumman, General Dynamics, Booz Allen Hamilton, and CarMax.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Virginia",
              "addressLocality": "Richmond",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.7693",
              "longitude": "-78.2057"
            },
            "telephone": "+1-789-251-8414",
            "email": "info@metic.ai",
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai"
            ],
            "serviceArea": {
              "@type": "State",
              "name": "Virginia"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Virginia",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Government & Defense AI Virginia",
                    "description": "Secure, compliant AI solutions for Virginia government contractors"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions Virginia",
                    "description": "Custom ML algorithms and predictive analytics for Virginia companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development Virginia",
                    "description": "Bespoke AI solutions for Virginia businesses"
                  }
                }
              ]
            },
            "areaServed": [
              "Virginia Beach", "Chesapeake", "Norfolk", "Richmond", "Newport News", 
              "Alexandria", "Hampton", "Portsmouth", "Suffolk", "Roanoke",
              "Lynchburg", "Harrisonburg", "Leesburg", "Charlottesville", "Danville"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100"
            },
            "knowsAbout": [
              "Artificial Intelligence Company In Virginia",
              "AI Company In Virginia",
              "Virginia Government AI",
              "Capital One AI Solutions",
              "Northrop Grumman AI Integration",
              "General Dynamics AI Services",
              "Booz Allen Hamilton AI Technology",
              "CarMax AI Solutions"
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
                "name": "Which is the best Artificial Intelligence Company In Virginia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Virginia, serving 2100+ businesses including major Virginia companies like Capital One, Northrop Grumman, General Dynamics, Booz Allen Hamilton, and CarMax. We specialize in government-compliant AI development, machine learning solutions, and enterprise AI integration with 60% cost savings and 3x faster delivery for Virginia businesses."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does the top AI Company In Virginia provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Virginia, Metic.ai provides comprehensive AI services including government & defense AI, maritime & logistics solutions, custom business AI, financial analysis, healthcare AI, and data infrastructure. We serve Virginia's government, technology, defense, healthcare, and financial services industries."
                }
              },
              {
                "@type": "Question",
                "name": "How does Virginia's government contracting sector benefit from AI services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Virginia's government contracting sector benefits from AI services through secure, compliant solutions that meet strict requirements, enhanced operational efficiency, predictive analytics for defense applications, and streamlined administrative processes. Companies like Northrop Grumman, General Dynamics, and Booz Allen Hamilton leverage AI for competitive advantage in federal contracting."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Virginia ideal for AI development companies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Virginia offers ideal conditions for AI development with its proximity to Washington D.C., strong government contracting sector, established technology companies like Capital One and CarMax, top universities, skilled workforce, and business-friendly environment that supports both government and commercial AI applications."
                }
              },
              {
                "@type": "Question",
                "name": "How can Virginia businesses implement AI solutions for government compliance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Virginia businesses can implement government-compliant AI by partnering with experienced AI companies like Metic.ai, following security frameworks like FedRAMP, implementing proper data governance, ensuring audit trails, and meeting regulatory requirements. Our approach delivers 60% cost savings and 3x faster deployment while maintaining compliance standards."
                }
              },
              {
                "@type": "Question",
                "name": "What industries in Virginia benefit most from AI services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Key Virginia industries benefiting from AI include government contracting, defense, technology, healthcare, financial services, manufacturing, aerospace, and maritime logistics. Companies like Capital One, Northrop Grumman, General Dynamics, Booz Allen Hamilton, and CarMax have successfully implemented AI to drive innovation and operational efficiency."
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
            "headline": "Artificial Intelligence Company In Virginia | Leading AI Company In VA",
            "description": "Comprehensive guide to AI services in Virginia, featuring leading Artificial Intelligence Company serving 2100+ businesses including Capital One, Northrop Grumman, General Dynamics, Booz Allen Hamilton, and CarMax.",
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-virginia/"
            },
            "articleSection": "Technology",
            "keywords": "Artificial Intelligence Company In Virginia, AI Company In Virginia, Virginia AI Services, Government AI Virginia, Capital One AI, Northrop Grumman AI, General Dynamics AI, Booz Allen Hamilton AI, CarMax AI",
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence Company In Virginia",
                "description": "Leading AI company serving Virginia businesses with government-compliant AI solutions"
              },
              {
                "@type": "Thing", 
                "name": "Virginia Government Contracting",
                "description": "Virginia's government contracting and defense industry ecosystem"
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
              <span className="text-sm font-medium text-orange-300">Serving Virginia</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Virginia</strong> | Leading AI Company In VA
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best AI Company In Virginia? Metic.ai is the premier Artificial Intelligence Company In Virginia, 
              trusted by 2100+ businesses including Capital One, Northrop Grumman, General Dynamics, Booz Allen Hamilton, and CarMax. 
              From D.C. metro area government contractors to Norfolk's maritime industry, we've helped Virginia businesses implement 
              AI solutions that drive 60% cost savings and 3x faster growth while meeting strict compliance requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation in Virginia
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Virginia AI Experts: +1-789-251-8414
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
                AI Solutions for <span className="text-primary-orange">Virginia</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Virginia businesses 
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
                Industries We Serve in Virginia
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Virginia's key industries and business sectors.
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
                Frequently Asked Questions About AI Services in Virginia
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Common questions about choosing the best Artificial Intelligence Company In Virginia
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Which is the best Artificial Intelligence Company In Virginia?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading Artificial Intelligence Company In Virginia, serving 2100+ businesses including major Virginia companies like Capital One, Northrop Grumman, General Dynamics, Booz Allen Hamilton, and CarMax. We specialize in government-compliant AI development, machine learning solutions, and enterprise AI integration with 60% cost savings and 3x faster delivery for Virginia businesses.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  What AI services does the top AI Company In Virginia provide?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier AI Company In Virginia, Metic.ai provides comprehensive AI services including government & defense AI, maritime & logistics solutions, custom business AI, financial analysis, healthcare AI, and data infrastructure. We serve Virginia's government, technology, defense, healthcare, and financial services industries.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  How does Virginia's government contracting sector benefit from AI services?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Virginia's government contracting sector benefits from AI services through secure, compliant solutions that meet strict requirements, enhanced operational efficiency, predictive analytics for defense applications, and streamlined administrative processes. Companies like Northrop Grumman, General Dynamics, and Booz Allen Hamilton leverage AI for competitive advantage in federal contracting.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  What makes Virginia ideal for AI development companies?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Virginia offers ideal conditions for AI development with its proximity to Washington D.C., strong government contracting sector, established technology companies like Capital One and CarMax, top universities, skilled workforce, and business-friendly environment that supports both government and commercial AI applications.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  How can Virginia businesses implement AI solutions for government compliance?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Virginia businesses can implement government-compliant AI by partnering with experienced AI companies like Metic.ai, following security frameworks like FedRAMP, implementing proper data governance, ensuring audit trails, and meeting regulatory requirements. Our approach delivers 60% cost savings and 3x faster deployment while maintaining compliance standards.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  What industries in Virginia benefit most from AI services?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Key Virginia industries benefiting from AI include government contracting, defense, technology, healthcare, financial services, manufacturing, aerospace, and maritime logistics. Companies like Capital One, Northrop Grumman, General Dynamics, Booz Allen Hamilton, and CarMax have successfully implemented AI to drive innovation and operational efficiency.
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
                  About Metic.ai - Leading AI Company In Virginia
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As the premier <strong>Artificial Intelligence Company In Virginia</strong>, Metic.ai has deep expertise in Virginia's government contracting ecosystem and D.C. metro area business landscape. We understand the unique compliance requirements, security standards, and operational challenges facing Virginia businesses.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team has successfully partnered with leading Virginia companies including Capital One, Northrop Grumman, General Dynamics, Booz Allen Hamilton, and CarMax, delivering government-compliant AI solutions that enhance business operations while meeting the highest security and regulatory standards required for federal contracting.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With 2100+ successful AI implementations, we're not just another AI service provider – we're Virginia's trusted AI partner, specializing in government-grade security, compliance frameworks, and enterprise solutions that drive measurable results in both commercial and government sectors.
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
                  <h3 className="text-xl font-bold mb-6">Why Virginia Businesses Choose Metic.ai</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Government Compliance Expertise</h4>
                        <p className="text-gray-600 text-sm">Deep understanding of FedRAMP, FISMA, and other federal security frameworks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Proven Government Partnerships</h4>
                        <p className="text-gray-600 text-sm">Successful partnerships with Capital One, Northrop Grumman, General Dynamics, Booz Allen Hamilton</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">D.C. Metro Area Focus</h4>
                        <p className="text-gray-600 text-sm">Specialized knowledge of Virginia's government contracting and tech corridor</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Enterprise Security</h4>
                        <p className="text-gray-600 text-sm">Government-grade security standards protecting Virginia business and federal data</p>
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
                Why Virginia Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Virginia for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Virginia businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for VA companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Virginia business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Virginia business data.</p>
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
              Ready to Transform Your Virginia Business with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Virginia companies like Capital One, Northrop Grumman, General Dynamics, Booz Allen Hamilton, and CarMax that trust Metic.ai for their AI transformation. 
              Get started with a free consultation and discover how the top AI Company In Virginia can drive your business forward with government-compliant solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation in Virginia
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Virginia AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Virginia</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Virginia Beach</span>
                <span>•</span>
                <span>Richmond</span>
                <span>•</span>
                <span>Norfolk</span>
                <span>•</span>
                <span>Chesapeake</span>
                <span>•</span>
                <span>Newport News</span>
                <span>•</span>
                <span>Alexandria</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
