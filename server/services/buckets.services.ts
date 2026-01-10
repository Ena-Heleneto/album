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
      if (httpStatusCode !== 200)
        throw new Error(`Head bucket ${param.name} failed, maybe not exist`)
      return { httpStatusCode }
    }
    catch {
      return { httpStatusCode: 404 }
    }
  }

  async createBucket(param: { name: string, region: string }) {
    const { $S3_CLIENT } = useNitroApp()

    const { $metadata } = await $S3_CLIENT.send(new CreateBucketCommand({ Bucket: param.name }))
    const { httpStatusCode } = $metadata
    if (httpStatusCode !== 200)
      throw new Error(`Create bucket ${param.name} failed`)
  }

  async deleteBucket(param: { name: string }) {
    const { $S3_CLIENT } = useNitroApp()
    await $S3_CLIENT.send(new DeleteBucketCommand({ Bucket: param.name }))
  }

  async insertBucketRecord(param: { name: string, region: string }) {
    return await new Buckets({ ...param }).save({ session: this.#transaction.current() })
  }
}
