import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Development Case Studies | Custom AI Software Projects',
  description: 'Real AI development projects: InstantResumeAI, ResumeBlast, CloudSourceHRM. See our custom AI software portfolio.',
  keywords: 'AI case studies, custom AI projects, AI software portfolio, machine learning examples',
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">AI Development Case Studies</h1>
          <p className="text-xl text-purple-100">Real projects we've built</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {[
            {
              title: "InstantResumeAI",
              desc: "AI resume builder with ATS optimization",
              results: ["2,000+ resumes", "40% faster", "85% ATS pass rate"],
              link: "/instantresumeai"
            },
            {
              title: "ResumeBlast.ai",
              desc: "Automated job applications - 100+ per night",
              results: ["100+ apps/night", "5x more interviews", "90% success"],
              link: "/resumeblast"
            },
            {
              title: "CloudSourceHRM",
              desc: "AI-powered HR platform for SMBs",
              results: ["70% faster", "$6K savings/year", "8 hrs saved/week"],
              link: "/cloudsourcehrm"
            }
          ].map((study, i) => (
            <div key={i} className="border-t pt-12">
              <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
              <p className="text-xl text-gray-600 mb-6">{study.desc}</p>
              <div className="flex gap-8 mb-6">
                {study.results.map((r, j) => (
                  <div key={j} className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{r}</div>
                  </div>
                ))}
              </div>
              <Link href={study.link} className="text-purple-600 font-semibold">
                View Product →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
