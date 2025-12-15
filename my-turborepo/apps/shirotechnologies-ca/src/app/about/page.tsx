import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About SHIRO Technologies - Agentic AI SaaS Portfolio Company',
  description: 'Learn about SHIRO Technologies - founded in 2001, powering a global agentic AI SaaS portfolio with strategic services revenue.',
  keywords: ['about shiro', 'company history', 'AI company', 'SaaS portfolio', 'global technology company'],
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero - RED/WHITE like homepage */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Foundational Services Entity Powering Our Global Agentic AI SaaS Portfolio
            </h1>
            <p className="text-xl text-gray-300">
              Strategic services revenue funding rapid SaaS innovation without dilution since 2001
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Transform the enterprise software landscape by combining strategic services excellence 
              with cutting-edge agentic AI SaaS products, creating defensible moats and sustainable growth.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-bold text-xl mb-2">Services First</h3>
                <p className="text-gray-600">
                  Predictable cash flow funds SaaS R&D without investor dependency
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="font-bold text-xl mb-2">SaaS Scale</h3>
                <p className="text-gray-600">
                  Autonomous platforms achieving 8-12x revenue multiples
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="font-bold text-xl mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  Multi-region delivery centers enabling 24/7 support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6 text-center">
              Our Company Culture
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              A unified culture across three continents, built on innovation, collaboration, and excellence
            </p>

            <div className="space-y-8">
              {/* Core Values */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-shiro-black mb-4">Core Values</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-shiro-red">Innovation First</h4>
                    <p className="text-gray-600">
                      We embrace cutting-edge AI technology and encourage experimentation. Every team member 
                      has the autonomy to propose and test new ideas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-shiro-red">Global Collaboration</h4>
                    <p className="text-gray-600">
                      Our distributed teams across USA, Canada, and India work as one. Time zones are an 
                      advantage, not a barrier.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-shiro-red">Customer Success</h4>
                    <p className="text-gray-600">
                      Client satisfaction drives everything we do. We deliver measurable results and build 
                      long-term partnerships.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-shiro-red">Continuous Learning</h4>
                    <p className="text-gray-600">
                      We invest heavily in training and development. Your growth is our growth, with free 
                      courses, certifications, and mentorship.
                    </p>
                  </div>
                </div>
              </div>

              {/* Remote-First Culture */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-shiro-black mb-4">Remote-First, Results-Focused</h3>
                <p className="text-gray-600 mb-4">
                  We pioneered remote work long before it was mainstream. Our culture emphasizes:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-3 font-bold">✓</span>
                    <span><strong>Flexibility:</strong> Work from anywhere, set your own hours (within team overlap windows)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-3 font-bold">✓</span>
                    <span><strong>Async Communication:</strong> Documented decisions, written updates, minimal meetings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-3 font-bold">✓</span>
                    <span><strong>Output Over Hours:</strong> We measure results, not time logged</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-shiro-red mr-3 font-bold">✓</span>
                    <span><strong>Work-Life Balance:</strong> Sustainable pace, no burnout culture</span>
                  </li>
                </ul>
              </div>

              {/* Diversity & Inclusion */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-shiro-black mb-4">Diversity & Inclusion</h3>
                <p className="text-gray-600">
                  Our global footprint means diverse perspectives are built into our DNA. We actively foster 
                  an inclusive environment where everyone can bring their authentic selves to work. Teams span 
                  multiple cultures, languages, and backgrounds - and that's our competitive advantage.
                </p>
              </div>

              {/* Career Growth */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-shiro-black mb-4">Career Development Path</h3>
                <p className="text-gray-600 mb-4">
                  At SHIRO, you can move between services and products, gaining diverse experience:
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                    Services Engineer → Product Engineer
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                    QA Automation → AI Agent Developer
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                    Project Manager → Product Manager
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                    Support → Customer Success
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6 text-center">
              Our Strategic Framework
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              A proven model aligning with Gartner's 2025-2028 agentic AI predictions
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-shiro-red">
                <h3 className="font-bold text-xl mb-2">2026: Foundation Year</h3>
                <p className="text-gray-600">
                  Launch 3-4 agentic SaaS MVPs alongside $500K+ services ARR baseline
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-xl mb-2">2027: Traction & Validation</h3>
                <p className="text-gray-600">
                  Scale SaaS to $2M ARR, services to $1.5M, achieving 60%+ SaaS revenue mix
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-xl mb-2">2028: SaaS Dominance</h3>
                <p className="text-gray-600">
                  SaaS reaches $5M ARR (70% of revenue), demonstrate clear scaling trajectory
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-xl mb-2">2029-2031: Exit Readiness</h3>
                <p className="text-gray-600">
                  SaaS $25M+ ARR, 85%+ revenue mix, targeting $150M-$200M valuation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Team - NO FLAG EMOJIS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6 text-center">
              Global Team Structure
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Distributed excellence across three continents, unified by shared mission and values
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-shiro-red">
                <h3 className="font-bold text-2xl text-shiro-black mb-4">United States</h3>
                <p className="text-sm text-gray-500 mb-4">Headquarters - Addison, Texas</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Primary Functions:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Strategic planning & direction</li>
                      <li>• Product management & roadmap</li>
                      <li>• Client services & relationships</li>
                      <li>• Investor relations & finance</li>
                      <li>• Marketing & business development</li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-xs text-gray-500">EST. 2001</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500">
                <h3 className="font-bold text-2xl text-shiro-black mb-4">Canada</h3>
                <p className="text-sm text-gray-500 mb-4">Nearshore Delivery Center</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Primary Functions:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Nearshore software development</li>
                      <li>• QA automation & testing</li>
                      <li>• DevOps & infrastructure</li>
                      <li>• Compliance & security expertise</li>
                      <li>• Time zone advantages for US clients</li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-xs text-gray-500">Operational Hub</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500">
                <h3 className="font-bold text-2xl text-shiro-black mb-4">India</h3>
                <p className="text-sm text-gray-500 mb-4">Offshore Development Center - Mysuru</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Primary Functions:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Offshore engineering & development</li>
                      <li>• 24/7 support & monitoring</li>
                      <li>• AI/ML model development</li>
                      <li>• Cost optimization & scalability</li>
                      <li>• Follow-the-sun development cycles</li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-xs text-gray-500">EST. 2008</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="font-bold mb-2">Cross-Regional Collaboration</h3>
              <p className="text-gray-700">
                Our teams operate seamlessly across time zones with daily standups, shared documentation, 
                and a "follow-the-sun" model that enables 16+ hour development windows. This isn't just 
                cost arbitrage - it's a competitive advantage in speed and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6">
              Why Portfolio Over Single Product?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Diversification, rapid learning, and multiple exit opportunities
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">✓ Risk Mitigation</h3>
                <p className="text-gray-600">
                  Multiple products reduce single-point failure; one success funds others
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">✓ Rapid Experimentation</h3>
                <p className="text-gray-600">
                  Test multiple markets simultaneously, double down on traction
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">✓ Shared Infrastructure</h3>
                <p className="text-gray-600">
                  Common tech stack, auth, payments reduce marginal cost per product
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">✓ Exit Flexibility</h3>
                <p className="text-gray-600">
                  Spin out individual products or sell entire portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Transformation Journey
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Whether you're interested in our services, products, or partnership opportunities, 
            we'd love to connect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/careers"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-shiro-red px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
