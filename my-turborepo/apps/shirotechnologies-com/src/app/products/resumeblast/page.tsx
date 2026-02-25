import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ResumeBlast.ai – Intelligent Multi-Wave Resume Distribution to 1,500+ Recruiters',
  description: 'ResumeBlast.ai delivers your resume to verified recruiters in intelligent waves over days — not a one-time blast. AI targeting, multi-wave drip campaigns, and real-time tracking. Plans from $9.99.',
  keywords: [
    'resume distribution service',
    'recruiter outreach automation',
    'intelligent resume distribution',
    'multi-wave resume campaign',
    'resume drip campaign',
    'direct recruiter outreach',
    'job search automation',
    'resume blast service',
    'AI recruiter targeting',
    'resume to recruiters',
    'bypass job boards',
    'recruiter email campaign',
    'resume distribution USA',
    'job seeker outreach tool',
    'automated job search',
    'ResumeBlast',
    'SHIRO resume distribution',
    'career AI tools',
    'wave email campaign resume',
    'reach hiring managers directly',
  ],
  alternates: {
    canonical: 'https://www.shirotechnologies.com/products/resumeblast',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'ResumeBlast.ai – Intelligent Multi-Wave Resume Distribution',
    description: 'Your resume reaches 1,500+ recruiters in intelligent waves over time — not a one-time blast that gets buried. AI targeting, real-time tracking.',
    url: 'https://www.shirotechnologies.com/products/resumeblast',
    siteName: 'SHIRO Technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ResumeBlast.ai – Intelligent Multi-Wave Resume Distribution',
    description: 'AI-driven resume distribution in intelligent waves over 15–90 days. Reach up to 1,500 recruiters. From $9.99.',
    site: '@shiroapps',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ResumeBlast.ai',
    url: 'https://resumeblast.ai',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-driven resume distribution platform that delivers your resume to verified recruiters in intelligent multi-wave drip campaigns over an extended period — maximizing visibility and response rates.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '9.99',
      highPrice: '59.99',
      priceCurrency: 'USD',
      offerCount: 6,
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
        name: 'Is ResumeBlast.ai a one-time email blast?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. ResumeBlast.ai uses an intelligent multi-wave drip campaign. Your resume is distributed across three waves over an extended period — so recruiters receive your outreach continuously rather than seeing a single email that might get buried.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the wave campaign work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each plan distributes your resume across three waves. For example, the Basic plan sends to 500 recruiters in Wave 1 (Days 1-10), Wave 2 (Days 11-20), and Wave 3 (Days 21-30) — totaling 1,500 emails over 30 days. This sustained presence keeps your profile visible far longer than a one-time send.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is ResumeBlast.ai legal and ethical?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. ResumeBlast.ai sends outreach to recruiters and HR professionals who publicly seek candidates. It complies with CAN-SPAM regulations and does not send to private or harvested addresses.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is ResumeBlast.ai available outside the USA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently ResumeBlast.ai operates with a USA recruiter network. International expansion is planned.',
        },
      },
    ],
  },
];

const features = [
  {
    icon: '🌊',
    feature: 'Intelligent Wave Campaign',
    advantage: 'Your resume is distributed across three waves over 15–90 days, not sent all at once',
    benefit: 'Sustained recruiter visibility — your profile stays active far longer than a one-time blast that gets buried',
  },
  {
    icon: '📡',
    feature: 'Direct Recruiter Distribution',
    advantage: 'Sends to up to 1,500 verified recruiter contacts based on your target role and location',
    benefit: 'Bypass the job board black hole and reach decision-makers directly in their inbox',
  },
  {
    icon: '🎯',
    feature: 'AI Targeting Engine',
    advantage: 'Identifies the right HR contacts based on your target role, industry, and geography',
    benefit: 'Your resume reaches the recruiters most likely to have relevant openings — not random inboxes',
  },
  {
    icon: '📈',
    feature: 'Real-Time Tracking Dashboard',
    advantage: 'See delivery, open, and click data per wave as it happens',
    benefit: 'Know which wave generated interest so you can follow up at exactly the right moment',
  },
];

const plans = [
  {
    name: 'Starter',
    price: '$9.99',
    recruiters: 250,
    daysPerWave: 5,
    wave1: 'Day 1–5',
    wave2: 'Day 6–10',
    wave3: 'Day 11–15',
    totalDays: 15,
    totalEmails: 750,
    featured: false,
  },
  {
    name: 'Basic',
    price: '$14.99',
    recruiters: 500,
    daysPerWave: 10,
    wave1: 'Day 1–10',
    wave2: 'Day 11–20',
    wave3: 'Day 21–30',
    totalDays: 30,
    totalEmails: 1500,
    featured: false,
  },
  {
    name: 'Professional',
    price: '$29.99',
    recruiters: 750,
    daysPerWave: 15,
    wave1: 'Day 1–15',
    wave2: 'Day 16–30',
    wave3: 'Day 31–45',
    totalDays: 45,
    totalEmails: 2250,
    featured: true,
  },
  {
    name: 'Growth',
    price: '$39.99',
    recruiters: 1000,
    daysPerWave: 20,
    wave1: 'Day 1–20',
    wave2: 'Day 21–40',
    wave3: 'Day 41–60',
    totalDays: 60,
    totalEmails: 3000,
    featured: false,
  },
  {
    name: 'Advanced',
    price: '$49.99',
    recruiters: 1250,
    daysPerWave: 25,
    wave1: 'Day 1–25',
    wave2: 'Day 26–50',
    wave3: 'Day 51–75',
    totalDays: 75,
    totalEmails: 3750,
    featured: false,
  },
  {
    name: 'Premium',
    price: '$59.99',
    recruiters: 1500,
    daysPerWave: 30,
    wave1: 'Day 1–30',
    wave2: 'Day 31–60',
    wave3: 'Day 61–90',
    totalDays: 90,
    totalEmails: 4500,
    featured: false,
  },
];

const steps = [
  {
    number: '01',
    title: 'Upload Your Resume',
    description: 'Upload your resume and set your target role, industry, and location. Our system prepares your profile for wave distribution.',
  },
  {
    number: '02',
    title: 'AI Selects Your Recruiters',
    description: 'Based on your target role and location, the AI identifies the most relevant verified recruiter contacts from our network.',
  },
  {
    number: '03',
    title: 'Waves Go Out Automatically',
    description: 'Your resume is delivered across three waves over your plan period — keeping you visible to recruiters continuously, not just once.',
  },
];

const faqs = [
  {
    q: 'Is ResumeBlast.ai a one-time email blast?',
    a: 'No. ResumeBlast.ai uses an intelligent multi-wave drip campaign. Your resume is distributed across three waves over an extended period — so recruiters receive your outreach continuously rather than seeing a single email that might get buried in their inbox.',
  },
  {
    q: 'How does the three-wave system work?',
    a: 'Each plan splits your total recruiter list across three waves sent over your plan duration. For example, the Professional plan contacts 750 recruiters per wave over 45 days — Wave 1 (Days 1–15), Wave 2 (Days 16–30), Wave 3 (Days 31–45). This creates sustained presence that a one-time send cannot match.',
  },
  {
    q: 'Why waves instead of a single blast?',
    a: 'A single email to all recruiters at once means most responses (if any) come in a narrow window. Multi-wave distribution keeps your profile active across a much longer period — increasing the chance your resume arrives when a recruiter has an actual opening that matches your profile.',
  },
  {
    q: 'Is ResumeBlast.ai legal and ethical?',
    a: 'Yes. ResumeBlast.ai sends outreach to recruiters and HR professionals who publicly seek candidates. It does not send to private or harvested addresses, and it complies with CAN-SPAM regulations.',
  },
  {
    q: 'How is this different from applying on job boards?',
    a: 'Job boards put your resume in a pool with hundreds of other applicants. ResumeBlast.ai sends your resume directly to recruiter inboxes in a sustained wave campaign — creating a first-mover advantage that job board applications cannot replicate.',
  },
  {
    q: 'Is ResumeBlast.ai available outside the USA?',
    a: 'Currently ResumeBlast.ai operates with a USA-based recruiter network. International expansion is planned.',
  },
];

export default function ResumeBlastPage() {
  return (
    <>
      <Script
        id="resumeblast-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">

        {/* Hero */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="flex justify-center gap-2 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live
              </span>
              <span className="px-3 py-1 bg-red-50 text-red-700 text-sm font-semibold rounded-full">🇺🇸 USA Only</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Resume Reaches Recruiters<br />Across Multiple Waves — Not Just Once
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              ResumeBlast.ai delivers your resume to 250–1,500 verified recruiters in three intelligent waves over 15–90 days. Sustained distribution keeps you visible across an extended window — so your profile arrives when a recruiter actually has an opening.
            </p>
            <p className="text-sm text-gray-400 mb-10">Plans from $9.99 · AI targeting · Real-time tracking</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://resumeblast.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg text-lg transition-all shadow-md"
              >
                Start My Campaign →
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg text-lg transition-colors"
              >
                View Plans
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gray-900 text-white py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-1">1,500+</div>
              <div className="text-gray-300">Verified recruiter contacts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-1">3 Waves</div>
              <div className="text-gray-300">Per campaign — sustained visibility</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-1">90 Days</div>
              <div className="text-gray-300">Maximum campaign duration</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Wave Distribution Outperforms a One-Time Blast</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Timing matters in recruiting. Waves keep you in front of recruiters continuously — matching your arrival to when they have openings.</p>
          </div>
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <div className="font-bold text-gray-900 text-lg mb-1">{f.feature}</div>
                  <div className="text-gray-600 text-sm mb-2">{f.advantage}</div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 text-orange-800 text-sm font-semibold rounded-full">
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
              <h2 className="text-3xl font-bold mb-3">How ResumeBlast Works</h2>
              <p className="text-gray-400">Upload once. Waves go out automatically.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-black text-orange-400 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Campaign</h2>
            <p className="text-gray-600">All plans include AI targeting, three waves, and real-time tracking.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-bold text-gray-900">Plan</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Price</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Recruiters / Wave</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Days / Wave</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Wave 1</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Wave 2</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Wave 3</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Total Days</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900">Total Emails</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-900"></th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 last:border-0 ${plan.featured ? 'bg-orange-50' : 'hover:bg-gray-50'}`}
                  >
                    <td className="px-4 py-4 font-semibold text-gray-900">
                      {plan.name}
                      {plan.featured && (
                        <span className="ml-2 text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full">Most Popular</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center font-bold text-gray-900">{plan.price}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{plan.recruiters.toLocaleString()}</td>
                    <td className="px-4 py-4 text-center text-gray-700">{plan.daysPerWave}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{plan.wave1}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{plan.wave2}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{plan.wave3}</td>
                    <td className="px-4 py-4 text-center font-semibold text-gray-900">{plan.totalDays} days</td>
                    <td className="px-4 py-4 text-center font-semibold text-gray-900">{plan.totalEmails.toLocaleString()}</td>
                    <td className="px-4 py-4 text-center">
                      <a
                        href="https://resumeblast.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block px-4 py-2 rounded-lg font-semibold text-xs transition-all ${plan.featured ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                      >
                        Start
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Getting Found by Recruiters?</h2>
            <p className="text-orange-100 mb-8 text-lg">Choose your plan and let three waves of distribution do the work.</p>
            <a
              href="https://resumeblast.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-orange-700 font-bold rounded-lg hover:bg-orange-50 transition-colors text-lg"
            >
              Start My Campaign →
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
