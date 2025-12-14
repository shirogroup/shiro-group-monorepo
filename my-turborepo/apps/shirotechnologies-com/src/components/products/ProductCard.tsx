interface ProductCardProps {
  name: string
  description: string
  category: string
  url?: string
  status: 'live' | 'development'
}

export function ProductCard({ name, description, category, url, status }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-shiro-red hover:shadow-xl transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          status === 'live' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-blue-100 text-blue-800'
        }`}>
          {status === 'live' ? 'LIVE' : 'IN DEVELOPMENT'}
        </span>
        <span className="text-xs text-gray-500">{category}</span>
      </div>
      <h3 className="text-xl font-bold text-shiro-black mb-3">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-shiro-red hover:bg-shiro-red-dark text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
        >
          Visit Product →
        </a>
      )}
    </div>
  )
}
