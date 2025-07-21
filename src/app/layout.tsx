import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import { Analytics } from "../components/Analytics";
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
  title: "Artificial Intelligence Company in Michigan | Top AI Company In Michigan - Metic AI",
  description: "Leading AI company in Michigan delivering intelligent solutions that transform businesses. Expert AI integration, custom development, machine learning, and data engineering services. Transform your business with Michigan's top AI experts.",
  keywords: "AI company Michigan, artificial intelligence Michigan, machine learning Michigan, AI services Michigan, custom AI development, AI integration, data engineering Michigan, generative AI services",
  authors: [{ name: "Metic AI" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://metic.ai",
  },
  verification: {
    google: "your-google-site-verification-code", // Add your actual verification code
  },
  openGraph: {
    title: "Artificial Intelligence Company in Michigan | Top AI Company In Michigan - Metic AI",
    description: "Leading AI company in Michigan delivering intelligent solutions that transform businesses. Expert AI integration, custom development, machine learning, and data engineering services.",
    url: "https://metic.ai",
    siteName: "Metic AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://metic.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metic AI - Leading AI Company in Michigan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Company in Michigan | Top AI Company In Michigan - Metic AI",
    description: "Leading AI company in Michigan delivering intelligent solutions that transform businesses.",
    images: ["https://metic.ai/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Metic AI",
    "description": "Leading AI company in Michigan delivering intelligent solutions that transform businesses",
    "url": "https://metic.ai",
    "logo": "https://metic.ai/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Michigan",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/metic-ai",
      "https://twitter.com/metic_ai"
    ],
    "serviceType": [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Integration",
      "Custom AI Development",
      "Data Engineering",
      "Generative AI Services"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#F97316" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className="min-h-screen bg-white font-sans antialiased flex flex-col"
      >
        <Analytics />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
