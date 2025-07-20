# Metic AI - Next.js Project Build Instructions

## Project Overview
**Project Name:** Metic AI  
**Framework:** Next.js 15+ with App Router  
**Styling:** Tailwind CSS  
**Icons:** Lucide React  
**Color Scheme:** Morning Orange (warm, professional orange tones)  
**Target:** Responsive web application with mobile-first design  

## Color Palette - Morning Orange Theme
```css
Primary Orange: #FF6B35 (vibrant morning orange)
Secondary Orange: #FF8C42 (warm sunset orange)
Light Orange: #FFB886 (soft morning glow)
Dark Orange: #E55A2B (deep sunrise)
Neutral Grays: #1F2937, #374151, #6B7280, #9CA3AF, #F9FAFB
White: #FFFFFF
```

## Tech Stack & Dependencies

### Core Framework
- **Next.js 15+** (latest stable with App Router)
- **React 19+** (latest stable with new features)
- **TypeScript** (for type safety)

### Styling & UI
- **Tailwind CSS 3+** (utility-first CSS)
- **Lucide React** (modern icon library)
- **Tailwind Typography** (for rich text styling)
- **@tailwindcss/forms** (for form styling)

### Development Tools
- **ESLint** (code linting)
- **Prettier** (code formatting)
- **Husky** (git hooks)
- **lint-staged** (pre-commit hooks)

## Project Structure
```
metic-ai/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Button.tsx
│   │   └── layout/
│   │       ├── Navigation.tsx
│   │       └── Logo.tsx
│   └── favicon.ico
├── public/
│   ├── images/
│   └── icons/
├── styles/
├── lib/
│   └── utils.ts
├── types/
├── tailwind.config.js
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Build Steps

### Phase 1: Environment Setup
1. **Clean Installation**
   - Remove any existing React/Next.js global installations
   - Ensure Node.js 18+ and npm/yarn latest versions
   - Clear npm cache if needed

2. **Project Initialization**
   ```bash
   npx create-next-app@latest metic-ai --typescript --tailwind --eslint --app --src-dir=false
   cd metic-ai
   ```

3. **Additional Dependencies**
   ```bash
   npm install lucide-react
   npm install -D @tailwindcss/typography @tailwindcss/forms
   npm install -D prettier eslint-config-prettier
   npm install -D husky lint-staged
   ```

### Phase 2: Configuration Setup

1. **Tailwind Configuration**
   - Custom color palette with morning orange theme
   - Responsive breakpoints
   - Custom typography scales
   - Animation utilities

2. **TypeScript Configuration**
   - Strict mode enabled
   - Path aliases for clean imports
   - Custom type definitions

3. **ESLint & Prettier Setup**
   - Consistent code formatting
   - Next.js and React best practices
   - Import/export organization

### Phase 3: Core Components Development

1. **Layout Components**
   - Responsive Header with logo and navigation
   - Mobile hamburger menu with smooth animations
   - Footer with company info and links
   - Main layout wrapper

2. **Navigation System**
   - Desktop horizontal navigation
   - Mobile slide-out menu
   - Active link highlighting
   - Smooth transitions

3. **UI Components**
   - Reusable Button component with variants
   - Logo component with branding
   - Responsive containers
   - Custom utility components

### Phase 4: Home Page Development

1. **Hero Section**
   - Compelling headline about Metic AI
   - Engaging subtext
   - Call-to-action buttons
   - Background with morning orange gradients

2. **Feature Sections**
   - Key AI features/capabilities
   - Responsive grid layout
   - Icon integration with Lucide
   - Hover effects and animations

3. **Content Sections**
   - About Metic AI
   - Value propositions
   - Social proof/testimonials placeholder
   - Newsletter signup

### Phase 5: Responsive Design Implementation

1. **Mobile-First Approach**
   - Base styles for mobile (320px+)
   - Progressive enhancement for larger screens
   - Touch-friendly interactive elements

2. **Breakpoint Strategy**
   - Mobile: 320px - 768px
   - Tablet: 768px - 1024px
   - Desktop: 1024px+
   - Large Desktop: 1440px+

3. **Mobile Menu Features**
   - Slide-in animation from right/left
   - Overlay background
   - Smooth transitions
   - Close on outside click
   - Keyboard navigation support

### Phase 6: Optimization & Polish

1. **Performance Optimization**
   - Image optimization with Next.js Image component
   - Lazy loading for non-critical content
   - CSS purging with Tailwind
   - Bundle analysis and optimization

2. **Accessibility (a11y)**
   - Semantic HTML structure
   - ARIA labels and roles
   - Keyboard navigation
   - Screen reader compatibility
   - Color contrast compliance

3. **SEO Setup**
   - Meta tags optimization
   - Open Graph tags
   - Structured data
   - Sitemap generation

## Design Specifications

### Typography
- **Primary Font:** Inter (modern, readable)
- **Headings:** Font weights 600-800
- **Body Text:** Font weight 400-500
- **Code/Mono:** JetBrains Mono or similar

### Spacing & Layout
- **Container Max Width:** 1200px
- **Section Padding:** 64px mobile, 96px desktop
- **Grid Gaps:** 16px mobile, 24px desktop
- **Border Radius:** 8px standard, 12px cards

### Components Styling
- **Buttons:** Rounded corners, hover states, focus rings
- **Cards:** Subtle shadows, hover elevations
- **Navigation:** Clean, minimal with orange accents
- **Forms:** Consistent styling with Tailwind forms

### Responsive Behavior
- **Mobile Menu:** Slide animation, full-screen overlay
- **Navigation:** Horizontal on desktop, stacked on mobile
- **Grid Systems:** 1 column mobile, 2-3 columns desktop
- **Typography:** Responsive font sizes using clamp()

## Quality Assurance Checklist

### Functionality
- [ ] Navigation works on all screen sizes
- [ ] Mobile menu opens/closes smoothly
- [ ] All links are functional
- [ ] Responsive design works across devices
- [ ] Page loads quickly

### Code Quality
- [ ] TypeScript compilation with no errors
- [ ] ESLint passes with no warnings
- [ ] Prettier formatting applied
- [ ] Consistent naming conventions
- [ ] Clean component architecture

### Design & UX
- [ ] Color scheme implemented correctly
- [ ] Typography hierarchy is clear
- [ ] Interactive elements have hover states
- [ ] Loading states where appropriate
- [ ] Error boundaries implemented

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG guidelines
- [ ] Focus indicators visible
- [ ] Alt text for images

## Deployment Preparation

### Environment Setup
- [ ] Environment variables configuration
- [ ] Build optimization settings
- [ ] Error handling and logging
- [ ] Analytics integration ready

### Documentation
- [ ] README.md with setup instructions
- [ ] Component documentation
- [ ] API documentation if applicable
- [ ] Deployment guide

## Post-Launch Considerations

### Performance Monitoring
- Core Web Vitals tracking
- Bundle size monitoring
- User experience analytics

### Future Enhancements
- Dark mode implementation
- Multi-language support
- Advanced animations
- Progressive Web App features

---

## Timeline Estimate
- **Phase 1-2:** 1-2 hours (Setup & Configuration)
- **Phase 3:** 2-3 hours (Core Components)
- **Phase 4:** 3-4 hours (Home Page)
- **Phase 5:** 2-3 hours (Responsive Design)
- **Phase 6:** 2-3 hours (Optimization)

**Total Estimated Time:** 10-15 hours for complete implementation

---

*This document serves as the blueprint for building the Metic AI Next.js application with modern best practices and industry standards.*
