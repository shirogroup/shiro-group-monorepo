import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.shirotechnologies.com'

/** Named crawlers that should be allowed explicitly, in addition to `*`. */
const EXPLICITLY_ALLOWED_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Google-Extended',
  'Bingbot',
  'Applebot-Extended',
] as const

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      ...EXPLICITLY_ALLOWED_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
