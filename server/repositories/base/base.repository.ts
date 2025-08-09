// server/repositories/base/base.repository.ts
import type { ClientSession, FilterQuery, Model, UpdateQuery } from 'mongoose'
// import type { InferSchemaType } from 'mongoose'

export class BaseRepository<T> {
  protected _Model: Model<T>
  protected _Session?: ClientSession

  constructor(model: Model<T>, session?: ClientSession) {
    if (!model)
      throw new Error('Model is required for BaseRepository')

    // if (!session) {

    // }

    this._Model = model

    this._Session = session
  }

  setSession(session?: ClientSession) {
    this._Session = session
    return this
  }

  async create(data: Partial<T>): Promise<T | null> {
    const doc = new this._Model(data)
    return await doc.save({ session: this._Session })
  }

  async findById(id: string): Promise<T | null> {
    return await this._Model.findById(id).session(this._Session || null).lean()
  }

  async findOne(filter: FilterQuery<T>): Promise<T | null> {
    return await this._Model.findOne(filter).session(this._Session || null).lean()
  }

  async findMany(filter: FilterQuery<T> = {}): Promise<T[]> {
    return await this._Model.find(filter).session(this._Session || null).lean()
  }

  async updateOne(filter: FilterQuery<T>, update: UpdateQuery<T>): Promise<T | null> {
    return await this._Model
      .findOneAndUpdate(filter, update, { new: true })
      .session(this._Session || null)
      .lean()
  }

  async deleteOne(filter: FilterQuery<T>): Promise<void> {
    await this._Model.deleteOne(filter).session(this._Session || null)
  }
}
