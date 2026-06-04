import React from 'react'
import { HeroSection }          from '../components/sections/HeroSection'
import { DifferentialsSection } from '../components/sections/DifferentialsSection'
import { ProductsSection }      from '../components/sections/ProductsSection'
import { SocialProofSection }   from '../components/sections/SocialProofSection'
import { TestimonialsSection }  from '../components/sections/TestimonialsSection'
import { CtaSection }           from '../components/sections/CtaSection'
import { FaqSection }           from '../components/sections/FaqSection'

interface HomePageProps {
  onCatalog: () => void
}

export function HomePage({ onCatalog }: HomePageProps) {
  return (
    <main>
      <HeroSection onCatalog={onCatalog} />
      <DifferentialsSection />
      <ProductsSection onCatalog={onCatalog} />
      <SocialProofSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
    </main>
  )
}
