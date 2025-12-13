'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true }
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    updateConsent(allAccepted)
    setShowBanner(false)
  }

  const rejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false }
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary))
    updateConsent(onlyNecessary)
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    updateConsent(preferences)
    setShowPreferences(false)
    setShowBanner(false)
  }

  const updateConsent = (prefs: typeof preferences) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.marketing ? 'granted' : 'denied',
      })
    }
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-shiro-red shadow-2xl z-50 animate-slide-up">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">We value your privacy</h3>
              <p className="text-sm text-gray-600">
                We use cookies to enhance your browsing experience and analyze our traffic.{' '}
                <Link href="/cookie-policy" className="text-shiro-red hover:underline">
                  Learn more
                </Link>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-6 py-2 border-2 border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-semibold"
              >
                Preferences
              </button>
              <button
                onClick={rejectAll}
                className="px-6 py-2 border-2 border-shiro-red text-shiro-red rounded-md hover:bg-red-50 transition-colors font-semibold"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-shiro-red text-white rounded-md hover:bg-shiro-red-dark transition-colors font-semibold"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Cookie Preferences</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-semibold">Necessary Cookies</h3>
                    <p className="text-sm text-gray-600">Required for the website to function</p>
                  </div>
                  <input type="checkbox" checked disabled className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-semibold">Analytics Cookies</h3>
                    <p className="text-sm text-gray-600">Help us improve our website</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-5 h-5"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-semibold">Marketing Cookies</h3>
                    <p className="text-sm text-gray-600">Used to deliver relevant ads</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="w-5 h-5"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="flex-1 px-6 py-2 border-2 border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={savePreferences}
                  className="flex-1 px-6 py-2 bg-shiro-red text-white rounded-md hover:bg-shiro-red-dark transition-colors font-semibold"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
