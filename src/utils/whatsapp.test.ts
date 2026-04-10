import { describe, expect, it } from 'vitest'
import {
  WHATSAPP_FIELD_LIMITS,
  WHATSAPP_QUICK_MESSAGE_MAX_LENGTH,
  buildWhatsAppMessage,
  generateWhatsAppUrl,
  normalizeQuickWhatsAppMessage,
  normalizeWhatsAppLeadFields,
  sanitizeWhatsAppNumber,
} from './whatsapp.ts'

describe('whatsapp helpers', () => {
  it('sanitizes numbers to digits only', () => {
    expect(sanitizeWhatsAppNumber('+55 16 99159-7978')).toBe('5516991597978')
  })

  it('normalizes and truncates lead fields before sending', () => {
    const normalized = normalizeWhatsAppLeadFields({
      name: '  Avery    Stone  ',
      email: '  avery@example.com  ',
      service: ` ${'Automation '.repeat(20)} `,
      message: '  Need help\r\n\r\n\r\nwith intake and quoting.  ',
    })

    expect(normalized.name).toBe('Avery Stone')
    expect(normalized.email).toBe('avery@example.com')
    expect(normalized.service.length).toBeLessThanOrEqual(
      WHATSAPP_FIELD_LIMITS.service,
    )
    expect(normalized.message).toBe('Need help\n\nwith intake and quoting.')
  })

  it('builds a readable message from form fields', () => {
    const message = buildWhatsAppMessage({
      name: ' Avery ',
      email: ' avery@example.com ',
      service: ' Automation ',
      message: ' Need help improving intake and quoting. ',
    })

    expect(message).toContain('Name: Avery')
    expect(message).toContain('Service focus: Automation')
    expect(message).toContain('Project details:')
  })

  it('creates an encoded WhatsApp url', () => {
    const url = generateWhatsAppUrl('+55 16 99159-7978', {
      name: 'Avery',
      email: 'avery@example.com',
      service: 'Automation',
      message: 'Need help improving intake and quoting.',
    })

    expect(url.startsWith('https://wa.me/5516991597978?text=')).toBe(true)
    expect(new URL(url).searchParams.get('text')).toContain(
      'Need help improving intake and quoting.',
    )
  })

  it('truncates quick messages to a safe maximum length', () => {
    const longMessage = 'A'.repeat(WHATSAPP_QUICK_MESSAGE_MAX_LENGTH + 50)

    expect(normalizeQuickWhatsAppMessage(longMessage)).toHaveLength(
      WHATSAPP_QUICK_MESSAGE_MAX_LENGTH,
    )
  })
})
