'use client'

import { useState } from 'react'

type App = {
  name: string
  desc: string
  tag: string
  live: boolean
  href: string
  external?: boolean
}

const APPS: App[] = [
  { name: 'InstantResumeAI', desc: 'AI-powered resume generation in seconds', tag: 'HR / Recruiting', live: true, href: '/instantresumeai' },
  { name: 'ResumeBlast', desc: 'Bulk resume distribution to recruiters', tag: 'HR / Recruiting', live: true, href: '/resumeblast' },
  { name: 'CloudSourceHRM', desc: 'Cloud-based human resource management', tag: 'HR / Recruiting', live: true, href: '/cloudsourcehrm' },
  { name: 'Career Accel Platform', desc: 'AI career tools and recruiter services for tech professionals', tag: 'HR / Recruiting', live: true, href: 'https://www.starworkforcesolutions.com', external: true },
  { name: 'Rebuix', desc: 'AI/ML job board with a relevance score on every listing', tag: 'HR / Recruiting', live: true, href: 'https://www.rebuix.com', external: true },
  { name: 'Revalidate.ai', desc: 'Email validation built for recruiting and staffing teams', tag: 'HR / Recruiting', live: true, href: 'https://revalidate.ai', external: true },
  { name: 'Shijo.ai', desc: 'AI-powered marketing tools for content, SEO, and social', tag: 'Marketing', live: true, href: 'https://shijo.ai', external: true },
  { name: 'AICourseHubPro', desc: 'AI skills courses with live roleplay training', tag: 'Learning', live: true, href: 'https://aicoursehubpro.com', external: true },
  { name: 'GenAICourse', desc: 'AI and tech education platform', tag: 'Learning', live: false, href: 'https://genaicourse.io', external: true },
  { name: 'Mukha.ai', desc: 'AI-generated professional headshots from a selfie', tag: 'Creative AI', live: true, href: 'https://www.mukha.ai', external: true },
  { name: 'Sangra.ai', desc: 'Shared infrastructure platform for launching AI SaaS apps', tag: 'Developer Tools', live: true, href: 'https://sangra.ai', external: true },
  { name: 'QRFeedback.ai', desc: 'QR code feedback capture and AI review management', tag: 'Business Tools', live: true, href: 'https://qrfeedback.ai', external: true },
  { name: 'StarLegalAI', desc: 'AI-powered contract review and clause-level analysis', tag: 'Legal', live: true, href: 'https://starlegalai.com', external: true },
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
                app.live ? 'hover:shadow-md' : 'opacity-60'
              }`}
            >
              <div className="flex justify-between items-start mb-2.5">
                <span className="text-sm font-bold text-secondary">{app.name}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    app.live ? 'bg-success/10 text-success' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {app.live ? 'Live' : 'Soon'}
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
