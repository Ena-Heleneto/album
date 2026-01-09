import type { Presign } from '~~/server/dto/uploads.dto'
// import { useLogger } from '@nuxt/kit'
import mongoose from 'mongoose'

export default defineEventHandler(async (_event) => {
  const _transaction = new Transaction(mongoose.connection)
  const _UploadsService = new UploadsService(_transaction)
  // const _logger = useLogger()

  try {
    await _transaction.start()
    const body = await readValidatedBody<Presign>(_event, PresignDto.parse)
    await _UploadsService.insertFile(body)
    await _transaction.commit()
    return { success: true }
  }
  catch (error) {
    // _logger.fatal('Failed to insert file in presign exnddpoint', error)
    console.error('Failed to insert file in presign endpoint', error)
    await _transaction.rollback()
    return { success: false }
  }
  finally {
    await _transaction.end()
  }
})
