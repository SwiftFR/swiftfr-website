import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import EmailButton from "@/components/EmailButton";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-XZ6D9ZMVK3"
    strategy="afterInteractive"
  />
  <Script id="ga4" strategy="afterInteractive">
    {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XZ6D9ZMVK3');
}
  </Script>
</head>

      <body>{children}</body>
    </html>
  );
}


const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'] })

const siteUrl = 'https://swiftfr-website.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SwiftFR — China 3PL Matching for E-commerce Brands',
    template: '%s | SwiftFR',
  },
  description:
    'SwiftFR connects e-commerce sellers with vetted Chinese 3PL partners. Faster fulfillment, lower costs, and reliable service for brands shipping to the EU and US.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'SwiftFR — China 3PL Matching for E-commerce Brands',
    description:
      'SwiftFR connects e-commerce sellers with vetted Chinese 3PL partners for faster, more reliable fulfillment.',
    siteName: 'SwiftFR',
    images: [
      {
        url: 'og-image.png', // put an image with this name in /public
        width: 1200,
        height: 630,
        alt: 'SwiftFR - China 3PL Matching for E-commerce Sellers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwiftFR — China 3PL Matching for E-commerce Brands',
    description:
      'SwiftFR connects e-commerce sellers with vetted Chinese 3PL partners for faster, more reliable fulfillment.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
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
        <EmailButton />
      </body>
    </html>
  )
}
