// import { useLogger } from '@nuxt/kit'

export default defineEventHandler(async (_event) => {
  const _useRuntimeConfig = useRuntimeConfig()
  // const _logger = useLogger()
  try {
    // const { 'time-zone': _timeZone } = await getValidatedQuery(_event, PresignPutDto.parse)
    // _logger.log('Time zone for presign put:', timeZone)
    useNitroApp().$log.info('Time zone for presign put:', 1343)
  }
  catch (_error) {
    console.error('Failed to get presign put parameters', _error)
    // _logger.fatal('Failed to get presign put parameters', error)
  }
})
