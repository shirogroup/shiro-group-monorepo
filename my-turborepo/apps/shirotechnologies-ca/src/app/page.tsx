import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, MapPin, FileCheck, Globe } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import QASavingsCalculator from '@/components/QASavingsCalculator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SHIRO Technologies Canada - Nearshore Operations & Compliance Hub',
  description: 'Canadian operating entity providing nearshore coordination, regulatory alignment, and enterprise trust for agentic AI SaaS delivery across North America.',
  keywords: 'nearshore operations, Canadian compliance, PIPEDA, data residency, enterprise trust, North America delivery',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#333333] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              SHIRO Technologies Canada
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold">
              Nearshore Operations & Compliance Hub
            </p>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              The Canadian operating entity of SHIRO Group, providing nearshore coordination, regulatory alignment, and enterprise trust for agentic AI SaaS delivery across North America.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#CC0000] hover:bg-[#990000] text-white rounded-lg font-semibold transition-all text-lg"
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
              <p>
                SHIRO Technologies Private Limited / Les Technologies SHIRO is the Canada-registered entity of SHIRO Group.
              </p>
              
              <p>
                We serve as the nearshore coordination and compliance hub, reducing execution risk and enhancing enterprise confidence for SHIRO's AI platforms and transformation programs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Functions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Core Functions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#CC0000] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Nearshore Delivery Oversight
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Program coordination and delivery management for North American operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#CC0000] rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Enterprise Onboarding
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Operational alignment and client-facing governance for enterprise initiatives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#CC0000] rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Compliance Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Data residency and regulatory alignment for Canadian requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#CC0000] rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Regulated Industries
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Client-facing governance for highly regulated market requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-[#CC0000] rounded-lg flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Bilingual Capabilities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                English and French language support for Canadian markets.
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
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <p className="text-lg text-gray-700 mb-6">
                Canada strengthens SHIRO Group by:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1">▸</span>
                  <span className="text-gray-700">Providing a trusted North American jurisdiction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1">▸</span>
                  <span className="text-gray-700">Supporting enterprise and regulated market requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1">▸</span>
                  <span className="text-gray-700">Reducing data residency and geopolitical risk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#CC0000] mr-3 mt-1">▸</span>
                  <span className="text-gray-700">Enhancing credibility with large organizations and institutional investors</span>
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
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Canadian Privacy Standards</h3>
                <p className="text-gray-600 text-sm">Awareness of Canadian privacy expectations with PIPEDA-aligned practices</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600 text-sm">Enterprise-grade security standards for sensitive operations</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 md:col-span-2">
                <h3 className="font-semibold text-gray-900 mb-2">Regulated Industry Readiness</h3>
                <p className="text-gray-600 text-sm">Prepared for public sector and regulated industry requirements</p>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Contact Canada Center
          </h2>
          
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-gray-900 text-lg">
                SHIRO Technologies Private Limited / Les Technologies SHIRO
              </p>
              
              <div>
                <p className="font-medium text-gray-900">Email:</p>
                <a href="mailto:sales@shirotechnologies.com" className="text-[#CC0000] hover:underline">
                  sales@shirotechnologies.com
                </a>
              </div>
              
              <p className="text-sm text-gray-500 italic">
                Detailed office address to be added when available
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              href="https://shirotechnologies.com/products"
              className="text-gray-600 hover:text-[#CC0000] transition-colors text-sm"
            >
              View SHIRO Group Products →
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
