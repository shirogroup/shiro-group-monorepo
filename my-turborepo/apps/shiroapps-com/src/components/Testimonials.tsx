import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  company?: string
  rating: number
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  title?: string
}

export default function Testimonials({ testimonials, title = 'What Our Users Say' }: TestimonialsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                  {testimonial.company && ` at ${testimonial.company}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
