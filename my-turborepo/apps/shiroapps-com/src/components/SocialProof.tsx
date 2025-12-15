import { Star } from 'lucide-react'

export default function SocialProof() {
  return (
    <section className="py-8 bg-shiro-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-700 font-semibold">4.8/5</span>
          </div>
          <p className="text-gray-600">
            Trusted by <span className="font-bold text-shiro-red">10,000+</span> job seekers worldwide
          </p>
        </div>
      </div>
    </section>
  )
}
