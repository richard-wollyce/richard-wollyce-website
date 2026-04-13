import { getProfileSnapshot } from './_lib/github.ts'
import { resolveTheme, svgResponse } from './_lib/response.ts'
import { renderProjectsSvg } from '../../src/profile-readme/svg.ts'

export async function GET(request: Request): Promise<Response> {
  const theme = resolveTheme(request)
  const snapshot = await getProfileSnapshot()

  return svgResponse(renderProjectsSvg(snapshot, theme), 'projects.svg', 3600)
}
