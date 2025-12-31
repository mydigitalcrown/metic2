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
  alternates: {
    canonical: 'https://metic.ai',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Artificial Intelligence Company Near Me | Best AI Company - Metic.ai",
    description: "Looking for the best Artificial Intelligence Company Near Me? Metic.ai is your trusted AI partner with 2100+ successful implementations. Expert AI services worldwide.",
    url: 'https://metic.ai',
    siteName: 'Metic.ai - Leading AI Company',
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
    title: "Artificial Intelligence Company Near Me | Best AI Company - Metic.ai",
    description: "Looking for the best AI Company Near Me? 2100+ successful projects. Expert AI services, machine learning solutions & automation worldwide.",
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
    google: 'your-google-verification-code-here',
    other: {
      'msvalidate.01': 'your-bing-verification-code-here',
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
