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
  title: "Artificial Intelligence Company In Connecticut | #1 AI Company In Connecticut - Metic.ai",
  description: "Leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Connecticut",
    "AI Company In Connecticut", 
    "AI Service In Connecticut",
    "AI Firm In Connecticut",
    "AI Development Company In Connecticut",
    "Best AI Company In Connecticut",
    "Top AI Company Connecticut",
    "Leading AI Company Connecticut",
    "AI Solutions Connecticut",
    "Machine Learning Company Connecticut",
    "AI Consulting Connecticut",
    "AI Services Hartford",
    "AI Company New Haven",
    "AI Development Hartford",
    "Connecticut AI Services",
    "AI Automation Connecticut",
    "Custom AI Development Connecticut",
    "Enterprise AI Connecticut",
    "AI Implementation Connecticut"
  ],
  authors: [{ name: "Metic.ai Connecticut AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Connecticut | #1 AI Company In Connecticut - Metic.ai",
    description: "Leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-connecticut/",
    type: "website",
    siteName: "Metic.ai - AI Company In Connecticut",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-connecticut.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Connecticut - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@metic_ai",
    creator: "@metic_ai", 
    title: "Artificial Intelligence Company In Connecticut | #1 AI Company In Connecticut - Metic.ai",
    description: "Leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: [{
      url: "https://metic.ai/og-ai-services-connecticut.jpg",
      alt: "Artificial Intelligence Company In Connecticut - Metic.ai"
    }],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-connecticut/",
  },
};

export default function AIServicesConnecticutPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Connecticut business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Connecticut businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Connecticut business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Connecticut business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Connecticut.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Connecticut enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Financial Services",
    "Insurance",
    "Manufacturing",
    "Healthcare",
    "Technology",
    "Aerospace",
    "Pharmaceuticals",
    "Education",
    "Real Estate",
    "Biotech"
  ];

  const stats = [
    { number: "310+", label: "CT Businesses Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4.5x", label: "Average ROI Increase" },
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
            "name": "Metic.ai - Artificial Intelligence Company In Connecticut",
            "alternateName": "AI Company In Connecticut",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-connecticut/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-connecticut.jpg",
            "description": "Leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "foundingDate": "2018",
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Connecticut",
              "addressCountry": "US",
              "addressLocality": "Connecticut"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "customer service",
              "email": "info@metic.ai",
              "availableLanguage": ["English"]
            },
            "sameAs": [
              "https://linkedin.com/company/metic-ai",
              "https://twitter.com/metcai",
              "https://facebook.com/metic.ai"
            ],
            "serviceArea": {
              "@type": "State",
              "name": "Connecticut",
              "containedInPlace": {
                "@type": "Country",
                "name": "United States"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Connecticut",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Artificial Intelligence Services Connecticut",
                    "description": "Custom AI development and machine learning solutions"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions Connecticut",
                    "description": "Advanced ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "AI Integration Services Connecticut",
                    "description": "Enterprise AI integration and deployment services"
                  }
                }
              ]
            },
            "areaServed": [
              "Hartford", "Bridgeport", "New Haven", "Stamford", "Waterbury", 
              "Norwalk", "Danbury", "New Britain", "West Hartford", "Greenwich",
              "Hamden", "Meriden", "Bristol", "Manchester", "West Haven",
              "Middletown", "Shelton", "Torrington", "Naugatuck", "Milford"
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
              "AI Automation Connecticut"
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
            "headline": "Artificial Intelligence Company In Connecticut | Leading AI Company In Connecticut - Metic.ai",
            "description": "Leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
            "image": "https://metic.ai/og-ai-services-connecticut.jpg",
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
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-connecticut/"
            },
            "articleSection": "Artificial Intelligence Services",
            "keywords": [
              "Artificial Intelligence Company In Connecticut",
              "AI Company In Connecticut",
              "AI Service In Connecticut",
              "AI Firm In Connecticut",
              "AI Development Company In Connecticut"
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
                "name": "Connecticut",
                "sameAs": "https://en.wikipedia.org/wiki/Connecticut"
              }
            ],
            "mentions": [
              {
                "@type": "Place",
                "name": "Hartford",
                "sameAs": "https://en.wikipedia.org/wiki/Hartford,_Connecticut"
              },
              {
                "@type": "Place",
                "name": "New Haven",
                "sameAs": "https://en.wikipedia.org/wiki/New_Haven,_Connecticut"
              },
              {
                "@type": "Place",
                "name": "Bridgeport",
                "sameAs": "https://en.wikipedia.org/wiki/Bridgeport,_Connecticut"
              },
              {
                "@type": "Place",
                "name": "Stamford",
                "sameAs": "https://en.wikipedia.org/wiki/Stamford,_Connecticut"
              }
            ]
          })
        }}
      />

      {/* FAQ Schema for Voice Search Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Artificial Intelligence Company In Connecticut?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Connecticut with 2100+ successful AI implementations. We specialize in custom AI development, machine learning solutions, and enterprise AI integration across Hartford, New Haven, Bridgeport, and Stamford with 60% cost savings and 3x faster delivery."
                }
              },
              {
                "@type": "Question", 
                "name": "What AI services does the top AI Company In Connecticut provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Connecticut, Metic.ai provides comprehensive AI services including custom AI development, machine learning solutions, predictive analytics, AI automation, natural language processing, computer vision, and enterprise AI integration services for businesses across Connecticut's financial and technology corridors."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost from AI Firm In Connecticut?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Firm In Connecticut offers competitive pricing with 60% cost savings compared to traditional development. AI project costs vary based on complexity, typically ranging from $25,000 for basic AI solutions to $500,000+ for enterprise-grade AI implementations. We provide free consultations to discuss your specific requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose AI Development Company In Connecticut Metic.ai?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Choose Metic.ai as your AI Development Company In Connecticut because we offer 2100+ successful implementations, 3x faster delivery, 60% cost savings, expertise in cutting-edge AI technologies, and deep understanding of Connecticut's business landscape from Hartford's insurance sector to Stamford's financial corridor."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with AI Service In Connecticut provider?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Service In Connecticut typically delivers projects 3x faster than industry standards. Simple AI solutions can be implemented in 4-8 weeks, while complex enterprise AI systems take 3-6 months. We use agile development methodologies and proven frameworks to accelerate delivery timelines."
                }
              },
              {
                "@type": "Question",
                "name": "What industries does the leading AI Company In Connecticut serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the top AI Company In Connecticut, we serve diverse industries including financial services, insurance, manufacturing, healthcare, pharmaceuticals, aerospace, technology, and education sectors. Our expertise spans Connecticut's key economic drivers from Hartford's insurance capital to New Haven's biotech innovation."
                }
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
              <span className="text-sm font-medium text-orange-300">Serving Connecticut</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Connecticut</strong> | Leading AI Company In Connecticut
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Connecticut</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Connecticut</strong> 
              with 2100+ successful AI implementations. From Hartford's insurance capital to Stamford's financial district, we deliver 
              expert AI services with 60% cost savings & 3x faster delivery. Transform your Connecticut business with our 
              cutting-edge AI solutions today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation Connecticut
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Top AI Company Connecticut
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
                AI Solutions for <span className="text-primary-orange">Connecticut</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Connecticut businesses 
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
                Industries We Serve in Connecticut
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Connecticut's key industries and business sectors.
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
                About Leading <span className="text-primary-orange">Artificial Intelligence Company In Connecticut</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                As the premier <strong>AI Company In Connecticut</strong>, Metic.ai has been transforming businesses across the Constitution State 
                since 2018. From Hartford's insurance capital to Stamford's financial corridor and New Haven's innovation district, 
                we've helped over 2100+ companies harness the power of artificial intelligence. Our team understands Connecticut's unique 
                business landscape—from the pharmaceutical giants in Fairfield County to the aerospace innovations in East Hartford.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">2100+ AI Implementations</h3>
                <p className="text-gray-600">Successfully delivered AI solutions across Connecticut's diverse business ecosystem from Hartford to Greenwich.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">60% Cost Savings</h3>
                <p className="text-gray-600">Efficient AI solutions delivering measurable ROI for Connecticut enterprises from Bridgeport to New Haven.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Connecticut Expertise</h3>
                <p className="text-gray-600">Deep understanding of Connecticut's business culture from Waterbury's manufacturing to Norwalk's corporate headquarters.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">3x Faster Delivery</h3>
                <p className="text-gray-600">Accelerated AI development serving businesses from Stamford's financial sector to Danbury's technology companies.</p>
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
                Frequently Asked Questions About <span className="text-primary-orange">AI Company In Connecticut</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Common questions about our <strong>Artificial Intelligence Company In Connecticut</strong> services and solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  Which is the best Artificial Intelligence Company In Connecticut?
                </h3>
                <p className="text-gray-600">
                  Metic.ai is recognized as the leading <strong>Artificial Intelligence Company In Connecticut</strong> with 2100+ successful AI implementations. 
                  We specialize in custom AI development, machine learning solutions, and enterprise AI integration across Hartford, New Haven, 
                  Bridgeport, and Stamford with 60% cost savings and 3x faster delivery.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  What AI services does the top AI Company In Connecticut provide?
                </h3>
                <p className="text-gray-600">
                  As the premier <strong>AI Company In Connecticut</strong>, Metic.ai provides comprehensive AI services including custom AI development, 
                  machine learning solutions, predictive analytics, AI automation, natural language processing, computer vision, 
                  and enterprise AI integration services for businesses across Connecticut's financial and technology corridors.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  How much does AI development cost from AI Firm In Connecticut?
                </h3>
                <p className="text-gray-600">
                  Our <strong>AI Firm In Connecticut</strong> offers competitive pricing with 60% cost savings compared to traditional development. 
                  AI project costs vary based on complexity, typically ranging from $25,000 for basic AI solutions to $500,000+ 
                  for enterprise-grade AI implementations. We provide free consultations to discuss your specific requirements.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  Why choose AI Development Company In Connecticut Metic.ai?
                </h3>
                <p className="text-gray-600">
                  Choose Metic.ai as your <strong>AI Development Company In Connecticut</strong> because we offer 2100+ successful implementations, 
                  3x faster delivery, 60% cost savings, expertise in cutting-edge AI technologies, and deep understanding of Connecticut's 
                  business landscape from Hartford's insurance sector to Stamford's financial corridor.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  How long does AI implementation take with AI Service In Connecticut provider?
                </h3>
                <p className="text-gray-600">
                  Our <strong>AI Service In Connecticut</strong> typically delivers projects 3x faster than industry standards. Simple AI solutions 
                  can be implemented in 4-8 weeks, while complex enterprise AI systems take 3-6 months. We use agile development 
                  methodologies and proven frameworks to accelerate delivery timelines.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  What industries does the leading AI Company In Connecticut serve?
                </h3>
                <p className="text-gray-600">
                  As the top <strong>AI Company In Connecticut</strong>, we serve diverse industries including financial services, insurance, manufacturing, 
                  healthcare, pharmaceuticals, aerospace, technology, and education sectors. Our expertise spans Connecticut's key economic drivers 
                  from Hartford's insurance capital to New Haven's biotech innovation.
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
              Ready to Partner with the Leading <span className="text-orange-200">AI Company In Connecticut</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ successful Connecticut companies that trust our <strong>Artificial Intelligence Company In Connecticut</strong> for their AI transformation. 
              Get started with a free consultation and discover how our expert <strong>AI Service In Connecticut</strong> can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start with Top AI Firm Connecticut
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call AI Development Company Connecticut
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Connecticut</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Hartford</span>
                <span>•</span>
                <span>Bridgeport</span>
                <span>•</span>
                <span>New Haven</span>
                <span>•</span>
                <span>Stamford</span>
                <span>•</span>
                <span>Waterbury</span>
                <span>•</span>
                <span>Norwalk</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
