import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../components/ui/Button";

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
              Have questions about our AI solutions? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-3 bg-primary-orange/10 p-3 rounded-md">
                    <Mail className="h-5 w-5 text-primary-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a 
                      href="mailto:hello@metic.ai" 
                      className="text-primary-orange hover:underline"
                    >
                      hello@metic.ai
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 bg-primary-orange/10 p-3 rounded-md">
                    <Phone className="h-5 w-5 text-primary-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a 
                      href="tel:+917892518414" 
                      className="text-primary-orange hover:underline"
                    >
                      +91 7892518414
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 bg-primary-orange/10 p-3 rounded-md">
                    <MapPin className="h-5 w-5 text-primary-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Visit Our Office</p>
                    <p className="text-gray-600">
                      Padmamba Nilaya, 250, 7th C Main Rd<br />
                      3rd Stage 4th Block, West of Chord Road 1st Stage<br />
                      Basaveshwar Nagar, Bengaluru, Karnataka 560079
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-medium mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center hover:bg-primary-orange/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5 text-primary-orange" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center hover:bg-primary-orange/20 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5 text-primary-orange" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center hover:bg-primary-orange/20 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5 text-primary-orange" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6" id="contact-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name *
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name *
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your Company Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="AI Consulting">AI Consulting</option>
                    <option value="Machine Learning Services">Machine Learning Services</option>
                    <option value="Custom AI Development">Custom AI Development</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Support">Technical Support</option>
                    <option value="Careers">Careers</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project and requirements..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-primary-orange resize-vertical"
                    required
                  ></textarea>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="mt-1 h-4 w-4 text-primary-orange border-gray-300 rounded focus:ring-primary-orange"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the processing of my personal data in accordance with the{" "}
                      <a href="/privacy-policy" className="text-primary-orange hover:underline">
                        Privacy Policy
                      </a>
                      *
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    id="submit-btn"
                  >
                    Send Message
                  </Button>
                  
                  <div id="form-status" className="hidden p-4 rounded-md"></div>
                </div>
              </form>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Alternative Contact Methods</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• <strong>Direct Email:</strong> <a href="mailto:hello@metic.ai?subject=Website Contact" className="text-primary-orange hover:underline">hello@metic.ai</a></p>
                  <p>• <strong>Phone:</strong> <a href="tel:+917892518414" className="text-primary-orange hover:underline">+91 7892518414</a></p>
                  <p>• <strong>Response Time:</strong> We typically respond within 24 hours</p>
                  <p>• <strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
              
              <script dangerouslySetInnerHTML={{
                __html: `
                  document.getElementById('contact-form').addEventListener('submit', async function(e) {
                    e.preventDefault();
                    
                    const submitBtn = document.getElementById('submit-btn');
                    const formStatus = document.getElementById('form-status');
                    const formData = new FormData(this);
                    
                    // Show loading state
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;
                    formStatus.className = 'hidden';
                    
                    // Collect form data
                    const data = {};
                    for (let [key, value] of formData.entries()) {
                      data[key] = value;
                    }
                    
                    try {
                      // Send to API endpoint
                      const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                      });
                      
                      const result = await response.json();
                      
                      if (response.ok) {
                        // Show success message
                        formStatus.className = 'p-4 rounded-md bg-green-50 border border-green-200';
                        formStatus.innerHTML = '<div class="text-green-800"><strong>Thank you!</strong> ' + result.message + 
                          (result.note ? '<br><small class="text-green-600">' + result.note + ' Please email us directly at <a href="mailto:hello@metic.ai" class="text-primary-orange hover:underline">hello@metic.ai</a></small>' : '') + '</div>';
                        
                        // Reset form on success
                        this.reset();
                      } else {
                        // Show error message
                        formStatus.className = 'p-4 rounded-md bg-red-50 border border-red-200';
                        formStatus.innerHTML = '<div class="text-red-800"><strong>Error:</strong> ' + (result.error || 'Something went wrong. Please try again or email us directly at <a href="mailto:hello@metic.ai" class="text-primary-orange hover:underline">hello@metic.ai</a>') + '</div>';
                      }
                    } catch (error) {
                      // Show network error
                      formStatus.className = 'p-4 rounded-md bg-red-50 border border-red-200';
                      formStatus.innerHTML = '<div class="text-red-800"><strong>Network Error:</strong> Please check your connection and try again, or email us directly at <a href="mailto:hello@metic.ai" class="text-primary-orange hover:underline">hello@metic.ai</a></div>';
                    }
                    
                    // Reset button state
                    submitBtn.textContent = 'Send Message';
                    submitBtn.disabled = false;
                  });
                `
              }} />
            </div>
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
