import type { Metadata } from 'next'
import AppDetailTemplate from '@/components/AppDetailTemplate'

export const metadata: Metadata = {
  title: 'Career Accel Platform - AI Career Tools & Recruiter Services',
  description: 'AI-powered career tools, managed recruiter services, and real-time job board intelligence for consulting and contract tech professionals.',
  keywords: 'career accel platform, AI career tools, recruiter services, job board intelligence, STAR Workforce Solutions',
}

export default function Page() {
  return (
    <AppDetailTemplate
      name="Career Accel Platform"
      tagline="AI career tools, managed recruiter services, and job board intelligence — under one platform."
      category="HR / Recruiting"
      status="Live"
      description="Career Accel Platform unifies AI-powered career tools, managed recruiter services, and real-time job board intelligence under the STAR Workforce Solutions brand. It's built for consulting and contract professionals in Software, AI/ML, Cloud, and Data Engineering across the US and Canada."
      highlights={[
        'AI-powered career tools for consulting and contract professionals',
        'Managed recruiter services layered on top of the platform',
        'Real-time job board intelligence with live feeds and market analytics',
      ]}
      externalUrl="https://www.starworkforcesolutions.com"
    />
  )
}
