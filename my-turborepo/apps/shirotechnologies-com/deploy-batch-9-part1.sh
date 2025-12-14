#!/bin/bash

# SHIRO Technologies - Batch 9 Part 1
# CRITICAL: Logo fix, Footer redesign, LinkedIn icon, Favicon, Tech partners

echo "🚀 SHIRO Technologies - Batch 9 Part 1"
echo "========================================"
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "✅ Found project directory"
echo ""

# CRITICAL FIX 1: Logo - Globe VERY close to R
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
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="38"
        fontWeight="bold"
        fill="#CC0000"
      >
        SHIR
      </text>
      
      {/* Globe as O - VERY CLOSE to R, same baseline, touching */}
      <g transform="translate(118, 19)">
        {/* Main circle - matching text height */}
        <circle cx="0" cy="0" r="17" fill="#CC0000" stroke="#990000" strokeWidth="2" />
        
        {/* Vertical lines (longitude) */}
        <line x1="0" y1="-17" x2="0" y2="17" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="-12" y1="-12" x2="-12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="12" y1="-12" x2="12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        
        {/* Horizontal lines (latitude) */}
        <line x1="-17" y1="0" x2="17" y2="0" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="0" cy="0" rx="17" ry="7" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        <ellipse cx="0" cy="0" rx="17" ry="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        
        {/* Highlight */}
        <circle cx="7" cy="-7" r="3" fill="#ffffff" opacity="0.4" />
      </g>
      
      {/* Technologies text - centered below SHIRO */}
      <text
        x="140"
        y="62"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="#333333"
        textAnchor="middle"
      >
        Technologies
      </text>
    </svg>
  )
}
LOGO_EOF

echo "  ✅ Logo.tsx (Globe moved to x:118 - TOUCHING R)"

# FIX 2: Favicon - Just the globe
cat > public/favicon.svg << 'FAVICON_EOF'
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Globe as favicon -->
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

echo "  ✅ favicon.svg created"

# FIX 3: Update constants.ts with new tech partners
cat > UPDATE_CONSTANTS_BATCH9.txt << 'CONST_EOF'
MANUAL UPDATE - src/lib/constants.ts:

Update TECH_PARTNERS array:

export const TECH_PARTNERS = [
  'Next.js',
  'Supabase',
  'Vercel',
  'Stripe',
  'Google Cloud',
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

Update SITE_CONFIG links:

links: {
  linkedin: 'https://bit.ly/shirotechnologies',
  linkedinFull: 'https://www.linkedin.com/company/shiro-technologies-inc',
  twitter: 'https://twitter.com/shirotech',
}
CONST_EOF

echo "  ⚠️  UPDATE_CONSTANTS_BATCH9.txt created"

# FIX 4: Footer - Redesigned with separate columns, LinkedIn icon, compact layout
cat > src/components/layout/Footer.tsx << 'FOOTER_EOF'
import Link from 'next/link'
import { SITE_CONFIG, TECH_PARTNERS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-shiro-black text-white py-12 pb-28 md:pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-10">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-shiro-red mb-3">
              SHIRO Technologies
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              Agentic AI transformation and global delivery since 2001
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
              <p>Established 2001</p>
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

echo "  ✅ Footer.tsx (Redesigned - compact, separate columns, LinkedIn icon)"

# FIX 5: Update layout.tsx to include favicon
cat > UPDATE_LAYOUT_FAVICON.txt << 'LAYOUT_EOF'
UPDATE src/app/layout.tsx:

Add to <head> section (inside <html> tag):

<head>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</head>

NOTE: Favicon is already created at public/favicon.svg
LAYOUT_EOF

echo "  ⚠️  UPDATE_LAYOUT_FAVICON.txt created"

echo ""
echo "✅ Batch 9 Part 1 created!"
echo ""
echo "CRITICAL CHANGES:"
echo "  ✅ Logo: Globe at x:118 (VERY close to R)"
echo "  ✅ Favicon: Globe SVG created"
echo "  ✅ Footer: Redesigned (compact, 2 columns, separated Company/Legal)"
echo "  ✅ LinkedIn: Icon added, bit.ly link hidden"
echo "  ✅ Tech Partners: Added 6 new partners"
echo "  ✅ Copyright: © 2025 added"
echo ""
echo "MANUAL STEPS REQUIRED:"
echo "  1. Update constants.ts with tech partners (see UPDATE_CONSTANTS_BATCH9.txt)"
echo "  2. Update layout.tsx with favicon (see UPDATE_LAYOUT_FAVICON.txt)"
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
        git commit -m "Batch 9 Part 1: Logo fix (close to R), Footer redesign, LinkedIn icon, Favicon, Tech partners"
        git push origin main
        
        echo ""
        echo "🎉 Part 1 Deployed!"
        echo ""
        echo "🎯 Next: Batch 9 Part 2 will include:"
        echo "  • Calculator pages with SEO optimization"
        echo "  • Hero alignment for About/Global Presence"
        echo "  • Careers and Investors pages"
        echo "  • Company culture in About"
        echo "  • Link audit"
    fi
else
    echo ""
    echo "❌ Build failed - see errors above"
fi
