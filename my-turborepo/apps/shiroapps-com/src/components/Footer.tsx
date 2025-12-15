import { FOOTER, SITE_CONFIG } from '@/lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-shiro-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/shiro-logo.svg"
                alt="SHIRO Technologies"
                width={200}
                height={67}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              {FOOTER.description}
            </p>
            <div className="flex gap-4">
              <a
                href={FOOTER.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-shiro-red transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {FOOTER.sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {FOOTER.copyright}
          </p>
          <div className="text-gray-400 text-sm">
            <span>{SITE_CONFIG.company.name}</span>
            <span className="mx-2">|</span>
            <a href={`tel:${SITE_CONFIG.company.phone}`} className="hover:text-white">
              {SITE_CONFIG.company.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
