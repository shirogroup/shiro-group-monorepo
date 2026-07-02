import Link from 'next/link'
import AssessmentTool from '@/components/AssessmentTool'

const SERVICES = [
  {
    badge: 'One-time · $2,000–$5,000',
    badgeClass: 'bg-primary/10 border-primary/30 text-primary',
    title: 'AI Hiring Compliance Audit',
    desc: 'We review your AI hiring workflows, map them against EU AI Act Annex III and applicable US state requirements, identify gaps, and deliver a written report with a prioritised action list.',
    points: [
      'Written risk assessment report',
      'Gap analysis vs EU AI Act + US state laws',
      'Prioritised remediation roadmap',
      'Delivered in 2–3 weeks',
    ],
  },
  {
    badge: 'Ongoing · Custom pricing',
    badgeClass: 'bg-purple-100 border-purple-300 text-purple-700',
    title: 'Human-in-the-Loop Review Service',
    desc: "Our India-based team provides staffed human review for flagged AI decisions — covering the oversight layer your automated tools can't provide, without building an in-house team.",
    points: [
      'Trained human reviewers',
      'Escalation workflows designed for your system',
      'Audit trail documentation',
      'Scales with your volume',
    ],
  },
  {
    badge: 'Starter · Free',
    badgeClass: 'bg-success/10 border-success/30 text-success',
    title: 'Free 30-Min Gap-Check Call',
    desc: 'A focused call where we walk through your current AI hiring setup, identify the two or three most urgent compliance gaps, and tell you honestly what you need to fix first.',
    points: [
      'No pitch, no sales deck',
      'Specific to your tools and jurisdictions',
      'Walk away with a clear next step',
      'Runs 30 minutes, no prep needed',
    ],
  },
]

const APPS_TEASER = [
  { name: 'InstantResumeAI', desc: 'AI-powered resume generation in seconds' },
  { name: 'ResumeBlast', desc: 'Bulk resume distribution to recruiters' },
  { name: 'CloudSourceHRM', desc: 'Cloud-based human resource management' },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 text-center">
        <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wide mb-7">
          EU AI Act · Article 14 · August 2026
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-secondary leading-tight tracking-tight mb-6">
          Your AI hiring tools are now<br />
          <span className="text-primary">legally high-risk.</span><br />
          Is your oversight ready?
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto mb-10">
          The EU AI Act classifies AI systems used in recruitment, candidate screening, and hiring decisions as high-risk — requiring mandatory human oversight, documentation, and conformity assessments. Most small and mid-size recruiting operations aren&apos;t ready.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <a href="#assessment" className="bg-primary text-white px-7 py-3.5 rounded-lg font-bold hover:bg-primary-dark transition-colors">
            Take the Free Assessment →
          </a>
          <a href="#book" className="bg-white text-secondary border border-gray-300 px-7 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Book a Gap-Check Call
          </a>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 rounded-xl overflow-hidden mt-16">
          {[
            { n: '69%', label: 'of companies use AI in hiring — but only 18% are fully compliant' },
            { n: 'Aug 2026', label: 'EU AI Act Article 14 enforcement deadline for high-risk systems' },
            { n: '66%', label: 'of US adults would avoid employers using unaudited AI in hiring' },
          ].map((s) => (
            <div key={s.n} className="bg-gray-50 py-7 px-6 text-center">
              <div className="text-2xl font-extrabold text-primary mb-2">{s.n}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FREE ASSESSMENT */}
      <section id="assessment" className="bg-gray-50 border-y border-gray-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-bold text-primary uppercase tracking-wide mb-3">Free Self-Assessment Tool</div>
            <h2 className="text-3xl font-extrabold text-secondary tracking-tight mb-3">Is your AI hiring process compliant?</h2>
            <p className="text-gray-600">
              Answer 7 questions. Get an instant risk rating and a plain-language explanation of your gaps — no email required.
            </p>
          </div>
          <AssessmentTool />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <div className="text-xs font-bold text-primary uppercase tracking-wide mb-3">How We Help</div>
          <h2 className="text-3xl font-extrabold text-secondary tracking-tight">Three ways to work with us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-7">
              <div className={`inline-block border rounded-full px-3 py-1 text-xs font-bold mb-4 ${s.badgeClass}`}>
                {s.badge}
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="text-sm text-gray-600 flex gap-2.5 items-start">
                    <span className="text-primary flex-shrink-0">✓</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="bg-gray-50 border-y border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-secondary tracking-tight mb-4">
            We don&apos;t just consult on AI. We build and run it.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            ShiroApps has built and shipped AI/SaaS products, including three live HR and recruiting tools used in production. Our India-based operations team runs human-in-the-loop support for AI systems daily. We know where agents fail because we&apos;ve watched ours fail — and fixed them.
          </p>
        </div>
      </section>

      {/* APPS TEASER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-xs font-bold text-primary uppercase tracking-wide mb-3">Our Portfolio</div>
        <h2 className="text-3xl font-extrabold text-secondary tracking-tight mb-3">AI apps built and shipped</h2>
        <p className="text-gray-600 mb-10">Real products in production — not demos, not prototypes.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {APPS_TEASER.map((app) => (
            <div key={app.name} className="bg-white border border-gray-200 rounded-lg p-5 text-left">
              <div className="flex justify-between items-start mb-2.5">
                <span className="text-sm font-bold text-secondary">{app.name}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-success/10 text-success">Live</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>

        <Link href="/apps" className="inline-block bg-secondary text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-black transition-colors">
          View All Apps →
        </Link>
      </section>

      {/* BOOK CTA */}
      <section id="book" className="bg-gray-50 border-t border-gray-200 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight mb-4">
            Book your free<br />
            <span className="text-primary">30-minute gap-check call</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-9">
            We&apos;ll look at your specific AI hiring tools and tell you honestly where your compliance gaps are. No pitch. No sales deck. Just a plain-language answer to &quot;are we exposed?&quot;
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <a href="mailto:info@shiroapps.com?subject=Gap-Check Call Request" className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors">
              Book via Email →
            </a>
            <Link href="/apps" className="bg-white text-secondary border border-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View All Apps
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-5">Typically responds within 1 business day. India / UK / US time zones covered.</p>
        </div>
      </section>
    </div>
  )
}
