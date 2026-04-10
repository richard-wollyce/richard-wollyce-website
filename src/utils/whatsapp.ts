export type WhatsAppLeadFields = {
  name: string
  email: string
  service: string
  message: string
}

export const WHATSAPP_FIELD_LIMITS = {
  name: 80,
  email: 254,
  service: 80,
  message: 1200,
} as const

export const WHATSAPP_QUICK_MESSAGE_MAX_LENGTH = 320

export function sanitizeWhatsAppNumber(number: string) {
  return number.replace(/\D/g, '')
}

function normalizeLineEndings(value: string) {
  return value.replace(/\r\n?/g, '\n')
}

function normalizeSingleLineValue(value: string, maxLength: number) {
  return normalizeLineEndings(value).replace(/\s+/g, ' ').trim().slice(0, maxLength)
}

function normalizeEmailValue(value: string) {
  return normalizeLineEndings(value)
    .replace(/\s+/g, '')
    .trim()
    .slice(0, WHATSAPP_FIELD_LIMITS.email)
}

function normalizeMultilineValue(value: string, maxLength: number) {
  return normalizeLineEndings(value)
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, maxLength)
}

export function limitLeadFieldValue(
  field: keyof WhatsAppLeadFields,
  value: string,
) {
  const normalizedInput = normalizeLineEndings(value)

  if (field === 'email') {
    return normalizedInput
      .replace(/\s+/g, '')
      .slice(0, WHATSAPP_FIELD_LIMITS.email)
  }

  return normalizedInput.slice(0, WHATSAPP_FIELD_LIMITS[field])
}

export function normalizeWhatsAppLeadFields(fields: WhatsAppLeadFields) {
  return {
    name: normalizeSingleLineValue(fields.name, WHATSAPP_FIELD_LIMITS.name),
    email: normalizeEmailValue(fields.email),
    service: normalizeSingleLineValue(fields.service, WHATSAPP_FIELD_LIMITS.service),
    message: normalizeMultilineValue(fields.message, WHATSAPP_FIELD_LIMITS.message),
  }
}

export function normalizeQuickWhatsAppMessage(message: string) {
  return normalizeMultilineValue(message, WHATSAPP_QUICK_MESSAGE_MAX_LENGTH)
}

export function buildWhatsAppMessage(fields: WhatsAppLeadFields) {
  const normalized = normalizeWhatsAppLeadFields(fields)
  const serviceLine = normalized.service || 'General project inquiry'

  return [
    'Hello Richard,',
    '',
    `Name: ${normalized.name}`,
    `Email: ${normalized.email}`,
    `Service focus: ${serviceLine}`,
    '',
    'Project details:',
    normalized.message,
  ].join('\n')
}

export function generateQuickWhatsAppUrl(number: string, message: string) {
  const sanitizedNumber = sanitizeWhatsAppNumber(number)
  const normalizedMessage = normalizeQuickWhatsAppMessage(message)
  const query = normalizedMessage
    ? `?text=${encodeURIComponent(normalizedMessage)}`
    : ''

  return `https://wa.me/${sanitizedNumber}${query}`
}

export function generateWhatsAppUrl(
  number: string,
  fields: WhatsAppLeadFields,
) {
  return generateQuickWhatsAppUrl(number, buildWhatsAppMessage(fields))
}
