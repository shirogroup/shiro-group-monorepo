export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Coming Soon
        </h1>
        <h2 className="text-2xl md:text-3xl mb-4">
          SHIRO Technologies India
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Offshore Delivery Center - Mysuru, Karnataka
        </p>
        <div className="max-w-2xl mx-auto text-gray-400 space-y-2">
          <p>442, 6th Main Road, 2nd Floor</p>
          <p>Vijayanagar 1st Stage, Mysuru, Karnataka 570017</p>
          <p className="mt-4">Phone: +91 81233 71777</p>
        </div>
        <div className="mt-12">
          <a 
            href="https://shirotechnologies.com" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Visit Main Site
          </a>
        </div>
      </div>
    </div>
  );
}
