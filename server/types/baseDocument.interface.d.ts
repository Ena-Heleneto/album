import type { Types } from 'mongoose'

export interface Backend_Base_Document {
  remark?: string
  _id?: Types.ObjectId
  deleted: boolean
  createdAt?: Date
  updatedAt?: Date
}
