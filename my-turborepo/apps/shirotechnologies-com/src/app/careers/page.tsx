import Link from 'next/link';

export const metadata = {
  title: 'Careers | SHIRO Technologies - Join Our Team',
  description: 'Explore career opportunities at SHIRO Technologies. Join our global team building the future of AI-powered business transformation.',
};

export default function CareersPage() {
  // Job listings with detailed descriptions
  const jobListings = [
    {
      id: 'senior-full-stack-engineer',
      title: 'Senior Full Stack Engineer',
      location: 'Remote (USA)',
      type: 'Full-time',
      category: 'Engineering',
      description: 'Build scalable SaaS applications using React, Node.js, and Python. Work on our AI-powered platforms serving thousands of users.',
      requirements: [
        '5+ years of full-stack development experience',
        'Expert in React, Node.js, and modern JavaScript/TypeScript',
        'Experience with Next.js, PostgreSQL, and cloud platforms (AWS/Vercel)',
        'Strong understanding of RESTful APIs and microservices',
        'Experience with AI/ML integration is a plus',
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS']
    },
    {
      id: 'ai-transformation-architect',
      title: 'AI Transformation Architect',
      location: 'Remote (USA/Canada)',
      type: 'Full-time',
      category: 'Engineering',
      description: 'Design and implement agentic AI solutions for enterprise clients. Lead technical discovery and architecture for AI transformation projects.',
      requirements: [
        '7+ years in software architecture or technical consulting',
        'Deep understanding of AI/ML, LLMs, and agentic systems',
        'Experience with LangChain, OpenAI, Anthropic APIs',
        'Strong consulting and client-facing skills',
        'Track record of successful enterprise implementations',
      ],
      techStack: ['Python', 'LangChain', 'OpenAI', 'Anthropic', 'AWS', 'Azure']
    },
    {
      id: 'qa-automation-engineer',
      title: 'QA Automation Engineer',
      location: 'Mysore, India / Remote',
      type: 'Full-time',
      category: 'Quality Assurance',
      description: 'Build and maintain automated testing frameworks for our SaaS products. Ensure high quality and reliability across all platforms.',
      requirements: [
        '3+ years of QA automation experience',
        'Expert in Selenium, Cypress, or Playwright',
        'Experience with CI/CD pipelines (GitHub Actions, Jenkins)',
        'Knowledge of API testing (Postman, Rest-Assured)',
        'Understanding of Agile/Scrum methodologies',
      ],
      techStack: ['Selenium', 'Cypress', 'Playwright', 'Jest', 'GitHub Actions']
    },
    {
      id: 'product-manager-saas',
      title: 'Product Manager - SaaS',
      location: 'Remote (USA)',
      type: 'Full-time',
      category: 'Product',
      description: 'Own the product roadmap for one of our AI-powered SaaS platforms. Work directly with customers to define and prioritize features.',
      requirements: [
        '4+ years of product management experience in SaaS',
        'Strong understanding of SaaS metrics (MRR, churn, NRR)',
        'Experience with AI/ML products is a plus',
        'Data-driven decision maker with strong analytical skills',
        'Excellent communication and stakeholder management',
      ],
      techStack: ['Product Strategy', 'User Research', 'Analytics', 'Roadmapping']
    },
    {
      id: 'solutions-architect',
      title: 'Solutions Architect',
      location: 'Remote (USA/India)',
      type: 'Full-time',
      category: 'Engineering',
      description: 'Design technical solutions for enterprise clients. Bridge the gap between business requirements and technical implementation.',
      requirements: [
        '5+ years as solutions architect or technical lead',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of system integration and APIs',
        'Excellent presentation and documentation skills',
        'Ability to work across multiple time zones',
      ],
      techStack: ['AWS', 'Azure', 'System Design', 'APIs', 'Microservices']
    },
    {
      id: 'business-analyst',
      title: 'Business Analyst',
      location: 'Addison, TX / Remote',
      type: 'Full-time',
      category: 'Operations',
      description: 'Analyze business processes and requirements. Work with clients to understand needs and translate them into technical specifications.',
      requirements: [
        '3+ years of business analysis experience',
        'Strong requirements gathering and documentation skills',
        'Experience with process mapping and workflow design',
        'Familiarity with Agile methodologies',
        'Excellent communication and interpersonal skills',
      ],
      techStack: ['Requirements Analysis', 'Process Mapping', 'JIRA', 'Confluence']
    },
    {
      id: 'software-developer-chrm',
      title: 'Software Developer – CHRM Platform',
      location: 'Addison, TX',
      type: 'Full-time',
      category: 'Engineering',
      description: 'We are seeking a Junior to Mid-Level Software Developer to support ongoing development and digital transformation initiatives for CHRM, our cloud-based HR management platform. This role works under the direct supervision of a Manager and collaborates with senior developers and cross-functional teams. The position is ideal for someone who wants to grow their technical skills while contributing to meaningful cloud, automation, and application development projects.',
      overview: 'The Software Developer will assist in enhancing CHRM and related digital solutions by supporting application development, cloud integration, automation efforts, and UI/UX improvements. Work will be performed following established processes, with tasks assigned and reviewed by a supervising manager. No independent decision-making, leadership responsibilities, or team-management duties are involved.',
      responsibilities: [
        {
          category: 'Application Development & Support',
          items: [
            'Assist in updating and modifying software features to support new business needs, following SDLC practices (Agile and Waterfall) under manager guidance',
            'Support development and testing of applications to improve performance, reliability, and user experience',
            'Help troubleshoot and resolve application issues to maintain system stability',
          ]
        },
        {
          category: 'Cloud & Digital Transformation Support',
          items: [
            'Contribute to cloud-related tasks such as basic configuration, monitoring, and supporting cloud migration activities for CHRM',
            'Assist in implementing updates and integrations across platforms such as Azure, AWS, and Google Cloud',
          ]
        },
        {
          category: 'AI, Automation & Integration Assistance',
          items: [
            'Support senior team members in building Proof of Concepts (POCs) involving AI/ML, NLP, and automation technologies',
            'Assist in evaluating tools and helping implement approved automation solutions, including RPA',
          ]
        },
        {
          category: 'Front-End & UI Support',
          items: [
            'Contribute to developing responsive UI components and improving user journeys under direction from senior staff',
            'Assist in multi-tier web application development tasks',
          ]
        },
        {
          category: 'DevOps & Quality Assurance',
          items: [
            'Support CI/CD activities such as automated builds, deployments, and testing',
            'Help debug, test, and enhance existing applications as assigned',
          ]
        },
        {
          category: 'Documentation & Collaboration',
          items: [
            'Assist in gathering requirements and preparing functional or technical notes under manager supervision',
            'Help create training materials, user guides, and technical documentation',
            'Collaborate with cross-functional teams to test and validate solutions',
          ]
        },
      ],
      requirements: [
        'Experience with all tools is not required; these represent the technologies used across our projects',
      ],
      techStack: [
        'Ruby on Rails',
        'C#',
        '.NET',
        'Java',
        'C++',
        'SQL',
        'Microsoft Azure',
        'AWS',
        'Google Cloud',
        'JavaScript',
        'jQuery',
        'HTML',
        'CSS',
        'Bootstrap',
        'RESTful APIs',
        'JSON',
        'RPA tools',
        'AI/ML',
        'NLP',
        'Jenkins',
        'Docker',
        'Kubernetes',
      ],
      techCategories: [
        { name: 'Programming & Frameworks', items: ['Ruby on Rails', 'C#', '.NET', 'Java', 'C++', 'SQL'] },
        { name: 'Cloud Platforms', items: ['Microsoft Azure', 'AWS', 'Google Cloud'] },
        { name: 'Web & Front-End', items: ['JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap'] },
        { name: 'APIs & Integration', items: ['RESTful APIs', 'JSON', 'Web Services'] },
        { name: 'Automation & AI', items: ['RPA tools', 'AI/ML', 'NLP'] },
        { name: 'DevOps', items: ['Jenkins', 'Docker', 'Kubernetes'] },
        { name: 'Testing & Debugging', items: ['Automated UI testing tools', 'debugging utilities'] },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching investors page format */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the AI Revolution
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Build the future of business with agentic AI technology. Work with a global team 
              on products that transform how companies operate.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#open-positions"
                className="bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Open Positions
              </a>
              <a 
                href="mailto:careers@shirotechnologies.com"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats - Matching investors page style */}
      <section className="py-12 bg-shiro-gray border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-shiro-black mb-2">24</div>
              <div className="text-gray-600">Years in Business</div>
              <div className="text-sm text-gray-500 mt-1">Since 2001</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-shiro-black mb-2">3</div>
              <div className="text-gray-600">Global Locations</div>
              <div className="text-sm text-gray-500 mt-1">USA, Canada, India</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-shiro-black mb-2">7</div>
              <div className="text-gray-600">SaaS Products</div>
              <div className="text-sm text-gray-500 mt-1">3 Live, 4 in Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-shiro-black mb-2">AI-First</div>
              <div className="text-gray-600">Technology Stack</div>
              <div className="text-sm text-gray-500 mt-1">Agentic Architecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join SHIRO */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-shiro-black mb-4">Why Join SHIRO Technologies</h2>
            <p className="text-lg text-gray-700">
              Join a team that's transforming businesses with agentic AI. Work on products used by thousands, 
              with global impact and cutting-edge technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Innovation First</h3>
              <p className="text-gray-600">
                Work on cutting-edge AI and automation technologies. Build products that push the boundaries 
                of what's possible with agentic AI systems.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌍 Global Team</h3>
              <p className="text-gray-600">
                Collaborate with talented professionals across USA, Canada, and India. Experience diverse 
                perspectives and cultures while building world-class products.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📈 Fast Growth</h3>
              <p className="text-gray-600">
                Join a rapidly scaling SaaS portfolio. Your contributions directly impact product direction 
                and company success.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Real Impact</h3>
              <p className="text-gray-600">
                Build products that transform how businesses operate. See your work make a difference for 
                thousands of users worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-shiro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-4">Open Positions</h2>
          <p className="text-gray-600 mb-8">
            We're actively hiring across engineering, product, and operations. 
            All positions offer competitive compensation and full benefits.
          </p>
          
          <div className="grid gap-6">
            {jobListings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-shiro-black mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-shiro-red/10 text-shiro-red font-medium">
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
                </div>

                {/* Position Overview for CHRM role */}
                {job.overview && (
                  <div className="mb-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Position Overview</h4>
                    <p className="text-sm text-gray-600">{job.overview}</p>
                  </div>
                )}

                {/* Responsibilities for CHRM role */}
                {job.responsibilities && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                    <div className="space-y-3">
                      {job.responsibilities.map((resp, idx) => (
                        <div key={idx} className="border-l-4 border-shiro-red pl-4">
                          <div className="font-semibold text-sm text-gray-900 mb-1">
                            {resp.category}
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {resp.items.map((item, itemIdx) => (
                              <li key={itemIdx}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Standard Requirements */}
                {job.requirements && !job.responsibilities && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack with Categories for CHRM role */}
                {job.techCategories ? (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Project Environment (Tools & Technologies You Will Work With)
                    </h4>
                    <p className="text-xs text-gray-500 mb-3 italic">
                      Experience with all tools is not required; these represent the technologies used across our projects.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {job.techCategories.map((category, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded">
                          <div className="font-semibold text-xs text-gray-700 mb-2">
                            {category.name}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {category.items.map((tech, techIdx) => (
                              <span key={techIdx} className="px-2 py-1 bg-white text-gray-700 text-xs rounded border border-gray-200">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Standard Tech Stack */
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Apply Button */}
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={`mailto:careers@shirotechnologies.com?subject=Application: ${job.title}&body=Position: ${job.title}%0D%0ALocation: ${job.location}%0D%0A%0D%0APlease attach your resume and cover letter.`}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-shiro-red hover:bg-red-700 transition-colors"
                  >
                    Apply for this Position
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-shiro-black mb-8">Benefits & Perks</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-shiro-red font-bold mb-2">Health & Wellness</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Medical, dental, vision insurance</li>
                <li>• Mental health support</li>
                <li>• Fitness stipend</li>
                <li>• Wellness programs</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-shiro-red font-bold mb-2">Time Off</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Flexible PTO policy</li>
                <li>• Paid holidays</li>
                <li>• Parental leave</li>
                <li>• Sabbatical options</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-shiro-red font-bold mb-2">Professional Growth</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Conference budget</li>
                <li>• Learning resources</li>
                <li>• Certification support</li>
                <li>• Mentorship programs</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
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

      {/* Don't See Perfect Role */}
      <section className="py-16 bg-shiro-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
            <h3 className="text-2xl font-bold mb-4">Don't See the Perfect Role?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're constantly expanding and adding new positions. If you're passionate about AI and want to 
              work on cutting-edge technology, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@shirotechnologies.com?subject=General Career Inquiry"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-shiro-black hover:bg-gray-800 transition-colors"
            >
              Send Us Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* CTA - Matching investors page format */}
      <section className="py-16 gradient-cta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in building the next generation of agentic AI SaaS platforms. 
            Request our investor deck and financial model for detailed analysis.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#open-positions"
              className="bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View All Positions
            </a>
            <a
              href="mailto:careers@shirotechnologies.com?subject=Career Opportunities"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20"
            >
              Contact HR Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
