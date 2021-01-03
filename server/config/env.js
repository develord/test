/** Environement Configuration */
const dotenv = require('dotenv')
const config = require('../../nuxt.config')

config.dev = process.env.NODE_ENV !== 'production'

const path = '.env'
dotenv.config({ path })

module.exports = {
  config,
  dev: config.dev
}
