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
  title: "Artificial Intelligence Company In Kansas | #1 AI Company In Kansas - Metic.ai",
  description: "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Kansas",
    "AI Company In Kansas", 
    "AI Service In Kansas",
    "AI Firm In Kansas",
    "AI Development Company In Kansas",
    "Best AI Company In Kansas",
    "Top AI Company Kansas",
    "Leading AI Company Kansas",
    "AI Solutions Company Kansas",
    "Machine Learning Company Kansas",
    "AI Consulting Company Kansas",
    "AI Technology Company Kansas",
    "AI Services Provider Kansas",
    "Custom AI Company Kansas",
    "Enterprise AI Company Kansas",
    "AI Software Company Kansas",
    "AI Implementation Company Kansas",
    "Professional AI Company Kansas",
    "AI Innovation Company Kansas"
  ],
  authors: [{ name: "Metic.ai Kansas AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Kansas | #1 AI Company In Kansas - Metic.ai",
    description: "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-kansas/",
    siteName: "Metic.ai - AI Company In Kansas",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metic.ai - Artificial Intelligence Company In Kansas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Kansas | #1 AI Company In Kansas - Metic.ai",
    description: "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-kansas/",
  },
};

export default function AIServicesKansasPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Kansas business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Kansas businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Kansas business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Kansas business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Kansas.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Kansas enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Agriculture",
    "Aerospace",
    "Manufacturing",
    "Energy",
    "Healthcare",
    "Technology",
    "Transportation",
    "Financial Services",
    "Education",
    "Logistics"
  ];

  const stats = [
    { number: "290+", label: "KS Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.0x", label: "Average ROI Increase" },
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
              "name": "Metic.ai - Artificial Intelligence Company In Kansas",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-kansas/",
              "logo": "https://metic.ai/logo.png",
              "image": "https://metic.ai/og-image.jpg",
              "description": "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Kansas",
                "addressCountry": "US",
                "addressLocality": "Wichita"
              },
              "telephone": "+1-789-251-8414",
              "email": "info@metic.ai",
              "foundingDate": "2020",
              "numberOfEmployees": "250+",
              "slogan": "Transform your business with AI",
              "areaServed": {
                "@type": "State",
                "name": "Kansas",
                "sameAs": "https://en.wikipedia.org/wiki/Kansas"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services Kansas",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Integration & Deployment",
                      "description": "Enterprise AI integration services for Kansas businesses"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Solutions",
                      "description": "Custom ML algorithms and predictive analytics for Kansas companies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom AI Development",
                      "description": "Bespoke AI solutions for Kansas enterprises"
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
                  "name": "Which is the best Artificial Intelligence Company In Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. We serve Wichita, Overland Park, Kansas City, and businesses throughout the Sunflower State with 60% cost savings and 3x faster delivery."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What makes Metic.ai the top AI Company In Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the premier AI Company In Kansas, Metic.ai combines deep understanding of Kansas's agriculture, aerospace, and manufacturing sectors with cutting-edge AI technology. We've helped companies in Wichita aviation industry and across the state achieve measurable results."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Metic.ai provide AI services to small businesses in Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI Service In Kansas caters to businesses of all sizes. From Wichita aerospace companies to agricultural businesses across the state, we provide scalable AI solutions that grow with your Kansas business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI technologies does your AI Firm In Kansas specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Firm In Kansas specializes in machine learning, natural language processing, computer vision, predictive analytics, and custom AI development tailored for Kansas's agriculture, aerospace, and energy industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Metic.ai support AI Development Company projects in Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As a leading AI Development Company In Kansas, we provide end-to-end support from strategy to deployment. Our Kansas-based team understands local business needs and delivers AI solutions with proven ROI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Metic.ai as your AI partner in Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choose Metic.ai because we're the Best AI Company In Kansas with local expertise, proven results, and understanding of Kansas's business landscape. We deliver AI solutions that work for Sunflower State businesses."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In Kansas | Leading AI Services",
              "description": "Comprehensive guide to AI services in Kansas. Discover how Metic.ai helps Kansas businesses implement artificial intelligence solutions.",
              "author": {
                "@type": "Organization",
                "name": "Metic.ai Kansas AI Team"
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
              "keywords": "Artificial Intelligence Company In Kansas, AI Company In Kansas, AI Service In Kansas",
              "locationCreated": {
                "@type": "Place",
                "name": "Kansas, USA"
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
              <span className="text-sm font-medium text-orange-300">Serving Kansas</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Kansas</strong> | Leading AI Company In Kansas
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Kansas</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Kansas</strong> with 2100+ successful implementations. From Wichita's aerospace industry to agricultural innovation across the Sunflower State, we deliver AI solutions that drive real results. Which <strong>AI Service In Kansas</strong> do you need? Our expert team provides custom AI development, machine learning, and automation with 60% cost savings and 3x faster delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Company Consultation
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Top AI Company Kansas
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
                AI Solutions for <span className="text-primary-orange">Kansas</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Kansas businesses 
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
                Industries We Serve in Kansas
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Kansas's key industries and business sectors.
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
                Why Kansas Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Kansas for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Kansas businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for KS companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Kansas business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Kansas business data.</p>
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
                About Metic.ai - Premier <strong>Artificial Intelligence Company In Kansas</strong>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Leading <strong>AI Company In Kansas</strong> Since 2020</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Metic.ai stands as the premier <strong>Artificial Intelligence Company In Kansas</strong>, serving businesses from the aerospace capital of Wichita to agricultural operations across the Sunflower State. As Kansas continues balancing its traditional agricultural strength with modern innovation, we've been at the forefront, helping Kansas companies leverage AI for competitive advantage.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our deep understanding of Kansas's business landscape - from the aviation industry in Wichita to precision agriculture throughout the state, from energy operations to manufacturing companies in Overland Park - enables us to deliver <strong>AI Service In Kansas</strong> that truly makes a difference.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  As the leading <strong>AI Firm In Kansas</strong>, we've partnered with companies across all sectors of the Kansas economy. Whether you're an aerospace company in Wichita, an agricultural business in western Kansas, or a technology company in Kansas City metro, our <strong>AI Development Company In Kansas</strong> services are designed to drive measurable results.
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
                  <h4 className="text-xl font-bold mb-6">Why Kansas Businesses Choose Metic.ai</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Local Kansas Expertise</h5>
                        <p className="text-gray-600 text-sm">Deep understanding of Kansas's business culture and agricultural innovation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Industry-Specific Solutions</h5>
                        <p className="text-gray-600 text-sm">Tailored AI solutions for aerospace, agriculture, energy, and manufacturing sectors</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Proven Track Record</h5>
                        <p className="text-gray-600 text-sm">2100+ successful implementations across Kansas and neighboring states</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Scalable Solutions</h5>
                        <p className="text-gray-600 text-sm">From family farms to aerospace giants in the Sunflower State</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Ongoing Support</h5>
                        <p className="text-gray-600 text-sm">24/7 support and continuous optimization for Kansas businesses</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 italic">
                      "The <strong>Best AI Company In Kansas</strong> for businesses ready to embrace innovation" - Kansas Business Quarterly
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
                Frequently Asked Questions - <strong>AI Company In Kansas</strong>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about our <strong>Artificial Intelligence Company In Kansas</strong> and AI services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Which is the best Artificial Intelligence Company In Kansas?</h3>
                <p className="text-gray-600">
                  Metic.ai is the leading <strong>Artificial Intelligence Company In Kansas</strong> with 2100+ successful AI implementations. We serve Wichita, Overland Park, Kansas City, and businesses throughout the Sunflower State with 60% cost savings and 3x faster delivery.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">What makes Metic.ai the top AI Company In Kansas?</h3>
                <p className="text-gray-600">
                  As the premier <strong>AI Company In Kansas</strong>, Metic.ai combines deep understanding of Kansas's agriculture, aerospace, and manufacturing sectors with cutting-edge AI technology. We've helped companies in Wichita aviation industry and across the state achieve measurable results.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Does Metic.ai provide AI services to small businesses in Kansas?</h3>
                <p className="text-gray-600">
                  Yes, our <strong>AI Service In Kansas</strong> caters to businesses of all sizes. From Wichita aerospace companies to agricultural businesses across the state, we provide scalable AI solutions that grow with your Kansas business.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">What AI technologies does your AI Firm In Kansas specialize in?</h3>
                <p className="text-gray-600">
                  Our <strong>AI Firm In Kansas</strong> specializes in machine learning, natural language processing, computer vision, predictive analytics, and custom AI development tailored for Kansas's agriculture, aerospace, and energy industries.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">How does Metic.ai support AI Development Company projects in Kansas?</h3>
                <p className="text-gray-600">
                  As a leading <strong>AI Development Company In Kansas</strong>, we provide end-to-end support from strategy to deployment. Our Kansas-based team understands local business needs and delivers AI solutions with proven ROI.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Why choose Metic.ai as your AI partner in Kansas?</h3>
                <p className="text-gray-600">
                  Choose Metic.ai because we're the <strong>Best AI Company In Kansas</strong> with local expertise, proven results, and understanding of Kansas's business landscape. We deliver AI solutions that work for Sunflower State businesses.
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
              Ready to Partner with the Leading <strong>AI Company In Kansas</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Kansas companies that trust the premier <strong>Artificial Intelligence Company In Kansas</strong> for their AI transformation. 
              Get started with a free consultation and discover how our <strong>AI Service In Kansas</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Transformation
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Best AI Company Kansas
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Kansas</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Wichita</span>
                <span>•</span>
                <span>Overland Park</span>
                <span>•</span>
                <span>Kansas City</span>
                <span>•</span>
                <span>Topeka</span>
                <span>•</span>
                <span>Olathe</span>
                <span>•</span>
                <span>Lawrence</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
