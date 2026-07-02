import type { Metadata } from 'next'
import AppDetailTemplate from '@/components/AppDetailTemplate'

export const metadata: Metadata = {
  title: 'Rebuix - AI/ML Job Board with a Relevance Score',
  description: 'Rebuix is a job board built exclusively for genuine AI, ML, and GenAI professionals, enforcing a proprietary AI Relevance Score on every listing.',
  keywords: 'Rebuix, AI job board, ML jobs, GenAI careers, AI relevance score',
}

export default function Page() {
  return (
    <AppDetailTemplate
      name="Rebuix"
      tagline="The only job board built exclusively for genuine AI, ML, and GenAI professionals."
      category="HR / Recruiting"
      status="Live"
      description="Rebuix enforces a proprietary AI Relevance Score on every listing, filtering out AI-washed job posts so hiring managers and candidates can tell genuine AI/ML roles apart from generic listings dressed up with AI buzzwords."
      highlights={[
        'AI Relevance Score applied to every job listing',
        'Built specifically for AI, ML, and GenAI roles',
        'Live and generating revenue',
      ]}
      externalUrl="https://www.rebuix.com"
    />
  )
}
