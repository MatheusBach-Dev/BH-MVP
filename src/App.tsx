import React, { useState } from 'react'
import { Header }        from './components/layout/Header'
import { Footer }        from './components/layout/Footer'
import { WhatsAppFloat } from './components/layout/WhatsAppFloat'
import { HomePage }      from './pages/HomePage'
import { CatalogPage }   from './pages/CatalogPage'

export default function App() {
  const [page, setPage] = useState<'home' | 'catalog'>('home')

  if (page === 'catalog') {
    return (
      <>
        <Header isCatalog onHome={() => { setPage('home'); window.scrollTo(0, 0) }} />
        <WhatsAppFloat />
        <CatalogPage onBack={() => { setPage('home'); window.scrollTo(0, 0) }} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header onCatalog={() => { setPage('catalog'); window.scrollTo(0, 0) }} />
      <HomePage onCatalog={() => { setPage('catalog'); window.scrollTo(0, 0) }} />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
