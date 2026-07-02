import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-white">ShiroApps</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              AI-built products, and the human oversight layer that keeps them accountable. From SHIRO Technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/shiro-technologies-inc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Apps */}
          <div>
            <h3 className="text-white font-semibold mb-4">Apps</h3>
            <ul className="space-y-2">
              <li><Link href="/instantresumeai" className="text-sm hover:text-white transition-colors">InstantResumeAI</Link></li>
              <li><Link href="/cloudsourcehrm" className="text-sm hover:text-white transition-colors">CloudSourceHRM</Link></li>
              <li><Link href="/resumeblast" className="text-sm hover:text-white transition-colors">ResumeBlast</Link></li>
              <li><Link href="/apps" className="text-sm hover:text-white transition-colors">View All Apps →</Link></li>
            </ul>
          </div>

          {/* Governance Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">AI Governance</h3>
            <ul className="space-y-2">
              <li><Link href="/#assessment" className="text-sm hover:text-white transition-colors">Free Risk Assessment</Link></li>
              <li><Link href="/#services" className="text-sm hover:text-white transition-colors">Compliance Audit</Link></li>
              <li><Link href="/#services" className="text-sm hover:text-white transition-colors">Human-in-the-Loop Review</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">All Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-sm hover:text-white transition-colors">Case Studies</Link></li>
              <li><a href="https://shirotechnologies.com/careers" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Careers</a></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ShiroApps. AI built and operated with human oversight.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
