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

  // AI location pages with Michigan prioritized
  const aiLocationPages = [
    // Michigan gets highest priority for "AI Company in Michigan"
    {
      url: `${baseUrl}/artificial-intelligence-ai-services-in-michigan`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 0.99,
    },
    // Other US states
    ...usStates.filter(state => state !== 'michigan').map(state => ({
      url: `${baseUrl}/artificial-intelligence-ai-services-in-${state}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: state === 'california' || state === 'new-york' || state === 'texas' ? 0.75 : 0.7,
    })),
    // Indian cities
    ...indianCities.map(city => ({
      url: `${baseUrl}/artificial-intelligence-ai-services-in-${city}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: city === 'bangalore' || city === 'mumbai' ? 0.72 : 0.68,
    }))
  ]

  // ML location pages with Michigan prioritized
  const mlLocationPages = [
    // Michigan gets highest priority
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
    // Other US states
    ...usStates.filter(state => state !== 'michigan' && state !== 'florida').map(state => ({
      url: `${baseUrl}/machine-learning-services-in-${state}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: state === 'california' || state === 'new-york' || state === 'texas' ? 0.72 : 0.68,
    })),
    // Indian cities
    ...indianCities.map(city => ({
      url: `${baseUrl}/machine-learning-services-in-${city}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: city === 'bangalore' || city === 'mumbai' ? 0.7 : 0.65,
    }))
  ]

  // Michigan-specific city pages (bonus for local SEO)
  const michiganCities = [
    'detroit', 'grand-rapids', 'ann-arbor', 'lansing', 'dearborn', 
    'troy', 'warren', 'sterling-heights', 'flint', 'rochester-hills'
  ]

  const michiganCityPages = michiganCities.map(city => ({
    url: `${baseUrl}/ai-company-${city}-michigan`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: city === 'detroit' || city === 'ann-arbor' ? 0.92 : 0.88,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...aiLocationPages,
    ...mlLocationPages,
    ...michiganCityPages,
  ]
}
