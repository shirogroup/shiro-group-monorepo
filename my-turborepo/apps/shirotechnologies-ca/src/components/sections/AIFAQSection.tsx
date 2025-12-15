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
