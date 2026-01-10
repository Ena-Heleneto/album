import mongoose from 'mongoose'

export default defineNitroPlugin(async (_nitroApp) => {
  mongoose.set('debug', true)
})
