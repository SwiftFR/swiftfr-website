"use client"
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'


const steps = [
  {
    title: 'Connect',
    desc: 'Connect our agents directly with your store (Shopify, Etsy, WooCommerce).',
    image: '/shopify connect.png',
  },
  {
    title: 'Source',
    desc: 'We source your products directly from 1688 / AliExpress suppliers.',
    image: '/Swift sourcers.png',
  },
  {
    title: 'Packaging & Branding',
    desc: 'We store, pack, brand, and fulfill orders from our warehouses.',
    image: '/branding logo.png',
  },
  {
    title: 'Fast Shipping',
    desc: 'Customers receive their package in 5-12 days with tracking.',
    image: '/happy customer logo.png',
  },
]

export default function ServicesPage() {
  return (
    <Layout>
      <section className="py-16 sm:py-24">
        <motion.h1 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-3xl font-semibold sm:text-4xl">How We Work</motion.h1>
        <motion.p initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.1}} className="mt-4 max-w-2xl text-gray-600">A simple process to get you shipping reliably from China.</motion.p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div key={s.title} className="card p-6" whileHover={{ y: -4 }} initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}}>
              <div className="text-sm font-medium text-[var(--brand-red)]">Step {idx + 1}</div>
              <div className="mt-2 text-lg font-semibold">{s.title}</div>
              <div className="mt-1 text-sm text-gray-600">{s.desc}</div>
              <div className="mt-6 flex justify-center">
                <Image 
                  src={s.image} 
                  alt={s.title}
                  width={240}
                  height={240}
                  className="h-48 w-48 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  )
}


