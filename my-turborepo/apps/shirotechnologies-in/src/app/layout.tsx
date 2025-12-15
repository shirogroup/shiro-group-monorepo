import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyCTA } from '@/components/layout/StickyCTA'
import { SITE_CONFIG } from '@/lib/constants'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SHIRO Technologies - Agentic AI Transformation & Global SaaS Portfolio',
    template: '%s | SHIRO Technologies',
  },
  description: 'The foundational services entity powering our global agentic AI SaaS portfolio. Strategic AI transformation, RPA/IPA, and global delivery since 2001.',
  keywords: [
    'AI transformation',
    'agentic AI',
    'AI agents',
    'RPA automation',
    'offshore development',
    'nearshore development',
    'AI SaaS',
    'multiagent systems',
  ],
  authors: [{ name: 'SHIRO Technologies' }],
  creator: 'SHIRO Technologies',
  publisher: 'SHIRO Technologies',
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: 'SHIRO Technologies - Agentic AI Transformation & Global SaaS Portfolio',
    description: 'Strategic AI transformation services funding high-growth agentic AI SaaS products',
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHIRO Technologies - Agentic AI Transformation',
    description: 'AI transformation services & SaaS products',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAnalyticsId}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${SITE_CONFIG.googleAnalyticsId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pb-20">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  )
}
