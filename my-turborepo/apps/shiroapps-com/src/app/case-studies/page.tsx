export default function CaseStudiesPage() {
  const caseStudies = [
    {
      name: 'InstantResumeAI',
      category: 'Career AI',
      challenge: 'Job seekers struggle with ATS-optimized resumes',
      solution: 'AI-powered resume builder with 95% ATS pass rate',
      results: ['10K+ resumes created', '4.8/5 star rating', '6-week build'],
      tech: 'Next.js, OpenAI, Stripe'
    },
    {
      name: 'CloudSourceHRM',
      category: 'HR Tech',
      challenge: 'SMBs need affordable recruitment software',
      solution: 'All-in-one ATS with 10K email credits included',
      results: ['$1,200/yr pricing', '67% cheaper than competitors', '12-week build'],
      tech: 'Next.js, Supabase, AWS'
    },
    {
      name: 'ResumeBlast.ai',
      category: 'Job Automation',
      challenge: 'Manual job applications take 30+ hours/week',
      solution: 'Automated job application with AI cover letters',
      results: ['100+ applications/night', '3x interview rate', '8-week build'],
      tech: 'Next.js, Puppeteer, OpenAI'
    }
  ]

  return (
    <div className="bg-white">
      <div className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real products we built, launched, and scaled
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <div className="text-sm font-semibold text-purple-600 mb-2">{study.category}</div>
                    <h2 className="text-3xl font-bold mb-4">{study.name}</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-red-900 mb-2">Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-green-900 mb-2">Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Tech Stack</h3>
                        <p className="text-gray-600 font-mono text-sm">{study.tech}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Results</h3>
                    <ul className="space-y-3">
                      {study.results.map((result, j) => (
                        <li key={j} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <a href="/contact" className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 inline-block">
                        Build Something Like This
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Your Product Could Be Next</h2>
          <p className="text-xl text-gray-600 mb-8">
            We've built these products from scratch. Let's build yours.
          </p>
          <a href="/contact" className="gradient-bg text-white px-12 py-4 rounded-lg font-semibold hover:opacity-90 inline-block">
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  )
}
