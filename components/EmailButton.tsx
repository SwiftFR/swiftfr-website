"use client";

import { Mail } from "lucide-react";

export default function EmailButton() {
  return (
    <a
      href="mailto:swiftfr.contact@gmail.com"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition font-medium z-50"
    >
      <Mail size={20} />
      Email Us
    </a>
  );
}

