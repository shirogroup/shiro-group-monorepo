#!/bin/bash

# SHIRO Technologies - Fix Products Page
# Update to work with new PRODUCTS structure from constants.ts

echo "🔧 Fixing products page..."
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

# Fix products page to use PRODUCTS.live and PRODUCTS.inDevelopment
cat > src/app/products/page.tsx << 'PRODUCTS_EOF'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PRODUCTS } from '@/lib/constants'
import { ProductDetailCard } from '@/components/ProductDetailCard'

export const metadata: Metadata = {
  title: 'Products - SHIRO AI SaaS Portfolio',
  description: 'Explore SHIRO\'s portfolio of agentic AI SaaS products including InstantResumeAI, ResumeBlast.ai, CloudSourceHRM, and more.',
  keywords: ['AI products', 'SaaS products', 'AI agents', 'career AI', 'HR tech', 'marketing automation'],
}

export default function ProductsPage() {
  const liveProducts = PRODUCTS.live
  const devProducts = PRODUCTS.inDevelopment

  return (
    <div>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Agentic AI SaaS Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Autonomous AI products delivering measurable value across career management, 
            HR, cloud operations, marketing, and education
          </p>
        </div>
      </section>

      {/* Live Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
              Live Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Currently available and serving customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveProducts.map((product) => (
              <ProductDetailCard
                key={product.name}
                name={product.name}
                description={product.description}
                category={product.category}
                status="live"
                url={product.url}
              />
            ))}
          </div>
        </div>
      </section>

      {/* In Development */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
              In Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Coming soon to our portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devProducts.map((product) => (
              <ProductDetailCard
                key={product.name}
                name={product.name}
                description={product.description}
                category={product.category}
                status="development"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-r from-shiro-red to-shiro-red-dark rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Partnership or Integration?
            </h2>
            <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
              We're open to strategic partnerships, API integrations, and white-label opportunities 
              across our product portfolio.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              Contact Partnership Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
PRODUCTS_EOF

echo "✅ products/page.tsx fixed"
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
        git commit -m "Fix: products page to use PRODUCTS.live and PRODUCTS.inDevelopment"
        git push origin main
        
        echo ""
        echo "🎉 Fixed and deployed!"
        echo ""
        echo "✅ Now update constants.ts and run final batch!"
    fi
else
    echo ""
    echo "❌ Still failing - checking for other issues..."
fi
