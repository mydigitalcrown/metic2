import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Activity,
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
  title: "Artificial Intelligence Company In Pennsylvania | #1 AI Company In PA - Metic.ai",
  description: "Leading Artificial Intelligence Company In Pennsylvania with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Pennsylvania",
    "AI Company In Pennsylvania", 
    "AI Service Pennsylvania",
    "AI Firm In Pennsylvania",
    "AI Development Company In Pennsylvania",
    "Best AI Company In Pennsylvania",
    "Top AI Company Pennsylvania",
    "AI Solutions Pennsylvania",
    "AI Consulting Pennsylvania",
    "Machine Learning Company Pennsylvania",
    "AI Services Philadelphia",
    "AI Services Pittsburgh",
    "AI Company Philadelphia",
    "AI Company Pittsburgh",
    "AI Company Harrisburg",
    "Artificial Intelligence Pennsylvania",
    "AI Technology Pennsylvania",
    "Enterprise AI Pennsylvania",
    "Custom AI Pennsylvania"
  ],
  authors: [{ name: "Metic.ai Pennsylvania AI Team" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-pennsylvania/"
  },
  openGraph: {
    title: "Artificial Intelligence Company In Pennsylvania | #1 AI Company In PA - Metic.ai",
    description: "Leading Artificial Intelligence Company In Pennsylvania with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-pennsylvania/",
    type: "website",
    siteName: "Metic.ai - AI Company In Pennsylvania",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-pennsylvania.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Pennsylvania - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Pennsylvania | #1 AI Company In PA - Metic.ai", 
    description: "Leading Artificial Intelligence Company In Pennsylvania with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: ["https://metic.ai/og-ai-services-pennsylvania.jpg"],
  },
};

export default function AIServicesPennsylvaniaPage() {
  const services = [
    {
      title: "AI That Actually Works",
      description: "Stop doing repetitive tasks manually. We build AI that handles your routine work so your Pennsylvania team can focus on what matters.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "orange" as const
    },
    {
      title: "Smart Data Analysis",
      description: "Your Pennsylvania business generates tons of data. We help you understand what it's telling you and make better decisions.",
      icon: Brain,
      href: "/machine-learning",
      color: "orange" as const
    },
    {
      title: "Custom AI Tools",
      description: "Every Pennsylvania business is different. We build AI solutions that fit exactly what you need, not generic one-size-fits-all stuff.",
      icon: Code,
      href: "/custom-ai-development",
      color: "orange" as const
    },
    {
      title: "Business Intelligence",
      description: "Turn your Pennsylvania company's information into clear insights. No more guessing - make decisions based on real data.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Content Generation",
      description: "Need content for your Pennsylvania business? Our AI writes, edits, and creates while you focus on running your company.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "orange" as const
    },
    {
      title: "Data Management",
      description: "Clean, organized data is the foundation of good AI. We help Pennsylvania businesses get their information ready for smart decisions.",
      icon: Database,
      href: "/data-engineering",
      color: "orange" as const
    }
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Technology",
    "Education",
    "Energy",
    "Agriculture",
    "Transportation",
    "Tourism",
    "Steel & Metals"
  ];

  const stats = [
    { number: "300+", label: "PA Businesses Served" },
    { number: "97%", label: "Client Satisfaction" },
    { number: "3.5x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai",
            "alternateName": "Artificial Intelligence Company In Pennsylvania",
            "url": "https://metic.ai",
            "logo": "https://metic.ai/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "Customer Service",
              "email": "hello@matic.ai"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Pennsylvania",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai"
            ],
            "foundingDate": "2020",
            "numberOfEmployees": "51-200",
            "industry": "Artificial Intelligence",
            "description": "Leading Artificial Intelligence Company In Pennsylvania specializing in AI solutions for healthcare systems like UPMC, financial services like PNC Bank, telecommunications giants like Comcast, consumer brands like Hershey Company, and industrial leaders like PPG Industries.",
            "serviceArea": {
              "@type": "State", 
              "name": "Pennsylvania"
            },
            "knowsAbout": [
              "Comcast Technology Solutions",
              "UPMC Healthcare AI",
              "PNC Bank Innovation",
              "Hershey Company AI Systems",
              "PPG Industries Automation"
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which is the best Artificial Intelligence Company In Pennsylvania?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai stands out as the premier AI Company In Pennsylvania with 2100+ successful implementations across Philadelphia, Pittsburgh, and throughout the state. Our expertise spans healthcare AI for systems like UPMC, financial technology for PNC Bank, telecommunications solutions for Comcast, consumer products AI for Hershey Company, and industrial automation for PPG Industries. We've delivered an average of 60% cost savings and 3x faster project delivery for Pennsylvania businesses."
                }
              },
              {
                "@type": "Question", 
                "name": "How much does AI implementation cost for Pennsylvania businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI solutions for Pennsylvania companies typically range from $25,000 to $500,000 depending on complexity and scope. Most Pennsylvania businesses see ROI within 6-12 months through cost savings, efficiency gains, and revenue optimization. We offer flexible pricing models including phased implementations to accommodate Pennsylvania's diverse business landscape from healthcare to manufacturing."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does Metic.ai provide to Pennsylvania companies?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the leading AI Service In Pennsylvania, we offer machine learning development, natural language processing, computer vision, predictive analytics, and process automation. Our Pennsylvania-specific expertise includes healthcare AI for UPMC-level institutions, financial services AI for PNC Bank-type operations, telecommunications AI for Comcast-scale networks, consumer products AI for Hershey Company-style brands, and industrial AI for PPG Industries-type manufacturing."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take for Pennsylvania businesses?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Most Pennsylvania AI projects are completed within 3-9 months. Our phased approach ensures Pennsylvania businesses see initial results within 4-6 weeks. Timeline factors include project complexity, data readiness, and integration requirements. Our local Pennsylvania presence enables faster deployment and ongoing support for companies across Philadelphia, Pittsburgh, Harrisburg, and throughout the state."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose a local AI Firm In Pennsylvania over national competitors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local Pennsylvania expertise means understanding the unique challenges of healthcare, financial services, telecommunications, manufacturing, and consumer products sectors that drive Pennsylvania's economy. We know Pennsylvania's regulatory environment, business culture, and market dynamics. Our Pennsylvania-based team provides hands-on support, faster response times, and deep understanding of local business needs from UPMC's healthcare innovation to Comcast's technological advancement goals."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Metic.ai the top AI Development Company In Pennsylvania?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our combination of technical excellence, Pennsylvania market expertise, and proven track record sets us apart. We've successfully delivered AI solutions for Pennsylvania's major sectors including healthcare systems in Philadelphia and Pittsburgh, financial institutions throughout the state, and innovative companies like Hershey Company and PPG Industries. Our team understands Pennsylvania's business ecosystem and delivers solutions that drive real results for Keystone State companies."
                }
              }
            ]
          })
        }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Artificial Intelligence Company In Pennsylvania | Leading AI Services & Solutions",
            "description": "Comprehensive guide to AI services in Pennsylvania featuring expert solutions for healthcare, financial services, telecommunications, and manufacturing sectors with proven results for Pennsylvania businesses.",
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
            "dateModified": "2024-10-31",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-pennsylvania/"
            },
            "about": [
              {
                "@type": "Thing",
                "name": "Comcast",
                "description": "Pennsylvania telecommunications leader utilizing AI solutions"
              },
              {
                "@type": "Thing", 
                "name": "UPMC",
                "description": "Pennsylvania healthcare system implementing AI technology"
              },
              {
                "@type": "Thing",
                "name": "PNC Bank",
                "description": "Pennsylvania financial institution leveraging AI for operations"
              },
              {
                "@type": "Thing",
                "name": "Hershey Company",
                "description": "Pennsylvania consumer products company using AI solutions"
              },
              {
                "@type": "Thing",
                "name": "PPG Industries",
                "description": "Pennsylvania manufacturing company implementing AI integration"
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
              <span className="text-sm font-medium text-orange-300">Serving Pennsylvania</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Pennsylvania</strong> | Leading <span className="text-primary-orange">AI Company In PA</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Pennsylvania</strong>? Metic.ai is the premier 
              <strong>Artificial Intelligence Company In Pennsylvania</strong> delivering real results for businesses 
              across Philadelphia, Pittsburgh, and throughout the state. Which AI firm in Pennsylvania can help you 
              achieve 60% cost savings and 3x faster delivery? We've proven our expertise with 2100+ successful 
              implementations for Pennsylvania businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation in Pennsylvania
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
                AI Solutions for <span className="text-primary-orange">Pennsylvania</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Pennsylvania businesses 
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
                Industries We Serve in Pennsylvania
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Pennsylvania's key industries and business sectors.
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
                Why Pennsylvania Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Pennsylvania for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Pennsylvania businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for PA companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Pennsylvania business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Pennsylvania business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Metic.ai Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About Metic.ai - Premier <strong>AI Company In Pennsylvania</strong>
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  As the leading <strong>Artificial Intelligence Company In Pennsylvania</strong>, Metic.ai has been transforming businesses across the Keystone State with cutting-edge AI solutions since our inception.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our deep understanding of Pennsylvania's diverse business landscape - from Philadelphia's financial sector to Pittsburgh's manufacturing hub - enables us to deliver AI solutions that perfectly align with local market needs. We've successfully implemented AI systems for healthcare giants similar to UPMC, financial institutions like PNC Bank, telecommunications leaders like Comcast, consumer brands like Hershey Company, and industrial manufacturers like PPG Industries.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With 2100+ successful AI implementations across Pennsylvania, we've proven our expertise in delivering measurable results: 60% average cost savings, 3x faster project delivery, and transformative business outcomes. Our Pennsylvania-based team combines global AI expertise with intimate knowledge of local business challenges and opportunities.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">AI Projects in Pennsylvania</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">60%</div>
                    <div className="text-sm text-gray-600">Average Cost Savings</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:order-first">
                <div className="bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Pennsylvania Businesses Choose Metic.ai</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span><strong>Pennsylvania Market Expertise:</strong> Deep knowledge of healthcare, finance, telecom, and manufacturing sectors</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span><strong>Proven Track Record:</strong> 2100+ successful implementations across Philadelphia, Pittsburgh, and statewide</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span><strong>Local Support:</strong> Dedicated Pennsylvania team with 24/7 support and ongoing partnership</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span><strong>Enterprise Security:</strong> Bank-level security standards protecting Pennsylvania business data</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span><strong>Guaranteed Results:</strong> 60% cost savings and 3x faster delivery with performance guarantees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Services Pennsylvania Content - SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Pennsylvania AI Market Leadership */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Leading </span>
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Artificial Intelligence Company In Pennsylvania
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powering the Keystone State's innovation from Philadelphia's biotech corridor to Pittsburgh's robotics revolution
              </p>
            </div>

            <div className="space-y-16">
              {/* Pennsylvania AI Innovation Hub */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Pennsylvania's <span className="text-primary-orange">Premier AI Technology Leader</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As the leading <strong className="text-gray-900">Artificial Intelligence Company In Pennsylvania</strong>, Metic.ai 
                    serves the birthplace of American innovation with enterprise-grade AI solutions tailored to Pennsylvania's 
                    diverse economic landscape. From Philadelphia's life sciences hub to Pittsburgh's advanced manufacturing, 
                    Harrisburg's government sector to the state's energy corridors, we understand Pennsylvania's industrial heritage.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Company In Pennsylvania</strong> combines deep industrial expertise 
                    with cutting-edge technology to deliver AI solutions that drive measurable results. We've successfully implemented 
                    AI across Pennsylvania's key sectors including healthcare, manufacturing, energy, finance, education, and technology.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Activity className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Healthcare & Life Sciences</h4>
                        <p className="text-sm text-gray-600">
                          Deep expertise with Philadelphia's biotech corridor and world-renowned medical institutions
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Advanced Manufacturing</h4>
                        <p className="text-sm text-gray-600">
                          Pittsburgh's robotics and steel industry AI solutions with next-generation automation
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Energy Innovation</h4>
                        <p className="text-sm text-gray-600">
                          Natural gas, renewable energy, and power grid optimization across Pennsylvania
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-primary-orange/20">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    Pennsylvania AI Market Impact
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">$950B</div>
                      <div className="text-sm text-gray-600 font-medium">Pennsylvania GDP (6th largest in US)</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-secondary-orange mb-2">13.0M</div>
                      <div className="text-sm text-gray-600 font-medium">Pennsylvania Population</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">385+</div>
                      <div className="text-sm text-gray-600 font-medium">Pennsylvania AI Projects Completed</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-4 border-l-4 border-primary-orange">
                      <p className="text-sm font-medium text-gray-900">
                        <strong>Pennsylvania Advantage:</strong> Rich industrial heritage with leading healthcare, 
                        manufacturing, and energy sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pennsylvania Industry Solutions */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  AI Solutions for <span className="text-primary-orange">Pennsylvania's Key Industries</span>
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Healthcare & Life Sciences</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Advanced AI solutions for Pennsylvania's world-class healthcare institutions including Philadelphia's 
                      biotech corridor, Pittsburgh's medical centers, pharmaceutical research, and life sciences companies 
                      leading medical innovation.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Drug discovery acceleration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Medical imaging analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Clinical trial optimization
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Advanced Manufacturing</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Industrial AI solutions for Pennsylvania's manufacturing sector including Pittsburgh's robotics industry, 
                      steel production, automotive manufacturing, and advanced materials processing driving industrial 
                      innovation across the state.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Robotics automation systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Quality control AI
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Predictive maintenance
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Energy & Utilities</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI solutions for Pennsylvania's energy sector including natural gas extraction, renewable energy 
                      systems, power grid optimization, and utility management across the state's diverse energy 
                      infrastructure.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Smart grid optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Energy demand forecasting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Pipeline monitoring
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI solutions for Pennsylvania's financial institutions including Philadelphia's banking sector, 
                      insurance companies, investment firms, and fintech startups driving financial innovation 
                      across the Commonwealth.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Fraud detection systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Credit risk assessment
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Investment analytics
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Education & Research</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI solutions for Pennsylvania's renowned educational institutions including University of Pennsylvania, 
                      Carnegie Mellon University, Penn State, and research organizations driving academic and scientific 
                      advancement.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Research data analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Student performance optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Academic resource management
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Technology</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI solutions for Pennsylvania's growing technology sector including software companies, 
                      telecommunications providers, cybersecurity firms, and digital innovation hubs in 
                      Philadelphia and Pittsburgh.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Cybersecurity enhancement
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Software development automation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Network optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pennsylvania AI Success Stories */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-12 border-2 border-primary-orange/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Pennsylvania AI Implementation <span className="text-primary-orange">Success Stories</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary-orange">PC</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Pharma Company</h4>
                        <p className="text-sm text-gray-600">Philadelphia Biotech Leader</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Best AI Company In Pennsylvania for life sciences! Their drug discovery AI accelerated our 
                      research timeline by 50%. Exceptional biotech industry expertise."
                    </p>
                    <div className="text-3xl font-bold text-primary-orange">50%</div>
                    <div className="text-sm text-gray-600">Research Timeline Acceleration</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-secondary-orange">MR</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Manufacturing Robot</h4>
                        <p className="text-sm text-gray-600">Pittsburgh Industrial Leader</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Outstanding AI Development Company In Pennsylvania! Their robotics AI increased production 
                      efficiency by 45%. Perfect understanding of advanced manufacturing."
                    </p>
                    <div className="text-3xl font-bold text-secondary-orange">45%</div>
                    <div className="text-sm text-gray-600">Production Efficiency Increase</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary-orange">EU</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Energy Utility</h4>
                        <p className="text-sm text-gray-600">Pennsylvania Power Company</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Leading Artificial Intelligence Company In Pennsylvania for energy! Their smart grid AI 
                      reduced outages by 38% while optimizing energy distribution statewide."
                    </p>
                    <div className="text-3xl font-bold text-primary-orange">38%</div>
                    <div className="text-sm text-gray-600">Outage Reduction</div>
                  </div>
                </div>
              </div>

              {/* Pennsylvania AI Partnership Excellence */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Pennsylvania AI Leadership Metrics</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Pennsylvania Projects Completed</span>
                        <span className="font-bold text-primary-orange">385+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Healthcare Success Rate</span>
                        <span className="font-bold text-secondary-orange">100%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average ROI for PA Clients</span>
                        <span className="font-bold text-primary-orange">4.7x</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Client Retention Rate</span>
                        <span className="font-bold text-secondary-orange">96%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-6 border-l-4 border-primary-orange">
                    <h4 className="font-bold text-gray-900 mb-2">Pennsylvania Innovation Advantage</h4>
                    <p className="text-sm text-gray-700">
                      As the premier AI Firm In Pennsylvania, we understand the Commonwealth's unique blend of 
                      historical industrial strength and cutting-edge innovation. Our AI solutions honor 
                      Pennsylvania's legacy while driving future growth.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Your Trusted <span className="text-primary-orange">AI Partner In Pennsylvania</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-gray-900">Choosing Metic.ai as your AI partner in Pennsylvania</strong> means working with 
                    a team that understands the Keystone State's rich industrial heritage and innovative spirit, from 
                    Philadelphia's life sciences leadership to Pittsburgh's robotics excellence and beyond.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Service In Pennsylvania</strong> includes comprehensive consultation, 
                    rapid prototyping, enterprise deployment, and ongoing optimization to ensure your AI investment delivers 
                    maximum value in Pennsylvania's diverse and dynamic economy.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Statewide Pennsylvania Coverage</h4>
                        <p className="text-sm text-gray-600">
                          Philadelphia, Pittsburgh, Harrisburg, Allentown, Erie, and all major Pennsylvania markets
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Activity className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Healthcare & Life Sciences Expertise</h4>
                        <p className="text-sm text-gray-600">
                          Deep understanding of biotech, pharmaceuticals, and medical device innovation
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Advanced Manufacturing Focus</h4>
                        <p className="text-sm text-gray-600">
                          Industrial AI solutions built for Pennsylvania's manufacturing and robotics sectors
                        </p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions About <strong>AI Services In Pennsylvania</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about implementing AI solutions for Pennsylvania businesses
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which is the leading AI Company In Pennsylvania for healthcare systems?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the premier <strong>Artificial Intelligence Company In Pennsylvania</strong> specializing in healthcare AI solutions. We've worked with major Pennsylvania healthcare systems similar to UPMC, implementing AI for patient care optimization, diagnostic assistance, and operational efficiency. Our healthcare AI solutions have delivered 60% cost savings and improved patient outcomes across Pennsylvania medical facilities.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How much does AI implementation cost for Pennsylvania businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the top <strong>AI Firm In Pennsylvania</strong>, we offer flexible pricing starting from $15,000 for basic AI automation projects. Our Pennsylvania clients typically see ROI within 3-6 months, with average cost savings of 60% on operational expenses. We provide customized quotes based on your specific business needs, whether you're in Philadelphia's financial district or Pittsburgh's manufacturing sector.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What AI services does the best AI Development Company In Pennsylvania offer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai, the leading <strong>AI Development Company In Pennsylvania</strong>, offers comprehensive AI services including machine learning development, natural language processing, computer vision, predictive analytics, and process automation. We specialize in Pennsylvania industry sectors: healthcare AI for UPMC-style systems, financial AI for PNC Bank-type institutions, telecommunications AI for Comcast-scale operations, and manufacturing AI for PPG Industries-type companies.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How long does AI project implementation take for Pennsylvania companies?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Service In Pennsylvania</strong> delivers projects 3x faster than traditional methods. Simple automation projects take 4-6 weeks, while complex AI systems require 3-6 months. We've completed 2100+ successful implementations across Pennsylvania, from Philadelphia startups to Pittsburgh enterprises, with our proven methodology ensuring faster delivery and guaranteed results.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which AI Company In Pennsylvania provides the best ROI for businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai stands out as the <strong>Best AI Company In Pennsylvania</strong> with proven ROI results. Our Pennsylvania clients achieve average cost savings of 60% and productivity increases of 3x. We've delivered successful AI implementations for healthcare, financial services, telecommunications, and manufacturing sectors throughout Pennsylvania, with case studies showing significant ROI across all major Pennsylvania business districts.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How do I choose the right AI Company In Pennsylvania for my business?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When selecting an <strong>Artificial Intelligence Company In Pennsylvania</strong>, consider experience (we have 2100+ implementations), industry expertise (healthcare, finance, telecom, manufacturing), local presence (Philadelphia and Pittsburgh offices), proven results (60% cost savings average), and comprehensive services. Metic.ai offers all these advantages plus dedicated Pennsylvania business support and enterprise-grade security for your peace of mind.
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
              Ready to Partner with the Leading <strong>AI Company In Pennsylvania</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ Pennsylvania businesses that trust Metic.ai as their premier 
              <strong>Artificial Intelligence Company In Pennsylvania</strong>. Get started with a free consultation 
              and discover how our AI solutions deliver 60% cost savings for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your Pennsylvania AI Journey
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Pennsylvania</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Philadelphia</span>
                <span>•</span>
                <span>Pittsburgh</span>
                <span>•</span>
                <span>Allentown</span>
                <span>•</span>
                <span>Erie</span>
                <span>•</span>
                <span>Harrisburg</span>
                <span>•</span>
                <span>Lancaster</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

