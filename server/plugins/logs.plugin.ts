import type { LogObject } from 'consola'
import process from 'node:process'
import { createConsola } from 'consola'

declare module 'nitropack' { interface NitroApp { $log: LogsUtil }}
export default defineNitroPlugin(async (_nitroApp) => {
  const { LOG } = useRuntimeConfig()
  const { LOG_JSON, LOG_LEVEL, LOG_BACKEND_TAG: TAG } = LOG

  const _LOG_LEVEL = Number(LOG_LEVEL)
  const _LOG_JSON = LOG_JSON === 'true'

  const _consola = createConsola(
    _LOG_JSON
      ? {
          level: _LOG_LEVEL,
          reporters: [{ log: (logObj: LogObject) => process.stdout.write(`${safeJSONStringify(logObj)}\n`) }],
        }
      : { level: _LOG_LEVEL },
  )

  const base = new LogsUtil(_consola)
  const _logger = base.withTag(TAG)
  _nitroApp.$log = _logger
  _logger.info('Logger initialized', { level: _LOG_LEVEL, json: _LOG_JSON })
})
