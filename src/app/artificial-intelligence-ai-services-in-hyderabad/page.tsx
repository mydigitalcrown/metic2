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
  title: "Artificial Intelligence Company In Hyderabad | #1 AI Company In Hyderabad - Metic.ai",
  description: "Leading Artificial Intelligence Company In Hyderabad with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Hyderabad",
    "AI Company In Hyderabad",
    "AI Service In Hyderabad", 
    "AI Firm In Hyderabad",
    "AI Development Company In Hyderabad",
    "Best AI Company In Hyderabad",
    "Top AI Company Hyderabad",
    "AI Company HITEC City",
    "Machine Learning Company Hyderabad",
    "AI Solutions Hyderabad",
    "AI Consulting Hyderabad",
    "AI Services Cyberabad",
    "Hyderabad AI Company",
    "AI Software Company Hyderabad",
    "Enterprise AI Company Hyderabad",
    "Custom AI Development Hyderabad",
    "AI Technology Company Hyderabad",
    "Leading AI Company Hyderabad",
    "Professional AI Services Hyderabad"
  ],
  authors: [{ name: "Metic.ai - AI Company In Hyderabad" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Hyderabad | #1 AI Company In Hyderabad - Metic.ai",
    description: "Leading Artificial Intelligence Company In Hyderabad with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-hyderabad/",
    siteName: "Metic.ai - AI Company In Hyderabad",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-company-hyderabad.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Hyderabad - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MeticAI",
    title: "Artificial Intelligence Company In Hyderabad | AI Company In Hyderabad - Metic.ai",
    description: "Leading Artificial Intelligence Company In Hyderabad with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-company-hyderabad.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-hyderabad/",
  },
};

export default function AIServicesHyderabadPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai - Artificial Intelligence Company In Hyderabad",
            "alternateName": ["AI Company In Hyderabad", "Hyderabad AI Company", "Best AI Company In Hyderabad"],
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-hyderabad/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/ai-company-hyderabad.jpg",
            "description": "Leading Artificial Intelligence Company In Hyderabad with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India",
              "postalCode": "560079"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "17.3850",
              "longitude": "78.4867"
            },
            "telephone": "+1-789-251-8414",
            "email": "info@metic.ai",
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "slogan": "Artificial Intelligence Company In Hyderabad - Transform Your Business with AI",
            "areaServed": [
              {
                "@type": "City",
                "name": "Hyderabad",
                "containedInPlace": {
                  "@type": "State", 
                  "name": "Telangana"
                }
              },
              {
                "@type": "Place",
                "name": "HITEC City"
              },
              {
                "@type": "Place", 
                "name": "Cyberabad"
              },
              {
                "@type": "Place",
                "name": "Madhapur"
              },
              {
                "@type": "Place",
                "name": "Gachibowli"
              },
              {
                "@type": "Place",
                "name": "Kondapur"
              }
            ],
            "serviceType": ["Artificial Intelligence Services", "AI Development", "Machine Learning", "AI Consulting"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Hyderabad",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services in Hyderabad"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Hyderabad businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Hyderabad enterprises"
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
                  "name": "Rajesh Kumar"
                },
                "reviewRating": {
                  "@type": "Rating", 
                  "ratingValue": "5"
                },
                "reviewBody": "Best AI Company In Hyderabad! Their expertise in artificial intelligence transformed our HITEC City-based technology business operations completely."
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
                "name": "Which is the best Artificial Intelligence Company In Hyderabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is the leading Artificial Intelligence Company In Hyderabad with 2100+ successful AI implementations, serving businesses across HITEC City, Cyberabad, Madhapur, and the entire IT corridor."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Hyderabad provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Hyderabad, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Hyderabad businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from an AI Firm In Hyderabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Hyderabad offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose Metic.ai as your AI Service In Hyderabad provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Hyderabad provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Hyderabad's IT and pharmaceutical industries."
                }
              },
              {
                "@type": "Question",
                "name": "Which industries does the best AI Company In Hyderabad serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Company In Hyderabad serves information technology, pharmaceuticals, biotechnology, aerospace, automotive, healthcare, financial services, e-commerce, and manufacturing industries across Cyberabad."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with Hyderabad's top AI Development Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Development Company In Hyderabad delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity."
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
            "headline": "Artificial Intelligence Company In Hyderabad | Leading AI Company In Hyderabad",
            "description": "Comprehensive guide to AI services in Hyderabad. Learn why Metic.ai is the premier Artificial Intelligence Company In Hyderabad with 2100+ successful implementations.",
            "image": "https://metic.ai/ai-company-hyderabad.jpg",
            "author": {
              "@type": "Organization",
              "name": "Metic.ai - AI Company In Hyderabad"
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-hyderabad/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Hyderabad", "AI Company In Hyderabad", "AI Service In Hyderabad", "AI Firm In Hyderabad"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI services and solutions in Hyderabad"
              },
              {
                "@type": "Place",
                "name": "Hyderabad",
                "description": "IT and pharmaceutical capital of India"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "HITEC City"
              },
              {
                "@type": "Place", 
                "name": "Cyberabad"
              },
              {
                "@type": "Place",
                "name": "Madhapur"
              },
              {
                "@type": "Place",
                "name": "Gachibowli"
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-28 overflow-hidden">
        <div className="container relative px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-orange/10 rounded-full text-primary-orange text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              #1 AI Development Company in Hyderabad
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <strong>Artificial Intelligence Company In Hyderabad</strong> | Leading AI Company In Hyderabad
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for the best AI Company In Hyderabad? Metic.ai is the premier Artificial Intelligence Company In Hyderabad serving HITEC City, Cyberabad, and the entire IT corridor with cutting-edge AI solutions and 2100+ successful implementations. Our AI Service In Hyderabad delivers 60% cost savings, 3x faster delivery, and transforms businesses across Hyderabad's technology and pharmaceutical industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="#consultation">
                <Button variant="primary" size="lg" className="group">
                  Get Free AI Consultation - Hyderabad
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg">
                  Explore AI Services In Hyderabad
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Comprehensive <span className="text-primary-orange">AI Solutions</span> for Hyderabad
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From custom AI development to enterprise automation, we deliver cutting-edge solutions 
                that drive growth and efficiency for Hyderabad businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Custom AI Development In Hyderabad</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  End-to-end artificial intelligence solution development tailored for Hyderabad businesses
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Machine Learning Models
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Neural Network Development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    AI Algorithm Optimization
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Data Analytics For Hyderabad</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Transform Hyderabad business data into actionable insights with advanced analytics
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Predictive Analytics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Business Intelligence
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Data Visualization
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Automation Services Hyderabad</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Streamline Hyderabad operations with intelligent automation solutions
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Process Automation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Intelligent Workflows
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    RPA Integration
                  </li>
                </ul>
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
                  Premier <span className="text-primary-orange">Artificial Intelligence Company In Hyderabad</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>AI Company In Hyderabad</strong>, Metic.ai has been transforming businesses across Cyberabad since 2020. From the technology corridors of HITEC City to the pharmaceutical giants in Genome Valley, we've established ourselves as the go-to <strong>AI Service In Hyderabad</strong> provider for enterprises seeking cutting-edge artificial intelligence solutions.
                  </p>
                  <p>
                    Our <strong>AI Firm In Hyderabad</strong> specializes in serving the unique needs of India's IT and pharmaceutical capital. Whether you're a tech company in Madhapur, a pharmaceutical enterprise in Genome Valley, or a startup in Gachibowli, our <strong>AI Development Company In Hyderabad</strong> delivers tailored solutions that drive measurable results.
                  </p>
                  <p>
                    With deep roots in Hyderabad's business ecosystem, we understand the challenges and opportunities that define the Pearl City. Our team combines global AI expertise with local market knowledge, making us the <strong>Best AI Company In Hyderabad</strong> for businesses ready to embrace the future of technology.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">AI Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">500+</div>
                    <div className="text-sm text-gray-600">Hyderabad Clients Served</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">Serving Hyderabad's Tech Hubs</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">HITEC City - IT & Tech Hub</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Cyberabad - IT Corridor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Madhapur - Tech District</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Gachibowli - Innovation Hub</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Kondapur - Business Center</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Genome Valley - Pharma Hub</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-primary-orange">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary-orange mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">Cyberabad Excellence</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Top-rated AI Company In Hyderabad with 4.9/5 client satisfaction rating and deep expertise in serving Hyderabad's unique IT and pharmaceutical ecosystem.
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
                Frequently Asked Questions - AI Company In Hyderabad
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our AI services in Hyderabad
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which is the best Artificial Intelligence Company In Hyderabad?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading Artificial Intelligence Company In Hyderabad with 2100+ successful AI implementations, serving businesses across HITEC City, Cyberabad, Madhapur, and the entire IT corridor. Our proven track record and expertise make us the top choice for AI services in Hyderabad.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What AI services does the top AI Company In Hyderabad provide?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier AI Company In Hyderabad, we provide AI integration, machine learning solutions, custom AI development, data analytics, generative AI services, and comprehensive AI consulting for Hyderabad businesses across all industries and sectors.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How much does AI development cost from an AI Firm In Hyderabad?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI Development Company In Hyderabad offers competitive pricing with 60% cost savings compared to traditional development, with projects starting from $10,000 depending on complexity and requirements. We provide transparent pricing and flexible payment options.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Why choose Metic.ai as your AI Service In Hyderabad provider?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the leading AI Service In Hyderabad provider, we offer 3x faster delivery, 60% cost savings, 2100+ successful implementations, and deep expertise in serving Hyderabad's IT and pharmaceutical industries across Cyberabad.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which industries does the best AI Company In Hyderabad serve?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI Company In Hyderabad serves information technology, pharmaceuticals, biotechnology, aerospace, automotive, healthcare, financial services, e-commerce, and manufacturing industries across Cyberabad and HITEC City.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How long does AI implementation take with Hyderabad's top AI Development Company?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI Development Company In Hyderabad delivers projects 3x faster than industry average, with typical implementations ranging from 2-6 months depending on project scope and complexity. We follow agile methodologies for rapid deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Transform Your Hyderabad Business with Leading AI Company In Hyderabad?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 150+ successful Hyderabad companies who've revolutionized their operations 
              with our AI solutions. Get your free consultation from the Best AI Company In Hyderabad today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation - Hyderabad
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +91 7892518414
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
