import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Company in Michigan | Metic AI - Leading Michigan AI Solutions",
  description: "Metic AI is Michigan's premier AI company providing artificial intelligence solutions, machine learning services, and automation technology to businesses in Detroit, Grand Rapids, Ann Arbor, and across Michigan. Expert AI consulting since 2015.",
  keywords: [
    "AI company Michigan",
    "artificial intelligence Michigan",
    "AI company in Michigan",
    "Michigan AI services",
    "AI consulting Michigan",
    "machine learning Michigan",
    "AI solutions Michigan",
    "Detroit AI company",
    "Grand Rapids AI",
    "Ann Arbor AI company",
    "Michigan automation",
    "AI development Michigan",
    "Michigan tech company",
    "AI services Detroit",
    "Michigan AI firm",
    "best AI company Michigan",
    "Michigan artificial intelligence",
    "AI implementation Michigan",
    "Michigan machine learning services"
  ],
  authors: [{ name: "Metic AI" }],
  creator: "Metic AI",
  publisher: "Metic AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://metic.ai'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/favicon.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "AI Company in Michigan | Metic AI - Leading Michigan AI Solutions",
    description: "Michigan's most trusted AI company. Expert artificial intelligence solutions, machine learning, and automation services for Michigan businesses.",
    url: 'https://metic.ai',
    siteName: 'Metic AI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Metic AI - Leading AI Company in Michigan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Company in Michigan | Metic AI",
    description: "Michigan's premier AI company providing cutting-edge artificial intelligence solutions.",
    creator: '@metic_ai',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
  classification: 'Artificial Intelligence Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link 
          rel="alternate" 
          type="application/rss+xml" 
          title="Metic AI RSS Feed" 
          href="https://metic.ai/rss.xml" 
        />
        <link 
          rel="canonical" 
          href="https://metic.ai" 
        />
      </head>
      <body
        className="min-h-screen bg-white font-sans antialiased flex flex-col"
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
