import { CreateBucketCommand, DeleteBucketCommand, HeadBucketCommand } from '@aws-sdk/client-s3'

export class BucketsService {
  constructor(private transaction: Transaction) {
    this.#transaction = transaction
  }

  #transaction: Transaction

  async HeadBucket(param: { name: string }) {
    const { $S3_CLIENT } = useNitroApp()

    try {
      const _headBucket = await $S3_CLIENT.send(new HeadBucketCommand({ Bucket: param.name }))
      const { httpStatusCode } = _headBucket.$metadata
      return { httpStatusCode, status: 'not found', flag: true }
    }
    catch {
      return { httpStatusCode: 404, status: 'not found', flag: false }
    }
  }

  async createBucket(param: { name: string, region: string }) {
    const { $S3_CLIENT, $log } = useNitroApp()

    const res = await $S3_CLIENT.send(new CreateBucketCommand({ Bucket: param.name }))
    $log.info('S3 CreateBucket response', res)
  }

  async deleteBucket(param: { name: string }) {
    const { $S3_CLIENT } = useNitroApp()
    await $S3_CLIENT.send(new DeleteBucketCommand({ Bucket: param.name }))
  }

  async insertBucketRecord(param: { name: string, region: string }) {
    return await new Buckets({ ...param }).save({ session: this.#transaction.current() })
  }
}
