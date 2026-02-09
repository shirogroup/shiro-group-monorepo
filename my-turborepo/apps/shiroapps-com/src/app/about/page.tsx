export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="gradient-bg text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About SHIRO Apps</h1>
          <p className="text-xl text-white/90">
            Built by SHIRO Technologies - 24 years of AI innovation
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              SHIRO Apps is the consumer product division of SHIRO Technologies LLC, a company with 24 years of experience delivering AI transformation and enterprise software solutions to Fortune 500 companies and mid-market businesses.
            </p>
            <p className="text-gray-600 mb-6">
              We noticed a gap in the market: powerful AI tools were only available to large enterprises with big budgets. Small businesses and individuals were left with either expensive enterprise solutions or underpowered consumer apps.
            </p>
            <p className="text-gray-600 mb-6">
              So we decided to change that. We took our enterprise-grade AI expertise and built consumer-friendly products that anyone can use.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">🎯 We Use Our Own Products</h3>
                <p className="text-gray-600">
                  Every app on SHIRO Apps is used internally by our team. If it's not good enough for us, we don't ship it.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">🏗️ We Build In Public</h3>
                <p className="text-gray-600">
                  See something you like? We can build it for you. Every product is a proof of our capabilities.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">🌍 Global Team, Local Service</h3>
                <p className="text-gray-600">
                  Operations in USA, Canada, and India enable us to provide 24/7 support at affordable prices.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">🚀 Fast & Lean</h3>
                <p className="text-gray-600">
                  We ship products in 6-12 weeks, not 6-12 months. Small team, big results.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Our Products</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="font-bold text-purple-600 mr-3">•</span>
                <span><strong>InstantResumeAI:</strong> AI-powered resume builder with ATS optimization</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-purple-600 mr-3">•</span>
                <span><strong>ResumeBlast.ai:</strong> Automated job application with AI cover letters</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-purple-600 mr-3">•</span>
                <span><strong>CloudSourceHRM:</strong> Complete HR management platform for SMBs</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12">Parent Company</h2>
            <p className="text-gray-600 mb-6">
              SHIRO Technologies LLC (Est. 2001) is our parent company, providing AI transformation services, custom development, and global delivery to enterprises worldwide.
            </p>
            <p className="text-gray-600">
              Learn more: <a href="https://shirotechnologies.com" className="text-purple-600 hover:underline">shirotechnologies.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Questions about our products or services?
          </p>
          <div className="space-y-2 text-gray-600">
            <p>Email: <a href="mailto:Info@shirotechnologies.com" className="text-purple-600 hover:underline">Info@shirotechnologies.com</a></p>
            <p>Phone: <a href="tel:8009718013" className="text-purple-600 hover:underline">(800) 971-8013</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
