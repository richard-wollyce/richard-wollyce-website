import { getProfileSnapshot } from './_lib/github.js'
import { resolveTheme, svgResponse } from './_lib/response.js'
import { renderPulseSvg } from '../../src/profile-readme/svg.js'

export async function GET(request: Request): Promise<Response> {
  const theme = resolveTheme(request)
  const snapshot = await getProfileSnapshot()

  return svgResponse(renderPulseSvg(snapshot, theme), 'pulse.svg', 1200)
}
