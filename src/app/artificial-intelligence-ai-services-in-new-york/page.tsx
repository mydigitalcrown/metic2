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
  title: "AI Services New York | Premier Artificial Intelligence Solutions & Development - Metic.ai",
  description: "New York's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for NY businesses.",
  keywords: "AI services New York, artificial intelligence New York, machine learning New York, AI consulting NY, AI development New York, custom AI solutions NY, AI automation New York, enterprise AI New York, NYC AI, Manhattan AI",
  authors: [{ name: "Metic.ai New York AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "AI Services New York | Premier Artificial Intelligence Solutions - Metic.ai",
    description: "New York's leading AI company with 500+ successful projects. Custom AI development, machine learning, and enterprise solutions with proven ROI.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-new-york/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-new-york.jpg",
        width: 1200,
        height: 630,
        alt: "AI Services New York - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services New York | Custom AI Development - Metic.ai",
    description: "Transform your New York business with enterprise AI solutions. 3x faster development, 60% cost savings, 500+ successful projects.",
    images: ["https://metic.ai/og-ai-services-new-york.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-new-york/",
  },
};

export default function AIServicesNewYorkPage() {
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
    "Financial Services",
    "Technology",
    "Media & Entertainment",
    "Real Estate",
    "Healthcare",
    "Fashion",
    "Advertising",
    "Manufacturing",
    "Education",
    "Tourism"
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
            "name": "Metic.ai - AI Services New York",
            "image": "https://metic.ai/logo.png",
            "description": "New York's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for New York businesses.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "New York",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.7128",
              "longitude": "-74.0060"
            },
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-new-york/",
            "telephone": "+1-789-251-8414",
            "email": "info@metic.ai",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "State",
              "name": "New York"
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
              "New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", 
              "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica",
              "White Plains", "Troy", "Niagara Falls", "Binghamton", "Freeport"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
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
                Serving the Empire State
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              AI That Moves at{' '}
              <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                New York Speed
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              New York doesn't wait for anyone, and neither should your AI. 
              We build intelligent systems that keep pace with the city that never sleeps - from Wall Street trading floors 
              to Manhattan startups and everything in between.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-dark-orange hover:to-primary-orange text-white border-0">
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-orange text-primary-orange hover:bg-orange-950/50">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* New York-Specific Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-primary-orange mb-2">$1.9T</div>
                <div className="text-sm text-gray-300">NY GDP (3rd largest in US)</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-secondary-orange mb-2">500+</div>
                <div className="text-sm text-gray-300">AI Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-primary-orange mb-2">96%</div>
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
                AI Solutions for <span className="text-primary-orange">New York</span> Businesses
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive artificial intelligence services designed to help New York businesses 
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
                Industries We Serve in New York
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering specialized AI solutions across New York's key industries and business sectors.
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
                Why New York Businesses Choose Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across New York for our expertise, results, and commitment to success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering AI solutions for New York businesses across all industries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
                <p className="text-gray-600">Data-driven AI solutions that deliver concrete ROI and business growth for NY companies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
                <p className="text-gray-600">Dedicated support and partnership with deep understanding of the New York business landscape.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards protecting your New York business data.</p>
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
              Ready to Transform Your New York Business with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading New York companies that trust Metic.ai for their AI transformation. 
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
              <p className="text-orange-200 mb-4">Trusted by businesses across New York</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>New York City</span>
                <span>•</span>
                <span>Buffalo</span>
                <span>•</span>
                <span>Rochester</span>
                <span>•</span>
                <span>Syracuse</span>
                <span>•</span>
                <span>Albany</span>
                <span>•</span>
                <span>Yonkers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
