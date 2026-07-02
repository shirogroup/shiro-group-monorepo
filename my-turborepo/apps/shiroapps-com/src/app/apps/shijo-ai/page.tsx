import type { Metadata } from 'next'
import AppDetailTemplate from '@/components/AppDetailTemplate'

export const metadata: Metadata = {
  title: 'Shijo.ai - AI-Powered Marketing Tools Platform',
  description: 'Shijo.ai delivers AI-powered marketing tools across social media, SEO, advertising, email, and content for marketers, agencies, and creators.',
  keywords: 'Shijo.ai, AI marketing tools, AI SEO, AI content generation, marketing SaaS',
}

export default function Page() {
  return (
    <AppDetailTemplate
      name="Shijo.ai"
      tagline="AI-powered marketing tools for content, SEO, advertising, and social media."
      category="Marketing"
      status="In Development"
      description="Shijo.ai delivers AI-powered marketing tools to digital marketers, agencies, and content creators, generating marketing content across five categories — Social Media, SEO, Advertising, Email, and Content — through structured workflows powered by the Claude API."
      highlights={[
        'Tools spanning social media, SEO, advertising, email, and content',
        'Tiered access: free and paid plans with different generation limits',
        'Built on Next.js with real-time usage metering',
      ]}
      externalUrl="https://shijo.ai"
    />
  )
}
