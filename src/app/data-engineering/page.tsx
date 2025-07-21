import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Database, 
  Server, 
  Cloud, 
  Workflow,
  Zap,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Settings,
  GitBranch,
  Layers,
  Activity,
  Monitor,
  Code,
  Lock,
  BarChart3,
  Cpu,
  HardDrive,
  Network
} from "lucide-react";

export const metadata = {
  title: "Data Engineering Services | ETL, Data Pipeline & Cloud Data Solutions - Metic.ai",
  description: "Professional data engineering services including ETL pipelines, data warehousing, real-time data processing, cloud data architecture, and modern data stack implementation for scalable data infrastructure.",
  keywords: "data engineering, ETL pipelines, data warehousing, real-time data processing, cloud data architecture, data lakes, data integration, Apache Spark, Kafka, modern data stack, data infrastructure",
  authors: [{ name: "Metic.ai Data Engineering Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Data Engineering Services | ETL, Data Pipeline & Cloud Data Solutions - Metic.ai",
    description: "Professional data engineering services including ETL pipelines, data warehousing, and cloud data architecture.",
    url: "https://metic.ai/data-engineering/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-data-engineering.jpg",
        width: 1200,
        height: 630,
        alt: "Data Engineering Services by Metic.ai",
      },
    ],
  },
  alternates: {
    canonical: "https://metic.ai/data-engineering/",
  },
};

export default function DataEngineeringPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <span className="text-primary-orange">Data Engineering</span> Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build robust, scalable data infrastructure with modern data engineering solutions. From ETL 
              pipelines to real-time data processing, we create the foundation for your data-driven success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#consultation">
                <Button variant="primary" size="lg">
                  Get Infrastructure Assessment
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg">
                  Explore Data Solutions
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
                Our <span className="text-primary-orange">Data Engineering</span> Expertise
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive data engineering services from data ingestion to advanced analytics infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Data Pipeline Development */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Workflow className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Pipeline Development</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Design and build robust ETL/ELT pipelines for seamless data flow from multiple sources 
                  to target systems with automated monitoring, error handling, and scalability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    ETL/ELT pipeline design
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated workflows
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Error handling & monitoring
                  </li>
                </ul>
              </div>

              {/* Cloud Data Architecture */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Cloud className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cloud Data Architecture</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Build modern, cloud-native data architectures using AWS, Azure, and GCP services 
                  for optimal performance, cost-efficiency, and scalability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Multi-cloud solutions
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Serverless architectures
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cost optimization
                  </li>
                </ul>
              </div>

              {/* Real-time Data Processing */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Real-time Data Processing</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Implement streaming data solutions for real-time analytics, event processing, 
                  and instant decision making using Apache Kafka, Spark Streaming, and cloud services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Stream processing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Event-driven architecture
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Low-latency processing
                  </li>
                </ul>
              </div>

              {/* Data Warehousing */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Warehousing</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Design and implement modern data warehouses and data lakes using Snowflake, 
                  BigQuery, Redshift, and Delta Lake for enterprise-scale analytics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Modern data warehouse design
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Data lake implementation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Data modeling & optimization
                  </li>
                </ul>
              </div>

              {/* Data Integration */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <GitBranch className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Integration</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Seamlessly integrate data from diverse sources including databases, APIs, files, 
                  and third-party systems with robust data quality and governance frameworks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Multi-source integration
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    API & database connectors
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Data quality assurance
                  </li>
                </ul>
              </div>

              {/* DataOps & Automation */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">DataOps & Automation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Implement DataOps practices with CI/CD for data pipelines, automated testing, 
                  monitoring, and governance to ensure reliable and efficient data operations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    CI/CD for data pipelines
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated testing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Data governance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Data Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Modern Data Stack Technologies
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leveraging cutting-edge tools and platforms for building robust data infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Data Warehouses</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Snowflake</p>
                  <p>Google BigQuery</p>
                  <p>Amazon Redshift</p>
                  <p>Azure Synapse</p>
                  <p>Databricks</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Workflow className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Data Orchestration</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Apache Airflow</p>
                  <p>Prefect</p>
                  <p>Dagster</p>
                  <p>Kubernetes</p>
                  <p>AWS Step Functions</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Stream Processing</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Apache Kafka</p>
                  <p>Apache Spark</p>
                  <p>Apache Flink</p>
                  <p>Amazon Kinesis</p>
                  <p>Google Pub/Sub</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Cloud className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Cloud Platforms</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>AWS Data Services</p>
                  <p>Google Cloud Platform</p>
                  <p>Microsoft Azure</p>
                  <p>Terraform</p>
                  <p>Docker & Kubernetes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Engineering Process */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our Data Engineering Process
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Systematic approach to building scalable and reliable data infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-orange rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-sm">
                  1
                </div>
                <h3 className="text-base font-bold mb-3">Requirements Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Assess data sources, volumes, and business requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-orange rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-sm">
                  2
                </div>
                <h3 className="text-base font-bold mb-3">Architecture Design</h3>
                <p className="text-gray-600 text-sm">
                  Design scalable and cost-effective data architecture.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-orange rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-sm">
                  3
                </div>
                <h3 className="text-base font-bold mb-3">Pipeline Development</h3>
                <p className="text-gray-600 text-sm">
                  Build robust ETL/ELT pipelines with error handling.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-orange rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-sm">
                  4
                </div>
                <h3 className="text-base font-bold mb-3">Testing & Validation</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive testing and data quality validation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-orange rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-sm">
                  5
                </div>
                <h3 className="text-base font-bold mb-3">Deployment</h3>
                <p className="text-gray-600 text-sm">
                  Deploy to production with monitoring and alerting.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-orange rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-sm">
                  6
                </div>
                <h3 className="text-base font-bold mb-3">Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Continuous monitoring and performance optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Data Engineering Solutions
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transforming data infrastructure across industries and use cases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Enterprise Data Consolidation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Integrate data from multiple business systems, databases, and third-party sources 
                      into unified data platforms for comprehensive business intelligence and analytics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Activity className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Real-time Analytics Platforms</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Build streaming data pipelines for real-time dashboards, fraud detection, 
                      IoT monitoring, and instant decision-making capabilities across your organization.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <HardDrive className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Data Lake Implementation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Design and implement scalable data lakes for storing structured and unstructured 
                      data, enabling advanced analytics, machine learning, and data science initiatives.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Network className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Cloud Migration & Modernization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Migrate legacy data systems to modern cloud platforms with improved performance, 
                      scalability, and cost-efficiency while maintaining data integrity and security.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Monitor className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">ML Data Infrastructure</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Build specialized data pipelines for machine learning workflows including feature 
                      engineering, model training data preparation, and ML model serving infrastructure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Lock className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Compliance & Governance</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Implement data governance frameworks with lineage tracking, access controls, 
                      audit trails, and compliance with regulations like GDPR, HIPAA, and SOX.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Choose Our Data Engineering Services?
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expertise and innovation in building enterprise-grade data infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">High Performance</h3>
                <p className="text-gray-600">
                  Optimized data pipelines with low latency, high throughput, 
                  and efficient resource utilization for cost-effective operations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">
                  Robust security measures including encryption, access controls, 
                  and compliance with industry standards and regulations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Scalable Solutions</h3>
                <p className="text-gray-600">
                  Future-proof architecture that scales with your business growth 
                  and evolving data requirements without major redesign.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Support</h3>
                <p className="text-gray-600">
                  Dedicated team of data engineers providing ongoing support, 
                  optimization, and knowledge transfer to your team.
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
                Common questions about our data engineering services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">What is the difference between ETL and ELT?</h3>
                <p className="text-gray-600">
                  ETL (Extract, Transform, Load) transforms data before loading into the target system, 
                  while ELT (Extract, Load, Transform) loads raw data first and transforms it within the 
                  target system. We choose the approach based on your data volume, complexity, and infrastructure.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">How do you handle data quality and validation?</h3>
                <p className="text-gray-600">
                  We implement comprehensive data quality frameworks including automated validation rules, 
                  data profiling, anomaly detection, and data lineage tracking. Our pipelines include 
                  quality gates that prevent bad data from reaching downstream systems.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Can you work with our existing cloud infrastructure?</h3>
                <p className="text-gray-600">
                  Yes, we design solutions that integrate seamlessly with your existing cloud infrastructure. 
                  Whether you're using AWS, Azure, GCP, or hybrid environments, we ensure minimal disruption 
                  while maximizing the value of your current investments.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">How do you ensure data pipeline reliability?</h3>
                <p className="text-gray-600">
                  We implement robust error handling, retry mechanisms, monitoring, alerting, and backup 
                  strategies. Our DataOps practices include automated testing, version control, and 
                  deployment pipelines to ensure consistent and reliable data operations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">What about real-time vs batch processing?</h3>
                <p className="text-gray-600">
                  We design hybrid architectures that support both real-time streaming and batch processing 
                  based on your business requirements. Real-time for immediate insights and batch for 
                  comprehensive historical analysis and complex transformations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">How do you handle data security and compliance?</h3>
                <p className="text-gray-600">
                  Security is built into every layer of our data architecture. We implement end-to-end 
                  encryption, access controls, audit logging, and ensure compliance with regulations 
                  like GDPR, HIPAA, and SOX through proper data governance frameworks.
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
              Ready to Build Your Data Infrastructure?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Transform your data architecture with modern engineering practices. Let our experts 
              design and build scalable, reliable data solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Data Project
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +91-78925-18414
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">10PB+</div>
                <p className="text-orange-100">Data Processed Monthly</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">99.9%</div>
                <p className="text-orange-100">Pipeline Uptime</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">70%</div>
                <p className="text-orange-100">Cost Reduction Average</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
