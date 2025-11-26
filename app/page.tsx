"use client";

import Script from 'next/script'
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const BENEFITS = [
  {
    icon: "/icons/more-profits.png",
    title: "More Profits",
    description:
      "We provide competitive pricing without sacrificing quality or speed.",
  },
  {
    icon: "/icons/unlimited-catalogue.png",
    title: "Unlimited Catalogue",
    description: "Products sourced from platforms like 1688 and AliExpress.",
  },
  {
    icon: "/icons/fast-fulfillment.png",
    title: "100% Automated",
    description: "Integration with Shopify, WooCommerce and eBay.",
  },
  {
    icon: "/icons/pro-branding.png",
    title: "Pro Branding",
    description: "Branded and personalised labels on demand.",
  },
  {
    icon: "/icons/returns.png",
    title: "Managed Returns & Exchanges",
    description:
      "Unsatisfied customer? Send a photo to receive immediate refund or replacement.",
  },
  {
    icon: "/icons/shipping.png",
    title: "Optimized Shipping",
    description:
      "We match your products to the fastest, most cost-effective routes.",
  },
  {
    icon: "/icons/quality.png",
    title: "Ensured Quality Control",
    description: "We quality-check each product before packaging.",
  },
  {
    icon: "/icons/customer-care.png",
    title: "Customer Care",
    description:
      "Our dedicated team resolves issues with clear communication.",
  },
];


export default function HomePage() {
  return (
    <Layout>
<Script
  id="swiftfr-org-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SwiftFR',
      url: 'https://swiftfr.com',
      logo: 'https://swiftfr.com/mini-logo.png', // adjust if different
      description:
        'SwiftFR connects e-commerce sellers with vetted Chinese 3PL partners for fast, reliable fulfillment.',
      sameAs: [
        // add socials when you have them, e.g.:
        // 'https://www.linkedin.com/company/swiftfr',
        // 'https://twitter.com/swiftfr',
      ],
    }),
  }}
/>


      <section className="py-16 sm:py-24">
        {/* HERO */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold sm:text-5xl"
          >
            Fulfillment Simplified
            <br />
            No Hidden Fees, No Delays
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-600"
          >
            SwiftFR helps e-commerce brands scale faster by connecting them with
            reliable Chinese 3PLs that deliver 5–12 day shipping to the EU and
            US without the usual headaches, hidden fees, or poor communication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <Link href="/contact" className="btn-primary">
              Request a Free Quote
            </Link>
            <Link
              href="/services"
              className="rounded-lg px-5 py-3 font-medium ring-1 ring-gray-200 transition hover:bg-gray-50"
            >
              How it works
            </Link>
          </motion.div>
        </div>

        {/* WHY CHOOSE US */}
        <section className="py-10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Why choose us?
              </h2>
              <p className="mt-2 text-gray-600">What sets SwiftFR apart</p>
            </div>

            {/* EMOJI ROW – quick, high-level value props */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl sm:text-4xl">⚡️</span>
                <p className="mt-3 text-sm font-semibold sm:text-base">
                  Fast Fulfillment
                </p>
                <p className="mt-1 max-w-xs text-xs text-gray-600 sm:text-sm">
                  5–12 day delivery to key markets without hassle.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-3xl sm:text-4xl">💰</span>
                <p className="mt-3 text-sm font-semibold sm:text-base">
                  No Hidden Fees
                </p>
                <p className="mt-1 max-w-xs text-xs text-gray-600 sm:text-sm">
                  Clear, all-in quotes so you know your margins upfront.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-3xl sm:text-4xl">✅</span>
                <p className="mt-3 text-sm font-semibold sm:text-base">
                  Vetted 3PL Partners
                </p>
                <p className="mt-1 max-w-xs text-xs text-gray-600 sm:text-sm">
                  Only reliable Chinese warehouses we trust with our own stock.
                </p>
              </div>
            </div>

            {/* ICON GRID – detailed benefits */}
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 sm:gap-x-8 sm:gap-y-12">
              {BENEFITS.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start text-left sm:items-center sm:text-center"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="h-16 w-16 sm:h-20 sm:w-20"
                  />
                  <h3 className="mt-4 text-sm font-semibold sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 FEATURE CARDS BELOW */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: "Vetted Partners",
              desc: "Work only with verified 3PL agents.",
            },
            {
              title: "Faster Fulfillment",
              desc: "Reduce handling times and delays.",
            },
            {
              title: "Cost Efficient",
              desc: "Optimize logistics costs end-to-end.",
            },
          ].map((i) => (
            <motion.div
              key={i.title}
              whileHover={{ y: -4 }}
              className="card px-5 pt-1 pb-5"
            >
              <div className="h-8 w-8 rounded-md bg-[var(--brand-red)]/10" />
              <div className="mt-3 font-medium">{i.title}</div>
              <div className="mt-1 text-sm text-gray-600">{i.desc}</div>
            </motion.div>
          ))} 
        </div>
      </section>
    </Layout>
  );
}
