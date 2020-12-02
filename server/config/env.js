/** Environement Configuration */
const config = require('../../nuxt.config')

config.dev = process.env.NODE_ENV !== 'production'

module.exports = {
  config,
  dev: config.dev
}
