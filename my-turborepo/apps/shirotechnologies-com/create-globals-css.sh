#!/bin/bash

# SHIRO Technologies - CREATE GLOBALS.CSS
# Complete CSS setup with Tailwind

echo "🎨 CREATING GLOBALS.CSS & TAILWIND CONFIG"
echo "=========================================="
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "📝 Creating globals.css..."

cat > src/app/globals.css << 'GLOBALS_CSS_EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --shiro-red: #CC0000;
    --shiro-red-dark: #990000;
    --shiro-black: #1a1a1a;
  }
  
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-white text-shiro-black;
  }
}

@layer utilities {
  .gradient-hero {
    background: linear-gradient(135deg, var(--shiro-red) 0%, var(--shiro-red-dark) 100%);
  }
  
  .gradient-cta {
    background: linear-gradient(135deg, var(--shiro-black) 0%, var(--shiro-red) 100%);
  }
  
  .text-shiro-red {
    color: var(--shiro-red);
  }
  
  .text-shiro-red-dark {
    color: var(--shiro-red-dark);
  }
  
  .text-shiro-black {
    color: var(--shiro-black);
  }
  
  .bg-shiro-red {
    background-color: var(--shiro-red);
  }
  
  .bg-shiro-red-dark {
    background-color: var(--shiro-red-dark);
  }
  
  .bg-shiro-black {
    background-color: var(--shiro-black);
  }
  
  .border-shiro-red {
    border-color: var(--shiro-red);
  }
  
  .hover\:bg-shiro-red:hover {
    background-color: var(--shiro-red);
  }
  
  .hover\:bg-shiro-red-dark:hover {
    background-color: var(--shiro-red-dark);
  }
  
  .hover\:text-shiro-red:hover {
    color: var(--shiro-red);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--shiro-red);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--shiro-red-dark);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus styles */
*:focus-visible {
  outline: 2px solid var(--shiro-red);
  outline-offset: 2px;
}
GLOBALS_CSS_EOF

echo "   ✅ globals.css created"
echo ""

echo "📝 Updating tailwind.config.ts..."

cat > tailwind.config.ts << 'TAILWIND_CONFIG_EOF'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'shiro-red': '#CC0000',
        'shiro-red-dark': '#990000',
        'shiro-black': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
TAILWIND_CONFIG_EOF

echo "   ✅ tailwind.config.ts updated"
echo ""

echo "📝 Updating layout.tsx with CSS import..."

cat > src/app/layout.tsx << 'LAYOUT_EOF'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyCTA } from '@/components/layout/StickyCTA'
import { SITE_CONFIG } from '@/lib/constants'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SHIRO Technologies - Agentic AI Transformation & Global SaaS Portfolio',
    template: '%s | SHIRO Technologies',
  },
  description: 'The foundational services entity powering our global agentic AI SaaS portfolio. Strategic AI transformation, RPA/IPA, and global delivery since 2001.',
  keywords: [
    'AI transformation',
    'agentic AI',
    'AI agents',
    'RPA automation',
    'offshore development',
    'nearshore development',
    'AI SaaS',
    'multiagent systems',
  ],
  authors: [{ name: 'SHIRO Technologies' }],
  creator: 'SHIRO Technologies',
  publisher: 'SHIRO Technologies',
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: 'SHIRO Technologies - Agentic AI Transformation & Global SaaS Portfolio',
    description: 'Strategic AI transformation services funding high-growth agentic AI SaaS products',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHIRO Technologies - Agentic AI Transformation',
    description: 'AI transformation services & SaaS products',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAnalyticsId}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${SITE_CONFIG.googleAnalyticsId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pb-20">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  )
}
LAYOUT_EOF

echo "   ✅ layout.tsx updated"
echo ""

# Build test
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 🎉 🎉 BUILD SUCCESSFUL! 🎉 🎉 🎉"
    echo ""
    read -p "Push to GitHub? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cd ~/projects/shiro-group-monorepo
        git add .
        git commit -m "Create globals.css and Tailwind config - restore ALL styling"
        git push origin main
        
        echo ""
        echo "🎉 STYLING RESTORED!"
        echo ""
        echo "✅ globals.css created"
        echo "✅ Tailwind config updated"
        echo "✅ layout.tsx has CSS import"
        echo ""
        echo "Wait 1-2 minutes for Vercel deployment"
        echo "Then refresh: https://shiro-group-monorepo.vercel.app/"
        echo ""
        echo "Your beautiful website will be back! 🎨"
    fi
else
    echo ""
    echo "❌ Build failed - see error above"
fi
