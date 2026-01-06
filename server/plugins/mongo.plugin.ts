// import type { Db } from 'mongodb'
// import { MongoClient } from 'mongodb'

// declare module 'nitropack' { interface NitroApp { mongoClient: MongoClient, mongoDb: Db }}

export default defineNitroPlugin(async (_nitroApp) => {
  // const uri = 'mongodb://album:album@127.0.0.1:27017/album?authSource=album'

  // const client = new MongoClient(uri)
  // await client.connect()

  // const db = client.db('album')

  // nitroApp.mongoClient = client
  // nitroApp.mongoDb = db

  // nitroApp.hooks.hook('close', async () => await client.close())
})
