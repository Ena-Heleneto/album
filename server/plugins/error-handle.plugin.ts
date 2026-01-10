export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('error', async () => {
    // Will run when nitro is being closed
  })
})
