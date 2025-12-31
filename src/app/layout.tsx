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
  title: "Artificial Intelligence Company Near Me | Best AI Company - Metic.ai",
  description: "Looking for the best Artificial Intelligence Company Near Me? Metic.ai is your trusted AI partner with 2100+ successful implementations. Expert AI services, machine learning solutions & custom AI development. Get your free consultation today!",
  keywords: [
    "Artificial Intelligence Company Near Me",
    "AI Company Near Me", 
    "Best AI Company Near Me",
    "Artificial Intelligence Company Nearby",
    "Local AI Company",
    "AI Services Near Me",
    "Machine Learning Company Near Me",
    "AI Development Company Near Me",
    "AI Consulting Near Me",
    "Top AI Company Near Me",
    "Custom AI Solutions Near Me",
    "AI Implementation Services",
    "Enterprise AI Solutions",
    "AI Strategy Consulting",
    "Machine Learning Services",
    "Deep Learning Solutions",
    "AI Automation Services",
    "Business Intelligence AI",
    "Predictive Analytics Company",
    "AI Transformation Services",
    "Generative AI Solutions",
    "Computer Vision Services",
    "Natural Language Processing",
    "AI Integration Services"
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
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
    google: 'ABC123XYZ...',
    other: {
      'msvalidate.01': 'DEF456UVW...',
    },
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
