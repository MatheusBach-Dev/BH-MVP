import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export function SectionWrapper({ id, children, className = '', dark = false }: SectionWrapperProps) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.05 })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`py-20 md:py-28 ${dark ? 'bg-dark-500' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  )
}
