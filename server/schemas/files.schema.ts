import { defineMongooseModel } from '#nuxt/mongoose'
import { ObjectId, Schema, Types } from 'mongoose'

export const Files = defineMongooseModel({
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
