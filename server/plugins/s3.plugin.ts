import { S3Client } from '@aws-sdk/client-s3'
import { NodeHttpHandler } from '@smithy/node-http-handler'

declare module 'nitropack' { interface NitroApp { $S3_CLIENT: S3Client }}

export default defineNitroPlugin(async (_nitroApp) => {
  const _useRuntimeConfig = useRuntimeConfig()
  const { S3 } = _useRuntimeConfig

  const s3 = new S3Client({
    endpoint: S3.S3_ENDPOINT,
    region: 'us-east-1',
    credentials: { accessKeyId: S3.S3_ACCESS_KEY_ID, secretAccessKey: S3.S3_SECRET_ACCESS_KEY },
    forcePathStyle: true,
    requestHandler: new NodeHttpHandler({ connectionTimeout: 3000, socketTimeout: 5000 }),
  })
  _nitroApp.$S3_CLIENT = s3
})
