import { fileURLToPath } from 'node:url'

export default {
  '&': fileURLToPath(new URL('../server', import.meta.url)),
  '&types': fileURLToPath(new URL('../server/types', import.meta.url))
}
