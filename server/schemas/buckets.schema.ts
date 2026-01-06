import { defineMongooseModel } from '#nuxt/mongoose'

export const Buckets = defineMongooseModel({
  name: 'Buckets',
  schema: {
    name: { type: String, required: true, unique: true },
    region: { type: String, required: true },
  },
  options: {
    timestamps: true,
    minimize: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  },
  hooks(_schema) { },
})
