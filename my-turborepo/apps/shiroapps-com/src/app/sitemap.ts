import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.shiroapps.com'
  const routes = [
    '',
    '/apps',
    '/services',
    '/case-studies',
    '/about',
    '/contact',
    '/instantresumeai',
    '/resumeblast',
    '/cloudsourcehrm',
    '/apps/career-accel-platform',
    '/apps/rebuix',
    '/apps/revalidate',
    '/apps/shijo-ai',
    '/apps/aicoursehubpro',
    '/apps/genaicourse',
    '/apps/mukha-ai',
    '/apps/sangra-ai',
    '/apps/qrfeedback-ai',
    '/apps/star-legal-ai',
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }))
}
