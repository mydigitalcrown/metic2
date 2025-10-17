import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://metic.ai'
  const buildDate = new Date().toUTCString()

  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Metic AI - Leading AI Company in Michigan</title>
    <link>${baseUrl}</link>
    <description>Latest AI solutions, machine learning services, and artificial intelligence insights from Michigan's premier AI company. Expert AI consulting and development services.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <generator>Next.js</generator>
    <image>
      <url>${baseUrl}/android-chrome-512x512.svg</url>
      <title>Metic AI</title>
      <link>${baseUrl}</link>
    </image>

    <item>
      <title>AI Company in Michigan - Metic AI Services</title>
      <link>${baseUrl}</link>
      <guid isPermaLink="true">${baseUrl}</guid>
      <pubDate>${buildDate}</pubDate>
      <description>Discover Michigan's leading AI company offering cutting-edge artificial intelligence solutions, machine learning services, and automation technology for businesses across Detroit, Grand Rapids, Ann Arbor, and all of Michigan.</description>
      <category>Artificial Intelligence</category>
      <category>Machine Learning</category>
      <category>Michigan Business</category>
    </item>

    <item>
      <title>About Metic AI - Michigan's AI Experts</title>
      <link>${baseUrl}/about</link>
      <guid isPermaLink="true">${baseUrl}/about</guid>
      <pubDate>${buildDate}</pubDate>
      <description>Learn about Metic AI's journey as Michigan's most trusted AI company. Our team of AI experts, data scientists, and machine learning engineers deliver world-class solutions.</description>
      <category>Company</category>
      <category>AI Services</category>
    </item>

    <item>
      <title>AI Integration and Deployment Services</title>
      <link>${baseUrl}/ai-integration-and-deployment</link>
      <guid isPermaLink="true">${baseUrl}/ai-integration-and-deployment</guid>
      <pubDate>${buildDate}</pubDate>
      <description>Professional AI integration and deployment services for Michigan businesses. Seamlessly integrate artificial intelligence into your existing systems with expert guidance.</description>
      <category>AI Integration</category>
      <category>Deployment</category>
    </item>

    <item>
      <title>Machine Learning Services in Michigan</title>
      <link>${baseUrl}/machine-learning-services-in-michigan</link>
      <guid isPermaLink="true">${baseUrl}/machine-learning-services-in-michigan</guid>
      <pubDate>${buildDate}</pubDate>
      <description>Advanced machine learning solutions for Michigan companies. Predictive analytics, model development, and ML implementation by certified Michigan AI experts.</description>
      <category>Machine Learning</category>
      <category>Michigan</category>
    </item>

    <item>
      <title>Artificial Intelligence Services in Michigan</title>
      <link>${baseUrl}/artificial-intelligence-ai-services-in-michigan</link>
      <guid isPermaLink="true">${baseUrl}/artificial-intelligence-ai-services-in-michigan</guid>
      <pubDate>${buildDate}</pubDate>
      <description>Comprehensive AI services for Michigan businesses. From AI strategy to implementation, Metic AI delivers results-driven artificial intelligence solutions.</description>
      <category>AI Services</category>
      <category>Michigan</category>
    </item>

    <item>
      <title>Contact Metic AI - Michigan AI Consulting</title>
      <link>${baseUrl}/contact</link>
      <guid isPermaLink="true">${baseUrl}/contact</guid>
      <pubDate>${buildDate}</pubDate>
      <description>Get in touch with Michigan's leading AI company. Free consultation for artificial intelligence projects, machine learning solutions, and AI strategy.</description>
      <category>Contact</category>
      <category>Consultation</category>
    </item>

  </channel>
</rss>`

  return new NextResponse(rssContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
