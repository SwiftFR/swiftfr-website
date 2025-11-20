import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'] })

export const metadata: Metadata = {
  title: 'swiftFR — China 3PL Matchmaking for E‑commerce & Dropshippers',
  description: 'swiftFR connects e-commerce sellers with vetted Chinese 3PL partners. Faster fulfillment, lower costs, reliable service.',
  keywords: ['3PL', 'fulfillment', 'China 3PL', 'dropshipping', 'ecommerce logistics', 'swiftFR'],
  metadataBase: new URL('https://swiftfr.example.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-gray-900 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}


