
export default function HomePage() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">YANEURA RECORDS</h1>
      <p className="mt-4 text-neutral-300 max-w-xl mx-auto">
        Rare and collectible records. Curated selection updated frequently.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a href="/inventory" className="btn">Browse Inventory</a>
        <a href="/archive" className="btn">View Archive</a>
      </div>
    </section>
  )
}
