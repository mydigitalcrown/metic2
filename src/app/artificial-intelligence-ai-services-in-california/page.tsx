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
  title: "AI Services California | Premier Artificial Intelligence Solutions & Development - Metic.ai",
  description: "California's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for CA businesses.",
  keywords: "AI services California, artificial intelligence California, machine learning California, AI consulting CA, AI development California, custom AI solutions CA, AI automation California, enterprise AI California, Silicon Valley AI",
  authors: [{ name: "Metic.ai California AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "AI Services California | Premier Artificial Intelligence Solutions - Metic.ai",
    description: "California's leading AI company with 500+ successful projects. Custom AI development, machine learning, and enterprise solutions with proven ROI.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-california/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-california.jpg",
        width: 1200,
        height: 630,
        alt: "AI Services California - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services California | Custom AI Development - Metic.ai",
    description: "Transform your California business with enterprise AI solutions. 3x faster development, 60% cost savings, 500+ successful projects.",
    images: ["https://metic.ai/og-ai-services-california.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-california/",
  },
};

export default function AIServicesCaliforniaPage() {
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
    "Technology",
    "Entertainment",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Agriculture",
    "Aerospace",
    "Biotech",
    "Real Estate",
    "Renewable Energy"
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
            "name": "Metic.ai - AI Services California",
            "image": "https://metic.ai/logo.png",
            "description": "California's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for California businesses.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "California",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.7783",
              "longitude": "-119.4179"
            },
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-california/",
            "telephone": "+1-789-251-8414",
            "email": "info@metic.ai",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "State",
              "name": "California"
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
              "Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", 
              "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim",
              "Santa Ana", "Riverside", "Stockton", "Irvine", "Chula Vista"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1800"
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
                Serving California's Innovation Ecosystem
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              AI That Actually Works for{' '}
              <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                California
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Look, everyone's talking about AI, but most companies are still figuring out how to make it work. 
              We've built AI solutions that actually move the needle for California businesses - from tech startups in San Francisco 
              to entertainment companies in LA. Real results, not just fancy demos.
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

            {/* California-Specific Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-primary-orange mb-2">$3.2T</div>
                <div className="text-sm text-gray-300">CA GDP (5th largest globally)</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-secondary-orange mb-2">40%</div>
                <div className="text-sm text-gray-300">US Tech Industry</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-primary-orange mb-2">500+</div>
                <div className="text-sm text-gray-300">AI Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="text-3xl font-bold text-secondary-orange mb-2">24/7</div>
                <div className="text-sm text-gray-300">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                What We Actually Do
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                AI Solutions That{' '}
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Make Business Sense
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Here's the thing - AI isn't magic. It's a tool that can automate your boring tasks, predict what your customers want, 
                and help you make smarter decisions. We build the kind of AI that pays for itself.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const gradientClasses = {
                  blue: "from-primary-orange to-secondary-orange",
                  purple: "from-secondary-orange to-light-orange", 
                  green: "from-dark-orange to-primary-orange",
                  orange: "from-primary-orange to-light-orange",
                  indigo: "from-dark-orange to-secondary-orange",
                  red: "from-primary-orange to-dark-orange"
                };
                
                return (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradientClasses[service.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-gray-900 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <Link href={service.href} className="inline-flex items-center text-primary-orange hover:text-dark-orange font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* California Industries */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                Who We Work With
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                California Industries We{' '}
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Actually Understand
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not trying to be everything to everyone. We focus on industries where we know how to make AI work 
                because we've done it before and understand the real challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Tech Companies</h3>
                <p className="text-gray-600 mb-4">We get it - you need AI that scales with your product and doesn't break when you hit traffic spikes. Built for Silicon Valley pace.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-orange" />
                    Code review automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-orange" />
                    User behavior prediction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-orange" />
                    Smart A/B testing
                  </li>
                </ul>
              </div>

              <div className="group p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-orange to-light-orange rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Entertainment & Media</h3>
                <p className="text-gray-600 mb-4">Hollywood moves fast. We build AI that helps you understand your audience and create content that connects.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-orange" />
                    Audience sentiment tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-orange" />
                    Content recommendation engines
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-orange" />
                    Smart content personalization
                  </li>
                </ul>
              </div>

              <div className="group p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-dark-orange to-primary-orange rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Finance & FinTech</h3>
                <p className="text-gray-600 mb-4">Money matters. We build AI that spots fraud, assesses risk, and helps you make smarter financial decisions with confidence.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-dark-orange" />
                    Real-time fraud detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-dark-orange" />
                    Smart risk assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-dark-orange" />
                    Automated compliance monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Why Work With Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                What Makes{' '}
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Metic Different
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not the biggest AI company, but we might be the most practical. We focus on building AI that works, 
                not AI that sounds impressive in meetings.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">We Actually Get Business</h3>
                <p className="text-gray-600">We don't just build cool tech - we solve real business problems. Every AI solution we create has to make financial sense.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-orange to-light-orange rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Results You Can Measure</h3>
                <p className="text-gray-600">No vague promises about transformation. We set clear metrics upfront and deliver AI that moves your bottom line.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-dark-orange to-primary-orange rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">No BS Communication</h3>
                <p className="text-gray-600">We explain things in plain English. No technical jargon, no buzzword bingo. Just clear communication about what we're building and why.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-dark-orange rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Your Data Stays Yours</h3>
                <p className="text-gray-600">We're not interested in your data for our own purposes. We build secure systems and keep your information exactly where it belongs - with you.</p>
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
              Ready to Build AI That Actually Works?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Stop wondering if AI can help your business. Let's have a real conversation about what's possible, 
              what makes sense, and what it would actually cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Let's Talk About Your Business
                </Button>
              </Link>
              <Link href="tel:+17892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Working with companies across California</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Los Angeles</span>
                <span>•</span>
                <span>San Francisco</span>
                <span>•</span>
                <span>San Diego</span>
                <span>•</span>
                <span>San Jose</span>
                <span>•</span>
                <span>Sacramento</span>
                <span>•</span>
                <span>Oakland</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
