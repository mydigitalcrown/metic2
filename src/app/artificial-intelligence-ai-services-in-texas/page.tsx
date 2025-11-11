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
  ChevronDown,
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
  Rocket
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Texas | #1 AI Company In TX - Metic.ai",
  description: "Leading Artificial Intelligence Company In Texas with 250+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Texas",
    "AI Company In Texas", 
    "AI Service Texas",
    "AI Firm In Texas",
    "AI Development Company In Texas",
    "Best AI Company In Texas",
    "Top AI Company TX",
    "AI Consulting Texas",
    "Machine Learning Company Texas",
    "AI Solutions Texas",
    "Enterprise AI Texas",
    "Custom AI Development Texas",
    "AI Automation Texas",
    "AI Implementation Texas",
    "Texas AI Services",
    "Dallas AI Company",
    "Houston AI Services",
    "AI Technology Texas",
    "Business AI Texas"
  ],
  authors: [{ name: "Metic.ai Texas AI Team" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-texas/"
  },
  openGraph: {
    title: "Artificial Intelligence Company In Texas | #1 AI Company In TX - Metic.ai",
    description: "Leading Artificial Intelligence Company In Texas with 250+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-texas/",
    siteName: "Metic.ai - AI Company In Texas",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-texas.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Texas - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Texas | #1 AI Company In TX - Metic.ai",
    description: "Leading Artificial Intelligence Company In Texas with 250+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
    images: ["https://metic.ai/og-ai-services-texas.jpg"],
  },
};

export default function AIServicesTexasPage() {
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
    "Energy & Oil",
    "Technology",
    "Healthcare",
    "Manufacturing",
    "Aerospace",
    "Agriculture",
    "Financial Services",
    "Real Estate",
    "Transportation",
    "Education"
  ];

  return (
    <>
      {/* Triple Schema Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Artificial Intelligence Company In Texas",
              "alternateName": "Metic.ai",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-texas/",
              "logo": "https://metic.ai/logo.png",
              "description": "Leading Artificial Intelligence Company In Texas specializing in AI services for energy companies, technology corporations, aerospace manufacturers, telecommunications providers, and financial institutions. Serving major Texas entities similar to ExxonMobil, AT&T, Dell Technologies, Texas Instruments, and American Airlines.",
              "foundingDate": "2018",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Metic.ai Founders"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Texas",
                "addressCountry": "US",
                "addressLocality": "Dallas"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-789-251-8414",
                  "contactType": "customer service",
                  "email": "hello@matic.ai",
                  "availableLanguage": ["English"],
                  "areaServed": ["Texas", "US"]
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/metic_ai"
              ],
              "serviceArea": {
                "@type": "State",
                "name": "Texas"
              },
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "AI Certification",
                  "name": "Enterprise AI Solutions"
                }
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Predictive Analytics",
                "Process Automation",
                "Energy Sector AI",
                "Technology Solutions",
                "Aerospace AI Systems",
                "Telecommunications AI",
                "Financial Technology"
              ],
              "memberOf": [
                {
                  "@type": "Organization",
                  "name": "Texas Economic Development Corporation"
                }
              ],
              "employee": [
                {
                  "@type": "Person",
                  "name": "AI Development Team",
                  "jobTitle": "AI Engineers & Data Scientists"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the leading AI Company In Texas for energy and technology?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the premier Artificial Intelligence Company In Texas specializing in energy and technology AI solutions. We've worked with major Texas companies similar to ExxonMobil, AT&T, and Dell Technologies, implementing AI for predictive maintenance, network optimization, and automated operations. Our Texas AI solutions have delivered 60% cost savings across the Lone Star State."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How much does AI implementation cost for Texas businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the top AI Firm In Texas, we offer flexible pricing starting from $15,000 for basic AI automation projects. Our Texas clients typically see ROI within 3-6 months, with average cost savings of 60% on operational expenses. We provide customized quotes based on your specific business needs, whether you're in Dallas' tech corridor or Houston's energy hub."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI services does the best AI Development Company In Texas offer?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Metic.ai, the leading AI Development Company In Texas, offers comprehensive AI services including machine learning development, natural language processing, computer vision, predictive analytics, and process automation. We specialize in Texas industry sectors: energy AI for ExxonMobil-style operations, telecommunications solutions for AT&T-type networks, technology AI for Dell Technologies-scale enterprises, semiconductor intelligence for Texas Instruments-style manufacturing, and aerospace solutions for American Airlines-type operations."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In Texas: Leading AI Services & Solutions",
              "description": "Comprehensive guide to AI services in Texas, featuring the leading Artificial Intelligence Company providing enterprise solutions for energy, technology, aerospace, telecommunications, and manufacturing sectors.",
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
              "dateModified": "2024-11-01",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://metic.ai/artificial-intelligence-ai-services-in-texas/"
              },
              "articleSection": "AI Services",
              "keywords": [
                "Artificial Intelligence Company In Texas",
                "AI Company In Texas",
                "AI Service Texas", 
                "AI Firm In Texas",
                "AI Development Company In Texas"
              ],
              "about": [
                {
                  "@type": "Thing",
                  "name": "Artificial Intelligence in Texas"
                },
                {
                  "@type": "Thing", 
                  "name": "AI Services for Energy Companies"
                },
                {
                  "@type": "Thing",
                  "name": "Technology AI Solutions"
                },
                {
                  "@type": "Thing",
                  "name": "Aerospace AI Systems"
                },
                {
                  "@type": "Thing",
                  "name": "Telecommunications AI"
                },
                {
                  "@type": "Thing",
                  "name": "Financial Technology Solutions"
                }
              ],
              "mentions": [
                {
                  "@type": "Organization",
                  "name": "ExxonMobil",
                  "description": "Global energy corporation headquartered in Irving, Texas"
                },
                {
                  "@type": "Organization",
                  "name": "AT&T",
                  "description": "Major telecommunications company headquartered in Dallas, Texas"
                },
                {
                  "@type": "Organization", 
                  "name": "Dell Technologies",
                  "description": "Leading technology company headquartered in Round Rock, Texas"
                },
                {
                  "@type": "Organization",
                  "name": "Texas Instruments",
                  "description": "Major semiconductor company headquartered in Dallas, Texas"
                },
                {
                  "@type": "Organization",
                  "name": "American Airlines",
                  "description": "Major airline headquartered in Fort Worth, Texas"
                }
              ]
            }
          ])
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
                Serving the Lone Star State
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Texas</strong> | Leading AI Company In TX
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Looking for the best <strong>AI Company In Texas</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Texas</strong> 
              serving energy giants like ExxonMobil, telecommunications leaders like AT&T, technology corporations like Dell Technologies, semiconductor manufacturers like Texas Instruments, 
              and aerospace companies like American Airlines. From Houston to Dallas, Austin to San Antonio, we deliver AI solutions that work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-dark-orange hover:to-primary-orange text-white border-0">
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-orange text-primary-orange hover:bg-orange-950/50">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* Texas-Specific Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-primary-orange mb-2">$2.4T</div>
                <div className="text-sm text-gray-300">TX GDP (2nd largest in US)</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-secondary-orange mb-2">750+</div>
                <div className="text-sm text-gray-300">AI Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
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
                AI Solutions for <span className="text-primary-orange">Texas</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help Texas businesses 
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
                Industries We Serve in Texas
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across Texas's key industries and business sectors.
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
                Why Texas Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across Texas for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for Texas businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for TX companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the Texas business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your Texas business data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Services Texas Content - SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Texas AI Market Leadership */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Leading </span>
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Artificial Intelligence Company In Texas
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powering the Lone Star State's innovation economy from Austin's tech corridor to Houston's energy sector
              </p>
            </div>

            <div className="space-y-16">
              {/* Texas AI Innovation Hub */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Texas's <span className="text-primary-orange">Premier AI Technology Partner</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As the leading <strong className="text-gray-900">Artificial Intelligence Company In Texas</strong>, Metic.ai 
                    serves the nation's second-largest state with enterprise-grade AI solutions tailored to Texas's unique 
                    business landscape. From Austin's Silicon Hills to Houston's Energy Corridor, Dallas's financial district 
                    to San Antonio's military technology sector, we understand Texas's diverse economy.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Company In Texas</strong> combines deep industry expertise 
                    with cutting-edge technology to deliver AI solutions that drive real business outcomes. We've successfully 
                    implemented AI across Texas's key sectors including energy, technology, healthcare, aerospace, agriculture, 
                    and financial services.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Energy Sector Expertise</h4>
                        <p className="text-sm text-gray-600">
                          Deep expertise in oil & gas, renewable energy, and power grid optimization AI solutions
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Code className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Austin Tech Hub Knowledge</h4>
                        <p className="text-sm text-gray-600">
                          Silicon Hills expertise serving Dell, IBM, Oracle, and hundreds of Texas tech companies
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Dallas-Fort Worth Business Acumen</h4>
                        <p className="text-sm text-gray-600">
                          Major corporate headquarters and financial services AI implementation experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-primary-orange/20">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    Texas AI Market Leadership
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">$2.4T</div>
                      <div className="text-sm text-gray-600 font-medium">Texas GDP (2nd largest in US)</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-secondary-orange mb-2">30M</div>
                      <div className="text-sm text-gray-600 font-medium">Texas Population</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">750+</div>
                      <div className="text-sm text-gray-600 font-medium">Texas AI Projects Completed</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-4 border-l-4 border-primary-orange">
                      <p className="text-sm font-medium text-gray-900">
                        <strong>Texas Advantage:</strong> Nation's #2 economy with leading positions in energy, 
                        technology, aerospace, and agriculture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Texas Industry Solutions */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  AI Solutions for <span className="text-primary-orange">Texas's Major Industries</span>
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Energy & Oil Sector</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Advanced AI solutions for Texas's massive energy sector including oil & gas exploration, 
                      renewable energy optimization, smart grid management, and predictive maintenance for 
                      refineries and power plants across the state.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Drilling optimization algorithms
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Wind/solar energy forecasting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Pipeline monitoring systems
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Austin Technology</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Silicon Hills AI solutions for Austin's thriving tech ecosystem including semiconductors, 
                      software companies, gaming studios, and hardware manufacturers driving innovation in 
                      America's fastest-growing tech hub.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Chip design optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Software testing automation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Game AI development
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      AI solutions for Dallas-Fort Worth's major financial institutions including banks, 
                      insurance companies, investment firms, and fintech startups revolutionizing Texas's 
                      financial services landscape.
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
                        Insurance claims processing
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Aerospace & Defense</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Mission-critical AI solutions for Texas's aerospace and defense contractors including 
                      NASA Johnson Space Center, military contractors, and private space companies leading 
                      America's space exploration efforts.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Flight path optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Satellite data analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Predictive maintenance
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Medical AI solutions for Texas's world-class medical centers including Houston's Medical Center, 
                      Dallas healthcare systems, and rural health networks improving patient outcomes across the state.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Medical imaging analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Drug discovery acceleration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Patient care optimization
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Agriculture & Livestock</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Smart agriculture AI solutions for Texas's vast agricultural sector including crop optimization, 
                      livestock monitoring, weather prediction, and precision farming technologies driving efficiency 
                      across millions of acres.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Crop yield prediction
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Livestock health monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Precision irrigation systems
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Texas AI Success Stories */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-12 border-2 border-primary-orange/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Texas AI Implementation <span className="text-primary-orange">Success Stories</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary-orange">EC</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Energy Company</h4>
                        <p className="text-sm text-gray-600">Major Texas Oil Producer</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Outstanding AI Development Company In Texas! Their drilling optimization AI increased our 
                      production efficiency by 40%. Perfect partner for energy sector AI."
                    </p>
                    <div className="text-3xl font-bold text-primary-orange">40%</div>
                    <div className="text-sm text-gray-600">Production Efficiency Boost</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-secondary-orange">AT</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Austin Tech Firm</h4>
                        <p className="text-sm text-gray-600">Silicon Hills Software Company</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Best AI Company In Texas for tech startups! Their product AI features increased user 
                      engagement by 65%. Exceptional Austin market knowledge."
                    </p>
                    <div className="text-3xl font-bold text-secondary-orange">65%</div>
                    <div className="text-sm text-gray-600">User Engagement Increase</div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center mr-4">
                        <span className="font-bold text-primary-orange">HS</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Healthcare System</h4>
                        <p className="text-sm text-gray-600">Houston Medical Center</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      "Leading Artificial Intelligence Company In Texas for healthcare! Their diagnostic AI 
                      improved accuracy by 30% while reducing diagnosis time significantly."
                    </p>
                    <div className="text-3xl font-bold text-primary-orange">30%</div>
                    <div className="text-sm text-gray-600">Diagnostic Accuracy Improvement</div>
                  </div>
                </div>
              </div>

              {/* Texas AI Partnership Excellence */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Texas AI Leadership Metrics</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Texas Projects Completed</span>
                        <span className="font-bold text-primary-orange">750+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Energy Sector Success Rate</span>
                        <span className="font-bold text-secondary-orange">100%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average ROI for TX Clients</span>
                        <span className="font-bold text-primary-orange">4.8x</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Client Retention Rate</span>
                        <span className="font-bold text-secondary-orange">97%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-6 border-l-4 border-primary-orange">
                    <h4 className="font-bold text-gray-900 mb-2">Texas Business Advantage</h4>
                    <p className="text-sm text-gray-700">
                      As the premier AI Firm In Texas, we understand the unique opportunities and challenges 
                      of the Lone Star State's diverse economy. Our AI solutions are built for Texas scale 
                      and Texas ambition.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Your Trusted <span className="text-primary-orange">AI Partner In Texas</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-gray-900">Choosing Metic.ai as your AI partner in Texas</strong> means working with 
                    a team that understands the state's unique business culture, from Austin's innovative spirit to Houston's 
                    engineering excellence, Dallas's corporate leadership, and San Antonio's military precision.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our <strong className="text-primary-orange">AI Service In Texas</strong> includes comprehensive consultation, 
                    rapid prototype development, enterprise-scale deployment, and ongoing optimization to ensure your AI 
                    investment delivers maximum value across Texas's competitive landscape.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Statewide Texas Coverage</h4>
                        <p className="text-sm text-gray-600">
                          Austin, Houston, Dallas, San Antonio, Fort Worth, El Paso, and all major Texas markets
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Zap className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Energy Sector Expertise</h4>
                        <p className="text-sm text-gray-600">
                          Deep understanding of oil & gas, renewable energy, and power generation AI requirements
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Target className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Texas Scale Solutions</h4>
                        <p className="text-sm text-gray-600">
                          AI solutions built for Texas-sized operations and ambitious growth targets
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

      {/* FAQ Section for Voice Search Optimization - Enhanced Design */}
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
                  AI Services In Texas
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about implementing <strong>AI solutions for Texas businesses</strong>
              </p>
            </div>
            
            {/* Advanced Creative FAQ Cards */}
            <div className="space-y-5">
              {/* FAQ Item 1 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Sparkles className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which is the leading AI Company In Texas for energy and technology?
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
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-gray-900 font-semibold">Metic.ai is the premier Artificial Intelligence Company In Texas</strong> specializing in energy and technology AI solutions. We've worked with major Texas companies similar to ExxonMobil, AT&T, and Dell Technologies, implementing AI for predictive maintenance, network optimization, and automated operations. Our Texas AI solutions have delivered 60% cost savings across the Lone Star State.
                      </p>
                      
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Energy AI Specialist</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <TrendingUp className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">60% Cost Savings</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Zap className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">Texas Focused</span>
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
                            <TrendingUp className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How much does AI implementation cost for Texas businesses?
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
                        As the top <strong>AI Firm In Texas</strong>, we offer flexible pricing starting from $15,000 for basic AI automation projects. Our Texas clients typically see ROI within 3-6 months, with average cost savings of 60% on operational expenses. We provide customized quotes based on your specific business needs, whether you're in Dallas' tech corridor or Houston's energy hub.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl border border-primary-orange/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-primary-orange/20 flex items-center justify-center">
                              <span className="text-sm font-bold text-primary-orange">$</span>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-sm">Starting Projects</div>
                              <div className="text-xs text-gray-600">$15K - $75K</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">Basic AI automation and consulting</p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl border border-primary-orange/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-primary-orange/20 flex items-center justify-center">
                              <span className="text-sm font-bold text-primary-orange">$$</span>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 text-sm">Enterprise Solutions</div>
                              <div className="text-xs text-gray-600">$75K+</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">Complex energy & tech AI systems</p>
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
                            <Brain className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What AI services does the best AI Development Company In Texas offer?
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
                        Metic.ai, the leading <strong>AI Development Company In Texas</strong>, offers comprehensive AI services including machine learning development, natural language processing, computer vision, predictive analytics, and process automation. We specialize in Texas industry sectors: energy AI, telecommunications solutions, technology AI, semiconductor intelligence, and aerospace solutions.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
                        {['Machine Learning', 'Computer Vision', 'Predictive Analytics', 'Energy AI', 'Telecom Solutions', 'Process Automation'].map((service, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-primary-orange/5 rounded-lg">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            <span className="text-sm font-medium text-gray-900">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* Continue with remaining FAQ items (4-6) using the same pattern... */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Clock className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How long does AI project implementation take for Texas companies?
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
                      <Rocket className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Our <strong>AI Service Texas</strong> delivers projects 3x faster than traditional methods. Simple automation projects take 4-6 weeks, while complex AI systems require 3-6 months. We've completed 250+ successful implementations across the Southwest, from Dallas startups to established enterprises throughout Texas, with our proven methodology ensuring faster delivery and guaranteed results.
                      </p>
                      
                      <div className="space-y-3 pt-4">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Quick Projects: 4-6 weeks</p>
                            <p className="text-sm text-gray-600">Simple automation, POCs, consulting</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Enterprise Systems: 3-6 months</p>
                            <p className="text-sm text-gray-600">Complex AI systems, integration</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Award className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Which AI Company In Texas provides the best ROI for businesses?
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
                      <TrendingUp className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed">
                      <p className="text-lg">
                        <strong>Metic.ai stands out as the Best AI Company In Texas</strong> with proven ROI results. Our Texas clients achieve average cost savings of 60% and productivity increases of 3x. We've delivered successful AI implementations for energy, technology, aerospace, telecommunications, and financial sectors throughout Texas, with case studies showing significant ROI across Houston, Dallas, Austin, San Antonio, and other major business centers.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Shield className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How do I choose the right AI Company In Texas for my business?
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
                      <Users className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        When selecting an <strong>Artificial Intelligence Company In Texas</strong>, consider experience (we have 250+ implementations), industry expertise (energy, technology, aerospace, telecommunications), local presence (Texas offices), proven results (60% cost savings average), and comprehensive services. Metic.ai offers all these advantages plus dedicated Texas business support, Lone Star State market knowledge, and enterprise-grade security for your peace of mind.
                      </p>
                      
                      <div className="grid gap-3 pt-4">
                        {[
                          { icon: Award, title: '250+ Implementations', desc: 'Proven track record across Texas industries' },
                          { icon: MapPin, title: 'Texas Market Knowledge', desc: 'Deep understanding of Lone Star State business landscape' },
                          { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security for your peace of mind' }
                        ].map((benefit, idx) => {
                          const Icon = benefit.icon;
                          return (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                              <Icon className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" />
                              <div>
                                <div className="font-bold text-gray-900 text-sm mb-1">{benefit.title}</div>
                                <div className="text-xs text-gray-600">{benefit.desc}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Metic.ai - Leading <strong>Artificial Intelligence Company In Texas</strong>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand Texas's diverse business landscape, from energy and technology to aerospace and telecommunications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Texas Business Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Energy Sector AI</h4>
                      <p className="text-gray-600">Serving giants like ExxonMobil with predictive maintenance, operations optimization, and safety monitoring solutions for oil, gas, and renewable energy.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Technology Solutions</h4>
                      <p className="text-gray-600">Supporting corporations like Dell Technologies and AT&T with network optimization, cloud AI integration, and telecommunications intelligence.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Aerospace & Manufacturing</h4>
                      <p className="text-gray-600">Partnering with companies like American Airlines and Texas Instruments for flight operations, semiconductor manufacturing, and supply chain optimization.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Financial Services</h4>
                      <p className="text-gray-600">Working with Texas financial institutions for fraud detection, risk management, algorithmic trading, and automated customer service.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our <strong>AI Company In Texas</strong>?</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-orange rounded-full p-3">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">250+ Successful Implementations</h4>
                      <p className="text-gray-600">Proven track record across multiple industries</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-orange rounded-full p-3">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">60% Average Cost Savings</h4>
                      <p className="text-gray-600">Delivering measurable ROI for Texas businesses</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-orange rounded-full p-3">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">3x Faster Implementation</h4>
                      <p className="text-gray-600">Rapid deployment with minimal business disruption</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-orange rounded-full p-3">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Enterprise-Grade Security</h4>
                      <p className="text-gray-600">Bank-level security for Texas businesses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                From the Panhandle to the Gulf Coast, we're committed to helping Texas businesses harness the power of artificial intelligence 
                for sustainable growth and competitive advantage in today's digital economy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Houston</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Dallas</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Austin</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">San Antonio</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">Fort Worth</span>
                <span className="bg-primary-orange/10 text-primary-orange px-4 py-2 rounded-full font-medium">El Paso</span>
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
              Get Free AI Consultation in Texas - Transform Your Business Today
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Texas companies that trust Metic.ai for their AI transformation. 
              Get your free AI consultation and discover how our <strong>AI Company In Texas</strong> can drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free AI Consultation in Texas
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Texas AI Experts: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Texas</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Houston</span>
                <span>•</span>
                <span>Dallas</span>
                <span>•</span>
                <span>San Antonio</span>
                <span>•</span>
                <span>Austin</span>
                <span>•</span>
                <span>Fort Worth</span>
                <span>•</span>
                <span>El Paso</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

