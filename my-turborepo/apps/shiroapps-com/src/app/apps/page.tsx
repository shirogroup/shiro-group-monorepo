import Link from 'next/link'
import { ArrowRight, Zap, Target, Check } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apps - Free AI Career Tools | SHIRO Apps',
  description: 'Explore our free AI-powered career tools. Build ATS-optimized resumes and connect with 500+ recruiters. Start your job search today.',
  keywords: 'free AI tools, resume builder, job search, recruiter network, career apps',
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
              Free AI Career Tools
            </h1>
            <p className="text-xl text-gray-200">
              Everything you need to land your next job. Start free, upgrade when you're ready.
            </p>
          </div>
        </div>
      </section>
      
      {/* Apps Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* InstantResumeAI - Detailed */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-cta rounded-full text-white text-sm font-semibold mb-6">
                  <Zap className="h-4 w-4 mr-2" />
                  Most Popular - Free Forever
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  InstantResumeAI
                </h2>
                
                <p className="text-xl text-gray-600 mb-6">
                  Create professional, ATS-optimized resumes in minutes with our free AI resume builder.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">AI-Powered Generation</span>
                      <p className="text-sm text-gray-600">Let AI write your resume based on your experience</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">ATS Optimization</span>
                      <p className="text-sm text-gray-600">94% pass rate with applicant tracking systems</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">Professional Templates</span>
                      <p className="text-sm text-gray-600">Industry-specific designs that get noticed</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">Real-Time Suggestions</span>
                      <p className="text-sm text-gray-600">Instant feedback as you build</p>
                    </div>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/apps/instantresumeai"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-cta text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  
                  <a
                    href="https://www.instantresumeai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                  >
                    Start Free →
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">Free</div>
                  <div className="text-gray-600">1 resume, forever</div>
                </div>
                
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    AI-powered resume builder
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    ATS optimization scoring
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    Basic templates
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-gray-900 mb-1">$9.99</div>
                    <div className="text-gray-600 text-sm">per month for unlimited</div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Unlimited resumes
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      All premium templates
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      LinkedIn integration
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Priority support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* ResumeBlast - Detailed */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <div className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">$49</div>
                  <div className="text-gray-600">One-time blast</div>
                </div>
                
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    500+ recruiter network
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    AI resume optimization
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    Job matching
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-gray-900 mb-1">$29.99</div>
                    <div className="text-gray-600 text-sm">per month for continuous</div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Unlimited blasts
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Application tracking
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Success analytics
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Follow-up automation
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-cta rounded-full text-white text-sm font-semibold mb-6">
                  <Target className="h-4 w-4 mr-2" />
                  85% Success Rate
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  ResumeBlast
                </h2>
                
                <p className="text-xl text-gray-600 mb-6">
                  Connect with 500+ recruiters instantly. AI-optimized distribution to land more interviews faster.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">500+ Recruiter Network</span>
                      <p className="text-sm text-gray-600">Direct access to active hiring managers</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">AI Job Matching</span>
                      <p className="text-sm text-gray-600">Smart algorithms find your perfect opportunities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">Application Tracking</span>
                      <p className="text-sm text-gray-600">Monitor all your applications in one place</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">Success Analytics</span>
                      <p className="text-sm text-gray-600">See what's working and optimize</p>
                    </div>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/apps/resumeblast"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-cta text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  
                  <a
                    href="https://resumeblast.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                  >
                    Get Started →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bundle Pricing CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Save with Bundles
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Use both tools together and save 30%. Perfect for serious job seekers.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            View Bundle Pricing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
