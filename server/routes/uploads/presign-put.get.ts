export default defineEventHandler(async (_event) => {
  const _useRuntimeConfig = useRuntimeConfig()
  try {
    const { 'time-zone': timeZone } = await getValidatedQuery(_event, PresignPutDto.parse)
    consola.info('Time zone for presign put:', timeZone)
  }
  catch (error) {
    consola.fatal('Failed to get presign put parameters', error)
  }
})
