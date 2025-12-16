import Link from 'next/link'
import { Shield, Lock, FileCheck, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compliance & Security - SHIRO Technologies Canada',
  description: 'Canadian compliance and security standards',
}

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#333333] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compliance & Security
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Canadian privacy standards and enterprise security frameworks
          </p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <Shield className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">PIPEDA Alignment</h3>
              <p className="text-gray-600">Awareness of Canadian privacy expectations with PIPEDA-aligned practices</p>
            </div>
            
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <Lock className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-gray-600">Enterprise-grade security standards for sensitive operations</p>
            </div>
            
            <div className="p-8 bg-white rounded-xl border border-gray-200">
              <FileCheck className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Regulated Industries</h3>
              <p className="text-gray-600">Readiness for public sector and regulated industry requirements</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all">
              Contact for Details
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
