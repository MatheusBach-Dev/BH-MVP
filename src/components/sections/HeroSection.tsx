import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Star, Zap, Shield } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { buildWhatsAppUrl } from '../../utils'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-600"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,200,83,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,83,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <Badge className="mb-6">
              <Star size={11} fill="currentColor" />
              Avaliação 5.0 · Mais de 6 anos em BH
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-4xl"
          >
            Seu iPhone novo{' '}
            <span className="text-green-500">chega hoje</span>
            <br className="hidden sm:block" /> em até{' '}
            <span className="text-green-500">2 horas</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            iPhone e Xiaomi novos e lacrados, entregues em Belo Horizonte e Região Metropolitana.{' '}
            <span className="text-gray-300 font-medium">Pague só quando receber.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-14">
            <Button href={buildWhatsAppUrl()} target="_blank" size="lg">
              <MessageCircle size={18} />
              Quero meu celular agora
            </Button>
            <Button href="#produtos" variant="secondary" size="lg">
              Ver produtos
              <ChevronDown size={16} />
            </Button>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: <Zap size={13} />, text: 'Entrega em até 2h' },
              { icon: <Shield size={13} />, text: 'Original e lacrado' },
              { icon: <Star size={13} fill="currentColor" />, text: 'Pague na entrega' },
            ].map((pill) => (
              <span
                key={pill.text}
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-4 py-2 rounded-full"
              >
                <span className="text-green-400">{pill.icon}</span>
                {pill.text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-600 text-xs font-medium tracking-widest uppercase">Rolar</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
