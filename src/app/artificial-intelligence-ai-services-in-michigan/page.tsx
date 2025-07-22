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
  Calendar
} from "lucide-react";

export const metadata = {
  title: "AI Services Michigan | Premier Artificial Intelligence Solutions & Development - Metic.ai",
  description: "Michigan's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for MI businesses.",
  keywords: "AI services Michigan, artificial intelligence Michigan, machine learning Michigan, AI consulting MI, AI development Michigan, custom AI solutions MI, AI automation Michigan, enterprise AI Michigan",
  authors: [{ name: "Metic.ai Michigan AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "AI Services Michigan | Premier Artificial Intelligence Solutions - Metic.ai",
    description: "Michigan's leading AI company with 500+ successful projects. Custom AI development, machine learning, and enterprise solutions with proven ROI.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-michigan/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-michigan.jpg",
        width: 1200,
        height: 630,
        alt: "AI Services Michigan - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services Michigan | Custom AI Development - Metic.ai",
    description: "Transform your Michigan business with enterprise AI solutions. 3x faster development, 60% cost savings, 500+ successful projects.",
    images: ["https://metic.ai/og-ai-services-michigan.jpg"],
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
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Metic.ai - AI Services Michigan",
            "image": "https://metic.ai/logo.png",
            "description": "Michigan's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for MI businesses.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Michigan",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.3266",
              "longitude": "-84.5361"
            },
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-michigan/",
            "telephone": "+1-789-251-8414",
            "email": "info@metic.ai",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "State",
              "name": "Michigan"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for businesses"
                  }
                }
              ]
            },
            "areaServed": [
              "Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Lansing", 
              "Ann Arbor", "Flint", "Dearborn", "Livonia", "Westland",
              "Troy", "Farmington Hills", "Kalamazoo", "Wyoming", "Southfield"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1100"
            }
          })
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
              AI Services in <span className="text-primary-orange">Michigan</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your Michigan business with enterprise AI solutions. From Detroit's automotive innovation to Grand Rapids' manufacturing excellence, we deliver cutting-edge AI that drives growth across the Great Lakes State.
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

      {/* CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Transform Your Michigan Business with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Michigan companies that trust Metic.ai for their AI transformation. 
              Get started with a free consultation and discover how AI can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Journey
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by businesses across Michigan</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Detroit</span>
                <span>•</span>
                <span>Grand Rapids</span>
                <span>•</span>
                <span>Warren</span>
                <span>•</span>
                <span>Ann Arbor</span>
                <span>•</span>
                <span>Lansing</span>
                <span>•</span>
                <span>Flint</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
