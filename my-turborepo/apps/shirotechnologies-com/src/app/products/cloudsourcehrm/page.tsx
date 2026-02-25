import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'CloudSourceHRM – AI Hiring Software & HR Automation Platform | SHIRO Technologies',
  description: 'CloudSourceHRM is an AI-powered applicant tracking system and HR automation platform. 50% faster hiring, unified talent discovery, and GDPR-compliant workforce management for global teams.',
  keywords: [
    'AI hiring software',
    'applicant tracking system',
    'HR automation software',
    'AI recruitment platform',
    'talent acquisition software',
    'cloud HRM software',
    'AI-powered hiring',
    'workforce management software',
    'hiring automation platform',
    'recruitment software for SMBs',
    'candidate sourcing software',
    'resume parsing software',
    'HRIS platform',
    'AI candidate screening',
    'talent pipeline management',
    'skills-based hiring platform',
    'CloudSourceHRM',
    'reduce time to hire with AI',
    '3-in-1 HR platform',
    'AI workforce intelligence',
  ],
  alternates: {
    canonical: 'https://www.shirotechnologies.com/products/cloudsourcehrm',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'CloudSourceHRM – AI Hiring Software & HR Automation Platform',
    description: '50% faster hiring with AI-powered talent discovery, automated outreach, and unified workforce management. ATS market growing to $34.83B by 2034.',
    url: 'https://www.shirotechnologies.com/products/cloudsourcehrm',
    siteName: 'SHIRO Technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudSourceHRM – AI Hiring Software & HR Automation Platform',
    description: '50% faster hiring with AI-powered talent discovery and unified workforce management. GDPR compliant. Start free.',
    site: '@shiroapps',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CloudSourceHRM',
    url: 'https://cloudsourcehrm.us',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-powered workforce intelligence and hiring automation platform for recruiters, HR teams, and enterprises.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free trial available',
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
        name: 'Who is CloudSourceHRM built for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Recruiters, HR teams, and organizations of any size — from growing startups to established enterprises. It serves both direct employers and staffing agencies.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is CloudSourceHRM different from a standard ATS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CloudSourceHRM goes beyond tracking. It actively sources candidates, automates communication, and unifies freelancers, vendors, and job seekers in one workflow — not just applicants.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is CloudSourceHRM GDPR compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. CloudSourceHRM is built with GDPR and CCPA compliance, including consent management, right-to-deletion workflows, and encrypted data storage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a free trial for CloudSourceHRM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Sign up for a free trial with no credit card required. Explore the full platform before committing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can CloudSourceHRM integrate with existing tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CloudSourceHRM integrates with major job boards and communication tools. The API-first architecture means it fits into your existing stack.',
        },
      },
    ],
  },
];

const features = [
  {
    icon: '🔍',
    feature: 'Automated Talent Discovery',
    advantage: 'Scans multiple sourcing channels simultaneously',
    benefit: 'Fill roles up to 50% faster without manual searching',
  },
  {
    icon: '⚙️',
    feature: 'Process Automation',
    advantage: 'Eliminates repetitive administrative hiring tasks',
    benefit: 'Your team focuses on decisions, not data entry',
  },
  {
    icon: '🌐',
    feature: 'Unified Workforce Ecosystem',
    advantage: 'One platform for job seekers, suppliers, and freelancers',
    benefit: 'Stop juggling five tools to manage one hire',
  },
  {
    icon: '📧',
    feature: 'Smart Communication Engine',
    advantage: 'Personalized email campaigns with optional human review',
    benefit: 'Candidates get timely, relevant outreach at every stage',
  },
  {
    icon: '☁️',
    feature: 'Cloud-Native Scalability',
    advantage: 'Access from anywhere, scales with your team size',
    benefit: 'Grow without infrastructure headaches or IT bottlenecks',
  },
];

const steps = [
  { number: '01', title: 'Post Your Role', description: 'Create a job in minutes. CloudSourceHRM publishes across sourcing channels automatically.' },
  { number: '02', title: 'AI Discovers Candidates', description: 'Our intelligence engine scans, scores, and surfaces the best-fit candidates for your role.' },
  { number: '03', title: 'Automate Outreach & Track', description: 'Personalized email sequences go out automatically. You review, approve, and hire.' },
];

const faqs = [
  {
    q: 'Who is CloudSourceHRM built for?',
    a: 'Recruiters, HR teams, and organizations of any size — from growing startups to established enterprises. It serves both direct employers and staffing agencies.',
  },
  {
    q: 'How is this different from a standard ATS?',
    a: 'CloudSourceHRM goes beyond tracking. It actively sources candidates, automates communication, and unifies freelancers, vendors, and job seekers in one workflow — not just applicants.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. CloudSourceHRM is built with GDPR and CCPA compliance, including consent management, right-to-deletion workflows, and encrypted data storage.',
  },
  {
    q: 'Can I use it alongside my existing tools?',
    a: 'CloudSourceHRM integrates with major job boards and communication tools. The API-first architecture means it fits into your existing stack.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. Sign up for a free trial with no credit card required. Explore the full platform before committing.',
  },
];

export default function CloudSourceHRMPage() {
  return (
    <>
      <Script
        id="cloudsourcehrm-jsonld"
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
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">🌍 Global</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hire Faster with AI-Powered<br />Workforce Intelligence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              CloudSourceHRM automates talent discovery, candidate outreach, and workforce coordination — so your team spends time on people, not process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cloudsourcehrm.us"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg text-lg transition-all shadow-md"
              >
                Start Free Trial →
              </a>
              <a
                href="https://cloudsourcehrm.us"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg text-lg transition-colors"
              >
                Request Demo
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-blue-600 text-white py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-1">50%</div>
              <div className="text-blue-100">Faster time-to-fill</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">3-in-1</div>
              <div className="text-blue-100">Employers, freelancers, vendors unified</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">GDPR</div>
              <div className="text-blue-100">Compliant by design</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Teams Choose CloudSourceHRM</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every feature is built around one goal: getting the right person hired faster.</p>
          </div>
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <div className="font-bold text-gray-900 text-lg mb-1">{f.feature}</div>
                  <div className="text-gray-600 text-sm mb-2">{f.advantage}</div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
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
              <h2 className="text-3xl font-bold mb-3">How It Works</h2>
              <p className="text-gray-400">From job post to hire in three automated steps.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-black text-blue-400 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
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
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Recruiting?</h2>
            <p className="text-blue-100 mb-8 text-lg">Start your free trial today. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cloudsourcehrm.us"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Start Free Trial →
              </a>
              <a
                href="https://cloudsourcehrm.us"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
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
