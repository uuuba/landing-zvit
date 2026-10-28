import type { Endpoint, PayloadRequest } from 'payload'

function clean(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(clean)

  if (value && typeof value === 'object') {
    const output: Record<string, unknown> = {}

    for (const [key, item] of Object.entries(value)) {
      if (key === 'id' || key === 'blockName') continue
      if (key === 'blockType') {
        output.type = item
        continue
      }
      output[key] = clean(item)
    }

    return output
  }

  return value
}

function queryPath(req: PayloadRequest) {
  const raw = req.query?.path
  const value = Array.isArray(raw) ? raw[0] : raw
  return value || '/'
}

export const commonEndpoint: Endpoint = {
  path: '/common',
  method: 'get',
  handler: async (req) => {
    const common = await req.payload.findGlobal({
      slug: 'common',
      depth: 0,
    })

    return Response.json({
      siteName: common.siteName,
      phone: common.phone ?? '',
      menu: (common.menu ?? []).map((item: { label?: string | null; link?: string | null }) => ({
        label: item.label ?? '',
        link: item.link ?? '',
      })),
      cta: common.cta?.label ? { label: common.cta.label, link: common.cta.link } : null,
      footer: {
        text: common.footer?.text ?? '',
        credits: common.footer?.credits ?? '',
      },
    })
  },
}

export const pageEndpoint: Endpoint = {
  path: '/page',
  method: 'get',
  handler: async (req) => {
    const path = queryPath(req)
    const result = await req.payload.find({
      collection: 'pages',
      where: { path: { equals: path } },
      depth: 0,
      limit: 1,
    })

    const page = result.docs[0]

    if (!page) {
      return Response.json({ error: 'Сторінку не знайдено' }, { status: 404 })
    }

    return Response.json({
      path: page.path,
      title: page.title,
      blocks: clean(page.blocks ?? []),
    })
  },
}
