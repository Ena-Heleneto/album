import type { Backend_Base_Document } from '&types/baseDocument.interface'
import type { Types } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'
import { Schema } from 'mongoose'

interface Backend_User_Auth_Document extends Backend_Base_Document {
  _id?: Types.ObjectId

}

export const UserAuth = defineMongooseModel<Backend_User_Auth_Document>({
  name: 'auth',
  schema: {
    _id: { type: Schema.Types.ObjectId, auto: true },
    remark: { type: String, required: false },
    deleted: { type: Boolean, default: false }
  },
  options: { timestamps: true, id: true },
  hooks(_schema) {
    // 为用户模型应用用户相关的 hooks
    // HookCombiner.forUser<Backend_Menu_User>(_schema)
  }
})
