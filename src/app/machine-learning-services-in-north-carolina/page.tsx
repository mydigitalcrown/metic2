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
  title: "Machine Learning Company In North Carolina | #1 ML Company In Tar Heel State - Metic.ai",
  description: "Leading Machine Learning Company In North Carolina with 2100+ successful ML implementations. Expert ML services, AI solutions & data science. Transform your business with 60% cost savings & 3x faster delivery in Research Triangle.",
  keywords: [
    "Machine Learning Company In North Carolina",
    "ML Company In North Carolina", 
    "Machine Learning Services In North Carolina",
    "ML Services In North Carolina",
    "AI Company In North Carolina",
    "Data Science Company In North Carolina",
    "ML Development Company In North Carolina",
    "Best Machine Learning Company In North Carolina",
    "Top ML Company North Carolina",
    "Machine Learning Firm In North Carolina",
    "ML Consultant In North Carolina",
    "Machine Learning Solutions In North Carolina",
    "AI ML Company In North Carolina",
    "Machine Learning Agency In North Carolina",
    "ML Expert In North Carolina",
    "Data Analytics Company In North Carolina",
    "Machine Learning Developer In North Carolina",
    "ML Implementation In North Carolina",
    "Machine Learning Company Raleigh Durham"
  ],
  authors: [{ name: "Metic.ai" }],
  publisher: "Metic.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://metic.ai"),
  alternates: {
    canonical: "https://metic.ai/machine-learning-services-in-north-carolina/"
  },
  openGraph: {
    title: "Machine Learning Company In North Carolina | #1 ML Company In Tar Heel State - Metic.ai",
    description: "Leading Machine Learning Company In North Carolina with 2100+ successful ML implementations. Expert ML services, AI solutions & data science. Transform your business with 60% cost savings & 3x faster delivery in Research Triangle.",
    url: "https://metic.ai/machine-learning-services-in-north-carolina/",
    siteName: "Metic.ai - Machine Learning Company In North Carolina",
    locale: "en_US",
    type: "website",
    publishedTime: "2024-01-01T00:00:00.000Z",
    authors: ["Metic.ai"],
    images: [
      {
        url: "https://metic.ai/og-image-machine-learning-north-carolina.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning Company In North Carolina - Metic.ai"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@meticai",
    creator: "@meticai", 
    title: "Machine Learning Company In North Carolina | #1 ML Company In Tar Heel State - Metic.ai",
    description: "Leading Machine Learning Company In North Carolina with 2100+ successful ML implementations. Expert ML services, AI solutions & data science. Transform your business with 60% cost savings & 3x faster delivery in Research Triangle.",
    images: ["https://metic.ai/twitter-image-machine-learning-north-carolina.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index,follow"
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code"
    }
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function MachineLearningNorthCarolinaPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Metic.ai - Machine Learning Company In North Carolina",
    "description": "Leading Machine Learning Company In North Carolina specializing in AI solutions, data science, and ML development for Research Triangle businesses.",
    "url": "https://metic.ai/machine-learning-services-in-north-carolina/",
    "logo": "https://metic.ai/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 7892518414",
      "contactType": "customer service",
      "areaServed": "North Carolina",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Research Triangle Park",
      "addressRegion": "North Carolina",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/metic-ai",
      "https://twitter.com/meticai"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best Machine Learning Company In North Carolina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Metic.ai is the leading Machine Learning Company In North Carolina with 2100+ successful ML implementations, serving businesses across Research Triangle Park, Charlotte, and Raleigh-Durham with 60% cost savings and 3x faster delivery."
        }
      },
      {
        "@type": "Question",
        "name": "What machine learning services does Metic.ai provide in North Carolina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a top Machine Learning Company In North Carolina, we provide predictive analytics, classification models, deep learning, clustering, recommendation systems, time series analysis, and custom ML solutions for Research Triangle businesses."
        }
      },
      {
        "@type": "Question",
        "name": "How much do machine learning services cost in North Carolina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Machine Learning Company In North Carolina offers competitive pricing with 60% cost savings compared to traditional solutions. Contact us for a customized quote based on your specific ML requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Does Metic.ai serve businesses across North Carolina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, as the premier Machine Learning Company In North Carolina, we serve businesses statewide including Research Triangle Park, Charlotte, Raleigh, Durham, Chapel Hill, Greensboro, and all major NC cities."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does your Machine Learning Company serve in North Carolina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Machine Learning Company In North Carolina serves diverse industries including research & technology, manufacturing, agriculture, healthcare, financial services, and education, leveraging our Research Triangle expertise."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can Metic.ai implement ML solutions in North Carolina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As an expert Machine Learning Company In North Carolina, we deliver ML solutions 3x faster than industry average, with typical implementation timelines of 4-12 weeks depending on project complexity."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Machine Learning Company In North Carolina | #1 ML Company In Tar Heel State",
    "description": "Leading Machine Learning Company In North Carolina with 2100+ successful ML implementations. Expert ML services, AI solutions & data science.",
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
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://metic.ai/machine-learning-services-in-north-carolina/"
    }
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
              <strong className="text-primary-orange">Machine Learning Company In North Carolina</strong> | Leading ML Company In Tar Heel State
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for the best <strong>Machine Learning Company In North Carolina</strong>? Metic.ai is the premier Machine Learning Company In North Carolina with 2100+ successful ML implementations across Research Triangle Park, Charlotte, and Raleigh-Durham. Transform your business with advanced AI solutions, predictive analytics, and custom ML models designed for the Tar Heel State's unique business landscape.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center bg-green-100 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                <span className="font-semibold text-green-800">2100+ ML Models Deployed</span>
              </div>
              <div className="flex items-center bg-blue-100 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-800">60% Cost Reduction</span>
              </div>
              <div className="flex items-center bg-purple-100 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-purple-600 mr-2" />
                <span className="font-semibold text-purple-800">3x Faster Delivery</span>
              </div>
              <div className="flex items-center bg-orange-100 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                <span className="font-semibold text-orange-800">Research Triangle Expertise</span>
              </div>
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

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Machine Learning <span className="text-primary-orange">Expertise in North Carolina</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive machine learning services from data preparation to model deployment and monitoring for North Carolina businesses
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
                  Forecast North Carolina market trends, customer behavior, and business outcomes using advanced predictive 
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
                  Discover hidden patterns in your North Carolina market data using unsupervised learning techniques for market 
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
                Machine Learning Solutions for <span className="text-primary-orange">North Carolina Businesses</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized ML solutions including Research & technology ML, manufacturing optimization, agriculture analytics, and healthcare innovation tailored for North Carolina's business environment
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
                  optimized for North Carolina business requirements.
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
                  Leading <span className="text-primary-orange">Machine Learning Company In North Carolina</span>
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    <strong>Metic.ai stands as the premier Machine Learning Company In North Carolina</strong>, serving businesses across the Research Triangle Park, Charlotte, and the entire Tar Heel State with cutting-edge AI solutions and data science expertise.
                  </p>
                  <p>
                    Our <strong>Machine Learning Company In North Carolina</strong> specializes in transforming businesses through advanced predictive analytics, deep learning models, and intelligent automation systems. With deep expertise in North Carolina's key industries including research & technology, manufacturing, agriculture, and healthcare, we deliver ML solutions that drive measurable business outcomes.
                  </p>
                  <p>
                    As a trusted <strong>Machine Learning Company In North Carolina</strong>, we've partnered with leading organizations across Research Triangle Park, leveraging our proximity to Duke University, UNC Chapel Hill, and NC State to deliver innovative ML solutions that combine academic research with practical business applications.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">2100+</div>
                    <p className="text-sm text-gray-600">ML Models Deployed</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">95%</div>
                    <p className="text-sm text-gray-600">Client Satisfaction Rate</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">150+</div>
                    <p className="text-sm text-gray-600">NC Businesses Served</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-primary-orange mb-2">3x</div>
                    <p className="text-sm text-gray-600">Faster Implementation</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary-orange/10 to-primary-orange/5 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-primary-orange">Research Triangle Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our <strong>Machine Learning Company In North Carolina</strong> leverages the Research Triangle's world-class academic and research infrastructure, collaborating with leading institutions to deliver cutting-edge ML solutions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-25 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">Industry-Specific Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From agricultural analytics to manufacturing optimization, our Machine Learning Company In North Carolina understands the unique challenges and opportunities across the Tar Heel State's diverse economy.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-25 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-green-700">Enterprise Partnership</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our Machine Learning Company In North Carolina has established partnerships with major NC corporations, research institutions, and technology companies, ensuring access to the latest ML innovations and best practices.
                  </p>
                </div>
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
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions About Our <span className="text-primary-orange">Machine Learning Company In North Carolina</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our Machine Learning Company In North Carolina and our comprehensive ML services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Which is the best Machine Learning Company In North Carolina?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Metic.ai is the leading Machine Learning Company In North Carolina</strong> with 2100+ successful ML implementations, serving businesses across Research Triangle Park, Charlotte, and Raleigh-Durham with 60% cost savings and 3x faster delivery. Our expertise in North Carolina's key industries and partnerships with Research Triangle institutions make us the top choice for ML solutions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What machine learning services does Metic.ai provide in North Carolina?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As a top <strong>Machine Learning Company In North Carolina</strong>, we provide comprehensive ML services including predictive analytics, classification models, deep learning, clustering, recommendation systems, time series analysis, and custom ML solutions specifically designed for Research Triangle businesses and North Carolina's diverse industries.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How much do machine learning services cost in North Carolina?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>Machine Learning Company In North Carolina</strong> offers competitive pricing with 60% cost savings compared to traditional solutions. Project costs vary based on complexity, data requirements, and implementation scope. Contact our NC team for a customized quote tailored to your specific ML requirements and budget.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Does Metic.ai serve businesses across North Carolina?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, as the premier <strong>Machine Learning Company In North Carolina</strong>, we serve businesses statewide including Research Triangle Park, Charlotte, Raleigh, Durham, Chapel Hill, Greensboro, Winston-Salem, Asheville, and all major NC cities. Our statewide presence ensures local support and understanding of regional business needs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What industries does your Machine Learning Company serve in North Carolina?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our <strong>Machine Learning Company In North Carolina</strong> serves diverse industries including research & technology, manufacturing, agriculture, healthcare, financial services, education, and biotechnology. We leverage our Research Triangle expertise and understanding of North Carolina's unique business landscape to deliver industry-specific ML solutions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  How quickly can Metic.ai implement ML solutions in North Carolina?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As an expert <strong>Machine Learning Company In North Carolina</strong>, we deliver ML solutions 3x faster than industry average, with typical implementation timelines of 4-12 weeks depending on project complexity. Our local Research Triangle presence and streamlined processes ensure rapid deployment while maintaining quality and accuracy.
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
              Ready to Partner with the Leading <span className="text-orange-100">Machine Learning Company In North Carolina?</span>
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 150+ successful North Carolina businesses leveraging our advanced ML solutions across Research Triangle Park, Charlotte, and statewide. Transform your Tar Heel State business today with the premier <strong>Machine Learning Company In North Carolina</strong> - delivering 3x faster implementation and 60% cost savings.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Why Choose Our Machine Learning Company In North Carolina?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Research Triangle Expertise</h4>
                    <p className="text-sm text-orange-100">Deep NC market knowledge and academic partnerships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">2100+ Successful Implementations</h4>
                    <p className="text-sm text-orange-100">Proven track record across North Carolina</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">60% Cost Reduction</h4>
                    <p className="text-sm text-orange-100">Significant savings for NC businesses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">3x Faster Delivery</h4>
                    <p className="text-sm text-orange-100">Rapid implementation and deployment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your ML Project Today
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +91 7892518414
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">2100+</div>
                <p className="text-orange-100">ML Models Deployed</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">150+</div>
                <p className="text-orange-100">NC Businesses Served</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <p className="text-orange-100">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3x</div>
                <p className="text-orange-100">Faster Delivery</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-orange-200">
                🏆 Rated #1 Machine Learning Company In North Carolina by our clients across Research Triangle Park, Charlotte, and Raleigh-Durham
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
