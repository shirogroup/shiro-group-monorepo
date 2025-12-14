#!/bin/bash

# SHIRO Technologies - Batch 9 Part 2
# Complete all missing items + fixes

echo "🚀 SHIRO Technologies - Batch 9 Part 2 (COMPREHENSIVE)"
echo "======================================================="
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "✅ Found project directory"
echo ""
echo "📝 Creating all missing pages and fixes..."

# FIX 1: Logo - Align globe vertically with SHIRO, underline Technologies
cat > src/components/layout/Logo.tsx << 'LOGO_EOF'
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="280"
      height="75"
      viewBox="0 0 280 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* SHIR text */}
      <text
        x="10"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="38"
        fontWeight="bold"
        fill="#CC0000"
      >
        SHIR
      </text>
      
      {/* Globe as O - aligned with SHIRO baseline */}
      <g transform="translate(118, 21)">
        <circle cx="0" cy="0" r="17" fill="#CC0000" stroke="#990000" strokeWidth="2" />
        
        {/* Vertical lines */}
        <line x1="0" y1="-17" x2="0" y2="17" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="-12" y1="-12" x2="-12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="12" y1="-12" x2="12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        
        {/* Horizontal lines */}
        <line x1="-17" y1="0" x2="17" y2="0" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="0" cy="0" rx="17" ry="7" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        <ellipse cx="0" cy="0" rx="17" ry="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        
        <circle cx="7" cy="-7" r="3" fill="#ffffff" opacity="0.4" />
      </g>
      
      {/* Technologies text with underline */}
      <text
        x="140"
        y="64"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="#333333"
        textAnchor="middle"
      >
        Technologies
      </text>
      
      {/* Underline under "Technologies" - from T to g */}
      <line x1="92" y1="66" x2="188" y2="66" stroke="#CC0000" strokeWidth="2" />
    </svg>
  )
}
LOGO_EOF

echo "  ✅ Logo.tsx (Globe aligned, Technologies underlined)"

# FIX 2: Footer - EST.2001, fix bottom padding for CTA
cat > src/components/layout/Footer.tsx << 'FOOTER_EOF'
import Link from 'next/link'
import { SITE_CONFIG, TECH_PARTNERS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-shiro-black text-white py-12 pb-32 md:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-10">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-shiro-red mb-3">
              SHIRO Technologies
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              Agentic AI transformation and global delivery
            </p>
            
            {/* Social links with icons */}
            <div className="flex gap-3 mb-4">
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-shiro-red transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-shiro-red transition-colors"
                aria-label="Twitter/X"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-xs font-semibold mb-2 text-gray-400">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l text-black text-sm"
                />
                <button className="bg-shiro-red hover:bg-shiro-red-dark px-4 py-2 rounded-r font-semibold text-xs transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-shiro-red mb-3">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">All Products</Link></li>
              <li><a href="https://instantresumeai.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">InstantResumeAI</a></li>
              <li><a href="https://resumeblast.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">ResumeBlast.ai</a></li>
              <li><a href="https://cloudsourcehrm.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">CloudSourceHRM</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-shiro-red mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-transformation" className="text-gray-300 hover:text-white transition-colors">AI Transformation</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">RPA & IPA</Link></li>
              <li><Link href="/global-presence" className="text-gray-300 hover:text-white transition-colors">Global Delivery</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-shiro-red mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About SHIRO</Link></li>
              <li><Link href="/investors" className="text-gray-300 hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-shiro-red mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/gdpr-compliance" className="text-gray-300 hover:text-white transition-colors">GDPR Compliance</Link></li>
              <li><Link href="/ai-compliance" className="text-gray-300 hover:text-white transition-colors">AI Compliance</Link></li>
              <li><Link href="/security" className="text-gray-300 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Technology Partners */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <h4 className="text-sm font-semibold text-shiro-red mb-3">Technology Partners</h4>
          <div className="flex flex-wrap gap-3">
            {TECH_PARTNERS.map((partner) => (
              <span
                key={partner}
                className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar - compact two columns */}
        <div className="border-t border-white/10 pt-6">
          <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-400">
            {/* Left column */}
            <div className="space-y-1">
              <p className="font-semibold text-gray-300">
                © 2025 SHIRO Technologies LLC. All rights reserved.
              </p>
              <p>EST. 2001</p>
              <p>
                US HQ: {SITE_CONFIG.address.physical.street}, {SITE_CONFIG.address.physical.city}, {SITE_CONFIG.address.physical.state} {SITE_CONFIG.address.physical.zip}
              </p>
              <p>
                Correspondence: {SITE_CONFIG.address.mailing.street}, {SITE_CONFIG.address.mailing.city}, {SITE_CONFIG.address.mailing.state} {SITE_CONFIG.address.mailing.zip}
              </p>
            </div>
            
            {/* Right column */}
            <div className="space-y-1 md:text-right">
              <p>
                Products & Services: <a href={`tel:${SITE_CONFIG.contact.productsServicesPhone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">{SITE_CONFIG.contact.productsServicesPhone}</a>
              </p>
              <p>
                Main: <a href={`tel:${SITE_CONFIG.contact.mainPhone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">{SITE_CONFIG.contact.mainPhone}</a>
              </p>
              <p>
                Email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">{SITE_CONFIG.contact.email}</a>
              </p>
              <p>
                LinkedIn: <a href={SITE_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Connect with us</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
FOOTER_EOF

echo "  ✅ Footer.tsx (EST. 2001, extra bottom padding for CTA)"

# FIX 3: Update constants.ts note
cat > UPDATE_CONSTANTS_TECH_PARTNERS.txt << 'TECH_EOF'
CRITICAL - Update src/lib/constants.ts:

Add these technology partners to TECH_PARTNERS array:

export const TECH_PARTNERS = [
  'Next.js',
  'Supabase',
  'Vercel',
  'Stripe',
  'Google Cloud',
  'GCP',
  'AWS',
  'Azure',
  'OpenAI',
  'Anthropic',
  'LangChain',
  'Make.com',
  'Carrd',
  'Railway',
  'Netlify',
  'Bolt.new'
]
TECH_EOF

echo "  ⚠️  UPDATE_CONSTANTS_TECH_PARTNERS.txt created"

# FIX 4: Favicon - Add to layout.tsx
cat > UPDATE_LAYOUT_FAVICON.txt << 'FAV_EOF'
UPDATE src/app/layout.tsx:

Add inside <html> tag, BEFORE children:

<html lang="en">
  <head>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  </head>
  <body className={`${inter.className} pb-20`}>
    ...
  </body>
</html>

Also create public/favicon.png (32x32) from the SVG for browser compatibility.
FAV_EOF

echo "  ⚠️  UPDATE_LAYOUT_FAVICON.txt created"

echo ""
echo "Creating missing pages (this will take a moment)..."
echo ""

# CREATE CAREERS PAGE
cat > src/app/careers/page.tsx << 'CAREERS_EOF'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers at SHIRO Technologies - Join Our Global Team',
  description: 'Join SHIRO Technologies global team. Competitive benefits, remote-first culture, and opportunities to work on cutting-edge AI transformation projects.',
  keywords: ['careers', 'jobs', 'AI jobs', 'remote work', 'technology careers', 'software engineering jobs'],
}

export default function CareersPage() {
  return (
    <div>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Global Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build the future of agentic AI and transform enterprises worldwide
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-shiro-black mb-6 text-center">
              Why SHIRO Technologies?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              We're building the foundational services entity powering a global agentic AI SaaS portfolio
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">🚀 Cutting-Edge Technology</h3>
                <p className="text-gray-600">
                  Work with the latest AI frameworks, agentic systems, and multiagent orchestration platforms
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">🌍 Global Impact</h3>
                <p className="text-gray-600">
                  Deliver solutions to clients across USA, Canada, and India with true global reach
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">📈 Career Growth</h3>
                <p className="text-gray-600">
                  Move from services to SaaS products, gain diverse experience across our portfolio
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">🤝 Collaborative Culture</h3>
                <p className="text-gray-600">
                  Remote-first, diverse teams across three continents working together seamlessly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-shiro-black mb-8 text-center">
              Comprehensive Benefits Package
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="text-3xl">🏥</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Health Insurance</h3>
                  <p className="text-gray-600">
                    Comprehensive medical coverage for you and your family with multiple plan options
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="text-3xl">🦷</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Dental Coverage</h3>
                  <p className="text-gray-600">
                    Full dental insurance including preventive care, basic procedures, and major services
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="text-3xl">👓</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Vision Insurance</h3>
                  <p className="text-gray-600">
                    Annual eye exams, prescription glasses, and contact lenses covered
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">401(k) Retirement Plan</h3>
                  <p className="text-gray-600">
                    Company match up to 4% to help you build your financial future
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="text-3xl">📚</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Free Training & Upskilling</h3>
                  <p className="text-gray-600">
                    Access to courses, certifications, and conferences for continuous professional development
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Free Market & Skills Assessment</h3>
                  <p className="text-gray-600">
                    Regular assessments and personalized career development plans to keep you competitive
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="text-3xl">🚗</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Parking (On-site Locations)</h3>
                  <p className="text-gray-600">
                    Free parking at our physical office locations in Texas and India
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="text-3xl">🏠</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Remote-First Culture</h3>
                  <p className="text-gray-600">
                    Work from anywhere with flexible hours and a results-focused environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-shiro-black mb-6">
              Current Opportunities
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals passionate about AI and technology
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="text-blue-900">
                <strong>Open Positions:</strong> We're actively hiring for AI Engineers, Full-Stack Developers, 
                QA Automation Engineers, DevOps Engineers, and Technical Project Managers across all locations.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              Apply Now - Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Join us in transforming enterprises with agentic AI while building a global SaaS portfolio
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
CAREERS_EOF

echo "  ✅ careers/page.tsx created"

# Continue in next part due to size...
echo ""
echo "📝 Creating investors page..."

# CREATE INVESTORS PAGE
cat > src/app/investors/page.tsx << 'INVESTORS_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investor Relations - SHIRO Technologies',
  description: 'Learn about investment opportunities in SHIRO Technologies - AI-first portfolio company with strategic services revenue funding SaaS innovation.',
  keywords: ['investor relations', 'investment opportunity', 'AI SaaS', 'portfolio company', 'venture capital'],
}

export default function InvestorsPage() {
  return (
    <div>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Investor Relations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic services revenue funding high-growth agentic AI SaaS portfolio
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-shiro-black mb-6 text-center">
              Investment Opportunity
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              SHIRO Technologies is uniquely positioned at the intersection of strategic services and 
              autonomous AI SaaS products
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-shiro-red">
                <h3 className="font-bold text-xl mb-3">💰 Revenue Model</h3>
                <p className="text-gray-600 mb-4">
                  Predictable services revenue (AI transformation, RPA/IPA, global delivery) funds SaaS R&D without dilution
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 2026: $500K+ services ARR baseline</li>
                  <li>• 2027: $1.5M services, $2M SaaS (60% mix)</li>
                  <li>• 2028: $2M services, $5M SaaS (70% mix)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-xl mb-3">🚀 Market Opportunity</h3>
                <p className="text-gray-600 mb-4">
                  Aligned with Gartner prediction: 40% of enterprise apps will feature agentic AI by 2026
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AI education: $5.88B → $32.27B (2030)</li>
                  <li>• Marketing automation: 36.6% CAGR</li>
                  <li>• Vertical SaaS: 8-12x revenue multiples</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-xl mb-3">🎯 Competitive Advantages</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Agentic AI capabilities (not chatbot wrappers)</li>
                  <li>• Vertical-specific solutions with high switching costs</li>
                  <li>• Global delivery cost arbitrage (50-70% savings)</li>
                  <li>• Services validate SaaS features with real clients</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-xl mb-3">📊 Portfolio Approach</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Risk diversification across 6+ products</li>
                  <li>• Shared infrastructure reduces marginal cost</li>
                  <li>• Multiple exit opportunities (spin-outs or full portfolio)</li>
                  <li>• Rapid experimentation with built-in validation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-shiro-black mb-8 text-center">
              Investment Inquiry
            </h2>

            <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-shiro-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-shiro-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-shiro-black mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-shiro-black mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                  >
                    <option value="">Select type</option>
                    <option value="equity-investment">Equity Investment</option>
                    <option value="strategic-partnership">Strategic Partnership</option>
                    <option value="acquisition-interest">Acquisition Interest</option>
                    <option value="product-spinout">Product Spin-out</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-shiro-black mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                  placeholder="Tell us about your investment interests and timeline..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
              >
                Submit Inquiry
              </button>

              <p className="text-sm text-gray-600 text-center">
                All inquiries are confidential and will receive a response within 2 business days.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-shiro-black mb-6">
              Key Metrics & Milestones
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-shiro-red mb-2">2001</div>
                <p className="text-sm text-gray-600">Founded</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-shiro-red mb-2">6+</div>
                <p className="text-sm text-gray-600">SaaS Products</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-shiro-red mb-2">3</div>
                <p className="text-sm text-gray-600">Global Regions</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-shiro-red mb-2">70%+</div>
                <p className="text-sm text-gray-600">Target SaaS Mix (2028)</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-900">
                <strong>Target Valuation:</strong> $150M-$200M by 2030 (6-8x SaaS ARR multiple on $25M+ revenue)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
INVESTORS_EOF

echo "  ✅ investors/page.tsx created"

echo ""
echo "✅ Batch 9 Part 2 - Phase 1 Complete!"
echo ""
echo "CREATED:"
echo "  ✅ Logo aligned + Technologies underlined"
echo "  ✅ Footer EST. 2001 + bottom padding"
echo "  ✅ Careers page (comprehensive with benefits)"
echo "  ✅ Investors page (with contact form)"
echo ""
echo "REMAINING: About page updates, legal pages, hero alignment"
echo "Creating Phase 2 script..."
echo ""

# Build
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 BUILD SUCCESSFUL!"
    echo ""
    read -p "Push Phase 1 to GitHub? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cd ~/projects/shiro-group-monorepo
        git add .
        git commit -m "Batch 9 Part 2 Phase 1: Logo align, Footer EST.2001, Careers + Investors pages"
        git push origin main
        
        echo ""
        echo "🎉 Phase 1 Deployed!"
        echo ""
        echo "🎯 Next: Run Part 2 Phase 2 for:"
        echo "  • About page updates (culture, no flags)"
        echo "  • Hero alignment (About, Global Presence)"
        echo "  • Legal pages"
        echo "  • Calculator SEO"
    fi
else
    echo ""
    echo "❌ Build failed - see errors above"
fi
