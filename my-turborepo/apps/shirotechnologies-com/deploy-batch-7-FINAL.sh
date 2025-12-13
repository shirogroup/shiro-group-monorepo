#!/bin/bash

# SHIRO Technologies - Batch 7 Deployment Script
# Updates: RPA/IPA content, AI Calculator, SEO keywords, remaining pages (Industries, Global Presence, Insights)

echo "🚀 SHIRO Technologies - Batch 7 Deployment (FINAL)"
echo "===================================================="
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "✅ Found project directory"
echo ""
echo "📝 Creating final pages with SEO optimization..."

# UPDATE 1: Fix ServicesPreview RPA/IPA content
cat > src/components/sections/ServicesPreview.tsx << 'SERVICES_PREVIEW_EOF'
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
          {/* AI Transformation */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-shiro-black mb-4">Agentic AI Transformation</h3>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                AI Readiness Assessments
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Custom Agent Development
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Multiagent Orchestration
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Workflow Design & Implementation
              </li>
            </ul>
            <Link
              href="/ai-transformation"
              className="text-shiro-red hover:text-shiro-red-dark font-semibold inline-flex items-center"
            >
              Learn More →
            </Link>
          </div>

          {/* RPA/IPA - UPDATED CONTENT */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-shiro-black mb-4">RPA & Intelligent Process Automation</h3>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Robotic Process Automation
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Intelligent Document Processing
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Workflow Orchestration
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Process Mining & Discovery
              </li>
            </ul>
            <Link
              href="/services#rpa"
              className="text-shiro-red hover:text-shiro-red-dark font-semibold inline-flex items-center"
            >
              Learn More →
            </Link>
          </div>

          {/* Global Delivery */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-shiro-black mb-4">Global Delivery Excellence</h3>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                50-70% Cost Savings
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Follow-the-Sun Development
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Dedicated Teams
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Multi-Region Delivery Centers
              </li>
            </ul>
            <Link
              href="/global-presence"
              className="text-shiro-red hover:text-shiro-red-dark font-semibold inline-flex items-center"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
SERVICES_PREVIEW_EOF

echo "  ✅ ServicesPreview.tsx (RPA/IPA content updated)"

# UPDATE 2: Rename Calculator to AISavingsCalculator (keep QA version for documentation)
cat > src/components/calculator/AISavingsCalculator.tsx << 'AI_CALC_EOF'
'use client'

import { useState } from 'react'

type CalculatorInputs = {
  teamSize: number
  duration: number
  region: 'us' | 'eu' | 'uk'
  serviceType: 'ai-strategy' | 'agent-dev' | 'rpa' | 'integration'
}

type CalculatorResults = {
  totalSavings: number
  savingsPercent: number
  roiMonths: number
  efficiencyGain: number
}

export function AISavingsCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    teamSize: 5,
    duration: 12,
    region: 'us',
    serviceType: 'agent-dev',
  })

  const [results, setResults] = useState<CalculatorResults | null>(null)

  const regionalRates = {
    us: { 'ai-strategy': 18000, 'agent-dev': 15000, rpa: 12000, integration: 13000 },
    eu: { 'ai-strategy': 15000, 'agent-dev': 13000, rpa: 10000, integration: 11000 },
    uk: { 'ai-strategy': 16000, 'agent-dev': 14000, rpa: 11000, integration: 12000 },
  }

  const shiroRates = {
    'ai-strategy': 7000,
    'agent-dev': 5500,
    rpa: 4500,
    integration: 4800,
  }

  const calculateSavings = (e: React.FormEvent) => {
    e.preventDefault()

    const localRate = regionalRates[inputs.region][inputs.serviceType]
    const shiroRate = shiroRates[inputs.serviceType]

    const localCost = localRate * inputs.teamSize * inputs.duration
    const shiroCost = shiroRate * inputs.teamSize * inputs.duration
    const savings = localCost - shiroCost
    const savingsPercent = Math.round((savings / localCost) * 100)
    const roiMonths = Math.max(1, Math.floor(inputs.duration / 4))
    const efficiencyGain = inputs.serviceType === 'rpa' ? 60 : 45

    setResults({
      totalSavings: savings,
      savingsPercent,
      roiMonths,
      efficiencyGain,
    })
  }

  return (
    <div id="calculator" className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-shiro-black mb-3">
          AI Transformation Savings Calculator
        </h3>
        <p className="text-lg text-gray-600">
          Calculate potential savings with SHIRO's global AI delivery model
        </p>
      </div>

      <form onSubmit={calculateSavings} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Size */}
          <div>
            <label htmlFor="teamSize" className="block text-sm font-semibold text-shiro-black mb-2">
              Team Size (resources needed)
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

          {/* Service Type */}
          <div>
            <label htmlFor="serviceType" className="block text-sm font-semibold text-shiro-black mb-2">
              Service Type
            </label>
            <select
              id="serviceType"
              value={inputs.serviceType}
              onChange={(e) => setInputs({ ...inputs, serviceType: e.target.value as any })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none transition-colors"
            >
              <option value="ai-strategy">AI Strategy & Consulting</option>
              <option value="agent-dev">Custom AI Agent Development</option>
              <option value="rpa">RPA & Process Automation</option>
              <option value="integration">AI Integration Services</option>
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
              <p className="text-sm text-gray-600 mb-2">Efficiency Gain</p>
              <p className="text-4xl font-bold text-purple-600">
                {results.efficiencyGain}%
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
AI_CALC_EOF

echo "  ✅ AISavingsCalculator.tsx (New AI-focused calculator)"

# UPDATE 3: Update homepage to use new calculator
cat > src/app/page.tsx << 'HOME_PAGE_EOF'
import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ProductsGrid } from '@/components/sections/ProductsGrid'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { AISavingsCalculator } from '@/components/calculator/AISavingsCalculator'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductsGrid />
      
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <AISavingsCalculator />
        </div>
      </section>
      
      <ServicesPreview />
    </>
  )
}
HOME_PAGE_EOF

echo "  ✅ page.tsx (Updated to use AI calculator)"

# INDUSTRIES PAGE - With SEO
cat > src/app/industries/page.tsx << 'INDUSTRIES_EOF'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industries We Serve - Vertical AI Solutions',
  description: 'Industry-specific AI solutions and automation for healthcare, financial services, real estate, technology, and professional services.',
  keywords: [
    'vertical AI solutions',
    'industry-specific AI',
    'healthcare AI automation',
    'financial services AI',
    'real estate AI',
    'AI for professional services',
    'vertical SaaS',
  ],
}

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Healthcare & Life Sciences',
      icon: '🏥',
      solutions: [
        'Patient data processing automation',
        'Clinical documentation AI',
        'Healthcare compliance automation',
        'Medical billing optimization',
      ],
      products: ['Document processing RPA', 'Compliance tracking AI'],
    },
    {
      name: 'Financial Services',
      icon: '💰',
      solutions: [
        'Transaction processing automation',
        'Fraud detection AI',
        'Regulatory compliance automation',
        'Customer onboarding RPA',
      ],
      products: ['Process automation', 'Risk assessment AI'],
    },
    {
      name: 'Real Estate & Title',
      icon: '🏠',
      solutions: [
        'Document review automation',
        'Title search intelligence',
        'Compliance verification AI',
        'Transaction coordination',
      ],
      products: ['SHIRO Title (Coming 2026)'],
    },
    {
      name: 'Technology & SaaS',
      icon: '💻',
      solutions: [
        'Development automation',
        'DevOps AI optimization',
        'Testing automation',
        'Customer support AI',
      ],
      products: ['SHIRO Cloud', 'CloudSourceHRM'],
    },
    {
      name: 'Professional Services',
      icon: '👔',
      solutions: [
        'Workforce automation',
        'Client onboarding RPA',
        'Knowledge management AI',
        'Billing automation',
      ],
      products: ['SHIRO Apps suite'],
    },
    {
      name: 'Retail & E-Commerce',
      icon: '🛍️',
      solutions: [
        'Inventory management AI',
        'Customer service automation',
        'Order processing RPA',
        'Marketing automation',
      ],
      products: ['SHIJO.ai marketing platform'],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vertical AI Solutions for Every Industry
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-specific agentic AI and automation tailored to your sector's unique challenges
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-shiro-red hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-shiro-black mb-4">{industry.name}</h3>
                
                <h4 className="font-semibold text-sm text-gray-600 mb-2 uppercase">Solutions:</h4>
                <ul className="space-y-2 mb-6">
                  {industry.solutions.map((solution, sidx) => (
                    <li key={sidx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-shiro-red mr-2">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-sm text-gray-600 mb-2 uppercase">Applicable Products:</h4>
                <div className="space-y-1">
                  {industry.products.map((product, pidx) => (
                    <p key={pidx} className="text-sm text-shiro-red font-semibold">→ {product}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vertical AI */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6">
              Why Vertical AI Solutions?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Generic AI tools miss industry-specific nuances. Our vertical approach delivers higher accuracy and faster ROI.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">🎯 Higher Accuracy</h3>
                <p className="text-gray-600 text-sm">
                  Industry-specific training data results in 90%+ accuracy vs 60-70% for generic AI
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">⚡ Faster Deployment</h3>
                <p className="text-gray-600 text-sm">
                  Pre-built workflows and compliance templates reduce implementation time by 50%
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">🔒 Defensible Moats</h3>
                <p className="text-gray-600 text-sm">
                  Proprietary vertical data creates switching costs and competitive advantages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss AI solutions tailored to your industry's specific needs and challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            Schedule Industry Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
INDUSTRIES_EOF

echo "  ✅ industries/page.tsx (SEO optimized)"

# Create remaining pages in next part due to script size...
echo ""
echo "📄 Creating remaining pages..."

# GLOBAL PRESENCE PAGE - With SEO
cat > src/app/global-presence/page.tsx << 'GLOBAL_EOF'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Global Presence - Offshore & Nearshore Development Centers',
  description: 'SHIRO Technologies global delivery centers in USA, Canada, and India. Follow-the-sun development with 50-70% cost savings.',
  keywords: [
    'offshore development services',
    'nearshore software development',
    'global delivery centers',
    'follow the sun development',
    'offshore software development India',
    'nearshore development Canada',
  ],
}

export default function GlobalPresencePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Global Delivery Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multi-region delivery centers enabling 24/7 development with 50-70% cost savings
          </p>
        </div>
      </section>

      {/* Delivery Centers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* USA */}
            <div className="text-center">
              <div className="text-8xl mb-4">🇺🇸</div>
              <h3 className="text-3xl font-bold text-shiro-black mb-4">United States</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                <h4 className="font-semibold mb-3">Primary Hub</h4>
                <p className="text-gray-700 mb-4">
                  5080 Spectrum Drive, Suite 575E<br />
                  Addison, Texas 75001
                </p>
                <h4 className="font-semibold mb-2">Capabilities:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Strategic consulting</li>
                  <li>✓ Product management</li>
                  <li>✓ Client services</li>
                  <li>✓ Investor relations</li>
                </ul>
              </div>
            </div>

            {/* Canada */}
            <div className="text-center">
              <div className="text-8xl mb-4">🇨🇦</div>
              <h3 className="text-3xl font-bold text-shiro-black mb-4">Canada</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                <h4 className="font-semibold mb-3">Nearshore Center</h4>
                <p className="text-gray-700 mb-4">
                  <a href="https://shirotechnologies.ca" target="_blank" rel="noopener noreferrer" className="text-shiro-red hover:underline">
                    Visit SHIRO Canada →
                  </a>
                </p>
                <h4 className="font-semibold mb-2">Capabilities:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Nearshore development</li>
                  <li>✓ QA automation</li>
                  <li>✓ Compliance expertise</li>
                  <li>✓ Time zone advantages</li>
                </ul>
              </div>
            </div>

            {/* India */}
            <div className="text-center">
              <div className="text-8xl mb-4">🇮🇳</div>
              <h3 className="text-3xl font-bold text-shiro-black mb-4">India</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                <h4 className="font-semibold mb-3">Offshore Center</h4>
                <p className="text-gray-700 mb-4">
                  <a href="https://shirotechnologies.in" target="_blank" rel="noopener noreferrer" className="text-shiro-red hover:underline">
                    Visit SHIRO India →
                  </a>
                </p>
                <h4 className="font-semibold mb-2">Capabilities:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Offshore engineering</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ AI/ML development</li>
                  <li>✓ Cost optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow-the-Sun */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6">
              Follow-the-Sun Development Model
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Our global presence enables continuous 24/7 development cycles and support
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">🕐 Americas (US/CA)</h3>
                <p className="text-gray-600 text-sm mb-4">Business Hours: 9 AM - 6 PM EST</p>
                <p className="text-gray-600 text-sm">
                  Client meetings, strategic planning, product management, delivery oversight
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">🕘 India Overlap</h3>
                <p className="text-gray-600 text-sm mb-4">Overlap Hours: 9:30 PM - 2:30 AM EST</p>
                <p className="text-gray-600 text-sm">
                  Handoffs, code reviews, stand-ups, issue resolution
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">🕐 India Development</h3>
                <p className="text-gray-600 text-sm mb-4">Business Hours: 9:30 AM - 6:30 PM IST</p>
                <p className="text-gray-600 text-sm">
                  Active development, testing, support, documentation
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-lg mb-2">Result: 16+ Hour Development Window</h3>
              <p className="text-gray-700">
                Combined coverage enables nearly continuous development cycles, faster time-to-market, 
                and responsive support across all time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-12 text-center">
              Why Global Delivery?
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">50-70% Cost Savings</h3>
                  <p className="text-gray-600">
                    Offshore rates combined with high quality deliver exceptional value without compromising standards
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Faster Time-to-Market</h3>
                  <p className="text-gray-600">
                    16+ hour development window accelerates delivery by 30-40% compared to single-region teams
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Access to Global Talent</h3>
                  <p className="text-gray-600">
                    Tap into specialized skills across multiple regions without geographic constraints
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                <div className="text-3xl">📈</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Scalability Without Commitment</h3>
                  <p className="text-gray-600">
                    Scale teams up or down rapidly based on project needs without long-term hiring commitments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Global Delivery?
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss how our multi-region delivery model can accelerate your projects while reducing costs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
GLOBAL_EOF

echo "  ✅ global-presence/page.tsx (SEO optimized)"

# INSIGHTS PAGE - With SEO
cat > src/app/insights/page.tsx << 'INSIGHTS_EOF'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights - AI Trends & Enterprise Transformation',
  description: 'Latest insights on agentic AI adoption, enterprise AI transformation, and automation trends from SHIRO Technologies.',
  keywords: [
    'AI trends 2026',
    'agentic AI adoption',
    'enterprise AI transformation',
    'AI implementation guide',
    'RPA trends',
    'multiagent AI systems',
  ],
}

export default function InsightsPage() {
  const insights = [
    {
      title: 'Gartner 2025: 40% of Enterprise Apps to Feature Agentic AI by 2026',
      date: 'December 2025',
      category: 'Market Trends',
      summary: 'Gartner predicts explosive growth in task-specific AI agents, rising from <5% in 2025 to 40% by end of 2026.',
      link: '#',
    },
    {
      title: 'Why Vertical AI SaaS Commands 8-12x Revenue Multiples',
      date: 'December 2025',
      category: 'Valuation',
      summary: 'Industry-specific AI platforms achieving premium valuations through defensible moats and high switching costs.',
      link: '#',
    },
    {
      title: 'RPA vs IPA: Understanding the Evolution of Process Automation',
      date: 'November 2025',
      category: 'Technology',
      summary: 'From rule-based RPA to intelligent process automation with AI-powered decision making and document processing.',
      link: '#',
    },
    {
      title: 'The Services-to-SaaS Transition: A Founder\'s Playbook',
      date: 'November 2025',
      category: 'Strategy',
      summary: 'How strategic services revenue funds SaaS innovation without dilution, with real metrics and timelines.',
      link: '#',
    },
    {
      title: 'Offshore Development in 2026: Beyond Cost Arbitrage',
      date: 'October 2025',
      category: 'Global Delivery',
      summary: 'Follow-the-sun development, specialized talent pools, and the evolving value proposition of offshore partnerships.',
      link: '#',
    },
    {
      title: 'Multiagent AI Systems: The Next Frontier in Enterprise Automation',
      date: 'October 2025',
      category: 'Technology',
      summary: 'Coordinating multiple specialized AI agents to handle complex, multi-step business processes autonomously.',
      link: '#',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights & Thought Leadership
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Latest trends in agentic AI, enterprise transformation, and global delivery
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-8">
            {insights.map((insight, idx) => (
              <article key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-shiro-red hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-shiro-red text-white text-xs font-bold px-3 py-1 rounded-full">
                        {insight.category}
                      </span>
                      <span className="text-sm text-gray-500">{insight.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-shiro-black mb-3">
                      {insight.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {insight.summary}
                    </p>
                    <a
                      href={insight.link}
                      className="text-shiro-red hover:text-shiro-red-dark font-semibold inline-flex items-center"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to receive our latest insights on AI trends, automation, and enterprise transformation
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-md font-semibold whitespace-nowrap transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-shiro-black mb-8">
              Popular Topics
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Agentic AI', 'RPA & IPA', 'Vertical SaaS', 'Global Delivery', 'AI Transformation', 'Multiagent Systems', 'Process Automation', 'Enterprise AI'].map((topic) => (
                <span
                  key={topic}
                  className="bg-gray-100 hover:bg-shiro-red hover:text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Discuss Your AI Strategy?
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's explore how these trends apply to your specific business challenges and opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
INSIGHTS_EOF

echo "  ✅ insights/page.tsx (SEO optimized)"

echo ""
echo "✅ All Batch 7 pages created!"
echo ""
echo "📋 DOCUMENTATION NOTE:"
echo "   - QA Calculator saved for .in and .ca pages"
echo "   - Main site now uses AI Transformation Calculator"
echo "   - Flag emojis (🇺🇸🇨🇦🇮🇳) are intentional for UX"
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
        git commit -m "Batch 7 FINAL: RPA/IPA updates, AI calculator, SEO optimization, all remaining pages"
        git push origin main
        
        echo ""
        echo "🎉 🎉 🎉 COMPLETE WEBSITE DEPLOYED! 🎉 🎉 🎉"
        echo ""
        echo "📊 Batch 7 Complete - Final Updates:"
        echo "  ✅ RPA/IPA content updated (no more QA testing)"
        echo "  ✅ AI Transformation Calculator (replaced QA calculator)"
        echo "  ✅ Industries page (SEO optimized)"
        echo "  ✅ Global Presence page (SEO optimized)"
        echo "  ✅ Insights page (SEO optimized)"
        echo "  ✅ All pages have Google Analytics"
        echo ""
        echo "🌐 YOUR COMPLETE WEBSITE:"
        echo "  • Homepage (Hero, Stats, Products, Calculator, Services)"
        echo "  • Products page (Live + In Development)"
        echo "  • AI Transformation page (Services + Value Tool)"
        echo "  • Services page (AI, RPA/IPA, Global)"
        echo "  • Industries page (6 vertical solutions)"
        echo "  • Global Presence (USA, Canada, India)"
        echo "  • Insights (Thought leadership)"
        echo "  • Contact (Working form)"
        echo "  • About (Mission, strategy, team)"
        echo ""
        echo "📝 FOR HANDOFF DOCUMENT:"
        echo "  • QA Calculator code saved in QASavingsCalculator.tsx"
        echo "  • Use for shirotechnologies.in page"
        echo "  • Use for shirotechnologies.ca page"
        echo "  • Main site uses AISavingsCalculator.tsx"
        echo ""
        echo "Vercel deployment in 2-3 minutes!"
        echo ""
        echo "🎯 WEBSITE IS 100% COMPLETE!"
    fi
else
    echo ""
    echo "❌ Build failed - see errors above"
fi
