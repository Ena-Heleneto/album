import type mongoose from 'mongoose'

export class Transaction {
  private connection: mongoose.Connection
  private session: mongoose.mongo.ClientSession | undefined = undefined

  constructor(connection: mongoose.Connection) {
    this.connection = connection
  }

  async startTransaction(): Promise<void> {
    if (this.session) {
      throw new Error('Transaction already started on this instance')
    }
    this.session = await this.connection.startSession()
    this.session.startTransaction()
  }

  getSession(): mongoose.mongo.ClientSession | undefined {
    return this.session
  }

  async commit(): Promise<void> {
    if (this.session) {
      await this.session.commitTransaction()
      await this.session.endSession()
      this.session = undefined
    }
  }

  async rollback(): Promise<void> {
    if (this.session) {
      await this.session.abortTransaction()
      await this.session.endSession()
      this.session = undefined
    }
  }
}
