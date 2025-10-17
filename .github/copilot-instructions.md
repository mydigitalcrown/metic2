# Copilot Instructions for Metic AI

## Project Overview
Metic AI is an SEO-optimized Next.js 15 website for an AI services company, featuring programmatically generated location-based pages. The site emphasizes Michigan presence while serving US states and Indian cities with AI and ML services.

## Architecture & Key Patterns

### 1. Location-Based Page Generation
- **Python Script Pattern**: `generate_ml_pages.py` generates location pages programmatically
- Each location gets dedicated routes: `/artificial-intelligence-ai-services-in-{location}/` and `/machine-learning-services-in-{location}/`
- Location metadata in script defines US states vs Indian cities with specific industry specialties
- **When creating new location pages**: Use the Python script, don't manually create 50+ files
- Generated pages follow strict template with SEO metadata, structured data, and location-specific content

### 2. SEO-First Architecture
- **Every page has comprehensive metadata**: title (70-80 chars), description (150-160 chars), keywords array
- **Structured Data**: JSON-LD schemas for Organization, FAQPage, and local business entities
- **Sitemap priorities**: Michigan pages get 0.95-0.99, other major markets 0.72-0.75, others 0.65-0.70
- **VSO/ASO optimization**: Natural language for voice search, FAQ sections with schema markup
- **Canonical URLs**: Always include `alternates.canonical` in metadata

### 3. Component Structure
```
src/app/
├── components/
│   ├── ui/          # Reusable UI components (Button, Header, Footer, MobileMenu)
│   └── layout/      # Layout components (Logo, Navigation)
├── {service-name}/  # Static service pages
├── {ai/ml}-services-in-{location}/  # Generated location pages
└── page.tsx         # Homepage with Michigan focus
```

### 4. Styling Conventions
- **Orange Theme**: Custom color palette defined in `tailwind.config.js`
  - `primary-orange: #FF6B35` - Main CTA color
  - `secondary-orange: #FF8C42` - Hover states
  - `dark-orange: #E55A2B` - Active states
- **Utility function**: Use `cn()` from `@/lib/utils` for conditional class merging (clsx + tailwind-merge)
- **Responsive approach**: Mobile-first, breakpoints at 768px (md), 1024px (lg), 1200px (2xl max container)
- **Animations**: Subtle pulse effects on backgrounds, hover transforms with `-translate-y-2`

### 5. Typography & Icons
- **Fonts**: Inter (sans) and JetBrains Mono (mono) via next/font/google with `display: "swap"`
- **Icons**: Lucide React exclusively - Brain, BarChart3, Zap, MapPin, etc.
- **Heading hierarchy**: H1 for page title with location, H2 for sections, H3 for cards

## Development Workflows

### Running Locally
```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Production server
```

### Generating New Location Pages
```bash
# Edit locations list in generate_ml_pages.py, then:
python3 generate_ml_pages.py
```
- Script creates directories and page.tsx files
- Always update `sitemap.ts` after adding locations
- Test one generated page before running full script

### Performance Optimization
- Images: Use Next.js `<Image>` with WebP/AVIF formats
- Security headers configured in `next.config.ts` (X-Frame-Options, CSP, etc.)
- Compression enabled, poweredByHeader disabled
- Critical CSS inlined via Tailwind purging

## Critical Conventions

### Michigan-First SEO Strategy
- Homepage, sitemap, and metadata prioritize "AI Company in Michigan" keywords
- Michigan location pages get highest priority (0.95-0.99) in sitemap
- Testimonials use Michigan cities (Detroit, Grand Rapids, Ann Arbor)
- Schema markup includes Michigan geo coordinates and addresses

### Button Variants
```tsx
<Button variant="primary">   // Orange CTA
<Button variant="outline">   // White bg, gray border
<Button variant="secondary"> // Secondary orange
<Button variant="ghost">     // Transparent
```

### Link Pattern for CTAs
```tsx
<Link href="/contact">
  <Button variant="primary">Contact Us</Button>
</Link>
```

### Metadata Template (Required for all pages)
```tsx
export const metadata: Metadata = {
  title: "Page Title | Service - Metic.ai",
  description: "150-160 char description",
  keywords: ["keyword1", "keyword2", ...],
  authors: [{ name: "Metic AI" }],
  robots: "index, follow",
  openGraph: { title, description, url, images: [{ url, width: 1200, height: 630 }] },
  alternates: { canonical: "https://metic.ai/path/" },
};
```

### Structured Data Pattern
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization", // or FAQPage, Service, etc.
      // ... schema properties
    })
  }}
/>
```

## Common Tasks

### Adding a New Service Page
1. Create `src/app/{service-slug}/page.tsx`
2. Copy metadata structure from existing service pages
3. Add route to `sitemap.ts` with priority 0.80-0.85
4. Use standard sections: Hero, Services Grid, CTA, Testimonials
5. Include location-specific content if relevant

### Updating Location Specialties
- Edit `get_us_state_content()` or `get_indian_city_content()` in `generate_ml_pages.py`
- Maps location → industry keywords (e.g., California → "Tech innovation, entertainment ML")
- Regenerate affected pages after changes

### SEO Content Guidelines
- Target keyword in H1, first paragraph, H2s
- Use `<strong>` for important keywords (not just bold styling)
- Include local cities in testimonials and location sections
- FAQ sections must have corresponding JSON-LD FAQPage schema

## Integration Points

### Analytics
- Google Analytics 4 via `src/components/Analytics.tsx`
- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in environment variables

### External Dependencies
- `lucide-react` for all icons (consistent style)
- `clsx` + `tailwind-merge` for className utilities
- No external API calls currently - all static generation

### TypeScript Paths
- `@/*` resolves to `src/*` (configured in tsconfig.json)
- Import components: `import { Button } from "@/app/components/ui/Button"`
- Import utils: `import { cn } from "@/lib/utils"`

## Debugging & Testing

### Common Issues
- **Build errors on metadata**: Ensure all metadata fields are properly typed
- **Icon not rendering**: Check Lucide React import and component name casing
- **Tailwind classes not applying**: Run `npm run build` to regenerate CSS, check class name typos
- **Location pages 404**: Verify directory structure matches route pattern exactly

### Performance Checks
- Run Lighthouse in Chrome DevTools (target: 90+ performance, 100 SEO)
- Check Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Validate structured data at https://search.google.com/test/rich-results

## Anti-Patterns (Avoid These)

❌ Don't use generic metadata - every page needs unique, optimized meta tags  
❌ Don't manually create location pages - use the Python generator script  
❌ Don't use inline styles - leverage Tailwind utility classes  
❌ Don't skip canonical URLs - critical for SEO  
❌ Don't forget mobile-first responsive design - test on small screens  
❌ Don't use images without Next.js Image component - performance impact  
❌ Don't hardcode colors - use Tailwind theme colors (primary-orange, etc.)  

## Questions to Ask Before Changes

1. Does this affect SEO? Update metadata, sitemap, structured data?
2. Is this mobile-responsive? Test at 375px, 768px, 1024px viewports
3. Does this follow the orange theme? Use defined color palette
4. Should this be generated? If creating >3 similar pages, script it
5. Is performance impacted? Check bundle size, image optimization
