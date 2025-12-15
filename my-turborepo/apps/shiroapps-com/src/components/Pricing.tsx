'use client'

import { Check } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  url: string
  popular?: boolean
}

interface PricingProps {
  tiers: PricingTier[]
  title?: string
  subtitle?: string
}

export default function Pricing({ tiers, title = 'Pricing', subtitle }: PricingProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                tier.popular
                  ? 'border-2 border-shiro-red shadow-2xl scale-105'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-cta text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    / {tier.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={tier.url}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  tier.popular
                    ? 'bg-gradient-cta text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
