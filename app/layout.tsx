import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="it">
      <head />
      <body className="bg-neutral-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
