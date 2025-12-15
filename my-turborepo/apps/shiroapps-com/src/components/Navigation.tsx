'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAVIGATION } from '@/lib/constants'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/shiro-logo.svg"
              alt="SHIRO Technologies"
              width={200}
              height={67}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-shiro-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#signup"
              className="px-6 py-2 bg-gradient-cta text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              {NAVIGATION.cta}
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {NAVIGATION.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-shiro-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#signup"
              className="block mt-4 px-6 py-2 bg-gradient-cta text-white rounded-lg font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {NAVIGATION.cta}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
