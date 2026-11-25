import Link from 'next/link'
import { SERVICES_PREVIEW } from '@/lib/constants'

export function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
            Strategic Services Accelerating Innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cash-generating services funding our SaaS evolution while delivering exceptional value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Transformation */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-shiro-black mb-4">Agentic AI Transformation</h3>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                AI Readiness Assessments
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Custom Agent Development
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Multiagent Orchestration
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Workflow Design & Implementation
              </li>
            </ul>
            <p className="text-sm text-gray-500 mb-6">Delivered on the UiPath platform.</p>
            <Link
              href="/ai-transformation"
              className="text-shiro-red hover:text-shiro-red-dark font-semibold inline-flex items-center"
            >
              Learn More →
            </Link>
          </div>

          {/* RPA/IPA - UPDATED CONTENT */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-shiro-black mb-4">RPA & Intelligent Process Automation</h3>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Robotic Process Automation
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Intelligent Document Processing
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Workflow Orchestration
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Process Mining & Discovery
              </li>
            </ul>
            <p className="text-sm text-gray-500 mb-6">Delivered on the UiPath platform.</p>
            <Link
              href="/services#rpa"
              className="text-shiro-red hover:text-shiro-red-dark font-semibold inline-flex items-center"
            >
              Learn More →
            </Link>
          </div>

          {/* Global Delivery */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-shiro-black mb-4">Global Delivery Excellence</h3>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                50-70% Cost Savings
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Follow-the-Sun Development
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Dedicated Teams
              </li>
              <li className="text-gray-600 flex items-start">
                <span className="text-shiro-red mr-2">✓</span>
                Multi-Region Delivery Centers
              </li>
            </ul>
            <Link
              href="/global-presence"
              className="text-shiro-red hover:text-shiro-red-dark font-semibold inline-flex items-center"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
