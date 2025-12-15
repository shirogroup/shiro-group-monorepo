import Link from 'next/link'

export function Hero() {
  return (
    <section className="gradient-hero py-20 md:py-28 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='2' fill='%23CC0000'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The foundational services entity powering our global{' '}
            <span className="text-shiro-red">agentic AI SaaS portfolio</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Transform your enterprise with autonomous AI agents, global delivery excellence, and proven cost savings of 50-70% vs US/EU rates.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#calculator"
              className="bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-md font-semibold text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Calculate Your Savings
            </Link>
            <Link
              href="/products"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-shiro-black px-8 py-4 rounded-md font-semibold text-lg transition-all"
            >
              Explore Our SaaS Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
