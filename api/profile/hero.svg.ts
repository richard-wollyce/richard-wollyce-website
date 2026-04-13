import { getProfileSnapshot } from './_lib/github.ts'
import { resolveTheme, svgResponse } from './_lib/response.ts'
import { renderHeroSvg } from '../../src/profile-readme/svg.ts'

export async function GET(request: Request): Promise<Response> {
  const theme = resolveTheme(request)
  const snapshot = await getProfileSnapshot()

  return svgResponse(renderHeroSvg(snapshot, theme), 'hero.svg', 1800)
}
