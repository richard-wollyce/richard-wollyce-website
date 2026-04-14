import type { ThemeName } from '../../../src/profile-readme/types.js'

export function resolveTheme(request: Request): ThemeName {
  const theme = new URL(request.url).searchParams.get('theme')
  return theme === 'light' ? 'light' : 'dark'
}

export function svgResponse(
  svg: string,
  fileName: string,
  cacheSeconds: number,
): Response {
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': `public, max-age=0, s-maxage=${cacheSeconds}, stale-while-revalidate=86400`,
      'Content-Disposition': `inline; filename="${fileName}"`,
      'Access-Control-Allow-Origin': '*',
      'Cross-Origin-Resource-Policy': 'cross-origin',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
