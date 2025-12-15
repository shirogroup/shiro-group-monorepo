import Link from 'next/link'
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SHIRO Apps - AI-Powered Career Tools for Job Seekers',
  description: 'Free AI tools for resume building and job search. Create ATS-optimized resumes and distribute to 500+ recruiters. Start your job search today.',
  keywords: 'AI resume builder, job search tools, ATS optimization, resume distribution, career tools, free resume builder',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Free AI Career Tools
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Land Your Dream Job with AI
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Free AI-powered tools to create perfect resumes and connect with hundreds of recruiters instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/apps"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-2xl transition-all text-lg group"
              >
                Explore Free Tools
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all text-lg border border-white/30"
              >
                View Pricing
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                20K+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Active Users
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                60K+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Resumes Created
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                500+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Recruiters
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                94%
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                ATS Pass Rate
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Free AI Tools for Your Job Search
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free, upgrade when you need more. No credit card required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* InstantResumeAI */}
            <Link
              href="/apps/instantresumeai"
              className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-shiro-red hover:shadow-2xl transition-all bg-white"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-shiro-red transition-colors">
                InstantResumeAI
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Create ATS-optimized resumes in minutes. Free forever with premium templates available.
              </p>
              
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  AI-powered generation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  ATS optimization
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Professional templates
                </li>
              </ul>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <span className="text-2xl font-bold text-gray-900">Free</span>
                <div className="flex items-center text-shiro-red font-semibold group-hover:translate-x-2 transition-transform">
                  Try Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
            
            {/* ResumeBlast */}
            <Link
              href="/apps/resumeblast"
              className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-shiro-red hover:shadow-2xl transition-all bg-white"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-shiro-red transition-colors">
                ResumeBlast
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with 500+ recruiters instantly. AI-optimized distribution to land more interviews.
              </p>
              
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  500+ recruiter network
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Automated matching
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  Application tracking
                </li>
              </ul>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <span className="text-2xl font-bold text-gray-900">$49</span>
                <div className="flex items-center text-shiro-red font-semibold group-hover:translate-x-2 transition-transform">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/apps"
              className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all text-lg"
            >
              View All Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Hired in 3 Simple Steps
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Create Your Resume
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Use our free AI resume builder to create an ATS-optimized resume in minutes.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Blast to Recruiters
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Distribute your resume to 500+ recruiters with one click. AI matches you to opportunities.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Get Interviews
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track applications and get noticed by hiring managers. Land your dream job faster.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Land Your Dream Job?
          </h2>
          
          <p className="text-xl text-gray-200 mb-8">
            Join 20,000+ job seekers using our free AI tools to get hired faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/apps"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-2xl transition-all text-lg"
            >
              Start Free Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              href="/pricing"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all text-lg border border-white/30"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
