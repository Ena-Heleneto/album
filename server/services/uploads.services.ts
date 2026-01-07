export class UploadsService {
  constructor(private transaction: Transaction) {
    this.#transaction = transaction
  }

  #transaction: Transaction

  async insertFile(params: Partial<InstanceType<typeof Files>>) {
    const _file = new Files({ ...params })
    await _file.save({ session: this.#transaction.current() })
    return _file
  }
}
