import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CLOUD_SOURCE_HRM } from '@/lib/products/cloudsourcehrm-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: CLOUD_SOURCE_HRM.seo.title,
  description: CLOUD_SOURCE_HRM.seo.description,
  keywords: CLOUD_SOURCE_HRM.seo.keywords,
}

export default function CloudSourceHRMPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <Hero
        badge={CLOUD_SOURCE_HRM.hero.badge}
        headline={CLOUD_SOURCE_HRM.hero.headline}
        subheadline={CLOUD_SOURCE_HRM.hero.subheadline}
        cta={CLOUD_SOURCE_HRM.hero.cta}
        stats={CLOUD_SOURCE_HRM.hero.stats}
      />
      
      <Features
        features={CLOUD_SOURCE_HRM.features}
        title="Complete HR Automation"
        subtitle="Streamline every aspect of your recruitment process"
      />
      
      <Pricing
        tiers={CLOUD_SOURCE_HRM.pricing.tiers}
        title="Plans for Every Business"
        subtitle="From individual recruiters to enterprise agencies"
      />
      
      <Testimonials
        testimonials={CLOUD_SOURCE_HRM.testimonials}
        title="Trusted by HR Professionals"
      />
      
      <FAQ
        faqs={CLOUD_SOURCE_HRM.faq}
        title="CloudSourceHRM FAQ"
      />
      
      <CTA
        title={CLOUD_SOURCE_HRM.cta.title}
        subtitle={CLOUD_SOURCE_HRM.cta.subtitle}
        buttonLabel={CLOUD_SOURCE_HRM.cta.buttonLabel}
        buttonUrl={CLOUD_SOURCE_HRM.cta.buttonUrl}
      />
      
      <Footer />
    </main>
  )
}
