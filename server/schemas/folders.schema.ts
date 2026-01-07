import { defineMongooseModel } from '#nuxt/mongoose'

export const Folders = defineMongooseModel({
  name: 'Folders',
  schema: {
    name: { type: String, required: true, unique: true },
    bucket_id: { type: String, required: true },
    parent_folder_id: { type: String, required: true },
    path: { type: String, required: true },
  },
  options: {
    timestamps: true,
    minimize: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  },
  hooks(_schema) { },
})
