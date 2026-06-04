import React from 'react'
import { MessageCircle, Instagram, Mail, Phone } from 'lucide-react'
import { buildWhatsAppUrl } from '../../utils'
import { EMAIL, INSTAGRAM_URL, PHONE_DISPLAY, NAV_LINKS } from '../../data'

export function Footer() {
  return (
    <footer id="contato" className="bg-dark-600 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center font-bold text-black text-lg">
                BH
              </div>
              <span className="font-bold text-white text-base">BH Celulares</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Especialistas em iPhone e Xiaomi em Belo Horizonte.
            </p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/30 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/30 transition-all"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Navegação</h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Contato</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  <MessageCircle size={15} className="text-green-500 shrink-0" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  <Mail size={15} className="text-green-500 shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <Phone size={15} className="text-green-500 shrink-0" />
                Belo Horizonte · MG
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} BH Celulares. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
