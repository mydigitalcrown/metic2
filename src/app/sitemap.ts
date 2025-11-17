import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://metic.ai'
  const lastModified = new Date()

  // Static pages with optimized priorities
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/custom-ai-development`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.98,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
  ]

  // Service pages with optimized priorities
  const servicePages = [
    { slug: 'ai-integration-and-deployment', priority: 0.85 },
    { slug: 'generative-ai-services', priority: 0.85 },
    { slug: 'custom-ai-development', priority: 0.85 },
    { slug: 'data-engineering', priority: 0.8 },
    { slug: 'data-insights', priority: 0.8 },
    { slug: 'machine-learning', priority: 0.85 },
  ].map(page => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: page.priority,
  }))

  // US states for AI services
  const usStates = [
    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
    'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
    'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
    'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
    'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
    'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
    'wisconsin', 'wyoming'
  ]

  // Indian cities for AI services
  const indianCities = [
    'mumbai', 'delhi', 'bangalore', 'hyderabad', 'ahmedabad', 'chennai', 'kolkata',
    'pune', 'noida', 'gurugram', 'coimbatore', 'vizag'
  ]

  // AI location pages with India and Michigan prioritized
  const aiLocationPages = [
    // India gets highest priority for national market
    {
      url: `${baseUrl}/artificial-intelligence-ai-services-in-india`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.98,
    },
    // Michigan gets highest priority for "AI Company in Michigan"
    {
      url: `${baseUrl}/artificial-intelligence-ai-services-in-michigan`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.99,
    },
    // Kolkata - boost for indexing
    {
      url: `${baseUrl}/artificial-intelligence-ai-services-in-kolkata`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.82,
    },
    // Other US states
    ...usStates.filter(state => state !== 'michigan').map(state => ({
      url: `${baseUrl}/artificial-intelligence-ai-services-in-${state}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: state === 'california' || state === 'new-york' || state === 'texas' ? 0.75 : 0.7,
    })),
    // Other Indian cities
    ...indianCities.filter(city => city !== 'kolkata').map(city => ({
      url: `${baseUrl}/artificial-intelligence-ai-services-in-${city}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: city === 'bangalore' || city === 'mumbai' ? 0.72 : 0.68,
    }))
  ]

  // ML location pages with India and Michigan prioritized
  const mlLocationPages = [
    // India gets highest priority (national market)
    {
      url: `${baseUrl}/machine-learning-services-in-india`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.98,
    },
    // Michigan gets high priority
    {
      url: `${baseUrl}/machine-learning-services-in-michigan`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    // Florida gets high priority (recently optimized)
    {
      url: `${baseUrl}/machine-learning-services-in-florida`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    // Kolkata - boost for indexing
    {
      url: `${baseUrl}/machine-learning-services-in-kolkata`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.80,
    },
    // Other US states
    ...usStates.filter(state => state !== 'michigan' && state !== 'florida').map(state => ({
      url: `${baseUrl}/machine-learning-services-in-${state}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: state === 'california' || state === 'new-york' || state === 'texas' ? 0.72 : 0.68,
    })),
    // Other Indian cities
    ...indianCities.filter(city => city !== 'kolkata').map(city => ({
      url: `${baseUrl}/machine-learning-services-in-${city}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: city === 'bangalore' || city === 'mumbai' ? 0.7 : 0.65,
    }))
  ]

  // Generative AI location pages with high priority
  const generativeAILocationPages = [
    // US states for Generative AI - Prioritize recently optimized
    {
      url: `${baseUrl}/generative-ai-services-in-louisiana`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.92, // Recently fixed and optimized
    },
    {
      url: `${baseUrl}/generative-ai-services-in-maine`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.92, // Recently rebuilt and optimized
    },
    // Other high-priority US states
    ...usStates.filter(state => state !== 'louisiana' && state !== 'maine').map(state => ({
      url: `${baseUrl}/generative-ai-services-in-${state}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: state === 'california' || state === 'michigan' || state === 'new-york' || state === 'texas' || state === 'florida' || state === 'georgia' ? 0.80 : 0.75,
    })),
    // Indian cities for Generative AI - Prioritize Kolkata
    {
      url: `${baseUrl}/generative-ai-services-in-kolkata`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.85, // Boost Kolkata for indexing
    },
    // Other Indian cities
    ...indianCities.filter(city => city !== 'kolkata').map(city => ({
      url: `${baseUrl}/generative-ai-services-in-${city}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: city === 'bangalore' || city === 'hyderabad' || city === 'mumbai' || city === 'delhi' ? 0.78 : 0.73,
    }))
  ]

  return [
    ...staticPages,
    ...servicePages,
    ...aiLocationPages,
    ...mlLocationPages,
    ...generativeAILocationPages,
  ]
}
