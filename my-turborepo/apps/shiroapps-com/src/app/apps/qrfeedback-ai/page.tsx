import type { Metadata } from 'next'
import AppDetailTemplate from '@/components/AppDetailTemplate'

export const metadata: Metadata = {
  title: 'QRFeedback.ai - QR Code Feedback & AI Review Management',
  description: 'QRFeedback.ai enables businesses to capture customer feedback via QR codes and leverage AI-driven sentiment analysis to manage reviews.',
  keywords: 'QRFeedback.ai, QR code feedback, review management, AI sentiment analysis, restaurant tech',
}

export default function Page() {
  return (
    <AppDetailTemplate
      name="QRFeedback.ai"
      tagline="QR code feedback capture and AI-driven review management, no app download required."
      category="Business Tools"
      status="Live"
      description="QRFeedback.ai enables businesses to capture customer feedback via QR codes, intelligently route reviews, and leverage AI-driven sentiment analysis — all without requiring customers to download an app. It targets restaurant operators and the broader SMB market where online ratings directly affect revenue."
      highlights={[
        'QR code-based feedback capture, no app required',
        'AI-driven sentiment analysis and review routing',
        'Built for restaurants, retail, events, and services',
      ]}
      externalUrl="https://qrfeedback.ai"
    />
  )
}
