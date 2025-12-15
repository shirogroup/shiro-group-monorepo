import { HOW_IT_WORKS } from '@/lib/constants'
import { Upload, Cpu, Download } from 'lucide-react'

const iconMap: Record<string, any> = {
  Upload,
  Cpu,
  Download,
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-shiro-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {HOW_IT_WORKS.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.steps.map((step, index) => {
            const Icon = iconMap[step.icon]
            return (
              <div key={index} className="relative">
                {index < HOW_IT_WORKS.steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2" />
                )}
                <div className="relative bg-white rounded-xl p-8 text-center">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 bg-shiro-gray rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-shiro-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
