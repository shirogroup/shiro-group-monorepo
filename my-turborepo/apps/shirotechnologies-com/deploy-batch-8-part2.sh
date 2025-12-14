#!/bin/bash

# SHIRO Technologies - Batch 8 Part 2 Deployment Script
# Updates: Logo alignment fix, Agentic AI positioning, FAQ, legal pages

echo "🚀 SHIRO Technologies - Batch 8 Part 2 Deployment"
echo "===================================================="
echo ""

cd ~/projects/shiro-group-monorepo/my-turborepo/apps/shirotechnologies-com

if [ ! -f "package.json" ]; then
    echo "❌ ERROR: Not in shirotechnologies-com directory"
    exit 1
fi

echo "✅ Found project directory"
echo ""
echo "📝 Applying updates..."

# FIX 1: Logo - Properly aligned, globe close to R, same height
cat > src/components/layout/Logo.tsx << 'LOGO_EOF'
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="280"
      height="75"
      viewBox="0 0 280 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* SHIR text */}
      <text
        x="10"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="38"
        fontWeight="bold"
        fill="#CC0000"
      >
        SHIR
      </text>
      
      {/* Globe as O - close to R, same baseline */}
      <g transform="translate(128, 19)">
        {/* Main circle - matching text height */}
        <circle cx="0" cy="0" r="17" fill="#CC0000" stroke="#990000" strokeWidth="2" />
        
        {/* Vertical lines (longitude) */}
        <line x1="0" y1="-17" x2="0" y2="17" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="-12" y1="-12" x2="-12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        <line x1="12" y1="-12" x2="12" y2="12" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        
        {/* Horizontal lines (latitude) */}
        <line x1="-17" y1="0" x2="17" y2="0" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="0" cy="0" rx="17" ry="7" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        <ellipse cx="0" cy="0" rx="17" ry="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
        
        {/* Highlight */}
        <circle cx="7" cy="-7" r="3" fill="#ffffff" opacity="0.4" />
      </g>
      
      {/* Technologies text - centered below SHIRO */}
      <text
        x="140"
        y="62"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="#333333"
        textAnchor="middle"
      >
        Technologies
      </text>
    </svg>
  )
}
LOGO_EOF

echo "  ✅ Logo.tsx (Fixed alignment - globe close to R, same height)"

# CREATE FAQ COMPONENT
mkdir -p src/components/sections

cat > src/components/sections/AIFAQSection.tsx << 'FAQ_EOF'
export function AIFAQSection() {
  const faqs = [
    {
      question: "What is Agentic AI?",
      answer: "Agentic AI refers to autonomous artificial intelligence systems that can plan, make decisions, and execute multi-step tasks independently. Unlike traditional AI that simply responds to prompts, agentic AI takes initiative, uses tools, adapts its approach based on outcomes, and can orchestrate complex workflows without constant human guidance. It's the difference between an AI that waits for instructions versus one that proactively solves problems."
    },
    {
      question: "What is an AI Agent?",
      answer: "An AI Agent is a software application designed to perform specific tasks autonomously or semi-autonomously. AI agents can range from simple rule-based chatbots to complex systems powered by agentic AI. Think of an AI Agent as the product or solution (e.g., a customer support agent, HR recruiting agent), while agentic AI is the underlying technology that enables true autonomy and decision-making capabilities."
    },
    {
      question: "What are AI Agents Powered by Agentic AI?",
      answer: "These are vertical AI solutions (products) built using agentic AI capabilities as their core technology. For example, a customer support AI agent powered by agentic AI doesn't just answer pre-programmed questions - it autonomously researches complex issues, determines appropriate escalation paths, follows up on tickets, and adapts its responses based on customer sentiment. The agentic AI foundation enables the AI agent to truly think and act independently."
    },
    {
      question: "How does Agentic AI differ from RPA, GenAI, or LLMs?",
      answer: "Each technology serves different purposes: RPA (Robotic Process Automation) executes rule-based, repetitive tasks with low autonomy. GenAI (Generative AI) creates content based on prompts but requires human direction. LLMs (Large Language Models) are foundation models that power various AI applications. Agentic AI sits at the highest level of autonomy - it plans multi-step workflows, makes decisions, uses tools, and executes tasks independently. The key differentiator is the level of autonomous decision-making and initiative."
    },
    {
      question: "What is the AI Transformation hierarchy?",
      answer: "AI Transformation progresses through stages: (1) RPA/IPA for rule-based automation of repetitive tasks, (2) Generative AI for content creation and ChatGPT-style interactions, (3) LLM Integration for leveraging foundation models, and (4) Agentic AI for fully autonomous decision-making and workflow orchestration. Each stage builds on the previous, with agentic AI representing the most advanced level of automation and autonomy."
    },
    {
      question: "Which AI solution should I choose for my business?",
      answer: "Start with RPA/IPA if you have clearly defined, repetitive processes with structured data. Add Generative AI for content creation, customer interaction, or knowledge work enhancement. Implement Agentic AI when you need autonomous decision-making and multi-step workflow execution. Deploy vertical AI Agents for industry-specific solutions (HR, sales, customer support, finance) that combine all these technologies. Most enterprises benefit from a phased approach, beginning with RPA and evolving toward agentic systems as they mature."
    },
    {
      question: "What cost savings can I expect?",
      answer: "Cost savings vary by technology: RPA/IPA typically delivers 30-50% savings by automating repetitive tasks. GenAI augmentation provides 20-40% productivity gains for knowledge workers. AI Agents (non-agentic) can achieve 40-60% savings by automating specific functions. Agentic AI Agents deliver the highest savings at 60-80% by replacing entire workflows end-to-end, not just individual tasks. The key is matching the right technology to your specific use case and maturity level."
    },
    {
      question: "Can AI Agents work with human teams (AI + Human)?",
      answer: "Absolutely. Most successful implementations use a hybrid approach: AI Agents handle routine, high-volume tasks autonomously (AI-only mode), while complex or sensitive cases are routed to humans or require human approval before execution (AI + Human mode). This approach maximizes efficiency while maintaining quality and control. For example, a customer support AI agent might resolve 70-80% of inquiries independently, escalating the remaining 20-30% to human agents, effectively augmenting your team rather than replacing it."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Understanding Agentic AI, AI Agents, and AI Transformation
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-shiro-red">
                <h3 className="text-xl font-bold text-shiro-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-lg mb-2">Still Have Questions?</h3>
            <p className="text-gray-700 mb-4">
              Our AI transformation experts are here to help you understand which solutions are right for your business.
            </p>
            <a
              href="/contact"
              className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-6 py-3 rounded-md font-semibold transition-all"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
FAQ_EOF

echo "  ✅ AIFAQSection.tsx (Comprehensive FAQ component)"

# UPDATE AI Transformation page to include FAQ
cat > src/app/ai-transformation/page.tsx << 'AI_TRANSFORM_UPDATE_EOF'
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
    <>
      {/* Hero Section */}
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

      {/* AI Transformation Hierarchy */}
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
              {/* Level 1: RPA/IPA */}
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

              {/* Level 2: GenAI */}
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

              {/* Level 3: LLM Integration */}
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

              {/* Level 4: Agentic AI */}
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
                task-specific agentic AI (up from <5% in 2025). Organizations that start their AI transformation 
                journey now will have a significant competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Continued from original... */}
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

      {/* FAQ Section */}
      <AIFAQSection />

      {/* Value vs Viability Tool */}
      <section id="value-tool" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <ValueVsViabilityTool />
        </div>
      </section>

      {/* Implementation Roadmap */}
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

      {/* CTA */}
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
    </>
  )
}
AI_TRANSFORM_UPDATE_EOF

echo "  ✅ ai-transformation/page.tsx (Updated with hierarchy + FAQ)"

echo ""
echo "✅ Batch 8 Part 2 updates applied!"
echo ""

# Build
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 BUILD SUCCESSFUL!"
    echo ""
    read -p "Push to GitHub? (y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cd ~/projects/shiro-group-monorepo
        git add .
        git commit -m "Batch 8 Part 2: Logo alignment fix, Agentic AI hierarchy, comprehensive FAQ"
        git push origin main
        
        echo ""
        echo "🎉 DEPLOYED!"
        echo ""
        echo "📊 Batch 8 Part 2 Complete:"
        echo "  ✅ Logo fixed (globe close to R, same height)"
        echo "  ✅ AI Transformation hierarchy (RPA→GenAI→LLM→Agentic)"
        echo "  ✅ Comprehensive FAQ (8 questions)"
        echo "  ✅ Updated AI Transformation page"
        echo ""
        echo "🎯 SEO Keywords Targeted:"
        echo "  • AI agents (33K/month)"
        echo "  • Agentic AI (12K/month)"
        echo "  • RPA automation (40K/month)"
        echo "  • AI automation (90K/month)"
        echo ""
        echo "Vercel will deploy in 2-3 minutes!"
    fi
else
    echo ""
    echo "❌ Build failed - see errors above"
fi
