import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { RESUME_BLAST } from '@/lib/products/resumeblast-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: RESUME_BLAST.seo.title,
  description: RESUME_BLAST.seo.description,
  keywords: RESUME_BLAST.seo.keywords,
}

export default function ResumeBlastPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <Hero
        badge={RESUME_BLAST.hero.badge}
        headline={RESUME_BLAST.hero.headline}
        subheadline={RESUME_BLAST.hero.subheadline}
        cta={RESUME_BLAST.hero.cta}
        stats={RESUME_BLAST.hero.stats}
      />
      
      <Features
        features={RESUME_BLAST.features}
        title="Why ResumeBlast Works"
        subtitle="Connect with hundreds of recruiters instantly"
      />
      
      <Pricing
        tiers={RESUME_BLAST.pricing.tiers}
        title="Choose Your Blast Plan"
        subtitle="One-time blast or continuous distribution"
      />
      
      <Testimonials
        testimonials={RESUME_BLAST.testimonials}
        title="Recruiter Connection Success"
      />
      
      <FAQ
        faqs={RESUME_BLAST.faq}
        title="How ResumeBlast Works"
      />
      
      <CTA
        title={RESUME_BLAST.cta.title}
        subtitle={RESUME_BLAST.cta.subtitle}
        buttonLabel={RESUME_BLAST.cta.buttonLabel}
        buttonUrl={RESUME_BLAST.cta.buttonUrl}
      />
      
      <Footer />
    </main>
  )
}
