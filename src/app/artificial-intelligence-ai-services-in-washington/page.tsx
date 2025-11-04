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
  title: "Artificial Intelligence Company In Washington | #1 AI Company In WA - Metic.ai",
  description: "Leading Artificial Intelligence Company In Washington with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Washington",
    "AI Company In Washington", 
    "AI Service Washington",
    "AI Firm In Washington",
    "AI Development Company In Washington",
    "Best AI Company In Washington",
    "Top AI Company WA",
    "Machine Learning Company Washington",
    "AI Consulting Washington",
    "Enterprise AI Washington", 
    "Custom AI Solutions Washington",
    "AI Integration Washington",
    "Business AI Washington",
    "AI Automation Washington",
    "Seattle AI Company",
    "AI Services WA",
    "Washington AI Solutions",
    "AI Technology Washington",
    "AI Innovation Washington"
  ],
  authors: [{ name: "Metic.ai Washington AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Washington | #1 AI Company In WA - Metic.ai",
    description: "Leading Artificial Intelligence Company In Washington with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development in Seattle, Spokane, Tacoma.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-washington/",
    siteName: "Metic.ai - AI Company In Washington",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-washington.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Washington - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Washington | #1 AI Company In WA - Metic.ai",
    description: "Leading Artificial Intelligence Company In Washington with 2100+ successful AI implementations. Expert AI development, machine learning & automation solutions.",
    images: ["https://metic.ai/og-ai-services-washington.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-washington/",
  },
};

export default function AIServicesWashingtonPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Washington business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Washington businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Washington business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Washington business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Washington.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Washington enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Technology",
    "Aerospace",
    "Healthcare",
    "Agriculture",
    "Manufacturing",
    "Financial Services",
    "Gaming",
    "Marine Services",
    "Energy",
    "Tourism"
  ];

  const stats = [
    { number: "450+", label: "WA Businesses Served" },
    { number: "96%", label: "Client Satisfaction" },
    { number: "4.6x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Artificial Intelligence Company In Washington",
              "alternateName": "AI Company In Washington",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-washington/",
              "logo": "https://metic.ai/logo.png",
              "description": "Leading Artificial Intelligence Company In Washington with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Washington", 
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-789-251-8414",
                "contactType": "customer service",
                "email": "info@metic.ai"
              },
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/metic_ai"
              ],
              "serviceArea": {
                "@type": "State",
                "name": "Washington"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services Washington",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Integration & Deployment",
                      "description": "Enterprise AI integration services for Washington businesses"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Solutions",
                      "description": "Custom ML algorithms and predictive analytics for WA companies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Custom AI Development",
                      "description": "Bespoke AI solutions for Washington businesses"
                    }
                  }
                ]
              },
              "areaServed": [
                "Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", 
                "Everett", "Kent", "Renton", "Yakima", "Federal Way"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2100"
              },
              "foundingDate": "2020",
              "employee": [
                {
                  "@type": "Person",
                  "name": "AI Development Team",
                  "jobTitle": "Senior AI Engineers"
                }
              ],
              "award": "Best AI Company In Washington 2024",
              "knowsAbout": [
                "Microsoft Azure AI",
                "Amazon Web Services AI", 
                "Boeing Aerospace AI",
                "Starbucks Retail AI",
                "Costco Supply Chain AI",
                "T-Mobile Telecom AI"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the leading Artificial Intelligence Company In Washington?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the premier AI Company In Washington, trusted by 2100+ businesses including collaborations with Microsoft, Amazon, Boeing, and other major Washington corporations. We provide comprehensive AI solutions across Seattle, Spokane, Tacoma, and throughout the state."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What makes Metic.ai the best AI Service Washington offers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the top AI Development Company In Washington, we offer specialized expertise in cloud AI (Microsoft Azure, AWS), aerospace AI solutions, e-commerce automation, and enterprise AI systems. Our proven track record includes 60% cost savings and 3x faster delivery for Washington businesses."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In Washington: Complete AI Solutions Guide",
              "description": "Comprehensive guide to AI services in Washington, covering machine learning, automation, and digital transformation for businesses across the Evergreen State.",
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
              "datePublished": "2024-01-01",
              "dateModified": "2024-11-01",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://metic.ai/artificial-intelligence-ai-services-in-washington/"
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "Microsoft Corporation",
                  "description": "Technology giant headquartered in Redmond, Washington"
                },
                {
                  "@type": "Thing", 
                  "name": "Amazon.com Inc",
                  "description": "E-commerce and cloud computing leader based in Seattle, Washington"
                },
                {
                  "@type": "Thing",
                  "name": "The Boeing Company", 
                  "description": "Aerospace manufacturer and defense contractor in Washington"
                },
                {
                  "@type": "Thing",
                  "name": "Starbucks Corporation",
                  "description": "Global coffeehouse chain founded in Seattle, Washington"
                }
              ]
            }
          ])
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary-orange" />
              <span className="text-sm font-medium text-gray-600">Serving Washington</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <strong>Artificial Intelligence Company In Washington</strong> | Leading AI Company In WA
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for the best AI Company In Washington? Metic.ai is the premier Artificial Intelligence Company In Washington, 
              trusted by 2100+ businesses including Microsoft, Amazon, Boeing, Starbucks, and Costco. From Seattle's tech giants 
              to Spokane's innovation hubs, we've helped Washington businesses implement AI solutions that drive 60% cost savings 
              and 3x faster growth across the Evergreen State.
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
                AI Solutions for <span className="text-primary-orange">Washington</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Washington businesses 
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
                Industries We Serve in Washington
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Washington's key industries and business sectors.
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
                Why Washington Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Washington for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Washington businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for WA companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Washington business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Washington business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Metic.ai as Your <strong>Artificial Intelligence Company In Washington</strong>?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  As the leading AI Company In Washington, we bring deep understanding of the state's unique tech ecosystem. 
                  From Microsoft and Amazon's cloud platforms to Boeing's aerospace innovations, we've successfully implemented 
                  AI solutions across every major sector in the Evergreen State.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Tech Giant Partnerships</h3>
                      <p className="text-gray-600">Specialized AI solutions for Microsoft Azure, Amazon AWS, and other Washington tech leaders with 40% efficiency improvements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Aerospace AI Expertise</h3>
                      <p className="text-gray-600">Proven track record with Boeing and aerospace manufacturers, delivering AI solutions that enhance safety, efficiency, and innovation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Retail & E-commerce Focus</h3>
                      <p className="text-gray-600">Deep expertise in retail AI applications, working with companies like Starbucks, Costco, and emerging e-commerce businesses.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Startup Ecosystem</h3>
                      <p className="text-gray-600">Supporting Washington's thriving startup community in Seattle, Bellevue, and Tacoma with cutting-edge AI development and integration services.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary-orange rounded-lg p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">2100+ AI Implementations</h3>
                  <p className="text-orange-100">Successfully delivered across the US with specialized focus on Washington's tech ecosystem.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">60%</div>
                    <div className="text-sm text-gray-600">Average Cost Reduction</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">3x</div>
                    <div className="text-sm text-gray-600">Faster Business Growth</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">450+</div>
                    <div className="text-sm text-gray-600">WA Companies Served</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Local Support</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Washington Industry Specializations</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>💻 Cloud Computing & Software (Microsoft, Amazon)</div>
                    <div>✈️ Aerospace & Defense (Boeing, Lockheed Martin)</div>
                    <div>☕ Retail & Consumer Goods (Starbucks, Costco)</div>
                    <div>🏥 Healthcare & Biotechnology</div>
                    <div>🎮 Gaming & Entertainment</div>
                    <div>🌲 Agriculture & Forestry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions About <strong>AI Company In Washington</strong>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers about the leading Artificial Intelligence Company In Washington and how we serve 
              the state's tech ecosystem including Microsoft, Amazon, Boeing, and emerging startups.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  Which is the leading Artificial Intelligence Company In Washington for tech companies?
                </h3>
                <p className="text-gray-600">
                  Metic.ai is the premier AI Company In Washington specializing in cloud platforms, working with Microsoft Azure, 
                  Amazon AWS, and major tech companies. We've implemented AI solutions for enterprise software, cloud services, 
                  and digital platforms that have reduced operational costs by 60% and improved scalability by 3x 
                  across Washington's tech sector.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  How does the best AI Service Washington support aerospace and defense industries?
                </h3>
                <p className="text-gray-600">
                  As the top AI Development Company In Washington, we partner with Boeing, aerospace manufacturers, 
                  and defense contractors. Our AI solutions for predictive maintenance, quality control, 
                  and safety systems have helped aerospace companies reduce manufacturing defects by 45% and improve 
                  operational safety by 40%, making us the preferred AI Firm In Washington for aerospace.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  What makes Metic.ai the best AI Company In Washington for retail and e-commerce?
                </h3>
                <p className="text-gray-600">
                  Working with Starbucks, Costco, and retail chains across Washington, our AI solutions optimize 
                  customer experience, inventory management, and supply chain operations. We're recognized as 
                  the leading Artificial Intelligence Company In Washington for retail, delivering AI systems 
                  that improve customer satisfaction by 35% while reducing operational costs.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  How does the top AI Service Washington support startups and emerging companies?
                </h3>
                <p className="text-gray-600">
                  In Washington's thriving startup ecosystem across Seattle, Bellevue, and Tacoma, we empower 
                  emerging companies with AI integration, machine learning models, and automation solutions. 
                  As the preferred AI Development Company In Washington for startups, we've helped 300+ new 
                  companies implement AI-driven products and services, accelerating their growth by 250%.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  Why choose Metic.ai as your AI Firm In Washington for digital transformation?
                </h3>
                <p className="text-gray-600">
                  With 2100+ successful AI implementations across the US and deep expertise in Washington's tech 
                  ecosystem, we understand the unique challenges of innovation-driven markets. Our comprehensive 
                  AI solutions span from cloud computing to aerospace, retail to healthcare. We're the only 
                  Artificial Intelligence Company In Washington offering end-to-end AI transformation with 
                  proven ROI and local tech industry expertise.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary-orange">
                  What industries does the leading AI Company In Washington serve across the state?
                </h3>
                <p className="text-gray-600">
                  As the top AI Service In Washington, we serve all major industries: cloud computing (Microsoft, Amazon), 
                  aerospace (Boeing, Lockheed Martin), retail (Starbucks, Costco), healthcare and biotechnology, 
                  gaming and entertainment, agriculture and forestry, and emerging tech startups. Our comprehensive 
                  AI expertise makes us the preferred AI Development Company In Washington for businesses across 
                  the entire economic spectrum.
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
              Ready to Transform Your Washington Business with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Washington companies that trust the premier Artificial Intelligence Company In Washington. 
              Get started with a free AI consultation and discover how our AI solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation in Washington
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Washington AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Washington</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Seattle</span>
                <span>•</span>
                <span>Spokane</span>
                <span>•</span>
                <span>Tacoma</span>
                <span>•</span>
                <span>Vancouver</span>
                <span>•</span>
                <span>Bellevue</span>
                <span>•</span>
                <span>Everett</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
