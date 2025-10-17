import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Brain, 
  BarChart3, 
  Code, 
  Zap, 
  MapPin,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  ChevronDown,
  Plus,
  Minus,
  Star,
  Shield,
  Clock,
  Cpu,
  Database,
  GitBranch,
  Activity
} from "lucide-react";
import { Button } from "./components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Metic AI - Leading AI Company in Michigan",
            "description": "Premier artificial intelligence company in Michigan providing AI solutions, machine learning services, and automation technology for Michigan businesses.",
            "url": "https://metic.ai",
            "logo": "https://metic.ai/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Detroit",
              "addressRegion": "MI",
              "addressCountry": "US",
              "streetAddress": "123 AI Boulevard"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.3314",
              "longitude": "-83.0458"
            },
            "areaServed": {
              "@type": "State",
              "name": "Michigan"
            },
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "127"
            }
          })
        }}
      />

      {/* Hero Section - Advanced Michigan AI Company Focus */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-amber-50 py-20 md:py-32">
        {/* Advanced Animated Background with Geometric Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Orbs with Advanced Animation */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-light-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-orange/40 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary-orange/30 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-light-orange/40 rounded-full animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Enhanced Location Badge with Animation */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 hover:border-primary-orange/40 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <MapPin className="w-4 h-4 text-primary-orange animate-pulse" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-orange rounded-full"></div>
              </div>
              <span className="text-sm font-bold text-gray-800">Michigan's Premier AI Company</span>
              <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary-orange to-secondary-orange text-white rounded-full font-semibold shadow-lg">
                Locally Based
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-12 md:flex-row md:items-center">
            <div className="flex-1 space-y-8">
              {/* Enhanced H1 with Gradient Animation */}
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                <span className="block text-gray-900 mb-2">Leading</span>
                <span className="block bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  AI Company
                </span>
                <span className="block text-gray-900 mt-2">
                  in <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">Michigan</span>
                </span>
              </h1>
              
              {/* Enhanced Description with Better Typography */}
              <p className="max-w-[650px] text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                <strong className="text-gray-900 font-semibold">Metic AI</strong> is Michigan's most trusted artificial intelligence company, 
                delivering cutting-edge <strong className="text-primary-orange font-semibold">AI solutions</strong>, <strong className="text-primary-orange font-semibold">machine learning services</strong>, and 
                <strong className="text-primary-orange font-semibold"> intelligent automation</strong> to businesses across Detroit, Grand Rapids, Ann Arbor, and throughout Michigan.
              </p>

              {/* Enhanced Trust Indicators with Icons */}
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                    <Award className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Michigan Certified</div>
                    <div className="text-xs text-gray-600">Official Partner</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                    <Users className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">500+ MI Clients</div>
                    <div className="text-xs text-gray-600">Trusted Partners</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                    <Star className="w-5 h-5 text-primary-orange fill-primary-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">5.0 Rating</div>
                    <div className="text-xs text-gray-600">127 Reviews</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced CTA Buttons with Advanced Effects */}
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="group relative overflow-hidden shadow-xl hover:shadow-2xl">
                    <span className="relative z-10 flex items-center">
                      Get Free AI Consultation
                      <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-orange to-primary-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="group border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white shadow-lg hover:shadow-xl">
                    <span>View Michigan AI Services</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Enhanced Stats with Counter Animation Effect */}
              <div className="grid grid-cols-3 gap-6 pt-8 max-w-lg">
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    500+
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">MI Businesses</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    10+
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">Years Experience</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    24/7
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">MI Support</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Visual Element with 3D-like Effects */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-full max-w-lg group">
                {/* Outer Animated Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/30 via-secondary-orange/30 to-primary-orange/30 rounded-full blur-3xl animate-pulse group-hover:blur-[100px] transition-all duration-500"></div>
                
                {/* Rotating Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                
                {/* Main Card with Glass Effect */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-primary-orange/30 group-hover:shadow-primary-orange/20 group-hover:scale-105 transition-all duration-500">
                  {/* Floating Icon Ring */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange shadow-xl flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-6 pt-8">
                    {/* Central Brain Icon with Pulse */}
                    <div className="relative inline-flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full blur-2xl opacity-50 animate-pulse"></div>
                      <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                        <Brain className="w-20 h-20 text-white" />
                      </div>
                      {/* Orbiting Elements */}
                      <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center animate-bounce" style={{animationDuration: '2s'}}>
                        <Cpu className="w-4 h-4 text-primary-orange" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>
                        <Database className="w-4 h-4 text-primary-orange" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900">Michigan AI Hub</h3>
                    <p className="text-base text-gray-600 font-medium">Serving Detroit, Grand Rapids, Ann Arbor & Beyond</p>
                    
                    {/* Enhanced Tags with Animation */}
                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 hover:from-primary-orange/20 hover:to-secondary-orange/20 text-primary-orange text-sm font-semibold rounded-full border border-primary-orange/20 hover:border-primary-orange/40 transition-all cursor-pointer hover:scale-105">
                        AI Development
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 hover:from-primary-orange/20 hover:to-secondary-orange/20 text-primary-orange text-sm font-semibold rounded-full border border-primary-orange/20 hover:border-primary-orange/40 transition-all cursor-pointer hover:scale-105">
                        ML Solutions
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 hover:from-primary-orange/20 hover:to-secondary-orange/20 text-primary-orange text-sm font-semibold rounded-full border border-primary-orange/20 hover:border-primary-orange/40 transition-all cursor-pointer hover:scale-105">
                        Automation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-orange/20 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary-orange/20 rounded-full blur-2xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Michigan AI Services Section - Advanced Interactive Cards */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #FF6B35 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        </div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary-orange/5 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="px-5 py-2.5 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-primary-orange text-sm font-bold rounded-full border border-primary-orange/20 shadow-sm">
                ⚡ Why Choose Metic AI in Michigan?
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="text-gray-900">Michigan's Most Trusted </span>
              <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">AI Company</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
            <p className="mt-6 text-gray-600 md:text-xl max-w-3xl mx-auto leading-relaxed">
              As a <strong className="text-gray-900">leading artificial intelligence company in Michigan</strong>, we specialize in delivering 
              AI solutions that drive real business results for Michigan companies. From Detroit to Grand Rapids, 
              we're transforming how Michigan businesses leverage AI technology.
            </p>
          </div>
          
          {/* Advanced Service Cards with 3D Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1 - AI Consulting */}
            <div className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-orange/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon with Advanced Animation */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Brain className="text-white h-8 w-8" />
                  </div>
                  {/* Pulse Ring */}
                  <div className="absolute -inset-2 border-2 border-primary-orange/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-primary-orange transition-colors">
                  AI Consulting Michigan
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Expert AI consulting services for Michigan businesses. Strategic guidance to implement cutting-edge AI solutions.
                </p>
                
                {/* Hover CTA */}
                <div className="flex items-center text-primary-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            {/* Card 2 - AI Data Analytics */}
            <div className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-orange/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <BarChart3 className="text-white h-8 w-8" />
                  </div>
                  <div className="absolute -inset-2 border-2 border-primary-orange/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-primary-orange transition-colors">
                  AI Data Analytics
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Transform Michigan business data into actionable insights with advanced AI analytics and predictive modeling.
                </p>
                
                <div className="flex items-center text-primary-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            {/* Card 3 - Machine Learning */}
            <div className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-orange/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Code className="text-white h-8 w-8" />
                  </div>
                  <div className="absolute -inset-2 border-2 border-primary-orange/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-primary-orange transition-colors">
                  Machine Learning MI
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Custom machine learning models for Michigan enterprises. Build AI systems that learn and adapt to your business.
                </p>
                
                <div className="flex items-center text-primary-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            {/* Card 4 - AI Automation */}
            <div className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-orange/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Zap className="text-white h-8 w-8" />
                  </div>
                  <div className="absolute -inset-2 border-2 border-primary-orange/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-primary-orange transition-colors">
                  AI Automation
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Intelligent automation for Michigan businesses. Streamline operations with AI-powered workflow automation.
                </p>
                
                <div className="flex items-center text-primary-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Michigan Cities We Serve - Local SEO */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">AI Services Across </span>
              <span className="text-primary-orange">Michigan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proudly serving businesses throughout Michigan with world-class AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Detroit', 'Grand Rapids', 'Ann Arbor', 'Lansing', 'Flint', 'Dearborn',
              'Troy', 'Kalamazoo', 'Sterling Heights', 'Warren', 'Livonia', 'Clinton Township'
            ].map((city, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-primary-orange hover:shadow-md transition-all text-center group">
                <MapPin className="w-5 h-5 text-primary-orange mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-800">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-4 max-w-lg text-white/90">
                Join hundreds of companies already using Metic AI to gain competitive advantage.
              </p>
            </div>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary-orange border-white hover:bg-white/90"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Michigan Businesses Say About Us
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              See why Michigan companies trust Metic AI for their artificial intelligence needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center">
                    <span className="font-bold text-primary-orange">TC</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Taylor Chen</p>
                  <p className="text-sm text-gray-500">CTO, Detroit TechCorp</p>
                  <div className="flex text-primary-orange text-xs mt-1">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Best AI company in Michigan! Metic AI transformed our data analytics capabilities. 
                We've seen a 40% increase in operational efficiency across our Detroit operations."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center">
                    <span className="font-bold text-primary-orange">AJ</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Aria Johnson</p>
                  <p className="text-sm text-gray-500">CEO, Grand Rapids InnovateCo</p>
                  <div className="flex text-primary-orange text-xs mt-1">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "The most knowledgeable AI company in Michigan. Metic AI helped us build a custom solution 
                that perfectly matched our Grand Rapids business needs. Their expertise is unmatched."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center">
                    <span className="font-bold text-primary-orange">MR</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Marcus Rodriguez</p>
                  <p className="text-sm text-gray-500">Director, Ann Arbor Finance</p>
                  <div className="flex text-primary-orange text-xs mt-1">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Highly recommend this AI company in Michigan! Their machine learning models have dramatically 
                improved our forecasting. We make better decisions faster."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Creative FAQ Section - VSO & ASO Optimized */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-orange/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1.5px, transparent 1.5px), linear-gradient(90deg, #FF6B35 1.5px, transparent 1.5px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 mb-8 hover:border-primary-orange/40 transition-all group">
                <Lightbulb className="w-5 h-5 text-primary-orange animate-pulse" />
                <span className="text-sm font-bold text-gray-800">Got Questions? We Have Answers!</span>
                <Sparkles className="w-4 h-4 text-primary-orange" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">Frequently Asked Questions</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  About AI in Michigan
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about working with Michigan's leading AI company
              </p>
            </div>

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
                      "name": "What is the best AI company in Michigan?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Metic AI is recognized as Michigan's leading AI company, providing cutting-edge artificial intelligence solutions to businesses across Detroit, Grand Rapids, Ann Arbor, and throughout Michigan. With over 10 years of experience and 500+ successful Michigan client projects, we specialize in AI consulting, machine learning, and intelligent automation."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Where is Metic AI located in Michigan?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Metic AI is headquartered in Detroit, Michigan, and serves businesses throughout the entire state including Grand Rapids, Ann Arbor, Lansing, Flint, and all major Michigan cities. We provide both on-site and remote AI consulting services across Michigan."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What AI services does Metic AI provide in Michigan?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Metic AI offers comprehensive AI services in Michigan including: AI consulting and strategy, machine learning development, data analytics and business intelligence, intelligent automation, natural language processing, computer vision solutions, and custom AI model development. We serve all industries across Michigan."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How much does AI implementation cost for Michigan businesses?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI implementation costs for Michigan businesses vary based on project scope and complexity. Metic AI offers flexible pricing options starting from $5,000 for basic AI consulting to enterprise solutions. We provide free consultations to Michigan businesses to assess needs and provide accurate cost estimates."
                      }
                    }
                  ]
                })
              }}
            />

            {/* Advanced Creative FAQ Cards */}
            <div className="space-y-5">
              {/* FAQ Item 1 - Enhanced Design */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        {/* Icon Circle */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Sparkles className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        {/* Question */}
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What is the best AI company in Michigan?
                          </h3>
                        </div>
                      </div>
                      
                      {/* Toggle Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Accent Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                {/* Answer with Animation */}
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-gray-900 font-semibold">Metic AI is recognized as Michigan's leading AI company</strong>, providing cutting-edge 
                        artificial intelligence solutions to businesses across Detroit, Grand Rapids, Ann Arbor, and throughout Michigan.
                      </p>
                      <p className="text-lg">
                        With over 10 years of experience and 500+ successful Michigan client projects, we specialize in AI consulting, 
                        machine learning, intelligent automation, and data analytics. Our Michigan-based team delivers world-class 
                        AI solutions with local expertise and support.
                      </p>
                      
                      {/* Stats Highlight */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Award className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">10+ Years</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Users className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">500+ Clients</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-primary-orange/5 rounded-lg">
                          <Star className="w-4 h-4 text-primary-orange fill-primary-orange" />
                          <span className="text-sm font-semibold text-gray-900">5.0 Rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <MapPin className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Where is Metic AI located in Michigan?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-gray-900 font-semibold">Metic AI is headquartered in Detroit, Michigan</strong>, at 123 AI Boulevard, Innovation District. 
                        We serve businesses throughout the entire state including Grand Rapids, Ann Arbor, Lansing, Flint, Dearborn, 
                        Troy, Sterling Heights, and all major Michigan cities.
                      </p>
                      <p className="text-lg">
                        We provide both on-site and remote AI consulting services across Michigan, ensuring Michigan businesses 
                        have access to expert AI solutions regardless of location.
                      </p>
                      
                      {/* Cities Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
                        {['Detroit', 'Grand Rapids', 'Ann Arbor', 'Lansing', 'Dearborn', 'Troy'].map((city, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-primary-orange/5 rounded-lg">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            <span className="text-sm font-medium text-gray-900">{city}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Target className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What AI services does Metic AI provide in Michigan?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <GitBranch className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-gray-900 font-semibold">Metic AI offers comprehensive AI services in Michigan</strong> including:
                      </p>
                      
                      {/* Services Grid with Icons */}
                      <div className="grid md:grid-cols-2 gap-3 pt-2">
                        {[
                          { icon: Brain, text: 'AI Consulting & Strategy' },
                          { icon: Code, text: 'Machine Learning Development' },
                          { icon: BarChart3, text: 'Data Analytics & BI' },
                          { icon: Zap, text: 'Intelligent Automation' },
                          { icon: Activity, text: 'Natural Language Processing' },
                          { icon: Shield, text: 'Computer Vision Solutions' },
                          { icon: Cpu, text: 'Custom AI Development' },
                          { icon: Clock, text: 'AI Training & Workshops' }
                        ].map((service, idx) => {
                          const Icon = service.icon;
                          return (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg hover:from-primary-orange/10 hover:to-secondary-orange/10 transition-all">
                              <Icon className="w-5 h-5 text-primary-orange flex-shrink-0" />
                              <span className="text-sm font-medium text-gray-900">{service.text}</span>
                            </div>
                          );
                        })}
                      </div>
                      
                      <p className="text-lg pt-2">
                        We serve all industries across Michigan including healthcare, manufacturing, finance, retail, and technology.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <TrendingUp className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How much does AI implementation cost for Michigan businesses?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        AI implementation costs for Michigan businesses vary based on project scope, complexity, and specific requirements. 
                        <strong className="text-gray-900 font-semibold"> Metic AI offers flexible pricing options</strong> designed to fit businesses of all sizes.
                      </p>
                      
                      {/* Pricing Cards */}
                      <div className="grid md:grid-cols-2 gap-4 pt-2">
                        <div className="p-5 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl border border-primary-orange/20">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center">
                              <span className="text-lg font-bold text-primary-orange">$</span>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">AI Consulting</div>
                              <div className="text-sm text-gray-600">Starting at $5,000</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">Initial assessment and strategy development</p>
                        </div>
                        
                        <div className="p-5 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl border border-primary-orange/20">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center">
                              <span className="text-lg font-bold text-primary-orange">$$</span>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">Small Projects</div>
                              <div className="text-sm text-gray-600">$10K - $50K</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">Focused AI solutions for specific needs</p>
                        </div>
                        
                        <div className="p-5 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl border border-primary-orange/20">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center">
                              <span className="text-lg font-bold text-primary-orange">$$$</span>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">Mid-Size Projects</div>
                              <div className="text-sm text-gray-600">$50K - $200K</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">Comprehensive AI systems and integration</p>
                        </div>
                        
                        <div className="p-5 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl border border-primary-orange/20">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center">
                              <span className="text-lg font-bold text-primary-orange">$$$$</span>
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">Enterprise Solutions</div>
                              <div className="text-sm text-gray-600">$200K+</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">Large-scale AI transformation programs</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg mt-4">
                        <Rocket className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-medium text-gray-900">
                          We provide <strong>free consultations to Michigan businesses</strong> to assess needs and provide accurate cost estimates. 
                          Contact us today for a personalized quote.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <CheckCircle className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            Why choose a Michigan-based AI company?
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-orange/10 group-hover:bg-primary-orange/20 flex items-center justify-center transition-all duration-300">
                          <ChevronDown className="w-6 h-6 text-primary-orange group-open:rotate-180 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </summary>
                
                <div className="mt-3 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-orange/20 animate-fade-in">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange/10 to-secondary-orange/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Choosing a <strong className="text-gray-900 font-semibold">Michigan-based AI company like Metic AI</strong> offers several advantages:
                      </p>
                      
                      {/* Benefits Grid */}
                      <div className="grid gap-3 pt-2">
                        {[
                          { icon: Target, title: 'Local Expertise', desc: 'Deep understanding of Michigan business landscape and regulations' },
                          { icon: Users, title: 'On-Site Support', desc: 'Face-to-face meetings and on-location implementation across Michigan' },
                          { icon: GitBranch, title: 'Michigan Network', desc: 'Strong connections with local businesses, universities, and tech ecosystem' },
                          { icon: Clock, title: 'Time Zone Alignment', desc: 'Same business hours for real-time collaboration' },
                          { icon: Award, title: 'Community Investment', desc: "Supporting Michigan's economy and tech growth" },
                          { icon: Shield, title: 'Industry Knowledge', desc: "Expertise in Michigan's key industries (automotive, manufacturing, healthcare)" }
                        ].map((benefit, idx) => {
                          const Icon = benefit.icon;
                          return (
                            <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg hover:from-primary-orange/10 hover:to-secondary-orange/10 transition-all">
                              <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-5 h-5 text-primary-orange" />
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 mb-1">{benefit.title}</div>
                                <div className="text-sm text-gray-600">{benefit.desc}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      <p className="text-lg pt-2">
                        Metic AI combines world-class AI expertise with local Michigan presence for the best of both worlds.
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            
            {/* CTA at Bottom of FAQ */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-primary-orange/10 via-secondary-orange/10 to-primary-orange/10 rounded-2xl border-2 border-primary-orange/20">
                <Lightbulb className="w-12 h-12 text-primary-orange animate-pulse" />
                <h3 className="text-2xl font-bold text-gray-900">Still Have Questions?</h3>
                <p className="text-gray-600 max-w-md">
                  Our Michigan AI experts are here to help. Get personalized answers and a free consultation.
                </p>
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="group shadow-xl">
                    <span>Talk to an Expert</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Conversion Optimized */}
      <section className="py-20 bg-gradient-to-br from-primary-orange via-secondary-orange to-primary-orange text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Michigan Business with AI?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 500+ Michigan companies already leveraging Metic AI to gain competitive advantage. 
              Get your <strong>free AI consultation</strong> today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary-orange border-white hover:bg-gray-100 font-semibold text-lg px-8 py-6"
                >
                  <Rocket className="mr-2 h-6 w-6" />
                  <span>Schedule Free Consultation</span>
                </Button>
              </Link>
              <Link href="tel:555-123-4567">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
                >
                  📞 Call (555) 123-4567
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free Initial Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Michigan-Based Team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Proven Track Record</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
