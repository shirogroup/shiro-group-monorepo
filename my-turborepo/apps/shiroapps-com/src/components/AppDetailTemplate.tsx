import Link from 'next/link'

type Status = 'Live' | 'Launching' | 'In Development'

const STATUS_STYLES: Record<Status, string> = {
  Live: 'bg-secondary text-white',
  Launching: 'bg-primary/10 text-primary',
  'In Development': 'bg-gray-100 text-gray-500',
}

export default function AppDetailTemplate({
  name,
  tagline,
  category,
  status,
  description,
  highlights,
  externalUrl,
}: {
  name: string
  tagline: string
  category: string
  status: Status
  description: string
  highlights: string[]
  externalUrl: string
}) {
  return (
    <div className="bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <Link href="/apps" className="text-sm text-gray-500 hover:text-primary mb-8 inline-block">
          ← Back to all apps
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${STATUS_STYLES[status]}`}>{status}</span>
          <span className="text-xs font-semibold text-primary tracking-wide">{category}</span>
        </div>

        <h1 className="text-4xl font-extrabold text-secondary tracking-tight mb-3">{name}</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">{tagline}</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-8">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        {highlights.length > 0 && (
          <ul className="space-y-2 mb-10">
            {highlights.map((h) => (
              <li key={h} className="text-sm text-gray-700 flex gap-2.5 items-start">
                <span className="text-primary flex-shrink-0">✓</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-7 py-3.5 rounded-lg font-bold hover:bg-primary-dark transition-colors"
        >
          Visit the live site →
        </a>
      </section>
    </div>
  )
}
