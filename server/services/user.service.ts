import type { InferSchemaType } from 'mongoose'

export class UserService {
  private transaction: Transaction | undefined

  constructor(transaction: Transaction) {
    this.transaction = transaction
  }

  async create(_user: InferSchemaType<typeof User.schema>) {
    const session = this.transaction?.getSession()

    const _userModel = new User(_user)
    const result = await _userModel.save({ session })

    return result
  }
}
