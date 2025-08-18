
type Props = {
  title: string;
  artist: string;
  year?: string;
  price?: string;
  img?: string;
  sold?: boolean;
};

export default function RecordCard({ title, artist, year, price, img, sold }: Props) {
  return (
    <div className="border border-white/10 rounded overflow-hidden">
      <div className="aspect-square bg-neutral-900">
        {img ? <img alt={title} src={img} className="w-full h-full object-cover" /> : null}
      </div>
      <div className="p-3 text-sm">
        <div className="font-medium">{artist} — {title}</div>
        <div className="text-neutral-400">{year || '—'}</div>
        <div className="mt-2">{sold ? <span className="text-neutral-400">SOLD</span> : price || '—'}</div>
      </div>
    </div>
  )
}
