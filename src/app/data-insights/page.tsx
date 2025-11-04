import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Eye,
  Lightbulb,
  Target,
  Users,
  Database,
  CheckCircle,
  Zap,
  Shield,
  Brain,
  LineChart,
  Activity,
  Settings,
  Search,
  Filter,
  Globe,
  Smartphone,
  Monitor
} from "lucide-react";

export const metadata = {
  title: "Data Insights & Analytics Services | Business Intelligence & Data Visualization - Metic.ai",
  description: "Professional data insights and analytics services including business intelligence, data visualization, predictive analytics, dashboard development, and data-driven decision making solutions for enterprises.",
  keywords: "data insights, business intelligence, data analytics, data visualization, dashboard development, predictive analytics, data science, business analytics, KPI tracking, data-driven decisions, reporting solutions",
  authors: [{ name: "Metic.ai Data Analytics Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Data Insights & Analytics Services | Business Intelligence & Data Visualization - Metic.ai",
    description: "Professional data insights and analytics services including business intelligence, data visualization, and predictive analytics.",
    url: "https://metic.ai/data-insights/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-data-insights.jpg",
        width: 1200,
        height: 630,
        alt: "Data Insights & Analytics Services by Metic.ai",
      },
    ],
  },
  alternates: {
    canonical: "https://metic.ai/data-insights/",
  },
};

export default function DataInsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-indigo-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <span className="text-primary-orange">Data Insights</span> & Analytics
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform raw data into actionable business insights with advanced analytics, visualization, 
              and business intelligence solutions. Make data-driven decisions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#consultation">
                <Button variant="primary" size="lg">
                  Get Data Assessment
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg">
                  Explore Analytics Solutions
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
                Our <span className="text-primary-orange">Data Analytics</span> Services
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive data analytics solutions from data discovery to actionable business insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Business Intelligence */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Intelligence</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive BI solutions including data warehousing, ETL processes, and enterprise 
                  reporting systems that provide 360-degree view of your business operations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Data warehouse design
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    ETL pipeline development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Executive dashboards
                  </li>
                </ul>
              </div>

              {/* Data Visualization */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <PieChart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Visualization</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Create compelling visual stories from your data using advanced visualization techniques, 
                  interactive dashboards, and custom charts that communicate insights effectively.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Interactive dashboards
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom visualizations
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time monitoring
                  </li>
                </ul>
              </div>

              {/* Predictive Analytics */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Leverage statistical modeling and machine learning to forecast trends, predict customer 
                  behavior, and anticipate business outcomes for proactive decision making.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Trend forecasting
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

              {/* Customer Analytics */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Customer Analytics</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Deep dive into customer behavior, segmentation, lifetime value analysis, and churn 
                  prediction to optimize customer experience and maximize retention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Customer segmentation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Lifetime value analysis
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Churn prediction
                  </li>
                </ul>
              </div>

              {/* Performance Analytics */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Monitor and analyze business performance with KPI tracking, operational metrics, 
                  and performance optimization recommendations across all business functions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    KPI dashboard design
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Operational metrics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Performance optimization
                  </li>
                </ul>
              </div>

              {/* Data Discovery */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Discovery</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Uncover hidden patterns, relationships, and insights in your data through exploratory 
                  data analysis, statistical profiling, and advanced analytics techniques.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Exploratory data analysis
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pattern recognition
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Data profiling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our Data Analytics Process
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Systematic approach to extracting maximum value from your data assets
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-bold mb-4">Data Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Evaluate data sources, quality, and business objectives to define analytics strategy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-bold mb-4">Data Integration</h3>
                <p className="text-gray-600 text-sm">
                  Consolidate and clean data from multiple sources into unified analytics platform.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-bold mb-4">Analysis & Modeling</h3>
                <p className="text-gray-600 text-sm">
                  Apply statistical analysis and machine learning to extract meaningful insights.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  4
                </div>
                <h3 className="text-lg font-bold mb-4">Visualization & Reporting</h3>
                <p className="text-gray-600 text-sm">
                  Create compelling visualizations and automated reports for stakeholders.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-lg">
                  5
                </div>
                <h3 className="text-lg font-bold mb-4">Implementation & Monitoring</h3>
                <p className="text-gray-600 text-sm">
                  Deploy insights into business processes with continuous monitoring and optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Advanced Analytics Tools & Platforms
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leveraging industry-leading tools and technologies for comprehensive data analytics
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Monitor className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Visualization Tools</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Tableau</p>
                  <p>Power BI</p>
                  <p>Looker</p>
                  <p>D3.js</p>
                  <p>Plotly</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Database className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Data Platforms</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Snowflake</p>
                  <p>Amazon Redshift</p>
                  <p>Google BigQuery</p>
                  <p>Azure Synapse</p>
                  <p>Databricks</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Analytics Frameworks</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Python (Pandas, NumPy)</p>
                  <p>R</p>
                  <p>Apache Spark</p>
                  <p>SAS</p>
                  <p>SPSS</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Cloud Services</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>AWS Analytics</p>
                  <p>Google Cloud AI</p>
                  <p>Azure Analytics</p>
                  <p>IBM Watson</p>
                  <p>Oracle Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Data Insights Across Industries
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering actionable insights across diverse business sectors and use cases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Financial Services</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Risk analytics, portfolio optimization, credit scoring, fraud detection, regulatory reporting, 
                      and customer profitability analysis for banks, insurance companies, and investment firms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Retail & E-commerce</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Customer journey analytics, inventory optimization, price optimization, market basket analysis, 
                      and personalization strategies to maximize revenue and customer satisfaction.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Healthcare</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Patient outcome analysis, clinical trial analytics, operational efficiency, cost analysis, 
                      and population health insights to improve patient care and reduce costs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Production analytics, quality control, supply chain optimization, predictive maintenance, 
                      and operational efficiency analysis to reduce costs and improve productivity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Globe className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Technology & SaaS</h3>
                    <p className="text-gray-600 leading-relaxed">
                      User engagement analytics, product performance metrics, churn analysis, A/B testing, 
                      and growth analytics to optimize product development and customer retention.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Smartphone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Telecommunications</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Network performance analytics, customer behavior analysis, churn prediction, 
                      service optimization, and revenue analytics for telecom operators.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Choose Our Data Analytics Services?
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transform your data into competitive advantage with our comprehensive analytics expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Eye className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Clear Insights</h3>
                <p className="text-gray-600">
                  Transform complex data into clear, actionable insights that drive 
                  informed business decisions and strategic planning.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Real-time Analytics</h3>
                <p className="text-gray-600">
                  Get instant access to your data with real-time dashboards and 
                  automated alerts for critical business metrics.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Target className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Focus</h3>
                <p className="text-gray-600">
                  Analytics solutions designed with clear business objectives 
                  and measurable ROI for your organization.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Security</h3>
                <p className="text-gray-600">
                  Enterprise-grade security measures ensuring your data privacy 
                  and compliance with industry regulations.
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
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Common questions about our data insights and analytics services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">What types of data sources can you analyze?</h3>
                <p className="text-gray-600">
                  We work with all types of data sources including databases, CRM systems, ERP systems, 
                  web analytics, social media, IoT sensors, files (CSV, Excel, JSON), APIs, and cloud 
                  platforms. Our team can integrate and analyze structured, semi-structured, and unstructured data.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">How long does it take to implement a data analytics solution?</h3>
                <p className="text-gray-600">
                  Implementation timelines vary based on complexity and data readiness. Simple dashboards 
                  can be delivered in 2-4 weeks, while comprehensive BI solutions may take 8-16 weeks. 
                  We provide detailed project timelines during the initial assessment phase.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Can you work with our existing tools and systems?</h3>
                <p className="text-gray-600">
                  Yes, we specialize in integrating with existing business systems and tools. Whether 
                  you use Salesforce, SAP, Oracle, Microsoft, or custom applications, we ensure seamless 
                  integration and data flow without disrupting your current operations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">How do you ensure data quality and accuracy?</h3>
                <p className="text-gray-600">
                  We implement comprehensive data quality processes including data profiling, cleansing, 
                  validation rules, and ongoing monitoring. Our team establishes data governance frameworks 
                  and automated quality checks to ensure consistent, reliable insights.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Do you provide training for our team?</h3>
                <p className="text-gray-600">
                  Absolutely! We provide comprehensive training including dashboard usage, report generation, 
                  data interpretation, and best practices. Our training programs ensure your team can 
                  effectively use and maintain the analytics solutions we deliver.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">What ongoing support do you provide?</h3>
                <p className="text-gray-600">
                  We offer comprehensive support including system monitoring, performance optimization, 
                  report updates, new feature development, troubleshooting, and regular health checks 
                  to ensure your analytics platform continues to deliver value.
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
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Unlock the hidden value in your data with our comprehensive analytics solutions. 
              Make data-driven decisions that propel your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Data Assessment
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +91 7892518414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">1TB+</div>
                <p className="text-orange-100">Data Analyzed Daily</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">500+</div>
                <p className="text-orange-100">Dashboards Created</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">90%</div>
                <p className="text-orange-100">Decision Speed Improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
