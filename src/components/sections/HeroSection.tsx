import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, BookOpen } from 'lucide-react'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../utils'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const itemRight = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 } },
}

export function HeroSection({ onCatalog }: { onCatalog: () => void }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-600"
    >

      {/* Top vignette */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111318]/40 via-transparent to-[#111318]/90 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                BH e Região
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              iPhones, Xiaomi<br />
              e Relógios com<br />
              <span className="text-green-500" style={{ textShadow: '0 0 40px rgba(0,200,83,0.4)' }}>
                Garantia em BH
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-gray-400 text-lg leading-relaxed max-w-md mb-8"
            >
              iPhone e Xiaomi novos, lacrados e com garantia.
              Entregamos em Belo Horizonte e Região Metropolitana.{' '}
              <span className="text-gray-200 font-medium">Pague só quando receber.</span>
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto">
              <Button href={buildWhatsAppUrl()} target="_blank" size="lg">
                Quero meu celular agora
              </Button>
              <Button href="#produtos" variant="secondary" size="lg">
                Ver produtos
                <ArrowRight size={16} />
              </Button>
            </motion.div>

            <motion.div variants={item}>
              <button
                onClick={onCatalog}
                className="flex items-center gap-2 text-gray-500 hover:text-green-400 text-sm font-medium transition-colors group"
              >
                <BookOpen size={14} className="group-hover:scale-110 transition-transform" />
                Ver catálogo completo
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>


          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            variants={itemRight}
            initial="hidden"
            animate="show"
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[480px] aspect-[4/5]">
              {/* Center content — placeholder for user's image */}
              <div className="absolute inset-0 rounded-3xl flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <span className="text-3xl">📱</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
