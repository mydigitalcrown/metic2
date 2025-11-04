import ContactLeadForm from "../components/ui/ContactLeadForm";

export const metadata = {
  title: "Contact Metic AI | Get in Touch",
  description: "Contact Metic AI for inquiries about our AI solutions, partnerships, or career opportunities.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-orange-50 py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
              Get in <span className="text-primary-orange">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your business with AI? Our experts are here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <ContactLeadForm />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">How quickly can you implement an AI solution?</h3>
                <p className="text-gray-600">
                  Implementation timelines vary based on the complexity of the solution and your specific requirements. 
                  Simple integrations can be completed in a few weeks, while more complex systems may take several months. 
                  We&apos;ll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">Do you offer custom solutions or only pre-built ones?</h3>
                <p className="text-gray-600">
                  We specialize in custom AI solutions tailored to your unique business needs. While we leverage 
                  established frameworks and approaches, every solution we develop is customized to address your 
                  specific challenges and integrate with your existing systems.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">How do you handle data privacy and security?</h3>
                <p className="text-gray-600">
                  Data privacy and security are our top priorities. We adhere to industry best practices and 
                  compliance standards, including GDPR and CCPA. All data is encrypted in transit and at rest, 
                  and we implement strict access controls and regular security audits.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">What industries do you work with?</h3>
                <p className="text-gray-600">
                  We work with clients across various industries including healthcare, finance, retail, 
                  manufacturing, and technology. Our team has specialized expertise in these sectors, 
                  understanding the unique challenges and regulatory requirements of each.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
