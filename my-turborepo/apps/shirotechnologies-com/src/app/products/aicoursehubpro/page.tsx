import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AICourseHubPro – Master AI Without Coding | SHIRO Technologies',
  description: 'Structured AI courses for business professionals. Self-paced, practical, and certification-verified. Use AI in your job — starting tomorrow.',
  openGraph: {
    title: 'AICourseHubPro – Master AI Without Coding',
    description: 'Practical AI education for business professionals. Self-paced courses with verified certifications.',
    url: 'https://www.shirotechnologies.com/products/aicoursehubpro',
    siteName: 'SHIRO Technologies',
    type: 'website',
  },
};

const features = [
  {
    icon: '🏭',
    feature: 'Practical AI Learning',
    advantage: 'Courses built around real-world AI applications in business contexts',
    benefit: 'Leave each session with a skill you can use at work the very next day',
  },
  {
    icon: '⏰',
    feature: 'Self-Paced Learning',
    advantage: 'Access all course materials anytime — no scheduled live sessions required',
    benefit: 'Fit professional development into your schedule, not the other way around',
  },
  {
    icon: '🏅',
    feature: 'Verified Certifications',
    advantage: 'Earn digital credentials recognized across industries',
    benefit: 'Prove your AI expertise on LinkedIn and in job applications',
  },
  {
    icon: '🤖',
    feature: 'Built-In AI Learning Assistant',
    advantage: 'AI tutor available throughout every course to answer questions',
    benefit: 'Never get stuck on material — expert guidance is always one question away',
  },
  {
    icon: '📊',
    feature: 'Progress Tracking',
    advantage: 'Visual dashboards track your learning journey across all courses',
    benefit: 'Stay motivated with clear progress indicators and completion milestones',
  },
];

const steps = [
  { number: '01', title: 'Choose Your Track', description: 'Browse courses by role, industry, or skill level. From AI fundamentals to advanced automation strategy.' },
  { number: '02', title: 'Learn at Your Own Pace', description: 'Work through structured modules with video, text, and interactive exercises — on your schedule.' },
  { number: '03', title: 'Earn & Share Your Credential', description: 'Pass the module assessments, earn your certificate, and share it directly to your LinkedIn profile.' },
];

const faqs = [
  {
    q: 'Do I need a technical background?',
    a: 'No. AICourseHubPro is specifically designed for business professionals without coding experience. The curriculum focuses on understanding and applying AI tools — not building them.',
  },
  {
    q: 'What kinds of AI skills will I learn?',
    a: 'Courses cover topics like AI-powered productivity tools, prompt engineering for business tasks, understanding AI outputs, using AI for data analysis, and integrating AI into existing workflows.',
  },
  {
    q: 'Are the certifications recognized by employers?',
    a: 'The certifications are verifiable digital credentials that can be shared on LinkedIn and in resumes. As AI literacy becomes a baseline expectation, these credentials demonstrate structured, verified learning.',
  },
  {
    q: 'How long are the courses?',
    a: 'Course length varies. Most foundation courses take 3-6 hours to complete. Specialized tracks can take 8-12 hours. All are self-paced, so you can spread learning over days or weeks.',
  },
  {
    q: 'What is the AI learning assistant?',
    a: 'Every course includes an embedded AI assistant that can answer questions about the material, clarify concepts, and provide additional examples — available 24/7 within the platform.',
  },
  {
    q: 'What is the relationship to SHIRO Academy?',
    a: 'AICourseHubPro will eventually merge under the SHIRO Academy umbrella as part of a unified AI education platform. All current credentials and progress will carry forward.',
  },
];

export default function AICourseHubProPage() {
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
            Master AI Skills for Business<br />— No Coding Required
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            AICourseHubPro delivers structured, self-paced AI courses for business professionals. Learn practical AI skills, earn verified certifications, and get support from a built-in AI tutor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://aicoursehubpro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg text-lg transition-all shadow-md"
            >
              Explore Courses →
            </a>
            <a
              href="https://aicoursehubpro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg text-lg transition-colors"
            >
              Start Learning Free
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-purple-700 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-1">No-code</div>
            <div className="text-purple-200">AI skills for non-technical professionals</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">Verified</div>
            <div className="text-purple-200">Digital credentials for LinkedIn & resumes</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">24/7</div>
            <div className="text-purple-200">Built-in AI learning assistant</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Designed for Professionals, Not Programmers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Every course is built around what business teams actually need from AI — not theoretical computer science.</p>
        </div>
        <div className="space-y-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl">{f.icon}</span>
              <div>
                <div className="font-bold text-gray-900 text-lg mb-1">{f.feature}</div>
                <div className="text-gray-600 text-sm mb-2">{f.advantage}</div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-800 text-sm font-semibold rounded-full">
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
            <h2 className="text-3xl font-bold mb-3">Your Learning Journey</h2>
            <p className="text-gray-400">From first module to verified certification.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-purple-400 mb-4">{step.number}</div>
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
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start Building AI Skills That Pay Off at Work</h2>
          <p className="text-purple-100 mb-8 text-lg">Self-paced. Certified. Practical from day one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://aicoursehubpro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-50 transition-colors"
            >
              Explore Courses →
            </a>
            <a
              href="https://aicoursehubpro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Certifications
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
