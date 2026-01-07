import type { Presign } from '~~/server/dto/uploads.dto'
import { connection } from 'mongoose'

export default defineEventHandler(async (_event) => {
  const _transaction = new Transaction(connection)
  const _UploadsService = new UploadsService(_transaction)

  try {
    await _transaction.start()
    const body = await readValidatedBody<Presign>(_event, PresignDto.parse)

    await _UploadsService.insertFile(body)
    await _transaction.commit()
  }
  catch (error) {
    consola.fatal('Failed to insert file in presign endpoint', error)
    await _transaction.rollback()

    return { success: false }
  }
  finally {
    await _transaction.end()
  }
})
