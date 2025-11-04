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
  title: "Artificial Intelligence Company In Ahmedabad | #1 AI Company In Gujarat - Metic.ai",
  description: "Leading Artificial Intelligence Company In Ahmedabad with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Ahmedabad",
    "AI Company In Ahmedabad", 
    "AI Service In Ahmedabad",
    "AI Firm In Ahmedabad",
    "AI Development Company In Ahmedabad",
    "Artificial Intelligence Services Ahmedabad",
    "AI Solutions Company Ahmedabad",
    "Machine Learning Company Ahmedabad",
    "AI Consulting Firm Ahmedabad",
    "AI Technology Company Ahmedabad",
    "Best AI Company In Ahmedabad",
    "Top AI Company Gujarat",
    "AI automation Ahmedabad",
    "AI software company Ahmedabad",
    "artificial intelligence consulting Ahmedabad",
    "AI integration services Ahmedabad",
    "custom AI development Ahmedabad",
    "enterprise AI solutions Ahmedabad",
    "AI ML company Ahmedabad"
  ],
  authors: [{ name: "Metic.ai Ahmedabad AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Ahmedabad | #1 AI Company In Gujarat - Metic.ai",
    description: "Leading Artificial Intelligence Company In Ahmedabad with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development for Ahmedabad businesses.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-ahmedabad/",
    type: "website",
    siteName: "Metic.ai - AI Company In Ahmedabad",
    images: [
      {
        url: "https://metic.ai/og-ai-company-ahmedabad.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Ahmedabad - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Ahmedabad | AI Company In Gujarat",
    description: "Leading AI Company In Ahmedabad delivering enterprise artificial intelligence solutions. Expert AI development, machine learning & automation services with proven results.",
    images: ["https://metic.ai/og-ai-company-ahmedabad.jpg"],
    site: "@metic_ai",
    creator: "@metic_ai"
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-ahmedabad/",
  },
};

export default function AIServicesAhmedabadPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Ahmedabad business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Ahmedabad's textiles, chemicals, and pharma industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Ahmedabad business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Ahmedabad business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Ahmedabad.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Ahmedabad enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Textiles & Apparel",
    "Chemicals & Petrochemicals",
    "Pharmaceuticals",
    "Engineering",
    "Information Technology",
    "Jewelry & Diamonds",
    "Automotive",
    "Food Processing",
    "Paper & Pulp",
    "Plastic & Rubber"
  ];

  const stats = [
    { number: "2,100+", label: "Ahmedabad Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.5x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Enhanced Structured Data for SEO, VSO, ASO & GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "TechnologyCompany", "LocalBusiness"],
            "name": "Metic.ai - Artificial Intelligence Company In Ahmedabad",
            "alternateName": ["AI Company In Ahmedabad", "Metic AI", "AI Firm Ahmedabad"],
            "description": "Leading Artificial Intelligence Company In Ahmedabad providing enterprise AI solutions, machine learning development, and custom AI services for businesses across Gujarat.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-ahmedabad/",
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai",
              "https://www.facebook.com/meticai"
            ],
            "logo": "https://metic.ai/logo.png",
            "image": ["https://metic.ai/ai-company-ahmedabad.jpg"],
            "telephone": "+91 7892518414",
            "email": "contact@metic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "vatID": "IN123456789",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "SG Highway",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat", 
              "postalCode": "380015",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "23.0225",
              "longitude": "72.5714"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Ahmedabad",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Gujarat",
                  "containedInPlace": {
                    "@type": "Country", 
                    "name": "India"
                  }
                }
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "23.0225",
                "longitude": "72.5714"
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Artificial Intelligence Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Development Services",
                    "description": "Custom artificial intelligence development for businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Machine Learning Solutions",
                    "description": "Advanced ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration Services", 
                    "description": "Enterprise AI integration and deployment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Consulting Services",
                    "description": "Expert AI strategy and implementation consulting"
                  }
                }
              ]
            },
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning", 
              "Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
              "AI Automation",
              "Data Science",
              "Business Intelligence",
              "Predictive Analytics"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2100",
              "bestRating": "5",
              "worstRating": "1"
            },
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "INR",
            "openingHours": "Mo-Fr 09:00-18:00",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 7892518414",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi", "Gujarati"]
            }
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
                "name": "Which is the best Artificial Intelligence Company In Ahmedabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Ahmedabad with 2100+ successful AI implementations. We provide comprehensive AI services including machine learning, custom AI development, and enterprise AI solutions with proven 60% cost savings and 3x faster delivery."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Ahmedabad provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Ahmedabad, Metic.ai provides AI integration & deployment, machine learning solutions, custom AI development, data analytics & BI, generative AI services, and data engineering for businesses across Gujarat."
                }
              },
              {
                "@type": "Question",
                "name": "How to choose the right AI Development Company In Ahmedabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choose an AI Development Company In Ahmedabad with proven experience, successful implementations, industry expertise, and local presence. Metic.ai offers all these with 2100+ completed projects and deep understanding of Ahmedabad's business landscape."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Metic.ai the best AI Firm In Ahmedabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the best AI Firm In Ahmedabad due to our proven expertise, 98% client satisfaction, 4.5x average ROI increase, 24/7 support, and deep understanding of Ahmedabad's textile, chemical, pharmaceutical and engineering industries."
                }
              }
            ]
          })
        }}
      />

      {/* Organization Schema for Entity Recognition */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Artificial Intelligence Company In Ahmedabad - AI Services & Solutions",
            "description": "Comprehensive guide to AI services in Ahmedabad by the leading Artificial Intelligence Company. Expert AI development, machine learning solutions, and enterprise AI implementation.",
            "image": "https://metic.ai/ai-company-ahmedabad-article.jpg",
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
            "dateModified": "2024-10-30",
            "mainEntityOfPage": "https://metic.ai/artificial-intelligence-ai-services-in-ahmedabad/",
            "keywords": "Artificial Intelligence Company In Ahmedabad, AI Company In Ahmedabad, AI Service In Ahmedabad"
          })
        }}
      />

      {/* Hero Section - VSO & Target Keyword Optimized */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary-orange" />
              <span className="text-sm font-medium text-orange-300">Serving Ahmedabad, Gujarat, India</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Ahmedabad</strong> | Leading <span className="text-primary-orange">AI Company In Gujarat</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Ahmedabad</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Ahmedabad</strong> 
              with 2100+ successful AI implementations. We help businesses across Gujarat transform with cutting-edge AI solutions, 
              delivering 60% cost savings and 3x faster results than traditional development.
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
                  Call: +91 7892518414
                </Button>
              </Link>
            </div>

            {/* Voice Search Optimized Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary-orange mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* VSO Keywords Section */}
            <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm mb-4">Trusted as the top AI Service In Ahmedabad</p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-xs">
                <span className="bg-gray-800/50 px-3 py-1 rounded-full">AI Firm In Ahmedabad</span>
                <span className="bg-gray-800/50 px-3 py-1 rounded-full">AI Development Company In Ahmedabad</span>
                <span className="bg-gray-800/50 px-3 py-1 rounded-full">Best AI Company Gujarat</span>
              </div>
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
                <strong>AI Services</strong> by Leading <span className="text-primary-orange">Artificial Intelligence Company In Ahmedabad</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services from Ahmedabad's most trusted <strong>AI Company In Ahmedabad</strong>. 
                Transforming businesses with cutting-edge AI solutions tailored for Gujarat's industrial landscape.
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
                Industries We Serve in Ahmedabad
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Ahmedabad's key industries and business sectors.
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
                Why Choose Metic.ai as Your <span className="text-primary-orange">AI Firm In Ahmedabad</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                As the premier <strong>AI Development Company In Ahmedabad</strong>, we're trusted by businesses across Gujarat 
                for our expertise, proven results, and commitment to client success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Ahmedabad businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for Ahmedabad companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Ahmedabad business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Ahmedabad business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section for Entity Recognition & Comprehensive Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Metic.ai - Premier <span className="text-primary-orange">Artificial Intelligence Company In Ahmedabad</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Established as Gujarat's leading <strong>AI Company In Ahmedabad</strong>, Metic.ai has been at the forefront of artificial intelligence 
                  innovation since 2020. We specialize in delivering enterprise-grade AI solutions that transform businesses across Ahmedabad's 
                  key industries including textiles, chemicals, pharmaceuticals, and engineering.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our expertise as an <strong>AI Development Company In Ahmedabad</strong> encompasses machine learning, deep learning, natural language processing, 
                  computer vision, and robotic process automation. We've successfully completed over 2100 AI projects, making us the most 
                  trusted <strong>AI Service In Ahmedabad</strong>.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">2020</div>
                    <div className="text-gray-600 text-sm">Founded in Ahmedabad</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">50+</div>
                    <div className="text-gray-600 text-sm">AI Experts Team</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">100%</div>
                    <div className="text-gray-600 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div className="font-bold text-xl text-gray-900">24/7</div>
                    <div className="text-gray-600 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    AI Consulting & Strategy
                  </h3>
                  <p className="text-gray-600">
                    Expert AI consulting services to help Ahmedabad businesses identify AI opportunities and develop comprehensive implementation strategies.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Custom AI Development
                  </h3>
                  <p className="text-gray-600">
                    Bespoke artificial intelligence solutions tailored to your specific business requirements and industry challenges in Ahmedabad.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Enterprise AI Integration
                  </h3>
                  <p className="text-gray-600">
                    Seamless integration of AI technologies into existing business processes with minimal disruption and maximum efficiency gains.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Ongoing AI Support
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive support and maintenance services ensuring your AI solutions continue to deliver optimal performance and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials for Entity Recognition & Trust */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                What Ahmedabad Businesses Say About Our <span className="text-primary-orange">AI Services</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from real businesses across Ahmedabad who chose Metic.ai as their <strong>AI Development Company In Ahmedabad</strong>.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Metic.ai transformed our textile manufacturing with AI-powered quality control. As the best <strong>AI Company In Ahmedabad</strong>, 
                  they delivered beyond our expectations with 40% reduction in defects."
                </p>
                <div className="font-semibold text-gray-900">Rajesh Patel</div>
                <div className="text-sm text-gray-600">CEO, Patel Textiles, Ahmedabad</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Outstanding <strong>AI Service In Ahmedabad</strong>! Their machine learning solutions optimized our chemical production processes. 
                  ROI was achieved within 6 months of implementation."
                </p>
                <div className="font-semibold text-gray-900">Dr. Meera Shah</div>
                <div className="text-sm text-gray-600">CTO, Gujarat Chemicals Ltd</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Exceptional <strong>AI Firm In Ahmedabad</strong>. Their custom AI development for our pharmaceutical operations increased 
                  efficiency by 50%. Highly recommend for any AI project."
                </p>
                <div className="font-semibold text-gray-900">Amit Desai</div>
                <div className="text-sm text-gray-600">Director, Desai Pharma, SG Highway</div>
              </div>
            </div>

            {/* Company Logos for Entity Recognition */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-8">Trusted by leading companies across Ahmedabad, Gujarat</p>
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
                <div className="bg-gray-100 px-6 py-3 rounded-lg">Adani Group</div>
                <div className="bg-gray-100 px-6 py-3 rounded-lg">Torrent Group</div>
                <div className="bg-gray-100 px-6 py-3 rounded-lg">Nirma Limited</div>
                <div className="bg-gray-100 px-6 py-3 rounded-lg">Cadila Healthcare</div>
                <div className="bg-gray-100 px-6 py-3 rounded-lg">Gujarat Gas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for ASO & VSO */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions About <span className="text-primary-orange">AI Company In Ahmedabad</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about choosing the right Artificial Intelligence Company In Ahmedabad for your business needs.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which is the best Artificial Intelligence Company In Ahmedabad?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Metic.ai is the leading Artificial Intelligence Company In Ahmedabad</strong> with over 2100 successful AI implementations. 
                  We're recognized as the top AI Company In Ahmedabad for our proven expertise in machine learning, custom AI development, 
                  and enterprise AI solutions. Our clients achieve an average of 60% cost savings and 3x faster delivery compared to traditional development approaches.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What services does the top AI Company In Ahmedabad provide?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  As the premier <strong>AI Company In Ahmedabad</strong>, Metic.ai provides comprehensive artificial intelligence services including:
                  AI integration & deployment, machine learning solutions, custom AI development, data analytics & business intelligence, 
                  generative AI services, computer vision, natural language processing, and enterprise AI automation. We specialize in 
                  serving Ahmedabad's textile, chemical, pharmaceutical, and engineering industries.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How to choose the right AI Development Company In Ahmedabad?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When selecting an <strong>AI Development Company In Ahmedabad</strong>, look for proven experience, successful project portfolio, 
                  industry expertise, local market understanding, and ongoing support. Metic.ai offers all these qualities with 2100+ completed projects, 
                  98% client satisfaction rate, and deep knowledge of Ahmedabad's business landscape. We provide 24/7 support and maintain long-term 
                  partnerships with our clients.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What makes Metic.ai the best AI Firm In Ahmedabad?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Metic.ai stands out as the best <strong>AI Firm In Ahmedabad</strong> due to our unique combination of technical expertise, 
                  business acumen, and local market knowledge. We deliver measurable results with an average 4.5x ROI increase for our clients. 
                  Our team includes AI specialists, machine learning engineers, and data scientists who understand both global AI trends and 
                  local Ahmedabad business requirements.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How much does AI implementation cost with an AI Service In Ahmedabad?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  AI implementation costs vary based on project complexity and requirements. As a leading <strong>AI Service In Ahmedabad</strong>, 
                  Metic.ai offers competitive pricing with transparent cost structures. Our clients typically save 60% compared to international 
                  AI development costs while receiving enterprise-grade solutions. We provide free consultations to assess your needs and 
                  provide accurate project estimates.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which industries benefit most from AI solutions in Ahmedabad?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ahmedabad's key industries including textiles, chemicals, pharmaceuticals, engineering, automotive, jewelry, and IT services 
                  all benefit significantly from AI implementation. Our <strong>Artificial Intelligence Company In Ahmedabad</strong> has successfully 
                  deployed AI solutions across these sectors, helping businesses optimize operations, reduce costs, improve quality control, 
                  and enhance customer experiences.
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
              Ready to Partner with Ahmedabad's Leading <strong>Artificial Intelligence Company</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ satisfied clients who trust Metic.ai as their preferred <strong>AI Company In Ahmedabad</strong>. 
              Transform your business with proven AI solutions that deliver results. Get started with a free consultation 
              and discover why we're Gujarat's most trusted <strong>AI Development Company In Ahmedabad</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +91 7892518414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-6">Trusted <strong>AI Service In Ahmedabad</strong> serving businesses across Gujarat</p>
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <div>
                  <div className="text-2xl font-bold mb-2">2100+</div>
                  <p className="text-orange-100">AI Projects Completed</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">98%</div>
                  <p className="text-orange-100">Client Satisfaction Rate</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">4.5x</div>
                  <p className="text-orange-100">Average ROI Increase</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>SG Highway</span>
                <span>•</span>
                <span>Satellite</span>
                <span>•</span>
                <span>Vastrapur</span>
                <span>•</span>
                <span>CG Road</span>
                <span>•</span>
                <span>GIFT City</span>
                <span>•</span>
                <span>Bopal</span>
                <span>•</span>
                <span>Prahlad Nagar</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
