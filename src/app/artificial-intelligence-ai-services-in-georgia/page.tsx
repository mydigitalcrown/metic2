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
  title: "Artificial Intelligence Company In Georgia | #1 AI Company In Georgia - Metic.ai",
  description: "Leading Artificial Intelligence Company In Georgia with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Georgia",
    "AI Company In Georgia",
    "AI Service In Georgia", 
    "AI Firm In Georgia",
    "AI Development Company In Georgia",
    "Best AI Company In Georgia",
    "Top AI Company Georgia",
    "AI Company Atlanta",
    "Machine Learning Company Georgia",
    "AI Solutions Georgia",
    "AI Consulting Georgia",
    "AI Services Atlanta",
    "Georgia AI Company",
    "AI Software Company Georgia",
    "Enterprise AI Company Georgia",
    "Custom AI Development Georgia",
    "AI Technology Company Georgia",
    "Leading AI Company Georgia",
    "Professional AI Services Georgia"
  ],
  authors: [{ name: "Metic.ai - AI Company In Georgia" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Georgia | #1 AI Company In Georgia - Metic.ai",
    description: "Leading Artificial Intelligence Company In Georgia with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-georgia/",
    siteName: "Metic.ai - AI Company In Georgia",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-company-georgia.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Georgia - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    title: "Artificial Intelligence Company In Georgia | AI Company In Georgia - Metic.ai",
    description: "Leading Artificial Intelligence Company In Georgia with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-company-georgia.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-georgia/",
  },
};

export default function AIServicesGeorgiaPage() {
  const services = [
    {
      title: "AI for Logistics",
      description: "Georgia handles massive freight operations. We build AI that optimizes routes, predicts delays, and keeps your supply chain moving smoothly.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "orange" as const
    },
    {
      title: "Smart Business Analytics",
      description: "Your Georgia business generates data every day. We help you see patterns, predict trends, and make decisions that actually move the needle.",
      icon: Brain,
      href: "/machine-learning",
      color: "orange" as const
    },
    {
      title: "Custom AI Solutions",
      description: "Every Georgia company is different. We build AI tools that fit your specific needs - not generic software that sort of works.",
      icon: Code,
      href: "/custom-ai-development",
      color: "orange" as const
    },
    {
      title: "Data That Makes Sense",
      description: "Stop drowning in spreadsheets. We turn your Georgia business data into clear insights you can actually use to grow.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "AI Content Creation",
      description: "Need marketing content, reports, or communications for your Georgia business? Our AI handles the writing while you focus on strategy.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "orange" as const
    },
    {
      title: "Data Infrastructure",
      description: "Messy data leads to bad decisions. We organize your Georgia company's information so AI can actually work with it properly.",
      icon: Database,
      href: "/data-engineering",
      color: "orange" as const
    }
  ];

  const industries = [
    "Technology",
    "Logistics",
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Agriculture",
    "Aerospace",
    "Film & Media",
    "Transportation",
    "Real Estate"
  ];

  const stats = [
    { number: "650+", label: "GA Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.3x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Georgia",
            "alternateName": ["AI Company In Georgia", "Georgia AI Company", "Best AI Company In Georgia"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-georgia/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ai-company-georgia.jpg",
            "description": "Leading Artificial Intelligence Company In Georgia with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Atlanta",
              "addressRegion": "Georgia",
              "addressCountry": "US",
              "postalCode": "30303"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.0406",
              "longitude": "-83.6431"
            },
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Artificial Intelligence Company In Georgia - Transform Your Business with AI",
            "areaServed": [
              {
                "@type": "State",
                "name": "Georgia",
                "containedInPlace": {
                  "@type": "Country", 
                  "name": "United States"
                }
              },
              {
                "@type": "City",
                "name": "Atlanta"
              },
              {
                "@type": "City", 
                "name": "Augusta"
              },
              {
                "@type": "City",
                "name": "Columbus"
              },
              {
                "@type": "City",
                "name": "Savannah"
              },
              {
                "@type": "City",
                "name": "Athens"
              }
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Georgia",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services in Georgia"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Georgia businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Georgia enterprises"
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
                  "name": "James Thompson"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Best AI Company In Georgia! Their expertise in artificial intelligence transformed our Atlanta-based business operations completely."
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
                "name": "Which is the best Artificial Intelligence Company In Georgia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Georgia with 2100+ successful AI implementations, serving businesses across Atlanta, Augusta, Columbus, Savannah, and the entire Peach State."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Georgia provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Georgia, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Georgia businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Firm In Georgia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Georgia offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Georgia provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Georgia provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Georgia's diverse business landscape from logistics to film industry."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the best AI Company In Georgia serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Company In Georgia serves technology, logistics, manufacturing, healthcare, financial services, agriculture, aerospace, film & media, transportation, and real estate industries across the Peach State."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with Georgia's top AI Development Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Georgia delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity."
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
            "headline": "Artificial Intelligence Company In Georgia | Leading AI Company In Georgia",
            "description": "Comprehensive guide to AI services in Georgia. Learn why Metic.ai is the premier Artificial Intelligence Company In Georgia with 2100+ successful implementations.",
            "image": "https://metic.ai/ai-company-georgia.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Georgia"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Metic.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metic.ai/logo.png"
              }
            },
            "datePublished": "2024-01-15T08:00:00-05:00",
            "dateModified": "2024-12-30T10:00:00-05:00",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-georgia/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Georgia", "AI Company In Georgia", "AI Service In Georgia", "AI Firm In Georgia"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI services and solutions in Georgia"
              },
              {
                "@type": "Place",
                "name": "Georgia",
                "description": "Peach State, major logistics and business hub"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Atlanta"
              },
              {
                "@type": "Place", 
                "name": "Augusta"
              },
              {
                "@type": "Place",
                "name": "Columbus"
              },
              {
                "@type": "Place",
                "name": "Savannah"
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
              <span className="text-sm font-medium text-orange-300">Serving Georgia</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Georgia</strong> | Leading AI Company In Georgia
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Georgia</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Georgia</strong> 
              with 2100+ successful implementations across Atlanta, Augusta, Columbus, Savannah, and the entire Peach State. 
              Our <strong>AI Service In Georgia</strong> transforms businesses with 60% cost savings and 3x faster delivery. 
              From logistics companies in Atlanta's distribution centers to film studios in Pinewood, 
              we're the trusted <strong>AI Development Company In Georgia</strong> that delivers results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start with Top AI Company Georgia
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call AI Development Company Georgia
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
                AI Solutions for <span className="text-primary-orange">Georgia</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Georgia businesses 
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
                Industries We Serve in Georgia
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Georgia's key industries and business sectors.
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
                Why Georgia Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Georgia for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Georgia businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for GA companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Georgia business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Georgia business data.</p>
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
                  About Metic.ai - Premier <span className="text-primary-orange">AI Company In Georgia</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>Artificial Intelligence Company In Georgia</strong>, Metic.ai has been at the forefront 
                    of AI innovation since 2020. Headquartered to serve the entire Peach State, we transform businesses across 
                    Georgia's diverse economic landscape from Atlanta's tech corridor to Savannah's historic port district.
                  </p>
                  
                  <p>
                    Our <strong>AI Company In Georgia</strong> specializes in transforming businesses across the state's key industries - 
                    from logistics operations in Atlanta's massive distribution centers to film productions at Pinewood Studios, 
                    from aerospace companies near Robins Air Force Base to agricultural operations in South Georgia.
                  </p>
                  
                  <p>
                    With 2100+ successful AI implementations, our <strong>AI Development Company In Georgia</strong> understands 
                    the unique opportunities of operating in the Peach State. We leverage Georgia's position 
                    as a major logistics hub and growing tech center to deliver world-class <strong>AI Service In Georgia</strong> solutions.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-3">Why Georgia Businesses Choose Us:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Deep understanding of Georgia's logistics and transportation sector</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Experience with film, aerospace, and technology industries</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Proven track record across the Peach State</span>
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
                  <h3 className="text-2xl font-bold mb-6 text-center">AI Company In Georgia Stats</h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                      <div className="text-sm text-gray-600">AI Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">4+ Years</div>
                      <div className="text-sm text-gray-600">Serving Georgia</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Georgia Support</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-bold mb-4 text-center">Major Georgia Cities Served</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Atlanta</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Augusta</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Columbus</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Savannah</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Athens</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Macon</span>
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
                Frequently Asked Questions - AI Company In Georgia
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about our Artificial Intelligence services in Georgia and the Peach State.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Which is the best Artificial Intelligence Company In Georgia?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading <strong>Artificial Intelligence Company In Georgia</strong> with 2100+ successful AI implementations, 
                  serving businesses across Atlanta, Augusta, Columbus, Savannah, and the entire Peach State. We provide comprehensive AI solutions 
                  with proven track record of 60% cost savings and 3x faster delivery for Georgia businesses.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  What AI services does the top AI Company In Georgia provide?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>AI Company In Georgia</strong>, we provide AI integration, machine learning solutions, 
                  custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Georgia businesses. 
                  Our <strong>AI Service In Georgia</strong> covers all industries from logistics and film to technology and healthcare.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How much does AI development cost from an AI Firm In Georgia?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Development Company In Georgia</strong> offers competitive pricing with 60% cost savings compared to 
                  traditional development, with projects starting from $10,000 depending on complexity and requirements. 
                  As a leading <strong>AI Firm In Georgia</strong>, we provide transparent pricing and guaranteed ROI for Peach State businesses.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Why choose Metic.ai as your AI Service In Georgia provider?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the leading <strong>AI Service In Georgia</strong> provider, we offer 3x faster delivery, 60% cost savings, 
                  2100+ successful implementations, and deep expertise in serving Georgia's diverse business landscape from logistics to film industry. 
                  Our team understands the unique needs of businesses in the Peach State.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Which industries does the best AI Company In Georgia serve?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Company In Georgia</strong> serves technology, logistics, manufacturing, healthcare, financial services, 
                  agriculture, aerospace, film & media, transportation, and real estate industries across the Peach State. 
                  We have extensive experience working with Georgia's diverse economic sectors from Atlanta to Savannah.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How long does AI implementation take with Georgia's top AI Development Company?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Development Company In Georgia</strong> delivers projects 3x faster than industry average, 
                  with typical implementations ranging from 2-6 months depending on project scope and complexity. 
                  We follow agile development methodologies for rapid deployment and measurable results across Georgia.
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
              Ready to Transform Your Georgia Business with the Best AI Company In Georgia?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Georgia companies that trust Metic.ai as their <strong>Artificial Intelligence Company In Georgia</strong>. 
              Get started with a free consultation and discover how our <strong>AI Service In Georgia</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Partner with AI Firm Georgia
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call AI Company Georgia Now
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Georgia</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Atlanta</span>
                <span>•</span>
                <span>Augusta</span>
                <span>•</span>
                <span>Columbus</span>
                <span>•</span>
                <span>Savannah</span>
                <span>•</span>
                <span>Athens</span>
                <span>•</span>
                <span>Macon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

