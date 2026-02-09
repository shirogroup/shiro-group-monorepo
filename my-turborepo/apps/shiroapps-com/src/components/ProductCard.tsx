import Link from 'next/link'

interface ProductCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  pricing: string
  href: string
  techStack: string[]
  timeline: string
}

export default function ProductCard({ 
  icon, 
  title, 
  description, 
  features, 
  pricing, 
  href,
  techStack,
  timeline 
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden card-hover">
      {/* Product Info */}
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Starting at</p>
          <p className="text-lg font-bold text-gray-900">{pricing}</p>
        </div>

        {/* CTA Button */}
        <Link 
          href={href}
          className="block w-full gradient-bg text-white text-center px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mb-4"
        >
          Learn More →
        </Link>
      </div>

      {/* Technical Details - B2B Section */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <span className="font-medium">Built with:</span>
          <span className="text-gray-500">{timeline}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {techStack.map((tech, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-white text-gray-600 rounded border border-gray-200">
              {tech}
            </span>
          ))}
        </div>
        <Link 
          href="/case-studies"
          className="block mt-3 text-sm text-purple-600 hover:text-purple-700 font-medium"
        >
          See how we built it →
        </Link>
      </div>
    </div>
  )
}
