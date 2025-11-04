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
  Calendar,
  Phone,
  ChevronDown,
  Settings,
  Cloud,
  Activity,
  PieChart,
  LineChart,
  Layers,
  Code
} from "lucide-react";

export const metadata = {
  title: "Machine Learning Company In Pennsylvania | #1 ML Company In PA - Metic.ai",
  description: "Leading Machine Learning Company In Pennsylvania with 2100+ successful ML implementations. Expert machine learning services, AI solutions & ML development. Transform your business with 60% cost savings & 3x faster delivery.",
  keywords: [
    "Machine Learning Company In Pennsylvania",
    "ML Company In Pennsylvania", 
    "Machine Learning Services In Pennsylvania",
    "Machine Learning Firm In Pennsylvania",
    "Machine Learning Development Company In Pennsylvania",
    "Best Machine Learning Company In Pennsylvania",
    "Top ML Company Pennsylvania",
    "Machine Learning Solutions Pennsylvania",
    "ML Consulting Pennsylvania",
    "Artificial Intelligence Company Pennsylvania",
    "Data Science Company Pennsylvania",
    "Predictive Analytics Pennsylvania",
    "Deep Learning Pennsylvania",
    "Neural Networks Pennsylvania",
    "AI Development Pennsylvania"
  ],
  authors: [{ name: "Metic.ai Machine Learning Team" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Machine Learning Company In Pennsylvania | #1 ML Company In PA - Metic.ai",
    description: "Leading Machine Learning Company In Pennsylvania with 2100+ successful ML implementations. Expert machine learning services, AI solutions & ML development.",
    url: "https://metic.ai/machine-learning-services-in-pennsylvania/",
    siteName: "Metic.ai - Machine Learning Company In Pennsylvania",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-machine-learning-pennsylvania.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning Company In Pennsylvania - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Company In Pennsylvania | #1 ML Company In PA - Metic.ai",
    description: "Leading Machine Learning Company In Pennsylvania with 2100+ successful ML implementations. Expert machine learning services & AI solutions.",
    images: ["https://metic.ai/og-machine-learning-pennsylvania.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/machine-learning-services-in-pennsylvania/",
  },
  other: {
    "geo.region": "US-PA",
    "geo.placename": "Pennsylvania",
    "geo.position": "40.2732;-76.8751",
    "ICBM": "40.2732, -76.8751"
  }
};

export default function MachineLearningPennsylvaniaPage() {
  // FAQ Data for ASO Optimization
  const faqData = [
    {
      question: "Which is the best Machine Learning Company In Pennsylvania?",
      answer: "Metic.ai is recognized as the leading Machine Learning Company In Pennsylvania with 2100+ successful ML implementations. Our ML Company In Pennsylvania specializes in enterprise-grade AI solutions, delivering 60% cost savings and 3x faster project delivery compared to traditional development approaches."
    },
    {
      question: "What services does your Machine Learning Company In Pennsylvania offer?",
      answer: "Our Machine Learning Company In Pennsylvania offers comprehensive ML services including predictive analytics, computer vision, natural language processing, recommendation systems, fraud detection, automated decision-making, and custom AI model development tailored for Pennsylvania businesses."
    },
    {
      question: "How much does it cost to hire a Machine Learning Company In Pennsylvania?",
      answer: "As a leading Machine Learning Company In Pennsylvania, we offer flexible pricing starting from $15,000 for basic ML projects. Our ML Company In Pennsylvania provides custom quotes based on project complexity, with most clients achieving 60% cost savings compared to building in-house ML teams."
    },
    {
      question: "How long does a typical machine learning project take in Pennsylvania?",
      answer: "Our Machine Learning Company In Pennsylvania delivers projects 3x faster than industry average. Simple ML models take 4-6 weeks, while complex AI systems require 3-6 months. We use agile methodologies to ensure rapid deployment and continuous improvement of your ML solutions."
    },
    {
      question: "Do you provide ongoing support after ML model deployment in Pennsylvania?",
      answer: "Yes, our Machine Learning Company In Pennsylvania provides comprehensive post-deployment support including model monitoring, performance optimization, retraining, and scaling. We ensure your ML models maintain peak performance with 24/7 technical support and regular updates."
    },
    {
      question: "What industries does your Machine Learning Company In Pennsylvania serve?",
      answer: "Our Machine Learning Company In Pennsylvania serves diverse industries including healthcare, finance, manufacturing, retail, logistics, real estate, and technology. We have successfully implemented ML solutions for 2100+ projects across various Pennsylvania business sectors."
    }
  ];

  // Structured Data for FAQ Schema
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Organization Schema with Location Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Metic.ai - Machine Learning Company In Pennsylvania",
    "description": "Leading Machine Learning Company In Pennsylvania with 2100+ successful ML implementations. Expert AI services and solutions.",
    "url": "https://metic.ai/machine-learning-services-in-pennsylvania/",
    "logo": "https://metic.ai/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Pennsylvania",
      "addressCountry": "US"
    },
    "serviceArea": {
      "@type": "State",
      "name": "Pennsylvania"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Machine Learning Services Pennsylvania",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machine Learning Development",
            "description": "Custom ML model development and deployment"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "AI Consulting",
            "description": "Strategic AI consulting for Pennsylvania businesses"
          }
        }
      ]
    }
  };

  // Article Schema for Content Authority
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Machine Learning Company In Pennsylvania | Leading AI Services",
    "description": "Comprehensive guide to machine learning services in Pennsylvania by the leading ML company with 2100+ successful implementations.",
    "author": {
      "@type": "Organization",
      "name": "Metic.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Metic.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://metic.ai/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://metic.ai/machine-learning-services-in-pennsylvania/"
    }
  };

  return (
    <>
      {/* Structured Data - Triple Schema Implementation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      {/* Hero Section - Primary Target Keyword Focus */}
      <section className="bg-gradient-to-b from-white to-green-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <strong>Machine Learning Company In Pennsylvania</strong> | Leading ML Company In PA
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Looking for the best <strong>Machine Learning Company In Pennsylvania</strong>? Metic.ai is the premier 
              <strong> Machine Learning Company In Pennsylvania</strong> with 2100+ successful ML implementations. 
              We deliver expert machine learning services, AI solutions, and predictive analytics to transform Pennsylvania businesses.
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium">Machine Learning Services PA</span>
              <span className="px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium">ML Firm Pennsylvania</span>
              <span className="px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium">AI Company PA</span>
              <span className="px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium">Data Science Pennsylvania</span>
            </div>
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

      {/* About Section - Company Authority */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                About Our <span className="text-primary-orange">Machine Learning Company In Pennsylvania</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                As the leading <strong>Machine Learning Company In Pennsylvania</strong>, Metic.ai has established itself as the 
                premier destination for businesses seeking cutting-edge ML solutions. Our <strong>Machine Learning Firm In Pennsylvania</strong> 
                specializes in delivering enterprise-grade AI solutions that drive measurable business outcomes.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Founded with the vision to democratize AI technology, our <strong>Machine Learning Company In Pennsylvania</strong> 
                has successfully implemented over 2,100 ML projects across diverse industries including healthcare, finance, 
                manufacturing, and retail. We combine deep technical expertise with Pennsylvania's business landscape understanding 
                to deliver solutions that truly transform operations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-orange mb-2">2100+</div>
                  <p className="font-semibold">ML Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-orange mb-2">98%</div>
                  <p className="font-semibold">Client Success Rate</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary-orange mb-2">60%</div>
                  <p className="font-semibold">Average Cost Savings</p>
                </div>
              </div>
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
                Machine Learning <span className="text-primary-orange">Expertise in Pennsylvania</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive machine learning services from data preparation to model deployment and monitoring for Pennsylvania businesses
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
                  Forecast Pennsylvania market trends, customer behavior, and business outcomes using advanced predictive 
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
                  Discover hidden patterns in your Pennsylvania market data using unsupervised learning techniques for market 
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
                Machine Learning Solutions for <span className="text-primary-orange">Pennsylvania Businesses</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized ML solutions including Manufacturing analytics, healthcare ML, energy sector optimization, and supply chain intelligence tailored for Pennsylvania's business environment
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
                  optimized for Pennsylvania business requirements.
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

      {/* FAQ Section - ASO Optimization */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions About <span className="text-primary-orange">Machine Learning Company In Pennsylvania</span>
              </h2>
              <p className="text-gray-600">
                Get answers to common questions about our machine learning services in Pennsylvania
              </p>
            </div>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg shadow-sm p-6 group">
                  <summary className="cursor-pointer font-semibold text-lg text-gray-800 flex justify-between items-center">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with Keywords */}
      <section id="consultation" className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Partner with the Top <span className="underline">Machine Learning Company In Pennsylvania</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 2100+ businesses that chose our <strong>Machine Learning Company In Pennsylvania</strong> for their AI transformation. 
              Get a free consultation and discover how our ML solutions can revolutionize your Pennsylvania operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free ML Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Pennsylvania ML Experts: +91 7892518414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">2100+</div>
                <p className="text-orange-100">ML Projects Completed</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">98%</div>
                <p className="text-orange-100">Client Success Rate</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">60%</div>
                <p className="text-orange-100">Average Cost Savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
