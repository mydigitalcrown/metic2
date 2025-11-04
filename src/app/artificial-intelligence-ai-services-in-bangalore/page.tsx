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
  title: "Artificial Intelligence Company In Bangalore | #1 AI Company In Bangalore - Metic.ai",
  description: "Leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Bangalore",
    "AI Company In Bangalore", 
    "AI Service In Bangalore",
    "AI Firm In Bangalore",
    "AI Development Company In Bangalore",
    "Artificial Intelligence Services Bangalore",
    "AI Solutions Company Bangalore",
    "Machine Learning Company Bangalore",
    "AI Consulting Firm Bangalore",
    "AI Technology Company Bangalore",
    "Best AI Company In Bangalore",
    "Top AI Company Bangalore",
    "AI automation Bangalore",
    "AI software company Bangalore",
    "artificial intelligence consulting Bangalore",
    "AI integration services Bangalore",
    "custom AI development Bangalore",
    "enterprise AI solutions Bangalore",
    "AI ML company Bangalore"
  ],
  authors: [{ name: "Metic.ai Bangalore AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Bangalore | #1 AI Company In Bangalore - Metic.ai",
    description: "Leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-bangalore/",
    siteName: "Metic.ai - AI Company In Bangalore",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-bangalore.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Bangalore - Metic.ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    creator: "@MeticAI",
    title: "Artificial Intelligence Company In Bangalore | AI Company In Bangalore - Metic.ai",
    description: "Leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: {
      url: "https://metic.ai/og-ai-services-bangalore.jpg",
      alt: "Artificial Intelligence Company In Bangalore - Metic.ai",
    },
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-bangalore/",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  category: "Artificial Intelligence Services",
  classification: "Business Technology Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://metic.ai"),
  generator: "Metic.ai AI Company",
  applicationName: "Metic.ai - Artificial Intelligence Company In Bangalore",
};

export default function AIServicesBangalorePage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Bangalore business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Bangalore's tech and startup ecosystem.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Bangalore business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Bangalore business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Bangalore.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Bangalore enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Information Technology",
    "Software Development",
    "Fintech",
    "E-commerce",
    "Biotechnology",
    "Aerospace",
    "Telecommunications",
    "Healthcare",
    "Education",
    "Startup Ecosystem"
  ];

  const stats = [
    { number: "4,200+", label: "Bangalore Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5.8x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Organization Schema for Enhanced SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai - Artificial Intelligence Company In Bangalore",
            "alternateName": ["Metic AI", "Metic.ai Bangalore", "AI Company In Bangalore"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-bangalore/",
            "logo": "https://metic.ai/logo-bangalore-ai-company.png",
            "image": "https://metic.ai/artificial-intelligence-company-bangalore.jpg",
            "description": "Leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "foundingDate": "2020",
            "numberOfEmployees": "100-500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Padmamba Nilaya, 250, 7th C Main Rd, 3rd Stage 4th Block, West of Chord Road 1st Stage, Basaveshwar Nagar",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka", 
              "postalCode": "560079",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "customer service",
              "email": "bangalore@metic.ai",
              "availableLanguage": ["English", "Hindi", "Kannada"],
              "areaServed": "Bangalore"
            },
            "sameAs": [
              "https://linkedin.com/company/metic-ai",
              "https://twitter.com/MeticAI",
              "https://facebook.com/MeticAI"
            ],
            "serviceArea": {
              "@type": "City",
              "name": "Bangalore",
              "containedInPlace": {
                "@type": "State",
                "name": "Karnataka"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Artificial Intelligence Services In Bangalore",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Development Services Bangalore",
                    "description": "Custom AI development for Bangalore businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Machine Learning Solutions Bangalore",
                    "description": "ML algorithms and predictive analytics for Bangalore companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration Services Bangalore", 
                    "description": "Enterprise AI integration for Bangalore businesses"
                  }
                }
              ]
            },
            "areaServed": [
              "Bangalore", "Electronic City", "Whitefield", "Koramangala", "Indiranagar",
              "HSR Layout", "BTM Layout", "Marathahalli", "Sarjapur", "Bellandur", 
              "JP Nagar", "Jayanagar", "Malleswaram", "MG Road", "Brigade Road"
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning", 
              "AI Development",
              "AI Consulting",
              "AI Integration",
              "Enterprise AI Solutions",
              "AI Automation",
              "Data Science",
              "Natural Language Processing",
              "Computer Vision"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100",
              "bestRating": "5"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Organization",
                  "name": "Infosys Bangalore"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Outstanding AI Company In Bangalore. Metic.ai transformed our software development process with intelligent automation and machine learning solutions."
              }
            ]
          })
        }}
      />

      {/* FAQ Schema for ASO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Artificial Intelligence Company In Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. We serve businesses across Electronic City, Whitefield, Koramangala, and all Bangalore areas with expert AI services, machine learning solutions, and custom AI development."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Bangalore provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Bangalore, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, AI integration, automation services, data analytics, natural language processing, and computer vision solutions specifically designed for Bangalore's tech ecosystem."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Company In Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI development costs vary based on project complexity. As a leading AI Company In Bangalore, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. We provide free consultations to Bangalore businesses to determine exact project costs and ROI projections."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your Artificial Intelligence Company In Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai stands out as the top Artificial Intelligence Company In Bangalore because of our 2100+ successful implementations, 4.9/5 client satisfaction rating, 3x faster delivery, 60% cost savings, and deep understanding of Bangalore's tech ecosystem across IT, fintech, and startup sectors."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the leading AI Company In Bangalore serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As Bangalore's premier AI Company, Metic.ai serves diverse industries including information technology, software development, fintech, e-commerce, biotechnology, aerospace, telecommunications, healthcare, education, and the startup ecosystem across all Bangalore regions."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can an AI Company In Bangalore implement AI solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai, the leading AI Company In Bangalore, delivers AI solutions 3x faster than industry average. Simple AI implementations can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 3-6 months, depending on Bangalore business requirements and integration complexity."
                }
              }
            ]
          })
        }}
      />

      {/* Article Schema for Content Authority */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Artificial Intelligence Company In Bangalore | Leading AI Services & Development",
            "description": "Comprehensive guide to AI services in Bangalore. Learn about the leading Artificial Intelligence Company In Bangalore, AI development services, machine learning solutions, and how Bangalore businesses benefit from AI implementation.",
            "image": "https://metic.ai/bangalore-ai-company-services.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Bangalore",
              "url": "https://metic.ai"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Metic.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metic.ai/logo.png",
                "width": 200,
                "height": 60
              }
            },
            "datePublished": "2024-01-15",
            "dateModified": "2024-10-30",
            "articleSection": "Artificial Intelligence Services",
            "keywords": [
              "Artificial Intelligence Company In Bangalore",
              "AI Company In Bangalore",
              "AI Service In Bangalore", 
              "AI Development Company In Bangalore",
              "Bangalore AI services"
            ],
            "about": {
              "@type": "Thing",
              "name": "Artificial Intelligence Services In Bangalore"
            },
            "mentions": [
              {
                "@type": "Place",
                "name": "Electronic City, Bangalore"
              },
              {
                "@type": "Place", 
                "name": "Whitefield, Bangalore"
              },
              {
                "@type": "Organization",
                "name": "Karnataka IT.com"
              }
            ],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-bangalore/"
            }
          })
        }}
      />

      {/* Legacy Schema for Compatibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Metic.ai - Artificial Intelligence Company In Bangalore",
            "image": "https://metic.ai/bangalore-ai-company.jpg",
            "description": "Leading Artificial Intelligence Company In Bangalore with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "12.9716",
              "longitude": "77.5946"
            },
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-bangalore/",
            "telephone": "+1-789-251-8414",
            "email": "bangalore@metic.ai",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "City",
              "name": "Bangalore",
              "containedInPlace": {
                "@type": "State",
                "name": "Karnataka"
              }
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary-orange" />
              <span className="text-sm font-medium text-orange-300">Serving Bangalore Businesses</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Bangalore</strong> | Leading AI Company In Bangalore
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Bangalore</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Bangalore</strong> with 2100+ successful AI implementations. From Electronic City to Whitefield, we transform Bangalore businesses with expert AI services, machine learning solutions, and custom AI development delivering 60% cost savings and 3x faster delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation in Bangalore
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Bangalore AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats with Keywords */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">2100+</div>
                <div className="text-sm text-gray-400">Bangalore AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">4.9/5</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">60%</div>
                <div className="text-sm text-gray-400">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">3x</div>
                <div className="text-sm text-gray-400">Faster Delivery</div>
              </div>
            </div>

            {/* Keywords Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              <span className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm font-medium">
                AI Service In Bangalore
              </span>
              <span className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm font-medium">
                AI Firm In Bangalore
              </span>
              <span className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm font-medium">
                AI Development Company In Bangalore
              </span>
              <span className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm font-medium">
                Best AI Company In Bangalore
              </span>
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
                AI Solutions for <span className="text-primary-orange">Bangalore</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Bangalore businesses 
                compete in the global market and drive technological innovation.
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
                Industries We Serve in Bangalore
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Bangalore's key industries and business sectors.
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

      {/* FAQ Section for ASO */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions About <span className="text-primary-orange">AI Company In Bangalore</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about choosing the right Artificial Intelligence Company In Bangalore for your business needs.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Which is the best Artificial Intelligence Company In Bangalore?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai is recognized as the leading <strong>Artificial Intelligence Company In Bangalore</strong> with 2100+ successful AI implementations. We serve businesses across Electronic City, Whitefield, Koramangala, and all Bangalore areas with expert AI services, machine learning solutions, and custom AI development. Our proven track record includes 4.9/5 client satisfaction rating and 60% cost savings for Bangalore businesses.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What AI services does the top AI Company In Bangalore provide?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    As the premier <strong>AI Company In Bangalore</strong>, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, AI integration, automation services, data analytics, natural language processing, and computer vision solutions. We specialize in IT solutions, fintech AI, e-commerce intelligence, and startup AI solutions specifically designed for Bangalore's tech ecosystem.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How much does AI development cost from an AI Company In Bangalore?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI development costs vary based on project complexity and scope. As a leading <strong>AI Company In Bangalore</strong>, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development approaches. We provide free consultations to Bangalore businesses to determine exact project costs, ROI projections, and implementation timelines tailored to your specific requirements.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Why choose Metic.ai as your Artificial Intelligence Company In Bangalore?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai stands out as the top <strong>Artificial Intelligence Company In Bangalore</strong> because of our 2100+ successful implementations, 4.9/5 client satisfaction rating, 3x faster delivery, 60% cost savings, and deep understanding of Bangalore's tech ecosystem. We serve all major Bangalore areas including Electronic City, Whitefield, Koramangala, Indiranagar, HSR Layout, and specialize in IT, fintech, e-commerce, and startup sectors.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Which industries does the leading AI Company In Bangalore serve?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    As Bangalore's premier <strong>AI Company</strong>, Metic.ai serves diverse industries including information technology, software development, fintech, e-commerce, biotechnology, aerospace, telecommunications, healthcare, education, and the startup ecosystem. We have extensive experience working with businesses across all Bangalore tech hubs, from Electronic City's IT corridor to Whitefield's software parks.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How quickly can an AI Company In Bangalore implement AI solutions?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai, the leading <strong>AI Company In Bangalore</strong>, delivers AI solutions 3x faster than industry average. Simple AI implementations can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 3-6 months, depending on Bangalore business requirements and integration complexity. We provide realistic timelines during our free consultation process.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Have more questions about AI services in Bangalore?
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Speak with Bangalore AI Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Company Authority */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Metic.ai - Bangalore's Leading <span className="text-primary-orange">AI Company</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Established as the premier <strong>Artificial Intelligence Company In Bangalore</strong>, Metic.ai has transformed over 2100 businesses across India's Silicon Valley with cutting-edge AI solutions. From Electronic City's IT giants to Whitefield's startups, we understand Bangalore's unique tech landscape.
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team of Bangalore-based AI experts specializes in developing custom artificial intelligence solutions that address the specific challenges faced by businesses in Karnataka's tech capital. Whether you're in IT, fintech, e-commerce, or biotechnology, we deliver AI implementations that drive measurable results.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">Bangalore AI Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">98%</div>
                    <div className="text-sm text-gray-600">Client Success Rate</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about">
                    <Button variant="primary">
                      Learn More About Our AI Company
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">
                      Schedule Bangalore Consultation
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Bangalore Businesses Choose Metic.ai</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Bangalore Tech Expertise</div>
                        <div className="text-orange-100 text-sm">Deep understanding of local tech ecosystem and regulations</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Proven Track Record</div>
                        <div className="text-orange-100 text-sm">2100+ successful AI implementations across Bangalore</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Faster Delivery</div>
                        <div className="text-orange-100 text-sm">3x faster implementation than traditional AI companies</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Cost-Effective Solutions</div>
                        <div className="text-orange-100 text-sm">60% cost savings with superior ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                What Bangalore Businesses Say About Our <span className="text-primary-orange">AI Company</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real testimonials from Bangalore businesses that transformed their operations with our AI solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Outstanding <strong>AI Company In Bangalore</strong>. Metic.ai transformed our software development process with intelligent automation that increased productivity by 50% across our Electronic City offices."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                  <div className="text-gray-500">Infosys Bangalore</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Best <strong>AI Development Company In Bangalore</strong>. Their fintech AI solution revolutionized our payment processing with machine learning algorithms that reduced fraud by 80% in our Koramangala operations."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-gray-500">Razorpay Bangalore</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Exceptional <strong>AI Service In Bangalore</strong>. Metic.ai's e-commerce AI platform boosted our customer personalization by 65% and increased sales conversion rates at our Whitefield headquarters."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Amit Patel</div>
                  <div className="text-gray-500">Flipkart Bangalore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Partner with Bangalore's Leading <span className="text-white">AI Company</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ successful Bangalore businesses that chose Metic.ai as their <strong>Artificial Intelligence Company In Bangalore</strong>. 
              From Electronic City to Whitefield, we're transforming businesses with AI solutions that deliver real results. 
              Get your free consultation and discover why we're the top-rated <strong>AI Company In Bangalore</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Your Bangalore AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Bangalore AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Free AI Consultation</h3>
                <p className="text-orange-100 text-sm">Get expert advice on AI implementation for your Bangalore business</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom AI Solutions</h3>
                <p className="text-orange-100 text-sm">Tailored AI development for Bangalore's tech ecosystem</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-orange-100 text-sm">Join 2100+ Bangalore businesses with successful AI implementations</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4 font-medium">
                Serving All Bangalore Areas - AI Company You Can Trust
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-orange-100 text-sm">
                <span className="bg-white/10 px-3 py-1 rounded-full">Electronic City AI Services</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Whitefield AI Company</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Koramangala AI Development</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Indiranagar AI Solutions</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">HSR Layout AI Firm</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Marathahalli AI Services</span>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-orange-200 text-sm">
                  🏆 Bangalore's #1 Rated <strong>Artificial Intelligence Company</strong> | 4.9/5 Stars | 2100+ Projects | 60% Cost Savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
