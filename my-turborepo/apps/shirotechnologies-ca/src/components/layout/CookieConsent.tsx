'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

const CONSENT_KEY = 'cookie-consent'

function hasAcceptedAnalytics(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return false
    return JSON.parse(raw).analytics === true
  } catch {
    return false
  }
}

function loadGoogleAnalytics(measurementId: string) {
  if (typeof window === 'undefined' || !measurementId) return
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return

  window.dataLayer = window.dataLayer || []
  const gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag = gtag as Window['gtag']
  gtag('js', new Date())
  gtag('config', measurementId, {
    page_path: window.location.pathname,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const measurementId = SITE_CONFIG.googleAnalyticsId

  useEffect(() => {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) {
      setShowBanner(true)
      return
    }
    if (hasAcceptedAnalytics()) {
      loadGoogleAnalytics(measurementId)
    }
  }, [measurementId])

  const accept = () => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ necessary: true, analytics: true, marketing: false })
    )
    loadGoogleAnalytics(measurementId)
    setShowBanner(false)
  }

  const reject = () => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ necessary: true, analytics: false, marketing: false })
    )
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-shiro-red shadow-2xl z-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">We value your privacy</h3>
            <p className="text-sm text-gray-600">
              We use cookies to analyze site traffic with Google Analytics, only if you accept.{' '}
              <Link href="/cookie-policy" className="text-shiro-red hover:underline">
                Cookie Policy
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={reject}
              className="px-6 py-2 border-2 border-shiro-red text-shiro-red rounded-md hover:bg-red-50 transition-colors font-semibold"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={accept}
              className="px-6 py-2 bg-shiro-red text-white rounded-md hover:bg-shiro-red-dark transition-colors font-semibold"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
