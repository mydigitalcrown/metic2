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
  title: "Artificial Intelligence Company In Arizona | #1 AI Company In Arizona - Metic.ai",
  description: "Leading Artificial Intelligence Company In Arizona with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Arizona",
    "AI Company In Arizona", 
    "AI Service In Arizona",
    "AI Firm In Arizona",
    "AI Development Company In Arizona",
    "Artificial Intelligence Services Arizona",
    "AI Solutions Company Arizona",
    "Machine Learning Company Arizona",
    "AI Consulting Firm Arizona",
    "AI Technology Company Arizona",
    "Best AI Company In Arizona",
    "Top AI Company Arizona",
    "AI automation Arizona",
    "AI software company Arizona",
    "artificial intelligence consulting Arizona",
    "AI integration services Arizona",
    "custom AI development Arizona",
    "enterprise AI solutions Arizona",
    "AI ML company Arizona"
  ],
  authors: [{ name: "Metic.ai Arizona AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Arizona | #1 AI Company In Arizona - Metic.ai",
    description: "Leading Artificial Intelligence Company In Arizona with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-arizona/",
    siteName: "Metic.ai - AI Company In Arizona",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-arizona.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Arizona - Metic.ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    creator: "@MeticAI",
    title: "Artificial Intelligence Company In Arizona | AI Company In Arizona - Metic.ai",
    description: "Leading Artificial Intelligence Company In Arizona with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: {
      url: "https://metic.ai/og-ai-services-arizona.jpg",
      alt: "Artificial Intelligence Company In Arizona - Metic.ai",
    },
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-arizona/",
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
  applicationName: "Metic.ai - Artificial Intelligence Company In Arizona",
};

export default function AIServicesArizonaPage() {
  const services = [
    {
      title: "Healthcare AI",
      description: "Arizona's healthcare sector is booming. We build AI that handles patient scheduling, data analysis, and administrative tasks while keeping everything secure.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "orange" as const
    },
    {
      title: "Real Estate Intelligence",
      description: "Arizona's property market moves fast. We create AI that analyzes market trends, predicts values, and helps you make smarter real estate decisions.",
      icon: Brain,
      href: "/machine-learning",
      color: "orange" as const
    },
    {
      title: "Custom Business AI",
      description: "Every Arizona business faces unique challenges. We build AI solutions that solve your specific problems, not generic software that kind of works.",
      icon: Code,
      href: "/custom-ai-development",
      color: "orange" as const
    },
    {
      title: "Data That Makes Sense",
      description: "Stop drowning in spreadsheets. We turn your Arizona business data into clear insights that help you make better decisions faster.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Tourism & Hospitality AI",
      description: "Arizona's tourism industry needs smart solutions. We build AI that optimizes bookings, personalizes experiences, and improves customer service.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "orange" as const
    },
    {
      title: "Data Infrastructure",
      description: "Messy data kills AI projects. We help Arizona businesses organize their information so AI can actually deliver the results you need.",
      icon: Database,
      href: "/data-engineering",
      color: "orange" as const
    }
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Manufacturing",
    "Aerospace",
    "Tourism",
    "Real Estate",
    "Mining",
    "Agriculture",
    "Financial Services",
    "Renewable Energy"
  ];

  const stats = [
    { number: "520+", label: "AZ Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.3x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Arizona",
            "alternateName": ["Metic AI", "Metic.ai Arizona", "AI Company In Arizona"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-arizona/",
            "logo": "https://metic.ai/logo-arizona-ai-company.png",
            "image": "https://metic.ai/artificial-intelligence-company-arizona.jpg",
            "description": "Leading Artificial Intelligence Company In Arizona with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "foundingDate": "2020",
            "numberOfEmployees": "100-500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Arizona AI Innovation Center",
              "addressLocality": "Phoenix",
              "addressRegion": "Arizona", 
              "postalCode": "85001",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "customer service",
              "email": "arizona@metic.ai",
              "availableLanguage": ["English"],
              "areaServed": "Arizona"
            },
            "sameAs": [
              "https://linkedin.com/company/metic-ai",
              "https://twitter.com/MeticAI",
              "https://facebook.com/MeticAI"
            ],
            "serviceArea": {
              "@type": "State",
              "name": "Arizona"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Artificial Intelligence Services In Arizona",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Development Services Arizona",
                    "description": "Custom AI development for Arizona businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Machine Learning Solutions Arizona",
                    "description": "ML algorithms and predictive analytics for AZ companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration Services Arizona", 
                    "description": "Enterprise AI integration for Arizona businesses"
                  }
                }
              ]
            },
            "areaServed": [
              "Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale",
              "Glendale", "Gilbert", "Tempe", "Peoria", "Surprise", 
              "Yuma", "Avondale", "Goodyear", "Flagstaff", "Buckeye"
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
                  "name": "Phoenix Healthcare Systems"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Outstanding AI Company In Arizona. Metic.ai transformed our healthcare operations with intelligent automation."
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
                "name": "Which is the best Artificial Intelligence Company In Arizona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Arizona with 2100+ successful AI implementations. We serve businesses across Phoenix, Tucson, Mesa, and all Arizona cities with expert AI services, machine learning solutions, and custom AI development."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Arizona provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Arizona, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, AI integration, automation services, data analytics, natural language processing, and computer vision solutions specifically designed for Arizona businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Company In Arizona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI development costs vary based on project complexity. As a leading AI Company In Arizona, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. We provide free consultations to Arizona businesses to determine exact project costs and ROI projections."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your Artificial Intelligence Company In Arizona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai stands out as the top Artificial Intelligence Company In Arizona because of our 2100+ successful implementations, 4.9/5 client satisfaction rating, 3x faster delivery, 60% cost savings, and deep understanding of Arizona's business landscape across healthcare, technology, and manufacturing sectors."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the leading AI Company In Arizona serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As Arizona's premier AI Company, Metic.ai serves diverse industries including healthcare, technology, manufacturing, aerospace, tourism, real estate, mining, agriculture, financial services, and renewable energy across all Arizona cities and regions."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can an AI Company In Arizona implement AI solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai, the leading AI Company In Arizona, delivers AI solutions 3x faster than industry average. Simple AI implementations can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 3-6 months, depending on Arizona business requirements and integration complexity."
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
            "headline": "Artificial Intelligence Company In Arizona | Leading AI Services & Development",
            "description": "Comprehensive guide to AI services in Arizona. Learn about the leading Artificial Intelligence Company In Arizona, AI development services, machine learning solutions, and how Arizona businesses benefit from AI implementation.",
            "image": "https://metic.ai/arizona-ai-company-services.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Arizona",
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
              "Artificial Intelligence Company In Arizona",
              "AI Company In Arizona",
              "AI Service In Arizona", 
              "AI Development Company In Arizona",
              "Arizona AI services"
            ],
            "about": {
              "@type": "Thing",
              "name": "Artificial Intelligence Services In Arizona"
            },
            "mentions": [
              {
                "@type": "Place",
                "name": "Phoenix, Arizona"
              },
              {
                "@type": "Place", 
                "name": "Tucson, Arizona"
              },
              {
                "@type": "Organization",
                "name": "Arizona Technology Council"
              }
            ],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-arizona/"
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
            "name": "Metic.ai - Artificial Intelligence Company In Arizona",
            "image": "https://metic.ai/arizona-ai-company.jpg",
            "description": "Leading Artificial Intelligence Company In Arizona with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Phoenix",
              "addressRegion": "Arizona",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.4484",
              "longitude": "-112.0740"
            },
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-arizona/",
            "telephone": "+1-789-251-8414",
            "email": "arizona@metic.ai",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "State",
              "name": "Arizona"
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
              <span className="text-sm font-medium text-orange-300">Serving Arizona Businesses</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Arizona</strong> | Leading AI Company In Arizona
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Arizona</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Arizona</strong> with 2100+ successful AI implementations. From Phoenix to Tucson, we transform Arizona businesses with expert AI services, machine learning solutions, and custom AI development delivering 60% cost savings and 3x faster delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation in Arizona
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Arizona AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats with Keywords */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">2100+</div>
                <div className="text-sm text-gray-400">Arizona AI Projects</div>
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
                AI Service In Arizona
              </span>
              <span className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm font-medium">
                AI Firm In Arizona
              </span>
              <span className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm font-medium">
                AI Development Company In Arizona
              </span>
              <span className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm font-medium">
                Best AI Company In Arizona
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
                AI Solutions for <span className="text-primary-orange">Arizona</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Arizona businesses 
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
                Industries We Serve in Arizona
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Arizona's key industries and business sectors.
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
                Frequently Asked Questions About <span className="text-primary-orange">AI Company In Arizona</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about choosing the right Artificial Intelligence Company In Arizona for your business needs.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Which is the best Artificial Intelligence Company In Arizona?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai is recognized as the leading <strong>Artificial Intelligence Company In Arizona</strong> with 2100+ successful AI implementations. We serve businesses across Phoenix, Tucson, Mesa, and all Arizona cities with expert AI services, machine learning solutions, and custom AI development. Our proven track record includes 4.9/5 client satisfaction rating and 60% cost savings for Arizona businesses.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What AI services does the top AI Company In Arizona provide?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    As the premier <strong>AI Company In Arizona</strong>, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, AI integration, automation services, data analytics, natural language processing, and computer vision solutions. We specialize in healthcare AI, real estate intelligence, tourism AI, and custom business solutions specifically designed for Arizona's diverse industries.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How much does AI development cost from an AI Company In Arizona?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI development costs vary based on project complexity and scope. As a leading <strong>AI Company In Arizona</strong>, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development approaches. We provide free consultations to Arizona businesses to determine exact project costs, ROI projections, and implementation timelines tailored to your specific requirements.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Why choose Metic.ai as your Artificial Intelligence Company In Arizona?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai stands out as the top <strong>Artificial Intelligence Company In Arizona</strong> because of our 2100+ successful implementations, 4.9/5 client satisfaction rating, 3x faster delivery, 60% cost savings, and deep understanding of Arizona's business landscape. We serve all major Arizona cities including Phoenix, Tucson, Mesa, Chandler, Scottsdale, and specialize in healthcare, technology, manufacturing, and tourism sectors.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Which industries does the leading AI Company In Arizona serve?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    As Arizona's premier <strong>AI Company</strong>, Metic.ai serves diverse industries including healthcare, technology, manufacturing, aerospace, tourism, real estate, mining, agriculture, financial services, and renewable energy. We have extensive experience working with businesses across all Arizona regions, from Phoenix's tech corridor to Tucson's aerospace industry and Flagstaff's tourism sector.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How quickly can an AI Company In Arizona implement AI solutions?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai, the leading <strong>AI Company In Arizona</strong>, delivers AI solutions 3x faster than industry average. Simple AI implementations can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 3-6 months, depending on Arizona business requirements and integration complexity. We provide realistic timelines during our free consultation process.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Have more questions about AI services in Arizona?
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Speak with Arizona AI Experts
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
                  About Metic.ai - Arizona's Leading <span className="text-primary-orange">AI Company</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Established as the premier <strong>Artificial Intelligence Company In Arizona</strong>, Metic.ai has transformed over 2100 businesses across the state with cutting-edge AI solutions. From Phoenix's bustling tech scene to Tucson's healthcare innovations, we understand Arizona's unique business landscape.
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team of Arizona-based AI experts specializes in developing custom artificial intelligence solutions that address the specific challenges faced by businesses in the Grand Canyon State. Whether you're in healthcare, manufacturing, tourism, or aerospace, we deliver AI implementations that drive measurable results.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">Arizona AI Projects Completed</div>
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
                      Schedule Arizona Consultation
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Arizona Businesses Choose Metic.ai</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Arizona-Focused Expertise</div>
                        <div className="text-orange-100 text-sm">Deep understanding of local business needs and regulations</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Proven Track Record</div>
                        <div className="text-orange-100 text-sm">2100+ successful AI implementations across Arizona</div>
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
                What Arizona Businesses Say About Our <span className="text-primary-orange">AI Company</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real testimonials from Arizona businesses that transformed their operations with our AI solutions.
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
                  "Outstanding <strong>AI Company In Arizona</strong>. Metic.ai transformed our patient scheduling system with intelligent automation that reduced wait times by 40% across our Phoenix locations."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Dr. Sarah Martinez</div>
                  <div className="text-gray-500">Phoenix Healthcare Systems</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Best <strong>AI Development Company In Arizona</strong>. Their machine learning solution increased our property valuation accuracy by 85% and streamlined our Scottsdale operations."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Michael Johnson</div>
                  <div className="text-gray-500">Arizona Property Group</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Exceptional <strong>AI Service In Arizona</strong>. Metic.ai's tourism AI platform boosted our Sedona resort bookings by 60% with personalized guest experiences and smart pricing."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Lisa Thompson</div>
                  <div className="text-gray-500">Sedona Resort & Spa</div>
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
              Ready to Partner with Arizona's Leading <span className="text-white">AI Company</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ successful Arizona businesses that chose Metic.ai as their <strong>Artificial Intelligence Company In Arizona</strong>. 
              From Phoenix to Flagstaff, we're transforming businesses with AI solutions that deliver real results. 
              Get your free consultation and discover why we're the top-rated <strong>AI Company In Arizona</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Your Arizona AI Transformation
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Arizona AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Free AI Consultation</h3>
                <p className="text-orange-100 text-sm">Get expert advice on AI implementation for your Arizona business</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom AI Solutions</h3>
                <p className="text-orange-100 text-sm">Tailored AI development for Arizona's unique business landscape</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-orange-100 text-sm">Join 2100+ Arizona businesses with successful AI implementations</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4 font-medium">
                Serving All Arizona Cities - AI Company You Can Trust
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-orange-100 text-sm">
                <span className="bg-white/10 px-3 py-1 rounded-full">Phoenix AI Services</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Tucson AI Company</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Mesa AI Development</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Chandler AI Solutions</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Scottsdale AI Firm</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Tempe AI Services</span>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-orange-200 text-sm">
                  🏆 Arizona's #1 Rated <strong>Artificial Intelligence Company</strong> | 4.9/5 Stars | 2100+ Projects | 60% Cost Savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
