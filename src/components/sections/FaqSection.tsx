import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../../data'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHeader } from '../ui/SectionHeader'
import type { FaqItem } from '../../types'

function FaqAccordionItem({ item, isOpen, onToggle }: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-green-500/30' : 'hover:border-white/15'}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-semibold text-sm md:text-base transition-colors ${isOpen ? 'text-green-400' : 'text-white'}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`shrink-0 transition-colors ${isOpen ? 'text-green-400' : 'text-gray-500'}`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('1')

  const toggle = (id: string) => setOpenId(openId === id ? null : id)

  const half = Math.ceil(FAQ_ITEMS.length / 2)
  const left = FAQ_ITEMS.slice(0, half)
  const right = FAQ_ITEMS.slice(half)

  return (
    <SectionWrapper id="faq" dark>
      <SectionHeader
        badge="Tire suas dúvidas"
        title="Perguntas frequentes"
        subtitle="Respondemos tudo o que você precisa saber antes de comprar."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          {left.map((item) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {right.map((item) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
