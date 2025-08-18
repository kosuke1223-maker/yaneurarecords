
import records from '../../data/inventory.json'
import RecordCard from '../../components/RecordCard'

export const metadata = { title: 'Inventory — Yaneura Records' }

export default function InventoryPage() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Inventory</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {records.map((r, i) => (
          <RecordCard key={i} {...r} />
        ))}
      </div>
    </section>
  )
}
