import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/Button";
import { Users, Award, TrendingUp, Lightbulb, CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Metic AI | Our Story & Mission",
  description: "Learn about Metic AI, our mission to transform businesses with advanced AI solutions, our team, and our values.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-orange-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              About <span className="text-primary-orange">Metic AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to make advanced AI accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Metic AI was founded in 2023 by a team of AI researchers and business strategists who recognized that while 
                  artificial intelligence was revolutionizing large enterprises, smaller organizations were being left behind.
                </p>
                <p>
                  Our founding team had worked at leading tech companies and research institutions where they witnessed firsthand 
                  the transformative power of AI, but also how inaccessible these technologies were to most businesses.
                </p>
                <p>
                  With this insight, Metic AI was born with a clear mission: to democratize access to advanced AI by creating 
                  solutions that are powerful yet accessible, sophisticated yet easy to implement.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-primary-orange/10 rounded-lg blur-xl"></div>
              <Image 
                src="/next.svg" 
                alt="Metic AI Founders"
                fill
                className="object-cover rounded-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600">
              We're guided by a set of principles that inform everything we do.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-primary-orange h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Innovation</h3>
              <p className="text-gray-600">
                We're constantly pushing the boundaries of what's possible with AI technology.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-orange h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of ethics in AI development and business practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary-orange h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We believe advanced AI should be available and usable for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Our diverse team brings together expertise in AI research, software engineering, 
              business strategy, and customer success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-primary-orange/10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary-orange">
                  JD
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">Dr. Jane Davis</h3>
              <p className="text-gray-500 mb-2">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                PhD in Machine Learning with 15+ years of industry experience.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-primary-orange/10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary-orange">
                  MP
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">Dr. Michael Park</h3>
              <p className="text-gray-500 mb-2">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Former AI Research Lead at Tech Giant with expertise in NLP.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-primary-orange/10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary-orange">
                  SR
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">Sarah Rodriguez</h3>
              <p className="text-gray-500 mb-2">Chief Product Officer</p>
              <p className="text-gray-600 text-sm">
                Expert in product design and UX with AI-focused applications.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-primary-orange/10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary-orange">
                  AK
                </div>
              </div>
              <h3 className="font-bold text-xl mb-1">Alex Kim</h3>
              <p className="text-gray-500 mb-2">Head of Engineering</p>
              <p className="text-gray-600 text-sm">
                Software architect specializing in scalable AI systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="mb-8">
              We're always looking for talented individuals to join our team as we build 
              the future of AI for businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary-orange border-white hover:bg-white/90 w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-transparent border border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
