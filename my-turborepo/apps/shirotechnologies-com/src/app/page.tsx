import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ProductsGrid } from '@/components/sections/ProductsGrid'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { AISavingsCalculator } from '@/components/calculator/AISavingsCalculator'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductsGrid />
      
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <AISavingsCalculator />
        </div>
      </section>
      
      <ServicesPreview />
    </>
  )
}
