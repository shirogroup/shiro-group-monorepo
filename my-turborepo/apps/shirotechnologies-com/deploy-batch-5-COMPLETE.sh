#!/bin/bash

# SHIRO Technologies - Batch 5 Deployment Script
# Fixes: 1) Logo (no overlap, no tagline), 2) Sticky CTA (black box), 3) RPA/IPA services

echo "🚀 SHIRO Technologies - Batch 5 Deployment"
echo "==========================================="
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "✅ Found project directory"
echo ""
echo "📝 Applying fixes..."

# FIX 1: Logo - Clean SHIRO with globe O, Technologies below, no tagline
cat > src/components/layout/Logo.tsx << 'LOGO_EOF'
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="300"
      height="80"
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* SHIR text */}
      <text
        x="20"
        y="42"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="#CC0000"
      >
        SHIR
      </text>
      
      {/* Globe as O - same size, not overlapping */}
      <g transform="translate(145, 22)">
        {/* Main circle */}
        <circle cx="0" cy="0" r="18" fill="#CC0000" stroke="#990000" strokeWidth="2" />
        
        {/* Vertical lines (longitude) */}
        <line x1="0" y1="-18" x2="0" y2="18" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="-13" y1="-13" x2="-13" y2="13" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="13" y1="-13" x2="13" y2="13" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        
        {/* Horizontal lines (latitude) */}
        <line x1="-18" y1="0" x2="18" y2="0" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="0" cy="0" rx="18" ry="7" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        <ellipse cx="0" cy="0" rx="18" ry="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        
        {/* Highlight */}
        <circle cx="7" cy="-7" r="3" fill="#ffffff" opacity="0.4" />
      </g>
      
      {/* Technologies text - centered below */}
      <text
        x="150"
        y="68"
        fontFamily="Arial, sans-serif"
        fontSize="22"
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

echo "  ✅ Logo.tsx (Fixed - clean layout, no overlap)"

# FIX 2: StickyCTA - Put text in black box for visibility
cat > src/components/layout/StickyCTA.tsx << 'STICKY_EOF'
'use client'

import Link from 'next/link'

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-cta text-white py-4 shadow-2xl z-40 hidden md:block">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center gap-4">
          {/* Text in black box for visibility */}
          <div className="bg-shiro-black px-6 py-3 rounded-md flex-grow max-w-md">
            <p className="font-bold text-lg text-white">Ready to Transform with AI?</p>
            <p className="text-sm text-gray-200">Get started with SHIRO Technologies today</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 flex-shrink-0">
            <Link
              href="/#calculator"
              className="bg-white text-shiro-red hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-all whitespace-nowrap"
            >
              Calculate Savings
            </Link>
            <Link
              href="/contact"
              className="bg-shiro-black hover:bg-gray-800 px-6 py-3 rounded-md font-semibold transition-all whitespace-nowrap border-2 border-white"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
STICKY_EOF

echo "  ✅ StickyCTA.tsx (Fixed - text in black box, fully visible)"

# FIX 3: Update constants.ts - Replace QA with RPA/IPA
echo ""
echo "  🔧 Updating constants.ts (RPA/IPA services)..."

# Create backup
cp src/lib/constants.ts src/lib/constants.ts.backup

# Update SERVICES_PREVIEW section
# This uses sed to find and replace the QA service
sed -i "s/QA Automation & Testing/RPA \& Intelligent Process Automation/g" src/lib/constants.ts
sed -i "s/AI-powered test case generation/Robotic Process Automation/g" src/lib/constants.ts
sed -i "s/Autonomous regression testing/Intelligent document processing/g" src/lib/constants.ts
sed -i "s/Performance and security testing/Workflow automation/g" src/lib/constants.ts

echo "  ✅ constants.ts updated (RPA/IPA services)"

echo ""
echo "✅ All Batch 5 fixes applied!"
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
        git commit -m "Batch 5: Fix logo (no overlap/tagline), sticky CTA (black box), RPA/IPA services"
        git push origin main
        
        echo ""
        echo "🎉 DEPLOYED!"
        echo ""
        echo "📊 Batch 5 Complete - All Fixes Applied:"
        echo "  ✅ Logo: Clean SHIRO with globe O, no overlap, no tagline"
        echo "  ✅ Sticky CTA: Text in black box (now visible on all backgrounds)"
        echo "  ✅ Services: Updated to RPA & Intelligent Process Automation"
        echo ""
        echo "🔄 Changes will be live on Vercel in 2-3 minutes!"
        echo ""
        echo "📋 Next Steps:"
        echo "  • Test the logo in header"
        echo "  • Scroll down to see sticky CTA with black box"
        echo "  • Check homepage services section for RPA/IPA"
    fi
else
    echo ""
    echo "❌ Build failed - see errors above"
    echo "   Backup saved at: src/lib/constants.ts.backup"
fi
