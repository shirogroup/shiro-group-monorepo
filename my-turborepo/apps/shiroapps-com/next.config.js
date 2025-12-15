/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['instantresumeai.com'],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
