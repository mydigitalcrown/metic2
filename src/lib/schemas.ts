export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Metic.ai",
  "description": "Michigan's leading artificial intelligence company, dedicated to transforming businesses through innovative AI solutions and exceptional service.",
  "url": "https://metic.ai",
  "logo": "https://metic.ai/logo.png",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Metic.ai Team"
  },
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "ADA",
      "addressLocality": "Michigan",
      "addressCountry": "USA"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore",
      "addressLocality": "Karnataka",
      "addressCountry": "India"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-78925-18414",
    "email": "Hello@metic.ai",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://linkedin.com/company/metic-ai",
    "https://twitter.com/metic_ai"
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "AI Consulting",
    "Business Automation",
    "Data Science",
    "Neural Networks"
  ],
  "serviceArea": {
    "@type": "State",
    "name": "Michigan"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country", 
      "name": "India"
    }
  ]
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Metic.ai - Leading AI Company in Michigan",
  "description": "Learn about Metic.ai's mission, values, and commitment to transforming businesses through artificial intelligence solutions.",
  "url": "https://metic.ai/about/",
  "mainEntity": {
    "@id": "https://metic.ai/#organization"
  },
  "about": {
    "@type": "Organization",
    "@id": "https://metic.ai/#organization"
  }
};
