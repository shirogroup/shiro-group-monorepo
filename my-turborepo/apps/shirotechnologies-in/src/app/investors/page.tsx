import Link from 'next/link';

export const metadata = {
  title: 'Investors | SHIRO Technologies - AI SaaS Portfolio Company',
  description: 'Investment opportunity in a high-growth agentic AI portfolio company. Building vertical SaaS platforms with defensible moats and global delivery capabilities.',
};

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Next Generation of Agentic AI SaaS
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A portfolio of AI-native vertical SaaS platforms with defensible moats, 
              global delivery capabilities, and a clear path to market leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#contact-investors"
                className="bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Request Investor Deck
              </Link>
              <Link 
                href="#financials"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm"
              >
                View Projections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-shiro-gray border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-shiro-black mb-2">7</div>
              <div className="text-gray-600">SaaS Products</div>
              <div className="text-sm text-gray-500 mt-1">3 Live, 4 in Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-shiro-black mb-2">24</div>
              <div className="text-gray-600">Years in Business</div>
              <div className="text-sm text-gray-500 mt-1">Since 2001</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-shiro-black mb-2">3</div>
              <div className="text-gray-600">Global Locations</div>
              <div className="text-sm text-gray-500 mt-1">USA, Canada, India</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-shiro-black mb-2">AI-First</div>
              <div className="text-gray-600">Technology Stack</div>
              <div className="text-sm text-gray-500 mt-1">Agentic Architecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-shiro-black mb-4">Investment Thesis</h2>
            <p className="text-lg text-gray-700">
              SHIRO Technologies is uniquely positioned to capitalize on the explosive growth of 
              agentic AI and vertical SaaS markets, with a portfolio approach that combines 
              high-growth SaaS platforms with stable services revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-shiro-red text-2xl font-bold mb-3">$775.44B</div>
              <div className="font-semibold text-gray-900 mb-2">AI SaaS Market by 2031</div>
              <div className="text-gray-600 text-sm">
                Growing at 38.28% CAGR from $71.54B in 2024. We're building at the intersection 
                of the three fastest-growing segments: vertical AI, agentic systems, and 
                AI-powered automation.
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-shiro-red text-2xl font-bold mb-3">8-12x</div>
              <div className="font-semibold text-gray-900 mb-2">AI-Native SaaS Multiples</div>
              <div className="text-gray-600 text-sm">
                AI-powered vertical SaaS companies command 8-12x revenue multiples vs. 
                traditional SaaS at 6.1x. Our portfolio positioning targets premium valuations 
                through defensible moats and vertical dominance.
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-shiro-red text-2xl font-bold mb-3">40%</div>
              <div className="font-semibold text-gray-900 mb-2">Enterprise Apps with AI Agents</div>
              <div className="text-gray-600 text-sm">
                Gartner predicts 40% of enterprise applications will feature task-specific AI 
                agents by end of 2026. Our entire portfolio is built on agentic architecture, 
                not retrofitted AI features.
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-shiro-red text-2xl font-bold mb-3">$3.48M</div>
              <div className="font-semibold text-gray-900 mb-2">Revenue per Employee</div>
              <div className="text-gray-600 text-sm">
                AI-native startups achieve $3.48M revenue per employee vs. $580K for traditional 
                SaaS. Our automation-first approach enables extreme capital efficiency and margin expansion.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-shiro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-8">Market Opportunity</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">HR Tech & Talent</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">InstantResumeAI</div>
                  <div className="text-sm font-semibold text-gray-900">AI Resume Optimization</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">ResumeBlast.ai</div>
                  <div className="text-sm font-semibold text-gray-900">Automated Job Applications</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">CloudSourceHRM</div>
                  <div className="text-sm font-semibold text-gray-900">AI-Powered HR Management</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vertical SaaS</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">SHIRO Title</div>
                  <div className="text-sm font-semibold text-gray-900">Real Estate Automation - $34B TAM</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">SHIRO Cloud</div>
                  <div className="text-sm font-semibold text-gray-900">DevTools & Cloud Utilities</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">SHIJO.ai</div>
                  <div className="text-sm font-semibold text-gray-900">Marketing Automation - 36.6% CAGR</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Education</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">SHIRO Academy</div>
                  <div className="text-sm font-semibold text-gray-900">Adaptive AI Learning Platform</div>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  Market: $5.88B (2024) → $32.27B (2030)
                </div>
                <div className="text-sm font-semibold text-shiro-red">31.2% CAGR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Revenue Model */}
      <section id="financials" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-4">Revenue Model & Projections</h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Conservative projections based on AI SaaS market benchmarks, with clear separation 
            of high-growth SaaS revenue from stable services revenue for optimal valuation.
          </p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-shiro-gray">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Year</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">SaaS ARR</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Services ARR</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Total ARR</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">SaaS %</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">YoY Growth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2026</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$250K</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$250K</td>
                  <td className="px-6 py-4 text-sm text-right font-semibold text-gray-900">$500K</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">50%</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">—</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2027</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$1.0M</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$500K</td>
                  <td className="px-6 py-4 text-sm text-right font-semibold text-gray-900">$1.5M</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">65%</td>
                  <td className="px-6 py-4 text-sm text-right text-shiro-red font-semibold">+200%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2028</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$3.0M</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$750K</td>
                  <td className="px-6 py-4 text-sm text-right font-semibold text-gray-900">$3.75M</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">80%</td>
                  <td className="px-6 py-4 text-sm text-right text-shiro-red font-semibold">+150%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2029</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$7.0M</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$1.25M</td>
                  <td className="px-6 py-4 text-sm text-right font-semibold text-gray-900">$8.25M</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">85%</td>
                  <td className="px-6 py-4 text-sm text-right text-shiro-red font-semibold">+120%</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-shiro-gray">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2030</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$13.5M</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$1.5M</td>
                  <td className="px-6 py-4 text-sm text-right font-semibold text-gray-900">$15M</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">90%</td>
                  <td className="px-6 py-4 text-sm text-right text-shiro-red font-semibold">+82%</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-shiro-gray">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">2031</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$20M</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">$2M</td>
                  <td className="px-6 py-4 text-sm text-right font-semibold text-gray-900">$22M</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">91%</td>
                  <td className="px-6 py-4 text-sm text-right text-shiro-red font-semibold">+47%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Valuation Trajectory */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Valuation Trajectory</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">2026 (Seed/Series A)</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$2.5M-$4M</div>
                <div className="text-sm text-gray-500">5-8x ARR (early stage)</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">2028 (Series B)</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$24M-$36M</div>
                <div className="text-sm text-gray-500">8-10x SaaS ARR</div>
              </div>
              <div className="text-center p-6 bg-shiro-gray rounded-lg border-2 border-shiro-red">
                <div className="text-sm text-gray-600 mb-2">2031 (Exit Target)</div>
                <div className="text-3xl font-bold text-shiro-red mb-2">$150M-$200M</div>
                <div className="text-sm text-gray-700 font-semibold">8-10x SaaS ARR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-shiro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-4">Defensible Moats & Competitive Advantages</h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Building sustainable competitive advantages through proprietary technology, 
            network effects, and vertical specialization.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Agentic AI Architecture</h3>
              <p className="text-sm text-gray-600">
                Purpose-built multiagent systems, not retrofitted AI features. Proprietary orchestration 
                frameworks that competitors can't easily replicate.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Data Moats</h3>
              <p className="text-sm text-gray-600">
                Vertical-specific training data that improves with usage. AI models become more 
                accurate as customer base grows, creating compounding advantages.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Network Effects</h3>
              <p className="text-sm text-gray-600">
                More users → better AI → attracts more users. SHIRO Academy adaptive learning and 
                InstantResumeAI template quality improve with each user.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Vertical Depth</h3>
              <p className="text-sm text-gray-600">
                Deep industry integration in real estate (SHIRO Title), HR tech, and marketing. 
                Switching costs increase as AI learns customer-specific workflows.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Execution Speed</h3>
              <p className="text-sm text-gray-600">
                AI-native development stack enables 10x faster iteration than traditional SaaS. 
                Founder-led technical execution eliminates coordination overhead.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M5.106 18.777c.738.64 1.993 1.223 3.394 1.223 2.485 0 4.5-1.343 4.5-3 0-1.243-.75-2.32-1.87-2.873" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Arbitrage</h3>
              <p className="text-sm text-gray-600">
                24-year presence in India provides 50-70% cost advantage for development and support, 
                with US-based leadership ensuring quality and customer alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-12">Diversified Revenue Streams</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* SaaS Revenue */}
            <div className="bg-white border-2 border-shiro-red rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">SaaS Platforms</h3>
                <span className="text-shiro-red font-bold text-xl">90% by 2031</span>
              </div>
              
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-gray-900 mb-1">Subscription (MRR/ARR)</div>
                  <div className="text-sm text-gray-600">
                    Recurring revenue from all 7 SaaS platforms. Freemium models converting 
                    to paid tiers at 8-15% rates.
                  </div>
                </div>
                
                <div className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-gray-900 mb-1">Usage-Based Pricing</div>
                  <div className="text-sm text-gray-600">
                    Pay-per-use for ResumeBlast applications, SHIRO Cloud monitors, 
                    SHIRO Title transactions. Aligns costs with value delivery.
                  </div>
                </div>
                
                <div className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-gray-900 mb-1">Enterprise Licensing</div>
                  <div className="text-sm text-gray-600">
                    SHIRO Academy corporate training, SHIJO.ai agency plans, CloudSourceHRM 
                    company licenses. Higher ACVs with annual contracts.
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">API & White-Label</div>
                  <div className="text-sm text-gray-600">
                    Developer API access, white-label offerings for agencies and consultants. 
                    Premium pricing for embedded solutions.
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-shiro-gray rounded-lg">
                <div className="text-sm font-semibold text-gray-700 mb-1">Target Metrics (2028)</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">CAC Payback</div>
                    <div className="font-semibold text-gray-900">&lt;12 months</div>
                  </div>
                  <div>
                    <div className="text-gray-600">LTV:CAC</div>
                    <div className="font-semibold text-gray-900">3:1+</div>
                  </div>
                  <div>
                    <div className="text-gray-600">NRR</div>
                    <div className="font-semibold text-gray-900">110%+</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Gross Margin</div>
                    <div className="font-semibold text-gray-900">75%+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Revenue */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Services & BPO</h3>
                <span className="text-gray-600 font-bold text-xl">10% by 2031</span>
              </div>
              
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-gray-900 mb-1">AI Transformation Consulting</div>
                  <div className="text-sm text-gray-600">
                    Strategy, implementation, and change management for enterprise AI adoption. 
                    6-month engagements at $50K-$200K.
                  </div>
                </div>
                
                <div className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-gray-900 mb-1">QA Automation Services</div>
                  <div className="text-sm text-gray-600">
                    AI-powered testing and quality assurance. Offshore delivery at 50-70% 
                    cost savings vs. domestic alternatives.
                  </div>
                </div>
                
                <div className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-gray-900 mb-1">BPO Operations</div>
                  <div className="text-sm text-gray-600">
                    Recruiting, HR operations, back-office workflows. AI-augmented for 
                    30-50% productivity gains and margin expansion.
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Strategic Role</div>
                  <div className="text-sm text-gray-600">
                    Cash flow engine funding SaaS R&D. Validation pipeline for SaaS features 
                    through real client feedback and requirements.
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm font-semibold text-gray-700 mb-1">Target Metrics (2028)</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">EBITDA Margin</div>
                    <div className="font-semibold text-gray-900">25-30%</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Engagement Length</div>
                    <div className="font-semibold text-gray-900">6-12 months</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Client Retention</div>
                    <div className="font-semibold text-gray-900">80%+</div>
                  </div>
                  <div>
                    <div className="text-gray-600">SaaS Cross-Sell</div>
                    <div className="font-semibold text-gray-900">2-3/year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div className="font-semibold text-blue-900 mb-1">Valuation Structure</div>
                <div className="text-sm text-blue-800">
                  Services and SaaS revenue are clearly separated in financial reporting. SaaS revenue 
                  receives 8-10x multiple, services revenue receives 1-2x multiple. This dual-revenue 
                  model provides downside protection while maximizing valuation as SaaS dominance increases.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use of Funds (if raising) */}
      <section className="py-16 bg-shiro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-12">Strategic Priorities & Capital Allocation</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-4xl font-bold text-shiro-red mb-2">40%</div>
              <div className="font-semibold text-gray-900 mb-3">Product Development</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Complete MVP launches for 4 in-development platforms</li>
                <li>• Advanced agentic AI features and multiagent orchestration</li>
                <li>• Enterprise features (SSO, audit logs, API)</li>
                <li>• Technical infrastructure and security</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-4xl font-bold text-shiro-red mb-2">35%</div>
              <div className="font-semibold text-gray-900 mb-3">Sales & Marketing</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Go-to-market for each vertical SaaS platform</li>
                <li>• Content marketing and SEO (50+ articles per product)</li>
                <li>• Paid acquisition testing and optimization</li>
                <li>• Sales team for enterprise deals</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-4xl font-bold text-shiro-red mb-2">25%</div>
              <div className="font-semibold text-gray-900 mb-3">Team & Operations</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Key hires: Product managers, engineers, sales lead</li>
                <li>• Customer success and support infrastructure</li>
                <li>• Legal, compliance, and accounting</li>
                <li>• Operating reserve and contingency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-4">Leadership & Expertise</h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            24 years of proven execution in technology services, now scaling AI-native SaaS platforms 
            with a global team across USA, Canada, and India.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Company History</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex gap-3">
                  <div className="font-semibold text-gray-900 w-16">2001</div>
                  <div>Founded as SHIRO Technologies, Inc. in Texas</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-semibold text-gray-900 w-16">2010s</div>
                  <div>Expanded to India and Canada delivery centers</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-semibold text-gray-900 w-16">2023</div>
                  <div>Strategic pivot to AI-native SaaS portfolio</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-semibold text-gray-900 w-16">2024</div>
                  <div>Launched first 3 SaaS products</div>
                </div>
                <div className="flex gap-3">
                  <div className="font-semibold text-gray-900 w-16">2025</div>
                  <div>Accelerating portfolio expansion with 4 new platforms</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Core Competencies</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-shiro-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Agentic AI architecture and multiagent systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-shiro-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vertical SaaS development and go-to-market</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-shiro-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Global delivery and cost arbitrage strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-shiro-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rapid MVP development with AI-assisted coding</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-shiro-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enterprise client relationships and consulting</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-shiro-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bootstrapped growth and capital efficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Contact */}
      <section id="contact-investors" className="py-16 gradient-cta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in building the next generation of agentic AI SaaS platforms. 
            Request our investor deck and financial model for detailed analysis.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <div className="font-semibold mb-2">Investor Inquiries</div>
                <a href="mailto:investors@shirotechnologies.com" className="text-white hover:text-gray-200">
                  investors@shirotechnologies.com
                </a>
              </div>
              <div>
                <div className="font-semibold mb-2">General Contact</div>
                <a href="mailto:info@shirotechnologies.com" className="text-white hover:text-gray-200">
                  info@shirotechnologies.com
                </a>
              </div>
              <div>
                <div className="font-semibold mb-2">Phone</div>
                <a href="tel:+19727345623" className="text-white hover:text-gray-200">
                  (972) 734-5623
                </a>
              </div>
              <div>
                <div className="font-semibold mb-2">Location</div>
                <div className="text-white/90">Addison, Texas, USA</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:investors@shirotechnologies.com?subject=Investor%20Deck%20Request"
              className="bg-white text-shiro-red hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Investor Deck
            </a>
            <Link 
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
