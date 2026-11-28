import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'SHIRO Academy: AI Training',
  description:
    'Browse live self-paced AI courses from SHIRO Technologies, see upcoming SHIJO GEO training, and register interest in live AI training with Srikanth. Courses are $29 each, or $159 for the Pro Bundle.',
  alternates: {
    canonical: 'https://www.shirotechnologies.com/academy',
  },
  openGraph: {
    title: 'SHIRO Academy: AI Training | SHIRO Technologies',
    description:
      'Live self-paced AI courses, upcoming SHIJO GEO training, and live AI sessions with Srikanth.',
    url: 'https://www.shirotechnologies.com/academy',
    siteName: 'SHIRO Technologies',
    type: 'website',
    locale: 'en_US',
  },
}

const COURSES = [
  {
    title: 'AI for Human Resources / Talent / People Ops via Prompts',
    href: 'https://www.aicoursehubpro.com/courses/ai-for-hr',
    category: 'HR',
    modules: 7,
    lessons: 28,
    price: 29,
    description:
      'Use prompt-based AI to improve recruitment, employee management, documentation, and everyday HR work while keeping human decision-making in the loop.',
  },
  {
    title: 'Prompt-Based Tools for Education & Learning',
    href: 'https://www.aicoursehubpro.com/courses/ai-for-education',
    category: 'Education',
    modules: 7,
    lessons: 29,
    price: 29,
    description:
      'A practical introduction to prompt-based AI for teaching, learning, and assessment, including how to use these tools responsibly.',
  },
  {
    title: 'Prompting for Automation and Workflow Efficiency',
    href: 'https://www.aicoursehubpro.com/courses/ai-for-workflow-automation',
    category: 'Operations',
    modules: 6,
    lessons: 26,
    price: 29,
    description:
      'Design prompts that help automate routine work and improve documentation, communication, and task coordination across business functions.',
  },
  {
    title: 'Prompt-Based Analytics and Reports for Business',
    href: 'https://www.aicoursehubpro.com/courses/ai-for-business-analytics',
    category: 'Business',
    modules: 6,
    lessons: 27,
    price: 29,
    description:
      'Apply prompt-based AI to business analytics: design analytical prompts, review data, and produce clear, useful reports.',
  },
  {
    title: 'Prompt Engineering for Non-Profits and Social Impact',
    href: 'https://www.aicoursehubpro.com/courses/ai-for-nonprofits',
    category: 'Non-profit',
    modules: 6,
    lessons: 26,
    price: 29,
    description:
      'Prompt engineering for non-profits and social-impact teams, covering communication, documentation, fundraising, and program planning.',
  },
  {
    title: 'Prompt-Based AI for Local Government and Public Services',
    href: 'https://www.aicoursehubpro.com/courses/ai-for-local-government',
    category: 'Public sector',
    modules: 6,
    lessons: 26,
    price: 29,
    description:
      'Practical prompt-based AI for local government and public-service work, with a focus on administration, communication, efficiency, and ethical use.',
  },
] as const

export default function AcademyPage() {
  const trainingMailto = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
    'Live AI training interest'
  )}`

  return (
    <div>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-wide uppercase text-gray-300 mb-4">
              SHIRO Academy
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Practical AI training, in one place
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              This is an interim catalog of AI training SHIRO already offers, while the full
              Academy plan is being finalized. Start with a self-paced course, watch for the
              SHIJO GEO course, or tell us you want a live session with Srikanth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#self-paced"
                className="bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
              >
                Browse live courses
              </a>
              <a
                href="#live-training"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-shiro-red px-8 py-4 rounded-md font-bold text-lg transition-all"
              >
                Live training interest
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="self-paced" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold text-shiro-red uppercase tracking-wide mb-3">
              SHIRO originals · Live now
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
              Self-paced AI courses
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Six live courses on AICourseHubPro. Each course is $29, or get all six in the
              $159 Pro Bundle. Hosted on the AICourseHubPro site — you will leave
              shirotechnologies.com to enroll.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.aicoursehubpro.com/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-md font-semibold transition-all"
              >
                View full catalog
              </a>
              <a
                href="https://www.aicoursehubpro.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-shiro-black text-shiro-black hover:bg-shiro-black hover:text-white px-6 py-3 rounded-md font-semibold transition-all"
              >
                $159 Pro Bundle
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {COURSES.map((course) => (
              <article
                key={course.href}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-shiro-red flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-xl text-shiro-black">{course.title}</h3>
                  <span className="shrink-0 bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 flex-1">{course.description}</p>
                <p className="text-sm text-gray-500 mb-6">
                  {course.modules} modules · {course.lessons} lessons · ${course.price}
                </p>
                <a
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-md font-semibold transition-all"
                >
                  View course
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="shijo-geo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md border-l-4 border-shiro-red">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-shiro-black">
                SHIJO GEO course
              </h2>
              <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                Coming soon
              </span>
            </div>
            <h3 className="font-bold text-xl text-shiro-black mb-4">
              Does AI Name Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              A SHIJO course on generative engine optimization — how AI search systems find
              and name your business. Free Module 1 is coming first. The course is not live
              for enrollment yet. The learning site currently shows a coming-soon page.
            </p>
            <a
              href="https://learn.shijo.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-shiro-black text-shiro-black hover:bg-shiro-black hover:text-white px-6 py-3 rounded-md font-semibold transition-all"
            >
              Visit learn.shijo.ai
            </a>
          </div>
        </div>
      </section>

      <section id="live-training" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
              Live AI training with Srikanth
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Srikanth will lead paid live AI training sessions. Dates, format, and pricing
              have not been published yet. If you want to be notified when a session is
              scheduled, or you are interested in a private or team workshop, get in touch.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
              >
                Contact us
              </Link>
              <a
                href={trainingMailto}
                className="border-2 border-shiro-black text-shiro-black hover:bg-shiro-black hover:text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
              >
                Email {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start learning?
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Enroll in a live $29 AI course today, or tell us you are interested in a live
            session.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.aicoursehubpro.com/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              Browse live courses
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-shiro-red px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              Talk to SHIRO
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
