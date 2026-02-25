import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Investor Overview | Agentic AI SaaS Portfolio Company | SHIRO Technologies',
  description: 'SHIRO Technologies is a 24-year-old bootstrapped AI company building a portfolio of vertical agentic AI SaaS products. Targeting 8-12x revenue multiples, $150M+ exit by 2030-2031. HR tech, career AI, and EdTech verticals.',
  keywords: [
    'AI SaaS investment opportunity',
    'agentic AI company',
    'vertical SaaS acquisition target',
    'AI startup investment 2026',
    'HR tech SaaS investment',
    'EdTech AI investment',
    'SaaS ARR valuation',
    'AI portfolio company',
    'bootstrapped AI SaaS',
    'Rule of 40 SaaS',
    'AI SaaS revenue multiples',
    'agentic AI valuation',
    'M&A AI company',
    'AI SaaS series A',
    'workforce AI investment',
    'proprietary data moat',
    'SaaS recurring revenue model',
    'AI company due diligence',
    'defensible AI moat',
    'vertical SaaS portfolio company',
    'AI SaaS company Texas',
    'agentic AI startup seeking investment',
  ],
  alternates: {
    canonical: 'https://www.shirotechnologies.com/investors',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Investor Overview | Agentic AI SaaS Portfolio | SHIRO Technologies',
    description: '24-year-old company building 6 vertical AI SaaS products. Services cash flow funds SaaS R&D. Targeting $150M+ exit by 2030-2031 at 8-12x ARR.',
    url: 'https://www.shirotechnologies.com/investors',
    siteName: 'SHIRO Technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investor Overview | SHIRO Technologies — Agentic AI SaaS Portfolio',
    description: '6 vertical AI SaaS products. Services-funded R&D. 24 years in business. $150M+ exit target by 2030-2031.',
    site: '@shiroapps',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SHIRO Technologies LLC',
  url: 'https://www.shirotechnologies.com',
  foundingDate: '2001',
  description: 'Agentic AI SaaS portfolio company building vertical AI platforms across HR tech, career acceleration, and professional AI education. Targeting 8-12x revenue multiples.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5080 Spectrum Drive Suite 575E',
    addressLocality: 'Addison',
    addressRegion: 'TX',
    postalCode: '75001',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-972-734-5623',
    email: 'investors@shirotechnologies.com',
    contactType: 'Investor Relations',
  },
  sameAs: [
    'https://www.linkedin.com/company/shiro-technologies-inc',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI SaaS Product Portfolio',
    numberOfItems: 6,
  },
};

const products = [
  {
    name: 'CloudSourceHRM',
    category: 'HR Automation · ATS · Talent Acquisition',
    status: 'Live',
    geography: 'Global',
    url: 'https://cloudsourcehrm.us',
    href: '/products/cloudsourcehrm',
    icon: '🧠',
    market: '$17.22B ATS market · 8.2% CAGR',
    accentColor: 'border-blue-500',
    tagline: 'AI-Powered Workforce Intelligence',
  },
  {
    name: 'InstantResumeAI',
    category: 'AI Resume Builder · Career Tools',
    status: 'Live',
    geography: 'Global',
    url: 'https://instantresumeai.com',
    href: '/products/instantresumeai',
    icon: '📄',
    market: '10,900% YoY search growth · Mass-market B2C',
    accentColor: 'border-green-500',
    tagline: 'ATS-Optimized Resumes in Minutes',
  },
  {
    name: 'ResumeBlast.ai',
    category: 'Resume Distribution · Recruiter Outreach',
    status: 'Live',
    geography: 'USA',
    url: 'https://resumeblast.ai',
    href: '/products/resumeblast',
    icon: '🚀',
    market: '1,500+ recruiter network · Usage-based revenue',
    accentColor: 'border-orange-500',
    tagline: 'Direct-to-Recruiter Distribution',
  },
  {
    name: 'AICourseHubPro',
    category: 'AI Education · Certification',
    status: 'Live',
    geography: 'Global',
    url: 'https://aicoursehubpro.com',
    href: '/products/aicoursehubpro',
    icon: '🎓',
    market: '$5.88B → $32.27B (2030) · 31.2% CAGR',
    accentColor: 'border-purple-500',
    tagline: 'AI Skills for Business Professionals',
  },
  {
    name: 'CHRM Nexus',
    category: 'Recruitment Data API · DaaS',
    status: 'Early Access',
    geography: 'USA',
    url: 'https://cloudsourcehrm.com',
    href: '/products/chrm-nexus',
    icon: '⚡',
    market: '$3.2B workforce analytics-as-a-service opportunity',
    accentColor: 'border-yellow-500',
    tagline: 'Enterprise Recruitment Intelligence API',
  },
  {
    name: 'GenAICourse.io',
    category: 'Generative AI Training · Government',
    status: 'Coming Soon',
    geography: 'Global',
    url: 'https://genaicourse.io',
    href: '/products/genaicourse',
    icon: '🏛️',
    market: 'Government AI mandate wave · Enterprise upskilling',
    accentColor: 'border-teal-500',
    tagline: 'AI Training for Tech Teams & Government',
  },
];

const projections = [
  { year: '2026', saas: '$250K', services: '$250K', total: '$500K', saasPct: '50%', growth: '—', stage: 'Seed/Series A' },
  { year: '2027', saas: '$1.0M', services: '$500K', total: '$1.5M', saasPct: '65%', growth: '+200%', stage: '' },
  { year: '2028', saas: '$3.0M', services: '$750K', total: '$3.75M', saasPct: '80%', growth: '+150%', stage: 'Series B' },
  { year: '2029', saas: '$7.0M', services: '$1.25M', total: '$8.25M', saasPct: '85%', growth: '+120%', stage: '' },
  { year: '2030', saas: '$13.5M', services: '$1.5M', total: '$15M', saasPct: '90%', growth: '+82%', stage: '' },
  { year: '2031', saas: '$20M', services: '$2M', total: '$22M', saasPct: '91%', growth: '+47%', stage: 'Exit Target' },
];

const moats = [
  {
    icon: '🤖',
    title: 'Agentic AI Architecture',
    description: 'Purpose-built multiagent systems — not retrofitted AI features. Proprietary orchestration that competitors cannot easily replicate. Aligns with Gartner\'s #1 tech trend: 40% of enterprise apps will include task-specific agents by end of 2026.',
  },
  {
    icon: '🔒',
    title: 'Proprietary Data Moats',
    description: 'Vertical-specific training data that improves with usage. AI models compound in accuracy as the customer base grows. Resume intelligence, hiring pattern data, and learning progression data are exclusive assets.',
  },
  {
    icon: '🔗',
    title: 'Network Effects',
    description: 'More users → better AI → attracts more users. InstantResumeAI\'s template quality and AICourseHubPro\'s learning paths improve with every session. This creates compounding defensibility that scales with adoption.',
  },
  {
    icon: '📏',
    title: 'Vertical Depth & Switching Costs',
    description: 'Deep domain integration in HR tech, career tools, and AI education. As AI learns customer-specific workflows, replacement cost rises. Vertical depth commands 8-12x SaaS multiples vs. 3-4x for horizontal tools.',
  },
  {
    icon: '⚡',
    title: 'AI-Native Execution Speed',
    description: 'Founder-led technical execution with AI-assisted development enables 10x faster iteration than traditional SaaS teams. No coordination overhead — features ship in days.',
  },
  {
    icon: '🌍',
    title: 'Global Cost Arbitrage',
    description: '24-year presence in India provides 50-70% cost advantage for development and support. US-based leadership ensures customer alignment. Three-country delivery model (USA, Canada, India) is a structural margin advantage.',
  },
];

const statusBadge: Record<string, string> = {
  Live: 'bg-green-100 text-green-800',
  'Early Access': 'bg-yellow-100 text-yellow-800',
  'Coming Soon': 'bg-gray-100 text-gray-600',
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Script
        id="investors-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Investor Overview · SHIRO Technologies LLC · Est. 2001
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Building the Next Generation<br /> of Agentic AI SaaS
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A portfolio of 6 vertical AI SaaS platforms with defensible moats, global delivery capabilities, and a clear path to $150M+ enterprise value by 2030-2031. Services revenue provides cash flow stability while SaaS drives valuation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:investors@shirotechnologies.com?subject=Investor%20Deck%20Request"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                Request Investor Deck →
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-center"
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-1">6</div>
            <div className="text-gray-400 text-sm">AI SaaS Products<br />(4 Live · 1 Early Access · 1 Coming Soon)</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-1">24</div>
            <div className="text-gray-400 text-sm">Years in Business<br />Since 2001</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-1">3</div>
            <div className="text-gray-400 text-sm">Global Locations<br />USA, Canada, India</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-1">8-12x</div>
            <div className="text-gray-400 text-sm">Target Valuation Multiple<br />AI-Native SaaS</div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Investment Thesis</h2>
          <p className="text-gray-600 max-w-3xl">
            SHIRO Technologies is uniquely positioned at the intersection of the three fastest-growing AI segments: vertical SaaS, agentic systems, and AI-powered workforce automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-3xl font-black text-blue-600 mb-2">$775B</div>
            <div className="font-semibold text-gray-900 mb-2">AI SaaS Market by 2031</div>
            <div className="text-sm text-gray-500">Growing at 38.28% CAGR from $71.54B in 2024. We operate at the intersection of the three fastest-growing AI market segments.</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-3xl font-black text-blue-600 mb-2">8-12x</div>
            <div className="font-semibold text-gray-900 mb-2">AI-Native SaaS Multiples</div>
            <div className="text-sm text-gray-500">AI-powered vertical SaaS commands 8-12x revenue vs. traditional SaaS at 6.1x. Our portfolio targets premium positioning through defensible moats.</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-3xl font-black text-blue-600 mb-2">40%</div>
            <div className="font-semibold text-gray-900 mb-2">Enterprise Apps with AI Agents</div>
            <div className="text-sm text-gray-500">Gartner predicts 40% of enterprise apps will feature task-specific AI agents by end of 2026. Our entire portfolio is built on agentic architecture.</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-3xl font-black text-blue-600 mb-2">$3.48M</div>
            <div className="font-semibold text-gray-900 mb-2">Revenue per Employee</div>
            <div className="text-sm text-gray-500">AI-native startups achieve $3.48M revenue per employee vs. $580K traditional SaaS. Our automation-first approach enables extreme capital efficiency.</div>
          </div>
        </div>
      </section>

      {/* Product Portfolio Showcase */}
      <section className="bg-gray-50 border-y border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Product Portfolio</h2>
              <p className="text-gray-600">6 vertical AI SaaS platforms across HR tech, career tools, and professional AI education.</p>
            </div>
            <a
              href="/products"
              className="hidden md:inline-flex px-5 py-2.5 border border-gray-200 bg-white text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              View All Products →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <div
                key={product.name}
                className={`bg-white rounded-xl border border-gray-200 border-t-4 ${product.accentColor} p-5 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{product.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.tagline}</div>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statusBadge[product.status]}`}>
                    {product.status}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mb-2">{product.category}</div>
                <div className="text-xs text-blue-700 bg-blue-50 rounded px-2.5 py-1.5 mb-4 font-medium">
                  📊 {product.market}
                </div>
                <div className="flex gap-2">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-gray-900 text-white text-xs font-semibold rounded-lg text-center hover:bg-gray-700 transition-colors"
                  >
                    Visit Product
                  </a>
                  <a
                    href={product.href}
                    className="flex-1 py-2 border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg text-center hover:bg-gray-50 transition-colors"
                  >
                    Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/products"
              className="inline-flex px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Full Product Pages with Market Data →
            </a>
          </div>
        </div>
      </section>

      {/* Market Opportunity by Vertical */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Market Opportunity by Vertical</h2>
        <p className="text-gray-600 mb-10 max-w-3xl">Each product targets a confirmed, high-growth market with documented CAGR. Portfolio diversification reduces single-market risk.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-3">HR Tech &amp; Talent</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">$17.22B → $34.83B</div>
            <div className="text-sm text-gray-500 mb-4">ATS Market · 8.2% CAGR · 2025-2034</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700"><span>🧠</span> CloudSourceHRM — AI hiring platform</div>
              <div className="flex items-center gap-2 text-gray-700"><span>⚡</span> CHRM Nexus — Recruitment data API</div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-green-600 text-sm font-bold uppercase tracking-wide mb-3">Career Acceleration</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">10,900% YoY Growth</div>
            <div className="text-sm text-gray-500 mb-4">AI Resume Tools · B2C Mass Market · USA</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700"><span>📄</span> InstantResumeAI — ATS resume builder</div>
              <div className="flex items-center gap-2 text-gray-700"><span>🚀</span> ResumeBlast.ai — Recruiter distribution</div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-purple-600 text-sm font-bold uppercase tracking-wide mb-3">AI Education</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">$5.88B → $32.27B</div>
            <div className="text-sm text-gray-500 mb-4">AI in Education · 31.2% CAGR · 2024-2030</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700"><span>🎓</span> AICourseHubPro — Business AI courses</div>
              <div className="flex items-center gap-2 text-gray-700"><span>🏛️</span> GenAICourse.io — Gov &amp; enterprise AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Projections Table */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Revenue Model &amp; Projections</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">Conservative projections benchmarked against AI SaaS market data. SaaS and services revenue are clearly separated for accurate valuation modeling.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Year</th>
                  <th className="px-4 py-3 text-right font-semibold">SaaS ARR</th>
                  <th className="px-4 py-3 text-right font-semibold">Services ARR</th>
                  <th className="px-4 py-3 text-right font-semibold">Total ARR</th>
                  <th className="px-4 py-3 text-right font-semibold">SaaS %</th>
                  <th className="px-4 py-3 text-right font-semibold">YoY Growth</th>
                  <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Stage</th>
                </tr>
              </thead>
              <tbody>
                {projections.map((row, i) => (
                  <tr key={row.year} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${row.stage ? 'ring-1 ring-inset ring-blue-200' : ''}`}>
                    <td className="px-4 py-3 font-bold text-gray-900">{row.year}</td>
                    <td className="px-4 py-3 text-right text-blue-700 font-semibold">{row.saas}</td>
                    <td className="px-4 py-3 text-right text-gray-600">{row.services}</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900">{row.total}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-semibold">{row.saasPct}</span>
                    </td>
                    <td className="px-4 py-3 text-right text-green-700 font-semibold">{row.growth}</td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      {row.stage && (
                        <span className="inline-block px-2.5 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold">{row.stage}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Valuation Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 text-center">
              <div className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-2">2026 · Seed/Series A</div>
              <div className="text-3xl font-black text-gray-900 mb-1">$2.5M–$4M</div>
              <div className="text-sm text-gray-500">5-8x ARR multiple · Early stage</div>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 text-center">
              <div className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-2">2028 · Series B</div>
              <div className="text-3xl font-black text-gray-900 mb-1">$24M–$36M</div>
              <div className="text-sm text-gray-500">8-10x SaaS ARR · Growth stage</div>
            </div>
            <div className="bg-blue-600 rounded-xl p-6 text-center text-white">
              <div className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-2">2030-2031 · Exit Target</div>
              <div className="text-3xl font-black mb-1">$150M–$200M</div>
              <div className="text-blue-200 text-sm">8-10x SaaS ARR · Strategic or PE exit</div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Note: SaaS revenue receives 8-10x multiple. Services revenue receives 1-2x multiple. Revenue streams reported separately for clean valuation modeling. Projections are forward-looking and benchmarked against AI SaaS industry data.
          </p>
        </div>
      </section>

      {/* Defensible Moats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Defensible Moats &amp; Competitive Advantages</h2>
        <p className="text-gray-600 mb-10 max-w-3xl">Sustainable competitive advantages built through proprietary technology, data assets, network effects, and vertical specialization — the factors that command premium AI SaaS valuation multiples.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moats.map((moat, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mb-3 block">{moat.icon}</span>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{moat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{moat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capital Allocation */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-3">Strategic Priorities &amp; Capital Allocation</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">Disciplined allocation across product development, go-to-market, and operations for maximum capital efficiency.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl font-black text-blue-400 mb-3">40%</div>
              <h3 className="font-bold text-white text-lg mb-3">Product Development</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• MVP completion for pipeline products</li>
                <li>• Advanced agentic AI &amp; multiagent features</li>
                <li>• Enterprise features (SSO, audit logs, API)</li>
                <li>• Infrastructure and security</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl font-black text-green-400 mb-3">35%</div>
              <h3 className="font-bold text-white text-lg mb-3">Sales &amp; Marketing</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Go-to-market for each vertical</li>
                <li>• SEO and content marketing</li>
                <li>• Paid acquisition testing</li>
                <li>• Enterprise sales team</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl font-black text-purple-400 mb-3">25%</div>
              <h3 className="font-bold text-white text-lg mb-3">Team &amp; Operations</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Product managers, engineers, sales lead</li>
                <li>• Customer success &amp; support</li>
                <li>• Legal, compliance, and accounting</li>
                <li>• Operating reserve</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">24 Years of Proven Execution</h2>
        <p className="text-gray-600 mb-10 max-w-3xl">A track record of building, scaling, and adapting — now pivoting to AI-native SaaS with the operational infrastructure of a mature company.</p>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <div className="space-y-8">
            {[
              { year: '2001', title: 'Founded', desc: 'SHIRO Technologies, Inc. established in Texas as a technology services company.' },
              { year: '2010s', title: 'Global Expansion', desc: 'Expanded to India and Canada delivery centers. Built 3-country operational infrastructure.' },
              { year: '2023', title: 'AI Pivot', desc: 'Strategic pivot to AI-native SaaS portfolio. Agentic AI architecture adopted across all new products.' },
              { year: '2024', title: 'First Products Live', desc: 'Launched CloudSourceHRM, InstantResumeAI, and ResumeBlast.ai. Services revenue baseline established.' },
              { year: '2025', title: 'Portfolio Expansion', desc: 'AICourseHubPro live. CHRM Nexus in early access. GenAICourse.io in development.' },
              { year: '2026', title: 'Investment Phase', desc: 'Seeking Seed/Series A to accelerate go-to-market and complete pipeline product launches.' },
            ].map((item, i) => (
              <div key={i} className="relative pl-16">
                <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-blue-600 border-2 border-white shadow"></div>
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-600 font-black text-lg">{item.year}</span>
                    <span className="font-bold text-gray-900">{item.title}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Metrics */}
      <section className="bg-blue-50 border-y border-blue-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Key SaaS Metrics Targets (2028)</h2>
          <p className="text-gray-600 mb-10">Unit economics benchmarks that drive premium AI SaaS valuation multiples.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: 'CAC Payback', target: '< 12 months', desc: 'Customer acquisition cost recovery' },
              { metric: 'LTV:CAC Ratio', target: '3:1+', desc: 'Lifetime value to acquisition cost' },
              { metric: 'Net Revenue Retention', target: '110%+', desc: 'Revenue expansion from existing customers' },
              { metric: 'Gross Margin', target: '75%+', desc: 'SaaS gross margin target' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-blue-100 p-5 text-center shadow-sm">
                <div className="text-2xl font-black text-blue-600 mb-1">{item.target}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{item.metric}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-900 rounded-2xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            Join us in building the next generation of agentic AI SaaS platforms. Request our investor deck and financial model for detailed analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="mailto:investors@shirotechnologies.com?subject=Investor%20Deck%20Request"
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request Investor Deck →
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Schedule a Meeting
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-t border-gray-700 pt-8">
            <div>
              <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Investor Inquiries</div>
              <a href="mailto:investors@shirotechnologies.com" className="text-white hover:text-blue-300 transition-colors text-sm">
                investors@shirotechnologies.com
              </a>
            </div>
            <div>
              <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Phone</div>
              <a href="tel:+19727345623" className="text-white hover:text-blue-300 transition-colors text-sm">
                (972) 734-5623
              </a>
            </div>
            <div>
              <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Headquarters</div>
              <div className="text-white text-sm">Addison, Texas, USA</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
