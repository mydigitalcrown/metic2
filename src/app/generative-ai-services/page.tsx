import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  Sparkles, 
  MessageSquare, 
  FileText, 
  Image, 
  Code, 
  Brain,
  Zap,
  CheckCircle,
  TrendingUp,
  Users,
  Shield,
  Target,
  Lightbulb,
  Layers,
  Bot,
  PenTool,
  Video,
  Music
} from "lucide-react";

export const metadata = {
  title: "Generative AI Services | Advanced AI Content Creation & Automation - Metic.ai",
  description: "Professional generative AI services including ChatGPT integration, AI content creation, automated workflows, and custom AI models. Transform your business with cutting-edge generative artificial intelligence solutions.",
  keywords: "generative AI services, ChatGPT integration, AI content creation, automated workflows, custom AI models, GPT-4, large language models, AI automation, artificial intelligence content, machine learning automation",
  authors: [{ name: "Metic.ai Generative AI Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Generative AI Services | Advanced AI Content Creation & Automation - Metic.ai",
    description: "Professional generative AI services including ChatGPT integration, AI content creation, automated workflows, and custom AI models.",
    url: "https://metic.ai/generative-ai-services/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-generative-ai.jpg",
        width: 1200,
        height: 630,
        alt: "Generative AI Services by Metic.ai",
      },
    ],
  },
  alternates: {
    canonical: "https://metic.ai/generative-ai-services/",
  },
};

export default function GenerativeAIServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-purple-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              <span className="text-primary-orange">Generative AI</span> Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Harness the power of advanced generative AI technologies including ChatGPT, GPT-4, 
              and custom AI models to automate content creation, enhance productivity, and transform 
              your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#consultation">
                <Button variant="primary" size="lg">
                  Get Free AI Consultation
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

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our <span className="text-primary-orange">Generative AI</span> Services
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive generative AI solutions to automate, enhance, and revolutionize your business processes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* ChatGPT Integration */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">ChatGPT Integration</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Seamlessly integrate ChatGPT and GPT-4 into your applications, websites, and workflows 
                  for intelligent conversational AI, customer support automation, and interactive experiences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom chatbot development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    API integration & optimization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Multi-platform deployment
                  </li>
                </ul>
              </div>

              {/* AI Content Creation */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Content Creation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Automate content generation for blogs, marketing materials, documentation, and social media 
                  using advanced language models tailored to your brand voice and requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Blog & article generation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Marketing copy automation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Brand voice consistency
                  </li>
                </ul>
              </div>

              {/* AI Image Generation */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Image className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Image Generation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Create stunning visual content using DALL-E, Midjourney, and custom image generation models 
                  for marketing, design, and creative projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom artwork generation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Brand-specific visuals
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    High-resolution outputs
                  </li>
                </ul>
              </div>

              {/* Code Generation */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Code Generation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Accelerate development with AI-powered code generation, documentation, testing, and 
                  debugging assistance using GitHub Copilot and custom coding models.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated code generation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Documentation automation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Code review & optimization
                  </li>
                </ul>
              </div>

              {/* AI Video Generation */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Video className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Video Generation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Create engaging video content with AI-powered video generation, editing, and enhancement 
                  tools for marketing, training, and entertainment purposes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated video creation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    AI-powered editing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Voice synthesis integration
                  </li>
                </ul>
              </div>

              {/* Custom AI Models */}
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Custom AI Models</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Develop and fine-tune custom generative AI models specifically trained on your data 
                  and requirements for specialized business applications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Domain-specific training
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Fine-tuning & optimization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Private model deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Why Choose Our Generative AI Services?
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transform your business with cutting-edge generative AI technologies and expert implementation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
                <p className="text-gray-600">
                  Rapid deployment and implementation of generative AI solutions with optimized performance 
                  and minimal downtime.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Target className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Precision Accuracy</h3>
                <p className="text-gray-600">
                  Fine-tuned models and optimized prompts ensure high-quality outputs that meet your 
                  specific business requirements and standards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <p className="text-gray-600">
                  Robust security measures, data privacy protection, and compliance with industry 
                  standards for enterprise-grade AI implementations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Support</h3>
                <p className="text-gray-600">
                  Dedicated team of AI specialists providing ongoing support, optimization, and 
                  continuous improvement of your generative AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Generative AI Use Cases
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how generative AI can transform various aspects of your business operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Bot className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Customer Service Automation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Deploy intelligent chatbots and virtual assistants that provide 24/7 customer support, 
                      handle complex queries, and escalate issues appropriately while maintaining human-like 
                      conversation quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <PenTool className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Content Marketing Automation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Automate creation of blog posts, social media content, email campaigns, and marketing 
                      copy that maintains brand consistency while scaling your content production capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Software Development Acceleration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Speed up development cycles with AI-generated code, automated testing, documentation 
                      creation, and intelligent code reviews that improve quality and reduce development time.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Document Intelligence</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Transform document processing with AI-powered summarization, translation, data extraction, 
                      and automated report generation from complex documents and data sources.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Sparkles className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Creative Content Generation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Generate unique visual content, designs, videos, and audio for marketing campaigns, 
                      product presentations, and creative projects with AI-powered creative tools.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Brain className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Personalized User Experiences</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Create dynamic, personalized experiences for users with AI-generated recommendations, 
                      customized interfaces, and adaptive content that responds to individual preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Advanced AI Technologies We Use
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leveraging the latest and most powerful generative AI models and frameworks
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-bold mb-3">OpenAI GPT Models</h3>
                <p className="text-gray-600 text-sm">GPT-4, GPT-3.5, ChatGPT, DALL-E</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-bold mb-3">Google AI</h3>
                <p className="text-gray-600 text-sm">Gemini, PaLM, Bard, Vertex AI</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-bold mb-3">Anthropic Claude</h3>
                <p className="text-gray-600 text-sm">Claude 3, Constitutional AI</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-bold mb-3">Microsoft Azure AI</h3>
                <p className="text-gray-600 text-sm">Azure OpenAI, Cognitive Services</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-bold mb-3">Hugging Face</h3>
                <p className="text-gray-600 text-sm">Transformers, Diffusers, Custom Models</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <h3 className="text-lg font-bold mb-3">Stability AI</h3>
                <p className="text-gray-600 text-sm">Stable Diffusion, Audio Generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Common questions about our generative AI services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">What is generative AI and how can it benefit my business?</h3>
                <p className="text-gray-600">
                  Generative AI refers to artificial intelligence systems that can create new content, including text, 
                  images, code, and audio. For businesses, this means automating content creation, enhancing customer 
                  interactions, accelerating development processes, and creating personalized experiences at scale.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">How do you ensure the quality and accuracy of AI-generated content?</h3>
                <p className="text-gray-600">
                  We implement multiple quality control measures including prompt engineering, fine-tuning on your 
                  specific data, human-in-the-loop validation, and continuous monitoring. Our models are trained 
                  to maintain brand consistency and meet your quality standards.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Can you integrate generative AI with our existing systems?</h3>
                <p className="text-gray-600">
                  Yes, we specialize in seamless integration with existing business systems through APIs, webhooks, 
                  and custom connectors. Whether you use CRM, CMS, e-commerce platforms, or custom applications, 
                  we ensure smooth integration without disrupting your current workflows.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">What about data privacy and security with AI models?</h3>
                <p className="text-gray-600">
                  Data security is our top priority. We implement end-to-end encryption, secure API connections, 
                  and can deploy models on-premises or in private cloud environments. We also ensure compliance 
                  with GDPR, CCPA, and other relevant data protection regulations.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">How quickly can generative AI solutions be implemented?</h3>
                <p className="text-gray-600">
                  Implementation timelines vary based on complexity. Simple integrations like ChatGPT API 
                  integration can be completed in 1-2 weeks, while custom model development and training 
                  may take 4-8 weeks. We provide detailed timelines during the consultation phase.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Do you provide training and support for our team?</h3>
                <p className="text-gray-600">
                  Absolutely! We provide comprehensive training for your team, including best practices for 
                  prompt engineering, system management, and optimization. Our ongoing support includes 
                  monitoring, updates, troubleshooting, and continuous improvement recommendations.
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
              Ready to Transform Your Business with Generative AI?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let our experts help you harness the power of generative AI to automate processes, 
              enhance creativity, and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                  Start Your AI Journey
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
                <div className="text-2xl font-bold mb-2">500+</div>
                <p className="text-orange-100">AI Models Deployed</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">95%</div>
                <p className="text-orange-100">Content Quality Score</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">24/7</div>
                <p className="text-orange-100">AI-Powered Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
