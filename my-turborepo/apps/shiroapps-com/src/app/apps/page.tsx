'use client'

import { useState } from 'react'

type App = {
  name: string
  desc: string
  tag: string
  live: boolean
  href?: string
}

const APPS: App[] = [
  { name: 'InstantResumeAI', desc: 'AI-powered resume generation in seconds', tag: 'HR / Recruiting', live: true, href: '/instantresumeai' },
  { name: 'ResumeBlast', desc: 'Bulk resume distribution to recruiters', tag: 'HR / Recruiting', live: true, href: '/resumeblast' },
  { name: 'CloudSourceHRM', desc: 'Cloud-based human resource management', tag: 'HR / Recruiting', live: true, href: '/cloudsourcehrm' },
  { name: 'App 4', desc: 'Coming soon', tag: 'TBA', live: false },
  { name: 'App 5', desc: 'Coming soon', tag: 'TBA', live: false },
  { name: 'App 6', desc: 'Coming soon', tag: 'TBA', live: false },
]

const TABS = ['All Apps', 'HR / Recruiting', 'TBA']

export default function AppsPage() {
  const [activeTab, setActiveTab] = useState('All Apps')

  const filteredApps = activeTab === 'All Apps' ? APPS : APPS.filter((a) => a.tag === activeTab)

  return (
    <div className="bg-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-primary uppercase tracking-wide mb-3">Our Portfolio</div>
          <h1 className="text-4xl font-extrabold text-secondary tracking-tight mb-3">Apps built and shipped</h1>
          <p className="text-gray-600">Real products in production — not demos, not prototypes. More apps from across our companies are being added here.</p>
        </div>

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
                  app.live ? 'hover:shadow-md' : 'opacity-50'
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
            return app.href ? (
              <a key={app.name} href={app.href}>{card}</a>
            ) : (
              <div key={app.name}>{card}</div>
            )
          })}
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex items-center justify-center opacity-50">
            <span className="text-xs text-gray-400 text-center">More apps coming soon<br />from across our companies</span>
          </div>
        </div>
      </section>
    </div>
  )
}
