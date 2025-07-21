import Link from "next/link";
import { Button } from "../components/ui/Button";
import { Users, Award, TrendingUp, Lightbulb, CheckCircle, Heart, Shield, Target, Globe } from "lucide-react";
import { organizationSchema, aboutPageSchema } from "../../lib/schemas";

export const metadata = {
  title: "About Metic.ai | Leading AI Company in Michigan - Our Story & Mission",
  description: "Learn about Metic.ai, Michigan's premier AI company. Discover our mission to transform businesses with advanced artificial intelligence services, our expert team, and commitment to excellence.",
  keywords: "about Metic.ai, AI company Michigan, artificial intelligence team, machine learning experts, AI services company",
  authors: [{ name: "Metic.ai Team" }],
  robots: "index, follow",
  openGraph: {
    title: "About Metic.ai | Leading AI Company in Michigan - Our Story & Mission",
    description: "Learn about Metic.ai, Michigan's premier AI company. Discover our mission to transform businesses with advanced artificial intelligence services.",
    url: "https://metic.ai/about/",
    type: "website",
  },
  alternates: {
    canonical: "https://metic.ai/about/",
  },
};

export default function AboutPage() {
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
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-orange-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              About <span className="text-primary-orange">Metic.ai</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Michigan's leading artificial intelligence company, dedicated to transforming businesses 
              through innovative AI solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Welcome to Metic.ai
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are a dedicated and experienced team of professionals committed to providing exceptional 
                  <strong> Artificial Intelligence services</strong> in our industry. With a passion for excellence 
                  and a customer-centric approach, we strive to exceed expectations and deliver outstanding results.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Artificial intelligence has revolutionized numerous industries, transforming the way we live and work. 
                  Its impact on the world of technology cannot be overstated. From automating mundane tasks to predicting 
                  future trends, AI has become an indispensable tool for businesses and individuals alike.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Join us as we delve into the fascinating world of artificial intelligence and discover the possibilities 
                  it holds for innovation and progress. We explore the incredible advancements of AI and its potential 
                  to shape the future.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-orange/20 to-secondary-orange/30 rounded-2xl p-8">
                  <div className="text-center space-y-6">
                    <Lightbulb className="w-20 h-20 text-primary-orange mx-auto" />
                    <h3 className="text-2xl font-bold text-gray-800">Innovation Driven</h3>
                    <p className="text-gray-600">
                      Pioneering the future of artificial intelligence with cutting-edge solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Understanding Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                We Understand the Importance
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At <strong>Metic.ai</strong>, we understand the importance of staying ahead in today's competitive market. 
                  That's why we continuously invest in the latest technologies and innovative solutions to ensure we deliver 
                  cutting-edge solutions to our clients.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our team of <strong>Machine Learning experts</strong> stays up to date with the ever-evolving trends and 
                  best practices in the industry, allowing us to provide the most effective strategies tailored to meet our 
                  clients' unique needs.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment to excellence extends to our talented workforce. We have assembled a team of highly skilled 
                  professionals who are experts in their respective fields. From creative designers to technical wizards, 
                  our team works collaboratively to bring our clients' visions to life.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-lg text-gray-600 leading-relaxed">
                  We foster a culture of continuous learning and professional growth, empowering our employees to stay at 
                  the forefront of industry advancements and deliver exceptional results. This dedication to excellence 
                  ensures that every project we undertake meets the highest standards of quality and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These fundamental principles guide everything we do at Metic.ai
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Commitment to Excellence</h3>
                <p className="text-gray-600">
                  We strive for perfection in every project, delivering solutions that exceed expectations
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Building strong relationships based on trust, transparency, and mutual success
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity & Ethics</h3>
                <p className="text-gray-600">
                  Operating with honesty, transparency, and fairness in all our business dealings
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Globe className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community Impact</h3>
                <p className="text-gray-600">
                  Contributing to society and creating a sustainable future for generations to come
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                  Customer Satisfaction
                </h2>
                <div className="w-20 h-1 bg-primary-orange mb-8"></div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Customer satisfaction is at the core of everything we do. We believe in building strong and 
                    long-lasting relationships with our clients based on trust, transparency, and mutual success 
                    on our <strong>machine learning solutions</strong>.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We take the time to understand our clients' goals, challenges, and aspirations, allowing us 
                    to develop customized solutions that drive real, measurable results. Our client-centric approach 
                    has earned us a reputation for delivering excellence and has resulted in numerous successful partnerships.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange mr-3" />
                    <h3 className="text-lg font-semibold">Personalized Approach</h3>
                  </div>
                  <p className="text-gray-600">Tailored solutions designed specifically for your business needs</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange mr-3" />
                    <h3 className="text-lg font-semibold">Measurable Results</h3>
                  </div>
                  <p className="text-gray-600">Data-driven outcomes that demonstrate clear return on investment</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary-orange mr-3" />
                    <h3 className="text-lg font-semibold">Long-term Partnerships</h3>
                  </div>
                  <p className="text-gray-600">Ongoing support and continuous improvement of your AI solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrity & Ethics Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Integrity and Ethical Business
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  At <strong>Metic.ai</strong>, we pride ourselves on our integrity and ethical business practices. 
                  We adhere to the highest standards of professionalism and strive to operate with honesty, 
                  transparency, and fairness in all our dealings.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our clients can trust us to always act in their best interests and maintain the strictest 
                  confidentiality. We understand that trust is earned through consistent actions and ethical 
                  decision-making, which forms the foundation of every client relationship.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  In addition to our dedication to our clients, we are also committed to making a positive impact 
                  on the communities we serve. We actively participate in various charitable initiatives and give 
                  back to society in meaningful ways.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe in using our resources and expertise to contribute to the betterment of society and 
                  create a sustainable future for generations to come. This commitment extends beyond business 
                  success to meaningful social responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-orange-100 max-w-2xl mx-auto">
                Measurable results that demonstrate our commitment to excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-orange-100">AI Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-orange-100">Client Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-orange-100">Expert Team Members</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-orange-100">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the hundreds of businesses that trust Metic.ai for their AI transformation journey. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
