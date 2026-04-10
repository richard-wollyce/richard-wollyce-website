import type { ServiceCube as ServiceCubeType } from '../types/content.ts'

type ServiceCubeProps = {
  cube: ServiceCubeType
  isActive: boolean
  onOpen: (cube: ServiceCubeType) => void
}

export function ServiceCube({ cube, isActive, onOpen }: ServiceCubeProps) {
  return (
    <button
      type="button"
      className={`cube-card ${isActive ? 'is-active' : ''}`}
      onClick={() => onOpen(cube)}
      aria-haspopup="dialog"
      aria-expanded={isActive}
      aria-label={`Open details for ${cube.title}`}
    >
      <span className="cube-stage" aria-hidden="true">
        <span className="cube-body">
          {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
            <span key={face} className={`cube-face cube-face-${face}`}>
              {cube.index}
            </span>
          ))}
        </span>
      </span>

      <span className="cube-copy">
        <span className="cube-label">
          {cube.index} // {cube.shortLabel}
        </span>
        <span className="cube-title">{cube.title}</span>
        <span className="cube-teaser">{cube.teaser}</span>
      </span>
    </button>
  )
}
