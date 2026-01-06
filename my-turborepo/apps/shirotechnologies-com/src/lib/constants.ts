// ============================================
// SITE CONFIGURATION
// ============================================

export const SITE_CONFIG = {
  name: 'SHIRO Technologies LLC',
  description: 'Agentic AI Transformation & Global Delivery - Since 2001',
  url: 'https://shirotechnologies.com',
  googleAnalyticsId: 'G-1LL63ZEXDY',
  
  contact: {
    email: 'Info@shirotechnologies.com',
    productsServicesPhone: '(800) 971-8013',
    mainPhone: '(972) 734-5623',
    supportEmail: 'Support@shirotechnologies.com',
    salesEmail: 'sales@shirotechnologies.com',
  },
  
  address: {
    physical: {
      street: '5080 Spectrum Drive Suite 575E',
      city: 'Addison',
      state: 'TX',
      zip: '75001',
    },
    mailing: {
      street: '4900 Airport Parkway, PO Box 989',
      city: 'Addison',
      state: 'TX',
      zip: '75001',
    },
    india: {
      company: 'SHIRO TECHNOLOGIES Pvt Ltd',
      street: '442, 6th Main Road, 2nd Floor',
      area: 'Vijayanagar 1st Stage',
      city: 'Mysuru',
      state: 'Karnataka',
      zip: '570017',
      country: 'India',
      phone: '(+91) 81233 71777',
      since: '2008',
    },
  },
  
  links: {
    linkedin: 'https://bit.ly/shirotechnologies',
    linkedinFull: 'https://www.linkedin.com/company/shiro-technologies-inc',
    twitter: 'https://twitter.com/shirotech',
  },
  
  founded: '2001',
}

// ============================================
// NAVIGATION
// ============================================

export const NAV_ITEMS = [
  { label: 'Products', href: '/products' },
  { label: 'AI Transformation', href: '/ai-transformation' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Global Presence', href: '/global-presence' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// ============================================
// TECHNOLOGY PARTNERS
// ============================================

export const TECH_PARTNERS = [
  'Next.js',
  'Supabase',
  'Vercel',
  'Stripe',
  'Google Cloud',
  'GCP',
  'AWS',
  'Azure',
  'OpenAI',
  'Anthropic',
  'LangChain',
  'Make.com',
  'Brevo',
  'Carrd',
  'Railway',
  'Netlify',
  'Bolt.new',
]

// ============================================
// PRODUCTS
// ============================================

export const PRODUCTS = {
  live: [
    {
      name: 'InstantResumeAI',
      url: 'https://instantresumeai.com',
      description: 'AI-powered resume generation and ATS optimization',
      category: 'Career AI',
    },
    {
      name: 'ResumeBlast.ai',
      url: 'https://resumeblast.ai',
      description: 'Automated job application with AI cover letters',
      category: 'Career AI',
    },
    {
      name: 'CloudSourceHRM',
      url: 'https://cloudsourcehrm.com',
      description: 'AI-powered HR management platform',
      category: 'HR Tech',
    },
  ],
  inDevelopment: [
    {
      name: 'SHIRO Cloud',
      description: 'AI cloud architecture & uptime monitoring',
      category: 'DevOps',
    },
    {
      name: 'SHIRO Title',
      description: 'Agentic AI for real estate & title automation',
      category: 'PropTech',
    },
    {
      name: 'SHIJO.ai',
      description: 'AI-powered digital marketing automation',
      category: 'MarTech',
    },
    {
      name: 'SHIRO Academy',
      description: 'Adaptive AI learning platform',
      category: 'EdTech',
    },
  ],
}

// ============================================
// SERVICES
// ============================================

export const SERVICES_PREVIEW = [
  {
    title: 'AI Transformation',
    description: 'Strategic AI roadmaps and agentic system implementation',
    icon: '🤖',
    href: '/ai-transformation',
  },
  {
    title: 'RPA & IPA',
    description: 'Robotic process automation and intelligent document processing',
    icon: '⚙️',
    href: '/services',
  },
  {
    title: 'Global Delivery',
    description: 'Offshore and nearshore development with 50-70% cost savings',
    icon: '🌍',
    href: '/global-presence',
  },
]

export const SERVICE_FEATURES = {
  rpaIpa: [
    'Robotic Process Automation',
    'Intelligent Document Processing',
    'Workflow Orchestration',
    'Process Mining & Discovery',
  ],
  aiTransformation: [
    'AI Readiness Assessment',
    'Custom AI Agent Development',
    'Multiagent Orchestration',
    'Agentic AI Implementation',
  ],
  globalDelivery: [
    'Offshore Development (India)',
    'Nearshore Teams (Canada)',
    'Follow-the-Sun Model',
    '50-70% Cost Savings',
  ],
}

// ============================================
// STATS
// ============================================

export const STATS = [
  { label: 'Years in Business', value: '24+' },
  { label: 'Global Regions', value: '3' },
  { label: 'SaaS Products', value: '7' },
  { label: 'Cost Savings', value: '50-70%' },
]

// ============================================
// INDUSTRIES
// ============================================

export const INDUSTRIES = [
  {
    name: 'Healthcare',
    description: 'HIPAA-compliant AI solutions for patient care and operations',
    icon: '🏥',
  },
  {
    name: 'Financial Services',
    description: 'AI-powered automation for banking, insurance, and fintech',
    icon: '💰',
  },
  {
    name: 'Real Estate',
    description: 'Agentic AI for property management and title processing',
    icon: '🏢',
  },
  {
    name: 'Technology',
    description: 'AI agents for SaaS platforms and cloud infrastructure',
    icon: '💻',
  },
  {
    name: 'Professional Services',
    description: 'Intelligent automation for consulting and legal firms',
    icon: '📊',
  },
  {
    name: 'Retail & E-commerce',
    description: 'AI-driven customer experience and supply chain optimization',
    icon: '🛒',
  },
]

// ============================================
// INSIGHTS/BLOG
// ============================================

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Rise of Agentic AI in Enterprise Software',
    excerpt: 'How autonomous AI agents are transforming business processes',
    author: 'SHIRO Research',
    date: '2025-12-10',
    readTime: '5 min read',
    category: 'AI Trends',
  },
  {
    id: 2,
    title: '50-70% Cost Savings with Global Delivery',
    excerpt: 'Real case studies from our offshore and nearshore clients',
    author: 'SHIRO Operations',
    date: '2025-12-08',
    readTime: '4 min read',
    category: 'Global Delivery',
  },
  {
    id: 3,
    title: 'Building a High-Valuation SaaS Portfolio',
    excerpt: 'Strategic approach to portfolio companies and revenue mix',
    author: 'SHIRO Strategy',
    date: '2025-12-05',
    readTime: '6 min read',
    category: 'Business Strategy',
  },
  {
    id: 4,
    title: 'RPA vs IPA vs Agentic AI: What\'s the Difference?',
    excerpt: 'Understanding the evolution of automation technologies',
    author: 'SHIRO Tech',
    date: '2025-12-01',
    readTime: '7 min read',
    category: 'Technology',
  },
  {
    id: 5,
    title: 'Compliance in AI: GDPR, CCPA, and Beyond',
    excerpt: 'Navigating the regulatory landscape of AI development',
    author: 'SHIRO Compliance',
    date: '2025-11-28',
    readTime: '5 min read',
    category: 'Compliance',
  },
  {
    id: 6,
    title: 'Multi-Region Development: The Follow-the-Sun Model',
    excerpt: 'How we achieve 16+ hour development windows',
    author: 'SHIRO Global',
    date: '2025-11-25',
    readTime: '4 min read',
    category: 'Global Delivery',
  },
]

// ============================================
// FOOTER - Matches Footer.tsx requirements
// ============================================

export const FOOTER = {
  description: 'AI Transformation & Global Delivery',
  social: {
    linkedin: 'https://www.linkedin.com/company/shiro-technologies-inc',
  },
  sections: [
    {
      title: 'Products',
      links: [
        { label: 'SHIRO Cloud', href: '/products/shirocloud' },
        { label: 'SHIRO Title', href: '/products/shirotitle' },
        { label: 'SHIRO Apps', href: '/products/shiroapps' },
        { label: 'SHIJO.ai', href: '/products/shijo' },
        { label: 'SHIRO Academy', href: '/products/shiro-academy' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'AI Transformation', href: '/ai-transformation' },
        { label: 'QA Automation', href: '/services/qa-automation' },
        { label: 'Offshore Delivery', href: '/services/offshore-delivery' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Investors', href: '/investors' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} SHIRO Technologies LLC. All rights reserved.`,
} as const;
