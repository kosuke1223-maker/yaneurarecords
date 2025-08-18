
import Link from 'next/link';

export default function Header() {
  return (
    <header className="container py-8 flex items-center justify-between">
      <Link href="/" className="text-xl tracking-wider font-semibold">YANEURA RECORDS</Link>
      <nav className="flex gap-6 text-sm text-neutral-300">
        <Link className="hover:text-white" href="/inventory">INVENTORY</Link>
        <Link className="hover:text-white" href="/archive">ARCHIVE</Link>
        <Link className="hover:text-white" href="/about">ABOUT</Link>
      </nav>
    </header>
  );
}
