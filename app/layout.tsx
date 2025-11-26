import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import EmailButton from "@/components/EmailButton";

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'] })

export const metadata: Metadata = {
  title: 'SwiftFR',
  description: 'SwiftFR connects e-commerce sellers with vetted Chinese 3PL partners. Faster fulfillment, lower costs, reliable service.',
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
        {/* 👇 ADD THIS LINE — this shows the floating email button on all pages */}
        <EmailButton />
      </body>
    </html>
  )
}

