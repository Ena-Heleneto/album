import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import moment from 'moment'

export class SignedServices {
  constructor(private transaction: Transaction) {
    this.#transaction = transaction
  }

  #transaction: Transaction

  async getSignedUrl(params: { bucket: string, key: string, contentType: string, expiresInSec?: number }) {
    const { $S3_CLIENT } = useNitroApp()

    const cmd = new PutObjectCommand({ Bucket: params.bucket, Key: params.key, ContentType: params.contentType })
    const url = await getSignedUrl($S3_CLIENT, cmd, {
      expiresIn: params.expiresInSec ?? 60 * 5,
    })
    return url
  }

  async keyGenerator(uuid: string, type: 'orig' | 'thumb' | 'preview' | 'meta', name: string, ext: string) {
    const _useRuntimeConfig = useRuntimeConfig()
    const { S3 } = _useRuntimeConfig
    const now = moment().format('YYYY/MM/DD')
    const shard = uuid.slice(0, 2).toUpperCase()
    const key = `${S3.S3_BIZ}/USE_ID/${now}/${shard}/${uuid}/${type}.${ext ?? ''}`
    return key
  }
}
