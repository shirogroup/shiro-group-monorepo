import { MapPin, Phone, Mail } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - SHIRO Technologies India',
  description: 'Contact SHIRO Technologies India delivery center',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#333333] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact India Center
          </h1>
          <p className="text-xl text-gray-300">
            Get in touch with our India delivery team
          </p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">SHIRO Technologies Pvt Ltd</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700">442, 6th Main Road, 2nd Floor</p>
                  <p className="text-gray-700">Vijayanagar 1st Stage</p>
                  <p className="text-gray-700">Mysuru, Karnataka 570017, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">(+91) 81233 71777</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:sales@shirotechnologies.com" className="text-red-600 hover:underline">
                    sales@shirotechnologies.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
