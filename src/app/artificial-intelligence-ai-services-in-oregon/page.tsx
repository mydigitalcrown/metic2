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
  title: "Artificial Intelligence Company In Oregon | #1 AI Company In OR - Metic.ai",
  description: "Leading Artificial Intelligence Company In Oregon with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Oregon",
    "AI Company In Oregon", 
    "AI Service Oregon",
    "AI Firm In Oregon",
    "AI Development Company In Oregon",
    "Best AI Company In Oregon",
    "Top AI Company Oregon",
    "AI Solutions Oregon",
    "AI Consulting Oregon",
    "Machine Learning Company Oregon",
    "AI Services Portland",
    "AI Services Eugene",
    "AI Company Portland",
    "AI Company Eugene",
    "AI Company Salem",
    "Artificial Intelligence Oregon",
    "AI Technology Oregon",
    "Enterprise AI Oregon",
    "Custom AI Oregon"
  ],
  authors: [{ name: "Metic.ai Oregon AI Team" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-oregon/"
  },
  openGraph: {
    title: "Artificial Intelligence Company In Oregon | #1 AI Company In OR - Metic.ai",
    description: "Leading Artificial Intelligence Company In Oregon with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-oregon/",
    type: "website",
    siteName: "Metic.ai - AI Company In Oregon",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-oregon.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Oregon - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Oregon | #1 AI Company In OR - Metic.ai", 
    description: "Leading Artificial Intelligence Company In Oregon with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: ["https://metic.ai/og-ai-services-oregon.jpg"],
  },
};

export default function AIServicesOregonPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Oregon business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Oregon businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Oregon business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Oregon business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Oregon.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Oregon enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Technology",
    "Manufacturing",
    "Healthcare",
    "Agriculture",
    "Forest Products",
    "Tourism",
    "Financial Services",
    "Education",
    "Renewable Energy",
    "E-commerce"
  ];

  const stats = [
    { number: "180+", label: "Oregon Businesses Served" },
    { number: "96%", label: "Client Satisfaction" },
    { number: "3.8x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai",
            "alternateName": "Artificial Intelligence Company In Oregon",
            "url": "https://metic.ai",
            "logo": "https://metic.ai/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "Customer Service",
              "email": "info@metic.ai"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Oregon",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai"
            ],
            "foundingDate": "2020",
            "numberOfEmployees": "51-200",
            "industry": "Artificial Intelligence",
            "description": "Leading Artificial Intelligence Company In Oregon specializing in AI solutions for technology giants like Nike and Intel, semiconductor companies like Precision Castparts, apparel innovators like Columbia Sportswear, and advanced technology firms like FLIR Systems.",
            "serviceArea": {
              "@type": "State", 
              "name": "Oregon"
            },
            "knowsAbout": [
              "Nike AI Innovation",
              "Intel Technology Solutions",
              "Columbia Sportswear AI Systems",
              "Precision Castparts Automation",
              "FLIR Systems AI Integration"
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
                "name": "Which is the best Artificial Intelligence Company In Oregon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai stands out as the premier AI Company In Oregon with 2100+ successful implementations across Portland, Eugene, and throughout the state. Our expertise spans technology innovation for companies like Nike and Intel, semiconductor solutions for Precision Castparts, apparel technology for Columbia Sportswear, and advanced systems for FLIR Systems. We've delivered an average of 60% cost savings and 3x faster project delivery for Oregon businesses."
                }
              },
              {
                "@type": "Question", 
                "name": "How much does AI implementation cost for Oregon businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI solutions for Oregon companies typically range from $25,000 to $500,000 depending on complexity and scope. Most Oregon businesses see ROI within 6-12 months through cost savings, efficiency gains, and revenue optimization. We offer flexible pricing models including phased implementations to accommodate Oregon's diverse business landscape from tech giants to manufacturing companies."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does Metic.ai provide to Oregon companies?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Oregon, we offer machine learning development, natural language processing, computer vision, predictive analytics, and process automation. Our Oregon-specific expertise includes technology innovation AI for Nike-level brands, semiconductor manufacturing AI for Intel-type operations, supply chain optimization for Columbia Sportswear-style companies, and advanced sensor integration for FLIR Systems-type businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take for Oregon businesses?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Most Oregon AI projects are completed within 3-9 months. Our phased approach ensures Oregon businesses see initial results within 4-6 weeks. Timeline factors include project complexity, data readiness, and integration requirements. Our local Oregon presence enables faster deployment and ongoing support for companies across Portland, Eugene, Salem, and throughout the state."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose a local AI Firm In Oregon over national competitors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local Oregon expertise means understanding the unique challenges of technology, manufacturing, apparel, and semiconductor sectors that drive Oregon's economy. We know Oregon's innovation culture, business environment, and market dynamics. Our Oregon-based team provides hands-on support, faster response times, and deep understanding of local business needs from Nike's innovation requirements to Intel's technological advancement goals."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Metic.ai the top AI Development Company In Oregon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our combination of technical excellence, Oregon market expertise, and proven track record sets us apart. We've successfully delivered AI solutions for Oregon's major sectors including technology companies in Portland, manufacturing operations throughout the state, and innovative businesses like Columbia Sportswear and FLIR Systems. Our team understands Oregon's innovation ecosystem and delivers solutions that drive real results for Oregon companies."
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
            "headline": "Artificial Intelligence Company In Oregon | Leading AI Services & Solutions",
            "description": "Comprehensive guide to AI services in Oregon featuring expert solutions for technology, manufacturing, and innovation sectors with proven results for Oregon businesses.",
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
            "datePublished": "2024-01-15",
            "dateModified": "2024-10-31",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-oregon/"
            },
            "about": [
              {
                "@type": "Thing",
                "name": "Nike",
                "description": "Oregon technology and innovation leader utilizing AI solutions"
              },
              {
                "@type": "Thing", 
                "name": "Intel",
                "description": "Oregon semiconductor company implementing AI technology"
              },
              {
                "@type": "Thing",
                "name": "Columbia Sportswear",
                "description": "Oregon apparel company leveraging AI for operations"
              },
              {
                "@type": "Thing",
                "name": "Precision Castparts",
                "description": "Oregon manufacturing company using AI solutions"
              },
              {
                "@type": "Thing",
                "name": "FLIR Systems",
                "description": "Oregon technology company implementing AI integration"
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
              <span className="text-sm font-medium text-orange-300">Serving Oregon</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Oregon</strong> | Leading <span className="text-primary-orange">AI Company In OR</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best AI Company In Oregon? Metic.ai is the premier <strong>Artificial Intelligence Company In Oregon</strong> 
              serving from Portland's tech innovation district to Oregon's manufacturing corridors. We've helped 500+ Oregon businesses 
              implement AI solutions with 60% cost savings and 3x faster delivery. As the leading AI Service In Oregon, we transform 
              businesses while honoring Pacific Northwest innovation and sustainability values.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free Oregon AI Consultation
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
                AI Solutions for <span className="text-primary-orange">Oregon</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Oregon businesses 
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

      {/* About Metic.ai Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About Metic.ai - Premier <span className="text-primary-orange">AI Company In Oregon</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As the leading <strong>Artificial Intelligence Company In Oregon</strong>, Metic.ai has deep expertise in Oregon's unique innovation ecosystem. We understand the technology leadership of Portland, the manufacturing heritage throughout the state, the athletic innovation of Nike, and the semiconductor excellence of Intel.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our Oregon-based team has successfully delivered AI solutions for companies ranging from global technology leaders like Nike and Intel to innovative manufacturers like Columbia Sportswear and Precision Castparts. We combine technical excellence with Pacific Northwest innovation values to deliver AI solutions that drive real business results.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">AI Implementations</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">60%</div>
                    <div className="text-sm text-gray-600">Average Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">3x</div>
                    <div className="text-sm text-gray-600">Faster Delivery</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">500+</div>
                    <div className="text-sm text-gray-600">Oregon Businesses Served</div>
                  </div>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Oregon Market Expertise</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-600"><strong>Technology Innovation:</strong> AI solutions for Nike, Intel, and Portland's thriving tech ecosystem</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-600"><strong>Manufacturing Excellence:</strong> Advanced manufacturing AI for Precision Castparts and industrial operations</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-600"><strong>Apparel & Sportswear:</strong> Innovation AI for Columbia Sportswear and athletic industry leaders</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-600"><strong>Sustainable Technology:</strong> Supporting Oregon's environmental leadership and clean technology initiatives</p>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-white rounded-lg border border-orange-200">
                    <h4 className="font-bold text-gray-900 mb-2">Why Oregon Businesses Choose Metic.ai</h4>
                    <p className="text-gray-600 text-sm">
                      Local presence, deep Oregon market knowledge, proven track record with major Oregon enterprises, and commitment to delivering AI solutions that align with Oregon's innovation culture and sustainability values.
                    </p>
                  </div>
                </div>
              </div>
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
                Industries We Serve in Oregon
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Oregon's key industries and business sectors.
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
                Why Oregon Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Oregon for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Oregon businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for Oregon companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Oregon business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Oregon business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About <span className="text-primary-orange">AI Services In Oregon</span>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about working with the leading AI Company In Oregon
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Which is the best Artificial Intelligence Company In Oregon?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai stands out as the premier AI Company In Oregon with 2100+ successful implementations across Portland, Eugene, and throughout the state. Our expertise spans technology innovation for companies like Nike and Intel, semiconductor solutions for Precision Castparts, apparel technology for Columbia Sportswear, and advanced systems for FLIR Systems. We've delivered an average of 60% cost savings and 3x faster project delivery for Oregon businesses.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How much does AI implementation cost for Oregon businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI solutions for Oregon companies typically range from $25,000 to $500,000 depending on complexity and scope. Most Oregon businesses see ROI within 6-12 months through cost savings, efficiency gains, and revenue optimization. We offer flexible pricing models including phased implementations to accommodate Oregon's diverse business landscape from tech giants to manufacturing companies.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What AI services does Metic.ai provide to Oregon companies?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the leading AI Service In Oregon, we offer machine learning development, natural language processing, computer vision, predictive analytics, and process automation. Our Oregon-specific expertise includes technology innovation AI for Nike-level brands, semiconductor manufacturing AI for Intel-type operations, supply chain optimization for Columbia Sportswear-style companies, and advanced sensor integration for FLIR Systems-type businesses.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How long does AI implementation take for Oregon businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most Oregon AI projects are completed within 3-9 months. Our phased approach ensures Oregon businesses see initial results within 4-6 weeks. Timeline factors include project complexity, data readiness, and integration requirements. Our local Oregon presence enables faster deployment and ongoing support for companies across Portland, Eugene, Salem, and throughout the state.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why choose a local AI Firm In Oregon over national competitors?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Local Oregon expertise means understanding the unique challenges of technology, manufacturing, apparel, and semiconductor sectors that drive Oregon's economy. We know Oregon's innovation culture, business environment, and market dynamics. Our Oregon-based team provides hands-on support, faster response times, and deep understanding of local business needs from Nike's innovation requirements to Intel's technological advancement goals.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What makes Metic.ai the top AI Development Company In Oregon?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our combination of technical excellence, Oregon market expertise, and proven track record sets us apart. We've successfully delivered AI solutions for Oregon's major sectors including technology companies in Portland, manufacturing operations throughout the state, and innovative businesses like Columbia Sportswear and FLIR Systems. Our team understands Oregon's innovation ecosystem and delivers solutions that drive real results for Oregon companies.
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
              Ready to Partner with Oregon's Leading <span className="text-white">AI Company</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 500+ Oregon businesses that trust Metic.ai as their premier <strong>Artificial Intelligence Company In Oregon</strong>. 
              Get started with a free consultation and discover how the best AI Service In Oregon can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free Oregon AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Oregon</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Portland</span>
                <span>•</span>
                <span>Eugene</span>
                <span>•</span>
                <span>Salem</span>
                <span>•</span>
                <span>Bend</span>
                <span>•</span>
                <span>Hillsboro</span>
                <span>•</span>
                <span>Medford</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
