import { NextResponse } from 'next/server'

// IndexNow API Key - Generate your own at https://www.indexnow.org/
// This is a placeholder - replace with your actual key after generation
export const INDEXNOW_KEY = '4d8c7e9f2a1b3c5e6d7f8a9b0c1d2e3f'

/**
 * IndexNow API - Instant URL submission to search engines
 * Supported by: Bing, Yandex, Seznam, Naver
 * Google may use this in future
 * 
 * This allows you to instantly notify search engines when content changes
 */
export async function submitUrlToIndexNow(urls: string | string[]) {
  const urlArray = Array.isArray(urls) ? urls : [urls]
  
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
        urlList: urlArray
      })
    })

    if (response.ok) {
      console.log('✅ IndexNow submission successful:', urlArray.length, 'URLs')
      return { success: true, urls: urlArray }
    } else {
      console.error('❌ IndexNow submission failed:', response.status)
      return { success: false, error: response.statusText }
    }
  } catch (error) {
    console.error('❌ IndexNow error:', error)
    return { success: false, error }
  }
}

// API Route Handler
export async function GET() {
  // Submit your most important pages for instant indexing
  const importantUrls = [
    'https://metic.ai',
    'https://metic.ai/about',
    'https://metic.ai/services',
    'https://metic.ai/contact',
    'https://metic.ai/artificial-intelligence-ai-services-in-michigan',
    'https://metic.ai/machine-learning-services-in-michigan',
  ]

  const result = await submitUrlToIndexNow(importantUrls)
  
  return NextResponse.json(result)
}
