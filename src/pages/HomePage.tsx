import React from 'react'
import { HeroSection }         from '../components/sections/HeroSection'
import { DifferentialsSection } from '../components/sections/DifferentialsSection'
import { ProductsSection }      from '../components/sections/ProductsSection'
import { SocialProofSection }   from '../components/sections/SocialProofSection'
import { TestimonialsSection }  from '../components/sections/TestimonialsSection'
import { FaqSection }           from '../components/sections/FaqSection'
import { CtaSection }           from '../components/sections/CtaSection'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <DifferentialsSection />
      <ProductsSection />
      <SocialProofSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
    </main>
  )
}
