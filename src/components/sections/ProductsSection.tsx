import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Tag, BookOpen } from 'lucide-react'
import { PRODUCTS } from '../../data'
import { formatCurrency, calcInstallment, buildProductWhatsAppUrl } from '../../utils'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'
import type { Product } from '../../types'

type FilterBrand = 'Apple' | 'Xiaomi' | 'Relogios'

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-green-500/30 hover:bg-white/[0.06] transition-all duration-300 group"
    >
      {/* Top row: image + badges */}
      <div className="flex items-start justify-between">
        <div className="w-20 h-20 rounded-xl bg-dark-300 overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-1.5 items-end">
          {product.badge && (
            <span className="bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {product.badge}
            </span>
          )}
          {product.isNew && (
            <span className="bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Novo
            </span>
          )}
        </div>
      </div>

      {/* Product info */}
      <div>
        <h3 className="text-white font-bold text-lg leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm">
          {product.storage} · {product.color}
        </p>
      </div>

      {/* Price */}
      <div className="mt-auto">
        <p className="text-gray-500 text-xs mb-0.5 flex items-center gap-1">
          <Tag size={11} />
          Ou {product.installments}x de
        </p>
        <p className="text-white font-bold text-xl">
          {calcInstallment(product.price, product.installments)}
        </p>
        <p className="text-gray-500 text-xs mt-0.5">
          à vista {formatCurrency(product.price)}
        </p>
      </div>

      {/* CTA */}
      <Button
        href={buildProductWhatsAppUrl(product.name)}
        target="_blank"
        variant="secondary"
        size="sm"
        fullWidth
      >
        <MessageCircle size={14} />
        Tenho interesse
      </Button>
    </motion.div>
  )
}

export function ProductsSection({ onCatalog }: { onCatalog: () => void }) {
  const [filter, setFilter] = useState<FilterBrand>('Apple')
  const filters: FilterBrand[] = ['Apple', 'Xiaomi', 'Relogios']

  const filtered = filter === 'Apple'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.brand === filter)

  return (
    <SectionWrapper id="produtos" glow="right">
      <SectionHeader
        badge="Estoque disponível"
        title="Produtos em destaque"
        subtitle="iPhone e Xiaomi novos, lacrados e com garantia."
      />

      {/* Filter tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
              filter === f
                ? 'bg-green-500 text-black'
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 flex flex-col items-center gap-4">
        <p className="text-gray-500 text-sm">
          Não encontrou o modelo que procura?
        </p>
        <Button
          href={`https://wa.me/5531996621767?text=${encodeURIComponent('Olá! Quero consultar a disponibilidade de um modelo específico.')}`}
          target="_blank"
          variant="secondary"
          size="md"
        >
          
          Consultar disponibilidade
        </Button>
        <button
          onClick={onCatalog}
          className="flex items-center gap-2 text-gray-500 hover:text-green-400 text-sm font-medium transition-colors group"
        >
          <BookOpen size={14} className="group-hover:scale-110 transition-transform" />
          Ver catálogo completo
        </button>
      </div>
    </SectionWrapper>
  )
}
