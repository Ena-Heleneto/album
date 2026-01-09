import { CreateBucketCommand } from '@aws-sdk/client-s3'

export class BucketsService {
  constructor(private transaction: Transaction) {
    this.#transaction = transaction
  }

  #transaction: Transaction

  async create(param: { name: string, region: string }) {
    await useNitroApp().$S3_CLIENT.send(new CreateBucketCommand({ Bucket: param.name }))
  }
}
