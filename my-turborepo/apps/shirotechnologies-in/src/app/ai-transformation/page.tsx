import type { Metadata } from 'next'
import Link from 'next/link'
import { ValueVsViabilityTool } from '@/components/tools/ValueVsViabilityTool'
import { AIFAQSection } from '@/components/sections/AIFAQSection'

export const metadata: Metadata = {
  title: 'Agentic AI Transformation Services - RPA to Autonomous AI',
  description: 'Complete AI transformation from RPA/IPA through GenAI to Agentic AI. Build custom AI agents, multiagent orchestration, and autonomous workflows.',
  keywords: [
    'agentic AI',
    'AI transformation',
    'AI agents',
    'RPA automation',
    'intelligent process automation',
    'generative AI',
    'LLM integration',
    'multiagent systems',
    'autonomous AI',
    'AI workflow automation'
  ],
}

export default function AITransformationPage() {
  return (
    <div>
      <section className="gradient-hero py-20 md:py-28 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-block bg-shiro-red px-4 py-2 rounded-md text-sm font-semibold mb-4">
              🤖 Complete AI Transformation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              From RPA to Agentic AI: Complete Transformation Services
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              End-to-end AI transformation from rule-based automation through generative AI to fully autonomous 
              agentic systems. Build custom AI agents, deploy multiagent orchestration, and achieve 60-80% cost savings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#transformation-hierarchy"
                className="bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-md font-semibold text-lg transition-all"
              >
                View AI Transformation Path
              </Link>
              <Link
                href="#value-tool"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-shiro-black px-8 py-4 rounded-md font-semibold text-lg transition-all"
              >
                Assess Your Readiness
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="transformation-hierarchy" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-6 text-center">
              The AI Transformation Hierarchy
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              A phased approach from basic automation to full autonomy
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg border-l-4 border-gray-400">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">1️⃣</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-shiro-black mb-2">
                      RPA & Intelligent Process Automation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      <strong>Foundation Level:</strong> Rule-based automation of repetitive, structured tasks
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Capabilities:</p>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Data entry automation</li>
                          <li>• Invoice processing</li>
                          <li>• Report generation</li>
                          <li>• Legacy system integration</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Value:</p>
                        <ul className="space-y-1 text-gray-700">
                          <li>• 30-50% cost savings</li>
                          <li>• Quick ROI (3-6 months)</li>
                          <li>• Low risk implementation</li>
                          <li>• Foundation for AI</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">2️⃣</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-shiro-black mb-2">
                      Generative AI Integration
                    </h3>
                    <p className="text-gray-600 mb-4">
                      <strong>Enhancement Level:</strong> AI-powered content creation and knowledge work augmentation
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Capabilities:</p>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Content generation</li>
                          <li>• Customer interaction</li>
                          <li>• Document analysis</li>
                          <li>• Code assistance</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Value:</p>
                        <ul className="space-y-1 text-gray-700">
                          <li>• 20-40% productivity gain</li>
                          <li>• Enhanced creativity</li>
                          <li>• Better customer experience</li>
                          <li>• Scalable knowledge work</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">3️⃣</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-shiro-black mb-2">
                      LLM & Foundation Model Integration
                    </h3>
                    <p className="text-gray-600 mb-4">
                      <strong>Intelligence Level:</strong> Leverage powerful foundation models for complex reasoning
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Capabilities:</p>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Advanced reasoning</li>
                          <li>• Multi-language understanding</li>
                          <li>• Complex problem solving</li>
                          <li>• Knowledge synthesis</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Value:</p>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Expert-level insights</li>
                          <li>• Global deployment</li>
                          <li>• Continuous improvement</li>
                          <li>• Foundation for agents</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-lg border-l-4 border-shiro-red">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">4️⃣</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-shiro-black mb-2">
                      Agentic AI & Autonomous Systems
                    </h3>
                    <p className="text-gray-600 mb-4">
                      <strong>Autonomy Level:</strong> Fully autonomous AI that plans, decides, and executes independently
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold mb-2">Capabilities:</p>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Autonomous planning</li>
                          <li>• Multi-step execution</li>
                          <li>• Tool orchestration</li>
                          <li>• Self-correction</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Value:</p>
                        <ul className="space-y-1 text-gray-700">
                          <li>• 60-80% cost savings</li>
                          <li>• End-to-end automation</li>
                          <li>• 24/7 operation</li>
                          <li>• Competitive advantage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-yellow-900">
                <strong>Gartner Prediction:</strong> By end of 2026, 40% of enterprise applications will feature 
                task-specific agentic AI (up from less than 5% in 2025). Organizations that start their AI transformation 
                journey now will have a significant competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
              Our AI Transformation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end support from assessment through deployment and optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-shiro-black mb-3">
                AI Readiness Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation of your current state, identifying quick wins and long-term opportunities.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> Current state analysis</li>
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> AI maturity assessment</li>
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> Transformation roadmap</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-shiro-black mb-3">
                Custom AI Agent Development
              </h3>
              <p className="text-gray-600 mb-4">
                Build proprietary AI agents tailored to your industry, data, and workflows.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> Agent architecture design</li>
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> Custom tool integration</li>
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> Production deployment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-shiro-black mb-3">
                Multiagent Orchestration
              </h3>
              <p className="text-gray-600 mb-4">
                Coordinate multiple specialized agents for complex enterprise workflows.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> Agent coordination</li>
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> Workflow orchestration</li>
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> Performance monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-shiro-black mb-3">
                RPA & IPA Foundation
              </h3>
              <p className="text-gray-600 mb-4">
                Start with proven automation before advancing to agentic systems.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> Process discovery</li>
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> RPA implementation</li>
                <li className="flex items-start"><span className="text-shiro-red mr-2">→</span> Intelligent automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AIFAQSection />

      <section id="value-tool" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <ValueVsViabilityTool />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
              Our Proven Implementation Approach
            </h2>
            <p className="text-lg text-gray-600">
              4-phase methodology for AI transformation success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-shiro-red mb-2">01</div>
              <h3 className="font-bold text-shiro-black mb-2">Discover</h3>
              <p className="text-sm text-gray-600 mb-2">2-4 weeks</p>
              <p className="text-sm text-gray-600">Assess, identify opportunities, build transformation roadmap</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-shiro-red mb-2">02</div>
              <h3 className="font-bold text-shiro-black mb-2">Design</h3>
              <p className="text-sm text-gray-600 mb-2">3-6 weeks</p>
              <p className="text-sm text-gray-600">Architecture, technology selection, integration planning</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-shiro-red mb-2">03</div>
              <h3 className="font-bold text-shiro-black mb-2">Develop</h3>
              <p className="text-sm text-gray-600 mb-2">8-12 weeks</p>
              <p className="text-sm text-gray-600">Build agents, integrate systems, train models</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-shiro-red mb-2">04</div>
              <h3 className="font-bold text-shiro-black mb-2">Deploy</h3>
              <p className="text-sm text-gray-600 mb-2">4-6 weeks</p>
              <p className="text-sm text-gray-600">Launch, monitor, optimize, scale continuously</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-cta py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your AI Transformation?
          </h2>
          <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
            Schedule a consultation to discuss your transformation goals and get a customized roadmap.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-shiro-red hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
