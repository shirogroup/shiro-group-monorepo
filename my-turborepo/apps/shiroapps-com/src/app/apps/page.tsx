import type { Metadata } from 'next'
import AppsGrid from '@/components/AppsGrid'

export const metadata: Metadata = {
  title: 'Our Apps - AI Products Built and Shipped by ShiroApps',
  description: 'Explore AI-powered apps built by ShiroApps and our sister companies, spanning HR & recruiting, marketing, learning, legal, and developer tools.',
  keywords: 'AI apps portfolio, AI SaaS products, InstantResumeAI, ResumeBlast, CloudSourceHRM, Shijo.ai, Mukha.ai, Rebuix, StarLegalAI',
}

export default function AppsPage() {
  return (
    <div className="bg-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-primary uppercase tracking-wide mb-3">Our Portfolio</div>
          <h1 className="text-4xl font-extrabold text-secondary tracking-tight mb-3">Apps built and shipped</h1>
          <p className="text-gray-600">Real products in production — not demos, not prototypes. More apps from across our companies are being added here.</p>
        </div>

        <AppsGrid />
      </section>
    </div>
  )
}
