import { Star } from 'lucide-react';

interface Testimonial {
  initials: string;
  name: string;
  company: string;
  rating: number;
  review: string;
  metric: string;
  metricLabel: string;
  subMetric: string;
  gradientFrom: string;
  gradientTo: string;
}

const testimonials: Testimonial[] = [
  {
    initials: "JM",
    name: "James Mitchell",
    company: "Tech Solutions Inc.",
    rating: 5,
    review: "Metic.ai transformed our business operations completely! Their ChatGPT integration and Custom GPT development increased our productivity by 60% and reduced content creation time significantly. The team's expertise and support throughout the implementation process was exceptional.",
    metric: "60%",
    metricLabel: "Productivity Increase",
    subMetric: "ROI: 450% within 8 months",
    gradientFrom: "from-primary-orange",
    gradientTo: "to-secondary-orange"
  },
  {
    initials: "SM",
    name: "Sarah Martinez",
    company: "Global Manufacturing Corp",
    rating: 5,
    review: "Working with Metic.ai has been a game-changer for our business processes. Their AI image generation and content automation reduced manual work by 75% and improved our marketing efficiency dramatically. Outstanding Generative AI company with proven results!",
    metric: "75%",
    metricLabel: "Manual Work Reduction",
    subMetric: "Content output: +85%",
    gradientFrom: "from-secondary-orange",
    gradientTo: "to-primary-orange"
  },
  {
    initials: "RK",
    name: "Robert Kim",
    company: "FinanceHub Solutions",
    rating: 5,
    review: "Metic.ai delivered exceptional LLM integration for our customer service platform. Their GPT-4 powered chatbots improved our customer response rate by 92% while enhancing customer satisfaction. Best Generative AI development company we've worked with!",
    metric: "92%",
    metricLabel: "Response Rate Improvement",
    subMetric: "Cost savings: $4.2M annually",
    gradientFrom: "from-primary-orange",
    gradientTo: "to-secondary-orange"
  },
  {
    initials: "EC",
    name: "Emily Chen",
    company: "HealthCare Innovations",
    rating: 5,
    review: "Metic.ai's Generative AI solutions revolutionized our patient communication system. Their AI-powered content generation reduced documentation time by 45% and improved patient engagement significantly. Their healthcare expertise and dedicated support is unmatched.",
    metric: "45%",
    metricLabel: "Documentation Time Reduction",
    subMetric: "Patient satisfaction: +68%",
    gradientFrom: "from-secondary-orange",
    gradientTo: "to-primary-orange"
  },
  {
    initials: "DW",
    name: "David Wilson",
    company: "Retail Dynamics Group",
    rating: 5,
    review: "Metic.ai's AI content creation system transformed our marketing operations. We achieved 58% reduction in content production costs and 40% improvement in engagement rates. Their Generative AI expertise delivered measurable business impact!",
    metric: "58%",
    metricLabel: "Content Cost Reduction",
    subMetric: "Engagement: +40%",
    gradientFrom: "from-primary-orange",
    gradientTo: "to-secondary-orange"
  },
  {
    initials: "LP",
    name: "Lisa Park",
    company: "Transportation Systems Ltd",
    rating: 5,
    review: "Metic.ai's Custom GPT solution automated our customer communications and reduced response time by 38%. Their intelligent chatbots and AI automation saved us millions. Exceptional Generative AI company with deep industry knowledge!",
    metric: "38%",
    metricLabel: "Response Time Reduction",
    subMetric: "Customer satisfaction: +52%",
    gradientFrom: "from-secondary-orange",
    gradientTo: "to-primary-orange"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl p-12 md:p-16 border-2 border-primary-orange/20 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-xl border-2 border-primary-orange/20 mb-8 transform hover:scale-105 transition-transform">
          <Star className="w-5 h-5 text-primary-orange" />
          <span className="text-sm font-bold text-gray-800">CLIENT SUCCESS STORIES</span>
          <Star className="w-5 h-5 text-primary-orange" />
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Generative AI Implementation <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">Success Stories</span>
        </h3>
        <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real results from businesses that transformed their operations with Metic.ai's Generative AI solutions
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-8 shadow-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all group transform hover:scale-105"
          >
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="font-bold text-white text-lg">{testimonial.initials}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
                <div className="flex mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed text-sm">
              "{testimonial.review}"
            </p>
            <div className={`bg-gradient-to-r ${testimonial.gradientFrom}/10 ${testimonial.gradientTo}/10 rounded-xl p-4`}>
              <div className={`text-4xl font-bold bg-gradient-to-r ${testimonial.gradientFrom} ${testimonial.gradientTo} bg-clip-text text-transparent mb-2`}>
                {testimonial.metric}
              </div>
              <div className="text-sm text-gray-600 font-medium">{testimonial.metricLabel}</div>
              <div className="text-xs text-gray-500 mt-1">{testimonial.subMetric}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Success Metrics */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-primary-orange/20 transform hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-primary-orange mb-2">50+</div>
          <div className="text-sm text-gray-600">Projects Completed</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-secondary-orange/20 transform hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-secondary-orange mb-2">99.5%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-primary-orange/20 transform hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-primary-orange mb-2">5.2x</div>
          <div className="text-sm text-gray-600">Average ROI</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-secondary-orange/20 transform hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-secondary-orange mb-2">98%</div>
          <div className="text-sm text-gray-600">Client Retention</div>
        </div>
      </div>
    </div>
  );
}
