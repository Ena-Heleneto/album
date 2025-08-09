import type { Types } from 'mongoose'
import type { Backend_Base_Document } from '~~/server/types/baseDocument.interface'
import { defineMongooseModel } from '#nuxt/mongoose'
import { Schema } from 'mongoose'

interface Backend_User_Document extends Backend_Base_Document {
  _id?: Types.ObjectId
  name: string
  remark?: string
  phone?: string
  password: string
  email?: boolean
}

export const User = defineMongooseModel<Backend_User_Document>({
  name: 'user',
  schema: {
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String, unique: true, required: true, index: true },
    remark: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: true },
    deleted: { type: Boolean, default: false }
  },
  options: { timestamps: true },
  hooks(_schema) {
    // 为用户模型应用用户相关的 hooks
    // HookCombiner.forUser<Backend_Menu_User>(_schema)
  }
})
