import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About SHIRO Technologies',
  description: 'Learn about SHIRO Technologies - the foundational services entity powering our global agentic AI SaaS portfolio.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Foundational Services Entity Powering Our Global Agentic AI SaaS Portfolio
            </h1>
            <p className="text-xl text-gray-300">
              Strategic services revenue funding rapid SaaS innovation without dilution
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Transform the enterprise software landscape by combining strategic services excellence 
              with cutting-edge agentic AI SaaS products, creating defensible moats and sustainable growth.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-bold text-xl mb-2">Services First</h3>
                <p className="text-gray-600">
                  Predictable cash flow funds SaaS R&D without investor dependency
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="font-bold text-xl mb-2">SaaS Scale</h3>
                <p className="text-gray-600">
                  Autonomous platforms achieving 8-12x revenue multiples
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="font-bold text-xl mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  Multi-region delivery centers enabling 24/7 support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6 text-center">
              Our Strategic Framework
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              A proven model aligning with Gartner's 2025-2028 agentic AI predictions
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-shiro-red">
                <h3 className="font-bold text-xl mb-2">2026: Foundation Year</h3>
                <p className="text-gray-600">
                  Launch 3-4 agentic SaaS MVPs alongside $500K+ services ARR baseline
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-xl mb-2">2027: Traction & Validation</h3>
                <p className="text-gray-600">
                  Scale SaaS to $2M ARR, services to $1.5M, achieving 60%+ SaaS revenue mix
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-xl mb-2">2028: SaaS Dominance</h3>
                <p className="text-gray-600">
                  SaaS reaches $5M ARR (70% of revenue), demonstrate clear scaling trajectory
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-xl mb-2">2029-2031: Exit Readiness</h3>
                <p className="text-gray-600">
                  SaaS $25M+ ARR, 85%+ revenue mix, targeting $150M-$200M valuation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6">
              Why Portfolio Over Single Product?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Diversification, rapid learning, and multiple exit opportunities
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">✓ Risk Mitigation</h3>
                <p className="text-gray-600">
                  Multiple products reduce single-point failure; one success funds others
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">✓ Rapid Experimentation</h3>
                <p className="text-gray-600">
                  Test multiple markets simultaneously, double down on traction
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">✓ Shared Infrastructure</h3>
                <p className="text-gray-600">
                  Common tech stack, auth, payments reduce marginal cost per product
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">✓ Exit Flexibility</h3>
                <p className="text-gray-600">
                  Spin out individual products or sell entire portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6">
              Global Team Structure
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Distributed excellence across three continents
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-3">🇺🇸 US Operations</h3>
                <p className="text-gray-600">
                  Strategy, product management, client services, investor relations
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-3">🇨🇦 Canada Team</h3>
                <p className="text-gray-600">
                  Nearshore development, QA automation, compliance expertise
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-3">🇮🇳 India Center</h3>
                <p className="text-gray-600">
                  Offshore engineering, 24/7 support, AI/ML development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Transformation Journey
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Whether you're interested in our services, products, or partnership opportunities, 
            we'd love to connect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-shiro-red px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
