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
  title: "AI Services Mumbai | Premier Artificial Intelligence Solutions & Development - Metic.ai",
  description: "Mumbai's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for Mumbai businesses.",
  keywords: "AI services Mumbai, artificial intelligence Mumbai, machine learning Mumbai, AI consulting Mumbai, AI development Mumbai, custom AI solutions Mumbai, AI automation Mumbai, enterprise AI Mumbai, Fintech AI Mumbai, Entertainment AI Mumbai",
  authors: [{ name: "Metic.ai Mumbai AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "AI Services Mumbai | Premier Artificial Intelligence Solutions & Development - Metic.ai",
    description: "Mumbai's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for Mumbai businesses.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-mumbai/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-mumbai.jpg",
        width: 1200,
        height: 630,
        alt: "AI Services Mumbai - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services Mumbai | Premier Artificial Intelligence Solutions & Development - Metic.ai",
    description: "Mumbai's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings.",
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
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic.ai - AI Services Mumbai",
            "description": "Mumbai's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for Mumbai businesses.",
            "url": "https://metic.ai/artificial-intelligence-ai-services-in-mumbai/",
            "logo": "https://metic.ai/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-789-251-8414",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi", "Marathi"]
            },
            "sameAs": [
              "https://twitter.com/metic_ai",
              "https://linkedin.com/company/metic-ai"
            ],
            "service": {
              "@type": "Service",
              "name": "AI Services Mumbai",
              "description": "Custom AI development, machine learning, and artificial intelligence consulting for Mumbai businesses",
              "areaServed": {
                "@type": "City",
                "name": "Mumbai"
              }
            }
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
              AI Excellence in <span className="text-primary-orange">Mumbai</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Mumbai never sleeps, and neither does opportunity. From the financial capital of Nariman Point 
              to the entertainment hubs of Film City, we've helped 300+ Mumbai companies implement AI that 
              keeps pace with the city's relentless energy. Maximum city meets maximum AI potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+17892518414">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions about AI implementation in Mumbai? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Bring AI to Your Mumbai Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the growing number of Mumbai companies using AI to drive growth, 
              reduce costs, and stay competitive in India's commercial capital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start Your AI Journey Today
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-gray-900">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
