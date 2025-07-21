import Link from "next/link";
import { Button } from "../components/ui/Button";
import { 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  User,
  Tag,
  ArrowRight,
  Brain,
  Database,
  Code,
  BarChart3,
  Zap,
  Cloud,
  Search,
  Filter,
  Clock
} from "lucide-react";

export const metadata = {
  title: "AI & Data Science Blog | Latest Insights, Trends & Best Practices - Metic.ai",
  description: "Stay updated with the latest AI, machine learning, and data science insights. Expert articles, tutorials, case studies, and industry trends from the Metic.ai team.",
  keywords: "AI blog, machine learning blog, data science articles, AI trends, ML tutorials, data engineering insights, artificial intelligence news, tech blog, AI case studies",
  authors: [{ name: "Metic.ai Editorial Team" }],
  robots: "index, follow",
  openGraph: {
    title: "AI & Data Science Blog | Latest Insights, Trends & Best Practices - Metic.ai",
    description: "Stay updated with the latest AI, machine learning, and data science insights from industry experts.",
    url: "https://metic.ai/blog/",
    type: "website",
    images: [
      {
        url: "https://metic.ai/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Metic.ai AI & Data Science Blog",
      },
    ],
  },
  alternates: {
    canonical: "https://metic.ai/blog/",
  },
};

// Mock blog posts data (in a real app, this would come from a CMS or database)
const featuredPosts = [
  {
    id: 1,
    title: "The Future of Generative AI: Trends and Predictions for 2025",
    excerpt: "Explore the latest developments in generative AI, from multimodal models to enterprise adoption strategies that will shape the coming year.",
    author: "Dr. Sarah Chen",
    date: "2025-01-15",
    category: "Generative AI",
    readTime: "8 min read",
    image: "/blog/generative-ai-2025.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable Machine Learning Pipelines with MLOps",
    excerpt: "Learn best practices for implementing MLOps to streamline your machine learning workflow from development to production deployment.",
    author: "Mark Rodriguez",
    date: "2025-01-12",
    category: "Machine Learning",
    readTime: "12 min read",
    image: "/blog/mlops-pipelines.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Data Engineering Best Practices for Real-Time Analytics",
    excerpt: "Discover how to build robust data pipelines that support real-time analytics and enable instant business decision-making.",
    author: "Emily Johnson",
    date: "2025-01-10",
    category: "Data Engineering",
    readTime: "10 min read",
    image: "/blog/realtime-analytics.jpg",
    featured: true
  }
];

const recentPosts = [
  {
    id: 4,
    title: "Custom AI Model Development: From Concept to Production",
    excerpt: "A comprehensive guide to developing custom AI models tailored to specific business requirements and deployment considerations.",
    author: "Alex Kumar",
    date: "2025-01-08",
    category: "Custom AI",
    readTime: "15 min read",
    image: "/blog/custom-ai-development.jpg"
  },
  {
    id: 5,
    title: "Transforming Business Intelligence with Advanced Analytics",
    excerpt: "How modern BI tools combined with AI can provide deeper insights and drive better business outcomes.",
    author: "Lisa Wang",
    date: "2025-01-05",
    category: "Data Insights",
    readTime: "7 min read",
    image: "/blog/advanced-bi.jpg"
  },
  {
    id: 6,
    title: "Edge AI: Bringing Machine Learning to IoT Devices",
    excerpt: "Explore the challenges and opportunities of deploying AI models on edge devices for IoT applications.",
    author: "James Mitchell",
    date: "2025-01-03",
    category: "Edge AI",
    readTime: "9 min read",
    image: "/blog/edge-ai-iot.jpg"
  },
  {
    id: 7,
    title: "Data Privacy and AI: Navigating Compliance in 2025",
    excerpt: "Understanding the evolving landscape of data privacy regulations and their impact on AI development.",
    author: "Dr. Rachel Green",
    date: "2024-12-28",
    category: "AI Ethics",
    readTime: "11 min read",
    image: "/blog/ai-privacy-compliance.jpg"
  },
  {
    id: 8,
    title: "Vector Databases: The Foundation of Modern AI Applications",
    excerpt: "Why vector databases are becoming essential for AI applications and how to choose the right solution.",
    author: "Tom Bradley",
    date: "2024-12-25",
    category: "AI Infrastructure",
    readTime: "8 min read",
    image: "/blog/vector-databases.jpg"
  },
  {
    id: 9,
    title: "ROI Measurement for AI Projects: A Practical Framework",
    excerpt: "Learn how to measure and demonstrate the return on investment for your AI and machine learning initiatives.",
    author: "Michael Davis",
    date: "2024-12-22",
    category: "AI Strategy",
    readTime: "13 min read",
    image: "/blog/ai-roi-measurement.jpg"
  }
];

const categories = [
  "All",
  "Generative AI",
  "Machine Learning",
  "Data Engineering",
  "Data Insights",
  "Custom AI",
  "AI Strategy",
  "AI Ethics",
  "Edge AI",
  "AI Infrastructure"
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              AI & Data Science <span className="text-primary-orange">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, tutorials, and industry trends in 
              artificial intelligence, machine learning, and data science from our team of specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#featured">
                <Button variant="primary" size="lg">
                  Read Latest Articles
                </Button>
              </Link>
              <Link href="#newsletter">
                <Button variant="outline" size="lg">
                  Subscribe to Newsletter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0 
                        ? "bg-primary-orange text-white" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id="featured" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Featured <span className="text-primary-orange">Articles</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Latest insights and expert perspectives on AI and data science trends
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-blue-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-12 h-12 text-primary-orange mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Featured Article</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="bg-primary-orange/10 text-primary-orange px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-orange transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-1 text-primary-orange hover:text-primary-orange/80 font-medium text-sm"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Recent <span className="text-primary-orange">Articles</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our latest articles covering the full spectrum of AI and data science topics
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-blue-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <Brain className="w-10 h-10 text-gray-600 mx-auto mb-2" />
                        <p className="text-xs text-gray-500">Article</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary-orange transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-1 text-primary-orange hover:text-primary-orange/80 font-medium text-sm"
                      >
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                Explore by <span className="text-primary-orange">Category</span>
              </h2>
              <div className="w-20 h-1 bg-primary-orange mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dive deep into specific areas of AI and data science that interest you most
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/category/generative-ai" className="group">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
                  <Brain className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Generative AI</h3>
                  <p className="text-purple-100 text-sm mb-4">Latest developments in ChatGPT, DALL-E, and custom generative models</p>
                  <div className="flex items-center text-sm">
                    <span>12 articles</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/category/machine-learning" className="group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
                  <TrendingUp className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                  <p className="text-blue-100 text-sm mb-4">Advanced ML techniques, algorithms, and best practices</p>
                  <div className="flex items-center text-sm">
                    <span>18 articles</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/category/data-engineering" className="group">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
                  <Database className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
                  <p className="text-green-100 text-sm mb-4">ETL pipelines, data architecture, and infrastructure</p>
                  <div className="flex items-center text-sm">
                    <span>15 articles</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/category/data-insights" className="group">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
                  <BarChart3 className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Data Insights</h3>
                  <p className="text-orange-100 text-sm mb-4">Business intelligence, analytics, and visualization</p>
                  <div className="flex items-center text-sm">
                    <span>14 articles</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/category/ai-strategy" className="group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
                  <Zap className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">AI Strategy</h3>
                  <p className="text-red-100 text-sm mb-4">Business strategy, ROI, and AI implementation</p>
                  <div className="flex items-center text-sm">
                    <span>10 articles</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/category/ai-infrastructure" className="group">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
                  <Cloud className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">AI Infrastructure</h3>
                  <p className="text-indigo-100 text-sm mb-4">Cloud platforms, deployment, and scaling AI systems</p>
                  <div className="flex items-center text-sm">
                    <span>8 articles</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section id="newsletter" className="py-20 bg-primary-orange text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Stay Updated with AI Insights
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest AI and data science articles, 
              tutorials, and industry insights delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" className="bg-white text-primary-orange hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
            
            <p className="text-orange-200 text-sm mt-4">
              No spam, unsubscribe at any time. Read our privacy policy.
            </p>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">500+</div>
                <p className="text-orange-100">Articles Published</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">50K+</div>
                <p className="text-orange-100">Newsletter Subscribers</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Weekly</div>
                <p className="text-orange-100">New Content</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
