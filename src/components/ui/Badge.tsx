import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'white' | 'orange'
  className?: string
}

export function Badge({ children, variant = 'green', className = '' }: BadgeProps) {
  const variants = {
    green:  'bg-green-500/10 border border-green-500/30 text-green-400',
    white:  'bg-white/5 border border-white/10 text-gray-300',
    orange: 'bg-orange-500/10 border border-orange-500/30 text-orange-400',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
