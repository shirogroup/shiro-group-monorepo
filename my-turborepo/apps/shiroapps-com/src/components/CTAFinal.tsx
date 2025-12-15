import { CTA_FINAL } from '@/lib/constants'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function CTAFinal() {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {CTA_FINAL.title}
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          {CTA_FINAL.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          {CTA_FINAL.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-200">{feature}</span>
            </div>
          ))}
        </div>
        <Link
          href="#signup"
          className="inline-flex items-center px-8 py-4 bg-white text-shiro-red rounded-lg font-bold text-lg hover:shadow-xl transition-all"
        >
          {CTA_FINAL.cta}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
