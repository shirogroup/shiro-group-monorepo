import { Product, NavItem, ServicePreview, Stat } from './types'

// Site Configuration
export const SITE_CONFIG = {
  name: 'SHIRO Technologies',
  description: 'The foundational services entity powering our global agentic AI SaaS portfolio',
  url: 'https://shirotechnologies.com',
  ogImage: '/images/og-image.png',
  googleAnalyticsId: 'G-1LL63ZEXDY',
  links: {
    twitter: 'https://twitter.com/shirotek',
    linkedin: 'https://www.linkedin.com/company/shiro-technologies-inc',
    linkedinShort: 'https://bit.ly/shirotechnologies',
    facebook: 'https://www.facebook.com/pages/Shiro-Technologies/277269579082508',
  },
  contact: {
    email: 'Info@shirotechnologies.com',
    salesEmail: 'Info@shirotechnologies.com',
    productsServicesPhone: '(800) 971-8013',
    mainPhone: '(972) 734-5623',
  },
  address: {
    physical: {
      street: '5080 Spectrum Drive Suite 575E',
      city: 'Addison',
      state: 'TX',
      zip: '75001',
      country: 'U.S.A',
    },
    mailing: {
      street: '4900 Airport Parkway, PO Box 989',
      city: 'Addison',
      state: 'TX',
      zip: '75001',
      country: 'U.S.A',
    },
  },
} as const

// Navigation Items (LOCKED STRUCTURE - Products at position 3)
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'AI Transformation', href: '/ai-transformation' },
  { label: 'Products', href: '/products' }, // Position 3 - SaaS FIRST
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Global Presence', href: '/global-presence' },
  { label: 'Insights', href: '/insights' },
  { label: 'About SHIRO', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// Products Data
export const PRODUCTS: Product[] = [
  {
    id: 'instantresumeai',
    name: 'InstantResumeAI',
    tagline: 'AI-Powered Resume Builder for Job Seekers',
    status: 'live',
    url: 'https://instantresumeai.com',
    description: 'Create ATS-optimized resumes in minutes with AI-powered generation, industry-specific templates, and real-time suggestions.',
    features: [
      'AI resume generation from LinkedIn profiles',
      'ATS optimization scoring with recommendations',
      '20+ industry-specific professional templates',
      'Real-time AI suggestions for improvements',
      'LinkedIn integration for easy data import',
      'Export to PDF, DOCX, or plain text',
    ],
    pricing: {
      free: '1 resume',
      pro: '$9.99/mo - Unlimited resumes, all templates',
      oneTime: '$4.99 - Single additional resume',
    },
    target: 'Job seekers, career changers, recent graduates',
  },
  {
    id: 'resumeblast',
    name: 'ResumeBlast.ai',
    tagline: 'Automate Your Job Application Process',
    status: 'live',
    url: 'https://resumeblast.ai',
    description: 'Automate job applications with AI-powered precision, generating custom cover letters and tracking your entire pipeline.',
    features: [
      'Automated application submission to job boards',
      'AI-generated custom cover letters per job posting',
      'Application tracking dashboard with status updates',
      'Follow-up automation (thank you notes, status checks)',
      'Success analytics and application insights',
      'Integration with major job boards (Indeed, LinkedIn)',
    ],
    pricing: {
      standard: '$29.99/mo - 50 applications',
      professional: '$49.99/mo - Unlimited applications',
      enterprise: 'Custom pricing for recruiting firms',
    },
    target: 'Active job seekers, passive candidates, recruiting agencies',
  },
  {
    id: 'cloudsourcehrm',
    name: 'CloudSourceHRM',
    tagline: 'AI-Powered HR Management Platform',
    status: 'live',
    url: 'https://cloudsourcehrm.com',
    description: 'Streamline HR operations for modern teams with AI-powered onboarding, performance management, and compliance tracking.',
    features: [
      'Automated employee onboarding workflows',
      'Performance review tracking and scheduling',
      'Time-off management with approval workflows',
      'Document management and e-signatures',
      'Compliance tracking (labor law, certifications)',
      'Employee self-service portal',
      'Analytics dashboard for HR metrics',
    ],
    pricing: {
      starter: '$49/mo - Up to 25 employees',
      business: '$99/mo - Up to 100 employees',
      enterprise: 'Custom pricing for 100+ employees',
    },
    target: 'Small to mid-sized companies (25-500 employees)',
  },
  {
    id: 'shiro-cloud',
    name: 'SHIRO Cloud',
    tagline: 'Agentic AI Cloud Utilities & DevTools',
    status: 'development',
    betaDate: 'Q1 2026',
    description: 'Zero-human-involvement cloud utilities with AI architecture generation, uptime monitoring, and autonomous incident analysis.',
    features: [
      'AI Cloud Architecture Generator (AWS/GCP/Azure)',
      'Self-evolving infrastructure-as-code templates',
      'Uptime monitoring with predictive anomaly detection',
      'Multiagent root cause analysis',
      'Autonomous remediation suggestions',
      'CLI-first with web dashboard',
    ],
    pricing: {
      free: '1-3 monitors/architectures',
      pro: '$29/mo - Unlimited monitors, 10 architectures',
      team: '$99/mo - Collaboration, SSO, audit logs',
      enterprise: 'Custom - On-prem, SLA, dedicated support',
    },
    target: 'Solo developers, startups, small DevOps teams',
  },
  {
    id: 'shiro-title',
    name: 'SHIRO Title',
    tagline: 'Agentic AI for Real Estate & Title Automation',
    status: 'development',
    betaDate: 'Q2 2026',
    description: 'Vertical agentic SaaS platform automating high-value document review, compliance checks, and workflow orchestration for title professionals.',
    features: [
      'Automated deed/lien/judgment extraction',
      'Multiagent compliance verification (RESPA, TILA)',
      'Risk flag identification and prioritization',
      'Closing checklist generation and tracking',
      'Multi-party coordination workflows',
      'Complete audit trail for regulatory review',
    ],
    pricing: {
      subscription: '$199/mo/user - Unlimited documents',
      premium: '$499/mo - Advanced AI, custom workflows',
      payPerUse: '$15/transaction - Occasional users',
      enterprise: 'Custom pricing for title companies',
    },
    target: 'Title companies, real estate attorneys, escrow officers',
  },
  {
    id: 'shijo-ai',
    name: 'SHIJO.ai',
    tagline: 'Agentic Digital Marketing Automation',
    status: 'development',
    betaDate: 'Q2 2026',
    description: 'B2B agentic SaaS platform automating SEO, content planning, and omnichannel campaigns with multiagent orchestration.',
    features: [
      'AI SEO with keyword research and content planning',
      'Multiagent content generation (blogs, social, email)',
      'Automated content calendars with AI-suggested timing',
      'Omnichannel campaign workflows',
      'ROI dashboard with attribution modeling',
      'Brand voice consistency enforcement',
    ],
    pricing: {
      starter: '$99/mo - 1 brand, 10 content pieces',
      professional: '$299/mo - 3 brands, 50 content pieces',
      agency: '$799/mo - 10 brands, white-label, unlimited',
      enterprise: 'Custom - Unlimited brands, API access',
    },
    target: 'SMBs, digital agencies, in-house marketing teams',
  },
  {
    id: 'shiro-academy',
    name: 'SHIRO Academy',
    tagline: 'Adaptive Agentic AI Learning Platform',
    status: 'development',
    betaDate: 'Q1 2026',
    description: 'Scalable, text-only adaptive learning platform delivering AI education with personalized assessments and verifiable certifications.',
    features: [
      'Adaptive personalization via Gemini (runtime optimized)',
      'AI/agentic assessments with scenario-based problems',
      'Blockchain-backed verifiable certificates',
      'LinkedIn integration for credential sharing',
      'Enterprise licensing with custom learning paths',
      'Spaced repetition and adaptive difficulty',
    ],
    pricing: {
      free: '2 foundational courses, community forum',
      standard: '$19.99/mo or $199/year - All courses',
      premium: '$49.99/mo or $499/year - Advanced tracks, AI mentorship',
      lifetime: '$999 one-time - Permanent access, transferable',
      enterprise: 'Custom pricing for teams',
    },
    target: 'Professionals upskilling, companies training teams',
  },
]

// Technology Partners
export const TECH_PARTNERS = [
  'Microsoft Partner',
  'UiPath',
  'Automation Anywhere',
  'Vercel',
  'AWS',
  'Google Cloud',
  'Anthropic Claude',
  'Google Gemini',
] as const

// Stats for homepage
export const STATS: Stat[] = [
  { value: '50-70%', label: 'Cost Savings vs US/EU Rates' },
  { value: '24/7', label: 'Follow-the-Sun Delivery' },
  { value: '7', label: 'Autonomous SaaS Products' },
  { value: '2025', label: 'Gartner Top Tech Trend Aligned' },
]

// Services Preview Data
export const SERVICES_PREVIEW: ServicePreview[] = [
  {
    title: 'Agentic AI Transformation',
    icon: '🤖',
    features: [
      'AI Readiness Assessments',
      'Agentic Workflow Design',
      'Custom Agent Development',
      'Multiagent Orchestration',
      'Change Management & Training',
    ],
    link: '/ai-transformation',
  },
  {
    title: 'QA Automation & Testing',
    icon: '🔬',
    features: [
      'AI Test Case Generation',
      'Autonomous Regression Testing',
      'Performance & Security Testing',
      'Continuous Testing Pipelines',
      'Self-Healing Test Scripts',
    ],
    link: '/services#qa-automation',
  },
  {
    title: 'Global Delivery Centers',
    icon: '🌍',
    features: [
      '50-70% Cost Arbitrage',
      'Follow-the-Sun Development',
      'Dedicated Teams Available',
      'Project-Based Engagement',
      'Flexible Scaling Options',
    ],
    link: '/global-presence',
  },
]
