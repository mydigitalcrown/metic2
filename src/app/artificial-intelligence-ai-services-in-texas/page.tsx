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
  title: "Artificial Intelligence Company In Texas | #1 AI Company In TX - Metic.ai",
  description: "Leading Artificial Intelligence Company In Texas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
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
    description: "Leading Artificial Intelligence Company In Texas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
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
    description: "Leading Artificial Intelligence Company In Texas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions About <strong>AI Services In Texas</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about implementing AI solutions for Texas businesses
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which is the leading AI Company In Texas for energy and technology?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the premier <strong>Artificial Intelligence Company In Texas</strong> specializing in energy and technology AI solutions. We've worked with major Texas companies similar to ExxonMobil, AT&T, and Dell Technologies, implementing AI for predictive maintenance, network optimization, and automated operations. Our Texas AI solutions have delivered 60% cost savings across the Lone Star State.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How much does AI implementation cost for Texas businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the top <strong>AI Firm In Texas</strong>, we offer flexible pricing starting from $15,000 for basic AI automation projects. Our Texas clients typically see ROI within 3-6 months, with average cost savings of 60% on operational expenses. We provide customized quotes based on your specific business needs, whether you're in Dallas' tech corridor or Houston's energy hub.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What AI services does the best AI Development Company In Texas offer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai, the leading <strong>AI Development Company In Texas</strong>, offers comprehensive AI services including machine learning development, natural language processing, computer vision, predictive analytics, and process automation. We specialize in Texas industry sectors: energy AI for ExxonMobil-style operations, telecommunications solutions for AT&T-type networks, technology AI for Dell Technologies-scale enterprises, semiconductor intelligence for Texas Instruments-style manufacturing, and aerospace solutions for American Airlines-type operations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How long does AI project implementation take for Texas companies?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>AI Service Texas</strong> delivers projects 3x faster than traditional methods. Simple automation projects take 4-6 weeks, while complex AI systems require 3-6 months. We've completed 2100+ successful implementations across the Southwest, from Dallas startups to established enterprises throughout Texas, with our proven methodology ensuring faster delivery and guaranteed results.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which AI Company In Texas provides the best ROI for businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai stands out as the <strong>Best AI Company In Texas</strong> with proven ROI results. Our Texas clients achieve average cost savings of 60% and productivity increases of 3x. We've delivered successful AI implementations for energy, technology, aerospace, telecommunications, and financial sectors throughout Texas, with case studies showing significant ROI across Houston, Dallas, Austin, San Antonio, and other major business centers.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How do I choose the right AI Company In Texas for my business?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When selecting an <strong>Artificial Intelligence Company In Texas</strong>, consider experience (we have 2100+ implementations), industry expertise (energy, technology, aerospace, telecommunications), local presence (Texas offices), proven results (60% cost savings average), and comprehensive services. Metic.ai offers all these advantages plus dedicated Texas business support, Lone Star State market knowledge, and enterprise-grade security for your peace of mind.
                </p>
              </div>
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
                      <h4 className="font-semibold">2100+ Successful Implementations</h4>
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

