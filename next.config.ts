import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize performance for production
  poweredByHeader: false,
  
  // Enable trailing slashes to match canonical URLs
  trailingSlash: true,
  
  // Enable compression
  compress: true,
  
  // Optimize images for Core Web Vitals (LCP optimization)
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Optimize for mobile (CLS - Cumulative Layout Shift)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Enable experimental features for better performance (INP optimization)
  experimental: {
    scrollRestoration: true,
  },
  
  // Security headers for SEO credibility
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Cache headers for performance optimization
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate'
          }
        ]
      },
      // Static assets caching (1 week)
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable'
          }
        ]
      },
      // Images caching (30 days)
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, immutable'
          }
        ]
      }
    ];
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Redirect www to non-www (if DNS ever gets configured)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.metic.ai',
          },
        ],
        destination: 'https://metic.ai/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
