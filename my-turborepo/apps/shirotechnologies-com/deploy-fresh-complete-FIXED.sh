#!/bin/bash

# SHIRO Technologies - Complete Fresh Deployment Script (FIXED)
# This script creates ALL necessary files and deploys

echo "🚀 SHIRO Technologies - Complete Fresh Deployment"
echo "=================================================="
echo ""

# Navigate to project directory
cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    echo "   Current: $(pwd)"
    exit 1
fi

echo "✅ Found project directory"
echo ""

# Create ALL necessary directories
echo "📁 Creating directory structure..."
mkdir -p src/components/layout
mkdir -p src/app/{products,ai-transformation,services,industries,global-presence,insights,about,contact,cookie-policy}

echo "✅ Directories created"
echo ""

# Create ALL component files
echo "📝 Creating component files..."

# Header.tsx
cat > src/components/layout/Header.tsx << 'HEADER_EOF'
import Link from 'next/link'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-shiro-black text-white py-2.5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-8">
              <a 
                href={`tel:${SITE_CONFIG.contact.productsServicesPhone.replace(/[^0-9]/g, '')}`} 
                className="hover:text-shiro-red transition-colors"
              >
                📞 {SITE_CONFIG.contact.productsServicesPhone}
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.contact.email}`} 
                className="hover:text-shiro-red transition-colors"
              >
                ✉️ {SITE_CONFIG.contact.email}
              </a>
            </div>
            <div className="flex gap-6">
              <Link href="#calculator" className="hover:text-shiro-red transition-colors">
                Calculate Savings
              </Link>
              <Link href="/contact" className="hover:text-shiro-red transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex-shrink-0">
              <Logo className="h-20 w-auto" />
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-semibold text-shiro-black hover:text-shiro-red transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button className="lg:hidden text-shiro-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
HEADER_EOF

echo "  ✅ Header.tsx"

# Footer.tsx
cat > src/components/layout/Footer.tsx << 'FOOTER_EOF'
import Link from 'next/link'
import { SITE_CONFIG, TECH_PARTNERS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-shiro-black text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-shiro-red mb-4">SHIRO Technologies LLC</h4>
            <p className="text-sm text-gray-300 mb-6">
              The foundational services entity powering our global agentic AI SaaS portfolio.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">All Products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-transformation" className="text-gray-300 hover:text-white transition-colors">AI Transformation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About SHIRO</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 SHIRO Technologies LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
FOOTER_EOF

echo "  ✅ Footer.tsx"

# StickyCTA.tsx
cat > src/components/layout/StickyCTA.tsx << 'STICKY_EOF'
'use client'

import Link from 'next/link'

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-cta text-white py-4 shadow-2xl z-40 hidden md:block">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-lg">Ready to Transform with AI?</p>
            <p className="text-sm text-gray-100">Get started with SHIRO Technologies today</p>
          </div>
          <div className="flex gap-4">
            <Link href="/#calculator" className="bg-white text-shiro-red hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-all">
              Calculate Savings
            </Link>
            <Link href="/contact" className="bg-shiro-black hover:bg-shiro-gray-dark px-6 py-3 rounded-md font-semibold transition-all">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
STICKY_EOF

echo "  ✅ StickyCTA.tsx"

# Create ALL placeholder pages with CORRECT syntax
echo ""
echo "📄 Creating placeholder pages..."

# Products
cat > src/app/products/page.tsx << 'PROD_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Our products',
}

export default function ProductsPage() {
  return (
    <>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-800 font-semibold">
              🚧 Page under construction - Content coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
PROD_EOF

# AI Transformation
cat > src/app/ai-transformation/page.tsx << 'AI_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Transformation',
  description: 'AI Transformation services',
}

export default function AITransformationPage() {
  return (
    <>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Transformation</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-800 font-semibold">
              🚧 Page under construction - Content coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
AI_EOF

# Services
cat > src/app/services/page.tsx << 'SERV_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Our services',
}

export default function ServicesPage() {
  return (
    <>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-800 font-semibold">
              🚧 Page under construction - Content coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
SERV_EOF

# Industries
cat > src/app/industries/page.tsx << 'IND_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Industries we serve',
}

export default function IndustriesPage() {
  return (
    <>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-800 font-semibold">
              🚧 Page under construction - Content coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
IND_EOF

# Global Presence
cat > src/app/global-presence/page.tsx << 'GLOB_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Global Presence',
  description: 'Our global locations',
}

export default function GlobalPresencePage() {
  return (
    <>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Presence</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-800 font-semibold">
              🚧 Page under construction - Content coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
GLOB_EOF

# Insights
cat > src/app/insights/page.tsx << 'INS_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Latest insights',
}

export default function InsightsPage() {
  return (
    <>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-800 font-semibold">
              🚧 Page under construction - Content coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
INS_EOF

# About
cat > src/app/about/page.tsx << 'ABOUT_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About SHIRO',
  description: 'About SHIRO Technologies',
}

export default function AboutPage() {
  return (
    <>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About SHIRO</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-800 font-semibold">
              🚧 Page under construction - Content coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
ABOUT_EOF

# Contact
cat > src/app/contact/page.tsx << 'CONT_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact us',
}

export default function ContactPage() {
  return (
    <>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-800 font-semibold">
              🚧 Page under construction - Content coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
CONT_EOF

# Cookie Policy
cat > src/app/cookie-policy/page.tsx << 'COOK_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Our cookie policy',
}

export default function CookiePolicyPage() {
  return (
    <>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-800 font-semibold">
              🚧 Page under construction - Content coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
COOK_EOF

echo "  ✅ All 9 placeholder pages created"

echo ""
echo "✅ ALL FILES CREATED!"
echo ""

# Build test
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
        git commit -m "Add layout components and all placeholder pages with correct syntax"
        git push origin main
        
        echo ""
        echo "🎉 DEPLOYED TO GITHUB!"
        echo ""
        echo "Vercel will automatically deploy in 2-3 minutes."
        echo "Check: https://vercel.com/dashboard"
    fi
else
    echo ""
    echo "⚠️  Build has errors - see above"
    echo ""
    echo "Files have been created. Fix errors and try again."
fi
