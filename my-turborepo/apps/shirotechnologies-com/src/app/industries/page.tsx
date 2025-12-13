import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industries We Serve - Vertical AI Solutions',
  description: 'Industry-specific AI solutions and automation for healthcare, financial services, real estate, technology, and professional services.',
  keywords: [
    'vertical AI solutions',
    'industry-specific AI',
    'healthcare AI automation',
    'financial services AI',
    'real estate AI',
    'AI for professional services',
    'vertical SaaS',
  ],
}

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Healthcare & Life Sciences',
      icon: '🏥',
      solutions: [
        'Patient data processing automation',
        'Clinical documentation AI',
        'Healthcare compliance automation',
        'Medical billing optimization',
      ],
      products: ['Document processing RPA', 'Compliance tracking AI'],
    },
    {
      name: 'Financial Services',
      icon: '💰',
      solutions: [
        'Transaction processing automation',
        'Fraud detection AI',
        'Regulatory compliance automation',
        'Customer onboarding RPA',
      ],
      products: ['Process automation', 'Risk assessment AI'],
    },
    {
      name: 'Real Estate & Title',
      icon: '🏠',
      solutions: [
        'Document review automation',
        'Title search intelligence',
        'Compliance verification AI',
        'Transaction coordination',
      ],
      products: ['SHIRO Title (Coming 2026)'],
    },
    {
      name: 'Technology & SaaS',
      icon: '💻',
      solutions: [
        'Development automation',
        'DevOps AI optimization',
        'Testing automation',
        'Customer support AI',
      ],
      products: ['SHIRO Cloud', 'CloudSourceHRM'],
    },
    {
      name: 'Professional Services',
      icon: '👔',
      solutions: [
        'Workforce automation',
        'Client onboarding RPA',
        'Knowledge management AI',
        'Billing automation',
      ],
      products: ['SHIRO Apps suite'],
    },
    {
      name: 'Retail & E-Commerce',
      icon: '🛍️',
      solutions: [
        'Inventory management AI',
        'Customer service automation',
        'Order processing RPA',
        'Marketing automation',
      ],
      products: ['SHIJO.ai marketing platform'],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vertical AI Solutions for Every Industry
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-specific agentic AI and automation tailored to your sector's unique challenges
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-shiro-red hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-shiro-black mb-4">{industry.name}</h3>
                
                <h4 className="font-semibold text-sm text-gray-600 mb-2 uppercase">Solutions:</h4>
                <ul className="space-y-2 mb-6">
                  {industry.solutions.map((solution, sidx) => (
                    <li key={sidx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-shiro-red mr-2">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-sm text-gray-600 mb-2 uppercase">Applicable Products:</h4>
                <div className="space-y-1">
                  {industry.products.map((product, pidx) => (
                    <p key={pidx} className="text-sm text-shiro-red font-semibold">→ {product}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vertical AI */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6">
              Why Vertical AI Solutions?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Generic AI tools miss industry-specific nuances. Our vertical approach delivers higher accuracy and faster ROI.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">🎯 Higher Accuracy</h3>
                <p className="text-gray-600 text-sm">
                  Industry-specific training data results in 90%+ accuracy vs 60-70% for generic AI
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">⚡ Faster Deployment</h3>
                <p className="text-gray-600 text-sm">
                  Pre-built workflows and compliance templates reduce implementation time by 50%
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">🔒 Defensible Moats</h3>
                <p className="text-gray-600 text-sm">
                  Proprietary vertical data creates switching costs and competitive advantages
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
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss AI solutions tailored to your industry's specific needs and challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            Schedule Industry Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
