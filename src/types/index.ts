export interface Product {
  id: string
  name: string
  brand: 'Apple' | 'Xiaomi' | 'Relogios'
  model: string
  storage: string
  color: string
  price: number
  installments: number
  badge?: string
  isNew?: boolean
  emoji: string
  image: string
}

export interface Testimonial {
  id: string
  name: string
  neighborhood: string
  city: string
  rating: number
  comment: string
  product: string
  initials: string
  avatarColor: string
}

export interface ClientPhoto {
  id: string
  name: string
  neighborhood: string
  product: string
  tag: string
  image: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface Differential {
  id: string
  icon: string
  title: string
  description: string
}

export interface NavLink {
  label: string
  href: string
}
