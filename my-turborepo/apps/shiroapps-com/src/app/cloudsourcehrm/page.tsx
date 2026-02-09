import B2BFooterCTA from '@/components/B2BFooterCTA'

export default function CloudSourceHRMPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                HR Tech SaaS
              </div>
              <h1 className="text-5xl font-bold mb-6">
                AI-Powered HR Management for Modern Teams
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Complete recruitment and talent management platform with 10,000 verified email credits included.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://cloudsourcehrm.com"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Visit Product Site →
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
                >
                  Request Demo
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <img
                src="/api/placeholder/600/400"
                alt="CloudSourceHRM Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Problem/Solution */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-red-900 mb-4">❌ The Problem</h3>
              <ul className="space-y-3 text-red-800">
                <li>• Recruitment software costs $5K-$50K/year for SMBs</li>
                <li>• Email lookup tools add another $500-$1,000/month</li>
                <li>• Complex enterprise tools overwhelm small HR teams</li>
                <li>• Long implementation times (weeks to months)</li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">✅ The Solution</h3>
              <ul className="space-y-3 text-green-800">
                <li>• All-in-one platform at SMB-friendly pricing</li>
                <li>• 10,000 verified emails included ($6K+ value)</li>
                <li>• Simple, intuitive interface for non-technical users</li>
                <li>• Live in days, not weeks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Everything You Need to Hire Great Talent</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3">Applicant Tracking</h3>
              <p className="text-gray-600">Visual pipeline, resume parsing, bulk actions, team collaboration</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-3">10K Email Credits</h3>
              <p className="text-gray-600">Verified working emails for outbound recruiting - $6K+ value included</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI Matching</h3>
              <p className="text-gray-600">Smart candidate ranking, automated screening, skills matching</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Standard</h3>
              <div className="text-4xl font-bold mb-6">
                $50<span className="text-xl text-gray-600">/user/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Core ATS features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Job board integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Basic reporting</span>
                </li>
              </ul>
              <a href="https://cloudsourcehrm.com" className="block text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
                Get Started
              </a>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-2xl shadow-xl transform scale-105">
              <div className="text-sm font-semibold mb-2">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">
                $100<span className="text-xl">/user/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Everything in Standard</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span><strong>10,000 verified emails</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>AI candidate matching</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <a href="https://cloudsourcehrm.com" className="block text-center bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      <B2BFooterCTA 
        productName="CloudSourceHRM"
        buildTime="8-12 weeks"
        techStack="Next.js, Supabase, Stripe"
      />
    </div>
  )
}
