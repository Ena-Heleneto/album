import type { ConsolaInstance } from 'consola'

export type LogMeta = Record<string, unknown>

export class LogsUtil {
  constructor(private readonly consola: ConsolaInstance, private readonly meta: LogMeta = {}) {}

  withTag(tag: string) {
    return new LogsUtil(this.consola.withTag(tag), this.meta)
  }

  withMeta(meta: LogMeta) {
    return new LogsUtil(this.consola, { ...this.meta, ...meta })
  }

  fatal(message?: unknown, ...args: unknown[]) {
    return this.consola.fatal(this.meta, message, ...args)
  }

  error(message?: unknown, ...args: unknown[]) {
    return this.consola.error(this.meta, message, ...args)
  }

  warn(message?: unknown, ...args: unknown[]) {
    return this.consola.warn(this.meta, message, ...args)
  }

  info(message?: unknown, ...args: unknown[]) {
    return this.consola.info(this.meta, message, ...args)
  }

  success(message?: unknown, ...args: unknown[]) {
    return this.consola.success(this.meta, message, ...args)
  }

  debug(message?: unknown, ...args: unknown[]) {
    return this.consola.debug(this.meta, message, ...args)
  }

  trace(message?: unknown, ...args: unknown[]) {
    return this.consola.trace(this.meta, message, ...args)
  }

  fail(message?: unknown, ...args: unknown[]) {
    return this.consola.fail(this.meta, message, ...args)
  }
}

export function safeJSONStringify(obj: unknown) {
  return JSON.stringify(
    obj,
    (_k, v) => (v instanceof Error ? errorToJSON(v) : v),
    0,
  )
}

export function errorToJSON(err: unknown) {
  if (err instanceof Error) {
    return { name: err.name, message: err.message, stack: err.stack }
  }
  return err
}

export function toInt(v: unknown, fallback: number) {
  const n = Number(v)
  return Number.isFinite(n) ? n : fallback
}
