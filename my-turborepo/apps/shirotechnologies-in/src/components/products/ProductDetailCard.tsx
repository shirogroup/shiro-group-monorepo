import { Product } from '@/lib/types'
import Link from 'next/link'

interface ProductDetailCardProps {
  product: Product
}

export function ProductDetailCard({ product }: ProductDetailCardProps) {
  const isLive = product.status === 'live'
  const statusBadge = isLive ? '✅ Live' : `🚧 Beta ${product.betaDate}`

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
      {/* Header with gradient */}
      <div className="gradient-hero p-8 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-sm mb-3 uppercase tracking-wide">
              Autonomous SaaS Product
            </span>
            <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
            <p className="text-lg opacity-90">{product.tagline}</p>
          </div>
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
            {statusBadge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-6">
          <h4 className="font-bold text-shiro-black mb-3">Description</h4>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-shiro-black mb-3">Key Features</h4>
          <ul className="space-y-2">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-gray-600">
                <span className="text-shiro-red mr-2 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {product.pricing && (
          <div className="mb-6">
            <h4 className="font-bold text-shiro-black mb-3">Pricing</h4>
            <div className="space-y-2">
              {Object.entries(product.pricing).map(([tier, price]) => (
                <div key={tier} className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700 font-semibold capitalize">{tier}</span>
                  <span className="text-shiro-red font-bold">{price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.target && (
          <div className="mb-6">
            <h4 className="font-bold text-shiro-black mb-3">Target Audience</h4>
            <p className="text-gray-600">{product.target}</p>
          </div>
        )}

        <div className="flex gap-4">
          {isLive && product.url ? (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-md font-semibold text-center transition-all"
            >
              Visit Platform →
            </a>
          ) : (
            <button
              disabled
              className="flex-1 bg-gray-300 text-gray-600 px-6 py-3 rounded-md font-semibold text-center cursor-not-allowed"
            >
              Coming Soon
            </button>
          )}
          <Link
            href="/contact"
            className="flex-1 border-2 border-shiro-red text-shiro-red hover:bg-shiro-red hover:text-white px-6 py-3 rounded-md font-semibold text-center transition-all"
          >
            Get Demo
          </Link>
        </div>
      </div>
    </div>
  )
}
