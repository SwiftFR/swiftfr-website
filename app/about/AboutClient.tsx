"use client";

import { motion } from "framer-motion";
import ValueCards from "./ValueCards";

export default function AboutClient() {
  return (
    <section className="py-16 sm:py-24">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold sm:text-4xl"
      >
        About SwiftFR
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 max-w-3xl text-gray-600"
      >
        I started SwiftFR after watching friends struggle with fulfillment as their stores grew slow lanes, unclear pricing, and inconsistent QC. My background is in building systems, so I treated the problem like an operations challenge: map the lanes, vet agents, standardize checks, and make communication simple.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 max-w-3xl text-gray-600"
      >
        SwiftFR is a network of trusted Chinese 3PL partners matched to your store's needs. We're independent, transparent, and focused on results so you can scale with fewer surprises and faster delivery.
      </motion.p>

      <ValueCards />
    </section>
  );
}
