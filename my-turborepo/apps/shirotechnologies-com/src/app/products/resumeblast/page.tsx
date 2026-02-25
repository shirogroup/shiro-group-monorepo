import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ResumeBlast.ai – Send Your Resume to 1,500+ Recruiters Overnight | USA Job Seekers',
  description: 'Skip job boards. ResumeBlast.ai uses AI to deliver your resume directly to HR teams and hiring managers at 1,500+ companies. Real-time tracking, 3-day drip campaigns. USA only. Free to start.',
  keywords: [
    'send resume to recruiters',
    'resume distribution service',
    'mass resume blast',
    'bypass job boards',
    'get resume to hiring managers',
    'automated job search tool',
    'resume email blast service',
    'recruiter outreach service',
    'job search automation USA',
    'AI job search tool',
    'direct recruiter contact',
    'bypass ATS black hole',
    'reach hiring managers directly',
    'recruiter email campaign',
    'automated job application',
    'ResumeBlast AI',
    'SHIRO resume distribution',
    'job seeker tools USA',
    'get hired without applying online',
    'resume to 1500 recruiters',
  ],
  alternates: {
    canonical: 'https://www.shirotechnologies.com/products/resumeblast',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'ResumeBlast.ai – Reach 1,500+ Recruiters Overnight',
    description: 'AI-driven resume distribution that bypasses job boards and delivers your resume directly to hiring managers. USA-only. Real-time tracking included.',
    url: 'https://www.shirotechnologies.com/products/resumeblast',
    siteName: 'SHIRO Technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ResumeBlast.ai – Send Your Resume to 1,500+ Recruiters Overnight',
    description: 'AI-driven resume distribution. Bypass job boards. Real-time tracking. USA job seekers.',
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
    description: 'AI-driven resume distribution service that sends your resume directly to 1,500+ recruiters and hiring managers in the USA.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: 'https://resumeblast.ai',
    },
    creator: {
      '@type': 'Organization',
      name: 'SHIRO Technologies LLC',
      url: 'https://www.shirotechnologies.com',
    },
    featureList: [
      'Direct distribution to 1,500+ recruiters',
      'AI targeting engine',
      'Real-time open and click tracking',
      '3-day automated follow-up drip campaign',
    ],
    availableOnDevice: 'Web Browser',
    applicationSubCategory: 'Job Search',
    inLanguage: 'en-US',
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'Country',
        name: 'United States',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is ResumeBlast.ai legal and ethical?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. ResumeBlast.ai sends outreach to recruiters and HR professionals who publicly seek candidates. It complies with CAN-SPAM regulations and does not use harvested private addresses.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is ResumeBlast different from applying on job boards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Job boards put your resume in a pool with hundreds of other applicants. ResumeBlast.ai sends your resume directly to the inbox of hiring managers and recruiters, creating a first-mover advantage.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a 3-day drip campaign?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After the initial distribution, ResumeBlast.ai automatically sends follow-up messages on day 2 and day 3 to recruiters who opened but did not respond — keeping you top-of-mind without additional effort.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is ResumeBlast.ai available outside the USA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently, ResumeBlast.ai is USA-only. The recruiter database and distribution system is optimized for the US job market.',
        },
      },
    ],
  },
];

const features = [
  {
    icon: '📡',
    feature: 'Direct Recruiter Distribution',
    advantage: 'Sends your resume to 1,500+ verified recruiter contacts',
    benefit: 'Bypass the job board black hole and reach decision-makers directly',
  },
  {
    icon: '🎯',
    feature: 'AI Targeting Engine',
    advantage: 'Identifies the right HR contacts based on your target role and industry',
    benefit: 'Your resume reaches hiring managers — not generic inboxes',
  },
  {
    icon: '📈',
    feature: 'Real-Time Tracking Dashboard',
    advantage: 'See delivery, open, and click data as it happens',
    benefit: 'Know exactly who is interested so you can follow up strategically',
  },
  {
    icon: '🔁',
    feature: '3-Day Automated Drip Campaign',
    advantage: 'Follow-up sequences sent automatically over 72 hours',
    benefit: 'Stay top-of-mind with recruiters without sending emails yourself',
  },
];

const steps = [
  { number: '01', title: 'Upload Your Resume', description: 'Upload your existing resume or paste your experience. Our system prepares it for distribution.' },
  { number: '02', title: 'AI Finds the Right Recruiters', description: 'Based on your target role and location, we identify the most relevant recruiter contacts across 1,500+ companies.' },
  { number: '03', title: 'Blast + Track', description: 'Your resume goes out with a personalized introduction. Track every open, click, and reply in real time.' },
];

const faqs = [
  {
    q: 'Is ResumeBlast.ai legal and ethical?',
    a: 'Yes. ResumeBlast.ai sends outreach to recruiters and HR professionals who publicly seek candidates. It does not send to private or harvested addresses, and it complies with CAN-SPAM regulations.',
  },
  {
    q: 'How is this different from applying on job boards?',
    a: 'Job boards put your resume in a pool with hundreds of other applicants. ResumeBlast.ai sends your resume directly to the inbox of hiring managers and recruiters, creating a first-mover advantage.',
  },
  {
    q: 'What is a "3-day drip campaign"?',
    a: 'After the initial distribution, ResumeBlast.ai automatically sends follow-up messages on day 2 and day 3 to recruiters who opened but did not respond — keeping you top-of-mind without you having to do anything.',
  },
  {
    q: 'Is ResumeBlast.ai available outside the USA?',
    a: 'Currently, ResumeBlast.ai is USA-only. The recruiter database and distribution system is optimized for the US job market.',
  },
  {
    q: 'What does the free tier include?',
    a: 'The free tier lets you experience the platform and see how it works. Paid tiers unlock full distribution to 1,500+ contacts and the complete tracking and follow-up features.',
  },
  {
    q: 'How quickly does distribution happen?',
    a: 'Distribution typically begins within minutes of submission. You should start seeing tracking data — opens, clicks — within a few hours.',
  },
];

export default function ResumeBlastPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Script
        id="resumeblast-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            Send Your Resume to 1,500+<br />Recruiters Overnight
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            ResumeBlast.ai bypasses job boards entirely. AI identifies the right hiring managers, delivers your resume directly to their inbox, and tracks every open and click in real time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://resumeblast.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg text-lg transition-all shadow-md"
            >
              Blast My Resume Free →
            </a>
            <a
              href="https://resumeblast.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg text-lg transition-colors"
            >
              See How It Works
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">Free to start · No credit card required · USA job seekers</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-600 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-1">1,500+</div>
            <div className="text-orange-100">Recruiter contacts in our network</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">3-Day</div>
            <div className="text-orange-100">Automated follow-up campaign</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">Live</div>
            <div className="text-orange-100">Real-time open &amp; click tracking</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Stop Waiting. Start Getting Found.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">ResumeBlast flips job searching — instead of you finding companies, companies find you.</p>
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
            <p className="text-gray-400">From upload to recruiter inboxes in three automated steps.</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Found by Recruiters?</h2>
          <p className="text-orange-100 mb-8 text-lg">Stop applying into the void. Start getting calls.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://resumeblast.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-orange-700 font-bold rounded-lg hover:bg-orange-50 transition-colors"
            >
              Blast My Resume Free →
            </a>
            <a
              href="https://resumeblast.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Pricing
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
  );
}
