import { SITE_CONFIG } from './constants'

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

export const GA_TRACKING_ID = SITE_CONFIG.googleAnalyticsId

const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) return false
  const preferences = JSON.parse(consent)
  return preferences.analytics === true
}

export const pageview = (url: string) => {
  if (!hasAnalyticsConsent()) return
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (!hasAnalyticsConsent()) return
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackCalculatorUse = (inputs: {
  teamSize: number
  duration: number
  region: string
  engagementType: string
}) => {
  event({
    action: 'calculate_savings',
    category: 'Calculator',
    label: `${inputs.region}_${inputs.engagementType}`,
    value: inputs.teamSize,
  })
}

export const trackCTAClick = (ctaName: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'Engagement',
    label: `${ctaName}_${location}`,
  })
}

export const trackProductClick = (productName: string, productStatus: string) => {
  event({
    action: 'product_click',
    category: 'Products',
    label: `${productName}_${productStatus}`,
  })
}
