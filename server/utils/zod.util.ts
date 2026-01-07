import { Schema, Types } from 'mongoose'
// import { Types } from 'mongoose'
import { z } from 'zod'

export const objectIdCustom = z.custom<Types.ObjectId>((val: unknown) => {
  if (typeof val !== 'string')
    throw new TypeError('必须传入字符串格式的 ObjectId')

  if (!Types.ObjectId.isValid(val))
    throw new Error('无效的 ObjectId 字符串')

  return new Schema.Types.ObjectId(val)
})
