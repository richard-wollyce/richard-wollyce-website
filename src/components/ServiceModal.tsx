import { useEffect } from 'react'
import type { ServiceCube } from '../types/content.ts'

type ServiceModalProps = {
  cube: ServiceCube | null
  onClose: () => void
}

export function ServiceModal({ cube, onClose }: ServiceModalProps) {
  useEffect(() => {
    if (!cube) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [cube, onClose])

  if (!cube) {
    return null
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="service-modal surface-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`service-modal-title-${cube.id}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <p className="section-label">
            NODE_{cube.index} // {cube.shortLabel}
          </p>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close service details"
          >
            CLOSE
          </button>
        </div>

        <div className="modal-body">
          <h3 id={`service-modal-title-${cube.id}`}>{cube.title}</h3>
          <p className="modal-description">{cube.description}</p>

          <div className="modal-grid">
            <section>
              <p className="modal-kicker">HIGHLIGHTS</p>
              <ul className="modal-list">
                {cube.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="modal-proof surface-panel">
              <p className="modal-kicker">PROOF POINT</p>
              <p>{cube.proof}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
