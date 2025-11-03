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
  title: "Machine Learning Company In Connecticut | #1 ML Company In Constitution State - Metic.ai",
  description: "Leading Machine Learning Company In Connecticut with 2100+ successful ML implementations. Expert ML services, predictive analytics & AI development for finance, insurance & aerospace industries. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Machine Learning Company In Connecticut",
    "ML Company In Connecticut", 
    "Machine Learning Services In Connecticut",
    "Machine Learning Firm In Connecticut",
    "ML Development Company In Connecticut",
    "Best Machine Learning Company In Connecticut",
    "Top ML Company Constitution State",
    "Machine Learning Solutions Connecticut",
    "ML Consulting Connecticut",
    "Predictive Analytics Company Connecticut",
    "AI ML Company Connecticut",
    "Machine Learning Agency Connecticut",
    "Data Science Company Connecticut",
    "ML Implementation Services Connecticut",
    "Machine Learning Experts Connecticut",
    "Enterprise ML Solutions Connecticut",
    "Custom ML Development Connecticut",
    "Machine Learning Specialists Connecticut",
    "Connecticut Finance ML Company"
  ],
  authors: [{ name: "Metic.ai Machine Learning Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Machine Learning Company In Connecticut | #1 ML Company In Constitution State - Metic.ai",
    description: "Leading Machine Learning Company In Connecticut with 2100+ successful ML implementations. Expert ML services for finance, insurance & aerospace industries in Constitution State. 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/machine-learning-services-in-connecticut/",
    siteName: "Metic.ai - Machine Learning Company In Connecticut",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-machine-learning-connecticut.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning Company In Connecticut - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Company In Connecticut | #1 ML Company In Constitution State",
    description: "Leading Machine Learning Company In Connecticut serving finance, insurance & aerospace industries. 2100+ successful implementations in Constitution State.",
    images: ["https://metic.ai/og-machine-learning-connecticut.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/machine-learning-services-in-connecticut/",
  },
};

export default function MachineLearningConnecticutPage() {
  return (
    <>
      {/* Enhanced JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://metic.ai/#organization",
              "name": "Metic.ai - Machine Learning Company In Connecticut",
              "url": "https://metic.ai/machine-learning-services-in-connecticut/",
              "logo": "https://metic.ai/logo.png",
              "description": "Leading Machine Learning Company In Connecticut serving Constitution State's finance, insurance, and aerospace industries with 2100+ successful ML implementations.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Connecticut",
                "addressRegion": "Connecticut",
                "addressCountry": "United States"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-78925-18414",
                "contactType": "customer service",
                "areaServed": "Connecticut"
              },
              "serviceArea": {
                "@type": "Place",
                "name": "Connecticut, United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Machine Learning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Company In Connecticut",
                      "description": "Comprehensive ML solutions for Constitution State's finance and insurance industries"
                    }
                  }
                ]
              },
              "alumni": [
                {
                  "@type": "Organization",
                  "name": "Aetna"
                },
                {
                  "@type": "Organization", 
                  "name": "Travelers"
                },
                {
                  "@type": "Organization",
                  "name": "Pratt & Whitney"
                },
                {
                  "@type": "Organization",
                  "name": "General Electric"
                },
                {
                  "@type": "Organization",
                  "name": "Electric Boat"
                },
                {
                  "@type": "Organization",
                  "name": "Yale University"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://metic.ai/machine-learning-services-in-connecticut/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best Machine Learning Company In Connecticut?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is recognized as the leading Machine Learning Company In Connecticut with 2100+ successful implementations across the Constitution State. We specialize in finance, insurance, aerospace, and manufacturing ML solutions with partnerships with major Connecticut enterprises like Aetna, Travelers, and Pratt & Whitney."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What machine learning services are available in Connecticut?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Connecticut ML services include predictive analytics for finance and insurance, manufacturing optimization, aerospace intelligence, healthcare innovation, natural language processing, computer vision, and custom AI solutions tailored to Constitution State business requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does machine learning development cost in Connecticut?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As the premier ML Company In Connecticut, we offer competitive pricing with 60% cost savings compared to traditional development. Our Constitution State ML projects start from $15,000 with flexible payment options and guaranteed ROI for Connecticut businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose local Connecticut machine learning companies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Local Connecticut ML companies understand the state's unique business landscape including Hartford's insurance hub, Bridgeport's manufacturing center, and aerospace industry requirements. We provide on-site support, regulatory compliance, and industry-specific expertise for Constitution State businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries benefit most from ML in Connecticut?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Connecticut's finance and insurance sector (Hartford), aerospace and defense (Pratt & Whitney, Electric Boat), manufacturing (General Electric), healthcare, and technology companies benefit significantly from our machine learning solutions with measurable ROI and operational efficiency improvements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does ML implementation take in Connecticut?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Connecticut ML implementations are 3x faster than industry standards. Typical projects range from 4-12 weeks depending on complexity, with proof-of-concept delivery in 2-3 weeks. We ensure rapid deployment while maintaining quality and compliance with Constitution State regulations."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "@id": "https://metic.ai/machine-learning-services-in-connecticut/#article",
              "headline": "Machine Learning Company In Connecticut | Constitution State ML Services",
              "description": "Comprehensive guide to Machine Learning services in Connecticut, featuring enterprise solutions for finance, insurance, aerospace, and manufacturing industries in Constitution State.",
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
              "datePublished": "2024-01-01",
              "dateModified": "2024-12-01",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://metic.ai/machine-learning-services-in-connecticut/"
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "Machine Learning Company In Connecticut"
                },
                {
                  "@type": "Place",
                  "name": "Connecticut, United States"
                },
                {
                  "@type": "Thing", 
                  "name": "Constitution State"
                }
              ],
              "mentions": [
                {
                  "@type": "Organization",
                  "name": "Aetna"
                },
                {
                  "@type": "Organization",
                  "name": "Travelers"
                },
                {
                  "@type": "Organization", 
                  "name": "Pratt & Whitney"
                },
                {
                  "@type": "Organization",
                  "name": "General Electric"
                },
                {
                  "@type": "Organization",
                  "name": "Electric Boat"
                },
                {
                  "@type": "Organization",
                  "name": "Yale University"
                }
              ]
            }
          ])
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-green-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <strong>Machine Learning Company In Connecticut</strong> | Leading <span className="text-primary-orange">ML Company</span> In Constitution State
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for the <strong>best Machine Learning Company In Connecticut</strong>? Metic.ai is the premier 
              <strong>Artificial Intelligence Company In Connecticut</strong>, transforming businesses across the Constitution State 
              with advanced machine learning solutions. From predictive analytics for Connecticut's finance and insurance 
              sectors to intelligent automation for aerospace and manufacturing companies, we build ML models that drive 
              growth and efficiency with 3x faster delivery and 60% cost savings.
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
                Machine Learning <span className="text-primary-orange">Expertise in Connecticut</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive machine learning services from data preparation to model deployment and monitoring for Connecticut businesses
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
                  Forecast Connecticut market trends, customer behavior, and business outcomes using advanced predictive 
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
                  Discover hidden patterns in your Connecticut market data using unsupervised learning techniques for market 
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
                Machine Learning Solutions for <span className="text-primary-orange">Connecticut Businesses</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized ML solutions including Financial services ML, manufacturing analytics, healthcare innovation, and insurance technology tailored for Connecticut's business environment
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
                  optimized for Connecticut business requirements.
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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Why Choose Metic.ai as Your <span className="text-primary-orange">Machine Learning Company In Connecticut</span>?
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-600 mb-6">
                  As the leading <strong>Machine Learning Company In Connecticut</strong>, Metic.ai has established strong partnerships 
                  with major Constitution State enterprises including <strong>Aetna</strong>, <strong>Travelers</strong>, 
                  <strong>Pratt & Whitney</strong>, <strong>General Electric</strong>, and <strong>Electric Boat</strong>.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our deep understanding of Connecticut's diverse economy - from Hartford's insurance hub to 
                  Bridgeport's manufacturing center - enables us to deliver tailored ML solutions that drive real business value 
                  across finance, aerospace, healthcare, and manufacturing sectors throughout the Constitution State.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                    <p className="text-gray-600">ML Projects Delivered</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">60%</div>
                    <p className="text-gray-600">Cost Savings Achieved</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">3x</div>
                    <p className="text-gray-600">Faster Implementation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-orange mb-2">24/7</div>
                    <p className="text-gray-600">Connecticut Support</p>
                  </div>
                </div>
              </div>
              <div className="lg:order-first">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Connecticut ML Expertise</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Finance & Insurance ML Solutions</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Aerospace & Defense Analytics</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Manufacturing Intelligence</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Healthcare Innovation</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
                      <span className="text-gray-700">Constitution State Compliance</span>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions - <span className="text-primary-orange">Machine Learning Company In Connecticut</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Common questions about machine learning services for Connecticut businesses
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Which is the best Machine Learning Company In Connecticut?</h3>
                <p className="text-gray-600">
                  Metic.ai is recognized as the leading <strong>Machine Learning Company In Connecticut</strong> with 2100+ successful 
                  implementations across the Constitution State. We specialize in finance, insurance, aerospace, and manufacturing 
                  ML solutions with partnerships with major Connecticut enterprises like Aetna, Travelers, and Pratt & Whitney.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">What machine learning services are available in Connecticut?</h3>
                <p className="text-gray-600">
                  Our Connecticut ML services include predictive analytics for finance and insurance, manufacturing optimization, 
                  aerospace intelligence, healthcare innovation, natural language processing, computer vision, and custom AI solutions 
                  tailored to Constitution State business requirements.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">How much does machine learning development cost in Connecticut?</h3>
                <p className="text-gray-600">
                  As the premier <strong>ML Company In Connecticut</strong>, we offer competitive pricing with 60% cost savings 
                  compared to traditional development. Our Constitution State ML projects start from $15,000 with flexible 
                  payment options and guaranteed ROI for Connecticut businesses.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Why choose local Connecticut machine learning companies?</h3>
                <p className="text-gray-600">
                  Local Connecticut ML companies understand the state's unique business landscape including Hartford's insurance 
                  hub, Bridgeport's manufacturing center, and aerospace industry requirements. We provide on-site support, 
                  regulatory compliance, and industry-specific expertise for Constitution State businesses.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">What industries benefit most from ML in Connecticut?</h3>
                <p className="text-gray-600">
                  Connecticut's finance and insurance sector (Hartford), aerospace and defense (Pratt & Whitney, Electric Boat), 
                  manufacturing (General Electric), healthcare, and technology companies benefit significantly from our machine 
                  learning solutions with measurable ROI and operational efficiency improvements.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">How long does ML implementation take in Connecticut?</h3>
                <p className="text-gray-600">
                  Our Connecticut ML implementations are 3x faster than industry standards. Typical projects range from 
                  4-12 weeks depending on complexity, with proof-of-concept delivery in 2-3 weeks. We ensure rapid deployment 
                  while maintaining quality and compliance with Constitution State regulations.
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
              Ready to Partner with the Leading <strong>Machine Learning Company In Connecticut</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join Connecticut's top enterprises including Aetna, Travelers, and Pratt & Whitney who trust our 
              <strong>ML Company In Connecticut</strong> for advanced machine learning solutions. Transform your Constitution State 
              business today with 3x faster delivery and 60% cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Connecticut ML Project
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call Connecticut Team: +91-78925-18414
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