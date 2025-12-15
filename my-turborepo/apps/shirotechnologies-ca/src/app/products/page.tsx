import type { Metadata } from 'next'
import Link from 'next/link'
import { PRODUCTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Products - SHIRO AI SaaS Portfolio',
  description: 'Explore SHIRO\'s portfolio of agentic AI SaaS products including InstantResumeAI, ResumeBlast.ai, CloudSourceHRM, and more.',
  keywords: ['AI products', 'SaaS products', 'AI agents', 'career AI', 'HR tech', 'marketing automation'],
}

export default function ProductsPage() {
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
            {PRODUCTS.live.map((product) => (
              <div key={product.name} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-shiro-red transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    LIVE
                  </span>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
                <h3 className="text-xl font-bold text-shiro-black mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-2 rounded-md font-semibold transition-all"
                >
                  Visit Product →
                </a>
              </div>
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
            {PRODUCTS.inDevelopment.map((product) => (
              <div key={product.name} className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    IN DEVELOPMENT
                  </span>
                </div>
                <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                <h3 className="text-lg font-bold text-shiro-black mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
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
