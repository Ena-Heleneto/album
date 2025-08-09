import process from 'node:process'

export default {
  public: {
    appVersion: process.env.npm_package_version,
  },
}
