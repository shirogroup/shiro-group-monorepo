import Link from 'next/link';
import { Briefcase, MapPin, Clock, Calendar, Wrench } from 'lucide-react';

export const metadata = {
  title: 'Careers | SHIRO Technologies - Join Our Team',
  description: 'Join SHIRO Technologies and help build the future of AI transformation. Work on cutting-edge agentic AI projects with a global team.',
};

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote (USA)',
    type: 'Full-time',
    postedDate: '2025-06-15',
    description: 'Build scalable SaaS platforms with Next.js, React, and modern cloud infrastructure. Lead technical architecture decisions and mentor junior developers.',
    requirements: [
      'Design and implement RESTful APIs and microservices architecture',
      'Build responsive, performant web applications using React and Next.js',
      'Optimize database queries and implement caching strategies',
      'Write comprehensive unit and integration tests',
      'Conduct code reviews and maintain coding standards',
      'Troubleshoot production issues and implement monitoring solutions',
    ],
    tools: [
      'Next.js 14+',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'AWS/GCP/Azure',
      'Docker',
      'Git/GitHub',
      'Jest/Cypress',
    ],
  },
  {
    id: 2,
    title: 'AI Transformation Architect',
    department: 'AI Transformation',
    location: 'Remote (USA/Canada)',
    type: 'Full-time',
    postedDate: '2025-07-22',
    description: 'Design and implement enterprise agentic AI solutions for Fortune 500 clients. Lead AI strategy sessions and translate business requirements into technical solutions.',
    requirements: [
      'Conduct AI readiness assessments and develop transformation roadmaps',
      'Design multiagent orchestration architectures using LangChain',
      'Implement custom AI agents for specific business processes',
      'Integrate AI solutions with existing enterprise systems',
      'Present technical solutions to C-level executives',
      'Mentor client teams on AI best practices',
    ],
    tools: [
      'LangChain',
      'OpenAI API',
      'Anthropic Claude API',
      'Python',
      'Vector Databases (Pinecone/Weaviate)',
      'Azure OpenAI',
      'Prompt Engineering Tools',
      'Jupyter Notebooks',
    ],
  },
  {
    id: 3,
    title: 'QA Automation Engineer',
    department: 'Quality Assurance',
    location: 'Mysore, India / Remote',
    type: 'Full-time',
    postedDate: '2025-03-10',
    description: 'Build comprehensive automated testing frameworks for our SaaS products. Implement CI/CD pipelines and ensure code quality across all releases.',
    requirements: [
      'Design and implement automated test frameworks from scratch',
      'Write end-to-end tests for web and mobile applications',
      'Integrate automated tests into CI/CD pipelines',
      'Perform load testing and identify performance bottlenecks',
      'Document test cases and maintain test data',
      'Collaborate with developers to resolve bugs efficiently',
    ],
    tools: [
      'Selenium',
      'Cypress',
      'Playwright',
      'Jest',
      'Jenkins/GitHub Actions',
      'Postman',
      'JMeter',
      'TestRail',
      'SQL',
    ],
  },
  {
    id: 4,
    title: 'Product Manager - SaaS',
    department: 'Product',
    location: 'Remote (USA)',
    type: 'Full-time',
    postedDate: '2025-08-05',
    description: 'Drive product strategy and roadmap for our growing portfolio of AI-powered SaaS platforms. Own the product lifecycle from ideation to launch.',
    requirements: [
      'Define product vision and roadmap based on market research',
      'Gather and prioritize product requirements from stakeholders',
      'Write detailed user stories and acceptance criteria',
      'Conduct user research and usability testing sessions',
      'Analyze product metrics and make data-driven decisions',
      'Coordinate with engineering, design, and marketing teams',
    ],
    tools: [
      'Jira/Linear',
      'Figma',
      'Google Analytics',
      'Mixpanel',
      'ProductBoard',
      'Miro',
      'SQL for data analysis',
      'Notion/Confluence',
    ],
  },
  {
    id: 5,
    title: 'Solutions Architect',
    department: 'Solutions',
    location: 'Remote (USA/India)',
    type: 'Full-time',
    postedDate: '2025-04-18',
    description: 'Partner with clients to design and implement custom AI automation solutions. Create architectural blueprints and guide implementation teams.',
    requirements: [
      'Design scalable cloud architectures for enterprise applications',
      'Evaluate and recommend technology stacks for client projects',
      'Create technical documentation and architecture diagrams',
      'Conduct proof-of-concept implementations',
      'Troubleshoot complex technical issues across the stack',
      'Present solutions to technical and non-technical stakeholders',
    ],
    tools: [
      'AWS/Azure/GCP',
      'Kubernetes',
      'Terraform',
      'Docker',
      'Microservices',
      'API Gateway',
      'Message Queues (RabbitMQ/Kafka)',
      'Lucidchart/Draw.io',
    ],
  },
  {
    id: 6,
    title: 'Business Analyst',
    department: 'Business Analysis',
    location: 'Addison, TX / Remote',
    type: 'Full-time',
    postedDate: '2025-02-28',
    description: 'Bridge technical and business teams to deliver data-driven insights and requirements. Translate business needs into actionable technical specifications.',
    requirements: [
      'Elicit and document business requirements through stakeholder interviews',
      'Create process flow diagrams and user journey maps',
      'Write detailed functional specifications for development teams',
      'Analyze data to identify trends and business opportunities',
      'Facilitate workshops and requirements gathering sessions',
      'Validate solutions against business requirements and success criteria',
    ],
    tools: [
      'SQL',
      'Excel/Google Sheets',
      'Tableau/Power BI',
      'Jira',
      'Visio/Lucidchart',
      'Confluence',
      'Python (basic scripting)',
      'Agile tools (Scrum/Kanban)',
    ],
  },
  {
    id: 7,
    title: 'Software Developer – CHRM Platform',
    department: 'Engineering',
    location: 'Addison, TX',
    type: 'Full-time',
    postedDate: '2025-05-20',
    description: 'Develop and maintain our CloudSourceHRM platform, working with Ruby on Rails, .NET, and modern web technologies under supervision of experienced engineers.',
    requirements: [
      'Develop new features for HR management platform',
      'Write clean, maintainable code following team standards',
      'Debug and fix reported issues in production',
      'Participate in code reviews and learn from feedback',
      'Collaborate with QA team to ensure quality',
      'Document code changes and update technical documentation',
    ],
    tools: [
      'Ruby on Rails',
      'C#/.NET',
      'JavaScript/jQuery',
      'HTML/CSS',
      'SQL Server/PostgreSQL',
      'Git',
      'Azure/AWS',
      'REST APIs',
      'Visual Studio/VS Code',
    ],
  },
  {
    id: 8,
    title: 'Solutions Architect - Azure Specialist',
    department: 'Cloud Solutions',
    location: 'Remote (USA)',
    type: 'Full-time',
    postedDate: '2025-07-10',
    description: 'Design and implement enterprise-grade Azure cloud solutions. Lead Azure migrations and optimize existing cloud infrastructure for performance and cost.',
    requirements: [
      'Architect Azure solutions including App Services, Functions, and AKS',
      'Design Azure networking including VNets, NSGs, and ExpressRoute',
      'Implement Azure DevOps CI/CD pipelines',
      'Configure Azure Active Directory and identity management',
      'Optimize Azure costs through rightsizing and reserved instances',
      'Ensure security compliance with Azure Security Center',
    ],
    tools: [
      'Azure Portal',
      'Azure CLI/PowerShell',
      'Azure DevOps',
      'ARM Templates/Bicep',
      'Terraform',
      'Azure Monitor',
      'Azure Security Center',
      'App Service',
      'Azure Functions',
      'AKS (Azure Kubernetes)',
    ],
  },
  {
    id: 9,
    title: 'Cloud Infrastructure Engineer',
    department: 'DevOps',
    location: 'Remote (USA/India)',
    type: 'Full-time',
    postedDate: '2025-06-01',
    description: 'Build and maintain cloud infrastructure across AWS, Azure, and GCP. Implement infrastructure as code and ensure high availability of production systems.',
    requirements: [
      'Provision and manage cloud resources using Terraform/CloudFormation',
      'Implement monitoring and alerting systems',
      'Automate deployment processes and reduce manual interventions',
      'Ensure security best practices across all cloud platforms',
      'Respond to and resolve production incidents',
      'Create disaster recovery and backup strategies',
    ],
    tools: [
      'Terraform',
      'CloudFormation',
      'AWS/Azure/GCP',
      'Kubernetes',
      'Docker',
      'Prometheus/Grafana',
      'ELK Stack',
      'GitHub Actions',
      'Ansible',
      'Bash/Python scripting',
    ],
  },
  {
    id: 10,
    title: 'Senior Data Analyst',
    department: 'Analytics',
    location: 'Remote (USA)',
    type: 'Full-time',
    postedDate: '2025-03-25',
    description: 'Transform raw data into actionable insights that drive business decisions. Build dashboards and reports for executive leadership and product teams.',
    requirements: [
      'Design and build interactive dashboards in Tableau/Power BI',
      'Write complex SQL queries to extract and transform data',
      'Perform statistical analysis to identify trends and patterns',
      'Create data models and maintain data warehouse',
      'Present findings to stakeholders in clear, compelling narratives',
      'Collaborate with product teams to define success metrics',
    ],
    tools: [
      'SQL (PostgreSQL/MySQL)',
      'Tableau',
      'Power BI',
      'Python (Pandas, NumPy)',
      'Excel (advanced)',
      'Google Analytics',
      'dbt',
      'Snowflake',
      'Jupyter Notebooks',
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build the Future of AI with SHIRO
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our global team working on cutting-edge agentic AI transformation,
              SaaS innovation, and delivering value to Fortune 500 clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-shiro-red mb-2">24+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-shiro-red mb-2">3</div>
              <div className="text-gray-600">Global Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-shiro-red mb-2">10</div>
              <div className="text-gray-600">Open Positions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-shiro-red mb-2">AI-First</div>
              <div className="text-gray-600">Everything We Build</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join SHIRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Join SHIRO Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-shiro-red transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Cutting-Edge Tech</h3>
              <p className="text-gray-600">
                Work with the latest AI technologies, agentic systems, and modern SaaS architectures.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-shiro-red transition-colors">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Global Impact</h3>
              <p className="text-gray-600">
                Work with Fortune 500 clients and build products used worldwide.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-shiro-red transition-colors">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Growth Opportunity</h3>
              <p className="text-gray-600">
                Join a fast-growing company building multiple SaaS products from ground up.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-shiro-red transition-colors">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">
                Work with talented teams across USA, Canada, and India in a supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="openings" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Open Positions
          </h2>
          <div className="grid gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-shiro-red transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Posted {new Date(job.postedDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-shiro-red">✓</span> Key Responsibilities
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-shiro-red mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-shiro-red" />
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-shiro-red hover:text-white transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:careers@shirotechnologies.com?subject=Application for ${job.title}`}
                  className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Benefits & Perks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2">Health & Wellness</h3>
              <p className="text-gray-600">Comprehensive health insurance coverage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="text-lg font-semibold mb-2">Flexible Time Off</h3>
              <p className="text-gray-600">Generous PTO and flexible work arrangements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold mb-2">Learning & Development</h3>
              <p className="text-gray-600">Budget for courses, conferences, and certifications</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-lg font-semibold mb-2">Remote-Friendly</h3>
              <p className="text-gray-600">Work from anywhere with necessary equipment provided</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented people to join our team. Send us your resume
            and tell us how you can contribute to building the future of AI.
          </p>
          <a
            href="mailto:careers@shirotechnologies.com?subject=General Application"
            className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Send General Application
          </a>
        </div>
      </section>
    </div>
  );
}
