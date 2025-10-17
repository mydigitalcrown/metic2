import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/Button";
import { 
  Brain, 
  BarChart3, 
  Code, 
  Zap, 
  Users, 
  Database, 
  Bot, 
  TrendingUp,
  MessageSquare,
  Layers
} from "lucide-react";

export const metadata = {
  title: "Services | Metic AI",
  description: "Explore Metic AI's range of services including AI consulting, machine learning solutions, data analytics, and automation.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-orange-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              Our <span className="text-primary-orange">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* Service 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange font-medium text-sm mb-4">
                  Strategic Planning
                </div>
                <h2 className="text-3xl font-bold mb-4">AI Consulting</h2>
                <p className="text-gray-600 mb-6">
                  Our expert consultants work with your team to understand your business challenges and 
                  identify where AI can create the most impact. We develop tailored roadmaps for 
                  implementing AI solutions that align with your strategic objectives.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <TrendingUp size={18} />
                    </div>
                    <span className="text-gray-600">AI readiness assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <TrendingUp size={18} />
                    </div>
                    <span className="text-gray-600">Technology selection and evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <TrendingUp size={18} />
                    </div>
                    <span className="text-gray-600">Custom AI strategy development</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="primary">Schedule a Consultation</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 relative h-[300px] md:h-[400px]">
                <div className="absolute inset-0 bg-primary-orange/10 rounded-lg blur-xl"></div>
                <div className="absolute inset-0 rounded-lg flex items-center justify-center">
                  <Brain className="w-32 h-32 text-primary-orange opacity-90" />
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px]">
                <div className="absolute inset-0 bg-primary-orange/10 rounded-lg blur-xl"></div>
                <div className="absolute inset-0 rounded-lg flex items-center justify-center">
                  <Database className="w-32 h-32 text-primary-orange opacity-90" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange font-medium text-sm mb-4">
                  Insights & Intelligence
                </div>
                <h2 className="text-3xl font-bold mb-4">Data Analytics</h2>
                <p className="text-gray-600 mb-6">
                  Transform your raw data into actionable insights with our advanced analytics platform. 
                  We help you collect, process, and analyze data to uncover patterns, trends, and 
                  opportunities that drive business growth.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <BarChart3 size={18} />
                    </div>
                    <span className="text-gray-600">Predictive analytics and forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <BarChart3 size={18} />
                    </div>
                    <span className="text-gray-600">Business intelligence dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <BarChart3 size={18} />
                    </div>
                    <span className="text-gray-600">Custom reporting solutions</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="primary">Learn More</Button>
                </Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange font-medium text-sm mb-4">
                  Intelligent Systems
                </div>
                <h2 className="text-3xl font-bold mb-4">Machine Learning</h2>
                <p className="text-gray-600 mb-6">
                  Our team of ML engineers develops custom models that learn from your data and improve 
                  over time. From recommendation engines to image recognition systems, we build solutions 
                  that automate complex tasks and enhance decision-making.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <Code size={18} />
                    </div>
                    <span className="text-gray-600">Custom ML model development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <Code size={18} />
                    </div>
                    <span className="text-gray-600">Natural language processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <Code size={18} />
                    </div>
                    <span className="text-gray-600">Computer vision solutions</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="primary">Discover ML Solutions</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 relative h-[300px] md:h-[400px]">
                <div className="absolute inset-0 bg-primary-orange/10 rounded-lg blur-xl"></div>
                <div className="absolute inset-0 rounded-lg flex items-center justify-center">
                  <Bot className="w-32 h-32 text-primary-orange opacity-90" />
                </div>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px]">
                <div className="absolute inset-0 bg-primary-orange/10 rounded-lg blur-xl"></div>
                <div className="absolute inset-0 rounded-lg flex items-center justify-center">
                  <Zap className="w-32 h-32 text-primary-orange opacity-90" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-orange/10 text-primary-orange font-medium text-sm mb-4">
                  Process Optimization
                </div>
                <h2 className="text-3xl font-bold mb-4">Automation</h2>
                <p className="text-gray-600 mb-6">
                  Streamline your operations and reduce manual work with our intelligent automation 
                  solutions. We help you identify processes that can be automated and implement 
                  systems that save time, reduce errors, and free up your team for higher-value work.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <Layers size={18} />
                    </div>
                    <span className="text-gray-600">Workflow automation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <Layers size={18} />
                    </div>
                    <span className="text-gray-600">Document processing & extraction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary-orange">
                      <Layers size={18} />
                    </div>
                    <span className="text-gray-600">Intelligent process automation (IPA)</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="primary">Explore Automation</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive suite of AI solutions covers a wide range of business needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="text-primary-orange h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Conversational AI</h3>
              <p className="text-gray-600">
                Build intelligent chatbots and virtual assistants that enhance customer service and streamline internal communications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary-orange h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">AI Training & Workshops</h3>
              <p className="text-gray-600">
                Empower your team with the knowledge and skills they need to work effectively with AI systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-primary-orange h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">AI Strategy Workshops</h3>
              <p className="text-gray-600">
                Collaborative sessions to help your leadership team develop a comprehensive AI strategy for your organization.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
              <p className="mb-6">
                Contact us today to discuss how our AI solutions can help you achieve your business goals.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary-orange border-white hover:bg-white/90"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
            <div className="relative h-[200px] md:h-[300px]">
              <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
              <div className="absolute inset-0 rounded-lg flex items-center justify-center">
                <Brain className="w-24 h-24 text-white opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
