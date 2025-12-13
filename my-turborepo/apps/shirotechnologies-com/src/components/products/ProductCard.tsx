import Link from 'next/link'
import type { Product } from '@/lib/types'

export function ProductCard({ product }: { product: Product }) {
  const statusBadge = product.status === 'live' 
    ? <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">✅ Live</span>
    : <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">🚧 In Development</span>

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-shiro-black">{product.name}</h3>
        {statusBadge}
      </div>
      
      <p className="text-gray-600 mb-4 flex-grow">{product.tagline}</p>
      
      {product.status === 'live' && product.url && (
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-2 rounded-md font-semibold text-center transition-all"
        >
          Visit Site →
        </a>
      )}
      
      {product.status === 'development' && product.betaDate && (
        <div className="bg-gray-100 px-4 py-2 rounded-md text-center text-sm text-gray-600">
          Beta: {product.betaDate}
        </div>
      )}
    </div>
  )
}
