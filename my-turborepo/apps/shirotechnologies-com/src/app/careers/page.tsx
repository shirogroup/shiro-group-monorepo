import Link from 'next/link';

export const metadata = {
  title: 'Careers - Join SHIRO Technologies',
  description: 'Explore career opportunities at SHIRO Technologies. Join our team building the future of AI-powered business transformation.',
};

export default function CareersPage() {
  // Temporary job listings - will be replaced with database
  const featuredJobs = [
    {
      id: 'senior-full-stack',
      title: 'Senior Full Stack Engineer',
      location: 'Remote',
      type: 'Full-time',
      category: 'Engineering',
      description: 'Build scalable SaaS applications using React, Node.js, and Python.'
    },
    {
      id: 'ai-architect',
      title: 'AI Transformation Architect',
      location: 'Remote',
      type: 'Full-time',
      category: 'Engineering',
      description: 'Design and implement agentic AI solutions for enterprise clients.'
    },
    {
      id: 'qa-automation',
      title: 'QA Automation Tester',
      location: 'Mysore, India / Remote',
      type: 'Full-time',
      category: 'Quality Assurance',
      description: 'Build automated testing frameworks for our SaaS products.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Join the AI Revolution
            </h1>
            <p className="text-xl text-gray-300">
              Build the future of business with agentic AI technology. Work with a global team on products that transform how companies operate.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join SHIRO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-12 text-center">Why Join SHIRO Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Innovation First</h3>
              <p className="text-gray-600">Work on cutting-edge AI and automation technologies</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Global Team</h3>
              <p className="text-gray-600">Collaborate across USA, Canada, and India</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Fast Growth</h3>
              <p className="text-gray-600">Join a rapidly scaling SaaS portfolio</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Impact</h3>
              <p className="text-gray-600">Your work directly shapes product direction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Positions */}
      <section className="py-16 bg-shiro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-8">Open Positions</h2>
          
          <div className="grid gap-6">
            {featuredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-shiro-black mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-shiro-red/10 text-shiro-red">
                        {job.category}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                        📍 {job.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                        🕐 {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <a
                    href={`mailto:careers@shirotechnologies.com?subject=Application: ${job.title}`}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-shiro-red hover:bg-red-700 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* More positions coming soon */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">More Positions Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're expanding rapidly and adding new roles across engineering, product, sales, and operations.
              </p>
              <a
                href="mailto:careers@shirotechnologies.com?subject=General Career Inquiry"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-shiro-black hover:bg-gray-800 transition-colors"
              >
                Send Us Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-8">Benefits & Perks</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-shiro-gray rounded-lg p-6">
              <div className="text-shiro-red font-bold mb-2">Health & Wellness</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Medical, dental, vision insurance</li>
                <li>• Mental health support</li>
                <li>• Fitness stipend</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-shiro-gray rounded-lg p-6">
              <div className="text-shiro-red font-bold mb-2">Time Off</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Flexible PTO policy</li>
                <li>• Paid holidays</li>
                <li>• Parental leave</li>
                <li>• Sabbatical options</li>
              </ul>
            </div>

            <div className="bg-shiro-gray rounded-lg p-6">
              <div className="text-shiro-red font-bold mb-2">Professional Growth</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Conference budget</li>
                <li>• SHIRO Academy access</li>
                <li>• Certification support</li>
                <li>• Mentorship programs</li>
              </ul>
            </div>

            <div className="bg-shiro-gray rounded-lg p-6">
              <div className="text-shiro-red font-bold mb-2">Work Environment</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Latest tech & tools</li>
                <li>• Remote-friendly</li>
                <li>• Modern offices</li>
                <li>• Team events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't see the perfect role? Send us your resume anyway. We're always looking for exceptional talent.
          </p>
          <a
            href="mailto:careers@shirotechnologies.com?subject=Career Opportunities"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-shiro-black bg-white hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
