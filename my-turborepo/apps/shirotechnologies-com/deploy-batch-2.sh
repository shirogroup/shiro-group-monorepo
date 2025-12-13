#!/bin/bash

# SHIRO Technologies - Batch 2 Deployment Script
# Creates 5 section components + updates layout and homepage

echo "🚀 SHIRO Technologies - Batch 2 Deployment"
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
mkdir -p src/components/sections

echo "📝 Creating section components..."

# Hero.tsx
cat > src/components/sections/Hero.tsx << 'HERO_EOF'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="gradient-hero py-20 md:py-28 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='2' fill='%23CC0000'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The foundational services entity powering our global{' '}
            <span className="text-shiro-red">agentic AI SaaS portfolio</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Transform your enterprise with autonomous AI agents, global delivery excellence, and proven cost savings of 50-70% vs US/EU rates.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#calculator"
              className="bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-md font-semibold text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Calculate Your Savings
            </Link>
            <Link
              href="/products"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-shiro-black px-8 py-4 rounded-md font-semibold text-lg transition-all"
            >
              Explore Our SaaS Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
HERO_EOF

echo "  ✅ Hero.tsx"

# StatsBar.tsx
cat > src/components/sections/StatsBar.tsx << 'STATS_EOF'
import { STATS } from '@/lib/constants'

export function StatsBar() {
  return (
    <section className="bg-shiro-red text-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
STATS_EOF

echo "  ✅ StatsBar.tsx"

# ProductsGrid.tsx
cat > src/components/sections/ProductsGrid.tsx << 'PRODUCTS_EOF'
import { PRODUCTS } from '@/lib/constants'
import { ProductCard } from '@/components/products/ProductCard'

export function ProductsGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
            Our Agentic AI SaaS Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Zero-human-involvement platforms delivering autonomous intelligence across industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
PRODUCTS_EOF

echo "  ✅ ProductsGrid.tsx"

# ServicesPreview.tsx
cat > src/components/sections/ServicesPreview.tsx << 'SERVICES_EOF'
import Link from 'next/link'
import { SERVICES_PREVIEW } from '@/lib/constants'

export function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
            Strategic Services Accelerating Innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cash-generating services funding our SaaS evolution while delivering exceptional value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_PREVIEW.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-shiro-black mb-4">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={service.link}
                className="text-shiro-red hover:text-shiro-red-dark font-semibold inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
SERVICES_EOF

echo "  ✅ ServicesPreview.tsx"

# CookieConsent.tsx
cat > src/components/layout/CookieConsent.tsx << 'COOKIE_EOF'
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true }
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    updateConsent(allAccepted)
    setShowBanner(false)
  }

  const rejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false }
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary))
    updateConsent(onlyNecessary)
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    updateConsent(preferences)
    setShowPreferences(false)
    setShowBanner(false)
  }

  const updateConsent = (prefs: typeof preferences) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
      })
    }
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-shiro-red shadow-2xl z-50 animate-slide-up">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">We value your privacy</h3>
              <p className="text-sm text-gray-600">
                We use cookies to enhance your browsing experience and analyze our traffic.{' '}
                <Link href="/cookie-policy" className="text-shiro-red hover:underline">
                  Learn more
                </Link>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-6 py-2 border-2 border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-semibold"
              >
                Preferences
              </button>
              <button
                onClick={rejectAll}
                className="px-6 py-2 border-2 border-shiro-red text-shiro-red rounded-md hover:bg-red-50 transition-colors font-semibold"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-shiro-red text-white rounded-md hover:bg-shiro-red-dark transition-colors font-semibold"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Cookie Preferences</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-semibold">Necessary Cookies</h3>
                    <p className="text-sm text-gray-600">Required for the website to function</p>
                  </div>
                  <input type="checkbox" checked disabled className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-semibold">Analytics Cookies</h3>
                    <p className="text-sm text-gray-600">Help us improve our website</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-5 h-5"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-semibold">Marketing Cookies</h3>
                    <p className="text-sm text-gray-600">Used to deliver relevant ads</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="w-5 h-5"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="flex-1 px-6 py-2 border-2 border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={savePreferences}
                  className="flex-1 px-6 py-2 bg-shiro-red text-white rounded-md hover:bg-shiro-red-dark transition-colors font-semibold"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
COOKIE_EOF

echo "  ✅ CookieConsent.tsx"

echo ""
echo "📄 Creating ProductCard component..."

mkdir -p src/components/products

cat > src/components/products/ProductCard.tsx << 'PRODCARD_EOF'
import Link from 'next/link'
import type { Product } from '@/lib/types'

export function ProductCard({ product }: { product: Product }) {
  const statusBadge = product.status === 'live' 
    ? <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">✅ Live</span>
    : <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">🚧 In Development</span>

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-shiro-black">{product.name}</h3>
        {statusBadge}
      </div>
      
      <p className="text-gray-600 mb-4 flex-grow">{product.tagline}</p>
      
      {product.status === 'live' && product.url && (
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-2 rounded-md font-semibold text-center transition-all"
        >
          Visit Site →
        </a>
      )}
      
      {product.status === 'development' && product.betaDate && (
        <div className="bg-gray-100 px-4 py-2 rounded-md text-center text-sm text-gray-600">
          Beta: {product.betaDate}
        </div>
      )}
    </div>
  )
}
PRODCARD_EOF

echo "  ✅ ProductCard.tsx"

echo ""
echo "✅ All Batch 2 files created!"
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
        git commit -m "Add Batch 2: Hero, StatsBar, ProductsGrid, ServicesPreview, CookieConsent, ProductCard"
        git push origin main
        
        echo ""
        echo "🎉 DEPLOYED!"
        echo ""
        echo "📊 Batch 2 Complete:"
        echo "  ✅ Hero.tsx"
        echo "  ✅ StatsBar.tsx"
        echo "  ✅ ProductsGrid.tsx"
        echo "  ✅ ServicesPreview.tsx"
        echo "  ✅ CookieConsent.tsx"
        echo "  ✅ ProductCard.tsx"
        echo ""
        echo "Vercel will deploy in 2-3 minutes!"
    fi
else
    echo ""
    echo "❌ Build failed - see errors above"
fi
