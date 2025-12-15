import Link from 'next/link'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-shiro-black text-white py-2.5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-8">
              <a 
                href={`tel:${SITE_CONFIG.contact.productsServicesPhone.replace(/[^0-9]/g, '')}`} 
                className="hover:text-shiro-red transition-colors"
              >
                📞 {SITE_CONFIG.contact.productsServicesPhone}
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.contact.email}`} 
                className="hover:text-shiro-red transition-colors"
              >
                ✉️ {SITE_CONFIG.contact.email}
              </a>
            </div>
            <div className="flex gap-6">
              <Link href="#calculator" className="hover:text-shiro-red transition-colors">
                Calculate Savings
              </Link>
              <Link href="/contact" className="hover:text-shiro-red transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex-shrink-0">
              <Logo className="h-20 w-auto" />
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-semibold text-shiro-black hover:text-shiro-red transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button className="lg:hidden text-shiro-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
