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
  title: "Artificial Intelligence Company In Gurgaon | #1 AI Company In Gurgaon - Metic.ai",
  description: "Leading Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Gurgaon",
    "AI Company In Gurgaon",
    "AI Service In Gurgaon", 
    "AI Firm In Gurgaon",
    "AI Development Company In Gurgaon",
    "Best AI Company In Gurgaon",
    "Top AI Company Gurgaon",
    "AI Company Cyber City",
    "Machine Learning Company Gurgaon",
    "AI Solutions Gurgaon",
    "AI Consulting Gurgaon",
    "AI Services DLF",
    "Gurgaon AI Company",
    "AI Software Company Gurgaon",
    "Enterprise AI Company Gurgaon",
    "Custom AI Development Gurgaon",
    "AI Technology Company Gurgaon",
    "Leading AI Company Gurgaon",
    "Professional AI Services Gurgaon"
  ],
  authors: [{ name: "Metic.ai - AI Company In Gurgaon" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Gurgaon | #1 AI Company In Gurgaon - Metic.ai",
    description: "Leading Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-gurugram/",
    siteName: "Metic.ai - AI Company In Gurgaon",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-company-gurgaon.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Gurgaon - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    title: "Artificial Intelligence Company In Gurgaon | AI Company In Gurgaon - Metic.ai",
    description: "Leading Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-company-gurgaon.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-gurugram/",
  },
};

export default function AIServicesGurugramPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Gurugram business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Gurugram's corporate and fintech sectors.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Gurugram business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Gurugram business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Gurugram.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Gurugram enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Financial Services",
    "Information Technology",
    "Fintech",
    "Consulting",
    "Automotive",
    "Healthcare",
    "Real Estate",
    "E-commerce",
    "Telecommunications",
    "Manufacturing"
  ];

  const stats = [
    { number: "4,100+", label: "Gurugram Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5.9x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Gurgaon",
            "alternateName": ["AI Company In Gurgaon", "Gurgaon AI Company", "Best AI Company In Gurgaon"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-gurugram/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ai-company-gurgaon.jpg",
            "description": "Leading Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India",
              "postalCode": "560079"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.4595",
              "longitude": "77.0266"
            },
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Artificial Intelligence Company In Gurgaon - Transform Your Business with AI",
            "areaServed": [
              {
                "@type": "City",
                "name": "Gurgaon",
                "containedInPlace": {
                  "@type": "State", 
                  "name": "Haryana"
                }
              },
              {
                "@type": "Place",
                "name": "DLF Cyber City"
              },
              {
                "@type": "Place", 
                "name": "Golf Course Road"
              },
              {
                "@type": "Place",
                "name": "Udyog Vihar"
              },
              {
                "@type": "Place",
                "name": "Sohna Road"
              },
              {
                "@type": "Place",
                "name": "MG Road"
              }
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Gurgaon",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services in Gurgaon"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Gurgaon businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Gurgaon enterprises"
                  }
                }
              ]
            },
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
                  "@type": "Person",
                  "name": "Priya Sharma"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Best AI Company In Gurgaon! Their expertise in artificial intelligence transformed our Cyber City-based business operations completely."
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/MeticAI"
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
                "name": "Which is the best Artificial Intelligence Company In Gurgaon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations, serving businesses across DLF Cyber City, Golf Course Road, Udyog Vihar, and the entire Millennium City."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Gurgaon provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Gurgaon, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Gurgaon businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Firm In Gurgaon?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Gurgaon offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Gurgaon provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Gurgaon provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Gurgaon's diverse business landscape from fintech to corporate enterprises."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the best AI Company In Gurgaon serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Company In Gurgaon serves financial services, information technology, fintech, consulting, automotive, healthcare, real estate, e-commerce, telecommunications, and manufacturing industries across the Millennium City."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with Gurgaon's top AI Development Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Gurgaon delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity."
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
            "headline": "Artificial Intelligence Company In Gurgaon | Leading AI Company In Gurgaon",
            "description": "Comprehensive guide to AI services in Gurgaon. Learn why Metic.ai is the premier Artificial Intelligence Company In Gurgaon with 2100+ successful implementations.",
            "image": "https://metic.ai/ai-company-gurgaon.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Gurgaon"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Metic.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metic.ai/logo.png"
              }
            },
            "datePublished": "2024-01-15T08:00:00+05:30",
            "dateModified": "2024-12-30T10:00:00+05:30",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-gurugram/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Gurgaon", "AI Company In Gurgaon", "AI Service In Gurgaon", "AI Firm In Gurgaon"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI services and solutions in Gurgaon"
              },
              {
                "@type": "Place",
                "name": "Gurgaon",
                "description": "Millennium City, major corporate and fintech hub"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "DLF Cyber City"
              },
              {
                "@type": "Place", 
                "name": "Golf Course Road"
              },
              {
                "@type": "Place",
                "name": "Udyog Vihar"
              },
              {
                "@type": "Place",
                "name": "Sohna Road"
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
              <span className="text-sm font-medium text-orange-300">Serving Gurugram, Haryana</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Gurgaon</strong> | Leading AI Company In Gurgaon
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best AI Company In Gurgaon? Metic.ai is the premier Artificial Intelligence Company In Gurgaon serving DLF Cyber City, Golf Course Road, and the entire Millennium City with cutting-edge AI solutions and 2100+ successful implementations. Our AI Service In Gurgaon delivers 60% cost savings, 3x faster delivery, and transforms businesses across Gurgaon's fintech and corporate corridors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation - Gurgaon
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call AI Company: +1-789-251-8414
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
                AI Solutions for <span className="text-primary-orange">Gurugram</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Gurugram businesses 
                compete in the global market and drive digital transformation.
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
                Industries We Serve in Gurugram
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Gurugram's key industries and business sectors.
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
                Why Gurugram Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Gurugram for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Gurugram businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for Gurugram companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Gurugram business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Gurugram business data.</p>
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
                  Premier <span className="text-primary-orange">Artificial Intelligence Company In Gurgaon</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>AI Company In Gurgaon</strong>, Metic.ai has been transforming businesses across the Millennium City since 2020. From the corporate towers of DLF Cyber City to the innovative startups along Golf Course Road, we've established ourselves as the go-to <strong>AI Service In Gurgaon</strong> provider for enterprises seeking cutting-edge artificial intelligence solutions.
                  </p>
                  <p>
                    Our <strong>AI Firm In Gurgaon</strong> specializes in serving the unique needs of Haryana's business capital. Whether you're a fintech company in Udyog Vihar, a multinational corporation in Cyber Hub, or a growing business on Sohna Road, our <strong>AI Development Company In Gurgaon</strong> delivers tailored solutions that drive measurable results.
                  </p>
                  <p>
                    With deep roots in Gurgaon's business ecosystem, we understand the challenges and opportunities that define the Millennium City. Our team combines global AI expertise with local market knowledge, making us the <strong>Best AI Company In Gurgaon</strong> for businesses ready to embrace the future of technology.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">AI Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">220+</div>
                    <div className="text-sm text-gray-600">Gurgaon Clients Served</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">Serving Gurgaon's Business Districts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">DLF Cyber City - Corporate Hub</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Golf Course Road - Commercial Corridor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Udyog Vihar - Industrial Zone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Sohna Road - Tech Corridor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">MG Road - Business District</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Cyber Hub - Innovation Center</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-primary-orange">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary-orange mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">Recognized Excellence</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Top-rated AI Company In Gurgaon with 4.9/5 client satisfaction rating and industry recognition for innovation in artificial intelligence solutions.
                        </div>
                      </div>
                    </div>
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
                Frequently Asked Questions - AI Company In Gurgaon
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our AI services in Gurgaon
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which is the best Artificial Intelligence Company In Gurgaon?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading Artificial Intelligence Company In Gurgaon with 2100+ successful AI implementations, serving businesses across DLF Cyber City, Golf Course Road, Udyog Vihar, and the entire Millennium City. Our proven track record and expertise make us the top choice for AI services in Gurgaon.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What AI services does the top AI Company In Gurgaon provide?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier AI Company In Gurgaon, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Gurgaon businesses across all industries and sectors.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How much does AI development cost from an AI Firm In Gurgaon?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI Development Company In Gurgaon offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements. We provide transparent pricing and flexible payment options.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Why choose Metic.ai as your AI Service In Gurgaon provider?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the leading AI Service In Gurgaon provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Gurgaon's diverse business landscape from fintech to corporate enterprises in Cyber City and beyond.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which industries does the best AI Company In Gurgaon serve?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI Company In Gurgaon serves financial services, information technology, fintech, consulting, automotive, healthcare, real estate, e-commerce, telecommunications, and manufacturing industries across the Millennium City and Haryana region.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How long does AI implementation take with Gurgaon's top AI Development Company?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI Development Company In Gurgaon delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity. We follow agile methodologies for rapid deployment.
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
              Ready to Partner with the Best AI Company In Gurgaon?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Gurgaon companies that trust Metic.ai as their premier Artificial Intelligence Company In Gurgaon. 
              Get started with a free consultation and discover how our AI Service In Gurgaon can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Gurgaon
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Gurgaon AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted AI Development Company In Gurgaon serving businesses across</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Cyber City</span>
                <span>•</span>
                <span>DLF City</span>
                <span>•</span>
                <span>Golf Course Road</span>
                <span>•</span>
                <span>Udyog Vihar</span>
                <span>•</span>
                <span>Sohna Road</span>
                <span>•</span>
                <span>MG Road</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

