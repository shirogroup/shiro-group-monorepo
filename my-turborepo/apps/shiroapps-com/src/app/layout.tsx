import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SHIRO Apps - AI-Powered Career Tools',
  description: 'Professional AI tools for resumes, job search, and HR management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
