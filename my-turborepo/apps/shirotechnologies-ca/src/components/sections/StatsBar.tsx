import { STATS } from '@/lib/constants'

export function StatsBar() {
  return (
    <section className="bg-shiro-red text-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
