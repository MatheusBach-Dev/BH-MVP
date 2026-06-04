import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'

interface CatalogSectionProps {
  onCatalog?: () => void
}

export function CatalogSection({ onCatalog }: CatalogSectionProps) {
  return (
    <SectionWrapper id="catalogo" glow="center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center gap-6"
      >
        <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
          <BookOpen size={24} className="text-green-400" />
        </div>
        <div>
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-3">Catálogo Completo</h2>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Explore todos os nossos produtos com filtros, busca e ordenação por preço.
          </p>
        </div>
        <button
          onClick={onCatalog}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 group"
        >
          Ver catálogo completo
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </SectionWrapper>
  )
}
