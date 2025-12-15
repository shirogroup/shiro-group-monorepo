'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Compliance & Security', href: '/compliance' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Larger size: 285x95 (95% of 300x100) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/shiro-logo.svg"
              alt="SHIRO Technologies India"
              width={285}
              height={95}
              className="h-[95px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#CC0000] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Subtle link to main site products */}
            <a
              href="https://shirotechnologies.com/products"
              className="text-gray-500 hover:text-[#CC0000] transition-colors text-sm"
            >
              Products
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#CC0000] transition-colors font-medium px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <a
                href="https://shirotechnologies.com/products"
                className="text-gray-500 hover:text-[#CC0000] transition-colors text-sm px-4 py-2"
              >
                Products
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
