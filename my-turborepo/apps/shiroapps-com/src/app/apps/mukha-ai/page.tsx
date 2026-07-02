import type { Metadata } from 'next'
import AppDetailTemplate from '@/components/AppDetailTemplate'

export const metadata: Metadata = {
  title: 'Mukha.ai - AI-Generated Professional Headshots',
  description: 'Mukha.ai transforms ordinary selfies into studio-quality professional headshots using generative AI, at a fraction of the cost of traditional photography.',
  keywords: 'Mukha.ai, AI headshot generator, professional headshots, AI photo generation',
}

export default function Page() {
  return (
    <AppDetailTemplate
      name="Mukha.ai"
      tagline="AI-generated professional headshots from a selfie, in minutes."
      category="Creative AI"
      status="Live"
      description="Mukha.ai transforms ordinary selfies into studio-quality professional headshots using generative AI. It serves job seekers, corporate professionals, and enterprises seeking a cost-effective, instant alternative to traditional photography sessions."
      highlights={[
        'Studio-quality headshots generated from a single selfie',
        'Instant turnaround versus scheduling a photo session',
        'Live, revenue-generating production application',
      ]}
      externalUrl="https://www.mukha.ai"
    />
  )
}
