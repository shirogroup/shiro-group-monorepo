import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import ServiceCard from '@/components/ServiceCard'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Dual Purpose */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Consumer Focus */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-Powered Apps <br />
                <span className="gradient-text">That Actually Work</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                From resume builders to HR automation—explore our suite of intelligent tools designed to accelerate your career and business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#products" 
                  className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
                >
                  Explore Our Apps →
                </Link>
                <a 
                  href="#services"
                  className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-purple-50 transition-colors"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Right: B2B Focus */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">See Something You Like?</h2>
              </div>
              <p className="text-gray-600 mb-6">
                We built all these apps in-house. We can build yours too.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">AI/ML Integration</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">SaaS Development</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Cloud Deployment</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">24/7 Support</span>
                </div>
              </div>
              <Link 
                href="/contact" 
                className="block w-full gradient-bg text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
              >
                Get Free Product Assessment →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Product Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-use AI tools for individuals and businesses. Each built in-house with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              icon="📄"
              title="InstantResumeAI"
              description="Create ATS-optimized resumes in minutes with AI"
              features={['AI-powered generation', 'ATS optimization', '20+ templates']}
              pricing="Free • $9.99/month"
              href="/instantresumeai"
              techStack={['Next.js', 'OpenAI', 'Stripe']}
              timeline="6 weeks"
            />
            
            <ProductCard
              icon="💼"
              title="CloudSourceHRM"
              description="AI-powered HR management for modern teams"
              features={['Applicant tracking', '10K email credits', 'Smart analytics']}
              pricing="$50/month per user"
              href="/cloudsourcehrm"
              techStack={['Next.js', 'Supabase', 'AWS']}
              timeline="8 weeks"
            />
            
            <ProductCard
              icon="🚀"
              title="ResumeBlast"
              description="Automate your job applications with AI precision"
              features={['Smart job matching', 'Custom cover letters', 'Auto-apply']}
              pricing="$29.99/month"
              href="/resumeblast"
              techStack={['Next.js', 'AI', 'Automation']}
              timeline="6 weeks"
            />
          </div>
        </div>
      </section>

      {/* Services Overview - B2B Focus */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We Don't Just Sell Apps—We Build Them
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From idea to production, we handle it all. Full-cycle product development with AI expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon="🎯"
              title="Product Assessment"
              description="Product/market fit analysis, tech stack recommendations, budget & timeline estimates"
              price="Free consultation"
              href="/services#assessment"
            />
            
            <ServiceCard
              icon="💻"
              title="Custom Development"
              description="AI/ML-powered SaaS platforms, web & mobile apps, API development"
              price="Starting at $50K"
              href="/services#development"
            />
            
            <ServiceCard
              icon="🚀"
              title="Deployment & DevOps"
              description="Cloud infrastructure, CI/CD pipelines, monitoring & security"
              price="$5K-$15K"
              href="/services#deployment"
            />
            
            <ServiceCard
              icon="🛠️"
              title="Maintenance & Support"
              description="24/7 monitoring, bug fixes, security updates, feature enhancements"
              price="$500/month+"
              href="/services#support"
            />
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-block gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Build With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Build With SHIRO Apps?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">
                We've shipped 3 production apps. We know what works.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Stack Expertise</h3>
              <p className="text-gray-600">
                AI/ML, SaaS, Cloud, Mobile—all in-house.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cost-Effective</h3>
              <p className="text-gray-600">
                50-70% savings vs. US-only teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you want to try our apps or build your own, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#products" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Products
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Get Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
