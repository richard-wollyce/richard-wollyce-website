import { getProfileSnapshot } from './_lib/github'
import { resolveTheme, svgResponse } from './_lib/response'
import { renderPulseSvg } from '../../src/profile-readme/svg'

export async function GET(request: Request): Promise<Response> {
  const theme = resolveTheme(request)
  const snapshot = await getProfileSnapshot()

  return svgResponse(renderPulseSvg(snapshot, theme), 'pulse.svg', 1200)
}
