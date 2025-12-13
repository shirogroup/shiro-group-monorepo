'use client'

import Link from 'next/link'

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-cta text-white py-4 shadow-2xl z-40 hidden md:block">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-lg">Ready to Transform with AI?</p>
            <p className="text-sm text-gray-100">Get started with SHIRO Technologies today</p>
          </div>
          <div className="flex gap-4">
            <Link href="/#calculator" className="bg-white text-shiro-red hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-all">
              Calculate Savings
            </Link>
            <Link href="/contact" className="bg-shiro-black hover:bg-shiro-gray-dark px-6 py-3 rounded-md font-semibold transition-all">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
