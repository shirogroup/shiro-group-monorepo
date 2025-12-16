import Link from 'next/link'
import { ArrowRight, MapPin, Globe, Shield, Users } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capabilities - SHIRO Technologies Canada',
  description: 'Nearshore coordination and compliance capabilities',
}

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#333333] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nearshore Capabilities
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Coordination, compliance, and enterprise trust for North American AI delivery
          </p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-red-600 transition-all">
              <MapPin className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Nearshore Coordination</h3>
              <p className="text-gray-600">Program coordination and delivery management for North American operations</p>
            </div>
            
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-red-600 transition-all">
              <Shield className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Compliance Support</h3>
              <p className="text-gray-600">PIPEDA-aligned practices and data residency for Canadian requirements</p>
            </div>
            
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-red-600 transition-all">
              <Globe className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Enterprise Onboarding</h3>
              <p className="text-gray-600">Operational alignment for enterprise and regulated market requirements</p>
            </div>
            
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-red-600 transition-all">
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Bilingual Support</h3>
              <p className="text-gray-600">English and French language capabilities for Canadian markets</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all">
              Contact Canada Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
