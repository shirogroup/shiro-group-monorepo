'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SHIRO Apps</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/instantresumeai" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                  <div className="font-semibold text-gray-900">InstantResumeAI</div>
                  <div className="text-sm text-gray-600">AI Resume Builder</div>
                </Link>
                <Link href="/cloudsourcehrm" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                  <div className="font-semibold text-gray-900">CloudSourceHRM</div>
                  <div className="text-sm text-gray-600">HR Management</div>
                </Link>
                <Link href="/resumeblast" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                  <div className="font-semibold text-gray-900">ResumeBlast</div>
                  <div className="text-sm text-gray-600">Job Application Automation</div>
                </Link>
              </div>
            </div>

            <Link href="/services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Case Studies
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              About
            </Link>
            <Link 
              href="/contact" 
              className="gradient-bg text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <div className="font-semibold text-gray-500 text-sm uppercase px-4 py-2">Products</div>
              <Link href="/instantresumeai" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                InstantResumeAI
              </Link>
              <Link href="/cloudsourcehrm" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                CloudSourceHRM
              </Link>
              <Link href="/resumeblast" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                ResumeBlast
              </Link>
              <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                Services
              </Link>
              <Link href="/case-studies" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                Case Studies
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                About
              </Link>
              <Link href="/contact" className="block mx-4 my-2 gradient-bg text-white px-6 py-2 rounded-lg font-semibold text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
