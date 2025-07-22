import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Target,
  Award,
  Lightbulb,
  BarChart3,
  Code,
  Database,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "AI Services Hyderabad | Premier Artificial Intelligence Solutions & Development - Metic.ai",
  description: "Hyderabad's leading AI company delivering custom artificial intelligence solutions. Expert AI development, machine learning, automation, and data analytics with 3x faster delivery and 60% cost savings for Hyderabad businesses.",
  keywords: "AI services Hyderabad, artificial intelligence Hyderabad, machine learning Hyderabad, AI consulting Hyderabad, AI development Hyderabad, custom AI solutions Hyderabad, AI automation Hyderabad, enterprise AI Hyderabad, Cyberabad AI",
  authors: [{ name: "Metic.ai Hyderabad AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "AI Services Hyderabad | Premier Artificial Intelligence Solutions - Metic.ai",
    description: "Hyderabad's leading AI company with 500+ successful projects. Custom AI development, machine learning, and enterprise solutions with proven ROI.",
    url: "https://metic.ai/artificial-intelligence-ai-services-in-hyderabad/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-ai-services-hyderabad.jpg",
        width: 1200,
        height: 630,
        alt: "AI Services Hyderabad - Metic.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services Hyderabad | Custom AI Development - Metic.ai",
    description: "Transform your Hyderabad business with enterprise AI solutions. 3x faster development, 60% cost savings, 500+ successful projects.",
    images: ["https://metic.ai/og-ai-services-hyderabad.jpg"],
  },
  alternates: {
    canonical: "https://metic.ai/artificial-intelligence-ai-services-in-hyderabad/",
  },
};

export default function AIServicesHyderabadPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-28 overflow-hidden">
        <div className="container relative px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-orange/10 rounded-full text-primary-orange text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              #1 AI Development Company in Hyderabad
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <span className="text-primary-orange">AI Services</span> in Hyderabad
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading AI development company in Hyderabad delivering custom artificial intelligence solutions. 
              Expert AI development, machine learning, automation, and data analytics with 3x faster delivery 
              and 60% cost savings for Hyderabad businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="#consultation">
                <Button variant="primary" size="lg" className="group">
                  Get Free AI Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg">
                  Explore AI Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Comprehensive <span className="text-primary-orange">AI Solutions</span> for Hyderabad
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From custom AI development to enterprise automation, we deliver cutting-edge solutions 
                that drive growth and efficiency for Hyderabad businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Custom AI Development</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  End-to-end artificial intelligence solution development tailored for Hyderabad businesses
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Machine Learning Models
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Neural Network Development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    AI Algorithm Optimization
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Analytics & Intelligence</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Transform Hyderabad business data into actionable insights with advanced analytics
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Predictive Analytics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Business Intelligence
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Data Visualization
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI-Powered Automation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Streamline Hyderabad operations with intelligent automation solutions
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Process Automation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Intelligent Workflows
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    RPA Integration
                  </li>
                </ul>
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
              Ready to Transform Your Hyderabad Business with AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join 150+ successful Hyderabad companies who've revolutionized their operations 
              with our AI solutions. Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="tel:+917892518414">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  Call: +91-78925-18414
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
