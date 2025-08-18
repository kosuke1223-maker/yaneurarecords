
import records from '../../data/archive.json'
import RecordCard from '../../components/RecordCard'

export const metadata = { title: 'Archive — Yaneura Records' }

export default function ArchivePage() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Archive</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {records.map((r, i) => (
          <RecordCard key={i} {...r} />
        ))}
      </div>
    </section>
  )
}
