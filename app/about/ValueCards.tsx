"use client";

import { motion } from "framer-motion";

export default function ValueCards() {
  const cards = [
    {
      title: "Independent",
      description:
        "We're not tied to any single warehouse or agent. We match you with the best-fit 3PL for your product, volume, and lanes.",
    },
    {
      title: "Transparent",
      description:
        "We include all costs in your product quote including sourcing, packaging, fulfillment, and shipping so there are no unexpected fees.",
    },
    {
      title: "Results-driven",
      description:
        "We analyze which products perform best and continuously optimize lanes, packaging, and carriers to increase logistics efficiency as you grow.",
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
          <p className="mt-2 text-gray-600">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

