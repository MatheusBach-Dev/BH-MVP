import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, CheckCircle } from 'lucide-react'
import { CLIENT_PHOTOS } from '../../data'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHeader } from '../ui/SectionHeader'

export function SocialProofSection() {
  return (
    <SectionWrapper id="clientes" dark>
      <SectionHeader
        badge="Clientes reais"
        title="A emoção de quem já recebeu"
        subtitle="Centenas de clientes felizes em BH e Região Metropolitana. Essas histórias são reais."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CLIENT_PHOTOS.map((client, i) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative glass-card rounded-2xl overflow-hidden aspect-[3/4] flex flex-col justify-end group hover:border-green-500/30 transition-all duration-300"
          >
            {/* Client photo */}
            <div className="absolute inset-0">
              <img 
                src={client.image} 
                alt={client.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Overlay info */}
            <div className="relative p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div className="flex items-center gap-1 mb-1">
                <CheckCircle size={11} className="text-green-400" />
                <span className="text-green-400 text-[10px] font-bold uppercase tracking-widest">
                  {client.tag}
                </span>
              </div>
              <p className="text-white font-semibold text-sm leading-tight mb-1">
                {client.name}
              </p>
              <p className="text-gray-400 text-[11px] flex items-center gap-1">
                <MapPin size={10} />
                {client.neighborhood}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: '6+',   label: 'Anos de mercado' },
          { value: '11k+', label: 'Seguidores no Instagram' },
          { value: '500+', label: 'Clientes atendidos' },
          { value: '5.0',  label: 'Avaliação média' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card rounded-xl p-5 text-center"
          >
            <p className="text-green-400 font-bold text-2xl md:text-3xl mb-1">{stat.value}</p>
            <p className="text-gray-500 text-xs">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
