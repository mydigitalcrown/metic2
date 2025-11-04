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
  title: "Machine Learning Company In Coimbatore | #1 ML Company In Tamil Nadu - Metic.ai",
  description: "Leading Machine Learning Company In Coimbatore with 2100+ successful ML implementations. Expert ML services, predictive analytics & AI development for Manchester of South India. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Machine Learning Company In Coimbatore",
    "ML Company In Coimbatore", 
    "Machine Learning Services In Coimbatore",
    "Machine Learning Firm In Coimbatore",
    "ML Development Company In Coimbatore",
    "Best Machine Learning Company In Coimbatore",
    "Top ML Company Tamil Nadu",
    "Machine Learning Solutions Coimbatore",
    "ML Consulting Coimbatore",
    "Predictive Analytics Company Coimbatore",
    "AI ML Company Coimbatore",
    "Machine Learning Agency Coimbatore",
    "Data Science Company Coimbatore",
    "ML Implementation Services Coimbatore",
    "Machine Learning Experts Coimbatore",
    "Enterprise ML Solutions Coimbatore",
    "Custom ML Development Coimbatore",
    "Machine Learning Specialists Coimbatore",
    "Manchester of South India ML Company"
  ],
  authors: [{ name: "Metic.ai Machine Learning Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Machine Learning Company In Coimbatore | #1 ML Company In Tamil Nadu - Metic.ai",
    description: "Leading Machine Learning Company In Coimbatore with 2100+ successful ML implementations. Expert ML services for Manchester of South India's textile & manufacturing industries. 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/machine-learning-services-in-coimbatore/",
    siteName: "Metic.ai - Machine Learning Company In Coimbatore",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-machine-learning-coimbatore.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning Company In Coimbatore - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Company In Coimbatore | #1 ML Company In Tamil Nadu",
    description: "Leading Machine Learning Company In Coimbatore serving Manchester of South India's textile & manufacturing industries. 2100+ successful implementations.",
    images: ["https://metic.ai/og-machine-learning-coimbatore.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/machine-learning-services-in-coimbatore/",
  },
};

export default function MachineLearningCoimbatorePage() {
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
              "name": "Metic.ai - Machine Learning Company In Coimbatore",
              "url": "https://metic.ai/machine-learning-services-in-coimbatore/",
              "logo": "https://metic.ai/logo.png",
              "description": "Leading Machine Learning Company In Coimbatore serving Manchester of South India's textile and manufacturing industries with 2100+ successful ML implementations.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 7892518414",
                "contactType": "customer service",
                "areaServed": "Coimbatore"
              },
              "serviceArea": {
                "@type": "Place",
                "name": "Coimbatore, Tamil Nadu, India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Machine Learning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Company In Coimbatore",
                      "description": "Comprehensive ML solutions for Manchester of South India"
                    }
                  }
                ]
              },
              "alumni": [
                {
                  "@type": "Organization",
                  "name": "PSG Group"
                },
                {
                  "@type": "Organization", 
                  "name": "Lakshmi Machine Works"
                },
                {
                  "@type": "Organization",
                  "name": "Bosch India"
                },
                {
                  "@type": "Organization",
                  "name": "Tata Motors"
                },
                {
                  "@type": "Organization",
                  "name": "KG Hospitals"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://metic.ai/machine-learning-services-in-coimbatore/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best Machine Learning Company In Coimbatore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is recognized as the leading Machine Learning Company In Coimbatore, serving major enterprises including PSG Group, Lakshmi Machine Works, Bosch, Tata Motors, and KG Hospitals. With over 2100 successful ML implementations across Manchester of South India's diverse industries, we deliver proven results with 60% cost savings and 3x faster deployment timelines."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Coimbatore ideal for Machine Learning services implementation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Coimbatore, known as Manchester of South India, offers a unique ecosystem combining textile industry giants, manufacturing leaders like PSG Group and Lakshmi Machine Works, automotive companies like Tata Motors, technology firms like Bosch, and healthcare institutions like KG Hospitals. This diverse industrial landscape provides rich data sources and implementation opportunities for comprehensive Machine Learning solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Machine Learning benefit textile and manufacturing companies in Coimbatore?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Machine Learning transforms Coimbatore's textile and manufacturing sector through predictive maintenance, quality control automation, supply chain optimization, and smart manufacturing processes. Companies like PSG Group and Lakshmi Machine Works leverage our ML solutions for enhanced production efficiency, defect detection, and intelligent logistics management across their Coimbatore operations."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "@id": "https://metic.ai/machine-learning-services-in-coimbatore/#article",
              "headline": "Machine Learning Company In Coimbatore | Manchester of South India ML Services",
              "description": "Comprehensive guide to Machine Learning services in Coimbatore, featuring enterprise solutions for textile, manufacturing, and healthcare industries in Manchester of South India.",
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
                "@id": "https://metic.ai/machine-learning-services-in-coimbatore/"
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "Machine Learning Company In Coimbatore"
                },
                {
                  "@type": "Place",
                  "name": "Coimbatore, Tamil Nadu"
                },
                {
                  "@type": "Thing", 
                  "name": "Manchester of South India"
                }
              ],
              "mentions": [
                {
                  "@type": "Organization",
                  "name": "PSG Group"
                },
                {
                  "@type": "Organization",
                  "name": "Lakshmi Machine Works"
                },
                {
                  "@type": "Organization", 
                  "name": "Bosch India"
                },
                {
                  "@type": "Organization",
                  "name": "Tata Motors"
                },
                {
                  "@type": "Organization",
                  "name": "KG Hospitals"
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
              <strong>Machine Learning Company In Coimbatore</strong> | Leading ML Company In <span className="text-primary-orange">Manchester of South India</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>Machine Learning Company In Coimbatore</strong>? Metic.ai is the premier ML company serving <strong>Manchester of South India's</strong> textile and manufacturing industries. We've successfully implemented <strong>2100+ ML solutions</strong> for enterprises including <strong>PSG Group, Lakshmi Machine Works, Bosch, Tata Motors, and KG Hospitals</strong>. Transform your business with our proven ML expertise delivering <strong>60% cost savings</strong> and <strong>3x faster deployment</strong>.
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
                Machine Learning <span className="text-primary-orange">Expertise in Coimbatore</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive machine learning services from data preparation to model deployment and monitoring for Coimbatore businesses
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
                  Forecast Coimbatore market trends, customer behavior, and business outcomes using advanced predictive 
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
                  Discover hidden patterns in your Coimbatore market data using unsupervised learning techniques for market 
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

      {/* About Metic.ai - Coimbatore Focus */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Why Choose <span className="text-primary-orange">Machine Learning Company In Coimbatore</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-600 mb-6">
                  As the premier <strong>Machine Learning Company In Coimbatore</strong>, Metic.ai brings deep expertise 
                  in Manchester of South India's diverse industrial landscape. We understand the unique challenges facing 
                  textile giants like <strong>PSG Group</strong> and <strong>Lakshmi Machine Works</strong>, 
                  along with automotive leaders like <strong>Tata Motors</strong> and technology innovators like <strong>Bosch</strong> across Tamil Nadu's manufacturing corridor.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our <strong>Coimbatore-based ML solutions</strong> are designed specifically for the city's key 
                  industries: textile manufacturing intelligence, automotive predictive maintenance, healthcare analytics 
                  for institutions like <strong>KG Hospitals</strong>, and advanced manufacturing optimization for 
                  the companies that make Coimbatore India's Manchester of South India.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-orange mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">2100+ ML Implementations</h4>
                      <p className="text-gray-600 text-sm">Successful projects across Coimbatore industries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-orange mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">60% Cost Savings</h4>
                      <p className="text-gray-600 text-sm">Proven ROI for Manchester of South India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-orange mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">3x Faster Delivery</h4>
                      <p className="text-gray-600 text-sm">Accelerated ML deployment timelines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-orange mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Coimbatore Industry Expertise</h4>
                      <p className="text-gray-600 text-sm">Deep knowledge of local textile & manufacturing ecosystem</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-first">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                    <h3 className="text-xl font-bold mb-4 text-center">Coimbatore Industry Partners</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Target className="w-5 h-5 text-primary-orange" />
                        <span className="font-medium">PSG Group (Manufacturing)</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Zap className="w-5 h-5 text-primary-orange" />
                        <span className="font-medium">Lakshmi Machine Works (Textiles)</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-primary-orange" />
                        <span className="font-medium">Bosch India (Technology)</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-primary-orange" />
                        <span className="font-medium">Tata Motors (Automotive)</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Activity className="w-5 h-5 text-primary-orange" />
                        <span className="font-medium">KG Hospitals (Healthcare)</span>
                      </div>
                    </div>
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
                Machine Learning Solutions for <span className="text-primary-orange">Coimbatore Businesses</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized ML solutions including Textile ML, manufacturing analytics, agriculture technology, and industrial optimization tailored for Coimbatore's business environment
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
                  optimized for Coimbatore business requirements.
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
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions About <span className="text-primary-orange">Machine Learning Company In Coimbatore</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Get answers to common questions about Machine Learning services in Coimbatore, Manchester of South India
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Which is the best Machine Learning Company In Coimbatore?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is recognized as the leading Machine Learning Company In Coimbatore, serving major enterprises including PSG Group, Lakshmi Machine Works, Bosch, Tata Motors, and KG Hospitals. With over 2100 successful ML implementations across Manchester of South India's diverse industries, we deliver proven results with 60% cost savings and 3x faster deployment timelines.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What makes Coimbatore ideal for Machine Learning services implementation?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Coimbatore, known as Manchester of South India, offers a unique ecosystem combining textile industry giants, manufacturing leaders like PSG Group and Lakshmi Machine Works, automotive companies like Tata Motors, technology firms like Bosch, and healthcare institutions like KG Hospitals. This diverse industrial landscape provides rich data sources and implementation opportunities for comprehensive Machine Learning solutions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How does Machine Learning benefit textile and manufacturing companies in Coimbatore?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Machine Learning transforms Coimbatore's textile and manufacturing sector through predictive maintenance, quality control automation, supply chain optimization, and smart manufacturing processes. Companies like PSG Group and Lakshmi Machine Works leverage our ML solutions for enhanced production efficiency, defect detection, and intelligent logistics management across their Coimbatore operations.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What Machine Learning solutions work best for Coimbatore's automotive industry?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Coimbatore's automotive sector, including companies like Tata Motors and Bosch, benefits from ML-powered solutions including predictive maintenance algorithms, quality assurance automation, supply chain optimization, intelligent manufacturing processes, and vehicle performance analytics that enhance operational efficiency and reduce downtime.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How can healthcare institutions in Coimbatore implement Machine Learning?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Healthcare leaders like KG Hospitals in Coimbatore utilize Machine Learning for diagnostic imaging analysis, patient outcome prediction, treatment recommendation systems, operational optimization, and medical research acceleration. Our Coimbatore-focused ML solutions comply with healthcare regulations while delivering measurable patient care improvements.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What is the cost and timeline for Machine Learning implementation in Coimbatore?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Machine Learning implementation in Coimbatore typically delivers 60% cost savings compared to traditional solutions, with deployment timelines 3x faster than industry standards. Project costs vary based on complexity, but our Coimbatore clients typically see ROI within 6-12 months through operational efficiency gains and automated process improvements.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Still have questions about Machine Learning services in Coimbatore?
              </p>
              <Link href="/contact">
                <Button className="bg-primary-orange text-white hover:bg-secondary-orange">
                  Contact Our Coimbatore Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Partner with the Leading <span className="text-white underline">Machine Learning Company In Coimbatore</span>
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join <strong>PSG Group, Lakshmi Machine Works, Bosch, Tata Motors, and KG Hospitals</strong> in Coimbatore's ML revolution. 
              Transform your Manchester of South India business with our proven ML solutions delivering 
              <strong>60% cost savings</strong> and <strong>3x faster deployment</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100 font-semibold px-8 py-4">
                  Get Free Coimbatore ML Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange font-semibold px-8 py-4">
                  Call Coimbatore Experts: +91 7892518414
                </Button>
              </Link>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 mt-8 mb-8">
              <p className="text-lg font-semibold mb-2">
                🏆 Why Choose the #1 Machine Learning Company In Coimbatore?
              </p>
              <p className="text-orange-100">
                Trusted by Manchester of South India's leading enterprises across textile, manufacturing, automotive, and healthcare sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">2100+</div>
                <p className="text-orange-100 text-sm">Coimbatore ML Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <p className="text-orange-100 text-sm">Manchester of South India Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">60%</div>
                <p className="text-orange-100 text-sm">Average Cost Reduction</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3x</div>
                <p className="text-orange-100 text-sm">Faster Coimbatore Deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
