import Link from 'next/link'
import { SITE_CONFIG, TECH_PARTNERS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-shiro-black text-white py-12 pb-32 md:pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-10">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-shiro-red mb-3">
              SHIRO Technologies
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              Agentic AI transformation and global delivery
            </p>
            
            {/* Social links with icons */}
            <div className="flex gap-3 mb-4">
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-shiro-red transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-shiro-red transition-colors"
                aria-label="Twitter/X"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-xs font-semibold mb-2 text-gray-400">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l text-black text-sm"
                />
                <button className="bg-shiro-red hover:bg-shiro-red-dark px-4 py-2 rounded-r font-semibold text-xs transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-shiro-red mb-3">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">All Products</Link></li>
              <li><a href="https://instantresumeai.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">InstantResumeAI</a></li>
              <li><a href="https://resumeblast.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">ResumeBlast.ai</a></li>
              <li><a href="https://cloudsourcehrm.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">CloudSourceHRM</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-shiro-red mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-transformation" className="text-gray-300 hover:text-white transition-colors">AI Transformation</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">RPA & IPA</Link></li>
              <li><Link href="/global-presence" className="text-gray-300 hover:text-white transition-colors">Global Delivery</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-shiro-red mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About SHIRO</Link></li>
              <li><Link href="/investors" className="text-gray-300 hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-shiro-red mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/gdpr-compliance" className="text-gray-300 hover:text-white transition-colors">GDPR Compliance</Link></li>
              <li><Link href="/ai-compliance" className="text-gray-300 hover:text-white transition-colors">AI Compliance</Link></li>
              <li><Link href="/security" className="text-gray-300 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Technology Partners */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <h4 className="text-sm font-semibold text-shiro-red mb-3">Technology Partners</h4>
          <div className="flex flex-wrap gap-3">
            {TECH_PARTNERS.map((partner) => (
              <span
                key={partner}
                className="bg-white/10 px-3 py-1 rounded text-xs text-gray-300"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar - compact two columns */}
        <div className="border-t border-white/10 pt-6">
          <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-400">
            {/* Left column */}
            <div className="space-y-1">
              <p className="font-semibold text-gray-300">
                © 2025 SHIRO Technologies LLC. All rights reserved.
              </p>
              <p>EST. 2001</p>
              <p>
                US HQ: {SITE_CONFIG.address.physical.street}, {SITE_CONFIG.address.physical.city}, {SITE_CONFIG.address.physical.state} {SITE_CONFIG.address.physical.zip}
              </p>
              <p>
                Correspondence: {SITE_CONFIG.address.mailing.street}, {SITE_CONFIG.address.mailing.city}, {SITE_CONFIG.address.mailing.state} {SITE_CONFIG.address.mailing.zip}
              </p>
            </div>
            
            {/* Right column */}
            <div className="space-y-1 md:text-right">
              <p>
                Products & Services: <a href={`tel:${SITE_CONFIG.contact.productsServicesPhone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">{SITE_CONFIG.contact.productsServicesPhone}</a>
              </p>
              <p>
                Main: <a href={`tel:${SITE_CONFIG.contact.mainPhone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">{SITE_CONFIG.contact.mainPhone}</a>
              </p>
              <p>
                Email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">{SITE_CONFIG.contact.email}</a>
              </p>
              <p>
                LinkedIn: <a href={SITE_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Connect with us</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
