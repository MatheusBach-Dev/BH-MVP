import { WHATSAPP_NUMBER } from '../data'

/**
 * Formats a number as Brazilian currency (BRL).
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  })
}

/**
 * Calculates the installment value.
 */
export function calcInstallment(price: number, installments: number): string {
  const value = price / installments
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
}

/**
 * Builds a WhatsApp deep-link URL with optional custom message.
 */
export function buildWhatsAppUrl(message?: string): string {
  const defaultMessage = 'Olá! Vim pelo site e quero saber mais sobre os celulares disponíveis.'
  const encoded = encodeURIComponent(message ?? defaultMessage)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

/**
 * Builds a WhatsApp URL pre-filled with a specific product inquiry.
 */
export function buildProductWhatsAppUrl(productName: string): string {
  const message = `Olá! Vim pelo site e tenho interesse no ${productName}. Ainda está disponível?`
  return buildWhatsAppUrl(message)
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
