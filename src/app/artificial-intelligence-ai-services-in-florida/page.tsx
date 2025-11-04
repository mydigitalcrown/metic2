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
  title: "Artificial Intelligence Company In Florida | #1 AI Company In Florida - Metic.ai",
  description: "Leading Artificial Intelligence Company In Florida with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Florida",
    "AI Company In Florida",
    "AI Service In Florida", 
    "AI Firm In Florida",
    "AI Development Company In Florida",
    "Best AI Company In Florida",
    "Top AI Company Florida",
    "AI Company Miami",
    "Machine Learning Company Florida",
    "AI Solutions Florida",
    "AI Consulting Florida",
    "AI Services Orlando",
    "Florida AI Company",
    "AI Software Company Florida",
    "Enterprise AI Company Florida",
    "Custom AI Development Florida",
    "AI Technology Company Florida",
    "Leading AI Company Florida",
    "Professional AI Services Florida"
  ],
  authors: [{ name: "Metic.ai - AI Company In Florida" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Florida | #1 AI Company In Florida - Metic.ai",
    description: "Leading Artificial Intelligence Company In Florida with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-florida/",
    siteName: "Metic.ai - AI Company In Florida",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-company-florida.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Florida - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    title: "Artificial Intelligence Company In Florida | AI Company In Florida - Metic.ai",
    description: "Leading Artificial Intelligence Company In Florida with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-company-florida.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-florida/",
  },
};

export default function AIServicesFloridaPage() {
  const services = [
    {
      title: "AI That Automates Your Work",
      description: "Stop doing repetitive tasks manually. We build AI that handles your routine work so your team can focus on what actually matters.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Smart Predictions",
      description: "Know what's coming next. Our machine learning models predict customer behavior, market trends, and business outcomes with scary accuracy.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Solutions",
      description: "Your business is unique, so why use generic AI? We build exactly what you need, nothing more, nothing less.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data That Actually Helps",
      description: "Turn your messy data into clear insights. We make your numbers tell stories that help you make better decisions.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "AI Content & Communication",
      description: "Let AI handle your content creation, customer support, and communication while keeping your brand voice authentic.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Infrastructure",
      description: "Build a solid foundation for your AI. We set up systems that grow with your business and actually work when you need them.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Tourism",
    "Aerospace",
    "Technology",
    "Healthcare",
    "Real Estate",
    "Agriculture",
    "Finance",
    "Manufacturing",
    "Logistics",
    "Entertainment"
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
            "name": "Metic.ai - Artificial Intelligence Company In Florida",
            "alternateName": ["AI Company In Florida", "Florida AI Company", "Best AI Company In Florida"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-florida/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ai-company-florida.jpg",
            "description": "Leading Artificial Intelligence Company In Florida with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Florida",
              "addressCountry": "US",
              "postalCode": "33101"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "27.7663",
              "longitude": "-81.6868"
            },
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Artificial Intelligence Company In Florida - Transform Your Business with AI",
            "areaServed": [
              {
                "@type": "State",
                "name": "Florida",
                "containedInPlace": {
                  "@type": "Country", 
                  "name": "United States"
                }
              },
              {
                "@type": "City",
                "name": "Miami"
              },
              {
                "@type": "City", 
                "name": "Orlando"
              },
              {
                "@type": "City",
                "name": "Tampa"
              },
              {
                "@type": "City",
                "name": "Jacksonville"
              },
              {
                "@type": "City",
                "name": "Fort Lauderdale"
              }
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Florida",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services in Florida"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Florida businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Florida enterprises"
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
                  "name": "Maria Rodriguez"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Best AI Company In Florida! Their expertise in artificial intelligence transformed our Miami-based business operations completely."
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
                "name": "Which is the best Artificial Intelligence Company In Florida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Florida with 2100+ successful AI implementations, serving businesses across Miami, Orlando, Tampa, Jacksonville, and the entire Sunshine State."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Florida provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Florida, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Florida businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Firm In Florida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Florida offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Florida provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Florida provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Florida's diverse business landscape from tourism to aerospace."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the best AI Company In Florida serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Company In Florida serves tourism, aerospace, technology, healthcare, real estate, agriculture, finance, manufacturing, logistics, and entertainment industries across the Sunshine State."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with Florida's top AI Development Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Florida delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity."
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
            "headline": "Artificial Intelligence Company In Florida | Leading AI Company In Florida",
            "description": "Comprehensive guide to AI services in Florida. Learn why Metic.ai is the premier Artificial Intelligence Company In Florida with 2100+ successful implementations.",
            "image": "https://metic.ai/ai-company-florida.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Florida"
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-florida/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Florida", "AI Company In Florida", "AI Service In Florida", "AI Firm In Florida"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI services and solutions in Florida"
              },
              {
                "@type": "Place",
                "name": "Florida",
                "description": "Sunshine State, major tourism and business hub"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Miami"
              },
              {
                "@type": "Place", 
                "name": "Orlando"
              },
              {
                "@type": "Place",
                "name": "Tampa"
              },
              {
                "@type": "Place",
                "name": "Jacksonville"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-orange-900 to-gray-800 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,53,0.1),transparent_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary-orange" />
              <span className="text-sm font-medium text-orange-200 bg-orange-950/50 px-3 py-1 rounded-full">
                Serving the Sunshine State
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Florida</strong> | Leading AI Company In Florida
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Looking for the best <strong>AI Company In Florida</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Florida</strong> 
              with 2100+ successful implementations across Miami, Orlando, Tampa, Jacksonville, and the entire Sunshine State. 
              Our <strong>AI Service In Florida</strong> transforms businesses with 60% cost savings and 3x faster delivery. 
              From tech startups in Miami's Brickell district to aerospace companies in Cape Canaveral, 
              we're the trusted <strong>AI Development Company In Florida</strong> that delivers results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-dark-orange hover:to-primary-orange text-white border-0">
                  Start with Top AI Company Florida
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-orange text-primary-orange hover:bg-orange-950/50">
                  <Phone className="w-4 h-4 mr-2" />
                  Call AI Development Company Florida
                </Button>
              </Link>
            </div>

            {/* Florida-Specific Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-primary-orange mb-2">$1.0T</div>
                <div className="text-sm text-gray-300">FL GDP (4th largest in US)</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-secondary-orange mb-2">890+</div>
                <div className="text-sm text-gray-300">AI Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-primary-orange mb-2">97%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-secondary-orange mb-2">24/7</div>
                <div className="text-sm text-gray-300">Expert Support</div>
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
                AI Solutions for <span className="text-primary-orange">Florida</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Florida businesses 
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
                Industries We Serve in Florida
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Florida's key industries and business sectors.
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
                Why Florida Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Florida for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Florida businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for FL companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Florida business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Florida business data.</p>
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
                  About Metic.ai - Premier <span className="text-primary-orange">AI Company In Florida</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>Artificial Intelligence Company In Florida</strong>, Metic.ai has been at the forefront 
                    of AI innovation since 2020. Headquartered to serve the entire Sunshine State, we transform businesses across 
                    Florida's diverse economic landscape from Miami's financial district to Orlando's theme park corridor.
                  </p>
                  
                  <p>
                    Our <strong>AI Company In Florida</strong> specializes in transforming businesses across the state's key industries - 
                    from tourism enterprises in Key West to aerospace companies in Cape Canaveral, 
                    from tech startups in Tampa Bay to agricultural operations in Central Florida.
                  </p>
                  
                  <p>
                    With 2100+ successful AI implementations, our <strong>AI Development Company In Florida</strong> understands 
                    the unique opportunities of operating in America's third-largest state. We leverage Florida's position 
                    as a major business hub and tourism destination to deliver world-class <strong>AI Service In Florida</strong> solutions.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-3">Why Florida Businesses Choose Us:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Deep understanding of Florida's diverse economy</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Experience with tourism, aerospace, and tech sectors</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>Proven track record across the Sunshine State</span>
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
                  <h3 className="text-2xl font-bold mb-6 text-center">AI Company In Florida Stats</h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                      <div className="text-sm text-gray-600">AI Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">4+ Years</div>
                      <div className="text-sm text-gray-600">Serving Florida</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Florida Support</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-bold mb-4 text-center">Major Florida Cities Served</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Miami</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Jacksonville</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Tampa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Orlando</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>Fort Lauderdale</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary-orange" />
                        <span>St. Petersburg</span>
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
                Frequently Asked Questions - AI Company In Florida
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about our Artificial Intelligence services in Florida and the Sunshine State.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Which is the best Artificial Intelligence Company In Florida?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading <strong>Artificial Intelligence Company In Florida</strong> with 2100+ successful AI implementations, 
                  serving businesses across Miami, Orlando, Tampa, Jacksonville, and the entire Sunshine State. We provide comprehensive AI solutions 
                  with proven track record of 60% cost savings and 3x faster delivery for Florida businesses.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  What AI services does the top AI Company In Florida provide?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>AI Company In Florida</strong>, we provide AI integration, machine learning solutions, 
                  custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Florida businesses. 
                  Our <strong>AI Service In Florida</strong> covers all industries from tourism and aerospace to technology and healthcare.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How much does AI development cost from an AI Firm In Florida?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Development Company In Florida</strong> offers competitive pricing with 60% cost savings compared to 
                  traditional development, with projects starting from $10,000 depending on complexity and requirements. 
                  As a leading <strong>AI Firm In Florida</strong>, we provide transparent pricing and guaranteed ROI for Sunshine State businesses.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Why choose Metic.ai as your AI Service In Florida provider?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the leading <strong>AI Service In Florida</strong> provider, we offer 3x faster delivery, 60% cost savings, 
                  2100+ successful implementations, and deep expertise in serving Florida's diverse business landscape from tourism to aerospace. 
                  Our team understands the unique needs of businesses in the Sunshine State.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Which industries does the best AI Company In Florida serve?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Company In Florida</strong> serves tourism, aerospace, technology, healthcare, real estate, agriculture, 
                  finance, manufacturing, logistics, and entertainment industries across the Sunshine State. 
                  We have extensive experience working with Florida's diverse economic sectors from Miami to Jacksonville.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How long does AI implementation take with Florida's top AI Development Company?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Development Company In Florida</strong> delivers projects 3x faster than industry average, 
                  with typical implementations ranging from 2-6 months depending on project scope and complexity. 
                  We follow agile development methodologies for rapid deployment and measurable results across Florida.
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
              Ready to Transform Your Florida Business with the Best AI Company In Florida?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Florida companies that trust Metic.ai as their <strong>Artificial Intelligence Company In Florida</strong>. 
              Get started with a free consultation and discover how our <strong>AI Service In Florida</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Partner with AI Firm Florida
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call AI Company Florida Now
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Florida</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Miami</span>
                <span>•</span>
                <span>Jacksonville</span>
                <span>•</span>
                <span>Tampa</span>
                <span>•</span>
                <span>Orlando</span>
                <span>•</span>
                <span>St. Petersburg</span>
                <span>•</span>
                <span>Fort Lauderdale</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

