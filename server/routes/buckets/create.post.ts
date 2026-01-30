export default defineEventHandler(async (_event) => {
  // const _useRuntimeConfig = useRuntimeConfig()
  // const { S3 } = _useRuntimeConfig

  // const _transaction = new Transaction(mongoose.connection)
  // const { $log } = useNitroApp()
  // const _bucketsService = new BucketsService(_transaction)
  // const param = { name: S3.S3_BUCKET, region: 'test' }

  // try {
  //   // const { httpStatusCode } = await _bucketsService.HeadBucket({ name: param.name })
  //   if (httpStatusCode === 200)
  //     return { status: true, message: 'Bucket already exists' }
  //   await _bucketsService.createBucket(param)
  //   await _bucketsService.insertBucketRecord({ name: param.name, region: param.region })
  //   await _transaction.commit()
  //   return { status: true, message: 'Bucket created successfully' }
  // }
  // catch (error) {
  //   $log.fail('Failed to create bucket', error)
  //   // const { httpStatusCode } = await _bucketsService.HeadBucket({ name: param.name })
  //   if (httpStatusCode === 200)
  //     _bucketsService.deleteBucket({ name: param.name })
  //   await _transaction.rollback()
  //   return { status: false, message: 'Bucket creation failed' }
  // }
  // finally {
  //   await _transaction.end()
  // }
})
