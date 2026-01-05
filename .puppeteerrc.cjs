const { join } = require('node:path')

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  chrome: { skipDownload: true, },
  firefox: { skipDownload: true, },
  cacheDirectory: join(__dirname, '.cache', 'puppeteer')
}