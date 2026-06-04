import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHeader } from '../ui/SectionHeader'

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <SectionWrapper id="depoimentos" glow="right">
      <SectionHeader
        badge="Avaliações"
        title="O que nossos clientes dizem"
        subtitle="Mais de 500 clientes satisfeitos. Confira os depoimentos de quem já comprou."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-green-500/20 transition-all duration-300"
          >
            {/* Quote icon + stars */}
            <div className="flex items-center justify-between">
              <Quote size={20} className="text-green-500/40" />
              <StarRow count={t.rating} />
            </div>

            {/* Comment */}
            <p className="text-gray-300 text-sm leading-relaxed flex-1">
              "{t.comment}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2 border-t border-white/5">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ backgroundColor: t.avatarColor + '33', border: `1px solid ${t.avatarColor}55` }}
              >
                <span style={{ color: t.avatarColor }}>{t.initials}</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-none mb-0.5">{t.name}</p>
                <p className="text-gray-500 text-xs">
                  {t.neighborhood} · {t.product}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
