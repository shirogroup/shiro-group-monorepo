#!/bin/bash

# SHIRO Technologies - Batch 3 Deployment Script
# Creates QA Calculator, ProductDetailCard, updates layout with GA4, real homepage

echo "🚀 SHIRO Technologies - Batch 3 Deployment"
echo "==========================================="
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "✅ Found project directory"
echo ""

# Create directories
echo "📁 Creating directories..."
mkdir -p src/components/calculator
mkdir -p src/components/products

echo "📝 Creating components..."

# ProductDetailCard.tsx
cat > src/components/products/ProductDetailCard.tsx << 'PRODDETAIL_EOF'
import { Product } from '@/lib/types'
import Link from 'next/link'

interface ProductDetailCardProps {
  product: Product
}

export function ProductDetailCard({ product }: ProductDetailCardProps) {
  const isLive = product.status === 'live'
  const statusBadge = isLive ? '✅ Live' : `🚧 Beta ${product.betaDate}`

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
      {/* Header with gradient */}
      <div className="gradient-hero p-8 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-sm mb-3 uppercase tracking-wide">
              Autonomous SaaS Product
            </span>
            <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
            <p className="text-lg opacity-90">{product.tagline}</p>
          </div>
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
            {statusBadge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-6">
          <h4 className="font-bold text-shiro-black mb-3">Description</h4>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-shiro-black mb-3">Key Features</h4>
          <ul className="space-y-2">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-gray-600">
                <span className="text-shiro-red mr-2 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {product.pricing && (
          <div className="mb-6">
            <h4 className="font-bold text-shiro-black mb-3">Pricing</h4>
            <div className="space-y-2">
              {Object.entries(product.pricing).map(([tier, price]) => (
                <div key={tier} className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700 font-semibold capitalize">{tier}</span>
                  <span className="text-shiro-red font-bold">{price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.target && (
          <div className="mb-6">
            <h4 className="font-bold text-shiro-black mb-3">Target Audience</h4>
            <p className="text-gray-600">{product.target}</p>
          </div>
        )}

        <div className="flex gap-4">
          {isLive && product.url ? (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-md font-semibold text-center transition-all"
            >
              Visit Platform →
            </a>
          ) : (
            <button
              disabled
              className="flex-1 bg-gray-300 text-gray-600 px-6 py-3 rounded-md font-semibold text-center cursor-not-allowed"
            >
              Coming Soon
            </button>
          )}
          <Link
            href="/contact"
            className="flex-1 border-2 border-shiro-red text-shiro-red hover:bg-shiro-red hover:text-white px-6 py-3 rounded-md font-semibold text-center transition-all"
          >
            Get Demo
          </Link>
        </div>
      </div>
    </div>
  )
}
PRODDETAIL_EOF

echo "  ✅ ProductDetailCard.tsx"

# QASavingsCalculator.tsx
cat > src/components/calculator/QASavingsCalculator.tsx << 'CALC_EOF'
'use client'

import { useState } from 'react'
import { CalculatorInputs, CalculatorResults } from '@/lib/types'

export function QASavingsCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    teamSize: 5,
    duration: 12,
    region: 'us',
    engagementType: 'qa',
  })

  const [results, setResults] = useState<CalculatorResults | null>(null)

  const regionalRates = {
    us: { dev: 12000, qa: 10000, ai: 15000, devops: 13000 },
    eu: { dev: 10000, qa: 8500, ai: 13000, devops: 11000 },
    uk: { dev: 11000, qa: 9000, ai: 14000, devops: 12000 },
  }

  const shiroRates = {
    dev: 4000,
    qa: 3200,
    ai: 5500,
    devops: 4500,
  }

  const calculateSavings = (e: React.FormEvent) => {
    e.preventDefault()

    const localRate = regionalRates[inputs.region][inputs.engagementType]
    const shiroRate = shiroRates[inputs.engagementType]

    const localCost = localRate * inputs.teamSize * inputs.duration
    const shiroCost = shiroRate * inputs.teamSize * inputs.duration
    const savings = localCost - shiroCost
    const savingsPercent = Math.round((savings / localCost) * 100)
    const roiMonths = Math.max(1, Math.floor(inputs.duration / 4))

    setResults({
      totalSavings: savings,
      savingsPercent,
      roiMonths,
      qualityScore: 95,
    })
  }

  return (
    <div id="calculator" className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-shiro-black mb-3">
          QA Savings Calculator
        </h3>
        <p className="text-lg text-shiro-gray-dark">
          See your potential cost savings with SHIRO's global delivery model
        </p>
      </div>

      <form onSubmit={calculateSavings} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Size */}
          <div>
            <label htmlFor="teamSize" className="block text-sm font-semibold text-shiro-black mb-2">
              Team Size (number of resources)
            </label>
            <input
              type="number"
              id="teamSize"
              min="1"
              max="100"
              value={inputs.teamSize}
              onChange={(e) => setInputs({ ...inputs, teamSize: parseInt(e.target.value) })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Duration */}
          <div>
            <label htmlFor="duration" className="block text-sm font-semibold text-shiro-black mb-2">
              Engagement Duration (months)
            </label>
            <input
              type="number"
              id="duration"
              min="1"
              max="36"
              value={inputs.duration}
              onChange={(e) => setInputs({ ...inputs, duration: parseInt(e.target.value) })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Region */}
          <div>
            <label htmlFor="region" className="block text-sm font-semibold text-shiro-black mb-2">
              Your Region
            </label>
            <select
              id="region"
              value={inputs.region}
              onChange={(e) => setInputs({ ...inputs, region: e.target.value as any })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none transition-colors"
            >
              <option value="us">United States</option>
              <option value="eu">European Union</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>

          {/* Engagement Type */}
          <div>
            <label htmlFor="engagementType" className="block text-sm font-semibold text-shiro-black mb-2">
              Service Type
            </label>
            <select
              id="engagementType"
              value={inputs.engagementType}
              onChange={(e) => setInputs({ ...inputs, engagementType: e.target.value as any })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none transition-colors"
            >
              <option value="qa">QA & Testing</option>
              <option value="dev">Software Development</option>
              <option value="ai">AI/ML Development</option>
              <option value="devops">DevOps & Infrastructure</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all hover:shadow-lg"
        >
          Calculate Savings
        </button>
      </form>

      {results && (
        <div className="mt-10 p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-green-300">
          <h4 className="text-2xl font-bold text-shiro-black mb-6 text-center">Your Potential Savings</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">Total Savings</p>
              <p className="text-4xl font-bold text-green-600">
                ${results.totalSavings.toLocaleString()}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">Savings Percentage</p>
              <p className="text-4xl font-bold text-shiro-red">
                {results.savingsPercent}%
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">ROI Timeline</p>
              <p className="text-4xl font-bold text-blue-600">
                {results.roiMonths} months
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-sm text-gray-600 mb-2">Quality Score</p>
              <p className="text-4xl font-bold text-purple-600">
                {results.qualityScore}%
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="/contact"
              className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-3 rounded-md font-semibold transition-all"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
CALC_EOF

echo "  ✅ QASavingsCalculator.tsx"

# Update layout.tsx with GA4
cat > src/app/layout.tsx << 'LAYOUT_EOF'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyCTA } from '@/components/layout/StickyCTA'
import { CookieConsent } from '@/components/layout/CookieConsent'
import { SITE_CONFIG } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'AI transformation',
    'agentic AI',
    'SaaS',
    'global delivery',
    'QA automation',
    'offshore development',
    'multiagent AI',
    'enterprise AI',
  ],
  authors: [{ name: 'SHIRO Technologies LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
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
        {/* Google Analytics with Consent Mode */}
        <Script id="google-consent" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });
            
            gtag('js', new Date());
            gtag('config', '${SITE_CONFIG.googleAnalyticsId}');
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <StickyCTA />
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
LAYOUT_EOF

echo "  ✅ layout.tsx (with GA4 & Cookie Consent)"

# Update homepage with real content
cat > src/app/page.tsx << 'HOME_EOF'
import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ProductsGrid } from '@/components/sections/ProductsGrid'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { QASavingsCalculator } from '@/components/calculator/QASavingsCalculator'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductsGrid />
      
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <QASavingsCalculator />
        </div>
      </section>
      
      <ServicesPreview />
    </>
  )
}
HOME_EOF

echo "  ✅ page.tsx (Real homepage)"

echo ""
echo "✅ All Batch 3 files created!"
echo ""

# Build
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 BUILD SUCCESSFUL!"
    echo ""
    read -p "Push to GitHub? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cd ~/projects/shiro-group-monorepo
        git add .
        git commit -m "Add Batch 3: QA Calculator, ProductDetailCard, GA4 integration, real homepage"
        git push origin main
        
        echo ""
        echo "🎉 DEPLOYED!"
        echo ""
        echo "📊 Batch 3 Complete:"
        echo "  ✅ QASavingsCalculator.tsx (interactive calculator)"
        echo "  ✅ ProductDetailCard.tsx (product details)"
        echo "  ✅ layout.tsx (GA4 + Cookie Consent)"
        echo "  ✅ page.tsx (Real homepage with all sections)"
        echo ""
        echo "🌐 Your homepage now has:"
        echo "  • Hero section"
        echo "  • Stats bar"
        echo "  • Products grid"
        echo "  • QA Savings Calculator"
        echo "  • Services preview"
        echo "  • Cookie consent banner"
        echo "  • Google Analytics"
        echo ""
        echo "Vercel will deploy in 2-3 minutes!"
    fi
else
    echo ""
    echo "❌ Build failed - see errors above"
fi
