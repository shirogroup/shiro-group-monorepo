import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SHIRO Technologies for AI transformation, services, or product inquiries.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300">
            Let's discuss how SHIRO can help transform your business
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-shiro-black mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-shiro-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-shiro-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-shiro-black mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-semibold text-shiro-black mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                  >
                    <option value="">Select an option</option>
                    <option value="ai-transformation">AI Transformation Services</option>
                    <option value="rpa">RPA & IPA Services</option>
                    <option value="global-delivery">Global Delivery</option>
                    <option value="products">SaaS Products</option>
                    <option value="partnership">Partnership/Investment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-shiro-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-shiro-red focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-shiro-red hover:bg-shiro-red-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-600">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-shiro-black mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">📧 Email</h3>
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-shiro-red hover:underline">
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">📞 Phone</h3>
                  <p className="text-gray-700 mb-1">
                    Products & Services: <a href={`tel:${SITE_CONFIG.contact.productsServicesPhone.replace(/[^0-9]/g, '')}`} className="text-shiro-red hover:underline">{SITE_CONFIG.contact.productsServicesPhone}</a>
                  </p>
                  <p className="text-gray-700">
                    Main: <a href={`tel:${SITE_CONFIG.contact.mainPhone.replace(/[^0-9]/g, '')}`} className="text-shiro-red hover:underline">{SITE_CONFIG.contact.mainPhone}</a>
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">🏢 Physical Address</h3>
                  <p className="text-gray-700">
                    {SITE_CONFIG.address.physical.street}<br />
                    {SITE_CONFIG.address.physical.city}, {SITE_CONFIG.address.physical.state} {SITE_CONFIG.address.physical.zip}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">📮 Mailing Address</h3>
                  <p className="text-gray-700">
                    {SITE_CONFIG.address.mailing.street}<br />
                    {SITE_CONFIG.address.mailing.city}, {SITE_CONFIG.address.mailing.state} {SITE_CONFIG.address.mailing.zip}
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  Weekend: By appointment only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-shiro-black mb-8">
            Global Delivery Centers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">🇺🇸 United States</h3>
              <p className="text-gray-600">Addison, Texas</p>
              <p className="text-sm text-gray-500 mt-2">Primary HQ & Client Services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">🇨🇦 Canada</h3>
              <p className="text-gray-600">Nearshore Delivery</p>
              <p className="text-sm text-gray-500 mt-2">
                <a href="https://shirotechnologies.ca" target="_blank" rel="noopener noreferrer" className="text-shiro-red hover:underline">
                  Visit SHIRO Canada
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">🇮🇳 India</h3>
              <p className="text-gray-600">Offshore Development</p>
              <p className="text-sm text-gray-500 mt-2">
                <a href="https://shirotechnologies.in" target="_blank" rel="noopener noreferrer" className="text-shiro-red hover:underline">
                  Visit SHIRO India
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
