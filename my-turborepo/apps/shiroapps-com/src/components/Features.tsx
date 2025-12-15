import * as Icons from 'lucide-react'

interface Feature {
  icon: string
  title: string
  description: string
}

interface FeaturesProps {
  features: Feature[]
  title?: string
  subtitle?: string
}

export default function Features({ features, title = 'Features', subtitle }: FeaturesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = (Icons as any)[feature.icon] || Icons.Star
            
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-shiro-red hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-cta rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
