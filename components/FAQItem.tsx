"use client"
import { useState } from 'react'

export default function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card overflow-hidden">
      <button
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium">{question}</span>
        <span className={`transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 pt-0 text-sm text-gray-600">{answer}</div>}
    </div>
  )
}


