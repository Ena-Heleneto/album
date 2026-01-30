import type { SignedUrl } from '~~/server/dto/signed.dto'
import mongoose from 'mongoose'

export default defineEventHandler(async (_event) => {
  const _useRuntimeConfig = useRuntimeConfig()
  const { S3 } = _useRuntimeConfig
  const { $log } = useNitroApp()
  const _transaction = new Transaction(mongoose.connection)
  const _signedServices = new SignedServices(_transaction)
  const _bucketsService = new BucketsService(_transaction)

  try {
    const { httpStatusCode } = await _bucketsService.headBucket({ name: S3.S3_BUCKET })

    $log.warn(`cannot access bucket ${S3.S3_BUCKET}, creating...`)
    if (httpStatusCode === 404) { await _bucketsService.createBucket({ name: S3.S3_BUCKET, region: S3.S3_REGION }) }
    $log.success(`access bucket ${S3.S3_BUCKET} successfully`)

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
