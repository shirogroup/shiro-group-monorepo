import ServiceCard from '@/components/ServiceCard'

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Custom AI Development Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We built all the apps you see on SHIRO Apps. Now we can build yours.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Free Product Assessment"
              price="Free"
              description="1-hour consultation to discuss your idea"
              features={[
                'Tech stack recommendations',
                'Budget & timeline estimate',
                '10-page detailed report',
                '30-min follow-up call'
              ]}
              ctaText="Schedule Assessment"
              ctaLink="/contact"
            />
            <ServiceCard
              title="Custom Development"
              price="Starting at $50K"
              description="Full-service product development"
              features={[
                'SaaS platforms',
                'AI/ML applications',
                'Mobile apps',
                'API development',
                '8-16 week delivery'
              ]}
              ctaText="Get Quote"
              ctaLink="/contact"
            />
            <ServiceCard
              title="Deployment & DevOps"
              price="$5K - $15K"
              description="Production-ready infrastructure"
              features={[
                'Cloud infrastructure setup',
                'CI/CD pipelines',
                'SSL & security',
                'Monitoring & alerts'
              ]}
              ctaText="Learn More"
              ctaLink="/contact"
            />
            <ServiceCard
              title="Maintenance & Support"
              price="$500 - $5K/month"
              description="Ongoing support and enhancements"
              features={[
                'Bug fixes & updates',
                'Feature additions',
                '24/7 monitoring',
                'Priority support'
              ]}
              ctaText="Get Started"
              ctaLink="/contact"
            />
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Discovery (1-2 weeks)</h3>
                <p className="text-gray-600">Requirements gathering, technical architecture, project roadmap</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Development (8-16 weeks)</h3>
                <p className="text-gray-600">Agile sprints, weekly demos, continuous feedback</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Testing (2-4 weeks)</h3>
                <p className="text-gray-600">QA automation, security testing, performance optimization</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Launch (1 week)</h3>
                <p className="text-gray-600">Production deployment, documentation, team training</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Product?</h2>
          <p className="text-xl text-gray-600 mb-8">Start with a free assessment call</p>
          <a href="/contact" className="gradient-bg text-white px-12 py-4 rounded-lg font-semibold hover:opacity-90 inline-block">
            Schedule Free Assessment
          </a>
        </div>
      </div>
    </div>
  )
}
