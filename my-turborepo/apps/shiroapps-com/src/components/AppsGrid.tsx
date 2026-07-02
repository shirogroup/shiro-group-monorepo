'use client'

import { useState } from 'react'

type Status = 'Live' | 'Launching' | 'In Development'

type App = {
  name: string
  desc: string
  tag: string
  status: Status
  href: string
  external?: boolean
}

const STATUS_STYLES: Record<Status, string> = {
  Live: 'bg-secondary text-white',
  Launching: 'bg-primary/10 text-primary',
  'In Development': 'bg-gray-100 text-gray-500',
}

const APPS: App[] = [
  { name: 'InstantResumeAI', desc: 'AI-powered resume generation in seconds', tag: 'HR / Recruiting', status: 'Live', href: '/instantresumeai' },
  { name: 'ResumeBlast', desc: 'Bulk resume distribution to recruiters', tag: 'HR / Recruiting', status: 'Live', href: '/resumeblast' },
  { name: 'CloudSourceHRM', desc: 'Cloud-based human resource management', tag: 'HR / Recruiting', status: 'Live', href: '/cloudsourcehrm' },
  { name: 'Career Accel Platform', desc: 'AI career tools and recruiter services for tech professionals', tag: 'HR / Recruiting', status: 'Live', href: '/apps/career-accel-platform' },
  { name: 'Rebuix', desc: 'AI/ML job board with a relevance score on every listing', tag: 'HR / Recruiting', status: 'Live', href: '/apps/rebuix' },
  { name: 'Revalidate.ai', desc: 'Email validation built for recruiting and staffing teams', tag: 'HR / Recruiting', status: 'Live', href: '/apps/revalidate' },
  { name: 'Shijo.ai', desc: 'AI-powered marketing tools for content, SEO, and social', tag: 'Marketing', status: 'In Development', href: '/apps/shijo-ai' },
  { name: 'AICourseHubPro', desc: 'AI skills courses with live roleplay training', tag: 'Learning', status: 'Live', href: '/apps/aicoursehubpro' },
  { name: 'GenAICourse', desc: 'AI and tech education platform', tag: 'Learning', status: 'Launching', href: '/apps/genaicourse' },
  { name: 'Mukha.ai', desc: 'AI-generated professional headshots from a selfie', tag: 'Creative AI', status: 'Live', href: '/apps/mukha-ai' },
  { name: 'Sangra.ai', desc: 'Shared infrastructure platform for launching AI SaaS apps', tag: 'Developer Tools', status: 'Live', href: '/apps/sangra-ai' },
  { name: 'QRFeedback.ai', desc: 'QR code feedback capture and AI review management', tag: 'Business Tools', status: 'Live', href: '/apps/qrfeedback-ai' },
  { name: 'StarLegalAI', desc: 'AI-powered contract review and clause-level analysis', tag: 'Legal', status: 'Live', href: '/apps/star-legal-ai' },
]

const TABS = ['All Apps', 'HR / Recruiting', 'Marketing', 'Learning', 'Creative AI', 'Developer Tools', 'Business Tools', 'Legal']

export default function AppsGrid() {
  const [activeTab, setActiveTab] = useState('All Apps')

  const filteredApps = activeTab === 'All Apps' ? APPS : APPS.filter((a) => a.tag === activeTab)

  return (
    <div>
      <div className="flex gap-2.5 justify-center flex-wrap mb-10">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-1.5 rounded-full border text-sm font-semibold transition-colors ${
              activeTab === t
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-gray-300 text-gray-600 hover:border-gray-400'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredApps.map((app) => {
          const card = (
            <div
              className={`bg-white border border-gray-200 rounded-lg p-6 h-full transition-shadow ${
                app.status === 'Live' ? 'hover:shadow-md' : 'opacity-70'
              }`}
            >
              <div className="flex justify-between items-start mb-2.5">
                <span className="text-sm font-bold text-secondary">{app.name}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${STATUS_STYLES[app.status]}`}>
                  {app.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">{app.desc}</p>
              <span className="text-[10px] font-semibold text-primary tracking-wide">{app.tag}</span>
            </div>
          )
          return app.external ? (
            <a key={app.name} href={app.href} target="_blank" rel="noopener noreferrer">
              {card}
            </a>
          ) : (
            <a key={app.name} href={app.href}>
              {card}
            </a>
          )
        })}
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex items-center justify-center opacity-50">
          <span className="text-xs text-gray-400 text-center">
            More apps coming soon
            <br />
            from across our companies
          </span>
        </div>
      </div>
    </div>
  )
}
