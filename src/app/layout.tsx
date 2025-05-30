import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HomeServices Marketplace',
  description: 'Connect with local professionals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}