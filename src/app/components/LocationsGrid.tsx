import Link from "next/link";

export function LocationsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-orange">Services</span> by Location
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Artificial Intelligence, Machine Learning, and Generative AI services across major cities and states
            </p>
          </div>

          {/* US States Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">United States</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
                'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
                'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
                'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
                'Wisconsin', 'Wyoming'
              ].map((state) => {
                const slug = state.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div key={state} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-orange hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-900 text-lg mb-4">{state}</h4>
                    <div className="space-y-3">
                      <Link
                        href={`/artificial-intelligence-ai-services-in-${slug}`}
                        className="flex items-start gap-2 group text-sm text-gray-700 hover:text-primary-orange transition-colors"
                      >
                        <span className="text-primary-orange font-bold">→</span>
                        <span className="group-hover:underline">Artificial Intelligence Company in {state}</span>
                      </Link>
                      <Link
                        href={`/machine-learning-services-in-${slug}`}
                        className="flex items-start gap-2 group text-sm text-gray-700 hover:text-primary-orange transition-colors"
                      >
                        <span className="text-primary-orange font-bold">→</span>
                        <span className="group-hover:underline">Machine Learning Services in {state}</span>
                      </Link>
                      <Link
                        href={`/generative-ai-services-in-${slug}`}
                        className="flex items-start gap-2 group text-sm text-gray-700 hover:text-primary-orange transition-colors"
                      >
                        <span className="text-primary-orange font-bold">→</span>
                        <span className="group-hover:underline">Generative AI Services in {state}</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* India Cities Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">India</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Ahmedabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Delhi', 'Gurugram', 'Hyderabad',
                'Kolkata', 'Mumbai', 'Noida', 'Pune', 'Vizag'
              ].map((city) => {
                const slug = city.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div key={city} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-orange hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-gray-900 text-lg mb-4">{city}</h4>
                    <div className="space-y-3">
                      <Link
                        href={`/artificial-intelligence-ai-services-in-${slug}`}
                        className="flex items-start gap-2 group text-sm text-gray-700 hover:text-primary-orange transition-colors"
                      >
                        <span className="text-primary-orange font-bold">→</span>
                        <span className="group-hover:underline">Artificial Intelligence Company in {city}</span>
                      </Link>
                      <Link
                        href={`/machine-learning-services-in-${slug}`}
                        className="flex items-start gap-2 group text-sm text-gray-700 hover:text-primary-orange transition-colors"
                      >
                        <span className="text-primary-orange font-bold">→</span>
                        <span className="group-hover:underline">Machine Learning Services in {city}</span>
                      </Link>
                      <Link
                        href={`/generative-ai-services-in-${slug}`}
                        className="flex items-start gap-2 group text-sm text-gray-700 hover:text-primary-orange transition-colors"
                      >
                        <span className="text-primary-orange font-bold">→</span>
                        <span className="group-hover:underline">Generative AI Services in {city}</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
