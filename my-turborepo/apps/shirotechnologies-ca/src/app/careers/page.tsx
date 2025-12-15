import Link from 'next/link';

export const metadata = {
  title: 'Careers | SHIRO Technologies - Join Our AI-First Team',
  description: 'Join SHIRO Technologies global team building the next generation of agentic AI SaaS platforms. Explore openings across USA, Canada, and India.',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build the Future of Agentic AI
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our global team of innovators creating AI-native SaaS platforms that 
              transform industries. Work with cutting-edge technology at the intersection 
              of artificial intelligence, automation, and vertical software.
            </p>
            <Link 
              href="#openings"
              className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Why SHIRO */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shiro-black mb-4">Why Join SHIRO Technologies?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're not just building software—we're pioneering the future of agentic AI 
              and creating platforms that empower millions of users worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-shiro-red transition-colors">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-First Culture</h3>
              <p className="text-gray-600 text-sm">
                Work with the latest AI technologies: GPT-4, Claude, LangChain, multiagent systems. 
                We're building agentic architectures, not simple chatbot wrappers.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-shiro-red transition-colors">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Team</h3>
              <p className="text-gray-600 text-sm">
                Collaborate across three continents with offices in Texas, Canada, and India. 
                Remote-friendly culture with opportunities for international experience.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-shiro-red transition-colors">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Impact</h3>
              <p className="text-gray-600 text-sm">
                Build products from 0 to 1. See your work used by thousands of users within 
                months. Small teams mean everyone's contribution matters.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-shiro-red transition-colors">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
              <p className="text-gray-600 text-sm">
                Access to SHIRO Academy courses, conference attendance budget, and dedicated 
                learning time. Stay ahead of the curve in the fastest-moving industry.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-shiro-red transition-colors">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Compensation</h3>
              <p className="text-gray-600 text-sm">
                Market-rate salaries, performance bonuses, and equity opportunities. We invest 
                in people who invest in our mission.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-shiro-red transition-colors">
              <div className="w-12 h-12 bg-shiro-red/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-shiro-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Work-Life Balance</h3>
              <p className="text-gray-600 text-sm">
                Flexible hours, remote options, generous PTO, and a culture that values 
                sustainable high performance over burnout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-shiro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-8">Benefits & Perks</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="text-shiro-red font-bold mb-2">Health & Wellness</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Medical, dental, vision insurance</li>
                <li>• Mental health support</li>
                <li>• Fitness stipend</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-shiro-red font-bold mb-2">Time Off</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Flexible PTO policy</li>
                <li>• Paid holidays</li>
                <li>• Parental leave</li>
                <li>• Sabbatical options</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-shiro-red font-bold mb-2">Professional Growth</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Conference budget</li>
                <li>• SHIRO Academy access</li>
                <li>• Certification support</li>
                <li>• Mentorship programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="text-shiro-red font-bold mb-2">Work Environment</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Latest tech & tools</li>
                <li>• Remote-friendly</li>
                <li>• Modern offices</li>
                <li>• Team events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shiro-black mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're actively hiring across engineering, product, sales, and operations. 
              Find your next opportunity below.
            </p>
          </div>

          {/* Job Board Link */}
          <div className="bg-white border-2 border-shiro-red rounded-lg p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <svg className="w-16 h-16 text-shiro-red mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Browse All Open Positions</h3>
              <p className="text-gray-600 mb-8">
                View detailed job descriptions, requirements, and apply directly through our 
                interactive job board. All positions include full benefits and competitive compensation.
              </p>
              
              <a 
                href="/pages/jobs.html"
                className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Job Board →
              </a>
              
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-shiro-black">12+</div>
                  <div className="text-sm text-gray-600">Open Roles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-shiro-black">3</div>
                  <div className="text-sm text-gray-600">Locations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-shiro-black">Remote</div>
                  <div className="text-sm text-gray-600">Options Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Roles Preview */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Openings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-shiro-red transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Senior Full Stack Engineer</h4>
                    <div className="text-sm text-gray-600 mt-1">Engineering • Remote • Senior</div>
                  </div>
                  <span className="bg-shiro-red/10 text-shiro-red text-xs px-3 py-1 rounded-full font-semibold">
                    Hot
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Build agentic AI platforms using Next.js, TypeScript, and LangChain. Lead 
                  architecture decisions for our SaaS products.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-900">$140K-$180K</div>
                  <a href="/pages/jobs.html" className="text-shiro-red hover:text-shiro-red-dark font-semibold text-sm">
                    View Details →
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-shiro-red transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">AI Transformation Architect</h4>
                    <div className="text-sm text-gray-600 mt-1">Product • Addison, TX • Lead</div>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                    New
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Design and implement enterprise AI transformation strategies. Work directly 
                  with Fortune 500 clients.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-900">$160K-$200K</div>
                  <a href="/pages/jobs.html" className="text-shiro-red hover:text-shiro-red-dark font-semibold text-sm">
                    View Details →
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-shiro-red transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">QA Automation Tester</h4>
                    <div className="text-sm text-gray-600 mt-1">QA • Mysore, India • Mid-Senior</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Develop AI-powered testing frameworks. Work with cutting-edge automation 
                  tools and CI/CD pipelines.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-900">Competitive</div>
                  <a href="/pages/jobs.html" className="text-shiro-red hover:text-shiro-red-dark font-semibold text-sm">
                    View Details →
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-shiro-red transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Product Manager - AI SaaS</h4>
                    <div className="text-sm text-gray-600 mt-1">Product • Remote • Senior</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Own product strategy for one of our vertical SaaS platforms. Define roadmap 
                  and work with AI/ML teams.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-900">$130K-$170K</div>
                  <a href="/pages/jobs.html" className="text-shiro-red hover:text-shiro-red-dark font-semibold text-sm">
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-16 bg-shiro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600 text-sm">
                We embrace cutting-edge technology and encourage experimentation. Every team 
                member has the autonomy to propose and test new ideas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Obsession</h3>
              <p className="text-gray-600 text-sm">
                Our users' success is our success. We build with empathy, iterate based on 
                feedback, and measure impact through customer outcomes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Radical Transparency</h3>
              <p className="text-gray-600 text-sm">
                Open communication, shared metrics, and honest feedback. Everyone has visibility 
                into company goals, challenges, and progress.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Excellence</h3>
              <p className="text-gray-600 text-sm">
                We build for the long term—sustainable pace, sustainable growth, sustainable 
                impact. Excellence doesn't require burnout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-4 text-center">Application Process</h2>
          <p className="text-gray-600 mb-12 text-center">
            Our hiring process is designed to be transparent, efficient, and respectful of your time.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-shiro-red text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Apply Online</h3>
                <p className="text-sm text-gray-600">
                  Submit your application through our job board. Include your resume, cover letter 
                  (optional but appreciated), and links to portfolio/GitHub if applicable.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-shiro-red text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Initial Review</h3>
                <p className="text-sm text-gray-600">
                  Our team reviews applications within 3-5 business days. If there's a potential 
                  match, we'll reach out to schedule a brief phone screen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-shiro-red text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Technical/Skills Assessment</h3>
                <p className="text-sm text-gray-600">
                  Depending on the role, this may be a coding challenge, case study, or portfolio 
                  review. We respect your time—no all-day assignments.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-shiro-red text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Team Interviews</h3>
                <p className="text-sm text-gray-600">
                  Meet with your potential manager and team members. These are conversational—we 
                  want to understand how you think and work, and you should learn about us too.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-shiro-red text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Offer & Onboarding</h3>
                <p className="text-sm text-gray-600">
                  If it's a mutual fit, we'll extend an offer within 48 hours of final interviews. 
                  Onboarding begins immediately with a structured 30-day plan.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div className="font-semibold text-blue-900 mb-1">Questions About the Process?</div>
                <div className="text-sm text-blue-800">
                  Email us at <a href="mailto:careers@shirotechnologies.com" className="underline hover:text-blue-900">careers@shirotechnologies.com</a>. 
                  We're happy to discuss accommodations, timeline, or any other concerns.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-cta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join our team of innovators creating the next generation of agentic AI platforms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/pages/jobs.html"
              className="bg-white text-shiro-red hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Open Positions
            </a>
            <a 
              href="mailto:careers@shirotechnologies.com"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20"
            >
              Contact Recruiting Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
