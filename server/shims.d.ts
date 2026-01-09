// import type { LogsUtil } from './utils/logs.util'

declare module 'h3' {
  interface H3EventContext {
    // $log: LogsUtil
    requestId?: string
  }
}
