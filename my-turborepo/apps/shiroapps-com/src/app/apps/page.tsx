import Link from 'next/link'
import { ArrowRight, Zap, Users, Sparkles, Check } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apps - AI-Powered Career Tools | SHIRO Apps',
  description: 'Explore our suite of AI-powered career tools including resume builders, job search automation, and HR management software.',
  keywords: 'AI apps, resume builder, job search, HR software, career tools',
}

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Career Apps
            </h1>
            <p className="text-xl text-gray-200">
              Professional tools to accelerate your career growth
            </p>
          </div>
        </div>
      </section>
      
      {/* Apps Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* InstantResumeAI - Featured */}
          <div className="mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-cta rounded-full text-white text-sm font-semibold mb-6">
                  <Zap className="h-4 w-4 mr-2" />
                  Most Popular
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  InstantResumeAI
                </h2>
                
                <p className="text-xl text-gray-600 mb-6">
                  Create ATS-optimized resumes in minutes with AI-powered generation and professional templates.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">AI-powered resume generation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">ATS optimization scoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Professional templates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Real-time suggestions</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/instantresumeai"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-cta text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  
                  <a
                    href="https://www.instantresumeai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                  >
                    Try Free
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">Free</div>
                  <div className="text-gray-600">Start building your resume</div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-gray-900 mb-1">$9.99</div>
                    <div className="text-gray-600">per month for Pro</div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Unlimited resumes</li>
                    <li>✓ All templates</li>
                    <li>✓ Premium features</li>
                    <li>✓ Priority support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* ResumeBlast & CloudSourceHRM */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* ResumeBlast */}
            <div className="p-8 rounded-2xl border-2 border-gray-200 hover:border-shiro-red hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-cta rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ResumeBlast
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Distribute your resume to 500+ recruiters instantly with AI optimization and automated job matching.
              </p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-start text-sm">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">500+ recruiter network</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">AI resume optimization</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Job matching algorithm</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Application tracking</span>
                </li>
              </ul>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-gray-600">Starting at</span>
                  <span className="text-3xl font-bold text-gray-900">$49</span>
                </div>
                <div className="text-sm text-gray-500">One-time blast or monthly subscription</div>
              </div>
              
              <Link
                href="/resumeblast"
                className="block w-full text-center px-6 py-3 bg-gradient-cta text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Learn More
              </Link>
            </div>
            
            {/* CloudSourceHRM */}
            <div className="p-8 rounded-2xl border-2 border-gray-200 hover:border-shiro-red hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-cta rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                CloudSourceHRM
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automate your HR operations with cloud-based recruiting, job posting, and comprehensive HR management.
              </p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-start text-sm">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automated job posting</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Resume hotlist & RPO</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bulk email (no SMTP limits)</span>
                </li>
                <li className="flex items-start text-sm">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1,000+ partner network</span>
                </li>
              </ul>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-gray-600">Pricing</span>
                  <span className="text-xl font-bold text-gray-900">Contact Us</span>
                </div>
                <div className="text-sm text-gray-500">Custom enterprise plans available</div>
              </div>
              
              <Link
                href="/cloudsourcehrm"
                className="block w-full text-center px-6 py-3 bg-gradient-cta text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not sure which app is right for you?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            All our apps offer free trials. Start with any app and upgrade when you're ready.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center px-8 py-4 bg-gradient-cta text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Compare Pricing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
