import type { Metadata } from 'next'
import AppDetailTemplate from '@/components/AppDetailTemplate'

export const metadata: Metadata = {
  title: 'GenAICourse - AI and Tech Education Platform',
  description: 'GenAICourse is a Learning Management System built for AI and technology education, covering the full student lifecycle from enrollment to certification.',
  keywords: 'GenAICourse, AI education platform, tech education LMS, online learning',
}

export default function Page() {
  return (
    <AppDetailTemplate
      name="GenAICourse"
      tagline="A Learning Management System built for AI and technology education."
      category="Learning"
      status="Launching"
      description="GenAICourse is a Learning Management System covering the full student lifecycle — enroll, learn, assess, certify, pay — with an API-first architecture. The platform targets B2C learners with nascent B2B potential."
      highlights={[
        'Full student lifecycle: enrollment through certification',
        'API-first architecture with modern CI/CD',
        'Currently in active development ahead of launch',
      ]}
      externalUrl="https://genaicourse.io"
    />
  )
}
