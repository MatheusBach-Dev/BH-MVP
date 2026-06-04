import React from 'react'
import { Header }       from './components/layout/Header'
import { Footer }       from './components/layout/Footer'
import { WhatsAppFloat } from './components/layout/WhatsAppFloat'
import { HomePage }     from './pages/HomePage'

export default function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
