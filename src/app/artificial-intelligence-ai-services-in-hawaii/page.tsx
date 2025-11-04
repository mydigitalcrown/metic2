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
  title: "Artificial Intelligence Company In Hawaii | #1 AI Company In Hawaii - Metic.ai",
  description: "Leading Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Hawaii",
    "AI Company In Hawaii",
    "AI Service In Hawaii", 
    "AI Firm In Hawaii",
    "AI Development Company In Hawaii",
    "Best AI Company In Hawaii",
    "Top AI Company Hawaii",
    "AI Company Honolulu",
    "Machine Learning Company Hawaii",
    "AI Solutions Hawaii",
    "AI Consulting Hawaii",
    "AI Services Honolulu",
    "Hawaii AI Company",
    "AI Software Company Hawaii",
    "Enterprise AI Company Hawaii",
    "Custom AI Development Hawaii",
    "AI Technology Company Hawaii",
    "Leading AI Company Hawaii",
    "Professional AI Services Hawaii"
  ],
  authors: [{ name: "Metic.ai - AI Company In Hawaii" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Hawaii | #1 AI Company In Hawaii - Metic.ai",
    description: "Leading Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-hawaii/",
    siteName: "Metic.ai - AI Company In Hawaii",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-company-hawaii.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Hawaii - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    title: "Artificial Intelligence Company In Hawaii | AI Company In Hawaii - Metic.ai",
    description: "Leading Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-company-hawaii.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-hawaii/",
  },
};

export default function AIServicesHawaiiPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Hawaii business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "orange" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Hawaii businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "orange" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Hawaii business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "orange" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Hawaii business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Hawaii.",
      icon: Sparkles,
      href: "/generative-ai",
      color: "orange" as const
    },
    {
      title: "AI Security & Compliance",
      description: "Protect your Hawaii business with AI-powered security solutions and compliance frameworks.",
      icon: Shield,
      href: "/ai-security",
      color: "orange" as const
    }
  ];

  const industries = [
    "Tourism",
    "Hospitality",
    "Agriculture",
    "Healthcare",
    "Military & Defense",
    "Renewable Energy",
    "Maritime",
    "Real Estate",
    "Education",
    "Technology"
  ];

  const stats = [
    { number: "125+", label: "HI Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.1x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Hawaii",
            "alternateName": ["AI Company In Hawaii", "Hawaii AI Company", "Best AI Company In Hawaii"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-hawaii/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ai-company-hawaii.jpg",
            "description": "Leading Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Honolulu",
              "addressRegion": "Hawaii",
              "addressCountry": "US",
              "postalCode": "96813"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "21.3099",
              "longitude": "-157.8581"
            },
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Artificial Intelligence Company In Hawaii - Transform Your Business with AI",
            "areaServed": [
              {
                "@type": "State",
                "name": "Hawaii",
                "containedInPlace": {
                  "@type": "Country", 
                  "name": "United States"
                }
              },
              {
                "@type": "City",
                "name": "Honolulu"
              },
              {
                "@type": "City", 
                "name": "Hilo"
              },
              {
                "@type": "City",
                "name": "Kailua"
              },
              {
                "@type": "City",
                "name": "Pearl City"
              },
              {
                "@type": "City",
                "name": "Waipahu"
              }
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Hawaii",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services in Hawaii"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Hawaii businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Hawaii enterprises"
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
                  "name": "Keoni Nakamura"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Best AI Company In Hawaii! Their expertise in artificial intelligence transformed our Honolulu-based tourism business operations completely."
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
                "name": "Which is the best Artificial Intelligence Company In Hawaii?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations, serving businesses across Honolulu, Hilo, Kailua, and all Hawaiian islands."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Hawaii provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Hawaii, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Hawaii businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Firm In Hawaii?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Hawaii offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Hawaii provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Hawaii provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Hawaii's unique island economy from tourism to agriculture."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the best AI Company In Hawaii serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Company In Hawaii serves tourism, hospitality, agriculture, healthcare, military & defense, renewable energy, maritime, real estate, education, and technology industries across the Aloha State."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with Hawaii's top AI Development Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Hawaii delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity."
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
            "headline": "Artificial Intelligence Company In Hawaii | Leading AI Company In Hawaii",
            "description": "Comprehensive guide to AI services in Hawaii. Learn why Metic.ai is the premier Artificial Intelligence Company In Hawaii with 2100+ successful implementations.",
            "image": "https://metic.ai/ai-company-hawaii.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Hawaii"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Metic.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metic.ai/logo.png"
              }
            },
            "datePublished": "2024-01-15T08:00:00-10:00",
            "dateModified": "2024-12-30T10:00:00-10:00",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-hawaii/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Hawaii", "AI Company In Hawaii", "AI Service In Hawaii", "AI Firm In Hawaii"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI services and solutions in Hawaii"
              },
              {
                "@type": "Place",
                "name": "Hawaii",
                "description": "Aloha State, Pacific island paradise with unique economy"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Honolulu"
              },
              {
                "@type": "Place", 
                "name": "Hilo"
              },
              {
                "@type": "Place",
                "name": "Kailua"
              },
              {
                "@type": "Place",
                "name": "Pearl Harbor"
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
              <span className="text-sm font-medium text-orange-300">Serving Hawaii</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Hawaii</strong> | Leading AI Company In Hawaii
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best AI Company In Hawaii? Metic.ai is the premier Artificial Intelligence Company In Hawaii serving Honolulu, Hilo, and all Hawaiian islands with cutting-edge AI solutions and 2100+ successful implementations. Our AI Service In Hawaii delivers 60% cost savings, 3x faster delivery, and transforms businesses across Hawaii's unique island economy from tourism to agriculture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation - Hawaii
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
                AI Solutions for <span className="text-primary-orange">Hawaii</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Hawaii businesses 
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
                Industries We Serve in Hawaii
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Hawaii's key industries and business sectors.
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
                Why Hawaii Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Hawaii for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Hawaii businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for HI companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Hawaii business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Hawaii business data.</p>
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
                  Premier <span className="text-primary-orange">Artificial Intelligence Company In Hawaii</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>AI Company In Hawaii</strong>, Metic.ai has been transforming businesses across the Aloha State since 2020. From Honolulu's bustling tourism industry to the Big Island's agricultural enterprises, we've established ourselves as the go-to <strong>AI Service In Hawaii</strong> provider for companies seeking cutting-edge artificial intelligence solutions.
                  </p>
                  <p>
                    Our <strong>AI Firm In Hawaii</strong> specializes in serving the unique needs of Hawaii's island economy. Whether you're a resort operator in Waikiki, a logistics company in Pearl Harbor, or an agricultural business in Maui, our <strong>AI Development Company In Hawaii</strong> delivers tailored solutions that respect Hawaii's values while driving measurable results.
                  </p>
                  <p>
                    With deep roots in Hawaii's business ecosystem, we understand the challenges and opportunities that define the Pacific island economy. Our team combines global AI expertise with local aloha spirit, making us the <strong>Best AI Company In Hawaii</strong> for businesses ready to embrace the future of technology.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">AI Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">125+</div>
                    <div className="text-sm text-gray-600">Hawaii Clients Served</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">Serving Hawaii's Islands</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Oahu - Honolulu & Tourism Hub</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Big Island - Agriculture & Energy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Maui - Hospitality & Tech</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Kauai - Agriculture & Eco-Tourism</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Molokai - Sustainable Agriculture</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Lanai - Luxury Hospitality</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-primary-orange">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary-orange mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">Island Excellence</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Top-rated AI Company In Hawaii with 4.9/5 client satisfaction rating and deep understanding of Hawaii's unique business environment and aloha values.
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
                Frequently Asked Questions - AI Company In Hawaii
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our AI services in Hawaii
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which is the best Artificial Intelligence Company In Hawaii?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading Artificial Intelligence Company In Hawaii with 2100+ successful AI implementations, serving businesses across Honolulu, Hilo, Kailua, and all Hawaiian islands. Our proven track record and expertise make us the top choice for AI services in Hawaii.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What AI services does the top AI Company In Hawaii provide?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier AI Company In Hawaii, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Hawaii businesses across all industries and sectors.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How much does AI development cost from an AI Firm In Hawaii?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI Development Company In Hawaii offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements. We provide transparent pricing and flexible payment options.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Why choose Metic.ai as your AI Service In Hawaii provider?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the leading AI Service In Hawaii provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Hawaii's unique island economy from tourism to agriculture and beyond.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which industries does the best AI Company In Hawaii serve?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI Company In Hawaii serves tourism, hospitality, agriculture, healthcare, military & defense, renewable energy, maritime, real estate, education, and technology industries across the Aloha State.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How long does AI implementation take with Hawaii's top AI Development Company?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI Development Company In Hawaii delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity. We follow agile methodologies for rapid deployment.
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
              Ready to Partner with the Best AI Company In Hawaii?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Hawaii companies that trust Metic.ai as their premier Artificial Intelligence Company In Hawaii. 
              Get started with a free consultation and discover how our AI Service In Hawaii can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Hawaii
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Hawaii AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted AI Development Company In Hawaii serving businesses across</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Honolulu</span>
                <span>•</span>
                <span>Hilo</span>
                <span>•</span>
                <span>Kailua</span>
                <span>•</span>
                <span>Kahului</span>
                <span>•</span>
                <span>Kaneohe</span>
                <span>•</span>
                <span>Lahaina</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

