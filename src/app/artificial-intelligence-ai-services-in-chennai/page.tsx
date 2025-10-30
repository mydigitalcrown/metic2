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
  title: "Artificial Intelligence Company In Chennai | #1 AI Company In Chennai - Metic.ai",
  description: "Leading Artificial Intelligence Company In Chennai with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Chennai",
    "AI Company In Chennai", 
    "AI Service In Chennai",
    "AI Firm In Chennai",
    "AI Development Company In Chennai",
    "Artificial Intelligence Services Chennai",
    "AI Solutions Company Chennai",
    "Machine Learning Company Chennai",
    "AI Consulting Firm Chennai",
    "AI Technology Company Chennai",
    "Best AI Company In Chennai",
    "Top AI Company Chennai",
    "AI automation Chennai",
    "AI software company Chennai",
    "artificial intelligence consulting Chennai",
    "AI integration services Chennai",
    "custom AI development Chennai",
    "enterprise AI solutions Chennai",
    "AI ML company Chennai"
  ],
  authors: [{ name: "Metic.ai Chennai AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Chennai | #1 AI Company In Chennai - Metic.ai",
    description: "Leading Artificial Intelligence Company In Chennai with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-chennai/",
    siteName: "Metic.ai - AI Company In Chennai",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-chennai.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Chennai - Metic.ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    creator: "@MeticAI",
    title: "Artificial Intelligence Company In Chennai | AI Company In Chennai - Metic.ai",
    description: "Leading Artificial Intelligence Company In Chennai with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: {
      url: "https://metic.ai/og-ai-services-chennai.jpg",
      alt: "Artificial Intelligence Company In Chennai - Metic.ai",
    },
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-chennai/",
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
  applicationName: "Metic.ai - Artificial Intelligence Company In Chennai",
};

export default function AIServicesChennaiPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Chennai business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Chennai's automotive and IT industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Chennai business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Chennai business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Chennai.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Chennai enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Automotive",
    "Information Technology",
    "Healthcare",
    "Manufacturing",
    "Port & Logistics",
    "Financial Services",
    "Leather & Textiles",
    "Petrochemicals",
    "Education",
    "Entertainment"
  ];

  const stats = [
    { number: "3,800+", label: "Chennai Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5.1x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Chennai",
            "alternateName": "AI Company In Chennai",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-chennai/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-chennai.jpg",
            "description": "Leading Artificial Intelligence Company In Chennai with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "foundingDate": "2018",
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "customer service",
              "email": "info@metic.ai",
              "availableLanguage": ["English", "Tamil"]
            },
            "sameAs": [
              "https://linkedin.com/company/metic-ai",
              "https://twitter.com/metcai",
              "https://facebook.com/metic.ai"
            ],
            "serviceArea": {
              "@type": "City",
              "name": "Chennai",
              "containedInPlace": {
                "@type": "State",
                "name": "Tamil Nadu",
                "containedInPlace": {
                  "@type": "Country",
                  "name": "India"
                }
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Chennai",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Artificial Intelligence Services Chennai",
                    "description": "Custom AI development and machine learning solutions"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions Chennai",
                    "description": "Advanced ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "AI Integration Services Chennai",
                    "description": "Enterprise AI integration and deployment services"
                  }
                }
              ]
            },
            "areaServed": [
              "Chennai", "T. Nagar", "Anna Nagar", "Adyar", "Velachery", 
              "OMR", "IT Corridor", "Tambaram", "Chrompet", "Porur",
              "Guindy", "Nungambakkam", "Mylapore", "Besant Nagar", "Sholinganallur",
              "Perungudi", "Thoraipakkam", "Pallikaranai", "Madipakkam", "Kodambakkam"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100",
              "bestRating": "5",
              "worstRating": "1"
            },
            "priceRange": "$$",
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning",
              "AI Development",
              "Enterprise AI Solutions",
              "AI Automation Chennai"
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
            "headline": "Artificial Intelligence Company In Chennai | Leading AI Company In Chennai - Metic.ai",
            "description": "Leading Artificial Intelligence Company In Chennai with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "image": "https://metic.ai/og-ai-services-chennai.jpg",
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
            "dateModified": "2024-12-19",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-chennai/"
            },
            "articleSection": "Artificial Intelligence Services",
            "keywords": [
              "Artificial Intelligence Company In Chennai",
              "AI Company In Chennai",
              "AI Service In Chennai",
              "AI Firm In Chennai",
              "AI Development Company In Chennai"
            ],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "sameAs": "https://en.wikipedia.org/wiki/Artificial_intelligence"
              },
              {
                "@type": "Thing", 
                "name": "Machine Learning",
                "sameAs": "https://en.wikipedia.org/wiki/Machine_learning"
              },
              {
                "@type": "Place",
                "name": "Chennai",
                "sameAs": "https://en.wikipedia.org/wiki/Chennai"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Chennai IT Corridor",
                "sameAs": "https://en.wikipedia.org/wiki/Chennai_IT_Corridor"
              },
              {
                "@type": "Place",
                "name": "OMR",
                "sameAs": "https://en.wikipedia.org/wiki/Old_Mahabalipuram_Road"
              },
              {
                "@type": "Place",
                "name": "Anna Nagar",
                "sameAs": "https://en.wikipedia.org/wiki/Anna_Nagar"
              },
              {
                "@type": "Place",
                "name": "T. Nagar",
                "sameAs": "https://en.wikipedia.org/wiki/T._Nagar"
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
              <span className="text-sm font-medium text-orange-300">Serving Chennai</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Chennai</strong> | Leading <span className="text-primary-orange">AI Company In Chennai</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Chennai</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Chennai</strong> with 2100+ successful AI implementations. We transform Chennai businesses with cutting-edge AI services across IT Corridor, OMR, Anna Nagar, and all major Chennai areas. 
              IT corridors in OMR and Thoraipakkam, we've helped 200+ Chennai companies implement AI solutions 
              that deliver measurable results. Detroit of India meets AI-powered future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+17892518414">
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
                AI Solutions for <span className="text-primary-orange">Chennai</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Chennai businesses 
                compete in the global market and drive industrial transformation.
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
                Industries We Serve in Chennai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Chennai's key industries and business sectors.
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
                Why Chennai Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Chennai for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Chennai businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for Chennai companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Chennai business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Chennai business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Artificial Intelligence Company In Chennai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Chennai with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise automation with 60% cost savings and 3x faster delivery across Chennai's IT Corridor, OMR, Anna Nagar, and all major Chennai areas."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Chennai offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Chennai, Metic.ai offers comprehensive AI services including AI automation, machine learning development, predictive analytics, custom AI solutions, data engineering, generative AI services, and enterprise AI integration. We serve automotive, IT, healthcare, manufacturing, and port logistics industries."
                }
              },
              {
                "@type": "Question",
                "name": "How much do AI services cost from an Artificial Intelligence Company In Chennai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI service costs vary based on project complexity and requirements. As a leading Artificial Intelligence Company In Chennai, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. Contact us for a free consultation and customized quote for your Chennai business."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Firm In Chennai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the trusted AI Firm In Chennai with proven expertise in Tamil Nadu's business landscape. We deliver 3x faster development, 60% cost reduction, 2100+ successful projects, and 4.9/5 client satisfaction. Our team understands Chennai's automotive and IT industries with local partnership approach."
                }
              },
              {
                "@type": "Question",
                "name": "Which Chennai areas does the leading AI Development Company In Chennai serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Development Company In Chennai, Metic.ai serves all major Chennai areas including IT Corridor, OMR, Anna Nagar, T. Nagar, Adyar, Velachery, Tambaram, Porur, Guindy, Mylapore, Nungambakkam, Besant Nagar, Sholinganallur, and Thoraipakkam with comprehensive AI solutions."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can an AI Service In Chennai be implemented?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai provides the fastest AI Service In Chennai with 3x faster development than industry standards. Simple AI automation can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 8-16 weeks. We offer rapid prototyping and agile development for Chennai businesses."
                }
              }
            ]
          })
        }}
      />

      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Frequently Asked Questions - <strong>AI Company In Chennai</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about choosing the right <strong>Artificial Intelligence Company In Chennai</strong>
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Which is the best Artificial Intelligence Company In Chennai?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading <strong>Artificial Intelligence Company In Chennai</strong> with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise automation with 60% cost savings and 3x faster delivery across Chennai's IT Corridor, OMR, Anna Nagar, and all major Chennai areas.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What AI services does the top AI Company In Chennai offer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>AI Company In Chennai</strong>, Metic.ai offers comprehensive AI services including AI automation, machine learning development, predictive analytics, custom AI solutions, data engineering, generative AI services, and enterprise AI integration. We serve automotive, IT, healthcare, manufacturing, and port logistics industries.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How much do AI services cost from an Artificial Intelligence Company In Chennai?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  AI service costs vary based on project complexity and requirements. As a leading <strong>Artificial Intelligence Company In Chennai</strong>, Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. Contact us for a free consultation and customized quote for your Chennai business.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why choose Metic.ai as your AI Firm In Chennai?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the trusted <strong>AI Firm In Chennai</strong> with proven expertise in Tamil Nadu's business landscape. We deliver 3x faster development, 60% cost reduction, 2100+ successful projects, and 4.9/5 client satisfaction. Our team understands Chennai's automotive and IT industries with local partnership approach.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Which Chennai areas does the leading AI Development Company In Chennai serve?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>AI Development Company In Chennai</strong>, Metic.ai serves all major Chennai areas including IT Corridor, OMR, Anna Nagar, T. Nagar, Adyar, Velachery, Tambaram, Porur, Guindy, Mylapore, Nungambakkam, Besant Nagar, Sholinganallur, and Thoraipakkam with comprehensive AI solutions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  How quickly can an AI Service In Chennai be implemented?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai provides the fastest <strong>AI Service In Chennai</strong> with 3x faster development than industry standards. Simple AI automation can be deployed in 2-4 weeks, while complex enterprise AI solutions typically take 8-16 weeks. We offer rapid prototyping and agile development for Chennai businesses.
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Metic.ai - Premier <strong>Artificial Intelligence Company In Chennai</strong>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 2018, Metic.ai has been the leading <strong>AI Company In Chennai</strong>, transforming businesses across Tamil Nadu with cutting-edge artificial intelligence solutions. From Chennai's IT Corridor startups to major automotive manufacturers, we've delivered 2100+ successful AI implementations.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of AI experts understands Chennai's unique business landscape, from automotive engineering excellence to IT services innovation. Whether you're in OMR's tech hubs, Anna Nagar's commercial centers, or T. Nagar's business districts, we deliver AI solutions that drive real results for Chennai businesses.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">AI Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">4.9/5</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">Chennai AI Expertise</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Automotive AI Solutions</div>
                        <div className="text-gray-600 text-sm">Specialized AI for Chennai's automotive manufacturing and engineering industries</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">IT Corridor Innovation</div>
                        <div className="text-gray-600 text-sm">Advanced AI solutions for Chennai's thriving IT and software development sector</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Port & Logistics AI</div>
                        <div className="text-gray-600 text-sm">Smart logistics and port automation solutions for Chennai's maritime commerce</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Healthcare Innovation</div>
                        <div className="text-gray-600 text-sm">Medical AI and healthcare technology solutions for Chennai's growing health sector</div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                What Chennai Businesses Say About Our <strong>AI Services</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Testimonials from clients across Chennai who chose Metic.ai as their <strong>AI Company In Chennai</strong>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Metic.ai revolutionized our Chennai automotive manufacturing with AI-driven quality control that reduced defects by 75%. Best AI Company In Chennai we've partnered with!"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                  <div className="text-sm text-gray-600">Plant Manager, AutoCorp Chennai</div>
                  <div className="text-sm text-primary-orange">Chennai IT Corridor, TN</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Outstanding AI development services! Their machine learning solutions helped our Chennai IT company improve client delivery efficiency by 300%. Highly recommend!"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-600">CTO, TechSoft Chennai</div>
                  <div className="text-sm text-primary-orange">OMR, Chennai</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Metic.ai's AI solutions transformed our Chennai port logistics operations. Their expertise in automation and predictive analytics is unmatched in Tamil Nadu."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Suresh Reddy</div>
                  <div className="text-sm text-gray-600">Operations Director, LogiCorp Chennai</div>
                  <div className="text-sm text-primary-orange">Anna Nagar, Chennai</div>
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
              Ready to Partner with Chennai's Leading <strong>Artificial Intelligence Company</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ Chennai businesses that chose Metic.ai as their <strong>AI Company In Chennai</strong>. Get your free AI consultation and discover how our artificial intelligence solutions can transform your business with 60% cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Chennai
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Chennai AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted <strong>AI Firm In Chennai</strong> - Serving Major Areas</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>IT Corridor</span>
                <span>•</span>
                <span>OMR</span>
                <span>•</span>
                <span>Anna Nagar</span>
                <span>•</span>
                <span>T. Nagar</span>
                <span>•</span>
                <span>Adyar</span>
                <span>•</span>
                <span>Velachery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
