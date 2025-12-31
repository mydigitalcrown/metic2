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
            "name": "Metic.ai - Leading Artificial Intelligence Company",
            "description": "Premier artificial intelligence company providing AI solutions, machine learning services, and automation technology for businesses worldwide. Expert AI consulting and implementation services.",
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
            "geo": [
              {
                "@type": "GeoCoordinates",
                "latitude": "42.9634",
                "longitude": "-85.4681"
              },
              {
                "@type": "GeoCoordinates", 
                "latitude": "13.0827",
                "longitude": "77.5877"
              }
            ],
            "areaServed": [
              {
                "@type": "Country",
                "name": "United States"
              },
              {
                "@type": "Country", 
                "name": "India"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Global"
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/metic-ai",
              "https://twitter.com/metic_ai"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "2100"
            },
            "knowsAbout": [
              "Artificial Intelligence",
              "Machine Learning", 
              "Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
              "AI Consulting",
              "AI Development",
              "AI Implementation",
              "Business Intelligence",
              "Predictive Analytics"
            ],
            "founder": {
              "@type": "Person",
              "name": "Metic.ai Founders"
            },
            "foundingDate": "2020",
            "numberOfEmployees": "100-500"
          })
        }}
      />

      {/* LocalBusiness Schema for Enhanced Local SEO - US Location */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Metic.ai - Artificial Intelligence Company Near You",
            "image": "https://metic.ai/logo.png",
            "description": "Leading artificial intelligence company providing AI solutions, machine learning services, and intelligent automation for businesses worldwide. Find the best AI company near you with proven expertise and 2100+ successful implementations.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "300 Quail Ridge Dr NE",
              "addressLocality": "Ada",
              "addressRegion": "MI",
              "postalCode": "49301",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.9634",
              "longitude": "-85.4681"
            },
            "url": "https://metic.ai",
            "telephone": "+1-789-251-8414",
            "email": "hello@metic.ai",
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
                "@type": "Country",
                "name": "United States"
              },
              {
                "@type": "Country",
                "name": "India"
              },
              {
                "@type": "Country",
                "name": "Canada"
              },
              {
                "@type": "Country",
                "name": "United Kingdom"
              },
              {
                "@type": "Country",
                "name": "Australia"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Global"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "39.8283",
                "longitude": "-98.5795"
              },
              "geoRadius": 20000000
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "bestRating": "5",
              "worstRating": "1",
              "reviewCount": "2100"
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
                    "description": "Expert AI consulting services to help businesses develop comprehensive AI strategies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Learning Development",
                    "description": "Custom machine learning model development and deployment for businesses"
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
                "name": "Metic AI",
                "url": "https://metic.ai"
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
              "reviewBody": "Metic.ai transformed our manufacturing operations with their predictive maintenance AI. 40% reduction in downtime and significant cost savings. Highly recommend this outstanding AI company!",
              "datePublished": "2025-09-15"
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Metic AI",
                "url": "https://metic.ai"
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
              "reviewBody": "Outstanding AI implementation for our healthcare facility. The team's expertise in medical AI is unmatched globally. Patient care has improved dramatically.",
              "datePublished": "2025-08-22"
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Metic AI",
                "url": "https://metic.ai"
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
              "reviewBody": "Best AI company I've worked with! Their machine learning solutions helped our startup scale from 10 to 500 customers in 6 months. ROI exceeded expectations.",
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
                "name": "Artificial Intelligence Company Near Me",
                "item": "https://metic.ai"
              }
            ]
          })
        }}
      />

      {/* Article Schema for SEO & Content Discovery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Artificial Intelligence Company Near Me | Find the Best AI Solutions",
            "description": "Comprehensive guide to finding the best Artificial Intelligence Company Near You. Expert AI services, machine learning solutions, and intelligent automation for businesses worldwide.",
            "image": "https://metic.ai/og-image.jpg",
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
            "datePublished": "2025-01-01",
            "dateModified": "2025-12-31",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://metic.ai"
            },
            "articleSection": "Artificial Intelligence Services",
            "keywords": "Artificial Intelligence Company Near Me, AI Company Near Me, Best AI Company, Machine Learning Services, AI Solutions",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".hero-description", ".faq-section"]
            }
          })
        }}
      />

      {/* HowTo Schema for Voice Search & Featured Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Choose the Best Artificial Intelligence Company Near You",
            "description": "Step-by-step guide to selecting the right AI company for your business needs",
            "totalTime": "PT30M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "0"
            },
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Assess Your AI Needs",
                "text": "Identify specific business challenges and opportunities where AI can provide value. Consider areas like automation, predictive analytics, customer experience, or operational efficiency.",
                "url": "https://metic.ai#assess-needs"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Research AI Companies Near You",
                "text": "Look for AI companies with proven track records, client testimonials, and comprehensive service offerings. Check their portfolio of successful implementations and industry expertise.",
                "url": "https://metic.ai#research"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Schedule Free Consultations",
                "text": "Contact top AI companies for free consultations. Discuss your requirements, ask about their approach, and evaluate their understanding of your business needs.",
                "url": "https://metic.ai/contact"
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Start with a Proof of Concept",
                "text": "Begin with a small pilot project or POC to test the AI company's capabilities, communication, and delivery quality before committing to larger implementations.",
                "url": "https://metic.ai#poc"
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Scale Your AI Solutions",
                "text": "After successful pilots, scale your AI solutions to production with ongoing support and optimization. Establish clear KPIs and success metrics.",
                "url": "https://metic.ai#scale"
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
              Artificial Intelligence Company Near Me
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section - Artificial Intelligence Company Near Me Focus */}
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
              <span className="text-sm font-bold text-gray-800">Your Trusted AI Company</span>
              <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary-orange to-secondary-orange text-white rounded-full font-semibold shadow-lg">
                Near You
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-12 md:flex-row md:items-center">
            <div className="flex-1 space-y-8">
              {/* Enhanced H1 with Gradient Animation */}
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                <span className="block text-gray-900 mb-2">Artificial Intelligence</span>
                <span className="block bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Company Near Me
                </span>
                <span className="block text-gray-900 mt-2 text-4xl sm:text-5xl md:text-6xl">
                  Find the Best AI Solutions
                </span>
              </h1>
              
              {/* Enhanced Description with Better Typography */}
              <p className="hero-description max-w-[650px] text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                Looking for the best <strong className="text-gray-900 font-semibold">Artificial Intelligence Company Near Me</strong>? 
                <strong className="text-primary-orange font-semibold">Metic.ai</strong> is your trusted AI partner. 
                We have <strong className="text-primary-orange font-semibold">2100+ successful projects</strong>. 
                We deliver cutting-edge <strong className="text-gray-900 font-semibold">AI solutions</strong> and <strong className="text-gray-900 font-semibold">machine learning services</strong> for businesses worldwide.
              </p>

              {/* Enhanced Trust Indicators with Icons */}
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                    <Award className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">AI Certified</div>
                    <div className="text-xs text-gray-600">Industry Leader</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                    <Users className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">2100+ Clients</div>
                    <div className="text-xs text-gray-600">Global Reach</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                    <Star className="w-5 h-5 text-primary-orange fill-primary-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">5.0 Rating</div>
                    <div className="text-xs text-gray-600">2100+ Reviews</div>
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
                    <span>View AI Services Near You</span>
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
                  <div className="text-sm md:text-base text-gray-600 font-medium">Global Clients</div>
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
                  <div className="text-sm md:text-base text-gray-600 font-medium">Global Support</div>
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
                      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-primary-orange to-gray-900 bg-clip-text text-transparent">
                        Global AI Innovation Hub
                      </h2>
                      <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                        We help <span className="text-primary-orange font-bold">businesses worldwide</span> with <span className="text-primary-orange font-bold">smart AI solutions</span>
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

      {/* AI Services Near You Section - Advanced Interactive Cards */}
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
                ⚡ Why Choose Our AI Company Near You?
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="text-gray-900">What Services Does the Best </span>
              <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">AI Company Near Me</span>
              <span className="text-gray-900"> Provide?</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
            <div className="mt-6 text-gray-600 md:text-xl max-w-3xl mx-auto leading-relaxed">
              <p className="mb-4">
                We are a <strong className="text-gray-900">top AI company near you</strong>. We help businesses grow with AI solutions.
              </p>
              <ul className="space-y-2 text-left inline-block">
                <li className="flex items-start">
                  <span className="text-primary-orange mr-2">✓</span>
                  <span>AI solutions for startups and big companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-orange mr-2">✓</span>
                  <span>Grow your business with AI tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-orange mr-2">✓</span>
                  <span>We serve clients worldwide</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Advanced Service Cards with 3D Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1 - AI Consulting */}
            <Link href="/custom-ai-development/" className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-orange/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 block">
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
                  AI Consulting Services
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Expert AI consulting services for businesses worldwide. Strategic guidance to implement cutting-edge AI solutions.
                </p>
                
                {/* Hover CTA */}
                <div className="flex items-center text-primary-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>
            
            {/* Card 2 - AI Data Analytics */}
            <Link href="/data-insights/" className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-orange/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 block">
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
                  Transform business data into actionable insights with advanced AI analytics and predictive modeling.
                </p>
                
                <div className="flex items-center text-primary-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>
            
            {/* Card 3 - Machine Learning */}
            <Link href="/machine-learning/" className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-orange/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 block">
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
                  Custom machine learning models for enterprises. Build AI systems that learn and adapt to your business.
                </p>
                
                <div className="flex items-center text-primary-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>
            
            {/* Card 4 - AI Automation */}
            <Link href="/ai-integration-and-deployment/" className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-primary-orange/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 block">
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
                  Intelligent automation for businesses. Streamline operations with AI-powered workflow automation.
                </p>
                
                <div className="flex items-center text-primary-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange to-secondary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Service Areas - Near Me SEO */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gray-900">Where Can I Find </span>
              <span className="text-primary-orange">AI Services Near Me</span>
              <span className="text-gray-900">?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proudly serving businesses globally with world-class AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'USA', 'Canada', 'UK', 'Australia', 'India', 'Germany',
              'France', 'Japan', 'Singapore', 'UAE', 'Netherlands', 'Brazil'
            ].map((location, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-primary-orange hover:shadow-md transition-all text-center group">
                <MapPin className="w-5 h-5 text-primary-orange mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-800">{location}</p>
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
                <span className="text-gray-900">Why Should I Choose Metic AI as My </span>
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Artificial Intelligence Company Near Me?
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
            </div>

            {/* Rich Content Blocks */}
            <div className="space-y-12">
              {/* Block 1: About Metic AI */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong className="text-gray-900">Metic.ai stands as a premier artificial intelligence company</strong>, delivering 
                  cutting-edge AI solutions that transform how businesses operate globally. As a <strong className="text-primary-orange">leading AI company near you</strong>, we combine 
                  world-class expertise with deep technical knowledge to provide unparalleled artificial intelligence services tailored to 
                  diverse business landscapes worldwide.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Founded on the principle that every business deserves access to enterprise-grade AI technology, Metic.ai has 
                  grown to become the go-to <strong>artificial intelligence company</strong> for organizations ranging from 
                  startups to Fortune 500 enterprises. Our team of AI engineers, data scientists, and machine learning specialists brings 
                  decades of combined experience in artificial intelligence, ensuring that every project we undertake meets the highest 
                  standards of technical excellence and business value.
                </p>
              </div>

              {/* Block 2: Global AI Expertise */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 border-2 border-primary-orange/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary-orange" />
                  Global AI Solutions
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  What sets Metic.ai apart as the <strong className="text-primary-orange">best AI company near you</strong> is our 
                  deep understanding of diverse industrial ecosystems worldwide. From automotive manufacturing to technology 
                  innovation, healthcare advancements to agricultural technology, 
                  we've developed specialized AI solutions that address the unique challenges and opportunities facing businesses worldwide.
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
                          Leveraging automotive industry expertise with AI-powered predictive maintenance, supply chain optimization, 
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
                          Supporting world-class healthcare institutions with AI diagnostics, patient care optimization, 
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
                          Transforming global manufacturing with AI-driven quality control, process optimization, 
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
                          Empowering global agriculture with precision farming AI, crop yield prediction, 
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
                  Comprehensive <span className="text-primary-orange">Artificial Intelligence Services</span> Worldwide
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As a full-service <strong>AI company</strong>, Metic.ai offers an extensive portfolio of artificial 
                  intelligence solutions designed to meet the evolving needs of modern businesses. Our services span the entire AI 
                  lifecycle, from initial strategy and consulting through development, deployment, and ongoing optimization.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                    <div className="text-4xl font-bold text-primary-orange mb-2">500+</div>
                    <p className="text-sm text-gray-600 font-medium">Global Projects Completed</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                    <div className="text-4xl font-bold text-primary-orange mb-2">95%</div>
                    <p className="text-sm text-gray-600 font-medium">Client Satisfaction Rate</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                    <div className="text-4xl font-bold text-primary-orange mb-2">24/7</div>
                    <p className="text-sm text-gray-600 font-medium">Global Support Available</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our team of AI specialists works closely with each client to understand their unique challenges and 
                  opportunities. Whether you're a manufacturing company looking to implement predictive maintenance, a 
                  healthcare provider seeking to improve patient outcomes through AI diagnostics, or a tech startup building 
                  the next generation of intelligent applications, Metic.ai has the expertise and experience to bring your vision to life.
                </p>
              </div>

              {/* Block 4: Technology Leadership */}
              <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Cutting-Edge <span className="text-primary-orange">AI Technology</span> for Global Businesses
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Metic.ai, we pride ourselves on staying at the forefront of artificial intelligence innovation. Our 
                  <strong> leading artificial intelligence company</strong> leverages the latest advancements in machine learning, 
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
                        tailored to your business environment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Enterprise-Grade AI Infrastructure</h4>
                      <p className="text-gray-600">
                        Scalable, secure, and reliable AI systems designed to grow with your business, from startup to 
                        enterprise scale.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Custom AI Development</h4>
                      <p className="text-gray-600">
                        Bespoke artificial intelligence solutions built specifically for your unique business requirements, 
                        industry, and objectives.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">AI Integration & Implementation</h4>
                      <p className="text-gray-600">
                        Seamlessly integrate AI capabilities into your existing business systems, workflows, and processes 
                        for maximum ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 5: Global Commitment */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Committed to <span className="text-primary-orange">Global AI Innovation</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As a leading <strong>artificial intelligence company</strong>, Metic AI is deeply committed to fostering 
                  AI innovation and adoption worldwide. We partner with universities, research institutions, and 
                  business organizations globally to advance AI education, research, and practical applications that benefit the entire 
                  business community.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our <strong className="text-primary-orange">AI company</strong> actively participates in global 
                  technology ecosystems, contributing to tech meetups, supporting startups through AI mentorship, and 
                  collaborating with initiatives to position artificial intelligence as a leader in innovation. When you 
                  choose Metic.ai, you're not just getting an AI partner—you're supporting technological 
                  advancement worldwide.
                </p>

                <div className="bg-gradient-to-r from-primary-orange/10 via-secondary-orange/10 to-primary-orange/10 rounded-xl p-8 border-l-4 border-primary-orange">
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    🚀 Ready to Transform Your Business with AI?
                  </p>
                  <p className="text-gray-700 mb-4">
                    Join the thousands of businesses worldwide that have already discovered the competitive advantage of working with 
                    a leading artificial intelligence company. Whether you're a startup or enterprise, 
                    Metic.ai is ready to help you harness the power of artificial intelligence.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Contact our AI experts today for a free consultation and discover how artificial intelligence can 
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="mt-4 max-w-lg text-white/90">
                Join 2100+ companies worldwide already using our artificial intelligence solutions to gain competitive advantage.
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
              What Do Businesses Say About Our AI Company?
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              See why companies worldwide trust Metic AI for their artificial intelligence needs
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
                  <p className="text-sm text-gray-500">CTO, Global TechCorp</p>
                  <div className="flex text-primary-orange text-xs mt-1">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Best AI company I've worked with! Metic.ai transformed our data analytics capabilities. 
                We've seen a 40% increase in operational efficiency across our operations."
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
                  <p className="text-sm text-gray-500">CEO, InnovateCo</p>
                  <div className="flex text-primary-orange text-xs mt-1">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "The most knowledgeable AI company globally. Metic.ai helped us build a custom solution 
                that perfectly matched our business needs. Their expertise is unmatched."
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
                  <p className="text-sm text-gray-500">Director, Finance Solutions</p>
                  <div className="flex text-primary-orange text-xs mt-1">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Highly recommend this AI company! Their machine learning models have dramatically 
                improved our forecasting. We make better decisions faster."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced AI Implementation & Industry Insights - Additional SEO Content */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* AI Implementation Best Practices */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Advanced AI Implementation</span>
                <br />
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Best Practices & Industry Insights
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="space-y-16">
              {/* AI Technology Stack & Capabilities */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Enterprise-Grade <span className="text-primary-orange">AI Technology Stack</span>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong className="text-gray-900">Metic.ai leverages cutting-edge artificial intelligence technologies</strong> to deliver 
                    enterprise-grade solutions that scale with your business needs. Our comprehensive AI technology stack includes 
                    advanced machine learning frameworks, neural networks, natural language processing engines, computer vision systems, 
                    and robotic process automation platforms.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As a leading <strong className="text-primary-orange">artificial intelligence company</strong>, we stay ahead of 
                    technological advancements by continuously investing in research and development, ensuring our clients benefit 
                    from the latest AI innovations including GPT models, transformer architectures, deep learning optimizations, 
                    and edge AI deployment strategies.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Brain className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Advanced Machine Learning</h4>
                        <p className="text-sm text-gray-600">
                          Custom ML models, ensemble methods, automated feature engineering, and hyperparameter optimization
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Code className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Deep Learning Frameworks</h4>
                        <p className="text-sm text-gray-600">
                          TensorFlow, PyTorch, Keras implementations with custom architectures and optimization strategies
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                        <Database className="w-5 h-5 text-primary-orange" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Cloud AI Infrastructure</h4>
                        <p className="text-sm text-gray-600">
                          Multi-cloud deployment, edge computing, containerization, and scalable AI pipeline architectures
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-primary-orange/20">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    AI Implementation Success Metrics
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">98.5%</div>
                      <div className="text-sm text-gray-600 font-medium">Model Accuracy Average</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-secondary-orange mb-2">6-12</div>
                      <div className="text-sm text-gray-600 font-medium">Months to Full ROI</div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-4xl font-bold text-primary-orange mb-2">24/7</div>
                      <div className="text-sm text-gray-600 font-medium">Global Support Coverage</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-4 border-l-4 border-primary-orange">
                      <p className="text-sm font-medium text-gray-900">
                        <strong>Enterprise Promise:</strong> Every AI solution we deploy undergoes rigorous testing, 
                        validation, and performance optimization to ensure maximum business value and operational reliability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Transformation Methodology */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Proven <span className="text-primary-orange">AI Transformation Methodology</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Strategic Assessment</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Comprehensive evaluation of your business processes, data assets, and AI readiness to identify 
                      high-impact use cases and develop a strategic roadmap for AI implementation.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Business process analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Data quality assessment
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        ROI projections
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center mb-6">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Solution Architecture</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Design and architect custom AI solutions that integrate seamlessly with your existing technology 
                      infrastructure while providing scalability, security, and optimal performance.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Custom model development
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        System integration design
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Performance optimization
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary-orange/50 transition-all">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-secondary-orange rounded-full flex items-center justify-center mb-6">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Deployment & Optimization</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Agile deployment methodology with continuous monitoring, optimization, and support to ensure 
                      your AI solutions deliver maximum value and adapt to changing business requirements.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Phased implementation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Real-time monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-orange" />
                        Continuous improvement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Global AI Market Insights */}
              <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-12 border-2 border-primary-orange/20">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Global AI Market Insights & <span className="text-primary-orange">Future Trends</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      The global artificial intelligence market is experiencing unprecedented growth, with businesses across 
                      industries recognizing AI as a critical competitive advantage. <strong className="text-gray-900">Metic.ai positions 
                      itself at the forefront of this transformation</strong>, helping organizations worldwide navigate the 
                      complexities of AI adoption and implementation.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Current market trends indicate that businesses investing in AI today will dominate their respective 
                      industries tomorrow. Our <strong className="text-primary-orange">artificial intelligence company</strong> has 
                      identified key growth areas including generative AI, edge computing, autonomous systems, and 
                      human-AI collaboration platforms.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-4 h-4 text-primary-orange" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Generative AI Revolution</h4>
                          <p className="text-sm text-gray-600">
                            Large language models and generative AI transforming content creation, customer service, and business automation
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                          <Shield className="w-4 h-4 text-primary-orange" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Ethical AI Development</h4>
                          <p className="text-sm text-gray-600">
                            Responsible AI practices, bias mitigation, and transparent algorithmic decision-making becoming industry standards
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary-orange/20 flex items-center justify-center flex-shrink-0">
                          <Activity className="w-4 h-4 text-primary-orange" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Edge AI Computing</h4>
                          <p className="text-sm text-gray-600">
                            Real-time AI processing at the edge, reducing latency and enabling autonomous systems across industries
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">AI Investment Outlook</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Global AI Market Value (2024)</span>
                          <span className="font-bold text-primary-orange">$2.4 Trillion</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Expected Growth Rate (CAGR)</span>
                          <span className="font-bold text-secondary-orange">37.3%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Enterprise AI Adoption</span>
                          <span className="font-bold text-primary-orange">87%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">ROI within 12 months</span>
                          <span className="font-bold text-secondary-orange">94%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg p-6 border-l-4 border-primary-orange">
                      <h4 className="font-bold text-gray-900 mb-2">Industry Prediction</h4>
                      <p className="text-sm text-gray-700">
                        By 2027, organizations that have not adopted AI will be at a significant competitive disadvantage. 
                        Early adopters working with established AI companies like Metic.ai will capture the majority of market opportunities.
                      </p>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-primary-orange mb-2">$15.7T</div>
                      <div className="text-sm text-gray-600 font-medium">
                        Projected global economic impact of AI by 2030
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry-Specific AI Applications */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Industry-Specific <span className="text-primary-orange">AI Applications & Use Cases</span>
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-primary-orange/50 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Healthcare & Life Sciences</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Medical image analysis and diagnostics</li>
                      <li>• Drug discovery and development acceleration</li>
                      <li>• Personalized treatment recommendations</li>
                      <li>• Clinical trial optimization</li>
                      <li>• Predictive patient care models</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-primary-orange/50 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Financial Services</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Real-time fraud detection systems</li>
                      <li>• Algorithmic trading and portfolio optimization</li>
                      <li>• Credit risk assessment automation</li>
                      <li>• Regulatory compliance monitoring</li>
                      <li>• Customer lifetime value prediction</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-primary-orange/50 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Manufacturing & Industrial</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Predictive maintenance optimization</li>
                      <li>• Quality control automation</li>
                      <li>• Supply chain demand forecasting</li>
                      <li>• Smart factory orchestration</li>
                      <li>• Energy efficiency optimization</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-primary-orange/50 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Retail & E-commerce</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Personalized product recommendations</li>
                      <li>• Dynamic pricing optimization</li>
                      <li>• Inventory management automation</li>
                      <li>• Customer churn prediction</li>
                      <li>• Voice and visual search capabilities</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-primary-orange/50 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Agriculture & Food</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Precision farming and crop monitoring</li>
                      <li>• Yield prediction and optimization</li>
                      <li>• Pest and disease detection</li>
                      <li>• Smart irrigation systems</li>
                      <li>• Food safety and quality assurance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-primary-orange/50 transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Technology & Software</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Intelligent code generation and review</li>
                      <li>• User experience optimization</li>
                      <li>• Automated testing and deployment</li>
                      <li>• Performance monitoring and optimization</li>
                      <li>• Natural language interfaces</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AI Partnership & Support Model */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Long-term <span className="text-primary-orange">AI Partnership & Support</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      <strong className="text-gray-900">AI implementation is not a one-time project—it's an ongoing journey</strong>. 
                      Metic.ai provides comprehensive long-term partnership and support to ensure your AI investments continue 
                      to deliver value as your business evolves and technology advances.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Our <strong className="text-primary-orange">artificial intelligence company</strong> understands that successful 
                      AI adoption requires continuous optimization, model retraining, infrastructure scaling, and adaptation to 
                      new business requirements. We provide end-to-end support that grows with your organization.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                        <Clock className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">24/7 Global Support</h4>
                          <p className="text-sm text-gray-600">
                            Round-the-clock monitoring, support, and maintenance across all time zones
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                        <TrendingUp className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Continuous Optimization</h4>
                          <p className="text-sm text-gray-600">
                            Regular model updates, performance tuning, and feature enhancements
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                        <Users className="w-6 h-6 text-primary-orange flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Training & Knowledge Transfer</h4>
                          <p className="text-sm text-gray-600">
                            Comprehensive team training and knowledge transfer programs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Support Tiers</h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg">
                          <span className="font-medium text-gray-900">Basic Support</span>
                          <span className="text-sm text-primary-orange font-bold">Included</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg">
                          <span className="font-medium text-gray-900">Premium Support</span>
                          <span className="text-sm text-primary-orange font-bold">Priority Access</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-orange/10 to-secondary-orange/10 rounded-lg">
                          <span className="font-medium text-gray-900">Enterprise Support</span>
                          <span className="text-sm text-primary-orange font-bold">Dedicated Team</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-primary-orange mb-2">99.9%</div>
                      <div className="text-sm text-gray-600 font-medium">
                        Uptime Guarantee for Enterprise Clients
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              
              <h2 className="faq-section text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">How Do I Choose the Best </span>
                <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent">
                  AI Company Near Me?
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about working with a leading AI company near you
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
                      "name": "Which is the best Artificial Intelligence Company Near Me?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Metic.ai is recognized as one of the leading Artificial Intelligence Companies globally, providing cutting-edge AI solutions to businesses worldwide. With 2100+ successful implementations and a 5.0 rating, we specialize in AI consulting, machine learning development, and intelligent automation for businesses of all sizes."
                      }
                    },
                    {
                      "@type": "Question", 
                      "name": "How do I find an AI Company Near Me?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To find the best AI Company Near You, look for companies with proven track records, client testimonials, and comprehensive service offerings. Metic.ai serves clients globally with offices in the USA and India, providing both remote and on-site AI consulting services. We offer free consultations to assess your AI needs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What services do AI companies near me typically offer?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Leading AI companies like Metic.ai offer comprehensive services including: AI strategy consulting, custom machine learning development, data analytics and business intelligence, intelligent automation, natural language processing, computer vision solutions, generative AI services, and AI integration support."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How much does it cost to work with an AI company near me?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI implementation costs vary based on project scope and complexity. Metic.ai offers flexible pricing options starting from $5,000 for basic AI consulting to comprehensive enterprise solutions. We provide free consultations to assess your needs and provide accurate cost estimates tailored to your business requirements."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Why should I choose a local AI company vs a remote one?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "While location flexibility is important, the key factors are expertise, experience, and results. Metic.ai combines the best of both worlds - global reach with local understanding. We provide personalized service, direct communication, faster response times, and deep industry knowledge regardless of your location."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does AI implementation take with companies near me?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Implementation timelines for AI solutions vary based on project complexity. Quick Start Projects take 2-4 weeks for POCs and simple automation. Standard Projects take 6-12 weeks for custom ML models and integrated AI systems. Enterprise Solutions take 3-6 months for large-scale AI transformations. Metic.ai ensures efficient project delivery with regular updates and hands-on support."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What industries do AI companies near me typically serve?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Leading AI companies like Metic.ai serve all major industries including: Healthcare & Life Sciences (medical diagnostics, patient care), Financial Services (fraud detection, risk assessment), Retail & E-commerce (personalization, demand forecasting), Manufacturing (quality control, predictive maintenance), Technology & Software (product intelligence, user analytics), and Agriculture (precision farming, crop monitoring)."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What ROI can I expect from working with an AI company near me?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Businesses working with Metic.ai typically see significant ROI within 6-12 months including: 60% average cost reduction through automation and efficiency gains, 3x faster decision making with real-time insights, 40% revenue increase from enhanced customer experiences, and 70% productivity gains through intelligent automation. We establish clear KPIs and success metrics for every project."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I get started with an AI company near me?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Getting started with Metic.ai is simple: 1) Schedule a free consultation with our AI experts, 2) Complete an AI Readiness Assessment to identify high-impact use cases, 3) Start with a Proof of Concept pilot project, 4) Scale successful pilots to production with ongoing support. Contact us at +91 7892518414 to begin your AI transformation today."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What makes Metic.ai different from other AI companies?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Metic.ai's advantages include: Global reach with local expertise, 2100+ successful implementations with 5.0 rating, proven track record across all industries, partnership approach with long-term support, transparent pricing with flexible engagement models, and cutting-edge AI technologies. We're trusted by Fortune 500 companies and innovative startups worldwide."
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
                            Which is the best Artificial Intelligence Company Near Me?
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
                        <strong className="text-gray-900 font-semibold">Metic AI is recognized as a leading AI company globally</strong>, providing cutting-edge 
                        artificial intelligence solutions to businesses worldwide.
                      </p>
                      <p className="text-lg">
                        With over 10 years of experience and 2100+ successful global client projects, we specialize in AI consulting, 
                        machine learning, intelligent automation, and data analytics. Our global team delivers world-class 
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
                            Where is Metic AI located?
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
                        We serve businesses globally including companies in North America, Europe, Asia, and beyond.
                      </p>
                      <p className="text-lg">
                        We provide both on-site and remote AI consulting services globally, ensuring businesses 
                        have access to expert AI solutions regardless of location.
                      </p>
                      
                      {/* Cities Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
                        {['USA', 'Canada', 'UK', 'India', 'Australia', 'Germany'].map((location, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-primary-orange/5 rounded-lg">
                            <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                            <span className="text-sm font-medium text-gray-900">{location}</span>
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
                            What AI services does Metic AI provide?
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
                        <strong className="text-gray-900 font-semibold">Metic AI offers comprehensive AI services globally</strong> including:
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
                        We serve all industries globally including <Link href="/about" className="text-primary-orange hover:text-dark-orange font-semibold underline">healthcare, manufacturing, finance, retail, and technology</Link>.
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
                            How much does AI implementation cost for businesses?
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
                        AI implementation costs for businesses vary based on project scope, complexity, and specific requirements. 
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
                          We provide <strong>free consultations to businesses worldwide</strong> to assess needs and provide accurate cost estimates. 
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
                            Why choose Metic AI as your AI company?
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
                        Choosing <strong className="text-gray-900 font-semibold">Metic AI as your AI company</strong> offers several advantages:
                      </p>
                      
                      {/* Benefits Grid */}
                      <div className="grid gap-3 pt-2">
                        {[
                          { icon: Target, title: 'Global Expertise', desc: 'Deep understanding of diverse business landscapes and international regulations' },
                          { icon: Users, title: 'Flexible Support', desc: 'Remote and on-site implementation services available worldwide' },
                          { icon: GitBranch, title: 'Global Network', desc: 'Strong connections with international businesses, universities, and tech ecosystems' },
                          { icon: Clock, title: 'Multi-Timezone', desc: 'Global coverage for real-time collaboration across time zones' },
                          { icon: Award, title: 'Innovation Focus', desc: "Supporting global economy and technological advancement" },
                          { icon: Shield, title: 'Industry Knowledge', desc: "Expertise across key industries (automotive, manufacturing, healthcare, fintech)" }
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
                        Metic AI combines world-class AI expertise with global presence for the best of both worlds.
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
                        Implementation timelines for <strong className="text-gray-900 font-semibold">AI solutions</strong> vary based on 
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
                        Our global team ensures efficient project delivery with regular updates, agile methodologies, 
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
                            What industries does Metic AI serve?
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
                        As a premier <strong className="text-gray-900 font-semibold">artificial intelligence company</strong>, 
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
                            What ROI can businesses expect from AI implementation?
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
                        <strong className="text-gray-900 font-semibold">Businesses working with Metic AI typically see significant ROI</strong> within 
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
                        <strong>ROI Guarantee:</strong> We work with businesses worldwide to establish clear KPIs and success metrics, 
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
                            How do I get started with AI for my business?
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
                              Schedule a complimentary 30-minute call with our AI experts to discuss your business challenges, 
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
                              roadmap aligned with your business objectives.
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
                              Scale successful pilots to production with our global team providing ongoing support, 
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

              {/* FAQ Item 10 - Global Excellence */}
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
                        <strong className="text-gray-900 font-semibold">Metic AI's global excellence</strong> sets us apart as the premier 
                        <strong className="text-primary-orange"> artificial intelligence company near you</strong>:
                      </p>
                      
                      <div className="grid gap-3">
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Global Expert Team</h4>
                            <p className="text-sm text-gray-600">
                              Our AI engineers, data scientists, and support staff operate globally with expertise 
                              across multiple time zones and industries.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Cross-Industry Excellence</h4>
                            <p className="text-sm text-gray-600">
                              10+ years serving businesses globally across automotive, manufacturing, healthcare, fintech, 
                              and emerging technology sectors.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Proven Global Track Record</h4>
                            <p className="text-sm text-gray-600">
                              2100+ successful AI implementations worldwide with an average 95% client satisfaction rate and 
                              documented ROI in every project.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Long-term Partnership Approach</h4>
                            <p className="text-sm text-gray-600">
                              We're not just vendors—we're your long-term AI partners, invested in your business success with 
                              ongoing support, training, and optimization.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-orange/5 to-secondary-orange/5 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">Transparent Global Pricing</h4>
                            <p className="text-sm text-gray-600">
                              No hidden fees, clear project scopes, and flexible engagement models designed to fit diverse business budgets.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary-orange to-secondary-orange text-white p-6 rounded-xl">
                        <p className="font-bold mb-2">🏆 Award-Winning Global Excellence</p>
                        <p className="text-white/90 text-sm">
                          Recognized as a leading AI company for 3 consecutive years. Trusted by Fortune 500 companies 
                          and innovative startups across multiple continents.
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
                  Our AI experts are here to help. Get personalized answers and a free consultation.
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

      {/* Featured Locations Section - SEO Internal Linking */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-orange/10 rounded-full mb-6">
                <MapPin className="w-5 h-5 text-primary-orange" />
                <span className="text-sm font-bold text-primary-orange">SERVING WORLDWIDE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">AI Services</span>{" "}
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Near You
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert AI and Machine Learning services across the United States and India. Find your local AI company.
              </p>
            </div>

            {/* US States - AI Services */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  🇺🇸
                </span>
                United States - AI Services
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { state: 'Michigan', slug: 'michigan', icon: '🏭' },
                  { state: 'California', slug: 'california', icon: '🌴' },
                  { state: 'New York', slug: 'new-york', icon: '🗽' },
                  { state: 'Texas', slug: 'texas', icon: '🤠' },
                  { state: 'Florida', slug: 'florida', icon: '🌊' },
                  { state: 'Illinois', slug: 'illinois', icon: '🏙️' },
                  { state: 'Ohio', slug: 'ohio', icon: '🌰' },
                  { state: 'Pennsylvania', slug: 'pennsylvania', icon: '🔔' },
                  { state: 'Georgia', slug: 'georgia', icon: '🍑' },
                  { state: 'Washington', slug: 'washington', icon: '🌲' },
                  { state: 'Arizona', slug: 'arizona', icon: '🌵' },
                  { state: 'Massachusetts', slug: 'massachusetts', icon: '🎓' },
                ].map((location) => (
                  <Link
                    key={location.slug}
                    href={`/artificial-intelligence-ai-services-in-${location.slug}`}
                    className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-primary-orange/50 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{location.icon}</span>
                      <h4 className="font-bold text-gray-900 group-hover:text-primary-orange transition-colors">
                        {location.state}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">AI Company in {location.state}</p>
                    <div className="mt-3 flex items-center text-primary-orange text-sm font-semibold">
                      <span>View AI Services</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Indian Cities - AI Services */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  🇮🇳
                </span>
                India - AI Services
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { city: 'Bangalore', slug: 'bangalore', icon: '💼' },
                  { city: 'Mumbai', slug: 'mumbai', icon: '🌆' },
                  { city: 'Delhi', slug: 'delhi', icon: '🏛️' },
                  { city: 'Hyderabad', slug: 'hyderabad', icon: '💎' },
                  { city: 'Ahmedabad', slug: 'ahmedabad', icon: '🏗️' },
                  { city: 'Chennai', slug: 'chennai', icon: '🏖️' },
                  { city: 'Pune', slug: 'pune', icon: '🎓' },
                  { city: 'Kolkata', slug: 'kolkata', icon: '📚' },
                ].map((location) => (
                  <Link
                    key={location.slug}
                    href={`/artificial-intelligence-ai-services-in-${location.slug}`}
                    className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-primary-orange/50 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{location.icon}</span>
                      <h4 className="font-bold text-gray-900 group-hover:text-primary-orange transition-colors">
                        {location.city}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">AI Company in {location.city}</p>
                    <div className="mt-3 flex items-center text-primary-orange text-sm font-semibold">
                      <span>View AI Services</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* View All Locations CTA */}
            <div className="text-center">
              <Link href="/locations">
                <Button variant="primary" size="lg" className="shadow-xl">
                  <MapPin className="w-5 h-5 mr-2" />
                  View All 143+ Locations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 2100+ companies worldwide already leveraging Metic AI to gain competitive advantage. 
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
                <span>Global Expert Team</span>
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
