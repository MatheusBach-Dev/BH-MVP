import type { Product, Testimonial, FaqItem, Differential, NavLink, ClientPhoto } from '../types'

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Início',      href: '#hero' },
  { label: 'Produtos',    href: '#produtos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas',     href: '#faq' },
  { label: 'Contato',     href: '#contato' },
]

// ─── Products ─────────────────────────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    brand: 'Apple',
    model: 'iPhone 16',
    storage: '128GB',
    color: 'Preto Titânio',
    price: 5299,
    installments: 18,
    badge: 'Mais Vendido',
    isNew: true,
    emoji: '📱',
    image: '/src/assets/product-iphone.jpg',
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    brand: 'Apple',
    model: 'iPhone 15',
    storage: '128GB',
    color: 'Rosa',
    price: 4199,
    installments: 18,
    badge: 'Oferta',
    emoji: '📱',
    image: '/src/assets/iphone3.PNG',
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    brand: 'Apple',
    model: 'iPhone 14',
    storage: '128GB',
    color: 'Midnight',
    price: 3299,
    installments: 18,
    emoji: '📱',
    image: '/src/assets/iphone4.PNG',
  },
  {
    id: 'redmi-note-13',
    name: 'Redmi Note 13 Pro',
    brand: 'Xiaomi',
    model: 'Redmi Note 13 Pro',
    storage: '256GB',
    color: 'Preto',
    price: 1899,
    installments: 18,
    badge: 'Melhor Custo-Benefício',
    emoji: '📲',
    image: '/src/assets/product-xiaomi.jpg',
  },
  {
    id: 'poco-x6',
    name: 'Poco X6 Pro',
    brand: 'Xiaomi',
    model: 'Poco X6 Pro',
    storage: '256GB',
    color: 'Amarelo',
    price: 2099,
    installments: 18,
    isNew: true,
    emoji: '📲',
    image: '/src/assets/xiaomi3.PNG',
  },
  {
    id: 'redmi-13c',
    name: 'Redmi 13C',
    brand: 'Xiaomi',
    model: 'Redmi 13C',
    storage: '128GB',
    color: 'Verde',
    price: 899,
    installments: 12,
    badge: 'Entrada',
    emoji: '📲',
    image: '/src/assets/xiaomi4.PNG',
  },
  {
    id: 'apple-watch-series-9',
    name: 'Apple Watch Series 9',
    brand: 'Relogios',
    model: 'Apple Watch Series 9',
    storage: '45mm',
    color: 'Midnight',
    price: 2799,
    installments: 18,
    badge: 'Premium',
    isNew: true,
    emoji: '⌚',
    image: '/src/assets/relogio1.PNG',
  },
  {
    id: 'xiaomi-watch-s3',
    name: 'Xiaomi Watch S3',
    brand: 'Relogios',
    model: 'Xiaomi Watch S3',
    storage: '46mm',
    color: 'Preto',
    price: 899,
    installments: 12,
    badge: 'Custo-Benefício',
    emoji: '⌚',
    image: '/src/assets/relogio2.PNG',
  },
  {
    id: 'amazfit-gts-4',
    name: 'Amazfit GTS 4',
    brand: 'Relogios',
    model: 'Amazfit GTS 4',
    storage: '42mm',
    color: 'Rose Gold',
    price: 599,
    installments: 12,
    badge: 'Oferta',
    emoji: '⌚',
    image: '/src/assets/relogio3.PNG',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Silva',
    neighborhood: 'Savassi',
    city: 'BH',
    rating: 5,
    comment: 'Recebi meu iPhone 15 em menos de 2 horas! O aparelho veio lacrado, com nota fiscal. Atendimento impecável. Recomendo demais!',
    product: 'iPhone 15 128GB',
    initials: 'MS',
    avatarColor: '#00C853',
  },
  {
    id: '2',
    name: 'Carlos Eduardo',
    neighborhood: 'Contagem',
    city: 'Região Metropolitana',
    rating: 5,
    comment: 'Paguei só quando o entregador chegou na minha porta. Isso me deu muita segurança. Celular original, sem arranhado. Top demais!',
    product: 'Redmi Note 13 Pro',
    initials: 'CE',
    avatarColor: '#1E88E5',
  },
  {
    id: '3',
    name: 'Fernanda Rocha',
    neighborhood: 'Castelo',
    city: 'BH',
    rating: 5,
    comment: 'Já é o segundo iPhone que compro aqui. Preço justo, produto original e entrega rapidíssima. Loja de confiança total!',
    product: 'iPhone 14 128GB',
    initials: 'FR',
    avatarColor: '#E91E63',
  },
  {
    id: '4',
    name: 'Ricardo Mendes',
    neighborhood: 'Belo Horizonte',
    city: 'BH',
    rating: 5,
    comment: 'Comprei o Poco X6 Pro e chegou perfeito, lacrado. Parcelei em 18x no cartão. Muito mais barato que nas lojas físicas aqui.',
    product: 'Poco X6 Pro 256GB',
    initials: 'RM',
    avatarColor: '#FF6F00',
  },
]

// ─── Client Photos ─────────────────────────────────────────────────────────────
export const CLIENT_PHOTOS: ClientPhoto[] = [
  { id: '1', name: 'João Carlos',  neighborhood: 'Santa Amélia/BH', product: 'Xiaomi',       tag: '#XIAOMI',   image: '/src/assets/cliente1.PNG' },
  { id: '2', name: 'Pedro Alves',  neighborhood: 'Sinibu',          product: 'Poco X6',      tag: 'Entrega',   image: '/src/assets/cliente2.PNG' },
  { id: '3', name: 'Ana Clara',    neighborhood: 'Centro/BH',        product: 'Poco X4 Pro',  tag: '#POCO',     image: '/src/assets/cliente3.PNG' },
  { id: '4', name: 'Camila Dias',  neighborhood: 'Castelo/BH',       product: 'iPhone 13',    tag: '#IPHONE13', image: '/src/assets/cliente4.PNG' },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'Os produtos possuem garantia?',
    answer: 'Sim! iPhone tem 1 ano de garantia Apple. Aparelhos Xiaomi/Redmi possuem 6 meses de garantia com suporte do nosso time especialista.',
  },
  {
    id: '2',
    question: 'Os smartphones são originais e lacrados?',
    answer: 'Sim, trabalhamos exclusivamente com produtos originais e lacrados de fábrica. Todos os iPhones são importados diretamente dos EUA com garantia Apple válida.',
  },
  {
    id: '3',
    question: 'Qual o prazo de entrega?',
    answer: 'Para Belo Horizonte e Região Metropolitana conseguimos entregar em até 2 horas. Para outras localidades, o prazo varia conforme o CEP.',
  },
  {
    id: '4',
    question: 'Posso pagar na entrega?',
    answer: 'Sim! Para entregas na Região Metropolitana de BH você pode efetivar o pagamento somente no momento em que receber seu pedido. Mais segurança para você!',
  },
  {
    id: '5',
    question: 'Quais as formas de pagamento?',
    answer: 'Aceitamos PIX (com desconto), cartão de débito e crédito. Parcelamos em até 18x com juros. Não trabalhamos com boleto.',
  },
  {
    id: '6',
    question: 'Vocês têm assistência técnica?',
    answer: 'Sim! Contamos com equipe especializada em assistência técnica para smartphones Xiaomi e iPhone. Entre em contato para consultar condições.',
  },
  {
    id: '7',
    question: 'Como verifico a disponibilidade de um modelo?',
    answer: 'Consulte diretamente pelo WhatsApp. Nossa equipe responde em minutos e confirma estoque disponível em tempo real.',
  },
  {
    id: '8',
    question: 'É possível fazer a troca de um produto?',
    answer: 'Consulte nosso time de atendimento pelo WhatsApp para verificar as condições de troca disponíveis para o seu caso.',
  },
  {
    id: '9',
    question: 'Os aparelhos possuem homologação Anatel?',
    answer: 'Sim. O selo Anatel pode ser afixado no corpo do aparelho, na bateria ou no manual. Todos os produtos estão em conformidade com a legislação brasileira.',
  },
]

// ─── Differentials ────────────────────────────────────────────────────────────
export const DIFFERENTIALS: Differential[] = [
  {
    id: '1',
    icon: '⚡',
    title: 'Entrega em até 2h',
    description: 'Receba seu celular novo hoje mesmo. BH e Região Metropolitana.',
  },
  {
    id: '2',
    icon: '🔒',
    title: 'Pague na entrega',
    description: 'Só pague quando o pedido chegar na sua porta. Sem riscos.',
  },
  {
    id: '3',
    icon: '📦',
    title: 'Produto original',
    description: 'Lacrado de fábrica, com nota fiscal e garantia de origem.',
  },
  {
    id: '4',
    icon: '⭐',
    title: 'Avaliação 5 estrelas',
    description: 'Mais de 6 anos no mercado e centenas de clientes satisfeitos.',
  },
  {
    id: '5',
    icon: '💳',
    title: 'Parcelamento em 18x',
    description: 'Parcele no cartão de crédito com as melhores condições.',
  },
  {
    id: '6',
    icon: '🛠️',
    title: 'Assistência técnica',
    description: 'Equipe especializada em iPhone e Xiaomi para pós-venda.',
  },
]

// ─── Contact ──────────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '5531996621767'
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo site e quero saber mais sobre os celulares disponíveis.'
export const INSTAGRAM_URL = 'https://instagram.com/bhrelogiosepresentes'
export const EMAIL = 'atende.bhpresentes.lucas@gmail.com'
export const PHONE_DISPLAY = '(31) 9.9662-1767'
