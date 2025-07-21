import Link from "next/link";
import { ArrowRight, Brain, BarChart3, Code, Zap, CheckCircle, Star, MessageSquare, Shield, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "./components/ui/Button";
import { organizationSchema } from "../lib/schemas";

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Artificial Intelligence Company in Michigan | Top AI Company In Michigan - Metic AI",
  "description": "Leading AI company in Michigan delivering intelligent solutions that transform businesses. Expert AI integration, custom development, machine learning, and data engineering services.",
  "url": "https://metic.ai/",
  "mainEntity": {
    "@id": "https://metic.ai/#organization"
  },
  "about": {
    "@type": "Organization",
    "@id": "https://metic.ai/#organization"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://metic.ai/"
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-orange-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Artificial Intelligence Company in{" "}
                <span className="text-primary-orange">Michigan</span>
              </h1>
              
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Michigan's leading AI company delivering intelligent solutions that transform how businesses operate. 
                We help companies automate processes, unlock data insights, and create exceptional customer experiences 
                through cutting-edge artificial intelligence technology.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    Explore AI Services
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-primary-orange/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 w-full h-full bg-gradient-to-br from-primary-orange/20 via-secondary-orange/30 to-light-orange/40 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Brain className="w-24 h-24 text-primary-orange mx-auto" />
                    <div className="space-y-2">
                      <div className="flex justify-center space-x-2">
                        <div className="w-3 h-3 bg-primary-orange rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-secondary-orange rounded-full animate-pulse delay-75"></div>
                        <div className="w-3 h-3 bg-light-orange rounded-full animate-pulse delay-150"></div>
                      </div>
                      <p className="text-lg font-semibold text-gray-700">AI Intelligence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Our AI Services & Solutions
            </h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              We deliver comprehensive artificial intelligence solutions that drive real business results. 
              Here's what we can do for your company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Brain className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">AI Integration and Deployment</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly integrate AI capabilities into your existing systems. We handle the complex technical implementation 
                so you can focus on results.
              </p>
              <Link href="/services" className="text-primary-orange font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">AI Services And Solutions</h3>
              <p className="text-gray-600 mb-4">
                Complete AI transformation services from strategy to execution. We build solutions that actually work 
                for your specific business challenges.
              </p>
              <Link href="/services" className="text-primary-orange font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-6">
                <Code className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Custom AI Development</h3>
              <p className="text-gray-600 mb-4">
                Tailored AI applications built specifically for your industry and requirements. 
                No cookie-cutter solutions here.
              </p>
              <Link href="/services" className="text-primary-orange font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Generative AI Services</h3>
              <p className="text-gray-600 mb-4">
                Harness the power of generative AI to create content, automate communications, 
                and enhance customer interactions.
              </p>
              <Link href="/services" className="text-primary-orange font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Data Engineering</h3>
              <p className="text-gray-600 mb-4">
                Build robust data pipelines and infrastructure that power your AI initiatives. 
                Clean data leads to better AI outcomes.
              </p>
              <Link href="/services" className="text-primary-orange font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-4">Data Insights Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Transform raw data into actionable insights with advanced machine learning algorithms. 
                Predict trends and make smarter decisions.
              </p>
              <Link href="https://metic.ai/machine-learning/" className="text-primary-orange font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Metic.AI Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Why Choose Metic.AI?
              </h2>
              <p className="text-gray-600 md:text-lg">
                We're not just another AI company. Here's what makes us different.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <CheckCircle className="text-primary-orange h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Real-World Experience</h3>
                    <p className="text-gray-600">
                      We've deployed AI solutions across multiple industries. We know what works and what doesn't.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="text-primary-orange h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Michigan-Based Team</h3>
                    <p className="text-gray-600">
                      Local expertise with global capabilities. We understand Michigan businesses and their unique challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="text-primary-orange h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Results-Driven Approach</h3>
                    <p className="text-gray-600">
                      We focus on measurable outcomes, not just fancy technology. Your success is our success.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="text-primary-orange h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">End-to-End Support</h3>
                    <p className="text-gray-600">
                      From strategy to implementation to ongoing support, we're with you every step of the way.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-orange/20 to-secondary-orange/30 rounded-2xl p-8 text-center">
                  <div className="space-y-6">
                    <div className="text-4xl font-bold text-primary-orange">500+</div>
                    <p className="text-gray-700">AI Projects Completed</p>
                    
                    <div className="text-4xl font-bold text-primary-orange">98%</div>
                    <p className="text-gray-700">Client Satisfaction Rate</p>
                    
                    <div className="text-4xl font-bold text-primary-orange">24/7</div>
                    <p className="text-gray-700">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Key Features of Our AI Applications
            </h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Our AI solutions come packed with features that deliver real business value. 
              Let's break down what makes our applications stand out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security protocols protect your data and AI models.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized algorithms deliver results in real-time, not hours.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">User-Friendly</h3>
              <p className="text-gray-600">Intuitive interfaces that your team can use without extensive training.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Scalable Growth</h3>
              <p className="text-gray-600">Solutions that grow with your business, from startup to enterprise.</p>
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
              Join hundreds of Michigan companies already using our AI solutions. 
              Let's discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Journey
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-orange">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Latest AI Insights
            </h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Stay ahead of the curve with our latest thoughts on AI trends, case studies, and industry insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all">
              <div className="h-48 bg-gradient-to-br from-primary-orange/20 to-secondary-orange/30"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">How AI is Transforming Michigan Manufacturing</h3>
                <p className="text-gray-600 mb-4">
                  Discover how local manufacturers are using AI to improve efficiency and reduce costs.
                </p>
                <Link href="#" className="text-primary-orange font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>
            
            <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all">
              <div className="h-48 bg-gradient-to-br from-secondary-orange/20 to-light-orange/30"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">The Future of Customer Service AI</h3>
                <p className="text-gray-600 mb-4">
                  What this really means is better customer experiences and lower operational costs.
                </p>
                <Link href="#" className="text-primary-orange font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>
            
            <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all">
              <div className="h-48 bg-gradient-to-br from-light-orange/20 to-primary-orange/30"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Data Privacy in AI Implementation</h3>
                <p className="text-gray-600 mb-4">
                  Here's the thing about AI privacy: it doesn't have to be complicated.
                </p>
                <Link href="#" className="text-primary-orange font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 md:text-lg">
                Got questions about AI implementation? We've got answers.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">How long does AI implementation typically take?</h3>
                <p className="text-gray-600">
                  Most projects take 3-6 months from initial consultation to full deployment. Simple integrations 
                  can be faster, while complex custom solutions may take longer. We'll give you a realistic timeline 
                  during our initial assessment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">What's the typical ROI for AI projects?</h3>
                <p className="text-gray-600">
                  Our clients typically see 200-400% ROI within the first year. This comes from increased efficiency, 
                  reduced manual work, and better decision-making. We track these metrics throughout implementation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">Do we need technical expertise in-house?</h3>
                <p className="text-gray-600">
                  Not at all. We handle the technical complexity while training your team on the user-friendly interfaces. 
                  Our solutions are designed for business users, not just technical teams.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border">
                <h3 className="font-bold text-lg mb-2">How do you ensure data security?</h3>
                <p className="text-gray-600">
                  We use enterprise-grade encryption, comply with industry standards, and can work within your existing 
                  security protocols. Your data never leaves your control unless you specifically choose cloud deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Understanding AI Implementation in Michigan
              </h2>
              <p className="text-gray-600 md:text-lg">
                Let's break down what AI implementation really looks like for Michigan businesses.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Michigan AI Advantage</h3>
                  <p className="text-gray-600">
                    Michigan has always been about innovation and manufacturing excellence. Now we're seeing the same 
                    drive applied to artificial intelligence. Companies across the state are discovering that AI isn't 
                    just for tech giants anymore. Small manufacturers in Grand Rapids are using predictive maintenance. 
                    Healthcare systems in Ann Arbor are improving patient outcomes with AI diagnostics. Detroit startups 
                    are building the next generation of intelligent automotive systems.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Real Business Impact</h3>
                  <p className="text-gray-600">
                    What this really means is that AI is solving actual business problems, not just creating flashy demos. 
                    We work with companies that need to reduce costs, improve quality, and serve customers better. 
                    The technology is just the tool. The real value comes from understanding your specific challenges 
                    and building solutions that fit your workflow, not the other way around.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Beyond the Hype</h3>
                  <p className="text-gray-600">
                    Here's the thing about AI implementation: success comes from focusing on practical applications, 
                    not bleeding-edge research. We help businesses identify where AI can make the biggest difference 
                    in their operations. Sometimes that's automating data entry. Sometimes it's predicting equipment 
                    failures. Sometimes it's personalizing customer experiences. The key is starting with problems 
                    that actually matter to your bottom line.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Path Forward</h3>
                  <p className="text-gray-600">
                    Michigan businesses are practical. They want solutions that work, not theories that might work someday. 
                    That's exactly how we approach AI development. We start with pilot projects that prove value quickly, 
                    then scale what works. Our clients appreciate this approach because it minimizes risk while maximizing 
                    the potential for real impact. Every successful AI implementation starts with understanding the business 
                    first, then applying the right technology to solve specific problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Start Your AI Journey Today
              </h2>
              <p className="text-gray-600 md:text-lg">
                Ready to explore how AI can transform your business? Let's discuss your specific needs.
              </p>
            </div>
            
            <form className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your AI needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  placeholder="What business challenges are you looking to solve with AI?"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
              Real results from real Michigan businesses using our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6">
                "Metic AI helped us reduce our manufacturing defects by 40% in just three months. 
                The predictive maintenance system they built has saved us hundreds of thousands in downtime."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-primary-orange">JD</span>
                </div>
                <div>
                  <div className="font-semibold">John Davis</div>
                  <div className="text-sm text-gray-600">Operations Manager, Detroit Manufacturing</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6">
                "The customer service AI they developed has improved our response times by 60%. 
                Our customers are happier and our team can focus on more complex issues."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-primary-orange">SM</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Miller</div>
                  <div className="text-sm text-gray-600">CEO, Grand Rapids Tech Solutions</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6">
                "Working with Metic AI was refreshingly straightforward. They understood our business needs 
                and delivered a solution that actually works in the real world."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-primary-orange">MJ</span>
                </div>
                <div>
                  <div className="font-semibold">Mike Johnson</div>
                  <div className="text-sm text-gray-600">CTO, Ann Arbor Healthcare Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
