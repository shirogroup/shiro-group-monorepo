import { ArrowRight } from 'lucide-react'

interface CTAProps {
  title: string
  subtitle: string
  buttonLabel: string
  buttonUrl: string
  features?: string[]
}

export default function CTA({ title, subtitle, buttonLabel, buttonUrl, features }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        
        <p className="text-xl text-gray-200 mb-8">
          {subtitle}
        </p>
        
        {features && features.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 text-white">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        )}
        
        <a
          href={buttonUrl}
          className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-2xl transition-all text-lg group"
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonLabel}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}
