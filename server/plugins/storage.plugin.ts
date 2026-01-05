// import mongoDriver from 'unstorage/drivers/mongodb'
// import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(() => {
  // const storage = useStorage()

  // // // Dynamically pass in credentials from runtime configuration, or other sources
  // const _redis = redisDriver({
  //   base: 'redis',
  //   host: useRuntimeConfig().redis.host,
  //   port: useRuntimeConfig().redis.port,
  // })

  // const _mongo = mongoDriver({
  //   connectionString: useRuntimeConfig().mongoose.uri,
  //   databaseName: 'app',
  //   collectionName: 'storage',
  // })

  // // // Mount drivers
  // storage.mount('redis', _redis)
  // storage.mount('mongo', _mongo)
})
