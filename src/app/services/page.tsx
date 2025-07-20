import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Brain, 
  BarChart3, 
  Code, 
  Zap, 
  MessageSquare,
  TrendingUp,
  Shield,
  Users,
  CheckCircle
} from "lucide-react";

export const metadata = {
  title: "AI Services & Solutions | Michigan AI Company - Metic AI",
  description: "Comprehensive AI services including AI integration, custom development, machine learning, generative AI, and data engineering. Transform your Michigan business with our expert AI solutions.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-orange-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              AI Services & <span className="text-primary-orange">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive artificial intelligence solutions that transform Michigan businesses. 
              From strategy to implementation, we deliver AI that actually works.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start Your AI Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-16">
            {/* Service 1: AI Integration and Deployment */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange font-medium text-sm mb-4">
                  Implementation & Deployment
                </div>
                <h2 className="text-3xl font-bold mb-4">AI Integration and Deployment</h2>
                <p className="text-gray-600 mb-6">
                  Seamlessly integrate AI capabilities into your existing business systems. We handle the complex technical 
                  implementation while ensuring minimal disruption to your operations. Our deployment process is designed 
                  to get you results quickly while building for long-term success.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    System integration with existing infrastructure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Phased deployment to minimize business disruption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Comprehensive testing and validation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Team training and ongoing support
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="primary">Get Started</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-primary-orange/20 to-secondary-orange/30 rounded-2xl p-8 flex items-center justify-center">
                  <Brain className="w-32 h-32 text-primary-orange" />
                </div>
              </div>
            </div>

            {/* Service 2: AI Services And Solutions */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-secondary-orange/20 to-light-orange/30 rounded-2xl p-8 flex items-center justify-center">
                <Zap className="w-32 h-32 text-primary-orange" />
              </div>
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange font-medium text-sm mb-4">
                  Complete Solutions
                </div>
                <h2 className="text-3xl font-bold mb-4">AI Services And Solutions</h2>
                <p className="text-gray-600 mb-6">
                  Complete AI transformation services from strategy to execution. We build solutions that actually work 
                  for your specific business challenges. No cookie-cutter approaches here - everything is tailored to 
                  your industry and requirements.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    AI strategy development and roadmapping
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    End-to-end solution development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Performance monitoring and optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Ongoing maintenance and updates
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="primary">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Service 3: Custom AI Development */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange font-medium text-sm mb-4">
                  Custom Development
                </div>
                <h2 className="text-3xl font-bold mb-4">Custom AI Development</h2>
                <p className="text-gray-600 mb-6">
                  Tailored AI applications built specifically for your industry and requirements. We develop custom 
                  models, algorithms, and applications that solve your unique business challenges. Every solution 
                  is built from the ground up to fit your exact needs.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Custom machine learning models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Industry-specific AI applications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    API development and integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Scalable architecture design
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="primary">Start Building</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-light-orange/20 to-primary-orange/30 rounded-2xl p-8 flex items-center justify-center">
                  <Code className="w-32 h-32 text-primary-orange" />
                </div>
              </div>
            </div>

            {/* Service 4: Generative AI Services */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-primary-orange/30 to-secondary-orange/20 rounded-2xl p-8 flex items-center justify-center">
                <MessageSquare className="w-32 h-32 text-primary-orange" />
              </div>
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange font-medium text-sm mb-4">
                  Generative AI
                </div>
                <h2 className="text-3xl font-bold mb-4">Generative AI Services</h2>
                <p className="text-gray-600 mb-6">
                  Harness the power of generative AI to create content, automate communications, and enhance customer 
                  interactions. From chatbots to content generation, we implement AI that creates real value for 
                  your business and customers.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Intelligent chatbots and virtual assistants
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Automated content generation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Document processing and summarization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Language translation and localization
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="primary">Explore Options</Button>
                </Link>
              </div>
            </div>

            {/* Service 5: Data Engineering */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange font-medium text-sm mb-4">
                  Data Infrastructure
                </div>
                <h2 className="text-3xl font-bold mb-4">Data Engineering</h2>
                <p className="text-gray-600 mb-6">
                  Build robust data pipelines and infrastructure that power your AI initiatives. Clean, organized data 
                  is the foundation of successful AI. We help you collect, process, and prepare your data for 
                  AI applications that deliver real results.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Data pipeline design and implementation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Data cleaning and preprocessing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Cloud infrastructure setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Real-time data processing systems
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="primary">Build Infrastructure</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-secondary-orange/30 to-light-orange/20 rounded-2xl p-8 flex items-center justify-center">
                  <BarChart3 className="w-32 h-32 text-primary-orange" />
                </div>
              </div>
            </div>

            {/* Service 6: Data Insights Machine Learning */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-light-orange/30 to-primary-orange/20 rounded-2xl p-8 flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-primary-orange" />
              </div>
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange font-medium text-sm mb-4">
                  Predictive Analytics
                </div>
                <h2 className="text-3xl font-bold mb-4">Data Insights Machine Learning</h2>
                <p className="text-gray-600 mb-6">
                  Transform raw data into actionable insights with advanced machine learning algorithms. Predict trends, 
                  identify opportunities, and make smarter business decisions with AI that learns from your data and 
                  gets better over time.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Predictive modeling and forecasting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Pattern recognition and anomaly detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Customer behavior analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-orange mr-3" />
                    Business intelligence dashboards
                  </li>
                </ul>
                <Link href="https://metic.ai/machine-learning/" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Here's what makes our approach different from other AI companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Proven Results</h3>
              <p className="text-gray-600">
                We focus on measurable outcomes, not just impressive demos. Every project is designed to deliver real ROI.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our Michigan-based team combines deep technical expertise with practical business knowledge.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Rapid Implementation</h3>
              <p className="text-gray-600">
                We get you up and running quickly with phased deployments that minimize risk and maximize value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg mb-8 text-orange-100">
              Let's discuss how our AI services can solve your specific business challenges. 
              No sales pitch - just practical solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
