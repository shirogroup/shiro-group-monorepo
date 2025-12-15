import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { INSTANT_RESUME_AI } from '@/lib/products/instantresumeai-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: INSTANT_RESUME_AI.seo.title,
  description: INSTANT_RESUME_AI.seo.description,
  keywords: INSTANT_RESUME_AI.seo.keywords,
}

export default function InstantResumeAIPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <Hero
        badge={INSTANT_RESUME_AI.hero.badge}
        headline={INSTANT_RESUME_AI.hero.headline}
        subheadline={INSTANT_RESUME_AI.hero.subheadline}
        cta={INSTANT_RESUME_AI.hero.cta}
        stats={INSTANT_RESUME_AI.hero.stats}
      />
      
      <Features
        features={INSTANT_RESUME_AI.features}
        title="Powerful Features"
        subtitle="Everything you need to create an ATS-optimized resume that gets interviews"
      />
      
      <Pricing
        tiers={INSTANT_RESUME_AI.pricing.tiers}
        title="Choose Your Plan"
        subtitle="Start free, upgrade when you need more"
      />
      
      <Testimonials
        testimonials={INSTANT_RESUME_AI.testimonials}
        title="Success Stories"
      />
      
      <FAQ
        faqs={INSTANT_RESUME_AI.faq}
        title="Common Questions"
      />
      
      <CTA
        title={INSTANT_RESUME_AI.cta.title}
        subtitle={INSTANT_RESUME_AI.cta.subtitle}
        buttonLabel={INSTANT_RESUME_AI.cta.buttonLabel}
        buttonUrl={INSTANT_RESUME_AI.cta.buttonUrl}
      />
      
      <Footer />
    </main>
  )
}
