import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact us',
}

export default function ContactPage() {
  return (
    <>
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-yellow-800 font-semibold">
              🚧 Page under construction - Content coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
