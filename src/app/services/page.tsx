import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Brain,
  Zap,
  Database,
  Code,
  BarChart3,
  Shield,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  TrendingUp,
  Phone,
  Mail,
  Calendar,
  Clock,
  Award,
  Sparkles
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services & Custom Development | Michigan's Premier AI Company - Metic.ai",
  description: "Complete AI services including custom AI development, machine learning, data engineering, automation, and enterprise AI solutions. 3x faster delivery with 60% cost savings. Michigan's leading AI experts.",
  keywords: "AI services, custom AI development, machine learning services, data engineering, AI automation, enterprise AI, AI consulting, artificial intelligence development",
  openGraph: {
    title: "AI Services & Custom Development - Metic.ai",
    description: "Complete AI services with 3x faster delivery and 60% cost savings. Custom AI development, machine learning, and enterprise solutions.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary-orange/20 to-secondary-orange/30 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-orange/20 border border-primary-orange/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary-orange" />
              <span className="text-sm font-medium text-white">🚀 3x Faster Development • 💰 60% Cost Savings • 🎯 Custom Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              AI Services & <span className="text-primary-orange">Custom Development</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with custom AI solutions designed for your specific needs. We build enterprise applications, automation systems, and intelligent software with AI-accelerated development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary-orange hover:bg-primary-orange/90">
                <Phone className="w-5 h-5 mr-2" />
                Start AI Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Mail className="w-5 h-5 mr-2" />
                View AI Portfolio
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">3x</div>
                <div className="text-sm text-gray-300">Faster Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">60%</div>
                <div className="text-sm text-gray-300">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-orange mb-1">500+</div>
                <div className="text-sm text-gray-300">AI Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete AI Solutions */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Complete AI Solutions
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From enterprise applications to business automation, we deliver tailored AI solutions that drive growth and efficiency.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Enterprise AI Development */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <Brain className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Enterprise AI Development</h3>
                <p className="text-gray-600 mb-6">Scalable enterprise AI software designed for complex business requirements and high-performance needs.</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Multi-user AI architecture</li>
                      <li>• Advanced security & compliance</li>
                      <li>• Integration capabilities</li>
                      <li>• Scalable ML infrastructure</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">TensorFlow</span>
                      <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">PyTorch</span>
                      <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">Docker</span>
                      <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">Kubernetes</span>
                    </div>
                  </div>
                </div>
                
                <Link href="/custom-ai-development">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Business Process Automation */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <Zap className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Business Process Automation</h3>
                <p className="text-gray-600 mb-6">AI-powered automation solutions that streamline workflows and eliminate manual processes.</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Workflow automation</li>
                      <li>• AI decision making</li>
                      <li>• Process optimization</li>
                      <li>• Cost reduction</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Python</span>
                      <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">RPA Tools</span>
                      <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">AI APIs</span>
                      <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">Workflows</span>
                    </div>
                  </div>
                </div>
                
                <Link href="/generative-ai-services">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Machine Learning Solutions */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <BarChart3 className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Machine Learning Solutions</h3>
                <p className="text-gray-600 mb-6">Advanced ML models and predictive analytics for data-driven business insights and automation.</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Predictive modeling</li>
                      <li>• Neural networks</li>
                      <li>• Real-time analytics</li>
                      <li>• Pattern recognition</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded">Scikit-learn</span>
                      <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded">Pandas</span>
                      <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded">NumPy</span>
                      <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded">MLflow</span>
                    </div>
                  </div>
                </div>
                
                <Link href="/machine-learning">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Data Engineering */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <Database className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Data Engineering Solutions</h3>
                <p className="text-gray-600 mb-6">Custom data pipelines, warehousing, and analytics infrastructure for AI-powered insights.</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Data pipeline design</li>
                      <li>• Real-time processing</li>
                      <li>• Data warehousing</li>
                      <li>• Analytics setup</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded">Apache Spark</span>
                      <span className="bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded">Kafka</span>
                      <span className="bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded">Snowflake</span>
                      <span className="bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded">AWS</span>
                    </div>
                  </div>
                </div>
                
                <Link href="/data-engineering">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* AI Integration */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <Globe className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">AI Integration & Deployment</h3>
                <p className="text-gray-600 mb-6">Seamless AI integration with existing systems and optimized deployment for production environments.</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• System integration</li>
                      <li>• API development</li>
                      <li>• Cloud deployment</li>
                      <li>• Performance monitoring</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-teal-200 text-teal-800 text-xs px-2 py-1 rounded">FastAPI</span>
                      <span className="bg-teal-200 text-teal-800 text-xs px-2 py-1 rounded">REST APIs</span>
                      <span className="bg-teal-200 text-teal-800 text-xs px-2 py-1 rounded">GraphQL</span>
                      <span className="bg-teal-200 text-teal-800 text-xs px-2 py-1 rounded">Microservices</span>
                    </div>
                  </div>
                </div>
                
                <Link href="/ai-integration-and-deployment">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Data Insights */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <TrendingUp className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Data Insights & Analytics</h3>
                <p className="text-gray-600 mb-6">Transform raw data into actionable business insights with AI-powered analytics and visualization.</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Advanced analytics</li>
                      <li>• Data visualization</li>
                      <li>• Business intelligence</li>
                      <li>• Predictive insights</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded">Tableau</span>
                      <span className="bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded">Power BI</span>
                      <span className="bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded">D3.js</span>
                      <span className="bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded">Plotly</span>
                    </div>
                  </div>
                </div>
                
                <Link href="/data-insights">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI by Industry */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                AI Solutions by Industry
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-specific AI solutions that solve unique business challenges and drive operational excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Healthcare */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Healthcare</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Applications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Patient management systems</li>
                      <li>• AI diagnostics & imaging</li>
                      <li>• Appointment scheduling</li>
                      <li>• Medical inventory</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Business Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• HIPAA compliance</li>
                      <li>• Enhanced patient care</li>
                      <li>• Automated processes</li>
                      <li>• Data security</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Finance & Banking */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Finance & Banking</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Applications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Fraud detection systems</li>
                      <li>• Risk assessment</li>
                      <li>• Algorithmic trading</li>
                      <li>• Compliance reporting</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Business Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Regulatory compliance</li>
                      <li>• Risk reduction</li>
                      <li>• Automated reporting</li>
                      <li>• Real-time processing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Manufacturing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Manufacturing</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Applications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Predictive maintenance</li>
                      <li>• Quality control AI</li>
                      <li>• Supply chain optimization</li>
                      <li>• Equipment monitoring</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Business Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Operational efficiency</li>
                      <li>• Quality improvement</li>
                      <li>• Cost reduction</li>
                      <li>• Predictive maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Retail & E-commerce */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Retail & E-commerce</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Applications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Recommendation engines</li>
                      <li>• Inventory optimization</li>
                      <li>• Customer analytics</li>
                      <li>• Price optimization</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Business Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Personalized shopping</li>
                      <li>• Customer insights</li>
                      <li>• Process automation</li>
                      <li>• Sales growth</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Applications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Adaptive learning systems</li>
                      <li>• Student performance analytics</li>
                      <li>• Automated grading</li>
                      <li>• Personalized curricula</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Business Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Enhanced learning outcomes</li>
                      <li>• Administrative efficiency</li>
                      <li>• Data-driven insights</li>
                      <li>• Scalable solutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Logistics & Transportation */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Logistics & Transportation</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Applications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Route optimization</li>
                      <li>• Fleet management</li>
                      <li>• Demand forecasting</li>
                      <li>• Real-time tracking</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Business Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cost optimization</li>
                      <li>• Efficiency improvement</li>
                      <li>• Real-time visibility</li>
                      <li>• Automated operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Our AI Development Process
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI-accelerated development methodology that delivers high-quality AI solutions faster and more efficiently.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-orange">01</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Discovery & Analysis</h3>
                <p className="text-sm text-gray-500 mb-3">1-2 weeks</p>
                <p className="text-gray-600 mb-4">AI-powered requirements analysis and project planning for optimal solutions.</p>
                
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 mb-2">Deliverables:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Requirements document</li>
                    <li>• Technical specification</li>
                    <li>• Project roadmap</li>
                    <li>• AI optimization plan</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-orange">02</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Architecture & Design</h3>
                <p className="text-sm text-gray-500 mb-3">1-2 weeks</p>
                <p className="text-gray-600 mb-4">System architecture design with AI-enhanced UI/UX for maximum efficiency.</p>
                
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 mb-2">Deliverables:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• System architecture</li>
                    <li>• Database design</li>
                    <li>• UI/UX mockups</li>
                    <li>• Technical documentation</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-orange">03</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Accelerated Development</h3>
                <p className="text-sm text-gray-500 mb-3">4-12 weeks</p>
                <p className="text-gray-600 mb-4">Rapid development using AI tools and agile methodologies for faster delivery.</p>
                
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 mb-2">Deliverables:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Working AI software</li>
                    <li>• AI integrations</li>
                    <li>• Quality assurance</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-orange">04</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Testing & Deployment</h3>
                <p className="text-sm text-gray-500 mb-3">1-2 weeks</p>
                <p className="text-gray-600 mb-4">Comprehensive testing and smooth deployment with AI-powered monitoring.</p>
                
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 mb-2">Deliverables:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tested application</li>
                    <li>• Deployment setup</li>
                    <li>• Training materials</li>
                    <li>• Support documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Why Choose Our AI Expertise
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced development capabilities and proven expertise in delivering AI solutions that transform businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <Zap className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">AI-Accelerated Development</h3>
                <p className="text-gray-600">3x faster development using AI tools for code generation, testing, and optimization.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <Globe className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Enterprise Architecture</h3>
                <p className="text-gray-600">Scalable, secure architecture designed for complex business requirements and high performance.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <Shield className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Security & Compliance</h3>
                <p className="text-gray-600">Enterprise-grade security implementation with compliance for industry standards.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <Target className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Performance Optimization</h3>
                <p className="text-gray-600">High-performance applications optimized for speed, scalability, and resource efficiency.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <Users className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Expert AI Team</h3>
                <p className="text-gray-600">Dedicated team of AI experts with proven experience in enterprise AI implementations.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <Award className="w-12 h-12 text-primary-orange mb-6" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Proven Track Record</h3>
                <p className="text-gray-600">500+ successful AI projects with measurable business impact and ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Investment Plans */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                AI Investment Plans
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible AI development packages designed to deliver maximum value for your investment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Startup Package */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Startup Package</h3>
                  <div className="text-4xl font-bold text-primary-orange mb-2">$15,000 - $30,000</div>
                  <p className="text-gray-600">4-8 weeks • Basic AI Solutions</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Custom AI application</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Basic ML integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">API development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">3 months support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Documentation & training</span>
                  </div>
                </div>
                
                <Button className="w-full bg-primary-orange hover:bg-primary-orange/90">
                  Get Started
                </Button>
              </div>

              {/* Business Package */}
              <div className="bg-primary-orange text-white border-2 border-primary-orange rounded-2xl p-8 transform scale-105 shadow-xl">
                <div className="text-center mb-6">
                  <div className="inline-block bg-white text-primary-orange px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Business Package</h3>
                  <div className="text-4xl font-bold mb-2">$30,000 - $75,000</div>
                  <p className="text-orange-100">8-16 weeks • Advanced AI Solutions</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-orange-100">Advanced enterprise AI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-orange-100">AI-powered automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-orange-100">Third-party integrations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-orange-100">Advanced analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-orange-100">6 months support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-orange-100">Performance optimization</span>
                  </div>
                </div>
                
                <Button variant="secondary" className="w-full bg-white text-primary-orange hover:bg-gray-100">
                  Get Started
                </Button>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise Package</h3>
                  <div className="text-4xl font-bold text-primary-orange mb-2">$75,000+</div>
                  <p className="text-gray-600">16+ weeks • Enterprise AI Solutions</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Complex enterprise AI system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Advanced AI/ML integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Microservices architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Advanced security features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">12 months support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Dedicated project manager</span>
                  </div>
                </div>
                
                <Button className="w-full bg-primary-orange hover:bg-primary-orange/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Ready to Build Your AI Solution?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Transform your business with AI development that's tailored to your specific needs. Get AI-accelerated development with 3x faster delivery and significant cost savings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="bg-white text-primary-orange hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Start AI Development
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-orange">
                <Mail className="w-5 h-5 mr-2" />
                Call AI Experts
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-orange-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>FREE Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>3x Faster Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>60% Cost Savings</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
