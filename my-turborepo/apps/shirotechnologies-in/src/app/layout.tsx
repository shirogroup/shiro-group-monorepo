import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'SHIRO Technologies India - Global Delivery & Engineering Center',
  description: 'India-based offshore engineering, QA automation, and delivery capabilities for agentic AI SaaS platforms and enterprise initiatives worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
