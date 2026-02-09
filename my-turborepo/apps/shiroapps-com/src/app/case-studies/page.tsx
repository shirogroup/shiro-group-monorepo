import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | AI Development Portfolio - SHIRO Apps',
  description: 'Portfolio of AI-powered applications: InstantResumeAI, ResumeBlast.ai, CloudSourceHRM. Custom AI development case studies.',
  keywords: 'AI case studies, custom AI development portfolio, AI applications, resume AI, HR automation',
};

export default function CaseStudiesPage() {
  const studies = [
    {
      title: 'InstantResumeAI',
      category: 'AI-Powered SaaS',
      description: 'AI resume builder helping job seekers create ATS-optimized resumes in minutes',
      challenge: '75%+ of resumes rejected by ATS systems. Job seekers spend hours formatting.',
      solution: 'GPT-4 powered resume generation with real-time ATS scoring and industry-specific templates.',
      results: ['2,000+ resumes generated', '40% faster than manual creation', '85% ATS pass rate'],
      tech: ['Next.js', 'OpenAI GPT-4', 'Stripe', 'Supabase'],
      link: 'https://instantresumeai.com',
    },
    {
      title: 'ResumeBlast.ai',
      category: 'Job Application Automation',
      description: 'AI-powered automation tool applying to 100+ jobs overnight',
      challenge: 'Job seekers limited to 10-20 manual applications per day.',
      solution: 'Python automation with AI-generated custom cover letters for each application.',
      results: ['100+ applications per night', '5x more interview invites', '90% success rate'],
      tech: ['Python', 'Selenium', 'GPT-4', 'MongoDB'],
      link: 'https://resumeblast.ai',
    },
    {
      title: 'CloudSourceHRM',
      category: 'HR Automation Platform',
      description: 'Affordable AI-powered recruitment platform for SMBs',
      challenge: 'SMBs cannot afford $5K-$50K/year enterprise ATS solutions.',
      solution: 'Budget-friendly ATS with 10,000 email credits, AI candidate matching, bulk job posting.',
      results: ['70% faster candidate screening', '$6,000 annual savings vs competitors', '8 hours saved per week'],
      tech: ['Next.js', 'PostgreSQL', 'AI Matching', 'AWS'],
      link: 'https://cloudsourcehrm.com',
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-purple-100">
            Real-world AI applications built by SHIRO Apps
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {studies.map((study, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-purple-600 font-semibold mb-2">{study.category}</div>
                  <h2 className="text-3xl font-bold">{study.title}</h2>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{study.description}</p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="font-bold mb-2">Challenge</h3>
                  <p className="text-sm text-gray-600">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Solution</h3>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Results</h3>
                  <ul className="space-y-1">
                    {study.results.map((result, j) => (
                      <li key={j} className="text-sm text-gray-600">• {result}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex gap-2">
                  {study.tech.map((tech, j) => (
                    <span key={j} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={study.link} 
                  className="text-purple-600 font-semibold hover:text-purple-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Product →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Build Your AI Product?</h2>
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
