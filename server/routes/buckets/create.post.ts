import mongoose from 'mongoose'

export default defineEventHandler(async (_event) => {
  const _transaction = new Transaction(mongoose.connection)
  const { $log } = useNitroApp()
  const _bucketsService = new BucketsService(_transaction)
  const param = { name: 'dev', region: 'test' }

  try {
    const { httpStatusCode } = await _bucketsService.HeadBucket({ name: param.name })
    if (httpStatusCode === 200)
      return { httpStatusCode, message: 'Bucket already exists' }
    await _bucketsService.createBucket(param)
    await _bucketsService.insertBucketRecord({ name: param.name, region: param.region })
    await _transaction.commit()
    return { httpStatusCode: 200, message: 'Bucket created successfully' }
  }
  catch (error) {
    $log.fail('Failed to create bucket', error)
    const { httpStatusCode } = await _bucketsService.HeadBucket({ name: param.name })
    if (httpStatusCode === 200)
      _bucketsService.deleteBucket({ name: param.name })
    await _transaction.rollback()
    return { httpStatusCode: 500, message: 'Failed to create bucket' }
  }
  finally {
    await _transaction.end()
  }
})
