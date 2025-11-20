import Link from "next/link";
import { Button } from "../components/ui/Button";
import { MapPin, Building, Globe, Users, Star, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & ML Services Locations Worldwide | 250+ Cities & States - Metic.ai",
  description: "Discover Metic AI and Machine Learning services across 250+ locations worldwide. From US states to Indian cities, find expert artificial intelligence, ML, and generative AI solutions in your area. Global AI company serving 50+ countries.",
  keywords: [
    "AI Services Locations",
    "Machine Learning Services Locations",
    "Artificial Intelligence Company Locations", 
    "AI Company Near Me",
    "ML Services Near Me",
    "Machine Learning Services Worldwide",
    "Global AI Solutions",
    "AI Services USA",
    "AI Services India",
    "ML Services USA",
    "ML Services India",
    "Local AI Company",
    "AI Consulting Locations",
    "Regional AI Services",
    "AI Implementation Locations",
    "Business AI Solutions Worldwide",
    "Enterprise AI Services Global",
    "AI Development Company Locations",
    "International AI Services",
    "AI Transformation Services Locations",
    "Custom AI Solutions Worldwide",
    "AI Strategy Consulting Global",
    "Machine Learning Implementation Locations",
    "AI Innovation Services Worldwide",
    "Predictive Analytics Services Locations",
    "Deep Learning Services Worldwide"
  ],
  alternates: {
    canonical: "https://metic.ai/locations/"
  },
  openGraph: {
    title: "AI & ML Services Locations Worldwide | 250+ Cities & States - Metic.ai",
    description: "Discover Metic AI and Machine Learning services across 250+ locations worldwide. From US states to Indian cities, find expert artificial intelligence, ML, and generative AI solutions in your area.",
    url: "https://metic.ai/locations/",
    siteName: "Metic.ai - Global AI Services",
    type: "website",
  }
};

export default function LocationsPage() {
  // US States
  const usStates = [
    { name: "Alabama", slug: "alabama" },
    { name: "Alaska", slug: "alaska" }, 
    { name: "Arizona", slug: "arizona" },
    { name: "Arkansas", slug: "arkansas" },
    { name: "California", slug: "california" },
    { name: "Colorado", slug: "colorado" },
    { name: "Connecticut", slug: "connecticut" },
    { name: "Delaware", slug: "delaware" },
    { name: "Florida", slug: "florida" },
    { name: "Georgia", slug: "georgia" },
    { name: "Hawaii", slug: "hawaii" },
    { name: "Idaho", slug: "idaho" },
    { name: "Illinois", slug: "illinois" },
    { name: "Indiana", slug: "indiana" },
    { name: "Iowa", slug: "iowa" },
    { name: "Kansas", slug: "kansas" },
    { name: "Kentucky", slug: "kentucky" },
    { name: "Louisiana", slug: "louisiana" },
    { name: "Maine", slug: "maine" },
    { name: "Maryland", slug: "maryland" },
    { name: "Massachusetts", slug: "massachusetts" },
    { name: "Michigan", slug: "michigan" },
    { name: "Minnesota", slug: "minnesota" },
    { name: "Mississippi", slug: "mississippi" },
    { name: "Missouri", slug: "missouri" },
    { name: "Montana", slug: "montana" },
    { name: "Nebraska", slug: "nebraska" },
    { name: "Nevada", slug: "nevada" },
    { name: "New Hampshire", slug: "new-hampshire" },
    { name: "New Jersey", slug: "new-jersey" },
    { name: "New Mexico", slug: "new-mexico" },
    { name: "New York", slug: "new-york" },
    { name: "North Carolina", slug: "north-carolina" },
    { name: "North Dakota", slug: "north-dakota" },
    { name: "Ohio", slug: "ohio" },
    { name: "Oklahoma", slug: "oklahoma" },
    { name: "Oregon", slug: "oregon" },
    { name: "Pennsylvania", slug: "pennsylvania" },
    { name: "Rhode Island", slug: "rhode-island" },
    { name: "South Carolina", slug: "south-carolina" },
    { name: "South Dakota", slug: "south-dakota" },
    { name: "Tennessee", slug: "tennessee" },
    { name: "Texas", slug: "texas" },
    { name: "Utah", slug: "utah" },
    { name: "Vermont", slug: "vermont" },
    { name: "Virginia", slug: "virginia" },
    { name: "Washington", slug: "washington" },
    { name: "West Virginia", slug: "west-virginia" },
    { name: "Wisconsin", slug: "wisconsin" },
    { name: "Wyoming", slug: "wyoming" }
  ];

  // Indian Cities  
  const indianCities = [
    { name: "Ahmedabad", slug: "ahmedabad" },
    { name: "Bangalore", slug: "bangalore" },
    { name: "Chennai", slug: "chennai" },
    { name: "Coimbatore", slug: "coimbatore" },
    { name: "Delhi", slug: "delhi" },
    { name: "Gurugram", slug: "gurugram" },
    { name: "Hyderabad", slug: "hyderabad" },
    { name: "Kolkata", slug: "kolkata" },
    { name: "Mumbai", slug: "mumbai" },
    { name: "Noida", slug: "noida" },
    { name: "Pune", slug: "pune" },
    { name: "Vizag", slug: "vizag" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-amber-50 py-20 md:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-orange/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <span className="px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 text-primary-orange text-sm font-bold inline-flex items-center gap-2">
                <Globe className="w-4 h-4" />
                250+ Service Locations
              </span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-8">
              <strong>AI & ML Services</strong>
              <br />
              <span className="bg-gradient-to-r from-primary-orange via-secondary-orange to-primary-orange bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                <strong>Worldwide</strong>
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-12">
              Find <strong className="text-primary-orange">expert artificial intelligence and machine learning solutions</strong> in your location. 
              Serving <strong className="text-primary-orange">50 US states</strong> and <strong className="text-primary-orange">12 major Indian cities</strong> 
              with world-class AI, ML, and generative AI services.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange mb-2">250+</div>
                <div className="text-sm text-gray-600">Service Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange mb-2">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange mb-2">50+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange mb-2">5.0</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* US States Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">AI Services in </span>
              <span className="text-primary-orange">United States</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive artificial intelligence and machine learning services across all 50 US states
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {usStates.map((state) => (
              <Link 
                key={state.slug}
                href={`/artificial-intelligence-ai-services-in-${state.slug}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-orange/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-primary-orange transition-colors">
                        {state.name}
                      </div>
                      <div className="text-sm text-gray-500">AI Services</div>
                    </div>
                    <MapPin className="w-5 h-5 text-primary-orange group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Cities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">AI Services in </span>
              <span className="text-primary-orange">India</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading AI solutions in India's top technology and business hubs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {indianCities.map((city) => (
              <Link 
                key={city.slug}
                href={`/artificial-intelligence-ai-services-in-${city.slug}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary-orange/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-lg text-gray-900 group-hover:text-primary-orange transition-colors">
                        {city.name}
                      </div>
                      <div className="text-sm text-gray-500">AI Solutions</div>
                    </div>
                    <Building className="w-6 h-6 text-primary-orange group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Learning US States Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Machine Learning Services in </span>
              <span className="text-primary-orange">United States</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced machine learning and predictive analytics across all 50 US states
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {usStates.map((state) => (
              <Link 
                key={state.slug}
                href={`/machine-learning-services-in-${state.slug}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-secondary-orange/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-secondary-orange transition-colors">
                        {state.name}
                      </div>
                      <div className="text-sm text-gray-500">ML Services</div>
                    </div>
                    <MapPin className="w-5 h-5 text-secondary-orange group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Learning Indian Cities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Machine Learning Services in </span>
              <span className="text-primary-orange">India</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert machine learning solutions in India's major cities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {indianCities.map((city) => (
              <Link 
                key={city.slug}
                href={`/machine-learning-services-in-${city.slug}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-secondary-orange/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-lg text-gray-900 group-hover:text-secondary-orange transition-colors">
                        {city.name}
                      </div>
                      <div className="text-sm text-gray-500">ML Solutions</div>
                    </div>
                    <Building className="w-6 h-6 text-secondary-orange group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gray-900">Available </span>
              <span className="text-primary-orange">AI Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and machine learning solutions available in all locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-orange/5 to-secondary-orange/5 rounded-xl p-8 border border-primary-orange/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-primary-orange" />
                Artificial Intelligence Services
              </h3>
              <p className="text-gray-600 mb-6">
                Complete AI solutions including custom development, integration, consulting, and implementation services.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Custom AI Development</li>
                <li>• AI Strategy Consulting</li>
                <li>• AI Integration & Deployment</li>
                <li>• Generative AI Solutions</li>
                <li>• AI Automation Systems</li>
              </ul>
              <Link href="/services">
                <Button className="bg-primary-orange hover:bg-secondary-orange">
                  View AI Services <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-secondary-orange/5 to-primary-orange/5 rounded-xl p-8 border border-secondary-orange/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-secondary-orange" />
                Machine Learning Services
              </h3>
              <p className="text-gray-600 mb-6">
                Advanced machine learning solutions for data analysis, prediction, and intelligent automation.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Machine Learning Models</li>
                <li>• Predictive Analytics</li>
                <li>• Data Engineering</li>
                <li>• Computer Vision</li>
                <li>• Natural Language Processing</li>
              </ul>
              <Link href="/machine-learning">
                <Button className="bg-secondary-orange hover:bg-primary-orange">
                  View ML Services <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 text-white/90">
              Connect with our AI experts in your location and discover how artificial intelligence can drive your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-primary-orange hover:bg-white/90">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" className="border border-white text-white hover:bg-white/10">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}