export default defineEventHandler(async (_event) => {
  // consola.info('Presign upload endpoint called')

  // // const storage = useStorage()

  // // const key = `test:${Date.now()}`

  // await useStorage('mongodb:t1').setItem(`upload:${Date.now()}`, {
  // message: '12345',
  // createdAt: new Date().toISOString(),
  // }, {
  //   collectionName: 't2',
  // })

  // return { success: true }

  // const { mongoDb } = useNitroApp()
  // const collection = mongoDb.collection('unstorage')

  // const doc = await collection.insertOne({ message: '12345', createdAt: new Date().toISOString() })
  // consola.info('Presign upload endpoint called, doc:', doc)
  // return { doc }
})
