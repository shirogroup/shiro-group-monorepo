import Link from 'next/link'
import { SERVICES_PREVIEW } from '@/lib/constants'

export function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shiro-black mb-4">
            Strategic Services Accelerating Innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cash-generating services funding our SaaS evolution while delivering exceptional value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_PREVIEW.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-shiro-black mb-4">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-shiro-red mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={service.link}
                className="text-shiro-red hover:text-shiro-red-dark font-semibold inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
