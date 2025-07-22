import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Users, 
  Award, 
  TrendingUp, 
  Lightbulb, 
  CheckCircle, 
  Heart, 
  Shield, 
  Target, 
  Globe, 
  Brain,
  Zap,
  ArrowRight,
  Sparkles,
  Code,
  Database,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  Calendar
} from "lucide-react";
import { organizationSchema, aboutPageSchema } from "../../lib/schemas";

export const metadata = {
  title: "About Metic.ai | AI-Driven Engineering Excellence Since 2020",
  description: "Learn about Metic.ai's journey to becoming AI-driven development leaders. Discover our AI-first philosophy, delivering 3x faster solutions with 60% cost savings. Meet our AI visionaries and innovation team.",
  keywords: "about Metic.ai, AI company Michigan, artificial intelligence team, machine learning experts, AI services company, AI-driven development",
  authors: [{ name: "Metic.ai AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "About Metic.ai | AI-Driven Engineering Excellence Since 2020",
    description: "Learn about Metic.ai's journey to becoming AI-driven development leaders. Discover our AI-first philosophy and meet our team of AI visionaries.",
    url: "https://metic.ai/about/",
    type: "website",
  },
  alternates: {
    canonical: "https://metic.ai/about/",
  },
};

export default function AboutPage() {
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
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary-orange/20 to-secondary-orange/30 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-orange/20 border border-primary-orange/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-medium text-white">AI-Driven Since 2020 • AI Experts • 500+ Success Stories</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              About <span className="text-primary-orange">Metic.ai</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Since 2020, we've been transforming ideas into powerful digital solutions. Now
              as AI-driven engineers, we deliver enterprise results 3x faster and 60% more cost-effectively than
              traditional development.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-primary-orange" />
                  <span className="text-sm font-medium text-primary-orange">🤖</span>
                </div>
                <div className="text-sm text-gray-300">AI-First Development</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-primary-orange" />
                  <span className="text-sm font-medium text-primary-orange">⚡</span>
                </div>
                <div className="text-sm text-gray-300">3x Faster Delivery</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary-orange" />
                  <span className="text-sm font-medium text-primary-orange">💰</span>
                </div>
                <div className="text-sm text-gray-300">60% Savings Guaranteed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-primary-orange" />
                  <span className="text-sm font-medium text-primary-orange">🚀</span>
                </div>
                <div className="text-sm text-gray-300">Enterprise Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Impact Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Our AI-Powered Impact
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers That Tell Our AI Story
              </p>
              <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                Quantified results from our journey to becoming AI-driven development leaders.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary-orange mb-2">5+</div>
                <div className="text-sm text-gray-600 mb-2">Years Innovating</div>
                <div className="text-xs text-gray-500">Leading AI development</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary-orange mb-2">500+</div>
                <div className="text-sm text-gray-600 mb-2">AI-Powered Projects</div>
                <div className="text-xs text-gray-500">Successfully delivered</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary-orange mb-2">150+</div>
                <div className="text-sm text-gray-600 mb-2">Global Clients</div>
                <div className="text-xs text-gray-500">Across 25+ countries</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl font-bold text-primary-orange mb-2">25+</div>
                <div className="text-sm text-gray-600 mb-2">AI Engineers</div>
                <div className="text-xs text-gray-500">AI experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Our AI Journey
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From Traditional Development to AI-Driven Innovation
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-orange to-secondary-orange hidden md:block"></div>
              
              <div className="space-y-12">
                {/* 2020 - Foundation */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-3">
                        <Calendar className="w-4 h-4" />
                        2020
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Foundation & Vision</h3>
                      <p className="text-gray-600">Started Metic.ai with a vision to revolutionize development through artificial intelligence and machine learning technologies.</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-primary-orange rounded-full items-center justify-center relative z-10 mx-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 md:pl-12"></div>
                </div>

                {/* 2021 - First AI Projects */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12"></div>
                  <div className="hidden md:flex w-12 h-12 bg-primary-orange rounded-full items-center justify-center relative z-10 mx-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 md:text-left md:pl-12">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-medium mb-3">
                        <Calendar className="w-4 h-4" />
                        2021
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">First AI-Powered Solutions</h3>
                      <p className="text-gray-600">Launched our first AI-driven applications, demonstrating 40% faster development cycles and superior user experiences.</p>
                    </div>
                  </div>
                </div>

                {/* 2022 - Scale */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm font-medium mb-3">
                        <Calendar className="w-4 h-4" />
                        2022
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Scaling Success</h3>
                      <p className="text-gray-600">Expanded our AI capabilities, serving 100+ clients with machine learning solutions and automated development workflows.</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-primary-orange rounded-full items-center justify-center relative z-10 mx-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 md:pl-12"></div>
                </div>

                {/* 2023 - AI Leadership */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12"></div>
                  <div className="hidden md:flex w-12 h-12 bg-primary-orange rounded-full items-center justify-center relative z-10 mx-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 md:text-left md:pl-12">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-3 py-1 text-sm font-medium mb-3">
                        <Calendar className="w-4 h-4" />
                        2023
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">AI Development Leadership</h3>
                      <p className="text-gray-600">Became Michigan's leading AI development company, delivering enterprise solutions 3x faster with 60% cost savings.</p>
                    </div>
                  </div>
                </div>

                {/* 2024 - Present */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12">
                    <div className="bg-gradient-to-br from-primary-orange/10 to-secondary-orange/20 p-6 rounded-xl shadow-lg border-2 border-primary-orange/20">
                      <div className="inline-flex items-center gap-2 bg-primary-orange text-white rounded-full px-3 py-1 text-sm font-medium mb-3">
                        <Calendar className="w-4 h-4" />
                        2024-Present
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Future-Ready AI Solutions</h3>
                      <p className="text-gray-600">Leading the industry with cutting-edge AI technologies, serving 500+ projects globally and pioneering the next generation of intelligent applications.</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-primary-orange rounded-full items-center justify-center relative z-10 mx-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 md:pl-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Our AI-Driven Values
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our AI innovation and client success
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-6 group-hover:shadow-lg transition-all">
                  <Brain className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">AI-First Innovation</h3>
                  <p className="text-gray-600">
                    We leverage cutting-edge artificial intelligence to deliver solutions that weren't possible before. Every project starts with AI at its core.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-6 group-hover:shadow-lg transition-all">
                  <Zap className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Speed & Efficiency</h3>
                  <p className="text-gray-600">
                    Our AI-powered development processes deliver enterprise solutions 3x faster while maintaining the highest quality standards.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 mb-6 group-hover:shadow-lg transition-all">
                  <Users className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Client Success</h3>
                  <p className="text-gray-600">
                    Your success is our mission. We partner with clients to ensure AI solutions drive measurable business growth and ROI.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 mb-6 group-hover:shadow-lg transition-all">
                  <Target className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Precision Excellence</h3>
                  <p className="text-gray-600">
                    Every AI solution is precisely engineered to meet your specific needs, ensuring optimal performance and scalability.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 mb-6 group-hover:shadow-lg transition-all">
                  <Database className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Data-Driven Decisions</h3>
                  <p className="text-gray-600">
                    We base every recommendation on real data and AI insights, ensuring your technology investments deliver proven results.
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 mb-6 group-hover:shadow-lg transition-all">
                  <TrendingUp className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Future-Ready</h3>
                  <p className="text-gray-600">
                    Our AI solutions are built to evolve and scale with emerging technologies, keeping you ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Meet Our AI Experts
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The brilliant minds behind Michigan's most advanced AI solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Michael Chen</h3>
                <p className="text-primary-orange text-center mb-3 font-medium">Chief AI Officer</p>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  AI research background from Stanford, leading our machine learning initiatives and enterprise AI strategy.
                </p>
                <div className="flex justify-center gap-3 mt-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs text-blue-600">🧠</span>
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xs text-green-600">⚡</span>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-xs text-purple-600">🚀</span>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Sarah Johnson</h3>
                <p className="text-primary-orange text-center mb-3 font-medium">Lead AI Engineer</p>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  Full-stack AI development expert, specializing in neural networks and automated deployment systems.
                </p>
                <div className="flex justify-center gap-3 mt-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-xs text-orange-600">💻</span>
                  </div>
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-xs text-red-600">🎯</span>
                  </div>
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-xs text-indigo-600">🔥</span>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">David Rodriguez</h3>
                <p className="text-primary-orange text-center mb-3 font-medium">AI Solutions Architect</p>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  Enterprise AI strategist with 8+ years designing scalable AI systems for Fortune 500 companies.
                </p>
                <div className="flex justify-center gap-3 mt-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-xs text-yellow-600">⭐</span>
                  </div>
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-xs text-pink-600">💡</span>
                  </div>
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                    <span className="text-xs text-cyan-600">🌟</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity & Ethics</h3>
                <p className="text-gray-600">
                  Operating with honesty, transparency, and fairness in all our business dealings
                </p>
              </div>
              
                    </section>

      {/* Technology Expertise */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Our AI Technology Stack
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technologies powering next-generation AI solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <Brain className="w-10 h-10 text-primary-orange mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Machine Learning</h3>
                <p className="text-sm text-gray-600">Advanced ML algorithms and neural networks</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <Database className="w-10 h-10 text-primary-orange mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Big Data</h3>
                <p className="text-sm text-gray-600">Scalable data processing and analytics</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <Code className="w-10 h-10 text-primary-orange mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Cloud Computing</h3>
                <p className="text-sm text-gray-600">AWS, Azure, and GCP infrastructure</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <Zap className="w-10 h-10 text-primary-orange mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Automation</h3>
                <p className="text-sm text-gray-600">Intelligent process automation and optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join 500+ companies already leveraging our AI expertise to accelerate growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary-orange hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-orange">
                <Mail className="w-5 h-5 mr-2" />
                Get AI Strategy Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">
              Get in Touch with Our AI Experts
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <MapPin className="w-8 h-8 text-primary-orange mx-auto mb-3" />
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600">Michigan, USA</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Phone className="w-8 h-8 text-primary-orange mx-auto mb-3" />
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) AI-METIC</p>
              </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                <Mail className="w-8 h-8 text-primary-orange mx-auto mb-3" />
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-gray-600">hello@metic.ai</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Customer Satisfaction
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Customer satisfaction is at the core of everything we do. We believe in building strong and 
                    long-lasting relationships with our clients based on trust, transparency, and mutual success 
                    on our <strong>machine learning solutions</strong>.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We take the time to understand our clients' goals, challenges, and aspirations, allowing us 
                    to develop customized solutions that drive real, measurable results. Our client-centric approach 
                    has earned us a reputation for delivering excellence and has resulted in numerous successful partnerships.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange mr-3" />
                    <h3 className="text-lg font-semibold">Personalized Approach</h3>
                  </div>
                  <p className="text-gray-600">Tailored solutions designed specifically for your business needs</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange mr-3" />
                    <h3 className="text-lg font-semibold">Measurable Results</h3>
                  </div>
                  <p className="text-gray-600">Data-driven outcomes that demonstrate clear return on investment</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange mr-3" />
                    <h3 className="text-lg font-semibold">Long-term Partnerships</h3>
                  </div>
                  <p className="text-gray-600">Ongoing support and continuous improvement of your AI solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrity & Ethics Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Integrity and Ethical Business
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  At <strong>Metic.ai</strong>, we pride ourselves on our integrity and ethical business practices. 
                  We adhere to the highest standards of professionalism and strive to operate with honesty, 
                  transparency, and fairness in all our dealings.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our clients can trust us to always act in their best interests and maintain the strictest 
                  confidentiality. We understand that trust is earned through consistent actions and ethical 
                  decision-making, which forms the foundation of every client relationship.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  In addition to our dedication to our clients, we are also committed to making a positive impact 
                  on the communities we serve. We actively participate in various charitable initiatives and give 
                  back to society in meaningful ways.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe in using our resources and expertise to contribute to the betterment of society and 
                  create a sustainable future for generations to come. This commitment extends beyond business 
                  success to meaningful social responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-orange-100 max-w-2xl mx-auto">
                Measurable results that demonstrate our commitment to excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-orange-100">AI Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-orange-100">Client Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-orange-100">Expert Team Members</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-orange-100">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the hundreds of businesses that trust Metic.ai for their AI transformation journey. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
