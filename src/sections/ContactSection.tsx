import { useState, type ChangeEvent, type FormEvent } from 'react'
import { SectionHeading } from '../components/SectionHeading.tsx'
import type { ContactContent } from '../types/content.ts'
import {
  generateWhatsAppUrl,
  limitLeadFieldValue,
  normalizeWhatsAppLeadFields,
  type WhatsAppLeadFields,
  WHATSAPP_FIELD_LIMITS,
} from '../utils/whatsapp.ts'

type ContactSectionProps = {
  contact: ContactContent
}

type FormErrors = Partial<Record<keyof WhatsAppLeadFields, string>>

const initialFormState: WhatsAppLeadFields = {
  name: '',
  email: '',
  service: '',
  message: '',
}

function validateForm(values: WhatsAppLeadFields) {
  const errors: FormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Project details are required.'
  }

  return errors
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [formState, setFormState] = useState(initialFormState)
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange =
    (field: keyof WhatsAppLeadFields) =>
    (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const nextValue = limitLeadFieldValue(field, event.target.value)

      setFormState((current) => ({
        ...current,
        [field]: nextValue,
      }))

      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const normalizedFormState = normalizeWhatsAppLeadFields(formState)
    const nextErrors = validateForm(normalizedFormState)

    setFormState(normalizedFormState)

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    const url = generateWhatsAppUrl(contact.whatsappNumber, normalizedFormState)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section" id="contact">
      <SectionHeading
        label={contact.label}
        title={contact.title}
        intro={contact.intro}
      />

      <div className="contact-grid">
        <div className="contact-copy">
          <article className="surface-panel">
            <p className="modal-kicker">CONTACT CHANNELS</p>
            <div className="channel-list">
              {contact.channels.map((channel) => (
                <a
                  key={channel.label}
                  className="channel-row"
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    channel.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  <span>{channel.label}</span>
                  <strong>{channel.value}</strong>
                </a>
              ))}
            </div>
          </article>

          <article className="surface-panel">
            <p className="modal-kicker">CURRENT CONTEXT</p>
            <p className="contact-availability">{contact.availability}</p>
            <p className="contact-note">
              WhatsApp is the fastest route for first contact. Email and GitHub
              stay available for follow-up and technical review.
            </p>
          </article>
        </div>

        <article className="surface-panel contact-form-panel">
          <p className="section-label">{contact.formHeading}</p>
          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <label className="field">
              <span>IDENTIFIER</span>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange('name')}
                aria-invalid={Boolean(errors.name)}
                maxLength={WHATSAPP_FIELD_LIMITS.name}
                placeholder="Your name"
              />
              {errors.name ? <small>{errors.name}</small> : null}
            </label>

            <label className="field">
              <span>ENDPOINT_ADDRESS</span>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange('email')}
                aria-invalid={Boolean(errors.email)}
                maxLength={WHATSAPP_FIELD_LIMITS.email}
                placeholder="you@company.com"
              />
              {errors.email ? <small>{errors.email}</small> : null}
            </label>

            <label className="field">
              <span>SERVICE_FOCUS</span>
              <input
                type="text"
                name="service"
                value={formState.service}
                onChange={handleChange('service')}
                maxLength={WHATSAPP_FIELD_LIMITS.service}
                placeholder="Secure systems / landing page / automation"
              />
            </label>

            <label className="field">
              <span>PROJECT_CONTEXT</span>
              <textarea
                name="message"
                rows={5}
                value={formState.message}
                onChange={handleChange('message')}
                aria-invalid={Boolean(errors.message)}
                maxLength={WHATSAPP_FIELD_LIMITS.message}
                placeholder="Share the goal, current state, and what needs to happen next."
              />
              {errors.message ? <small>{errors.message}</small> : null}
            </label>

            <button className="button-primary button-block" type="submit">
              OPEN WHATSAPP HANDSHAKE
            </button>

            <p className="form-caption">
              Messages are sent to {contact.whatsappDisplay} with the content you
              enter above.
            </p>
          </form>
        </article>
      </div>
    </section>
  )
}
