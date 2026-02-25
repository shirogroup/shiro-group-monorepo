import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'CHRM Nexus – Recruitment Data API & Labor Market Intelligence | SHIRO Technologies',
  description: 'Enterprise recruitment Data-as-a-Service. Clean, structured job data delivered via API from multiple verified sources. 99.8% AI accuracy. 48-hour freshness guarantee. Tiered API access for agencies, job boards, and analytics firms.',
  keywords: [
    'recruitment data API',
    'HR data as a service',
    'labor market intelligence API',
    'talent intelligence platform',
    'recruitment data enrichment',
    'job market data API',
    'real-time hiring data feed',
    'B2B recruitment API',
    'enterprise talent data',
    'workforce analytics API',
    'HR intelligence platform',
    'recruitment automation API',
    'hiring market insights',
    'CHRM Nexus',
    'SHIRO DaaS recruitment',
    'structured job data API',
    'DaaS workforce intelligence',
    'multi-source job data',
    'VMS job data API',
    'verified recruitment data',
  ],
  alternates: {
    canonical: 'https://www.shirotechnologies.com/products/chrm-nexus',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'CHRM Nexus – Recruitment Data-as-a-Service API',
    description: 'Enterprise recruitment intelligence from multiple verified sources. Structured job data via API with 99.8% AI accuracy.',
    url: 'https://www.shirotechnologies.com/products/chrm-nexus',
    siteName: 'SHIRO Technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHRM Nexus – Recruitment Data-as-a-Service API',
    description: 'Structured job data from multiple verified sources. 99.8% AI accuracy. 48-hour freshness guarantee.',
    site: '@shiroapps',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CHRM Nexus',
    url: 'https://cloudsourcehrm.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'Enterprise Recruitment Data-as-a-Service (DaaS) platform. Aggregates job data from multiple verified sources, normalizes it with Gemini AI, and delivers clean structured JSON via REST API.',
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/LimitedAvailability',
      description: 'Tiered API access: Platinum (real-time), Gold (4-hour), Silver (daily batch)',
    },
    provider: {
      '@type': 'Organization',
      name: 'SHIRO Technologies',
      url: 'https://www.shirotechnologies.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is CHRM Nexus and who is it for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CHRM Nexus is an enterprise Recruitment Data-as-a-Service (DaaS) platform designed for recruitment agencies, job boards, labor market intelligence firms, and hedge funds using hiring signals as alternative financial data.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where does CHRM Nexus job data come from?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CHRM Nexus aggregates job data from multiple verified sources: partner job submissions, manual additions by our operations team, and VMS (Vendor Management System) postings that are scanned and added to the platform. This multi-source approach ensures comprehensive, accurate coverage.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does 48-hour data freshness mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every job record carries a time-to-live (TTL) of 48 hours. Records not confirmed as open within that window are automatically purged, ensuring your API feed contains only verified, active job requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What API tiers are available for CHRM Nexus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CHRM Nexus offers three tiers: Platinum (real-time API access), Gold (4-hour delayed feed), and Silver (daily batch delivery). A separate Market Intelligence Hub subscription provides historical data analytics.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is CHRM Nexus available globally?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CHRM Nexus is currently available for USA-based customers and data sources only. Global expansion is on the roadmap for 2026-2027.',
        },
      },
    ],
  },
];

const features = [
  {
    icon: '🗂️',
    feature: 'Multi-Source Data Aggregation',
    advantage: 'Job data collected from partner submissions, operations team additions, and VMS postal postings that are scanned and ingested',
    benefit: 'Broader, more reliable coverage than single-source platforms — no single point of failure',
  },
  {
    icon: '⚡',
    feature: 'AI Normalization Engine',
    advantage: 'Gemini AI converts raw, unstructured job data from any source into clean normalized JSON in 1.4 seconds',
    benefit: 'Consistent, structured output regardless of input format — zero manual cleanup',
  },
  {
    icon: '📊',
    feature: 'Market Intelligence Hub',
    advantage: 'Historical hiring data and trend analytics across industries stored in BigQuery',
    benefit: 'See market shifts before your competitors do',
  },
  {
    icon: '🔌',
    feature: 'Tiered API Access',
    advantage: 'Platinum (real-time), Gold (4-hour), Silver (daily batch) — choose your tier',
    benefit: 'Match your data velocity needs to your budget with no waste',
  },
  {
    icon: '🔄',
    feature: '48-Hour Data Freshness Guarantee',
    advantage: 'TTL enforcement automatically purges unconfirmed records within 48 hours',
    benefit: 'Only genuine, open requirements reach your team — no stale data',
  },
  {
    icon: '🔒',
    feature: 'Apply Shield Privacy Architecture',
    advantage: 'Privacy-preserving candidate data handling via cloudsourcehrm.net',
    benefit: 'Full compliance without engineering overhead',
  },
];

const sources = [
  {
    icon: '🤝',
    title: 'Partner Submissions',
    description: 'Recruitment partners and vendors submit job requirements directly. Format-agnostic ingestion handles any structure.',
  },
  {
    icon: '🛠️',
    title: 'Operations Team',
    description: 'Our dedicated operations team manually verifies, enriches, and adds job records to ensure data quality at every level.',
  },
  {
    icon: '📬',
    title: 'VMS Postal Postings',
    description: 'Physical VMS postings are scanned and digitized by our team, converting offline requirements into structured API-ready records.',
  },
];

const tiers = [
  {
    name: 'Silver',
    badgeBg: 'bg-gray-100',
    badgeText: 'text-gray-700',
    description: 'Daily batch access',
    access: 'Daily batch delivery',
    ideal: 'Agencies doing retrospective analysis',
    cta: 'Request Access',
    featured: false,
  },
  {
    name: 'Gold',
    badgeBg: 'bg-yellow-100',
    badgeText: 'text-yellow-800',
    description: '4-hour delay access',
    access: '4-hour delayed feed',
    ideal: 'Job boards and staffing firms',
    cta: 'Request Access',
    featured: true,
  },
  {
    name: 'Platinum',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    description: 'Real-time API access',
    access: 'Live streaming data',
    ideal: 'Hedge funds, high-frequency labor analytics',
    cta: 'Contact Sales',
    featured: false,
  },
];

const steps = [
  { number: '01', title: 'Data Collected from Multiple Sources', description: 'Partner submissions, manual operations additions, and scanned VMS postings are ingested continuously — no single dependency.' },
  { number: '02', title: 'AI Normalizes & Structures', description: 'Gemini AI processes each record and outputs a clean, normalized JSON job record in 1.4 seconds with 99.8% accuracy.' },
  { number: '03', title: 'API Delivers to You', description: 'Your platform consumes structured job data via REST API — real-time, 4-hour batches, or daily delivery.' },
];

const faqs = [
  {
    q: 'What is CHRM Nexus and who is it for?',
    a: 'CHRM Nexus is an enterprise Recruitment Data-as-a-Service (DaaS) platform. It is designed for recruitment agencies, job boards, labor market intelligence firms, and hedge funds using hiring signals as alternative financial data.',
  },
  {
    q: 'Where does the job data come from?',
    a: 'CHRM Nexus aggregates data from three complementary sources: partner job submissions (format-agnostic), manual additions by our operations team, and VMS postal postings that are scanned and digitized. This multi-source model ensures broad, reliable coverage.',
  },
  {
    q: 'What does "48-hour data freshness" mean?',
    a: 'Every job record carries a time-to-live (TTL) of 48 hours. Records that have not been confirmed as open within that window are automatically purged, ensuring your API feed contains only verified, active job requirements.',
  },
  {
    q: 'How accurate is the AI normalization?',
    a: 'The AI Normalization Engine achieves a verified 99.8% accuracy rate when converting raw job data into structured JSON records, regardless of the original source format.',
  },
  {
    q: 'Is CHRM Nexus available globally?',
    a: 'CHRM Nexus is currently available for USA-based customers and data sources only. Global expansion is on the roadmap for 2026-2027.',
  },
  {
    q: 'Can I access historical data?',
    a: 'Yes. The Market Intelligence Hub subscription provides access to historical hiring trends, sector analytics, and longitudinal data stored in Google BigQuery.',
  },
];

export default function CHRMNexusPage() {
  return (
    <>
      <Script
        id="chrm-nexus-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">

        {/* Hero */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="flex justify-center gap-2 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span> Early Access
              </span>
              <span className="px-3 py-1 bg-red-50 text-red-700 text-sm font-semibold rounded-full">🇺🇸 USA Only</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Clean, Structured Recruitment Data<br />Delivered via API
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              CHRM Nexus aggregates job data from multiple verified sources, normalizes it with Gemini AI, and delivers structured JSON records via REST API — with 99.8% accuracy and 48-hour freshness guarantees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cloudsourcehrm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-lg text-lg transition-all shadow-md"
              >
                Request Early Access →
              </a>
              <a
                href="https://cloudsourcehrm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg text-lg transition-colors"
              >
                View API Docs
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gray-900 text-white py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-1">1.4s</div>
              <div className="text-gray-300">AI normalization latency</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-1">99.8%</div>
              <div className="text-gray-300">Normalization accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-1">48hr</div>
              <div className="text-gray-300">Data freshness guarantee</div>
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Multiple Verified Data Sources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">CHRM Nexus doesn't depend on a single input channel. Data flows in continuously from three complementary sources — ensuring coverage, redundancy, and freshness.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sources.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Enterprise-Grade Recruitment Intelligence</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Built for organizations that need clean data fast — at scale.</p>
            </div>
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl">{f.icon}</span>
                  <div>
                    <div className="font-bold text-gray-900 text-lg mb-1">{f.feature}</div>
                    <div className="text-gray-600 text-sm mb-2">{f.advantage}</div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-50 text-yellow-800 text-sm font-semibold rounded-full">
                      ✓ {f.benefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">How CHRM Nexus Works</h2>
              <p className="text-gray-400">From multiple raw sources to structured API data — automatically.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-black text-yellow-400 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Tiers */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Access Tier</h2>
            <p className="text-gray-600">Match your data velocity needs to the right tier.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <div key={i} className={`bg-white rounded-xl border p-6 text-center shadow-sm ${tier.featured ? 'border-yellow-400 ring-2 ring-yellow-400' : 'border-gray-200'}`}>
                {tier.featured && (
                  <div className="text-xs font-bold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full mb-4 inline-block">Most Popular</div>
                )}
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 ${tier.badgeBg} ${tier.badgeText}`}>{tier.name}</span>
                <p className="font-semibold text-gray-900 mb-2">{tier.description}</p>
                <p className="text-sm text-gray-500 mb-2">{tier.access}</p>
                <p className="text-xs text-gray-400 mb-6">Ideal for: {tier.ideal}</p>
                <a
                  href="https://cloudsourcehrm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg text-sm hover:from-yellow-600 hover:to-orange-600 transition-all"
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-yellow-500 to-orange-500 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for Enterprise Recruitment Intelligence?</h2>
            <p className="text-yellow-100 mb-8 text-lg">Request early access and our team will contact you within one business day.</p>
            <a
              href="https://cloudsourcehrm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-orange-700 font-bold rounded-lg hover:bg-orange-50 transition-colors text-lg"
            >
              Request Early Access →
            </a>
          </div>
        </section>

        <div className="text-center py-8">
          <a href="/products" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            ← Back to All Products
          </a>
        </div>
      </main>
    </>
  );
}
