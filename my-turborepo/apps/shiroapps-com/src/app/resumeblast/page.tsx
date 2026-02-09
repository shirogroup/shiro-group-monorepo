import B2BFooterCTA from '@/components/B2BFooterCTA'

export default function ResumeBlastPage() {
  return (
    <div className="bg-white">
      <div className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Job Application Automation
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Apply to 100+ Jobs While You Sleep
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            AI-powered job application automation with custom cover letters for every position.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://resumeblast.ai" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
              Start Free Trial →
            </a>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Upload Resume</h3>
              <p className="text-gray-600">Upload your resume and set job preferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">AI Applies</h3>
              <p className="text-gray-600">Our AI finds jobs and applies with custom cover letters</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Track Results</h3>
              <p className="text-gray-600">Dashboard shows all applications and responses</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-6">$29<span className="text-xl text-gray-600">/mo</span></div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ 50 applications/month</li>
                <li>✓ AI cover letters</li>
                <li>✓ Application tracking</li>
              </ul>
              <a href="https://resumeblast.ai" className="block text-center bg-gray-900 text-white py-3 rounded-lg font-semibold">Start Trial</a>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-sm font-semibold mb-2">BEST VALUE</div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="text-4xl font-bold mb-6">$49<span className="text-xl">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li>✓ Unlimited applications</li>
                <li>✓ Premium AI cover letters</li>
                <li>✓ Follow-up automation</li>
                <li>✓ Priority support</li>
              </ul>
              <a href="https://resumeblast.ai" className="block text-center bg-white text-purple-600 py-3 rounded-lg font-semibold">Start Trial</a>
            </div>
          </div>
        </div>
      </div>

      <B2BFooterCTA 
        productName="ResumeBlast.ai"
        buildTime="6-8 weeks"
        techStack="Next.js, OpenAI, Puppeteer"
      />
    </div>
  )
}
