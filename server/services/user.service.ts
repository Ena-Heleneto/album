import type { InferSchemaType } from 'mongoose'

export class UserService {
  private transaction: Transaction | undefined

  constructor(transaction: Transaction) {
    this.transaction = transaction
  }

  async create(_user: InferSchemaType<typeof User.schema>) {
    const session = this.transaction?.getSession()

    // const { name, host } = _app
    // const existing = await App.findOne({ deleted: false, $or: [{ name, host }] }, null, { session })

    // if (existing)
    //   throw new Error('应用已存在，请检查应用名称或主机域名是否重复')

    const _userModel = new User(_user)
    const result = await _userModel.save({ session })

    return result
  }
}
