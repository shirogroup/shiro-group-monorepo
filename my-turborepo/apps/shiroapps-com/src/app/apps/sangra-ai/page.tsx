import type { Metadata } from 'next'
import AppDetailTemplate from '@/components/AppDetailTemplate'

export const metadata: Metadata = {
  title: 'Sangra.ai - Shared Infrastructure for AI SaaS Apps',
  description: 'Sangra.ai is a shared-infrastructure platform enabling developers to launch niche AI SaaS apps without rebuilding auth, billing, or AI routing from scratch.',
  keywords: 'Sangra.ai, AI app infrastructure, SaaS platform builder, developer tools',
}

export default function Page() {
  return (
    <AppDetailTemplate
      name="Sangra.ai"
      tagline="Shared infrastructure for launching niche AI SaaS apps, without rebuilding the basics."
      category="Developer Tools"
      status="Live"
      description="Sangra.ai is an AI App Operating System — a shared-infrastructure platform enabling developers to launch niche AI SaaS apps without rebuilding auth, billing, or AI routing from scratch. It's purpose-built for the consolidation of AI app development onto shared, multi-tenant operating layers."
      highlights={[
        'Shared auth, billing, and AI routing infrastructure',
        'Built for developers launching multiple niche AI apps',
        'Operational beta, live in production',
      ]}
      externalUrl="https://sangra.ai"
    />
  )
}
