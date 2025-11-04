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
  title: "Artificial Intelligence Company In Mumbai | #1 AI Company In Mumbai - Metic.ai",
  description: "Leading Artificial Intelligence Company In Mumbai with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Mumbai",
    "AI Company In Mumbai", 
    "AI Service In Mumbai",
    "AI Firm In Mumbai",
    "AI Development Company In Mumbai",
    "Best AI Company In Mumbai",
    "Top AI Company Mumbai",
    "AI Consulting Services Mumbai",
    "Machine Learning Company Mumbai",
    "AI Solutions Provider Mumbai",
    "Artificial Intelligence Services Mumbai",
    "AI Technology Company Mumbai",
    "Custom AI Development Mumbai",
    "Enterprise AI Solutions Mumbai",
    "AI Software Company Mumbai",
    "Mumbai AI Experts",
    "AI Implementation Services Mumbai",
    "Intelligent Automation Mumbai",
    "AI Innovation Company Mumbai"
  ],
  authors: [{ name: "Metic.ai - Artificial Intelligence Company In Mumbai" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Mumbai | #1 AI Company In Mumbai - Metic.ai",
    description: "Leading Artificial Intelligence Company In Mumbai with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-mumbai/",
    type: "website",
    siteName: "Metic.ai - AI Company In Mumbai",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-ai-services-mumbai.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Mumbai - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@metic_ai",
    creator: "@metic_ai",
    title: "Artificial Intelligence Company In Mumbai | #1 AI Company In Mumbai - Metic.ai",
    description: "Leading Artificial Intelligence Company In Mumbai with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-ai-services-mumbai.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-mumbai/",
  },
};

export default function AIServicesMumbaiPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Mumbai business operations with proven deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "orange" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Mumbai businesses and industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "orange" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Mumbai business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "orange" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Mumbai business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Mumbai.",
      icon: Sparkles,
      href: "/generative-ai",
      color: "orange" as const
    },
    {
      title: "AI Security & Compliance",
      description: "Protect your Mumbai business with AI-powered security solutions and compliance frameworks.",
      icon: Shield,
      href: "/ai-security",
      color: "orange" as const
    }
  ];

  const industries = [
    "Financial Services & Fintech",
    "Entertainment & Media",
    "E-commerce & Retail",
    "Healthcare & Pharmaceuticals",
    "Real Estate & Construction",
    "Manufacturing",
    "Transportation & Logistics",
    "Education & EdTech",
    "Telecommunications",
    "Government & Public Sector"
  ];

  const features = [
    {
      icon: Target,
      title: "Results-Driven AI",
      description: "AI solutions that deliver measurable ROI and business impact for Mumbai companies."
    },
    {
      icon: Clock,
      title: "Rapid Implementation",
      description: "Quick deployment with 3x faster delivery times compared to traditional AI development."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance for all AI implementations in Mumbai."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Mumbai-based AI experts providing ongoing support and optimization."
    }
  ];

  const stats = [
    { number: "300+", label: "Mumbai Clients" },
    { number: "3x", label: "Faster Delivery" },
    { number: "60%", label: "Cost Savings" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  const testimonials = [
    {
      quote: "Metic.ai transformed our fintech operations with AI that actually understands Mumbai's financial ecosystem. Outstanding results.",
      author: "Priya Sharma",
      company: "Mumbai FinTech Solutions",
      rating: 5
    },
    {
      quote: "Finally, an AI company that gets Mumbai's pace. They delivered exactly what they promised, on time and within budget.",
      author: "Rajesh Patel",
      company: "Entertainment Media Group",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "What AI services does Metic.ai offer in Mumbai?",
      answer: "We provide custom AI development, machine learning solutions, AI integration, data analytics, generative AI services, and AI security solutions specifically tailored for Mumbai businesses across all industries."
    },
    {
      question: "How quickly can you implement AI solutions for Mumbai businesses?",
      answer: "Our streamlined process delivers AI solutions 3x faster than traditional approaches, typically within 2-6 weeks depending on project scope and complexity."
    },
    {
      question: "Do you work with businesses across all of Mumbai?",
      answer: "Yes, we serve businesses throughout Mumbai, from Bandra-Kurla Complex and Lower Parel to Andheri and beyond, across all industries and company sizes."
    },
    {
      question: "What makes your AI solutions different from other providers?",
      answer: "We focus on practical AI that delivers real business results, not experimental technology. Our solutions are designed for reliability, security, and measurable ROI in Mumbai's fast-paced business environment."
    },
    {
      question: "Can you help with AI strategy and consulting?",
      answer: "Absolutely. We provide comprehensive AI consulting to help Mumbai businesses identify opportunities, develop strategies, and implement solutions that align with their goals and market conditions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for SEO - Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai - Artificial Intelligence Company In Mumbai",
            "description": "Leading Artificial Intelligence Company In Mumbai with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development serving Bandra-Kurla Complex, Lower Parel, Andheri and across Mumbai.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-mumbai/",
            "logo": "https://metic.ai/logo.png",
            "image": "https://metic.ai/og-ai-services-mumbai.jpg",
            "telephone": "+1-789-251-8414",
            "email": "hello@matic.ai",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India"
            },
            "areaServed": {
              "@type": "City",
              "name": "Mumbai",
              "addressRegion": "Karnataka"
            },
            "serviceArea": [
              {
                "@type": "Place",
                "name": "Bandra-Kurla Complex",
                "addressLocality": "Bengaluru"
              },
              {
                "@type": "Place", 
                "name": "Lower Parel",
                "addressLocality": "Bengaluru"
              },
              {
                "@type": "Place",
                "name": "Andheri",
                "addressLocality": "Bengaluru"
              },
              {
                "@type": "Place",
                "name": "Nariman Point",
                "addressLocality": "Bengaluru"
              },
              {
                "@type": "Place",
                "name": "Powai",
                "addressLocality": "Bengaluru"
              }
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning",
              "AI Development",
              "Data Analytics",
              "Automation Solutions",
              "Mumbai Business Technology",
              "Fintech AI Solutions",
              "Entertainment Technology"
            ],
            "memberOf": {
              "@type": "Organization",
              "name": "Mumbai AI & Technology Association"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Mumbai",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Integration & Deployment",
                    "description": "Enterprise AI integration services for Mumbai businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Solutions",
                    "description": "Custom ML algorithms and predictive analytics for Mumbai companies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Development",
                    "description": "Bespoke AI solutions for Mumbai business requirements"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "300",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Priya Sharma"
                },
                "reviewBody": "Best AI Company In Mumbai! Metic.ai transformed our fintech operations with cutting-edge AI solutions."
              }
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
                "name": "Which is the best Artificial Intelligence Company In Mumbai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai is recognized as the leading Artificial Intelligence Company In Mumbai, serving 2100+ businesses with proven AI solutions. We specialize in custom AI development, machine learning, and automation solutions for Mumbai companies across all industries."
                }
              },
              {
                "@type": "Question",
                "name": "What AI services does the top AI Company In Mumbai provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As the premier AI Company In Mumbai, Metic.ai provides comprehensive AI services including machine learning solutions, custom AI development, data analytics, automation platforms, and AI integration services specifically designed for Mumbai businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How much does AI development cost in Mumbai?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "AI development costs in Mumbai vary based on project complexity. Metic.ai offers competitive pricing with 60% cost savings compared to traditional development. We provide free consultations to Mumbai businesses to determine exact project costs and ROI potential."
                }
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take for Mumbai businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI implementation timelines for Mumbai businesses typically range from 2-6 months depending on project scope. Metic.ai delivers 3x faster implementation than industry standards while maintaining quality and ensuring successful deployment."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose a local AI Company In Mumbai vs international providers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choosing a local AI Company In Mumbai like Metic.ai provides advantages including understanding of local business challenges, on-site support, knowledge of Indian regulations, and partnerships with local technology ecosystems for better integration and results."
                }
              },
              {
                "@type": "Question",
                "name": "What industries does the leading Artificial Intelligence Company In Mumbai serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Metic.ai serves all major Mumbai industries including fintech innovation, entertainment technology, manufacturing automation, healthcare systems, e-commerce, real estate, and emerging technology sectors across all Mumbai business districts."
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
            "headline": "Artificial Intelligence Company In Mumbai | #1 AI Company In Mumbai",
            "description": "Leading Artificial Intelligence Company In Mumbai with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development.",
            "image": "https://metic.ai/og-ai-services-mumbai.jpg",
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
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai/artificial-intelligence-ai-services-in-mumbai/"
            },
            "articleSection": "AI Services",
            "keywords": ["Artificial Intelligence Company In Mumbai", "AI Company In Mumbai", "AI Service In Mumbai", "Mumbai AI Development"],
            "about": [
              {
                "@type": "Thing",
                "name": "Artificial Intelligence",
                "description": "AI technology and solutions for Mumbai businesses"
              },
              {
                "@type": "Place",
                "name": "Mumbai",
                "description": "AI services and solutions across Mumbai city"
              }
            ],
            "mentions": [
              {
                "@type": "Organization",
                "name": "Tata Group",
                "description": "Major Mumbai-based conglomerate utilizing AI solutions"
              },
              {
                "@type": "Organization", 
                "name": "Reliance Industries",
                "description": "Mumbai corporation implementing AI technology"
              },
              {
                "@type": "Organization",
                "name": "Mahindra Group",
                "description": "Mumbai business group leveraging AI solutions"
              },
              {
                "@type": "Organization",
                "name": "Bajaj Group",
                "description": "Mumbai financial services company using AI"
              },
              {
                "@type": "Organization",
                "name": "Godrej Group",
                "description": "Mumbai conglomerate adopting AI technology"
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
              <span className="text-sm font-medium text-orange-300">Serving Mumbai</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
              <strong>Artificial Intelligence Company In Mumbai</strong> | Leading <span className="text-primary-orange">AI Company In Mumbai</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>AI Company In Mumbai</strong>? Metic.ai is the premier <strong>Artificial Intelligence Company In Mumbai</strong> 
              serving 2100+ businesses with proven AI solutions. From the financial capital of Nariman Point to the entertainment hubs of Film City, 
              we deliver AI that transforms Mumbai businesses. Which AI service do you need? Our expert team provides custom AI development, 
              machine learning solutions, and automation platforms with 60% cost savings and 3x faster delivery than traditional providers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-gray-900">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-orange mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8 border-t border-gray-700">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-4 h-4" />
                <span className="text-sm">Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive AI Solutions for Mumbai
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From fintech innovation to entertainment automation, we deliver AI solutions 
              that thrive in Mumbai's dynamic business ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary-orange"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-50 rounded-xl group-hover:bg-primary-orange group-hover:text-white transition-colors">
                    <service.icon className="w-6 h-6 text-primary-orange group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary-orange transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-primary-orange font-medium">
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Mumbai Businesses Choose Metic.ai
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We understand Mumbai's unique business environment. Fast-paced, competitive, and demanding. 
                Our AI solutions are built to match that energy and deliver results at Mumbai speed.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="p-2 bg-orange-50 rounded-lg">
                      <feature.icon className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-orange to-secondary-orange p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Business?</h3>
              <p className="mb-8 opacity-90">
                Join 300+ Mumbai companies already using AI to drive growth and efficiency. 
                Get started with a free consultation today.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free AI readiness assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Custom solution roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>ROI projections & timeline</span>
                </div>
              </div>

              <Link href="/contact" className="inline-block mt-8">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Schedule Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve in Mumbai
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the specific needs of Mumbai's diverse industries, 
              from financial services to entertainment and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="text-lg font-medium text-gray-900">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Mumbai Businesses Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our Mumbai clients say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-gray-700">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions About <span className="text-primary-orange">AI Company In Mumbai</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about choosing the right Artificial Intelligence Company In Mumbai for your business needs.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  Which is the best Artificial Intelligence Company In Mumbai?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai is recognized as the leading <strong>Artificial Intelligence Company In Mumbai</strong>, serving 2100+ businesses with proven AI solutions. 
                    We specialize in custom AI development, machine learning, and automation solutions for Mumbai companies across all industries. Our track record 
                    includes successful implementations for major Mumbai corporations and growing businesses throughout the city.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  What AI services does the top AI Company In Mumbai provide?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    As the premier <strong>AI Company In Mumbai</strong>, Metic.ai provides comprehensive AI services including machine learning solutions, 
                    custom AI development, data analytics, automation platforms, and AI integration services specifically designed for Mumbai businesses. 
                    We serve industries from fintech and entertainment to manufacturing and healthcare across Bandra-Kurla Complex, Lower Parel, and citywide.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  How much does AI development cost in Mumbai?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    AI development costs in Mumbai vary based on project complexity. Metic.ai offers competitive pricing with 60% cost savings compared to 
                    traditional development. We provide free consultations to Mumbai businesses to determine exact project costs and ROI potential. 
                    Our transparent pricing and proven delivery methods ensure maximum value for your AI investment.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  How long does AI implementation take for Mumbai businesses?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    AI implementation timelines for Mumbai businesses typically range from 2-6 months depending on project scope. Metic.ai delivers 
                    3x faster implementation than industry standards while maintaining quality and ensuring successful deployment. Our agile methodology 
                    and experienced Mumbai-based team accelerate delivery without compromising on results.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  Why choose a local AI Company In Mumbai vs international providers?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    Choosing a local <strong>AI Company In Mumbai</strong> like Metic.ai provides advantages including understanding of local business challenges, 
                    on-site support, knowledge of Indian regulations, and partnerships with local technology ecosystems for better integration and results. 
                    We understand Mumbai's unique business landscape from financial services to entertainment industry requirements.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-orange text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">Q</div>
                  What industries does the leading Artificial Intelligence Company In Mumbai serve?
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 leading-relaxed">
                    Metic.ai serves all major Mumbai industries including fintech innovation, entertainment technology, manufacturing automation, 
                    healthcare systems, e-commerce, real estate, and emerging technology sectors across all Mumbai business districts. 
                    Our expertise spans from traditional Mumbai industries to cutting-edge startups driving India's digital transformation.
                  </p>
                </div>
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
                  About Metic.ai - <span className="text-primary-orange">Artificial Intelligence Company In Mumbai</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    As the leading <strong>Artificial Intelligence Company In Mumbai</strong>, Metic.ai has established itself as the trusted AI partner 
                    for businesses across India's commercial capital. Since our founding, we've served 2100+ companies, from emerging fintech startups in 
                    Bandra-Kurla Complex to established entertainment giants in Film City.
                  </p>
                  <p>
                    Our deep understanding of Mumbai's business ecosystem - from Tata Group's diverse operations to Reliance Industries' innovation initiatives, 
                    Mahindra Group's automotive excellence, Bajaj Group's financial services, and Godrej Group's consumer solutions - positions us uniquely 
                    to deliver AI solutions that align with local industry needs and regulatory requirements.
                  </p>
                  <p>
                    What sets us apart as the premier <strong>AI Company In Mumbai</strong> is our commitment to practical, results-driven artificial intelligence. 
                    We understand Mumbai's pace - fast, competitive, and demanding. Our team combines global AI expertise with local Mumbai market knowledge, 
                    ensuring every solution we deliver drives measurable business value and competitive advantage in India's financial capital.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">Mumbai Businesses Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">99%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary-orange" />
                    Mumbai AI Excellence
                  </h3>
                  <p className="text-gray-600">
                    Recognized across Mumbai for delivering transformative AI solutions that drive real business results. 
                    Our portfolio includes successful implementations across all major Mumbai industries and business sectors.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary-orange" />
                    Local Partnership Approach
                  </h3>
                  <p className="text-gray-600">
                    We believe in building lasting partnerships with Mumbai businesses. Our local presence ensures dedicated support, 
                    understanding of regional challenges, and integration with Mumbai's technology and business ecosystem.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary-orange" />
                    Proven Mumbai Results
                  </h3>
                  <p className="text-gray-600">
                    Our Mumbai clients achieve average ROI increases of 4.5x, cost reductions of 60%, and implementation speeds 3x faster 
                    than industry standards. These results reflect our deep expertise and commitment to Mumbai business success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with the Leading <span className="text-primary-orange">Artificial Intelligence Company In Mumbai</span>?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join 2100+ Mumbai businesses that trust Metic.ai as their premier <strong>AI Company In Mumbai</strong>. 
              Get started with a free consultation and discover how our AI solutions can transform your business with 60% cost savings and 3x faster delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-gray-900">
                  Call: +1-789-251-8414
                </Button>
              </Link>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-orange-100">
                Trusted Across Mumbai Industries
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Fintech Innovation</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Entertainment Tech</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Manufacturing AI</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-orange-100">Healthcare Solutions</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-4">Serving Mumbai businesses with AI excellence</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100 text-sm">
                <span>Bandra-Kurla Complex</span>
                <span>•</span>
                <span>Lower Parel</span>
                <span>•</span>
                <span>Nariman Point</span>
                <span>•</span>
                <span>Andheri East</span>
                <span>•</span>
                <span>Powai</span>
                <span>•</span>
                <span>Film City</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

