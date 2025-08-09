import mongoose from 'mongoose'

export default defineNitroPlugin((_nuxtApp) => {
  mongoose.set('debug', true)
})
