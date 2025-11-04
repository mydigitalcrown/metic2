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
  title: "Machine Learning Company In Ahmedabad | #1 ML Company In Gujarat - Metic.ai",
  description: "Leading Machine Learning Company In Ahmedabad with 2100+ successful ML implementations. Expert ML services, predictive analytics & AI development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Machine Learning Company In Ahmedabad",
    "ML Company In Ahmedabad", 
    "Machine Learning Services in Ahmedabad",
    "AI Firm In Ahmedabad",
    "ML Development Company In Ahmedabad",
    "Best Machine Learning Company In Ahmedabad",
    "Top ML Company Gujarat",
    "Machine Learning Solutions Ahmedabad",
    "Predictive Analytics Company Ahmedabad",
    "Deep Learning Services Ahmedabad",
    "Data Science Company Ahmedabad",
    "AI Development Services Ahmedabad",
    "ML Consulting Ahmedabad",
    "Neural Networks Development Ahmedabad",
    "Classification Models Ahmedabad",
    "Regression Analysis Services Ahmedabad",
    "Time Series Analysis Ahmedabad",
    "Computer Vision Services Ahmedabad",
    "NLP Services Ahmedabad"
  ],
  authors: [{ name: "Metic.ai Machine Learning Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Machine Learning Company In Ahmedabad | #1 ML Company In Gujarat - Metic.ai",
    description: "Leading Machine Learning Company In Ahmedabad with 2100+ successful ML implementations. Expert ML services, predictive analytics & AI development. 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/machine-learning-services-in-ahmedabad/",
    siteName: "Metic.ai - Machine Learning Company In Ahmedabad",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-machine-learning-ahmedabad.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning Company In Ahmedabad by Metic.ai",
      },
    ],
  },
  alternates: {
    canonical: "https://metic.ai/machine-learning-services-in-ahmedabad/",
  },
};

export default function MachineLearningAhmedabadPage() {
  return (
    <>
      {/* Enhanced JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://metic.ai/#organization",
                "name": "Metic.ai - Machine Learning Company In Ahmedabad",
                "url": "https://metic.ai/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://metic.ai/logo.png"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/metic-ai",
                  "https://twitter.com/metic_ai"
                ],
                "areaServed": {
                  "@type": "Place",
                  "name": "Ahmedabad, Gujarat, India"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Machine Learning Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Predictive Analytics",
                        "description": "Advanced ML models for forecasting and prediction"
                      }
                    },
                    {
                      "@type": "Offer", 
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Deep Learning Solutions",
                        "description": "Neural networks and advanced AI implementations"
                      }
                    }
                  ]
                },
                "knowsAbout": [
                  "Adani Group",
                  "Gujarat Heavy Chemicals Limited",
                  "Torrent Pharmaceuticals",
                  "Nirma Limited",
                  "Gujarat University",
                  "Indian Institute of Management Ahmedabad",
                  "Ahmedabad Textile Industry",
                  "Gujarat Chemical Industry"
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://metic.ai/machine-learning-services-in-ahmedabad/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Which is the best Machine Learning Company In Ahmedabad?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Metic.ai is the leading Machine Learning Company In Ahmedabad with 2100+ successful ML implementations. We specialize in textile industry automation, chemical process optimization, pharmaceutical analytics, and manufacturing intelligence with 60% cost savings and 3x faster delivery."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can machine learning benefit Ahmedabad's textile industry?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Machine learning transforms Ahmedabad's textile industry through quality control automation, demand forecasting, production optimization, defect detection, inventory management, and supply chain analytics. Our ML solutions help textile companies reduce waste by 40% and improve efficiency."
                    }
                  }
                ]
              },
              {
                "@type": "Article",
                "@id": "https://metic.ai/machine-learning-services-in-ahmedabad/#article",
                "headline": "Machine Learning Company In Ahmedabad | Expert ML Services",
                "description": "Comprehensive guide to machine learning services in Ahmedabad covering textile, chemical, pharmaceutical, and manufacturing sectors",
                "author": {
                  "@type": "Organization",
                  "@id": "https://metic.ai/#organization"
                },
                "publisher": {
                  "@type": "Organization", 
                  "@id": "https://metic.ai/#organization"
                },
                "datePublished": "2024-01-01",
                "dateModified": "2024-11-01",
                "about": [
                  "Machine Learning",
                  "Artificial Intelligence",
                  "Predictive Analytics",
                  "Ahmedabad Business",
                  "Textile Industry Automation",
                  "Chemical Process Optimization"
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
              <strong>Machine Learning Company In Ahmedabad</strong> | Leading ML Company In Gujarat
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>Machine Learning Company In Ahmedabad</strong>? Metic.ai is the premier 
              ML Company In Ahmedabad, serving major businesses including Adani Group, Gujarat Heavy Chemicals, 
              Torrent Pharmaceuticals, and Nirma Limited. Transform your Ahmedabad business with advanced machine 
              learning solutions - from textile automation to chemical process optimization. Get 3x faster delivery 
              and 60% cost savings with our expert ML services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#consultation">
                <Button variant="primary" size="lg">
                  Get Free ML Consultation in Ahmedabad
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg">
                  Explore Ahmedabad ML Solutions
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
                Machine Learning <span className="text-primary-orange">Expertise in Ahmedabad</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive machine learning services from data preparation to model deployment and monitoring for Ahmedabad businesses
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
                  Forecast Ahmedabad market trends, customer behavior, and business outcomes using advanced predictive 
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
                  Discover hidden patterns in your Ahmedabad market data using unsupervised learning techniques for market 
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
                Machine Learning Solutions for <span className="text-primary-orange">Ahmedabad Businesses</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized ML solutions including Manufacturing ML, textile analytics, chemical industry optimization, and pharmaceutical technology tailored for Ahmedabad's business environment
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
                  optimized for Ahmedabad business requirements.
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
                Frequently Asked Questions About <span className="text-primary-orange">Machine Learning In Ahmedabad</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Common questions about machine learning services for Ahmedabad businesses
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  Which is the best Machine Learning Company In Ahmedabad?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading <strong>Machine Learning Company In Ahmedabad</strong> with 2100+ successful ML implementations. 
                  We specialize in textile industry automation, chemical process optimization, pharmaceutical analytics, 
                  and manufacturing intelligence with 60% cost savings and 3x faster delivery. Our expertise with major 
                  Ahmedabad companies like Adani Group, Torrent Pharmaceuticals, and Nirma Limited makes us the top choice.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  How can machine learning benefit Ahmedabad's textile industry?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Machine learning transforms Ahmedabad's textile industry through quality control automation, defect detection, 
                  production optimization, demand forecasting, inventory management, and supply chain analytics. Our ML solutions 
                  help textile companies reduce waste by 40%, improve efficiency by 60%, and enhance product quality for export markets.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  What ML solutions work best for Ahmedabad's chemical industry?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Chemical companies in Ahmedabad benefit from ML solutions including process optimization, predictive maintenance, 
                  quality control automation, safety monitoring, yield optimization, and supply chain management. We've helped 
                  companies like Gujarat Heavy Chemicals achieve 30% efficiency improvements and significant cost reductions.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  How does ML help pharmaceutical companies in Ahmedabad?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pharmaceutical companies like Torrent Pharmaceuticals leverage ML for drug discovery acceleration, clinical trial 
                  optimization, quality assurance automation, regulatory compliance, manufacturing process optimization, and market 
                  analysis. Our ML solutions reduce drug development time by 40% and improve success rates.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  What are the costs of ML services in Ahmedabad?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As the leading <strong>Machine Learning Company In Ahmedabad</strong>, we offer competitive pricing with 60% cost 
                  savings compared to traditional solutions. Our ML services start from ₹50,000 for basic projects, with enterprise 
                  solutions customized based on scope. We provide transparent pricing with guaranteed ROI for all Ahmedabad businesses.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-primary-orange">
                  How quickly can ML solutions be implemented in Ahmedabad?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our proven methodology delivers ML solutions 3x faster than traditional approaches. Basic ML models can be 
                  deployed in 2-4 weeks, while complex enterprise solutions take 8-12 weeks. We provide rapid prototyping, 
                  local support in Ahmedabad, and seamless integration with existing business systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Metic.ai - Ahmedabad Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  About Metic.ai - Leading <span className="text-primary-orange">Machine Learning Company In Ahmedabad</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-600 mb-6">
                  As the premier <strong>Machine Learning Company In Ahmedabad</strong>, Metic.ai has been transforming 
                  Gujarat's business landscape with cutting-edge ML solutions. We understand Ahmedabad's unique 
                  industrial ecosystem - from the textile mills of old city to the pharmaceutical giants like 
                  Torrent and the chemical industry leaders like Gujarat Heavy Chemicals.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our expertise spans across Ahmedabad's key industries: textile automation for quality control, 
                  chemical process optimization for efficiency, pharmaceutical analytics for drug discovery, 
                  and manufacturing intelligence for production enhancement. We've successfully served major 
                  Ahmedabad enterprises including Adani Group, Nirma Limited, and numerous textile exporters.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  With deep connections to IIM Ahmedabad and Gujarat University, we combine academic excellence 
                  with practical industry experience. Our Ahmedabad-based team understands local business 
                  challenges and delivers ML solutions that drive real growth in Gujarat's commercial capital.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <p className="text-gray-600">ML Projects Completed</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary-orange mb-2">150+</div>
                    <p className="text-gray-600">Ahmedabad Clients Served</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-orange">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Database className="w-6 h-6 text-primary-orange mr-3" />
                    Textile Industry Expertise
                  </h3>
                  <p className="text-gray-600">
                    Specialized ML solutions for Ahmedabad's textile industry including quality control automation, 
                    defect detection, production optimization, and supply chain analytics for textile exporters.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-orange">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Settings className="w-6 h-6 text-primary-orange mr-3" />
                    Chemical & Pharmaceutical Focus
                  </h3>
                  <p className="text-gray-600">
                    Advanced ML models for chemical process optimization, pharmaceutical research acceleration, 
                    drug discovery analytics, and quality assurance for Ahmedabad's chemical giants.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary-orange">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Users className="w-6 h-6 text-primary-orange mr-3" />
                    Local Business Understanding
                  </h3>
                  <p className="text-gray-600">
                    Deep understanding of Ahmedabad's business culture, regulatory environment, and market dynamics 
                    ensuring ML solutions that align with local business practices and requirements.
                  </p>
                </div>
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
              Ready to Transform Your Ahmedabad Business with Machine Learning?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Ahmedabad companies leveraging our advanced machine learning solutions. 
              Start your ML transformation today with 3x faster delivery and 60% cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start ML Project in Ahmedabad
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Ahmedabad ML Experts
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">300+</div>
                <p className="text-orange-100">ML Models Deployed</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">95%</div>
                <p className="text-orange-100">Model Accuracy Rate</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">3x</div>
                <p className="text-orange-100">Faster Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
