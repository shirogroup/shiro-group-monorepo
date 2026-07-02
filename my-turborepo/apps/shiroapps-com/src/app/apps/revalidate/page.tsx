import type { Metadata } from 'next'
import AppDetailTemplate from '@/components/AppDetailTemplate'

export const metadata: Metadata = {
  title: 'Revalidate.ai - Email Validation for Recruiting & Staffing Teams',
  description: 'Revalidate.ai is a purpose-built email validation utility for IT staffing and recruiting firms that depend on high-volume email outreach.',
  keywords: 'Revalidate.ai, email validation, recruiting tools, staffing SaaS, B2B email verification',
}

export default function Page() {
  return (
    <AppDetailTemplate
      name="Revalidate.ai"
      tagline="Email validation built specifically for IT staffing and recruiting firms."
      category="HR / Recruiting"
      status="Live"
      description="Revalidate is a purpose-built email validation utility targeting IT staffing and recruiting firms — a segment that depends on high-volume email outreach for job requirement distribution, resume sharing, and cold sourcing. It's designed as a no-frills, utility-first SaaS with no enterprise bloat."
      highlights={[
        'Single email validation: syntax, MX, SMTP, catch-all, role-based, disposable checks',
        'Built for the recruiting and staffing vertical specifically',
        'Free tier available, no subscription lock-in required',
      ]}
      externalUrl="https://revalidate.ai"
    />
  )
}
