import mongoose from 'mongoose'

export default defineEventHandler(async (_event) => {
  const _transaction = new Transaction(mongoose.connection)

  const _bucketsService = new BucketsService(_transaction)
  try {
    const param = { name: 'my-bucket', region: 'us-east-1' }
    _bucketsService.create(param)
  }
  catch (error) {

  }
})
