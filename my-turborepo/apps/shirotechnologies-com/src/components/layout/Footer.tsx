import Link from 'next/link'
import { SITE_CONFIG, TECH_PARTNERS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-shiro-black text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-shiro-red mb-4">SHIRO Technologies LLC</h4>
            <p className="text-sm text-gray-300 mb-6">
              The foundational services entity powering our global agentic AI SaaS portfolio.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">All Products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-transformation" className="text-gray-300 hover:text-white transition-colors">AI Transformation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About SHIRO</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 SHIRO Technologies LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
