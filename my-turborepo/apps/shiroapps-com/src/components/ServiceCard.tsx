import Link from 'next/link'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  price: string
  href: string
}

export default function ServiceCard({ icon, title, description, price, href }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 card-hover">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      
      <div className="mb-4 pb-4 border-b border-gray-200">
        <p className="text-sm text-gray-500 mb-1">Starting at</p>
        <p className="text-lg font-bold text-purple-600">{price}</p>
      </div>

      <Link 
        href={href}
        className="block w-full text-center text-purple-600 border-2 border-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
      >
        Learn More
      </Link>
    </div>
  )
}
