import process from 'node:process'

const _runtime = {
  MONGO: {
    MONGOOSE_URI: process.env.NUXT_MONGOOSE_URI ?? 'mongodb://album:album@127.0.0.1:27017/album?authSource=album',
  },
  S3: {
    S3_ENDPOINT: process.env.NUXT_S3_ENDPOINT ?? 'http://127.0.0.1:9000',
    S3_ACCESS_KEY_ID: process.env.NUXT_S3_ACCESS_KEY_ID ?? '5qRTJWQ6ov4fCzeShAu8',
    S3_SECRET_ACCESS_KEY: process.env.NUXT_S3_SECRET_ACCESS_KEY ?? 'TU1ujmq4OgwL8AxH0d2EC9nr5DcVFWIMRKlQYzvs',
  },
  LOG: {
    LOG_JSON: process.env.NUXT_LOG_JSON ?? 'false',
    LOG_LEVEL: process.env.NUXT_LOG_LEVEL ?? '3',
    LOG_BACKEND_TAG: process.env.NUXT_LOG_BACKEND_TAG ?? 'nitro',
    LOG_FRONTEND_TAG: process.env.NUXT_LOG_FRONTEND_TAG ?? 'nuxt',
  },
}

export default _runtime
export { _runtime as runtimeConfig }
