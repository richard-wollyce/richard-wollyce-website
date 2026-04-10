import { useEffect, useState } from 'react'

function getInitialValue() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getInitialValue)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    onChange()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', onChange)

      return () => {
        mediaQuery.removeEventListener('change', onChange)
      }
    }

    mediaQuery.addListener(onChange)

    return () => {
      mediaQuery.removeListener(onChange)
    }
  }, [])

  return prefersReducedMotion
}
