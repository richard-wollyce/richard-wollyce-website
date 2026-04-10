import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts'

const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}01'

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) {
      return
    }

    let animationFrame = 0
    let drops: number[] = []

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const columns = Math.floor(window.innerWidth / 18)
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * window.innerHeight),
      )
    }

    const drawFrame = () => {
      context.fillStyle = 'rgba(14, 14, 14, 0.08)'
      context.fillRect(0, 0, window.innerWidth, window.innerHeight)
      context.fillStyle = 'rgba(0, 255, 65, 0.35)'
      context.font = '14px JetBrains Mono, monospace'

      drops.forEach((drop, index) => {
        const character = glyphs[Math.floor(Math.random() * glyphs.length)]
        const x = index * 18
        const y = drop * 18

        context.fillText(character, x, y)

        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[index] = 0
        } else {
          drops[index] += 1
        }
      })
    }

    const loop = () => {
      drawFrame()
      animationFrame = window.requestAnimationFrame(loop)
    }

    resize()
    drawFrame()

    if (!prefersReducedMotion) {
      animationFrame = window.requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [prefersReducedMotion])

  return <canvas ref={canvasRef} className="matrix-layer" aria-hidden="true" />
}
