import type { Metadata } from 'next'
import AppDetailTemplate from '@/components/AppDetailTemplate'

export const metadata: Metadata = {
  title: 'AICourseHubPro - AI Skills Courses with Live Roleplay Training',
  description: 'AICourseHubPro is an AI-powered workplace learning platform helping non-technical professionals build AI skills through courses and live roleplay simulations.',
  keywords: 'AICourseHubPro, AI skills training, workplace learning, AI courses, roleplay simulation',
}

export default function Page() {
  return (
    <AppDetailTemplate
      name="AICourseHubPro"
      tagline="AI skills courses with live roleplay training for non-technical professionals."
      category="Learning"
      status="Live"
      description="AICourseHubPro is a B2C online learning marketplace purpose-built for AI skill adoption among non-technical professionals — HR, operations, marketing, government, and non-profit workers. The platform delivers structured, text-based courses augmented by live roleplay simulations, assessments, and verifiable completion certificates."
      highlights={[
        'Live roleplay simulations alongside structured course content',
        'MCQ assessments and verifiable completion certificates',
        'One-time pricing per course, differentiated from subscription competitors',
      ]}
      externalUrl="https://aicoursehubpro.com"
    />
  )
}
