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
  title: "Artificial Intelligence Company In Delhi | #1 AI Company In Delhi - Metic.ai",
  description: "Leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Delhi",
    "AI Company In Delhi",
    "AI Service In Delhi", 
    "AI Firm In Delhi",
    "AI Development Company In Delhi",
    "Best AI Company In Delhi",
    "Top AI Company Delhi",
    "AI Company New Delhi",
    "Machine Learning Company Delhi",
    "AI Solutions Delhi",
    "AI Consulting Delhi",
    "AI Services New Delhi",
    "Delhi AI Company",
    "AI Software Company Delhi",
    "Enterprise AI Company Delhi",
    "Custom AI Development Delhi",
    "AI Technology Company Delhi",
    "Leading AI Company Delhi",
    "Professional AI Services Delhi"
  ],
  authors: [{ name: "Metic.ai - AI Company In Delhi" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Delhi | #1 AI Company In Delhi - Metic.ai",
    description: "Leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-delhi/",
    siteName: "Metic.ai - AI Company In Delhi",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-company-delhi.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Delhi - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    title: "Artificial Intelligence Company In Delhi | AI Company In Delhi - Metic.ai",
    description: "Leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-company-delhi.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-delhi/",
  },
};

export default function AIServicesDelhiPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Delhi business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Delhi's government, finance, and tech sectors.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Delhi business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Delhi business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Delhi.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Delhi enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Government & Public Sector",
    "Financial Services",
    "Information Technology",
    "Healthcare",
    "Education",
    "Media & Entertainment",
    "Consulting",
    "E-commerce",
    "Manufacturing",
    "Tourism & Hospitality"
  ];

  const stats = [
    { number: "5,200+", label: "Delhi Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "6.1x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Delhi",
            "alternateName": ["AI Company In Delhi", "Delhi AI Company", "Best AI Company In Delhi"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-delhi/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ai-company-delhi.jpg",
            "description": "Leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India",
              "postalCode": "560079"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.7041",
              "longitude": "77.1025"
            },
            "telephone": "+1-789-251-8414",
            "email": "info@metic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Artificial Intelligence Company In Delhi - Transform Your Business with AI",
            "areaServed": [
              {
                "@type": "City",
                "name": "New Delhi",
                "containedInPlace": {
                  "@type": "State", 
                  "name": "Delhi"
                }
              },
              {
                "@type": "Place",
                "name": "Connaught Place"
              },
              {
                "@type": "Place", 
                "name": "Gurgaon"
              },
              {
                "@type": "Place",
                "name": "Noida"
              },
              {
                "@type": "Place",
                "name": "Faridabad"
              },
              {
                "@type": "Place",
                "name": "Ghaziabad"
              }
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Delhi",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services in Delhi"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Delhi businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Delhi enterprises"
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
                  "name": "Rajesh Sharma"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Best AI Company In Delhi! Their expertise in artificial intelligence transformed our business operations completely."
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
                "name": "Which is the best Artificial Intelligence Company In Delhi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Delhi with 2100+ successful AI implementations, serving businesses across New Delhi, Gurgaon, Noida, and the entire NCR region."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Delhi provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Delhi, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Delhi businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Firm In Delhi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Delhi offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Delhi provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Delhi provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Delhi's diverse business landscape."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the best AI Company In Delhi serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Company In Delhi serves government & public sector, financial services, IT, healthcare, education, media, consulting, e-commerce, manufacturing, and tourism industries across Delhi NCR."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with Delhi's top AI Development Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Delhi delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity."
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
            "headline": "Artificial Intelligence Company In Delhi | Leading AI Company In Delhi",
            "description": "Comprehensive guide to AI services in Delhi. Learn why Metic.ai is the premier Artificial Intelligence Company In Delhi with 2100+ successful implementations.",
            "image": "https://metic.ai/ai-company-delhi.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Delhi"
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-delhi/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Delhi", "AI Company In Delhi", "AI Service In Delhi", "AI Firm In Delhi"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI services and solutions in Delhi"
              },
              {
                "@type": "Place",
                "name": "Delhi",
                "description": "Capital territory of India, major business hub"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "New Delhi"
              },
              {
                "@type": "Place", 
                "name": "Connaught Place"
              },
              {
                "@type": "Place",
                "name": "Gurgaon"
              },
              {
                "@type": "Place",
                "name": "Noida"
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
              <span className="text-sm font-medium text-orange-300">Serving Delhi, India</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Delhi</strong> | Leading AI Company In Delhi
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Delhi</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Delhi</strong> 
              with 2100+ successful implementations across New Delhi, Gurgaon, Noida, and the entire NCR region. 
              Our <strong>AI Service In Delhi</strong> transforms businesses with 60% cost savings and 3x faster delivery. 
              From government enterprises in Connaught Place to tech startups in Cyber City, 
              we're the trusted <strong>AI Development Company In Delhi</strong> that delivers results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start with Top AI Company Delhi
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call AI Development Company Delhi
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
                AI Solutions for <span className="text-primary-orange">Delhi</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Delhi businesses 
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
                Industries We Serve in Delhi
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Delhi's key industries and business sectors.
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
                Why Delhi Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Delhi for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Delhi businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for Delhi companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Delhi business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Delhi business data.</p>
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
                  About Metic.ai - Premier <span className="text-primary-orange">AI Company In Delhi</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>Artificial Intelligence Company In Delhi</strong>, Metic.ai has been at the forefront 
                    of AI innovation since 2020. Headquartered in the heart of India's capital territory, we serve the entire 
                    Delhi NCR region including New Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad.
                  </p>
                  
                  <p>
                    Our <strong>AI Company In Delhi</strong> specializes in transforming businesses across the diverse landscape 
                    of the capital - from government ministries in Central Delhi to tech giants in Cyber City Gurgaon, 
                    from financial institutions in Connaught Place to emerging startups in Sector 62 Noida.
                  </p>
                  
                  <p>
                    With 2100+ successful AI implementations, our <strong>AI Development Company In Delhi</strong> understands 
                    the unique challenges of operating in India's political and commercial capital. We leverage Delhi's position 
                    as a major business hub to deliver world-class <strong>AI Service In Delhi</strong> solutions.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-3">Why Delhi Businesses Choose Us:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Deep understanding of Delhi's regulatory environment</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Experience with government and public sector projects</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Proven track record across NCR region</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Local presence with global AI expertise</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="lg:order-first">
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">AI Company In Delhi Stats</h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                      <div className="text-sm text-gray-600">AI Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">4+ Years</div>
                      <div className="text-sm text-gray-600">Serving Delhi NCR</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Delhi Support</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-bold mb-4 text-center">Service Areas in Delhi NCR</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>New Delhi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Gurgaon</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Noida</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Faridabad</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Ghaziabad</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Greater Noida</span>
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
                Frequently Asked Questions - AI Company In Delhi
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about our Artificial Intelligence services in Delhi and surrounding areas.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Which is the best Artificial Intelligence Company In Delhi?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading <strong>Artificial Intelligence Company In Delhi</strong> with 2100+ successful AI implementations, 
                  serving businesses across New Delhi, Gurgaon, Noida, and the entire NCR region. We provide comprehensive AI solutions 
                  with proven track record of 60% cost savings and 3x faster delivery.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  What AI services does the top AI Company In Delhi provide?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>AI Company In Delhi</strong>, we provide AI integration, machine learning solutions, 
                  custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Delhi businesses. 
                  Our <strong>AI Service In Delhi</strong> covers all industries from government to private enterprises.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How much does AI development cost from an AI Firm In Delhi?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Development Company In Delhi</strong> offers competitive pricing with 60% cost savings compared to 
                  traditional development, with projects starting from $10,000 depending on complexity and requirements. 
                  As a leading <strong>AI Firm In Delhi</strong>, we provide transparent pricing and guaranteed ROI.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Why choose Metic.ai as your AI Service In Delhi provider?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the leading <strong>AI Service In Delhi</strong> provider, we offer 3x faster delivery, 60% cost savings, 
                  2100+ successful implementations, and deep expertise in serving Delhi's diverse business landscape. 
                  Our team understands the unique needs of businesses in the capital territory.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Which industries does the best AI Company In Delhi serve?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Company In Delhi</strong> serves government & public sector, financial services, IT, healthcare, 
                  education, media, consulting, e-commerce, manufacturing, and tourism industries across Delhi NCR. 
                  We have extensive experience working with both government entities and private enterprises.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How long does AI implementation take with Delhi's top AI Development Company?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Development Company In Delhi</strong> delivers projects 3x faster than industry average, 
                  with typical implementations ranging from 2-6 months depending on project scope and complexity. 
                  We follow agile development methodologies for rapid deployment and results.
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
              Ready to Transform Your Delhi Business with the Best AI Company In Delhi?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Delhi companies that trust Metic.ai as their <strong>Artificial Intelligence Company In Delhi</strong>. 
              Get started with a free consultation and discover how our <strong>AI Service In Delhi</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Partner with AI Firm Delhi
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call AI Company Delhi Now
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Delhi</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Connaught Place</span>
                <span>•</span>
                <span>Karol Bagh</span>
                <span>•</span>
                <span>Nehru Place</span>
                <span>•</span>
                <span>Dwarka</span>
                <span>•</span>
                <span>Hauz Khas</span>
                <span>•</span>
                <span>Vasant Kunj</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
