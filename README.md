# Metic AI Website

A modern, responsive multi-page website for Metic AI built with Next.js 15+ and Tailwind CSS.

## Tech Stack

- **Next.js 15+** with App Router
- **React 19+**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** for icons

## Key Features

- Responsive design with mobile-first approach
- Multiple pages: Home, About, Services, Contact
- Custom UI components
- Mobile navigation with slide-out menu
- Morning orange color scheme
- SEO optimized with metadata

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/metic-ai.git
cd metic-ai
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
metic-ai/
├── app/                   # Next.js App Router
│   ├── components/        # Shared components
│   │   ├── layout/        # Layout components
│   │   └── ui/            # UI components
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
└── lib/                   # Utility functions
```

## Customization

### Colors

The color scheme is based on a morning orange theme with the following main colors:

- Primary Orange: #FF6B35 (vibrant morning orange)
- Secondary Orange: #FF8C42 (warm sunset orange)
- Light Orange: #FFB886 (soft morning glow)
- Dark Orange: #E55A2B (deep sunrise)

These colors can be customized in the `tailwind.config.js` file.

### Components

All UI components are located in the `app/components` directory and are built to be reusable across the application.

## Deployment

The site can be deployed on Vercel, Netlify, or any other hosting platform that supports Next.js.

```bash
npm run build
# or
yarn build
```

## License

MIT
