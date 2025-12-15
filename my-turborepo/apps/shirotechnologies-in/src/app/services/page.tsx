import type { Metadata } from 'next'
import Link from 'next/link'
import { QASavingsCalculator } from '@/components/calculator/QASavingsCalculator'

export const metadata: Metadata = {
  title: 'Services - AI Transformation & Global Delivery',
  description: 'Strategic services funding SaaS innovation: AI transformation, RPA/IPA, global delivery with 50-70% cost savings.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-block bg-shiro-red px-4 py-2 rounded-md text-sm font-semibold mb-4">
              Strategic Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Cash-Generating Services Accelerating SaaS Innovation
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Predictable revenue and proven delivery funding our agentic AI portfolio while delivering 
              exceptional value to enterprise clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
              Our Service Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Global delivery excellence with 50-70% cost savings vs US/EU rates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Transformation */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-shiro-red hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-shiro-black mb-4">
                Agentic AI Transformation
              </h3>
              <p className="text-gray-600 mb-6">
                Strategic consulting and custom agent development aligned with Gartner's 2026 predictions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">AI readiness assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">Workflow design & implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">Custom agent development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">Multiagent orchestration</span>
                </li>
              </ul>
              <Link
                href="/ai-transformation"
                className="block text-center bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-md font-semibold transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* RPA/IPA */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-shiro-red hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-shiro-black mb-4">
                RPA & Intelligent Process Automation
              </h3>
              <p className="text-gray-600 mb-6">
                Automate repetitive workflows with robotic process automation and intelligent document processing.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">Robotic Process Automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">Intelligent document processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">Workflow automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">Legacy system integration</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-md font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Global Delivery */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-shiro-red hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-shiro-black mb-4">
                Offshore/Nearshore Delivery
              </h3>
              <p className="text-gray-600 mb-6">
                Cost-efficient global delivery with US, Canada, and India delivery centers.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">50-70% cost savings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">Follow-the-sun development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">Dedicated teams or project-based</span>
                </li>
                <li className="flex items-start">
                  <span className="text-shiro-red mr-2">✓</span>
                  <span className="text-gray-700">Scalability without long-term commitment</span>
                </li>
              </ul>
              <Link
                href="/global-presence"
                className="block text-center bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-md font-semibold transition-all"
              >
                View Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <QASavingsCalculator />
        </div>
      </section>

      {/* Why SHIRO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6">
              Why SHIRO Technologies?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Strategic Cash Flow Engine</h3>
                <p className="text-gray-600">
                  Predictable services revenue funds our SaaS innovation lab, reducing investor dependency 
                  while maintaining growth velocity.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Validation Engine</h3>
                <p className="text-gray-600">
                  Real client feedback from services work directly informs SaaS product features, 
                  ensuring market fit before scaling.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Talent Pipeline</h3>
                <p className="text-gray-600">
                  Top performers from services teams transition to SaaS product development, 
                  bringing deep domain expertise.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Global Scale</h3>
                <p className="text-gray-600">
                  Multi-region delivery centers in US, Canada, and India enable 24/7 support 
                  and optimal cost structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss how our services can deliver immediate value while exploring our SaaS solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
