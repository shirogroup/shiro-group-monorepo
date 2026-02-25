import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI SaaS Products Portfolio | Agentic AI Tools for HR, Career & Education | SHIRO Technologies',
  description: 'Explore SHIRO Technologies\' portfolio of agentic AI SaaS products: CloudSourceHRM, InstantResumeAI, ResumeBlast.ai, AICourseHubPro, CHRM Nexus, and GenAICourse.io. AI tools for hiring, resumes, and professional education.',
  keywords: [
    'AI SaaS tools',
    'agentic AI software',
    'AI tools for business 2026',
    'AI productivity tools',
    'HR automation software',
    'AI resume tools',
    'AI career tools',
    'AI education platform',
    'vertical SaaS portfolio',
    'AI hiring software',
    'AI-powered business tools',
    'workforce automation software',
    'no-code AI software',
    'SaaS product portfolio',
    'agentic workflow tools',
    'SHIRO Technologies products',
    'AI tools for HR professionals',
    'AI job search tools',
    'AI course platform',
    'recruitment automation software',
  ],
  alternates: {
    canonical: 'https://www.shirotechnologies.com/products',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'AI SaaS Products Portfolio | SHIRO Technologies',
    description: 'Agentic AI solutions across workforce intelligence, career acceleration, and professional education. 4 live products, 2 in early access/coming soon.',
    url: 'https://www.shirotechnologies.com/products',
    siteName: 'SHIRO Technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SaaS Products Portfolio | SHIRO Technologies',
    description: 'Agentic AI tools for hiring, resumes, career acceleration, and professional AI education.',
    site: '@shiroapps',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SHIRO Technologies AI SaaS Product Portfolio',
  description: 'Agentic AI SaaS products spanning workforce intelligence, career tools, and professional AI education',
  url: 'https://www.shirotechnologies.com/products',
  numberOfItems: 6,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'SoftwareApplication',
        name: 'CloudSourceHRM',
        url: 'https://cloudsourcehrm.us',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'HR Automation Software',
        operatingSystem: 'Web',
        description: 'AI-powered workforce intelligence and hiring automation platform. ATS, talent discovery, and HR management in one cloud platform.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'SoftwareApplication',
        name: 'InstantResumeAI',
        url: 'https://instantresumeai.com',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'AI Resume Builder',
        operatingSystem: 'Web',
        description: 'ATS-optimized AI resume builder for job seekers worldwide. Build a professional resume in under 10 minutes.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'SoftwareApplication',
        name: 'ResumeBlast.ai',
        url: 'https://resumeblast.ai',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Resume Distribution Service',
        operatingSystem: 'Web',
        description: 'AI-driven resume distribution to 1,500+ recruiters in the USA. Bypass job boards and reach hiring managers directly.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'SoftwareApplication',
        name: 'AICourseHubPro',
        url: 'https://aicoursehubpro.com',
        applicationCategory: 'EducationalApplication',
        applicationSubCategory: 'AI Training Platform',
        operatingSystem: 'Web',
        description: 'Self-paced AI courses with verified certifications for business professionals. No coding required.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'SoftwareApplication',
        name: 'CHRM Nexus',
        url: 'https://cloudsourcehrm.com',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Recruitment Data API',
        operatingSystem: 'Web',
        description: 'Enterprise recruitment Data-as-a-Service API platform powered by Gemini AI. Real-time candidate intelligence for HR tech companies.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/LimitedAvailability' },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'SoftwareApplication',
        name: 'GenAICourse.io',
        url: 'https://genaicourse.io',
        applicationCategory: 'EducationalApplication',
        applicationSubCategory: 'Generative AI Training',
        operatingSystem: 'Web',
        description: 'Generative AI curriculum for technical teams and government leaders. Dual-track learning with integrated assessments. Launching March 20, 2026.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/PreOrder' },
      },
    },
  ],
};

const products = [
  {
    id: 'cloudsourcehrm',
    name: 'CloudSourceHRM',
    tagline: 'AI-Powered Workforce Intelligence Platform',
    description: 'Next-generation hiring automation that unifies talent discovery, process automation, and workforce management into one intelligent cloud platform.',
    status: 'Live',
    geography: 'Global',
    category: 'HR Automation · ATS · Talent Acquisition',
    cta: 'Start Free Trial',
    ctaHref: 'https://cloudsourcehrm.us',
    learnMoreHref: '/products/cloudsourcehrm',
    icon: '🧠',
    accentColor: 'border-blue-500',
    badgeColor: 'bg-blue-50 text-blue-700',
    stat: '50% faster hiring',
  },
  {
    id: 'instantresumeai',
    name: 'InstantResumeAI',
    tagline: 'ATS-Optimized Resumes in Under 10 Minutes',
    description: 'AI resume builder that transforms your experience into job-winning, ATS-optimized documents tailored to your target role and keywords.',
    status: 'Live',
    geography: 'Global',
    category: 'AI Resume Builder · Career Tools · Job Search',
    cta: 'Create Resume Free',
    ctaHref: 'https://instantresumeai.com',
    learnMoreHref: '/products/instantresumeai',
    icon: '📄',
    accentColor: 'border-green-500',
    badgeColor: 'bg-green-50 text-green-700',
    stat: '10,900% YoY search growth',
  },
  {
    id: 'resumeblast',
    name: 'ResumeBlast.ai',
    tagline: 'Send Your Resume to 1,500+ Recruiters Overnight',
    description: 'AI-driven resume distribution that bypasses job boards entirely and delivers your resume directly to hiring managers at target companies.',
    status: 'Live',
    geography: 'USA Only',
    category: 'Resume Distribution · Recruiter Outreach · Job Search',
    cta: 'Blast My Resume Free',
    ctaHref: 'https://resumeblast.ai',
    learnMoreHref: '/products/resumeblast',
    icon: '🚀',
    accentColor: 'border-orange-500',
    badgeColor: 'bg-orange-50 text-orange-700',
    stat: '1,500+ recruiter contacts',
  },
  {
    id: 'aicoursehubpro',
    name: 'AICourseHubPro',
    tagline: 'Master AI Skills for Business — No Coding Required',
    description: 'Self-paced AI courses with verified certifications and a built-in AI learning assistant. Practical skills you can use at work the very next day.',
    status: 'Live',
    geography: 'Global',
    category: 'AI Education · Online Courses · Certification',
    cta: 'Explore Courses',
    ctaHref: 'https://aicoursehubpro.com',
    learnMoreHref: '/products/aicoursehubpro',
    icon: '🎓',
    accentColor: 'border-purple-500',
    badgeColor: 'bg-purple-50 text-purple-700',
    stat: '31.2% CAGR market',
  },
  {
    id: 'chrm-nexus',
    name: 'CHRM Nexus',
    tagline: 'Recruitment Intelligence API — 1.4 Second Latency',
    description: 'Enterprise-grade recruitment Data-as-a-Service API. Real-time candidate intelligence, market insights, and structured hiring data for HR tech platforms.',
    status: 'Early Access',
    geography: 'USA',
    category: 'Recruitment API · Data-as-a-Service · HR Tech',
    cta: 'Request Early Access',
    ctaHref: 'https://cloudsourcehrm.com',
    learnMoreHref: '/products/chrm-nexus',
    icon: '⚡',
    accentColor: 'border-yellow-500',
    badgeColor: 'bg-yellow-50 text-yellow-700',
    stat: '99.8% accuracy',
  },
  {
    id: 'genaicourse',
    name: 'GenAICourse.io',
    tagline: 'Generative AI Training for Technical Teams & Government',
    description: 'Curated generative AI curriculum with dual tracks for engineers and government leaders. Integrated assessments, professional credentials, secure platform.',
    status: 'Coming Soon',
    geography: 'Global',
    category: 'Generative AI Training · Government · Enterprise',
    cta: 'Join Waitlist',
    ctaHref: 'https://genaicourse.io',
    learnMoreHref: '/products/genaicourse',
    icon: '🏛️',
    accentColor: 'border-teal-500',
    badgeColor: 'bg-teal-50 text-teal-700',
    stat: 'Launching March 20, 2026',
  },
];

const statusBadge = {
  Live: 'bg-green-100 text-green-800',
  'Early Access': 'bg-yellow-100 text-yellow-800',
  'Coming Soon': 'bg-gray-100 text-gray-600',
};

const geoBadge = {
  Global: 'bg-blue-50 text-blue-700',
  'USA Only': 'bg-red-50 text-red-700',
  USA: 'bg-red-50 text-red-700',
};

const liveProducts = products.filter(p => p.status === 'Live');
const otherProducts = products.filter(p => p.status !== 'Live');

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Script
        id="products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            6 AI SaaS Products · 4 Live · 1 Early Access · 1 Launching March 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Agentic AI Tools Built for<br className="hidden md:block" /> Real Business Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            SHIRO Technologies builds vertical AI SaaS products across workforce intelligence, career acceleration, and professional AI education — each solving a specific, high-value problem.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><span className="text-green-500 font-bold">●</span> HR Automation &amp; ATS</span>
            <span className="flex items-center gap-1.5"><span className="text-blue-500 font-bold">●</span> AI Resume &amp; Career Tools</span>
            <span className="flex items-center gap-1.5"><span className="text-purple-500 font-bold">●</span> AI Education &amp; Certification</span>
            <span className="flex items-center gap-1.5"><span className="text-yellow-500 font-bold">●</span> Recruitment Data API</span>
          </div>
        </div>
      </section>

      {/* Live Products */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Live Products</h2>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 4 Active
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {liveProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl border border-gray-200 border-t-4 ${product.accentColor} p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{product.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{product.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{product.category}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusBadge[product.status as keyof typeof statusBadge]}`}>
                    {product.status === 'Live' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span>}
                    {product.status}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${geoBadge[product.geography as keyof typeof geoBadge]}`}>
                    {product.geography === 'Global' ? '🌍' : '🇺🇸'} {product.geography}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${product.badgeColor} mb-5 w-fit`}>
                📊 {product.stat}
              </div>
              <div className="flex gap-3">
                <a
                  href={product.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-lg text-center hover:opacity-90 transition-opacity"
                >
                  {product.cta}
                </a>
                <a
                  href={product.learnMoreHref}
                  className="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Early Access + Coming Soon */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Coming Soon &amp; Early Access</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl border border-gray-200 border-t-4 ${product.accentColor} p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{product.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{product.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{product.category}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusBadge[product.status as keyof typeof statusBadge]}`}>
                    {product.status}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${geoBadge[product.geography as keyof typeof geoBadge]}`}>
                    {product.geography === 'Global' ? '🌍' : '🇺🇸'} {product.geography}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${product.badgeColor} mb-5 w-fit`}>
                📊 {product.stat}
              </div>
              <div className="flex gap-3">
                <a
                  href={product.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-lg text-center hover:opacity-90 transition-opacity"
                >
                  {product.cta}
                </a>
                <a
                  href={product.learnMoreHref}
                  className="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investor CTA */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Building the Next Generation of Agentic AI</h2>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            SHIRO Technologies is a 24-year-old company building a vertical AI SaaS portfolio targeting 8-12x revenue multiples. Explore our investor thesis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/investors"
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Investor Overview →
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
