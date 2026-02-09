import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Development Services | Custom AI Software Development & Outsourcing',
  description: 'Custom AI development services: agentic AI systems, ML models, MVP development, team augmentation. 50-70% cost savings with offshore AI development.',
  keywords: 'custom AI development, outsource AI development, offshore AI services, AI automation, machine learning development, agentic AI development, AI integration services, AI team augmentation',
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  pricing: string;
}

function ServiceCard({ icon, title, description, features, pricing }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-green-600 mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-purple-600 font-semibold text-lg">{pricing}</div>
    </div>
  );
}

export default function ServicesPage() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'AI Assessment & Strategy',
      description: 'Evaluate AI readiness and create a roadmap for your business',
      features: [
        'AI readiness assessment',
        'Technical feasibility analysis',
        'ROI projections',
        'Implementation roadmap'
      ],
      pricing: 'Starting at $2,500'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Custom AI Development',
      description: 'Build AI-powered applications tailored to your needs',
      features: [
        'Agentic AI systems',
        'Custom ML models',
        'NLP applications',
        'Next.js + Python stack'
      ],
      pricing: 'Starting at $15,000'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'MVP Development',
      description: 'Launch your AI product in 4-8 weeks',
      features: [
        '4-8 week delivery',
        'Functional AI features',
        'Stripe integration',
        'Mobile responsive'
      ],
      pricing: '$8,000 - $25,000'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Team Augmentation',
      description: 'Offshore AI engineers to scale your team',
      features: [
        'Senior AI engineers (India)',
        '50-70% cost savings',
        '24/7 support',
        'Flexible engagement'
      ],
      pricing: '$3,000-$5,000/month per dev'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: 'AI Integration',
      description: 'Integrate AI into existing systems',
      features: [
        'API integration',
        'Legacy modernization',
        'Cloud infrastructure',
        'Performance optimization'
      ],
      pricing: 'Starting at $10,000'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Support & Maintenance',
      description: '24/7 monitoring and updates',
      features: [
        '24/7 monitoring',
        'Security patches',
        'Feature enhancements',
        'Performance reports'
      ],
      pricing: '$1,000-$5,000/month'
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">AI Development Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Custom AI software development with 50-70% cost savings through offshore delivery. 
            24 years of Fortune 500 experience.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AI/ML</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• OpenAI GPT-4</li>
                <li>• Anthropic Claude</li>
                <li>• LangChain</li>
                <li>• TensorFlow</li>
                <li>• PyTorch</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Next.js 14+</li>
                <li>• React 18</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js</li>
                <li>• Python FastAPI</li>
                <li>• Supabase</li>
                <li>• PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Build Your AI Solution?</h2>
          <a 
            href="/contact" 
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold inline-block hover:bg-purple-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}
