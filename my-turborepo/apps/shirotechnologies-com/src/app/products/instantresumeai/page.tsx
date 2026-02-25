import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InstantResumeAI – ATS-Optimized Resumes in Minutes',
  description: 'Transform your experience into an interview-winning resume with AI. ATS-optimized, job-specific, and ready to download in under 10 minutes.',
  openGraph: {
    title: 'InstantResumeAI – ATS-Optimized Resumes in Minutes',
    description: 'AI-powered resume builder that gets you past ATS filters and into interviews.',
    url: 'https://www.shirotechnologies.com/products/instantresumeai',
    siteName: 'SHIRO Technologies',
    type: 'website',
  },
};

const features = [
  {
    icon: '🤖',
    feature: 'AI Enhancement Engine',
    advantage: 'Rewrites your experience with results-focused language',
    benefit: 'Get past ATS filters that reject 75% of resumes before a human sees them',
  },
  {
    icon: '🎯',
    feature: 'Job Role Alignment',
    advantage: 'Matches your resume keywords to the target job description',
    benefit: 'Every application lands with content recruiters are scanning for',
  },
  {
    icon: '🧭',
    feature: 'Guided Workflow',
    advantage: 'Clean, intuitive step-by-step process handles complexity for you',
    benefit: 'Create a polished, professional resume in under 10 minutes',
  },
  {
    icon: '📥',
    feature: 'Professional Export',
    advantage: 'Download in PDF or Word format, ready to apply immediately',
    benefit: 'No formatting headaches — just your resume, looking great',
  },
  {
    icon: '🔐',
    feature: 'Secure Data Handling',
    advantage: 'Your personal data is encrypted and never sold to third parties',
    benefit: 'Build your resume with complete confidence in your privacy',
  },
];

const steps = [
  { number: '01', title: 'Enter Your Details', description: 'Add your work history, skills, and target role. Our guided form makes it fast and clear.' },
  { number: '02', title: 'AI Enhances Your Content', description: 'Our AI rewrites your experience with achievement-focused language matched to your target job.' },
  { number: '03', title: 'Download & Apply', description: 'Export your polished, ATS-ready resume and start applying immediately.' },
];

const faqs = [
  {
    q: 'What does ATS-optimized mean?',
    a: 'Applicant Tracking Systems (ATS) are software tools that companies use to screen resumes before a human ever reads them. ATS-optimized resumes include the right keywords, formatting, and structure to pass these automated filters.',
  },
  {
    q: 'How is InstantResumeAI different from a resume template?',
    a: 'Templates give you a blank form. InstantResumeAI actively rewrites your content — transforming basic job duties into quantified, results-focused achievements tailored to your target role.',
  },
  {
    q: 'Do I need any design skills?',
    a: 'None at all. The platform handles all formatting, design, and layout. You provide your experience; the AI handles everything else.',
  },
  {
    q: 'Is there a free option?',
    a: 'Yes. You can create your first resume at no cost. Paid plans unlock unlimited resumes, advanced templates, and additional customization options.',
  },
  {
    q: 'How long does it take?',
    a: 'Most users complete and download their resume in under 10 minutes. If your history is already written out, it can take as little as 3-5 minutes.',
  },
  {
    q: 'Is my personal data safe?',
    a: 'Yes. InstantResumeAI uses encrypted storage and never sells or shares your personal information with third parties.',
  },
];

export default function InstantResumeAIPage() {
  return (
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
            Transform Your Resume into an<br />Interview Magnet with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            InstantResumeAI rewrites your experience with results-focused language, optimizes for ATS systems, and delivers a professionally formatted resume in minutes — not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instantresumeai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg text-lg transition-all shadow-md"
            >
              Create Resume Free →
            </a>
            <a
              href="https://instantresumeai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg text-lg transition-colors"
            >
              See Example Resumes
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">Free to start · No credit card required</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-600 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-1">&lt;10 min</div>
            <div className="text-green-100">Average completion time</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">75%</div>
            <div className="text-green-100">Resumes rejected by ATS without optimization</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">Free</div>
            <div className="text-green-100">First resume, no card required</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Built to Get You Interviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Every feature targets the gap between your experience and landing an interview.</p>
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
            <h2 className="text-3xl font-bold mb-3">Three Steps to Interview-Ready</h2>
            <p className="text-gray-400">From blank page to polished resume in under 10 minutes.</p>
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
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Your Next Interview Starts With a Better Resume</h2>
          <p className="text-blue-100 mb-8 text-lg">Free to start. Ready in minutes. Built to get results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instantresumeai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Create Resume Free →
            </a>
            <a
              href="https://instantresumeai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Sign In
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
