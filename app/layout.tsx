import Navbar from 'components/Navbar'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="it">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
