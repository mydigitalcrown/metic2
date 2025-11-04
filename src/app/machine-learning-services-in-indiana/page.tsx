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
  title: "Machine Learning Company In Indiana | #1 ML Company In Hoosier State - Metic.ai",
  description: "Leading Machine Learning Company In Indiana with 2100+ successful ML implementations. Expert ML services, predictive analytics & AI development in Hoosier State. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Machine Learning Company In Indiana",
    "ML Company In Indiana", 
    "Machine Learning Services In Indiana",
    "Machine Learning Firm In Indiana",
    "ML Development Company In Indiana",
    "Best Machine Learning Company In Indiana",
    "Top ML Company Hoosier State",
    "Machine Learning Solutions Indiana",
    "AI Company In Indiana",
    "Data Science Company Indiana",
    "Predictive Analytics Indiana",
    "ML Consulting Services Indiana",
    "Machine Learning Agency Indiana",
    "Custom ML Development Indiana",
    "Enterprise ML Solutions Indiana",
    "Machine Learning Experts Indiana",
    "AI ML Services Indianapolis",
    "Machine Learning Outsourcing Indiana",
    "Professional ML Company Indiana"
  ],
  authors: [{ name: "Metic.ai Machine Learning Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Machine Learning Company In Indiana | #1 ML Company In Hoosier State - Metic.ai",
    description: "Leading Machine Learning Company In Indiana with 2100+ successful ML implementations. Expert ML services, predictive analytics & AI development in Hoosier State. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/machine-learning-services-in-indiana/",
    siteName: "Metic.ai - Machine Learning Company In Indiana",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-machine-learning-indiana.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning Company In Indiana - Metic.ai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Company In Indiana | #1 ML Company In Hoosier State",
    description: "Leading Machine Learning Company In Indiana with 2100+ ML implementations. 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-machine-learning-indiana.jpg"],
    creator: "@MeticAI",
  },
  alternates: {
    canonical: "https://metic.ai/machine-learning-services-in-indiana/",
  },
  category: "Machine Learning Services",
};

export default function MachineLearningIndianaPage() {
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
                "name": "Metic.ai - Machine Learning Company In Indiana",
                "url": "https://metic.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://metic.ai/logo.png",
                  "width": 200,
                  "height": 60
                },
                "description": "Leading Machine Learning Company In Indiana specializing in AI solutions, predictive analytics, and ML development for Hoosier State enterprises.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Indianapolis",
                  "addressRegion": "Indiana",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91 7892518414",
                  "contactType": "Business",
                  "availableLanguage": ["English"]
                },
                "sameAs": [
                  "https://linkedin.com/company/metic-ai",
                  "https://twitter.com/MeticAI"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Machine Learning Services In Indiana",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Machine Learning Company In Indiana",
                        "description": "Comprehensive ML solutions for Hoosier State businesses"
                      }
                    }
                  ]
                },
                "areaServed": [
                  {
                    "@type": "State",
                    "name": "Indiana",
                    "alternateName": "Hoosier State"
                  },
                  {
                    "@type": "City",
                    "name": "Indianapolis",
                    "containedInPlace": {
                      "@type": "State",
                      "name": "Indiana"
                    }
                  },
                  {
                    "@type": "City", 
                    "name": "Fort Wayne"
                  },
                  {
                    "@type": "City",
                    "name": "Evansville"
                  }
                ],
                "knowsAbout": [
                  "Eli Lilly and Company",
                  "Cummins Inc", 
                  "Salesforce",
                  "Roche Diagnostics",
                  "Cook Medical",
                  "Indiana University",
                  "Purdue University",
                  "Butler University"
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Which is the best Machine Learning Company In Indiana?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Metic.ai is the leading Machine Learning Company In Indiana with 2100+ successful ML implementations. We serve major Hoosier State enterprises including Eli Lilly, Cummins, Salesforce, and Cook Medical with 60% cost savings and 3x faster delivery."
                    }
                  },
                  {
                    "@type": "Question", 
                    "name": "What Machine Learning Services In Indiana does Metic.ai provide?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "As the top ML Company In Indiana, we provide predictive analytics, computer vision, NLP, recommendation systems, demand forecasting, drug discovery acceleration, and custom ML model development for Indiana's pharmaceuticals, manufacturing, agriculture, and technology sectors."
                    }
                  }
                ]
              },
              {
                "@type": "Article",
                "@id": "https://metic.ai/machine-learning-services-in-indiana/#article",
                "headline": "Machine Learning Company In Indiana | #1 ML Company In Hoosier State",
                "description": "Comprehensive guide to Machine Learning Services In Indiana, featuring expert ML solutions for Hoosier State's leading pharmaceutical, manufacturing, and agriculture enterprises.",
                "image": "https://metic.ai/og-machine-learning-indiana.jpg",
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
                "mainEntityOfPage": "https://metic.ai/machine-learning-services-in-indiana/",
                "about": [
                  {
                    "@type": "Thing",
                    "name": "Machine Learning Company In Indiana"
                  },
                  {
                    "@type": "Place",
                    "name": "Hoosier State"
                  },
                  {
                    "@type": "Organization",
                    "name": "Eli Lilly and Company"
                  },
                  {
                    "@type": "Organization", 
                    "name": "Cummins Inc"
                  }
                ],
                "mentions": [
                  {
                    "@type": "Organization",
                    "name": "Salesforce"
                  },
                  {
                    "@type": "Organization",
                    "name": "Cook Medical"
                  },
                  {
                    "@type": "Organization",
                    "name": "Purdue University"
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
              <strong>Machine Learning Company In Indiana</strong> | Leading <span className="text-primary-orange">ML Company In Hoosier State</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>Machine Learning Company In Indiana</strong>? Metic.ai is the premier 
              <strong>ML Company In Indiana</strong> serving the Hoosier State's leading enterprises. Transform your business with 
              advanced machine learning solutions, predictive analytics, and intelligent automation. We deliver 
              2100+ successful implementations with 60% cost savings and 3x faster delivery across Indianapolis and throughout Indiana.
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
                Machine Learning <span className="text-primary-orange">Expertise in Indiana</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive machine learning services from data preparation to model deployment and monitoring for Indiana businesses
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
                  Forecast Indiana market trends, customer behavior, and business outcomes using advanced predictive 
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
                  Discover hidden patterns in your Indiana market data using unsupervised learning techniques for market 
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
                Machine Learning Solutions for <span className="text-primary-orange">Indiana Businesses</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized ML solutions including Manufacturing analytics, agriculture technology, logistics optimization, and healthcare ML tailored for Indiana's business environment
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
                  optimized for Indiana business requirements.
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
                About Metic.ai - <strong>Machine Learning Company In Indiana</strong>
              </h2>
              <p className="text-xl text-gray-600">
                The Hoosier State's most trusted <strong>ML Company In Indiana</strong> serving pharmaceutical and manufacturing leaders statewide
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Leading <strong>Machine Learning Firm In Indiana</strong></h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  As the premier <strong>Machine Learning Company In Indiana</strong>, Metic.ai has successfully delivered 2100+ ML implementations 
                  across the Hoosier State's diverse industrial ecosystem. We serve major pharmaceutical giants like Eli Lilly and Company, 
                  manufacturing leaders like Cummins Inc, technology innovators like Salesforce, and healthcare pioneers like Cook Medical.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our <strong>ML Services In Indiana</strong> span drug discovery acceleration, manufacturing optimization, agricultural analytics, 
                  and supply chain intelligence. We collaborate with Indiana University, Purdue University, and Butler University to advance 
                  AI innovation in the Hoosier State's research and business ecosystem.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="font-bold text-2xl text-primary-orange mb-1">300+</div>
                    <div className="text-sm text-gray-600">Indiana ML Projects</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="font-bold text-2xl text-primary-orange mb-1">60%</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Indiana Industry Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Pharmaceuticals & Life Sciences</h4>
                      <p className="text-sm text-gray-600">Serving Eli Lilly with drug discovery acceleration, clinical trial optimization, and research analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Manufacturing & Heavy Industry</h4>
                      <p className="text-sm text-gray-600">Equipment optimization and predictive maintenance for Cummins and industrial manufacturers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Healthcare & Medical Devices</h4>
                      <p className="text-sm text-gray-600">Medical analytics and device optimization for Cook Medical and healthcare providers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Agriculture & Food Processing</h4>
                      <p className="text-sm text-gray-600">Crop yield optimization and supply chain analytics for Indiana's agricultural enterprises</p>
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
                Frequently Asked Questions - <strong>Machine Learning Company In Indiana</strong>
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about <strong>ML Services In Indiana</strong> and our Hoosier State expertise
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-4">Which is the best Machine Learning Company In Indiana?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is the leading <strong>Machine Learning Company In Indiana</strong> with 2100+ successful ML implementations. 
                  We serve major Hoosier State enterprises including Eli Lilly and Company, Cummins Inc, Salesforce, and Cook Medical 
                  with 60% cost savings and 3x faster delivery. Our proven track record across Indiana makes us the top choice.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-4">What Machine Learning Services In Indiana does Metic.ai provide?</h3>
                <p className="text-gray-600 leading-relaxed">
                  As the top <strong>ML Company In Indiana</strong>, we provide predictive analytics, computer vision, NLP, recommendation systems, 
                  drug discovery acceleration, manufacturing optimization, supply chain analytics, and custom ML model development for Indiana's 
                  pharmaceuticals, manufacturing, healthcare, and agriculture sectors. Our services are tailored to the Hoosier State's economy.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-4">How much do Machine Learning services cost in Indiana?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>Machine Learning Company In Indiana</strong> offers competitive pricing with 60% cost savings compared to traditional development. 
                  Project costs vary based on complexity, typically ranging from $25,000 to $750,000 for pharmaceutical and manufacturing solutions. 
                  We provide transparent pricing with no hidden fees for Hoosier State businesses.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-4">Which Indiana industries benefit most from Machine Learning?</h3>
                <p className="text-gray-600 leading-relaxed">
                  As the premier <strong>ML Firm In Indiana</strong>, we serve pharmaceuticals (Eli Lilly), manufacturing (Cummins), 
                  healthcare (Cook Medical), agriculture, and technology sectors across Indianapolis and the Hoosier State. 
                  Indiana's strong pharmaceutical and manufacturing base provides excellent ML opportunities for innovation and optimization.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-4">How long does ML implementation take in Indiana?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>Machine Learning Company In Indiana</strong> delivers 3x faster implementation than competitors. Simple automation models: 2-4 weeks, 
                  complex pharmaceutical systems: 3-8 months, with ongoing support and optimization for Hoosier State businesses. 
                  We understand the regulatory requirements and business pace of Indiana's key industries.
                </p>
              </div>
              
              <div className="pb-8">
                <h3 className="text-xl font-bold mb-4">Does Metic.ai work with Indiana universities and research institutions?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, as the leading <strong>Machine Learning Firm In Indiana</strong>, we collaborate with Indiana University, 
                  Purdue University, Butler University, and research institutions for advancing ML innovation in the Hoosier State. 
                  These partnerships ensure we stay at the forefront of AI research and pharmaceutical innovation in Indiana's academic ecosystem.
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
              Ready to Transform Your Indiana Business with <strong>Machine Learning Company In Indiana</strong>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join 300+ Hoosier State businesses that trust Metic.ai as their premier <strong>ML Company In Indiana</strong>. 
              From pharmaceutical innovation to manufacturing optimization, we deliver 60% cost savings and 3x faster implementation across Indianapolis and Indiana.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Start Your Indiana ML Project
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange px-8 py-4 text-lg font-semibold">
                  Free Hoosier State Consultation
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">Pharmaceutical Innovation</h3>
                <p className="text-orange-100 text-sm">Drug discovery acceleration and clinical analytics for Eli Lilly and life sciences leaders</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">Manufacturing Excellence</h3>
                <p className="text-orange-100 text-sm">Equipment optimization and predictive maintenance for Cummins and industrial manufacturers</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">Healthcare Analytics</h3>
                <p className="text-orange-100 text-sm">Medical device optimization and patient analytics for Cook Medical and healthcare providers</p>
              </div>
            </div>
            
            <div className="mt-8 text-orange-100">
              <p className="text-sm">
                Trusted <strong>Machine Learning Company In Indiana</strong> serving clients across Indianapolis, Fort Wayne, Evansville, and the Hoosier State
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
