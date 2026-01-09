import { randomUUID } from 'node:crypto'

export default defineEventHandler((event) => {
  const requestId = randomUUID()
  const url = getRequestURL(event)
  const method = event.method
  const ua = getRequestHeader(event, 'user-agent')

  event.context.requestId = requestId

  useNitroApp().$log.withMeta({ requestId, method, path: url.pathname, ua }).info('Request initialized')
})
