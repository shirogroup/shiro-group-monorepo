'use client'

import Link from 'next/link'

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-cta text-white py-4 shadow-2xl z-40 hidden md:block">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center gap-4">
          {/* Text in black box for visibility */}
          <div className="bg-shiro-black px-6 py-3 rounded-md flex-grow max-w-md">
            <p className="font-bold text-lg text-white">Ready to Transform with AI?</p>
            <p className="text-sm text-gray-200">Get started with SHIRO Technologies today</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 flex-shrink-0">
            <Link
              href="/#calculator"
              className="bg-white text-shiro-red hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-all whitespace-nowrap"
            >
              Calculate Savings
            </Link>
            <Link
              href="/contact"
              className="bg-shiro-black hover:bg-gray-800 px-6 py-3 rounded-md font-semibold transition-all whitespace-nowrap border-2 border-white"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
