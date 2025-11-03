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
  title: "Machine Learning Company In Noida | #1 ML Company In Millennium City - Metic.ai",
  description: "Leading Machine Learning Company In Noida with 2100+ successful ML implementations. Expert machine learning services, AI development & data science solutions. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Machine Learning Company In Noida",
    "ML Company In Noida",
    "Machine Learning Services In Noida",
    "Machine Learning Firm In Noida",
    "AI Company In Noida",
    "Data Science Company In Noida",
    "ML Development Company In Noida",
    "Best Machine Learning Company In Noida", 
    "Top ML Company Millennium City",
    "Machine Learning Solutions Noida",
    "Predictive Analytics Company Noida",
    "Deep Learning Company Noida",
    "Neural Network Development Noida",
    "ML Consulting Services Noida",
    "Enterprise Machine Learning Noida",
    "Custom ML Solutions Noida",
    "Machine Learning Implementation Noida",
    "AI Development Services Noida",
    "Data Analytics Company Noida"
  ],
  authors: [{ name: "Metic.ai - Machine Learning Company In Noida" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Machine Learning Company In Noida | #1 ML Company In Millennium City - Metic.ai",
    description: "Leading Machine Learning Company In Noida with 2100+ successful ML implementations. Expert machine learning services, AI development & data science solutions. Transform your business with 60% cost savings & 3x faster delivery.",
    url: "https://metic.ai/machine-learning-services-in-noida/",
    siteName: "Metic.ai - Machine Learning Company In Noida",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-machine-learning-noida.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning Company In Noida - Metic.ai Millennium City ML Services",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Company In Noida | #1 ML Company In Millennium City",
    description: "Leading Machine Learning Company In Noida with 2100+ ML implementations. 60% cost savings & 3x faster delivery.",
    images: ["https://metic.ai/og-machine-learning-noida.jpg"],
    creator: "@MeticAI",
    site: "@MeticAI",
  },
  alternates: {
    canonical: "https://metic.ai/machine-learning-services-in-noida/",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Noida",
    "geo.position": "28.5355;77.3910",
    "ICBM": "28.5355, 77.3910",
  },
};

export default function MachineLearningNoidaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-green-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <strong className="text-primary-orange">Machine Learning Company In Noida</strong> | Leading ML Company In Millennium City
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>Machine Learning Company In Noida</strong>? Metic.ai is the premier Machine Learning Company In Noida, serving the Millennium City with 2100+ successful ML implementations. Expert AI services, IT solutions & data science technologies with 60% cost savings & 3x faster delivery.
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
                Machine Learning <span className="text-primary-orange">Expertise in Noida</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive machine learning services from data preparation to model deployment and monitoring for Noida businesses
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
                  Forecast Noida market trends, customer behavior, and business outcomes using advanced predictive 
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
                  Discover hidden patterns in your Noida market data using unsupervised learning techniques for market 
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
                Machine Learning Solutions for <span className="text-primary-orange">Noida Businesses</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized ML solutions including IT services analytics, manufacturing ML, media technology, and software development optimization tailored for Noida's business environment
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
                  optimized for Noida business requirements.
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Why Choose Metic.ai as Your <span className="text-primary-orange">Machine Learning Company In Noida</span>?
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <p className="text-lg text-gray-600 mb-6">
                  As the leading <strong>Machine Learning Company In Noida</strong>, we specialize in transforming Millennium City businesses through innovative AI solutions. Our expertise spans IT services, software development, manufacturing automation, and digital transformation technologies.
                </p>
                <p className="text-gray-600 mb-6">
                  Working alongside Noida's technology ecosystem including HCL Technologies, TCS Noida, Wipro, Infosys, Samsung R&D, and Adobe, we deliver cutting-edge machine learning solutions that drive measurable business results in the NCR region.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Millennium City Expertise</h4>
                      <p className="text-sm text-gray-600">Deep understanding of Noida's IT, software, and manufacturing sectors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">NCR Hub Partnerships</h4>
                      <p className="text-sm text-gray-600">Collaborative relationships with leading Noida tech companies and startups</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Proven Results</h4>
                      <p className="text-sm text-gray-600">2100+ successful ML implementations across diverse Noida industries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Local Support</h4>
                      <p className="text-sm text-gray-600">Dedicated Noida team providing personalized service and support</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary-orange to-secondary-orange p-8 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Machine Learning Excellence</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">2100+</div>
                      <p className="text-orange-100 text-sm">ML Models Deployed</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">98%</div>
                      <p className="text-orange-100 text-sm">Client Satisfaction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">60%</div>
                      <p className="text-orange-100 text-sm">Cost Reduction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">3x</div>
                      <p className="text-orange-100 text-sm">Faster Delivery</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-primary-orange mr-2" />
                    Industry Certifications
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>✓ ISO 27001 Security Standards</p>
                    <p>✓ CMMI Level 5 for Software ML</p>
                    <p>✓ SOC 2 Type II Certified</p>
                    <p>✓ GDPR Compliant for Data ML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions About <span className="text-primary-orange">Machine Learning Company In Noida</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Common questions about our machine learning services and expertise in the Millennium City
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm border">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Which is the best Machine Learning Company In Noida?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Metic.ai is recognized as the leading Machine Learning Company In Noida, with 2100+ successful ML implementations across IT services, software development, and manufacturing sectors. We specialize in serving Millennium City businesses with cutting-edge AI solutions and have partnerships with major Noida technology companies.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  What machine learning services does the top ML company in Noida offer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our Machine Learning Company In Noida offers comprehensive services including predictive analytics, deep learning, neural networks, computer vision, natural language processing, software automation, IT process optimization, and custom ML model development tailored for Noida's technology, manufacturing, and service industries.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How does machine learning benefit Noida businesses?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Machine learning transforms Noida businesses by enabling intelligent software automation, predictive maintenance in manufacturing, customer behavior analysis in services, quality assurance in IT projects, and operational efficiency optimization. Our solutions deliver 60% cost savings and 3x faster processing for Millennium City companies.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  What makes your Machine Learning Company In Noida unique?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our uniqueness lies in deep Millennium City industry expertise, partnerships with HCL Technologies, TCS Noida, Wipro, Samsung R&D, and Adobe, plus specialized knowledge in software ML, IT automation, and manufacturing optimization. We combine global AI expertise with local Noida market understanding and NCR region focus.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How long does machine learning implementation take in Noida?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our Machine Learning Company In Noida delivers 3x faster implementation than traditional approaches. Simple ML models deploy in 2-4 weeks, while complex enterprise solutions typically complete in 8-12 weeks. We use agile methodologies optimized for Noida's fast-paced technology and manufacturing environment.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  What industries do you serve as a Machine Learning Company In Noida?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We serve Noida's key industries including information technology (software development, IT services), manufacturing (automotive, electronics, textiles), healthcare (medical devices, pharmaceuticals), education (edtech, online learning), retail (e-commerce, supply chain), and media technology across the Millennium City and broader NCR region.
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

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Partner with the Leading <span className="text-orange-100">Machine Learning Company In Noida</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join leading Millennium City companies including HCL Technologies, TCS Noida, Wipro, Samsung R&D, Adobe, and innovative Noida startups leveraging our advanced machine learning solutions. Start your ML transformation today with 60% cost savings and 3x faster delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your ML Project Today
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +91-78925-18414
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center mb-8">
              <div>
                <div className="text-2xl font-bold mb-2">2100+</div>
                <p className="text-orange-100">ML Models Deployed</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">98%</div>
                <p className="text-orange-100">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">60%</div>
                <p className="text-orange-100">Cost Savings</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">3x</div>
                <p className="text-orange-100">Faster Delivery</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">🏆 Trusted Machine Learning Company In Noida</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>CMMI Level 5</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Millennium City Expertise</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>24/7 Noida Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Metic.ai - Machine Learning Company In Noida",
              "description": "Leading Machine Learning Company In Noida specializing in AI solutions, predictive analytics, and data science for Millennium City businesses.",
              "url": "https://metic.ai/machine-learning-services-in-noida/",
              "logo": "https://metic.ai/logo.png",
              "image": "https://metic.ai/og-machine-learning-noida.jpg",
              "founder": {
                "@type": "Person",
                "name": "Metic.ai Founder"
              },
              "foundingDate": "2020",
              "foundingLocation": {
                "@type": "Place",
                "name": "Noida, Uttar Pradesh, India"
              },
              "areaServed": {
                "@type": "City",
                "name": "Noida"
              },
              "knowsAbout": [
                "Machine Learning",
                "Artificial Intelligence", 
                "Data Science",
                "Software Automation",
                "IT Process Optimization",
                "Manufacturing ML",
                "Predictive Analytics",
                "Deep Learning",
                "Computer Vision",
                "Natural Language Processing"
              ],
              "serviceArea": {
                "@type": "City",
                "name": "Noida"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-78925-18414",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://linkedin.com/company/metic-ai",
                "https://twitter.com/MeticAI"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Machine Learning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Machine Learning Company In Noida",
                      "description": "Comprehensive machine learning solutions for Noida businesses"
                    }
                  }
                ]
              },
              "memberOf": {
                "@type": "Organization",
                "name": "Noida Technology Ecosystem"
              },
              "parentOrganization": {
                "@type": "Organization", 
                "name": "Millennium City Innovation Network"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best Machine Learning Company In Noida?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Metic.ai is recognized as the leading Machine Learning Company In Noida, with 2100+ successful ML implementations across IT services, software development, and manufacturing sectors. We specialize in serving Millennium City businesses with cutting-edge AI solutions and have partnerships with major Noida technology companies."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "What machine learning services does the top ML company in Noida offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Machine Learning Company In Noida offers comprehensive services including predictive analytics, deep learning, neural networks, computer vision, natural language processing, software automation, IT process optimization, and custom ML model development tailored for Noida's technology, manufacturing, and service industries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does machine learning benefit Noida businesses?", 
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Machine learning transforms Noida businesses by enabling intelligent software automation, predictive maintenance in manufacturing, customer behavior analysis in services, quality assurance in IT projects, and operational efficiency optimization. Our solutions deliver 60% cost savings and 3x faster processing for Millennium City companies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes your Machine Learning Company In Noida unique?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Our uniqueness lies in deep Millennium City industry expertise, partnerships with HCL Technologies, TCS Noida, Wipro, Samsung R&D, and Adobe, plus specialized knowledge in software ML, IT automation, and manufacturing optimization. We combine global AI expertise with local Noida market understanding and NCR region focus."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does machine learning implementation take in Noida?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Machine Learning Company In Noida delivers 3x faster implementation than traditional approaches. Simple ML models deploy in 2-4 weeks, while complex enterprise solutions typically complete in 8-12 weeks. We use agile methodologies optimized for Noida's fast-paced technology and manufacturing environment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries do you serve as a Machine Learning Company In Noida?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve Noida's key industries including information technology (software development, IT services), manufacturing (automotive, electronics, textiles), healthcare (medical devices, pharmaceuticals), education (edtech, online learning), retail (e-commerce, supply chain), and media technology across the Millennium City and broader NCR region."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Machine Learning Company In Noida | Leading ML Company In Millennium City",
              "description": "Leading Machine Learning Company In Noida with 2100+ successful ML implementations. Expert machine learning services, AI development & data science solutions.",
              "image": "https://metic.ai/og-machine-learning-noida.jpg",
              "author": {
                "@type": "Organization",
                "name": "Metic.ai - Machine Learning Company In Noida"
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
              "dateModified": "2024-11-03",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://metic.ai/machine-learning-services-in-noida/"
              },
              "articleSection": "Machine Learning Services",
              "keywords": "Machine Learning Company In Noida, ML Company In Noida, Machine Learning Services In Noida, AI Company In Noida",
              "about": {
                "@type": "Thing",
                "name": "Machine Learning Company In Noida"
              },
              "mentions": [
                {
                  "@type": "Organization",
                  "name": "HCL Technologies"
                },
                {
                  "@type": "Organization", 
                  "name": "TCS Noida"
                },
                {
                  "@type": "Organization",
                  "name": "Wipro"
                },
                {
                  "@type": "Organization",
                  "name": "Infosys"
                },
                {
                  "@type": "Organization",
                  "name": "Samsung R&D"
                },
                {
                  "@type": "Organization",
                  "name": "Adobe"
                }
              ],
              "locationCreated": {
                "@type": "City",
                "name": "Noida"
              }
            }
          ])
        }}
      />
    </>
  );
}