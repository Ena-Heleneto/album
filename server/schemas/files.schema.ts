import { defineMongooseModel } from '#nuxt/mongoose'
import { Types } from 'mongoose'

export interface FileDocument {
  folder_id: Types.ObjectId
  bucket_id: Types.ObjectId
  s3_key: string
  file_name: string
  mime_type: string
  file_size: number
}

export const Files = defineMongooseModel<FileDocument>({
  name: 'Files',
  schema: {
    folder_id: { type: Types.ObjectId, ref: 'Folders', required: true },
    bucket_id: { type: Types.ObjectId, ref: 'Buckets', required: true },
    s3_key: { type: String, required: true, unique: true },
    file_name: { type: String, required: true },
    mime_type: { type: String, required: true },
    file_size: { type: Number, required: true },
  },
  options: {
    timestamps: true,
    minimize: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  },
  hooks(_schema) { },
})
