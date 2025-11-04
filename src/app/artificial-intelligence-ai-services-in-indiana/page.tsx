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
  title: "Artificial Intelligence Company In Indiana | #1 AI Company In Indiana - Metic.ai",
  description: "Leading Artificial Intelligence Company In Indiana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Indiana",
    "AI Company In Indiana", 
    "AI Service In Indiana",
    "AI Firm In Indiana",
    "AI Development Company In Indiana",
    "Best AI Company In Indiana",
    "Top AI Company Indiana",
    "Leading AI Company Indiana",
    "AI Solutions Company Indiana",
    "Machine Learning Company Indiana",
    "AI Consulting Company Indiana",
    "AI Technology Company Indiana",
    "AI Services Provider Indiana",
    "Custom AI Company Indiana",
    "Enterprise AI Company Indiana",
    "AI Software Company Indiana",
    "AI Implementation Company Indiana",
    "Professional AI Company Indiana",
    "AI Innovation Company Indiana"
  ],
  authors: [{ name: "Metic.ai Indiana AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Indiana | #1 AI Company In Indiana - Metic.ai",
    description: "Leading Artificial Intelligence Company In Indiana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-indiana/",
    siteName: "Metic.ai - AI Company In Indiana",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metic.ai - Artificial Intelligence Company In Indiana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Indiana | #1 AI Company In Indiana - Metic.ai",
    description: "Leading Artificial Intelligence Company In Indiana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-indiana/",
  },
};

export default function AIServicesIndianaPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Indiana business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Indiana businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Indiana business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Indiana business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Indiana.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Indiana enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Manufacturing",
    "Agriculture",
    "Healthcare",
    "Automotive",
    "Technology",
    "Logistics",
    "Pharmaceuticals",
    "Energy",
    "Education",
    "Financial Services"
  ];

  const stats = [
    { number: "720+", label: "IN Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.3x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Structured Data for SEO - Triple Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Artificial Intelligence Company In Indiana",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-indiana/",
              "logo": "https://metic.ai/logo.png",
              "image": "https://metic.ai/og-image.jpg",
              "description": "Leading Artificial Intelligence Company In Indiana with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Indiana",
                "addressCountry": "US",
                "addressLocality": "Indianapolis"
              },
              "telephone": "+1-789-251-8414",
              "email": "info@metic.ai",
              "foundingDate": "2020",
              "numberOfEmployees": "250+",
              "slogan": "Transform your business with AI",
              "areaServed": {
                "@type": "State",
                "name": "Indiana",
                "sameAs": "https://en.wikipedia.org/wiki/Indiana"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services Indiana",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Integration & Deployment",
                      "description": "Enterprise AI integration services for Indiana businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Solutions",
                      "description": "Custom ML algorithms and predictive analytics for Indiana companies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom AI Development",
                      "description": "Bespoke AI solutions for Indiana enterprises"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2100"
              },
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/metic_ai"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best Artificial Intelligence Company In Indiana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the leading Artificial Intelligence Company In Indiana with 2100+ successful AI implementations. We serve Indianapolis, Fort Wayne, Evansville, and businesses throughout the Hoosier State with 60% cost savings and 3x faster delivery."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What makes Metic.ai the top AI Company In Indiana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the premier AI Company In Indiana, Metic.ai combines deep understanding of Indiana's manufacturing and tech sectors with cutting-edge AI technology. We've helped companies in Indianapolis tech corridor and across the state achieve measurable results."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Metic.ai provide AI services to small businesses in Indiana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI Service In Indiana caters to businesses of all sizes. From Indianapolis startups to Fort Wayne manufacturers, we provide scalable AI solutions that grow with your Indiana business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI technologies does your AI Firm In Indiana specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Firm In Indiana specializes in machine learning, natural language processing, computer vision, predictive analytics, and custom AI development tailored for Indiana's manufacturing, agriculture, and tech industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Metic.ai support AI Development Company projects in Indiana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As a leading AI Development Company In Indiana, we provide end-to-end support from strategy to deployment. Our Indiana-based team understands local business needs and delivers AI solutions with proven ROI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Metic.ai as your AI partner in Indiana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choose Metic.ai because we're the Best AI Company In Indiana with local expertise, proven results, and understanding of Indiana's business landscape. We deliver AI solutions that work for Hoosier businesses."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In Indiana | Leading AI Services",
              "description": "Comprehensive guide to AI services in Indiana. Discover how Metic.ai helps Indiana businesses implement artificial intelligence solutions.",
              "author": {
                "@type": "Organization",
                "name": "Metic.ai Indiana AI Team"
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
              "keywords": "Artificial Intelligence Company In Indiana, AI Company In Indiana, AI Service In Indiana",
              "locationCreated": {
                "@type": "Place",
                "name": "Indiana, USA"
              }
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
              <span className="text-sm font-medium text-orange-300">Serving Indiana</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Indiana</strong> | Leading AI Company In Indiana
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Indiana</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Indiana</strong> with 2100+ successful implementations. From Indianapolis tech corridors to manufacturing hubs across the Hoosier State, we deliver AI solutions that drive real results. Which <strong>AI Service In Indiana</strong> do you need? Our expert team provides custom AI development, machine learning, and automation with 60% cost savings and 3x faster delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Company Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Top AI Company Indiana
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
                AI Solutions for <span className="text-primary-orange">Indiana</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Indiana businesses 
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
                Industries We Serve in Indiana
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Indiana's key industries and business sectors.
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
                Why Indiana Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Indiana for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Indiana businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for IN companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Indiana business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Indiana business data.</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                About Metic.ai - Premier <strong>Artificial Intelligence Company In Indiana</strong>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Leading <strong>AI Company In Indiana</strong> Since 2020</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Metic.ai stands as the premier <strong>Artificial Intelligence Company In Indiana</strong>, serving businesses from the bustling tech corridors of Indianapolis to the manufacturing hubs of Fort Wayne and beyond. As the Hoosier State continues its digital transformation, we've been at the forefront, helping Indiana companies leverage AI for competitive advantage.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our deep understanding of Indiana's business landscape - from the automotive industry in Kokomo to the pharmaceutical sector in Indianapolis, from agriculture technology in rural counties to logistics hubs throughout the state - enables us to deliver <strong>AI Service In Indiana</strong> that truly makes a difference.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  As the leading <strong>AI Firm In Indiana</strong>, we've partnered with companies across all sectors of the Hoosier economy. Whether you're a manufacturing company in Anderson, a tech startup in Carmel, or a healthcare organization in Evansville, our <strong>AI Development Company In Indiana</strong> services are designed to drive measurable results.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">Successful AI Implementations</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">60%</div>
                    <div className="text-sm text-gray-600">Average Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">3x</div>
                    <div className="text-sm text-gray-600">Faster Delivery</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-6">Why Indiana Businesses Choose Metic.ai</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Local Indiana Expertise</h5>
                        <p className="text-gray-600 text-sm">Deep understanding of Indiana's business culture and regulatory environment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Industry-Specific Solutions</h5>
                        <p className="text-gray-600 text-sm">Tailored AI solutions for manufacturing, agriculture, healthcare, and technology sectors</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Proven Track Record</h5>
                        <p className="text-gray-600 text-sm">2100+ successful implementations across Indiana and neighboring states</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Scalable Solutions</h5>
                        <p className="text-gray-600 text-sm">From small businesses to Fortune 500 companies in the Hoosier State</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Ongoing Support</h5>
                        <p className="text-gray-600 text-sm">24/7 support and continuous optimization for Indiana businesses</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 italic">
                      "The <strong>Best AI Company In Indiana</strong> for businesses ready to embrace the future" - Indiana Business Journal
                    </p>
                  </div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions - <strong>AI Company In Indiana</strong>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about our <strong>Artificial Intelligence Company In Indiana</strong> and AI services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Which is the best Artificial Intelligence Company In Indiana?</h3>
                <p className="text-gray-600">
                  Metic.ai is the leading <strong>Artificial Intelligence Company In Indiana</strong> with 2100+ successful AI implementations. We serve Indianapolis, Fort Wayne, Evansville, and businesses throughout the Hoosier State with 60% cost savings and 3x faster delivery.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">What makes Metic.ai the top AI Company In Indiana?</h3>
                <p className="text-gray-600">
                  As the premier <strong>AI Company In Indiana</strong>, Metic.ai combines deep understanding of Indiana's manufacturing and tech sectors with cutting-edge AI technology. We've helped companies in Indianapolis tech corridor and across the state achieve measurable results.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Does Metic.ai provide AI services to small businesses in Indiana?</h3>
                <p className="text-gray-600">
                  Yes, our <strong>AI Service In Indiana</strong> caters to businesses of all sizes. From Indianapolis startups to Fort Wayne manufacturers, we provide scalable AI solutions that grow with your Indiana business.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">What AI technologies does your AI Firm In Indiana specialize in?</h3>
                <p className="text-gray-600">
                  Our <strong>AI Firm In Indiana</strong> specializes in machine learning, natural language processing, computer vision, predictive analytics, and custom AI development tailored for Indiana's manufacturing, agriculture, and tech industries.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">How does Metic.ai support AI Development Company projects in Indiana?</h3>
                <p className="text-gray-600">
                  As a leading <strong>AI Development Company In Indiana</strong>, we provide end-to-end support from strategy to deployment. Our Indiana-based team understands local business needs and delivers AI solutions with proven ROI.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Why choose Metic.ai as your AI partner in Indiana?</h3>
                <p className="text-gray-600">
                  Choose Metic.ai because we're the <strong>Best AI Company In Indiana</strong> with local expertise, proven results, and understanding of Indiana's business landscape. We deliver AI solutions that work for Hoosier businesses.
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
              Ready to Partner with the Leading <strong>AI Company In Indiana</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Indiana companies that trust the premier <strong>Artificial Intelligence Company In Indiana</strong> for their AI transformation. 
              Get started with a free consultation and discover how our <strong>AI Service In Indiana</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Best AI Company Indiana
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Indiana</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Indianapolis</span>
                <span>•</span>
                <span>Fort Wayne</span>
                <span>•</span>
                <span>Evansville</span>
                <span>•</span>
                <span>South Bend</span>
                <span>•</span>
                <span>Carmel</span>
                <span>•</span>
                <span>Fishers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
