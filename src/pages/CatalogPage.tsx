import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, MessageCircle, Tag, ArrowLeft, SlidersHorizontal, X } from 'lucide-react'
import { PRODUCTS } from '../data'
import { formatCurrency, calcInstallment, buildProductWhatsAppUrl } from '../utils'
import { Button } from '../components/ui/Button'
import type { Product } from '../types'

type FilterBrand = 'Todos' | 'Apple' | 'Xiaomi' | 'Relogios'

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-green-500/30 hover:bg-white/[0.06] transition-all duration-300 group"
    >
      <div className="flex items-start justify-between">
        <div className="w-20 h-20 rounded-xl bg-dark-300 overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
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

      <div>
        <h3 className="text-white font-bold text-lg leading-tight mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.storage} · {product.color}</p>
      </div>

      <div className="mt-auto">
        <p className="text-gray-500 text-xs mb-0.5 flex items-center gap-1">
          <Tag size={11} />
          Ou {product.installments}x de
        </p>
        <p className="text-white font-bold text-xl">{calcInstallment(product.price, product.installments)}</p>
        <p className="text-gray-500 text-xs mt-0.5">à vista {formatCurrency(product.price)}</p>
      </div>

      <Button href={buildProductWhatsAppUrl(product.name)} target="_blank" variant="secondary" size="sm" fullWidth>
        <MessageCircle size={14} />
        Tenho interesse
      </Button>
    </motion.div>
  )
}

interface CatalogPageProps {
  onBack: () => void
}

export function CatalogPage({ onBack }: CatalogPageProps) {
  const [search, setSearch]     = useState('')
  const [filter, setFilter]     = useState<FilterBrand>('Todos')
  const [sortBy, setSortBy]     = useState<'default' | 'asc' | 'desc'>('default')

  const filters: FilterBrand[] = ['Todos', 'Apple', 'Xiaomi', 'Relogios']

  const filtered = useMemo(() => {
    let result: Product[] = filter === 'Todos' ? PRODUCTS : PRODUCTS.filter(p => p.brand === filter)

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q) ||
        p.storage.toLowerCase().includes(q)
      )
    }

    if (sortBy === 'asc')  result = [...result].sort((a, b) => a.price - b.price)
    if (sortBy === 'desc') result = [...result].sort((a, b) => b.price - a.price)

    return result
  }, [filter, search, sortBy])

  return (
    <div className="min-h-screen bg-dark-600">
      {/* Glow */}
      <div className="fixed inset-0 bg-hero-glow pointer-events-none opacity-50" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-green-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-28">

        {/* Header da página */}
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Voltar
          </button>
          <div className="h-4 w-px bg-white/10" />
          <div>
            <h1 className="text-white font-bold text-2xl leading-none">Catálogo Completo</h1>
            <p className="text-gray-500 text-sm mt-0.5">BH Relógios, Celulares e Presentes</p>
          </div>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar por nome, modelo, cor..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-10 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-colors"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 glass-card rounded-xl px-4 py-3 text-sm text-gray-400">
            <SlidersHorizontal size={14} className="text-green-500" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as typeof sortBy)}
              className="bg-transparent text-gray-400 focus:outline-none cursor-pointer"
            >
              <option value="default" className="bg-dark-600">Relevância</option>
              <option value="asc"     className="bg-dark-600">Menor preço</option>
              <option value="desc"    className="bg-dark-600">Maior preço</option>
            </select>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === f ? 'bg-green-500 text-black' : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-gray-600 text-sm self-center">
            {filtered.length} produto{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 gap-3">
            <p className="text-gray-500 text-lg">Nenhum produto encontrado</p>
            <button onClick={() => { setSearch(''); setFilter('Todos') }} className="text-green-400 text-sm hover:underline">
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
