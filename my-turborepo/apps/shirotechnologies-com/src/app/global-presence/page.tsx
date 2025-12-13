import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Global Presence - Offshore & Nearshore Development Centers',
  description: 'SHIRO Technologies global delivery centers in USA, Canada, and India. Follow-the-sun development with 50-70% cost savings.',
  keywords: [
    'offshore development services',
    'nearshore software development',
    'global delivery centers',
    'follow the sun development',
    'offshore software development India',
    'nearshore development Canada',
  ],
}

export default function GlobalPresencePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Global Delivery Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multi-region delivery centers enabling 24/7 development with 50-70% cost savings
          </p>
        </div>
      </section>

      {/* Delivery Centers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* USA */}
            <div className="text-center">
              <div className="text-8xl mb-4">🇺🇸</div>
              <h3 className="text-3xl font-bold text-shiro-black mb-4">United States</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                <h4 className="font-semibold mb-3">Primary Hub</h4>
                <p className="text-gray-700 mb-4">
                  5080 Spectrum Drive, Suite 575E<br />
                  Addison, Texas 75001
                </p>
                <h4 className="font-semibold mb-2">Capabilities:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Strategic consulting</li>
                  <li>✓ Product management</li>
                  <li>✓ Client services</li>
                  <li>✓ Investor relations</li>
                </ul>
              </div>
            </div>

            {/* Canada */}
            <div className="text-center">
              <div className="text-8xl mb-4">🇨🇦</div>
              <h3 className="text-3xl font-bold text-shiro-black mb-4">Canada</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                <h4 className="font-semibold mb-3">Nearshore Center</h4>
                <p className="text-gray-700 mb-4">
                  <a href="https://shirotechnologies.ca" target="_blank" rel="noopener noreferrer" className="text-shiro-red hover:underline">
                    Visit SHIRO Canada →
                  </a>
                </p>
                <h4 className="font-semibold mb-2">Capabilities:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Nearshore development</li>
                  <li>✓ QA automation</li>
                  <li>✓ Compliance expertise</li>
                  <li>✓ Time zone advantages</li>
                </ul>
              </div>
            </div>

            {/* India */}
            <div className="text-center">
              <div className="text-8xl mb-4">🇮🇳</div>
              <h3 className="text-3xl font-bold text-shiro-black mb-4">India</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                <h4 className="font-semibold mb-3">Offshore Center</h4>
                <p className="text-gray-700 mb-4">
                  <a href="https://shirotechnologies.in" target="_blank" rel="noopener noreferrer" className="text-shiro-red hover:underline">
                    Visit SHIRO India →
                  </a>
                </p>
                <h4 className="font-semibold mb-2">Capabilities:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Offshore engineering</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ AI/ML development</li>
                  <li>✓ Cost optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow-the-Sun */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6">
              Follow-the-Sun Development Model
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Our global presence enables continuous 24/7 development cycles and support
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">🕐 Americas (US/CA)</h3>
                <p className="text-gray-600 text-sm mb-4">Business Hours: 9 AM - 6 PM EST</p>
                <p className="text-gray-600 text-sm">
                  Client meetings, strategic planning, product management, delivery oversight
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">🕘 India Overlap</h3>
                <p className="text-gray-600 text-sm mb-4">Overlap Hours: 9:30 PM - 2:30 AM EST</p>
                <p className="text-gray-600 text-sm">
                  Handoffs, code reviews, stand-ups, issue resolution
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3">🕐 India Development</h3>
                <p className="text-gray-600 text-sm mb-4">Business Hours: 9:30 AM - 6:30 PM IST</p>
                <p className="text-gray-600 text-sm">
                  Active development, testing, support, documentation
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-lg mb-2">Result: 16+ Hour Development Window</h3>
              <p className="text-gray-700">
                Combined coverage enables nearly continuous development cycles, faster time-to-market, 
                and responsive support across all time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-12 text-center">
              Why Global Delivery?
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">50-70% Cost Savings</h3>
                  <p className="text-gray-600">
                    Offshore rates combined with high quality deliver exceptional value without compromising standards
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Faster Time-to-Market</h3>
                  <p className="text-gray-600">
                    16+ hour development window accelerates delivery by 30-40% compared to single-region teams
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Access to Global Talent</h3>
                  <p className="text-gray-600">
                    Tap into specialized skills across multiple regions without geographic constraints
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                <div className="text-3xl">📈</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Scalability Without Commitment</h3>
                  <p className="text-gray-600">
                    Scale teams up or down rapidly based on project needs without long-term hiring commitments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Global Delivery?
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss how our multi-region delivery model can accelerate your projects while reducing costs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
