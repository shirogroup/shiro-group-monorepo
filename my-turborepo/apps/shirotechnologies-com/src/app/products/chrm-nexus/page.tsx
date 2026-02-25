import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CHRM Nexus – Recruitment Data-as-a-Service API | SHIRO Technologies',
  description: 'Turn unstructured vendor job emails into clean JSON in 1.4 seconds. Enterprise recruitment DaaS with 99.8% AI accuracy, tiered API access, and 48-hour data freshness.',
  openGraph: {
    title: 'CHRM Nexus – Recruitment Data-as-a-Service API',
    description: 'Enterprise recruitment intelligence. Structured job data via API in under 2 seconds.',
    url: 'https://www.shirotechnologies.com/products/chrm-nexus',
    siteName: 'SHIRO Technologies',
    type: 'website',
  },
};

const features = [
  {
    icon: '⚡',
    feature: 'AI Glorification Engine',
    advantage: 'Gemini AI converts unstructured emails to clean JSON in 1.4 seconds',
    benefit: 'Process thousands of job records daily with zero manual effort',
  },
  {
    icon: '📊',
    feature: 'Market Intelligence Hub',
    advantage: 'Historical hiring data and trend analytics across industries',
    benefit: 'See market shifts before your competitors do',
  },
  {
    icon: '🔌',
    feature: 'Tiered API Access',
    advantage: 'Platinum (real-time), Gold (4-hour), Silver (daily batch) — choose your tier',
    benefit: 'Match your data needs to your budget with no waste',
  },
  {
    icon: '🔄',
    feature: '48-Hour Data Freshness Guarantee',
    advantage: 'TTL enforcement ensures no stale job records enter your pipeline',
    benefit: 'Only genuine, open requirements reach your team',
  },
  {
    icon: '🔒',
    feature: 'Apply Shield Privacy Architecture',
    advantage: 'Privacy-preserving candidate data handling via cloudsourcehrm.net',
    benefit: 'Full compliance without engineering overhead',
  },
];

const tiers = [
  {
    name: 'Silver',
    badge: 'bg-gray-100 text-gray-700',
    description: 'Daily batch access',
    access: 'Daily batch delivery',
    ideal: 'Agencies doing retrospective analysis',
    cta: 'Request Access',
  },
  {
    name: 'Gold',
    badge: 'bg-yellow-100 text-yellow-800',
    description: '4-hour delay access',
    access: '4-hour delayed feed',
    ideal: 'Job boards and staffing firms',
    cta: 'Request Access',
    featured: true,
  },
  {
    name: 'Platinum',
    badge: 'bg-blue-100 text-blue-800',
    description: 'Real-time API access',
    access: 'Live streaming data',
    ideal: 'Hedge funds, high-frequency labor analytics',
    cta: 'Contact Sales',
  },
];

const faqs = [
  {
    q: 'What is CHRM Nexus and who is it for?',
    a: 'CHRM Nexus is an enterprise Recruitment Data-as-a-Service (DaaS) platform. It is designed for recruitment agencies, job boards, labor market intelligence firms, and hedge funds using hiring signals as alternative financial data.',
  },
  {
    q: 'How does the AI Glorification Engine work?',
    a: 'Unstructured vendor job emails are ingested via Gmail API and Google Pub/Sub. Google Gemini 1.5 Flash processes each email and outputs a normalized JSON record within 1.4 seconds, with a verified 99.8% accuracy rate.',
  },
  {
    q: 'What does "48-hour data freshness" mean?',
    a: 'Every job record carries a time-to-live (TTL) of 48 hours. Records that have not been confirmed as open within that window are automatically purged, ensuring your API feed contains only verified, active job requirements.',
  },
  {
    q: 'What is the ingestion email address?',
    a: 'Vendors and partners submit job data to neha@shirotechnologies.com. The system automatically ingests, parses, and normalizes all incoming job notifications.',
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

const steps = [
  { number: '01', title: 'Vendors Submit Jobs', description: 'Recruitment vendors email job requirements to your dedicated ingestion address. No format required.' },
  { number: '02', title: 'AI Processes & Structures', description: 'Gemini AI reads each email and outputs a clean, normalized JSON record in under 2 seconds.' },
  { number: '03', title: 'API Delivers to You', description: 'Your platform consumes structured job data via REST API in real-time, 4-hour batches, or daily delivery.' },
];

export default function CHRMNexusPage() {
  return (
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
            Turn Recruitment Emails into<br />Structured Data in 1.4 Seconds
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            CHRM Nexus ingests unstructured vendor job emails, runs them through Gemini AI, and delivers clean JSON job records via API — with 99.8% accuracy and 48-hour freshness guarantees.
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
            <div className="text-gray-300">Average processing latency</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-1">99.8%</div>
            <div className="text-gray-300">AI glorification accuracy</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-1">48hr</div>
            <div className="text-gray-300">Data freshness guarantee</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
      </section>

      {/* How It Works */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How CHRM Nexus Works</h2>
            <p className="text-gray-400">From unstructured email to structured API data — automatically.</p>
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
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 ${tier.badge}`}>{tier.name}</span>
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
  );
}
