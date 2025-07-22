import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://metic.ai'
  const lastModified = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]

  // Service pages
  const servicePages = [
    'ai-integration-and-deployment',
    'generative-ai-services',
    'custom-ai-development',
    'data-engineering',
    'data-insights',
    'machine-learning',
  ].map(page => ({
    url: `${baseUrl}/${page}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
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

  // AI location pages
  const aiLocationPages = [
    ...usStates.map(state => ({
      url: `${baseUrl}/artificial-intelligence-ai-services-in-${state}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...indianCities.map(city => ({
      url: `${baseUrl}/artificial-intelligence-ai-services-in-${city}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  ]

  // ML location pages
  const mlLocationPages = [
    ...usStates.map(state => ({
      url: `${baseUrl}/machine-learning-services-in-${state}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...indianCities.map(city => ({
      url: `${baseUrl}/machine-learning-services-in-${city}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  ]

  return [
    ...staticPages,
    ...servicePages,
    ...aiLocationPages,
    ...mlLocationPages,
  ]
}
