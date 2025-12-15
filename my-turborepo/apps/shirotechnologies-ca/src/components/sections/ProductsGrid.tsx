import Link from 'next/link'
import { PRODUCTS } from '@/lib/constants'

export function ProductsGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
            Our Agentic AI SaaS Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Live products and solutions in development across multiple verticals
          </p>
        </div>

        {/* Live Products */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-shiro-black mb-6 text-center">Live Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.live.map((product) => (
              <div key={product.name} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-shiro-red hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                    LIVE
                  </span>
                  <span className="text-xs text-gray-500">{product.category}</span>
                </div>
                <h4 className="text-xl font-bold text-shiro-black mb-3">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
                >
                  Visit Product →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* In Development */}
        <div>
          <h3 className="text-2xl font-bold text-shiro-black mb-6 text-center">In Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PRODUCTS.inDevelopment.map((product) => (
              <div key={product.name} className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                  COMING SOON
                </span>
                <h4 className="text-lg font-bold text-shiro-black mt-3 mb-2">{product.name}</h4>
                <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
