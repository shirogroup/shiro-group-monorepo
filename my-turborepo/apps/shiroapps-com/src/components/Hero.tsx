'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  badge?: string
  headline: string
  subheadline: string
  cta: {
    primary: {
      label: string
      url: string
    }
    secondary?: {
      label: string
      url: string
    }
  }
  stats?: Array<{
    label: string
    value: string
  }>
}

export default function Hero({ badge, headline, subheadline, cta, stats }: HeroProps) {
  return (
    <section className="relative bg-gradient-hero py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {badge && (
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              {badge}
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={cta.primary.url}
              className="inline-flex items-center px-8 py-4 bg-gradient-cta text-white rounded-lg font-semibold hover:shadow-2xl transition-all text-lg group"
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.primary.label}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            {cta.secondary && (
              <a
                href={cta.secondary.url}
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all text-lg"
              >
                {cta.secondary.label}
              </a>
            )}
          </div>
        </div>
        
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
