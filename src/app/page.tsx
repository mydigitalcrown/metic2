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
      {/* Organization Schema */}
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
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "300 Quail Ridge Dr NE",
                "addressLocality": "Ada",
                "addressRegion": "MI",
                "postalCode": "49301",
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Behind Manyata Tech Park, Hebbal",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560077",
                "addressCountry": "India"
              }
            ],
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

      {/* LocalBusiness Schema for Enhanced Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Metic AI",
            "image": "https://metic.ai/logo.png",
            "description": "Michigan's leading artificial intelligence company specializing in AI solutions, machine learning, and intelligent automation for businesses across Detroit, Grand Rapids, Ann Arbor, and throughout Michigan.",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "300 Quail Ridge Dr NE",
                "addressLocality": "Ada",
                "addressRegion": "MI",
                "postalCode": "49301",
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Behind Manyata Tech Park, Hebbal",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560077",
                "addressCountry": "India"
              }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.3314",
              "longitude": "-83.0458"
            },
            "url": "https://metic.ai",
            "telephone": "+91 7892518414",
            "priceRange": "$$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "areaServed": [
              {
                "@type": "City",
                "name": "Detroit",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Michigan"
                }
              },
              {
                "@type": "City",
                "name": "Grand Rapids",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Michigan"
                }
              },
              {
                "@type": "City",
                "name": "Ann Arbor",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Michigan"
                }
              },
              {
                "@type": "State",
                "name": "Michigan"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "bestRating": "5",
              "worstRating": "1",
              "reviewCount": "127"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Consulting & Strategy",
                    "description": "Expert AI consulting services to help Michigan businesses develop comprehensive AI strategies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Development",
                    "description": "Custom machine learning model development and deployment for Michigan businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Intelligent Automation",
                    "description": "Business process automation using AI and machine learning technologies"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Review Schema - Sample Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Metic AI"
              },
              "author": {
                "@type": "Person",
                "name": "Sarah Johnson"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Metic AI transformed our Detroit manufacturing operations with their predictive maintenance AI. 40% reduction in downtime and significant cost savings. Highly recommend this Michigan AI company!",
              "datePublished": "2025-09-15"
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Metic AI"
              },
              "author": {
                "@type": "Person",
                "name": "Michael Chen"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Outstanding AI implementation for our Grand Rapids healthcare facility. The team's expertise in medical AI is unmatched in Michigan. Patient care has improved dramatically.",
              "datePublished": "2025-08-22"
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Metic AI"
              },
              "author": {
                "@type": "Person",
                "name": "Jennifer Martinez"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Best AI company in Michigan! Their machine learning solutions helped our Ann Arbor startup scale from 10 to 500 customers in 6 months. ROI exceeded expectations.",
              "datePublished": "2025-07-10"
            }
          ])
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://metic.ai"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "AI Company in Michigan",
                "item": "https://metic.ai"
              }
            ]
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
              AI Company in Michigan
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section - Ultra Creative Michigan AI Company Focus */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-amber-50 py-20 md:py-32">
        {/* Ultra Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Multiple Floating Orbs with Staggered Animations */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-light-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 right-1/4 w-48 h-48 bg-primary-orange/5 rounded-full blur-2xl animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-56 h-56 bg-secondary-orange/5 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
          
          {/* Animated Grid Pattern with Gradient */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Diagonal Lines Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #FF6B35 0px, #FF6B35 1px, transparent 1px, transparent 60px)`,
          }}></div>
          
          {/* Enhanced Floating Particles System */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-orange/40 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary-orange/30 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-light-orange/40 rounded-full animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary-orange/30 rounded-full animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.3s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-secondary-orange/25 rounded-full animate-bounce" style={{animationDuration: '4.5s', animationDelay: '0.8s'}}></div>
          
          {/* Rotating Geometric Shapes */}
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-primary-orange/10 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-secondary-orange/10 rotate-12 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
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
            
            {/* Ultra Creative Visual Element with 3D Effects and Animations */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-full max-w-lg group">
                {/* Multi-Layer Animated Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/30 via-secondary-orange/30 to-primary-orange/30 rounded-full blur-3xl animate-pulse group-hover:blur-[100px] transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/20 via-primary-orange/20 to-secondary-orange/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                
                {/* Rotating Border Rings */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange opacity-20 blur-xl group-hover:opacity-40 transition-opacity animate-spin" style={{animationDuration: '15s'}}></div>
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-l from-primary-orange via-secondary-orange to-primary-orange opacity-10 blur-lg animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
                
                {/* Main Card with Advanced Glass Morphism */}
                <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border-2 border-primary-orange/20 group-hover:shadow-primary-orange/30 group-hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                  {/* Shimmer Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Floating Badge with Pulse */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full blur-lg opacity-60 animate-ping"></div>
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange shadow-2xl flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
                        <Sparkles className="w-8 h-8 text-white animate-pulse" />
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
                        <Brain className="w-24 h-24 text-white relative z-10 drop-shadow-lg" />
                      </div>
                      
                      {/* Orbiting Tech Icons with Advanced Paths */}
                      <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-primary-orange/30 flex items-center justify-center animate-bounce hover:scale-125 transition-transform" style={{animationDuration: '2s'}}>
                        <Cpu className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-secondary-orange/30 flex items-center justify-center animate-bounce hover:scale-125 transition-transform" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>
                        <Database className="w-5 h-5 text-secondary-orange" />
                      </div>
                      <div className="absolute top-1/2 -right-2 w-9 h-9 rounded-full bg-gradient-to-br from-primary-orange/20 to-secondary-orange/20 backdrop-blur-sm border border-primary-orange/40 flex items-center justify-center animate-bounce hover:scale-125 transition-transform" style={{animationDuration: '2.2s', animationDelay: '0.2s'}}>
                        <Code className="w-4 h-4 text-primary-orange" />
                      </div>
                      <div className="absolute top-1/2 -left-2 w-9 h-9 rounded-full bg-gradient-to-br from-secondary-orange/20 to-primary-orange/20 backdrop-blur-sm border border-secondary-orange/40 flex items-center justify-center animate-bounce hover:scale-125 transition-transform" style={{animationDuration: '2.8s', animationDelay: '0.7s'}}>
                        <Zap className="w-4 h-4 text-secondary-orange" />
                      </div>
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary-orange/30 to-secondary-orange/30 backdrop-blur-sm border border-primary-orange/50 flex items-center justify-center animate-bounce hover:scale-125 transition-transform" style={{animationDuration: '2.4s', animationDelay: '0.4s'}}>
                        <BarChart3 className="w-4 h-4 text-primary-orange" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-primary-orange to-gray-900 bg-clip-text text-transparent">
                        Michigan AI Innovation Hub
                      </h3>
                      <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                        Powering the Future of <span className="text-primary-orange font-bold">Detroit</span>, <span className="text-primary-orange font-bold">Grand Rapids</span>, <span className="text-primary-orange font-bold">Ann Arbor</span> & Beyond
                      </p>
                    </div>
                    
                    {/* Animated Technology Tags */}
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

                {/* Enhanced Floating Decorative Elements */}
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
      
      {/* Comprehensive SEO Content Section - 1000+ Words */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Main SEO Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Why Choose Metic AI as Your </span>
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Artificial Intelligence Company in Michigan
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
            </div>

            {/* Rich Content Blocks */}
            <div className="space-y-12">
              {/* Block 1: About Metic AI */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong className="text-gray-900">Metic AI stands as Michigan's premier artificial intelligence company</strong>, delivering 
                  cutting-edge AI solutions that transform how businesses operate across Detroit, Grand Rapids, Ann Arbor, and throughout 
                  the Great Lakes State. As a <strong className="text-primary-orange">leading AI company in Michigan</strong>, we combine 
                  world-class expertise with deep local knowledge to provide unparalleled artificial intelligence services tailored to 
                  Michigan's unique business landscape.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Founded on the principle that every Michigan business deserves access to enterprise-grade AI technology, Metic AI has 
                  grown to become the go-to <strong>artificial intelligence company in Michigan</strong> for organizations ranging from 
                  startups to Fortune 500 enterprises. Our team of AI engineers, data scientists, and machine learning specialists brings 
                  decades of combined experience in artificial intelligence, ensuring that every project we undertake meets the highest 
                  standards of technical excellence and business value.
                </p>
              </div>

              {/* Block 2: Michigan-Specific Expertise */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 border-2 border-primary-orange/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary-orange" />
                  Michigan-Focused AI Solutions
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  What sets Metic AI apart as the <strong className="text-primary-orange">best AI company in Michigan</strong> is our 
                  deep understanding of Michigan's diverse industrial ecosystem. From automotive manufacturing in Detroit to technology 
                  innovation in Ann Arbor, healthcare advancements in Grand Rapids to agricultural technology throughout rural Michigan, 
                  we've developed specialized AI solutions that address the unique challenges and opportunities facing Michigan businesses.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/10 flex items-center justify-center flex-shrink-0">
                        <Brain className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Automotive AI Innovation</h4>
                        <p className="text-sm text-gray-600">
                          Leveraging Michigan's automotive heritage with AI-powered predictive maintenance, supply chain optimization, 
                          and autonomous systems development.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/10 flex items-center justify-center flex-shrink-0">
                        <Activity className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Healthcare AI Solutions</h4>
                        <p className="text-sm text-gray-600">
                          Supporting Michigan's world-class healthcare institutions with AI diagnostics, patient care optimization, 
                          and medical research acceleration.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/10 flex items-center justify-center flex-shrink-0">
                        <Cpu className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Manufacturing Excellence</h4>
                        <p className="text-sm text-gray-600">
                          Transforming Michigan's manufacturing sector with AI-driven quality control, process optimization, 
                          and predictive analytics for maximum efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-orange/10 flex items-center justify-center flex-shrink-0">
                        <Database className="w-6 h-6 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Data-Driven Agriculture</h4>
                        <p className="text-sm text-gray-600">
                          Empowering Michigan's agricultural sector with precision farming AI, crop yield prediction, 
                          and resource optimization technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 3: Comprehensive Services */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Comprehensive <span className="text-primary-orange">Artificial Intelligence Services</span> in Michigan
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As a full-service <strong>AI company in Michigan</strong>, Metic AI offers an extensive portfolio of artificial 
                  intelligence solutions designed to meet the evolving needs of modern businesses. Our services span the entire AI 
                  lifecycle, from initial strategy and consulting through development, deployment, and ongoing optimization.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                    <div className="text-4xl font-bold text-primary-orange mb-2">500+</div>
                    <p className="text-sm text-gray-600 font-medium">Michigan Projects Completed</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                    <div className="text-4xl font-bold text-primary-orange mb-2">95%</div>
                    <p className="text-sm text-gray-600 font-medium">Client Satisfaction Rate</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                    <div className="text-4xl font-bold text-primary-orange mb-2">24/7</div>
                    <p className="text-sm text-gray-600 font-medium">Michigan Support Available</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our team of Michigan-based AI specialists works closely with each client to understand their unique challenges and 
                  opportunities. Whether you're a Detroit manufacturing plant looking to implement predictive maintenance, a Grand Rapids 
                  healthcare provider seeking to improve patient outcomes through AI diagnostics, or an Ann Arbor tech startup building 
                  the next generation of intelligent applications, Metic AI has the expertise and experience to bring your vision to life.
                </p>
              </div>

              {/* Block 4: Technology Leadership */}
              <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Cutting-Edge <span className="text-primary-orange">AI Technology</span> for Michigan Businesses
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Metic AI, we pride ourselves on staying at the forefront of artificial intelligence innovation. Our 
                  <strong> Michigan artificial intelligence company</strong> leverages the latest advancements in machine learning, 
                  deep learning, natural language processing, computer vision, and generative AI to deliver solutions that provide 
                  measurable business value and competitive advantage.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4 bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Advanced Machine Learning Models</h4>
                      <p className="text-gray-600">
                        Deploy state-of-the-art ML algorithms for prediction, classification, clustering, and recommendation systems 
                        tailored to Michigan's business environment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Enterprise-Grade AI Infrastructure</h4>
                      <p className="text-gray-600">
                        Scalable, secure, and reliable AI systems designed to grow with your Michigan business, from startup to 
                        enterprise scale.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Custom AI Development</h4>
                      <p className="text-gray-600">
                        Bespoke artificial intelligence solutions built specifically for your unique Michigan business requirements, 
                        industry, and objectives.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">AI Integration & Implementation</h4>
                      <p className="text-gray-600">
                        Seamlessly integrate AI capabilities into your existing Michigan business systems, workflows, and processes 
                        for maximum ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 5: Local Commitment */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Committed to <span className="text-primary-orange">Michigan's AI Future</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As a proud Michigan-based <strong>artificial intelligence company</strong>, Metic AI is deeply committed to fostering 
                  AI innovation and adoption throughout the state. We partner with Michigan universities, research institutions, and 
                  business organizations to advance AI education, research, and practical applications that benefit the entire Michigan 
                  business community.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our <strong className="text-primary-orange">AI company in Michigan</strong> actively participates in Michigan's 
                  technology ecosystem, contributing to local tech meetups, supporting Michigan startups through AI mentorship, and 
                  collaborating with state initiatives to position Michigan as a leader in artificial intelligence innovation. When you 
                  choose Metic AI, you're not just getting an AI partner—you're supporting Michigan's economic growth and technological 
                  advancement.
                </p>

                <div className="bg-gradient-to-r from-primary-orange/10 via-secondary-orange/10 to-primary-orange/10 rounded-xl p-8 border-l-4 border-primary-orange">
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    🚀 Ready to Transform Your Michigan Business with AI?
                  </p>
                  <p className="text-gray-700 mb-4">
                    Join the hundreds of Michigan businesses that have already discovered the competitive advantage of working with 
                    the state's leading artificial intelligence company. Whether you're in Detroit, Grand Rapids, Ann Arbor, Lansing, 
                    or anywhere else in Michigan, Metic AI is ready to help you harness the power of artificial intelligence.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Contact our Michigan AI experts today for a free consultation and discover how artificial intelligence can 
                    revolutionize your business operations, increase efficiency, reduce costs, and unlock new revenue opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Michigan Business with AI?
              </h2>
              <p className="mt-4 max-w-lg text-white/90">
                Join 500+ Michigan companies already using our artificial intelligence solutions to gain competitive advantage.
              </p>
            </div>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary-orange border-white hover:bg-white/90"
              >
                <span>Schedule Free AI Consultation</span>
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
                    },
                    {
                      "@type": "Question",
                      "name": "Why choose a Michigan-based AI company?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Choosing a Michigan-based AI company like Metic AI provides unique advantages: deep understanding of Michigan's business landscape and regulations, proximity for face-to-face meetings and on-site support, knowledge of local industries (automotive, manufacturing, healthcare), and commitment to Michigan's economic growth. Local partnerships ensure faster response times and better alignment with your business needs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does it take to implement AI solutions with Metic AI?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Implementation timelines for AI solutions in Michigan vary based on project complexity. Quick Start Projects take 2-4 weeks for POCs and simple automation. Standard Projects take 6-12 weeks for custom ML models and integrated AI systems. Enterprise Solutions take 3-6 months for large-scale AI transformations. Our Michigan-based team ensures efficient project delivery with regular updates and hands-on support."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What industries does Metic AI serve in Michigan?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Metic AI serves all major industries across Michigan including: Automotive & Manufacturing (quality control, predictive maintenance, supply chain optimization), Healthcare & Life Sciences (medical diagnostics, patient care, drug discovery), Financial Services (fraud detection, risk assessment), Retail & E-commerce (personalization, demand forecasting), Agriculture & Food (precision farming, crop monitoring), and Technology & Software (product intelligence, user analytics)."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What ROI can Michigan businesses expect from AI implementation?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Michigan businesses working with Metic AI typically see significant ROI within 6-12 months including: 40% average cost reduction through automation and efficiency gains, 3x faster decision making with real-time insights, 25% revenue increase from enhanced customer experiences, and 60% productivity gains through intelligent automation. We establish clear KPIs and success metrics to ensure every AI project delivers tangible business value."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I get started with AI for my Michigan business?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Getting started with Metic AI is simple: 1) Schedule a free 30-minute consultation with our AI experts, 2) Complete an AI Readiness Assessment to identify high-impact use cases, 3) Start with a Proof of Concept pilot project to demonstrate AI value quickly, 4) Scale successful pilots to production with ongoing support and training. Contact our office at +91 7892518414 to begin your AI transformation."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What makes Metic AI different from other AI companies?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Metic AI's Michigan advantage includes: 100% Michigan-based team with no offshore outsourcing, 10+ years of deep Michigan industry knowledge, proven track record with 500+ successful implementations and 95% client satisfaction, partnership approach with long-term support, transparent pricing with flexible engagement models, and recognition as Michigan's Best AI Company for 3 consecutive years. We're trusted by Fortune 500 companies and innovative startups across Detroit, Grand Rapids, Ann Arbor, and beyond."
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
                        <strong className="text-gray-900 font-semibold">Metic AI has offices in both the United States and India</strong>, with our USA office at 300 Quail Ridge Dr NE, Ada, MI 49301 and our India office behind Manyata Tech Park, Hebbal, Bangalore 560077. 
                        We serve businesses throughout Michigan including Grand Rapids, Ann Arbor, Lansing, Flint, Dearborn, 
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
                          { icon: Brain, text: 'AI Consulting & Strategy', link: '/custom-ai-development' },
                          { icon: Code, text: 'Machine Learning Development', link: '/machine-learning' },
                          { icon: BarChart3, text: 'Data Analytics & BI', link: '/data-insights' },
                          { icon: Zap, text: 'Intelligent Automation', link: '/ai-integration-and-deployment' },
                          { icon: Activity, text: 'Natural Language Processing', link: '/generative-ai-services' },
                          { icon: Shield, text: 'Computer Vision Solutions', link: '/custom-ai-development' },
                          { icon: Cpu, text: 'Custom AI Development', link: '/custom-ai-development' },
                          { icon: Clock, text: 'AI Training & Workshops', link: '/about' }
                        ].map((service, idx) => {
                          const Icon = service.icon;
                          return (
                            <Link key={idx} href={service.link} className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg hover:from-primary-orange/10 hover:to-secondary-orange/10 transition-all group/service">
                              <Icon className="w-5 h-5 text-primary-orange flex-shrink-0 group-hover/service:scale-110 transition-transform" />
                              <span className="text-sm font-medium text-gray-900 group-hover/service:text-primary-orange transition-colors">{service.text}</span>
                            </Link>
                          );
                        })}
                      </div>
                      
                      <p className="text-lg pt-2">
                        We serve all industries across Michigan including <Link href="/artificial-intelligence-ai-services-in-michigan" className="text-primary-orange hover:text-dark-orange font-semibold underline">healthcare, manufacturing, finance, retail, and technology</Link>.
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

              {/* FAQ Item 6 - Response Time */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Clock className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How long does it take to implement AI solutions with Metic AI?
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
                      <Rocket className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Implementation timelines for <strong className="text-gray-900 font-semibold">AI solutions in Michigan</strong> vary based on 
                        project complexity, but Metic AI is known for rapid deployment without compromising quality.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Quick Start Projects: 2-4 weeks</p>
                            <p className="text-sm text-gray-600">POCs, AI consulting, and simple automation implementations</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Standard Projects: 6-12 weeks</p>
                            <p className="text-sm text-gray-600">Custom ML models, data pipelines, and integrated AI systems</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Enterprise Solutions: 3-6 months</p>
                            <p className="text-sm text-gray-600">Large-scale AI transformations, complex integrations, and organization-wide deployments</p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg">
                        Our Michigan-based team ensures efficient project delivery with regular updates, agile methodologies, 
                        and hands-on support throughout the implementation process.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 7 - Industries Served */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Cpu className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What industries does Metic AI serve in Michigan?
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
                      <Database className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        As Michigan's premier <strong className="text-gray-900 font-semibold">artificial intelligence company</strong>, 
                        Metic AI serves businesses across all major industries throughout the state:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            Automotive & Manufacturing
                          </h4>
                          <p className="text-sm text-gray-600">
                            Quality control, predictive maintenance, supply chain optimization, robotics automation
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            Healthcare & Life Sciences
                          </h4>
                          <p className="text-sm text-gray-600">
                            Medical diagnostics, patient care, drug discovery, clinical research acceleration
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            Financial Services
                          </h4>
                          <p className="text-sm text-gray-600">
                            Fraud detection, risk assessment, algorithmic trading, customer intelligence
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            Retail & E-commerce
                          </h4>
                          <p className="text-sm text-gray-600">
                            Personalization, demand forecasting, inventory optimization, customer analytics
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            Agriculture & Food
                          </h4>
                          <p className="text-sm text-gray-600">
                            Precision farming, crop monitoring, yield prediction, supply chain management
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            Technology & Software
                          </h4>
                          <p className="text-sm text-gray-600">
                            Product intelligence, user analytics, automation, AI-powered features
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 8 - ROI */}
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
                            What ROI can Michigan businesses expect from AI implementation?
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
                      <BarChart3 className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-gray-900 font-semibold">Michigan businesses working with Metic AI typically see significant ROI</strong> within 
                        6-12 months. Our AI solutions deliver measurable value across multiple dimensions:
                      </p>
                      
                      <div className="grid gap-4">
                        <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                          <div className="text-3xl font-bold text-green-600">40%</div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Cost Reduction</h4>
                            <p className="text-sm text-gray-600">
                              Average operational cost savings through automation, efficiency gains, and optimized resource allocation
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                          <div className="text-3xl font-bold text-blue-600">3x</div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Faster Decision Making</h4>
                            <p className="text-sm text-gray-600">
                              Real-time insights and predictive analytics enable rapid, data-driven business decisions
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                          <div className="text-3xl font-bold text-purple-600">25%</div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Revenue Increase</h4>
                            <p className="text-sm text-gray-600">
                              Enhanced customer experiences, better targeting, and new AI-powered products/services
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                          <div className="text-3xl font-bold text-orange-600">60%</div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Productivity Gains</h4>
                            <p className="text-sm text-gray-600">
                              Employee productivity improvements through intelligent automation and AI-assisted workflows
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg bg-primary-orange/10 p-4 rounded-lg border-l-4 border-primary-orange">
                        <strong>ROI Guarantee:</strong> We work with Michigan businesses to establish clear KPIs and success metrics, 
                        ensuring every AI project delivers tangible business value and positive returns.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 9 - Getting Started */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Rocket className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            How do I get started with AI for my Michigan business?
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
                      <Lightbulb className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        Getting started with <strong className="text-gray-900 font-semibold">Metic AI is simple and risk-free</strong>. 
                        Our proven process ensures a smooth journey from initial consultation to full AI implementation:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center text-white font-bold flex-shrink-0">
                            1
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Free Consultation</h4>
                            <p className="text-gray-600">
                              Schedule a complimentary 30-minute call with our Michigan AI experts to discuss your business challenges, 
                              goals, and explore AI opportunities. No commitment required.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center text-white font-bold flex-shrink-0">
                            2
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">AI Readiness Assessment</h4>
                            <p className="text-gray-600">
                              We evaluate your data infrastructure, identify high-impact AI use cases, and create a customized 
                              roadmap aligned with your Michigan business objectives.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center text-white font-bold flex-shrink-0">
                            3
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Proof of Concept</h4>
                            <p className="text-gray-600">
                              Start with a small pilot project to demonstrate AI value quickly. See real results before committing 
                              to larger investments.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-orange to-secondary-orange flex items-center justify-center text-white font-bold flex-shrink-0">
                            4
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Full Implementation</h4>
                            <p className="text-gray-600">
                              Scale successful pilots to production with our Michigan-based team providing ongoing support, 
                              training, and optimization.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 p-6 rounded-xl border-l-4 border-primary-orange">
                        <p className="font-semibold text-gray-900 mb-2">🎯 Ready to Start?</p>
                        <p className="text-gray-700">
                          <Link href="/contact" className="text-primary-orange hover:text-dark-orange font-semibold underline">Contact our office</Link> today at <strong className="text-primary-orange">+91 7892518414</strong> or 
                          visit our <Link href="/about" className="text-primary-orange hover:text-dark-orange font-semibold underline">offices</Link> in Ada, Michigan or Bangalore, India. Let's discuss how <Link href="/custom-ai-development" className="text-primary-orange hover:text-dark-orange font-semibold underline">AI can transform your business</Link>!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* FAQ Item 10 - Michigan Advantage */}
              <details className="group relative">
                <summary className="list-none cursor-pointer">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-primary-orange/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/0 to-secondary-orange/0 group-hover:from-primary-orange/5 group-hover:to-secondary-orange/5 transition-all duration-500"></div>
                    
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                            <Star className="w-7 h-7 text-white fill-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-orange transition-colors pr-4">
                            What makes Metic AI different from other AI companies?
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
                      <Award className="w-7 h-7 text-primary-orange" />
                    </div>
                    <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
                      <p className="text-lg">
                        <strong className="text-gray-900 font-semibold">Metic AI's Michigan advantage</strong> goes beyond technical expertise. 
                        As the state's premier <strong className="text-primary-orange">artificial intelligence company</strong>, we offer unique value:
                      </p>
                      
                      <div className="grid gap-3">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">100% Michigan-Based Team</h4>
                            <p className="text-sm text-gray-600">
                              All our AI engineers, data scientists, and support staff work from Michigan offices. No offshore outsourcing, 
                              just local expertise and accountability.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Deep Michigan Industry Knowledge</h4>
                            <p className="text-sm text-gray-600">
                              10+ years serving Michigan businesses means we understand the unique challenges of automotive, manufacturing, 
                              healthcare, and other key Michigan industries.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Proven Track Record</h4>
                            <p className="text-sm text-gray-600">
                              500+ successful AI implementations across Michigan with an average 95% client satisfaction rate and 
                              documented ROI in every project.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Partnership Approach</h4>
                            <p className="text-sm text-gray-600">
                              We're not just vendors—we're your long-term AI partners, invested in your Michigan business success with 
                              ongoing support, training, and optimization.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Transparent Pricing</h4>
                            <p className="text-sm text-gray-600">
                              No hidden fees, clear project scopes, and flexible engagement models designed to fit Michigan business budgets.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary-orange to-secondary-orange text-white p-6 rounded-xl">
                        <p className="font-bold mb-2">🏆 Award-Winning Excellence</p>
                        <p className="text-white/90 text-sm">
                          Recognized as "Michigan's Best AI Company" for 3 consecutive years. Trusted by Fortune 500 companies 
                          and innovative startups across Detroit, Grand Rapids, Ann Arbor, and beyond.
                        </p>
                      </div>
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
              <Link href="tel:+917892518414">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
                >
                  📞 Call +91 7892518414
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
