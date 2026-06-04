import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, BookOpen } from 'lucide-react'
import { NAV_LINKS } from '../../data'
import { buildWhatsAppUrl } from '../../utils'
import { useScrollY } from '../../hooks/useScrollY'
import { Button } from '../ui/Button'

interface HeaderProps {
  onCatalog?: () => void
  onHome?: () => void
  isCatalog?: boolean
}

export function Header({ onCatalog, onHome, isCatalog = false }: HeaderProps) {
  const scrollY = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)
  const isScrolled = scrollY > 40

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#111318]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href={isCatalog ? undefined : '#hero'}
            onClick={isCatalog ? onHome : undefined}
            className="flex flex-col items-center group cursor-pointer"
          >
            <img 
              src="/src/assets/logo.PNG" 
              alt="BH Celulares" 
              className="h-12 w-auto"
            />
            <span className="text-gray-500 text-[10px] font-medium tracking-wide leading-none -mt-0.5">
              Relógios · Celulares · Presentes
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {!isCatalog && NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            {onCatalog && !isCatalog && (
              <button
                onClick={onCatalog}
                className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
              >
                <BookOpen size={14} />
                Catálogo
              </button>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#111318]/98 backdrop-blur-xl border-t border-white/5"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {!isCatalog && NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}
              {onCatalog && !isCatalog && (
                <button
                  onClick={() => { onCatalog(); setMenuOpen(false) }}
                  className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium flex items-center gap-2"
                >
                  <BookOpen size={14} />
                  Catálogo
                </button>
              )}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
