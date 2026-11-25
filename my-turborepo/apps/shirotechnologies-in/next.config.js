/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['shirotechnologies.com'],
  },
  async redirects() {
    return [
      { source: '/pages/jobs.html', destination: '/careers', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/terms', destination: '/terms-and-conditions', permanent: true },
      { source: '/cookies', destination: '/cookie-policy', permanent: true },
      { source: '/atx', destination: '/ai-transformation', permanent: true },
      { source: '/capabilities', destination: '/services', permanent: true },
      { source: '/compliance', destination: '/security', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
}

module.exports = nextConfig
