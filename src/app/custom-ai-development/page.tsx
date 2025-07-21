import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Brain, 
  Code, 
  Database, 
  Zap, 
  Shield,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Layers,
  Cpu,
  GitBranch,
  Server,
  Lock,
  BarChart3,
  Workflow,
  Settings,
  Cloud,
  Smartphone
} from "lucide-react";

export const metadata = {
  title: "Custom AI Development Services | Bespoke AI Solutions & Model Training - Metic.ai",
  description: "Professional custom AI development services including machine learning model creation, neural network design, AI system architecture, and bespoke artificial intelligence solutions tailored to your business needs.",
  keywords: "custom AI development, machine learning model development, neural network design, AI system architecture, bespoke AI solutions, custom machine learning, AI model training, artificial intelligence development, deep learning solutions",
  authors: [{ name: "Metic.ai Custom AI Development Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Custom AI Development Services | Bespoke AI Solutions & Model Training - Metic.ai",
    description: "Professional custom AI development services including machine learning model creation, neural network design, and bespoke AI solutions.",
    url: "https://metic.ai/custom-ai-development/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-custom-ai-development.jpg",
        width: 1200,
        height: 630,
        alt: "Custom AI Development Services by Metic.ai",
      },
    ],
  },
  alternates: {
    canonical: "https://metic.ai/custom-ai-development/",
  },
};

export default function CustomAIDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <span className="text-primary-orange">Custom AI</span> Development
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build bespoke artificial intelligence solutions tailored to your unique business requirements. 
              From custom machine learning models to enterprise AI architectures, we create intelligent 
              systems that drive innovation and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#consultation">
                <Button variant="primary" size="lg">
                  Start AI Development
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg">
                  Explore Solutions
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
                Our <span className="text-primary-orange">Custom AI</span> Development Services
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                End-to-end custom AI development from concept to deployment with enterprise-grade solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Custom ML Models */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Custom ML Models</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Design and develop custom machine learning models tailored to your specific data, 
                  business logic, and performance requirements using state-of-the-art algorithms and frameworks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Supervised & unsupervised learning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Deep learning architectures
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Model optimization & tuning
                  </li>
                </ul>
              </div>

              {/* Neural Network Design */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Neural Network Design</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Create sophisticated neural network architectures including CNNs, RNNs, Transformers, 
                  and custom architectures designed for your specific AI application requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Convolutional neural networks
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Recurrent neural networks
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Transformer architectures
                  </li>
                </ul>
              </div>

              {/* AI System Architecture */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Layers className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI System Architecture</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Design comprehensive AI system architectures that integrate seamlessly with your existing 
                  infrastructure while ensuring scalability, reliability, and optimal performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Microservices architecture
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    API gateway design
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cloud-native deployment
                  </li>
                </ul>
              </div>

              {/* Data Pipeline Development */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Pipeline Development</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Build robust data pipelines for AI model training and inference, including data collection, 
                  preprocessing, feature engineering, and automated model retraining workflows.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    ETL/ELT pipeline design
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time data processing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated workflows
                  </li>
                </ul>
              </div>

              {/* Model Training & Optimization */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Model Training & Optimization</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Advanced model training techniques including hyperparameter optimization, transfer learning, 
                  distributed training, and performance optimization for production environments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Hyperparameter tuning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Transfer learning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Model compression
                  </li>
                </ul>
              </div>

              {/* AI Infrastructure */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Server className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Infrastructure</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Design and implement scalable AI infrastructure including GPU clusters, containerization, 
                  orchestration, monitoring, and automated deployment for production AI systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Kubernetes deployment
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    GPU optimization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Auto-scaling solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our AI Development Process
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Systematic approach to custom AI development ensuring quality, scalability, and business alignment
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Discovery & Analysis</h3>
                <p className="text-gray-600">
                  Deep dive into your business requirements, data landscape, and technical constraints 
                  to define the optimal AI solution architecture.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Proof of Concept</h3>
                <p className="text-gray-600">
                  Develop a working prototype to validate the AI approach, test feasibility, 
                  and demonstrate initial results before full-scale development.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Development & Training</h3>
                <p className="text-gray-600">
                  Build and train custom AI models using your data, implement the complete system, 
                  and optimize for performance and accuracy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 mx-auto text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4">Deployment & Support</h3>
                <p className="text-gray-600">
                  Deploy to production environment with monitoring, provide team training, 
                  and offer ongoing support and model improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Advanced AI Technology Stack
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cutting-edge frameworks and tools for building robust, scalable AI solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Frameworks</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>TensorFlow & Keras</p>
                  <p>PyTorch & Lightning</p>
                  <p>Scikit-learn</p>
                  <p>Hugging Face</p>
                  <p>JAX & Flax</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Cloud className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Cloud Platforms</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>AWS SageMaker</p>
                  <p>Google Cloud AI</p>
                  <p>Azure ML Studio</p>
                  <p>Kubernetes</p>
                  <p>Docker</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">Data & Storage</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Apache Spark</p>
                  <p>Apache Kafka</p>
                  <p>MongoDB</p>
                  <p>PostgreSQL</p>
                  <p>Redis</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-4">MLOps Tools</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>MLflow</p>
                  <p>Kubeflow</p>
                  <p>Apache Airflow</p>
                  <p>DVC</p>
                  <p>Weights & Biases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Industries & Applications
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Custom AI solutions across diverse industries and use cases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Healthcare & Life Sciences</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Medical image analysis, drug discovery, patient risk prediction, clinical decision support, 
                      genomics analysis, and personalized treatment recommendation systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Finance & Banking</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fraud detection, algorithmic trading, credit risk assessment, robo-advisors, 
                      regulatory compliance automation, and customer behavior prediction models.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Workflow className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Manufacturing & Industry 4.0</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Predictive maintenance, quality control automation, supply chain optimization, 
                      robotic process automation, and smart factory AI systems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Retail & E-commerce</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Recommendation engines, dynamic pricing, inventory optimization, customer segmentation, 
                      visual search, and personalized shopping experiences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Lock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Security & Defense</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Threat detection, cybersecurity automation, surveillance systems, biometric recognition, 
                      anomaly detection, and intelligent security monitoring.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Zap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Energy & Utilities</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Smart grid optimization, energy consumption forecasting, renewable energy management, 
                      asset monitoring, and demand response systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Choose Our Custom AI Development?
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expertise, innovation, and proven results in custom AI solution development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Brain className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Expertise</h3>
                <p className="text-gray-600">
                  Deep expertise in machine learning, deep learning, and AI research with PhD-level 
                  data scientists and AI engineers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Target className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Focus</h3>
                <p className="text-gray-600">
                  AI solutions designed with clear business objectives, measurable outcomes, 
                  and tangible ROI for your organization.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Grade</h3>
                <p className="text-gray-600">
                  Production-ready AI systems with enterprise security, scalability, 
                  compliance, and 24/7 monitoring capabilities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Full Support</h3>
                <p className="text-gray-600">
                  End-to-end support from conception to deployment, including training, 
                  maintenance, and continuous improvement.
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
                Common questions about custom AI development services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">How long does custom AI development typically take?</h3>
                <p className="text-gray-600">
                  Development timelines vary based on complexity. Simple models may take 4-8 weeks, while 
                  complex enterprise AI systems can take 3-6 months. We provide detailed project timelines 
                  during the discovery phase, including proof of concept, development, testing, and deployment phases.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">What data do you need to build custom AI models?</h3>
                <p className="text-gray-600">
                  Data requirements depend on the AI application. Generally, we need relevant, clean, and 
                  representative datasets. We can work with structured data, unstructured data, images, text, 
                  or time series. We also provide data audit services to assess your data readiness for AI.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">How do you ensure the AI model performs accurately in production?</h3>
                <p className="text-gray-600">
                  We implement comprehensive testing, validation, and monitoring systems. This includes 
                  cross-validation during training, A/B testing for deployment, real-time performance monitoring, 
                  and automated alerts for model drift or degradation.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Can you integrate AI models with our existing systems?</h3>
                <p className="text-gray-600">
                  Yes, we specialize in seamless integration with existing enterprise systems through APIs, 
                  microservices, and various deployment options including cloud, on-premises, or hybrid 
                  environments. We ensure minimal disruption to your current workflows.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">What about model explainability and transparency?</h3>
                <p className="text-gray-600">
                  We prioritize explainable AI, especially for critical business applications. We implement 
                  model interpretability techniques, provide decision explanations, and ensure compliance 
                  with regulations requiring AI transparency and auditability.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Do you provide ongoing maintenance and model updates?</h3>
                <p className="text-gray-600">
                  Absolutely! We offer comprehensive maintenance services including model monitoring, 
                  performance optimization, retraining with new data, security updates, and feature 
                  enhancements to ensure your AI systems continue to deliver optimal results.
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
              Ready to Build Your Custom AI Solution?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you design and develop a custom artificial intelligence solution 
              that transforms your business and delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Discuss Your Project
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
                <div className="text-2xl font-bold mb-2">100+</div>
                <p className="text-orange-100">Custom AI Models Deployed</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">98%</div>
                <p className="text-orange-100">Model Accuracy Rate</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">50+</div>
                <p className="text-orange-100">Enterprise Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
