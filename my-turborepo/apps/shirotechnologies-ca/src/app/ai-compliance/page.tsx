import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Compliance | SHIRO Technologies',
  description: 'AI ethics and compliance practices at SHIRO Technologies.',
};

export default function AICompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Compliance</h1>
          <p className="text-xl text-gray-300">Ethical AI Development & Deployment</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our AI Ethics Principles</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-3">
            <li><strong>Transparency:</strong> Clear disclosure when AI is making decisions</li>
            <li><strong>Fairness & Bias Mitigation:</strong> Regular audits to identify and eliminate bias</li>
            <li><strong>Privacy by Design:</strong> Data protection integrated from the start</li>
            <li><strong>Human Oversight:</strong> Human review for critical decisions</li>
            <li><strong>Accountability:</strong> Clear responsibility for AI system outcomes</li>
            <li><strong>Explainability:</strong> AI decisions can be explained in human terms</li>
            <li><strong>Safety & Security:</strong> Robust testing and security measures</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Development Practices</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Diverse training data to minimize bias</li>
            <li>Regular model validation and testing</li>
            <li>Human-in-the-loop for sensitive applications</li>
            <li>Continuous monitoring and improvement</li>
            <li>Compliance with AI regulations (EU AI Act, etc.)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Rights</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Know when AI is being used</li>
            <li>Understand how AI affects decisions about you</li>
            <li>Request human review of AI decisions</li>
            <li>Opt-out of AI processing where possible</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
          <p className="text-gray-700 mb-6">
            AI ethics inquiries: <a href="mailto:ai-ethics@shirotechnologies.com" className="text-shiro-red hover:underline">ai-ethics@shirotechnologies.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
