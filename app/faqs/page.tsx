"use client"
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import FAQItem from '@/components/FAQItem'


const faqs = [
  {
    q: 'How do we pair your store with the best logistics partner?',
    a: 'We carefully match your products with the fulfillment agency that specializes in your niche and can handle your orders most effectively based on order volume and product specifications. Our network of agents is equipped to manage the entire AliExpress catalogue, ensuring flexibility and reliability no matter what you sell.'
  },
  {
    q: 'How do we price you?',
    a: 'We match you with our fulfillment centers free of charge. Our commission is then included in the all-in quote you receive, so you always see the full cost upfront.'
  },
  {
    q: 'What order volumes do you support?',
    a: 'We can easily process 1,000–2,000 daily orders and have the capacity to fulfill an additional 2,000–5,000 if needed. Our network is fully scalable, and you can leverage the entire AliExpress catalog through our fulfillment partners.'
  },
  {
    q: 'Can you handle branded packaging and QC?',
    a: 'Yes, our partners support custom packaging, personalized branding, and quality control.'
  },
]

const processingFaqs = [
  {
    q: 'Do we have MOQs?',
    a: 'For most products, no MOQ required'
  },
  {
    q: 'Do you provide tracking for my customers\' packages?',
    a: 'Yes — every order fulfilled through our partners includes full tracking details, which can be shared directly with your customers. This ensures transparency, reliability, and peace of mind throughout the delivery process.'
  },
  {
    q: 'How does SwiftFR process quotations?',
    a: 'Send us your product info — an AliExpress link, Shopify page, or clear photos and we\'ll source it right away. Our agents then provide a full, transparent quote via WhatsApp, covering product cost, sourcing, packing, and shipping. No hidden fees.'
  },
]

export default function FAQPage() {
  return (
    <Layout>
      <section className="py-16 sm:py-24">
        <motion.h1 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-3xl font-semibold sm:text-4xl">FAQs</motion.h1>
        
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="mt-8 text-xl font-semibold sm:text-2xl">General</motion.h2>
        <div className="mt-6 grid grid-cols-1 gap-4">
          {faqs.map((f) => (
            <motion.div key={f.q} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}}>
              <FAQItem question={f.q} answer={f.a} />
            </motion.div>
          ))}
        </div>
        
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="mt-16 text-xl font-semibold sm:text-2xl">Processing</motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-4">
          {processingFaqs.map((f) => (
            <motion.div key={f.q} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}}>
              <FAQItem question={f.q} answer={f.a} />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  )
}


