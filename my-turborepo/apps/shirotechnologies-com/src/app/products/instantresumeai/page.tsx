import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'InstantResumeAI – AI-Powered Resume Optimizer for Any Job Description',
  description: 'Not a resume builder. InstantResumeAI takes your job description and your matching experience, then rewrites your existing resume with AI to align precisely — keeping your format intact. Get interview-ready in minutes.',
  keywords: [
    'AI resume optimizer',
    'resume tailoring AI',
    'job description resume match',
    'AI resume rewriter',
    'ATS resume optimization',
    'resume customization tool',
    'job-specific resume AI',
    'resume keyword optimizer',
    'AI resume update',
    'resume alignment tool',
    'match resume to job description',
    'InstantResumeAI',
    'SHIRO resume AI',
    'resume rewrite AI',
    'ATS pass rate optimizer',
    'resume experience matching',
    'professional resume AI tool',
    'career AI tools',
    'resume enhancement AI',
    'AI job application tool',
  ],
  alternates: {
    canonical: 'https://www.shirotechnologies.com/products/instantresumeai',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'InstantResumeAI – AI Resume Optimizer for Any Job Description',
    description: 'Paste your job description, describe your matching experience, and AI rewrites your resume to align — same format, better fit.',
    url: 'https://www.shirotechnologies.com/products/instantresumeai',
    siteName: 'SHIRO Technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InstantResumeAI – AI Resume Optimizer',
    description: 'Not a resume builder. AI rewrites your existing resume to match any job description — format preserved.',
    site: '@shiroapps',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'InstantResumeAI',
    url: 'https://instantresumeai.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-powered resume optimizer. Takes a job description and the user\'s matching experience, then rewrites and updates their existing resume to align with the target role — preserving format while improving ATS compatibility and keyword alignment.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
      description: 'First optimization free. No credit card required.',
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
        name: 'Is InstantResumeAI a resume builder?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. InstantResumeAI is a resume optimizer. You provide your job description and describe your relevant experience, and the AI rewrites and updates your existing resume to align with that specific role — keeping your original format intact.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the AI optimization process work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You paste the target job description, then describe your matching experience for that role. The AI analyzes the JD for required keywords, skills, and tone, then rewrites your resume content to align — using achievement-focused language that passes ATS filters and resonates with recruiters.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my resume format change?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. InstantResumeAI preserves your existing resume format and structure. Only the content is updated — the AI rewrites your experience descriptions to match the target job while keeping your layout, sections, and presentation exactly as they were.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a free option?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Your first resume optimization is free with no credit card required. Paid plans unlock unlimited optimizations and additional features.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my personal data safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. InstantResumeAI uses encrypted storage and never sells or shares your personal information with third parties.',
        },
      },
    ],
  },
];

const features = [
  {
    icon: '🎯',
    feature: 'Job Description Analysis',
    advantage: 'AI reads and extracts key requirements, skills, and keywords directly from the job description you paste',
    benefit: 'Your resume is rewritten to match exactly what the recruiter posted — no guesswork',
  },
  {
    icon: '✍️',
    feature: 'Experience-Matched Rewriting',
    advantage: 'You describe your relevant experience for the role, and AI rewrites it with results-focused, achievement-oriented language',
    benefit: 'Your actual experience is presented in the way hiring managers and ATS systems want to see it',
  },
  {
    icon: '📐',
    feature: 'Format Preservation',
    advantage: 'Your existing resume structure, layout, and sections stay exactly as they are',
    benefit: 'No reformatting, no rebuilding — just improved content delivered in your own format',
  },
  {
    icon: '✅',
    feature: 'ATS Keyword Alignment',
    advantage: 'Ensures the right keywords from the job description appear naturally in your updated resume',
    benefit: 'Pass automated screening systems that filter out 75% of applicants before a human sees them',
  },
  {
    icon: '🔐',
    feature: 'Secure Data Handling',
    advantage: 'Your resume and experience data is encrypted and never sold or shared with third parties',
    benefit: 'Optimize your resume with complete confidence in your privacy',
  },
];

const steps = [
  {
    number: '01',
    title: 'Paste the Job Description',
    description: 'Copy the full job posting and paste it in. The AI extracts the key requirements, skills, and keywords the employer is looking for.',
  },
  {
    number: '02',
    title: 'Describe Your Matching Experience',
    description: 'Tell the AI what relevant experience you have for this specific role. It uses your input to write authentic, accurate content — not generic filler.',
  },
  {
    number: '03',
    title: 'Get Your Optimized Resume',
    description: 'The AI rewrites your resume content to align with the job description, preserving your format. Download and apply.',
  },
];

const faqs = [
  {
    q: 'Is InstantResumeAI a resume builder?',
    a: 'No. InstantResumeAI is a resume optimizer. You provide your job description and describe your relevant experience, and the AI rewrites and updates your existing resume to align with that specific role — keeping your original format intact.',
  },
  {
    q: 'How does the AI optimization work?',
    a: 'You paste the target job description, then describe your matching experience for that role. The AI analyzes the JD for required keywords, skills, and tone, then rewrites your resume content to align — using achievement-focused language that passes ATS filters.',
  },
  {
    q: 'Will my resume format or layout change?',
    a: 'No. InstantResumeAI preserves your existing resume format and structure. Only the content is updated — the AI rewrites your experience descriptions to match the target job while keeping your layout, sections, and presentation exactly as they were.',
  },
  {
    q: 'Do I need to have a resume already?',
    a: 'You provide details about your experience for the target role, and the AI works from that input. If you already have a resume, the output matches that format. If you\'re starting fresh, the AI will produce a professionally structured document based on what you share.',
  },
  {
    q: 'How long does it take?',
    a: 'Most users complete an optimized resume in under 10 minutes. Paste the JD, describe your experience, and the AI does the rest.',
  },
  {
    q: 'Is there a free option?',
    a: 'Yes. Your first resume optimization is free with no credit card required. Paid plans unlock unlimited optimizations and additional features.',
  },
  {
    q: 'Is my personal data safe?',
    a: 'Yes. InstantResumeAI uses encrypted storage and never sells or shares your personal information with third parties.',
  },
];

export default function InstantResumeAIPage() {
  return (
    <>
      <Script
        id="instantresumeai-jsonld"
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
              Your Resume, Rewritten to Match<br />Any Job Description
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              InstantResumeAI is not a resume builder. It takes the job description and your matching experience, then rewrites your existing resume with AI to align precisely — preserving your format while maximizing your fit for that specific role.
            </p>
            <p className="text-sm text-gray-400 mb-10">First optimization free · No credit card required</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instantresumeai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white font-semibold rounded-lg text-lg transition-all shadow-md"
              >
                Optimize My Resume Free →
              </a>
              <a
                href="https://instantresumeai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg text-lg transition-colors"
              >
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* What it is / isn't */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-10">What Makes InstantResumeAI Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-900/30 border border-red-700 rounded-xl p-6">
                <div className="text-red-400 font-bold text-sm mb-3">❌ NOT THIS</div>
                <p className="text-gray-300 text-sm leading-relaxed">A blank resume builder that hands you an empty template to fill in from scratch — generic output, no job alignment, same resume sent to every application.</p>
              </div>
              <div className="bg-green-900/30 border border-green-600 rounded-xl p-6">
                <div className="text-green-400 font-bold text-sm mb-3">✅ THIS</div>
                <p className="text-gray-300 text-sm leading-relaxed">You paste the job description, describe your relevant experience, and AI rewrites your resume to match — your format preserved, your content optimized for that specific role.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Built for the Way Hiring Actually Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every feature closes the gap between your experience and what recruiters are screening for.</p>
          </div>
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <div className="font-bold text-gray-900 text-lg mb-1">{f.feature}</div>
                  <div className="text-gray-600 text-sm mb-2">{f.advantage}</div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-800 text-sm font-semibold rounded-full">
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
              <h2 className="text-3xl font-bold mb-3">Three Steps to a Job-Specific Resume</h2>
              <p className="text-gray-400">From job description to optimized resume — in minutes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-black text-green-400 mb-4">{step.number}</div>
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
        <section className="bg-gradient-to-r from-green-600 to-teal-500 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Resume for the Job?</h2>
            <p className="text-green-100 mb-8 text-lg">Paste the job description, describe your experience, and let AI do the rewriting.</p>
            <a
              href="https://instantresumeai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors text-lg"
            >
              Optimize My Resume Free →
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
