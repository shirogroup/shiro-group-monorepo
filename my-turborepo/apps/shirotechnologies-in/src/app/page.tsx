import Link from 'next/link'
import { ArrowRight, Globe, Zap, Clock, Shield, TrendingDown, Users } from 'lucide-react'
import QASavingsCalculator from '@/components/QASavingsCalculator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SHIRO Technologies India - Global Delivery & Engineering Center',
  description: 'India-based offshore engineering, QA automation, and delivery capabilities for agentic AI SaaS platforms and enterprise initiatives worldwide.',
  keywords: 'offshore engineering, QA automation, India delivery center, follow-the-sun development, AI engineering',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#333333] py-20 lg:py-32 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 border border-white/20">
              <Globe className="h-4 w-4 mr-2" />
              Offshore Delivery Center
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Scale Your AI Innovation with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mt-2">
                India Engineering Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              SHIRO Technologies India delivers offshore engineering, QA automation, and 24/7 delivery capabilities—enabling you to scale agentic AI platforms with 50-70% cost savings while maintaining Silicon Valley quality standards.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">50-70%</div>
                <div className="text-sm text-gray-400">Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Follow-the-Sun</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">12hr</div>
                <div className="text-sm text-gray-400">Time Zone Advantage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400">SHIRO Standards</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#CC0000] to-[#990000] text-white rounded-lg font-semibold transition-all text-lg hover:shadow-2xl hover:shadow-red-500/20"
              >
                Contact India Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/capabilities"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all text-lg border border-white/30"
              >
                View Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p className="text-xl">
                <strong>SHIRO Technologies Pvt Ltd</strong> is the India-registered operating entity of SHIRO Group—your offshore execution arm for AI-powered SaaS development.
              </p>
              
              <p>
                We function as the offshore engineering and delivery center, focused on <strong>execution excellence</strong>, <strong>margin discipline</strong>, and <strong>operational velocity</strong> that enables SHIRO Group's portfolio companies to scale rapidly while maintaining capital efficiency.
              </p>
              
              <p>
                This entity holds no independent product ownership and operates under unified SHIRO Group governance, quality standards, and security frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade delivery infrastructure for scaling AI platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI-Assisted QA Automation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous testing and quality assurance powered by AI—achieving 80% automation coverage with zero-drift test maintenance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Offshore Engineering Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Full-stack engineering for SHIRO Group SaaS platforms—Next.js, React, Node.js, Python, AI/ML integration, and cloud infrastructure.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Follow-the-Sun Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                24/7 execution with 12-hour time zone advantage—work progresses continuously, accelerating your time-to-market by 40%.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                DevOps & Cloud Infrastructure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Infrastructure automation on AWS, GCP, Azure—Terraform, Kubernetes, CI/CD pipelines, and security hardening.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <TrendingDown className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cost-Efficient Scaling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                50-70% cost reduction vs. US/EU rates while maintaining quality—optimal for capital-efficient SaaS scaling.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Dedicated Team Model
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build your extended team in India—fully integrated with your processes, tools, and culture for seamless collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strategic Role */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Strategic Role for SHIRO Group
            </h2>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
              <p className="text-lg text-gray-700 mb-6 font-semibold">
                The India center enables SHIRO Group to:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1 text-xl">▸</span>
                  <span className="text-gray-700 text-lg"><strong>Scale agentic AI platforms with capital efficiency</strong> — Build faster while burning less cash</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1 text-xl">▸</span>
                  <span className="text-gray-700 text-lg"><strong>Maintain high margins and low burn</strong> — 50-70% cost reduction drives profitability earlier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1 text-xl">▸</span>
                  <span className="text-gray-700 text-lg"><strong>Deliver continuous global execution</strong> — Follow-the-sun model eliminates idle time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1 text-xl">▸</span>
                  <span className="text-gray-700 text-lg"><strong>Build a defensible cost and velocity moat</strong> — Speed + efficiency = competitive advantage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Governance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Governance & Standards
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">SHIRO Group Alignment</h3>
                <p className="text-gray-600">Wholly aligned with SHIRO Group standards, processes, and strategic direction</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">IP Ownership</h3>
                <p className="text-gray-600">No independent IP ownership; all work product owned by SHIRO Group entities</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Services Framework</h3>
                <p className="text-gray-600">Inter-company services agreements govern delivery, pricing, and operations</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Quality & Security</h3>
                <p className="text-gray-600">Unified security, quality, and compliance frameworks across all global entities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* QA Savings Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QASavingsCalculator />
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Contact India Center
          </h2>
          
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-xl">
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-gray-900 text-xl">SHIRO Technologies Pvt Ltd</p>
              
              <div>
                <p className="font-medium text-gray-900">Address:</p>
                <p>442, 6th Main Road, 2nd Floor</p>
                <p>Vijayanagar 1st Stage</p>
                <p>Mysuru, Karnataka 570017, India</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-900">Phone:</p>
                <p className="text-lg">(+91) 81233 71777</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-900">Email:</p>
                <a href="mailto:sales@shirotechnologies.com" className="text-[#CC0000] hover:underline text-lg">
                  sales@shirotechnologies.com
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <a
                href="https://shirotechnologies.com/products"
                className="inline-flex items-center text-gray-600 hover:text-[#CC0000] transition-colors font-medium"
              >
                View SHIRO Group Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
