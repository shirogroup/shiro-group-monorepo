import { HERO } from '@/lib/constants'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="gradient-hero text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <span className="text-sm font-medium">{HERO.badge}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {HERO.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {HERO.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#signup"
                className="px-8 py-4 bg-gradient-cta text-white rounded-lg font-bold text-lg hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                {HERO.cta.primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 bg-white text-shiro-black rounded-lg font-bold text-lg hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                {HERO.cta.secondary}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {HERO.stats.map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <CheckCircle className="h-24 w-24 text-green-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-gray-800">Resume Screenshot</p>
                  <p className="text-gray-600 mt-2">ATS Score: 94%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
