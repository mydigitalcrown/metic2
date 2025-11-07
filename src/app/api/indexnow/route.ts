import { NextResponse } from 'next/server'

// IndexNow API Key - This key is used to verify ownership
const INDEXNOW_KEY = '4d8c7e9f2a1b3c5e6d7f8a9b0c1d2e3f'

/**
 * IndexNow API - Instant URL submission to search engines
 * Supported by: Bing, Yandex, Seznam, Naver
 * 
 * This endpoint allows you to instantly notify search engines when content changes
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { urls } = body
    
    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      )
    }

    // Submit to IndexNow API
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'metic.ai',
        key: INDEXNOW_KEY,
        keyLocation: `https://metic.ai/${INDEXNOW_KEY}.txt`,
        urlList: urls
      })
    })

    if (response.ok || response.status === 202) {
      console.log('✅ IndexNow submission successful:', urls.length, 'URLs')
      return NextResponse.json({ 
        success: true, 
        urls: urls,
        message: `Successfully submitted ${urls.length} URLs to IndexNow`
      })
    } else {
      console.error('❌ IndexNow submission failed:', response.status, response.statusText)
      return NextResponse.json(
        { 
          success: false, 
          error: response.statusText,
          status: response.status 
        },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error('❌ IndexNow error:', error)
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    )
  }
}

// GET endpoint to submit ALL pages automatically for maximum discoverability
export async function GET() {
  // US States
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

  // Indian Cities
  const indianCities = [
    'mumbai', 'delhi', 'bangalore', 'hyderabad', 'ahmedabad', 'chennai', 'kolkata',
    'pune', 'noida', 'gurugram', 'coimbatore', 'vizag'
  ]

  // Generate all location URLs
  const aiUrls = [
    ...usStates.map(state => `https://metic.ai/artificial-intelligence-ai-services-in-${state}`),
    ...indianCities.map(city => `https://metic.ai/artificial-intelligence-ai-services-in-${city}`)
  ]

  const mlUrls = [
    ...usStates.map(state => `https://metic.ai/machine-learning-services-in-${state}`),
    ...indianCities.map(city => `https://metic.ai/machine-learning-services-in-${city}`)
  ]

  // Core pages
  const coreUrls = [
    'https://metic.ai',
    'https://metic.ai/about',
    'https://metic.ai/services', 
    'https://metic.ai/locations',
    'https://metic.ai/contact',
    'https://metic.ai/machine-learning',
    'https://metic.ai/custom-ai-development',
    'https://metic.ai/ai-integration-and-deployment',
    'https://metic.ai/data-engineering',
    'https://metic.ai/data-insights',
    'https://metic.ai/generative-ai-services'
  ]

  // Combine all URLs
  const allUrls = [...coreUrls, ...aiUrls, ...mlUrls]

  try {
    console.log(`🚀 Submitting ${allUrls.length} URLs to IndexNow API...`)

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'metic.ai',
        key: INDEXNOW_KEY,
        keyLocation: `https://metic.ai/${INDEXNOW_KEY}.txt`,
        urlList: allUrls
      })
    })

    if (response.ok || response.status === 202) {
      console.log(`✅ IndexNow submission successful: ${allUrls.length} URLs submitted`)
      return NextResponse.json({ 
        success: true, 
        totalUrls: allUrls.length,
        corePages: coreUrls.length,
        aiPages: aiUrls.length,
        mlPages: mlUrls.length,
        message: `Successfully submitted all ${allUrls.length} pages to search engines via IndexNow` 
      })
    } else {
      console.error('❌ IndexNow submission failed:', response.status, response.statusText)
      return NextResponse.json(
        { 
          success: false, 
          error: response.statusText,
          status: response.status 
        },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error('❌ IndexNow error:', error)
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    )
  }
}
