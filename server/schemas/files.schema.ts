import { defineMongooseModel } from '#nuxt/mongoose'

export const Files = defineMongooseModel({
  name: 'Files',
  schema: {
    folder_id: { type: String, required: true },
    bucket_id: { type: String, required: true },
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
