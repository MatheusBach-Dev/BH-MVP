import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Zap, Shield, Star } from 'lucide-react'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../utils'
import { useInView } from '../../hooks/useInView'

export function CtaSection() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="py-20 md:py-28 bg-dark-600 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-green-500/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            <Zap size={11} />
            Entrega em até 2 horas em BH
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Pronto para receber seu{' '}
            <span className="text-green-500">novo celular hoje?</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Fale com nossa equipe agora pelo WhatsApp. Respondemos em minutos, confirmamos o estoque e organizamos sua entrega.
          </p>

          <Button
            href={buildWhatsAppUrl()}
            target="_blank"
            size="lg"
            className="mb-10"
          >
            Falar com a equipe agora
          </Button>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {[
              { icon: <Shield size={14} className="text-green-500" />, text: 'Produto original garantido' },
              { icon: <Zap size={14} className="text-green-500" />,    text: 'Sem burocracia' },
            ].map((t) => (
              <span key={t.text} className="flex items-center gap-1.5">
                {t.icon} {t.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
