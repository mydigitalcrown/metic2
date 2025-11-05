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
  Sparkles,
  Globe,
  Calendar,
  ChevronDown,
  Rocket
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Michigan | #1 AI Company In Great Lakes State - Metic.ai",
  description: "Leading Artificial Intelligence Company In Michigan with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Michigan",
    "AI Company In Michigan", 
    "AI Service In Michigan",
    "AI Firm In Michigan",
    "AI Development Company In Michigan",
    "Best AI Company In Michigan",
    "Top AI Company Michigan",
    "Michigan AI Company",
    "AI Services Michigan",
    "Machine Learning Company Michigan",
    "AI Consulting Michigan",
    "Custom AI Development Michigan",
    "Enterprise AI Solutions Michigan",
    "AI Automation Michigan",
    "Detroit AI Company",
    "Grand Rapids AI Services",
    "Michigan AI Development",
    "Artificial Intelligence Michigan",
    "AI Implementation Michigan"
  ],
  authors: [{ name: "Metic.ai Michigan AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Michigan | #1 AI Company In Great Lakes State - Metic.ai",
    description: "Leading Artificial Intelligence Company In Michigan with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-michigan/",
    siteName: "Metic.ai - AI Company In Michigan",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-michigan.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Michigan - Metic.ai",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Michigan | #1 AI Company In Great Lakes State - Metic.ai",
    description: "Leading Artificial Intelligence Company In Michigan with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-services-michigan.jpg"],
    creator: "@MeticAI",
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-michigan/",
  },
};

export default function AIServicesMichiganPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Michigan business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Michigan businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Michigan business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Michigan business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Michigan.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Michigan enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Automotive",
    "Manufacturing",
    "Technology",
    "Healthcare",
    "Agriculture",
    "Energy",
    "Aerospace",
    "Financial Services",
    "Education",
    "Tourism"
  ];

  const stats = [
    { number: "1,100+", label: "MI Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.4x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Triple Schema Implementation for Enhanced SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Artificial Intelligence Company In Michigan",
              "alternateName": "AI Company In Michigan",
              "description": "Leading Artificial Intelligence Company In Michigan with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development serving Detroit, Grand Rapids, Ann Arbor and all Michigan cities.",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-michigan/",
              "logo": "https://metic.ai/logo.png",
              "image": "https://metic.ai/og-ai-services-michigan.jpg",
              "telephone": "+1-789-251-8414",
              "email": "hello@matic.ai",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "300 Quail Ridge Dr NE",
                "addressLocality": "ADA",
                "addressRegion": "MI",
                "postalCode": "49301",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "42.3314",
                "longitude": "-83.0458"
              },
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Michigan",
                  "alternateName": "Great Lakes State"
                },
                {
                  "@type": "City", 
                  "name": "Detroit",
                  "containedInPlace": "Michigan"
                },
                {
                  "@type": "City",
                  "name": "Grand Rapids", 
                  "containedInPlace": "Michigan"
                },
                {
                  "@type": "City",
                  "name": "Ann Arbor",
                  "containedInPlace": "Michigan"
                }
              ],
              "serviceArea": {
                "@type": "State",
                "name": "Michigan"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services In Michigan",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Development Company In Michigan",
                      "description": "Custom AI development and machine learning solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "AI Service In Michigan",
                      "description": "Enterprise AI integration and automation services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Firm In Michigan", 
                      "description": "AI consulting and strategic AI implementation"
                    }
                  }
                ]
              },
              "founder": {
                "@type": "Person",
                "name": "Metic.ai Founders"
              },
              "foundingDate": "2020",
              "industry": ["Artificial Intelligence", "Machine Learning", "Technology"],
              "knowsAbout": ["Artificial Intelligence", "Machine Learning", "Data Science", "Automation", "Michigan Business"],
              "memberOf": {
                "@type": "Organization",
                "name": "Michigan Technology Association"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2100",
                "bestRating": "5",
                "worstRating": "1"
              },
              "award": "Best AI Company In Michigan 2024"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best Artificial Intelligence Company In Michigan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Michigan with 2100+ successful implementations across Detroit, Grand Rapids, and Ann Arbor. We specialize in automotive AI, manufacturing automation, and enterprise solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI services does the top AI Company In Michigan offer?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Our AI Company In Michigan offers comprehensive services including custom AI development, machine learning solutions, automation systems, data analytics, generative AI, and AI integration specifically designed for Michigan's automotive and manufacturing industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does AI development cost from an AI Development Company In Michigan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI development costs vary by project scope. As a leading AI Development Company In Michigan, we offer 60% cost savings compared to traditional development, with projects ranging from $10K for basic automation to $500K+ for enterprise AI systems."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Metic.ai as your AI Firm In Michigan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai stands out as the premier AI Firm In Michigan due to our deep understanding of Michigan's automotive and manufacturing sectors, 3x faster delivery, 60% cost savings, and proven track record with 2100+ successful AI implementations."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What industries does your AI Service In Michigan cover?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Service In Michigan covers automotive manufacturing, healthcare, finance, retail, logistics, and manufacturing - all key industries in Michigan's economy. We provide specialized AI solutions for Detroit's automotive sector and Grand Rapids' manufacturing hub."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does AI implementation take with your Artificial Intelligence Company In Michigan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Artificial Intelligence Company In Michigan delivers 3x faster implementation. Basic AI solutions deploy in 2-4 weeks, while enterprise systems typically complete in 3-6 months, significantly faster than traditional development cycles."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Leading Artificial Intelligence Company In Michigan - Metic.ai",
              "description": "Discover why Metic.ai is Michigan's premier AI company, serving Detroit, Grand Rapids, and Ann Arbor with cutting-edge artificial intelligence solutions for automotive, manufacturing, and enterprise clients.",
              "image": "https://metic.ai/og-ai-services-michigan.jpg",
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
              "datePublished": "2024-01-01",
              "dateModified": "2024-10-31",
              "articleSection": "Artificial Intelligence",
              "keywords": "Artificial Intelligence Company In Michigan, AI Company In Michigan, AI Service In Michigan, AI Firm In Michigan, AI Development Company In Michigan",
              "articleBody": "Metic.ai is the leading Artificial Intelligence Company In Michigan, specializing in AI solutions for the Great Lakes State's unique business landscape. From Detroit's automotive industry to Grand Rapids' manufacturing sector, we deliver cutting-edge AI services.",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://metic.ai/artificial-intelligence-ai-services-in-michigan/"
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "Artificial Intelligence",
                  "sameAs": "https://en.wikipedia.org/wiki/Artificial_intelligence"
                },
                {
                  "@type": "Place",
                  "name": "Michigan",
                  "sameAs": "https://en.wikipedia.org/wiki/Michigan"
                },
                {
                  "@type": "Place", 
                  "name": "Detroit",
                  "sameAs": "https://en.wikipedia.org/wiki/Detroit"
                }
              ],
              "mentions": [
                {
                  "@type": "Organization",
                  "name": "University of Michigan",
                  "sameAs": "https://umich.edu"
                },
                {
                  "@type": "Organization",
                  "name": "General Motors",
                  "sameAs": "https://www.gm.com"
                },
                {
                  "@type": "Organization", 
                  "name": "Ford Motor Company",
                  "sameAs": "https://www.ford.com"
                }
              ]
            }
          ])
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary-orange/20 to-secondary-orange/30 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-orange/20 border border-primary-orange/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-medium text-white">🏭 Serving Michigan • 🚀 3x Faster • 💰 60% Savings</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              <strong>Artificial Intelligence Company In Michigan</strong> | Leading <span className="text-primary-orange">AI Company In Great Lakes State</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Michigan?</strong> Metic.ai is the premier <strong>Artificial Intelligence Company In Michigan</strong> transforming businesses from Detroit's automotive innovation to Grand Rapids' manufacturing excellence. We deliver cutting-edge AI solutions across the Great Lakes State.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary-orange hover:bg-primary-orange/90">
                <Phone className="w-5 h-5 mr-2" />
                Get Free AI Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Mail className="w-5 h-5 mr-2" />
                View Michigan Portfolio
              </Button>
            </div>

            {/* Michigan-specific stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">150+</div>
                <div className="text-sm text-gray-300">Michigan Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">4.4x</div>
                <div className="text-sm text-gray-300">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">24/7</div>
                <div className="text-sm text-gray-300">MI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Michigan AI Impact Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                AI Solutions for <span className="text-primary-orange">Michigan</span> Industries
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powering Michigan's economic engine with AI solutions tailored for automotive, manufacturing, healthcare, agriculture, and technology sectors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Automotive AI */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Automotive AI Solutions</h3>
                <p className="text-gray-600 mb-6">Advanced AI for Detroit's automotive industry including predictive maintenance, quality control, and autonomous systems.</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Predictive maintenance AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Quality control automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Supply chain optimization</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Manufacturing AI */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Manufacturing Intelligence</h3>
                <p className="text-gray-600 mb-6">Smart manufacturing solutions for Grand Rapids and across Michigan's industrial corridor.</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Production optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Equipment monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Workforce analytics</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Healthcare AI */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Healthcare AI Systems</h3>
                <p className="text-gray-600 mb-6">AI-powered healthcare solutions for Michigan medical institutions and practices.</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Diagnostic assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Patient management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Workflow automation</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Agriculture AI */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">AgTech AI Solutions</h3>
                <p className="text-gray-600 mb-6">Smart farming and agricultural AI for Michigan's agricultural communities.</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Crop monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Yield prediction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Resource optimization</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Technology AI */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Enterprise AI Development</h3>
                <p className="text-gray-600 mb-6">Custom AI solutions for Michigan's growing tech sector and startups.</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Custom AI platforms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Data analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">ML integration</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Education AI */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Educational AI Systems</h3>
                <p className="text-gray-600 mb-6">AI solutions for Michigan universities, colleges, and K-12 institutions.</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Personalized learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Student analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Administrative automation</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
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
                Industries We Serve in Michigan
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Michigan's key industries and business sectors.
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
                Why Michigan Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Michigan for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Michigan businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for MI companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Michigan business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Michigan business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              About <strong>Metic.ai</strong> - Premier <strong>AI Company In Michigan</strong>
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                As the leading <strong>Artificial Intelligence Company In Michigan</strong>, Metic.ai has been at the forefront of AI innovation in the Great Lakes State since our founding. We understand the unique industrial landscape of Michigan, from Detroit's automotive heritage to Grand Rapids' manufacturing excellence, and we've helped transform businesses across every sector of Michigan's economy.
              </p>
              <p>
                Our <strong>AI Company In Michigan</strong> serves the entire Great Lakes State ecosystem, working closely with the University of Michigan, Michigan State University, and industry leaders like General Motors, Ford, and Stellantis to advance artificial intelligence research and implementation. We've established strategic partnerships with Michigan automotive companies, manufacturing firms, and tech startups to deliver cutting-edge AI solutions.
              </p>
              <p>
                With our deep understanding of the Michigan business environment, we've successfully implemented AI solutions for companies in Detroit's automotive sector, Grand Rapids' furniture and manufacturing hub, Ann Arbor's research corridor, and Flint's industrial base. Our <strong>AI Development Company In Michigan</strong> approach combines automotive industry expertise with advanced AI capabilities.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">
                    Michigan AI Expertise
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>2100+ successful AI implementations across Michigan</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Partnerships with University of Michigan and MSU</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automotive industry AI specialization</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Manufacturing automation expertise in Grand Rapids</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">
                    Great Lakes State Innovation
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Detroit-Ann Arbor automotive AI corridor</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>University research collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Manufacturing and logistics AI</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Healthcare and mobility AI solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section - Homepage Style */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1.5px, transparent 1.5px), linear-gradient(90deg, #FF6B35 1.5px, transparent 1.5px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 mb-8 hover:border-primary-orange/40 transition-all group">
                <Lightbulb className="w-5 h-5 text-primary-orange animate-pulse" />
                <span className="text-sm font-bold text-gray-800">Got Questions? We Have Answers!</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Frequently Asked Questions</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  About AI Company In Michigan
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about Michigan's leading AI company in the Great Lakes State
              </p>
            </div>

            {/* Advanced Creative FAQ Cards */}
            <div className="space-y-5">
              {/* FAQ Item 1 - Enhanced Design */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        {/* Icon Circle */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Sparkles className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        {/* Question */}
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which is the best Artificial Intelligence Company In Michigan?
                          </h3>
                        </div>
                      </div>
                      
                      {/* Toggle Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Accent Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                {/* Answer with Animation */}
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-gray-900 font-semibold">Metic.ai is recognized as the leading Artificial Intelligence Company In Michigan</strong> with 2100+ successful implementations across Detroit, Grand Rapids, and Ann Arbor. 
                        We specialize in automotive AI, manufacturing automation, and enterprise solutions.
                      </p>
                      <p className="text-lg">
                        Our expertise in Michigan's automotive industry and manufacturing sector delivers tailored solutions for the Great Lakes State's unique business landscape.
                      </p>
                      
                      {/* Stats Highlight */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">2100+ Projects</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <MapPin className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Great Lakes Expert</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <TrendingUp className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Automotive AI Leader</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Code className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What AI services does the top AI Company In Michigan offer?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Our <strong className="text-gray-900 font-semibold">AI Company In Michigan</strong> offers comprehensive services including custom AI development, machine learning solutions, 
                        automation systems, data analytics, generative AI, and AI integration.
                      </p>
                      <p className="text-lg">
                        We specialize in solutions for Michigan's automotive and manufacturing industries, serving Detroit's automotive sector, Grand Rapids' manufacturing hub, and Ann Arbor's tech corridor.
                      </p>

                      {/* Service Grid */}
                      <div className="grid md:grid-cols-2 gap-4 pt-4">
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <Brain className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">Automotive AI</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <Database className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">Manufacturing ML</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <Zap className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">Industrial Automation</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-primary-orange/5 rounded-lg">
                          <Shield className="w-5 h-5 text-primary-orange" />
                          <span className="text-sm font-medium">Enterprise Solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <TrendingUp className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How much does AI development cost from an AI Development Company In Michigan?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        AI development costs vary by project scope. As a leading <strong className="text-gray-900 font-semibold">AI Development Company In Michigan</strong>, we offer 60% cost savings compared to traditional development, 
                        with projects ranging from $10K for basic automation to $500K+ for enterprise AI systems.
                      </p>
                      <p className="text-lg">
                        Our Michigan-based team ensures competitive pricing for automotive and manufacturing AI solutions with maximum ROI for Great Lakes businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

            </div>

            {/* Enhanced CTA at Bottom of FAQ */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary-orange to-secondary-orange rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-lg animate-pulse"></div>
                      <div className="relative w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <Rocket className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Michigan Business with AI?</h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Join leading Michigan companies that trust Metic.ai for their AI transformation in the Great Lakes State!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100 shadow-xl">
                        Partner with AI Firm Michigan
                      </Button>
                    </Link>
                    <Link href="tel:+917892518414">
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                        Call AI Company Michigan Now
                      </Button>
                    </Link>
                  </div>
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
              Ready to Partner with the Leading <strong>AI Company In Michigan?</strong>
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join industry leaders across the Great Lakes State who trust our <strong>Artificial Intelligence Company In Michigan</strong> for breakthrough AI transformation. 
              Get started with a free consultation from Michigan's premier <strong>AI Development Company</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free Michigan AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Michigan AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted <strong>AI Service In Michigan</strong> across the Great Lakes State</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Detroit Automotive</span>
                <span>•</span>
                <span>Grand Rapids Manufacturing</span>
                <span>•</span>
                <span>Ann Arbor Research</span>
                <span>•</span>
                <span>Lansing Government</span>
                <span>•</span>
                <span>Flint Industrial</span>
                <span>•</span>
                <span>Warren Tech</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

