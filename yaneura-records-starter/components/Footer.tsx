
export default function Footer() {
  return (
    <footer className="container pt-12 pb-20 text-sm text-neutral-400">
      <div className="hairline my-6"></div>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-neutral-200 font-medium mb-2">CONTACT</div>
          <div>mail@yaneurarecords.com</div>
          <a className="link" href="https://instagram.com" target="_blank" rel="noreferrer">@ yaneura.records</a>
        </div>
        <div>
          <div className="text-neutral-200 font-medium mb-2">QUICK LINKS</div>
          <ul className="space-y-1">
            <li><a className="link" href="/inventory">Inventory</a></li>
            <li><a className="link" href="/archive">Archive</a></li>
            <li><a className="link" href="/about">About</a></li>
          </ul>
        </div>
        <div>
          <div className="text-neutral-200 font-medium mb-2">NEWSLETTER</div>
          <form method="POST" action="/api/newsletter/subscribe" className="flex gap-2">
            <input name="email" type="email" required placeholder="you@example.com"
              className="w-full bg-transparent border border-white/20 rounded px-3 py-2 outline-none focus:ring-1 focus:ring-white/30" />
            <button className="btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} YANEURA RECORDS. All rights reserved.</div>
    </footer>
  );
}
