import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SHIRO Apps - AI-Powered Career Tools',
  description: 'Professional AI tools for resume building, job search automation, and HR management. Start your career advancement today.',
  keywords: 'AI resume builder, job search automation, HR software, career tools, ATS optimization',
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
              AI-Powered Career Tools
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Accelerate Your Career with AI
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Professional tools powered by AI to help you create resumes, land interviews, and manage your career growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/apps"
                className="inline-flex items-center px-8 py-4 bg-gradient-cta text-white rounded-lg font-semibold hover:shadow-2xl transition-all text-lg group"
              >
                Explore Apps
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                20,000+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Active Users
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                60,000+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Resumes Created
              </div>
            </div>
            
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                94%
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Apps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI-Powered Apps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional tools designed to help you succeed in your career
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* InstantResumeAI */}
            <Link
              href="/instantresumeai"
              className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-shiro-red hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-shiro-red transition-colors">
                InstantResumeAI
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Create ATS-optimized resumes in minutes with AI-powered generation and professional templates.
              </p>
              
              <div className="flex items-center text-shiro-red font-semibold group-hover:translate-x-2 transition-transform">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Starting at</span>
                  <span className="text-2xl font-bold text-gray-900">Free</span>
                </div>
              </div>
            </Link>
            
            {/* ResumeBlast */}
            <Link
              href="/resumeblast"
              className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-shiro-red hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-shiro-red transition-colors">
                ResumeBlast
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Distribute your resume to 500+ recruiters instantly with AI optimization and job matching.
              </p>
              
              <div className="flex items-center text-shiro-red font-semibold group-hover:translate-x-2 transition-transform">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Starting at</span>
                  <span className="text-2xl font-bold text-gray-900">$49</span>
                </div>
              </div>
            </Link>
            
            {/* CloudSourceHRM */}
            <Link
              href="/cloudsourcehrm"
              className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-shiro-red hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-shiro-red transition-colors">
                CloudSourceHRM
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automate your HR operations with cloud-based recruiting, job posting, and bulk email services.
              </p>
              
              <div className="flex items-center text-shiro-red font-semibold group-hover:translate-x-2 transition-transform">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Starting at</span>
                  <span className="text-lg font-bold text-gray-900">Contact</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/apps"
              className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all text-lg"
            >
              View All Apps
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose SHIRO Apps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SHIRO Apps?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade AI tools designed for your career success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI-Powered
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage cutting-edge AI technology to create professional resumes and optimize your job search.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Trusted by Thousands
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join 20,000+ professionals who have accelerated their careers with our AI tools.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy to Use
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Simple, intuitive interfaces designed for professionals at every career stage.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Career?
          </h2>
          
          <p className="text-xl text-gray-200 mb-8">
            Start using our AI-powered tools today. Free to try, easy to upgrade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/apps"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-2xl transition-all text-lg"
            >
              Get Started Free
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
