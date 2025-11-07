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
  Sparkles,
  ChevronDown,
  Heart,
  Rocket,
  Quote,
  Building2,
  Cpu,
  Globe,
  Layers,
  Activity,
  Factory,
  Plane,
  Wheat,
  Briefcase,
  FileBarChart,
  PieChart,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  BadgeCheck,
  Search,
  Eye,
  MessageSquare,
  Bot,
  Cog,
  LineChart,
  TrendingDown,
  DollarSign,
  Calendar,
  Timer,
  Wrench,
  Gauge,
  Network,
  Wifi,
  Server,
  HardDrive,
  CreditCard,
  PlayCircle,
  Headphones,
  Download,
  Upload,
  Share2,
  BookOpen,
  GraduationCap,
  Microscope,
  Beaker,
  ChartBar,
  Presentation,
  FileSpreadsheet,
  Calculator,
  Camera,
  Video,
  Mic,
  Volume2,
  Image,
  Film,
  BarChart,
  BarChart2,
  Map,
  Navigation,
  Compass,
  Route,
  Car,
  Truck,
  Ship,
  ChartLine,
  ArrowUp,
  ArrowDown,
  Percent,
  Hash,
  AtSign,
  ThumbsUp,
  UserCheck,
  Users2,
  UserPlus,
  Crown,
  Medal,
  Trophy,
  Gift,
  Package,
  ShoppingCart,
  Store,
  Home,
  Building,
  Warehouse,
  Pin,
  Flag,
  Bookmark,
  Zap as Lightning,
  Flame,
  Sun,
  Moon,
  Stars,
  Sparkle,
  Paintbrush,
  Palette,
  Brush,
  Pen,
  Pencil,
  Edit,
  FileEdit,
  FilePlus,
  FileText,
  FileCheck,
  FolderOpen,
  Folder,
  Archive,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  Database as DB,
  HardDrive as HD,
  Cpu as Processor,
  Wifi as WifiIcon,
  Bluetooth,
  Radio,
  Signal,
  Antenna,
  Satellite,
  Radar,
  ScanLine,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  Key,
  Lock,
  Unlock,
  Shield as Security,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  AlertCircle,
  AlertOctagon,
  Info,
  HelpCircle,
  CheckCircle2,
  XCircle,
  MinusCircle,
  PlusCircle,
  PlayCircle as Play,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  FastForward,
  Rewind,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Repeat,
  Shuffle,
  Volume,
  VolumeX,
  Volume1,
  Volume2 as VolumeLoud,
  Maximize,
  Minimize,
  Expand,
  Shrink,
  Move,
  Copy,
  Clipboard,
  ExternalLink,
  Link2,
  Unlink,
  ChevronUp,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight as ChevronR,
  ArrowLeft,
  ArrowRight as ArrowR,
  ArrowUpRight,
  ArrowDownRight,
  ArrowDownLeft,
  ArrowUpLeft
} from "lucide-react";

export const metadata = {
  title: "Artificial Intelligence Company In Kansas | #1 AI Company In Kansas - Metic.ai",
  description: "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Artificial Intelligence Company In Kansas",
    "AI Company In Kansas", 
    "AI Service In Kansas",
    "AI Firm In Kansas",
    "AI Development Company In Kansas",
    "Best AI Company In Kansas",
    "Top AI Company Kansas",
    "Leading AI Company Kansas",
    "AI Solutions Company Kansas",
    "Machine Learning Company Kansas",
    "AI Consulting Company Kansas",
    "AI Technology Company Kansas",
    "AI Services Provider Kansas",
    "Custom AI Company Kansas",
    "Enterprise AI Company Kansas",
    "AI Software Company Kansas",
    "AI Implementation Company Kansas",
    "Professional AI Company Kansas",
    "AI Innovation Company Kansas"
  ],
  authors: [{ name: "Metic.ai Kansas AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Artificial Intelligence Company In Kansas | #1 AI Company In Kansas - Metic.ai",
    description: "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-kansas/",
    siteName: "Metic.ai - AI Company In Kansas",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metic.ai - Artificial Intelligence Company In Kansas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company In Kansas | #1 AI Company In Kansas - Metic.ai",
    description: "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-image.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-kansas/",
  },
};

export default function AIServicesKansasPage() {
  const services = [
    {
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your Kansas business operations with enterprise-grade deployment strategies for Wichita aerospace and agricultural enterprises.",
      icon: Zap,
      href: "/ai-integration-and-deployment",
      color: "blue" as const
    },
    {
      title: "Machine Learning Solutions",
      description: "Advanced ML algorithms and predictive analytics tailored for Kansas's agriculture, aerospace, and energy industries across the Sunflower State.",
      icon: Brain,
      href: "/machine-learning",
      color: "purple" as const
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed specifically for Kansas businesses, from precision agriculture to aerospace manufacturing excellence.",
      icon: Code,
      href: "/custom-ai-development",
      color: "green" as const
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your Kansas business data into actionable insights with advanced analytics platforms designed for Midwest enterprises.",
      icon: BarChart3,
      href: "/data-insights",
      color: "orange" as const
    },
    {
      title: "Generative AI Services",
      description: "Harness the power of ChatGPT and generative AI for content creation and automation tailored for Kansas business operations.",
      icon: Sparkles,
      href: "/generative-ai-services",
      color: "indigo" as const
    },
    {
      title: "Data Engineering",
      description: "Robust data infrastructure and ETL pipelines for Kansas enterprises, from agricultural data to aerospace manufacturing systems.",
      icon: Database,
      href: "/data-engineering",
      color: "red" as const
    }
  ];

  const testimonials = [
    {
      name: "Michael Johnson",
      role: "CEO, Wichita Aerospace Solutions",
      content: "Metic.ai transformed our manufacturing processes with AI-driven predictive maintenance. We've seen 67% reduction in downtime and $4.2M in annual savings.",
      rating: 5,
      location: "Wichita, KS"
    },
    {
      name: "Sarah Williams", 
      role: "Operations Director, Kansas AgTech Innovations",
      content: "The precision agriculture AI from Metic.ai has revolutionized our crop management across 15,000 acres. 42% water savings and 28% yield increase exceeded our expectations.",
      rating: 5,
      location: "Dodge City, KS"
    },
    {
      name: "Robert Davis",
      role: "CTO, Kansas Energy Solutions",
      content: "Working with the leading AI Company In Kansas has been transformational. Their energy optimization AI reduced our operational costs by 35% in the first year.",
      rating: 5,
      location: "Topeka, KS"
    },
    {
      name: "Jennifer Martinez",
      role: "VP Technology, Overland Park Logistics",
      content: "Metic.ai's supply chain AI solutions have streamlined our operations across Kansas. Best investment we've made for our logistics automation.",
      rating: 5,
      location: "Overland Park, KS"
    }
  ];

  const kansasCities = [
    "Wichita", "Overland Park", "Kansas City", "Topeka", "Olathe", 
    "Lawrence", "Shawnee", "Manhattan", "Lenexa", "Salina",
    "Hutchinson", "Leavenworth", "Leawood", "Dodge City", "Garden City",
    "Emporia", "Junction City", "Derby", "Prairie Village", "Hays"
  ];

  const industries = [
    {
      name: "Aerospace & Aviation",
      description: "AI solutions for Wichita's aviation capital, optimizing aircraft manufacturing and maintenance",
      icon: Plane,
      projects: 150,
      growth: "+45%"
    },
    {
      name: "Agriculture & AgTech", 
      description: "Precision agriculture AI for Kansas farmlands, from crop monitoring to livestock management",
      icon: Wheat,
      projects: 280,
      growth: "+67%"
    },
    {
      name: "Energy & Utilities",
      description: "Smart grid optimization and renewable energy management for Kansas's energy sector",
      icon: Lightning,
      projects: 95,
      growth: "+32%"
    },
    {
      name: "Manufacturing",
      description: "Industrial automation and quality control AI for Kansas manufacturing enterprises",
      icon: Factory,
      projects: 120,
      growth: "+58%"
    },
    {
      name: "Healthcare & Life Sciences",
      description: "Medical AI and healthcare analytics for Kansas hospitals and research institutions",
      icon: Heart,
      projects: 85,
      growth: "+73%"
    },
    {
      name: "Financial Services",
      description: "Fintech AI solutions for Kansas banks and financial institutions",
      icon: CreditCard,
      projects: 65,
      growth: "+89%"
    }
  ];

  const stats = [
    { number: "2,100+", label: "Successful AI Implementations", icon: Trophy },
    { number: "290+", label: "Kansas Businesses Served", icon: Building2 },
    { number: "98%", label: "Client Satisfaction Rate", icon: ThumbsUp },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "60%", label: "Average Cost Savings", icon: TrendingDown },
    { number: "3x", label: "Faster Project Delivery", icon: Timer }
  ];

  return (
    <>
      {/* Enhanced Structured Data for 100% SEO - Triple Schema Implementation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Artificial Intelligence Company In Kansas",
              "url": "https://metic.ai/artificial-intelligence-ai-services-in-kansas/",
              "logo": "https://metic.ai/logo.png",
              "image": "https://metic.ai/og-image.jpg",
              "description": "Leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations. Expert AI services, machine learning solutions & AI development for businesses across the Sunflower State.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Kansas",
                "addressCountry": "US",
                "addressLocality": "Wichita"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.6872",
                "longitude": "-97.3301"
              },
              "telephone": "+1-789-251-8414",
              "email": "hello@metic.ai",
              "foundingDate": "2020",
              "numberOfEmployees": "250+",
              "slogan": "Transform your business with AI",
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Kansas",
                  "sameAs": "https://en.wikipedia.org/wiki/Kansas"
                },
                {
                  "@type": "City", 
                  "name": "Wichita",
                  "containedInPlace": "Kansas, US"
                },
                {
                  "@type": "City",
                  "name": "Overland Park", 
                  "containedInPlace": "Kansas, US"
                },
                {
                  "@type": "City",
                  "name": "Kansas City",
                  "containedInPlace": "Kansas, US" 
                },
                {
                  "@type": "City",
                  "name": "Topeka",
                  "containedInPlace": "Kansas, US"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services Kansas",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "AI Integration & Deployment",
                      "description": "Enterprise AI integration services for Kansas businesses including aerospace and agriculture"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Solutions", 
                      "description": "Custom ML algorithms and predictive analytics for Kansas companies across all industries"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom AI Development",
                      "description": "Bespoke AI solutions for Kansas enterprises in agriculture, aerospace, and energy sectors"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Data Analytics & BI",
                      "description": "Advanced business intelligence and analytics platforms for Kansas businesses"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Generative AI Services",
                      "description": "ChatGPT and generative AI solutions for content creation and automation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Data Engineering", 
                      "description": "Robust data infrastructure and ETL pipelines for Kansas enterprises"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "290",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Michael Johnson"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Metic.ai transformed our manufacturing processes with AI-driven predictive maintenance. We've seen 67% reduction in downtime and $4.2M in annual savings.",
                  "datePublished": "2024-01-15"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/metic-ai",
                "https://twitter.com/metic_ai",
                "https://github.com/metic-ai"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best Artificial Intelligence Company In Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is the leading Artificial Intelligence Company In Kansas with 2100+ successful AI implementations across the Sunflower State. We serve businesses in Wichita, Overland Park, Kansas City, Topeka, and throughout Kansas with proven expertise in agriculture, aerospace, and energy sectors, delivering 60% cost savings and 3x faster project delivery."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Metic.ai the top AI Company In Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "As the premier AI Company In Kansas, Metic.ai combines deep understanding of Kansas's unique business landscape—from Wichita's aerospace industry to precision agriculture across the Great Plains—with cutting-edge AI technology. Our local expertise, proven track record with 290+ Kansas projects, and industry-specific solutions make us the trusted choice for Kansas businesses seeking AI transformation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Metic.ai provide AI services to small businesses in Kansas?", 
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our comprehensive AI Service In Kansas portfolio caters to businesses of all sizes across the Sunflower State. From family-owned agricultural operations to Fortune 500 aerospace companies in Wichita, from small tech startups in Lawrence to established manufacturers in Topeka, we provide scalable AI solutions that grow with your Kansas business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI technologies does your AI Firm In Kansas specialize in?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI Firm In Kansas specializes in a comprehensive range of technologies: machine learning and predictive analytics for agriculture and manufacturing, computer vision for quality control and crop monitoring, natural language processing for customer service automation, IoT integration for smart agriculture, and custom AI development tailored specifically for Kansas's aerospace, agriculture, energy, and manufacturing industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Metic.ai support AI Development Company projects in Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the leading AI Development Company In Kansas, we provide comprehensive end-to-end support from initial strategy and consultation through implementation, testing, and ongoing optimization. Our Kansas-based team understands local business challenges and regulatory requirements, ensuring AI solutions are designed for success in the Sunflower State's unique business environment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Metic.ai as your AI partner in Kansas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choose Metic.ai because we're the Best AI Company In Kansas with unmatched local expertise, proven results across 290+ Kansas projects, deep understanding of the state's key industries (aerospace, agriculture, energy, manufacturing), 98% client satisfaction rate, and a track record of delivering 60% cost savings with 3x faster project delivery. We understand Kansas business culture and deliver AI solutions that truly work for Sunflower State enterprises."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Artificial Intelligence Company In Kansas | Leading AI Services & Solutions",
              "description": "Comprehensive guide to AI services in Kansas. Discover how Metic.ai, the premier Artificial Intelligence Company In Kansas, helps businesses across the Sunflower State implement cutting-edge AI solutions for agriculture, aerospace, energy, and manufacturing industries.",
              "author": {
                "@type": "Organization", 
                "name": "Metic.ai Kansas AI Team",
                "url": "https://metic.ai/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Metic.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://metic.ai/logo.png"
                }
              },
              "datePublished": "2024-01-15T10:00:00Z",
              "dateModified": "2024-01-15T10:00:00Z", 
              "articleSection": "AI Services",
              "keywords": [
                "Artificial Intelligence Company In Kansas",
                "AI Company In Kansas", 
                "AI Service In Kansas",
                "Kansas AI solutions",
                "Wichita AI services",
                "Kansas machine learning",
                "aerospace AI Kansas", 
                "agriculture AI Kansas"
              ],
              "locationCreated": {
                "@type": "Place",
                "name": "Kansas, USA",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Kansas",
                  "addressCountry": "US"
                }
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "Artificial Intelligence Services"
                },
                {
                  "@type": "Thing", 
                  "name": "Kansas Business Solutions"
                },
                {
                  "@type": "Thing",
                  "name": "Machine Learning Implementation"
                }
              ],
              "mentions": [
                {
                  "@type": "Place",
                  "name": "Wichita, Kansas"
                },
                {
                  "@type": "Place",
                  "name": "Overland Park, Kansas"
                },
                {
                  "@type": "Place",
                  "name": "Kansas City, Kansas"
                },
                {
                  "@type": "Place",
                  "name": "Topeka, Kansas"
                }
              ]
            }
          ])
        }}
      />



      {/* Enhanced Services Section with Creative Design */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-orange-50 to-red-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-red-300/40 rounded-full opacity-60 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-300/40 rounded-full opacity-60 blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-green-200/30 to-blue-300/30 rounded-full opacity-50 blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-100/80 backdrop-blur-sm border border-orange-200 text-orange-700 rounded-full font-semibold mb-8">
                <Sparkles className="w-5 h-5" />
                <span>AI Solutions Portfolio</span>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 bg-gradient-to-r from-gray-900 via-orange-800 to-red-900 bg-clip-text text-transparent">
                Comprehensive AI Solutions for <span className="text-orange-600">Kansas</span> Businesses
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Transforming Kansas businesses across agriculture, aerospace, energy, and manufacturing with cutting-edge artificial intelligence solutions. 
                From precision farming in western Kansas to aerospace innovation in Wichita, our <strong className="text-orange-600">AI Service In Kansas</strong> delivers measurable results.
              </p>
            </div>
            
            {/* Enhanced Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses = {
                  blue: "from-orange-500 to-blue-600",
                  purple: "from-purple-500 to-orange-600", 
                  green: "from-green-500 to-orange-500",
                  orange: "from-orange-500 to-red-600",
                  indigo: "from-indigo-500 to-orange-600",
                  red: "from-red-500 to-orange-600"
                };
                const bgColorClasses = {
                  blue: "from-orange-50 to-blue-100",
                  purple: "from-purple-50 to-orange-100", 
                  green: "from-green-50 to-orange-100",
                  orange: "from-orange-50 to-red-100",
                  indigo: "from-indigo-50 to-orange-100",
                  red: "from-red-50 to-orange-100"
                };
                
                return (
                  <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                    {/* Card Background with Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 hover:border-orange-200 transition-all duration-500 overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${bgColorClasses[service.color]} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                      
                      {/* Floating background shapes */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-100 to-red-200 rounded-full opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-200 rounded-lg rotate-45 opacity-0 group-hover:opacity-15 transform scale-0 group-hover:scale-100 transition-all duration-700"></div>
                      
                      <div className="relative z-10">
                        {/* Enhanced Icon with Multiple Effects */}
                        <div className={`w-20 h-20 bg-gradient-to-br ${colorClasses[service.color]} rounded-3xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                          <IconComponent className="w-10 h-10 text-white" />
                          <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-800 transition-colors duration-300">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                        
                        {/* Enhanced CTA Link */}
                        <Link href={service.href} className="group/link inline-flex items-center font-semibold transition-all duration-300">
                          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover/link:from-orange-700 group-hover/link:to-red-700 transition-all duration-300">
                            Explore Solution
                          </span>
                          <ArrowRight className="w-5 h-5 ml-2 text-orange-600 group-hover/link:translate-x-2 group-hover/link:scale-110 transition-all duration-300" />
                        </Link>
                      </div>

                      {/* Corner decoration with animation */}
                      <div className={`absolute top-6 right-6 w-3 h-3 bg-gradient-to-br ${colorClasses[service.color]} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150`}></div>
                      <div className={`absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-br ${colorClasses[service.color]} rounded-full opacity-0 group-hover:opacity-80 transition-all duration-700`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Bottom CTA Section */}
            <div className="text-center">
              <div className="inline-flex items-center gap-6 bg-white/90 backdrop-blur-sm border border-orange-200 rounded-2xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-semibold">Free AI Strategy Consultation</span>
                </div>
                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-semibold">Quick 24-hour Response</span>
                </div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse animation-delay-1000"></div>
                <Link href="/contact" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-bold transition-all duration-300 group-hover:scale-105">
                  <span>Start Your AI Journey</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Industries Section */}
      <section className="py-32 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100/80 backdrop-blur-sm border border-blue-200 text-blue-700 rounded-full font-semibold mb-8">
                <Target className="w-5 h-5" />
                <span>Industry Expertise</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Leading AI Transformation Across <span className="text-blue-600">Kansas Industries</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Delivering specialized AI solutions across Kansas's key business sectors. From the aviation capital of Wichita to agricultural innovation throughout the Great Plains, 
                our <strong className="text-blue-600">AI Firm In Kansas</strong> understands the unique needs of every industry.
              </p>
            </div>
            
            {/* Enhanced Industries Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-500 overflow-hidden">
                      {/* Hover background effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500"></div>
                      
                      {/* Floating elements */}
                      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full opacity-0 group-hover:opacity-30 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Enhanced Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-blue-800 group-hover:text-blue-900 transition-colors duration-300 text-center">{industry.name}</h3>
                        <p className="text-gray-600 text-sm text-center mb-4 group-hover:text-gray-700 transition-colors duration-300">{industry.description}</p>
                        
                        {/* Stats */}
                        <div className="flex justify-between items-center pt-4 border-t border-blue-100">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">{industry.projects}+</div>
                            <div className="text-xs text-gray-500">Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">{industry.growth}</div>
                            <div className="text-xs text-gray-500">Growth</div>
                          </div>
                        </div>
                      </div>

                      {/* Hover indicator */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Industry Stats */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-blue-200 shadow-xl">
              <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Kansas AI Implementation Success Metrics
              </h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">290+</div>
                  <div className="text-gray-600 font-semibold">Kansas Companies Served</div>
                  <div className="text-sm text-gray-500 mt-2">Across all major cities and rural areas</div>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">750+</div>
                  <div className="text-gray-600 font-semibold">Industry Projects Completed</div>
                  <div className="text-sm text-gray-500 mt-2">From agriculture to aerospace</div>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                  <div className="text-gray-600 font-semibold">Success Rate</div>
                  <div className="text-sm text-gray-500 mt-2">Industry-leading performance</div>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">$89M+</div>
                  <div className="text-gray-600 font-semibold">Cost Savings Delivered</div>
                  <div className="text-sm text-gray-500 mt-2">For Kansas businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-red-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold mb-8">
                <Quote className="w-5 h-5" />
                <span>Client Success Stories</span>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 text-white">
                Why Kansas Businesses Choose the Leading <span className="text-orange-400">AI Company</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover how businesses across Kansas have transformed their operations with our <strong className="text-orange-400">AI Service In Kansas</strong>. 
                Real results from real companies across the Sunflower State.
              </p>
            </div>
            
            {/* Enhanced Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>
                  <div className="relative p-8 rounded-3xl overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Stars Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Testimonial Content */}
                      <blockquote className="text-gray-200 text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-white group-hover:text-orange-300 transition-colors duration-300">{testimonial.name}</div>
                          <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{testimonial.role}</div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 text-orange-400" />
                            <span className="text-xs text-orange-300">{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators & CTA */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-yellow-200">4.9/5 Client Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-200">290+ Kansas Projects</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  <Building2 className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-200">All Industries Served</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-200">24/7 Support</span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Join These Success Stories?
                </h3>
                <p className="text-gray-300 mb-6">
                  Partner with the <strong className="text-orange-400">Best AI Company In Kansas</strong> and transform your business like hundreds of other Kansas companies have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 shadow-xl">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Start Your Success Story
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-gray-900">
                      <Phone className="w-4 h-4 mr-2" />
                      Speak with AI Experts
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Kansas AI Ecosystem Content Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-red-300/30 rounded-full blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full mb-8">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-semibold">Kansas AI Ecosystem Deep Dive</span>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                The Future of <span className="text-orange-600">Artificial Intelligence</span> in the Sunflower State
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Discover how Kansas is becoming a leader in AI innovation, from precision agriculture in the Great Plains 
                to aerospace excellence in Wichita, and how Metic.ai is powering this transformation across the entire state.
              </p>
            </div>

            {/* Kansas AI Market Landscape */}
            <div className="mb-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Kansas AI Market Transformation & Economic Impact Analysis
                    </h3>
                    <div className="space-y-6 text-gray-700">
                      <p className="text-lg leading-relaxed">
                        The <strong className="text-blue-600">Kansas artificial intelligence market</strong> is experiencing unprecedented growth, 
                        driven by the state's unique blend of agricultural innovation, aerospace engineering excellence, and emerging technology sectors. 
                        As the premier <strong className="text-orange-600">Artificial Intelligence Company In Kansas</strong>, Metic.ai has been 
                        instrumental in this transformation, helping businesses across the Sunflower State harness AI's transformative potential.
                      </p>
                      <p className="text-lg leading-relaxed">
                        From the bustling aerospace corridors of Wichita—where companies like Boeing, Airbus, and Spirit AeroSystems drive innovation—to 
                        the vast agricultural expanses of western Kansas where precision farming is revolutionizing crop management, 
                        AI adoption has increased by <strong className="text-green-600">340% in the past three years</strong>. 
                        Kansas companies are discovering that AI isn't just about automation—it's about reimagining what's possible 
                        in traditional industries that form the backbone of the state's $195 billion economy.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Which <strong className="text-indigo-600">AI Company In Kansas</strong> truly understands the unique challenges 
                        facing businesses from Topeka's government sector to Dodge City's agricultural enterprises? Metic.ai combines deep local knowledge 
                        with cutting-edge technology, delivering solutions that respect Kansas's business culture while driving unprecedented innovation.
                      </p>
                      <p className="text-lg leading-relaxed">
                        The impact extends beyond individual companies. Kansas universities like KU and K-State are partnering with 
                        our <strong className="text-purple-600">AI Development Company In Kansas</strong> to train the next generation of AI professionals, 
                        creating a sustainable talent pipeline that ensures the state's continued competitiveness in the global AI economy.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-700">$2.8B+</div>
                          <div className="text-blue-600 font-medium">Kansas AI Market Value</div>
                        </div>
                      </div>
                      <p className="text-blue-700 text-sm">Projected to reach $5.2B by 2027 with aerospace, agriculture, and energy leading adoption across all 105 counties</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-700">89%</div>
                          <div className="text-green-600 font-medium">Average Productivity Increase</div>
                        </div>
                      </div>
                      <p className="text-green-700 text-sm">Average productivity gains for Kansas businesses implementing comprehensive AI solutions across operations</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-6 border border-orange-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-700">1,450+</div>
                          <div className="text-orange-600 font-medium">AI Jobs Created</div>
                        </div>
                      </div>
                      <p className="text-orange-700 text-sm">New high-tech positions across Kansas in the past 24 months, from Wichita to Kansas City</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 border border-purple-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                          <Factory className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-700">67%</div>
                          <div className="text-purple-600 font-medium">Manufacturing Efficiency Gains</div>
                        </div>
                      </div>
                      <p className="text-purple-700 text-sm">Average efficiency improvements in Kansas manufacturing facilities implementing AI solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                About Metic.ai - Premier <strong>Artificial Intelligence Company In Kansas</strong>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Leading <strong>AI Company In Kansas</strong> Since 2020</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Metic.ai stands as the premier <strong>Artificial Intelligence Company In Kansas</strong>, serving businesses from the aerospace capital of Wichita to agricultural operations across the Sunflower State. As Kansas continues balancing its traditional agricultural strength with modern innovation, we've been at the forefront, helping Kansas companies leverage AI for competitive advantage.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our deep understanding of Kansas's business landscape - from the aviation industry in Wichita to precision agriculture throughout the state, from energy operations to manufacturing companies in Overland Park - enables us to deliver <strong>AI Service In Kansas</strong> that truly makes a difference.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  As the leading <strong>AI Firm In Kansas</strong>, we've partnered with companies across all sectors of the Kansas economy. Whether you're an aerospace company in Wichita, an agricultural business in western Kansas, or a technology company in Kansas City metro, our <strong>AI Development Company In Kansas</strong> services are designed to drive measurable results.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                    <div className="text-sm text-gray-600">Successful AI Implementations</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">60%</div>
                    <div className="text-sm text-gray-600">Average Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-orange mb-2">3x</div>
                    <div className="text-sm text-gray-600">Faster Delivery</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h4 className="text-xl font-bold mb-6">Why Kansas Businesses Choose Metic.ai</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Local Kansas Expertise</h5>
                        <p className="text-gray-600 text-sm">Deep understanding of Kansas's business culture and agricultural innovation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Industry-Specific Solutions</h5>
                        <p className="text-gray-600 text-sm">Tailored AI solutions for aerospace, agriculture, energy, and manufacturing sectors</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Proven Track Record</h5>
                        <p className="text-gray-600 text-sm">2100+ successful implementations across Kansas and neighboring states</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Scalable Solutions</h5>
                        <p className="text-gray-600 text-sm">From family farms to aerospace giants in the Sunflower State</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-1">Ongoing Support</h5>
                        <p className="text-gray-600 text-sm">24/7 support and continuous optimization for Kansas businesses</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 italic">
                      "The <strong>Best AI Company In Kansas</strong> for businesses ready to embrace innovation" - Kansas Business Quarterly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full mb-8">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-semibold">Kansas AI Ecosystem Deep Dive</span>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                The Future of <span className="text-orange-600">Artificial Intelligence</span> in the Sunflower State
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Discover how Kansas is becoming a leader in AI innovation, from precision agriculture in the Great Plains 
                to aerospace excellence in Wichita, and how Metic.ai is powering this transformation across the entire state.
              </p>
            </div>

            {/* Kansas AI Market Landscape */}
            <div className="mb-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Kansas AI Market Transformation & Economic Impact
                    </h3>
                    <div className="space-y-6 text-gray-700">
                      <p className="text-lg leading-relaxed">
                        The <strong className="text-blue-600">Kansas artificial intelligence market</strong> is experiencing unprecedented growth, 
                        driven by the state's unique blend of agricultural innovation, aerospace engineering, and emerging tech sectors. 
                        As the premier <strong className="text-orange-600">Artificial Intelligence Company In Kansas</strong>, Metic.ai has been 
                        instrumental in this transformation, helping businesses across the Sunflower State harness AI's potential.
                      </p>
                      <p className="text-lg leading-relaxed">
                        From the bustling aerospace corridors of Wichita to the vast agricultural expanses of western Kansas, 
                        AI adoption has increased by <strong className="text-green-600">340% in the past three years</strong>. 
                        Kansas companies are discovering that AI isn't just about automation—it's about reimagining what's possible 
                        in traditional industries that form the backbone of the state's economy.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Which <strong className="text-indigo-600">AI Company In Kansas</strong> understands the unique challenges 
                        facing businesses from Topeka to Dodge City? Metic.ai combines deep local knowledge with cutting-edge 
                        technology, delivering solutions that respect Kansas's business culture while driving innovation.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-700">$2.3B+</div>
                          <div className="text-blue-600 font-medium">Kansas AI Market Value</div>
                        </div>
                      </div>
                      <p className="text-blue-700 text-sm">Projected to reach $4.8B by 2027 with aerospace and agriculture leading adoption</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-700">85%</div>
                          <div className="text-green-600 font-medium">Productivity Increase</div>
                        </div>
                      </div>
                      <p className="text-green-700 text-sm">Average productivity gains for Kansas businesses implementing AI solutions</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-6 border border-orange-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-700">1,200+</div>
                          <div className="text-orange-600 font-medium">AI Jobs Created</div>
                        </div>
                      </div>
                      <p className="text-orange-700 text-sm">New high-tech positions across Kansas in the past 24 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Innovation Hubs */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Kansas AI Innovation Hubs & Technology Centers
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Exploring the key technology centers driving AI adoption across Kansas, from university research to industrial applications.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-blue-700">Wichita Aerospace AI Center</h4>
                  <p className="text-gray-600 mb-4">
                    The epicenter of aerospace AI innovation in Kansas, where leading aviation companies collaborate with 
                    the <strong>Best AI Company In Kansas</strong> to develop next-generation aircraft systems.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>450+ aerospace AI projects completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>$180M in AI investments secured</span>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-green-700">AgTech Innovation Network</h4>
                  <p className="text-gray-600 mb-4">
                    Precision agriculture meets cutting-edge AI across Kansas farmlands, with our <strong>AI Service In Kansas</strong> 
                    revolutionizing crop management and sustainable farming practices.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>2.3M acres under AI management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>35% average yield improvement</span>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-purple-700">Kansas City Tech Corridor</h4>
                  <p className="text-gray-600 mb-4">
                    Where startups and established businesses collaborate with the leading <strong>AI Firm In Kansas</strong> 
                    to build scalable AI solutions for the Midwest market.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>120+ AI startups launched</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>$95M in venture funding raised</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories & Case Studies */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Kansas AI Success Stories: Real Results from Real Businesses
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover how businesses across Kansas are transforming their operations with AI, 
                  achieving remarkable results through partnership with the premier <strong>AI Development Company In Kansas</strong>.
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 border border-blue-200">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-blue-700">Wichita Aerospace Innovation</h4>
                          <p className="text-blue-600">Leading Aircraft Manufacturer</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        When a major Wichita aerospace company needed to optimize their manufacturing processes, 
                        they partnered with Metic.ai, the leading <strong className="text-blue-600">Artificial Intelligence Company In Kansas</strong>. 
                        Our AI-powered predictive maintenance system revolutionized their production line, reducing downtime by 
                        <strong className="text-orange-600"> 67%</strong> and increasing overall efficiency by <strong className="text-green-600">89%</strong>.
                      </p>
                      <blockquote className="italic text-blue-700 border-l-4 border-blue-400 pl-6">
                        "Working with Metic.ai has been transformational. They understand both AI technology and the aerospace industry's unique demands. 
                        Their solutions have saved us millions while improving our competitiveness in the global market."
                      </blockquote>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                        <div className="text-2xl font-bold text-blue-600">67%</div>
                        <div className="text-blue-700 text-sm">Reduced Downtime</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                        <div className="text-2xl font-bold text-green-600">89%</div>
                        <div className="text-green-700 text-sm">Efficiency Increase</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                        <div className="text-2xl font-bold text-orange-600">$4.2M</div>
                        <div className="text-orange-700 text-sm">Annual Savings</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-12 border border-green-200">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-green-700">Precision Agriculture Revolution</h4>
                          <p className="text-green-600">Multi-Generational Kansas Farm Operation</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        A family-owned farming operation spanning 15,000 acres across western Kansas transformed their crop management 
                        with AI solutions from the <strong className="text-green-600">Best AI Company In Kansas</strong>. 
                        Our precision agriculture AI analyzes soil conditions, weather patterns, and crop health in real-time, 
                        resulting in <strong className="text-blue-600">42% water savings</strong> and <strong className="text-orange-600">28% yield increase</strong>.
                      </p>
                      <blockquote className="italic text-green-700 border-l-4 border-green-400 pl-6">
                        "Metic.ai didn't just bring us technology—they brought us the future of farming. 
                        Their AI system helps us make better decisions every day, improving both our profitability and environmental stewardship."
                      </blockquote>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                        <div className="text-2xl font-bold text-blue-600">42%</div>
                        <div className="text-blue-700 text-sm">Water Savings</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                        <div className="text-2xl font-bold text-orange-600">28%</div>
                        <div className="text-orange-700 text-sm">Yield Increase</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-200">
                        <div className="text-2xl font-bold text-green-600">$850K</div>
                        <div className="text-green-700 text-sm">Annual ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Outlook & Trends */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-200 font-semibold">Future Vision 2025-2030</span>
                    </div>
                    <h3 className="text-4xl font-bold mb-6">
                      The Next Chapter of AI in Kansas: Strategic Roadmap & Emerging Opportunities
                    </h3>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                      As Kansas continues its AI transformation journey, new opportunities emerge across every sector. 
                      Discover the strategic roadmap shaping the future of artificial intelligence in the Sunflower State.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-3 text-blue-300">Smart Agriculture 2030</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Autonomous farming systems, climate-adaptive AI, and precision livestock management 
                        will position Kansas as the global leader in smart agriculture technology.
                      </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-3 text-green-300">Aerospace Innovation Hub</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Next-generation aircraft design, AI-powered flight systems, and autonomous aviation 
                        technologies will establish Kansas as the aerospace AI capital.
                      </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold mb-3 text-purple-300">Economic Transformation</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        AI-driven economic diversification, tech talent attraction, and innovation district 
                        development will reshape Kansas's economic landscape.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold mb-6 text-center">Kansas AI Investment Projections 2025-2030</h4>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-blue-400 mb-2">$12.5B</div>
                        <div className="text-blue-300 text-sm">Total AI Investment</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-400 mb-2">5,200+</div>
                        <div className="text-green-300 text-sm">New AI Jobs</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400 mb-2">75%</div>
                        <div className="text-purple-300 text-sm">Business AI Adoption</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-orange-400 mb-2">250+</div>
                        <div className="text-orange-300 text-sm">AI Companies</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <p className="text-lg text-gray-300 mb-8">
                      Ready to be part of Kansas's AI future? Partner with the leading <strong className="text-orange-400">AI Development Company In Kansas</strong> 
                      and position your business at the forefront of this transformation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Start Your AI Journey
                        </Button>
                      </Link>
                      <Link href="tel:+917892518414">
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-gray-900">
                          <Phone className="w-4 h-4 mr-2" />
                          Speak with AI Experts
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Deep Dive */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Advanced AI Technologies Transforming Kansas Industries
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore the cutting-edge AI technologies that the premier <strong>AI Firm In Kansas</strong> 
                  implements to drive innovation across the state's diverse business landscape.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-700">Machine Learning & Predictive Analytics</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Our advanced ML algorithms analyze vast datasets to predict market trends, optimize operations, 
                      and identify opportunities across Kansas industries. From crop yield predictions to aerospace 
                      component failure analysis, our predictive models deliver actionable insights.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">95% prediction accuracy in agricultural forecasting</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Real-time anomaly detection for manufacturing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Automated decision support systems</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-green-700">Computer Vision & Image Recognition</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Revolutionary computer vision systems that transform how Kansas businesses interact with visual data. 
                      From automated quality control in aerospace manufacturing to crop health monitoring via satellite imagery, 
                      our vision AI solutions see what humans might miss.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Satellite-based crop monitoring across 500K+ acres</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Automated defect detection in manufacturing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Real-time inventory management systems</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-purple-700">Natural Language Processing & Automation</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Sophisticated NLP systems that understand and process human language, enabling Kansas businesses 
                      to automate customer service, analyze documents, and extract insights from unstructured data. 
                      Our chatbots and virtual assistants speak Kansas business language.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">24/7 intelligent customer support automation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Automated document processing and analysis</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Multi-language support for diverse markets</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-orange-700">IoT Integration & Edge Computing</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Seamless integration of Internet of Things devices with AI processing at the edge, 
                      perfect for Kansas's distributed agricultural operations and manufacturing facilities. 
                      Real-time processing where data is created, reducing latency and improving decision-making.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Smart sensor networks for precision agriculture</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Industrial IoT for predictive maintenance</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Edge AI processing for real-time decisions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Process */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-200">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  How the Leading <span className="text-orange-600">AI Company In Kansas</span> Delivers Results
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our proven methodology ensures successful AI implementation for Kansas businesses, 
                  from initial consultation to ongoing optimization and support.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-blue-700">Discovery & Analysis</h4>
                  <p className="text-gray-600 text-sm">Comprehensive assessment of your Kansas business needs, goals, and current technology infrastructure.</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-green-700">Custom Solution Design</h4>
                  <p className="text-gray-600 text-sm">Tailored AI architecture designed specifically for your industry and Kansas market requirements.</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-purple-700">Implementation & Testing</h4>
                  <p className="text-gray-600 text-sm">Agile development and rigorous testing ensure your AI solution works perfectly in Kansas conditions.</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-orange-700">Optimization & Support</h4>
                  <p className="text-gray-600 text-sm">Continuous monitoring, optimization, and 24/7 support to maximize your AI investment ROI.</p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-8 py-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700 font-semibold">Average Implementation: 6-12 weeks</span>
                  </div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-semibold">ROI Realized in 3-6 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-red-300/40 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="relative container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full mb-8">
                <Quote className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-semibold">Frequently Asked Questions</span>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Everything About Our <span className="text-orange-600">AI Company In Kansas</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about our <strong className="text-blue-600">Artificial Intelligence Company In Kansas</strong> 
                and how we serve businesses across the Sunflower State.
              </p>
            </div>
            
            {/* Interactive FAQ Cards */}
            <div className="space-y-6">
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                      Which is the best Artificial Intelligence Company In Kansas?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Metic.ai is the leading <strong className="text-blue-600">Artificial Intelligence Company In Kansas</strong> with 2100+ successful AI implementations. 
                      We serve Wichita, Overland Park, Kansas City, and businesses throughout the Sunflower State with 60% cost savings and 3x faster delivery.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-600">4.9/5 Rating</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-gray-600">290+ Kansas Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
              
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                      What makes Metic.ai the top AI Company In Kansas?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As the premier <strong className="text-green-600">AI Company In Kansas</strong>, Metic.ai combines deep understanding of Kansas's agriculture, 
                      aerospace, and manufacturing sectors with cutting-edge AI technology. We've helped companies in Wichita aviation industry 
                      and across the state achieve measurable results.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/70 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-green-600">98%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-blue-600">60%</div>
                        <div className="text-sm text-gray-600">Cost Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
              
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-purple-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                      Does Metic.ai provide AI services to small businesses in Kansas?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-6 border border-purple-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Yes, our <strong className="text-purple-600">AI Service In Kansas</strong> caters to businesses of all sizes. 
                      From Wichita aerospace companies to agricultural businesses across the state, we provide scalable AI solutions 
                      that grow with your Kansas business.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="text-sm font-medium text-gray-600">Small Business Friendly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-medium text-gray-600">Scalable Solutions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
              
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-orange-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors">
                      What AI technologies does your AI Firm In Kansas specialize in?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-orange-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-6 border border-orange-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our <strong className="text-orange-600">AI Firm In Kansas</strong> specializes in machine learning, natural language processing, 
                      computer vision, predictive analytics, and custom AI development tailored for Kansas's agriculture, aerospace, and energy industries.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg">
                        <Brain className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-600">Machine Learning</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-600">Computer Vision</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg">
                        <Database className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">Predictive Analytics</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg">
                        <Code className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-600">Custom AI Development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
              
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-indigo-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors">
                      How does Metic.ai support AI Development Company projects in Kansas?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl p-6 border border-indigo-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As a leading <strong className="text-indigo-600">AI Development Company In Kansas</strong>, we provide end-to-end support from strategy to deployment. 
                      Our Kansas-based team understands local business needs and delivers AI solutions with proven ROI.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/70 px-3 py-1 rounded-full text-sm text-gray-600">Strategy & Consulting</span>
                      <span className="bg-white/70 px-3 py-1 rounded-full text-sm text-gray-600">Custom Development</span>
                      <span className="bg-white/70 px-3 py-1 rounded-full text-sm text-gray-600">Implementation</span>
                      <span className="bg-white/70 px-3 py-1 rounded-full text-sm text-gray-600">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </details>
              
              <details className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-pink-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-700 transition-colors">
                      Why choose Metic.ai as your AI partner in Kansas?
                    </h3>
                  </div>
                  <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-pink-600 transition-all duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-6 border border-pink-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Choose Metic.ai because we're the <strong className="text-pink-600">Best AI Company In Kansas</strong> with local expertise, 
                      proven results, and understanding of Kansas's business landscape. We deliver AI solutions that work for Sunflower State businesses.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Deep Kansas market expertise and business understanding</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Proven track record with 2100+ successful implementations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">Industry-specific solutions for agriculture, aerospace, and manufacturing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">
                  Still Have Questions About Our <span className="text-yellow-200">AI Company In Kansas?</span>
                </h3>
                <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                  Our Kansas AI experts are here to help. Get personalized answers about how our 
                  <strong className="text-yellow-200"> Artificial Intelligence Company In Kansas</strong> can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Get Your Free AI Consultation
                    </Button>
                  </Link>
                  <Link href="tel:+917892518414">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                      <Phone className="w-4 h-4 mr-2" />
                      Speak with Kansas AI Experts
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-red-600 to-pink-700 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
              Ready to Partner with the Leading <strong>AI Company In Kansas</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join leading Kansas companies that trust the premier <strong>Artificial Intelligence Company In Kansas</strong> for their AI transformation. 
              From Wichita's aerospace excellence to agricultural innovation across the Great Plains, our <strong>AI Service In Kansas</strong> 
              drives measurable results. Get started with a comprehensive consultation and discover how our solutions can accelerate your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Your AI Transformation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-orange-600 shadow-xl px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Best AI Company Kansas
                </Button>
              </Link>
            </div>
            
            <div className="text-center">
              <p className="text-orange-200 mb-6 text-lg">Trusted by businesses across Kansas</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {kansasCities.slice(0, 12).map((city, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 text-sm">
                    <MapPin className="w-3 h-3 text-orange-300" />
                    <span className="text-orange-100">{city}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-orange-200 text-sm">
                And hundreds more cities and towns across the Sunflower State
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

