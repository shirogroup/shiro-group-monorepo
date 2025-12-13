import Link from 'next/link'
import { SITE_CONFIG, TECH_PARTNERS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-shiro-black text-white py-16 pb-32 md:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-shiro-red mb-4">
              SHIRO Technologies LLC
            </h4>
            <p className="text-sm text-gray-300 mb-2">Since 2001</p>
            <p className="text-sm text-gray-300 mb-6">
              The foundational services entity powering our global agentic AI SaaS portfolio.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4 mb-6">
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-shiro-red transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href={SITE_CONFIG.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-shiro-red transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email for insights"
                  className="flex-1 px-4 py-2 rounded-l-md text-black text-sm"
                />
                <button className="bg-shiro-red hover:bg-shiro-red-dark px-6 py-2 rounded-r-md font-semibold text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <a href="https://instantresumeai.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  InstantResumeAI
                </a>
              </li>
              <li>
                <a href="https://resumeblast.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  ResumeBlast.ai
                </a>
              </li>
              <li>
                <a href="https://cloudsourcehrm.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  CloudSourceHRM
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ai-transformation" className="text-gray-300 hover:text-white transition-colors">
                  AI Transformation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  RPA & IPA
                </Link>
              </li>
              <li>
                <Link href="/global-presence" className="text-gray-300 hover:text-white transition-colors">
                  Global Delivery
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-shiro-red mb-4">Company & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About SHIRO
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-300 hover:text-white transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/gdpr-compliance" className="text-gray-300 hover:text-white transition-colors">
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link href="/ai-compliance" className="text-gray-300 hover:text-white transition-colors">
                  AI Compliance
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-300 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Partners */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-lg font-semibold text-shiro-red mb-4">Technology Partners</h4>
          <div className="flex flex-wrap gap-4">
            {TECH_PARTNERS.map((partner) => (
              <span
                key={partner}
                className="bg-white/10 px-4 py-2 rounded-md text-sm text-gray-300"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar with addresses */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400 space-y-4">
          <div>
            <p className="mb-2">
              © 2025 SHIRO Technologies LLC. All rights reserved. Established 2001.
            </p>
          </div>
          
          {/* US HQ */}
          <div>
            <p className="font-semibold text-gray-300 mb-1">🇺🇸 US Headquarters:</p>
            <p>
              {SITE_CONFIG.address.physical.street}, {SITE_CONFIG.address.physical.city},{' '}
              {SITE_CONFIG.address.physical.state} {SITE_CONFIG.address.physical.zip}
            </p>
          </div>
          
          {/* Mailing Address */}
          <div>
            <p className="font-semibold text-gray-300 mb-1">Mailing Address:</p>
            <p>
              {SITE_CONFIG.address.mailing.street}, {SITE_CONFIG.address.mailing.city},{' '}
              {SITE_CONFIG.address.mailing.state} {SITE_CONFIG.address.mailing.zip}
            </p>
          </div>
          
          {/* Contact Numbers */}
          <div>
            <p>
              Products & Services: {SITE_CONFIG.contact.productsServicesPhone} | 
              Main: {SITE_CONFIG.contact.mainPhone} | 
              Email: {SITE_CONFIG.contact.email}
            </p>
          </div>
          
          {/* LinkedIn */}
          <div>
            <a 
              href={SITE_CONFIG.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn: {SITE_CONFIG.links.linkedinShort}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
