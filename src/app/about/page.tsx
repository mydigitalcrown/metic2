import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Users, 
  Award, 
  TrendingUp, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Zap,
  Target,
  Shield,
  Globe,
  Star,
  Rocket,
  ChevronDown,
  MapPin,
  Clock,
  Heart,
  Cpu,
  Database,
  GitBranch,
  Activity,
  Code,
  BarChart3,
  Sparkles,
  Building,
  Calendar,
  Trophy,
  Handshake,
  Eye,
  Compass
} from "lucide-react";

export const metadata = {
  title: "About Metic AI | Leading Artificial Intelligence Company - Our Story & Mission",
  description: "Discover Metic AI's journey as a leading artificial intelligence company. Learn about our mission to democratize AI, our expert team, core values, and 2100+ successful AI implementations worldwide. Founded by AI researchers committed to transforming businesses globally.",
  keywords: [
    "About Metic AI",
    "AI Company Story", 
    "Artificial Intelligence Company Mission",
    "AI Team Experts",
    "Leading AI Company",
    "AI Company Values",
    "AI Research Team",
    "Machine Learning Experts",
    "AI Company History",
    "Best AI Company",
    "AI Innovation Leaders",
    "Enterprise AI Solutions",
    "AI Company Culture",
    "AI Technology Pioneers",
    "Global AI Company",
    "AI Consulting Experts",
    "AI Development Team",
    "AI Business Solutions",
    "Professional AI Services",
    "AI Company Leadership"
  ],
  authors: [{ name: "Metic AI Leadership Team" }],
  creator: "Metic AI",
  publisher: "Metic AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "About Metic AI | Leading Artificial Intelligence Company - Our Story & Mission",
    description: "Discover Metic AI's journey as a leading artificial intelligence company. Expert team, proven results, and commitment to AI innovation.",
    url: "https://metic.ai/about/",
    siteName: "Metic.ai - About Our AI Company",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Metic AI - Leading Artificial Intelligence Company",
      },
    ],
  },
  alternates: {
    canonical: "https://metic.ai/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Organization Schema for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Metic AI - Leading Artificial Intelligence Company",
            "description": "Learn about Metic AI, our mission to democratize artificial intelligence, our expert team, and our commitment to transforming businesses worldwide with AI solutions.",
            "url": "https://metic.ai/about/",
            "mainEntity": {
              "@type": "Organization",
              "name": "Metic AI",
              "description": "Leading artificial intelligence company providing AI solutions, machine learning services, and intelligent automation for businesses worldwide.",
              "foundingDate": "2020",
              "numberOfEmployees": "100-500",
              "url": "https://metic.ai",
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/metic_ai"
              ],
              "founder": [
                {
                  "@type": "Person",
                  "name": "Dr. Jane Davis",
                  "jobTitle": "CEO & Co-Founder"
                },
                {
                  "@type": "Person", 
                  "name": "Dr. Michael Park",
                  "jobTitle": "CTO & Co-Founder"
                }
              ]
            }
          })
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
        <div className="container px-4 md:px-6 py-3">
          <ol className="flex items-center gap-2 text-sm">
            <li className="flex items-center gap-2">
              <Link href="/" className="text-primary-orange hover:text-dark-orange font-medium transition-colors">
                Home
              </Link>
              <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
            </li>
            <li className="text-gray-600 font-medium">
              About Metic AI
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section - Advanced Design Matching Home Page */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-amber-50 py-20 md:py-32">
        {/* Ultra Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Multiple Floating Orbs with Staggered Animations */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-light-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Animated Grid Pattern with Gradient */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Enhanced Floating Particles System */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-orange/40 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary-orange/30 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-light-orange/40 rounded-full animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Enhanced Location Badge with Animation */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 hover:border-primary-orange/40 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Heart className="w-4 h-4 text-primary-orange animate-pulse" />
              <span className="text-sm font-bold text-gray-800">Our Story & Mission</span>
              <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary-orange to-secondary-orange text-white rounded-full font-semibold shadow-lg">
                Since 2020
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-12 md:flex-row md:items-center">
            <div className="flex-1 space-y-8">
              {/* Enhanced H1 with Gradient Animation */}
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                <span className="block text-gray-900 mb-2"><strong>About</strong></span>
                <span className="block bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  <strong>Metic AI</strong>
                </span>
                <span className="block text-gray-900 mt-2">
                  <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">Leading AI Innovation</span>
                </span>
              </h1>
              
              {/* Enhanced Description with Better Typography */}
              <p className="max-w-[650px] text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                We're <strong className="text-primary-orange font-semibold">pioneering the future of artificial intelligence</strong> by making 
                <strong className="text-primary-orange font-semibold"> advanced AI accessible to businesses worldwide</strong>. Our mission is to 
                <strong className="text-primary-orange font-semibold"> democratize AI innovation</strong> and transform how companies leverage 
                <strong className="text-primary-orange font-semibold"> intelligent automation solutions</strong>.
              </p>

              {/* Enhanced Trust Indicators with Icons */}
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                    <Calendar className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Founded 2020</div>
                    <div className="text-xs text-gray-600">AI Innovation</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                    <Users className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">100+ Experts</div>
                    <div className="text-xs text-gray-600">AI Team</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                    <Globe className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Global Reach</div>
                    <div className="text-xs text-gray-600">50+ Countries</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced CTA Buttons with Advanced Effects */}
              <div className="flex flex-col gap-4 sm:flex-row pt-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="group relative overflow-hidden shadow-xl hover:shadow-2xl">
                    <span className="relative z-10 flex items-center">
                      Meet Our Team
                      <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-orange to-primary-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                </Link>
                <Link href="#story">
                  <Button variant="outline" size="lg" className="group border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white shadow-lg hover:shadow-xl">
                    <span>Our Journey</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Enhanced Stats with Counter Animation Effect */}
              <div className="grid grid-cols-3 gap-6 pt-8 max-w-lg">
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    2100+
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">Projects</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    5+
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">Years</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    50+
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">Countries</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
            
            {/* Ultra Creative Visual Element with 3D Effects and Animations - Matching Home Page */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-full max-w-lg group">
                {/* Multi-Layer Animated Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/30 via-secondary-orange/30 to-primary-orange/30 rounded-full blur-3xl animate-pulse group-hover:blur-[100px] transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/20 via-primary-orange/20 to-secondary-orange/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                
                {/* Main Card with Advanced Glass Morphism */}
                <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border-2 border-primary-orange/20 group-hover:shadow-primary-orange/30 group-hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                  {/* Shimmer Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Floating Badge with Pulse */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full blur-lg opacity-60 animate-ping"></div>
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange shadow-2xl flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
                        <Heart className="w-8 h-8 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-6 pt-8 relative z-10">
                    {/* Central AI Brain with Advanced Animation */}
                    <div className="relative inline-flex items-center justify-center">
                      {/* Multiple Pulsing Rings */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full blur-3xl opacity-50 animate-pulse"></div>
                      <div className="absolute inset-4 bg-gradient-to-tl from-secondary-orange to-primary-orange rounded-full blur-2xl opacity-40 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      
                      {/* Main Brain Icon */}
                      <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-primary-orange via-secondary-orange to-primary-orange flex items-center justify-center shadow-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                        <div className="absolute inset-2 rounded-full bg-gradient-to-tl from-primary-orange/50 to-secondary-orange/50 blur-xl"></div>
                        <Building className="w-24 h-24 text-white relative z-10 drop-shadow-lg" />
                      </div>
                      
                      {/* Orbiting Tech Icons with Advanced Paths */}
                      <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-primary-orange/30 flex items-center justify-center animate-bounce hover:scale-125 transition-transform" style={{animationDuration: '2s'}}>
                        <Brain className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-secondary-orange/30 flex items-center justify-center animate-bounce hover:scale-125 transition-transform" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>
                        <Users className="w-5 h-5 text-secondary-orange" />
                      </div>
                      <div className="absolute top-1/2 -right-2 w-9 h-9 rounded-full bg-gradient-to-br from-primary-orange/20 to-secondary-orange/20 backdrop-blur-sm border border-primary-orange/40 flex items-center justify-center animate-bounce hover:scale-125 transition-transform" style={{animationDuration: '2.2s', animationDelay: '0.2s'}}>
                        <Trophy className="w-4 h-4 text-primary-orange" />
                      </div>
                      <div className="absolute top-1/2 -left-2 w-9 h-9 rounded-full bg-gradient-to-br from-secondary-orange/20 to-primary-orange/20 backdrop-blur-sm border border-secondary-orange/40 flex items-center justify-center animate-bounce hover:scale-125 transition-transform" style={{animationDuration: '2.8s', animationDelay: '0.7s'}}>
                        <Globe className="w-4 h-4 text-secondary-orange" />
                      </div>
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary-orange/30 to-secondary-orange/30 backdrop-blur-sm border border-primary-orange/50 flex items-center justify-center animate-bounce hover:scale-125 transition-transform" style={{animationDuration: '2.4s', animationDelay: '0.4s'}}>
                        <Lightbulb className="w-4 h-4 text-primary-orange" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-primary-orange to-gray-900 bg-clip-text text-transparent">
                        AI Innovation Hub
                      </h3>
                      <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                        Building the Future of <span className="text-primary-orange font-bold">Artificial Intelligence</span> for <span className="text-primary-orange font-bold">Global Businesses</span>
                      </p>
                    </div>
                    
                    {/* Animated Technology Tags */}
                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 hover:from-primary-orange/20 hover:to-secondary-orange/20 text-primary-orange text-sm font-semibold rounded-full border border-primary-orange/20 hover:border-primary-orange/40 transition-all cursor-pointer hover:scale-105">
                        Innovation
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 hover:from-primary-orange/20 hover:to-secondary-orange/20 text-primary-orange text-sm font-semibold rounded-full border border-primary-orange/20 hover:border-primary-orange/40 transition-all cursor-pointer hover:scale-105">
                        Excellence
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 hover:from-primary-orange/20 hover:to-secondary-orange/20 text-primary-orange text-sm font-semibold rounded-full border border-primary-orange/20 hover:border-primary-orange/40 transition-all cursor-pointer hover:scale-105">
                        Global Impact
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Advanced Design */}
      <section id="story" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
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
                📖 Our Journey
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="text-gray-900">The </span>
              <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">Metic AI</span>
              <span className="text-gray-900"> Story</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From visionary researchers to global AI leaders - discover how we're transforming the future of artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Pioneering <span className="text-primary-orange">AI Innovation</span> Since 2020
              </h3>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-gray-900">Metic AI was founded in 2020</strong> by a visionary team of AI researchers and business strategists who recognized that while 
                  artificial intelligence was revolutionizing large enterprises, <strong className="text-primary-orange">smaller organizations were being left behind</strong>.
                </p>
                <p className="text-lg">
                  Our founding team had worked at leading tech companies like Google, Microsoft, and Amazon, along with prestigious research institutions where they witnessed firsthand 
                  the transformative power of AI, but also <strong className="text-primary-orange">how inaccessible these technologies were to most businesses</strong>.
                </p>
                <p className="text-lg">
                  With this crucial insight, <strong className="text-primary-orange">Metic AI was born with a clear mission</strong>: to democratize access to advanced AI by creating 
                  solutions that are powerful yet accessible, sophisticated yet easy to implement, and scalable yet affordable.
                </p>
                <p className="text-lg">
                  Today, we've successfully implemented <strong className="text-primary-orange">2100+ AI projects across 50+ countries</strong>, helping businesses of all sizes 
                  harness the power of artificial intelligence to drive growth, efficiency, and innovation.
                </p>
              </div>

              {/* Enhanced Achievement Cards */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="group bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl p-4 border border-primary-orange/20 hover:border-primary-orange/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Trophy className="w-4 h-4 text-primary-orange" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">Industry Recognition</span>
                  </div>
                  <p className="text-xs text-gray-600">Top AI Company Award 2023</p>
                </div>
                
                <div className="group bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl p-4 border border-primary-orange/20 hover:border-primary-orange/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-secondary-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Star className="w-4 h-4 text-secondary-orange" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">Client Satisfaction</span>
                  </div>
                  <p className="text-xs text-gray-600">5.0/5.0 Average Rating</p>
                </div>
                
                <div className="group bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl p-4 border border-primary-orange/20 hover:border-primary-orange/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="w-4 h-4 text-primary-orange" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">Innovation Speed</span>
                  </div>
                  <p className="text-xs text-gray-600">3x Faster Implementation</p>
                </div>
                
                <div className="group bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl p-4 border border-primary-orange/20 hover:border-primary-orange/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-secondary-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="w-4 h-4 text-secondary-orange" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">Enterprise Security</span>
                  </div>
                  <p className="text-xs text-gray-600">100% Compliance Rate</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Visual Element */}
            <div className="relative">
              {/* Background Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-secondary-orange/20 rounded-3xl blur-2xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-3xl blur-3xl"></div>
              
              {/* Main Content Card */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-primary-orange/20">
                {/* Timeline Visual */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center shadow-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2020</div>
                      <div className="text-sm text-gray-600">Company Founded</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center shadow-lg">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2021</div>
                      <div className="text-sm text-gray-600">First 100 AI Projects</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center shadow-lg">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2022</div>
                      <div className="text-sm text-gray-600">Global Expansion</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center shadow-lg">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2023</div>
                      <div className="text-sm text-gray-600">Industry Leadership</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center shadow-lg animate-pulse">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2024</div>
                      <div className="text-sm text-gray-600">2100+ Projects Milestone</div>
                    </div>
                  </div>
                </div>
                
                {/* Stats Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-orange">2100+</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary-orange">100+</div>
                      <div className="text-xs text-gray-600">Team Members</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-orange">50+</div>
                      <div className="text-xs text-gray-600">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section - Advanced 3D Cards */}
      <section id="mission" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'linear-gradient(45deg, #FF6B35 25%, transparent 25%), linear-gradient(-45deg, #FF6B35 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FF6B35 75%), linear-gradient(-45deg, transparent 75%, #FF6B35 75%)', backgroundSize: '50px 50px', backgroundPosition: '0 0, 0 25px, 25px -25px, -25px 0px'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="px-6 py-3 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-primary-orange text-sm font-bold rounded-full border border-primary-orange/20 shadow-lg backdrop-blur-sm">
                🎯 Our Foundation
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="text-gray-900">Our </span>
              <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">Mission</span>
              <span className="text-gray-900"> & Values</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core principles drive everything we do - from breakthrough research to client success, we're committed to <strong className="text-primary-orange">transforming businesses through responsible AI innovation</strong>
            </p>
          </div>

          {/* Mission Statement - Enhanced Design */}
          <div className="mb-20">
            <div className="relative group">
              {/* 3D Card Background Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-orange/20 to-secondary-orange/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-orange/30 to-secondary-orange/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Main Mission Card */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-primary-orange/20 group-hover:border-primary-orange/40 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary-orange to-secondary-orange mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    <strong className="text-primary-orange">To democratize artificial intelligence by making advanced AI solutions accessible, affordable, and impactful for businesses of all sizes.</strong> We bridge the gap between cutting-edge research and practical business applications, ensuring every organization can harness the transformative power of AI to drive growth, innovation, and success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values - Advanced 3D Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value Card 1 - Innovation */}
            <div className="group relative">
              {/* 3D Card Effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-orange/30 to-secondary-orange/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-primary-orange/20 group-hover:border-primary-orange/40 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:rotate-1">
                {/* Icon with 3D Effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-xl"></div>
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center shadow-2xl group-hover:shadow-primary-orange/50 group-hover:scale-110 transition-all duration-300">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-orange transition-colors">
                  Innovation Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We push the boundaries of what's possible with AI, constantly researching and developing breakthrough solutions that solve real-world challenges.
                </p>
                
                {/* Progress Indicator */}
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full w-[95%] group-hover:w-full transition-all duration-1000"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Innovation Score: 95%</div>
              </div>
            </div>

            {/* Value Card 2 - Integrity */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary-orange/30 to-primary-orange/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-secondary-orange/20 group-hover:border-secondary-orange/40 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:-rotate-1">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-secondary-orange/20 rounded-full blur-xl"></div>
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center shadow-2xl group-hover:shadow-secondary-orange/50 group-hover:scale-110 transition-all duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary-orange transition-colors">
                  Trust & Integrity
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We build lasting relationships through transparency, ethical AI practices, and unwavering commitment to client confidentiality and data security.
                </p>
                
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary-orange to-primary-orange rounded-full w-[100%] transition-all duration-1000"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Trust Score: 100%</div>
              </div>
            </div>

            {/* Value Card 3 - Accessibility */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-orange/30 to-secondary-orange/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-primary-orange/20 group-hover:border-primary-orange/40 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:rotate-1">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-xl"></div>
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center shadow-2xl group-hover:shadow-primary-orange/50 group-hover:scale-110 transition-all duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-orange transition-colors">
                  AI Accessibility
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We make advanced AI technology accessible to organizations of all sizes, breaking down barriers and democratizing artificial intelligence.
                </p>
                
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full w-[92%] group-hover:w-full transition-all duration-1000"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Accessibility Score: 92%</div>
              </div>
            </div>

            {/* Value Card 4 - Excellence */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary-orange/30 to-primary-orange/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-secondary-orange/20 group-hover:border-secondary-orange/40 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:-rotate-1">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-secondary-orange/20 rounded-full blur-xl"></div>
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center shadow-2xl group-hover:shadow-secondary-orange/50 group-hover:scale-110 transition-all duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary-orange transition-colors">
                  Service Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We deliver exceptional results that exceed expectations, providing 24/7 support and ensuring every project achieves maximum impact.
                </p>
                
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary-orange to-primary-orange rounded-full w-[98%] group-hover:w-full transition-all duration-1000"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Excellence Score: 98%</div>
              </div>
            </div>

            {/* Value Card 5 - Collaboration */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-orange/30 to-secondary-orange/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-primary-orange/20 group-hover:border-primary-orange/40 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:rotate-1">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary-orange/20 rounded-full blur-xl"></div>
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center shadow-2xl group-hover:shadow-primary-orange/50 group-hover:scale-110 transition-all duration-300">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-orange transition-colors">
                  True Partnership
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We work as an extension of your team, fostering collaborative relationships that drive mutual success and long-term growth.
                </p>
                
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full w-[96%] group-hover:w-full transition-all duration-1000"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Partnership Score: 96%</div>
              </div>
            </div>

            {/* Value Card 6 - Impact */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary-orange/30 to-primary-orange/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-secondary-orange/20 group-hover:border-secondary-orange/40 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:-rotate-1">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-secondary-orange/20 rounded-full blur-xl"></div>
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-secondary-orange to-primary-orange flex items-center justify-center shadow-2xl group-hover:shadow-secondary-orange/50 group-hover:scale-110 transition-all duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary-orange transition-colors">
                  Measurable Impact
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We focus on delivering tangible business results, with every AI solution designed to drive measurable improvements and ROI.
                </p>
                
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary-orange to-primary-orange rounded-full w-[97%] group-hover:w-full transition-all duration-1000"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Impact Score: 97%</div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-16">
            <div className="relative inline-block group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-orange/50 to-secondary-orange/50 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <Link href="/contact">
                <button className="relative bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-secondary-orange hover:to-primary-orange text-white font-bold px-8 py-4 rounded-full shadow-2xl group-hover:shadow-primary-orange/50 transition-all duration-300 group-hover:scale-110 transform">
                  Experience Our Values in Action
                  <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Advanced Design */}
      <section id="team" className="py-24 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle, #FF6B35 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="px-6 py-3 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 text-primary-orange text-sm font-bold rounded-full border border-primary-orange/20 shadow-lg backdrop-blur-sm">
                👥 Our Experts
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="text-gray-900">Meet Our </span>
              <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of <strong className="text-primary-orange">AI researchers, engineers, and strategists</strong> brings together decades of experience from leading tech companies and research institutions worldwide
            </p>
          </div>

          {/* Advanced Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Team Member 1 - Enhanced Design */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-orange/30 to-secondary-orange/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-primary-orange/20 group-hover:border-primary-orange/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Enhanced Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl group-hover:scale-110 transition-transform">
                    JD
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary-orange transition-colors">Dr. Jane Davis</h3>
                  <p className="text-primary-orange font-semibold text-sm mb-3">CEO & Co-Founder</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    PhD in Machine Learning with 15+ years of industry experience from leading AI research institutions.
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1 justify-center">
                    <span className="px-2 py-1 bg-primary-orange/10 text-primary-orange text-xs rounded-full font-medium">AI Research</span>
                    <span className="px-2 py-1 bg-secondary-orange/10 text-secondary-orange text-xs rounded-full font-medium">Strategy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary-orange/30 to-primary-orange/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-secondary-orange/20 group-hover:border-secondary-orange/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-orange to-primary-orange rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-secondary-orange to-primary-orange rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl group-hover:scale-110 transition-transform">
                    MP
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-secondary-orange transition-colors">Dr. Michael Park</h3>
                  <p className="text-secondary-orange font-semibold text-sm mb-3">CTO & Co-Founder</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Former AI Research Lead at leading tech company with deep expertise in Natural Language Processing.
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    <span className="px-2 py-1 bg-secondary-orange/10 text-secondary-orange text-xs rounded-full font-medium">NLP</span>
                    <span className="px-2 py-1 bg-primary-orange/10 text-primary-orange text-xs rounded-full font-medium">Engineering</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-orange/30 to-secondary-orange/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-primary-orange/20 group-hover:border-primary-orange/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl group-hover:scale-110 transition-transform">
                    SR
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary-orange transition-colors">Sarah Rodriguez</h3>
                  <p className="text-primary-orange font-semibold text-sm mb-3">Chief Product Officer</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Expert in AI product design and user experience with focus on making AI accessible and intuitive.
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    <span className="px-2 py-1 bg-primary-orange/10 text-primary-orange text-xs rounded-full font-medium">Product</span>
                    <span className="px-2 py-1 bg-secondary-orange/10 text-secondary-orange text-xs rounded-full font-medium">UX Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary-orange/30 to-primary-orange/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-secondary-orange/20 group-hover:border-secondary-orange/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-orange to-primary-orange rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-secondary-orange to-primary-orange rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl group-hover:scale-110 transition-transform">
                    AK
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-secondary-orange transition-colors">Alex Kim</h3>
                  <p className="text-secondary-orange font-semibold text-sm mb-3">Head of Engineering</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Software architect specializing in scalable AI systems and infrastructure at enterprise scale.
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    <span className="px-2 py-1 bg-secondary-orange/10 text-secondary-orange text-xs rounded-full font-medium">Architecture</span>
                    <span className="px-2 py-1 bg-primary-orange/10 text-primary-orange text-xs rounded-full font-medium">Scalability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Stats - Advanced Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-orange to-secondary-orange mb-3 shadow-xl group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-orange to-primary-orange mb-3 shadow-xl group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">25+</div>
              <div className="text-sm text-gray-600">PhD Researchers</div>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-orange to-secondary-orange mb-3 shadow-xl group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-orange to-primary-orange mb-3 shadow-xl group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">AI Specializations</div>
            </div>
          </div>

          {/* Join Team CTA */}
          <div className="text-center">
            <div className="relative inline-block group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-orange/50 to-secondary-orange/50 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <Link href="/contact">
                <button className="relative bg-gradient-to-r from-primary-orange to-secondary-orange hover:from-secondary-orange hover:to-primary-orange text-white font-bold px-8 py-4 rounded-full shadow-2xl group-hover:shadow-primary-orange/50 transition-all duration-300 group-hover:scale-110 transform">
                  Join Our Expert Team
                  <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary-orange via-secondary-orange to-primary-orange">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/90 via-secondary-orange/90 to-primary-orange/90"></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Dynamic Pattern */}
          <div className="absolute inset-0 opacity-[0.05] animate-pulse" style={{
            backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            {/* Enhanced Header */}
            <div className="mb-8">
              <div className="inline-block mb-6 animate-fade-in">
                <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/30 shadow-xl">
                  🚀 Ready to Transform?
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Join Us on Our</span>
                <span className="block text-white/90">AI Innovation Journey</span>
              </h2>
              
              <div className="w-32 h-1.5 bg-white/40 mx-auto mb-8 rounded-full"></div>
              
              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
                Ready to <strong className="text-white">transform your business with AI?</strong> Join thousands of companies who have already discovered the power of intelligent automation. Whether you're seeking <strong className="text-white">cutting-edge AI solutions</strong>, looking to <strong className="text-white">join our expert team</strong>, or want to <strong className="text-white">partner with us</strong> - we're here to help you succeed.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/contact">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-white/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="relative bg-white text-primary-orange border-2 border-white hover:bg-white/90 hover:text-primary-orange font-bold px-8 py-4 shadow-2xl group-hover:shadow-white/30 group-hover:scale-110 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Rocket className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                    Start Your AI Journey
                  </Button>
                </div>
              </Link>
              
              <Link href="/services">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="relative bg-transparent border-2 border-white/60 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 shadow-xl group-hover:shadow-white/20 group-hover:scale-110 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
                  >
                    <Brain className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Explore AI Services
                  </Button>
                </div>
              </Link>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center group">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">2100+</div>
                <div className="text-sm text-white/80">Successful Projects</div>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">5.0/5</div>
                <div className="text-sm text-white/80">Client Rating</div>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-white/80">Countries Served</div>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">60%</div>
                <div className="text-sm text-white/80">Cost Savings</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm mb-4">
                Have questions? Our AI experts are here to help 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available Now</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Response within 2 hours</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Enterprise-grade security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
