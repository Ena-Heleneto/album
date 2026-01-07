import type { FileDocument } from '~~/server/schemas/files.schema'

export class UploadsService {
  constructor(private transaction: Transaction) {
    this.#transaction = transaction
  }

  #transaction: Transaction

  async insertFile(params: FileDocument) {
    return await new Files({ ...params }).save({ session: this.#transaction.current() })
  }
}
