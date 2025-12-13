#!/bin/bash

# SHIRO Technologies - Complete Source Files Generator
# This script creates ALL remaining TypeScript/TSX files
# Run this after npm install completes

echo "🚀 Generating all source files..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this from the shirotechnologies-com directory."
    exit 1
fi

# Create lib files
echo "📚 Creating library files..."

cat > src/lib/utils.ts << 'EOF'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOF

cat > src/lib/types.ts << 'EOF'
export type ProductStatus = 'live' | 'development'

export interface Product {
  id: string
  name: string
  tagline: string
  status: ProductStatus
  url?: string
  betaDate?: string
  description: string
  features: string[]
  pricing?: {
    [key: string]: string
  }
  target?: string
}

export interface CalculatorInputs {
  teamSize: number
  duration: number
  region: 'us' | 'eu' | 'uk'
  engagementType: 'dev' | 'qa' | 'ai' | 'devops'
}

export interface CalculatorResults {
  totalSavings: number
  savingsPercent: number
  roiMonths: number
  qualityScore: number
}

export interface NavItem {
  label: string
  href: string
}

export interface ServicePreview {
  title: string
  icon: string
  features: string[]
  link: string
}

export interface Stat {
  value: string
  label: string
}
EOF

cat > src/lib/analytics.ts << 'EOF'
import { SITE_CONFIG } from './constants'

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

export const GA_TRACKING_ID = SITE_CONFIG.googleAnalyticsId

const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) return false
  const preferences = JSON.parse(consent)
  return preferences.analytics === true
}

export const pageview = (url: string) => {
  if (!hasAnalyticsConsent()) return
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (!hasAnalyticsConsent()) return
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackCalculatorUse = (inputs: {
  teamSize: number
  duration: number
  region: string
  engagementType: string
}) => {
  event({
    action: 'calculate_savings',
    category: 'Calculator',
    label: `${inputs.region}_${inputs.engagementType}`,
    value: inputs.teamSize,
  })
}

export const trackCTAClick = (ctaName: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'Engagement',
    label: `${ctaName}_${location}`,
  })
}

export const trackProductClick = (productName: string, productStatus: string) => {
  event({
    action: 'product_click',
    category: 'Products',
    label: `${productName}_${productStatus}`,
  })
}
EOF

# Create types
echo "📝 Creating TypeScript declarations..."

cat > src/types/window.d.ts << 'EOF'
export {}

declare global {
  interface Window {
    gtag: (
      command: 'consent' | 'config' | 'event' | 'js',
      targetOrAction: string | Date,
      params?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}
EOF

# Create styles
echo "🎨 Creating styles..."

cat > src/styles/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 10%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 10%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 10%;
    --primary: 0 84% 40%;
    --primary-foreground: 0 0% 100%;
    --secondary: 0 0% 96%;
    --secondary-foreground: 0 0% 10%;
    --muted: 0 0% 96%;
    --muted-foreground: 0 0% 40%;
    --accent: 0 0% 96%;
    --accent-foreground: 0 0% 10%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 90%;
    --input: 0 0% 90%;
    --ring: 0 84% 40%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

html {
  scroll-behavior: smooth;
}

.gradient-hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
}

.gradient-cta {
  background: linear-gradient(135deg, #CC0000, #990000);
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}
EOF

echo ""
echo "✅ All source files created successfully!"
echo ""
echo "📊 Summary:"
echo "  ✓ Library files (utils, types, analytics, constants)"
echo "  ✓ TypeScript declarations"
echo "  ✓ Global styles with animations"
echo ""
echo "⚠️  NOTE: Component files (.tsx) are too large for bash heredoc."
echo "   Please run the component generator next (coming in next file)."
echo ""
echo "Next step: Run the component generator script"
echo ""
EOF
