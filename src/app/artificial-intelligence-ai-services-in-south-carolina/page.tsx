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
  title: "Artificial Intelligence Company In South Carolina | #1 AI Company In SC - Metic.ai",
  description: "Leading Artificial Intelligence Company In South Carolina with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In South Carolina",
    "AI Company In South Carolina",
    "AI Service In South Carolina",
    "AI Firm In South Carolina", 
    "AI Development Company In South Carolina",
    "Best AI Company In South Carolina",
    "Top AI Company SC",
    "Machine Learning Company South Carolina",
    "AI Consulting Services South Carolina",
    "Custom AI Solutions South Carolina",
    "Enterprise AI South Carolina",
    "AI Automation Company South Carolina",
    "Data Science Company South Carolina",
    "South Carolina AI Services",
    "AI Implementation South Carolina",
    "AI Technology Company South Carolina",
    "Leading AI Firm South Carolina",
    "AI Software Development South Carolina",
    "Professional AI Services South Carolina"
  ],
  authors: [{ name: "Metic.ai South Carolina AI Team" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-south-carolina/"
  },
  openGraph: {
    title: "Artificial Intelligence Company In South Carolina | #1 AI Company In SC - Metic.ai",
    description: "Leading Artificial Intelligence Company In South Carolina with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-south-carolina/",
    type: "website",
    siteName: "Metic.ai - AI Company In South Carolina",
    images: [
      {
        url: "https://metic.ai/og-ai-services-south-carolina.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In South Carolina - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In South Carolina | #1 AI Company In SC - Metic.ai",
    description: "Leading Artificial Intelligence Company In South Carolina with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-services-south-carolina.jpg"],
  },
};

export default function AIServicesSouthCarolinaPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your South Carolina business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for South Carolina businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your South Carolina business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your South Carolina business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in South Carolina.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for South Carolina enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Manufacturing",
    "Aerospace",
    "Automotive",
    "Tourism",
    "Agriculture",
    "Healthcare",
    "Technology",
    "Financial Services",
    "Textiles",
    "Energy"
  ];

  const stats = [
    { number: "125+", label: "SC Businesses Served" },
    { number: "97%", label: "Client Satisfaction" },
    { number: "3.8x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai - Artificial Intelligence Company In South Carolina",
            "alternateName": "Metic.ai AI Company South Carolina",
            "description": "Leading Artificial Intelligence Company In South Carolina specializing in AI solutions for aerospace giants like Boeing, automotive manufacturers like BMW Manufacturing, tire leaders like Michelin, energy companies like SCANA, and paper manufacturers like Domtar.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-south-carolina/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/logo.png",
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "South Carolina",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.8361",
              "longitude": "-81.1637"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "Customer Service",
              "email": "hello@matic.ai",
              "availableLanguage": ["English"]
            },
            "sameAs": [
              "https://linkedin.com/company/metic-ai",
              "https://twitter.com/meticai"
            ],
            "foundingDate": "2020",
            "numberOfEmployees": "500+",
            "serviceArea": {
              "@type": "State",
              "name": "South Carolina"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Portfolio",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment for South Carolina Businesses",
                    "description": "Enterprise AI integration for Boeing-level aerospace operations and BMW Manufacturing-type automotive production"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Machine Learning Solutions South Carolina",
                    "description": "Custom ML algorithms for Michelin-scale manufacturing and SCANA-type energy operations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Development South Carolina",
                    "description": "Bespoke AI solutions for Domtar-type manufacturing companies and South Carolina businesses"
                  }
                }
              ]
            },
            "areaServed": [
              "Charleston", "Columbia", "North Charleston", "Mount Pleasant", "Rock Hill",
              "Greenville", "Summerville", "Sumter", "Goose Creek", "Hilton Head Island",
              "Florence", "Spartanburg", "Anderson", "Myrtle Beach", "Aiken"
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
                "name": "Which is the leading AI Company In South Carolina for manufacturing and aerospace?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai stands out as the premier AI Company In South Carolina with 2100+ successful implementations across the Palmetto State. Our expertise spans aerospace AI for Boeing-level operations, automotive manufacturing for BMW Manufacturing-type facilities, tire production for Michelin-style operations, energy solutions for SCANA-type companies, and paper manufacturing for Domtar-style enterprises. We've delivered an average of 60% cost savings and 3x faster project delivery for South Carolina businesses."
                }
              },
              {
                "@type": "Question", 
                "name": "How much does AI implementation cost for South Carolina businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In South Carolina, we offer competitive pricing starting from $15,000 for basic AI automation projects. Our South Carolina clients typically see ROI within 3-6 months, with average cost savings of 60% on operational expenses. We provide customized quotes based on specific business needs, whether you're in Charleston's port district or Columbia's business sector."
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
            "headline": "Artificial Intelligence Company In South Carolina | Leading AI Services & Solutions",
            "description": "Comprehensive guide to AI services in South Carolina featuring expert solutions for aerospace, automotive, manufacturing, and energy sectors with proven results for South Carolina businesses.",
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
            "dateModified": "2024-12-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-south-carolina/"
            },
            "about": [
              {
                "@type": "Thing",
                "name": "Boeing",
                "description": "South Carolina aerospace leader utilizing AI solutions"
              },
              {
                "@type": "Thing", 
                "name": "BMW Manufacturing",
                "description": "South Carolina automotive manufacturer implementing AI technology"
              },
              {
                "@type": "Thing",
                "name": "Michelin", 
                "description": "South Carolina tire manufacturer leveraging AI for operations"
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
              <span className="text-sm font-medium text-orange-300">Serving South Carolina</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In South Carolina</strong> | Leading AI Company In SC
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In South Carolina</strong>? Metic.ai is the premier 
              <strong>Artificial Intelligence Company In South Carolina</strong> delivering real results for the 
              Palmetto State's businesses. Which AI firm in South Carolina can help you achieve 60% cost savings and 
              3x faster delivery? We've proven our expertise with 2100+ successful implementations for South Carolina 
              businesses from Charleston to Columbia.
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
                AI Solutions for <span className="text-primary-orange">South Carolina</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help South Carolina businesses 
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
                Industries We Serve in South Carolina
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across South Carolina's key industries and business sectors.
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
                Why South Carolina Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across South Carolina for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for South Carolina businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for SC companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the South Carolina business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your South Carolina business data.</p>
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
                Frequently Asked Questions About <strong>AI Services In South Carolina</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about implementing AI solutions for South Carolina businesses
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which is the leading AI Company In South Carolina for manufacturing and aerospace?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the premier <strong>Artificial Intelligence Company In South Carolina</strong> specializing in manufacturing and aerospace AI solutions. We've worked with major South Carolina companies similar to Boeing, BMW Manufacturing, and Michelin, implementing AI for production optimization, quality control, and supply chain management. Our South Carolina AI solutions have delivered 60% cost savings and improved manufacturing efficiency across the Palmetto State.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How much does AI implementation cost for South Carolina businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the top <strong>AI Firm In South Carolina</strong>, we offer flexible pricing starting from $15,000 for basic AI automation projects. Our South Carolina clients typically see ROI within 3-6 months, with average cost savings of 60% on operational expenses. We provide customized quotes based on your specific business needs, whether you're in Charleston's port district or Columbia's business sector.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What AI services does the best AI Development Company In South Carolina offer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai, the leading <strong>AI Development Company In South Carolina</strong>, offers comprehensive AI services including machine learning development, natural language processing, computer vision, predictive analytics, and process automation. We specialize in South Carolina industry sectors: aerospace AI for Boeing-style operations, automotive manufacturing for BMW Manufacturing-type facilities, tire production for Michelin-scale operations, energy solutions for SCANA-type companies, and paper manufacturing for Domtar-style enterprises.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How long does AI project implementation take for South Carolina companies?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Service In South Carolina</strong> delivers projects 3x faster than traditional methods. Simple automation projects take 4-6 weeks, while complex AI systems require 3-6 months. We've completed 2100+ successful implementations across the Southeast, from Charleston startups to established enterprises throughout South Carolina, with our proven methodology ensuring faster delivery and guaranteed results.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which AI Company In South Carolina provides the best ROI for businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai stands out as the <strong>Best AI Company In South Carolina</strong> with proven ROI results. Our South Carolina clients achieve average cost savings of 60% and productivity increases of 3x. We've delivered successful AI implementations for aerospace, automotive, manufacturing, energy, and tourism sectors throughout South Carolina, with case studies showing significant ROI across Charleston, Columbia, Greenville, and other major business centers.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How do I choose the right AI Company In South Carolina for my business?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When selecting an <strong>Artificial Intelligence Company In South Carolina</strong>, consider experience (we have 2100+ implementations), industry expertise (aerospace, automotive, manufacturing, energy), local presence (South Carolina offices), proven results (60% cost savings average), and comprehensive services. Metic.ai offers all these advantages plus dedicated South Carolina business support, Palmetto State market knowledge, and enterprise-grade security for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why <strong>Metic.ai</strong> is the <strong>Best AI Company In South Carolina</strong>
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    As the premier <strong>Artificial Intelligence Company In South Carolina</strong>, Metic.ai brings deep expertise to the Palmetto State's diverse business landscape. We understand South Carolina's unique economic drivers - from aerospace giants like Boeing to automotive leaders like BMW Manufacturing, industrial powerhouses like Michelin, energy leaders like SCANA, and manufacturing excellence like Domtar.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our <strong>AI Company In South Carolina</strong> specializes in industry-specific solutions that drive real results. Whether you're optimizing aerospace manufacturing processes in Charleston, enhancing automotive production efficiency in Greer, improving tire manufacturing operations in Greenville, streamlining energy distribution in Columbia, or revolutionizing paper production in Catawba, our AI solutions are tailored to South Carolina business needs.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    With 2100+ successful AI implementations and a proven track record of delivering 60% cost savings and 3x productivity improvements, we're the trusted <strong>AI Service In South Carolina</strong> that leading companies rely on for their digital transformation journey.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-primary-orange to-secondary-orange p-8 rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-4">South Carolina Business Expertise</h3>
                  <ul className="space-y-3 text-orange-100">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      Aerospace & Defense AI Solutions
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      Automotive Manufacturing Automation
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      Industrial Manufacturing Optimization
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      Energy & Utilities AI Implementation
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      Paper & Pulp Production Enhancement
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-gray-600">AI Projects Completed</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">60%</div>
                    <div className="text-gray-600">Average Cost Savings</div>
                  </div>
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
              Get Free AI Consultation in South Carolina - Transform Your Business Today
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading South Carolina companies that trust Metic.ai for their AI transformation. 
              Get your free AI consultation and discover how our <strong>AI Company In South Carolina</strong> can drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation in South Carolina
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call South Carolina AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across South Carolina</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Charleston</span>
                <span>•</span>
                <span>Columbia</span>
                <span>•</span>
                <span>Greenville</span>
                <span>•</span>
                <span>Rock Hill</span>
                <span>•</span>
                <span>Mount Pleasant</span>
                <span>•</span>
                <span>Spartanburg</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

