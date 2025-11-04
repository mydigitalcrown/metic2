import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Target,
  Zap,
  Shield,
  Users,
  CheckCircle,
  Lightbulb,
  Database,
  Cpu,
  GitBranch,
  Server,
  Settings,
  Cloud,
  Activity,
  PieChart,
  LineChart,
  Layers,
  Code
} from "lucide-react";

export const metadata = {
  title: "Machine Learning Company In Missouri | #1 ML Company In Show Me State - Metic.ai",
  description: "Leading Machine Learning Company In Missouri with 2100+ successful ML implementations. Expert machine learning services, AI development & ML solutions. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Machine Learning Company In Missouri",
    "ML Company In Missouri", 
    "Machine Learning Services In Missouri",
    "Machine Learning Firm In Missouri",
    "ML Development Company In Missouri",
    "Best Machine Learning Company In Missouri",
    "Top ML Company Missouri",
    "Machine Learning Solutions Missouri",
    "AI Machine Learning Company Missouri",
    "Enterprise ML Company Missouri",
    "Machine Learning Consulting Missouri",
    "ML Experts Missouri",
    "Machine Learning Agency Missouri",
    "Data Science Company Missouri",
    "Predictive Analytics Company Missouri",
    "Deep Learning Company Missouri",
    "Neural Networks Company Missouri",
    "ML Model Development Missouri",
    "Machine Learning Specialists Missouri"
  ],
  authors: [{ name: "Metic.ai - Machine Learning Company In Missouri" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Machine Learning Company In Missouri | #1 ML Company In Show Me State - Metic.ai",
    description: "Leading Machine Learning Company In Missouri with 2100+ successful ML implementations. Expert machine learning services, AI development & ML solutions. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/machine-learning-services-in-missouri/",
    siteName: "Metic.ai - Machine Learning Company In Missouri",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-machine-learning-missouri.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning Company In Missouri - Metic.ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Company In Missouri | #1 ML Company In Show Me State",
    description: "Leading Machine Learning Company In Missouri with 2100+ successful ML implementations. 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-machine-learning-missouri.jpg"],
    creator: "@MeticAI",
    site: "@MeticAI",
  },
  alternates: {
    canonical: "https://metic.ai/machine-learning-services-in-missouri/",
  },
  other: {
    "geo.region": "US-MO",
    "geo.placename": "Missouri",
    "geo.position": "38.573936;-92.603760",
    "ICBM": "38.573936, -92.603760"
  }
};

export default function MachineLearningMissouriPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Metic.ai - Machine Learning Company In Missouri",
    "description": "Leading Machine Learning Company In Missouri providing AI development, ML solutions, and data science services",
    "url": "https://metic.ai/machine-learning-services-in-missouri/",
    "logo": "https://metic.ai/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 7892518414",
      "contactType": "customer service",
      "areaServed": "Missouri",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Missouri",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/metic-ai",
      "https://twitter.com/MeticAI"
    ],
    "serviceArea": {
      "@type": "State",
      "name": "Missouri"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Machine Learning Services In Missouri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machine Learning Company In Missouri",
            "description": "Comprehensive ML development and AI solutions for Missouri businesses"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best Machine Learning Company In Missouri?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Metic.ai is the leading Machine Learning Company In Missouri with 2100+ successful ML implementations, serving major Missouri businesses including Boeing, Monsanto (Bayer), Express Scripts, and Washington University partners with 60% cost savings and 3x faster delivery."
        }
      },
      {
        "@type": "Question", 
        "name": "What Machine Learning Services In Missouri does Metic.ai provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As the premier ML Company In Missouri, we provide comprehensive machine learning services including predictive analytics, deep learning, neural networks, computer vision, natural language processing, recommendation systems, time series analysis, and custom ML model development for Missouri businesses across aerospace, agriculture, healthcare, and financial services sectors."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Machine Learning Company In Missouri charge for ML projects?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Machine Learning Company In Missouri pricing starts from $30,000 for basic ML projects, $75,000 for advanced solutions, and $150,000+ for enterprise-scale implementations. Metic.ai offers competitive pricing with 60% cost savings compared to traditional ML development approaches while maintaining the highest quality standards in the Show Me State."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries in Missouri benefit most from Machine Learning Services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Missouri's key industries leveraging our Machine Learning Company services include aerospace technology (Boeing operations), agriculture innovation (Bayer/Monsanto), healthcare analytics (Express Scripts), financial services, manufacturing automation, and logistics optimization serving the Show Me State business community."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Metic.ai the top ML Company In Missouri?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Metic.ai stands as the premier Machine Learning Company In Missouri with 2100+ successful implementations, partnerships with major Missouri corporations like Boeing, Bayer (Monsanto), Express Scripts, and academic collaborations with Washington University, proven expertise in Show Me State business landscape, 98% model accuracy rates, and comprehensive support across Kansas City, St. Louis, Springfield, Columbia, and Independence markets."
        }
      },
      {
        "@type": "Question",
        "name": "How long does ML project delivery take for a Machine Learning Company In Missouri?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As the leading Machine Learning Company In Missouri, Metic.ai delivers ML projects 3x faster than industry standards: basic models in 2-4 weeks, advanced solutions in 6-10 weeks, and enterprise implementations in 12-20 weeks, with ongoing support and optimization for Missouri businesses across the Show Me State."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Machine Learning Company In Missouri | Leading ML Services in Show Me State",
    "description": "Comprehensive guide to machine learning services in Missouri, featuring the leading ML company serving Boeing, Bayer (Monsanto), Express Scripts, and Washington University partnerships.",
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
    "datePublished": "2024-01-15",
    "dateModified": "2024-11-03",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://metic.ai/machine-learning-services-in-missouri/"
    },
    "image": {
      "@type": "ImageObject", 
      "url": "https://metic.ai/og-machine-learning-missouri.jpg",
      "width": 1200,
      "height": 630
    },
    "keywords": "Machine Learning Company In Missouri, ML Company In Missouri, Machine Learning Services In Missouri, ML Development Missouri",
    "about": [
      {
        "@type": "Thing",
        "name": "Machine Learning",
        "description": "Advanced AI technology for business automation and intelligence"
      },
      {
        "@type": "Place",
        "name": "Missouri",
        "description": "Show Me State with diverse business ecosystem"
      }
    ],
    "mentions": [
      {
        "@type": "Organization",
        "name": "Boeing",
        "description": "Major aerospace corporation with Missouri operations"
      },
      {
        "@type": "Organization", 
        "name": "Bayer (Monsanto)",
        "description": "Global agriculture and biotechnology company headquartered in Missouri"
      },
      {
        "@type": "Organization",
        "name": "Express Scripts",
        "description": "Leading healthcare technology company in Missouri"
      },
      {
        "@type": "Organization",
        "name": "Washington University",
        "description": "Premier research university in Missouri"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-green-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <strong className="text-primary-orange">Machine Learning Company In Missouri</strong> | Leading ML Company In Show Me State
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>Machine Learning Company In Missouri</strong>? Metic.ai is the premier 
              <strong> Machine Learning Company In Missouri</strong> serving the Show Me State with 2100+ successful 
              ML implementations. We specialize in advanced machine learning solutions for Boeing aerospace operations, 
              Bayer (Monsanto) agriculture innovation, Express Scripts healthcare analytics, and Washington University 
              research partnerships. Transform your Missouri business with 60% cost savings and 3x faster ML delivery 
              across Kansas City, St. Louis, Springfield, Columbia, and Independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#consultation">
                <Button variant="primary" size="lg">
                  Get ML Consultation
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg">
                  Explore ML Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Machine Learning <span className="text-primary-orange">Expertise in Missouri</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive machine learning services from data preparation to model deployment and monitoring for Missouri businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Predictive Analytics */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Forecast Missouri market trends, customer behavior, and business outcomes using advanced predictive 
                  models including time series analysis, regression models, and ensemble methods.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sales forecasting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Demand prediction
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Risk assessment
                  </li>
                </ul>
              </div>

              {/* Classification Models */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Classification Models</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Build intelligent classification systems for customer segmentation, fraud detection, 
                  image recognition, and automated decision-making using supervised learning algorithms.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Customer segmentation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Fraud detection
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated categorization
                  </li>
                </ul>
              </div>

              {/* Deep Learning */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Deep Learning</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Leverage neural networks for complex pattern recognition, computer vision, natural language 
                  processing, and advanced AI applications that require deep understanding of data.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Computer vision
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Natural language processing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pattern recognition
                  </li>
                </ul>
              </div>

              {/* Clustering & Segmentation */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <PieChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Clustering & Segmentation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Discover hidden patterns in your Missouri market data using unsupervised learning techniques for market 
                  segmentation, anomaly detection, and data exploration without labeled examples.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Market segmentation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Anomaly detection
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Data exploration
                  </li>
                </ul>
              </div>

              {/* Recommendation Systems */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Recommendation Systems</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Build intelligent recommendation engines that personalize user experiences, increase 
                  engagement, and drive sales through collaborative filtering and content-based algorithms.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Product recommendations
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Content personalization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    User behavior analysis
                  </li>
                </ul>
              </div>

              {/* Time Series Analysis */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <LineChart className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Time Series Analysis</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Analyze temporal data patterns for forecasting, trend analysis, and seasonal decomposition 
                  using advanced time series models and statistical techniques.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Financial forecasting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Seasonal analysis
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Trend detection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Metic.ai - Missouri Focus */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Why Choose Metic.ai as Your <span className="text-primary-orange">Machine Learning Company In Missouri</span>?
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-600 mb-6">
                  As the leading <strong>Machine Learning Company In Missouri</strong>, Metic.ai has successfully 
                  delivered 2100+ ML implementations across the Show Me State. We specialize in Missouri's 
                  key industries including aerospace technology, agriculture innovation, healthcare analytics, 
                  and financial services automation.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our <strong>ML Company In Missouri</strong> expertise spans partnerships with major corporations 
                  like Boeing aerospace operations, Bayer (Monsanto) agriculture systems, Express Scripts healthcare 
                  technology, and Washington University research initiatives. We understand Missouri's unique business 
                  landscape from Kansas City's logistics hub to St. Louis's biotechnology corridor.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Aerospace Technology ML</h4>
                      <p className="text-gray-600 text-sm">Boeing-grade aerospace and defense ML solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Agriculture Innovation</h4>
                      <p className="text-gray-600 text-sm">Bayer (Monsanto) level agricultural technology and crop optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Healthcare Analytics</h4>
                      <p className="text-gray-600 text-sm">Express Scripts-grade pharmaceutical and healthcare ML</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Financial Services ML</h4>
                      <p className="text-gray-600 text-sm">Banking, insurance, and fintech optimization solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Missouri ML Success Metrics</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">ML Projects Completed</span>
                        <span className="font-bold">380+</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-orange h-2 rounded-full" style={{width: '94%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Missouri Model Accuracy</span>
                        <span className="font-bold">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-orange h-2 rounded-full" style={{width: '98%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Cost Savings Delivered</span>
                        <span className="font-bold">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-orange h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Show Me State Coverage</span>
                        <span className="font-bold">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-orange h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-primary-orange/5 rounded-lg">
                    <h4 className="font-bold text-primary-orange mb-2">Missouri Enterprise Clients</h4>
                    <p className="text-sm text-gray-600">
                      Boeing • Bayer (Monsanto) • Express Scripts • Washington University • 
                      Emerson Electric • Enterprise Holdings • Centene Corporation • Commerce Bancshares • 
                      H&R Block • Anheuser-Busch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location-specific Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Machine Learning Solutions for <span className="text-primary-orange">Missouri Businesses</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized ML solutions including Agriculture technology, manufacturing ML, logistics optimization, and healthcare analytics tailored for Missouri's business environment
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Brain className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Advanced Algorithms</h3>
                <p className="text-gray-600">
                  State-of-the-art machine learning algorithms and deep learning techniques 
                  optimized for Missouri business requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Fast Performance</h3>
                <p className="text-gray-600">
                  Optimized models with high-performance computing infrastructure 
                  ensuring rapid predictions and real-time decision making.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Target className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">High Accuracy</h3>
                <p className="text-gray-600">
                  Rigorous model validation and testing processes ensuring 
                  consistent high accuracy and reliable predictions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">
                  Robust security measures protecting your data and models 
                  with compliance to industry standards and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ML Process Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our Machine Learning Process
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Systematic approach to machine learning project delivery ensuring optimal results and business value
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-bold mb-4">Data Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Evaluate data quality, completeness, and suitability for ML objectives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-bold mb-4">Feature Engineering</h3>
                <p className="text-gray-600 text-sm">
                  Extract and transform relevant features for optimal model performance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-bold mb-4">Model Development</h3>
                <p className="text-gray-600 text-sm">
                  Build and train machine learning models using appropriate algorithms.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  4
                </div>
                <h3 className="text-lg font-bold mb-4">Validation & Testing</h3>
                <p className="text-gray-600 text-sm">
                  Rigorous testing and validation to ensure model accuracy and reliability.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  5
                </div>
                <h3 className="text-lg font-bold mb-4">Deployment & Monitoring</h3>
                <p className="text-gray-600 text-sm">
                  Deploy models to production with continuous monitoring and optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions About <span className="text-primary-orange">Machine Learning Company In Missouri</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Common questions about ML services and our Machine Learning Company In Missouri expertise
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  Which is the best Machine Learning Company In Missouri?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading <strong>Machine Learning Company In Missouri</strong> with 2100+ successful 
                  ML implementations, serving major Missouri businesses including Boeing, Bayer (Monsanto), Express Scripts, 
                  and Washington University partners with 60% cost savings and 3x faster delivery. Our expertise spans the 
                  entire Show Me State, from Kansas City's logistics innovations to St. Louis's biotechnology advances.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  What Machine Learning Services In Missouri does Metic.ai provide?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>ML Company In Missouri</strong>, we provide comprehensive machine learning services 
                  including predictive analytics, deep learning, neural networks, computer vision, natural language processing, 
                  recommendation systems, time series analysis, and custom ML model development for Missouri businesses across 
                  aerospace technology (Boeing operations), agriculture innovation (Bayer systems), healthcare analytics 
                  (Express Scripts), and financial services throughout the Show Me State.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  How much does a Machine Learning Company In Missouri charge for ML projects?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Machine Learning Company In Missouri</strong> pricing starts from $30,000 for basic ML projects, 
                  $75,000 for advanced solutions, and $150,000+ for enterprise-scale implementations. Metic.ai offers competitive 
                  pricing with 60% cost savings compared to traditional ML development approaches while maintaining the highest 
                  quality standards serving Boeing, Bayer (Monsanto), Express Scripts, and other major Missouri enterprises 
                  across the Show Me State.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  Which industries in Missouri benefit most from Machine Learning Services?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Missouri's key industries leveraging our <strong>Machine Learning Company</strong> services include aerospace 
                  technology (Boeing defense and commercial aircraft), agriculture innovation (Bayer/Monsanto crop sciences), 
                  healthcare analytics (Express Scripts pharmaceutical), financial services (H&R Block, Commerce Bancshares), 
                  manufacturing automation (Emerson Electric), and logistics optimization serving the diverse Show Me State 
                  business community from Kansas City to St. Louis.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  What makes Metic.ai the top ML Company In Missouri?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai stands as the premier <strong>Machine Learning Company In Missouri</strong> with 2100+ successful 
                  implementations, partnerships with major Missouri corporations like Boeing, Bayer (Monsanto), Express Scripts, 
                  and academic collaborations with Washington University, proven expertise in Show Me State business landscape, 
                  98% model accuracy rates, and comprehensive support across Kansas City, St. Louis, Springfield, Columbia, 
                  Independence, Lee's Summit, and O'Fallon markets with deep understanding of Missouri's aerospace, agriculture, 
                  and healthcare innovation ecosystems.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  How long does ML project delivery take for a Machine Learning Company In Missouri?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the leading <strong>Machine Learning Company In Missouri</strong>, Metic.ai delivers ML projects 3x faster 
                  than industry standards: basic models in 2-4 weeks, advanced solutions in 6-10 weeks, and enterprise implementations 
                  in 12-20 weeks, with ongoing support and optimization for Missouri businesses across the Show Me State. Our 
                  accelerated delivery supports Missouri's dynamic business environment from Boeing's aerospace innovations to 
                  Bayer's agricultural breakthroughs and Express Scripts' healthcare technology advances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Partner with the Leading <span className="text-orange-200">Machine Learning Company In Missouri</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Show Me State businesses like Boeing, Bayer (Monsanto), Express Scripts, Washington University, 
              and Emerson Electric who trust our advanced machine learning solutions. Transform your Missouri enterprise 
              today with 60% cost savings and 3x faster ML delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your Missouri ML Project
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Missouri ML Experts: +91 7892518414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">380+</div>
                <p className="text-orange-100">Missouri ML Projects Completed</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">98%</div>
                <p className="text-orange-100">Show Me State Model Accuracy</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">60%</div>
                <p className="text-orange-100">Cost Savings for Missouri Businesses</p>
              </div>
            </div>
            
            <div className="mt-12 bg-orange-600/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Missouri Businesses Choose Metic.ai</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-200 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Local Show Me State Expertise</h4>
                    <p className="text-orange-100 text-sm">Deep understanding of Missouri's aerospace, agriculture, healthcare, and financial services landscape</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-200 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Proven Missouri Success Stories</h4>
                    <p className="text-orange-100 text-sm">380+ successful projects across Show Me State industries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-200 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Enterprise Partnerships</h4>
                    <p className="text-orange-100 text-sm">Trusted by Boeing, Bayer (Monsanto), Express Scripts, and Washington University</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-200 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Missouri Support</h4>
                    <p className="text-orange-100 text-sm">24/7 support across Kansas City, St. Louis, Springfield, Columbia, Independence, and all Missouri regions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
