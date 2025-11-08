"use client";

import Link from "next/link";
import { Button } from "../components/ui/Button";
import { useState } from "react";
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
  ChevronDown,
  Rocket,
  Globe,
  Play,
  Quote
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Maryland | #1 AI Company In Old Line State - Metic.ai",
  description: "Leading Artificial Intelligence Company In Maryland with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Maryland",
    "AI Company In Maryland", 
    "AI Service In Maryland",
    "AI Firm In Maryland",
    "AI Development Company In Maryland",
    "Best AI Company In Maryland",
    "Top AI Company Maryland",
    "Artificial Intelligence Services Maryland",
    "AI Solutions Company Maryland",
    "Machine Learning Company Maryland",
    "AI Consulting Firm Maryland",
    "AI Technology Company Maryland",
    "AI automation Maryland",
    "AI software company Maryland",
    "artificial intelligence consulting Maryland",
    "AI integration services Maryland",
    "custom AI development Maryland",
    "enterprise AI solutions Maryland",
    "AI ML company Maryland"
  ],
  authors: [{ name: "Metic.ai Maryland AI Team" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Artificial Intelligence Company In Maryland | #1 AI Company In Old Line State - Metic.ai",
    description: "Leading Artificial Intelligence Company In Maryland with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development for Maryland businesses.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-maryland/",
    type: "website",
    locale: "en_US",
    siteName: "Metic.ai - AI Company In Maryland",
    images: [
      {
        url: "https://metic.ai/og-ai-company-maryland.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence Company In Maryland - Metic.ai",
        type: "image/jpeg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Maryland | AI Company In Old Line State",
    description: "Leading AI Company In Maryland delivering enterprise artificial intelligence solutions. Expert AI development, machine learning & automation services with proven results.",
    images: ["https://metic.ai/og-ai-company-maryland.jpg"],
    site: "@metic_ai",
    creator: "@metic_ai"
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-maryland/",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code"
  },
  category: "Technology",
  classification: "Business Services"
};

export default function AIServicesMarylandPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Maryland business operations with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Maryland's biotech, government, and cybersecurity industries.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for your Maryland business requirements and goals.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Maryland business data into actionable insights with advanced analytics platforms.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation in Maryland.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Maryland enterprises and growing businesses.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const industries = [
    "Biotechnology & Life Sciences",
    "Government & Defense",
    "Cybersecurity",
    "Healthcare & Medical",
    "Financial Services",
    "Information Technology",
    "Aerospace & Maritime",
    "Education & Research",
    "Real Estate & Construction",
    "Transportation & Logistics"
  ];

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 rounded-full px-6 py-2 mb-6">
                <Quote className="w-5 h-5 text-primary-orange" />
                <span className="text-primary-orange font-medium">Client Success Stories</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What Maryland Businesses Say About Our <span className="text-primary-orange">AI Solutions</span>
              </h2>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how leading companies across Maryland have transformed their operations with our AI services.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Dr. Sarah Mitchell",
                  role: "CTO, BioTech Innovations",
                  location: "Baltimore, Maryland",
                  content: "Metic.ai transformed our drug discovery process with custom AI models. As the leading AI Company In Maryland, they understand the unique challenges of biotech research. Our R&D efficiency increased by 300%.",
                  rating: 5,
                  company: "BioTech Innovations",
                  industry: "Biotechnology"
                },
                {
                  name: "Colonel James Rodriguez",
                  role: "Digital Innovation Director",
                  location: "Annapolis, Maryland", 
                  content: "Working with this Artificial Intelligence Company In Maryland was exceptional. Their security-first approach and government compliance expertise made them our go-to AI Firm In Maryland.",
                  rating: 5,
                  company: "DoD Contractor",
                  industry: "Government & Defense"
                },
                {
                  name: "Michael Chen",
                  role: "CISO, SecureNet Maryland",
                  location: "Rockville, Maryland",
                  content: "Best AI Development Company In Maryland hands down! Their cybersecurity AI solutions detected 99.8% of threats in our network. Incredible results from Maryland's top AI Service provider.",
                  rating: 5,
                  company: "SecureNet Maryland", 
                  industry: "Cybersecurity"
                }
              ].map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-primary-orange/20 relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-orange-400/0 group-hover:from-primary-orange/5 group-hover:to-orange-400/5 transition-all duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Author Info */}
                      <div className="border-t pt-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">{testimonial.name}</div>
                            <div className="text-sm text-gray-600">{testimonial.role}</div>
                            <div className="text-xs text-primary-orange flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3" />
                              {testimonial.location}
                            </div>
                          </div>
                        </div>
                        
                        {/* Company Badge */}
                        <div className="mt-4 inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-xs">
                          <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                          <span className="text-gray-600">{testimonial.industry}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="text-center">
              <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">2,100+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
                
                <div className="w-px h-12 bg-gray-200"></div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">4.9/5</div>
                    <div className="text-sm text-gray-600">Avg. Rating</div>
                  </div>
                </div>
                
                <div className="w-px h-12 bg-gray-200"></div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced FAQ Section with Creative Accordion */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FF6B35 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-orange/10 rounded-full px-6 py-2 mb-6">
                <Target className="w-5 h-5 text-primary-orange" />
                <span className="text-primary-orange font-medium">Frequently Asked Questions</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Everything About Our <span className="text-primary-orange">AI Company In Maryland</span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Get answers to common questions about our Artificial Intelligence services in Maryland.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {[
                {
                  question: "Which is the best Artificial Intelligence Company In Maryland?",
                  answer: "Metic.ai is the leading Artificial Intelligence Company In Maryland with 2100+ successful AI implementations. We provide comprehensive AI services including machine learning, custom AI development, and enterprise AI solutions with proven 60% cost savings and 3x faster delivery. Our specialized expertise in Maryland's biotech, government, cybersecurity, and healthcare industries makes us the preferred choice for businesses across the Old Line State."
                },
                {
                  question: "What AI services does the top AI Company In Maryland provide?",
                  answer: "As the premier AI Company In Maryland, Metic.ai provides AI integration & deployment, machine learning solutions, custom AI development, data analytics & BI, generative AI services, and data engineering for businesses across the Old Line State. Our services are specifically tailored for Maryland's key industries including biotechnology, government & defense, cybersecurity, healthcare, and financial services."
                },
                {
                  question: "How to choose the right AI Development Company In Maryland?",
                  answer: "Choose an AI Development Company In Maryland with proven experience, successful implementations, industry expertise, and local presence. Metic.ai offers all these with 2100+ completed projects and deep understanding of Maryland's business landscape. Look for companies with expertise in your specific industry, strong security practices, compliance knowledge, and a track record of delivering measurable ROI."
                },
                {
                  question: "What makes Metic.ai the best AI Firm In Maryland?",
                  answer: "Metic.ai is the best AI Firm In Maryland due to our proven expertise, 98% client satisfaction, 4.5x average ROI increase, 24/7 support, and deep understanding of Maryland's biotech, government, cybersecurity and healthcare industries. Our team combines global AI development capabilities with local Maryland market knowledge, ensuring solutions that are both technically advanced and business-relevant."
                },
                {
                  question: "How much does AI development cost for Maryland businesses?",
                  answer: "AI development costs vary based on project complexity, industry requirements, and implementation scope. As a leading AI Service In Maryland, we offer competitive pricing with 60% cost savings compared to traditional development. We provide transparent pricing, flexible engagement models, and proven ROI with most clients seeing returns within 6-12 months."
                },
                {
                  question: "Does your AI Company In Maryland serve all industries?",
                  answer: "Yes, our Artificial Intelligence Company In Maryland serves diverse industries including biotechnology & life sciences, government & defense, cybersecurity, healthcare & medical, financial services, information technology, aerospace & maritime, education & research, real estate & construction, and transportation & logistics. We have specialized expertise in Maryland's key economic sectors."
                }
              ].map((faq, index) => {
                const [isOpen, setIsOpen] = useState(false);
                
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-primary-orange/50 transition-all duration-300">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between group-hover:bg-gray-800/30 transition-colors duration-300"
                      >
                        <h3 className="text-lg font-semibold text-white group-hover:text-primary-orange transition-colors duration-300 pr-8">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          <ChevronDown 
                            className={`w-6 h-6 text-primary-orange transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-500 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-8 pb-6">
                          <div className="w-full h-px bg-gradient-to-r from-primary-orange/20 to-orange-400/20 mb-6"></div>
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">
                Still have questions about our AI services in Maryland?
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary-orange to-orange-500 hover:from-primary-orange/90 hover:to-orange-500/90 text-white px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  Get Free AI Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Maryland Focus */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary-orange/10 rounded-full px-4 py-2 mb-6">
                    <Globe className="w-4 h-4 text-primary-orange" />
                    <span className="text-primary-orange font-medium text-sm">About Our AI Firm In Maryland</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Leading <span className="text-primary-orange">Artificial Intelligence Company In Maryland</span>
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    As Maryland's most trusted <strong>AI Company In Maryland</strong>, Metic.ai has been at the forefront 
                    of artificial intelligence innovation for over 4 years. We specialize in delivering cutting-edge AI solutions 
                    that drive measurable business outcomes for companies across the Old Line State.
                  </p>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our <strong>AI Development Company In Maryland</strong> serves diverse industries from Baltimore's biotech corridors 
                    to Annapolis government facilities, from Rockville's cybersecurity firms to the healthcare institutions throughout 
                    Maryland. We understand the unique challenges and opportunities in Maryland's business landscape.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                      <span className="text-gray-700">Expert AI development team with Maryland market expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                      <span className="text-gray-700">Proven track record with 2100+ successful AI implementations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                      <span className="text-gray-700">Specialized knowledge in biotech, government, and cybersecurity AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-orange flex-shrink-0" />
                      <span className="text-gray-700">Comprehensive support from consultation to deployment</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="group">
                      <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Schedule Free Consultation
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button variant="outline" size="lg" className="group">
                      <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      +91 7892518414
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual Content */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-orange/10 to-orange-400/10 rounded-3xl p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Maryland Businesses Choose Us</h3>
                    
                    <div className="space-y-6">
                      {[
                        {
                          icon: Brain,
                          title: "AI Expertise",
                          description: "Deep expertise in machine learning, natural language processing, and computer vision"
                        },
                        {
                          icon: Shield,
                          title: "Security First", 
                          description: "Enterprise-grade security protocols suitable for government and defense contractors"
                        },
                        {
                          icon: Zap,
                          title: "Rapid Deployment",
                          description: "Fast implementation with minimal business disruption and maximum value"
                        }
                      ].map((feature, index) => (
                        <div key={index} className="flex gap-4 group">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <feature.icon className="w-6 h-6 text-primary-orange" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Background Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-primary-orange/5 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-400/5 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-orange to-orange-500 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
                             linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
                             linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), 
                             linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Maryland Business with AI?
            </h2>
            
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ successful businesses who have chosen Metic.ai as their trusted 
              <strong> AI Company In Maryland</strong>. Get started with a free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-primary-orange hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                >
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Get Free AI Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Call: +91 7892518414
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-orange-100 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No Commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}