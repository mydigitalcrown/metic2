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
      "streetAddress": "300 Quail Ridge Dr NE",
      "addressLocality": "Ada",
      "addressRegion": "MI",
      "postalCode": "49301",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Behind Manyata Tech Park, Hebbal",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560077",
      "addressCountry": "India"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 7892518414",
    "email": "hello@metic.ai",
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

export const aiIntegrationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Integration and Deployment Services",
  "description": "Professional AI integration and deployment services including cloud-based, on-premises, and hybrid AI solutions with comprehensive data infrastructure support.",
  "provider": {
    "@type": "Organization",
    "name": "Metic.ai",
    "url": "https://metic.ai"
  },
  "serviceType": "AI Integration and Deployment",
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "Cloud-based AI Deployment",
      "description": "Scalable and flexible AI solutions hosted on cloud platforms"
    },
    {
      "@type": "Offer",
      "name": "On-Premises AI Deployment", 
      "description": "Secure AI solutions hosted within organization infrastructure"
    },
    {
      "@type": "Offer",
      "name": "Hybrid AI Deployment",
      "description": "Combined cloud and on-premises AI deployment solutions"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Integration Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Infrastructure Setup",
          "description": "Robust data infrastructure for AI applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "System Compatibility Assessment",
          "description": "Evaluation of AI solution compatibility with existing systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ethical AI Framework Implementation",
          "description": "Implementation of ethical guidelines and legal compliance"
        }
      }
    ]
  }
};

export const aiIntegrationPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Integration and Deployment Services | Expert AI Implementation - Metic.ai",
  "description": "Professional AI integration and deployment services by Metic.ai experts. Cloud-based, on-premises, and hybrid AI deployment solutions.",
  "url": "https://metic.ai/ai-integration-and-deployment/",
  "mainEntity": {
    "@id": "https://metic.ai/ai-integration-and-deployment/#service"
  },
  "about": {
    "@type": "Service",
    "@id": "https://metic.ai/ai-integration-and-deployment/#service"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://metic.ai/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Integration and Deployment",
        "item": "https://metic.ai/ai-integration-and-deployment/"
      }
    ]
  }
};
