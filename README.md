# BH Celulares — Site Repaginado

Landing page profissional para a **BH Celulares**, loja especializada em iPhone e Xiaomi em Belo Horizonte.

## Stack

- **React 18** + TypeScript
- **Tailwind CSS** — estilização utilitária
- **Framer Motion** — animações e transições
- **Lucide React** — ícones
- **Vite** — build tool

## Estrutura de Pastas

```
src/
├── components/
│   ├── layout/          # Componentes estruturais (Header, Footer, WhatsAppFloat)
│   ├── sections/        # Seções da landing page (Hero, Products, FAQ, etc.)
│   └── ui/              # Componentes reutilizáveis (Button, Badge, SectionWrapper)
├── data/
│   └── index.ts         # Todos os dados estáticos do site (produtos, FAQ, depoimentos)
├── hooks/
│   ├── useInView.ts     # Hook para animações ao entrar na viewport
│   └── useScrollY.ts    # Hook para posição do scroll (transparência do header)
├── pages/
│   └── HomePage.tsx     # Página principal que compõe todas as seções
├── types/
│   └── index.ts         # Interfaces TypeScript (Product, Testimonial, FaqItem...)
├── utils/
│   └── index.ts         # Funções utilitárias (formatCurrency, buildWhatsAppUrl...)
├── App.tsx              # Componente raiz
├── index.css            # Estilos globais + Tailwind directives
└── main.tsx             # Entry point React
```

## Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Personalização

### Alterar dados dos produtos
Edite `src/data/index.ts` → array `PRODUCTS`.

### Alterar número do WhatsApp
Edite `src/data/index.ts` → constante `WHATSAPP_NUMBER`.

### Alterar cores
Edite `tailwind.config.js` → objeto `colors`.

### Adicionar novas seções
1. Crie o componente em `src/components/sections/`
2. Importe e adicione em `src/pages/HomePage.tsx`
