import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights - AI Trends & Enterprise Transformation',
  description: 'Latest insights on agentic AI adoption, enterprise AI transformation, and automation trends from SHIRO Technologies.',
  keywords: [
    'AI trends 2026',
    'agentic AI adoption',
    'enterprise AI transformation',
    'AI implementation guide',
    'RPA trends',
    'multiagent AI systems',
  ],
}

export default function InsightsPage() {
  const insights = [
    {
      title: 'Gartner 2025: 40% of Enterprise Apps to Feature Agentic AI by 2026',
      date: 'December 2025',
      category: 'Market Trends',
      summary: 'Gartner predicts explosive growth in task-specific AI agents, rising from <5% in 2025 to 40% by end of 2026.',
      link: '#',
    },
    {
      title: 'Why Vertical AI SaaS Commands 8-12x Revenue Multiples',
      date: 'December 2025',
      category: 'Valuation',
      summary: 'Industry-specific AI platforms achieving premium valuations through defensible moats and high switching costs.',
      link: '#',
    },
    {
      title: 'RPA vs IPA: Understanding the Evolution of Process Automation',
      date: 'November 2025',
      category: 'Technology',
      summary: 'From rule-based RPA to intelligent process automation with AI-powered decision making and document processing.',
      link: '#',
    },
    {
      title: 'The Services-to-SaaS Transition: A Founder\'s Playbook',
      date: 'November 2025',
      category: 'Strategy',
      summary: 'How strategic services revenue funds SaaS innovation without dilution, with real metrics and timelines.',
      link: '#',
    },
    {
      title: 'Offshore Development in 2026: Beyond Cost Arbitrage',
      date: 'October 2025',
      category: 'Global Delivery',
      summary: 'Follow-the-sun development, specialized talent pools, and the evolving value proposition of offshore partnerships.',
      link: '#',
    },
    {
      title: 'Multiagent AI Systems: The Next Frontier in Enterprise Automation',
      date: 'October 2025',
      category: 'Technology',
      summary: 'Coordinating multiple specialized AI agents to handle complex, multi-step business processes autonomously.',
      link: '#',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights & Thought Leadership
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Latest trends in agentic AI, enterprise transformation, and global delivery
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-8">
            {insights.map((insight, idx) => (
              <article key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-shiro-red hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-shiro-red text-white text-xs font-bold px-3 py-1 rounded-full">
                        {insight.category}
                      </span>
                      <span className="text-sm text-gray-500">{insight.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-shiro-black mb-3">
                      {insight.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {insight.summary}
                    </p>
                    <a
                      href={insight.link}
                      className="text-shiro-red hover:text-shiro-red-dark font-semibold inline-flex items-center"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to receive our latest insights on AI trends, automation, and enterprise transformation
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-md font-semibold whitespace-nowrap transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-shiro-black mb-8">
              Popular Topics
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Agentic AI', 'RPA & IPA', 'Vertical SaaS', 'Global Delivery', 'AI Transformation', 'Multiagent Systems', 'Process Automation', 'Enterprise AI'].map((topic) => (
                <span
                  key={topic}
                  className="bg-gray-100 hover:bg-shiro-red hover:text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Discuss Your AI Strategy?
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's explore how these trends apply to your specific business challenges and opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
