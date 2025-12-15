import Link from 'next/link'
import { ArrowRight, Shield, MapPin, FileCheck, Globe, Users, TrendingUp } from 'lucide-react'
import QASavingsCalculator from '@/components/QASavingsCalculator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SHIRO Technologies Canada - Nearshore Operations & Compliance Hub',
  description: 'Canadian operating entity providing nearshore coordination, regulatory alignment, and enterprise trust for agentic AI SaaS delivery across North America.',
  keywords: 'nearshore operations, Canadian compliance, PIPEDA, data residency, enterprise trust, North America delivery',
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
              <MapPin className="h-4 w-4 mr-2" />
              Nearshore Coordination Hub
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Enterprise Trust & Regulatory Alignment for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 mt-2">
                North American AI Delivery
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              SHIRO Technologies Canada serves as your nearshore coordination and compliance hub—reducing execution risk, ensuring data residency requirements, and enhancing enterprise confidence for AI platform delivery across regulated North American markets.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">PIPEDA</div>
                <div className="text-sm text-gray-400">Privacy Aligned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">EST/PST</div>
                <div className="text-sm text-gray-400">Time Zone Match</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Bilingual</div>
                <div className="text-sm text-gray-400">EN / FR Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">G7</div>
                <div className="text-sm text-gray-400">Trusted Jurisdiction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#CC0000] to-[#990000] text-white rounded-lg font-semibold transition-all text-lg hover:shadow-2xl hover:shadow-red-500/20"
              >
                Contact Canada Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/compliance"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all text-lg border border-white/30"
              >
                Compliance Focus
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
                <strong>SHIRO Technologies Private Limited / Les Technologies SHIRO</strong> is the Canada-registered entity of SHIRO Group—your nearshore coordination and compliance hub for North American AI delivery.
              </p>
              
              <p>
                We serve as the nearshore coordination center, focused on <strong>reducing execution risk</strong>, <strong>enhancing enterprise confidence</strong>, and providing <strong>regulatory alignment</strong> for SHIRO's AI platforms and transformation programs across regulated industries.
              </p>
              
              <p>
                This entity provides the trusted North American presence that large organizations and institutional investors require when engaging global delivery teams.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Functions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Functions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nearshore coordination and enterprise trust infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Nearshore Delivery Oversight
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Program coordination and delivery management for North American operations—ensuring time zone alignment and cultural fit.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Enterprise Onboarding & Alignment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Operational alignment and client-facing governance for enterprise initiatives—reducing procurement friction and risk concerns.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Compliance & Data Residency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Canadian data residency options and regulatory alignment for organizations with strict data sovereignty requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Regulated Industries Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Client-facing governance for highly regulated market requirements—financial services, healthcare, government, and public sector.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Bilingual Capabilities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                English and French language support for Canadian markets—Quebec operations, federal contracts, and bilingual documentation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CC0000] to-[#990000] rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Investor & Enterprise Confidence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                G7 jurisdiction presence enhances credibility with large organizations, institutional investors, and risk-averse buyers.
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
                Canada strengthens SHIRO Group by:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1 text-xl">▸</span>
                  <span className="text-gray-700 text-lg"><strong>Providing a trusted North American jurisdiction</strong> — G7 presence reduces geopolitical risk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1 text-xl">▸</span>
                  <span className="text-gray-700 text-lg"><strong>Supporting enterprise and regulated market requirements</strong> — Compliance infrastructure for risk-averse buyers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1 text-xl">▸</span>
                  <span className="text-gray-700 text-lg"><strong>Reducing data residency and sovereignty concerns</strong> — Canadian hosting options for strict requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1 text-xl">▸</span>
                  <span className="text-gray-700 text-lg"><strong>Enhancing credibility with institutional investors</strong> — North American entity increases investment appeal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Compliance Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Compliance Focus
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Canadian Privacy Standards</h3>
                <p className="text-gray-600">Awareness of Canadian privacy expectations with PIPEDA-aligned practices and data handling protocols</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Enterprise Security Standards</h3>
                <p className="text-gray-600">Enterprise-grade security standards for sensitive operations, audit trails, and access controls</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 md:col-span-2">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Regulated Industry Readiness</h3>
                <p className="text-gray-600">Prepared for public sector and regulated industry requirements including financial services, healthcare, and government contracts</p>
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
            Contact Canada Center
          </h2>
          
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-xl">
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-gray-900 text-xl">
                SHIRO Technologies Private Limited<br/>
                Les Technologies SHIRO
              </p>
              
              <div>
                <p className="font-medium text-gray-900">Email:</p>
                <a href="mailto:sales@shirotechnologies.com" className="text-[#CC0000] hover:underline text-lg">
                  sales@shirotechnologies.com
                </a>
              </div>
              
              <p className="text-sm text-gray-500 italic pt-4 border-t border-gray-200">
                Physical office address to be added when available
              </p>
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
