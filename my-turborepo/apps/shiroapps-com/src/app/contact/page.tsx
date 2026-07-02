import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-primary uppercase tracking-wide mb-3">Get in Touch</div>
          <h1 className="text-4xl font-extrabold text-secondary tracking-tight mb-4">Let&apos;s talk about your AI oversight gap</h1>
          <p className="text-lg text-gray-600">
            Book a free gap-check call, ask about an audit, or reach out about anything else.
          </p>
        </div>
        <ContactForm />
        <div className="mt-12 text-center text-gray-600">
          <p>Or email us directly: <a href="mailto:info@shiroapps.com" className="text-primary font-semibold hover:underline">info@shiroapps.com</a></p>
          <p className="mt-2">Call: <a href="tel:8009718013" className="text-primary font-semibold hover:underline">(800) 971-8013</a></p>
        </div>
      </div>
    </div>
  )
}
