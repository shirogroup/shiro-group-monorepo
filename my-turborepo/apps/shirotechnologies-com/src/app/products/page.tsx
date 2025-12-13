import { PRODUCTS } from '@/lib/constants'
import { ProductDetailCard } from '@/components/products/ProductDetailCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Autonomous SaaS Products',
  description: 'Explore SHIRO\'s portfolio of autonomous agentic AI SaaS platforms - from resume tools to cloud utilities, built for global scale.',
}

export default function ProductsPage() {
  const liveProducts = PRODUCTS.filter((p) => p.status === 'live')
  const devProducts = PRODUCTS.filter((p) => p.status === 'development')

  return (
    <>
      {/* Page Hero */}
      <section className="gradient-hero py-20 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Autonomous Agentic AI SaaS Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-shiro-red mb-4">
            Independent platforms built for global scale
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            These products represent our innovation lab - each designed with agentic AI at the core, 
            targeting vertical markets with high switching costs and defensible moats.
          </p>
        </div>
      </section>

      {/* Live Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-8">
            ✅ Live & Scaling
          </h2>
          <div className="space-y-10">
            {liveProducts.map((product) => (
              <ProductDetailCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Development Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-3">
            🚧 In Development
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Launching Q1-Q2 2026 with agentic AI capabilities aligned to Gartner's 2025-2028 trends
          </p>
          <div className="space-y-10">
            {devProducts.map((product) => (
              <ProductDetailCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Partnering or Enterprise Licensing?
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-3xl mx-auto">
            These products are built, funded, and validated by SHIRO Technologies' services revenue. 
            Explore partnership, white-label, or enterprise opportunities.
          </p>
          <a
            href="/contact?inquiry=products"
            className="inline-block bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            Contact Us About Products
          </a>
        </div>
      </section>
    </>
  )
}
