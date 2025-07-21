import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Brain, 
  Code, 
  Database, 
  BarChart3,
  Zap,
  Cloud,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Shield,
  Target,
  Settings,
  Workflow,
  Activity,
  Cpu,
  Sparkles,
  FileText
} from "lucide-react";

export const metadata = {
  title: "AI Services & Solutions | Comprehensive Artificial Intelligence Consulting - Metic.ai",
  description: "Complete AI and data science services including machine learning, generative AI, custom AI development, data engineering, and business intelligence solutions. Transform your business with expert AI consulting.",
  keywords: "AI services, artificial intelligence solutions, machine learning consulting, AI development, data science services, AI consulting, business intelligence, data analytics, AI transformation",
  authors: [{ name: "Metic.ai Services Team" }],
  robots: "index, follow",
  openGraph: {
    title: "AI Services & Solutions | Comprehensive Artificial Intelligence Consulting - Metic.ai",
    description: "Complete AI and data science services to transform your business with cutting-edge artificial intelligence solutions.",
    url: "https://metic.ai/services/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "AI Services & Solutions by Metic.ai",
      },
    ],
  },
  alternates: {
    canonical: "https://metic.ai/services/",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your existing business processes with enterprise-grade deployment strategies.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      features: ["Enterprise Integration", "API Development", "Cloud Deployment", "Performance Optimization"],
      color: "blue"
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT, GPT-4, and custom generative models for content creation and automation.",
      icon: Sparkles,
      href: "/generative-ai-services",
      features: ["ChatGPT Integration", "Content Generation", "Image & Video AI", "Custom Models"],
      color: "purple"
    },
    {
      title: "Custom AI Development",
      description: "Build bespoke AI solutions tailored to your unique business requirements and technical specifications.",
      icon: Code,
      href: "/custom-ai-development",
      features: ["Custom Models", "Neural Networks", "AI Architecture", "Model Training"],
      color: "green"
    },
    {
      title: "Machine Learning",
      description: "Advanced ML solutions including predictive analytics, classification, and deep learning applications.",
      icon: Brain,
      href: "/machine-learning",
      features: ["Predictive Analytics", "Classification", "Deep Learning", "Time Series"],
      color: "orange"
    },
    {
      title: "Data Insights & Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
      icon: BarChart3,
      href: "/data-insights",
      features: ["Business Intelligence", "Data Visualization", "Performance Analytics", "Reporting"],
      color: "indigo"
    },
    {
      title: "Data Engineering",
      description: "Build robust data infrastructure with modern ETL pipelines, data warehousing, and real-time processing.",
      icon: Database,
      href: "/data-engineering",
      features: ["ETL Pipelines", "Data Warehousing", "Real-time Processing", "Cloud Architecture"],
      color: "red"
    }
  ];

  const industries = [
    { name: "Financial Services", icon: TrendingUp, description: "Risk analytics, fraud detection, algorithmic trading" },
    { name: "Healthcare", icon: Activity, description: "Medical AI, patient analytics, drug discovery" },
    { name: "Retail & E-commerce", icon: Users, description: "Recommendation engines, inventory optimization" },
    { name: "Manufacturing", icon: Settings, description: "Predictive maintenance, quality control" },
    { name: "Technology", icon: Cpu, description: "Product analytics, user behavior, automation" },
    { name: "Energy & Utilities", icon: Workflow, description: "Smart grids, demand forecasting" }
  ];

  const whyChooseUs = [
    {
      icon: Brain,
      title: "AI Expertise",
      description: "Deep expertise in machine learning, deep learning, and cutting-edge AI technologies with proven track record."
    },
    {
      icon: Target,
      title: "Business Results",
      description: "Focus on measurable business outcomes and ROI with clear success metrics and performance indicators."
    },
    {
      icon: Shield,
      title: "Enterprise Grade",
      description: "Production-ready solutions with enterprise security, scalability, and compliance requirements."
    },
    {
      icon: Users,
      title: "Full Partnership",
      description: "End-to-end support from strategy to implementation with ongoing optimization and maintenance."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              AI <span className="text-primary-orange">Services</span> & Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive artificial intelligence and data science services to transform your business. 
              From strategy to implementation, we deliver AI solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services">
                <Button variant="primary" size="lg">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our <span className="text-primary-orange">AI Services</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complete AI and data science solutions covering every aspect of your digital transformation journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses: Record<string, string> = {
                  blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
                  purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
                  green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
                  orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
                  indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
                  red: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white"
                };
                
                return (
                  <Link key={index} href={service.href} className="group">
                    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${colorClasses[service.color]}`}>
                        <IconComponent className="w-8 h-8 transition-all duration-300" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary-orange transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-primary-orange group-hover:text-primary-orange/80 font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our AI Implementation Process
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Systematic approach to AI transformation ensuring successful outcomes and maximum ROI
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-bold mb-4">Discovery & Strategy</h3>
                <p className="text-gray-600 text-sm">
                  Assess your business needs, data readiness, and define AI strategy aligned with business goals.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-bold mb-4">Proof of Concept</h3>
                <p className="text-gray-600 text-sm">
                  Develop and validate AI prototypes to demonstrate feasibility and potential business impact.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-bold mb-4">Development & Training</h3>
                <p className="text-gray-600 text-sm">
                  Build production-ready AI solutions with robust training, testing, and optimization processes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  4
                </div>
                <h3 className="text-lg font-bold mb-4">Integration & Deployment</h3>
                <p className="text-gray-600 text-sm">
                  Seamlessly integrate AI solutions into existing systems with minimal business disruption.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  5
                </div>
                <h3 className="text-lg font-bold mb-4">Support & Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Ongoing monitoring, maintenance, and continuous improvement to maximize AI performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Industries We Serve
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering AI solutions across diverse industries with domain-specific expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary-orange" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{industry.name}</h3>
                    <p className="text-gray-600 text-sm">{industry.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Choose Metic.ai?
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Partner with AI experts who understand both technology and business impact
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <IconComponent className="w-8 h-8 text-primary-orange" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Proven Track Record
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering measurable results across AI implementations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">200+</div>
                <p className="text-gray-600">AI Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">95%</div>
                <p className="text-gray-600">Client Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">3x</div>
                <p className="text-gray-600">Average ROI Improvement</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">50+</div>
                <p className="text-gray-600">Enterprise Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Complete AI Service Spectrum
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From strategy to implementation, we cover every aspect of AI transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <FileText className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold mb-2">AI Strategy & Consulting</h3>
                <p className="text-gray-600 text-sm">Strategic planning and roadmap development</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Brain className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-bold mb-2">Machine Learning</h3>
                <p className="text-gray-600 text-sm">Predictive models and intelligent algorithms</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Sparkles className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold mb-2">Generative AI</h3>
                <p className="text-gray-600 text-sm">Content creation and automation solutions</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Database className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="font-bold mb-2">Data Engineering</h3>
                <p className="text-gray-600 text-sm">Robust data infrastructure and pipelines</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="font-bold mb-2">Business Intelligence</h3>
                <p className="text-gray-600 text-sm">Data visualization and analytics platforms</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Cloud className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-bold mb-2">Cloud AI Solutions</h3>
                <p className="text-gray-600 text-sm">Scalable cloud-based AI implementations</p>
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you identify opportunities, develop solutions, and implement 
              AI technologies that drive real business value and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Journey
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +91-78925-18414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by leading organizations worldwide</p>
              <div className="flex flex-wrap justify-center gap-8 text-orange-100">
                <span>Fortune 500 Companies</span>
                <span>•</span>
                <span>Healthcare Organizations</span>
                <span>•</span>
                <span>Financial Institutions</span>
                <span>•</span>
                <span>Technology Startups</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
