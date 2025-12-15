// InstantResumeAI Landing Page Constants

export const SITE_CONFIG = {
  name: 'InstantResumeAI',
  domain: 'instantresumeai.com',
  url: 'https://instantresumeai.com',
  description: 'Create ATS-Optimized Resumes in Minutes with AI',
  ogImage: '/og-image.png',
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

export const HERO = {
  badge: 'AI-Powered Resume Builder',
  headline: 'Create ATS-Optimized Resumes in Minutes with AI',
  subheadline: 'Land more interviews with AI-powered resume generation. No design skills required. Join 10,000+ professionals who landed their dream jobs.',
  cta: {
    primary: 'Start Free - No Credit Card',
    secondary: 'See How It Works',
  },
  stats: [
    { label: 'Active Users', value: '10,000+' },
    { label: 'Resumes Created', value: '50,000+' },
    { label: 'Interview Rate', value: '3.5x Higher' },
    { label: 'ATS Pass Rate', value: '94%' },
  ],
}

export const FEATURES = [
  {
    icon: 'Sparkles',
    title: 'AI-Powered Generation',
    description: 'Smart content suggestions based on your experience with industry-specific language and keywords that get results.',
    benefits: [
      'Intelligent job description analysis',
      'Keyword optimization for your industry',
      'Professional language suggestions',
      'Tailored content for each role',
    ],
  },
  {
    icon: 'Target',
    title: 'ATS Optimization Scoring',
    description: 'Real-time score as you build with automated keyword optimization to beat applicant tracking systems.',
    benefits: [
      'Live ATS compatibility score',
      'Keyword density analysis',
      'Format compliance checking',
      '94% ATS pass rate',
    ],
  },
  {
    icon: 'Layout',
    title: 'Industry-Specific Templates',
    description: '50+ professional templates tailored for your field with one-click customization and instant previews.',
    benefits: [
      '50+ professionally designed templates',
      'Industry-specific formatting',
      'Modern and classic styles',
      'Fully customizable layouts',
    ],
  },
  {
    icon: 'Link',
    title: 'LinkedIn Integration',
    description: 'Import your profile instantly and auto-fill work history to save hours of manual entry.',
    benefits: [
      'One-click profile import',
      'Automatic work history population',
      'Skills and endorsements sync',
      'Save hours of manual entry',
    ],
  },
  {
    icon: 'Lightbulb',
    title: 'Real-Time Suggestions',
    description: 'AI improves your bullet points with grammar and clarity checks using impact-focused language.',
    benefits: [
      'Action verb recommendations',
      'Quantifiable achievement suggestions',
      'Grammar and spell checking',
      'Clarity and impact optimization',
    ],
  },
]

export const HOW_IT_WORKS = {
  title: 'Get Your Perfect Resume in 3 Simple Steps',
  steps: [
    {
      number: 1,
      title: 'Import or Start Fresh',
      description: 'Connect your LinkedIn profile for instant import or start from scratch. Our AI guides you through every section.',
      icon: 'Upload',
    },
    {
      number: 2,
      title: 'AI Optimizes Your Content',
      description: 'Our AI analyzes job descriptions and suggests powerful improvements to your resume content with ATS-optimized keywords.',
      icon: 'Cpu',
    },
    {
      number: 3,
      title: 'Download & Apply',
      description: 'Export your polished, ATS-optimized resume in multiple formats and start landing interviews immediately.',
      icon: 'Download',
    },
  ],
}

export const PRICING = {
  title: 'Choose Your Plan',
  subtitle: 'Start free, upgrade when you need more',
  tiers: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for testing the waters',
      features: [
        '1 resume',
        '10 basic templates',
        'AI suggestions (limited)',
        'PDF export',
        'Basic ATS scoring',
        'Email support',
      ],
      cta: 'Start Free',
      ctaLink: '#signup',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      annualPrice: '$99',
      description: 'Best for active job seekers',
      features: [
        'Unlimited resumes',
        '50+ premium templates',
        'Unlimited AI suggestions',
        'Advanced ATS scoring',
        'LinkedIn integration',
        'Cover letter generator',
        'Multiple export formats',
        'Priority support',
        'Interview tips',
      ],
      cta: 'Start Pro Trial',
      ctaLink: '#signup',
      popular: true,
    },
    {
      name: 'Pay-Per-Resume',
      price: '$4.99',
      period: 'per resume',
      description: 'Need just one more resume?',
      features: [
        'Single resume creation',
        'All premium templates',
        'Full AI features',
        'ATS optimization',
        'All export formats',
        'No subscription',
        '30-day access',
      ],
      cta: 'Buy One Resume',
      ctaLink: '#signup',
      popular: false,
    },
  ],
  moneyBackGuarantee: '7-day money-back guarantee on all paid plans',
}

export const TESTIMONIALS = [
  {
    quote: 'I landed 3 interviews in my first week using InstantResumeAI. The ATS optimization really works!',
    author: 'Sarah Chen',
    role: 'Software Engineer',
    company: 'Tech Startup',
    rating: 5,
    image: '/testimonials/sarah.jpg',
  },
  {
    quote: 'The LinkedIn integration saved me hours. My resume went from bland to professional in minutes.',
    author: 'Marcus Johnson',
    role: 'Marketing Manager',
    company: 'Fortune 500',
    rating: 5,
    image: '/testimonials/marcus.jpg',
  },
  {
    quote: 'After months of applications with no response, I got 5 callbacks in 2 weeks with my new AI-optimized resume.',
    author: 'Emily Rodriguez',
    role: 'Data Analyst',
    company: 'Financial Services',
    rating: 5,
    image: '/testimonials/emily.jpg',
  },
  {
    quote: 'As a career changer, the AI suggestions helped me highlight transferable skills I didn\'t even know I had.',
    author: 'David Kim',
    role: 'Product Manager',
    company: 'SaaS Company',
    rating: 5,
    image: '/testimonials/david.jpg',
  },
]

export const FAQ = [
  {
    question: 'How does the AI resume builder work?',
    answer: 'Our AI analyzes millions of successful resumes and job descriptions to understand what works. When you input your experience, it suggests powerful, achievement-focused bullet points optimized with keywords that match your target industry. The AI also scores your resume against ATS systems in real-time, ensuring your application gets past automated screening.',
  },
  {
    question: 'Is it really free?',
    answer: 'Yes! You can create 1 complete resume absolutely free, forever. This includes access to 10 professional templates, basic AI suggestions, and PDF export. Upgrade to Pro for unlimited resumes, all templates, and advanced features like LinkedIn integration and cover letter generation.',
  },
  {
    question: 'What is ATS optimization and why does it matter?',
    answer: 'Applicant Tracking Systems (ATS) are software that 75% of companies use to filter resumes before human review. Our AI ensures your resume uses the right keywords, formatting, and structure to score highly with these systems. Studies show ATS-optimized resumes are 3.5x more likely to get interviews.',
  },
  {
    question: 'Can I customize the templates?',
    answer: 'Absolutely! All templates are fully customizable. Change colors, fonts, section order, and spacing with easy controls. You can also save custom templates for future use.',
  },
  {
    question: 'How do I import from LinkedIn?',
    answer: 'Simply connect your LinkedIn account with one click. We\'ll automatically import your work history, education, skills, and achievements. You can then edit and enhance the content with our AI suggestions. The entire import process takes less than 30 seconds.',
  },
  {
    question: 'What file formats can I export?',
    answer: 'Free users can export to PDF. Pro users get PDF, DOCX (Microsoft Word), and TXT formats. All exports are ATS-compatible and optimized for both digital and print.',
  },
  {
    question: 'Is my data secure and private?',
    answer: 'Yes. We use bank-level 256-bit encryption for all data. Your resume information is never shared with third parties or used to train our AI on identifiable data. We\'re GDPR compliant and you can delete your data anytime. See our Privacy Policy for full details.',
  },
]

export const CTA_FINAL = {
  title: 'Ready to Land Your Dream Job?',
  subtitle: 'Join 10,000+ professionals who are getting more interviews with AI-optimized resumes',
  features: [
    'Create your first resume in under 10 minutes',
    'No credit card required for free plan',
    'Cancel anytime, no questions asked',
  ],
  cta: 'Get Started Free',
}

export const NAVIGATION = {
  logo: 'InstantResumeAI',
  links: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Sign In',
}

export const FOOTER = {
  description: 'AI-powered resume builder trusted by 10,000+ job seekers worldwide.',
  sections: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Templates', href: '/templates' },
        { label: 'Examples', href: '/examples' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Resume Tips', href: '/blog/resume-tips' },
        { label: 'ATS Guide', href: '/blog/ats-guide' },
        { label: 'Career Advice', href: '/blog/career' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: 'https://shirotechnologies.com/about' },
        { label: 'Contact', href: 'https://shirotechnologies.com/contact' },
        { label: 'Careers', href: 'https://shirotechnologies.com/careers' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'GDPR Compliance', href: '/gdpr' },
      ],
    },
  ],
  social: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/shiro-technologies-inc', icon: 'Linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/instantresumeai', icon: 'Twitter' },
  ],
  copyright: `© ${new Date().getFullYear()} SHIRO Technologies LLC. All rights reserved.`,
}

export const SEO = {
  title: 'Free AI Resume Builder | ATS-Optimized Templates - InstantResumeAI',
  description: 'Create professional, ATS-optimized resumes in minutes with AI. Free resume builder with 50+ templates. Join 10,000+ job seekers landing interviews faster.',
  keywords: 'AI resume builder, ATS resume, free resume maker, resume templates, job application, career tools',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
}
