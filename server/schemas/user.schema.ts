import { defineMongooseModel } from '#nuxt/mongoose'

export const User = defineMongooseModel({
  name: 'User',
  schema: { name: { type: String, required: true, unique: true } },
  options: {
    timestamps: true,
    minimize: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  },
  hooks(_schema) { },
})
