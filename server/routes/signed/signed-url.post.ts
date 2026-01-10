import type { SignedUrl } from '~~/server/dto/signed.dto'
import mongoose from 'mongoose'

export default defineEventHandler(async (_event) => {
  const _useRuntimeConfig = useRuntimeConfig()
  const { S3 } = _useRuntimeConfig
  const { $log } = useNitroApp()
  const _transaction = new Transaction(mongoose.connection)
  const _signedServices = new SignedServices(_transaction)

  try {
    const { contentType, expiresInSec, fileExt, fileName } = await readValidatedBody<SignedUrl>(_event, SignedUrlDto.parse)
    const key = await _signedServices.keyGenerator(fileName, 'orig', fileName, fileExt)
    const url = await _signedServices.getSignedUrl({ bucket: S3.S3_BUCKET, key, contentType, expiresInSec })
    return { status: true, code: 2000, data: { url } }
  }
  catch (error) {
    $log.fail('Failed to generate signed URL', error)
    return { status: false, code: 5000, data: 'Failed to generate signed URL' }
  }
})
