// import type { HydratedDocument } from 'mongoose'

// // export function virtualsTransformFun<T>(doc: T, ret: Partial<T>): Partial<T> {
// export function transform<T = { createdAt: Date, updatedAt: Date }>(doc: HydratedDocument<T>, ret: T): T {
//   const { createdAt, updatedAt } = ret

//   const fmt = (d: Date) => (d ? moment(d).format('YYYY-MM-DD HH:mm:ss') : d)

//   if (createdAt)
//     ret.createdAt = fmt(createdAt)
//   if (updatedAt)
//     ret.updatedAt = fmt(updatedAt)

//   return ret
// }
