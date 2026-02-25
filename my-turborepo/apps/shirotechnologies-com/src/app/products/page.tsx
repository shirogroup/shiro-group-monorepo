import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered SaaS Portfolio | SHIRO Technologies',
  description: 'Explore SHIRO Technologies\' portfolio of agentic AI products across workforce management, career tools, and professional education. Live, early access, and coming soon.',
  openGraph: {
    title: 'AI-Powered SaaS Portfolio | SHIRO Technologies',
    description: 'Agentic AI solutions across workforce, career, and education.',
    url: 'https://www.shirotechnologies.com/products',
    siteName: 'SHIRO Technologies',
    type: 'website',
  },
};

const products = [
  {
    id: 'cloudsourcehrm',
    name: 'CloudSourceHRM',
    tagline: 'AI-Powered Workforce Intelligence Platform',
    description: 'Next-generation hiring automation that unifies talent discovery, process automation, and workforce management into one intelligent platform.',
    status: 'Live',
    geography: 'Global',
    category: 'B2B/B2C HR Platform',
    cta: 'Start Free Trial',
    ctaHref: 'https://cloudsourcehrm.us',
    learnMoreHref: '/products/cloudsourcehrm',
    icon: '🧠',
    color: 'blue',
  },
  {
    id: 'instantresumeai',
    name: 'InstantResumeAI',
    tagline: 'ATS-Optimized Resumes in Minutes',
    description: 'AI-powered resume builder that transforms your experience into job-winning, ATS-optimized documents tailored to your target role.',
    status: 'Live',
    geography: 'Global',
    category: 'B2C Resume Builder',
    cta: 'Create Resume Free',
    ctaHref: 'https://instantresumeai.com',
    learnMoreHref: '/products/instantresumeai',
    icon: '📄',
    color: 'green',
  },
  {
    id: 'resumeblast',
    name: 'ResumeBlast.ai',
    tagline: 'Reach 1,500+ Recruiters Overnight',
    description: 'AI-driven resume distribution that sends your profile directly to hiring managers and HR teams, bypassing the job board black hole.',
    status: 'Live',
    geography: 'USA Only',
    category: 'B2C Resume Distribution',
    cta: 'Blast My Resume Free',
    ctaHref: 'https://resumeblast.ai',
    learnMoreHref: '/products/resumeblast',
    icon: '🚀',
    color: 'orange',
  },
  {
    id: 'aicoursehubpro',
    name: 'AICourseHubPro',
    tagline: 'Master AI Without Coding',
    description: 'Structured AI courses for business professionals. Practical, self-paced learning with verified certifications and a built-in AI assistant.',
    status: 'Live',
    geography: 'Global',
    category: 'B2C AI Learning',
    cta: 'Explore Courses',
    ctaHref: 'https://aicoursehubpro.com',
    learnMoreHref: '/products/aicoursehubpro',
    icon: '🎓',
    color: 'purple',
  },
  {
    id: 'chrm-nexus',
    name: 'CHRM Nexus',
    tagline: 'Recruitment Data-as-a-Service via API',
    description: 'Enterprise DaaS platform that transforms unstructured vendor job emails into clean structured JSON in 1.4 seconds using Gemini AI.',
    status: 'Early Access',
    geography: 'USA Only',
    category: 'B2B DaaS + Market Intelligence',
    cta: 'Request Early Access',
    ctaHref: 'https://cloudsourcehrm.com',
    learnMoreHref: '/products/chrm-nexus',
    icon: '⚡',
    color: 'yellow',
  },
  {
    id: 'genaicourse',
    name: 'GenAICourse.io',
    tagline: 'AI Leadership Training for Technical Teams',
    description: 'Curated generative AI curriculum for engineers, technical leads, and government decision-makers. Launching March 2026.',
    status: 'Coming Soon',
    geography: 'Global',
    category: 'B2C AI Learning',
    cta: 'Join Waitlist',
    ctaHref: 'https://genaicourse.io',
    learnMoreHref: '/products/genaicourse',
    icon: '🌐',
    color: 'teal',
  },
];

const statusConfig: Record<string, { label: string; bg: string; text: string; dot: string }> = {
  'Live': { label: 'Live', bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
  'Early Access': { label: 'Early Access', bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
  'Coming Soon': { label: 'Coming Soon', bg: 'bg-gray-100', text: 'text-gray-600', dot: 'bg-gray-400' },
};

const geoConfig: Record<string, { bg: string; text: string; flag: string }> = {
  'Global': { bg: 'bg-blue-50', text: 'text-blue-700', flag: '🌍' },
  'USA Only': { bg: 'bg-red-50', text: 'text-red-700', flag: '🇺🇸' },
};

const cardAccent: Record<string, string> = {
  blue: 'border-t-blue-500',
  green: 'border-t-green-500',
  orange: 'border-t-orange-500',
  purple: 'border-t-purple-500',
  yellow: 'border-t-yellow-500',
  teal: 'border-t-teal-500',
};

const ctaColor: Record<string, string> = {
  Live: 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white',
  'Early Access': 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white',
  'Coming Soon': 'bg-gray-200 text-gray-500 cursor-not-allowed',
};

export default function ProductsPage() {
  const liveProducts = products.filter(p => p.status === 'Live');
  const earlyProducts = products.filter(p => p.status === 'Early Access');
  const comingProducts = products.filter(p => p.status === 'Coming Soon');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-sm font-medium text-red-700">6 Products · 3 Live · 1 Early Access · 1 Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI-Powered SaaS Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Agentic AI solutions across workforce intelligence, career acceleration, and professional education — built for the way people work today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span> Live & ready</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span> Early access available</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-gray-400 inline-block"></span> Coming soon</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Live Products */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Live Products</h2>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              {liveProducts.length} Available Now
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {liveProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Early Access */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Early Access</h2>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              Limited Availability
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {earlyProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              March 2026
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {comingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Investor CTA */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Enterprise & Investment Inquiries</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            SHIRO Technologies is a 24-year-old company transitioning to an AI-native SaaS portfolio. For partnership, licensing, or M&amp;A discussions, contact our team directly.
          </p>
          <a
            href="mailto:merianda@shirotechnologies.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            Contact Our Team →
          </a>
        </section>

      </div>
    </main>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const status = statusConfig[product.status];
  const geo = geoConfig[product.geography];
  const accent = cardAccent[product.color];
  const cta = ctaColor[product.status];

  return (
    <div className={`bg-white rounded-xl border-t-4 ${accent} border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col`}>
      <div className="p-6 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{product.icon}</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${status.bg} ${status.text}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`}></span>
              {status.label}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${geo.bg} ${geo.text}`}>
              {geo.flag} {product.geography}
            </span>
          </div>
        </div>

        {/* Content */}
        <p className="text-sm font-semibold text-gray-700 mb-2">{product.tagline}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {/* Actions */}
      <div className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
        {product.status !== 'Coming Soon' ? (
          <a
            href={product.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${cta}`}
          >
            {product.cta}
          </a>
        ) : (
          <a
            href={product.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white transition-all"
          >
            {product.cta}
          </a>
        )}
        <a
          href={product.learnMoreHref}
          className="flex-1 text-center px-4 py-2.5 rounded-lg text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
}
