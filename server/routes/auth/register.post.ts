import mongoose from 'mongoose'

export default defineEventHandler(async (_event) => {
  const body = await readValidatedBody(_event, registerDto.parse)
  // const eventStream = createEventStream(event)

  const _Transaction = new Transaction(mongoose.connection)
  const _UserService = new UserService(_Transaction)
  try {
    await _UserService.create(body)
  }
  catch (error) {
    consola.error('listRole error', error)
    await _Transaction.rollback()
    return { status: 'error', code: 1001, data: null, message: error instanceof Error ? error.message : 'register failed' }
  }
})
