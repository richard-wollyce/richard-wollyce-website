export function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export function formatCompactNumber(value: number | null): string {
  if (value === null) {
    return '--'
  }

  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: value < 100 ? 1 : 0,
  }).format(value)
}

export function formatRelativeDate(value: string | null): string {
  if (!value) {
    return 'sync pending'
  }

  const target = new Date(value)
  const diffMs = Date.now() - target.getTime()

  if (Number.isNaN(diffMs) || diffMs < 0) {
    return 'fresh sync'
  }

  const hours = Math.floor(diffMs / 3_600_000)
  const days = Math.floor(diffMs / 86_400_000)

  if (hours < 1) {
    return 'updated just now'
  }

  if (hours < 24) {
    return `updated ${hours}h ago`
  }

  if (days < 30) {
    return `updated ${days}d ago`
  }

  const months = Math.floor(days / 30)
  return `updated ${months}mo ago`
}

export function wrapText(
  value: string,
  maxCharsPerLine: number,
  maxLines: number,
): string[] {
  const words = value.trim().split(/\s+/)
  const lines: string[] = []
  let current = ''

  for (const word of words) {
    const next = current ? `${current} ${word}` : word

    if (next.length > maxCharsPerLine && current) {
      lines.push(current)
      current = word
    } else {
      current = next
    }

    if (lines.length === maxLines) {
      break
    }
  }

  if (lines.length < maxLines && current) {
    lines.push(current)
  }

  if (lines.length > maxLines) {
    return lines.slice(0, maxLines)
  }

  if (lines.length === maxLines && words.join(' ').length > lines.join(' ').length) {
    const lastIndex = lines.length - 1
    lines[lastIndex] = `${lines[lastIndex].replace(/[.,;:!?-]*$/, '')}...`
  }

  return lines
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
