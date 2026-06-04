import React from 'react'
import { motion } from 'framer-motion'
import { DIFFERENTIALS } from '../../data'
import { useInView } from '../../hooks/useInView'

export function DifferentialsSection() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div className="bg-dark-500 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {DIFFERENTIALS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-xl glass-card-green flex items-center justify-center text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-white font-semibold text-sm leading-tight">
                {item.title}
              </span>
              <span className="text-gray-500 text-xs leading-relaxed hidden md:block">
                {item.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
