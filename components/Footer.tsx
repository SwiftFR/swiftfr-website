import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-100 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[var(--brand-red)]" />
            <span className="text-lg font-semibold">swiftFR</span>
          </div>
          <p className="text-sm text-gray-600">Connecting sellers with vetted China 3PL partners.</p>
        </div>
        <div>
          <div className="font-medium">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-[var(--brand-red)]">About</Link></li>
            <li><Link href="/services" className="hover:text-[var(--brand-red)]">Services</Link></li>
            <li><Link href="/faqs" className="hover:text-[var(--brand-red)]">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--brand-red)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Get Started</div>
          <p className="mt-3 text-sm text-gray-600">Ready to scale fulfillment? We’ll match you with a reliable 3PL.</p>
          <Link href="/contact" className="btn-primary mt-4 inline-block">Get Matched</Link>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} swiftFR. All rights reserved.</div>
    </footer>
  )
}


