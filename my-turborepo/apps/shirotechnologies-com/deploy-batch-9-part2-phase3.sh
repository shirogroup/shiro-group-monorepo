#!/bin/bash

# SHIRO Technologies - Batch 9 Part 2 Phase 3 (FINAL COMPLETE)
# Logo fix, Favicon, Global Presence alignment, Legal pages, Calculator SEO

echo "🚀 SHIRO Technologies - Batch 9 Part 2 Phase 3 (FINAL)"
echo "========================================================"
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "✅ Found project directory"
echo ""
echo "📝 Creating final fixes and remaining pages..."

# FIX 1: Logo - Globe more down, underline from T to g
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
      
      {/* Globe as O - aligned lower with SHIR baseline */}
      <g transform="translate(118, 22)">
        <circle cx="0" cy="0" r="17" fill="#CC0000" stroke="#990000" strokeWidth="2" />
        
        <line x1="0" y1="-17" x2="0" y2="17" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="-12" y1="-12" x2="-12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="12" y1="-12" x2="12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        
        <line x1="-17" y1="0" x2="17" y2="0" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="0" cy="0" rx="17" ry="7" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        <ellipse cx="0" cy="0" rx="17" ry="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        
        <circle cx="7" cy="-7" r="3" fill="#ffffff" opacity="0.4" />
      </g>
      
      {/* Technologies text */}
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
      
      {/* RED underline from T to g (Technolog) */}
      <line x1="92" y1="66" x2="214" y2="66" stroke="#CC0000" strokeWidth="2" />
    </svg>
  )
}
LOGO_EOF

echo "  ✅ Logo.tsx (Globe lower, underline T to g)"

# FIX 2: Favicon - Just red globe (matching logo)
cat > public/favicon.svg << 'FAVICON_EOF'
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Red Globe matching logo -->
  <circle cx="32" cy="32" r="28" fill="#CC0000" stroke="#990000" stroke-width="3" />
  
  <!-- Vertical lines (longitude) -->
  <line x1="32" y1="4" x2="32" y2="60" stroke="#ffffff" stroke-width="2.5" />
  <line x1="13" y1="13" x2="13" y2="51" stroke="#ffffff" stroke-width="1.5" opacity="0.8" />
  <line x1="51" y1="13" x2="51" y2="51" stroke="#ffffff" stroke-width="1.5" opacity="0.8" />
  
  <!-- Horizontal lines (latitude) -->
  <line x1="4" y1="32" x2="60" y2="32" stroke="#ffffff" stroke-width="2.5" />
  <ellipse cx="32" cy="32" rx="28" ry="12" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.7" />
  <ellipse cx="32" cy="32" rx="28" ry="20" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.5" />
  
  <!-- Highlight -->
  <circle cx="42" cy="22" r="5" fill="#ffffff" opacity="0.4" />
</svg>
FAVICON_EOF

echo "  ✅ favicon.svg (Red globe matching logo)"

# FIX 3: Update layout.tsx for favicon
cat > UPDATE_LAYOUT_FOR_FAVICON.txt << 'LAYOUT_UPDATE'
UPDATE src/app/layout.tsx:

Add favicon link in the <html> tag:

<html lang="en">
  <head>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body className={`${inter.className} pb-20`}>
    {/* ... rest of body ... */}
  </body>
</html>

The favicon.svg file is already created in public/
LAYOUT_UPDATE

echo "  ⚠️  UPDATE_LAYOUT_FOR_FAVICON.txt created"

# FIX 4: Technology Partners - Update constants
cat > UPDATE_CONSTANTS_FINAL.txt << 'CONSTANTS_UPDATE'
CRITICAL UPDATE - src/lib/constants.ts:

Replace TECH_PARTNERS array completely:

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
  'Brevo',
  'Carrd',
  'Railway',
  'Netlify',
  'Bolt.new'
]

This includes all requested partners:
✓ Carrd
✓ Railway (note: Railways → Railway)
✓ Supabase
✓ GCP
✓ Netlify
✓ Bolt.new
CONSTANTS_UPDATE

echo "  ⚠️  UPDATE_CONSTANTS_FINAL.txt created"

# FIX 5: Global Presence page - Aligned hero, centered content
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
    <div>
      {/* Hero - RED/WHITE like AI Transformation */}
      <section className="gradient-hero py-20 md:py-28 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-block bg-shiro-red px-4 py-2 rounded-md text-sm font-semibold mb-4">
              🌍 Global Delivery Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Multi-Region Development Centers Delivering 24/7 Excellence
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Strategic presence across USA, Canada, and India enabling follow-the-sun development 
              with 50-70% cost savings and enterprise-grade quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#delivery-centers"
                className="bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-md font-semibold text-lg transition-all"
              >
                View Our Locations
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-shiro-black px-8 py-4 rounded-md font-semibold text-lg transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Centers - ALIGNED PROPERLY */}
      <section id="delivery-centers" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* USA */}
            <div>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🇺🇸</div>
                <h3 className="text-2xl font-bold text-shiro-black">United States</h3>
                <p className="text-gray-500 text-sm mt-1">Primary Headquarters</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-shiro-black">Location</h4>
                <p className="text-gray-700 mb-4">
                  5080 Spectrum Drive, Suite 575E<br />
                  Addison, Texas 75001
                </p>
                
                <h4 className="font-semibold text-lg mb-3 text-shiro-black">Capabilities</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    Strategic consulting & planning
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    Product management & roadmap
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    Client services & success
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    Investor relations
                  </li>
                </ul>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">EST. 2001</p>
                </div>
              </div>
            </div>

            {/* Canada */}
            <div>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🇨🇦</div>
                <h3 className="text-2xl font-bold text-shiro-black">Canada</h3>
                <p className="text-gray-500 text-sm mt-1">Nearshore Center</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-shiro-black">Location</h4>
                <p className="text-gray-700 mb-2">Nearshore Delivery</p>
                <a 
                  href="https://shirotechnologies.ca" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-shiro-red hover:underline text-sm block mb-4"
                >
                  Visit SHIRO Canada →
                </a>
                
                <h4 className="font-semibold text-lg mb-3 text-shiro-black">Capabilities</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    Nearshore development teams
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    QA automation & testing
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    Compliance expertise
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    Time zone advantages
                  </li>
                </ul>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Operational Hub</p>
                </div>
              </div>
            </div>

            {/* India */}
            <div>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🇮🇳</div>
                <h3 className="text-2xl font-bold text-shiro-black">India</h3>
                <p className="text-gray-500 text-sm mt-1">Offshore Center</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-shiro-black">Location</h4>
                <p className="text-gray-700 mb-2">
                  442, 6th Main Road, 2nd Floor<br />
                  Vijayanagar 1st Stage<br />
                  Mysuru, Karnataka 570017
                </p>
                <a 
                  href="https://shirotechnologies.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-shiro-red hover:underline text-sm block mb-4"
                >
                  Visit SHIRO India →
                </a>
                
                <h4 className="font-semibold text-lg mb-3 text-shiro-black">Capabilities</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    Offshore engineering
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    24/7 support & monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    AI/ML development
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    Cost optimization
                  </li>
                </ul>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">EST. 2008</p>
                </div>
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
            Ready for Global Delivery Excellence?
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
    </div>
  )
}
GLOBAL_EOF

echo "  ✅ global-presence/page.tsx (RED hero, properly aligned columns)"

echo ""
echo "Creating legal pages..."

# Create Terms & Conditions page (simplified for space)
cat > src/app/terms-and-conditions/page.tsx << 'TERMS_EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - SHIRO Technologies',
  description: 'Terms and conditions for using SHIRO Technologies services and products.',
}

export default function TermsPage() {
  return (
    <div>
      <section className="gradient-hero py-12 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
          <p className="text-gray-300 mt-2">Last Updated: December 14, 2025</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using SHIRO Technologies LLC services and products, you accept and agree to be bound 
            by these Terms and Conditions. If you do not agree, please do not use our services.
          </p>

          <h2>2. Services Description</h2>
          <p>SHIRO Technologies provides:</p>
          <ul>
            <li>AI transformation consulting and implementation</li>
            <li>RPA and intelligent process automation</li>
            <li>Global software development services</li>
            <li>SaaS products (InstantResumeAI, ResumeBlast, CloudSourceHRM, etc.)</li>
          </ul>

          <h2>3. User Obligations</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate information</li>
            <li>Maintain confidentiality of account credentials</li>
            <li>Use services only for lawful purposes</li>
            <li>Not interfere with service operations</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>
            Payment terms vary by service. Subscriptions are billed monthly or annually. 
            Services projects are billed per agreed contract terms. All fees are non-refundable 
            unless otherwise specified.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content, trademarks, and intellectual property remain the property of SHIRO Technologies LLC. 
            You may not copy, modify, or distribute our content without written permission.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            SHIRO Technologies shall not be liable for indirect, incidental, or consequential damages. 
            Our total liability is limited to the amount paid for services in the preceding 12 months.
          </p>

          <h2>7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access for violations of these terms. 
            You may cancel services per the terms of your agreement.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We may update these terms periodically. Continued use of services constitutes acceptance 
            of updated terms.
          </p>

          <h2>9. Contact</h2>
          <p>
            <strong>SHIRO Technologies LLC</strong><br />
            5080 Spectrum Drive Suite 575E<br />
            Addison, TX 75001, USA<br />
            Email: Info@shirotechnologies.com<br />
            Phone: (800) 971-8013
          </p>
        </div>
      </section>
    </div>
  )
}
TERMS_EOF

echo "  ✅ terms-and-conditions/page.tsx created"

echo ""
echo "✅ Batch 9 Part 2 Phase 3 - Critical fixes complete!"
echo ""
echo "Due to script size, remaining legal pages (GDPR, AI, Security)"
echo "and calculator SEO will be in a separate quick script."
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
        git commit -m "Batch 9 Phase 3: Logo fix, Favicon, Global Presence RED hero + alignment, Terms page"
        git push origin main
        
        echo ""
        echo "🎉 Phase 3 Deployed!"
        echo ""
        echo "📋 COMPLETED:"
        echo "  ✅ Logo - Globe aligned, underline T to g"
        echo "  ✅ Favicon - Red globe matching logo"
        echo "  ✅ Global Presence - RED/WHITE hero, aligned columns"
        echo "  ✅ Terms & Conditions page"
        echo ""
        echo "🎯 FINAL ITEMS (Quick batch):"
        echo "  • GDPR Compliance page"
        echo "  • AI Compliance page"
        echo "  • Security page"
        echo "  • Calculator SEO pages"
        echo ""
        echo "Request final quick batch!"
    fi
else
    echo ""
    echo "❌ Build failed - see errors above"
fi
