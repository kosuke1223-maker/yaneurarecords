
export const metadata = { title: 'About — Yaneura Records' }

export default function AboutPage() {
  return (
    <section className="py-12 space-y-4 max-w-2xl">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="text-neutral-300">
        Yaneura Records is a small, independent shop focused on rare and collectible records.
        We curate, grade, and pack with care. Based in California.
      </p>
      <p className="text-neutral-300">
        For inquiries, consignments, or trades, please email <a className="link" href="mailto:mail@yaneurarecords.com">mail@yaneurarecords.com</a>.
      </p>
    </section>
  )
}
