import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.shirotechnologies.com'

/**
 * Pages that exist as `page.tsx` routes on this app.
 * Omits redirects (for example `/atx`) and links that have no route,
 * including `/academy`.
 */
const ROUTES = [
  '/',
  '/products',
  '/products/aicoursehubpro',
  '/products/chrm-nexus',
  '/products/cloudsourcehrm',
  '/products/genaicourse',
  '/products/instantresumeai',
  '/products/resumeblast',
  '/ai-transformation',
  '/services',
  '/industries',
  '/global-presence',
  '/insights',
  '/about',
  '/careers',
  '/investors',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/cookie-policy',
  '/gdpr-compliance',
  '/ai-compliance',
  '/security',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
  }))
}
