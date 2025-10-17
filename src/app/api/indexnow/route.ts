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

// GET endpoint to submit important pages automatically
export async function GET() {
  const importantUrls = [
    'https://metic.ai',
    'https://metic.ai/about',
    'https://metic.ai/services',
    'https://metic.ai/contact',
    'https://metic.ai/artificial-intelligence-ai-services-in-michigan',
    'https://metic.ai/machine-learning-services-in-michigan',
  ]

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'metic.ai',
        key: INDEXNOW_KEY,
        keyLocation: `https://metic.ai/${INDEXNOW_KEY}.txt`,
        urlList: importantUrls
      })
    })

    if (response.ok || response.status === 202) {
      return NextResponse.json({ 
        success: true, 
        urls: importantUrls,
        message: 'Successfully submitted to IndexNow' 
      })
    } else {
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
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    )
  }
}
