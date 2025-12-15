'use client'

import { useState } from 'react'
import { PRICING } from '@/lib/constants'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {PRICING.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {PRICING.subtitle}
          </p>
          <div className="inline-flex items-center bg-shiro-gray rounded-lg p-1">
            <button
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white shadow-md text-shiro-red'
                  : 'text-gray-600'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-white shadow-md text-shiro-red'
                  : 'text-gray-600'
              }`}
              onClick={() => setBillingPeriod('annual')}
            >
              Annual <span className="text-green-600 ml-1">(Save 17%)</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING.tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl p-8 ${
                tier.popular
                  ? 'border-2 border-shiro-red shadow-xl scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-cta text-white rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    {billingPeriod === 'annual' && tier.annualPrice
                      ? tier.annualPrice
                      : tier.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{tier.period}</span>
                </div>
                {billingPeriod === 'annual' && tier.annualPrice && (
                  <p className="text-sm text-green-600 mt-1">
                    Billed annually ({tier.annualPrice}/year)
                  </p>
                )}
              </div>
              <Link
                href={tier.ctaLink}
                className={`block w-full py-3 rounded-lg font-bold text-center mb-6 transition-all ${
                  tier.popular
                    ? 'bg-gradient-cta text-white hover:shadow-lg'
                    : 'bg-shiro-gray text-shiro-black hover:bg-gray-300'
                }`}
              >
                {tier.cta}
              </Link>
              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8">
          {PRICING.moneyBackGuarantee}
        </p>
      </div>
    </section>
  )
}
