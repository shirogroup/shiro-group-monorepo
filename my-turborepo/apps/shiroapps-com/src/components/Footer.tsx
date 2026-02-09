import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-white">SHIRO Apps</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              AI-powered tools built by SHIRO Technologies. We create intelligent solutions for careers and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/shiro-technologies-inc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/instantresumeai" className="text-sm hover:text-white transition-colors">InstantResumeAI</Link></li>
              <li><Link href="/cloudsourcehrm" className="text-sm hover:text-white transition-colors">CloudSourceHRM</Link></li>
              <li><Link href="/resumeblast" className="text-sm hover:text-white transition-colors">ResumeBlast</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#assessment" className="text-sm hover:text-white transition-colors">Product Assessment</Link></li>
              <li><Link href="/services#development" className="text-sm hover:text-white transition-colors">Custom Development</Link></li>
              <li><Link href="/services#deployment" className="text-sm hover:text-white transition-colors">Deployment & DevOps</Link></li>
              <li><Link href="/services#support" className="text-sm hover:text-white transition-colors">Maintenance & Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-sm hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
              <li><a href="https://shirotechnologies.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">SHIRO Technologies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SHIRO Technologies LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 mb-3">Built with:</p>
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'OpenAI', 'Stripe', 'Vercel', 'AWS', 'Supabase'].map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
