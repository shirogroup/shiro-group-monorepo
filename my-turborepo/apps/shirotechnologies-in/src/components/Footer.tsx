import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image
              src="/shiro-logo.svg"
              alt="SHIRO Technologies India"
              width={160}
              height={40}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              India-based offshore engineering and delivery center of SHIRO Group, focused on execution excellence and operational velocity.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white mb-2">Contact India Center:</p>
              <p>442, 6th Main Road, 2nd Floor</p>
              <p>Vijayanagar 1st Stage</p>
              <p>Mysuru, Karnataka 570017, India</p>
              <p className="mt-2">Phone: (+91) 81233 71777</p>
              <p>Email: <a href="mailto:sales@shirotechnologies.com" className="text-[#CC0000] hover:underline">sales@shirotechnologies.com</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="text-gray-400 hover:text-white transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-400 hover:text-white transition-colors">
                  Compliance & Security
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SHIRO Group */}
          <div>
            <h3 className="font-semibold text-lg mb-4">SHIRO Group</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://shirotechnologies.com" className="text-gray-400 hover:text-white transition-colors">
                  Main Site
                </a>
              </li>
              <li>
                <a href="https://shirotechnologies.com/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="https://shirotechnologies.ca" className="text-gray-400 hover:text-white transition-colors">
                  Canada Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Partners */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="font-semibold text-sm mb-4 text-gray-400">Technology Partners</h3>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <span>AWS</span>
            <span>•</span>
            <span>Google Cloud</span>
            <span>•</span>
            <span>Microsoft Azure</span>
            <span>•</span>
            <span>Vercel</span>
            <span>•</span>
            <span>Supabase</span>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SHIRO Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            SHIRO Technologies Pvt Ltd is the India-registered delivery and engineering entity of SHIRO Group.
          </p>
        </div>
      </div>
    </footer>
  )
}
