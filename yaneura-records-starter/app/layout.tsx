
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Yaneura Records',
  description: 'Rare and collectible records.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
