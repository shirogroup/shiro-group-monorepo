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
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }))
}
