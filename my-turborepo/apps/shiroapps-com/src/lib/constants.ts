// Site-wide constants for Navigation and Footer

export const SITE_CONFIG = {
  name: 'SHIRO Apps',
  domain: 'shiroapps.com',
  url: 'https://shiroapps.com',
  description: 'AI-Powered Career Tools from SHIRO Technologies',
  company: {
    name: 'SHIRO Technologies LLC',
    address: '5080 Spectrum Drive Suite 575E, Addison, TX 75001',
    phone: '(972) 734-5623',
    email: 'info@shirotechnologies.com',
  },
  analytics: {
    googleAnalyticsId: 'G-1LL63ZEXDY',
  },
}

export const NAVIGATION = {
  logo: 'SHIRO Apps',
  links: [
    { label: 'InstantResumeAI', href: '/instantresumeai' },
    { label: 'ResumeBlast', href: '/resumeblast' },
    { label: 'CloudSourceHRM', href: '/cloudsourcehrm' },
  ],
  cta: {
    label: 'Contact Us',
    href: 'https://shirotechnologies.com/contact',
  },
}

export const FOOTER = {
  description: 'Professional AI-powered tools for career advancement and HR management from SHIRO Technologies.',
  sections: [
    {
      title: 'Products',
      links: [
        { label: 'InstantResumeAI', href: '/instantresumeai' },
        { label: 'ResumeBlast', href: '/resumeblast' },
        { label: 'CloudSourceHRM', href: '/cloudsourcehrm' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About SHIRO', href: 'https://shirotechnologies.com/about' },
        { label: 'Contact', href: 'https://shirotechnologies.com/contact' },
        { label: 'Careers', href: 'https://shirotechnologies.com/careers' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Support', href: '/support' },
        { label: 'FAQs', href: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ],
  social: {
    linkedin: 'https://www.linkedin.com/company/shiro-technologies-inc',
  },
  copyright: `© ${new Date().getFullYear()} SHIRO Technologies LLC. All rights reserved.`,
}
