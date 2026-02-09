import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Ready to build your AI-powered product? Let's talk.
          </p>
        </div>
        <ContactForm />
        <div className="mt-12 text-center text-gray-600">
          <p>Or email us directly: <a href="mailto:Info@shirotechnologies.com" className="text-purple-600 hover:underline">Info@shirotechnologies.com</a></p>
          <p className="mt-2">Call: <a href="tel:8009718013" className="text-purple-600 hover:underline">(800) 971-8013</a></p>
        </div>
      </div>
    </div>
  )
}
