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
  title: "Machine Learning Company In Hyderabad | #1 ML Company In Cyberabad - Metic.ai",
  description: "Leading Machine Learning Company In Hyderabad with 2100+ successful ML implementations. Expert ML services, predictive analytics & AI development in Cyberabad. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Machine Learning Company In Hyderabad",
    "ML Company In Hyderabad", 
    "Machine Learning Services In Hyderabad",
    "Machine Learning Firm In Hyderabad",
    "ML Development Company In Hyderabad",
    "Best Machine Learning Company In Hyderabad",
    "Top ML Company Cyberabad",
    "Machine Learning Solutions Hyderabad",
    "AI Company In Hyderabad",
    "Data Science Company Hyderabad",
    "Predictive Analytics Hyderabad",
    "ML Consulting Services Hyderabad",
    "Machine Learning Agency Hyderabad",
    "Custom ML Development Hyderabad",
    "Enterprise ML Solutions Hyderabad",
    "Machine Learning Experts Hyderabad",
    "AI ML Services Cyberabad",
    "Machine Learning Outsourcing Hyderabad",
    "Professional ML Company Hyderabad"
  ],
  authors: [{ name: "Metic.ai Machine Learning Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Machine Learning Company In Hyderabad | #1 ML Company In Cyberabad - Metic.ai",
    description: "Leading Machine Learning Company In Hyderabad with 2100+ successful ML implementations. Expert ML services, predictive analytics & AI development in Cyberabad. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/machine-learning-services-in-hyderabad/",
    siteName: "Metic.ai - Machine Learning Company In Hyderabad",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-machine-learning-hyderabad.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning Company In Hyderabad - Metic.ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Company In Hyderabad | #1 ML Company In Cyberabad",
    description: "Leading Machine Learning Company In Hyderabad with 2100+ ML implementations. 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-machine-learning-hyderabad.jpg"],
    creator: "@MeticAI",
  },
  alternates: {
    canonical: "https://metic.ai/machine-learning-services-in-hyderabad/",
  },
  category: "Machine Learning Services",
};

export default function MachineLearningHyderabadPage() {
  return (
    <>
      {/* JSON-LD Schemas for Enhanced SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://metic.ai/#organization",
                "name": "Metic.ai - Machine Learning Company In Hyderabad",
                "url": "https://metic.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://metic.ai/logo.png",
                  "width": 200,
                  "height": 60
                },
                "description": "Leading Machine Learning Company In Hyderabad specializing in AI solutions, predictive analytics, and ML development for Cyberabad enterprises.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "addressCountry": "India"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91 7892518414",
                  "contactType": "Business",
                  "availableLanguage": ["English", "Hindi", "Telugu"]
                },
                "sameAs": [
                  "https://linkedin.com/company/metic-ai",
                  "https://twitter.com/MeticAI"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Machine Learning Services In Hyderabad",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Machine Learning Company In Hyderabad",
                        "description": "Comprehensive ML solutions for Cyberabad businesses"
                      }
                    }
                  ]
                },
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Hyderabad",
                    "containedInPlace": {
                      "@type": "State",
                      "name": "Telangana"
                    }
                  },
                  {
                    "@type": "Place",
                    "name": "Cyberabad"
                  },
                  {
                    "@type": "Place", 
                    "name": "HITEC City"
                  }
                ],
                "knowsAbout": [
                  "TCS Hyderabad",
                  "Infosys Hyderabad", 
                  "Microsoft India Development Center",
                  "Google Hyderabad",
                  "Amazon Development Center India",
                  "Wipro Hyderabad",
                  "Tech Mahindra",
                  "Cyient Limited"
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Which is the best Machine Learning Company In Hyderabad?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Metic.ai is the leading Machine Learning Company In Hyderabad with 2100+ successful ML implementations. We serve major Cyberabad enterprises including TCS, Infosys, Microsoft India, and other tech giants with 60% cost savings and 3x faster delivery."
                    }
                  },
                  {
                    "@type": "Question", 
                    "name": "What Machine Learning Services In Hyderabad does Metic.ai provide?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "As the top ML Company In Hyderabad, we provide predictive analytics, computer vision, NLP, recommendation systems, demand forecasting, risk assessment, and custom ML model development for Cyberabad's IT, pharma, aerospace, and biotech sectors."
                    }
                  }
                ]
              },
              {
                "@type": "Article",
                "@id": "https://metic.ai/machine-learning-services-in-hyderabad/#article",
                "headline": "Machine Learning Company In Hyderabad | #1 ML Company In Cyberabad",
                "description": "Comprehensive guide to Machine Learning Services In Hyderabad, featuring expert ML solutions for Cyberabad's leading enterprises and IT companies.",
                "image": "https://metic.ai/og-machine-learning-hyderabad.jpg",
                "author": {
                  "@type": "Organization",
                  "@id": "https://metic.ai/#organization"
                },
                "publisher": {
                  "@type": "Organization", 
                  "@id": "https://metic.ai/#organization"
                },
                "datePublished": "2024-01-15",
                "dateModified": "2024-11-03",
                "mainEntityOfPage": "https://metic.ai/machine-learning-services-in-hyderabad/",
                "about": [
                  {
                    "@type": "Thing",
                    "name": "Machine Learning Company In Hyderabad"
                  },
                  {
                    "@type": "Place",
                    "name": "Cyberabad"
                  },
                  {
                    "@type": "Organization",
                    "name": "TCS"
                  },
                  {
                    "@type": "Organization", 
                    "name": "Infosys"
                  }
                ],
                "mentions": [
                  {
                    "@type": "Organization",
                    "name": "Microsoft India Development Center"
                  },
                  {
                    "@type": "Organization",
                    "name": "Google Hyderabad"
                  },
                  {
                    "@type": "Organization",
                    "name": "Amazon Development Center India"
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-green-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <strong>Machine Learning Company In Hyderabad</strong> | Leading <span className="text-primary-orange">ML Company In Cyberabad</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>Machine Learning Company In Hyderabad</strong>? Metic.ai is the premier 
              <strong>ML Company In Hyderabad</strong> serving Cyberabad's leading enterprises. Transform your business with 
              advanced machine learning solutions, predictive analytics, and intelligent automation. We deliver 
              2100+ successful implementations with 60% cost savings and 3x faster delivery across HITEC City and Cyberabad.
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
                Machine Learning <span className="text-primary-orange">Expertise in Hyderabad</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive machine learning services from data preparation to model deployment and monitoring for Hyderabad businesses
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
                  Forecast Hyderabad market trends, customer behavior, and business outcomes using advanced predictive 
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
                  Discover hidden patterns in your Hyderabad market data using unsupervised learning techniques for market 
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

      {/* Location-specific Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Machine Learning Solutions for <span className="text-primary-orange">Hyderabad Businesses</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized ML solutions including Pharmaceutical ML, IT services analytics, biotechnology, and manufacturing optimization tailored for Hyderabad's business environment
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
                  optimized for Hyderabad business requirements.
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

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                About Metic.ai - <strong>Machine Learning Company In Hyderabad</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Cyberabad's most trusted <strong>ML Company In Hyderabad</strong> serving tech giants across HITEC City and beyond
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Leading <strong>Machine Learning Firm In Hyderabad</strong></h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  As the premier <strong>Machine Learning Company In Hyderabad</strong>, Metic.ai has successfully delivered 2100+ ML implementations 
                  across Cyberabad's thriving technology ecosystem. We serve major IT enterprises including TCS, Infosys, Microsoft India Development Center, 
                  Google Hyderabad, Amazon Development Center India, and other Fortune 500 companies in HITEC City and surrounding tech corridors.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our <strong>ML Services In Hyderabad</strong> span IT services optimization, pharmaceutical research acceleration, aerospace analytics, 
                  and biotech innovation. We collaborate with Indian School of Business (ISB), IIIT Hyderabad, and local research institutions to advance 
                  AI innovation in India's technology capital and Silicon Valley of India.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="font-bold text-2xl text-primary-orange mb-1">500+</div>
                    <div className="text-sm text-gray-600">Hyderabad ML Projects</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="font-bold text-2xl text-primary-orange mb-1">60%</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Hyderabad Industry Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Information Technology</h4>
                      <p className="text-sm text-gray-600">Serving TCS, Infosys, Microsoft India, Google, Amazon, and 200+ IT companies in Cyberabad</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Pharmaceuticals & Biotech</h4>
                      <p className="text-sm text-gray-600">Drug discovery and research optimization for Dr. Reddy's, Aurobindo Pharma, and biotech leaders</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Aerospace & Defense</h4>
                      <p className="text-sm text-gray-600">Supporting Hindustan Aeronautics Limited (HAL) and defense contractors with predictive analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Financial Services</h4>
                      <p className="text-sm text-gray-600">Risk assessment and fraud detection for banking and financial institutions in Cyberabad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Frequently Asked Questions - <strong>Machine Learning Company In Hyderabad</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about <strong>ML Services In Hyderabad</strong> and our Cyberabad expertise
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-4">Which is the best Machine Learning Company In Hyderabad?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading <strong>Machine Learning Company In Hyderabad</strong> with 2100+ successful ML implementations. 
                  We serve major Cyberabad enterprises including TCS, Infosys, Microsoft India Development Center, Google Hyderabad, and Amazon India 
                  with 60% cost savings and 3x faster delivery. Our proven track record across HITEC City makes us the top choice.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-4">What Machine Learning Services In Hyderabad does Metic.ai provide?</h3>
                <p className="text-gray-600 leading-relaxed">
                  As the top <strong>ML Company In Hyderabad</strong>, we provide predictive analytics, computer vision, NLP, recommendation systems, 
                  demand forecasting, risk assessment, fraud detection, and custom ML model development for Cyberabad's IT, pharma, aerospace, 
                  and biotech sectors. Our services are tailored to India's Silicon Valley ecosystem.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-4">How much do Machine Learning services cost in Hyderabad?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>Machine Learning Company In Hyderabad</strong> offers competitive pricing with 60% cost savings compared to traditional development. 
                  Project costs vary based on complexity, typically ranging from $25,000 to $800,000 for enterprise IT solutions. 
                  We provide transparent pricing with no hidden fees for Cyberabad businesses.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-4">Which Hyderabad industries benefit most from Machine Learning?</h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>ML Firm In Hyderabad</strong>, we serve IT services (TCS, Infosys, Tech Mahindra), pharmaceuticals (Dr. Reddy's, Aurobindo), 
                  aerospace (HAL), biotech, and financial services sectors across Cyberabad and HITEC City. 
                  Hyderabad's tech ecosystem provides excellent ML opportunities across multiple verticals.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-4">How long does ML implementation take in Hyderabad?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>Machine Learning Company In Hyderabad</strong> delivers 3x faster implementation than competitors. Simple IT automation models: 2-4 weeks, 
                  complex enterprise systems: 3-8 months, with ongoing support and optimization for Cyberabad businesses. 
                  We understand the fast-paced nature of HITEC City and deliver accordingly.
                </p>
              </div>
              
              <div className="pb-8">
                <h3 className="text-xl font-bold mb-4">Does Metic.ai work with ISB and local Hyderabad institutions?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, as the leading <strong>Machine Learning Firm In Hyderabad</strong>, we collaborate with Indian School of Business (ISB), 
                  IIIT Hyderabad, University of Hyderabad, and the T-Hub innovation ecosystem for advancing ML research in India's Silicon Valley. 
                  These partnerships ensure we stay at the forefront of AI innovation in Cyberabad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-gradient-to-br from-primary-orange to-secondary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Transform Your Hyderabad Business with <strong>Machine Learning Company In Hyderabad</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join 500+ Cyberabad businesses that trust Metic.ai as their premier <strong>ML Company In Hyderabad</strong>. 
              From IT optimization to pharmaceutical research, we deliver 60% cost savings and 3x faster implementation across HITEC City.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Start Your Hyderabad ML Project
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange px-8 py-4 text-lg font-semibold">
                  Free Cyberabad Consultation
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">IT Services Optimization</h3>
                <p className="text-orange-100 text-sm">ML solutions for TCS, Infosys, Microsoft India, and tech giants in HITEC City</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">Pharmaceutical Innovation</h3>
                <p className="text-orange-100 text-sm">Drug discovery acceleration for Dr. Reddy's, Aurobindo, and biotech leaders</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">Aerospace Analytics</h3>
                <p className="text-orange-100 text-sm">Predictive maintenance and optimization for HAL and defense contractors</p>
              </div>
            </div>
            
            <div className="mt-8 text-orange-100">
              <p className="text-sm">
                Trusted <strong>Machine Learning Company In Hyderabad</strong> serving clients across Cyberabad, HITEC City, and Telangana
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
