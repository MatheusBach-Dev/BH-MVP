import React from 'react'
import { motion } from 'framer-motion'
import { buildWhatsAppUrl } from '../../utils'

export function WhatsAppFloat() {
  return (
    <motion.a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 animate-pulse-green"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src="/src/assets/whatsapp.png" 
        alt="WhatsApp" 
        className="w-7 h-7"
      />
    </motion.a>
  )
}
