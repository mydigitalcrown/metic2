import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, BarChart3, Code, Zap } from "lucide-react";
import { Button } from "./components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-orange-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Transforming Business with{" "}
                <span className="text-primary-orange">Advanced AI</span>
              </h1>
              
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Metic AI delivers intelligent solutions that help businesses automate processes, 
                extract insights from data, and create exceptional customer experiences.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-primary-orange/10 rounded-full blur-3xl"></div>
                <Image 
                  src="/next.svg" 
                  alt="AI Brain Visualization"
                  width={500}
                  height={500}
                  className="relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Intelligent Solutions for Modern Businesses
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              Our AI-powered platform helps organizations of all sizes transform their operations
              and achieve better outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-orange/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-primary-orange h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">AI Consulting</h3>
              <p className="text-gray-600">Expert guidance on implementing AI solutions tailored to your business needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-orange/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-primary-orange h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Data Analytics</h3>
              <p className="text-gray-600">Transform your data into actionable insights with our advanced analytics platform.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-orange/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-primary-orange h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Machine Learning</h3>
              <p className="text-gray-600">Custom ML models that learn from your data and improve over time.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-orange/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-primary-orange h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Automation</h3>
              <p className="text-gray-600">Streamline operations and reduce manual work with intelligent automation.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-4 max-w-lg text-white/90">
                Join hundreds of companies already using Metic AI to gain competitive advantage.
              </p>
            </div>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary-orange border-white hover:bg-white/90"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
              See what our clients say about working with Metic AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center">
                    <span className="font-bold text-primary-orange">TC</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Taylor Chen</p>
                  <p className="text-sm text-gray-500">CTO, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Implementing Metic AI's solutions has transformed our data analytics capabilities. 
                We've seen a 40% increase in operational efficiency."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center">
                    <span className="font-bold text-primary-orange">AJ</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Aria Johnson</p>
                  <p className="text-sm text-gray-500">CEO, InnovateCo</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The team at Metic AI helped us build a custom solution that perfectly 
                matched our needs. Their expertise in AI is unmatched."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary-orange/20 flex items-center justify-center">
                    <span className="font-bold text-primary-orange">MR</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Marcus Rodriguez</p>
                  <p className="text-sm text-gray-500">Director, GlobalFinance</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Metic AI's machine learning models have dramatically improved our 
                forecasting accuracy. We're now able to make better decisions faster."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
