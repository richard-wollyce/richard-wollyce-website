import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { siteContent } from '../content/siteContent.ts'
import { ServicesSection } from './ServicesSection.tsx'

describe('ServicesSection', () => {
  it('renders service cubes from data', () => {
    render(<ServicesSection services={siteContent.services} />)

    expect(
      screen.getByRole('button', {
        name: /open details for secure systems architecture/i,
      }),
    ).not.toBeNull()
    expect(
      screen.getByRole('button', {
        name: /open details for infrastructure and resilience/i,
      }),
    ).not.toBeNull()
  })

  it('opens and closes the shared service modal', () => {
    render(<ServicesSection services={siteContent.services} />)

    fireEvent.click(
      screen.getByRole('button', {
        name: /open details for automation platforms/i,
      }),
    )

    const dialog = screen.getByRole('dialog')

    expect(dialog).not.toBeNull()
    expect(within(dialog).getByText('Automation Platforms')).not.toBeNull()

    fireEvent.click(screen.getByRole('button', { name: /close service details/i }))

    expect(screen.queryByRole('dialog')).toBeNull()
  })
})
