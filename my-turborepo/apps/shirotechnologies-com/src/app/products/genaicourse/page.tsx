import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GenAICourse.io – AI Leadership Training for Technical Teams & Government | SHIRO Technologies',
  description: 'Curated generative AI curriculum for engineers, technical leads, and government decision-makers. Self-paced, assessment-driven, professionally certified. Launching March 2026.',
  openGraph: {
    title: 'GenAICourse.io – AI Leadership Training for Technical Teams',
    description: 'Generative AI training built for engineers, technical leads, and policy makers. Launching March 20, 2026.',
    url: 'https://www.shirotechnologies.com/products/genaicourse',
    siteName: 'SHIRO Technologies',
    type: 'website',
  },
};

const features = [
  {
    icon: '⚙️',
    feature: 'Technical + Policy Dual Tracks',
    advantage: 'Separate learning paths for engineers/developers and policy/government leaders',
    benefit: 'Both technical and non-technical learners get a curriculum that fits their role',
  },
  {
    icon: '📝',
    feature: 'Integrated Assessment Centers',
    advantage: 'Structured tests embedded throughout each module',
    benefit: 'Prove true mastery — not just completion — at every stage',
  },
  {
    icon: '🏆',
    feature: 'Professional Digital Credentials',
    advantage: 'Earn verifiable certificates recognized across government and enterprise',
    benefit: 'Showcase generative AI expertise to employers and procurement panels',
  },
  {
    icon: '🔒',
    feature: 'Secure Learning Platform',
    advantage: 'Private progress tracking, encrypted data, and no public sharing of individual progress',
    benefit: 'Government and enterprise learners can upskill with full data security',
  },
];

const steps = [
  { number: '01', title: 'Choose Your Track', description: 'Select the technical (engineers, developers) or leadership (government, policy, executives) learning path.' },
  { number: '02', title: 'Complete Self-Paced Modules', description: 'Work through curated AI/ML content at your own pace. Text-based learning optimized for focus and retention.' },
  { number: '03', title: 'Assess & Certify', description: 'Complete module assessments, earn your digital credential, and demonstrate verified generative AI expertise.' },
];

const faqs = [
  {
    q: 'Who is GenAICourse.io designed for?',
    a: 'GenAICourse.io serves two primary audiences: technical professionals (software engineers, ML engineers, data scientists) seeking structured generative AI education, and non-technical leaders (government officials, policy makers, executives) who need to understand and govern AI systems.',
  },
  {
    q: 'When does GenAICourse.io launch?',
    a: 'GenAICourse.io launches on March 20, 2026. Join the waitlist now to receive early access, launch-day pricing, and updates as we approach the beta launch.',
  },
  {
    q: 'What is the difference between this and AICourseHubPro?',
    a: 'AICourseHubPro focuses on practical AI tools for general business professionals. GenAICourse.io goes deeper — it covers generative AI, large language models, AI policy, governance, and advanced technical content for engineers and leadership.',
  },
  {
    q: 'Will there be government-specific content?',
    a: 'Yes. A dedicated government and public sector track covers AI policy frameworks, procurement considerations, ethics and risk, and how to evaluate AI vendors and systems — designed specifically for government roles.',
  },
  {
    q: 'What does the learning format look like?',
    a: 'All content is text-based, self-paced learning. Modules include curated readings, structured explanations, and integrated assessments. No scheduled live sessions are required.',
  },
  {
    q: 'How does GenAICourse.io relate to SHIRO Academy?',
    a: 'GenAICourse.io will eventually merge under the SHIRO Academy umbrella. All credentials and progress earned during the standalone phase will carry forward into the unified platform.',
  },
];

export default function GenAICoursePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Coming Soon Banner */}
      <div className="bg-teal-700 text-white text-center py-3 text-sm font-semibold tracking-wide">
        🚀 Launching March 20, 2026 — Join the Waitlist for Early Access
      </div>

      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex justify-center gap-2 mb-6">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span> Coming Soon · March 2026
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">🌍 Global</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Leadership Training for<br />Technical Teams &amp; Government
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            GenAICourse.io delivers curated generative AI curriculum for engineers, technical leads, and government decision-makers — with integrated assessments, professional certifications, and a secure learning environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://genaicourse.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg text-lg transition-all shadow-md"
            >
              Join Waitlist →
            </a>
            <a
              href="https://genaicourse.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg text-lg transition-colors"
            >
              Get Notified at Launch
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">Beta launch March 20, 2026 · Early access for waitlist members</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal-700 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-1">2 Tracks</div>
            <div className="text-teal-100">Technical and government/policy</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">Assessed</div>
            <div className="text-teal-100">Integrated assessments at every module</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">Mar 20</div>
            <div className="text-teal-100">Official beta launch date, 2026</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Built for Depth. Designed for Leaders.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Not another surface-level AI course. GenAICourse.io goes deep on generative AI for the roles that need to lead it.</p>
        </div>
        <div className="space-y-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl">{f.icon}</span>
              <div>
                <div className="font-bold text-gray-900 text-lg mb-1">{f.feature}</div>
                <div className="text-gray-600 text-sm mb-2">{f.advantage}</div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-800 text-sm font-semibold rounded-full">
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
            <h2 className="text-3xl font-bold mb-3">How GenAICourse Works</h2>
            <p className="text-gray-400">From enrollment to verified credential — at your pace.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-teal-400 mb-4">{step.number}</div>
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
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Be First When We Launch March 20, 2026</h2>
          <p className="text-teal-100 mb-8 text-lg">Waitlist members get early access, priority enrollment, and launch-day pricing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://genaicourse.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors"
            >
              Join the Waitlist →
            </a>
            <a
              href="https://genaicourse.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
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
