import Link from "next/link";
import { ArrowRight, Brain, BarChart3, Code, Zap, CheckCircle, Star, MessageSquare, Shield, Users, TrendingUp, Award, Sparkles, Database, Target, Lightbulb, Phone, Mail } from "lucide-react";
import { Button } from "./components/ui/Button";
import { organizationSchema } from "../lib/schemas";

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Artificial Intelligence Company in Michigan | Top AI Company In Michigan - Metic AI",
  "description": "Leading AI company in Michigan delivering intelligent solutions that transform businesses. Expert AI integration, custom development, machine learning, and data engineering services.",
  "url": "https://metic.ai/",
  "mainEntity": {
    "@id": "https://metic.ai/#organization"
  },
  "about": {
    "@type": "Organization",
    "@id": "https://metic.ai/#organization"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://metic.ai/"
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary-orange/20 to-secondary-orange/30 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-primary-orange/20 border border-primary-orange/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary-orange" />
                <span className="text-sm font-medium text-white">AI-Driven Engineering • AI Experts • 3x Faster Delivery</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                Build with <span className="text-primary-orange">AI Power</span>
                <br />
                Launch <span className="text-secondary-orange">3x Faster</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We're AI-driven engineers who leverage AI and cutting-edge tools to deliver exceptional software
                solutions in record time. Get enterprise-quality results at startup speeds and
                budget-friendly costs.
              </p>
            </div>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">40-60%</div>
                <div className="text-sm text-gray-300">Average Project Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">3x</div>
                <div className="text-sm text-gray-300">Faster Time-to-Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">100%</div>
                <div className="text-sm text-gray-300">AI-Powered Features</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-orange mb-2">500+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-primary-orange hover:bg-primary-orange/90 text-white px-8 py-4 text-lg">
                  🚀 Start Building Now
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                  See AI-Powered Projects
                </Button>
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-white">🚀 3x Faster Development</span>
                <span className="text-blue-300 text-xs">AI-accelerated coding and testing</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-white">💰 60% Cost Reduction</span>
                <span className="text-green-300 text-xs">Efficient AI-driven processes</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-white">⚡ 24/7 AI Monitoring</span>
                <span className="text-purple-300 text-xs">Continuous optimization</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-orange-400" />
                <span className="text-white">🎯 99% Accuracy Rate</span>
                <span className="text-orange-300 text-xs">AI-powered quality assurance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Accelerated Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              AI-Accelerated Services
            </h2>
            <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent Solutions for Modern Business
            </p>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
              Every service powered by AI for maximum efficiency, speed, and cost-effectiveness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* AI Integration */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/30">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-white h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">AI Integration & Deployment</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Seamlessly integrate AI solutions into your existing business operations with enterprise-grade deployment strategies.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">⚡ Reduced bugs & faster testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">🤖 Automated transaction monitoring</span>
                </div>
              </div>
              <Link href="/ai-integration-and-deployment" className="inline-flex items-center font-semibold text-primary-orange hover:text-primary-orange/80 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Machine Learning */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/30">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="text-white h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Machine Learning Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced ML algorithms and predictive analytics tailored for your specific industry requirements.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">⚡ Faster wallet setup & flow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">🤖 Dynamic yield modeling</span>
                </div>
              </div>
              <Link href="/machine-learning" className="inline-flex items-center font-semibold text-primary-orange hover:text-primary-orange/80 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Custom AI Development */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/30">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="text-white h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Custom AI Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI-accelerated development delivering tailored solutions 3x faster than traditional methods.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">⚡ 30% faster protocol launch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">🤖 AI-driven process mapping</span>
                </div>
              </div>
              <Link href="/custom-ai-development" className="inline-flex items-center font-semibold text-primary-orange hover:text-primary-orange/80 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Data Analytics */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/30">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="text-white h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Data Analytics & BI</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI-enhanced strategy, systems, and workflows to modernize your entire business stack.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">⚡ Faster ROI with smarter planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">🤖 AI Integration</span>
                </div>
              </div>
              <Link href="/data-insights" className="inline-flex items-center font-semibold text-primary-orange hover:text-primary-orange/80 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Generative AI */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/30">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="text-white h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Generative AI Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Smart applications with AI features built-in, from concept to deployment in record time.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">⚡ 70% faster delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">🤖 AI-assisted coding</span>
                </div>
              </div>
              <Link href="/generative-ai-services" className="inline-flex items-center font-semibold text-primary-orange hover:text-primary-orange/80 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Data Engineering */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/30">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="text-white h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Data Engineering</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI-optimized infrastructure with automated deployment and intelligent scaling solutions.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">⚡ 60% faster development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">🤖 Multi-AI platform expertise</span>
                </div>
              </div>
              <Link href="/data-engineering" className="inline-flex items-center font-semibold text-primary-orange hover:text-primary-orange/80 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AI-Driven Metic.AI Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Why Choose AI-Driven Metic.AI
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don't just use AI as a buzzword - we're AI experts who've revolutionized software development. Our AI-first approach delivers
                enterprise-quality solutions at unprecedented speed and cost-effectiveness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="text-white h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-4">AI-Driven Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Leveraging AI and advanced tools for 3x faster development cycles
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="text-white h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-4">Lightning-Fast Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI-accelerated workflows deliver projects 50-80% faster than industry standards
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-white h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-4">Cost-Effective Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI efficiency reduces development costs by 40-60% without compromising quality
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="text-white h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-4">Agile AI Methodology</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI-enhanced agile processes with real-time optimization and quality assurance
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="text-white h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-4">24/7 AI-Powered Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Intelligent monitoring and automated issue resolution for continuous operation
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="text-white h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-4">Future-Proof Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI-optimized, scalable solutions designed for tomorrow's technology landscape
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link href="/about" className="inline-flex items-center text-primary-orange font-semibold hover:text-primary-orange/80 transition-colors">
                Discover Our AI Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-orange mb-2">200+</div>
                  <div className="text-sm text-gray-600">AI-Powered Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-orange mb-2">3x</div>
                  <div className="text-sm text-gray-600">Faster Development</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-orange mb-2">60%</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Brain className="w-6 h-6 text-primary-orange" />
                    <span className="text-lg font-bold text-primary-orange">🤖</span>
                  </div>
                  <div className="text-sm text-gray-600">Proven AI Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                What Our AI-Powered Clients Say
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from businesses that chose AI-driven development with Metic.ai.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Sarah Johnson</h4>
                    <p className="text-gray-600 text-sm">CTO, TechStart Inc.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-primary-orange" />
                  <span className="text-sm font-medium text-primary-orange">🤖</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Metic.ai's AI-driven approach delivered our enterprise platform in just 8 weeks -
                  half the time our previous vendor quoted. The quality and innovation exceeded all
                  expectations."
                </p>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Enterprise Platform</span>
                    <span className="text-sm text-primary-orange font-medium">⚡ 50% faster delivery</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Michael Chen</h4>
                    <p className="text-gray-600 text-sm">Founder, GrowthLabs</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-primary-orange" />
                  <span className="text-sm font-medium text-primary-orange">🤖</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Working with Metic.ai's AI-powered team was revolutionary. They built our
                  AI-integrated marketplace at 60% less cost than competitors, with superior functionality."
                </p>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">AI Marketplace</span>
                    <span className="text-sm text-primary-orange font-medium">⚡ 60% cost savings</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    L
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Lisa Rodriguez</h4>
                    <p className="text-gray-600 text-sm">Operations Director, DataFlow Solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-primary-orange" />
                  <span className="text-sm font-medium text-primary-orange">🤖</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "The AI integration by Metic.ai automated 85% of our processes. ROI achieved in 4
                  months, and their rapid development cycle kept us ahead of competition."
                </p>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Process Automation</span>
                    <span className="text-sm text-primary-orange font-medium">⚡ 85% automation achieved</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 text-primary-orange font-semibold">
                <span className="text-2xl">🚀</span>
                <span>Join 200+ businesses that chose AI-driven development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-orange via-secondary-orange to-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Ready to Build at AI Speed?
            </h2>
            <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Join 200+ businesses that chose AI-driven development. Get your project
              delivered 3x faster and 60% more cost-effectively than traditional development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  🤖 Get AI-Powered Quote Now
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange px-8 py-4 text-lg font-semibold">
                  See AI Success Stories
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto text-sm">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-orange-100">Free AI Consultation</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-orange-100">24h Response Time</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-orange-100">No Hidden Costs</span>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold text-yellow-300">Special Offer</span>
              </div>
              <p className="text-orange-100">
                Mention "AI-DRIVEN" for 20% off your first AI-powered project
              </p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-orange-200 mb-4">Trusted by Michigan businesses and beyond</p>
              <div className="flex flex-wrap justify-center gap-6 text-orange-100 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1-789-251-8414</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@metic.ai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Latest AI Insights
            </h2>
            <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest thoughts on AI trends, case studies, and industry insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-primary-orange/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-orange text-white px-3 py-1 rounded-full text-xs font-medium">
                    AI Manufacturing
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-xl mb-4 group-hover:text-primary-orange transition-colors">
                  How AI is Transforming Michigan Manufacturing
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover how local manufacturers are using AI to improve efficiency, reduce costs, and stay competitive in the global market.
                </p>
                <Link href="#" className="inline-flex items-center text-primary-orange font-semibold hover:text-primary-orange/80 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
            
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-green-500/20 to-secondary-orange/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Customer AI
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-xl mb-4 group-hover:text-primary-orange transition-colors">
                  The Future of Customer Service AI
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  What this really means is better customer experiences, lower operational costs, and 24/7 intelligent support capabilities.
                </p>
                <Link href="#" className="inline-flex items-center text-primary-orange font-semibold hover:text-primary-orange/80 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
            
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-light-orange/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    AI Security
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-xl mb-4 group-hover:text-primary-orange transition-colors">
                  Data Privacy in AI Implementation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Here's the thing about AI privacy: it doesn't have to be complicated. Learn our best practices for secure AI deployment.
                </p>
                <Link href="#" className="inline-flex items-center text-primary-orange font-semibold hover:text-primary-orange/80 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 md:text-lg">
                Got questions about AI implementation? We've got answers.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">How long does AI implementation typically take?</h3>
                <p className="text-gray-600">
                  Most projects take 3-6 months from initial consultation to full deployment. Simple integrations 
                  can be faster, while complex custom solutions may take longer. We'll give you a realistic timeline 
                  during our initial assessment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">What's the typical ROI for AI projects?</h3>
                <p className="text-gray-600">
                  Our clients typically see 200-400% ROI within the first year. This comes from increased efficiency, 
                  reduced manual work, and better decision-making. We track these metrics throughout implementation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">Do we need technical expertise in-house?</h3>
                <p className="text-gray-600">
                  Not at all. We handle the technical complexity while training your team on the user-friendly interfaces. 
                  Our solutions are designed for business users, not just technical teams.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">How do you ensure data security?</h3>
                <p className="text-gray-600">
                  We use enterprise-grade encryption, comply with industry standards, and can work within your existing 
                  security protocols. Your data never leaves your control unless you specifically choose cloud deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Understanding AI Implementation in Michigan
              </h2>
              <p className="text-gray-600 md:text-lg">
                Let's break down what AI implementation really looks like for Michigan businesses.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Michigan AI Advantage</h3>
                  <p className="text-gray-600">
                    Michigan has always been about innovation and manufacturing excellence. Now we're seeing the same 
                    drive applied to artificial intelligence. Companies across the state are discovering that AI isn't 
                    just for tech giants anymore. Small manufacturers in Grand Rapids are using predictive maintenance. 
                    Healthcare systems in Ann Arbor are improving patient outcomes with AI diagnostics. Detroit startups 
                    are building the next generation of intelligent automotive systems.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Real Business Impact</h3>
                  <p className="text-gray-600">
                    What this really means is that AI is solving actual business problems, not just creating flashy demos. 
                    We work with companies that need to reduce costs, improve quality, and serve customers better. 
                    The technology is just the tool. The real value comes from understanding your specific challenges 
                    and building solutions that fit your workflow, not the other way around.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Beyond the Hype</h3>
                  <p className="text-gray-600">
                    Here's the thing about AI implementation: success comes from focusing on practical applications, 
                    not bleeding-edge research. We help businesses identify where AI can make the biggest difference 
                    in their operations. Sometimes that's automating data entry. Sometimes it's predicting equipment 
                    failures. Sometimes it's personalizing customer experiences. The key is starting with problems 
                    that actually matter to your bottom line.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Path Forward</h3>
                  <p className="text-gray-600">
                    Michigan businesses are practical. They want solutions that work, not theories that might work someday. 
                    That's exactly how we approach AI development. We start with pilot projects that prove value quickly, 
                    then scale what works. Our clients appreciate this approach because it minimizes risk while maximizing 
                    the potential for real impact. Every successful AI implementation starts with understanding the business 
                    first, then applying the right technology to solve specific problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Start Your AI Journey Today
              </h2>
              <p className="text-gray-600 md:text-lg">
                Ready to explore how AI can transform your business? Let's discuss your specific needs.
              </p>
            </div>
            
            <form className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your AI needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  placeholder="What business challenges are you looking to solve with AI?"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Real results from real Michigan businesses using our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6">
                "Metic AI helped us reduce our manufacturing defects by 40% in just three months. 
                The predictive maintenance system they built has saved us hundreds of thousands in downtime."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-primary-orange">JD</span>
                </div>
                <div>
                  <div className="font-semibold">John Davis</div>
                  <div className="text-sm text-gray-600">Operations Manager, Detroit Manufacturing</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6">
                "The customer service AI they developed has improved our response times by 60%. 
                Our customers are happier and our team can focus on more complex issues."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-primary-orange">SM</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Miller</div>
                  <div className="text-sm text-gray-600">CEO, Grand Rapids Tech Solutions</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6">
                "Working with Metic AI was refreshingly straightforward. They understood our business needs 
                and delivered a solution that actually works in the real world."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-primary-orange">MJ</span>
                </div>
                <div>
                  <div className="font-semibold">Mike Johnson</div>
                  <div className="text-sm text-gray-600">CTO, Ann Arbor Healthcare Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
