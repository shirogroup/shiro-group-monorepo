import { PRODUCTS } from '@/lib/constants'
import { ProductCard } from '@/components/products/ProductCard'

export function ProductsGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
            Our Agentic AI SaaS Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Zero-human-involvement platforms delivering autonomous intelligence across industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
